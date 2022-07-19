import { Request, Response } from 'express';
import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

type ClassScheduleType = {
  week_day: string;
  from: string;
  to: string;
};

type Filters = {
  week_day: string;
  subject: string;
  time: string;
};

class ClassController {
  async index(req: Request, res: Response) {
    const filters = req.query as Filters;

    if (!filters.week_day || !filters.subject || !filters.time) {
      return res.status(400).json({
        error: 'Missing filters to search classes',
      });
    }

    const timeInMinutes = convertHourToMinutes(filters.time);

    try {
      const classes = await db('CLASSES')
        .whereExists(function () {
          // Subquery
          this.select('*')
            .from('CLASS_SCHEDULE')
            .whereRaw('"CLASS_SCHEDULE"."class_id" = "CLASSES"."id"')
            .whereRaw('"CLASS_SCHEDULE"."week_day" = ?', [
              Number(filters.week_day),
            ])
            .whereRaw('"CLASS_SCHEDULE"."from" <= ?', [timeInMinutes])
            .whereRaw('"CLASS_SCHEDULE"."to" > ?', [timeInMinutes]);
        })
        .where('CLASSES.subject', '=', filters.subject)
        .join('USERS', 'CLASSES.user_id', '=', 'USERS.id')
        .select(['CLASSES.*', 'USERS.*']);
      return res.json(classes);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: 'Unexpected error while listing classes' });
    }
  }

  async create(req: Request, res: Response) {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } =
      req.body;

    const trx = await db.transaction();

    try {
      const insertedUser: { id: number }[] = await trx('USERS')
        .returning('id')
        .insert({
          name,
          bio,
          avatar,
          whatsapp,
        });

      // It returns an array of inserted users, but we just need the first one
      console.log(insertedUser[0].id);

      const insertedClass: { id: number }[] = await trx('CLASSES')
        .returning('id')
        .insert({
          subject,
          cost,
          user_id: insertedUser[0].id,
        });

      const classesSchedules = schedule.map(
        (classSchedule: ClassScheduleType) => {
          return {
            week_day: classSchedule.week_day,
            from: convertHourToMinutes(classSchedule.from),
            to: convertHourToMinutes(classSchedule.to),
            class_id: insertedClass[0].id,
          };
        }
      );

      await trx('CLASS_SCHEDULE').insert(classesSchedules);

      await trx.commit();
      return res.status(201).json(insertedClass[0]);
    } catch (error) {
      console.log(error);
      await trx.rollback();
      return res.status(400).json({
        message: 'Unexpected error while creating new class',
      });
    }
  }
}

export default new ClassController();

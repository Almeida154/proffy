import { Request, Response } from 'express';
import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

type ClassScheduleType = {
  week_day: string;
  from: string;
  to: string;
};

class classController {
  async create(req: Request, res: Response) {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } =
      req.body;

    const insertedUser: { id: number }[] = await db('USERS')
      .returning('id')
      .insert({
        name,
        bio,
        avatar,
        whatsapp,
      });

    console.log(insertedUser[0].id);

    const insertedClass: { id: number }[] = await db('CLASSES')
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

    await db('CLASS_SCHEDULE').insert(classesSchedules);

    return res.json({});
  }
}

export default new classController();

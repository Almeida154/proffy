function checkEmptyFields(fields: string[]) {
  return fields.every((field) => field !== '');
}

export default checkEmptyFields;

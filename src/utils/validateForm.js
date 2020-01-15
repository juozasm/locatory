export default formData => {
  return formData
    .map(formItem => {
      const { name, value, validationOptions = [] } = formItem;
      const errors = validationOptions
        .map(validationOption =>
          checkValidation(value, validationOption),
        )
        .filter(error => error);

      return (
        errors.length > 0 && {
          name,
          errors,
        }
      );
    })
    .reduce(
      (prev, curr) => ({
        ...prev,
        ...(curr.name &&
          curr.errors && {
            [curr.name]: curr.errors,
          }),
      }),
      {},
    );
};

function checkValidation(value, validationOption) {
  switch (validationOption) {
    case 'required':
      return required(value);
    default:
      return false;
  }
}

function required(value) {
  if (value === undefined || value === null || value === '') {
    return 'Field is required';
  }
}

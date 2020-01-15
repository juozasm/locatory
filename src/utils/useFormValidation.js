import { useState, useCallback } from 'react';
import validateForm from './validateForm';
import isEmpty from 'lodash/isEmpty';
import omit from 'lodash/omit';

export default function useFormValidation() {
  const [failedValidations, setFailedValidations] = useState({});

  const checkIsFormValid = useCallback(dataToValidate => {
    const failed = validateForm(dataToValidate);
    if (!isEmpty(failed)) {
      setFailedValidations(failed);
      return false;
    } else {
      return true;
    }
  }, []);
  const getErrors = useCallback(name => failedValidations[name], [
    failedValidations,
  ]);
  const omitError = useCallback(
    name =>
      failedValidations[name] &&
      setFailedValidations(omit(failedValidations, name)),
    [failedValidations],
  );

  return {
    getErrors,
    checkIsFormValid,
    omitError,
  };
}

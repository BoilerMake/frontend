export function hasError(errors = {}, field) {
  return field in errors;
}

export function errorText(errors = {}, field) {
  if (!(field in errors)) return false;

  return errors[field][0];
}

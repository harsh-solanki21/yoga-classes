export default function validateInfo(values) {
  let errors = {}

  if (!values.name.trim()) {
    errors.name = 'Name required'
  }

  if (!values.age) {
    errors.age = 'Age required'
  } else if (values.age < 18 || values.age > 65) {
    errors.age = 'Invalid Age'
  }

  if (!values.batch) {
    errors.batch = 'Batch is required'
  }

  if (!values.fees) {
    errors.fees = 'Fees required'
  } else if (values.fees !== '500') {
    errors.fees = 'Fees has to be 500'
  }
  return errors
}

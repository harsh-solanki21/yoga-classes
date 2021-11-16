import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const useForm = (callback, validate) => {
  const history = useHistory()
  const [values, setValues] = useState({
    name: '',
    age: '',
    batch: '',
    fees: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)

    const response = await fetch('http://127.0.0.1:5000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...values,
      }),
    })

    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      history.push('/success')
    }
  })

  return { handleChange, handleSubmit, values, errors }
}

export default useForm

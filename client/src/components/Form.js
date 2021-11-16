import React from 'react'
import useForm from './useForm'
import validate from './Validate'
import './Form.css'

const Form = (submitForm) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  )
  return (
    <div>
      <form className='container' onSubmit={handleSubmit} noValidate>
        <h1>Yoga Classes</h1>
        <h5>We add years to your life</h5>
        <div className='form'>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              className='field-long'
              placeholder='Enter Your Name'
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <li>{errors.name}</li>}
          </div>
          <div>
            <label htmlFor='age'>Age</label>
            <input
              type='text'
              name='age'
              className='field-long'
              placeholder='Enter Age'
              value={values.age}
              onChange={handleChange}
            />
            {errors.age && <li>{errors.age}</li>}
          </div>
          <li hidden>Age ahould be between 18 to 65</li>
          <div>
            <label htmlFor='batch'>Choose Batch</label>
            <select
              defaultValue={'DEFAULT'}
              name='batch'
              className='field-long'
              onChange={handleChange}
            >
              <option value='DEFAULT' disabled>
                Select Batch
              </option>
              <option value='6-7 AM'>6-7 AM</option>
              <option value='7-8 AM'>7-8 AM</option>
              <option value='8-9 AM'>8-9 AM</option>
              <option value='5-6 PM'>5-6 PM</option>
            </select>
          </div>
          <div>
            <label htmlFor='fees'>Fees</label>
            <input
              type='text'
              name='fees'
              className='field-long'
              placeholder='Pay Fees Here'
              value={values.fees}
              onChange={handleChange}
            />
            {errors.fees && <li>{errors.fees}</li>}
          </div>
          <li hidden>You have to pay 500</li>
          <div>
            <input type='submit' value='Submit' />
          </div>
        </div>
        <br />
      </form>
    </div>
  )
}

export default Form

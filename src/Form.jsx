import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Form = ({ addItem }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) {
      toast.error('please! provide value')
      return
    }
    addItem(value)
    setValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  )
}

export default Form

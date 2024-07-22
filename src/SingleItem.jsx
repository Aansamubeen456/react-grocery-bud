import React, { useState } from 'react'

const SingleItem = ({ id, name, completed, removeItem, editItem }) => {
  return (
    <article className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          editItem(id)
        }}
      />

      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: completed && `line-through`,
        }}
      >
        {name}
      </p>
      <button
        type="button"
        className="remove-btn btn"
        onClick={() => removeItem(id)}
      >
        delete
      </button>
    </article>
  )
}

export default SingleItem

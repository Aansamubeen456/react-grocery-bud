import { useState } from 'react'
import Form from './Form'
import { nanoid } from 'nanoid'
import ItemsList from './ItemsList'
import { ToastContainer, toast } from 'react-toastify'

const setLocalStorage = (item) => {
  localStorage.setItem('items', JSON.stringify(item))
}
const getLocalStorage = () => {
  let items = localStorage.getItem('items')
  if (items) {
    items = JSON.parse(localStorage.getItem('items'))
  } else {
    items = []
  }

  return items
}
const App = () => {
  const [items, setItems] = useState(getLocalStorage())

  const addItem = (item) => {
    const itemObj = {
      id: nanoid(),
      name: item,
      completed: false,
    }
    const newItems = [...items, itemObj]
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('item added to list')
  }
  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('item removed from list')
  }
  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed }
        return newItem
      }
      return item
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <ItemsList items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  )
}

export default App

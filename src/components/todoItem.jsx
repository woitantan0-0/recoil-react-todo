import React from "react"
import { useRecoilState } from "recoil"
import { todoState } from "../atoms/Todo"

const TodoItem = ({ todoItem }) => {
  const [todoItems, setTodo] = useRecoilState(todoState)

  const handleCheckChange = () => {
    const newItems = todoItems.map(item => {
      if (item.key === todoItem.key) {
        return { key: item.key, text: item.text, done: !item.done }
      } else {
        return item
      }
    })
    setTodo(newItems)
  }

  const handleDeleteClick = () => {
    const restItems = todoItems.filter(item => item.key !== todoItem.key)
    setTodo(restItems)
  }

  return (
    <label className="panel-block todoItem">
      <input
        type="checkbox"
        checked={todoItem.done}
        onChange={handleCheckChange}
      />
      <span className={todoItem.done ? "has-text-grey-light" : ""}>
        {todoItem.text}
      </span>
      <button className="delete-btn" onClick={handleDeleteClick}>
        Delete
      </button>
    </label>
  )
}

export default TodoItem

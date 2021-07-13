import React from "react"
import { useRecoilValue } from "recoil"
import { todoState, filterState } from "../atoms/Todo"
import TodoItem from "./todoItem"
import Input from "./input"
import Filter from "./filter"

const Todo = () => {
  const todoItems = useRecoilValue(todoState)
  const filter = useRecoilValue(filterState)

  // 表示するアイテムを取得する
  const dispTodoItems = todoItems.filter(item => {
    if (filter === "ALL") return true
    if (filter === "TODO") return !item.done
    if (filter === "DONE") return item.done
    return true
  })

  return (
    <div className="panel">
      <div className="panel-heading">✡️ React × Recoil Todo</div>
      <Input />
      <Filter value={filter} />
      {dispTodoItems.map(item => (
        <TodoItem key={item.key} todoItem={item} />
      ))}
      <div className="panel-block">{dispTodoItems.length} items</div>
    </div>
  )
}

export default Todo

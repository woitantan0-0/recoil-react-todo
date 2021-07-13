import React from "react"
import { useRecoilState } from "recoil"
import { todoState } from "../atoms/Todo"

const getKey = () => Math.random().toString(32).substring(2)
const APP_KEY = "appTodoList"

const Input = () => {
  const [title, setInput] = React.useState("")

  const [todoItems, setTodoItems] = useRecoilState(todoState)

  // api接続 => 外部接続しても良い
  React.useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(todoItems))
  }, [todoItems])

  const handleTextChage = e => setInput(e.target.value)

  const handleEnter = e => {
    if (e.keyCode === 13 && title !== "") {
      setTodoItems(t => {
        return [...t, { key: getKey(), text: title, done: false }]
      })
      setInput("")
    }
  }

  return (
    <div className="panel-block">
      <input
        className="input"
        type="text"
        maxLength={100}
        value={title}
        placeholder="Enter or add"
        onChange={handleTextChage}
        onKeyDown={handleEnter}
      />
    </div>
  )
}

export default Input

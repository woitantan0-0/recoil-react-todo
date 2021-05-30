import React from "react"
import { useSetRecoilState } from "recoil"
import { todoState } from "../atoms/Todo"

const getKey = () => Math.random().toString(32).substring(2)

const Input = () => {
  const [title, setInput] = React.useState("")

  const setTodos = useSetRecoilState(todoState)

  const handleTextChage = e => setInput(e.target.value)

  const handleEnter = e => {
    // 日本語とか入力したら2回打ち込まれるバグあり
    if (e.keyCode === 13 && title !== "") {
      setTodos(t => {
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

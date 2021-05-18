import React from "react"

const Input = ({ onAdd }) => {
  const [val, setInput] = React.useState("")

  const handleTextChage = e => setInput(e.target.value)

  const handleEnter = e => {
    if (e.keyCode === 13 && val !== "") {
      onAdd(val)
      setInput("")
    }
  }

  return (
    <div className="panel-block">
      <input
        className="input"
        type="text"
        value={val}
        placeholder="Enter or add"
        onChange={handleTextChage}
        onKeyDown={handleEnter}
      />
    </div>
  )
}

export default Input

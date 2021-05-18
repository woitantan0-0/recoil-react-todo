import React from "react"

const Filter = ({ value, onChangeFilter }) => {
  const handleClickFilter = (key, e) => {
    // ↓リンクに飛ばないようにするためのやつかな？
    e.preventDefault()
    onChangeFilter(key)
  }

  return (
    <div className="panel-tabs">
      <a
        href="#"
        onClick={handleClickFilter.bind(null, "ALL")}
        className={value === "ALL" ? "is-active" : ""}
      >
        ALL
      </a>
      <a
        href="#"
        onClick={handleClickFilter.bind(null, "TODO")}
        className={value === "TODO" ? "is-active" : ""}
      >
        ToDo
      </a>
      <a
        href="#"
        onClick={handleClickFilter.bind(null, "DONE")}
        className={value === "DONE" ? "is-active" : ""}
      >
        Done
      </a>
    </div>
  )
}

export default Filter

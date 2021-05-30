import React from "react"
import { useSetRecoilState } from "recoil"
import { filterState } from "../atoms/Todo"

const Filter = filter => {
  const setFilter = useSetRecoilState(filterState)

  const handleClickFilter = (key, e) => {
    // ↓リンクに飛ばないようにするためのやつ？
    e.preventDefault()
    setFilter(key)
  }

  return (
    <div className="panel-tabs">
      <a
        href="#!"
        onClick={handleClickFilter.bind(null, "ALL")}
        className={filter.value === "ALL" ? "is-active" : ""}
      >
        ALL
      </a>
      <a
        href="#!"
        onClick={handleClickFilter.bind(null, "TODO")}
        className={filter.value === "TODO" ? "is-active" : ""}
      >
        ToDo
      </a>
      <a
        href="#!"
        onClick={handleClickFilter.bind(null, "DONE")}
        className={filter.value === "DONE" ? "is-active" : ""}
      >
        Done
      </a>
    </div>
  )
}

export default Filter

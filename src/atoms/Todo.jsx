import { atom } from "recoil"

const APP_KEY = "appTodoList"

const appState = localStorage.getItem(APP_KEY)

export const todoState = atom({
  key: "todoItems",
  default: appState ? JSON.parse(appState) : [],
})

export const filterState = atom({
  key: "filter",
  default: "ALL",
})

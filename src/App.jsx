import "./App.css"
import Todo from "./components/todo.jsx"
import { RecoilRoot } from "recoil"

const App = () => {
  return (
    <RecoilRoot>
      <div className="App is-fluid container">
        <Todo />
      </div>
    </RecoilRoot>
  )
}

export default App

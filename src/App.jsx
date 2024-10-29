import TodoList from "./components/TodoList"

function App() {

  return (
    <main>
      <div className="bg-white container my-8 mx-auto p-10 rounded">
          <h1 className="text-3xl font-bold underline">TodoList</h1>
          <TodoList />
      </div>
    </main>
  )
}

export default App

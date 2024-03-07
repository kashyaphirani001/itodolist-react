import "./App.css";
import TodoList from "./component/Todolist";

function App() {

  return (
    <>
      <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded shadow p-4 w-[30rem]">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <TodoList/>
      </div>
    </div>
    </>
  );
}

export default App;

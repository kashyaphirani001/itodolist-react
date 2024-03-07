import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const editTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
    setEditIndex(null);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditSave = (index) => {
    if (editText.trim() !== '') {
      editTodo(index, editText);
      setEditText('');
    }
  };

  const handleEditCancel = () => {
    setEditIndex(null);
    setEditText('');
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <input
        type="text"
        className="border border-gray-300 p-2 rounded w-full"
        placeholder="Add a new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={addTodo}
      >
        Add Todo
      </button>
      <ul className="mt-4">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`flex justify-between py-2 ${
              todo.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(index)}
              className="mr-2"
            />
            {editIndex === index ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={editText}
                  onChange={handleEditChange}
                  className="border border-gray-300 p-1 rounded mr-2"
                />
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                  onClick={() => handleEditSave(index)}
                >
                  Save
                </button>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"
                  onClick={handleEditCancel}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <span className='flex-1'>{todo.text}</span>
                <div className='pl-2 basis-24'>
                  <button
                    className="text-blue-600 hover:text-blue-800 mr-2"
                    onClick={() => setEditIndex(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => deleteTodo(index)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

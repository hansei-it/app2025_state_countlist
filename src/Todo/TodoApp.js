import React, { useState, useEffect, useRef } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const nextId = useRef(201);

  // 1. READ: 목록 가져오기
  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=15');
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
      setLoading(false);
    };
    fetchTodos();
  }, []);

  // 2. CREATE: 추가하기
  const onAddTodo = async () => {
    if (!text) return;
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({ title: text, completed: false, userId: 1 }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });
      const data = await response.json();
      console.log('추가 Todo :', data);
      const newTodo = { ...data, id: nextId.current++ };
      setTodos([newTodo, ...todos]);
      setText('');
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  // 3. UPDATE: 완료 상태 토글
  const onToggleTodo = async (id) => {
    const targetTodo = todos.find(todo => todo.id === id);
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ completed: !targetTodo.completed }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });
      console.log('업데이트 Todo :', {...targetTodo, completed: !targetTodo.completed });
      setTodos(todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ));
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  // 4. DELETE: 삭제하기
  const onDeleteTodo = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
      });
      console.log('삭제 Todo ID :', id);

      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Todo List (CRUD)</h2>

      {/* 입력 영역 */}
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="할 일을 입력하세요"
          style={{ marginRight: '5px', padding: '5px' }}
        />
        <button onClick={onAddTodo}>추가</button>
      </div>

      {/* 리스트 영역 */}
      {loading ? <p>로딩 중...</p> : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id} style={{ marginBottom: '10px' }}>
              ID : {todo.id} , title : 
              <span 
                onClick={() => onToggleTodo(todo.id)}
                style={{ 
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  cursor: 'pointer',
                  marginRight: '10px'
                }}
              >
                {todo.title}
              </span>
              <button onClick={() => onDeleteTodo(todo.id)}>삭제</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoApp;
import React, { useState, useEffect } from 'react';

function TodoDetail() {
  const [todoId, setTodoId] = useState('');
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [message, setMessage] = useState('');

  // 1. READ: 특정 ID의 Todo 조회
  const fetchTodo = async () => {
    if (!todoId) return;
    setLoading(true);
    setTodo(null);
    setMessage('');
    
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
      if (!response.ok) {
        throw new Error('Todo not found');
      }
      const data = await response.json();
      setTodo(data);
      setEditTitle(data.title);
    } catch (error) {
      console.error("Error fetching todo:", error);
      setMessage('Todo를 찾을 수 없습니다.');
    }
    setLoading(false);
  };

  // 2. UPDATE: 내용 수정
  const onUpdateTodo = async () => {
    if (!todo) return;
    
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          title: editTitle,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      
      setTodo({ ...todo, title: editTitle });
      setMessage('수정되었습니다.');
    } catch (error) {
      console.error("Error updating todo:", error);
      setMessage('수정 중 오류가 발생했습니다.');
    }
  };

  // 3. DELETE: 삭제
  const onDeleteTodo = async () => {
    if (!todo) return;

    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
        method: 'DELETE',
      });
      setTodo(null);
      setTodoId('');
      setMessage('삭제되었습니다.');
    } catch (error) {
      console.error("Error deleting todo:", error);
      setMessage('삭제 중 오류가 발생했습니다.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Todo 상세 조회 (CRUD)</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="number" 
          value={todoId} 
          onChange={(e) => setTodoId(e.target.value)} 
          placeholder="Todo ID 입력"
          style={{ marginRight: '5px', padding: '5px' }}
        />
        <button onClick={fetchTodo}>조회</button>
      </div>

      {loading && <p>로딩 중...</p>}
      {message && <p style={{ color: 'red' }}>{message}</p>}

      {todo && (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
          <p><strong>ID:</strong> {todo.id}</p>
          <p><strong>User ID:</strong> {todo.userId}</p>
          <p><strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}</p>
          
          <div style={{ marginTop: '10px' }}>
            <label><strong>Title: </strong></label>
            <input 
              type="text" 
              value={editTitle} 
              onChange={(e) => setEditTitle(e.target.value)}
              style={{ width: '70%', padding: '5px', marginRight: '5px' }}
            />
          </div>

          <div style={{ marginTop: '20px' }}>
            <button onClick={onUpdateTodo} style={{ marginRight: '5px' }}>수정 저장</button>
            <button onClick={onDeleteTodo} style={{ backgroundColor: '#cccccc' }}>삭제</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoDetail;
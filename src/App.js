import {useReducer, useRef} from 'react';
import CountInput from './CountInput';
import CountList from './CountList';
import Lifecycle from './Lifecycle/LifecycleApp';
import './App.css'; // CSS 파일 import

function reducer(state, action) {
  switch(action.type) {
    case 'ADD':
      return [...state, action.item];
    case 'UPDATE':
      return state.map((v)=> v.id===action.item.id ? action.item: v);
    case 'DELETE':
      return state.filter((v)=> v.id !== action.item.id);
    default:
      return state;
  }
}

function getRandColor() {
  return '#'+Math.floor(Math.random()*0xFFFFFF).toString(16);
}

function App() {
  const [countState, dispatch] = useReducer(reducer, [
    {num:10, color:'#FF00F0', id:1},
    {num:13, color:'#F0FEA0', id:2}
  ]);
  const countRef = useRef(2);

  const onAddList = (number)=> {
    dispatch({type:'ADD', item:{num:number, color:getRandColor(), id:++countRef.current}});
  }
  
  const onUpdateList = (item) => {
    dispatch({type:'UPDATE', item});
  }
  
  const onRemoveList = (id) => {
    dispatch({type:'DELETE', item:{id}});
  }

  return (
    <div className="app-container">
      <h1>🔢 Count 컴포넌트</h1>
      <CountInput onAddList={onAddList}/>
      <CountList countList={countState} onUpdateList={onUpdateList} onRemoveList={onRemoveList}/>
      
      <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px solid #eee' }}/>
      
      <div className="lifecycle-section">
        <h3>Lifecycle Test</h3>
        <Lifecycle/>
      </div>
    </div> 
  );
}
export default App;
import {useRef, useReducer} from 'react';
import CountComponent from './CounterComponent'
import LifecycleComponet from './Lifecycle/LifecycleApp';
import {Link, Routes, Route} from 'react-router-dom';
import CounterComponent from './CounterComponent';
import TodoApp from './Todo/TodoApp';

function reducer(state, action)
{
  switch(action.type)
  {
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
function getRandColor()
{
  return '#'+Math.floor(Math.random()*0xFFFFFF).toString(16);
}
function App() {
  const [countState, dispatch] = useReducer(reducer, [{num:10,color:'#FF00F0',id:1},{num:13,color:'#F0FEA0',id:2}]);
  const countRef = useRef(2);

  const onAddList = (number)=>
  {
    dispatch( {type:'ADD', item:{num:number, color:getRandColor(), id:++countRef.current}});
  }
  const onUpdateList = (item) => {
    dispatch( {type:'UPDATE', item} );
  }
  const onRemoveList = (id) => {
    dispatch({type:'DELETE', item:{id}});
  }
  return (
  <div>
    <nav style={{backgroundColor:'#Efefef', padding:20} }>
      <Link to="/" style={{ marginRight: 10 }}>1. CountComponent</Link>
      <Link to="/lifecycle" style={{ marginRight: 10 }}>2. LifecycleComponet</Link>
      <Link to="/todos">3. Todo List (API)</Link>
    </nav>

    <Routes>
      <Route path="/" element={<CounterComponent countState={countState} onAddList={onAddList} 
        onUpdateList={onUpdateList} onRemoveList={onRemoveList}/>} />
      <Route path="/lifecycle" element={<LifecycleComponet/>}/>
      <Route path="/todos" element={<TodoApp/>} />
    </Routes>
    <hr/>
    
  </div> 
   );
}
export default App;
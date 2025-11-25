import {useState, useRef, useReducer} from 'react';
import CountInput from './CountInput';
import CountList from './CountList';

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
    <h1> Count 컴포넌트 </h1>
    <CountInput onAddList={onAddList}/>
    <CountList countList={countState} onUpdateList={onUpdateList} onRemoveList={onRemoveList}/>
  </div> 
   );
}
export default App;
import {useRef, useReducer} from 'react';
import CountComponent from './CounterComponent'
import Lifecycle from './Lifecycle/LifecycleApp';

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
    <CountComponent countState={countState} onAddList={onAddList} 
      onUpdateList={onUpdateList} onRemoveList={onRemoveList}/>
    <hr/>
    <Lifecycle/>
  </div> 
   );
}
export default App;
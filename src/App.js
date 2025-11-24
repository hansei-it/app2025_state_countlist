import {useState, useRef} from 'react';
import CountInput from './CountInput';
import CountList from './CountList';

const initList = [{num:10,color:'#FF00F0',id:1},{num:13,color:'#F0FEA0',id:2}];
function App() {
  const countRef = useRef(2);
  const [countList, setCountList] = useState(initList);
  const onAddList = (number)=>
  {
    setCountList( [ ...countList , 
      {num:number, color:'#'+Math.floor(Math.random()*0xFFFFFF).toString(16), id:++countRef.current} ] );
  }
  const onUpdateList = (id, num) => {
    setCountList( countList.map((v,idx)=> v.id==id ? {...v, num:num}:v ) );
  }
  const onRemoveList = (id) => {
    setCountList( countList.filter((v)=> v.id !==id ) );
  }
  return (
  <div>
    <h1> Count 컴포넌트 </h1>
    <CountInput onAddList={onAddList}/>
    <CountList countList={countList} onUpdateList={onUpdateList} onRemoveList={onRemoveList}/>
  </div> 
   );
}
export default App;
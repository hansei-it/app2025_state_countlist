import CountInput from "./CountInput";
import CountList from "./CountList";

function CounterComponent({onAddList, countState, onUpdateList, onRemoveList})
{
  return (
    <div>
      <h1> Count 컴포넌트 </h1>
      <CountInput onAddList={onAddList}/>
      <CountList countList={countState} onUpdateList={onUpdateList} onRemoveList={onRemoveList}/>
    </div>
  )
}

export default CounterComponent;
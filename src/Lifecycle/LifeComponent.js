
import { useEffect, useState } from 'react';

function LifeComponent() {
  const [text, setText] = useState('hello');
  const [count, setCount] = useState(0);

  console.log('=== 컴포넌트가 랜더링 되었습니다. ===')
  
  useEffect(() => {
    console.log(" 첫 컴포넌트 마운트(Lifecycle) !");

    return () => {
      console.log(" 첫 컴포넌트 언~~ 마운트(Lifecycle) !");
    }
  }, []);

  useEffect(() => {
    console.log("[update] 첫 컴포넌트 마운트와 컴포넌트 업데이트 마다 실행");    
  });

  useEffect(() => {
    console.log("[update] count 상태 업데이트 시에 실행");    
  },[count]);

  return (
    <div>      
      LifeComponent : <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
      <div></div>
      <div><button onClick={()=>setCount(count+1)}> + </button> <button onClick={()=>setCount(count-1)}> - </button></div>
      Count : {count}
    </div>
  );
}

export default LifeComponent;

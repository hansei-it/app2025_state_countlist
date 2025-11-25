import LifeComponent from './LifeComponent';
import { useState } from 'react';

function LifecycleApp() {
  const [showComponent, setShowComponent] = useState(true);
  return (
    <div>
      <div> 
        <button onClick={()=>{setShowComponent(true)}}>보이기</button> 
        <button onClick={()=>{setShowComponent(false)}}>감추기</button> 
      </div>
      {showComponent && <LifeComponent/>}
    </div>
  );
}

export default LifecycleApp;
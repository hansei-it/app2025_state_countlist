
import { useEffect } from 'react';

function LifeComponent() {
  useEffect(() => {
    console.log(" 첫 컴포넌트 마운트(Lifecycle) !");

    return () => {
      console.log(" 첫 컴포넌트 언~~ 마운트(Lifecycle) !");
    }
  }, []);

  return (
    <div>
      LifeComponent
    </div>
  );
}

export default LifeComponent;

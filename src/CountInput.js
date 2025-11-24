import {useState, useRef} from 'react';

function CountInput( {onAddList} )
{
    const [number,setNumber] = useState(0); //초기값 - [상태, 상태변경함수]
    const numberRef = useRef(); // DOM 요소를 직접 제어하기 위한 참조를 생성

    const onNumber= (e)=> {
        setNumber(e.target.value); 
        console.log('number : ', e.target.value);
    }
    const onClickAdd = (e) => {
        numberRef.current.focus(); //input 요소에 focus 이동
        onAddList(number);
        console.log('Add 버튼 클릭');
    }

    return (
        <div> 
            <input ref={numberRef} type='number' placeholder="카운트 값 : " value={number} onChange={ onNumber} />
            <button onClick={onClickAdd}> 추가 </button>
        </div>
    );
}
export default CountInput;

import {useState, useRef} from 'react';

function CountInput({onAddList}) {
    const [number, setNumber] = useState(0);
    const numberRef = useRef();

    const onNumber = (e) => {
        setNumber(e.target.value); 
    }
    
    const onClickAdd = () => {
        numberRef.current.focus();
        onAddList(number);
        setNumber(0); // 추가 후 초기화 (UX 개선)
    }

    return (
        <div className="input-group"> 
            <input 
                className="input-field"
                ref={numberRef} 
                type='number' 
                placeholder="숫자를 입력하세요" 
                value={number} 
                onChange={onNumber} 
            />
            <button className="btn-add" onClick={onClickAdd}>추가</button>
        </div>
    );
}
export default CountInput;
import {useState} from 'react';

const CountItem = ({ item, onUpdateList, onRemoveList})=>
{
    const [number, setNumber] = useState(item.num);
    const [updateCount, setUpdateCount] = useState(false);

    return (<div key={item.id} style={{ display: 'flex' }}>
        id : {item.id} :
        {
            updateCount ? 
                <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)} style={{ textAlign: 'center', width: 50}}/> :
                <div style={{ textAlign: 'center', width: 50, backgroundColor: item.color }}>{item.num}</div>  
        }
        {
            updateCount ? 
            <button onClick={() => { setUpdateCount(false); onUpdateList({...item, num:number}); }}> 확인 </button> :
            <button onClick={() => setUpdateCount(true)}> 수정 </button>
        }

        <button onClick={() => onRemoveList(item.id)}> 삭 제 </button>
    </div>);
}

export default CountItem;
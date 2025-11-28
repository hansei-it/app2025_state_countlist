import {useState} from 'react';

const CountItem = ({ item, onUpdateList, onRemoveList}) => {
    const [number, setNumber] = useState(item.num);
    const [updateCount, setUpdateCount] = useState(false);

    return (
        <div className="count-item">
            <div className="item-info">
                <span className="id-badge">ID: {item.id}</span>
                {
                    updateCount ? 
                        <input 
                            type="number" 
                            className="input-field"
                            value={number} 
                            onChange={(e)=>setNumber(e.target.value)} 
                            style={{ width: '60px', padding: '5px' }}
                            autoFocus
                        /> 
                    :
                        <div 
                            className="color-circle" 
                            style={{ backgroundColor: item.color }}
                        >
                            {item.num}
                        </div>
                }
            </div>
            
            <div className="button-group">
                {
                    updateCount ? 
                    <button 
                        className="btn-confirm" 
                        onClick={() => { setUpdateCount(false); onUpdateList({...item, num:number}); }}
                    >
                        확인
                    </button> 
                    :
                    <button 
                        className="btn-edit" 
                        onClick={() => setUpdateCount(true)}
                    >
                        수정
                    </button>
                }
                <button 
                    className="btn-delete" 
                    onClick={() => onRemoveList(item.id)}
                >
                    삭제
                </button>
            </div>
        </div>
    );
}

export default CountItem;
const CountItem = ({ item, onRemoveList})=>
{
    return (<div key={item.id} style={{ display: 'flex' }}>
        id : {item.id} :
        <div style={{ textAlign: 'center', width: 50, backgroundColor: item.color }}>
            {item.num}
        </div>
        <button onClick={() => onRemoveList(item.id)}> 수정 </button>
        <button onClick={() => onRemoveList(item.id)}> 삭 제 </button>
    </div>);
}

export default CountItem;
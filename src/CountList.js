import CountItem from './CountItem';

const CountList = ({countList, onUpdateList, onRemoveList}) => {
    return (
        <div className="count-list">
            {
                countList.map((v) => (
                    <CountItem 
                        key={v.id} 
                        item={v} 
                        onUpdateList={onUpdateList} 
                        onRemoveList={onRemoveList}
                    />
                ))
            }
        </div>
    );
}
export default CountList;
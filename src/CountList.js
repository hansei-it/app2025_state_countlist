import CountItem from './CountItem';

const CountList = ({countList, onUpdateList, onRemoveList}) => {

    return (
        <div >
            {
                countList.map((v, idx) => {
                    return <CountItem key={v.id} item={v} onUpdateList={onUpdateList} onRemoveList={onRemoveList}/>;
                })
            }
        </div>
    );
}
export default CountList;
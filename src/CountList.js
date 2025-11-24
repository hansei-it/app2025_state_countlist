import CountItem from './CountItem';

const CountList = ({countList, onUpdateList, onRemoveList}) => {

    return (
        <div >
            {
                countList.map((v, idx) => {
                    return <CountItem item={v} onUpdateList={onUpdateList} onRemoveList={onRemoveList}/>;
                })
            }
        </div>
    );
}
export default CountList;
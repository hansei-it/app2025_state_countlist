import CountItem from './CountItem';

const CountList = ({countList, onRemoveList}) => {

    return (
        <div >
            {
                countList.map((v, idx) => {
                    return <CountItem item={v} onRemoveList={onRemoveList}/>;
                })
            }
        </div>
    );
}
export default CountList;
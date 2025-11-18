import {useState} from 'react';

const CountList = ({countList, onRemoveList}) => {

    return (
        <div >
            {countList.map((v, idx) => {
                return <div key={v.id} style={{display:'flex'}}>
                    id : {v.id} : 
                    <div style={{textAlign:'center', width:50, backgroundColor:v.color}}>
                        {v.num}
                    </div>
                    <button onClick={ ()=> onRemoveList(v.id) }> 수정 </button>
                    <button onClick={ ()=> onRemoveList(v.id) }> 삭 제 </button>
                </div>;
            })
            }
        </div>
    );
}
export default CountList;
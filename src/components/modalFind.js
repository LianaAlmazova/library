import { useState } from 'react';
import './modalAdd.css'

const ModalFind = props => {
    const[bookId,setBookId]=useState();
    return (
        <div className={`modal_wrapper ${props.isOpened ? 'open' : 'close'}`} style={{ ...props.style }}>
            <div className="modal_body">
                <div className="modal_close" onClick={props.onModalClose}>×</div>
                <div className='new_book'>
                    <input type="text" placeholder='id' value={bookId} onChange={(e)=>setBookId(e.target.value)}/>
                    <output></output>
                </div>
                <button>НАЙТИ</button>
            </div>
        </div>
    )
}

export default ModalFind;
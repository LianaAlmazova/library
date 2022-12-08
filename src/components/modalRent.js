import { useState } from 'react';
import './modalAdd.css';

const ModalRent = props => {
    const[rentNumber, setRentNumber] = useState();
    return (
        <div className={`modal_wrapper ${props.isOpened ? 'open' : 'close'}`} style={{ ...props.style }}>
            <div className="modal_body">
                <div className="modal_close" onClick={props.onModalClose}>×</div>
                <div className='new_book'>
                    <input type="number" placeholder='1' value={rentNumber} onChange={(e)=>setRentNumber(e.target.value)}/>
                    <h3>месяц</h3>
                </div>
                <button>АРЕНДОВАТЬ</button>
            </div>
        </div>
    )
}

export default ModalRent;
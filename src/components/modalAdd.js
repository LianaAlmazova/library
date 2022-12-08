import { useState } from 'react';
import './modalAdd.css'

const ModalAdd = props => {
    const [bookImg, setBookImg] = useState('');
    const [bookLabel, setBookLabel] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        let newBook = {};
        newBook["img"] = bookImg;
        newBook["label"] = bookLabel;
        props.add(newBook);
        setBookImg('');
        setBookLabel('');
        props.onModalClose();
    }

    return (
        <div className={`modal_wrapper ${props.isOpened ? 'open' : 'close'}`} style={{ ...props.style }}>
            <div className="modal_body">
                <div className="modal_close" onClick={props.onModalClose}>×</div>
                <div className='new_book'>
                    <input type="text" placeholder='label' value={bookLabel} onChange={e => setBookLabel(e.target.value)}/>
                    <input type="text" placeholder='url' value={bookImg} onChange={e => setBookImg(e.target.value)}/>
                </div>
                <button onClick={handleAdd}>ДОБАВИТЬ</button>
            </div>
        </div>
    )
}

export default ModalAdd;
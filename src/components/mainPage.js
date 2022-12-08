import React, { useEffect, useState } from 'react';
import './mainPage.css';
import ModalAdd from './modalAdd';
import ModalRent from './modalRent';
import ModalFind from './modalFind';

const MainPage = () => {
    const [list, setList] = useState([
        { img: ('https://i.pinimg.com/originals/71/a0/61/71a061397cd64ce870f5b5e490cb1cd1.png'), label: 'name1' },
        { img: ('https://yandex-images.clstorage.net/AgLS47233/0fd281KJ0E_E/y9Ts7TH5mL14UD73JshIH4hbYM0HhPusGqLncaEDFJWo1VjA-OXkvTHe5dAfftwqGoh0wQG15JU5FRuT-AVOsUrAKEkwDE25yZV-dxaYacpcanEIp8EqCD9nc1ER9tGV7KUNhL0AlWkUO9MWiOmbnHg-QxYGYlUQbNAuR_nBf_cpYP8OFik6Dl0gvBdnmKsLeCqSiPYD2_x91QMU85MUA_rnzESaElb5A5wCtFtZO-8r7ZLmVdA2odygHFdvcj7W6-WdLmYrGb3doZ7VphiKORkpIZiHY_uMD1YgJfCxJEPZhZ03OPDl-iLsUZXomzj_mP-SJsXht9AegJ9Uj-KOJ5jGDr83eyl_bvL9lueIKXlL-CPrxZPLLOwl4qZxoWZBuvYNdYvylZmA_2KnupqLbbjtQeRmkPXzH5J8x1xC_MerN6xtFXk7Xh4T3KTE-1kJqukBOYWyqRxtRoI0klMU0oiEbZQoMDYYk71CVxq4K4_qrEKWxpHkcD7BbNaN0gxVWfYPTOVYSVxswN5VFLsL-svqMLqVsIqd_iSAl9BxZKNbpT_XaYHl6lEvw4cYuNiPO53z9mSxlkBOw-0UrZDcZ1nmDQ52mTrePsOcxaf62As7qwMbJSHqHd3Wo3UgICewu1S_dPqiBHuzXqHlSjtJTMr_AxfWkDey3bNvVr3Anee4JO8fB1n5nz2w7-fkKqnIaxtBeuZSKa0ORwAFk1MWYZpEPXcZMnaLgf7RRWhIif1I3nCENOHmYt-zLKbtg00HSFZ8XGQZGE_toJ6nFer5ifqrwZumYlotffbBdDMCdfArpd7FygHlyFGtQEYKaNsf255B5tYwNCH-4I1WLBI_9XrWHvxXakjN3ZE99Ieoesn5-hNIt7Fp3x528jRwgYRwO0Q8JauTxelATODF2qu6jdhNsoUWcoQQHJAeVt9hLiQK183sRFjL7Lyjn_d3uGuJqIpQKIezK6_MVZMVM'), label: 'name2' }
    ]);
    const [addModal, setAddModal] = useState(false);
    const [rentModal, setRentModal] = useState(false);
    const [findModal, setFindModal] = useState(false);
    const [enable, setEnable] = useState(false);

    useEffect(() => {
        let arr = localStorage.getItem("list");

        if (arr) {
            let item = JSON.parse(arr);
            setList(item);
        }
    }, [])

    const addBook = (newBook) => {
        let tempList = list;
        tempList.push(newBook);
        localStorage.setItem("list", JSON.stringify(tempList));
        setList(tempList);
    }
    return (
        <>
            <ModalAdd isOpened={addModal} onModalClose={() => setAddModal(false)} add={addBook} />
            <ModalRent isOpened={rentModal} onModalClose={() => setRentModal(false)} />
            <ModalFind isOpened={findModal} onModalClose={() => setFindModal(false)} />
            <h2>Library</h2>
            <button onClick={() => setEnable(true)}>ВОЙТИ</button>
            <div className={`container ${enable ? 'open' : 'close'}`}>
                <div className='book_shelf'>
                    {list.map((item) => {
                        return (
                            <button className='book_button' onClick={() => setRentModal(!rentModal)} id='enableButton'>
                                <div className='book_item'>
                                    <img src={item.img} alt='book' className='book_img'></img>
                                    <h4>{item.label}</h4>
                                </div>
                            </button>
                        )
                    })}
                </div>
                <div className='buttons_container'>
                    <button className='enabled_buttons' onClick={() => { setAddModal(!addModal) }}>ДОБАВИТЬ</button>
                    <button className='enabled_buttons' onClick={() => setFindModal(!findModal)}>НАЙТИ</button>
                </div>
            </div>
        </>
    )
}

export default MainPage;
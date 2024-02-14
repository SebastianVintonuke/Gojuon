import { useState } from 'react';
// TODO Translations
function GameInfoModal() {
    const [modalIsOpen, setModalIsOpen] = useState(true);

    return (
        <div className={'modal fade' + (modalIsOpen ? ' show' : '')} data-bs-backdrop='static' style={{ display: (modalIsOpen ? 'block' : 'none'), zIndex: '2' }}>
            <div className='modal-dialog modal-dialog-centered'>
                <div className='modal-content b-black bo-white t-white'>
                    <div className='modal-body d-flex flex-column justify-content-center align-items-center gap-3'>
                        <span className='text-center fs-5 t-white'>Guess as many Kana characters as you can before time runs out</span>
                        <span className='fs-5 t-white'> Hiragana </span>
                        <div className='d-flex w-100 justify-content-around'>
                            <div className='d-flex gap-2'>
                                <input className="form-check-input b-red bo-white" type="checkbox" id="CheckHiraganaMonograph" checked onChange={()=>{}}></input>
                                <span className='fs-6 t-white'> Monograph </span>
                            </div>
                            <div className='d-flex gap-2'>
                                <input className="form-check-input b-red bo-white" type="checkbox" id="CheckHiraganaDiacritic" onChange={()=>{}}></input>
                                <span className='fs-6 t-white'> Diacritic </span>
                            </div>
                            <div className='d-flex gap-2'>
                                <input className="form-check-input b-red bo-white" type="checkbox" id="CheckHiraganaDiagraph" onChange={()=>{}}></input>
                                <span className='fs-6 t-white'> Diagraph </span>
                            </div>
                        </div>
                        <span className='fs-5 t-white'> Katakana </span>
                        <div className='d-flex w-100 justify-content-around'>
                            <div className='d-flex gap-2'>
                                <input className="form-check-input b-red bo-white" type="checkbox" id="CheckKatakanaMonograph" onChange={()=>{}}></input>
                                <span className='fs-6 t-white'> Monograph </span>
                            </div>
                            <div className='d-flex gap-2'>
                                <input className="form-check-input b-red bo-white" type="checkbox" id="CheckKatakanaDiacritic" onChange={()=>{}}></input>
                                <span className='fs-6 t-white'> Diacritic </span>
                            </div>
                            <div className='d-flex gap-2'>
                                <input className="form-check-input b-red bo-white" type="checkbox" id="CheckKatakanaDiagraph" onChange={()=>{}}></input>
                                <span className='fs-6 t-white'> Diagraph </span>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-evenly gap-3'>
                            <div className='btn b-red t-white' onClick={()=>{ setModalIsOpen(false) }}> Jugar </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameInfoModal
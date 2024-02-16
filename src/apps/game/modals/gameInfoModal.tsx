import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { GameSettings } from '../game';

type GameInfoModalHandler = {
    startGame: (gameSettings: GameSettings) => void
}

function GameInfoModal({ gameInfoModalHandler }: { gameInfoModalHandler: GameInfoModalHandler }) {
    const { t } = useTranslation();
    const [modalIsOpen, setModalIsOpen] = useState(true);

    const [isAtLeastOneSelected, setIsAtLeastOneSelected] = useState(true);

    const [hiraganaMonograph, setHiraganaMonograph] = useState(true);
    const [hiraganaDiacritic, setHiraganaDiacritic] = useState(false);
    const [hiraganaDiagraph, setHiraganaDiagraph] = useState(false);
    const [katakanaMonograph, setKatakanaMonograph] = useState(false);
    const [katakanaDiacritic, setKatakanaDiacritic] = useState(false);
    const [katakanaDiagraph, setKatakanaDiagraph] = useState(false);

    useEffect(() => {
        setIsAtLeastOneSelected(() => hiraganaMonograph || hiraganaDiacritic || hiraganaDiagraph || katakanaMonograph || katakanaDiacritic || katakanaDiagraph);
    }, [hiraganaMonograph, hiraganaDiacritic, hiraganaDiagraph, katakanaMonograph, katakanaDiacritic, katakanaDiagraph]);

    const startGame = () => {
        if (!isAtLeastOneSelected) return
        setModalIsOpen(false);
        gameInfoModalHandler.startGame({
            hiraganaMonograph,
            hiraganaDiacritic,
            hiraganaDiagraph,
            katakanaMonograph,
            katakanaDiacritic,
            katakanaDiagraph
        });
    }

    return (
        <div className={'modal fade' + (modalIsOpen ? ' show' : '')} data-bs-backdrop='static' style={{ display: (modalIsOpen ? 'block' : 'none'), zIndex: '2' }}>
            <div className='modal-dialog modal-dialog-centered'>
                <div className='modal-content b-black bo-white t-white'>
                    <div className='modal-body d-flex flex-column justify-content-center align-items-center gap-3'>
                        <span className='text-center fs-5 t-white'>{t('GAME.INFO_MODAL.TRY_TO_GUESS_AS_MANY_KANAS_AS_POSSIBLE_BEFORE_TIME_RUNS_OUT')}</span>
                        <span className='fs-5 t-white'> Hiragana </span>
                        <div className='d-flex w-100 justify-content-around'>
                            <div className='d-flex gap-2'>
                                <input className="form-check-input b-red bo-white" type="checkbox" id="CheckHiraganaMonograph" checked={hiraganaMonograph} onChange={() => setHiraganaMonograph(!hiraganaMonograph)}></input>
                                <span className='fs-6 t-white' onClick={() => setHiraganaMonograph(!hiraganaMonograph)}> Monograph </span>
                            </div>
                            <div className='d-flex gap-2'>
                                <input className="form-check-input b-red bo-white" type="checkbox" id="CheckHiraganaDiacritic" checked={hiraganaDiacritic} onChange={() => setHiraganaDiacritic(!hiraganaDiacritic)}></input>
                                <span className='fs-6 t-white' onClick={() => setHiraganaDiacritic(!hiraganaDiacritic)}> Diacritic </span>
                            </div>
                            <div className='d-flex gap-2'>
                                <input className="form-check-input b-red bo-white" type="checkbox" id="CheckHiraganaDiagraph" checked={hiraganaDiagraph} onChange={() => setHiraganaDiagraph(!hiraganaDiagraph)}></input>
                                <span className='fs-6 t-white' onClick={() => setHiraganaDiagraph(!hiraganaDiagraph)}> Diagraph </span>
                            </div>
                        </div>
                        <span className='fs-5 t-white'> Katakana </span>
                        <div className='d-flex w-100 justify-content-around'>
                            <div className='d-flex gap-2'>
                                <input className="form-check-input b-red bo-white" type="checkbox" id="CheckKatakanaMonograph" checked={katakanaMonograph} onChange={() => setKatakanaMonograph(!katakanaMonograph)}></input>
                                <span className='fs-6 t-white' onClick={() => setKatakanaMonograph(!katakanaMonograph)}> Monograph </span>
                            </div>
                            <div className='d-flex gap-2'>
                                <input className="form-check-input b-red bo-white" type="checkbox" id="CheckKatakanaDiacritic" checked={katakanaDiacritic} onChange={() => setKatakanaDiacritic(!katakanaDiacritic)}></input>
                                <span className='fs-6 t-white' onClick={() => setKatakanaDiacritic(!katakanaDiacritic)}> Diacritic </span>
                            </div>
                            <div className='d-flex gap-2'>
                                <input className="form-check-input b-red bo-white" type="checkbox" id="CheckKatakanaDiagraph" checked={katakanaDiagraph} onChange={() => setKatakanaDiagraph(!katakanaDiagraph)}></input>
                                <span className='fs-6 t-white' onClick={() => setKatakanaDiagraph(!katakanaDiagraph)}> Diagraph </span>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-evenly gap-3'>
                            <div className={'btn b-red t-white' + (isAtLeastOneSelected ? '' : ' disabled')} onClick={startGame}>{t('GAME.INFO_MODAL.PLAY')}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameInfoModal
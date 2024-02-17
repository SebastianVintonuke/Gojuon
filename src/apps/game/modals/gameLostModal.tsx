import { useTranslation } from 'react-i18next';
import { Apps } from '../..';

type gameLostModalHandler = {
    openApp: (app: Apps) => void,
    isLostModalOpen: boolean,
    guessed: number,
    toGuess: number
}

function GameLostModal({ gameLostModalHandler }: { gameLostModalHandler: gameLostModalHandler }) {
    const { t } = useTranslation();

    return (
        <div className={'modal fade' + (gameLostModalHandler.isLostModalOpen ? ' show' : '')} data-bs-backdrop='static' style={{ display: (gameLostModalHandler.isLostModalOpen ? 'block' : 'none'), zIndex: '2' }}>
            <div className='modal-dialog modal-dialog-centered'>
                <div className='modal-content b-black bo-white t-white'>
                    <div className='modal-body d-flex flex-column justify-content-center align-items-center gap-3'>
                        <span className='text-center fs-5 t-white'>{t('GAME.LOST_MODAL.TIME_IS_OVER')}</span>
                        <span className='text-center fs-5 t-white'>{gameLostModalHandler.guessed}/{gameLostModalHandler.toGuess}</span>
                        <div className='d-flex align-items-center justify-content-evenly gap-3'>
                            <div className='btn b-red t-white' onClick={() => { gameLostModalHandler.openApp('home') }}>{t('GAME.LOST_MODAL.HOME')}</div>
                            <div className='btn b-red t-white' onClick={() => { gameLostModalHandler.openApp('game') }}>{t('GAME.LOST_MODAL.TRY_AGAIN')}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameLostModal
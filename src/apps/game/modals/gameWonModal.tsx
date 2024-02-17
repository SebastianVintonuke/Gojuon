import { useTranslation } from 'react-i18next';
import { Apps } from '../..';

type gameWonModalHandler = {
    openApp: (app: Apps) => void,
    isWonModalOpen: boolean,
    guessed: number,
    toGuess: number
}

function GameWonModal({ gameWonModalHandler }: { gameWonModalHandler: gameWonModalHandler }) {
    const { t } = useTranslation();

    return (
        <div className={'modal fade' + (gameWonModalHandler.isWonModalOpen ? ' show' : '')} data-bs-backdrop='static' style={{ display: (gameWonModalHandler.isWonModalOpen ? 'block' : 'none'), zIndex: '2' }}>
            <div className='modal-dialog modal-dialog-centered'>
                <div className='modal-content b-black bo-white t-white'>
                    <div className='modal-body d-flex flex-column justify-content-center align-items-center gap-3'>
                        <span className='text-center fs-5 t-white'>{t('GAME.WON_MODAL.CONGRATULATIONS')}</span>
                        <span className='text-center fs-5 t-white'>{gameWonModalHandler.guessed}/{gameWonModalHandler.toGuess}</span>
                        <div className='d-flex align-items-center justify-content-evenly gap-3'>
                            <div className='btn b-red t-white' onClick={() => { gameWonModalHandler.openApp('home') }}>{t('GAME.WON_MODAL.HOME')}</div>
                            <div className='btn b-red t-white' onClick={() => { gameWonModalHandler.openApp('game') }}>{t('GAME.WON_MODAL.PLAY_AGAIN')}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameWonModal
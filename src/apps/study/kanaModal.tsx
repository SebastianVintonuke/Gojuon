import { JPCharacter } from '../../assets/kanas.ts';
import { useTranslation } from 'react-i18next';
import { SoundPlayer } from '../../utils/sound/soundPlayer.ts';

type KanaModalHandler = {
    id: string,
    tab: 'Hiragana' | 'Katakana',
    character: JPCharacter
}

function KanaModal({ kanaModalHandler }: { kanaModalHandler: KanaModalHandler }) {
    const { t } = useTranslation();

    const soundPlayer = SoundPlayer.getInstance();

    return (
        <div className='modal fade' id={kanaModalHandler.id} data-bs-backdrop='static'>
            <div className='modal-dialog modal-dialog-centered'>
                <div className='modal-content b-black bo-white t-white'>
                    <div className='modal-header d-flex flex-row-reverse'>
                        <button className='btn fs-2 font-monospace lh-sm t-white' data-bs-dismiss='modal'>x</button>
                    </div>
                    <div className='modal-body d-flex flex-column justify-content-center align-items-center gap-3'>
                        <div className='d-flex justify-content-center align-items-center flex-fill study_kana-modal_circle b-red t-white'>{kanaModalHandler.character.char}</div>
                        <div className='d-flex align-items-center justify-content-evenly gap-3'>
                            <div className='btn b-red t-white' onClick={() => { soundPlayer.play(kanaModalHandler.character.romaji) }}>{t('STUDY.PRONUNCIATION')}</div>
                            <span className='fs-2 t-white'> Rōmaji: {kanaModalHandler.character.romaji} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KanaModal
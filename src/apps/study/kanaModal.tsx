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
                <div className='modal-content bg-primary text-dark'>
                    <div className='modal-header'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal'></button>
                    </div>
                    <div className='modal-body d-flex flex-column justify-content-center align-items-center gap-3'>
                        <div className='d-flex justify-content-center align-items-center flex-fill bg-secondary text-primary study_kana-modal_circle'>{kanaModalHandler.character.char}</div>
                        <div className='d-flex align-items-center justify-content-evenly gap-3'>
                            <div className='btn btn-secondary' onClick={() => { soundPlayer.play(kanaModalHandler.character.romaji) }}>{t('STUDY.PRONUNCIATION')}</div>
                            <span className='fs-2'> Rōmaji: {kanaModalHandler.character.romaji} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KanaModal
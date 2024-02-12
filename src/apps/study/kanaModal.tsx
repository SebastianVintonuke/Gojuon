import { JPCharacter } from '../../assets/kanas.ts';
import { useTranslation } from 'react-i18next';

//---------TODO: Mover a un estado global para generar un unico SoundPlayer en el document y poder utilizarlo de forma global-----------
import { SoundPlayer } from '../../utils/sound/soundPlayer.ts';
import { SoundEntries } from '../../utils/sound/soundEntries.ts';
import { useEffect, useRef } from 'react';
//--------------------

type KanaModalHandler = {
    id: string,
    tab: 'Hiragana' | 'Katakana',
    character: JPCharacter
}

function KanaModal({ kanaModalHandler }: { kanaModalHandler: KanaModalHandler }) {
    const { t } = useTranslation();

    //---------TODO: Mover a un estado global para generar un unico SoundPlayer en el document y poder utilizarlo de forma global-----------
    const soundPlayer = useRef<SoundPlayer>();
    useEffect(() => {
        soundPlayer.current = new SoundPlayer(window.document, SoundEntries)
    }, []);
    //--------------------

    return (
        <div className="modal fade" id={kanaModalHandler.id} data-bs-backdrop="static">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-primary text-dark">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body d-flex flex-column justify-content-center align-items-center gap-3">
                        <div className='d-flex justify-content-center align-items-center flex-fill bg-secondary text-primary study_kana-modal_circle'>{kanaModalHandler.character.char}</div>
                        <div className="d-flex align-items-center justify-content-evenly gap-3">
                            <div className='btn btn-secondary' onClick={() => { soundPlayer.current?.play(kanaModalHandler.character.romaji) }}>{t('STUDY.PRONUNCIATION')}</div>
                            <span className="fs-2"> Rōmaji: {kanaModalHandler.character.romaji} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KanaModal
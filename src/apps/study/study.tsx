import { useState } from 'react';
import { KanaKeys, HIRAGANA, KATAKANA } from '../../assets/kanas.ts';
import './study.scss';
import KanaModal from './kanaModal.tsx';

function Study() {
    const [tab, setTab] = useState<'Hiragana' | 'Katakana'>('Hiragana');
    const [character, setCharacter] = useState({ char: '', romaji: '', sound: '' });

    let getKanaSelected = () => {
        return tab === 'Hiragana' ? HIRAGANA : KATAKANA
    }

    let isHiraganaSelected = () => {
        return tab === 'Hiragana'
    }

    return (
        <div className='container d-flex flex-column justify-content-center'>
            <div className='btn-group mx-2 my-3'>
                <button className={'btn bo-white' + (isHiraganaSelected() ? ' b-red t-white' : ' t-white')} onClick={() => setTab('Hiragana')}> Hiragana </button>
                <button className={'btn bo-white' + (!isHiraganaSelected() ? ' b-red t-white' : ' t-white')} onClick={() => setTab('Katakana')}> Katakana </button>
            </div>
            <div className='d-flex flex-column justify-content-center h-100'>
                {Object.keys(getKanaSelected()).map((key) => (
                    <div className='container text-center my-3'>
                        <h5 className='t-white'> {key} </h5>
                        {getKanaSelected()[key as KanaKeys].map((_, index: number) => (
                            <div className='row my-3'>
                                {getKanaSelected()[key as KanaKeys][index].map((character) => (
                                    <div className='col'>
                                        {character ?
                                            <div className='d-flex flex-column align-items-center' data-bs-toggle='modal' data-bs-target='#kanaModal' onClick={() => setCharacter(character)}>
                                                <span className='d-flex align-items-center justify-content-center fs-4 b-red t-white' style={{ width: '2em', height: '2em', borderRadius: '50%' }}>{character ? character.char : ''}</span>
                                                <span className='fs-6 t-white'> {character ? character.romaji : ''} </span>
                                            </div>
                                            : ''}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <KanaModal kanaModalHandler={{ id: 'kanaModal', tab, character  }}></KanaModal>
        </div>
    )
}

export default Study
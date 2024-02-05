import { useState } from 'react';
import { KanaKeys, HIRAGANA, KATAKANA } from '../../assets/kanas.ts';

function Study() {
    const [tab, setTab] = useState('Hiragana');
    const [character, setCharacter] = useState({ char: '', romaji: '' });

    let getKanaSelected = () => {
        return tab === 'Hiragana' ? HIRAGANA : KATAKANA
    }

    let isHiraganaSelected = () => {
        return tab === 'Hiragana'
    }

    return (
        <div className="container d-flex flex-column justify-content-center">
            { /* Modal */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-primary text-dark">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex flex-column justify-content-center gap-3">
                            <img src={`/img/kanas/${tab}_${character.romaji.toLowerCase()}_stroke_order_animation.gif`} className="img-thumbnail"></img>
                            <div className="d-flex align-items-center justify-content-evenly">
                                <span className="fs-2"> Rōmaji: {character.romaji} </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { /* Body */ }
            <div className="btn-group mx-2 my-3">
                <button type="button" className={"btn btn-outline-primary " + (isHiraganaSelected() ? "active" : "")} onClick={() => setTab('Hiragana')}> Hiragana </button>
                <button type="button" className={"btn btn-outline-primary " + (!isHiraganaSelected() ? "active" : "")} onClick={() => setTab('Katakana')}> Katakana </button>
            </div>
            <div className="d-flex flex-column justify-content-center h-100">
                {Object.keys(getKanaSelected()).map((key) => (
                    <div className="container text-center my-3">
                        <h5> {key} </h5>
                        {getKanaSelected()[key as KanaKeys].map((_, index: number) => (
                            <div className="row my-3">
                                {getKanaSelected()[key as KanaKeys][index].map((character) => (
                                    <div className="col">
                                        {character ?
                                            <div className="d-flex flex-column" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setCharacter(character)}>
                                                <span className="badge text-bg-primary fs-4">{character ? character.char : ''}</span>
                                                <span className="fs-6"> {character ? character.romaji : ''} </span>
                                            </div>
                                            : ''}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Study
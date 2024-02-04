import { useState } from 'react';
import { Kana, KANAS } from "./kanas";

const N_TO_GUESS = 10;

type Guess = {
    kana: string,
    right: string,
    options: Array<string>
}

function Game() {
    const [current, setCurrent] = useState(0);

    const guess: Array<Guess> = createRandomGame(KANAS.HIRAGANA);

    const tryOption = (option: string) => {
        if (guess[current].right === option) {
            if ((N_TO_GUESS - 1) === current) {
                alert('¡You Win!');
            } else {
                setCurrent(current + 1);
            }
        } else {
            alert('¡Anta Baka!');
        }
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <span style={{ fontSize: 20 + 'em' }}> {guess[current].kana} </span>
            </div>
            <div className="d-flex flex-column justify-content-center gap-3">
                {guess[current].options.map((option, index) => (
                    <button key={index} className="btn btn-primary btn-lg text-uppercase" onClick={() => tryOption(option)}> { option } </button>
                ))}
            </div>
        </div>
    );
}

export default Game;

function createRandomGame(kana: Kana): Array<Guess> {
    if (kana) {
        return [
            { kana: 'あ', right: 'A', options: ['KA', 'MA', 'SA', 'A'] },
            { kana: '女', right: 'ME', options: ['SE', 'TE', 'ME', 'E'] },
            { kana: 'あ', right: 'A', options: ['KA', 'MA', 'SA', 'A'] },
            { kana: '女', right: 'ME', options: ['SE', 'TE', 'ME', 'E'] },
            { kana: 'あ', right: 'A', options: ['KA', 'MA', 'SA', 'A'] },
            { kana: '女', right: 'ME', options: ['SE', 'TE', 'ME', 'E'] },
            { kana: 'あ', right: 'A', options: ['KA', 'MA', 'SA', 'A'] },
            { kana: '女', right: 'ME', options: ['SE', 'TE', 'ME', 'E'] },
            { kana: 'あ', right: 'A', options: ['KA', 'MA', 'SA', 'A'] },
            { kana: '女', right: 'ME', options: ['SE', 'TE', 'ME', 'E'] }
        ];
    } else {
        return [
            { kana: 'あ', right: 'A', options: ['KA', 'MA', 'SA', 'A'] },
            { kana: '女', right: 'ME', options: ['SE', 'TE', 'ME', 'E'] },
            { kana: 'あ', right: 'A', options: ['KA', 'MA', 'SA', 'A'] },
            { kana: '女', right: 'ME', options: ['SE', 'TE', 'ME', 'E'] },
            { kana: 'あ', right: 'A', options: ['KA', 'MA', 'SA', 'A'] },
            { kana: '女', right: 'ME', options: ['SE', 'TE', 'ME', 'E'] },
            { kana: 'あ', right: 'A', options: ['KA', 'MA', 'SA', 'A'] },
            { kana: '女', right: 'ME', options: ['SE', 'TE', 'ME', 'E'] },
            { kana: 'あ', right: 'A', options: ['KA', 'MA', 'SA', 'A'] },
            { kana: '女', right: 'ME', options: ['SE', 'TE', 'ME', 'E'] }
        ];
    } //TODO LATER
}
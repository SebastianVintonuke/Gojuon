import { useEffect, useState } from 'react';
import { Kana, KANAS } from "./kanas";

const N_TO_GUESS = 10;

type Guess = {
    kana: string,
    right: string,
    options: Array<string>
}

function Game() {
    const [current, setCurrent] = useState(0);



    // TO DO MOVER A ALGO MAS GENERAL
    const [isVerticalScreen, setIsVerticalScreen] = useState(
        window.innerHeight > window.innerWidth
    );
    useEffect(() => {
        const manejarCambioOrientacion = () => {
            setIsVerticalScreen(window.innerHeight > window.innerWidth);
        };

        window.addEventListener('resize', manejarCambioOrientacion);

        return () => {
            window.removeEventListener('resize', manejarCambioOrientacion);
        };
    }, []);
    //

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
        <div className="container d-flex flex-fill justify-content-center" style={{ flexDirection: (isVerticalScreen ? 'column' : 'row') }}>
            <div className="d-flex flex-grow-1 justify-content-center align-items-center">
                <span style={{ fontSize: (isVerticalScreen ? '50vw' : '50vh') }}> {guess[current].kana} </span>
            </div>
            <div className="d-flex flex-grow-1 flex-column justify-content-center align-items-center gap-3">
                {guess[current].options.map((option, index) => (
                    <button key={index} className="btn btn-primary w-100 btn-lg text-uppercase" onClick={() => tryOption(option)}> {option} </button>
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
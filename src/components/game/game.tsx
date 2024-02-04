import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

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

    const guess: Array<Guess> = createRandomGame();

    let getBarColor = (progress: number) => {
        if (progress > 67) {
            return 'bg-success'
        } else if (progress > 34) {
            return 'bg-warning'
        } else {
            return 'bg-danger'
        }
    }

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

    const START = DateTime.now();
    const FINISH = START.plus({ minutes: 1 });
    const TIME = START.diff(FINISH);
    console.log(TIME);

    return (
        <div className="container d-flex flex-column flex-fill">
            <div className="m-1">
                <div className="progress" role="progressbar">
                    <div className={"progress-bar progress-bar-striped progress-bar-animated " + getBarColor(70)} style={{ width: 70 + '%' }}></div>
                </div>
            </div>
            <div className="d-flex flex-fill justify-content-center" style={{ flexDirection: (isVerticalScreen ? 'column' : 'row') }}>
                <div className="d-flex flex-grow-1 justify-content-center align-items-center">
                    <span style={{ fontSize: (isVerticalScreen ? '50vw' : '50vh') }}> {guess[current].kana} </span>
                </div>
                <div className="d-flex flex-grow-1 flex-column justify-content-center align-items-center gap-3">
                    {guess[current].options.map((option, index) => (
                        <button key={index} className="btn btn-primary w-100 btn-lg text-uppercase" onClick={() => tryOption(option)}> {option} </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Game;

function createRandomGame(): Array<Guess> {
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
}
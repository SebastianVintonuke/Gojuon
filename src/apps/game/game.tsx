import { useState } from 'react';
import { useScreenOrientation } from '../../utils/screenOrientation';
import './game.scss';

const N_TO_GUESS = 10;

type Guess = {
    kana: string,
    right: string,
    options: Array<string>
}

function Game() {
    const isVerticalScreen = useScreenOrientation();
    const [current, setCurrent] = useState(0);

    const guess: Array<Guess> = createRandomGame();

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
        <div className='container d-flex flex-column flex-fill'>
            <div className='d-flex flex-fill justify-content-center' style={{ flexDirection: (isVerticalScreen ? 'column' : 'row') }}>
                <div className='d-flex flex-grow-1 justify-content-center align-items-center'>
                    <div className='d-flex justify-content-center align-items-center text-center game-kana-circle b-red'>
                        <span className='t-white' style={{ fontSize: (isVerticalScreen ? '50vw' : '50vh') }}> {guess[current].kana} </span>
                    </div>
                </div>
                <div className='d-flex flex-grow-1 justify-content-center align-items-center'>
                    <div className='gap-5' style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)' }}>
                        {guess[current].options.map((option, index) => (
                            <button key={index} className='btn fs-1 p-5 b-red t-white' onClick={() => tryOption(option)} style={{ borderRadius: '50%' }}>{option}</button>
                        ))}
                    </div>
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
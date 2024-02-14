import { useState, useEffect } from 'react';
import { useScreenOrientation } from '../../utils/screenOrientation';
import { HIRAGANA, KATAKANA, ConjugationsGroup, JPCharacter } from '../../assets/kanas';
import GameInfoModal from './games/gameInfoModal';
import './game.scss';

type Guess = {
    kana: string,
    right: string,
    options: Array<string>
}

function Game() {
    const isVerticalScreen = useScreenOrientation();
    const [current, setCurrent] = useState(0);

    const guess: Array<Guess> = createRandomGame({
        hiraganaMonograph: true,
        hiraganaDiacritic: true,
        hiraganaDiagraph: true,
        katakanaMonograph: true,
        katakanaDiacritic: true,
        katakanaDiagraph: true
    });

    const tryOption = (option: string) => {
        if (guess[current].right === option) {
            if ((guess.length - 1) === current) {
                alert('¡You Win!');
            } else {
                setCurrent(current + 1);
            }
        } else {
            alert('¡Anta Baka!');
        }
    };

    const setProgressBar = (progress: number /* 0 a 100 */) => {
        const progressBar: HTMLElement | null = document.getElementById('ProgressBar');
        if (!progressBar) { throw new Error('ProgressBar HTMLElement not found.') }
        progressBar.style.background = `linear-gradient(to top, #871217 ${progress}%, #0d0d0d 0%)`;
    }

    //--------------- Just to test setProgressBar function
    useEffect(() => {
        let progress = 100;
        const intervalId = setInterval(() => {
            setProgressBar(progress);
            progress -= 1;

            if (progress < 0) {
                clearInterval(intervalId);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    //---------------

    return (
        <div className='container d-flex flex-column flex-fill'>
            <GameInfoModal></GameInfoModal>
            <div className='d-flex flex-fill justify-content-center' style={{ flexDirection: (isVerticalScreen ? 'column' : 'row') }}>
                <div className='d-flex flex-grow-1 justify-content-center align-items-center'>
                    <div id='ProgressBar' className='d-flex justify-content-center align-items-center text-center game-kana-circle b-red'>
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

type gameSettings = {
    hiraganaMonograph: boolean,
    hiraganaDiacritic: boolean,
    hiraganaDiagraph: boolean,
    katakanaMonograph: boolean,
    katakanaDiacritic: boolean,
    katakanaDiagraph: boolean
}

function createRandomGame(setting: gameSettings): Array<Guess> {
    let result: Array<Guess> = [];

    const addKanaToGame = (conjugationsGroup: ConjugationsGroup) => {
        conjugationsGroup.forEach(phonemesGroup => {
            phonemesGroup.forEach(jPCharacter => {
                if (jPCharacter) {
                    let guess: Guess = { kana: jPCharacter.char, right: jPCharacter.romaji, options: getFourRandomRomajis(jPCharacter.romaji, conjugationsGroup) }
                    result.push(guess);
                }
            })
        });
    }

    const getFourRandomRomajis = (initialRomaji: string, kana: ConjugationsGroup): Array<string> => {
        let fourRandomRomajis: Array<string> = [];
        fourRandomRomajis.push(initialRomaji);

        while (fourRandomRomajis.length < 4) {
            const randomIndex = Math.floor(Math.random() * kana.length);
            const randomRow = kana[randomIndex];
    
            if (randomRow) {
                const filteredRomajis = randomRow
                    .filter(item => item && item.romaji !== initialRomaji && !fourRandomRomajis.includes(item.romaji))
                    .map(item => (item as JPCharacter).romaji);

                if (filteredRomajis.length > 0) {
                    const randomRomaji = filteredRomajis[Math.floor(Math.random() * filteredRomajis.length)];
                    fourRandomRomajis.push(randomRomaji);
                }
            }
        }
    
        fourRandomRomajis.sort(() => Math.random() - 0.5);

        return fourRandomRomajis;
    }

    if (setting.hiraganaMonograph) {
        addKanaToGame(HIRAGANA.Monograph);
    }
    if (setting.hiraganaDiacritic) {
        addKanaToGame(HIRAGANA.Diacritic);
    }
    if (setting.hiraganaDiagraph) {
        addKanaToGame(HIRAGANA.Diagraph);
    }
    if (setting.katakanaMonograph) {
        addKanaToGame(KATAKANA.Monograph);
    }
    if (setting.katakanaDiacritic) {
        addKanaToGame(KATAKANA.Diacritic);
    }
    if (setting.katakanaDiagraph) {
        addKanaToGame(KATAKANA.Diagraph);
    }

    result.sort(() => Math.random() - 0.5);

    return result
}
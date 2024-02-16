import { useState, useEffect } from 'react';
import { useScreenOrientation } from '../../utils/screenOrientation';
import { HIRAGANA, KATAKANA, ConjugationsGroup, JPCharacter } from '../../assets/kanas';
import GameInfoModal from './modals/gameInfoModal';
import './game.scss';
import { DateTime } from 'luxon';
import GameWonModal from './modals/gameWonModal';
import { Apps } from '..';
import GameLostModal from './modals/gameLostModal';

const SECONDS_PER_GUESS = 2;

type Guess = {
    kana: string,
    right: string,
    options: Array<string>
}

type gameHandler = {
    openApp: (app: Apps) => void
}

function Game({ gameHandler }: { gameHandler: gameHandler }) {
    const isVerticalScreen = useScreenOrientation();
    const [current, setCurrent] = useState(0);
    const [game, setGame] = useState<Array<Guess>>([{ kana: ' ', right: ' ', options: [' ', ' ', ' ', ' '] }]);
    const [intervalId, setIntervalId] = useState<number>();
    const [wrongOptionAnimationIsRuning, setWrongOptionAnimationIsRuning] = useState(false);
    const [isWonModalOpen, setIsWonModalOpen] = useState(false);
    const [isLostModalOpen, setIsLostModalOpen] = useState(false);

    // to clean intervalId on unmount
    useEffect(() => { return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [intervalId]);

    const startGame = (gameSettings: GameSettings) => {
        const listToGuess = createRandomGame(gameSettings);
        setGame(listToGuess);

        const timeStart = DateTime.now()
        const timeEnd = timeStart.plus({ seconds: listToGuess.length * SECONDS_PER_GUESS });

        const localIntervalId = setInterval(() => {
            const currentTime = DateTime.now();
            const timeDifference = timeEnd.diff(timeStart).as('seconds');
            const elapsedTime = currentTime.diff(timeStart).as('seconds');

            const progress = Math.round(Math.max(0, 100 - (elapsedTime / timeDifference) * 100));

            setProgressBar(progress);

            if (progress <= 0) {
                clearInterval(localIntervalId);
                gameLost();
            }
        }, 1000);

        setIntervalId(localIntervalId)
    }

    const tryOption = (option: string) => {
        if (game[current].right === option) {
            if ((game.length - 1) === current) {
                clearInterval(intervalId);
                gameWin();
            } else {
                setCurrent(current + 1);
            }
        } else {
            wrongOption();
        }
    };

    const wrongOption = () => {
        const elm: HTMLElement | null = document.getElementById('ProgressBar');

        if (!elm) { throw new Error('PregressBar to shake not found') }

        const removeListenersAndContinue = () => {
            elm.removeEventListener('animationend', removeListenersAndContinue);
            elm.removeEventListener('webkitAnimationEnd', removeListenersAndContinue);

            setWrongOptionAnimationIsRuning(false);
            elm.classList.remove('shake-horizontal');
        }

        elm.addEventListener('animationend', removeListenersAndContinue);
        elm.addEventListener('webkitAnimationEnd', removeListenersAndContinue);

        setWrongOptionAnimationIsRuning(true);
        elm.classList.add('shake-horizontal');
    };

    const gameWin = () => {
        setIsWonModalOpen(true);
    };

    const gameLost = () => {
        setIsLostModalOpen(true);
    }

    const setProgressBar = (progress: number /* 0 a 100 */) => {
        const progressBar: HTMLElement | null = document.getElementById('ProgressBar');
        if (!progressBar) { throw new Error('ProgressBar HTMLElement not found.') }
        progressBar.style.background = `linear-gradient(to top, #871217 ${progress}%, #0d0d0d 0%)`;
    }

    return (
        <div className='container d-flex flex-column flex-fill'>
            <GameInfoModal gameInfoModalHandler={{ startGame }}></GameInfoModal>
            <GameWonModal gameWonModalHandler={{ isWonModalOpen, openApp: gameHandler.openApp }}></GameWonModal>
            <GameLostModal gameLostModalHandler={{ isLostModalOpen, openApp: gameHandler.openApp }}></GameLostModal>
            <div className='d-flex flex-fill justify-content-center' style={{ flexDirection: (isVerticalScreen ? 'column' : 'row') }}>
                <div className='d-flex flex-grow-1 justify-content-center align-items-center'>
                    <div id='ProgressBar' className='d-flex justify-content-center align-items-center text-center game-kana-circle b-red'>
                        <span className='t-white' style={{ fontSize: (isVerticalScreen ? '50vw' : '50vh') }}> {game[current].kana} </span>
                    </div>
                </div>
                <div className='d-flex flex-grow-1 justify-content-center align-items-center'>
                    <div className='gap-5' style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)' }}>
                        {game[current].options.map((option, index) => (
                            <button key={index} className={'btn fs-1 p-5 b-red t-white' + (wrongOptionAnimationIsRuning ? ' disabled' : '')} onClick={() => tryOption(option)} style={{ borderRadius: '50%' }}>{option}</button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Game;

export type GameSettings = {
    hiraganaMonograph: boolean,
    hiraganaDiacritic: boolean,
    hiraganaDiagraph: boolean,
    katakanaMonograph: boolean,
    katakanaDiacritic: boolean,
    katakanaDiagraph: boolean
}

function createRandomGame(setting: GameSettings): Array<Guess> {
    const result: Array<Guess> = [];

    const addKanaToGame = (conjugationsGroup: ConjugationsGroup) => {
        conjugationsGroup.forEach(phonemesGroup => {
            phonemesGroup.forEach(jPCharacter => {
                if (jPCharacter) {
                    const guess: Guess = { kana: jPCharacter.char, right: jPCharacter.romaji, options: getFourRandomRomajis(jPCharacter.romaji, conjugationsGroup) }
                    result.push(guess);
                }
            })
        });
    }

    const getFourRandomRomajis = (initialRomaji: string, kana: ConjugationsGroup): Array<string> => {
        const fourRandomRomajis: Array<string> = [];
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
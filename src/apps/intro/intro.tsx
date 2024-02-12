import { useState } from 'react';
import './intro.scss';

function Intro() {
    const [current, setCurrent] = useState(0);

    let onClick = () => {
        setCurrent(current + 1);
    };

    return (
        <div className='d-flex justify-content-center align-items-end w-100 h-100' onClick={() => onClick()}>
            <div className='text-background w-100 h-25 p-5'>
                <h6 className='fs-3'>{ CONVERSATION[current].characterName }</h6>
                <span className='fs-5'>{ CONVERSATION[current].text }</span>
            </div>
        </div>
    )
}

export default Intro

type Dialogue = {
    characterName: string,
    text: string
}

const CONVERSATION: Array<Dialogue> = [
    { characterName: 'Asuka', text: 'What are you up to?' },
    { characterName: 'Shinji', text: 'Studying Science.' },
    { characterName: 'Asuka', text: "You're such a diligent student." },
    { characterName: 'Shinji', text: 'You can say that, but I have to do it anyway.' },
    { characterName: 'Asuka', text: 'Ta Da!' },
    { characterName: 'Shinji', text: "Let's see. What're you working on?" },
    { characterName: 'Asuka', text: 'Let me take a look.' },
    { characterName: 'Asuka', text: "You can't solve an easy equation like this?" },
    { characterName: 'Asuka', text: 'There, done.' },
    { characterName: 'Asuka', text: "It's so easy." },
    { characterName: 'Shinji', text: 'How can you solve a dificult problem like this, and not make good grades on your tests?' },
    { characterName: 'Asuka', text: "If I were to warm up just my breasts, do you think they'd grow a little bigger?" },
    { characterName: 'Shinji', text: "I would't know anything about that!" },
    { characterName: 'Asuka', text: 'What a boring guy.' }
]
import { useState, useEffect } from 'react';
import { Apps, Home, Game, Study, About } from './apps';
import { GoMenu } from './components';
import { useScreenOrientation } from './utils/screenOrientation';
import { SoundPlayer } from './utils/sound/soundPlayer.ts';
import { SoundEntries } from './utils/sound/soundEntries.ts';
import { TransitionManager } from './utils/transition/transitionManager.ts';
import { DateTime } from 'luxon';

function App() {
    const isVerticalScreen = useScreenOrientation();
    const [currentApp, setCurrentApp] = useState<Apps>('home');
    const [gameKey, setGameKey] = useState(DateTime.now().toMillis());

    useEffect(() => {
        SoundPlayer.getInstance(window.document, SoundEntries);
        
        const transitionManagerTarget = document.getElementById('transitionManagerTarget');
        if (transitionManagerTarget) {
            TransitionManager.getInstance(window.document, transitionManagerTarget);
        }
    }, []);

    const openApp = (app: Apps) => {
        TransitionManager.getInstance().runTransition(() => {
            if (app === 'game') { setGameKey(DateTime.now().toMillis()); }
            setCurrentApp(app)
        });
    }

    return (
        <div id='transitionManagerTarget' className='d-flex width-all-screen height-all-screen' style={{ flexDirection: (isVerticalScreen ? 'column' : 'row') }}>
            <GoMenu menuHandler={{ onChange: openApp }}></GoMenu>
            <div className='d-flex flex-column flex-fill'>
                {currentApp === 'home' ? <Home homeHandler={{ onChange: openApp }}></Home> : null}
                {currentApp === 'game' ? <Game key={gameKey} gameHandler={ { openApp: openApp } }></Game> : null}
                {currentApp === 'study' ? <Study></Study> : null}
                {currentApp === 'about' ? <About></About> : null}
            </div>
        </div>
    )
}

export default App
import { useState } from 'react';
import { Apps, Home, Intro, Game, Study, About } from './apps';
import { GoMenu } from './components';
import { useScreenOrientation } from './utils/screenOrientation';
import { SoundPlayer } from './utils/sound/soundPlayer.ts';
import { SoundEntries } from './utils/sound/soundEntries.ts';

function App() {
    const isVerticalScreen = useScreenOrientation();
    const [currentApp, setCurrentApp] = useState<Apps>('home');

    SoundPlayer.getInstance(window.document, SoundEntries);

    const openApp = (app: Apps) => {
        setCurrentApp(app);
    }

    return (
        <div className='d-flex width-all-screen height-all-screen' style={{ flexDirection: (isVerticalScreen ? 'column' : 'row') }}>
            <GoMenu menuHandler={{ onChange: openApp }}></GoMenu>
            <div className='d-flex flex-column flex-fill'>
                {currentApp === 'home' ? <Home homeHandler={{ onChange: openApp }}></Home> : null}
                {currentApp === 'intro' ? <Intro></Intro> : null}
                {currentApp === 'game' ? <Game></Game> : null}
                {currentApp === 'study' ? <Study></Study> : null}
                {currentApp === 'about' ? <About></About> : null}
            </div>
        </div>
    )
}

export default App
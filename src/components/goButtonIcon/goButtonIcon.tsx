import { MouseEventHandler } from 'react';
import './goButonIcon.scss';

type ButtonIconHandler = {
    className?: string;
    icon: string;
    onClick: MouseEventHandler<HTMLDivElement>;
}

function GoButtonIcon({ buttonHandler }: { buttonHandler: ButtonIconHandler }) {
    return (
        <div className={buttonHandler.className ? ('go-button-icon ' + buttonHandler.className) : 'go-button-icon'} onClick={ buttonHandler.onClick }>
            <i className={ buttonHandler.icon }></i>
        </div>
    )
}

export default GoButtonIcon
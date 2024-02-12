import { MouseEventHandler } from 'react';
import './goButon.scss';

type ButtonHandler = {
    label?: string;
    icon?: string;
    onClick: MouseEventHandler<HTMLDivElement>;
}

function GoButton({ buttonHandler }: { buttonHandler: ButtonHandler }) {
    return (
        <div className='go-button' onClick={ buttonHandler.onClick }>
            <div className='go-button_container'>
                { buttonHandler.icon ? <i className={ 'go-button_icon ' + buttonHandler.icon }></i> : null }
                { buttonHandler.label ? <span className='go-button_label'>{ buttonHandler.label }</span> : null }
            </div>
        </div>
    )
}

export default GoButton
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import LanguageModal from './languageModal';
import { GoButtonIcon } from '../';
import { Apps } from '../../apps';

type MenuHandler = {
    onChange: Function
}

function GoMenu({ menuHandler }: { menuHandler: MenuHandler }) {
    const { t } = useTranslation();
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

    const closeMenu = () => {
        setMenuIsOpen(false);
    };

    const openMenu = () => {
        setMenuIsOpen(true);
    }

    const onChange = (app: Apps) => {
        menuHandler.onChange(app);
        closeMenu()
    }

    return (
        <div className='m-3'>
            <GoButtonIcon buttonHandler={{ icon: 'fa fa-sharp fa-solid fa-bars', onClick: () => openMenu() }}></GoButtonIcon>
            <div className={`offcanvas offcanvas-start bg-primary ${menuIsOpen ? 'show' : ''}`}>
                <div className='offcanvas-header'>
                    <h5 className='offcanvas-title'> Menu </h5>
                    <button type='button' className='btn-close' onClick={() => closeMenu()}></button>
                </div>
                <div className='offcanvas-body d-flex flex-column justify-content-between'>
                    <div className='d-flex flex-column gap-3'>
                        <button type='button' className='btn btn-secondary text-primary' onClick={() => onChange('home')}> {t('MAIN_MENU.HOME')} </button>
                        <button type='button' className='btn btn-secondary text-primary' onClick={() => onChange('intro')}> {t('MAIN_MENU.INTRODUCTION')} </button>
                        <button type='button' className='btn btn-secondary text-primary' onClick={() => onChange('game')}> {t('MAIN_MENU.PLAY')} </button>
                        <button type='button' className='btn btn-secondary text-primary' onClick={() => onChange('study')}> {t('MAIN_MENU.STUDY')} </button>
                        <button type='button' className='btn btn-secondary text-primary' onClick={() => onChange('about')}> {t('MAIN_MENU.ABOUT')} </button>
                    </div>
                    <div className='mt-auto mb-0 d-flex justify-content-end'>
                        <button type='button' className='btn btn-secondary text-primary' data-bs-toggle='modal' data-bs-target='#languageModal'>
                            <i className='fa fa-language fs-1'></i>
                        </button>
                    </div>
                </div>
            </div>
            <LanguageModal languageModalHandler={{ id: 'languageModal' }}></LanguageModal>
        </div>
    )
}

export default GoMenu
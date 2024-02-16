import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import LanguageModal from './languageModal';
import { GoButtonIcon } from '../';
import { Apps } from '../../apps';

type MenuHandler = {
    onChange: (app: Apps) => void
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
            <GoButtonIcon buttonHandler={{ className: 'b-red bo-red t-white', icon: 'fa fa-sharp fa-solid fa-bars', onClick: () => openMenu() }}></GoButtonIcon>
            <div className={`offcanvas offcanvas-start b-red t-white ${menuIsOpen ? 'show' : ''}`}>
                <div className='offcanvas-header'>
                    <h5 className='offcanvas-title'> Menu </h5>
                    <button className='btn fs-2 font-monospace b-red t-white' onClick={() => closeMenu()}> x </button>
                </div>
                <div className='offcanvas-body d-flex flex-column justify-content-between'>
                    <div className='d-flex flex-column gap-3'>
                        <button className='btn bo-white t-white' onClick={() => onChange('home')}> {t('MAIN_MENU.HOME')} </button>
                        <button className='btn bo-white t-white' onClick={() => onChange('game')}> {t('MAIN_MENU.PLAY')} </button>
                        <button className='btn bo-white t-white' onClick={() => onChange('study')}> {t('MAIN_MENU.STUDY')} </button>
                        <button className='btn bo-white t-white' onClick={() => onChange('about')}> {t('MAIN_MENU.ABOUT')} </button>
                    </div>
                    <div className='mt-auto mb-0 d-flex justify-content-end'>
                        <button className='btn b-red bo-white t-white' data-bs-toggle='modal' data-bs-target='#languageModal'>
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
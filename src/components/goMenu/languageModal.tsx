import { useTranslation } from 'react-i18next'

type LanguageModalHandler = {
    id: string
}

function LanguageModal({ languageModalHandler }: { languageModalHandler: LanguageModalHandler }) {
    const { i18n } = useTranslation('global');
    const { t } = useTranslation();

    const handleLanguageSelect = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className='modal fade' id={languageModalHandler.id} data-bs-backdrop='static'>
            <div className='modal-dialog modal-dialog-centered'>
                <div className='modal-content b-black bo-white t-white'>
                    <div className='modal-header'>
                        <span className='fs-5 t-white'>{t('LANGUAGE_MODAL.LANGUAGE')}</span>
                        <button className='btn fs-2 font-monospace lh-sm t-white ' data-bs-dismiss='modal'>x</button>
                    </div>
                    <div className='modal-body d-flex flex-column justify-content-center gap-3'>
                        <button className='btn b-red t-white' data-bs-dismiss='modal' onClick={() => handleLanguageSelect('es')}>Español</button>
                        <button className='btn b-red t-white' data-bs-dismiss='modal' onClick={() => handleLanguageSelect('en')}>English</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LanguageModal
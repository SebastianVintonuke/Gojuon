import { useTranslation } from 'react-i18next'

type LanguageModalHandler = {
    id: string
}

function LanguageModal({ languageModalHandler }: { languageModalHandler: LanguageModalHandler }) {
    const { i18n } = useTranslation('global');

    const handleLanguageSelect = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className='modal fade' id={languageModalHandler.id} data-bs-backdrop='static'>
            <div className='modal-dialog modal-dialog-centered'>
                <div className='modal-content bg-primary text-dark'>
                    <div className='modal-header'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal'></button>
                    </div>
                    <div className='modal-body d-flex flex-column justify-content-center gap-3'>
                        <button type='button' className='btn btn-secondary text-primary' data-bs-dismiss='modal' onClick={() => handleLanguageSelect('es')}>Español</button>
                        <button type='button' className='btn btn-secondary text-primary' data-bs-dismiss='modal' onClick={() => handleLanguageSelect('en')}>English</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LanguageModal
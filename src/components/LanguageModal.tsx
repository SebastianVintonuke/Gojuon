import { useTranslation } from 'react-i18next'

function LanguageModal({ dataBsTarget }: { dataBsTarget: string }) {
    const { i18n } = useTranslation("global");

    const handleLanguageSelect = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="modal fade" id={dataBsTarget} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-primary text-dark">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex flex-column justify-content-center gap-3">
                        <button type="button" className="btn btn-secondary text-primary" data-bs-dismiss="modal" aria-label="Close" onClick={() => handleLanguageSelect("es")}>Español</button>
                        <button type="button" className="btn btn-secondary text-primary" data-bs-dismiss="modal" aria-label="Close" onClick={() => handleLanguageSelect("en")}>English</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LanguageModal
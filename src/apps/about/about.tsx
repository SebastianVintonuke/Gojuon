import { useTranslation } from 'react-i18next';
import { useScreenOrientation } from '../../utils/screenOrientation';

function About() {
    const isVerticalScreen = useScreenOrientation();
    const { t } = useTranslation();

    return (
        <div className='container d-flex align-items-center justify-content-center h-100 gap-2' style={{ flexDirection: (isVerticalScreen ? 'column' : 'row') }}>
            <div className={'card b-black bo-white t-white mb-3 w-75 ' + (isVerticalScreen ? '' : 'h-75')}>
                <h5 className='card-header'>Gojūon</h5>
                <div className='card-body d-flex flex-column gap-2'>
                    <span className='card-text badge b-red t-white'>v1.0.0</span>
                </div>
            </div>
            <div className={'card b-black bo-white t-white mb-3 w-75 ' + (isVerticalScreen ? '' : 'h-75')}>
                <h5 className='card-header'>{t('ABOUT.BUGS_OR_SUGGESTIONS')}</h5>
                <div className='card-body d-flex flex-column gap-2'>
                    <span className='card-text'>{t('ABOUT.THANK_YOU_FOR_REPORTING_ANY_BUG_OR_SEGGESTIONS')}</span>
                    <a className='btn b-red t-white' href=''>{t('ABOUT.REPORT_A_BUG')}</a>
                </div>
            </div>
            <div className={'card b-black bo-white t-white mb-3 w-75 ' + (isVerticalScreen ? '' : 'h-75')}>
                <h5 className='card-header'>{t('ABOUT.DEVELOPED_BY')}</h5>
                <div className='card-body d-flex flex-column gap-2'>
                    <h6> Sebastian M. Vintoñuke </h6>
                    <a className='d-flex gap-2 text-decoration-none badge b-red t-white' href='https://sebastian-vintonyuke.vercel.app/' target='blank'>
                        <i className='fa fa-code'></i>
                        <span className='font-monospace'>{t('ABOUT.MY_WEB_PAGE')}</span>
                    </a>
                    <a className='d-flex gap-2 text-decoration-none badge b-red t-white' href='https://github.com/SebastianVintonuke' target='blank'>
                        <i className='fa fa-github'></i>
                        <span className='font-monospace'>Github</span>
                    </a>
                    <a className='d-flex gap-2 text-decoration-none badge b-red t-white' href='https://www.linkedin.com/in/sebastian-vintoñuke' target='blank'>
                        <i className='fa fa-linkedin'></i>
                        <span className='font-monospace'>LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About
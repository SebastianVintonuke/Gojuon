import { GridTransition } from './gridTransition';
import { BarsTransition } from './barsTransition';

const TRANSITION = '<div id="TransitionManager" style="position: absolute; width: 100vw; height: 100vh;"></div>';

export class TransitionManager {
    private static instance: TransitionManager | null = null;
    private document: Document;
    private target: HTMLElement;
    private transitionSelected!: GridTransition | BarsTransition;

    private constructor(document: Document, target: HTMLElement) {
        this.document = document;
        this.target = target;
    }

    public static getInstance(document?: Document, target?: HTMLElement): TransitionManager {
        if (!TransitionManager.instance) {
            if (!document) {
                throw new Error('TransitionManager instance not initialized and there is not document to initialize');
            } else if (!target) {
                throw new Error('TransitionManager instance not initialized and there is not target to initialize');
            } else {
                TransitionManager.instance = new TransitionManager(document, target);
            }
        }
        return TransitionManager.instance;
    }

    public runTransition(actionToDoBetween: Function): void {
        if (Math.random() < 0.5) {
            this.transitionSelected = GridTransition;
        } else {
            this.transitionSelected  = BarsTransition;
        }

        this.target.insertAdjacentHTML('afterbegin', TRANSITION);
        const TransitionManagerElm: HTMLElement | null = this.target.querySelector('#TransitionManager');
        if (!TransitionManagerElm) { throw new Error('The main HTMLElement of the TransitionManager not found'); }
        
        // Scroll Disabled
        const HtmlElement = this.document.querySelector('html');
        if (!HtmlElement) { throw new Error('HMLElement not found in Document'); }
        HtmlElement.style.overflowY = 'hidden';
        
        (this.transitionSelected as any).addAnimation(TransitionManagerElm);

        const FirstHalfFlag: HTMLElement | null = this.target.querySelector((this.transitionSelected as any).firstHalfFlagId);
        if (!FirstHalfFlag) { throw new Error('FirstHalfFlag not found'); }
        FirstHalfFlag.addEventListener('transitionend', () => { this.doActionBetweenAndRunSecondHalfAnimation(actionToDoBetween) });
        
        requestAnimationFrame(() => { (this.transitionSelected as any).animationIn(this.target); });
    }

    private doActionBetweenAndRunSecondHalfAnimation(actionToDoBetween: Function) {
        const FirstHalfFlag: HTMLElement | null = this.target.querySelector((this.transitionSelected as any).firstHalfFlagId);
        if (!FirstHalfFlag) { throw new Error('FirstHalfFlag not found'); }
        FirstHalfFlag.removeEventListener('transitionend', () => { this.doActionBetweenAndRunSecondHalfAnimation(actionToDoBetween) });

        actionToDoBetween();

        const SecondHalfFlag = this.target.querySelector((this.transitionSelected as any).secondHalfFlagId);
        if (!SecondHalfFlag) { throw new Error('SecondHalfFlag not found'); }
        SecondHalfFlag.addEventListener('transitionend', () => { this.removeTransition() });

        requestAnimationFrame(() => { (this.transitionSelected as any).animationOut(this.target); });
    }

    private removeTransition() {
        const SecondHalfFlag: HTMLElement | null = this.target.querySelector((this.transitionSelected as any).secondHalfFlagId);
        if (!SecondHalfFlag) { throw new Error('SecondHalfFlag not found'); }
        SecondHalfFlag.removeEventListener('transitionend', () => { this.removeTransition() });

        // Scroll Enabled
        const HtmlElement = this.document.querySelector('html');
        if (!HtmlElement) { throw new Error('HMLElement not found in Document'); }
        HtmlElement.style.overflowY = 'auto';

        const TransitionManagerElm = this.target.querySelector('#TransitionManager');
        if (!TransitionManagerElm) { throw new Error('The main HTMLElement of the TransitionManager not found'); }
        this.target.removeChild(TransitionManagerElm);
    }
}

const TRANSITION = `
<div id="transition" style="position: absolute; width: 100vw; height: 100vh;">
    <div style="display: flex; width: 100%; height: 100%;">
        <div id="transition_bar_1" style="z-index: 10; background-color: white; height: 100%; flex-grow: 1; transform: translateY(-100vh); transition: transform 0.5s ease-in-out;"></div>
        <div id="transition_bar_2" style="z-index: 10; background-color: black; height: 100%; flex-grow: 1; transform: translateY(100vh); transition: transform 0.5s ease-in-out;"></div>
        <div id="transition_bar_3" style="z-index: 10; background-color: white; height: 100%; flex-grow: 1; transform: translateY(-100vh); transition: transform 0.5s ease-in-out;"></div>
        <div id="transition_bar_4" style="z-index: 10; background-color: black; height: 100%; flex-grow: 1; transform: translateY(100vh); transition: transform 0.5s ease-in-out;"></div>
        <div id="transition_bar_5" style="z-index: 10; background-color: white; height: 100%; flex-grow: 1; transform: translateY(-100vh); transition: transform 0.5s ease-in-out;"></div>
        <div id="transition_bar_6" style="z-index: 10; background-color: black; height: 100%; flex-grow: 1; transform: translateY(100vh); transition: transform 0.5s ease-in-out;"></div>
    </div>
</div>`;


export class TransitionManager {
    private static instance: TransitionManager | null = null;
    private document: Document;
    private target: HTMLElement;

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

    public runTransitionAndDoBetween(actionToDoBetween: Function): void {
        this.target.insertAdjacentHTML('afterbegin', TRANSITION);

        let htmlElement = this.document.querySelector('html');
        if (!htmlElement) { throw new Error('HMLElement not found in Document'); }
        htmlElement.style.overflowY = 'hidden';

        let transitionFlag = this.target.querySelector('#transition_bar_6');
        if (!transitionFlag) { throw new Error('Transition Flag Element not found'); }
        transitionFlag.addEventListener('transitionend', () => { this.removeTransition(); });

        requestAnimationFrame(() => {
            this.startAnimation();
            requestAnimationFrame(() => {
                setTimeout(() => actionToDoBetween(), 300);
                requestAnimationFrame(() => {
                    this.endAnimation();
                });
            });
        });
    }

    private removeTransition() {
        let transitionFlag: HTMLElement | null = this.target.querySelector('#transition_bar_6');
        if (!transitionFlag) { throw new Error('transition Flag not found in DOM'); }
        transitionFlag.removeEventListener('transitionend', () => { this.removeTransition(); });

        let htmlElement = this.document.querySelector('html');
        if (!htmlElement) { throw new Error('HMLElement not found in Document'); }
        htmlElement.style.overflowY = 'auto';

        let transition = this.target.querySelector('#transition');
        if (!transition) { throw new Error('Transition not found in DOM'); }
        this.target.removeChild(transition);
    }

    private startAnimation() {
        let transitionBar1: HTMLElement | null = this.target.querySelector('#transition_bar_1');
        let transitionBar2: HTMLElement | null = this.target.querySelector('#transition_bar_2');
        let transitionBar3: HTMLElement | null = this.target.querySelector('#transition_bar_3');
        let transitionBar4: HTMLElement | null = this.target.querySelector('#transition_bar_4');
        let transitionBar5: HTMLElement | null = this.target.querySelector('#transition_bar_5');
        let transitionBar6: HTMLElement | null = this.target.querySelector('#transition_bar_6');

        if (!transitionBar1 || !transitionBar2 || !transitionBar3 || !transitionBar4 || !transitionBar5 || !transitionBar6) {
            throw new Error('Transition Element not found');
        }

        transitionBar1.style.transform = 'translateY(50vh)';
        transitionBar2.style.transform = 'translateY(-50vh)';
        transitionBar3.style.transform = 'translateY(50vh)';
        transitionBar4.style.transform = 'translateY(-50vh)';
        transitionBar5.style.transform = 'translateY(50vh)';
        transitionBar6.style.transform = 'translateY(-50vh)';
    }

    private endAnimation() {
        let transitionBar1: HTMLElement | null = this.target.querySelector('#transition_bar_1');
        let transitionBar2: HTMLElement | null = this.target.querySelector('#transition_bar_2');
        let transitionBar3: HTMLElement | null = this.target.querySelector('#transition_bar_3');
        let transitionBar4: HTMLElement | null = this.target.querySelector('#transition_bar_4');
        let transitionBar5: HTMLElement | null = this.target.querySelector('#transition_bar_5');
        let transitionBar6: HTMLElement | null = this.target.querySelector('#transition_bar_6');

        if (!transitionBar1 || !transitionBar2 || !transitionBar3 || !transitionBar4 || !transitionBar5 || !transitionBar6) {
            throw new Error('Transition Element not found');
        }

        transitionBar1.style.transform = 'translateY(100vh)';
        transitionBar2.style.transform = 'translateY(-100vh)';
        transitionBar3.style.transform = 'translateY(100vh)';
        transitionBar4.style.transform = 'translateY(-100vh)';
        transitionBar5.style.transform = 'translateY(100vh)';
        transitionBar6.style.transform = 'translateY(-100vh)';
    }
}

const BAR_TRANSITION = `
    <div style="display: flex; width: 100%; height: 100%;">
        <div id="BarTransition_Bar1" style="z-index: 10; background-color: #fafafa; height: 100%; flex-grow: 1; transform: translateY(-100vh); transition: transform 0.5s ease-in-out;"></div>
        <div id="BarTransition_Bar2" style="z-index: 10; background-color: #0d0d0d; height: 100%; flex-grow: 1; transform: translateY(100vh); transition: transform 0.5s ease-in-out;"></div>
        <div id="BarTransition_Bar3" style="z-index: 10; background-color: #fafafa; height: 100%; flex-grow: 1; transform: translateY(-100vh); transition: transform 0.5s ease-in-out;"></div>
        <div id="BarTransition_Bar4" style="z-index: 10; background-color: #0d0d0d; height: 100%; flex-grow: 1; transform: translateY(100vh); transition: transform 0.5s ease-in-out;"></div>
        <div id="BarTransition_Bar5" style="z-index: 10; background-color: #fafafa; height: 100%; flex-grow: 1; transform: translateY(-100vh); transition: transform 0.5s ease-in-out;"></div>
        <div id="BarTransition_Bar6" style="z-index: 10; background-color: #0d0d0d; height: 100%; flex-grow: 1; transform: translateY(100vh); transition: transform 0.5s ease-in-out;"></div>
    </div>
`;

export class BarsTransitions {
    public static firstHalfFlagId = '#BarTransition_Bar6';
    public static secondHalfFlagId = '#BarTransition_Bar6';

    public static addAnimation(transitionManagerElm: HTMLElement) {
        transitionManagerElm.innerHTML += BAR_TRANSITION;
    }

    public static animationIn(target: HTMLElement) {
        let transitionBar1: HTMLElement | null = target.querySelector('#BarTransition_Bar1');
        let transitionBar2: HTMLElement | null = target.querySelector('#BarTransition_Bar2');
        let transitionBar3: HTMLElement | null = target.querySelector('#BarTransition_Bar3');
        let transitionBar4: HTMLElement | null = target.querySelector('#BarTransition_Bar4');
        let transitionBar5: HTMLElement | null = target.querySelector('#BarTransition_Bar5');
        let transitionBar6: HTMLElement | null = target.querySelector('#BarTransition_Bar6');

        if (!transitionBar1 || !transitionBar2 || !transitionBar3 || !transitionBar4 || !transitionBar5 || !transitionBar6) {
            throw new Error('Some transition assets are not available');
        }

        transitionBar1.style.transform = 'translateY(0vh)';
        transitionBar2.style.transform = 'translateY(0vh)';
        transitionBar3.style.transform = 'translateY(0vh)';
        transitionBar4.style.transform = 'translateY(0vh)';
        transitionBar5.style.transform = 'translateY(0vh)';
        transitionBar6.style.transform = 'translateY(0vh)';
    }

    public static animationOut(target: HTMLElement) {
        let transitionBar1: HTMLElement | null = target.querySelector('#BarTransition_Bar1');
        let transitionBar2: HTMLElement | null = target.querySelector('#BarTransition_Bar2');
        let transitionBar3: HTMLElement | null = target.querySelector('#BarTransition_Bar3');
        let transitionBar4: HTMLElement | null = target.querySelector('#BarTransition_Bar4');
        let transitionBar5: HTMLElement | null = target.querySelector('#BarTransition_Bar5');
        let transitionBar6: HTMLElement | null = target.querySelector('#BarTransition_Bar6');

        if (!transitionBar1 || !transitionBar2 || !transitionBar3 || !transitionBar4 || !transitionBar5 || !transitionBar6) {
            throw new Error('Some transition assets are not available');
        }

        transitionBar1.style.transform = 'translateY(100vh)';
        transitionBar2.style.transform = 'translateY(-100vh)';
        transitionBar3.style.transform = 'translateY(100vh)';
        transitionBar4.style.transform = 'translateY(-100vh)';
        transitionBar5.style.transform = 'translateY(100vh)';
        transitionBar6.style.transform = 'translateY(-100vh)';
    }
}
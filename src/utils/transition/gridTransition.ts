
const GRID_TRANSITION = `
    <div style="display: flex; width: 100%; height: 100%;">
        <div style="display: flex; flex-direction: column; width: 100%; height: 100%;">
            <div id="GridTransition_Box1A" style="z-index: 10; background-color: #fafafa; height: 100%; flex-grow: 1; transform: rotateY(90deg); transition: transform 0.5s ease-in-out;"></div>
            <div id="GridTransition_Box2A" style="z-index: 10; background-color: #0d0d0d; height: 100%; flex-grow: 1; transform: translateX(-100vw); transition: transform 0.5s ease-in-out;"></div>
            <div id="GridTransition_Box3A" style="z-index: 10; background-color: #fafafa; height: 100%; flex-grow: 1; transform: rotateY(90deg); transition: transform 0.5s ease-in-out;"></div>
            <div id="GridTransition_Box4A" style="z-index: 10; background-color: #0d0d0d; height: 100%; flex-grow: 1; transform: translateX(-100vw); transition: transform 0.5s ease-in-out;"></div>
            <div id="GridTransition_Box5A" style="z-index: 10; background-color: #fafafa; height: 100%; flex-grow: 1; transform: rotateY(90deg); transition: transform 0.5s ease-in-out;"></div>
            <div id="GridTransition_Box6A" style="z-index: 10; background-color: #0d0d0d; height: 100%; flex-grow: 1; transform: translateX(-100vw); transition: transform 0.5s ease-in-out;"></div>
            <div id="GridTransition_Box7A" style="z-index: 10; background-color: #fafafa; height: 100%; flex-grow: 1; transform: rotateY(90deg); transition: transform 0.5s ease-in-out;"></div>
        </div>
        <div style="display: flex; flex-direction: column; width: 100%; height: 100%;">
            <div id="GridTransition_Box1B" style="z-index: 10; background-color: #fafafa; height: 100%; flex-grow: 1; transform: rotateY(90deg); transition: transform 0.5s ease-in-out;"></div>
            <div id="GridTransition_Box2B" style="z-index: 10; background-color: #0d0d0d; height: 100%; flex-grow: 1; transform: translateX(100vw); transition: transform 0.5s ease-in-out;"></div>
            <div id="GridTransition_Box3B" style="z-index: 10; background-color: #fafafa; height: 100%; flex-grow: 1; transform: rotateY(90deg); transition: transform 0.5s ease-in-out;"></div>
            <div id="GridTransition_Box4B" style="z-index: 10; background-color: #0d0d0d; height: 100%; flex-grow: 1; transform: translateX(100vw); transition: transform 0.5s ease-in-out;"></div>
            <div id="GridTransition_Box5B" style="z-index: 10; background-color: #fafafa; height: 100%; flex-grow: 1; transform: rotateY(90deg); transition: transform 0.5s ease-in-out;"></div>
            <div id="GridTransition_Box6B" style="z-index: 10; background-color: #0d0d0d; height: 100%; flex-grow: 1; transform: translateX(100vw); transition: transform 0.5s ease-in-out;"></div>
            <div id="GridTransition_Box7B" style="z-index: 10; background-color: #fafafa; height: 100%; flex-grow: 1; transform: rotateY(90deg); transition: transform 0.5s ease-in-out;"></div>
        </div>
    </div>
`;

export class GridTransition {
    public static firstHalfFlagId = '#GridTransition_Box7B';
    public static secondHalfFlagId = '#GridTransition_Box7B';

    public static addAnimation(transitionManagerElm: HTMLElement) {
        transitionManagerElm.innerHTML += GRID_TRANSITION;
    }

    public static animationIn(target: HTMLElement) {
        let transitionBox1A: HTMLElement | null = target.querySelector('#GridTransition_Box1A');
        let transitionBox2A: HTMLElement | null = target.querySelector('#GridTransition_Box2A');
        let transitionBox3A: HTMLElement | null = target.querySelector('#GridTransition_Box3A');
        let transitionBox4A: HTMLElement | null = target.querySelector('#GridTransition_Box4A');
        let transitionBox5A: HTMLElement | null = target.querySelector('#GridTransition_Box5A');
        let transitionBox6A: HTMLElement | null = target.querySelector('#GridTransition_Box6A');
        let transitionBox7A: HTMLElement | null = target.querySelector('#GridTransition_Box7A');

        let transitionBox1B: HTMLElement | null = target.querySelector('#GridTransition_Box1B');
        let transitionBox2B: HTMLElement | null = target.querySelector('#GridTransition_Box2B');
        let transitionBox3B: HTMLElement | null = target.querySelector('#GridTransition_Box3B');
        let transitionBox4B: HTMLElement | null = target.querySelector('#GridTransition_Box4B');
        let transitionBox5B: HTMLElement | null = target.querySelector('#GridTransition_Box5B');
        let transitionBox6B: HTMLElement | null = target.querySelector('#GridTransition_Box6B');
        let transitionBox7B: HTMLElement | null = target.querySelector('#GridTransition_Box7B');

        if (!transitionBox1A ||
            !transitionBox2A ||
            !transitionBox3A ||
            !transitionBox4A ||
            !transitionBox5A ||
            !transitionBox6A ||
            !transitionBox7A ||
            !transitionBox1B ||
            !transitionBox2B ||
            !transitionBox3B ||
            !transitionBox4B ||
            !transitionBox5B ||
            !transitionBox6B ||
            !transitionBox7B) {
            throw new Error('Some transition assets are not available');
        }

        transitionBox1A.style.transform = 'rotateY(180deg)';
        transitionBox2A.style.transform = 'translateX(0)';
        transitionBox3A.style.transform = 'rotateY(180deg)';
        transitionBox4A.style.transform = 'translateX(0)';
        transitionBox5A.style.transform = 'rotateY(180deg)';
        transitionBox6A.style.transform = 'translateX(0)';
        transitionBox7A.style.transform = 'rotateY(180deg)';

        transitionBox1B.style.transform = 'rotateY(180deg)';
        transitionBox2B.style.transform = 'translateX(0)';
        transitionBox3B.style.transform = 'rotateY(180deg)';
        transitionBox4B.style.transform = 'translateX(0)';
        transitionBox5B.style.transform = 'rotateY(180deg)';
        transitionBox6B.style.transform = 'translateX(0)';
        transitionBox7B.style.transform = 'rotateY(180deg)';
    }

    public static animationOut(target: HTMLElement) {
        let transitionBox1A: HTMLElement | null = target.querySelector('#GridTransition_Box1A');
        let transitionBox2A: HTMLElement | null = target.querySelector('#GridTransition_Box2A');
        let transitionBox3A: HTMLElement | null = target.querySelector('#GridTransition_Box3A');
        let transitionBox4A: HTMLElement | null = target.querySelector('#GridTransition_Box4A');
        let transitionBox5A: HTMLElement | null = target.querySelector('#GridTransition_Box5A');
        let transitionBox6A: HTMLElement | null = target.querySelector('#GridTransition_Box6A');
        let transitionBox7A: HTMLElement | null = target.querySelector('#GridTransition_Box7A');

        let transitionBox1B: HTMLElement | null = target.querySelector('#GridTransition_Box1B');
        let transitionBox2B: HTMLElement | null = target.querySelector('#GridTransition_Box2B');
        let transitionBox3B: HTMLElement | null = target.querySelector('#GridTransition_Box3B');
        let transitionBox4B: HTMLElement | null = target.querySelector('#GridTransition_Box4B');
        let transitionBox5B: HTMLElement | null = target.querySelector('#GridTransition_Box5B');
        let transitionBox6B: HTMLElement | null = target.querySelector('#GridTransition_Box6B');
        let transitionBox7B: HTMLElement | null = target.querySelector('#GridTransition_Box7B');

        if (!transitionBox1A ||
            !transitionBox2A ||
            !transitionBox3A ||
            !transitionBox4A ||
            !transitionBox5A ||
            !transitionBox6A ||
            !transitionBox7A ||
            !transitionBox1B ||
            !transitionBox2B ||
            !transitionBox3B ||
            !transitionBox4B ||
            !transitionBox5B ||
            !transitionBox6B ||
            !transitionBox7B) {
            throw new Error('Some transition assets are not available');
        }

        transitionBox1A.style.backgroundColor = '#871217';
        transitionBox2B.style.backgroundColor = '#871217';
        transitionBox3A.style.backgroundColor = '#871217';
        transitionBox4B.style.backgroundColor = '#871217';
        transitionBox5A.style.backgroundColor = '#871217';
        transitionBox6B.style.backgroundColor = '#871217';
        transitionBox7A.style.backgroundColor = '#871217';

        transitionBox1A.style.transform = 'rotateY(90deg)';
        transitionBox2A.style.transform = 'translateX(-100vw)';
        transitionBox3A.style.transform = 'rotateY(90deg)';
        transitionBox4A.style.transform = 'translateX(-100vw)';
        transitionBox5A.style.transform = 'rotateY(90deg)';
        transitionBox6A.style.transform = 'translateX(-100vw)';
        transitionBox7A.style.transform = 'rotateY(90deg)';

        transitionBox1B.style.transform = 'rotateY(90deg)';
        transitionBox2B.style.transform = 'translateX(100vw)';
        transitionBox3B.style.transform = 'rotateY(90deg)';
        transitionBox4B.style.transform = 'translateX(100vw)';
        transitionBox5B.style.transform = 'rotateY(90deg)';
        transitionBox6B.style.transform = 'translateX(100vw)';
        transitionBox7B.style.transform = 'rotateY(90deg)';
    }
}
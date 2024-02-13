type VolumeLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type Entry = {
    id: string,
    source: string
}

export class SoundPlayer {
    private static instance: SoundPlayer | null = null;
    private elm: HTMLElement;

    private constructor(document: Document, entries: Array<Entry>) {
        this.elm = document.createElement('div');
        this.elm.id = 'SoundPlayer';

        entries.forEach(entry => {
            this.elm.appendChild(this.createAudioElement(entry.id, entry.source));
        });

        document.body.appendChild(this.elm);
        this.generalVolume(10);
    }

    public static getInstance(document?: Document, entries?: Array<Entry>): SoundPlayer {
        if (!SoundPlayer.instance) {
            if (!document) {
                throw new Error('SoundPlayer instance not initialized and there is not document to initialize');
            } else if (!entries) {
                throw new Error('SoundPlayer instance not initialized and there is not entries to initialize');
            } else {
                SoundPlayer.instance = new SoundPlayer(document, entries);
            }
        }
        return SoundPlayer.instance;
    }

    public play(id: string): void {
        let targetElm: HTMLAudioElement | null = this.elm.querySelector('#' + id);
        if (!targetElm) {
            throw new Error('Invalid Sound Id');
        } else {
            targetElm.play();
        }
    }

    public pause(id: string): void {
        let targetElm: HTMLAudioElement | null = this.elm.querySelector('#' + id);
        if (!targetElm) {
            throw new Error('Invalid Sound Id');
        } else {
            targetElm.pause();
        }
    }

    public generalVolume(newVolume: VolumeLevel): void {
        for (let targetElm of this.elm.children) {
            if (targetElm instanceof HTMLAudioElement) {
                targetElm.volume = newVolume / 10;
            }
        }
    }

    private createAudioElement(id: string, source: string): HTMLAudioElement {
        const audioElement = document.createElement('audio');
        audioElement.setAttribute('id', id);
        const sourceElement = document.createElement('source');
        sourceElement.setAttribute('src', source);
        sourceElement.setAttribute('type', 'audio/mpeg');
        audioElement.appendChild(sourceElement);
        return audioElement
    }

}
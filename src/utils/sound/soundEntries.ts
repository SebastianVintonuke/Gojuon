import { HIRAGANA, KanaKeys } from "../../assets/kanas";
import { Entry } from "./soundPlayer";

export const SoundEntries = getSoundEntries();

function getSoundEntries() {
    let soundEntries: Array<Entry> = [];

    appendKana('Monograph', soundEntries);
    appendKana('Diacritic', soundEntries);
    appendKana('Diagraph', soundEntries);

    return soundEntries
}

function appendKana(kana: KanaKeys, array: Array<Entry>) {
    HIRAGANA[kana].forEach(phonemesGroup => {
        phonemesGroup.forEach(jpCharacterOrNull => {
            if (jpCharacterOrNull) {
                array.push({ id: jpCharacterOrNull.romaji, source: './sound/' + jpCharacterOrNull.sound });
            }
        });
    });
}
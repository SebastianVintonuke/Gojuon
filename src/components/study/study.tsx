import { useState } from 'react';

function Study() {
    const [tab, setTab] = useState('Hiragana');
    const [character, setCharacter] = useState({ char: '', romaji: '' });

    let getKanaSelected = () => {
        return tab === 'Hiragana' ? Hiragana : Katakana
    }

    let isHiraganaSelected = () => {
        return tab === 'Hiragana'
    }

    return (
        <div className="container d-flex flex-column justify-content-center">
            { /* Modal */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-primary text-dark">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex flex-column justify-content-center gap-3">
                            <img src={`/img/kanas/${tab}_${character.romaji.toLowerCase()}_stroke_order_animation.gif`} className="img-thumbnail"></img>
                            <div className="d-flex align-items-center justify-content-evenly">
                                <span className="fs-2"> Rōmaji: {character.romaji} </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { /* Body */ }
            <div className="btn-group mx-2 my-3">
                <button type="button" className={"btn btn-outline-primary " + (isHiraganaSelected() ? "active" : "")} onClick={() => setTab('Hiragana')}> Hiragana </button>
                <button type="button" className={"btn btn-outline-primary " + (!isHiraganaSelected() ? "active" : "")} onClick={() => setTab('Katakana')}> Katakana </button>
            </div>
            <div className="d-flex flex-column justify-content-center h-100">
                {Object.keys(getKanaSelected()).map((key) => (
                    <div className="container text-center my-3">
                        <h5> {key} </h5>
                        {getKanaSelected()[key as KanaKeys].map((_, index: number) => (
                            <div className="row my-3">
                                {getKanaSelected()[key as KanaKeys][index].map((character) => (
                                    <div className="col">
                                        {character ?
                                            <div className="d-flex flex-column" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setCharacter(character)}>
                                                <span className="badge text-bg-primary fs-4">{character ? character.char : ''}</span>
                                                <span className="fs-6"> {character ? character.romaji : ''} </span>
                                            </div>
                                            : ''}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Study


type Kana = {
    Monograph: ConjugationsGroup,
    Diacritic: ConjugationsGroup,
    Diagraph: ConjugationsGroup
};
type KanaKeys = 'Monograph' | 'Diacritic' | 'Diagraph';

type ConjugationsGroup = Array<PhonemesGroup>

type PhonemesGroup = Array<JPCharacter | null>

type JPCharacter = {
    char: string,
    romaji: string
}

const Hiragana: Kana = {
    Monograph: [
        [{ char: 'あ', romaji: 'A' }, { char: 'い', romaji: 'I' }, { char: 'う', romaji: 'U' }, { char: 'え', romaji: 'E' }, { char: 'お', romaji: 'O' }],
        [{ char: 'か', romaji: 'KA' }, { char: 'き', romaji: 'KI' }, { char: 'く', romaji: 'KU' }, { char: 'け', romaji: 'KE' }, { char: 'こ', romaji: 'KO' }],
        [{ char: 'さ', romaji: 'SA' }, { char: 'し', romaji: 'SHI' }, { char: 'す', romaji: 'SU' }, { char: 'せ', romaji: 'SE' }, { char: 'そ', romaji: 'SO' }],
        [{ char: 'た', romaji: 'TA' }, { char: 'ち', romaji: 'CHI' }, { char: 'つ', romaji: 'TSU' }, { char: 'て', romaji: 'TE' }, { char: 'と', romaji: 'TO' }],
        [{ char: 'な', romaji: 'NA' }, { char: 'に', romaji: 'NI' }, { char: 'ぬ', romaji: 'NU' }, { char: 'ね', romaji: 'NE' }, { char: 'の', romaji: 'NO' }],
        [{ char: 'は', romaji: 'HA' }, { char: 'ひ', romaji: 'HI' }, { char: 'ふ', romaji: 'FU' }, { char: 'へ', romaji: 'HE' }, { char: 'ほ', romaji: 'HO' }],
        [{ char: 'ま', romaji: 'MA' }, { char: 'み', romaji: 'MI' }, { char: 'む', romaji: 'MU' }, { char: 'め', romaji: 'ME' }, { char: 'も', romaji: 'MO' }],
        [{ char: 'や', romaji: 'YA' }, null, { char: 'ゆ', romaji: 'YU' }, null, { char: 'よ', romaji: 'YO' }],
        [{ char: 'ら', romaji: 'RA' }, { char: 'り', romaji: 'RI' }, { char: 'る', romaji: 'RU' }, { char: 'れ', romaji: 'RE' }, { char: 'ろ', romaji: 'RO' }],
        [{ char: 'わ', romaji: 'WA' }, null, null, null, { char: 'を', romaji: 'WO' }],
        [{ char: 'ん', romaji: 'N' }, null, null, null, null]
    ],
    Diacritic: [
        [{ char: 'が', romaji: 'GA' }, { char: 'ぎ', romaji: 'GI' }, { char: 'ぐ', romaji: 'GU' }, { char: 'げ', romaji: 'GE' }, { char: 'ご', romaji: 'GO' }],
        [{ char: 'ざ', romaji: 'ZA' }, { char: 'じ', romaji: 'ZI' }, { char: 'ず', romaji: 'ZU' }, { char: 'ぜ', romaji: 'ZE' }, { char: 'ぞ', romaji: 'ZO' }],
        [{ char: 'だ', romaji: 'DA' }, { char: 'ぢ', romaji: 'DI' }, { char: 'づ', romaji: 'DU' }, { char: 'で', romaji: 'DE' }, { char: 'ど', romaji: 'DO' }],
        [{ char: 'ば', romaji: 'BA' }, { char: 'び', romaji: 'BI' }, { char: 'ぶ', romaji: 'BU' }, { char: 'べ', romaji: 'BE' }, { char: 'ぼ', romaji: 'BO' }],
        [{ char: 'ぱ', romaji: 'PA' }, { char: 'ぴ', romaji: 'PI' }, { char: 'ぷ', romaji: 'PU' }, { char: 'ぺ', romaji: 'PE' }, { char: 'ぽ', romaji: 'PO' }],
    ],
    Diagraph: [
        [{ char: 'きゃ', romaji: 'KYA' }, null, { char: 'きゅ', romaji: 'KYU' }, null, { char: 'きょ', romaji: 'KYO' }],
        [{ char: 'しゃ', romaji: 'SHA' }, null, { char: 'しゅ', romaji: 'SHU' }, null, { char: 'しょ', romaji: 'SHO' }],
        [{ char: 'ちゃ', romaji: 'CHA' }, null, { char: 'ちゅ', romaji: 'CHU' }, null, { char: 'ちょ', romaji: 'CHO' }],
        [{ char: 'にゃ', romaji: 'NYA' }, null, { char: 'にゅ', romaji: 'NYU' }, null, { char: 'にょ', romaji: 'NYO' }],
        [{ char: 'ひゃ', romaji: 'HYA' }, null, { char: 'ひゅ', romaji: 'HYU' }, null, { char: 'ひょ', romaji: 'HYO' }],
        [{ char: 'みゃ', romaji: 'MYA' }, null, { char: 'みゅ', romaji: 'MYU' }, null, { char: 'みょ', romaji: 'MYO' }],
        [{ char: 'りゃ', romaji: 'RYA' }, null, { char: 'りゅ', romaji: 'RYU' }, null, { char: 'りょ', romaji: 'RYO' }],
        [{ char: 'ぎゃ', romaji: 'GYA' }, null, { char: 'ぎゅ', romaji: 'GYU' }, null, { char: 'ぎょ', romaji: 'GYO' }],
        [{ char: 'じゃ', romaji: 'JA' }, null, { char: 'じゅ', romaji: 'JU' }, null, { char: 'じょ', romaji: 'JO' }],
        [{ char: 'びゃ', romaji: 'BYA' }, null, { char: 'びゅ', romaji: 'BYU' }, null, { char: 'びょ', romaji: 'BYO' }],
        [{ char: 'ぴゃ', romaji: 'PYA' }, null, { char: 'ぴゅ', romaji: 'PYU' }, null, { char: 'ぴょ', romaji: 'PYO' }],
    ]
}

const Katakana = {
    Monograph: [
        [{ char: 'ア', romaji: 'A' }, { char: 'イ', romaji: 'I' }, { char: 'ウ', romaji: 'U' }, { char: 'エ', romaji: 'E' }, { char: 'オ', romaji: 'O' }],
        [{ char: 'カ', romaji: 'KA' }, { char: 'キ', romaji: 'KI' }, { char: 'ク', romaji: 'KU' }, { char: 'ケ', romaji: 'KE' }, { char: 'コ', romaji: 'KO' }],
        [{ char: 'サ', romaji: 'SA' }, { char: 'シ', romaji: 'SHI' }, { char: 'ス', romaji: 'SU' }, { char: 'セ', romaji: 'SE' }, { char: 'ソ', romaji: 'SO' }],
        [{ char: 'タ', romaji: 'TA' }, { char: 'チ', romaji: 'CHI' }, { char: 'ツ', romaji: 'TSU' }, { char: 'テ', romaji: 'TE' }, { char: 'ト', romaji: 'TO' }],
        [{ char: 'ナ', romaji: 'NA' }, { char: 'ニ', romaji: 'NI' }, { char: 'ヌ', romaji: 'NU' }, { char: 'ネ', romaji: 'NE' }, { char: 'ノ', romaji: 'NO' }],
        [{ char: 'ハ', romaji: 'HA' }, { char: 'ヒ', romaji: 'HI' }, { char: 'フ', romaji: 'FU' }, { char: 'ヘ', romaji: 'HE' }, { char: 'ホ', romaji: 'HO' }],
        [{ char: 'マ', romaji: 'MA' }, { char: 'ミ', romaji: 'MI' }, { char: 'ム', romaji: 'MU' }, { char: 'メ', romaji: 'ME' }, { char: 'モ', romaji: 'MO' }],
        [{ char: 'ヤ', romaji: 'YA' }, null, { char: 'ユ', romaji: 'YU' }, null, { char: 'ヨ', romaji: 'YO' }],
        [{ char: 'ラ', romaji: 'RA' }, { char: 'リ', romaji: 'RI' }, { char: 'ル', romaji: 'RU' }, { char: 'レ', romaji: 'RE' }, { char: 'ロ', romaji: 'RO' }],
        [{ char: 'ワ', romaji: 'WA' }, null, null, null, { char: 'ヲ', romaji: 'WO' }],
        [{ char: 'ン', romaji: 'N' }, null, null, null, null],
    ],
    Diacritic: [
        [{ char: 'ガ', romaji: 'GA' }, { char: 'ギ', romaji: 'GI' }, { char: 'グ', romaji: 'GU' }, { char: 'ゲ', romaji: 'GE' }, { char: 'ゴ', romaji: 'GO' }],
        [{ char: 'ザ', romaji: 'ZA' }, { char: 'ジ', romaji: 'ZI' }, { char: 'ズ', romaji: 'ZU' }, { char: 'ゼ', romaji: 'ZE' }, { char: 'ゾ', romaji: 'ZO' }],
        [{ char: 'ダ', romaji: 'DA' }, { char: 'ヂ', romaji: 'DI' }, { char: 'ヅ', romaji: 'DU' }, { char: 'デ', romaji: 'DE' }, { char: 'ド', romaji: 'DO' }],
        [{ char: 'バ', romaji: 'BA' }, { char: 'ビ', romaji: 'BI' }, { char: 'ブ', romaji: 'BU' }, { char: 'ベ', romaji: 'BE' }, { char: 'ボ', romaji: 'BO' }],
        [{ char: 'パ', romaji: 'PA' }, { char: 'ピ', romaji: 'PI' }, { char: 'プ', romaji: 'PU' }, { char: 'ペ', romaji: 'PE' }, { char: 'ポ', romaji: 'PO' }],
    ],
    Diagraph: [
        [{ char: 'キャ', romaji: 'KYA' }, null, { char: 'キュ', romaji: 'KYU' }, null, { char: 'キョ', romaji: 'KYO' }],
        [{ char: 'シャ', romaji: 'SHA' }, null, { char: 'シュ', romaji: 'SHU' }, null, { char: 'ショ', romaji: 'SHO' }],
        [{ char: 'チャ', romaji: 'CHA' }, null, { char: 'チュ', romaji: 'CHU' }, null, { char: 'チョ', romaji: 'CHO' }],
        [{ char: 'ニャ', romaji: 'NYA' }, null, { char: 'ニュ', romaji: 'NYU' }, null, { char: 'ニョ', romaji: 'NYO' }],
        [{ char: 'ヒャ', romaji: 'HYA' }, null, { char: 'ヒュ', romaji: 'HYU' }, null, { char: 'ヒョ', romaji: 'HYO' }],
        [{ char: 'ミャ', romaji: 'MYA' }, null, { char: 'ミュ', romaji: 'MYU' }, null, { char: 'ミョ', romaji: 'MYO' }],
        [{ char: 'リャ', romaji: 'RYA' }, null, { char: 'リュ', romaji: 'RYU' }, null, { char: 'リョ', romaji: 'RYO' }],
        [{ char: 'ギャ', romaji: 'GYA' }, null, { char: 'ギュ', romaji: 'GYU' }, null, { char: 'ギョ', romaji: 'GYO' }],
        [{ char: 'ジャ', romaji: 'JA' }, null, { char: 'ジュ', romaji: 'JU' }, null, { char: 'ジョ', romaji: 'JO' }],
        [{ char: 'ビャ', romaji: 'BYA' }, null, { char: 'ビュ', romaji: 'BYU' }, null, { char: 'ビョ', romaji: 'BYO' }],
        [{ char: 'ピャ', romaji: 'PYA' }, null, { char: 'ピュ', romaji: 'PYU' }, null, { char: 'ピョ', romaji: 'PYO' }],
    ]
}

export type Kana = {
    VOWEL: { A: string, I: string, U: string, E: string, O: string },
    K: { KA: string, KI: string, KU: string, KE: string, KO: string },
    S: { SA: string, SHI: string, SU: string, SE: string, SO: string },
    T: { TA: string, CHI: string, TSU: string, TE: string, TO: string },
    N: { NA: string, NI: string, NU: string, NE: string, NO: string },
    H: { HA: string, HI: string, FU: string, HE: string, HO: string },
    M: { MA: string, MI: string, MU: string, ME: string, MO: string },
    Y: { YA: string, YU: string, YO: string },
    R: { RA: string, RI: string, RU: string, RE: string, RO: string },
    W: { WA: string, WO: string },
    OTHER: { N: string }
}

export type Kanas = { HIRAGANA: Kana, KATAKANA: Kana };

export const KANAS: Kanas = {
    HIRAGANA: {
        VOWEL: {
            A: 'あ',
            I: 'い',
            U: 'う',
            E: 'え',
            O: 'お'
        },
        K: {
            KA: 'か',
            KI: 'き',
            KU: 'く',
            KE: 'け',
            KO: 'こ'
        },
        S: {
            SA: 'さ',
            SHI: 'し',
            SU: 'す',
            SE: 'せ',
            SO: 'そ'
        },
        T: {
            TA: 'た',
            CHI: 'ち',
            TSU: 'つ',
            TE: 'て',
            TO: 'と'
        },
        N: {
            NA: 'な',
            NI: 'に',
            NU: 'ぬ',
            NE: 'ね',
            NO: 'の'
        },
        H: {
            HA: 'は',
            HI: 'ひ',
            FU: 'ふ',
            HE: 'へ',
            HO: 'ほ'
        },
        M: {
            MA: 'ま',
            MI: 'み',
            MU: 'む',
            ME: 'め',
            MO: 'も'
        },
        Y: {
            YA: 'や',
            YU: 'ゆ',
            YO: 'よ'
        },
        R: {
            RA: 'ら',
            RI: 'り',
            RU: 'る',
            RE: 'れ',
            RO: 'ろ'
        },
        W: {
            WA: 'わ',
            WO: 'を'
        },
        OTHER: {
            N: 'ん'
        }
    },
    KATAKANA: {
        VOWEL: {
            A: 'ア',
            I: 'イ',
            U: 'ウ',
            E: 'エ',
            O: 'オ'
        },
        K: {
            KA: 'カ',
            KI: 'キ',
            KU: 'ク',
            KE: 'ケ',
            KO: 'コ'
        },
        S: {
            SA: 'サ',
            SHI: 'シ',
            SU: 'ス',
            SE: 'セ',
            SO: 'ソ'
        },
        T: {
            TA: 'タ',
            CHI: 'チ',
            TSU: 'ツ',
            TE: 'テ',
            TO: 'ト'
        },
        N: {
            NA: 'ナ',
            NI: 'ニ',
            NU: 'ヌ',
            NE: 'ネ',
            NO: 'ノ'
        },
        H: {
            HA: 'ハ',
            HI: 'ヒ',
            FU: 'フ',
            HE: 'ヘ',
            HO: 'ホ'
        },
        M: {
            MA: 'マ',
            MI: 'ミ',
            MU: 'ム',
            ME: 'メ',
            MO: 'モ'
        },
        Y: {
            YA: 'ヤ',
            YU: 'ユ',
            YO: 'ヨ'
        },
        R: {
            RA: 'ラ',
            RI: 'リ',
            RU: 'ル',
            RE: 'レ',
            RO: 'ロ'
        },
        W: {
            WA: 'ワ',
            WO: 'ヲ'
        },
        OTHER: {
            N: 'ン'
        }
    }
};

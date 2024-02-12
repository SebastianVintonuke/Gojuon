type Kana = {
    Monograph: ConjugationsGroup,
    Diacritic: ConjugationsGroup,
    Diagraph: ConjugationsGroup
};
export type KanaKeys = 'Monograph' | 'Diacritic' | 'Diagraph';

type ConjugationsGroup = Array<PhonemesGroup>

type PhonemesGroup = Array<JPCharacter | null>

export type JPCharacter = {
    char: string,
    romaji: string,
    sound: string
}

export const HIRAGANA: Kana = {
    Monograph: [
        [
            { char: 'あ', romaji: 'A', sound: 'monograph/_/a.mp3' },
            { char: 'い', romaji: 'I', sound: 'monograph/_/i.mp3' },
            { char: 'う', romaji: 'U', sound: 'monograph/_/u.mp3' },
            { char: 'え', romaji: 'E', sound: 'monograph/_/e.mp3' },
            { char: 'お', romaji: 'O', sound: 'monograph/_/o.mp3' }
        ],
        [
            { char: 'か', romaji: 'KA', sound: 'monograph/k/ka.mp3' },
            { char: 'き', romaji: 'KI', sound: 'monograph/k/ki.mp3' },
            { char: 'く', romaji: 'KU', sound: 'monograph/k/ku.mp3' },
            { char: 'け', romaji: 'KE', sound: 'monograph/k/ke.mp3' },
            { char: 'こ', romaji: 'KO', sound: 'monograph/k/ko.mp3' }
        ],
        [
            { char: 'さ', romaji: 'SA', sound: 'monograph/s/sa.mp3' },
            { char: 'し', romaji: 'SHI', sound: 'monograph/s/shi.mp3' },
            { char: 'す', romaji: 'SU', sound: 'monograph/s/su.mp3' },
            { char: 'せ', romaji: 'SE', sound: 'monograph/s/se.mp3' },
            { char: 'そ', romaji: 'SO', sound: 'monograph/s/so.mp3' }
        ],
        [
            { char: 'た', romaji: 'TA', sound: 'monograph/t/ta.mp3' },
            { char: 'ち', romaji: 'CHI', sound: 'monograph/t/chi.mp3' },
            { char: 'つ', romaji: 'TSU', sound: 'monograph/t/tsu.mp3' },
            { char: 'て', romaji: 'TE', sound: 'monograph/t/te.mp3' },
            { char: 'と', romaji: 'TO', sound: 'monograph/t/to.mp3' }
        ],
        [
            { char: 'な', romaji: 'NA', sound: 'monograph/n/na.mp3' },
            { char: 'に', romaji: 'NI', sound: 'monograph/n/ni.mp3' },
            { char: 'ぬ', romaji: 'NU', sound: 'monograph/n/nu.mp3' },
            { char: 'ね', romaji: 'NE', sound: 'monograph/n/ne.mp3' },
            { char: 'の', romaji: 'NO', sound: 'monograph/n/no.mp3' }
        ],
        [
            { char: 'は', romaji: 'HA', sound: 'monograph/h/ha.mp3' },
            { char: 'ひ', romaji: 'HI', sound: 'monograph/h/hi.mp3' },
            { char: 'ふ', romaji: 'FU', sound: 'monograph/h/fu.mp3' },
            { char: 'へ', romaji: 'HE', sound: 'monograph/h/he.mp3' },
            { char: 'ほ', romaji: 'HO', sound: 'monograph/h/ho.mp3' }
        ],
        [
            { char: 'ま', romaji: 'MA', sound: 'monograph/m/ma.mp3' },
            { char: 'み', romaji: 'MI', sound: 'monograph/m/mi.mp3' },
            { char: 'む', romaji: 'MU', sound: 'monograph/m/mu.mp3' },
            { char: 'め', romaji: 'ME', sound: 'monograph/m/me.mp3' },
            { char: 'も', romaji: 'MO', sound: 'monograph/m/mo.mp3' }
        ],
        [
            { char: 'や', romaji: 'YA', sound: 'monograph/ya.mp3' },
            null,
            { char: 'ゆ', romaji: 'YU', sound: 'monograph/y/yu.mp3' },
            null,
            { char: 'よ', romaji: 'YO', sound: 'monograph/y/yo.mp3' }
        ],
        [
            { char: 'ら', romaji: 'RA', sound: 'monograph/r/ra.mp3' },
            { char: 'り', romaji: 'RI', sound: 'monograph/r/ri.mp3' },
            { char: 'る', romaji: 'RU', sound: 'monograph/r/ru.mp3' },
            { char: 'れ', romaji: 'RE', sound: 'monograph/r/re.mp3' },
            { char: 'ろ', romaji: 'RO', sound: 'monograph/r/ro.mp3' }
        ],
        [
            { char: 'わ', romaji: 'WA', sound: 'monograph/w/wa.mp3' },
            null,
            null,
            null,
            { char: 'を', romaji: 'WO', sound: 'monograph/w/wo.mp3' }
        ],
        [
            { char: 'ん', romaji: 'N', sound: 'monograph/other/n.mp3' },
            null,
            null,
            null,
            null
        ]
    ],
    Diacritic: [
        [
            { char: 'が', romaji: 'GA', sound: 'diacritic/g/ga.mp3' },
            { char: 'ぎ', romaji: 'GI', sound: 'diacritic/g/gi.mp3' },
            { char: 'ぐ', romaji: 'GU', sound: 'diacritic/g/gu.mp3' },
            { char: 'げ', romaji: 'GE', sound: 'diacritic/g/ge.mp3' },
            { char: 'ご', romaji: 'GO', sound: 'diacritic/g/go.mp3' }
        ],
        [
            { char: 'ざ', romaji: 'ZA', sound: 'diacritic/z/za.mp3' },
            { char: 'じ', romaji: 'JI', sound: 'diacritic/z/ji.mp3' },
            { char: 'ず', romaji: 'ZU', sound: 'diacritic/z/zu.mp3' },
            { char: 'ぜ', romaji: 'ZE', sound: 'diacritic/z/ze.mp3' },
            { char: 'ぞ', romaji: 'ZO', sound: 'diacritic/z/zo.mp3' }
        ],
        [
            { char: 'だ', romaji: 'DA', sound: 'diacritic/d/da.mp3' },
            { char: 'ぢ', romaji: 'DJI', sound: 'diacritic/d/dji.mp3' },
            { char: 'づ', romaji: 'DZU', sound: 'diacritic/d/dzu.mp3' },
            { char: 'で', romaji: 'DE', sound: 'diacritic/d/de.mp3' },
            { char: 'ど', romaji: 'DO', sound: 'diacritic/d/do.mp3' }
        ],
        [
            { char: 'ば', romaji: 'BA', sound: 'diacritic/b/ba.mp3' },
            { char: 'び', romaji: 'BI', sound: 'diacritic/b/bi.mp3' },
            { char: 'ぶ', romaji: 'BU', sound: 'diacritic/b/bu.mp3' },
            { char: 'べ', romaji: 'BE', sound: 'diacritic/b/be.mp3' },
            { char: 'ぼ', romaji: 'BO', sound: 'diacritic/b/bo.mp3' }
        ],
        [
            { char: 'ぱ', romaji: 'PA', sound: 'diacritic/p/pa.mp3' },
            { char: 'ぴ', romaji: 'PI', sound: 'diacritic/p/pi.mp3' },
            { char: 'ぷ', romaji: 'PU', sound: 'diacritic/p/pu.mp3' },
            { char: 'ぺ', romaji: 'PE', sound: 'diacritic/p/pe.mp3' },
            { char: 'ぽ', romaji: 'PO', sound: 'diacritic/p/po.mp3' }
        ]
    ],
    Diagraph: [
        [
            { char: 'きゃ', romaji: 'KYA', sound: 'diagraph/ky/_.mp3' },
            null,
            { char: 'きゅ', romaji: 'KYU', sound: 'diagraph/ky/_.mp3' },
            null,
            { char: 'きょ', romaji: 'KYO', sound: 'diagraph/ky/_.mp3' }
        ],
        [
            { char: 'しゃ', romaji: 'SHA', sound: 'diagraph/sh/_.mp3' },
            null,
            { char: 'しゅ', romaji: 'SHU', sound: 'diagraph/sh/_.mp3' },
            null,
            { char: 'しょ', romaji: 'SHO', sound: 'diagraph/sh/_.mp3' }
        ],
        [
            { char: 'ちゃ', romaji: 'CHA', sound: 'diagraph/ch/_.mp3' },
            null,
            { char: 'ちゅ', romaji: 'CHU', sound: 'diagraph/ch/_.mp3' },
            null,
            { char: 'ちょ', romaji: 'CHO', sound: 'diagraph/ch/_.mp3' }
        ],
        [
            { char: 'にゃ', romaji: 'NYA', sound: 'diagraph/ny/_.mp3' },
            null,
            { char: 'にゅ', romaji: 'NYU', sound: 'diagraph/ny/_.mp3' },
            null,
            { char: 'にょ', romaji: 'NYO', sound: 'diagraph/ny/_.mp3' }
        ],
        [
            { char: 'ひゃ', romaji: 'HYA', sound: 'diagraph/hy/_.mp3' },
            null,
            { char: 'ひゅ', romaji: 'HYU', sound: 'diagraph/hy/_.mp3' },
            null,
            { char: 'ひょ', romaji: 'HYO', sound: 'diagraph/hy/_.mp3' }
        ],
        [
            { char: 'みゃ', romaji: 'MYA', sound: 'diagraph/my/_.mp3' },
            null,
            { char: 'みゅ', romaji: 'MYU', sound: 'diagraph/my/_.mp3' },
            null,
            { char: 'みょ', romaji: 'MYO', sound: 'diagraph/my/_.mp3' }
        ],
        [
            { char: 'りゃ', romaji: 'RYA', sound: 'diagraph/ry/_.mp3' },
            null,
            { char: 'りゅ', romaji: 'RYU', sound: 'diagraph/ry/_.mp3' },
            null,
            { char: 'りょ', romaji: 'RYO', sound: 'diagraph/ry/_.mp3' }
        ],
        [
            { char: 'ぎゃ', romaji: 'GYA', sound: 'diagraph/gy/_.mp3' },
            null,
            { char: 'ぎゅ', romaji: 'GYU', sound: 'diagraph/gy/_.mp3' },
            null,
            { char: 'ぎょ', romaji: 'GYO', sound: 'diagraph/gy/_.mp3' }
        ],
        [
            { char: 'じゃ', romaji: 'JA', sound: 'diagraph/j/_.mp3' },
            null,
            { char: 'じゅ', romaji: 'JU', sound: 'diagraph/j/_.mp3' },
            null,
            { char: 'じょ', romaji: 'JO', sound: 'diagraph/j/_.mp3' }
        ],
        [
            { char: 'びゃ', romaji: 'BYA', sound: 'diagraph/by/_.mp3' },
            null,
            { char: 'びゅ', romaji: 'BYU', sound: 'diagraph/by/_.mp3' },
            null,
            { char: 'びょ', romaji: 'BYO', sound: 'diagraph/by/_.mp3' }
        ],
        [
            { char: 'ぴゃ', romaji: 'PYA', sound: 'diagraph/py/_.mp3' },
            null,
            { char: 'ぴゅ', romaji: 'PYU', sound: 'diagraph/py/_.mp3' },
            null,
            { char: 'ぴょ', romaji: 'PYO', sound: 'diagraph/py/_.mp3' }
        ]
    ]
}

export const KATAKANA = {
    Monograph: [
        [
            { char: 'ア', romaji: 'A', sound: 'monograph/_/a.mp3' },
            { char: 'イ', romaji: 'I', sound: 'monograph/_/i.mp3' },
            { char: 'ウ', romaji: 'U', sound: 'monograph/_/u.mp3' },
            { char: 'エ', romaji: 'E', sound: 'monograph/_/e.mp3' },
            { char: 'オ', romaji: 'O', sound: 'monograph/_/o.mp3' }
        ],
        [
            { char: 'カ', romaji: 'KA', sound: 'monograph/k/ka.mp3' },
            { char: 'キ', romaji: 'KI', sound: 'monograph/k/ki.mp3' },
            { char: 'ク', romaji: 'KU', sound: 'monograph/k/ku.mp3' },
            { char: 'ケ', romaji: 'KE', sound: 'monograph/k/ke.mp3' },
            { char: 'コ', romaji: 'KO', sound: 'monograph/k/ko.mp3' }
        ],
        [
            { char: 'サ', romaji: 'SA', sound: 'monograph/s/sa.mp3' },
            { char: 'シ', romaji: 'SHI', sound: 'monograph/s/shi.mp3' },
            { char: 'ス', romaji: 'SU', sound: 'monograph/s/su.mp3' },
            { char: 'セ', romaji: 'SE', sound: 'monograph/s/se.mp3' },
            { char: 'ソ', romaji: 'SO', sound: 'monograph/s/so.mp3' }
        ],
        [
            { char: 'タ', romaji: 'TA', sound: 'monograph/t/ta.mp3' },
            { char: 'チ', romaji: 'CHI', sound: 'monograph/t/chi.mp3' },
            { char: 'ツ', romaji: 'TSU', sound: 'monograph/t/tsu.mp3' },
            { char: 'テ', romaji: 'TE', sound: 'monograph/t/te.mp3' },
            { char: 'ト', romaji: 'TO', sound: 'monograph/t/to.mp3' }
        ],
        [
            { char: 'ナ', romaji: 'NA', sound: 'monograph/n/na.mp3' },
            { char: 'ニ', romaji: 'NI', sound: 'monograph/n/ni.mp3' },
            { char: 'ヌ', romaji: 'NU', sound: 'monograph/n/nu.mp3' },
            { char: 'ネ', romaji: 'NE', sound: 'monograph/n/ne.mp3' },
            { char: 'ノ', romaji: 'NO', sound: 'monograph/n/no.mp3' }
        ],
        [
            { char: 'ハ', romaji: 'HA', sound: 'monograph/h/ha.mp3' },
            { char: 'ヒ', romaji: 'HI', sound: 'monograph/h/hi.mp3' },
            { char: 'フ', romaji: 'FU', sound: 'monograph/h/fu.mp3' },
            { char: 'ヘ', romaji: 'HE', sound: 'monograph/h/he.mp3' },
            { char: 'ホ', romaji: 'HO', sound: 'monograph/h/ho.mp3' }
        ],
        [
            { char: 'マ', romaji: 'MA', sound: 'monograph/m/ma.mp3' },
            { char: 'ミ', romaji: 'MI', sound: 'monograph/m/mi.mp3' },
            { char: 'ム', romaji: 'MU', sound: 'monograph/m/mu.mp3' },
            { char: 'メ', romaji: 'ME', sound: 'monograph/m/me.mp3' },
            { char: 'モ', romaji: 'MO', sound: 'monograph/m/mo.mp3' }
        ],
        [
            { char: 'ヤ', romaji: 'YA', sound: 'monograph/y/ya.mp3' },
            null,
            { char: 'ユ', romaji: 'YU', sound: 'monograph/y/yu.mp3' },
            null,
            { char: 'ヨ', romaji: 'YO', sound: 'monograph/y/yo.mp3' }
        ],
        [
            { char: 'ラ', romaji: 'RA', sound: 'monograph/r/ra.mp3' },
            { char: 'リ', romaji: 'RI', sound: 'monograph/r/ri.mp3' },
            { char: 'ル', romaji: 'RU', sound: 'monograph/r/ru.mp3' },
            { char: 'レ', romaji: 'RE', sound: 'monograph/r/re.mp3' },
            { char: 'ロ', romaji: 'RO', sound: 'monograph/r/ro.mp3' }
        ],
        [
            { char: 'ワ', romaji: 'WA', sound: 'monograph/w/wa.mp3' },
            null,
            null,
            null,
            { char: 'ヲ', romaji: 'WO', sound: 'monograph/w/wo.mp3' }
        ],
        [
            { char: 'ン', romaji: 'N', sound: 'monograph/other/n.mp3' },
            null,
            null,
            null,
            null
        ]
    ],
    Diacritic: [
        [
            { char: 'ガ', romaji: 'GA', sound: 'diacritic/g/ga.mp3' },
            { char: 'ギ', romaji: 'GI', sound: 'diacritic/g/gi.mp3' },
            { char: 'グ', romaji: 'GU', sound: 'diacritic/g/gu.mp3' },
            { char: 'ゲ', romaji: 'GE', sound: 'diacritic/g/ge.mp3' },
            { char: 'ゴ', romaji: 'GO', sound: 'diacritic/g/go.mp3' }
        ],
        [
            { char: 'ザ', romaji: 'ZA', sound: 'diacritic/z/za.mp3' },
            { char: 'ジ', romaji: 'JI', sound: 'diacritic/z/ji.mp3' },
            { char: 'ズ', romaji: 'ZU', sound: 'diacritic/z/zu.mp3' },
            { char: 'ゼ', romaji: 'ZE', sound: 'diacritic/z/ze.mp3' },
            { char: 'ゾ', romaji: 'ZO', sound: 'diacritic/z/zo.mp3' }
        ],
        [
            { char: 'ダ', romaji: 'DA', sound: 'diacritic/d/da.mp3' },
            { char: 'ヂ', romaji: 'DJI', sound: 'diacritic/d/dji.mp3' },
            { char: 'ヅ', romaji: 'DZU', sound: 'diacritic/d/dzu.mp3' },
            { char: 'デ', romaji: 'DE', sound: 'diacritic/d/de.mp3' },
            { char: 'ド', romaji: 'DO', sound: 'diacritic/d/do.mp3' }
        ],
        [
            { char: 'バ', romaji: 'BA', sound: 'diacritic/b/ba.mp3' },
            { char: 'ビ', romaji: 'BI', sound: 'diacritic/b/bi.mp3' },
            { char: 'ブ', romaji: 'BU', sound: 'diacritic/b/bu.mp3' },
            { char: 'ベ', romaji: 'BE', sound: 'diacritic/b/be.mp3' },
            { char: 'ボ', romaji: 'BO', sound: 'diacritic/b/bo.mp3' }
        ],
        [
            { char: 'パ', romaji: 'PA', sound: 'diacritic/p/pa.mp3' },
            { char: 'ピ', romaji: 'PI', sound: 'diacritic/p/pi.mp3' },
            { char: 'プ', romaji: 'PU', sound: 'diacritic/p/pu.mp3' },
            { char: 'ペ', romaji: 'PE', sound: 'diacritic/p/pe.mp3' },
            { char: 'ポ', romaji: 'PO', sound: 'diacritic/p/po.mp3' }
        ],
    ],
    Diagraph: [
        [
            { char: 'キャ', romaji: 'KYA', sound: 'diagraph/ky/_.mp3' },
            null,
            { char: 'キュ', romaji: 'KYU', sound: 'diagraph/ky/_.mp3' },
            null,
            { char: 'キョ', romaji: 'KYO', sound: 'diagraph/ky/_.mp3' }
        ],
        [
            { char: 'シャ', romaji: 'SHA', sound: 'diagraph/sh/_.mp3' },
            null,
            { char: 'シュ', romaji: 'SHU', sound: 'diagraph/sh/_.mp3' },
            null,
            { char: 'ショ', romaji: 'SHO', sound: 'diagraph/sh/_.mp3'}
        ],
        [
            { char: 'チャ', romaji: 'CHA', sound: 'diagraph/ch/_.mp3' },
            null,
            { char: 'チュ', romaji: 'CHU', sound: 'diagraph/ch/_.mp3' },
            null,
            { char: 'チョ', romaji: 'CHO', sound: 'diagraph/ch/_.mp3' }
        ],
        [
            { char: 'ニャ', romaji: 'NYA', sound: 'diagraph/ny/_.mp3' },
            null,
            { char: 'ニュ', romaji: 'NYU', sound: 'diagraph/ny/_.mp3' },
            null,
            { char: 'ニョ', romaji: 'NYO', sound: 'diagraph/ny/_.mp3' }
        ],
        [
            { char: 'ヒャ', romaji: 'HYA', sound: 'diagraph/hy/_.mp3' },
            null,
            { char: 'ヒュ', romaji: 'HYU', sound: 'diagraph/hy/_.mp3' },
            null,
            { char: 'ヒョ', romaji: 'HYO', sound: 'diagraph/hy/_.mp3' }
        ],
        [
            { char: 'ミャ', romaji: 'MYA', sound: 'diagraph/my/_.mp3' },
            null,
            { char: 'ミュ', romaji: 'MYU', sound: 'diagraph/my/_.mp3' },
            null,
            { char: 'ミョ', romaji: 'MYO', sound: 'diagraph/my/_.mp3' }
        ],
        [
            { char: 'リャ', romaji: 'RYA', sound: 'diagraph/ry/_.mp3' },
            null,
            { char: 'リュ', romaji: 'RYU', sound: 'diagraph/ry/_.mp3' },
            null,
            { char: 'リョ', romaji: 'RYO', sound: 'diagraph/ry/_.mp3' }
        ],
        [
            { char: 'ギャ', romaji: 'GYA', sound: 'diagraph/gy/_.mp3' },
            null,
            { char: 'ギュ', romaji: 'GYU', sound: 'diagraph/gy/_.mp3' },
            null,
            { char: 'ギョ', romaji: 'GYO', sound: 'diagraph/gy/_.mp3' }
        ],
        [
            { char: 'ジャ', romaji: 'JA', sound: 'diagraph/j/_.mp3' },
            null,
            { char: 'ジュ', romaji: 'JU', sound: 'diagraph/j/_.mp3' },
            null,
            { char: 'ジョ', romaji: 'JO', sound: 'diagraph/j/_.mp3' }
        ],
        [
            { char: 'ビャ', romaji: 'BYA', sound: 'diagraph/by/_.mp3' },
            null,
            { char: 'ビュ', romaji: 'BYU', sound: 'diagraph/by/_.mp3' },
            null,
            { char: 'ビョ', romaji: 'BYO', sound: 'diagraph/by/_.mp3' }
        ],
        [
            { char: 'ピャ', romaji: 'PYA', sound: 'diagraph/py/_.mp3' },
            null,
            { char: 'ピュ', romaji: 'PYU', sound: 'diagraph/py/_.mp3' },
            null,
            { char: 'ピョ', romaji: 'PYO', sound: 'diagraph/py/_.mp3'
        }]
    ]
}
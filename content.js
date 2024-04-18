//  Copyright 2024 Arseniy Poroshin
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.

config = {
    "methods": {
        "ru21": {
            "steps": [
                {
                    "зх": "z'h",
                    "сх": "s'h",
                    "цх": "c'h"
                },
                {
                    "а": "a",
                    "б": "b",
                    "в": "v",
                    "г": "g",
                    "д": "d",
                    "е": "e",
                    "ё": "e",
                    "ж": "zh",
                    "з": "z",
                    "и": "i",
                    "к": "k",
                    "л": "l",
                    "м": "m",
                    "н": "n",
                    "о": "o",
                    "п": "p",
                    "р": "r",
                    "с": "s",
                    "т": "t",
                    "у": "u",
                    "ф": "f",
                    "х": "h",
                    "ц": "c",
                    "ч": "ch",
                    "ш": "sh",
                    "щ": "ssh",
                    "ъ": "<spqru-j>",
                    "ы": "i",
                    "ь": "<spqru-j>",
                    "э": "e"
                },
                {
                    "ai": "a'i",
                    "ei": "e'i",
                    "ia": "i'a",
                    "ii": "i'i",
                    "io": "i'o",
                    "iu": "i'u",
                    "oi": "o'i",
                    "ui": "u'i",
                    "shs": "ss",
                    "zhz": "zz",
                },
                {
                    "ai": "a'i",
                    "ei": "e'i",
                    "ia": "i'a",
                    "ii": "i'i",
                    "io": "i'o",
                    "iu": "i'u",
                    "oi": "o'i",
                    "ui": "u'i",
                    "shs": "ss",
                    "zhz": "zz",
                },
                {
                    "й": "i",
                    "ю": "u",
                    "я": "ia"
                },
                {
                    "<spqru-j>e": "'e",
                    "<spqru-j>i": "'i",
                    "<spqru-j>o": "'o",
                    "<spqru-j>u": "'u"
                },
                {
                    "<spqru-j>": ""
                }
            ]
        },
        "ru23e": {
            "steps": [
                {
                    "<spqru-word>": "<spqru-word><spqru-j>",

                    "а": "а<spqru-j>",
                    "е": "е<spqru-j>",
                    "ё": "ё<spqru-j>",
                    "и": "и<spqru-j>",
                    "й": "й<spqru-j>",
                    "о": "о<spqru-j>",
                    "у": "у<spqru-j>",
                    "ы": "ы<spqru-j>",
                    "э": "э<spqru-j>",
                    "ю": "ю<spqru-j>",
                    "я": "я<spqru-j>",

                    "ъ": "ъ<spqru-j>",
                    "ь": "ь<spqru-j>",
                },
                {
                    "<spqru-word>": "<spqru-word><spqru-j>",
                    "а": "а<spqru-j>",
                    "<spqru-j>е": "ye",
                    "<spqru-j>ё": "ye",
                    "ъ<spqru-j>и": "yi",
                    "ь<spqru-j>и": "yi",
                    "ъ<spqru-j>о": "yo",
                    "ь<spqru-j>о": "yo",
                    "<spqru-j>ю": "yu",
                    "<spqru-j>я": "ya",
                },
                {
                    "а": "a",
                    "б": "b",
                    "в": "v",
                    "г": "g",
                    "д": "d",
                    "е": "e",
                    "ё": "e",
                    "ж": "j",
                    "з": "z",
                    "и": "i",
                    "й": "y",
                    "к": "k",
                    "л": "l",
                    "м": "m",
                    "н": "n",
                    "о": "o",
                    "п": "p",
                    "р": "r",
                    "с": "s",
                    "т": "t",
                    "у": "u",
                    "ф": "f",
                    "х": "h",
                    "ц": "c",
                    "ч": "ch",
                    "ш": "sh",
                    "щ": "ssh",
                    "ъ": "",
                    "ы": "e",
                    "ь": "",
                    "э": "e",
                    "ю": "u",
                    "я": "ia",
                },
                {
                    "shs": "ss",
                },
                {
                    "shs": "ss",
                },
                {
                    "<spqru-j>": ""
                }
            ]
        },
        "ru23iy": {
            "steps": [
                {
                    "<spqru-word>": "<spqru-word><spqru-j>",

                    "а": "а<spqru-j>",
                    "е": "е<spqru-j>",
                    "ё": "ё<spqru-j>",
                    "и": "и<spqru-j>",
                    "й": "й<spqru-j>",
                    "о": "о<spqru-j>",
                    "у": "у<spqru-j>",
                    "ы": "ы<spqru-j>",
                    "э": "э<spqru-j>",
                    "ю": "ю<spqru-j>",
                    "я": "я<spqru-j>",

                    "ъ": "ъ<spqru-j>",
                    "ь": "ь<spqru-j>",
                },
                {
                    "<spqru-word>": "<spqru-word><spqru-j>",
                    "а": "а<spqru-j>",
                    "<spqru-j>е": "ye",
                    "<spqru-j>ё": "ye",
                    "ъ<spqru-j>и": "yi",
                    "ь<spqru-j>и": "yi",
                    "ъ<spqru-j>о": "yo",
                    "ь<spqru-j>о": "yo",
                    "<spqru-j>ю": "yu",
                    "<spqru-j>я": "ya",
                },
                {
                    "а": "a",
                    "б": "b",
                    "в": "v",
                    "г": "g",
                    "д": "d",
                    "е": "e",
                    "ё": "e",
                    "ж": "j",
                    "з": "z",
                    "и": "i",
                    "й": "y",
                    "к": "k",
                    "л": "l",
                    "м": "m",
                    "н": "n",
                    "о": "o",
                    "п": "p",
                    "р": "r",
                    "с": "s",
                    "т": "t",
                    "у": "u",
                    "ф": "f",
                    "х": "h",
                    "ц": "c",
                    "ч": "ch",
                    "ш": "sh",
                    "щ": "ssh",
                    "ъ": "",
                    "ы": "i",
                    "ь": "",
                    "э": "e",
                    "ю": "u",
                    "я": "ia",
                },
                {
                    "shs": "ss",
                },
                {
                    "shs": "ss",
                },
                {
                    "<spqru-j>": ""
                }
            ]
        },
        "ru23": {
            "steps": [
                {
                    "<spqru-word>": "<spqru-word><spqru-y>",

                    "а": "а<spqru-j>",
                    "е": "е<spqru-j>",
                    "ё": "ё<spqru-j>",
                    "и": "и<spqru-j>",
                    "й": "й<spqru-j>",
                    "о": "о<spqru-j>",
                    "у": "у<spqru-j>",
                    "ы": "ы<spqru-j>",
                    "э": "э<spqru-j>",
                    "ю": "ю<spqru-j>",
                    "я": "я<spqru-j>",

                    "ъ": "ъ<spqru-j>",
                    "ь": "ь<spqru-j>",
                },
                {
                    "<spqru-word>": "<spqru-word><spqru-j>",
                    "а": "а<spqru-j>",
                    "<spqru-j>е": "je",
                    "<spqru-j>ё": "je",
                    "ъ<spqru-j>и": "ji",
                    "ь<spqru-j>и": "ji",
                    "ъ<spqru-j>о": "jo",
                    "ь<spqru-j>о": "jo",
                    "<spqru-j>ю": "ju",
                    "<spqru-j>я": "ja",
                },
                {
                    "а": "a",
                    "б": "b",
                    "в": "v",
                    "г": "g",
                    "д": "d",
                    "е": "e",
                    "ё": "e",
                    "ж": "zh",
                    "з": "z",
                    "и": "i",
                    "й": "j",
                    "к": "k",
                    "л": "l",
                    "м": "m",
                    "н": "n",
                    "о": "o",
                    "п": "p",
                    "р": "r",
                    "с": "s",
                    "т": "t",
                    "у": "u",
                    "ф": "f",
                    "х": "h",
                    "ц": "c",
                    "ч": "ch",
                    "ш": "sh",
                    "щ": "ssh",
                    "ъ": "",
                    "ы": "y",
                    "ь": "",
                    "э": "e",
                    "ю": "u",
                    "я": "ia",
                },
                {
                    "shs": "ss",
                    "zhz": "zz",
                },
                {
                    "shs": "ss",
                    "zhz": "zz",
                },
                {
                    "<spqru-j>": ""
                }
            ]
        },
        "ru23uy": {
            "steps": [
                {
                    "<spqru-word>": "<spqru-word><spqru-j>",

                    "а": "а<spqru-j>",
                    "е": "е<spqru-j>",
                    "ё": "ё<spqru-j>",
                    "и": "и<spqru-j>",
                    "й": "й<spqru-j>",
                    "о": "о<spqru-j>",
                    "у": "у<spqru-j>",
                    "ы": "ы<spqru-j>",
                    "э": "э<spqru-j>",
                    "ю": "ю<spqru-j>",
                    "я": "я<spqru-j>",

                    "ъ": "ъ<spqru-j>",
                    "ь": "ь<spqru-j>",
                },
                {
                    "<spqru-word>": "<spqru-word><spqru-j>",
                    "а": "а<spqru-j>",
                    "<spqru-j>е": "je",
                    "<spqru-j>ё": "je",
                    "ъ<spqru-j>и": "ji",
                    "ь<spqru-j>и": "ji",
                    "ъ<spqru-j>о": "jo",
                    "ь<spqru-j>о": "jo",
                    "<spqru-j>ю": "ju",
                    "<spqru-j>я": "ja",
                },
                {
                    "а": "a",
                    "б": "b",
                    "в": "v",
                    "г": "g",
                    "д": "d",
                    "е": "e",
                    "ё": "e",
                    "ж": "zh",
                    "з": "z",
                    "и": "i",
                    "й": "j",
                    "к": "k",
                    "л": "l",
                    "м": "m",
                    "н": "n",
                    "о": "o",
                    "п": "p",
                    "р": "r",
                    "с": "s",
                    "т": "t",
                    "у": "u",
                    "ф": "f",
                    "х": "h",
                    "ц": "c",
                    "ч": "ch",
                    "ш": "sh",
                    "щ": "ssh",
                    "ъ": "",
                    "ы": "ui",
                    "ь": "",
                    "э": "e",
                    "ю": "u",
                    "я": "ia",
                },
                {
                    "shs": "ss",
                    "zhz": "zz",
                },
                {
                    "shs": "ss",
                    "zhz": "zz",
                },
                {
                    "<spqru-j>": ""
                },
                {
                    "ij": "y",
                },
            ]
        },
        "ru23uiy": {
            "steps": [
                {
                    "<spqru-word>": "<spqru-word><spqru-j>",

                    "а": "а<spqru-j>",
                    "е": "е<spqru-j>",
                    "ё": "ё<spqru-j>",
                    "и": "и<spqru-j>",
                    "й": "й<spqru-j>",
                    "о": "о<spqru-j>",
                    "у": "у<spqru-j>",
                    "ы": "ы<spqru-j>",
                    "э": "э<spqru-j>",
                    "ю": "ю<spqru-j>",
                    "я": "я<spqru-j>",

                    "ъ": "ъ<spqru-j>",
                    "ь": "ь<spqru-j>",
                },
                {
                    "<spqru-word>": "<spqru-word><spqru-j>",
                    "а": "а<spqru-j>",
                    "<spqru-j>е": "ye",
                    "<spqru-j>ё": "ye",
                    "ъ<spqru-j>и": "yi",
                    "ь<spqru-j>и": "yi",
                    "ъ<spqru-j>о": "yo",
                    "ь<spqru-j>о": "yo",
                    "<spqru-j>ю": "yu",
                    "<spqru-j>я": "ya",
                },
                {
                    "а": "a",
                    "б": "b",
                    "в": "v",
                    "г": "g",
                    "д": "d",
                    "е": "e",
                    "ё": "e",
                    "ж": "j",
                    "з": "z",
                    "и": "i",
                    "й": "y",
                    "к": "k",
                    "л": "l",
                    "м": "m",
                    "н": "n",
                    "о": "o",
                    "п": "p",
                    "р": "r",
                    "с": "s",
                    "т": "t",
                    "у": "u",
                    "ф": "f",
                    "х": "h",
                    "ц": "c",
                    "ч": "ch",
                    "ш": "sh",
                    "щ": "ssh",
                    "ъ": "",
                    "ы": "ui",
                    "ь": "",
                    "э": "e",
                    "ю": "u",
                    "я": "ia",
                },
                {
                    "shs": "ss",
                },
                {
                    "shs": "ss",
                },
                {
                    "<spqru-j>": ""
                }
            ]
        },
        "ru24w": {
            "steps": [
                {
                    "<spqru-word>": "<spqru-word><spqru-j>",

                    "а": "а<spqru-j>",
                    "е": "е<spqru-j>",
                    "ё": "ё<spqru-j>",
                    "и": "и<spqru-j>",
                    "й": "й<spqru-j>",
                    "о": "о<spqru-j>",
                    "у": "у<spqru-j>",
                    "ы": "ы<spqru-j>",
                    "э": "э<spqru-j>",
                    "ю": "ю<spqru-j>",
                    "я": "я<spqru-j>",

                    "ъ": "ъ<spqru-j>",
                    "ь": "ь<spqru-j>",
                },
                {
                    "<spqru-word>": "<spqru-word><spqru-j>",
                    "а": "а<spqru-j>",
                    "<spqru-j>е": "ye",
                    "<spqru-j>ё": "ye",
                    "ъ<spqru-j>и": "yi",
                    "ь<spqru-j>и": "yi",
                    "ъ<spqru-j>о": "yo",
                    "ь<spqru-j>о": "yo",
                    "<spqru-j>ю": "yu",
                    "<spqru-j>я": "ya",
                },
                {
                    "а": "a",
                    "б": "b",
                    "в": "v",
                    "г": "g",
                    "д": "d",
                    "е": "e",
                    "ё": "e",
                    "ж": "j",
                    "з": "z",
                    "и": "i",
                    "й": "y",
                    "к": "k",
                    "л": "l",
                    "м": "m",
                    "н": "n",
                    "о": "o",
                    "п": "p",
                    "р": "r",
                    "с": "s",
                    "т": "t",
                    "у": "u",
                    "ф": "f",
                    "х": "h",
                    "ц": "c",
                    "ч": "ch",
                    "ш": "sh",
                    "щ": "ssh",
                    "ъ": "",
                    "ы": "w",
                    "ь": "",
                    "э": "e",
                    "ю": "u",
                    "я": "ia",
                },
                {
                    "shs": "ss",
                },
                {
                    "shs": "ss",
                },
                {
                    "<spqru-j>": ""
                }
            ]
        },
        "ru24xiy": {
            "acronym_steps": [
                {
                    "а": "a",
                    "б": "b",
                    "в": "v",
                    "г": "g",
                    "д": "d",
                    "е": "y",
                    "ё": "y",
                    "ж": "j",
                    "з": "z",
                    "и": "i",
                    "й": "y",
                    "к": "k",
                    "л": "l",
                    "м": "m",
                    "н": "n",
                    "о": "o",
                    "п": "p",
                    "р": "r",
                    "с": "s",
                    "т": "t",
                    "у": "u",
                    "ф": "f",
                    "х": "h",
                    "ц": "c",
                    "ч": "c",
                    "ш": "s",
                    "щ": "s",
                    "ы": "i",
                    "э": "e",
                    "ю": "u",
                    "я": "i",
                },
            ],
            "steps": [
                {
                    "<spqru-word>": "<spqru-word><spqru-j>",

                    "а": "а<spqru-j>",
                    "е": "е<spqru-j>",
                    "ё": "ё<spqru-j>",
                    "и": "и<spqru-j>",
                    "й": "й<spqru-j>",
                    "о": "о<spqru-j>",
                    "у": "у<spqru-j>",
                    "ы": "ы<spqru-j>",
                    "э": "э<spqru-j>",
                    "ю": "ю<spqru-j>",
                    "я": "я<spqru-j>",

                    "ъ": "ъ<spqru-j>",
                    "ь": "ь<spqru-j>",
                },
                {
                    "<spqru-word>": "<spqru-word><spqru-j>",
                    "а": "а<spqru-j>",
                    "<spqru-j>е": "ye",
                    "<spqru-j>ё": "ye",
                    "ъ<spqru-j>и": "yi",
                    "ь<spqru-j>и": "yi",
                    "ъ<spqru-j>о": "yo",
                    "ь<spqru-j>о": "yo",
                    "<spqru-j>ю": "yu",
                    "<spqru-j>я": "ya",
                },
                {
                    "а": "a",
                    "б": "b",
                    "в": "v",
                    "г": "g",
                    "д": "d",
                    "е": "e",
                    "ё": "e",
                    "ж": "j",
                    "з": "z",
                    "и": "i",
                    "й": "y",
                    "к": "k",
                    "кз": "x",
                    "кс": "x",
                    "л": "l",
                    "м": "m",
                    "н": "n",
                    "о": "o",
                    "п": "p",
                    "р": "r",
                    "с": "s",
                    "т": "t",
                    "у": "u",
                    "ф": "f",
                    "х": "h",
                    "ц": "c",
                    "ч": "ch",
                    "ш": "sh",
                    "щ": "ssh",
                    "ъ": "",
                    "ы": "i",
                    "ь": "",
                    "э": "e",
                    "ю": "u",
                    "я": "ia",
                },
                {
                    "shs": "ss",
                },
                {
                    "shs": "ss",
                },
                {
                    "<spqru-j>": ""
                }
            ]
        },
        "ru24xiy_j_is_tʃ": {
            "acronym_steps": [
                {
                    "а": "a",
                    "б": "b",
                    "в": "v",
                    "г": "g",
                    "д": "d",
                    "е": "y",
                    "ё": "y",
                    "ж": "z",
                    "з": "z",
                    "и": "i",
                    "й": "y",
                    "к": "k",
                    "л": "l",
                    "м": "m",
                    "н": "n",
                    "о": "o",
                    "п": "p",
                    "р": "r",
                    "с": "s",
                    "т": "t",
                    "у": "u",
                    "ф": "f",
                    "х": "h",
                    "ц": "c",
                    "ч": "j",
                    "ш": "s",
                    "щ": "s",
                    "ы": "i",
                    "э": "e",
                    "ю": "u",
                    "я": "i",
                },
            ],
            "steps": [
                {
                    "<spqru-word>": "<spqru-word><spqru-j>",

                    "а": "а<spqru-j>",
                    "е": "е<spqru-j>",
                    "ё": "ё<spqru-j>",
                    "и": "и<spqru-j>",
                    "й": "й<spqru-j>",
                    "о": "о<spqru-j>",
                    "у": "у<spqru-j>",
                    "ы": "ы<spqru-j>",
                    "э": "э<spqru-j>",
                    "ю": "ю<spqru-j>",
                    "я": "я<spqru-j>",

                    "ъ": "ъ<spqru-j>",
                    "ь": "ь<spqru-j>",
                },
                {
                    "<spqru-word>": "<spqru-word><spqru-j>",
                    "а": "а<spqru-j>",
                    "<spqru-j>е": "ye",
                    "<spqru-j>ё": "ye",
                    "ъ<spqru-j>и": "yi",
                    "ь<spqru-j>и": "yi",
                    "ъ<spqru-j>о": "yo",
                    "ь<spqru-j>о": "yo",
                    "<spqru-j>ю": "yu",
                    "<spqru-j>я": "ya",
                },
                {
                    "а": "a",
                    "б": "b",
                    "в": "v",
                    "г": "g",
                    "д": "d",
                    "дж": "j",
                    "е": "e",
                    "ё": "e",
                    "ж": "zh",
                    "жж": "zj",
                    "з": "z",
                    "зж": "zj",
                    "зч": "zj",
                    "и": "i",
                    "й": "y",
                    "к": "k",
                    "кз": "x",
                    "кс": "x",
                    "л": "l",
                    "м": "m",
                    "н": "n",
                    "о": "o",
                    "п": "p",
                    "р": "r",
                    "с": "s",
                    "т": "t",
                    "у": "u",
                    "ф": "f",
                    "х": "h",
                    "ц": "c",
                    "ч": "j",
                    "ш": "sh",
                    "щ": "sj",
                    "ъ": "",
                    "ы": "i",
                    "ь": "",
                    "э": "e",
                    "ю": "u",
                    "я": "ia",
                },
                {
                    "<spqru-j>": ""
                }
            ]
        },
        "ru25xquiy": {
            "acronym_steps": [
                {
                    "а": "a",
                    "б": "b",
                    "в": "v",
                    "г": "g",
                    "д": "d",
                    "е": "y",
                    "ё": "y",
                    "ж": "j",
                    "з": "z",
                    "и": "i",
                    "й": "y",
                    "к": "k",
                    "л": "l",
                    "м": "m",
                    "н": "n",
                    "о": "o",
                    "п": "p",
                    "р": "r",
                    "с": "s",
                    "т": "t",
                    "у": "u",
                    "ф": "f",
                    "х": "h",
                    "ц": "c",
                    "ч": "c",
                    "ш": "s",
                    "щ": "s",
                    "ы": "i",
                    "э": "e",
                    "ю": "u",
                    "я": "i",
                },
            ],
            "steps": [
                {
                    "<spqru-word>": "<spqru-word><spqru-j>",

                    "а": "а<spqru-j>",
                    "е": "е<spqru-j>",
                    "ё": "ё<spqru-j>",
                    "и": "и<spqru-j>",
                    "й": "й<spqru-j>",
                    "о": "о<spqru-j>",
                    "у": "у<spqru-j>",
                    "ы": "ы<spqru-j>",
                    "э": "э<spqru-j>",
                    "ю": "ю<spqru-j>",
                    "я": "я<spqru-j>",

                    "ъ": "ъ<spqru-j>",
                    "ь": "ь<spqru-j>",
                },
                {
                    "<spqru-word>": "<spqru-word><spqru-j>",
                    "а": "а<spqru-j>",
                    "<spqru-j>е": "ye",
                    "<spqru-j>ё": "ye",
                    "ъ<spqru-j>и": "yi",
                    "ь<spqru-j>и": "yi",
                    "ъ<spqru-j>о": "yo",
                    "ь<spqru-j>о": "yo",
                    "<spqru-j>ю": "yu",
                    "<spqru-j>я": "ya",
                },

                // this should better be solved by splitting the word
                // into morphemes.
                {
                    "букв": "bukv",
                    "москв": "moskv",
                },

                {
                    "а": "a",
                    "б": "b",
                    "в": "v",
                    "г": "g",
                    "д": "d",
                    "е": "e",
                    "ё": "e",
                    "ж": "j",
                    "з": "z",
                    "и": "i",
                    "й": "y",
                    "к": "k",
                    "кв": "qu",
                    "кз": "x",
                    "кс": "x",
                    "л": "l",
                    "м": "m",
                    "н": "n",
                    "о": "o",
                    "п": "p",
                    "р": "r",
                    "с": "s",
                    "т": "t",
                    "у": "u",
                    "ф": "f",
                    "х": "h",
                    "ц": "c",
                    "ч": "ch",
                    "ш": "sh",
                    "щ": "ssh",
                    "ъ": "",
                    "ы": "i",
                    "ь": "",
                    "э": "e",
                    "ю": "u",
                    "я": "ia",
                },
                {
                    "shs": "ss",
                },
                {
                    "shs": "ss",
                },
                {
                    "<spqru-j>": ""
                }
            ]
        },
    }
}

class TrieNode {
    constructor(character) {
        this.character = character;
        this.children = {};  // Store children nodes as key-value pairs
        this.value = null;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode('*');  // Root node with a placeholder character
    }

    put(key, value) {
        let currentNode = this.root;
        for (let char of key) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode(char);
            }
            currentNode = currentNode.children[char];
        }
        currentNode.value = value;
    }

    get(key) {
        let currentNode = this.root;
        for (let char of key) {
            if (!currentNode.children[char]) {
                return null;
            }
            currentNode = currentNode.children[char];
        }
        return currentNode.value;
    }

    hasSubtrie(key) {
        let currentNode = this.root;
        for (let char of key) {
            if (!(char in currentNode.children)) {
                return false;
            }
            currentNode = currentNode.children[char];
        }
        return Object.keys(currentNode.children).length > 0;
    }
}

function convertStep(text, step) {
    stepTrie = new Trie();
    for (let [key, value] of Object.entries(step)) {
        stepTrie.put(key, value);
    }
    text = `<spqru-word>${text}</spqru-word>`;
    let i = 0;
    let j = 1;
    let candidate = null;
    let out = [];
    while (j <= text.length) {
        let substr = text.substring(i, j);
        substrStep = stepTrie.get(substr);
        if (substrStep !== null) {
            candidate = substr;
            j += 1;
            continue;
        }
        else if (stepTrie.hasSubtrie(substr)) {
          j += 1;
          continue;
        }
        else {
            if (candidate !== null) {
                out.push(stepTrie.get(candidate));
                candidate = null;
                i = j - 1;
                continue;
            }
            if (candidate === null) {
                out.push(text[i]);
                i++;
                j = i + 1;
                continue;
            }
            assert(false);
        }
    }
    text = out.join("");
    text = text.replace("<spqru-word>", "");
    text = text.replace("</spqru-word>", "");
    return text;
}

function* traverse(domNode) {
    TEXT_NODE_TYPE = 3
    nodeType = domNode.nodeType
    // console.log("SQPQRuversed ", { nodeType, domNode, });
    if (nodeType === TEXT_NODE_TYPE) {
        yield domNode;
    }
    for (const childNode of domNode.childNodes) {
        yield* traverse(childNode);
    }
}

// console.log("Let's begin SPQRuining")
for (const element of traverse(document)) {
    // console.log(`SPQRuining ${element.textContent.substring(0, 20)}...`)
    if (element.textContent === null || element.textContent === undefined) {
        continue;
    }
    const text = element.textContent;
    const bothRe = /[А-ЯЁа-яё]+|.+?(?=[А-ЯЁа-яё]+)|.+/g;
    const cyrillicRe = /[А-ЯЁа-яё]+/g;
    let words = text.match(bothRe);
    if (words === null) {
        words = [];
    }
    words = [...words];
    let translatedWords = [];
    let METHOD = "ru24xiy_j_is_tʃ";
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word === undefined || word === null || word.length <= 0 || !word[0].match(cyrillicRe)) {
            translatedWords.push(word);
            continue;
        }
        let lower = word.toLowerCase();
        let upper = word.toUpperCase();

        let translatedWord = lower;
        let appropriateSteps = (
            word === upper && ("acronym_steps" in config["methods"][METHOD])
            ? "acronym_steps"
            : "steps"
        );
        for (var step of config["methods"][METHOD][appropriateSteps]) {
            translatedWord = convertStep(translatedWord, step);
        }
        if (lower[0] !== word[0]) {
            translatedWord = `${translatedWord[0].toUpperCase()}${translatedWord.substring(1)}`;
        }
        if (word.length >= 2 && lower[1] !== word[1]) {
            translatedWord = translatedWord.toUpperCase();
        }
        translatedWords.push(translatedWord);
    }
  
    // // Uncomment for production:
    element.textContent = translatedWords.join("");

    // // Uncomment for debugging:
    // translated = element.cloneNode(true);
    // translated.textContent = translatedWords.join("");
    // element.putAdjacentElement("afterend", translated);
}


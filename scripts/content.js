//  Copyright 2010-2023 Arseniy Poroshin
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


const yaml = require('js-yaml')

config_yaml = `\
methods:

  ru21:  # 21 letters in the alphabet. And an apostrophe.
    word_pattern: '[А-ЯЁа-яё]'
    steps:
      # Additional exceptions should go here, at the top.
      - зх: z'h
        сх: s'h
        цх: c'h
      - а: a
        б: b
        в: v
        г: g
        д: d
        е: e
        ё: e
        ж: zh
        з: z
        и: i
        к: k
        л: l
        м: m
        н: n
        о: o
        п: p
        р: r
        с: s
        т: t
        у: u
        ф: f
        х: h
        ц: c
        ч: ch
        ш: sh
        щ: sh
        ъ: <spqrusep>
        ы: i
        ь: <spqrusep>
        э: e
      - ai: a'i
        ei: e'i
        ia: i'a
        ii: i'i
        io: i'o
        iu: i'u
        oi: o'i
        ui: u'i
      - ai: a'i
        ei: e'i
        ia: i'a
        ii: i'i
        io: i'o
        iu: i'u
        oi: o'i
        ui: u'i
      - й: i
        ю: iu
        я: ia
      - <spqrusep>e: "'e"
        <spqrusep>i: "'i"
      - <spqrusep>: ""
`

textNodesUnder(document.body).forEach(makeConvert("ru21"));

function textNodesUnder(root){
    var walk=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null,false),
        text=[], node;
    while(node=walk.nextNode()) text.push(node);
    return text;
}  

function makeConvert(methodName) {
    config = yaml.load(config_yaml)
    if (!(methodName in config.methods)) {
        throw new Error(`Method name ${methodName} not in config ${config}`)
    }
    if (!text) {
        return text
    }
    method = config.methods[method_name]

    word_pattern = new RegExp(`(${method.word_pattern}+)`)
    words = word_pattern.split(text)

    for (const [i, word] of words.entries()){
        if (i % 2 == 0) {
            continue
        }
        if (word.islower()){
            restore_case = _restore_lower_case
        }
        else if (word.isupper()) {
            restore_case = _restore_upper_case
        }
//         else:
//             # case_mask = [c.isupper() for c in word]
//             # todo maybe letter apply the mask
//             restore_case = _restore_title_case
//         word = word.lower()
//         for step_dict in method.steps:
//             word = _convert_step(word, step=step_dict)
//         word = restore_case(word)
//         words[i] = word
//     }
//     return "".join(words)


// def _convert_step(text: str, step: dict[str, str]) -> str:

//     step = CharTrie(**step)

//     # logging
//     substrs: list[str] = []
//     logger.debug(f"{step = }")

//     text = f"{text}<rlend>"

//     i, j = 0, 1
//     candidate = None
//     out: str = []
//     while j <= len(text):

//         substr = str(text[i:j])

//         # logging
//         substrs.append(substr)
//         # logger.debug(f'{substr = }')

//         if substr in step:
//             candidate = substr
//             logger.debug(f"{candidate = }")
//             j += 1
//             continue

//         elif step.has_subtrie(substr):
//             j += 1
//             continue

//         else:
//             if candidate is not None:
//                 out.append(step[candidate])
//                 logger.debug(f"{out = }")
//                 candidate = None
//                 i = j - 1
//                 continue

//             if candidate is None:
//                 out.append(text[i])
//                 i += 1
//                 j = i + 1
//                 continue

//             assert False

//     if candidate is not None:
//         out.append(step[candidate])
//         logger.debug(f"{out = }")

//     else:
//         out.append(text[i:])
//         logger.debug(f"{out = }")

//     text = "".join(out)
//     text = text.replace("<rlend>", "")

//     return text

}

// def _restore_lower_case(lower_word: str) -> str:
//     return lower_word


// def _restore_upper_case(lower_word: str) -> str:
//     return lower_word.upper()


// function _restore_title_case(lower_word){
//     if (!lower_word) {
//         return lower_word
//     }
//     return lower_word[0].upper() + lower_word[1:].lower()

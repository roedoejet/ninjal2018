

waldayu.transducers["gitksan_compare"] = (function() {
    var correspondences = {'g̲': 'g', 'x̲': 'x', 'k̲': 'k', 'g_': 'g', 'x_': 'x', 'k_': 'k', 'aa': 'a', 'ii': 'i', 'ee': 'e', 'oo': 'o', 'uu': 'u', "t'": 't', "k'": 'k', "p'": 'p', "ḵ'": 'k', "kw'": 'kw', "ts'": 'ts', "'l": 'l', "'n": 'n', "'m": 'm', "'w": 'w', "'y": 'y'};
    var keys = ["ḵ'", "kw'", "ts'", 'g̲', 'x̲', 'k̲', 'g_', 'x_', 'k_', 'aa', 'ii', 'ee', 'oo', 'uu', "t'", "k'", "p'", "'l", "'n", "'m", "'w", "'y"];
    var regex = new RegExp("(" + keys.join('|') + ")", 'g');
    return function(str) {
        return str.replace(regex, function(a,b) {
            return correspondences[a];
        });
    };
})();var config = {
    "L1": {
        "name": "Gitksan",
        "underlying": "",
        "compare": "gitksan_compare",
        "lettersInLanguage" : ['a', 'aa', 'b', 'd', 'e', 'ee', 'g', 'g̲', 'gw', 'gy', 'h', 'hl', 'i', 'ii', 'j', 'k', 'k̲', "k'", "k̲'", 'kw', "kw'", 'ky', "ky'", 'l', "'l", 'm', "'m", 'n', "'n", 'o', 'oo', 'p', "p'", 's', 't', "t'", 'ts', "ts'", 'u', 'uu', 'w', "'w", 'x', 'x̲', 'xw', 'y', "'y", "'"]
    },
    "L2": {
        "name": "English",
        "underlying": "",
        "compare": ""
    }
};

/* Search Variables */
var l1_weights_config = {'underlying_form': 0.1, 'compare_form': 1.0};

var l1_thresholds_config = {'partial': 1.0, 'other': 4.0, 'exact': 0.0};

var l2_weights_config = {'definition': 1.0};

var l2_thresholds_config = {'partial': 1.9, 'other': 1000.0, 'exact': 0.9};

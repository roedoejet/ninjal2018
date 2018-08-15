

waldayu.transducers["shona_compare"] = (function() {
    var correspondences = {'e': 'a'};
    var keys = ['e'];
    var regex = new RegExp("(" + keys.join('|') + ")", 'g');
    return function(str) {
        return str.replace(regex, function(a,b) {
            return correspondences[a];
        });
    };
})();var config = {
    "L1": {
        "name": "shona",
        "underlying": "",
        "compare": "shona_compare",
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

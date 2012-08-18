// Converts indented JSON.stringify output to the format used in test.js
define(function() {

    return function (code) {
        code = code.replace(/"/g, '\'');
        code = code.replace(/^(\s*)'(.*?)':/gm, '$1$2:');
        code = code.replace(/range: \[\s*(\d+),\s*(\d+)\s*\]/g, 'range: [$1, $2]');
        code = code.replace(/(start|end): \{\s*line:\s(\d+),\s*column:\s(\d+)\s*\}/g, '$1: { line: $2, column: $3 }');
        return code;
    };

});

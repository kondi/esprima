// can be used to debug esprima in rhino debugger

(function () {

    this.window = this;
    
    window.console = {
        log: function (message) {
            if (arguments.length > 1) {
                message = [].map.call(arguments, function (arg) {
                    return typeof arg === 'string' ? arg : '###';
                }).join(', ');
            }
            java.lang.System.out.println('console.log: ' + message);
        }
    };

})();

var convert;
var define = function (factory) {
    convert = factory();
};
load('workspace/esprima/tools/convert.js');
delete define;

load('workspace/esprima/assets/json2.js');
load('workspace/esprima/esprima.js');

console.log(convert(JSON.stringify(esprima.parse('(1)', { range: true }), null, 4)));

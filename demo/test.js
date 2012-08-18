require(["../esprima"], function (esprima) {

    console.log(esprima.parse("(1)", { range: true }));

});

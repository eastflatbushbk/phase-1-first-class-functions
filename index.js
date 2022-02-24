function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction(){
   return function fn (){"named function"};
}
function returnsAnAnonymousFunction(){
    return function (){"anonymous function"};
}
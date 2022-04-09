

// function receivesAFunction ()
// {
// }


// receivesAFunction();
// function mango(){
//     console.log("treats")
// }
// function returnsANamedFunction(){
//     return mango();
// }

function receivesAFunction(spy) {
    spy();
}
function returnsANamedFunction() {
    const newFunc = () => console.log("this is a named function");
    return newFunc;
}
function returnsAnAnonymousFunction() {
    return () => console.log("this is an anonymous function");
}
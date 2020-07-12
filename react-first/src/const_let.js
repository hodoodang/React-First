function myFunction() {
    var a = "hello";
    if(true) {
        var a = "bye";
        console.log(a); // bye
    }
    console.log(a); // bye
}
myFunction();

function Function() {
    let a = 1;
    if(true) {
        let a = 2;
        console.log(a);
    }
    console.log(a);
}
Function();

// const 값은 수정 불가
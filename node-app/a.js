"use strict";
function greet(fname) {
    console.log(`hello ${fname}`);
}
function fn2(fn1, age) {
    setTimeout(() => console.log(fn1(age)), 3000);
}
function fn1(age) {
    if (age > 18) {
        return true;
    }
    return false;
}
greet("Sanghrakshit");
fn2(fn1, 26);

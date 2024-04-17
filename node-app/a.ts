function greet(fname: string) {
    console.log(`hello ${fname}`)
}

function fn2(fn1: (age: number) => boolean, age: number) {
    setTimeout(()=>console.log(fn1(age)), 3000);
}

function fn1(age: number): boolean {
    if (age > 18) {
        return true;
    }
    return false;
}

greet("Sanghrakshit")
fn2(fn1, 26)
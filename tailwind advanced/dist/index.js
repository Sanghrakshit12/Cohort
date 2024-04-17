"use strict";
function sunOfAge(user1, user2) {
    return user1.age + user2.age;
}
const x = sunOfAge({ name: "Sangha", age: 20 }, { name: "Lunderi", age: 33 });
console.log(x);

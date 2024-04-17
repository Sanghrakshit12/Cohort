interface user {
    name: string,
    age: number
}

function sunOfAge(user1: user, user2: user) {
    return user1.age + user2.age;
}

const x=sunOfAge({ name: "Sangha",age: 20 },{name:"Lunderi",age:33})

console.log(x);
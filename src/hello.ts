interface Person {
    firstName: string;
    lastName: string;
}

function sayHello(p: Person): string {
    return `Hello, ${p.firstName}`;
}

const ada: Person = {
    firstName: "Ada",
    lastName: "Loveace",
};

console.log(sayHello(ada));

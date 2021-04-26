class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
        this.created = new Date();
    }
}

const dog = new Dog('Rylai');
console.log(dog.name);


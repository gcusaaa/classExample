class Person{
    static count = 0
    constructor() {
        this.firstName = 'Please provide your first name'
        this.lastName = 'Please provide your last name'
        this.age = 0
        Person.count += 1
    }
    // WE CREATE A GETTER AND SETTER TO ABLE THE USER
    // TO CHANGE THE VALUE
    set FirstName(value) {
        this.firstName = value
    }
    get FirstName() {
        return this.firstName
    }
    set LastName(value) {
        this.lastNametName = value
    }
    get LastName() {
        return this.lastName
    }
    set Age(value) {
        this.age = value
    }
    get Age() {
        return this.age
    }
    // DISPLAY METHOD
    display() {
        console.log(`
        ======Person ID: 1======
        First name: ${this.FirstName}
        Last name: ${this.LastName}
        Age: ${this.Age}
        ====================================
        `
        );
    }
}

export {
    Person
}

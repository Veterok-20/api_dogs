class User {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
        //console.log(this)
    }
    //method
    getFullName() {
    return this.name + ' ' + this.surname    
    }
    static getCapName = function() {
        return this.name.toUpperCase()
    }
}

function UserFunc(name, surname) {
    this.name = name
    this.surname = surname
}

UserFunc.prototype.getFullName = function() {
    return this.name + ' ' + this.surname  
}
User.prototipe.getCapName = function() {
    return this.name.toUpperCase()
}

const user = new User('Jhon', 'Smith')
const user2 = new User('Kate', 'Ohara')

console.log(user.getFullName())

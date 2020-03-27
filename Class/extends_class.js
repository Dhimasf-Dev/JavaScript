// extends class (sub-class)

class Human{
    constructor(_name, _age){
        this.name = _name
        this.age = _age
    }

    breath(){
        console.log(`I'am breathing`)
    }
}

class Student extends Human{
    constructor(_name, _age, _grade){
        super(_name, _age)
        this.grade = _grade
    }

    study(){
        console.log(`I'am dying`);
        
    }
}

class Employee extends Student{
    constructor(_name, _age, _grade, _position){
        super(_name, _age, _grade)
        this.position = _position
    }

    work(){
        console.log(`I'am working`);
        
    }
}


var Doy = new Employee('Doy Kangen', 27, 'Senior Hight School', 'Developer')

Doy.breath()
Doy.study()
Doy.work()
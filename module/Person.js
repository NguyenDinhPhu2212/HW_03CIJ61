export default class Person {
    constructor(name, phone_number, location) {
        this.name = name;
        this.phone_number = phone_number;
        this.location = {};
        this.location.x = location.x;
        this.location.y = location.y;
        this.infected = false;
    }
    distance(person) {
        if (person instanceof Person) {
            const { x: x1, y: y1 } = this.location;
            const { x: x2, y: y2 } = person.location;
            return Math.sqrt((x1-x2)**2 + (y1-y2)**2);
        }
    }
    set covid(bool){
        this.infected = bool;
    }
}

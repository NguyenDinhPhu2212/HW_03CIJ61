import Person from "./Person.js";
const closeContact = (person, people) => {
    return people.filter((per) => {
        return person.distance(per) < 2 && person.distance(per) > 0;
    });
};
export default class Management {
    constructor() {
        this.people = [];
    }
    add(data) {
        if (data instanceof Person) {
            this.people.push(data);
        }
    }
    infected(phone_number) {
        let infectedPerson = this.people.find((person) => {
            return (person.phone_number = phone_number);
        });
        infectedPerson.covid = true;
        console.log(closeContact(infectedPerson, this.people));
    }
}

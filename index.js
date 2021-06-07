import Person from "./module/Person.js";
import Management from "./module/Management.js";

const getNumPerson = () => {
    let num = parseInt(prompt("Vui lòng nhập số lượng người: "));
    if (!Number.isInteger(num)) {
        num = parseInt(prompt("Vui lòng nhập số lượng người: "));
    }
    return num;
};

const getInfo = () => {
    const name = prompt("Nhập tên:");
    const phone_number = prompt("So dien thoai:");
    let location = {};
    location.x = prompt("Vui long nhap toa do X:");
    location.y = prompt("Vui long nhap toa do Y:");
    return new Person(name, phone_number, location);
};

const addPerson = (manage) => {
    let num = getNumPerson();
    while (num > 0) {
        manage.add(getInfo());
        num--;
    }
};
const infectedPhone = () => {
    return prompt("Nhap so dien thoai nguoi bi nhiem:");
};

let management = new Management();
addPerson(management);
const infected = infectedPhone();
management.infected(infected);

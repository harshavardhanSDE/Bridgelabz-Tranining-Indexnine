class Employee {

    constructor(name) {

        this.name = name;

        // default state of attendance = false.
        this.attendance = false;


        this.totalHours = 0
        // work hours;
        this.hours = 0;
    }

    // getting the name
    getName() {
        return this.name;
    }

    greet(){
        return `Welcome ${this.name} to the employment wage portal!`;
    }

    setAttendance(attendance) {
        this.attendance = attendance;
    }
    getAttendance(){
        return this.attendance;
    }


    // setting hours to get the wage
    setHours(hours) {
        this.hours = hours;
    }

    // getting the hours
    getHours(){
        return this.hours;
    }


    //getting the wage
    getWagePerHour(amountPerHour) {
        return this.getHours() * amountPerHour;
    }

    getWagePerDay(totalHours, hourlyCost) {
        return totalHours * hourlyCost;
    }

    getWagePerMonth(hoursInDay, noOfDays, hourlyCost) {
        return hoursInDay * hourlyCost * noOfDays;
    }
}



let employee1 = new Employee("Harsha");
console.log(employee1.greet());
employee1.setAttendance(true)

//printing attendance
console.log(employee1.getAttendance() ? `${employee1.getName()} is present!`: `${employee1.getName()} is not present`);

//wage
employee1.setHours(20);
console.log(`You earn $${employee1.getWagePerHour(20)} a hour.`);
console.log(`You earn $${employee1.getWagePerDay(8, 20)} a day.`);
console.log(`You earn $${employee1.getWagePerMonth(8, 20, 20)} a hour.`);


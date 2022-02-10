// class Department {
//     private readonly paycheck = 12345543345;

//     updatePay = (newNum: number) => {
//         this.paycheck = newNum;
//         return this.paycheck
//     };
//     setPay = () => {

//     }
// }

// const IT = new Department();

// console.log(IT.updatePay(20))

// class ProjectMath {
//     static gravity = 9.8
//     static speed(time: number) {
//         return time ** 2 * ProjectMath.gravity
//     }
// }

//gradebook
// array with current grades
// find the passing grade (65)
// put in an array and find the average
// add a new grade to the array
// remove the lowest grade from an array
// print out all the items in an array (using '...')
//

class Gradebook {
  static passingGrade: number = 65;
  static currGrades: number[] = [2, 68, 63, 99];
  // static lowest(strs: string[]){
  //     return strs
  // }
  static addGrade(num: number): number[] {
    Gradebook.currGrades.push(num);
    return this.currGrades;
  }
  static findAvg(): number {
    const sum = Gradebook.currGrades.reduce((curr, next) => {
      return curr + next;
    }, 0);

    return sum / Gradebook.currGrades.length;
  }
  static findLowest(): number[] {
    const min = Math.min(...Gradebook.currGrades);
    Gradebook.currGrades.splice(Gradebook.currGrades.indexOf(min), 1);
    return Gradebook.currGrades;
  }
  static findPassing(): number[] {
    const passingGrades = Gradebook.currGrades.filter(
      (grade) => grade > Gradebook.passingGrade
    );
    return passingGrades;
  }
  static printGrades(): string {
    return Gradebook.currGrades.join(" ");
  }
}

abstract class Department {
  static fiscalYear = 2022;
  protected employees: string[] = [];
  // private name: string;
  constructor(public name: string, protected readonly id: string) {
    // this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  //any extended classes now REQUIRE a describe method
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(...this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super("IT", id);
  }

  describe() {
    console.log("IT Department -ID" + this.id);
  }
}

const employee1 = Department.createEmployee("Max");

const it = new ITDepartment("d1", ["jimmy", employee1.name]);

it.addEmployee("tammy");
it.addEmployee("tommy");

console.log(it.admins);
it.describe();
it.printEmployeeInfo();

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super("accounting", id);
  }
  //method that gtes the most recent report
  get mostRecent() {
    if (this.reports.length > 0) {
      return this.reports[this.reports.length - 1];
    }
    return "no reports submitted";
  }

  set mostRecent(value: string) {
    if (!value) {
      throw new Error("invalid report");
    }
    this.addReport(value);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  describe(): void {
    console.log("accounting department - id" + this.id);
    
  }
  //log all reports
  //have a case where there are no reports

  printReports() {
      if(this.reports.length === 0 ) {
          return console.log('there are no reports')
      }
      console.log(...this.reports)
  }
}

const accounting = new AccountingDepartment('d2', ['tim'])

accounting.addEmployee('jim')
accounting.printEmployeeInfo()
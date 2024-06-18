// 클래스를 사용하지 않았을 때.
let employeeName: string;
let age: number;
let employeeJob: string;

function printEmployee(name: string, age: number, job: string): void {
  console.log(`${name}의 나이는 ${age}이고, 직업은 ${job} 입니다.`);
}

printEmployee("lee", 18, "developer");

// 클래스를 사용할 때.
class Employee {
  
  constructor(
    private _name : string , 
    private _age? : number , 
    private _job? : string
  ) {}
  printEmployee(): void {
    console.log(
      `${this._name}의 나이는 ${this._age}이고, 직업은 ${this._job} 입니다.`
    );
  }

  get name(){
    return this._name ; 
  }

  set name(name : string){
    this._name = name ;
  }
}

let employee1 = new Employee("lee" , 18 , "developer");
employee1.name = "kim"
employee1.printEmployee();


interface PrizeLogger {
   fun: (params: string)=> void
}

 interface Person{
    name:string;
    email:string;
}

interface Author extends  Person{
    numBooksPublished: number;
}
interface  Librarian extends  Person{
    department:string;
    assistCustomer:(custName:string)=>void
}

interface Worker {
    id:number;
    Name:string;
    surname:string;
    available:boolean;
    salary:number;
    category:string;
    markPrize: PrizeLogger;
}


let  getAllworkers=()=> {
    let workers  = [
        {id:1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000  },
    
        {id:2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500 },
    
        {id:3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600 },
    
        {id:4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300 },
    ] as Array<Worker>

   return  workers
}

let getWorkerByID = (id: Worker["id"]) =>{
   let workers = getAllworkers()

    // @ts-ignore
    let retObj = workers.find(x => x.id === id)
    console.log(retObj.Name)
    return retObj

}
console.log('2.1.3')
getWorkerByID(1)

let PrintWorker= ()=>{
    let workers = getAllworkers() as Array<Worker>
    workers.forEach(person=>{
        console.log(`${person.Name} ${person.surname} got salary ${person.salary}`)
    })
}
console.log('2.1.4')
PrintWorker()



let logPrize  : Worker["markPrize"]["fun"] = (arg:string)=>{
    console.log(arg)
}
console.log('2.2')
logPrize ('Result')

let favoriteAuthor : Author['name']='Dyma'
// let favoriteLibrarian:Librarian["name"]='Names'


class UniversityLibrarian implements Librarian {
    public email:string;
    public department: string
    constructor(
        public name:string
    ){
        this.email='fswe'
        this.department='fw'
    }

    assistCustomer=(custName: string)=>{
        console.log(`${this.name} is assisting ${custName}`)
    }

}
let favoriteLibrarian: Librarian['name']='Max'
let user = new UniversityLibrarian(favoriteLibrarian)
console.log('2.4')
user.assistCustomer("custName")



abstract class ReferenceItem {
    public title:string;
    protected year:number;
    private _publisher: string;
    constructor(
        public newTitle:string,
        public  newYear:string
    ) {
        this.title='Word'
        this.year=50
        this._publisher='Max'
    }
    get publisher(){
        return this._publisher.toUpperCase()
    }

    set publisher(newPublisher:string){
       this._publisher = newPublisher.toUpperCase()
    }

    static department:string = 'FIT';
    printItem=()=>{
        console.log('title was published in year ' + ReferenceItem.department)
    }
    printCitation=()=>{}

}


// let ref = new ReferenceItem('Yeasr', '2021')
// ref.printItem()
// ref.publisher = 'Viktoriia'
// console.log(ref.publisher)


class Encyclopedia extends ReferenceItem{
public edition:number;
    constructor(
        public newTitle:string,
        public  newYear:string
    ) {
        super(newTitle,newYear);
        this.edition =1
    }
    printItem=()=>{
        console.log('2.6')
        console.log('title was published in year ' + ReferenceItem.department +`Edition: edition ${this.year}`)
    }

    printCitation=()=>{
        console.log('2.7')
        console.log(this.title,'-', this.year)
    }
}

let refBook = new Encyclopedia('Yeasr', '2021')
refBook.printItem()
refBook.printCitation()
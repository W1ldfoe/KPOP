
enum Category {
    BusinessAnalyst,
    Developer,
    Designer,
    QA,
    ScrumMaster,
}

let  getAllworkers=()=> {
    let workers = [
        {id:1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000 , category:Category[0] },
    
        {id:2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500,category:Category[1] },
    
        {id:3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category:Category[2] },
    
        {id:4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300,category:Category[3] },
    ]

   return  workers
}



let logFirstAvailable =()=>{
   let workers =  getAllworkers()
    console.log(`Количество роботников ${workers.length}`)
    for(let i =0; i< workers.length;i++ ){
        if(workers[i].available===true) {
            console.log(`Роботник №${i + 1}: ${workers[i].Name} ${workers[i].surname} `)
        }
    }

}
console.log(1.1)
logFirstAvailable()


let logWorkersNames = (sortworkers:Array<string>) =>{
    sortworkers.forEach(person=>{
        console.log(person)
    })
}


let getWorkersNamesByCategory= ()=>{
    let workerOfCategory = []

    let workersSurname =  getAllworkers()
    let category = 'Developer'
        for (let i = 0; i < workersSurname.length; i++) {
            if (workersSurname[i].category == category) {
                workerOfCategory.push(`${workersSurname[i].Name} ${workersSurname[i].surname}`)
            }
        }
    logWorkersNames(workerOfCategory)
}
console.log(1.2)
getWorkersNamesByCategory()





let getWorkerByID = (id:number) =>{
   let workers = getAllworkers()

    // @ts-ignore
    let retObj = workers.find(x => x.id === id)
    console.log(retObj.Name,retObj.surname,retObj.salary)

    return retObj

}
console.log(1.3)
getWorkerByID(2)









let createCustomerID =(nameCustomer: string, id: number)=>{
    console.log(nameCustomer+id)
}
let IdGenerator: (nameCustomer: string, id: number)=>void = createCustomerID

let myID = {name:"Anna",id:10,}

console.log(1.4)

IdGenerator(myID.name, myID.id)


console.log(1.5, 'createCustomer')
let createCustomer = (name: string, age?:number, city?: string)=>{
    console.log(name,!age  ? "" : age,!city  ? "" : city )

}
createCustomer('Max')
createCustomer('Petro', 23)
createCustomer('Vasya', 29, 'Kiev')
console.log(1.5, 'сheckoutWorkers')








let сheckoutWorkers=(customer:string)=>{
    let workers = getAllworkers()
    let myWorker =[]
    for(let i=0; i<workers.length ;i++){
      let worker = getWorkerByID(workers[i].id)
        if(worker.available === true){
            myWorker.push({ nameCustomer: customer ,nameWorker: worker.Name, surnameWorker:worker.surname })
        }
    }

    return myWorker

}


let myWorkers = ()=>{
 let my = сheckoutWorkers('Max')
console.log(my[0].nameCustomer)
    my.forEach(persons=>{
        console.log(persons.nameWorker, persons.surnameWorker)
        }
    )

}

myWorkers()
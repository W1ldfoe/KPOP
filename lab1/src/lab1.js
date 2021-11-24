var Category;
(function (Category) {
    Category[Category["BusinessAnalyst"] = 0] = "BusinessAnalyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["ScrumMaster"] = 4] = "ScrumMaster";
})(Category || (Category = {}));
var getAllworkers = function () {
    var workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category[0] },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category[1] },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category[2] },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category[3] },
    ];
    return workers;
};
var logFirstAvailable = function () {
    var workers = getAllworkers();
    console.log("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0440\u043E\u0431\u043E\u0442\u043D\u0438\u043A\u043E\u0432 " + workers.length);
    for (var i = 0; i < workers.length; i++) {
        if (workers[i].available === true) {
            console.log("\u0420\u043E\u0431\u043E\u0442\u043D\u0438\u043A \u2116" + (i + 1) + ": " + workers[i].Name + " " + workers[i].surname + " ");
        }
    }
};
console.log(1.1);
logFirstAvailable();
var logWorkersNames = function (sortworkers) {
    sortworkers.forEach(function (person) {
        console.log(person);
    });
};
var getWorkersNamesByCategory = function () {
    var workerOfCategory = [];
    var workersSurname = getAllworkers();
    var category = 'Developer';
    for (var i = 0; i < workersSurname.length; i++) {
        if (workersSurname[i].category == category) {
            workerOfCategory.push(workersSurname[i].Name + " " + workersSurname[i].surname);
        }
    }
    logWorkersNames(workerOfCategory);
};
console.log(1.2);
getWorkersNamesByCategory();
var getWorkerByID = function (id) {
    var workers = getAllworkers();
    // @ts-ignore
    var retObj = workers.find(function (x) { return x.id === id; });
    console.log(retObj.Name, retObj.surname, retObj.salary);
    return retObj;
};
console.log(1.3);
getWorkerByID(2);
var createCustomerID = function (nameCustomer, id) {
    console.log(nameCustomer + id);
};
var IdGenerator = createCustomerID;
var myID = { name: "Anna", id: 10 };
console.log(1.4);
IdGenerator(myID.name, myID.id);
console.log(1.5, 'createCustomer');
var createCustomer = function (name, age, city) {
    console.log(name, !age ? "" : age, !city ? "" : city);
};
createCustomer('Max');
createCustomer('Petro', 23);
createCustomer('Vasya', 29, 'Kiev');
console.log(1.5, 'сheckoutWorkers');
var сheckoutWorkers = function (customer) {
    var workers = getAllworkers();
    var myWorker = [];
    for (var i = 0; i < workers.length; i++) {
        var worker = getWorkerByID(workers[i].id);
        if (worker.available === true) {
            myWorker.push({ nameCustomer: customer, nameWorker: worker.Name, surnameWorker: worker.surname });
        }
    }
    return myWorker;
};
var myWorkers = function () {
    var my = сheckoutWorkers('Max');
    console.log(my[0].nameCustomer);
    my.forEach(function (persons) {
        console.log(persons.nameWorker, persons.surnameWorker);
    });
};
myWorkers();

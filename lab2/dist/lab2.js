"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var getAllworkers = function () {
    var workers = [
        { id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000 },
        { id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500 },
        { id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600 },
        { id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300 },
    ];
    return workers;
};
var getWorkerByID = function (id) {
    var workers = getAllworkers();
    // @ts-ignore
    var retObj = workers.find(function (x) { return x.id === id; });
    console.log(retObj.Name);
    return retObj;
};
console.log('2.1.3');
getWorkerByID(1);
var PrintWorker = function () {
    var workers = getAllworkers();
    workers.forEach(function (person) {
        console.log(person.Name + " " + person.surname + " got salary " + person.salary);
    });
};
console.log('2.1.4');
PrintWorker();
var logPrize = function (arg) {
    console.log(arg);
};
console.log('2.2');
logPrize('Result');
var favoriteAuthor = 'Pyshkin';
// let favoriteLibrarian:Librarian["name"]='Names'
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian(name) {
        var _this = this;
        this.name = name;
        this.assistCustomer = function (custName) {
            console.log(_this.name + " is assisting " + custName);
        };
        this.email = 'fswe';
        this.department = 'fw';
    }
    return UniversityLibrarian;
}());
var favoriteLibrarian = 'Danil';
var user = new UniversityLibrarian(favoriteLibrarian);
console.log('2.4');
user.assistCustomer("custName");
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(newTitle, newYear) {
        this.newTitle = newTitle;
        this.newYear = newYear;
        this.printItem = function () {
            console.log('title was published in year ' + ReferenceItem.department);
        };
        this.printCitation = function () { };
        this.title = 'Word';
        this.year = 50;
        this._publisher = 'Danil';
    }
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            this._publisher = newPublisher.toUpperCase();
        },
        enumerable: false,
        configurable: true
    });
    ReferenceItem.department = 'FIT';
    return ReferenceItem;
}());
// let ref = new ReferenceItem('Yeasr', '2021')
// ref.printItem()
// ref.publisher = 'Viktoriia'
// console.log(ref.publisher)
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(newTitle, newYear) {
        var _this = _super.call(this, newTitle, newYear) || this;
        _this.newTitle = newTitle;
        _this.newYear = newYear;
        _this.printItem = function () {
            console.log('2.6');
            console.log('title was published in year ' + ReferenceItem.department + ("Edition: edition " + _this.year));
        };
        _this.printCitation = function () {
            console.log('2.7');
            console.log(_this.title, '-', _this.year);
        };
        _this.edition = 1;
        return _this;
    }
    return Encyclopedia;
}(ReferenceItem));
var refBook = new Encyclopedia('Yeasr', '2021');
refBook.printItem();
refBook.printCitation();
//# sourceMappingURL=lab2.js.map
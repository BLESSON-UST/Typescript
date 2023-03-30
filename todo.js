"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var TodoItem = /** @class */ (function () {
    function TodoItem(description, dueDate) {
        this.description = description;
        this.dueDate = dueDate;
        this.isComplete = false;
    }
    TodoItem.prototype.markAsComplete = function () {
        this.isComplete = true;
    };
    TodoItem.prototype.markAsIncomplete = function () {
        this.isComplete = false;
    };
    return TodoItem;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.items = [];
    }
    TodoList.prototype.addItem = function (item) {
        this.items.push(item);
    };
    TodoList.prototype.removeItem = function (item) {
        var index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    };
    TodoList.prototype.getIncompleteItems = function () {
        return this.items.filter(function (item) { return !item.isComplete; });
    };
    TodoList.prototype.getCompleteItems = function () {
        return this.items.filter(function (item) { return item.isComplete; });
    };
    return TodoList;
}());
function createTodoItem(rl) {
    return new Promise(function (resolve) {
        rl.question("Enter a description for the to-do item: ", function (description) {
            rl.question("Enter the due date for the to-do item (YYYY-MM-DD): ", function (dueDateStr) {
                var dueDate = new Date(dueDateStr);
                var item = new TodoItem(description, dueDate);
                resolve(item);
            });
        });
    });
}
function printTodoList(list) {
    console.log("Incomplete items:");
    var incompleteItems = list.getIncompleteItems();
    if (incompleteItems.length === 0) {
        console.log("No incomplete items.");
    }
    else {
        incompleteItems.forEach(function (item) { return console.log("- ".concat(item.description, " (due ").concat(item.dueDate.toDateString(), ")")); });
    }
    console.log("\nComplete items:");
    var completeItems = list.getCompleteItems();
    if (completeItems.length === 0) {
        console.log("No complete items.");
    }
    else {
        completeItems.forEach(function (item) { return console.log("- ".concat(item.description, " (due ").concat(item.dueDate.toDateString(), ")")); });
    }
}
function todoList() {
    return __awaiter(this, void 0, void 0, function () {
        var rl, list, action, item, item, item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rl = readline.createInterface({
                        input: process.stdin,
                        output: process.stdout
                    });
                    list = new TodoList();
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 10];
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question("Enter an action (add, remove, complete, print, or exit): ", function (answer) {
                                resolve(answer.trim());
                            });
                        })];
                case 2:
                    action = _a.sent();
                    if (!(action === "add")) return [3 /*break*/, 4];
                    return [4 /*yield*/, createTodoItem(rl)];
                case 3:
                    item = _a.sent();
                    list.addItem(item);
                    return [3 /*break*/, 9];
                case 4:
                    if (!(action === "remove")) return [3 /*break*/, 6];
                    return [4 /*yield*/, createTodoItem(rl)];
                case 5:
                    item = _a.sent();
                    list.removeItem(item);
                    return [3 /*break*/, 9];
                case 6:
                    if (!(action === "complete")) return [3 /*break*/, 8];
                    return [4 /*yield*/, createTodoItem(rl)];
                case 7:
                    item = _a.sent();
                    item.markAsComplete();
                    return [3 /*break*/, 9];
                case 8:
                    if (action === "print") {
                        printTodoList(list);
                    }
                    else if (action === "exit") {
                        return [3 /*break*/, 10];
                    }
                    else {
                        console.log("Invalid action.");
                    }
                    _a.label = 9;
                case 9: return [3 /*break*/, 1];
                case 10:
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
todoList();

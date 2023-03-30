import * as readline from 'readline';

class TodoItem {
  description: string;
  dueDate: Date;
  isComplete: boolean;

  constructor(description: string, dueDate: Date) {
    this.description = description;
    this.dueDate = dueDate;
    this.isComplete = false;
  }

  markAsComplete() {
    this.isComplete = true;
  }

  markAsIncomplete() {
    this.isComplete = false;
  }
}

class TodoList {
  items: TodoItem[];

  constructor() {
    this.items = [];
  }

  addItem(item: TodoItem) {
    this.items.push(item);
  }

  removeItem(item: TodoItem) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getIncompleteItems() {
    return this.items.filter(item => !item.isComplete);
  }

  getCompleteItems() {
    return this.items.filter(item => item.isComplete);
  }
}

function createTodoItem(rl: readline.Interface) {
  return new Promise<TodoItem>((resolve) => {
    rl.question("Enter a description for the to-do item: ", (description) => {
      rl.question("Enter the due date for the to-do item (YYYY-MM-DD): ", (dueDateStr) => {
        const dueDate = new Date(dueDateStr);
        const item = new TodoItem(description, dueDate);
        resolve(item);
      });
    });
  });
}

function printTodoList(list: TodoList) {
  console.log("Incomplete items:");
  const incompleteItems = list.getIncompleteItems();
  if (incompleteItems.length === 0) {
    console.log("No incomplete items.");
  } else {
    incompleteItems.forEach(item => console.log(`- ${item.description} (due ${item.dueDate.toDateString()})`));
  }

  console.log("\nComplete items:");
  const completeItems = list.getCompleteItems();
  if (completeItems.length === 0) {
    console.log("No complete items.");
  } else {
    completeItems.forEach(item => console.log(`- ${item.description} (due ${item.dueDate.toDateString()})`));
  }
}

async function todoList() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const list = new TodoList();

  while (true) {
    const action = await new Promise<string>((resolve) => {
      rl.question("Enter an action (add, remove, complete, print, or exit): ", (answer) => {
        resolve(answer.trim());
      });
    });

    if (action === "add") {
      const item = await createTodoItem(rl);
      list.addItem(item);
    } else if (action === "remove") {
      const item = await createTodoItem(rl);
      list.removeItem(item);
    } else if (action === "complete") {
      const item = await createTodoItem(rl);
      item.markAsComplete();
    } else if (action === "print") {
      printTodoList(list);
    } else if (action === "exit") {
      break;
    } else {
      console.log("Invalid action.");
    }
  }

  rl.close();
}

todoList();

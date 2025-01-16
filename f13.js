class Task {
    constructor(taskName, priority, dueDate) {
        this.taskName = taskName;
        this.priority = priority;
        this.dueDate = new Date(dueDate);
        this.status = 'in-progress';
    }

    complete() {
        this.status = 'completed';
    }

    isOverdue() {
        return new Date() > this.dueDate && this.status === 'in-progress';
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(taskName, priority, dueDate) {
        const newTask = new Task(taskName, priority, dueDate);
        this.tasks.push(newTask);
        console.log(`Added task: "${taskName}" with priority "${priority}" and due date "${dueDate}".`);
    }

    deleteTask(taskName) {
        const index = this.tasks.findIndex(task => task.taskName === taskName);
        if (index !== -1) {
            const removedTask = this.tasks.splice(index, 1)[0];
            console.log(`Deleted task: "${removedTask.taskName}".`);
        } else {
            console.log(`Task titled "${taskName}" not found.`);
        }
    }

    updateTask(taskName, newPriority, newDueDate) {
        const task = this.tasks.find(task => task.taskName === taskName);
        if (task) {
            task.priority = newPriority;
            task.dueDate = new Date(newDueDate);
            console.log(`Updated task: "${taskName}" to priority "${newPriority}" and due date "${newDueDate}".`);
        } else {
            console.log(`Task titled "${taskName}" not found.`);
        }
    }

    sortByPriority() {
        const priorityOrder = { low: 1, medium: 2, high: 3 };
        this.tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
        console.log("Tasks sorted by priority.");
    }

    sortByDueDate() {
        this.tasks.sort((a, b) => a.dueDate - b.dueDate);
        console.log("Tasks sorted by due date.");
    }

    filterTasksByStatus(status) {
        return this.tasks.filter(task => task.status === status);
    }

    displayTasks() {
        console.log("Current Tasks:");
        this.tasks.forEach(task => {
            const isOverdue = task.isOverdue();
            const colorCode = isOverdue ? "\x1b[31m" : "\x1b[32m";
            const resetCode = "\x1b[0m";
            console.log(`${colorCode}${task.taskName} - Priority: ${task.priority}, Due Date: ${task.dueDate.toLocaleDateString()}, Status: ${task.status}${resetCode}`);
        });
    }
}

const myTaskManager = new TaskManager();
myTaskManager.addTask("Finish report", "high", "2025-01-20");
myTaskManager.addTask("Clean the house", "medium", "2025-01-15");
myTaskManager.addTask("Buy groceries", "low", "2025-01-18");

myTaskManager.displayTasks();

setTimeout(() => {
    myTaskManager.updateTask("Buy groceries", "medium", "2025-01-16");
    myTaskManager.displayTasks();

    myTaskManager.deleteTask("Clean the house");

    myTaskManager.sortByPriority();
    myTaskManager.displayTasks();

}, 1000);

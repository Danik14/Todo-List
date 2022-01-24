import { Task } from "./Task";
import { Project } from "./Project";

const inbox = new Project("inbox");
const today = new Project("today");

const task1 = new Task("new Task", "some description", "12/12/1212", "low");

inbox.addTask(task1);
inbox.addTask(task1);
inbox.addTask(task1);
inbox.addTask(task1);
inbox.addTask(task1);

console.log(inbox);

let projects = [];

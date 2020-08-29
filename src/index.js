//Importando, en las llaves lo que necesito importar y despues del from desde donde

import './styles.css';

import {Todo, TodoList} from './classes';
import {crearTodoHtml} from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));

console.log('todo', todoList.todos);
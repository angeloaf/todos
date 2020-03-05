

export class Todo {

    static frmJson ({id, tarea, completado, creado}){

        const tempTodo      = new Todo (tarea);
        tempTodo.id         = id;
        tempTodo.tarea      = tarea;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;
    }

    constructor(tarea) {
        this.tarea = tarea; 

        this.id    = new Date().getTime(); //123123
        this.completado = false;
        this.creado = new Date(); 
    }
}
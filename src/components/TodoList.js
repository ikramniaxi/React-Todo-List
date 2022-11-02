import React from "react";
const TodoList=({todos,handleDelete,handleEdit})=>{
    return (
        <u1 className="allTodos">
            {todos.map ((t)=>(
                <l1 className="singleTodo">
                    <span className="todotext" key={t.id}>
                        {t.todo}
                    </span>
                    <button onClick={()=> handleEdit(t.id)}>Edit</button>
                    <button onClick={()=> handleDelete(t.id)}>Delete</button>
                </l1>
            ))}
        </u1>
    )
}
export default TodoList;
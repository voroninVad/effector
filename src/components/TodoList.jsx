import { useUnit } from "effector-react";
import { todoStore, addTodo, removeTodo,fetchItems } from "../store/itemStore";
import { useState,useEffect } from "react";

const TodoList = () => {
    const [inputValue, setInputValue] = useState('')
    const todos = useUnit(todoStore)
    
    useEffect(() => {
        fetchItems();
      }, []);
    
    const handleAdd = ()=>{
        if(inputValue.trim()){
            addTodo(inputValue)
            setInputValue('')
        }
    }
    return ( 
        <div className="">
            <div className="flex gap-4 my-4">
                <input 
                className="flex-1 py-2 border border-gray-500 rounded"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
                />
                <button className="border border-gray-500 py-2 rounded transition-colors hover:bg-slate-500 hover:text-white" onClick={handleAdd}>Добавить</button>
            </div>
            {todos.length == 0 ? (
                 <p>Loading...</p>
            ):(
                <ul>
                {todos.map((todo, index) =>(
                    <li key={index} className="flex justify-between">
                        <span>{todo}</span>
                        <button onClick={() => removeTodo(index)} className="border border-gray-500 py-2 rounded transition-colors hover:bg-slate-500 hover:text-white">Удалить</button>
                    </li>
                ))}
                
            </ul>
            )}
           
        </div>
     );
}
 
export default TodoList;
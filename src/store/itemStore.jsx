import { createStore, createEvent, createEffect  } from "effector/effector.mjs";

export const addTodo = createEvent()
export const removeTodo = createEvent()

export const fetchItems = createEffect(async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['пример']);
      }, 2000);
    });
  });

export const todoStore = createStore([])
.on(fetchItems.doneData, (_, items) => items)
.on(addTodo, (state, todo) => [...state, todo])
.on(removeTodo, (state, index) => state.filter((_,i)=> i !== index))
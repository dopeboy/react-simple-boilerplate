import App from '../src/components/wrappers/App';
import './setup';
import {getAll, addToList} from '../src/services/todo.js';

test("todo service is initialized with three items", () => {
    expect(getAll().length).toBe(3)
});

test("adding an item using the todo service", () => {
    const newList = addToList(getAll(), {text: "test", completed: false})
    expect(newList.length).toBe(4)
});

import App from '../src/components/wrappers/App'
import './setup'
import {getAll, addToList} from '../src/services/todo.js'

// Get the items that the list is initialized with through the todo service.
// Check if this list contains three items.
test("todo service is initialized with three items", () => {
    expect(getAll().length).toBe(3)
});

// Add an item to the list through the todo service.
// Check if the list contains four items.
test("adding an item using the todo service", () => {
    const newList = addToList(getAll(), {text: "test", completed: false})
    expect(newList.length).toBe(4)
});

// YOUR TESTS GO HERE

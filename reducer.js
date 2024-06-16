import storage from "./ultil/storage.js";

const init = {
  todos: storage.get(),
  filter: "all",
  filters: {
    all: () => true,
    active: (v) => !v.completed,
    completed: (v) => v.completed,
  },
  editIndex: null,
};

const actions = {
  add({ todos }, title) {
    if (title) {
      todos.push({ title, completed: false });
      storage.set(todos);
    }
  },
  toggle({ todos }, index) {
    todos[index].completed = !todos[index].completed;
    storage.set(todos);
  },
  toggleAll({ todos }, checked) {
    todos.forEach((v) => (v.completed = checked));
    storage.set(todos);
  },
  changeFilter(state, newFilter) {
    state.filter = newFilter;
  },
  remove({ todos }, index) {
    todos.splice(index, 1);
    storage.set(todos);
  },
  clearCompleted({ todos }) {
    todos.map((v) => (v.completed = false));
    storage.set(todos);
  },
  startEdit(state, index) {
    state.editIndex = index;
  },
  endEdit(state, value) {
    if (state.editIndex !== null) {
      if (value) {
        state.todos[state.editIndex].title = value;
        storage.set(state.todos);
      } else {
        this.remove(state, state.editIndex);
      }
      state.editIndex = null;
    }
  },
  cancelEdit(state) {
    state.editIndex = null;
  },
};

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, ...args);
  return state;
}

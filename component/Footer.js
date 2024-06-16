import html from "../core.js";
import { connect } from "../store.js";

function Footer({ todos, filters, filter }) {
  const filterData = todos.filter(filters[filter]);
  return html`<footer class="footer">
    <span class="todo-count"
      ><strong>${filterData.length}</strong> item left</span
    >
    <ul class="filters">
      ${Object.keys(filters).map((key) => {
        return html`<li onclick="dispatch('changeFilter', '${key}')">
          <a href="#" class="${key === filter && "selected"}"
            >${key.at(0).toUpperCase() + key.slice(1)}</a
          >
        </li>`;
      })}
    </ul>
    <button class="clear-completed" onclick="dispatch('clearCompleted')">
      Clear completed
    </button>
  </footer>`;
}

export default connect()(Footer);

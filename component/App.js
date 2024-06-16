import html from "../core.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import TodoList from "./TodoList.js";
import { connect } from "../store.js";

function App({ todos }) {
  return html`
    <section class="todoapp">
      ${Header()} 
      ${!!todos?.length && TodoList()}
      ${!!todos?.length && Footer()}
    </section>
  `;
}

export default connect()(App);

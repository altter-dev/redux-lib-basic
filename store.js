import { createStore } from "./core.js";
import reducer from "./reducer.js";
import withLogger from "./logger.js";

const { attack, connect, dispatch } = createStore(withLogger(reducer));

window.dispatch = dispatch;

export { attack, connect };

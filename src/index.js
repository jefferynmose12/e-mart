import { render } from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import store from './redux/store'
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  rootElement
);


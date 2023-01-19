import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import store from "store";
import { Provider } from "react-redux";

import Error404 from "containers/errors/error404";
import Home from "containers/pages/home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error * si no encuentra la ruta */}
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

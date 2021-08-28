import React from "react";
import { render } from "react-dom";

import { App } from "./pages/app";


render(<App />, document.getElementById("root"))

//ReactDOM.render(, document.getElementById("root"));

// hot reloading. It works by replacing a module of the application 
// during runtime with an updated one so that it’s available for instant use.
//module.hot.accept();
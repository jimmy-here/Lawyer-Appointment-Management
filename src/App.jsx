// import React from "react";
// import { Provider } from "react-redux";
// import store from "./app/store";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import AppRoutes from "./routes/AppRoutes";

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <AppRoutes />
//       <Footer />
//     </>
//   );
// };

// export default App;

// import React from "react";
// import { Provider } from "react-redux";
// import { BrowserRouter as Router } from "react-router-dom";
// import store from "./app/store";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import AppRoutes from "./routes/AppRoutes";

// const App = () => {
//   return (
//     // <Provider store={store}>
//       <Router>
//         <Navbar />
//         <AppRoutes />
//         <Footer />
//       </Router>
//     // </Provider>
//   );
// };

// export default App;

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./app/store";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    // <Provider store={store}>
    <>
       <Router>
        <Navbar />
        <AppRoutes />
        <Footer />
       </Router>
        </>
    // </Provider>
  );
};

export default App;


// App.js
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import AppLayout from "./Components/layout/AppLayout";
import Customer from "./Components/Customer/Customer";
import Product from "./Components/Product/Product";
import Income from "./Components/Income/Income";
import Promote from "./Components/Promote/Promote";
import Help from "./Components/Help/Help";
import Blank from "./Components/Pages/Blank";
import file from "./Components/library/file.json";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Blank items={file} />} />
        <Route path="/product" element={<Product />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/income" element={<Income />} />
        <Route path="/promote" element={<Promote />} />
        <Route path="/help" element={<Help />} />
      </Route>
    </Routes>
  );
};

export default App;




// import React from "react";
// import "./App.css";
// import {Route, Routes } from 'react-router-dom';

// import AppLayout from "./Components/layout/AppLayout";
// import Customer from "./Components/Customer/Customer";
// import Product from "./Components/Product/Product";
// import Income from "./Components/Income/Income";
// import Promote from "./Components/Promote/Promote";
// import Help from "./Components/Help/Help";
// import Blank from "./Components/Pages/Blank";
// import file from "./Components/library/file.json"



// const App = () => {
//   return (

//       <Routes>
//         <Route path="/" element={<AppLayout />}>
//           <Route index element={<Blank items={file}/>}/>
//           <Route path="/product" element={<Product/>}/>
//           <Route path="/customer" element={<Customer/>}/>
//           <Route path="/income" element={<Income/>}/>
//           <Route path="/promote" element={<Promote/>}/>
//           <Route path="/help" element={<Help/>}/>
//         </Route>
//       </Routes>

//   );
// }

// export default App;

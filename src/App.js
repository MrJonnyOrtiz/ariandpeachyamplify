import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Book from "./pages/Book";
import About from "./pages/About";
import Error from "./pages/Error";

// import Admin from "./pages/Admin";

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="services" element={<Services />} />
               <Route path="about" element={<About />} />
               <Route path="book" element={<Book />} />
               <Route path="*" element={<Error />} />
               {/* <Route path="admin" element={<Admin />} /> */}
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;

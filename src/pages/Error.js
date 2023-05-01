import { Link } from "react-router-dom";

function Error() {
   return (
      <div>
         <header>
            <h1>Error</h1>
         </header>
         <div>
            <h2>404</h2>
         </div>
         <div>
            <h3>Requested page not found</h3>
         </div>
         <div>
            <h4>
               <Link to="/">Go back home</Link>
            </h4>
         </div>
      </div>
   );
}

export default Error;

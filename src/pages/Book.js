import { NavBar, Footer } from "../ui-components";
import { useNavigate } from "react-router-dom";
import { View, Heading, Link } from "@aws-amplify/ui-react";

function Book() {
   const navigate = useNavigate();

   const routeChange = (linkName) => {
      const path = `${linkName}`;
      navigate(path);
   };

   const hoverOver = (e) => {
      e.target.style.background = "#EEDAD1";
      e.target.style.fontWeight = "bold";
   };

   const hoverLeave = (e) => {
      e.target.style.background = "white";
      e.target.style.fontWeight = "normal";
   };

   const hoverOverFooter = (e) => {
      e.target.style.color = "black";
      e.target.style.fontWeight = "bold";
   };

   const hoverLeaveFooter = (e) => {
      // setHoverColor("red");
      e.target.style.color = "white";
      e.target.style.fontWeight = "normal";
   };

   const navBarOverrides = {
      // Logo
      image: {
         style: {
            cursor: "pointer",
         },
         width: "100px",
         height: "100px",
         alt: "logo: hands together at the base of the palm holding a green plant",
         onClick: () => routeChange("/"),
      },

      // Services link
      Services: {
         onClick: () => routeChange("/services"),
         onMouseOver: (e) => hoverOver(e),
         onMouseLeave: (e) => hoverLeave(e),
      },

      // Book link
      Book: {},

      // About link
      About: {
         onClick: () => routeChange("/about"),
         onMouseOver: (e) => hoverOver(e),
         onMouseLeave: (e) => hoverLeave(e),
      },

      // Signout button
      Button: {
         style: {
            display: "none",
         },
      },
   };

   const footerOverrides = {
      copyright: {
         children: `Copyright \u00A9 ${new Date().getFullYear()} Cloud Realm LLC`,
      },

      Services: {
         style: {
            cursor: "pointer",
         },

         onClick: () => routeChange("/services"),
         onMouseOver: (e) => hoverOverFooter(e),
         onMouseLeave: (e) => hoverLeaveFooter(e),
      },

      Book: {},

      About: {
         style: {
            cursor: "pointer",
         },

         onClick: () => routeChange("/about"),
         onMouseOver: (e) => hoverOverFooter(e),
         onMouseLeave: (e) => hoverLeaveFooter(e),
      },

      Facebook: {
         style: {
            cursor: "pointer",
         },

         onClick: () => routeChange("/about"),
         onMouseOver: (e) => hoverOverFooter(e),
         onMouseLeave: (e) => hoverLeaveFooter(e),
      },

      Instagram: {
         style: {
            cursor: "pointer",
         },

         onClick: () => routeChange("/about"),
         onMouseOver: (e) => hoverOverFooter(e),
         onMouseLeave: (e) => hoverLeaveFooter(e),
      },
   };

   return (
      <div>
         <div>
            <NavBar overrides={navBarOverrides} />
         </div>
         <main>
            <View textAlign="center" margin="2rem">
               <Heading level={2}>
                  Click&nbsp;
                  <Link href="tel:9417447627">here</Link>&nbsp;to book your
                  appointment now
               </Heading>
            </View>
         </main>

         <footer>
            <Footer overrides={footerOverrides} />
         </footer>
      </div>
   );
}

export default Book;

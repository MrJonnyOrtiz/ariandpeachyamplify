import { NavBar, Footer } from "../ui-components";
import { View, Image } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

function About() {
   const navigate = useNavigate();

   const routeChange = (linkName) => {
      const path = `${linkName}`;
      navigate(path);
   };

   const hoverOver = (e) => {
      // setHoverColor("red");
      e.target.style.background = "#EEDAD1";
      e.target.style.fontWeight = "bold";
   };

   const hoverLeave = (e) => {
      // setHoverColor("red");
      e.target.style.background = "white";
      e.target.style.fontWeight = "normal";
   };

   const hoverOverFooter = (e) => {
      // setHoverColor("red");
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
      Book: {
         style: {
            cursor: "pointer",
         },
         onClick: () => routeChange("/book"),
         onMouseOver: (e) => hoverOver(e),
         onMouseLeave: (e) => hoverLeave(e),
      },

      // About link
      About: {},

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

      Book: {
         style: {
            cursor: "pointer",
         },

         onClick: () => routeChange("/book"),
         onMouseOver: (e) => hoverOverFooter(e),
         onMouseLeave: (e) => hoverLeaveFooter(e),
      },

      About: {},

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
      <>
         <div>
            <NavBar overrides={navBarOverrides} />
         </div>
         <View textAlign="center">
            <figure>
               <Image
                  src="https://serenity-springs-assets.s3.amazonaws.com/AboutUs.jpeg"
                  height="400px"
                  width="375px"
                  alt="owners, Arianna and Brianna"
               />
               <figcaption>Owners: Arianna and Brianna Ortiz</figcaption>
            </figure>
         </View>
         <View textAlign="center">
            <View
               marginLeft="3rem"
               marginRight="3rem"
               paddingLeft="3rem"
               paddingRight="3rem"
            >
               Serenity Springs is your destination for your favorite salon and
               spa treatments. Our salon products are handmade and eco-friendly.
               We love helping our customers live beautifully.
            </View>
         </View>
         <footer>
            <Footer overrides={footerOverrides} />
         </footer>
      </>
   );
}

export default About;

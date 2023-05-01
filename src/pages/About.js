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
               <figcaption>Owners: Arianna Ortiz and Brianna Ortiz</figcaption>
            </figure>
         </View>
         <View textAlign="center">
            <View
               marginLeft="3rem"
               marginRight="3rem"
               paddingLeft="3rem"
               paddingRight="3rem"
            >
               Serenity springs is run by sisters Arianna and Brianna Ortiz.
               They both graduated from Erwin Technical College; Arianna with a
               license in Cosmetology and Brianna in Massage Therapy. We started
               this journey because we’ve always loved helping people. Our
               desire is to help people feel their best from the inside out
               while offering the cleanest products and services! .
            </View>
         </View>
         <footer>
            <Footer overrides={footerOverrides} />
         </footer>
      </>
   );
}

export default About;

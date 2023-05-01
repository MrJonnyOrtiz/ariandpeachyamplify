import React, { useState } from "react";
import { NavBar, SSservices, ItemCard, Footer } from "../ui-components";
import { View } from "@aws-amplify/ui-react";

import { useNavigate } from "react-router-dom";

function Services() {
   const [showDetails, setShowDetails] = useState(false);
   const [service, setService] = useState();

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
      Services: {},

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
      About: {
         style: {
            cursor: "pointer",
         },
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

   const itemCardOverrides = {
      Vector: {
         style: {
            cursor: "pointer",
         },
         onClick: () => {
            setShowDetails(!showDetails);
         },
      },
   };

   const footerOverrides = {
      copyright: {
         children: `Copyright \u00A9 ${new Date().getFullYear()} Cloud Realm LLC`,
      },

      Services: {},

      Book: {
         style: {
            cursor: "pointer",
         },

         onClick: () => routeChange("/book"),
         onMouseOver: (e) => hoverOverFooter(e),
         onMouseLeave: (e) => hoverLeaveFooter(e),
      },

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
      <>
         <div>
            <NavBar overrides={navBarOverrides} />
         </div>
         <View
            textAlign="center"
            margin="1rem"
            display="flex"
            alignItems="center"
            justifyContent=" center"
         >
            {showDetails && (
               <ItemCard service={service} overrides={itemCardOverrides} />
            )}
         </View>

         <View
            textAlign="center"
            margin="1rem"
            display="flex"
            alignItems="center"
            justifyContent=" center"
         >
            <SSservices
               itemsPerPage={4}
               overrideItems={({ item, index }) => ({
                  overrides: {
                     // override style
                     Type: { color: "blue" },

                     // Profile button
                     Button36772986: {
                        onClick: () => {
                           setShowDetails(!showDetails);
                           setService(item);
                        },
                     },

                     Button36672950: {
                        style: {
                           display: "none",
                        },
                     },

                     "Frame 418": {
                        style: {
                           display: "none",
                        },
                     },

                     // Update button
                     // Button36502689: {
                     //    onClick: () => {
                     //       setUpdatePet(item);
                     //       setPetName(item.name);
                     //       setPetAge(item.age);
                     //       setPetType(item.type);
                     //       setPetAbout(item.about);
                     //       setPetImage(item.image);
                     //       if (!showForm) setShowForm(true);
                     //    },
                     // },
                  },
               })}
            />
         </View>
         <footer>
            <Footer overrides={footerOverrides} />
         </footer>
      </>
   );
}

export default Services;

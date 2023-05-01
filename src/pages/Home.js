import { HeroLayout1Mode3, NavBar, Footer } from "../ui-components";
import { useNavigate } from "react-router-dom";

function Home() {
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
         style: {
            cursor: "pointer",
         },
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

   const heroOverrides = {
      "Welcome!": {
         fontSize: "32px",
         children: "Welcome to Serenity Springs",
      },

      "Live Beautifully": {
         fontStyle: "italic",
         children: "Live Beautifully.",
      },

      "Message paragraph": {
         children:
            "Relaxation and rejuvenation are at the forefront of everything we do. Whether you're in need of a refreshing facial, a soothing massage, or a glamorous new hairstyle, we have a wide range of treatments and services to cater to all your beauty needs. We believe that beauty and wellness go hand in hand, which is why we offer a holistic approach to self-care. From our signature massages that will ease away tension and stress, to our customized facials that will leave your skin glowing and radiant, we're here to help you look and feel your best from head to toe. We understand that every client is different, which is why we take the time to listen to your needs and customize our treatments to suit your individual preferences. So why wait? Check out our services and book your appointment today to live beautifully!",
      },

      Button: {
         children: "Services",
         onClick: () => routeChange("/services"),
      },

      image: {
         src: "https://serenity-springs-assets.s3.amazonaws.com/sam-carter-OL3fzrOhvPo-unsplash.jpg",
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
         <header>
            <NavBar overrides={navBarOverrides} />
         </header>

         <main>
            <HeroLayout1Mode3 overrides={heroOverrides} />
         </main>

         <footer>
            <Footer overrides={footerOverrides} />
         </footer>
      </>
   );
}

export default Home;

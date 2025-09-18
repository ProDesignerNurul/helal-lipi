import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import PremiumFonts from "../pages/Fonts/PremiumFonts/PremiumFonts";
import NormalFonts from "../pages/Fonts/NormalFonts/NormalFonts";
import SingUp from "../pages/Authentication/SingUp";
import SingIn from "../pages/Authentication/SingIn";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/premium-fonts",
        element: <PremiumFonts />,
      },
      {
        path: "/normal-fonts",
        element: <NormalFonts />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/sing-up",
        element: <SingUp />,
      },
      {
        path: "/sing-in",
        element: <SingIn />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter, RouterProvider  } from "react-router-dom";


import { AppLayout } from "./components/Layout/AppLayout";

import "./App.css";

import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { Product } from "./pages/Product";
import { Contact } from "./pages/Contact";
import { Errorpage } from "./pages/Errorpage";
import { Kaaka } from "./pages/AllProducts/kaaka";
import { LicenseChatbot } from "./pages/AllProducts/LicesnseChatbot";
import { Drawing } from "./pages/AllProducts/drawing";
import { ProgramLang } from "./pages/AllProducts/programLang";
import { Detection } from "./pages/AllProducts/BreathDetection";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Blog",
        element: <Blog />,
      },
      {
        path: "Product",
        element: <Product />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Kaaka",
        element: <Kaaka />
      }, 
      {
        path: "LicenseChatbot",
        element: <LicenseChatbot />
      }, 
      {
        path: "Drawing",
        element: <Drawing />
      }, 
      {
        path: "ProgramLang",
        element: <ProgramLang />
      }, 
      {
        path: "Detection",
        element: <Detection />
      }
    ]

  }
  
]);

const App =() => {
  return <RouterProvider router={router}> </RouterProvider>;
};

export default App;
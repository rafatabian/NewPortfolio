import React from "react";
import App from './App.js'
import "./index.css"
import { ParallaxProvider } from "react-scroll-parallax";

import { createRoot } from "react-dom/client"
createRoot(document.getElementById("root")).render(
    
    <ParallaxProvider>
        <App />
    </ParallaxProvider>
)

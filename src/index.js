import "./styles.css";
import {createRoot} from "react-dom/client";
import Experience from "./Experience";
import { Canvas } from "@react-three/fiber";


const root = createRoot(document.getElementById("root"));

root.render(
    <Canvas
        camera={{position: [2, 0, 5]}}
        >
        <Experience/>
    </Canvas>  
    );


    
    // root.render(
    //     <Experience 
    //         title = "Hello World"
    //         subtitle = "3D web"
        
    //     />
    // )
    
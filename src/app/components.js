import Link from "next/link";
import { jetbrains } from "./layout";

export function Button({text, link}){
 return(
    <div>
        <Link href={link}>
        <button type="button" className=" p-2 rounded-lg shadow-inner bg-gray-300 hover:shadow-none hover:bg-gray-200 hover:text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-100">
            
            {text}
            
            
        </button>
        </Link>
    </div>
 )   
}

export function NavBar(){
    return(
        <div className="sticky top-0 flex place-content-center z-50 backdrop-blur-sm">

            <Link href="./art" className={jetbrains.className}>
                <div className="p-2 bg-auto hover:text-amber-400">
                Art Portfolio
                </div>
            </Link>
        
        
            <Link href="./" className={jetbrains.className}>
            <div className="p-2 bg-auto hover:text-amber-400">
                Home
                </div>
            </Link>
        
        
            <Link href="./cs" className={jetbrains.className}>
            <div className="p-2 bg-auto hover:text-amber-400">
                CS/EE Portfolio
                </div>
            </Link>
        
        </div>
    )
}

export function Wind({xIn,yIn,widthIn,heightIn}){
    let dragging = false;
    let x = xIn;
    let y = yIn;
    let w = widthIn;
    let h = heightIn;
    addEventListener("dragstart",(event)=>{
        
    });

    return (
        <div>


        </div>


    )
}
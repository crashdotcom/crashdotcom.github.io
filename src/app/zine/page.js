import Image from "next/image";
import {silkscreen, jetbrains} from "../layout";
import Button from "../components";
import img from "../../../public/asgh.png"


export default function Home() {
  return (
    <div>
      <main>
      <div className={jetbrains.className}>
              <div className="items-center justify-items-center text-5xl dark:shadow-gray-800 pb-4">
          <h1 className={silkscreen.className}>DIY or die</h1>
           <p className={jetbrains.className}>
            A zine about DIY movements, from abortion clinics to community during the AIDS pandemic and HRT, and how they influence the legal sphere. Download and print at your leisure. <a href="https://www.ashleytopacio.com/how-to-fold-a-zine" target="_blank">Zine folding guide.</a>
          </p>
        </div>
        <div className="items-center justify-items-center p-4 max-w-3/5 place-self-center h-screen">
        <object class="pdf" data="https://crashdotcom.github.io/zine.pdf"></object>
 
        

        </div>


        
        </div>
      </main>
    </div>
      );
}

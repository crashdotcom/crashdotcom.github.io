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

        <div className="place-self-center max-w-3/5 text-base"> 
        {/* grid grid-cols-2 max-w-3/5 place-self-center */}
          <div className="p-4">
          <p className={jetbrains.className}>
            A zine about DIY movements, from abortion clinics to community during the AIDS pandemic and HRT, and how they influence the legal sphere. Download and print at your leisure. <a className="underline"href="https://www.ashleytopacio.com/how-to-fold-a-zine" target="_blank">Zine folding guide.</a>
          </p>
<br></br>
          <p className={jetbrains.className}><a target="_blank" className="underline" href="https://crashdotcom.github.io/zine.pdf">Direct PDF link.</a></p>
          </div>
        <div className="place-self-center">
            
            </div>
        </div>

        </div>
        <div className="items-center justify-items-center p-4 max-w-3/5 place-self-center h-screen">
        <object className="pdf" width="200%" height="500px"data="https://crashdotcom.github.io/zine.pdf"></object>
 
        

        </div>


        
        </div>
      </main>
    </div>
      );
}

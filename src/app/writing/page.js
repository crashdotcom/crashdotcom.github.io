import Image from "next/image";
import {silkscreen, jetbrains, pixelify} from "../layout";
import Button from "../components";
import { Header } from "../components";

export default function Home() {
  return (
    <>
    <div className="h-screen overflow-hidden max-h-screen p-12">
      <Header page="./home/writing"/>

      <main>
        <div className="space-y-3">
          <div className="typewriter">
            </div>
            
              <div className="text-lg"><p className={jetbrains.className}>Work in progress :)</p></div>

        </div>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
    </main>
    </div>
</>
  );
}

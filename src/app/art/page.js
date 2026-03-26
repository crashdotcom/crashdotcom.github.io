import Image from "next/image";
import {silkscreen, jetbrains} from "../layout";
import {Header} from "../components";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <div className="p-12 space-y-6">
            <Header page="./home/art"/>
            <div className="typewriter">
            <h1 className={silkscreen.className}>
                i draw
            </h1>
            </div>
            <div className={jetbrains.className}>
            
            <div className="flex flex-col md:flex-row space-x-3 text-left">
                <div className="basis-3/5 grow-0 shadow-lg shadow-border rounded-xl backdrop-brightness-120">
                <div className="p-6">
                    <p>I mostly draw my OCs, with the occasional bit of fanart. I like strong shapes and interesting colors and imagery. Currently, I'm trying to converge upon an answer to "what does it mean to be?" through my drawings. I'll let you know if I find it.</p>
                    <br></br>
                    <p>Commissions closed.</p>
                </div>
                </div>
                <div className="basis-2/5 grow-1 shadow-lg shadow-border rounded-xl backdrop-brightness-120">
                <div className="p-6">
                    <p>Current Stack:</p>
                    <ul>
                        <li>Wacom Intuos S</li>
                        <li>Clip Studio Paint</li>
                    </ul>
                    <p>Other Experience:</p>
                    <ul>
                      <li>Adobe Suite (Photoshop, Premiere Pro)</li>
                      <li>Medibang</li>
                      <li>Pencil 2D</li>
                      <li>Blender (limited)</li>
                      <li>Godot (limited)</li>
                    </ul>
                    </div>
                </div>

            </div>

            <div className="mt-6">
                <h2 className={`${silkscreen.className} text-center text-4xl`}>some of my art!</h2>
            </div>
            <div className="md:flex md:flex-row justify-center">

              <div className="p-3">
            <Image
              src="apl.png"
              alt="Drawing of two characters looking at each other, silhouettes cut out of an apple"
              width="300"
              height="300"
              className="p-3 z-100"
            >
            </Image>

            <Image
              src="ejtjs.png"
              alt="Drawing of a person looking off into the distance"
              width="300"
              height="300"
              className="p-3 z-100"
            ></Image>
            </div>

            <div className="p-3">
              <Image
                src="ests.png"
                alt="Drawing of a person smiling, looking at the viewport"
                width="300"
                height="300"
                className="p-3"

              ></Image>
              <Image
                src="iodkdjV2_panel.png"
                alt="Drawing of two people in a barn, one sitting and the other leaning against the doorway"
                width="300"
                height="300"
                className="p-3"
              ></Image>
            </div>

            <div className="p-3">
              <Image
                src="jfkred.png"
                alt="Drawing of a face up close with high contrast, black and red"
                width="300"
                height="300"
                className="p-3"
              ></Image>
              <Image
                src="poolnt.png"
                alt="Drawing of two people playing pool"
                width="300"
                height="300"
                className="p-3"
              ></Image>
            </div>

            </div>
            </div>

        </div>
        <div className="z-10" id='stars'></div>
        <div className="z-10" id='stars2'></div>
        <div className="z-10" id='stars3'></div>
        
      </main>
    </div>
  );
}

import Image from "next/image";
import {silkscreen, jetbrains, pixelify} from "../layout";
import { Header } from "../components";

export default function Home() {
  return (
    
    <div className="h-screen overflow-auto max-h-screen p-12">
      <Header page="./home/about_me"/>
      <main>
        <div className="space-y-3">
          <div className="typewriter">
              <h1 className={silkscreen.className}>it's me!</h1>
            </div>
            <div className={`${jetbrains.className} text-lg`}> 
                <p>I'm Jay. I'm a CS major at Berkeley. This is the personal portion of my website, where I tell you who I am while attempting to not completely dox myself.
                    <br></br><br></br>
                CS-wise, I'm really interested in programming languages, copyright & AI, and building useful developer/creator tools. I'm inspired by the work of companies like Blender, Adobe, and Microsoft, and people like Emily Short and Freya Holmér. I want my work to enable other people to become better engineers, better programmers, better artists.
                <br></br><br></br>
                I believe in good engineering, <i>quality engineering</i>--engineering for the sake of engineering. I strive for excellence, but I'm also dynamic and capable of adapting on the fly. If that sounds like a good fit, <a href="mailto: k.yoo [at] berkeley.edu">drop me a line</a> :)
                <br></br><br></br>
                Outside of school, I like drawing, going to the gym, and keeping up with the latest in tech policy. Ask me about interactive fiction!
                </p>
          </div>
        </div>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
    </main>
    </div>

  );
}

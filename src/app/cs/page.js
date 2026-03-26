import Image from "next/image";
import {silkscreen, jetbrains} from "../layout";
import {Header} from "../components";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <div className="p-12 space-y-6">
            <Header page="./home/cs"/>
            <div className="typewriter">
            <h1 className={silkscreen.className}>
                i code things
            </h1>
            </div>
            <div className={jetbrains.className}>
            
            <div className="flex flex-col md:flex-row space-x-3 text-left md:divide-amber-400">
                <div className="basis-2/5 shadow-lg shadow-border rounded-xl backdrop-brightness-120">
                <div className="p-6">
                    <p>Currently taking:</p>
                    <ul>
                        <li>CS 162: Operating Systems & System Programming</li>
                        <li>CS 188: Intro to Artificial Intelligence</li>
                        <li>LEGALST 123: Data, Prediction, & Law</li>
                        <li>PUBPOL 147: Intro to Tech & Policy</li>
                    </ul>
                </div>
                </div>
                <div className="basis-3/5 shadow-lg shadow-border rounded-xl backdrop-brightness-120">
                <div className="p-6">
                    <p>Skills</p>
                    <ul>
                        <li>
                            Languages: Python, Java, C, C++, OCaml, HTML/CSS, JavaScript, RISC-V/x86
                        </li>
                        <li>Libraries/Frameworks: Pandas, NumPy, Seaborn, NetworkX, matplotlib, React, Vite, TailwindCSS, Next.js, QT</li>
                        <li>Tools: Logisim, LTSpice, Figma, Git, Cadence, VS Code/Visual Studio, Eclipse, IntelliJ</li>
                        <li>Other: Microsoft Suite, Adobe Creative Cloud</li>
                    </ul>
                    </div>
                </div>

            </div>

            <div className="mt-6">
                <h2 className={`${silkscreen.className} text-center text-4xl`}>Projects</h2>
            </div>

                <h3><a href="https://na933950.github.io/cs184_final_project">Semi-Automated 2D Cel Shader</a></h3>
                <p>C++, Qt</p>
                <ul>
                    <li>Showcase winner out of 60 projects for computer graphics class</li>
                    <li>Developed a Pencil 2D plugin in C++ for automatic convex & concave cel shading with halftones and specularity</li>
                    <li>Implemented GUI elements with the QT framework to modify the shader’s light source position on 3 axes</li>
                    <li>Refined lighting artifacts with C++ for object shading and self shading</li>
                </ul>
                <br></br>
                <h3><a href="https://github.com/crashdotcom/calhacks2024">Remediate</a></h3>
                <p>React, JavaScript, HTML, CSS, VAPI, Twilio, Figma</p>
                <ul>
                    <li>
        Developed and deployed reMEDiate, a voice AI agent that calls hospitals and fights medical bills on behalf of the user
                    </li>
                    <li>
                        Configured and connected the voice agent to the frontend using VAPI and Twilio
                    </li>
                </ul>

                
            </div>

        </div>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
                
      </main>
    </div>

  );
}

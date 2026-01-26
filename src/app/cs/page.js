import Image from "next/image";
import {silkscreen, jetbrains} from "../layout";
import Button from "../components";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <div className={jetbrains.className}>

            <div className="max-w-3/5 place-self-center">
        <div className="items-center justify-items-center p-4 max-w-3/5 place-self-center blur-none">
            <div className="flex flex-col md:flex-row">
                <div className="w-lg border-amber-400 border-2 p-2 mx-2 drop-shadow-2xl">
                    <p>
                        Hello o/ I'm Jay. I'm a CS major at Berkeley. Here's my <a target="_blank" href="https://github.com/crashdotcom" className="hover:text-amber-400 underline">Github</a>.
                    </p>
                    <br></br>
                    <p>
                        Interests includes: programming language design/language as a tool, copyright and AI, and interactive fiction.
                    </p>
                    <br></br>
                    <p>
                        Currently taking:
                        <ul>
                             <li>CS 162: Operating Systems and System Programming</li>
                             <li>CS 188: Introduction to Artificial Intelligence</li>
                             <li>LEGALST 123: Data, Prediction, & Law</li>
                             <li>PUBPOL 147: Progress? An Introduction to Technology and Public Policy</li>
                        </ul>
                    </p>
                </div>
                <div className="basis-3/4 mx-2 text-wrap">
                    <ul>
                        <li>Languages: Python, Java, C, C++, OCaml, HTML/CSS, JavaScript, RISC-V/x86</li>
                        <li>Libraries/Frameworks: Pandas, NumPy, Seaborn, NetworkX, matplotlib, React, Vite, TailwindCSS, Next.js, QT</li>
                        <li>Tools: Logisim, LTSpice, Figma, Git, Cadence, VS Code/Visual Studio, Eclipse, IntelliJ</li>
                        <li>Other: Microsoft Suite, Adobe Creative Cloud</li>
                        
                    </ul>
                    <br></br>
                    <p>
                        This page is not a replacement for my resume, but serves as an extension of it (projects and personality and other fun stuff). 
                    </p>
                </div>
            </div>
        </div>
        <div className="text-2xl p-4 text-center"><h1 className={silkscreen.className}>Selected Projects</h1></div>
        <div className="items-start p-4">
            
        <a className="text-lg underline" href="https://github.com/crashdotcom/calhacks2024"><h2 className={silkscreen.className}>reMEDiate</h2></a>
            <i>CalHacks 2024 36 hour project</i>
        <ul>
            <li>
                Developed and deployed reMEDiate, a voice AI agent that calls hospitals and fights medical bills on behalf of the user
            </li>
            <li>
                Configured and connected the voice agent to the frontend using VAPI and Twilio
            </li>
        </ul>
        <p>
            <b>Made with: React, JavaScript, HTML, CSS, VAPI, Twilio, Figma</b>
        </p>

        <a className="text-lg underline w-fit" href="https://crashdotcom.github.io/cs184/hw2.html"><h2 className={silkscreen.className}>3-D Mesh Renderer</h2></a>
        <i>CS 184: Introduction to Computer Graphics</i>
            <ul>
                <li>
                    Implemented loop upsampling, edge flipping, and deCasteljau's algorithm to evaluate Bezier curves and render meshes
                </li>
            </ul>
        <p>
            <b>
                Made with: C++, CGL
            </b>
        </p>

        </div>

        {/* <div className="bg-white/10 fixed top-0 right-0 left-0 h-screen w-2/3 place-self-center blur-xs z-0"> </div> */}

        </div>
        

        </div>
        
      </main>
    </div>
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
    //           src/app/page.js
    //         </code>
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         bleh bleh bleh
    //       </li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}

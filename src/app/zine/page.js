import Image from "next/image";
import {silkscreen, jetbrains} from "../layout";
import Button from "../components";
import img from "../../../public/asgh.png"


export default function Home() {
  return (
    <div>
      <main>
      <div className={jetbrains.className}>
        <div className="items-center justify-items-center p-4 max-w-3/5 place-self-center h-screen">
            <div className="flex flex-col md:flex-row">
                <div className="w-lg border-amber-400 border-2 p-2 mx-2 drop-shadow-2xl">
                    <p>
                    Hi I'm crash (!!) dot com and I draw cool stuff :P
                    </p>
                    {/* You can find me on <a href="https://www.instagram.com/crashdotcom">Instagram</a> or <a href="https://bsky.app/profile/crashdotcom.bsky.social">Bluesky</a> */}
                    <ul>
                        <li>Current Software: Clip Studio Pro, Adobe Premiere Pro</li>
                        <li>Hardware: Wacom Intuos S, Lenovo Thinkpad</li>
                        <li>Other Experience: Photoshop, Premiere Pro, Medibang, Blender (limited), Godot (limited)</li>
                    </ul>
                
            </div>
            <div className="basis-3/4 mx-2 text-wrap">
            <p>Will Draw:</p>
                    <ul>
                      <li>People. Animals. Anthro. Mech/Robots. Landscapes, if you want. I'm fairly adaptable.*</li>
                    </ul>
                    <p>
                      Will Not Draw:
                    </p>
                    <ul>
                      <li>Characters that are or appear to be underage in any sexual/suggestive context.</li>
                    </ul>
                  <p>Commissions: <a className="text-amber-400">Closed</a></p>
                </div>
        </div>

        <div className="text-2xl p-4 text-center"><h1 className={silkscreen.className}>Selected Artwork</h1></div>
        <div className="flex flex-col md:flex-row">
          <div className="p-2">
          <Image
        src="/dkfdk.png"
        alt="Drawing of a person topless wearing headphones."
        width="400"
        height="400"
        className="pb-2 pt-2"
        />

<Image
        src={img}
        alt="Drawing of a mock-up Vogue cover--fanart for a streamer."
        width="400"
        height="400"
        className="pb-2 pt-2"/>

          </div>
          <div className="p-2">
          <Image
        src="/ejtjs.png"
        alt="Drawing of a person wearing a long coat and black dress."
        width="400"
        height="400"
        className="pb-2 pt-2"
        />

        <Image
        src="rfvbk.png"
        alt="Drawing of a person lying down with pink ribbon around their arms."
        width="400"
        height="400"
        className="pb-2 pt-2"
        />

          </div>
        </div>
        <div className="text-2xl p-4 text-center"><h1 className={silkscreen.className}>MS Paint Funnies</h1></div>
        <div className="flex flex-col md:flex-row">
          <div className="p-2">
            <Image
            src="silby.png"
            alt="silly"
            width="300"
            height="300"
            />
          </div>
          <div className="p-2">
          <Image
            src="yayyay.png"
            alt="silly"
            width="300"
            height="300"
            />
          </div>
          <div className="p-2">
          <Image
            src="sdf.png"
            alt="silly"
            width="300"
            height="300"
            />
          </div>
        </div>
        

        
 
        

        <p className="text-sm"><i>* If you're unsure, message me. I'll do a lot of things. Hesitation will primarily be due to a lack of familiarity with a subject matter--that is, instances in which you may be better off commissioning an artist who specializes in it.</i></p>
        </div>


        
        </div>
      </main>
    </div>
      );
}

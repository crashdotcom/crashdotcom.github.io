import Image from "next/image";
import {silkscreen, jetbrains, pixelify} from "./layout";
import Button from "./components";
import { Header } from "./components";

export default function Home() {
  return (
    <>
    <div className="h-screen overflow-hidden max-h-screen p-12">
      <Header page="./home"/>

      <main>
        <div className="space-y-3">
          <div className="typewriter">
              <h1 className={silkscreen.className}>hello world</h1>
            </div>
            
              <div className="text-lg"><p className={jetbrains.className}>. <br></br>└── home/<br></br>&emsp;&emsp;&emsp; ├── <a href="https://crashdotcom.github.io/cs">about_me</a><br></br>&emsp;&emsp;&emsp; ├── <a href="https://crashdotcom.github.io/cs">cs</a><br></br>&emsp;&emsp;&emsp; ├── <a href="https://crashdotcom.github.io/art">art</a><br></br>&emsp;&emsp;&emsp; ├── writing<br></br>&emsp;&emsp;&emsp; └── <a href="mailto:k.yoo [at] berkeley.edu">contact</a></p></div>

        </div>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
    </main>
    </div>
</>
  );
}

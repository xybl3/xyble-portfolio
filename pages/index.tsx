import Head from "next/head";
import Navbar from "../components/Navbar";
import ThemeSwitcher from "../components/ThemeSwitcher";

export default function Home() {
  return (
    <>
      <Head>
        <title>xyble's portfolio</title>
      </Head>
      <Navbar />
      <main className="p-5 flex flex-row justify-center items-center">
        <div
          className="w-3/5 
          flex flex-col items-start
          p-5 
        "
        >
          <p className="text-6xl font-extrabold text-center">
            Olivier Marszałkowski
          </p>
          <div className="flex flex-col justify-start items-start w-[28rem]">
            <p>About</p>
            <p>something to say about me...</p>
          </div>
          <div className="flex flex-col justify-start items-start w-[28rem]">
            <p>Bio</p>
            <p>something to say about me...</p>
          </div>
        </div>
      </main>
    </>
  );
}

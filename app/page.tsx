import Hero from "./components/Hero";
import Exp from "./components/Exp";
import "./globals.css";
import Image from "next/image";
import Service from "./components/Service";
import About from "./components/About";
import Experts from "./components/Experts";

export default function Home() {
  return (
    <div className="w-full mx-auto flex flex-col items-center">

      {/* HERO SECTION WRAPPER */}
      <section className="relative w-full sm:pb-10 overflow-hidden h-screen sm:h-fit lg:h-screen flex justify-center">

        {/* Background only for hero */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-3.png"
            alt="background-image"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-transparent" />
        </div>

        {/* Hero content constrained */}
        <div className="w-full max-w-[1500px] sm:px-10 px-5">
          <Hero />
        </div>
      </section>

      {/* EXP SECTION (NO BACKGROUND IMAGE HERE) */}
      <section className="w-full flex justify-center">
        <div className="w-full max-w-[1500px] sm:px-10 px-3">
          <Exp />
        </div>
      </section>

      {/* SERVICE SECTION (NO BACKGROUND IMAGE HERE) */}
      <section className="w-full flex justify-center">
        <div className="w-full max-w-[1500px] sm:px-10 px-1">
          <Service />
        </div>
      </section>

      {/* About SECTION (NO BACKGROUND IMAGE HERE) */}
      <section className="w-full flex justify-center">
        <div className="w-full max-w-[1500px] sm:px-10 px-1">
          <About />
        </div>
      </section>

      {/* Experts SECTION (NO BACKGROUND IMAGE HERE) */}
      <section className="w-full flex justify-center">
        <div className="w-full max-w-[1500px] sm:px-10 px-1">
          <Experts />
        </div>
      </section>


      <div
        className="fixed bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ overflow: "hidden", zIndex: 50, isolation: "isolate" }}
      >
        {/* ... rest of your blur layers remain the same ... */}
        {[
          { z: 1, blur: "0.0625px", start: "0%", opaque: "12.5%", end: "25%", fade: "37.5%" },
          { z: 2, blur: "0.125px", start: "12.5%", opaque: "25%", end: "37.5%", fade: "50%" },
          { z: 3, blur: "0.25px", start: "25%", opaque: "37.5%", end: "50%", fade: "62.5%" },
          { z: 4, blur: "0.5px", start: "37.5%", opaque: "50%", end: "62.5%", fade: "75%" },
          { z: 5, blur: "1px", start: "50%", opaque: "62.5%", end: "75%", fade: "87.5%" },
          { z: 6, blur: "2px", start: "62.5%", opaque: "75%", end: "87.5%", fade: "100%" },
          { z: 7, blur: "4px", start: "75%", opaque: "87.5%", end: "100%", fade: null },
          { z: 8, blur: "8px", start: "87.5%", opaque: "100%", end: null, fade: null },
        ].map(({ z, blur, start, opaque, end, fade }) => {
          const stops = [
            `rgba(0,0,0,0) ${start}`,
            `rgba(0,0,0,1) ${opaque}`,
            end && `rgba(0,0,0,1) ${end}`,
            fade && `rgba(0,0,0,0) ${fade}`,
          ].filter(Boolean).join(", ")

          const mask = `linear-gradient(to bottom, ${stops})`

          return (
            <div
              key={z}
              style={{
                opacity: 1,
                position: "absolute",
                inset: 0,
                zIndex: z,
                maskImage: mask,
                WebkitMaskImage: mask,
                borderRadius: 0,
                pointerEvents: "none",
                backdropFilter: `blur(${blur})`,
                WebkitBackdropFilter: `blur(${blur})`,
              }}
            />
          )
        })}
      </div>
    </div>
  );
}







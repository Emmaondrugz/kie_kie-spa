import Hero from "./components/Hero";
import "./globals.css"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-[1300px] mx-auto">
      <div className="md:px-10 px-3 w-full">
        <Hero />

      </div>

      <div
        className="fixed bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ overflow: "hidden", zIndex: 50, isolation: "isolate" }}
      >
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
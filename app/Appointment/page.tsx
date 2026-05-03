import Header from "../components/Header"
import Image from "next/image"

export default function Appointment() {
    return (
        <div className="w-full mx-auto flex flex-col items-center sm:gap-20 gap-10">
            {/* HERO SECTION WRAPPER */}
            <section className="relative w-full sm:pb-10 overflow-hidden h-screen flex justify-center">

                {/* Background only for hero */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/form_img.png"
                        alt="background-image"
                        fill
                        className="object-cover"
                        priority
                    />

                    <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-transparent" />
                </div>

                {/* Hero content constrained */}
                <div className="w-full max-w-[1500px] sm:px-10 px-5">
                    Hello world
                </div>
            </section>
        </div>
    )
}
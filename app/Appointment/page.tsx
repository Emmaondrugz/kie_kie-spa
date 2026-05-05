"use client";

import { useRef } from "react";
import Image from "next/image"
import SessionForm from "../components/Form"
import Footer from "../components/Footer"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Appointment() {
    const rootRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from("[data-appointment-panel]", { x: -24, autoAlpha: 0, duration: 0.7 })
            .from("[data-appointment-logo]", { scale: 0.92, autoAlpha: 0, duration: 0.4 }, "-=0.35")
            .from("[data-appointment-form]", { y: 16, autoAlpha: 0, duration: 0.55 }, "-=0.2")
            .from("[data-appointment-image]", { scale: 1.08, autoAlpha: 0, duration: 0.9, ease: "power2.out" }, "-=0.45");
    }, { scope: rootRef });

    return (
        <>
            <div className="w-full mx-auto flex items-start justify-center lg:justify-between sm:gap-20 gap-10" ref={rootRef}>
                {/* Hero content constrained */}
                <div className="lg:w-[30%] md:h-fit h-screen w-fit bg-white pt-10 md:pt-10 flex-col gap-5 md:pl-20 flex md:justify-center p-5" data-appointment-panel>
                    {/* Heading */}
                    {/* Top bar — back button + divider + logo */}
                    <div className="flex items-center gap-3" data-appointment-logo>
                        <img src="form_logo.png" alt="" className="w-10 bg-black" />
                    </div>
                    <div className="max-w-[400px] h-auto" data-appointment-form>
                        <SessionForm />
                    </div>
                </div>


                <div className="lg:w-[60%] lg:block hidden h-screen">
                    <Image
                        src="/form_img.png"
                        alt="background-image"
                        width={500}
                        height={500}
                        quality={100}
                        className="object-cover w-full h-full"
                        data-appointment-image
                        priority
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}
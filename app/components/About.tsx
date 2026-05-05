"use client";
import Image from "next/image"
import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

export default function About() {
    const rootRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from("[data-about-head]", {
            y: 22,
            autoAlpha: 0,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: {
                trigger: rootRef.current,
                start: "top 76%",
            },
        });

        gsap.to("[data-about-image-wrap]", {
            scale: 0.95,
            ease: "none",
            scrollTrigger: {
                trigger: "[data-about-image-wrap]",
                start: "top 85%",
                end: "bottom 20%",
                scrub: true,
            },
        });

        gsap.to("[data-about-image]", {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
                trigger: "[data-about-image-wrap]",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });
    }, { scope: rootRef });

    return (
        <div className="sm:py-16 py-10 flex justify-center items-center flex-col gap-10" ref={rootRef}>

            {/* Section header */}
            <div className="flex flex-col gap-4 text-center" data-about-head>
                <div className="flex items-center mx-auto gap-3">
                    <div className="w-16 h-px bg-linear-to-r from-transparent to-current opacity-30" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20" className="size-4 text-current shrink-0">
                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.25" d="m7.964 4.202 1.947-1.946a.833.833 0 0 1 1.178 0l1.947 1.946a.833.833 0 0 1 0 1.179l-1.947 1.946a.833.833 0 0 1-1.178 0L7.964 5.381a.833.833 0 0 1 0-1.179Zm0 10.417 1.947-1.947a.833.833 0 0 1 1.178 0l1.947 1.947a.833.833 0 0 1 0 1.178l-1.947 1.947a.833.833 0 0 1-1.178 0l-1.947-1.947a.833.833 0 0 1 0-1.178ZM2.756 9.41l1.946-1.946a.833.833 0 0 1 1.179 0l1.946 1.947a.833.833 0 0 1 0 1.178l-1.946 1.947a.833.833 0 0 1-1.179 0l-1.946-1.947a.833.833 0 0 1 0-1.178Zm10.416 0 1.947-1.946a.833.833 0 0 1 1.178 0l1.947 1.947a.833.833 0 0 1 0 1.178l-1.947 1.947a.833.833 0 0 1-1.178 0l-1.947-1.947a.833.833 0 0 1 0-1.178Z" />
                    </svg>
                    <div className="text-sm tracking-widest uppercase whitespace-nowrap">About Us</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20" className="size-4 text-current shrink-0">
                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.25" d="m7.964 4.202 1.947-1.946a.833.833 0 0 1 1.178 0l1.947 1.946a.833.833 0 0 1 0 1.179l-1.947 1.946a.833.833 0 0 1-1.178 0L7.964 5.381a.833.833 0 0 1 0-1.179Zm0 10.417 1.947-1.947a.833.833 0 0 1 1.178 0l1.947 1.947a.833.833 0 0 1 0 1.178l-1.947 1.947a.833.833 0 0 1-1.178 0l-1.947-1.947a.833.833 0 0 1 0-1.178ZM2.756 9.41l1.946-1.946a.833.833 0 0 1 1.179 0l1.946 1.947a.833.833 0 0 1 0 1.178l-1.946 1.947a.833.833 0 0 1-1.179 0l-1.946-1.947a.833.833 0 0 1 0-1.178Zm10.416 0 1.947-1.946a.833.833 0 0 1 1.178 0l1.947 1.947a.833.833 0 0 1 0 1.178l-1.947 1.947a.833.833 0 0 1-1.178 0l-1.947-1.947a.833.833 0 0 1 0-1.178Z" />
                    </svg>
                    <div className="w-16 h-px bg-linear-to-l from-transparent to-current opacity-30" />
                </div>
                <div className="text-3xl sm:max-w-full md:text-3xl lg:text-6xl hedvig">
                    Intention & Care
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-[95%] mx-auto sm:max-w-[500px]">
                    Every session is crafted with skilled hands, guided by purpose fueled by a passion for helping you achieve complete relaxation and clarity.
                </p>
            </div>

            <div className="relative w-full h-[600px] bg-[#f7f7f7] rounded-2xl overflow-hidden" data-about-image-wrap>

                <Image
                    src={'/hero-1.jpg'}
                    alt={'spa service'}
                    fill
                    sizes="900px"
                    quality={85}
                    className="w-full h-full object-cover scale-[1.08]"
                    data-about-image
                />

                {/* overlay for readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent" />

                {/* text content */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-white flex flex-col gap-5">

                    {/* Logo */}
                    <img src="/spa_logo.png" alt="" className="sm:w-24 w-10" />

                    {/* subtext first */}
                    <p className="text-sm md:text-base text-white max-w-[600px]">
                        A luxury at-home spa and massage experience designed to bring calm, balance, and full-body renewal directly to your space. We specialize in creating deeply relaxing moments through professional wellness treatments that help release stress.
                    </p>

                    {/* heading */}
                    <h2 className="sm:text-4xl text-2xl md:text-7xl font-medium hedvig tracking-tight bg-linear-to-b from-white via-white/90 to-white/30 text-transparent bg-clip-text">
                        Relax, Restore, Rebalance
                    </h2>

                </div>
            </div>
        </div>
    )
}
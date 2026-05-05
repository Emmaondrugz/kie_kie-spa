"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

export default function Footer() {
    const rootRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from("[data-footer-main]", {
            y: 26,
            autoAlpha: 0,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
                trigger: rootRef.current,
                start: "top 86%",
            },
        });

        gsap.from("[data-footer-bottom]", {
            autoAlpha: 0,
            duration: 0.45,
            delay: 0.12,
            scrollTrigger: {
                trigger: rootRef.current,
                start: "top 86%",
            },
        });
    }, { scope: rootRef });

    const WHATSAPP_NUMBER = "1234567890"; // replace with real number later
    const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;


    return (
        <footer className="bg-[#111] text-white px-6 md:px-10 pt-16 pb-32" ref={rootRef}>
            {/* Top border */}
            <div className="border-t border-white/15 mb-12" />

            {/* Main content */}
            <div className="flex flex-col items-center justify-center text-center gap-10 mb-12" data-footer-main>
                {/* Brand + CTA */}
                <div className="flex flex-col items-center gap-4 max-w-[420px]">
                    <div className="flex flex-col items-center gap-3">
                        <img src="/spa_logo.png" alt="" className="w-10" />

                        <p className="text-lg font-normal">
                            Kie Kie — Massage & Spa
                        </p>

                        <p className="text-base md:text-2xl leading-snug">
                            We offer a 360-degree approach to wellness with a touch of luxury home service.
                        </p>
                    </div>

                    {/* CTA buttons */}
                    <div className="flex gap-3 mt-2 flex-wrap justify-center">
                        <Link
                            href={'/Services'}
                            className="bg-white text-black px-7 py-2.5 text-sm md:text-base font-medium whitespace-nowrap"
                        >
                            Start now
                        </Link>

                        <a
                            href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                            className="border border-white text-white px-7 py-2.5 text-sm md:text-base font-medium whitespace-nowrap"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-white/15 py-5 flex justify-center" data-footer-bottom>
                <p className="text-xs text-white/40">
                    © All Rights Reserved 2024
                </p>
            </div>
        </footer>
    );
}
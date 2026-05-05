"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Exp() {
    const rootRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from("[data-exp-item]", {
            y: 24,
            scale: 0.96,
            autoAlpha: 0,
            stagger: 0.12,
            ease: "power2.out",
            duration: 0.6,
            scrollTrigger: {
                trigger: rootRef.current,
                start: "top 78%",
            },
        });
    }, { scope: rootRef });

    return (
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6" ref={rootRef}>

            {/* Exp 1 */}
            <div className="flex items-center gap-2 sm:gap-3" data-exp-item>
                <div className="lg:text-5xl font-light text-2xl">4+</div>
                <div className="text-xs sm:text-sm">
                    Years of Training <br /> and expertise
                </div>
            </div>

            {/* Exp 2 */}
            <div className="flex items-center gap-2 sm:gap-3" data-exp-item>
                <div className="lg:text-5xl font-light text-2xl">1.2k+</div>
                <div className="text-xs sm:text-sm">
                    Happy Clients <br /> Served
                </div>
            </div>

            {/* Exp 3 */}
            <div className="flex items-center gap-2 sm:gap-3" data-exp-item>
                <div className="lg:text-5xl font-light text-2xl">20+</div>
                <div className="text-xs sm:text-sm">
                    Wellness & Spa <br /> Treatments
                </div>
            </div>

            {/* Exp 4 */}
            <div className="flex items-center gap-2 sm:gap-3" data-exp-item>
                <div className="lg:text-5xl font-light text-2xl">98%</div>
                <div className="text-xs sm:text-sm">
                    Customer <br /> Satisfaction
                </div>
            </div>

        </div>
    )
}
"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

type Package = {
    image: string
    name: string
    desc: string
    benefits: string[]
    price: number
}


type Props = {
    pkg: Package | null
    onClose: () => void
    onBuyNow: (pkg: { name: string; price: number }) => void  // add this
}

export default function PackageDrawer({ pkg, onClose, onBuyNow }: Props) {
    const overlayRef = useRef<HTMLDivElement>(null);
    const drawerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!pkg || !overlayRef.current || !drawerRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
            tl.fromTo(
                overlayRef.current,
                { autoAlpha: 0 },
                { autoAlpha: 1, duration: 0.3 }
            ).fromTo(
                drawerRef.current,
                { autoAlpha: 0, scale: 0.97 },
                { autoAlpha: 1, scale: 1, duration: 0.35 },
                "-=0.2"
            ).from(
                "[data-drawer-content]",
                { y: 14, autoAlpha: 0, stagger: 0.08, duration: 0.4 },
                "-=0.25"
            );
        }, drawerRef);

        return () => ctx.revert();
    }, [pkg]);

    if (!pkg) return null

    return (
        <>
            {/* Overlay */}
            <div
                ref={overlayRef}
                onClick={onClose}
                className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            />

            {/* Modal */}
            <div
                ref={drawerRef}
                className="fixed z-50 bg-white overflow-hidden
                inset-0
                md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2
                md:w-[80%] md:max-w-[900px] md:max-h-[80vh]
                flex flex-col md:flex-row"
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center bg-white border border-gray-200 hover:bg-gray-100 transition-colors rounded-full"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                </button>

                {/* Image — full width on mobile, left half on desktop */}
                <div className="relative w-full h-[260px] shrink-0 md:w-[45%] md:h-auto" data-drawer-content>
                    <Image src={pkg.image} alt={pkg.name} fill className="object-cover" />
                </div>

                {/* Content — right side on desktop */}
                <div className="flex flex-col gap-6 p-8 flex-1 overflow-y-auto">
                    <div className="flex items-start justify-between" data-drawer-content>
                        <h2 className="hedvig text-3xl font-semibold text-black leading-snug">{pkg.name}</h2>
                        <span className="text-2xl hedvig text-black">${pkg.price}</span>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed" data-drawer-content>{pkg.desc}</p>

                    <div className="flex flex-col gap-3" data-drawer-content>
                        <h4 className="text-sm font-semibold text-black uppercase tracking-widest">Benefits</h4>
                        <ul className="flex flex-col gap-2">
                            {pkg.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-auto pt-6 border-t border-gray-100" data-drawer-content>
                        <button
                            onClick={() => onBuyNow({ name: pkg.name, price: pkg.price })}
                            className="block w-full bg-black text-white text-center py-4 text-sm hover:bg-gray-800 transition-colors duration-200"
                        >
                            Buy Now — ${pkg.price}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
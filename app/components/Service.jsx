"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Service() {
    const rootRef = useRef(null);

    const services = [
        {
            icon: "/spa-1.svg",
            name: "Tranquil Bliss Massages",
            desc: "Escape into relaxation as soothing techniques melt tension, leaving your body and mind in harmony.",
            time: "120 minutes",
            price: "From $240",
            extras: [
                { name: "Blow-Job", price: "$200" },
                { name: "Quickie", price: "$300" },
                { name: "Overnight", price: "$1200" },
            ],
        },
        {
            icon: "/spa-2.svg",
            name: "Relaxing Feet Massages",
            desc: "Soothe and refresh yourself with relaxing foot massages to ease tension and improve circulation.",
            time: "40 minutes",
            price: "From $180",
            extras: [
                { name: "Blow-Job", price: "$200" },
                { name: "Quickie", price: "$300" },
                { name: "Overnight", price: "$1200" },
            ],
        },
        {
            icon: "/spa-3.svg",
            name: "Revitalizing Oil Facials",
            desc: "Refresh and rejuvenate your skin with revitalizing rose oil facials for a radiant, natural glow.",
            time: "60 minutes",
            price: "From $185",
            extras: [
                { name: "Blow-Job", price: "$200" },
                { name: "Quickie", price: "$300" },
                { name: "Overnight", price: "$1200" },
            ],
        },
        {
            icon: "/spa-4.svg",
            name: "Harmonize Body & Soul",
            desc: "Restore harmony and balance to your body and soul, fostering deep inner peace and well-being.",
            time: "120 minutes",
            price: "From $260",
            extras: [
                { name: "Blow-Job", price: "$200" },
                { name: "Quickie", price: "$300" },
                { name: "Overnight", price: "$1200" },
            ],
        },
    ];

    const [current, setCurrent] = useState(1);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from("[data-service-head]", {
            y: 22,
            autoAlpha: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
                trigger: rootRef.current,
                start: "top 74%",
            },
        });

        gsap.from("[data-service-desktop-card]", {
            clipPath: "inset(20% 0% 20% 0% round 16px)",
            y: 20,
            autoAlpha: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: rootRef.current,
                start: "top 64%",
            },
        });
    }, { scope: rootRef });

    const prev = () => { if (current > 0) setCurrent(current - 1); };
    const next = () => { if (current < services.length - 1) setCurrent(current + 1); };

    const getPosition = (idx) => {
        const diff = idx - current;
        if (diff < -1) return "far-left";
        if (diff === -1) return "left";
        if (diff === 0) return "center";
        if (diff === 1) return "right";
        return "far-right";
    };

    const getTransform = (pos) => {
        switch (pos) {
            case "far-left": return { transform: "translateX(-260px) translateZ(-300px) rotateY(40deg) scale(0.6)", opacity: 0, zIndex: 1, visibility: "hidden", pointerEvents: "none" };
            case "left": return { transform: "translateX(-150px) translateZ(-200px) rotateY(30deg) scale(0.78)", opacity: 0.45, zIndex: 5, visibility: "visible", pointerEvents: "none" };
            case "center": return { transform: "translateX(0)       translateZ(0)      rotateY(0deg)  scale(1)", opacity: 1, zIndex: 20, visibility: "visible", pointerEvents: "auto" };
            case "right": return { transform: "translateX(150px)  translateZ(-200px) rotateY(-30deg) scale(0.78)", opacity: 0.45, zIndex: 5, visibility: "visible", pointerEvents: "none" };
            default: return { transform: "translateX(260px)  translateZ(-300px) rotateY(-40deg) scale(0.6)", opacity: 0, zIndex: 1, visibility: "hidden", pointerEvents: "none" };
        }
    };

    const CardContent = ({ service }) => (
        <>
            <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 flex items-center justify-center">
                    <img src={service.icon} alt="" className="w-full" />
                </div>
                {service.price && (
                    <div className="text-sm font-medium text-gray-800 bg-gray-100 px-3 py-1 rounded-full">
                        {service.price}
                        <span className="text-xs text-gray-400 font-normal">/hr</span>
                    </div>
                )}
            </div>

            <div className="text-2xl hedvig leading-snug mb-3">{service.name}</div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.desc}</p>

            {/* Extras */}
            {service.extras?.length > 0 && (
                <div className="mb-5">
                    <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Extras</span>
                    <ul className="mt-2 flex flex-col gap-1.5">
                        {service.extras.map((extra, i) => (
                            <li key={i} className="flex items-center justify-between text-xs text-gray-500">
                                <span>{extra.name}</span>
                                <span className="font-medium text-gray-700">{extra.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <Link
                href={{
                    pathname: "/Appointment",
                    query: { service: service.name },
                }}
                className="w-full flex justify-center mt-5 py-2.5 rounded-xl border border-gray-400 text-sm text-gray-700 tracking-wide hover:bg-gray-50 transition-colors"
            >
                Book Service
            </Link>
        </>
    );

    return (
        <div className="sm:py-16 py-10 flex justify-center items-center flex-col gap-10" ref={rootRef}>

            {/* Section header */}
            <div className="flex flex-col gap-4 text-center" data-service-head>
                <div className="flex items-center mx-auto gap-3">
                    <div className="w-16 h-px bg-linear-to-r from-transparent to-current opacity-30" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20" className="size-4 text-current shrink-0">
                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.25" d="m7.964 4.202 1.947-1.946a.833.833 0 0 1 1.178 0l1.947 1.946a.833.833 0 0 1 0 1.179l-1.947 1.946a.833.833 0 0 1-1.178 0L7.964 5.381a.833.833 0 0 1 0-1.179Zm0 10.417 1.947-1.947a.833.833 0 0 1 1.178 0l1.947 1.947a.833.833 0 0 1 0 1.178l-1.947 1.947a.833.833 0 0 1-1.178 0l-1.947-1.947a.833.833 0 0 1 0-1.178ZM2.756 9.41l1.946-1.946a.833.833 0 0 1 1.179 0l1.946 1.947a.833.833 0 0 1 0 1.178l-1.946 1.947a.833.833 0 0 1-1.179 0l-1.946-1.947a.833.833 0 0 1 0-1.178Zm10.416 0 1.947-1.946a.833.833 0 0 1 1.178 0l1.947 1.947a.833.833 0 0 1 0 1.178l-1.947 1.947a.833.833 0 0 1-1.178 0l-1.947-1.947a.833.833 0 0 1 0-1.178Z" />
                    </svg>
                    <div className="text-sm tracking-widest uppercase whitespace-nowrap">Services</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20" className="size-4 text-current shrink-0">
                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.25" d="m7.964 4.202 1.947-1.946a.833.833 0 0 1 1.178 0l1.947 1.946a.833.833 0 0 1 0 1.179l-1.947 1.946a.833.833 0 0 1-1.178 0L7.964 5.381a.833.833 0 0 1 0-1.179Zm0 10.417 1.947-1.947a.833.833 0 0 1 1.178 0l1.947 1.947a.833.833 0 0 1 0 1.178l-1.947 1.947a.833.833 0 0 1-1.178 0l-1.947-1.947a.833.833 0 0 1 0-1.178ZM2.756 9.41l1.946-1.946a.833.833 0 0 1 1.179 0l1.946 1.947a.833.833 0 0 1 0 1.178l-1.946 1.947a.833.833 0 0 1-1.179 0l-1.946-1.947a.833.833 0 0 1 0-1.178Zm10.416 0 1.947-1.946a.833.833 0 0 1 1.178 0l1.947 1.947a.833.833 0 0 1 0 1.178l-1.947 1.947a.833.833 0 0 1-1.178 0l-1.947-1.947a.833.833 0 0 1 0-1.178Z" />
                    </svg>
                    <div className="w-16 h-px bg-linear-to-l from-transparent to-current opacity-30" />
                </div>
                <div className="text-3xl sm:max-w-full md:text-3xl lg:text-6xl hedvig">
                    Curated Treatments
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-[95%] mx-auto sm:max-w-[500px]">
                    Select from our specialized menu designed to restore balance, relax the body,
                    and rejuvenate your mind
                </p>
            </div>

            {/* ── MOBILE: 3D carousel ── */}
            <div className="sm:hidden w-full flex flex-col items-center gap-6">

                {/* 3D stage */}
                <div
                    className="relative w-full flex items-center justify-center"
                    style={{ perspective: "1200px", perspectiveOrigin: "center center", height: "500px" }}
                >
                    {/* Left nav */}
                    <button
                        onClick={prev}
                        disabled={current === 0}
                        className="absolute left-2 z-30 w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 transition-all disabled:opacity-25 disabled:cursor-not-allowed"
                        style={{ top: "50%", transform: "translateY(-50%)" }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    {/* Right nav */}
                    <button
                        onClick={next}
                        disabled={current === services.length - 1}
                        className="absolute right-2 z-30 w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600 transition-all disabled:opacity-25 disabled:cursor-not-allowed"
                        style={{ top: "50%", transform: "translateY(-50%)" }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                    {/* Cards — overflow clipped here only */}
                    <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ overflow: "hidden" }}
                    >
                        <div className="relative w-full flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
                            {services.map((service, idx) => {
                                const pos = getPosition(idx);
                                const style = getTransform(pos);

                                return (
                                    <div
                                        key={idx}
                                        className="absolute transition-all duration-700 ease-out w-[80%]"
                                        style={{
                                            ...style,
                                            willChange: "transform, opacity",
                                        }}
                                    >
                                        <div className="flex flex-col pt-7 px-7 pb-7 bg-[#f7f7f7] border border-gray-200 rounded-2xl">
                                            <CardContent service={service} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Dot indicators */}
                <div className="flex items-center gap-2.5">
                    {services.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`rounded-full transition-all duration-300 ${i === current
                                ? "w-6 h-2 bg-gray-700"
                                : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* ── DESKTOP: grid ── */}
            <div className="hidden sm:grid md:grid-cols-2 xl:grid-cols-4 gap-5 px-4 w-full">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col pt-8 px-8 pb-8 bg-[#f7f7f7] border border-gray-200 rounded-2xl" data-service-desktop-card>
                        <CardContent service={service} />
                    </div>
                ))}
            </div>

            <div className="w-full flex justify-center">
                <Link href={'/Services'} className="border border-black cursor-pointer px-8 py-2.5">View Menu</Link>
            </div>

        </div>
    );
}
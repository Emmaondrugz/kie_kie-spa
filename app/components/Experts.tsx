"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Experts() {

    const experts = [
        {
            image: "/new_kiekie.png",
            name: "Kie Kie",
            role: "Founder & Lead Therapist",
            desc: "7 years shaping the spa's philosophy of healing through intentional, restorative touch.",
        },
        {
            image: "/woker1.avif",
            name: "Arlene McCoy",
            role: "Lead Aesthetician",
            desc: "Over 8 years of expertise in restorative skin care and therapeutic massage.",
        },
        {
            image: "/worker3.avif",
            name: "Guy Hawkins",
            role: "Wellness Director",
            desc: "Guides the full wellness experience, blending modern therapy with ancient healing traditions.",
        },
        {
            image: "/worker-2.avif",
            name: "Brooklyn Simmons",
            role: "Fitness & Mindfulness Coach",
            desc: "Specialises in movement therapy and breathwork to restore balance from the inside out.",
        },
    ];

    const [current, setCurrent] = useState(0);
    const prev = () => setCurrent((i) => (i === 0 ? experts.length - 1 : i - 1));
    const next = () => setCurrent((i) => (i === experts.length - 1 ? 0 : i + 1));

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((i) => (i === experts.length - 1 ? 0 : i + 1));
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    const ExpertCard = ({ expert, index }: { expert: typeof experts[0], index: number }) => (
        <div className={`h-[440px] flex flex-col gap-1 p-1 border border-gray-200 bg-[#f7f7f7] rounded-2xl w-[300px] ${index % 2 !== 0 ? "sm:flex-col-reverse" : ""
            }`}>
            <div className="w-full h-1/2 rounded-[inherit] relative">
                <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    sizes="300px"
                    quality={75}
                    className="object-cover object-top rounded-[inherit]"
                />
            </div>
            <div className="h-1/2 bg-white border border-gray-200 shadow-xs p-4 w-full rounded-[inherit]"
                style={{ boxShadow: "0 -2px 6px rgba(0,0,0,0.04), 0 4px 10px rgba(0,0,0,0.03)" }}
            >
                <div className="flex flex-col gap-2">
                    <div className="text-xl hedvig tracking-wider">{expert.name}</div>
                    <div className="text-sm text-gray-900">{expert.role}</div>
                </div>
                <div className="my-4 h-px w-full"
                    style={{ background: "linear-gradient(to right, transparent, #d1d5db 30%, #d1d5db 70%, transparent)" }}
                />
                <div>
                    <p className="text-sm max-w-[98%] leading-relaxed">{expert.desc}</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="sm:py-16 py-10 flex justify-center items-center flex-col gap-10">
            <div className="flex flex-col gap-10 sm:gap-14">
                {/* Section header */}
                <div className="flex flex-col gap-4 text-center">
                    <div className="flex items-center mx-auto gap-3">
                        <div className="w-16 h-px bg-linear-to-r from-transparent to-current opacity-30" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20" className="size-4 text-current shrink-0">
                            <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.25" d="m7.964 4.202 1.947-1.946a.833.833 0 0 1 1.178 0l1.947 1.946a.833.833 0 0 1 0 1.179l-1.947 1.946a.833.833 0 0 1-1.178 0L7.964 5.381a.833.833 0 0 1 0-1.179Zm0 10.417 1.947-1.947a.833.833 0 0 1 1.178 0l1.947 1.947a.833.833 0 0 1 0 1.178l-1.947 1.947a.833.833 0 0 1-1.178 0l-1.947-1.947a.833.833 0 0 1 0-1.178ZM2.756 9.41l1.946-1.946a.833.833 0 0 1 1.179 0l1.946 1.947a.833.833 0 0 1 0 1.178l-1.946 1.947a.833.833 0 0 1-1.179 0l-1.946-1.947a.833.833 0 0 1 0-1.178Zm10.416 0 1.947-1.946a.833.833 0 0 1 1.178 0l1.947 1.947a.833.833 0 0 1 0 1.178l-1.947 1.947a.833.833 0 0 1-1.178 0l-1.947-1.947a.833.833 0 0 1 0-1.178Z" />
                        </svg>
                        <div className="text-sm tracking-widest uppercase whitespace-nowrap">Experts</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20" className="size-4 text-current shrink-0">
                            <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.25" d="m7.964 4.202 1.947-1.946a.833.833 0 0 1 1.178 0l1.947 1.946a.833.833 0 0 1 0 1.179l-1.947 1.946a.833.833 0 0 1-1.178 0L7.964 5.381a.833.833 0 0 1 0-1.179Zm0 10.417 1.947-1.947a.833.833 0 0 1 1.178 0l1.947 1.947a.833.833 0 0 1 0 1.178l-1.947 1.947a.833.833 0 0 1-1.178 0l-1.947-1.947a.833.833 0 0 1 0-1.178ZM2.756 9.41l1.946-1.946a.833.833 0 0 1 1.179 0l1.946 1.947a.833.833 0 0 1 0 1.178l-1.946 1.947a.833.833 0 0 1-1.179 0l-1.946-1.947a.833.833 0 0 1 0-1.178Zm10.416 0 1.947-1.946a.833.833 0 0 1 1.178 0l1.947 1.947a.833.833 0 0 1 0 1.178l-1.947 1.947a.833.833 0 0 1-1.178 0l-1.947-1.947a.833.833 0 0 1 0-1.178Z" />
                        </svg>
                        <div className="w-16 h-px bg-linear-to-l from-transparent to-current opacity-30" />
                    </div>
                    <div className="text-3xl sm:max-w-full md:text-3xl lg:text-6xl hedvig">
                        Meet The Team
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-[95%] mx-auto sm:max-w-[500px]">
                        Expert hands, refined techniques, and a shared commitment to creating deeply restorative experiences for our customers.
                    </p>
                </div>

                {/* ── MOBILE: simple slide ── */}
                <div className="sm:hidden flex flex-col w-full items-center gap-5">

                    {/* Nav row */}
                    <div className="flex items-center justify-between w-[90%]">
                        <div className="flex items-center gap-1.5">
                            {experts.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`rounded-full transition-all duration-300 ${i === current ? "w-5 h-1.5 bg-gray-700" : "w-1.5 h-1.5 bg-gray-300"
                                        }`}
                                />
                            ))}
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={prev}
                                disabled={current === 0}
                                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button
                                onClick={next}
                                disabled={current === experts.length - 1}
                                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Slider track — clips horizontally but won't cause page overflow */}
                    <div style={{ width: "100vw", overflowX: "clip", paddingLeft: "5vw" }}>
                        <div
                            style={{
                                display: "flex",
                                transition: "transform 0.4s ease",
                                transform: `translateX(calc(-${current} * (300px + 16px)))`,
                                gap: "16px",
                                width: "max-content",
                            }}
                        >
                            {experts.map((expert, i) => (
                                <div key={i} style={{ width: "300px", flexShrink: 0 }}>
                                    <ExpertCard expert={expert} index={i} />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* ── DESKTOP: wrap grid ── */}
                <div className="hidden sm:flex w-full justify-center flex-wrap gap-2">
                    {experts.map((expert, index) => (
                        <ExpertCard key={index} expert={expert} index={index} />
                    ))}
                </div>

            </div>
        </div>
    );
}
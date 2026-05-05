"use client";

import { useRef } from "react";
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Services() {
    const rootRef = useRef<HTMLDivElement>(null);

    const services = [
        {
            image: "/new_bliss.png",
            name: "Tranquil Bliss Massages",
            desc: "Escape into relaxation as soothing techniques melt tension, leaving your body and mind in harmony.",
            includes: [{ time: "120 minutes", price: "From $80", extra: "+ Extended sessions available upon request" }],
        },

        {
            image: "/radiant.avif",
            name: "Revitalizing Oil Facials",
            desc: "Refresh and rejuvenate your skin with revitalizing rose oil facials for a radiant, natural glow.",
            includes: [{ time: "60 minutes", price: "From $45", extra: "+ Premium ritual upgrades available" }],
        },
        {
            image: "/Escape.avif",
            name: "Harmonize Body & Soul",
            desc: "Restore harmony and balance to your body and soul, fostering deep inner peace and well-being.",
            includes: [{ time: "120 minutes", price: "From $80", extra: "+ Full immersion packages available" }],
        },
        {
            image: "/Deep.png",
            name: "Deep Tissue Massage",
            desc: "Target chronic muscle tension with firm, focused pressure that releases deep-seated knots and restores mobility.",
            includes: [{ time: "90 minutes", price: "From $75", extra: "+ Targeted area focus available on request" }],
        },
        {
            image: "/Rejuv.avif",
            name: "Hot Stone Therapy",
            desc: "Warm basalt stones glide across the body to melt tension, improve circulation, and induce profound relaxation.",
            includes: [{ time: "75 minutes", price: "From $85", extra: "+ Full body stone ritual upgrade available" }],
        },
        {
            image: "/salt.avif",
            name: "Couples Massage",
            desc: "Share a moment of deep relaxation side by side, with synchronized treatments tailored to both of you.",
            includes: [{ time: "90 minutes", price: "From $140", extra: "+ Champagne & rose petal add-on available" }],
        },
        {
            image: "/renewal.avif",
            name: "Aromatherapy Massage",
            desc: "A sensory journey blending essential oils with gentle massage techniques to calm the mind and nourish the skin.",
            includes: [{ time: "60 minutes", price: "From $60", extra: "+ Custom oil blend selection available" }],
        },
        {
            image: "/foot.png",
            name: "Relaxing Feet Massages",
            desc: "Soothe and refresh yourself with relaxing foot massages to ease tension and improve circulation.",
            includes: [{ time: "40 minutes", price: "From $45", extra: "+ Add-on treatments available" }],
        },
    ];

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from("[data-services-hero]", {
            clipPath: "ellipse(40% 45% at 50% 0%)",
            autoAlpha: 0,
            duration: 0.9,
            ease: "power2.out",
        });

        gsap.from("[data-services-hero-copy]", {
            y: 18,
            autoAlpha: 0,
            duration: 0.6,
            delay: 0.15,
            ease: "power3.out",
        });

        gsap.from("[data-services-card]", {
            y: 24,
            autoAlpha: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "[data-services-grid]",
                start: "top 78%",
            },
        });
    }, { scope: rootRef });

    return (
        <div className="w-full flex justify-center flex-col items-center" ref={rootRef}>
            <div className="relative max-w-[1500px] w-full">
                {/* Header sits outside the clip */}
                <div className="absolute top-0 left-0 right-0 z-50 sm:px-10 px-5">
                    <Header />
                </div>

                {/* Clipped hero */}
                <div
                    className="relative flex py-2 h-[500px] flex-col justify-center sm:px-10 px-5 w-full mx-auto overflow-hidden"
                    style={{ clipPath: "ellipse(70% 70% at 50% 0%)" }}
                    data-services-hero
                >
                    <Image
                        src="/bliss.avif"
                        alt="background-image"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/60 z-10" />

                    {/* Hero text only */}
                    <div className="relative z-20 flex mx-auto max-w-[500px] flex-col gap-3 text-white -mt-32 sm:-mt-24 text-center" data-services-hero-copy>
                        <div className="md:text-6xl text-4xl hedvig">Services We Offer</div>
                        <div className="md:text-base text-sm">Experience personalized care with our expert therapists, offering treatments designed to relax at the comfort of you home.</div>
                    </div>
                </div>
            </div>


            {/* Services grid */}
            <div className="max-w-[1500px] w-full px-5 sm:px-10 -mt-20 sm:-mt-10" data-services-grid>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col overflow-hidden transition-shadow duration-300" data-services-card>
                            {/* Image */}
                            <div className="relative w-full h-52 bg-gray-100">
                                {service.image ? (
                                    <Image src={service.image} alt={service.name} fill className="object-cover" />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gray-50 text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="3" width="18" height="18" rx="2" />
                                            <circle cx="8.5" cy="8.5" r="1.5" />
                                            <path d="M21 15l-5-5L5 21" />
                                        </svg>
                                        <span className="text-xs">No image yet</span>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-3 py-5 flex-1">
                                <h3 className="font-semibold text-gray-900 text-lg hedvig leading-snug">{service.name}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">{service.desc}</p>

                                <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-1 space-y-5">
                                    {service.includes.map((item, i) => (
                                        <div key={i} className="flex flex-col gap-1">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-gray-500 flex items-center gap-1.5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 -960 960 960" fill="currentColor">
                                                        <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Zm28 212-20-22v-190q0-17-11.5-28.5T448-520q-17 0-28.5 11.5T408-480v200q0 9 3 17t9 14l92 92q11 11 27.5 11t28.5-11q11-11 11-28t-11-28l-61-61Z" />
                                                    </svg>
                                                    {item.time}
                                                </span>
                                            </div>
                                            <span className="text-xs text-gray-400">{item.extra}</span>
                                            <Link href="/Appointment" className="mt-2 w-full bg-black text-white text-sm text-center py-3 hover:bg-gray-800 transition-colors duration-200">
                                                Book Session — {item.price}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full mt-32 sm:mt-52">
                <Footer />
            </div>
        </div>
    )
}
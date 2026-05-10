'use client'

import { useRef, useState } from 'react'
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer";
import PackageDrawer from "../components/ui/PackageDrawer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PaymentForm from '../components/ui/PaymentForm';

export type PackagePaymentData = {
    name: string;
    price: number;
};

export default function Packages() {
    const rootRef = useRef<HTMLDivElement>(null);
    const [selectedPackage, setSelectedPackage] = useState<typeof packages[0] | null>(null);
    const [paymentPackage, setPaymentPackage] = useState<PackagePaymentData | null>(null);

    const openPayment = (pkg: PackagePaymentData) => {
        const scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        setSelectedPackage(null); // close drawer
        setPaymentPackage(pkg);   // open payment
    };

    const closePayment = () => {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        setPaymentPackage(null);
    };

    const packages = [
        {
            image: "/glow_serum.png",
            name: "Glow Serum",
            desc: 'Glow Serum deeply hydrates skin while enhancing natural radiance. Its lightweight formula absorbs quickly, helping your complexion appear brighter, smoother, and refreshed throughout the day.',
            benefits: [
                'Enhances natural skin glow',
                'Improves hydration levels',
                'Smooths skin texture',
                'Supports healthy-looking complexion'
            ],
            price: 100
        },
        {
            image: "/skin_repair.png",
            name: "Skin Repair Cream",
            desc: 'Skin Repair Cream works to restore your skin barrier with every application. Enriched with nourishing actives, it soothes irritation, reduces redness, and helps damaged skin recover its natural softness.',
            benefits: [
                'Restores damaged skin barrier',
                'Reduces redness and irritation',
                'Deeply nourishes dry patches',
                'Promotes faster skin recovery'
            ],
            price: 120
        },
        {
            image: "/face_oil.png",
            name: "Botanical Face Oil",
            desc: 'Botanical Face Oil blends pure plant extracts to deliver intense nourishment and a healthy, dewy finish. A few drops are all it takes to leave skin feeling supple, balanced, and visibly revitalized.',
            benefits: [
                'Delivers deep botanical nourishment',
                'Balances oil production naturally',
                'Leaves a radiant dewy finish',
                'Absorbs without greasy residue'
            ],
            price: 95
        },
        {
            image: "/night_cream.png",
            name: "Night Renewal Cream",
            desc: 'Night Renewal Cream harnesses the power of your skin\'s overnight repair cycle. Its rich, restorative formula works while you sleep to firm, smooth, and replenish — so you wake up to visibly refreshed skin.',
            benefits: [
                'Supports overnight skin repair',
                'Firms and lifts skin texture',
                'Replenishes lost moisture',
                'Reduces appearance of fine lines'
            ],
            price: 135
        },
        {
            image: "/skin_gel.png",
            name: "Aloe Skin Gel",
            desc: 'Aloe Skin Gel provides instant soothing relief for sensitive, sun-exposed, or irritated skin. Its cooling, lightweight texture calms inflammation and locks in moisture without clogging pores.',
            benefits: [
                'Instantly cools and soothes skin',
                'Calms inflammation and redness',
                'Lightweight and non-comedogenic',
                'Suitable for sensitive skin types'
            ],
            price: 60
        },
        {
            image: "/vitamin.png",
            name: "Vitamin C Serum",
            desc: 'Vitamin C Serum delivers a concentrated dose of brightening antioxidants to even out skin tone and fade dark spots. Regular use helps protect against environmental stress while giving skin a luminous, youthful clarity.',
            benefits: [
                'Fades dark spots and hyperpigmentation',
                'Brightens and evens skin tone',
                'Protects against free radical damage',
                'Boosts collagen production over time'
            ],
            price: 110
        },
    ];
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from("[data-packages-hero]", {
            clipPath: "ellipse(40% 45% at 50% 0%)",
            autoAlpha: 0,
            duration: 0.95,
            ease: "power2.out",
        });

        gsap.from("[data-packages-hero-copy]", {
            y: 18,
            autoAlpha: 0,
            duration: 0.6,
            delay: 0.15,
            ease: "power3.out",
        });

        gsap.from("[data-package-card]", {
            y: 26,
            autoAlpha: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "[data-packages-grid]",
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
                    data-packages-hero
                >
                    <Image
                        src="/aaa.avif"
                        alt="background-image"
                        fill
                        sizes='1000px'
                        className="object-cover"
                        priority
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/60 z-10" />

                    {/* Hero text only */}
                    <div className="relative z-20 flex mx-auto max-w-[500px] flex-col gap-3 text-white -mt-32 sm:-mt-24 text-center" data-packages-hero-copy>
                        <div className="md:text-6xl text-4xl hedvig">Packages</div>
                        <div className="md:text-base text-sm">Nourish your skin and soothe your body with our carefully curated wellness products.</div>
                    </div>
                </div>
            </div>


            {/* Services grid */}
            <div className="max-w-[1500px] w-full px-5 -mt-20 sm:-mt-10" data-packages-grid>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center">
                    {packages.map((service, index) => (
                        <div key={index} className="flex flex-row bg-white w-full h-[300px] sm:h-[500px]" data-package-card>
                            {/* Image */}
                            <div className="relative w-[45%] shrink-0">
                                {service.image ? (
                                    <Image src={service.image} sizes='500px' alt={service.name} fill className="object-cover" />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gray-50 text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="3" width="18" height="18" rx="2" />
                                            <circle cx="8.5" cy="8.5" r="1.5" />
                                            <path d="M21 15l-5-5L5 21" />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            {/* Details */}
                            <div className="flex flex-col items-center bg-[#efefef] justify-center text-center gap-3 p-6 flex-1">
                                <h3 className="font-semibold text-black text-xl sm:text-4xl hedvig leading-snug">{service.name}</h3>
                                <p className="text-sm text-black hedvig"><span className="sm:text-2xl">${service.price}</span> / person</p>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        e.preventDefault()
                                        setSelectedPackage(service)
                                    }}
                                    className="mt-1 px-6 py-2 bg-white text-sm text-black transition-colors duration-200"
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full mt-32 sm:mt-52">
                <Footer />
            </div>
            {paymentPackage && (
                <PaymentForm
                    mode="package"
                    packageData={paymentPackage}
                    onClose={closePayment}
                />
            )}

            <PackageDrawer
                pkg={selectedPackage}
                onClose={() => setSelectedPackage(null)}
                onBuyNow={openPayment}
            />
        </div>
    )
}
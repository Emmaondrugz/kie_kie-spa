"use client";

import { Suspense, useRef, useState } from "react";
import Image from "next/image";
import SessionForm from "../components/Form";
import Footer from "../components/Footer";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import PaymentForm from "../components/ui/PaymentForm";

export type SessionData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    service: string;
    extra: string;
    duration: number;
    notes: string;
    price: number;
};

export default function Appointment() {
    const rootRef = useRef<HTMLDivElement>(null);
    const [sessionData, setSessionData] = useState<SessionData | null>(null);

    // Add this helper at the top of the component
    const openPayment = (data: SessionData) => {
        const scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        setSessionData(data);
    };

    const closePayment = () => {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        setSessionData(null);
    };

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from("[data-appointment-panel]", { x: -24, autoAlpha: 0, duration: 0.7 })
            .from("[data-appointment-logo]", { scale: 0.92, autoAlpha: 0, duration: 0.4 }, "-=0.35")
            .from("[data-appointment-form]", { y: 16, autoAlpha: 0, duration: 0.55 }, "-=0.2")
            .from("[data-appointment-image]", { scale: 1.08, autoAlpha: 0, duration: 0.9, ease: "power2.out" }, "-=0.45");
    }, { scope: rootRef });

    return (
        <>
            <div
                className="w-full mx-auto flex items-stretch min-h-screen justify-center lg:justify-between"
                ref={rootRef}
            >
                {/* Payment modal — only mounts when sessionData exists */}
                {sessionData && (
                    <PaymentForm
                        sessionData={sessionData} onClose={closePayment}
                    />
                )}

                {/* Left panel */}
                <div
                    className="lg:w-[40%] w-full bg-white flex flex-col justify-center gap-5 px-5 py-8 sm:py-16 md:pl-20 md:pr-10"
                    data-appointment-panel
                >
                    <div className="flex items-center w-11 h-11" data-appointment-logo>
                        <img src="form_logo.png" alt="" className="w-11 bg-[#f7f7f7]" />
                    </div>

                    <div className="max-w-[400px]" data-appointment-form>
                        <Suspense fallback={null}>
                            <SessionForm onSubmit={openPayment} />
                        </Suspense>
                    </div>
                </div>

                {/* Right image */}
                <div className="lg:flex hidden lg:w-[60%] self-stretch relative">
                    <Image
                        src="/form_img.png"
                        alt="Appointment background"
                        fill
                        sizes="60vw"
                        quality={100}
                        className="object-cover"
                        data-appointment-image
                        priority
                    />
                </div>
            </div>

            <Footer />
        </>
    );
}
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#111] text-white mt-10 px-6 md:px-10 pt-16 pb-32">
            {/* Top border */}
            <div className="border-t border-white/15 mb-12" />

            {/* Main content */}
            <div className="flex flex-col items-center justify-center text-center gap-10 mb-12">
                {/* Brand + CTA */}
                <div className="flex flex-col items-center gap-4 max-w-[420px]">
                    <div className="flex flex-col items-center gap-3">
                        <img src="/spa_logo.png" alt="" className="w-12 h-12" />

                        <p className="text-lg font-normal">
                            Kie Kie — Massage & Spa
                        </p>

                        <p className="text-base md:text-2xl leading-snug">
                            We offer a 360-degree approach to wellness with a touch of luxury home service.
                        </p>
                    </div>

                    {/* CTA buttons */}
                    <div className="flex gap-3 mt-2 flex-wrap justify-center">
                        <a
                            href="#"
                            className="bg-white text-black px-7 py-2.5 text-sm md:text-base font-medium whitespace-nowrap"
                        >
                            Start now
                        </a>

                        <a
                            href="#"
                            className="border border-white text-white px-7 py-2.5 text-sm md:text-base font-medium whitespace-nowrap"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-white/15 py-5 flex justify-center">
                <p className="text-xs text-white/40">
                    © All Rights Reserved 2024
                </p>
            </div>
        </footer>
    );
}
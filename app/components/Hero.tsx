import Image from "next/image";
import Header from "@/app/components/Header";
import Rating from "@/app/components/ui/Rating"

export default function Hero() {
    return (
        <div className="w-full relative text-white">
            {/* Header - ensure it's above the gradient */}
            <div className="relative z-10">
                <Header />
            </div>

            {/* Hero container */}
            <div className="flex gap-2 sm:gap-5 flex-col justify-center pt-14 items-start">
                <Rating />
                <div className="sm:max-w-[600px] max-w-[400px] flex flex-col gap-3">
                    <div className="md:text-7xl sm:text-5xl text-4xl leading-[110%] hedvig">Spa-Quality Massage at Your door step.</div>
                    <div className="font-light sm:text-base text-sm max-w-[85%] sm:max-w-[500px]">The newest way to unwind. On-demand massage therapy tailored to your schedule and space.</div>


                    <div className="flex sm:gap-5 flex-col sm:flex-row items-start sm:items-center w-full">

                        {/* Our Services */}
                        <div className="w-[235px] sm:w-[220px] h-[52px] mt-5">
                            <button className="w-full h-full border-2 border-white text-white rounded-full flex items-center justify-center text-sm sm:text-base">
                                Our Services
                            </button>
                        </div>

                        {/* Book Appointment */}
                        <div className="w-[235px] sm:w-[235px] h-[52px] mt-5">
                            <button className="w-full h-full bg-white text-black rounded-full flex items-center justify-between gap-3 pl-10 sm:pl-6 pr-1 text-sm sm:text-base">
                                <span>Book Appointment</span>
                                <span className="flex items-center justify-center p-2 rounded-full bg-[#111]">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="23px" fill="#fff">
                                        <path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                    </div>

                </div>

                <div className="w-full h-fit flex lg:mt-0 mt-5 lg:justify-end sm:pl-0 pl-5">
                    {/* Write-ups container */}
                    <div className="flex flex-row flex-wrap items-start gap-8">

                        {/* Write-up 1 */}
                        <div className="relative">
                            {/* Vertical border behind */}
                            <div className="absolute -left-4 top-0 bottom-0 w-px bg-linear-to-b from-amber-400/80 via-amber-500 to-transparent" />

                            <div className="text-left">
                                <p className="text-white/90 text-xs sm:text-base font-medium">
                                    Personalized Relaxation<br /> Treatment
                                </p>
                            </div>
                        </div>

                        {/* Write-up 2 */}
                        <div className="relative">
                            {/* Vertical border behind */}
                            <div className="absolute -left-4 top-0 bottom-0 w-px bg-linear-to-b from-amber-400/80 via-amber-500 to-transparent" />

                            <div className="text-left">
                                <p className="text-white/90 text-xs sm:text-base font-medium">
                                    Trusted and Trained<br /> Massage Experts
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


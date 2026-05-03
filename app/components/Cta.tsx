import Link from "next/link"

export default function Cta() {
    return (
        <div className="sm:py-16 py-10 flex justify-center items-center flex-col gap-10">

            {/* Section header */}
            <div className="flex flex-col items-center gap-4 text-center">
                <div className="text-3xl sm:max-w-full md:text-3xl lg:text-7xl hedvig">
                    Experience True Relaxation<br /> Delivered to You
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-[95%] mx-auto sm:max-w-[500px]">
                    Book a professional in-home massage and unwind with personalized care designed to restore your body and mind.
                </p>
                <div className="w-full flex justify-center">
                    <Link href={''} className="border border-black cursor-pointer px-8 py-2.5">View Menu</Link>
                </div>

                {/* review */}
                <div className="flex items-center gap-6 mt-5">
                    <div className="flex items-center gap-2">
                        <img src="/google.svg" alt="" className="w-6 h-6 pb-1" />
                        <div>4.6 <span className="text-gray-500">Google</span></div>
                    </div>

                    {/* Vertical Dash */}
                    <div className="h-6 w-px bg-gray-200" />

                    <div className="flex items-center gap-2">
                        <img src="/trustpilot.svg" alt="" className="w-6 h-6 pb-1" />
                        <div>4.9 <span className="text-gray-500">Trustpilot</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
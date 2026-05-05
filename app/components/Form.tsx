"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const services = [
    {
        value: "massage",
        name: "Tranquil Bliss Massages",
        basePrice: 240,
        baseDuration: 120,
    },
    {
        value: "facial",
        name: "Relaxing Feet Massages",
        basePrice: 180,
        baseDuration: 40,
    },
    {
        value: "spa",
        name: "Revitalizing Oil Facials",
        basePrice: 185,
        baseDuration: 60,
    },
    {
        value: "harmony",
        name: "Harmonize Body & Soul",
        basePrice: 260,
        baseDuration: 120,
    },
    {
        value: "deep-tissue",
        name: "Deep Tissue Massage",
        basePrice: 210,
        baseDuration: 90,
    },
    {
        value: "hot-stone",
        name: "Hot Stone Therapy",
        basePrice: 220,
        baseDuration: 75,
    },
    {
        value: "couples",
        name: "Couples Massage",
        basePrice: 300,
        baseDuration: 90,
    },
    {
        value: "aromatherapy",
        name: "Aromatherapy Massage",
        basePrice: 190,
        baseDuration: 60,
    },
];


const extras = [
    {
        value: 'Blow-Job',
        price: '$200'
    },
    {
        value: 'Quickie',
        price: '$300'
    },
    {
        value: 'Overnight',
        price: '$1200'
    },
]

function calcPrice(basePrice: number, baseDuration: number, duration: number) {
    return Math.round((basePrice / baseDuration) * duration);
}

export default function SessionForm() {
    const searchParams = useSearchParams();
    const [duration, setDuration] = useState(60);
    const [selectedService, setSelectedService] = useState("");
    const [selectedExtra, setSelectedExtra] = useState("");

    useEffect(() => {
        const serviceParam = searchParams.get("service");
        if (!serviceParam) return;

        const normalized = decodeURIComponent(serviceParam).trim().toLowerCase();
        const matched = services.find((s) =>
            s.value.toLowerCase() === normalized || s.name.toLowerCase() === normalized
        );

        if (matched) {
            setSelectedService(matched.value);
        }
    }, [searchParams]);

    const service = services.find(s => s.value === selectedService);
    const extraPrice = selectedExtra
        ? parseInt(extras.find(e => e.value === selectedExtra)?.price.replace("$", "") || "0")
        : 0;

    const price = service ? calcPrice(service.basePrice, service.baseDuration, duration) + extraPrice : null;

    return (
        <div className="w-full flex flex-col gap-8">
            {/* Form Header */}
            <div className="flex flex-col gap-3">
                <div className="md:text-4xl text-3xl hedvig">Book Your Session.</div>
                <div className="text-sm">Unwind with our exquisite range of spa services designed to pamper you from head to toe.</div>
            </div>

            <form action="" className="flex flex-col gap-2">
                {/* first name - last name */}
                <div className="flex gap-2 items-center">
                    <input required type="text" className="border h-[50px] w-1/2 px-2 py-1 border-gray-200 focus:outline-0 font-light poppins placeholder:text-sm" placeholder="First Name" />
                    <input required type="text" className="border h-[50px] w-1/2 px-2 py-1 border-gray-200 focus:outline-0 font-light poppins placeholder:text-sm" placeholder="Last Name" />
                </div>

                {/* email - number */}
                <div className="flex gap-2 items-center">
                    <input required type="email" className="border h-[50px] w-1/2 px-2 py-1 border-gray-200 focus:outline-0 font-light poppins placeholder:text-sm" placeholder="Email" />
                    <input required type="number" className="border h-[50px] w-1/2 px-2 py-1 border-gray-200 focus:outline-0 font-light poppins placeholder:text-sm" placeholder="Phone Number" />
                </div>

                {/* Address */}
                <div className="flex gap-2 items-center">
                    <input required type="text" className="border h-[50px] w-full px-2 py-1 border-gray-200 focus:outline-0 font-light poppins placeholder:text-sm" placeholder="Current Address" />
                </div>

                {/* Services */}
                <div className="relative w-full">
                    <select
                        required
                        value={selectedService}
                        onChange={e => setSelectedService(e.target.value)}
                        className="border h-[50px] pl-2 pr-10 py-1 border-gray-200 focus:outline-0 font-light poppins text-sm bg-white text-gray-500 w-full appearance-none"
                    >
                        <option value="" disabled>Select a service</option>
                        {services.map(s => (
                            <option key={s.value} value={s.value}>{s.name}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor">
                            <path d="M480-360 280-560h400L480-360Z" />
                        </svg>
                    </div>
                </div>

                {/* Extras */}
                <div className="relative w-full">
                    <select
                        value={selectedExtra}
                        onChange={e => setSelectedExtra(e.target.value)}
                        className="border h-[50px] pl-2 pr-10 py-1 border-gray-200 focus:outline-0 font-light poppins text-sm bg-white text-gray-500 w-full appearance-none"
                    >
                        <option value="">No extra selected</option>
                        {extras.map(e => (
                            <option key={e.value} value={e.value}>{e.value} — {e.price}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor">
                            <path d="M480-360 280-560h400L480-360Z" />
                        </svg>
                    </div>
                </div>

                {/* Duration */}
                <DurationInput duration={duration} setDuration={setDuration} />

                {/* Message */}
                <div className="flex gap-2 items-center">
                    <textarea
                        placeholder="Additional notes or requests..."
                        className="border w-full px-2 py-3 border-gray-200 focus:outline-0 font-light poppins placeholder:text-sm resize-none h-[100px]"
                    />
                </div>

                <button className="w-full bg-black py-2.5 text-white mt-5 mb-10 cursor-pointer flex items-center justify-center gap-2">
                    <span>Book Session</span>
                    {price !== null && (
                        <>
                            <span className="text-gray-400">—</span>
                            <span>${price}</span>
                        </>
                    )}
                </button>
            </form>
        </div>
    )
}

function DurationInput({ duration, setDuration }: { duration: number; setDuration: (fn: (d: number) => number) => void }) {
    const step = 30;
    const min = 30;
    const max = 240;

    return (
        <div className="flex w-full border border-gray-200 h-[50px]">
            <button
                type="button"
                onClick={() => setDuration(d => Math.max(min, d - step))}
                disabled={duration <= min}
                className="w-[50px] shrink-0 flex items-center justify-center border-r border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor">
                    <path d="M200-440q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h560q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H200Z" />
                </svg>
            </button>

            <div className="flex-1 flex items-center justify-center gap-1 font-light poppins text-sm text-gray-600">
                <span>{duration}</span>
                <span className="text-gray-400">min</span>
            </div>

            <button
                type="button"
                onClick={() => setDuration(d => Math.min(max, d + step))}
                disabled={duration >= max}
                className="w-[50px] shrink-0 flex items-center justify-center border-l border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor">
                    <path d="M440-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h240v-240q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v240h240q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H520v240q0 17-11.5 28.5T480-160q-17 0-28.5-11.5T440-200v-240Z" />
                </svg>
            </button>
        </div>
    )
}
import Header from "../components/Header"
import Image from "next/image"
import SessionForm from "../components/Form"
import Footer from "../components/Footer"
import Link from "next/link"

export default function Appointment() {
    return (
        <>
            <div className="w-full mx-auto flex items-start justify-center lg:justify-between sm:gap-20 gap-10">
                {/* Hero content constrained */}
                <div className="lg:w-[30%] md:h-fit h-screen w-fit bg-white pt-10 md:pt-10 flex-col gap-5 md:pl-20 flex md:justify-center p-5">
                    {/* Heading */}
                    {/* Top bar — back button + divider + logo */}
                    <div className="flex items-center gap-3">
                        <img src="form_logo.png" alt="" className="w-10 bg-black" />
                    </div>
                    <div className="max-w-[400px] h-auto">
                        <SessionForm />
                    </div>
                </div>


                <div className="lg:w-[60%] lg:block hidden h-screen">
                    <Image
                        src="/form_img.png"
                        alt="background-image"
                        width={500}
                        height={500}
                        quality={100}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}
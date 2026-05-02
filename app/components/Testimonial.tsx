export default function Testimonial() {
    return (
        <div className="sm:py-20 py-10 flex justify-center items-center bg-[#f7f7f7] rounded-2xl border-gray-300 border flex-col gap-10">
            <div className="flex flex-col gap-10 sm:gap-14">
                {/* Section header */}
                <div className="flex flex-col gap-4 text-center">
                    <div className="flex items-center mx-auto gap-3">
                        <div className="w-16 h-px bg-linear-to-r from-transparent to-current opacity-30" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20" className="size-4 text-current shrink-0">
                            <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.25" d="m7.964 4.202 1.947-1.946a.833.833 0 0 1 1.178 0l1.947 1.946a.833.833 0 0 1 0 1.179l-1.947 1.946a.833.833 0 0 1-1.178 0L7.964 5.381a.833.833 0 0 1 0-1.179Zm0 10.417 1.947-1.947a.833.833 0 0 1 1.178 0l1.947 1.947a.833.833 0 0 1 0 1.178l-1.947 1.947a.833.833 0 0 1-1.178 0l-1.947-1.947a.833.833 0 0 1 0-1.178ZM2.756 9.41l1.946-1.946a.833.833 0 0 1 1.179 0l1.946 1.947a.833.833 0 0 1 0 1.178l-1.946 1.947a.833.833 0 0 1-1.179 0l-1.946-1.947a.833.833 0 0 1 0-1.178Zm10.416 0 1.947-1.946a.833.833 0 0 1 1.178 0l1.947 1.947a.833.833 0 0 1 0 1.178l-1.947 1.947a.833.833 0 0 1-1.178 0l-1.947-1.947a.833.833 0 0 1 0-1.178Z" />
                        </svg>
                        <div className="text-sm tracking-widest uppercase whitespace-nowrap">Testimonials</div>
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


            </div>
        </div>
    )
}
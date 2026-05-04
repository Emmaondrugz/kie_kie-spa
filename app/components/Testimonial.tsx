import Image from "next/image";
import Link from "next/link";

const avatarColors = [
    { bg: "#FEF3C7", text: "#92400E" },
    { bg: "#DBEAFE", text: "#1E40AF" },
    { bg: "#D1FAE5", text: "#065F46" },
    { bg: "#FCE7F3", text: "#9D174D" },
    { bg: "#EDE9FE", text: "#5B21B6" },
    { bg: "#FEE2E2", text: "#991B1B" },
    { bg: "#ECFDF5", text: "#047857" },
    { bg: "#FFF7ED", text: "#C2410C" },
];

const reviews = [
    { id: 1, name: "Daniel K.", image: "/commentor1.png", source: "Austin, Texas", comment: "I booked a home massage and was impressed by the professionalism. Very relaxing experience, worth every minute." },
    { id: 2, name: "James K.", image: '/commentor2.jpg', source: "Miami, Florida", comment: "Didn’t expect such quality at home. The therapist was skilled, punctual, and made the session incredibly soothing." },
    { id: 3, name: "Linda T.", image: null, source: "Seattle, Washington", comment: "I felt completely relaxed after the session. Everything was handled professionally, and the atmosphere was calming throughout." },
    { id: 4, name: "Marcus D.", image: null, source: "Denver, Colorado", comment: "Great service from start to finish. The massage helped ease my stress and tension more than expected." },
    { id: 5, name: "Priya N.", image: "/commentor4.jpg", source: "San Diego, California", comment: "What stood out most was the communication and professionalism. The massage itself was deeply relaxing and refreshing." },
    { id: 6, name: "Daniel O.", image: "/commentor6.png", source: "Chicago, Illinois", comment: "I didn’t realize how much I needed this. The session was calming, and the therapist was highly professional." },
    { id: 7, name: "Sarah M.", image: null, source: "Phoenix, Arizona", comment: "Very responsive and professional team. The massage was relaxing, and the entire process felt smooth and well-organized." },
    { id: 8, name: "Michael A.", image: "/commentor3.jpg", source: "Dallas, Texas", comment: "After a stressful week, this service was exactly what I needed. Professional, relaxing, and very convenient at home." },
    { id: 9, name: "Michael T.", image: null, source: "Boston, Massachusetts", comment: "Professional and discreet service. I felt comfortable throughout, and the massage helped me completely unwind." },
    { id: 10, name: "Ashley B.", image: null, source: "Atlanta, Georgia", comment: "They truly deliver quality service. The therapist was patient, skilled, and made the entire experience enjoyable and relaxing." },
    { id: 11, name: "David O.", image: undefined, source: "Portland, Oregon", comment: "I was skeptical at first, but the service exceeded expectations. Very professional, and the results spoke for themselves." },
    { id: 12, name: "James L.", image: null, source: "Las Vegas, Nevada", comment: "Fast booking and excellent service. The massage was relaxing, and everything was handled professionally from start to finish." },
    { id: 13, name: "Samantha S.", image: undefined, source: "Orlando, Florida", comment: "Communication was excellent, and the therapist was amazing. The session made a stressful day much easier to handle." },
    { id: 14, name: "Ethan N.", image: undefined, source: "Houston, Texas", comment: "Booked a session at home and it was perfect. The massage was relaxing, and everything felt well-organized." },
    { id: 15, name: "Chris W.", image: undefined, source: "San Jose, California", comment: "Straightforward booking and honest service. The massage was great, and the therapist knew exactly what they were doing." },
    { id: 16, name: "Hannah H.", image: "/stack3.jpg", source: "Minneapolis, Minnesota", comment: "Very smooth experience overall. The therapist was friendly, professional, and made the session incredibly relaxing." },
    { id: 17, name: "Brian C.", image: undefined, source: "Detroit, Michigan", comment: "They clearly know their craft. The massage relieved tension I’d been dealing with for days." },
    { id: 18, name: "Anthony U.", image: "/stack2.jpg", source: "Charlotte, North Carolina", comment: "I was unsure at first, but the experience was excellent. Professional service and a deeply relaxing massage session." },
    { id: 19, name: "Sophia R.", image: '/commentor7.png', source: "Nashville, Tennessee", comment: "Very helpful and professional team. The massage was relaxing, and the whole process felt simple and stress-free." },
    { id: 20, name: "Kevin P.", image: "/commentor8.png", source: "Tampa, Florida", comment: "They handled everything with care. The massage was soothing, and I appreciated the attention to detail." },
    { id: 21, name: "Grace E.", image: undefined, source: "Columbus, Ohio", comment: "Clear communication and great service. The massage was relaxing, and the results were exactly what I needed." },
    { id: 22, name: "Victor D.", image: "/commentor9.png", source: "Sacramento, California", comment: "Highly professional team. The massage session was well-executed, and I felt completely relaxed afterward." },
    { id: 23, name: "Linda J.", image: undefined, source: "Kansas City, Missouri", comment: "They made a stressful day much better. The massage was calming, and the support was excellent throughout." },
    { id: 24, name: "Tyler F.", image: undefined, source: "Salt Lake City, Utah", comment: "Quick response and excellent service. The massage was relaxing, and I’m very satisfied with the experience." },
    { id: 25, name: "Amanda K.", image: '/commentor10.png', source: "Raleigh, North Carolina", comment: "Very reliable and professional. The massage was soothing, and the entire experience felt smooth and well-managed." },
    { id: 26, name: "Victor D.", image: "/commentor9.png", source: "Sacramento, California", comment: "Highly professional team. The massage session was well-executed, and I felt completely relaxed afterward." },
    { id: 27, name: "Linda J.", image: undefined, source: "Kansas City, Missouri", comment: "They made a stressful day much better. The massage was calming, and the support was excellent throughout." },
    { id: 28, name: "Tyler F.", image: undefined, source: "Salt Lake City, Utah", comment: "Quick response and excellent service. The massage was relaxing, and I’m very satisfied with the experience." },
    { id: 29, name: "Amanda K.", image: '/commentor10.png', source: "Raleigh, North Carolina", comment: "Very reliable and professional. The massage was soothing, and the entire experience felt smooth and well-managed." },
    { id: 30, name: "Samantha S.", image: undefined, source: "Orlando, Florida", comment: "Communication was excellent, and the therapist was amazing. The session made a stressful day much easier to handle." },
    { id: 31, name: "Ethan N.", image: undefined, source: "Houston, Texas", comment: "Booked a session at home and it was perfect. The massage was relaxing, and everything felt well-organized." },
    { id: 32, name: "Chris W.", image: undefined, source: "San Jose, California", comment: "Straightforward booking and honest service. The massage was great, and the therapist knew exactly what they were doing." },
    { id: 33, name: "Hannah H.", image: "/stack3.jpg", source: "Minneapolis, Minnesota", comment: "Very smooth experience overall. The therapist was friendly, professional, and made the session incredibly relaxing." },
];

function ReviewCard({ review, colorIdx }: { review: (typeof reviews)[0]; colorIdx: number }) {
    const col = avatarColors[colorIdx % avatarColors.length];
    const letter = review.name.trim()[0].toUpperCase();
    const hasImage = review.image != null && review.image !== undefined;

    return (
        <div className="w-[320px] shrink-0 bg-white border border-gray-200 rounded-xl px-5 py-5 flex flex-col gap-3">
            {/* Quote icon */}
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" className="text-orange-500 -ml-2 rotate-180" viewBox="0 -960 960 960" width="40px" fill="currentColor">
                    <path d="m293.23-340.85 53.39-93.46q-3.46 1.92-8.08 2.69t-9.23.77q-42 0-73.58-33.26-31.57-33.27-31.57-79.89 0-49 32.57-81.58 32.58-32.57 81.58-32.57 48.23 0 81.19 32.57Q452.46-593 452.46-544q0 15.08-4.61 29.73-4.62 14.65-11.47 27.12l-98.46 172.3q-3.4 5.8-9.31 9.4-5.9 3.6-13.24 3.6-15.22 0-22.83-13-7.62-13 .69-26Zm283.39 0L630-434.31q-3.46 1.92-8.08 2.69-4.61.77-9.23.77-42 0-73.57-33.26-31.58-33.27-31.58-79.89 0-49.38 32.58-81.77 32.57-32.38 81.57-32.38 48.23 0 81.19 32.57Q735.84-593 735.84-544q0 15.08-4.11 29.73-4.12 14.65-10.96 27.12l-99.46 172.3q-3.41 5.8-9.31 9.4-5.91 3.6-13.25 3.6-15.21 0-22.83-13-7.61-13 .7-26Z" />
                </svg>
            </div>

            {/* Comment text */}
            <p className="text-sm text-gray-600 leading-relaxed flex-1">{review.comment}</p>

            {/* Author */}
            <div className="flex items-center gap-3">
                {hasImage ? (

                    <Image
                        src={review.image}
                        alt={review.name}
                        width={100}
                        height={100}
                        quality={50}
                        className="w-12 h-12 rounded-full object-cover bg-gray-100"
                    />
                ) : (
                    <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-base font-semibold shrink-0"
                        style={{ background: col.bg, color: col.text }}
                    >
                        {letter}
                    </div>
                )}
                <div className="flex flex-col gap-0.5">
                    <div className="text-sm font-medium text-gray-900">{review.name}</div>
                    <div className="text-xs text-gray-400">{review.source}</div>
                </div>
            </div>
        </div>
    );
}

export default function Testimonial() {


    return (
        <div className="py-20 flex overflow-hidden justify-center items-center bg-[#f7f7f7] sm:rounded-2xl border-gray-300 border flex-col gap-10">

            <div className="flex flex-col gap-10 sm:gap-14">
                {/* Section header */}
                <div className="flex flex-col gap-4 text-center">
                    <div className="flex items-center mx-auto gap-3">
                        <div className="w-16 h-px bg-linear-to-r from-transparent to-current opacity-30" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20" className="size-4 text-current shrink-0">
                            <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.25" d="m7.964 4.202 1.947-1.946a.833.833 0 0 1 1.178 0l1.947 1.946a.833.833 0 0 1 0 1.179l-1.947 1.946a.833.833 0 0 1-1.178 0L7.964 5.381a.833.833 0 0 1 0-1.179Zm0 10.417 1.947-1.947a.833.833 0 0 1 1.178 0l1.947 1.947a.833.833 0 0 1 0 1.178l-1.947 1.947a.833.833 0 0 1-1.178 0l-1.947-1.947a.833.833 0 0 1 0-1.178ZM2.756 9.41l1.946-1.946a.833.833 0 0 1 1.179 0l1.946 1.947a.833.833 0 0 1 0 1.178l-1.946 1.947a.833.833 0 0 1-1.179 0l-1.946-1.947a.833.833 0 0 1 0-1.178Zm10.416 0 1.947-1.946a.833.833 0 0 1 1.178 0l1.947 1.947a.833.833 0 0 1 0 1.178l-1.947 1.947a.833.833 0 0 1-1.178 0l-1.947-1.947a.833.833 0 0 1 0-1.178Z" />
                        </svg>
                        <div className="text-sm tracking-widest uppercase whitespace-nowrap">Reviews</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20" className="size-4 text-current shrink-0">
                            <path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.25" d="m7.964 4.202 1.947-1.946a.833.833 0 0 1 1.178 0l1.947 1.946a.833.833 0 0 1 0 1.179l-1.947 1.946a.833.833 0 0 1-1.178 0L7.964 5.381a.833.833 0 0 1 0-1.179Zm0 10.417 1.947-1.947a.833.833 0 0 1 1.178 0l1.947 1.947a.833.833 0 0 1 0 1.178l-1.947 1.947a.833.833 0 0 1-1.178 0l-1.947-1.947a.833.833 0 0 1 0-1.178ZM2.756 9.41l1.946-1.946a.833.833 0 0 1 1.179 0l1.946 1.947a.833.833 0 0 1 0 1.178l-1.946 1.947a.833.833 0 0 1-1.179 0l-1.946-1.947a.833.833 0 0 1 0-1.178Zm10.416 0 1.947-1.946a.833.833 0 0 1 1.178 0l1.947 1.947a.833.833 0 0 1 0 1.178l-1.947 1.947a.833.833 0 0 1-1.178 0l-1.947-1.947a.833.833 0 0 1 0-1.178Z" />
                        </svg>
                        <div className="w-16 h-px bg-linear-to-l from-transparent to-current opacity-30" />
                    </div>
                    <div className="text-3xl sm:max-w-full md:text-3xl lg:text-6xl hedvig">
                        Our Clients Reviews
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-[60%] mx-auto sm:max-w-[500px]">
                        Hear from those who’ve experienced the comfort, relief, and peace that comes with our in-home massage services.
                    </p>

                    <div className="w-full flex justify-center">
                        <Link href={''} className="border border-black cursor-pointer px-8 py-2.5">Book Appointment</Link>
                    </div>
                </div>



                {/* Container for Two opposite moving infinite slides */}
                <div className="sm:w-[1500px] w-[650px] overflow-hidden" style={{ position: "relative", display: "flex", flexDirection: "column", gap: "16px", overflow: 'hidden' }}>

                    {/* Row 1 — slides left */}
                    <div style={{ overflow: "hidden", width: "100%" }}>
                        <div style={{ display: "flex", gap: "16px", width: "max-content", animation: "marquee-left 100s linear infinite" }}>
                            {[...reviews.slice(0, 13), ...reviews.slice(0, 13)].map((review, i) => (
                                <ReviewCard key={`r1-${i}`} review={review} colorIdx={i} />
                            ))}
                        </div>
                    </div>

                    {/* Row 2 — slides right */}
                    <div style={{ overflow: "hidden", width: "100%" }}>
                        <div style={{ display: "flex", gap: "16px", width: "max-content", animation: "marquee-right 100s linear infinite" }}>
                            {[...reviews.slice(13), ...reviews.slice(13)].map((review, i) => (
                                <ReviewCard key={`r2-${i}`} review={review} colorIdx={i + 13} />
                            ))}
                        </div>
                    </div>

                    {/* Row 1 — slides left */}
                    <div style={{ overflow: "hidden", width: "100%" }}>
                        <div style={{ display: "flex", gap: "16px", width: "max-content", animation: "marquee-left 130s linear infinite" }}>
                            {[...reviews.slice(13), ...reviews.slice(13)].map((review, i) => (
                                <ReviewCard key={`r1-${i}`} review={review} colorIdx={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import Image from "next/image";

export default function Ratings() {
    // Mock profile data
    const reviewers = [
        { url: "/stack1.jpg", color: "bg-[#fde68a]" },
        { url: "/stack2.jpg", color: "bg-[#bfdbfe]" },
        { url: "/stack3.jpg", color: "bg-[#fed7aa]" },
    ];

    return (
        <div className="flex flex-col gap-1">
            {/* reviewers profiles */}
            <div className="flex -space-x-2 items-center">
                {reviewers.map((r, i) => (
                    <div
                        key={i}
                        className={`${r.color} border border-white relative w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-white overflow-hidden`}
                        title={r.name}
                    >
                        {r.url ? (
                            <Image
                                src={r.url}
                                alt="profile"
                                fill
                                sizes="40px"
                                className="object-cover blur-[0.3px]"
                                quality={60}
                            />
                        ) : (
                            r.name
                        )}
                    </div>
                ))}
            </div>

            {/* star ratings */}
            <div className="flex items-center gap-3">
                <p className="pt-0.5 text-white flex items-center gap-2">
                    <img src="/google.svg" alt="" />
                    Rated 4.9/5
                </p>
                <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => {
                        return (
                            <svg
                                key={i}
                                className="sm:w-4 sm:h-4 w-3 h-3 text-[#FFD700]"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden
                            >
                                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788L19.6 24 12 19.897 4.4 24l1.666-8.002L0.132 9.21l8.2-1.192L12 .587z" />
                            </svg>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
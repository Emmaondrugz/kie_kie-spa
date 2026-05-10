"use client";

import { useState } from "react";
import type { SessionData } from "@/app/Appointment/page";

const BTC_ADDRESS = "bc1q8zwk444twd3wwcjadzfrnc3xnve4fxna4x5zhc";
const WHATSAPP_NUMBER = "+12562476016";
const USD_TO_BTC = 0.000016;

type Props = {
    sessionData: SessionData;
    onClose: () => void;
};

export default function PaymentForm({ sessionData, onClose }: Props) {
    const [copied, setCopied] = useState(false);
    const [qrLoaded, setQrLoaded] = useState(false);

    const btcAmount = (sessionData.price * USD_TO_BTC).toFixed(6);
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=bitcoin:${BTC_ADDRESS}?amount=${btcAmount}&label=Spa+Session&size=180x180`;

    const fallbackMessage = encodeURIComponent(
        `Hi! 👋 I'd like to book a session but I'm having trouble with the crypto payment and need some help.\n\n` +
        `━━━━━━━━━━━━━━━━━━━\n` +
        `📋 BOOKING DETAILS\n` +
        `━━━━━━━━━━━━━━━━━━━\n` +
        `👤 Name: ${sessionData.firstName} ${sessionData.lastName}\n` +
        `📧 Email: ${sessionData.email}\n` +
        `📱 Phone: ${sessionData.phone}\n` +
        `📍 Address: ${sessionData.address}\n\n` +
        `💆 Service: ${sessionData.service}\n` +
        `⏱ Duration: ${sessionData.duration} min\n\n` +
        `${sessionData.extra ? `✨ Extra: ${sessionData.extra}\n` : ``}` +
        `💰 Total Due: $${sessionData.price} USD\n\n` +
        `${sessionData.notes ? `📝 Notes: ${sessionData.notes}\n\n` : ``}` +
        `Could you assist me with an alternative payment method? Thank you! 🙏`
    );
    const confirmMessage = encodeURIComponent(
        `Hi! 👋 I've just sent a Bitcoin payment and wanted to confirm my booking.\n\n` +
        `━━━━━━━━━━━━━━━━━━━\n` +
        `📋 BOOKING DETAILS\n` +
        `━━━━━━━━━━━━━━━━━━━\n` +
        `👤 Name: ${sessionData.firstName} ${sessionData.lastName}\n` +
        `📧 Email: ${sessionData.email}\n` +
        `📱 Phone: ${sessionData.phone}\n` +
        `📍 Address: ${sessionData.address}\n\n` +
        `💆 Service: ${sessionData.service}\n` +
        `⏱ Duration: ${sessionData.duration} min\n\n` +
        `${sessionData.extra ? `✨ Extra: ${sessionData.extra}\n` : ``}` +
        `💰 Amount Paid: $${sessionData.price} USD\n` +
        `₿ BTC Sent: ${btcAmount} BTC\n` +
        `🏦 To Wallet: ${BTC_ADDRESS}\n\n` +
        `${sessionData.notes ? `📝 Notes: ${sessionData.notes}\n\n` : ``}` +
        `Please confirm receipt and send over the booking confirmation. Thank you! 🙏`
    );

    const waFallbackLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${fallbackMessage}`;
    const waConfirmLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${confirmMessage}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(BTC_ADDRESS);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm sm:px-4">
            <div className="bg-white w-full max-w-md relative overflow-y-auto max-h-[90vh] flex flex-col gap-6 px-8 py-6">

                {/* Close */}
                <button onClick={onClose} className="absolute cursor-pointer top-3 bg-[#f7f7f7] p-2 right-4 text-gray-400 hover:text-black transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="currentColor">
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                </button>

                {/* Header */}
                <div className="flex flex-col gap-1">
                    <h2 className="text-2xl hedvig">Complete Payment</h2>
                    <p className="text-sm text-gray-500 poppins font-light">
                        Send exactly <span className="text-black font-medium">{btcAmount} BTC</span> to confirm your session.
                    </p>
                </div>

                {/* Session summary */}
                <div className="bg-[#f7f7f7] p-4 flex flex-col gap-1 text-sm poppins font-light">
                    <div className="flex justify-between"><span className="text-gray-500">Service</span><span>{sessionData.service}</span></div>
                    {sessionData.extra && <div className="flex justify-between"><span className="text-gray-500">Extra</span><span>{sessionData.extra}</span></div>}
                    <div className="flex justify-between"><span className="text-gray-500">Duration</span><span>{sessionData.duration} min</span></div>
                    <div className="flex justify-between border-t border-gray-200 pt-2 mt-1 font-medium"><span>Total</span><span>${sessionData.price}</span></div>
                </div>

                {/* QR + address */}
                <div className="flex flex-col items-center gap-3">

                    {/* Skeleton shown until QR loads */}
                    <div className="relative w-[180px] h-[180px]">
                        {!qrLoaded && (
                            <div className="absolute inset-0 bg-gray-100 animate-pulse flex flex-col items-center justify-center gap-2">
                                {/* Fake QR pattern */}
                                <div className="grid grid-cols-5 gap-1 opacity-20">
                                    {Array.from({ length: 25 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-6 h-6 ${Math.random() > 0.4 ? "bg-gray-400" : "bg-transparent"}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                        <img
                            src={qrUrl}
                            alt="BTC QR Code"
                            onLoad={() => setQrLoaded(true)}
                            className={`w-[180px] h-[180px] transition-opacity duration-300 ${qrLoaded ? "opacity-100" : "opacity-0"}`}
                        />
                    </div>

                    <div className="w-full bg-[#f7f7f7] px-3 py-2 flex items-center justify-between gap-2">
                        <span className="text-xs text-gray-500 poppins font-light truncate">{BTC_ADDRESS}</span>
                        <button
                            type="button"
                            onClick={handleCopy}
                            className={`text-xs cursor-pointer poppins shrink-0 flex items-center gap-1 transition-colors duration-200 ${copied ? "text-green-500" : "text-black underline"}`}
                        >
                            {copied ? (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="currentColor">
                                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                                    </svg>
                                    <span>Copied</span>
                                </>
                            ) : (
                                <span>Copy</span>
                            )}
                        </button>
                    </div>
                    <p className="text-xs text-gray-400 poppins text-center">Scan with any Bitcoin wallet app</p>
                </div>

                {/* CTA */}

                <a href={waConfirmLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-black py-3 text-white text-sm poppins text-center cursor-pointer"
                >
                    I've Sent the Payment
                </a>

                {/* Fallback */}
                <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-xs text-gray-400 poppins">can't pay crypto?</span>
                    <div className="flex-1 h-px bg-gray-200" />
                </div>


                <a href={waFallbackLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border border-black py-3 text-black text-sm poppins text-center flex items-center justify-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.83L.057 23.857l6.204-1.629A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.359-.213-3.683.967.984-3.596-.234-.37A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                    </svg>
                    <span>Text Us on WhatsApp</span>
                </a>
            </div>
        </div >
    );
}
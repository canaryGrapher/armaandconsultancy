import Image from "next/image";
import ContactCard from "../components/ContactCard";
import Header from "../components/Header";
import contactInfo from "../data/contact";
import maps from "../../public/images/brand/maps.png"

export default function Contact() {
    return (
        <div className="min-h-screen w-full">
            <Header activePage="contact" />

            {/* Contact Section */}
            <main className="px-8 py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-light mb-4">Get in Touch</h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Have questions about our services? We're here to help. Reach out to us through any of the following channels.
                        </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contactInfo.map((info, index) => (
                            <ContactCard
                                key={index}
                                icon={info.icon}
                                title={info.title}
                                content={info.content}
                            />
                        ))}
                    </div>

                    {/* Map Section */}
                    <div className="mt-16 bg-gray-100 rounded-2xl overflow-hidden">
                        <div className="aspect-w-16 aspect-h-9 w-full">
                            {/* Replace with your actual map embed code */}
                            <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
                                <Image src={maps} alt="Map" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-16 text-center">
                        <h2 className="text-2xl font-light mb-4">Ready to Get Started?</h2>
                        <p className="text-gray-600 mb-8">
                            Our team of experts is ready to help you secure your digital assets
                        </p>
                        <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                            Schedule a Consultation
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
} 
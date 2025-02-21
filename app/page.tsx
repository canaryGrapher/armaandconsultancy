import Image from "next/image";
import "./globals.css";
import Header from "./components/Header";
import Link from "next/link";
import StatsGrid from "./components/StatsGrid";
import heroImage from "../public/images/brand/hero.jpg"
import { 
    algoSec,
    arcSight,
    checkMarX,
    crowdStrike,
    fortify,
    HCLAppScan,
    microsoftSentinel,
    okta,
    radar,
    recordedFuture,
    sailpoint,
    splunk,
    symantec,
    thales,
    voltage
} from "../public/images/partners/index"

export const metadata = {
  title: 'Armaand Consultancy',
  description: 'Your Trusted partner in Cyber Security & Emerging technologies',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Header activePage="home" />
      {/* Hero Section */}
      <main className="px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Right Content - Image */}
          <div className="col-span-1 lg:col-start-2 h-[400px] lg:h-full relative">
            <div className="relative w-full h-full bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 rounded-2xl">
              <Image 
                src={heroImage} 
                alt="Hero Image" 
                fill
                className="object-cover rounded-2xl"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Left Content */}
          <div className="col-span-1 lg:col-start-1 lg:row-start-1 space-y-6">
            <div className="text-sm text-gray-600 text-center lg:text-left">Make Technology Secure</div>
            <h1 className="text-6xl font-light leading-tight text-center lg:text-left">
              Your Trusted Partner in Cybersecurity & Emerging Technologies
            </h1>
            <p className="text-gray-600 px-10 lg:px-0 lg:max-w-md ml-3 text-center lg:text-left">
              In today&apos;s digital world, security isn&apos;t optional—it&apos;s essential. At Armaand Consulting, we empower businesses with cutting-edge cybersecurity solutions, ensuring your data stays protected while you scale with confidence.
            </p>
            <Link href="/services" className="flex justify-center lg:justify-start">
              <button className="mt-5 px-6 py-3 bg-black text-white rounded-full w-2/4 lg:w-auto">
                EXPLORE SERVICES
              </button>
            </Link>

            <StatsGrid />
          </div>
        </div>

        {/* Partners/Solutions Section */}
        <section className="mt-24">
          <h2 className="text-3xl font-light text-center mb-12">Our Expertise</h2>
          <div className="grid grid-cols-5 gap-8">
            {[
              { img: algoSec, name: 'AlgoSec' },
              { img: arcSight, name: 'ArcSight' },
              { img: checkMarX, name: 'CheckMarx' },
              { img: crowdStrike, name: 'CrowdStrike' },
              { img: fortify, name: 'Fortify' },
              { img: HCLAppScan, name: 'HCL AppScan' },
              { img: microsoftSentinel, name: 'Microsoft Sentinel' },
              { img: okta, name: 'Okta' },
              { img: radar, name: 'Radar' },
              { img: recordedFuture, name: 'Recorded Future' },
              { img: sailpoint, name: 'SailPoint' },
              { img: splunk, name: 'Splunk' },
              { img: symantec, name: 'Symantec' },
              { img: thales, name: 'Thales' },
              { img: voltage, name: 'Voltage' }
            ].map((partner, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src={partner.img}
                  alt={partner.name}
                  className="w-auto h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

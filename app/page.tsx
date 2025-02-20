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
};

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Header activePage="home" />
      {/* Hero Section */}
      <main className="px-8 py-16">
        <div className="grid grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="col-span-2 md:col-span-1 space-y-6">
            <div className="text-sm text-gray-600">Make Technology Secure</div>
            <h1 className="text-6xl font-light leading-tight">
              Your Trusted Partner in Cybersecurity & Emerging Technologies
            </h1>
            <p className="text-gray-600 max-w-md ml-3">
              In today&apos;s digital world, security isn&apos;t optional—it&apos;s essential. At Armaand Consulting, we empower businesses with cutting-edge cybersecurity solutions, ensuring your data stays protected while you scale with confidence.
            </p>
            <Link href="/services">
              <button className="mt-5 px-6 py-3 bg-black text-white rounded-full">
                EXPLORE SERVICES
              </button>
            </Link>


            <StatsGrid />
          </div>

          {/* Right Content - You can add an abstract visualization or image here */}
          <div className="flex-1 relative">
            {/* Add your visualization or image here */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 rounded-2xl">
              {/* You can add more decorative elements here */}
              <Image src={heroImage} alt="Hero Image" className="w-full h-full object-cover" />
            </div>
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

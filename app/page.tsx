import { underMaintenance } from "@/public/images/utility/index";
import Image from "next/image";

export const metadata = {
  title: 'Armaand Consultancy',
  description: 'Site coming soon',
};

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <main className="">
        <div className="flex flex-row justify-center items-center">
          <Image src={underMaintenance} alt="Under Maintenance" height={500} width={500} />
        </div>
        <h1 className="text-4xl font-bold text-center">
          Coming Soon!
        </h1>
      </main>
    </div>
  );
}

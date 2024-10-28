import Image from "next/image";
import Navbar from "./components/Navbar";
import home from "@/app/images/hy.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-pink-100 flex items-center justify-center">
        {/* Darker Transparent Background Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-pink-200 opacity-80"></div>

        <div className="relative z-10 flex items-center justify-center">
          {/* Left-Aligned Text */}
          <div className="mr-8 text-left">
            <p className="text-slate-50 text-2xl font-bold mb-4 drop-shadow-md">50% OFF SITEWIDE</p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-50 mb-4 drop-shadow-md">RITE OF SPRING</h1>
            <Link
              href="#"
              className="text-lg bg-black text-slate-50 py-2 px-4 rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300 font-bold drop-shadow-md"
            >
              Shop New Arrivals
            </Link>
          </div>

          {/* Centered Small Image with Hover Effect */}
          <div className="relative w-1/3 h-auto overflow-hidden hover:scale-110 transition-transform duration-300">
            <Image 
              src={home}
              alt="Background image"
              width={400} // Set specific width
              height={400} // Set specific height
              className="rounded-full transition-opacity duration-300 hover:opacity-90" // Transition effects
              style={{ objectFit: "contain" }} // Center the image
            />
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import banner from  '@/assets/ban.jpg'
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
const Banner = () => {
  return (
    <div className="container mx-auto  space-y-10 m-12 p-2">
      <div className="hero-content flex-col lg:flex-row-reverse p-2">
        <Image
          src={banner}
        width={600}
        height={1000}
        alt="banner image"
        />
        <div>
          <h1 className="text-5xl font-bold">Build Beautiful Floors & Walls with Us!</h1>
          <p className="py-6">
            Explore our wide range of stylish tiles to create spaces that truly stand out.
          </p>
          <Link href={"/all-tiles"}><button className="btn btn-primary">Browse Now</button>  </Link>
          
        </div>
        
        

      </div>
      <div className="m-3 flex items-center">
            <button className="btn bg-mauve-900 text-white">New Arrivals</button>
            <p className="text-emerald-600"><Marquee pauseOnHover={true}>Premium Quality Tiles | Elegant Floor & Wall Designs | Affordable Prices | Modern & Classic Collections | Visit Our Showroom Today!</Marquee></p>
        </div>
    </div>
  );
};

export default Banner;

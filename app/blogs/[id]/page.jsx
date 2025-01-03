"use client";

import { assets, blog_data } from "@/Assets/assets";
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Footer from "@/Components/Footer";
import Link from "next/link";

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    // Unwrap the params promise
    (async () => {
      const unwrappedParams = await params;
      setId(unwrappedParams.id); // Store unwrapped ID
      fetchBlogData(unwrappedParams.id);
    })();
  }, []);

  const fetchBlogData = (id) => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  };

  return (data?<>
    <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
         <Link href="/">
        <Image src={assets.logo} alt="" width={180} className="w-[130px] sm:w-auto"/></Link>
        <button className="flex item-center font-medium gap-2 py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">Get Started <Image src={assets.arrow} alt="" width={20} /></button>
        </div>
        <div className="text-center my-24">
            <h1 className="text-2xl sm:text-5xl font-semibold max-w- [700px] mx-auto">{data.title}</h1>
            <Image src={data.author_img} alt="" width={60} height={60} className="mx-auto mt-6 rounded-full border border-white"/>
            <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{data.author}</p>
        </div>
    </div>
    <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image src={data.image} alt="" width={1280} height={720} className="border-4 border-white "/>
        <h1 className="my-8 text-[20px] font-semibold">Intruduction:</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">Step 1: Self-Reflection and Goal Setting</h3>
        <p className="my-3">Take time to evaluate your current skills, interests, and aspirations to set clear and achievable goals.
        Identify areas for improvement and align them with your long-term objectives.
        Consider both personal and professional development opportunities.
        Write down specific, measurable, and time-bound goals to stay focused.</p>
        <h3 className="my-5 text-[18px] font-semibold">Step 2: Self-Reflection and Goal Setting</h3>
        <p className="my-3">Take time to evaluate your current skills, interests, and aspirations to set clear and achievable goals.
        Identify areas for improvement and align them with your long-term objectives.
        Consider both personal and professional development opportunities.
        Write down specific, measurable, and time-bound goals to stay focused.</p>
        <h3 className="my-5 text-[18px] font-semibold">Step 3: Self-Reflection and Goal Setting</h3>
        <p className="my-3">Take time to evaluate your current skills, interests, and aspirations to set clear and achievable goals.
        Identify areas for improvement and align them with your long-term objectives.
        Consider both personal and professional development opportunities.
        Write down specific, measurable, and time-bound goals to stay focused.</p>
        <h3 className="my-5 text-[18px] font-semibold">conclusion:</h3>
        <p className="my-3">In conclusion, self-reflection and goal setting provide a strong foundation for personal and professional growth. By evaluating your skills, identifying areas for improvement, and establishing clear objectives, you create a roadmap to success. Staying focused on specific, measurable goals ensures consistent progress and meaningful achievements.</p>
        <div className="my-24">
            <p className="text-black font font-semibold
            my-4">Share This Article On Social Media</p>
            <div className="flex">
                <Image src={assets.facebook_icon} alt="" width={50} />
                <Image src={assets.googleplus_icon} alt="" width={50} />    
                <Image src={assets.twitter_icon} alt="" width={50} />
            </div>
        </div>
        <Link href="/">
        <button className="flex item-center font-medium gap-2 py-3 px-6 border border-solid mt-[-70px] border-black shadow-[-7px_7px_0px_#000000]">Go Back <Image src={assets.arrow} alt="" width={20} /></button>
        </Link>
    </div>
    <Footer/>
    </>:<></>
  );
}

export default Page;

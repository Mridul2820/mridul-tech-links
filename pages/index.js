import React from 'react';
import Image from 'next/image';
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
import { MdArrowForwardIos } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import { NextSeo } from 'next-seo';

const linkItems = [
  {
    heading: 'Mridul.tech',
    subtext: 'Visit Website',
    icon: <BiWorld size={36} />,
    color: '#fff',
    bg: '#0f81f0',
    url: 'https://www.mridul.tech/',
  },
  {
    heading: 'Mridul2820',
    subtext: 'Follow on Github',
    icon: <AiOutlineGithub size={36} />,
    color: '#fff',
    bg: '#333',
    url: 'https://github.com/Mridul2820',
  },
  {
    heading: '@i_mridul',
    subtext: 'Follow on Instagram',
    icon: <AiOutlineInstagram size={36} />,
    color: '#fff',
    bg: '#E4405F',
    url: 'https://instagram.com/i_mridul',
  },
  {
    heading: '@i_mridul',
    subtext: 'Follow on Twitter',
    icon: <AiOutlineTwitter size={36} />,
    color: '#fff',
    bg: '#0f81f0',
    url: 'https://twitter.com/i_mridul',
  },
  {
    heading: 'Mridul Panda',
    subtext: 'Follow on Linkedin',
    icon: <AiFillLinkedin size={36} />,
    color: '#fff',
    bg: '#0f81f0',
    url: 'https://www.linkedin.com/in/mridul2820/',
  },
];

const AllLinks = () => {
  const SEO = {
    title: 'Quick Links of mridul.tech',
    description: 'Quick Links of mridul.tech',
    twitter: {
      cardType: 'summary_large_image',
    },
    openGraph: {
      title: 'Quick Links of mridul.tech',
      description: 'Quick Links of mridul.tech',
      type: 'website',
      locale: 'en_IN',
      url: 'mridul.tech',
      site_name: 'Next Template',
      images: [
        {
          url: 'https://res.cloudinary.com/dgt1da1bz/image/upload/v1641049940/assets/icon_pqq3uw.png',
          width: 300,
          height: 300,
          alt: 'Quick Links',
        },
      ],
    },
    twitter: {
      handle: '@i_mridul',
      site: '@i_mridul',
      cardType: 'summary_large_image',
    },
  };
  return (
    <div className="p-5 flex flex-col gap-5 justify-center items-center">
      <NextSeo {...SEO} />
      <div className="rounded-full w-20 h-20 overflow-hidden shadow-bs1">
        <Image
          src="/mridul.jpg"
          alt="logo"
          height={80}
          width={80}
          objectFit="cover"
          priority={true}
        />
      </div>
      {linkItems.map((item) => (
        <a
          href={item.url}
          key={uuidv4()}
          className="flex items-center justify-between max-w-[400px] w-full rounded-md shadow-bs3 hover:shadow-bs1 transition-all duration-300 px-4 py-2 select-none hover:opacity-90"
          target="_blank"
          rel="noreferrer"
          style={{
            background: item.bg,
            color: item.color,
          }}
        >
          <div className="flex items-center gap-3">
            {item.icon}
            <div className="">
              <span className="block font-semibold text-xl">
                {item.heading}
              </span>
              <span className="block font-light">{item.subtext}</span>
            </div>
          </div>
          <MdArrowForwardIos size={30} />
        </a>
      ))}
    </div>
  );
};

export default AllLinks;

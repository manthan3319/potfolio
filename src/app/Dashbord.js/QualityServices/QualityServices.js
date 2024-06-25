"use client"
import React from 'react';
import { Title } from '../Title/page';
import Image from 'next/image';
import html from '../../images/html.png';
import css from '../../images/css-code.png';
import Bootstrap from '../../images/bootstrap-logo-shadow.png';
import jquery from '../../images/jquery.svg';
import js from '../../images/js.svg';
import react from '../../images/react.svg';
import angularjs from '../../images/angularjs.svg';
import tailwindcss from '../../images/tailwind-css.svg';
import nextjs from '../../images/nextjs.svg';
import node from '../../images/node.svg';
import mongodb from '../../images/mongodb.svg';
import aws from '../../images/aws.svg';
import FadeIn from 'react-fade-in';
const skillsData = [
  { img: html, alt: 'HTML', percentage: '99%', name: 'HTML' },
  { img: css, alt: 'CSS', percentage: '99%', name: 'CSS' },
  { img: Bootstrap, alt: 'Bootstrap', percentage: '99%', name: 'Bootstrap' },
  { img: tailwindcss, alt: 'TailwindCSS', percentage: '99%', name: 'TailwindCSS' },
  { img: jquery, alt: 'jQuery', percentage: '90%', name: 'jQuery' },
  { img: js, alt: 'JavaScript', percentage: '90%', name: 'JavaScript' },
  { img: react, alt: 'React', percentage: '94%', name: 'React' },
  { img: angularjs, alt: 'AngularJS', percentage: '94%', name: 'AngularJS' },
  { img: nextjs, alt: 'Next.js', percentage: '90%', name: 'Next.js' },
  { img: mongodb, alt: 'MongoDB', percentage: '92%', name: 'MongoDB' },
  { img: aws, alt: 'AWS', percentage: '90%', name: 'AWS' },
];

export const QualityServices = () => {
  const titleData = {
    title: 'My Skills',
    description: 'We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.',
  };

  return (
    <div className='lg:max-w-[1440px] xl:px-[90px] mx-auto m-auto px-[20px] lg:mt-[80px] mt-[50px]'>
      <div>
        <Title pram={titleData} />
      </div>

      <div className='mt-[50px]'>
        <FadeIn>
        <div className='flex flex-wrap  gap-[30px] justify-center items-center'>
          {skillsData.map((skill, index) => (
            <div className='flex flex-col text-center service_laguages' key={index}>
              <div className='laguage_service_img laguage_service_img2'>
                <Image src={skill.img} alt={skill.alt} width={100} height={100} className='m-auto' />
                <h2>{skill.percentage}</h2>
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
        </FadeIn>
      </div>
    </div>
  );
};

import React from 'react'
import { Title } from '../Title/page';
import react from '../../images/react.svg';
import blender from '../../images/blender.png';
import figma from '../../images/figma.png';
import Image from 'next/image';
const skillsData = [
    { img: react, alt: 'React', percentage: '', name: 'React Native' },
    { img: blender, alt: 'blender', percentage: '', name: 'Blender' },
    { img: figma, alt: 'blender', percentage: '', name: 'Figma Design' },
];
export const SkillsinProgress = () => {
    const titleData = {
        title: 'Skills In Progress',
        description: 'I m passionate about constantly improving my skills and staying up-to-date with the latest technologies and trends in the industry. Here are some of the skills I m currently focused on learning to enhance my expertise and broaden my knowledge.',
    };

    return (
        <div className='lg:max-w-[1440px] xl:px-[90px] mx-auto m-auto px-[20px] lg:mt-[80px] mt-[50px]'>
            <div>
                <Title pram={titleData} />
            </div>

            <div className='mt-[50px]'>
                <div className='flex flex-wrap gap-[30px] justify-center items-center'>
                    {skillsData.map((skill, index) => (
                        <div className='flex flex-col text-center service_laguages' key={index}>
                            <div className='laguage_service_img'>
                                <Image src={skill.img} alt={skill.alt} width={100} height={100} className='m-auto' />
                                <h2>{skill.percentage}</h2>
                            </div>
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

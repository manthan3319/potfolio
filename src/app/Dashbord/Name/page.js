import Link from 'next/link';
import Image from 'next/image';
import profile from '../../images/hero_img.webp'; 
const links = [
    { href: 'https://www.linkedin.com/in/yourprofile', icon: 'fa-linkedin' },
    { href: 'https://github.com/yourprofile', icon: 'fa-github' },
    { href: 'https://wa.me/yourphonenumber', icon: 'fa-whatsapp' },
    { href: 'mailto:youremail@example.com', icon: 'fa-envelope-o' },
];

const YourComponent = () => {
    return (
        <div className='lg:max-w-[1440px] xl:px-[90px] mx-auto m-auto px-[20px] lg:mt-[45px] md:mt-[40px]'>
            <div className='flex lg:flex-row md:flex-row flex-col-reverse text-white'>
                <div className='lg:w-[50%] md:w-[50%]'>
                    <p className='lg:text-[30px] text-[20px] mb-[15px] font-semibold text-white font-sans'>I am Manthan</p>
                    <h1 className='lg:text-[52px] text-[33px] lg:leading-[65px] mb-[20px] font-sans font-bold gradient-text'>
                        Web Developer + UX Designer
                    </h1>
                    <p className='text-white-8c font-sans lg:text-[18px] text-[14px] mb-[35px]'>
                        I break down complex user experience problems to create integrity-focused solutions that connect billions of people
                    </p>

                    <div className="flex items-center space-x-2 gap-[17px]">
                        {links.map((link, index) => (
                         <Link href={link.href} key={index} target="_blank" rel="noopener noreferrer"
                         className='relative flex items-center justify-center border border-white-8c w-[35px] h-[35px] rounded-full p-2 transition duration-300 hover:bg-gradient2 hover:border-none'>
                                <i className={`fa ${link.icon} text-white`} aria-hidden="true"></i>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className='lg:w-[50%] md:w-[50%]'>
                    <Image src={profile} alt='img' className='m-auto lg:w-[345px] w-[200px] rounded-[50px] mb-[40px] sm:mb-0' width={100} height={100} />
                </div>
            </div>
        </div>
    );
};

export default YourComponent;

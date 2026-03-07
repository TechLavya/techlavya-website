import { Facebook, Github, Instagram, MapPin, Youtube } from 'lucide-react';
import Image from 'next/image'; // Kept for the logo, removed from background
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        // Replaced bg-footer with a rich brown gradient
        <footer className="w-full bg-gradient-to-b from-[#2d1b14] to-[#1a0f0a] text-white py-12 border-t border-[#4a3728] font-kodeMono tracking-wide">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row justify-between items-start text-center md:text-left gap-12">

                    {/* Logo & Description */}
                    <div className="w-full md:w-1/3">
                        <div className='flex max-md:justify-center'>
                            {/* Assuming the logo is transparent/white, it will look great on brown */}
                            <Image
                                src={'/footer-img.png'}
                                alt='logo'
                                width={250}
                                height={80}
                                className='mb-5 brightness-110'
                                priority
                            />
                        </div>
                        <p className="text-stone-300 leading-relaxed">
                            &quot;Experience the thrill of innovation at the ultimate tech fest! Join us for exciting events and workshops covering everything from coding to design.&quot;
                        </p>
                        <p className="mt-4 font-semibold">
                            Email: <Link href="mailto:techfest@rkmgec.ac.in" className="text-orange-400 hover:text-yellow-400 transition-colors">techfest@rkmgec.ac.in</Link>
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="w-full md:w-1/3 flex flex-col items-center">
                        <h3 className="text-xl font-bold mb-6 border-b-2 border-orange-500 pb-1">Follow Us</h3>
                        <div className="flex space-x-6">
                            <Link href="https://www.facebook.com/share/16AmVp6gyk/" target="_blank" rel="noopener noreferrer">
                                <Facebook className="w-7 h-7 text-stone-400 hover:text-orange-400 transform hover:scale-110 transition duration-300" />
                            </Link>
                            <Link href="https://www.instagram.com/techlavya.rkmgec/" target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-7 h-7 text-stone-400 hover:text-orange-400 transform hover:scale-110 transition duration-300" />
                            </Link>
                            <Link href="https://www.youtube.com/@RKMGECOFFICIAL" target="_blank" rel="noopener noreferrer">
                                <Youtube className="w-7 h-7 text-stone-400 hover:text-orange-400 transform hover:scale-110 transition duration-300" />
                            </Link>
                            <Link href="https://github.com/TechLavya" target="_blank" rel="noopener noreferrer">
                                <Github className="w-7 h-7 text-stone-400 hover:text-orange-400 transform hover:scale-110 transition duration-300" />
                            </Link>
                        </div>
                    </div>

                    {/* Address & Location */}
                    <div className="w-full md:w-1/3 flex flex-col justify-center max-md:items-center">
                        <h3 className="text-xl font-bold mb-6 border-b-2 border-orange-500 pb-1">Address</h3>
                        <p className="text-stone-300">
                            Ramkrishna Mahato Government Engineering College, <br />
                            Agharpur, Purulia 723203
                        </p>
                        <Link href="https://www.google.com/maps/place/Ram+Krishna+Mahato+Government+Engin…" target="_blank" rel="noopener noreferrer" className="bg-[#4a3728] hover:bg-orange-600 text-white px-4 py-2 rounded-md flex items-center mt-4 transition duration-300 border border-orange-900/50">
                            <MapPin className="w-4 h-4 mr-2 text-orange-400" /> View on Map
                        </Link>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-8 border-stone-700/50" />

                <p className="text-center text-xs sm:text-sm text-stone-500 uppercase tracking-widest">
                    ©2024-25 Aikatan RKMGEC - Web & Designer Team. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
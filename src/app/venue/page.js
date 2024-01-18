'use client'

import Header from "../component/Header"
import Date from "../component/Dates"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import { usePathname } from "next/navigation";
import Link from "next/link"

const Venue = () => {
    const pathname = usePathname()

    return(
        <div>
            <div className="hidden xl:block">
                <Header pathname={pathname}/>
                <Navbar pathname={pathname}/>
                <div className="border-b-2 border-gray-300 text-white mx-52">a</div>
                <div className="flex justify-center mt-8">
                    <div>
                        <div className="flex space-x-8">
                            <img className="w-[480px] h-[300px]" src="./riset1.jpeg"/>
                            <img className="w-[480px] h-[300px]" src="./risett.JPG"/>
                        </div>
                        <div className="mt-12 flex justify-center">
                            <div className="flex items-center">
                                <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.645448653976!2d112.79480867528339!3d-7.2811210715569565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa12677a0e47%3A0xfcd7e96138bb698b!2sITS%20Research%20Center!5e0!3m2!1sen!2sid!4v1705510379099!5m2!1sen!2sid" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-[300px] h-[300px]"></iframe>
                                </div>
                                <div className="ml-12">
                                    <div className="font-montserrat">
                                        <div className="text-2xl font-bold">ITS Research Center</div>
                                        <div>Keputih, Sukolilo, Surabaya, East Java 60117</div>
                                        <div>(031) 5953759</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="mt-32 flex">
                    <Date/>
                </div>
                <div className="">
                    <Footer/>
                </div>
            </div>

            {/* Mobile */}
            <div className="xl:hidden font-montserrat">
                <Header pathname={pathname}/>
                <div className="flex justify-center mt-8 mx-12">
                    <div>
                        <div className="text-lg font-bold mb-4">Venue</div>
                        <img className="w-[400px] h-[300px]" src="./riset1.jpeg"/>
                        <img className="w-[400px] h-[200px] mt-8" src="./risett.JPG"/>
                        <div className="mt-12 flex justify-center">
                            <div className="flex items-center">
                                <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.645448653976!2d112.79480867528339!3d-7.2811210715569565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa12677a0e47%3A0xfcd7e96138bb698b!2sITS%20Research%20Center!5e0!3m2!1sen!2sid!4v1705510379099!5m2!1sen!2sid" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-[320px] h-[320px]"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <div className="font-montserrat">
                                <div className="text-2xl font-bold">ITS Research Center</div>
                                <div>Keputih, Sukolilo, Surabaya, East Java 60117</div>
                                <div>(031) 5953759</div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="">
                    <Date/>
                </div>
                <div className="">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Venue
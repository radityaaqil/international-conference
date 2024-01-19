'use client'

import Header from "../component/Header"
import Date from "../component/Dates"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import { usePathname } from "next/navigation";
import { GoDotFill } from "react-icons/go";

const Speakersandcommittee = () => {
    const pathname = usePathname()

    return(
        <div className="font-montserrat">
            <div className="hidden xl:block">
                <Header pathname={pathname}/>
                <Navbar pathname={pathname}/>
                <div className="border-b-2 border-gray-300 text-white mx-52">a</div>
                <div className="mx-52 mt-8">
                    <div className="text-xl font-bold my-6">Keynote Speakers</div>
                    <div className="flex items-center text-lg space-x-4 font-montserrat">
                            <img className="w-[150px] rounded-full" src="./ismaill.png"/>
                            <div><span className="font-bold">Prof. Mohammad Ismail</span>, Universiti Malaysia Terengganu, Malaysia</div>
                    </div>
                    <div className="flex items-center text-lg space-x-4 font-montserrat mt-6">
                            <img className="w-[150px] rounded-full" src="./mohannn.png"/>
                            <div><span className="font-bold">Prof. Mohan Kolhe</span>, University of Agder, Norway</div>
                    </div>
                    <div className="flex items-center text-lg space-x-4 font-montserrat mt-6">
                            <img className="w-[150px] rounded-full" src="./fahmii.png"/>
                            <div><span className="font-bold">Fahmi Mubarok, PhD</span>, Institut Teknologi Sepuluh Nopember, Indonesia</div>
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
            <div className="xl:hidden">
                <Header pathname={pathname}/>
                <div className="mx-12">
                    <div className="flex justify-center">
                        <div>
                        <div className="mt-8">
                    <div className="text-lg font-bold my-6">Keynote Speakers</div>
                    <div className="flex items-center text-base space-x-4 font-montserrat">
                            <img className="w-[80px] rounded-full" src="./ismaill.png"/>
                            <div><span className="font-bold">Prof. Mohammad Ismail</span>, Universiti Malaysia Terengganu, Malaysia</div>
                    </div>
                    <div className="flex items-center text-base space-x-4 font-montserrat mt-8">
                            <img className="w-[80px] rounded-full" src="./mohannn.png"/>
                            <div><span className="font-bold">Prof. Mohan Kolhe</span>, University of Agder, Norway</div>
                    </div>
                    <div className="flex items-center text-base space-x-4 font-montserrat mt-8">
                            <img className="w-[80px] rounded-full" src="./fahmii.png"/>
                            <div><span className="font-bold">Fahmi Mubarok, PhD</span>, Institut Teknologi Sepuluh Nopember, Indonesia</div>
                    </div>
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

export default Speakersandcommittee
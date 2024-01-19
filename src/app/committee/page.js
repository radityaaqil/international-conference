'use client'

import Header from "../component/Header"
import Date from "../component/Dates"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import { usePathname } from "next/navigation";
import { GoDotFill } from "react-icons/go";

const Committee = () => {
    const pathname = usePathname()

    return(
        <div className="font-montserrat">
            <div className="hidden xl:block">
                <Header pathname={pathname}/>
                <Navbar pathname={pathname}/>
                <div className="border-b-2 border-gray-300 text-white mx-52">a</div>
                <div className="mx-52 mt-8">
                    <div className="text-xl font-bold my-6">Scientific Committee</div>
                    <div className="flex items-center text-lg space-x-4 font-montserrat">
                            <GoDotFill className="text-sm text-[#df0201]"/>
                            <div><span className="font-bold">Prof. Suwarno</span>, Institut Teknologi Sepuluh Nopember, Indonesia</div>
                    </div>
                    <div className="flex items-center text-lg space-x-4 font-montserrat mt-2">
                            <GoDotFill className="text-sm text-[#df0201]"/>
                            <div><span className="font-bold">Prof. Mohan Kolhe</span>, University of Agder, Norway</div>
                    </div>
                    <div className="flex items-center text-lg space-x-4 font-montserrat mt-2">
                            <GoDotFill className="text-sm text-[#df0201]"/>
                            <div><span className="font-bold">Prof. Ivan Tolj</span>, FSB, Serbia</div>
                    </div>
                    <div className="flex items-center text-lg space-x-4 font-montserrat mt-2">
                            <GoDotFill className="text-sm text-[#df0201]"/>
                            <div><span className="font-bold">Dr. Lukman Nurochim</span>, Institut Teknologi Sepuluh Nopember, Indonesia</div>
                    </div>
                    <div className="flex items-center text-lg space-x-4 font-montserrat mt-2">
                            <GoDotFill className="text-sm text-[#df0201]"/>
                            <div><span className="font-bold">Fahmi Mubarok, PhD</span>, Institut Teknologi Sepuluh Nopember, Indonesia</div>
                    </div>
                    <div className="flex items-center text-lg space-x-4 font-montserrat mt-2">
                            <GoDotFill className="text-sm text-[#df0201]"/>
                            <div><span className="font-bold">Prof. Ubaidillah</span>, Universitas Sebelas Maret, Indonesia</div>
                    </div>
                    <div className="flex items-center text-lg space-x-4 font-montserrat mt-2">
                            <GoDotFill className="text-sm text-[#df0201]"/>
                            <div><span className="font-bold">Prof. Nema Mirzaei</span>, Istanbul Aydin University, Turkey</div>
                    </div>
                </div> 
                <div className="mx-52 mt-16">
                    <div className="text-xl font-bold my-6">Organizing Committee</div>
                    <div className="flex items-center text-lg space-x-4 font-montserrat">
                            <GoDotFill className="text-sm text-[#df0201]"/>
                            <div><span className="font-bold">Hariyanto, S. T.</span>, Institut Teknologi Sepuluh Nopember, Indonesia</div>
                    </div>
                    <div className="flex items-center text-lg space-x-4 font-montserrat mt-2">
                            <GoDotFill className="text-sm text-[#df0201]"/>
                            <div><span className="font-bold">Bagus Putra, S. T., M. T.</span>, Institut Teknologi Sepuluh Nopember, Indonesia</div>
                    </div>
                    <div className="flex items-center text-lg space-x-4 font-montserrat mt-2">
                            <GoDotFill className="text-sm text-[#df0201]"/>
                            <div><span className="font-bold">Faizal Ramadhan, S. T.</span>, Institut Teknologi Sepuluh Nopember, Indonesia</div>
                    </div>
                    <div className="flex items-center text-lg space-x-4 font-montserrat mt-2">
                            <GoDotFill className="text-sm text-[#df0201]"/>
                            <div><span className="font-bold bg-yellow-500">ITS Tekno Sains Team</span></div>
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
                    <div className="text-lg font-bold my-6">Scientific Committee</div>
                    <div className="flex items-center text-base space-x-4 font-montserrat">
                            <GoDotFill className="text-sm text-[#df0201] w-[25px]"/>
                            <div className="w-[300px]"><span className="font-bold">Prof. Suwarno</span>, Institut Teknologi Sepuluh Nopember, Indonesia</div>
                    </div>
                    <div className="flex items-center text-base space-x-4 font-montserrat mt-2">
                            <GoDotFill className="text-sm text-[#df0201] w-[25px]"/>
                            <div className="w-[300px]"><span className="font-bold">Prof. Mohan Kolhe</span>, University of Agder, Norway</div>
                    </div>
                    <div className="flex items-center text-base space-x-4 font-montserrat mt-2">
                            <GoDotFill className="text-sm text-[#df0201] w-[25px]"/>
                            <div className="w-[300px]"><span className="font-bold">Prof. Ivan Tolj</span>, FSB, Serbia</div>
                    </div>
                    <div className="flex items-center text-base space-x-4 font-montserrat mt-2">
                            <GoDotFill className="text-sm text-[#df0201] w-[25px]"/>
                            <div className="w-[300px]"><span className="font-bold">Dr. Lukman Nurochim</span>, Institut Teknologi Sepuluh Nopember, Indonesia</div>
                    </div>
                    <div className="flex items-center text-base space-x-4 font-montserrat mt-2">
                            <GoDotFill className="text-sm text-[#df0201] w-[25px]"/>
                            <div className="w-[300px]"><span className="font-bold">Fahmi Mubarok, PhD</span>, Institut Teknologi Sepuluh Nopember, Indonesia</div>
                    </div>
                    <div className="flex items-center text-base space-x-4 font-montserrat mt-2">
                            <GoDotFill className="text-sm text-[#df0201] w-[25px]"/>
                            <div className="w-[300px]"><span className="font-bold">Prof. Ubaidillah</span>, Universitas Sebelas Maret, Indonesia</div>
                    </div>
                    <div className="flex items-center text-base space-x-4 font-montserrat mt-2">
                            <GoDotFill className="text-sm text-[#df0201] w-[25px]"/>
                            <div className="w-[300px]"><span className="font-bold">Prof. Nema Mirzaei</span>, Istanbul Aydin University, Turkey</div>
                    </div>
                </div> 
                <div className="mt-16">
                    <div className="text-lg font-bold my-6">Organizing Committee</div>
                    <div className="flex items-center text-base space-x-4 font-montserrat">
                            <GoDotFill className="text-sm text-[#df0201] w-[25px]"/>
                            <div className="w-[300px]"><span className="font-bold">Hariyanto, S. T.</span>, Institut Teknologi Sepuluh Nopember, Indonesia</div>
                    </div>
                    <div className="flex items-center text-base space-x-4 font-montserrat mt-2">
                            <GoDotFill className="text-sm text-[#df0201] w-[25px]"/>
                            <div className="w-[300px]"><span className="font-bold">Bagus Putra, S. T., M. T.</span>, Institut Teknologi Sepuluh Nopember, Indonesia</div>
                    </div>
                    <div className="flex items-center text-base space-x-4 font-montserrat mt-2">
                            <GoDotFill className="text-sm text-[#df0201] w-[25px]"/>
                            <div className="w-[300px]"><span className="font-bold">Faizal Ramadhan, S. T.</span>, Institut Teknologi Sepuluh Nopember, Indonesia</div>
                    </div>
                    <div className="flex items-center text-base space-x-4 font-montserrat mt-2">
                            <GoDotFill className="text-sm text-[#df0201] w-[25px]"/>
                            <div className="w-[300px]"><span className="font-bold bg-yellow-500">ITS Tekno Sains Team</span></div>
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

export default Committee
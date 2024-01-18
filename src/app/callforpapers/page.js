'use client'

import Header from "../component/Header"
import Date from "../component/Dates"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import { usePathname } from "next/navigation";
import { GoDotFill } from "react-icons/go";

const Callforpapers = () => {
    const pathname = usePathname()

    return(
        <div>
            <Header/>
            <Navbar pathname={pathname}/>
            <div className="border-b-2 border-gray-300 text-white mx-52">a</div>
            <div className="mx-52 mt-8">
            <div className="w-full h-[400px] bg-yellow-500 text-7xl font-bold text-white">INSERT POSTER HERE</div>
            {/* <div className="text-xl font-bold mb-6">Submit Paper</div> */}
            {/* <div className="text-justify text-xl">
            The iconSET-2024 is a scientific conference organized by experience scientific committee and organizer. During  the conference researcher, student, academic, and industrial practitioners discuss the achievement in the field of engineering and science for sustainable development. In the 1st iconSET 2024, the conference focus on the science and engineering for energy technology for green energy solution. This year conference is co-organized by Centre for materials and nanotechnology ITS and ITS Tekno Sains Academy. 
            </div> */}
            <div className="text-xl font-bold my-6 font-montserrat">Subjects and Topics</div>
            <div className="flex items-center text-lg space-x-4 font-montserrat">
                    <GoDotFill className="text-sm text-[#df0201]"/>
                    <div>Mechanical, material, and chemical science and engineering for energy application</div>
                </div>
            <div className="flex items-center text-lg space-x-4 font-montserrat mt-2">
                    <GoDotFill className="text-sm text-[#df0201]"/>
                    <div>Computational modeling in engineering</div>
                </div>
            <div className="flex items-center text-lg space-x-4 font-montserrat mt-2">
                    <GoDotFill className="text-sm text-[#df0201]"/>
                    <div>Asset integrity for petrochemical and energy application</div>
                </div>
            <div className="flex items-center text-lg space-x-4 font-montserrat mt-2">
                    <GoDotFill className="text-sm text-[#df0201]"/>
                    <div>Application of AI and Data Analytic for engineering solution</div>
                </div>
            <div className="flex items-center text-lg space-x-4 font-montserrat mt-2">
                    <GoDotFill className="text-sm text-[#df0201]"/>
                    <div>Advanced and Functional materials for energy and health</div>
                </div>
            </div> 
            <div className="mt-32 flex">
                <Date/>
            </div>
            <div className="">
                <Footer/>
            </div>
        </div>
    )
}

export default Callforpapers
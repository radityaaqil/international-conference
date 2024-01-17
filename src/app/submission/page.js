'use client'

import Header from "../component/Header"
import Date from "../component/Dates"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import { usePathname } from "next/navigation";
import Link from "next/link"

const Submission = () => {
    const pathname = usePathname()

    return(
        <div className="font-montserrat">
            <Header/>
            <Navbar pathname={pathname}/>
            <div className="border-b-2 border-gray-300 text-white mx-32">a</div>
            <div className="mx-32 mt-8">
            <div className="text-justify text-xl">
                Please prepare an abstract or full paper consisting of introduction, methodology, results, discussion, and conclusion and references. At this point authors can use any format. Later before publication, the authors need to do reformat the manuscript to the publisher requirement (will be announced later).
            </div>
            <div className="text-justify text-xl mt-4">
            Please submit to Easychair system in this <Link href={"www.google.com"}><span className="bg-yellow-500 underline">link</span></Link>
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

export default Submission
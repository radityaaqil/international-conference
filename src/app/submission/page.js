'use client'

import Header from "../component/Header"
import Date from "../component/Dates"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import { usePathname } from "next/navigation";
import Link from "next/link"
import Head from "next/head"

const Submission = () => {
    const pathname = usePathname()

    return(
        <div className="font-montserrat">
            <div className="hidden xl:block">
                <Header pathname={pathname}/>
                <Navbar pathname={pathname}/>
                <div className="border-b-2 border-gray-300 text-white mx-52">a</div>
                <div className="mx-52 mt-8">
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
            <div className="xl:hidden">
                <Header pathname={pathname}/>
                <div className="mx-12">
                    <div className="flex justify-center">
                        <div className="mt-8">
                            <div className="font-bold text-lg">Submission</div>
                            <div className="text-justify text-lg mt-4">
                                Please prepare an abstract or full paper consisting of introduction, methodology, results, discussion, and conclusion and references. At this point authors can use any format. Later before publication, the authors need to do reformat the manuscript to the publisher requirement (will be announced later).
                            </div>
                            <div className="text-justify text-lg mt-4">
                                Please submit to Easychair system in this <Link href={"www.google.com"}><span className="bg-yellow-500 underline">link</span></Link>
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

export default Submission
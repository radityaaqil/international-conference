'use client'

import Header from "../component/Header"
import Date from "../component/Dates"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import { usePathname } from "next/navigation";
import Link from "next/link"
import { GoDotFill } from "react-icons/go";

const QnA = () => {
    const pathname = usePathname()

    return(
        <div className="font-montserrat">
            <div className="hidden xl:block">
                <Header pathname={pathname}/>
                <Navbar pathname={pathname}/>
                <div className="border-b-2 border-gray-300 text-white mx-52">a</div>
                <div className="mx-52 mt-8">
                {/* <div className="text-justify text-xl">
                    Please prepare an abstract or full paper consisting of introduction, methodology, results, discussion, and conclusion and references. At this point authors can use any format. Later before publication, the authors need to do reformat the manuscript to the publisher requirement (will be announced later).
                </div>
                <div className="text-justify text-xl mt-4 flex items-center space-x-5">
                    <div>
                        Please submit to Easychair system here
                    </div>
                    <Link href={"https://easychair.org/account/signin?l=eznQQZHd7ZT3f04Vz2w5WN" } rel="noopener noreferrer" target="_blank"><img className="w-[100px]" src="./logoEC.png"/></Link>
                </div> */}
                <div className="text-lg font-bold">
                    Conference Program for ICONSET 2024
                </div>
                <div className="text-lg text-justify mt-2">
                    To ensure you do not miss any crucial sessions or activities, please find attached the Conference Program for ICONSET 2024. Kindly review it carefully to maximize your participation.
                </div>
                <div className="text-lg font-bold mt-8">
                    Guidelines for Presenters:
                </div>
                <div className="mt-2">
                    <div className="flex items-center text-lg space-x-4 font-montserrat">
                        <GoDotFill className="text-sm text-[#df0201] w-[25px]"/>
                        <div className="w-[900px]">Presenters are required to be ready 10 minutes before the presentation begins</div>
                    </div>
                    <div className="flex items-center text-lg space-x-4 font-montserrat">
                        <GoDotFill className="text-sm text-[#df0201] w-[25px]"/>
                        <div className="w-[900px]">All participants need to use the provided Virtual Background during their presentations. Please find the Virtual Background attached.</div>
                    </div>
                    <div className="flex items-center text-lg space-x-4 font-montserrat">
                        <GoDotFill className="text-sm text-[#df0201] w-[25px]"/>
                        <div className="w-[900px]">The total time allocated for each presenter is 15 minutes, including 10 minutes for the presentation and 5 minutes for discussion.</div>
                    </div>
                    <div className="flex items-center text-lg space-x-4 font-montserrat">
                        <GoDotFill className="text-sm text-[#df0201] w-[25px]"/>
                        <div className="w-[900px]">Presenters will be reminded at the 8-minute and 10-minute marks during their presentations.</div>
                    </div>
                    <div className="flex items-center text-lg space-x-4 font-montserrat">
                        <GoDotFill className="text-sm text-[#df0201] w-[25px]"/>
                        <div className="w-[900px]">A timekeeper is assigned in each room.</div>
                    </div>
                </div>
                <div className="text-lg font-bold mt-8">
                    Virtual Background and Conference Program can be seen here
                </div>
                <div className="text-lg mt-2 text-blue-500 underline">
                    <Link href={"https://drive.google.com/drive/folders/1RVtW81IzDvgZLlGF67hmEGELYZQznVcD?usp=sharing"} rel="noopener noreferrer" target="_blank">
                        https://drive.google.com/drive/folders/1RVtW81IzDvgZLlGF67hmEGELYZQznVcD?usp=sharing
                    </Link>
                </div>
                <div className="text-lg font-bold mt-8">
                    Session Details :
                </div>
                <div className="mt-4">
                    <div className="text-lg">
                        The Zoom Conference link for ICONSET 2024 can be accessed by clicking the link below:
                    </div>
                    <div className="mt-4 text-lg">
                        <div>
                            Topic: iconSET-2024
                        </div>
                        <div>
                            Time: Feb 15, 2024 07:30 AM Jakarta
                        </div>
                    </div>
                    <div className="mt-4 text-lg">
                        <div>
                            Join Zoom Meeting
                        </div>
                        <div className="text-blue-500 underline">
                            <Link href={"https://us06web.zoom.us/j/84496609412?pwd=eu87sMWCeBbVnRg5HR8ak5fHmsgaCP.1"} rel="noopener noreferrer" target="_blank">
                                https://us06web.zoom.us/j/84496609412?pwd=eu87sMWCeBbVnRg5HR8ak5fHmsgaCP.1
                            </Link>
                        </div>
                    </div>
                    <div className="mt-4 text-lg">
                        <div>
                            Meeting ID: 844 9660 9412
                        </div>
                        <div>
                            Passcode: 77777
                        </div>
                    </div>
                    <div className="mt-8 text-lg font-bold">
                        Please rename your Zoom Meeting ID with "Room Number_Presenter Name" before joining the session.
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
            <div className="xl:hidden">
                <Header pathname={pathname}/>
                <div className="mx-12">
                    <div className="flex justify-center">
                        <div className="mt-8">
                            <div className="font-bold text-lg">Program at a Glance</div>
                            <div className="text-base font-bold mt-8">
                                Conference Program for ICONSET 2024
                            </div>
                            <div className="text-base text-justify mt-2">
                                To ensure you do not miss any crucial sessions or activities, please find attached the Conference Program for ICONSET 2024. Kindly review it carefully to maximize your participation.
                            </div>
                            <div className="text-base font-bold mt-8">
                                Guidelines for Presenters:
                            </div>
                            <div className="mt-2">
                                <div className="flex items-center text-base space-x-4 font-montserrat">
                                    <GoDotFill className="text-sm text-[#df0201] w-[25px]"/>
                                    <div className="w-[300px]">Presenters are required to be ready 10 minutes before the presentation begins</div>
                                </div>
                                <div className="flex items-center text-base space-x-4 font-montserrat">
                                    <GoDotFill className="text-sm text-[#df0201] w-[25px]"/>
                                    <div className="w-[300px]">All participants need to use the provided Virtual Background during their presentations. Please find the Virtual Background attached.</div>
                                </div>
                                <div className="flex items-center text-base space-x-4 font-montserrat">
                                    <GoDotFill className="text-sm text-[#df0201] w-[25px]"/>
                                    <div className="w-[300px]">The total time allocated for each presenter is 15 minutes, including 10 minutes for the presentation and 5 minutes for discussion.</div>
                                </div>
                                <div className="flex items-center text-base space-x-4 font-montserrat">
                                    <GoDotFill className="text-sm text-[#df0201] w-[25px]"/>
                                    <div className="w-[300px]">Presenters will be reminded at the 8-minute and 10-minute marks during their presentations.</div>
                                </div>
                                <div className="flex items-center text-base space-x-4 font-montserrat">
                                    <GoDotFill className="text-sm text-[#df0201] w-[25px]"/>
                                    <div className="w-[300px]">A timekeeper is assigned in each room.</div>
                                </div>
                            </div>
                            <div className="text-base font-bold mt-8">
                                Virtual Background and Conference Program can be seen here
                            </div>
                            <div className="text-base mt-2 text-blue-500 underline w-[300px]">
                                <Link href={"https://drive.google.com/drive/folders/1RVtW81IzDvgZLlGF67hmEGELYZQznVcD?usp=sharing"} rel="noopener noreferrer" target="_blank">
                                    https://drive.google.com/drive/folders/1RVtW81IzDvgZLlGF67hmEGELYZQznVcD?usp=sharing
                                </Link>
                            </div>
                            <div className="text-base font-bold mt-8">
                                Session Details :
                            </div>
                            <div className="mt-4">
                                <div className="text-base">
                                    The Zoom Conference link for ICONSET 2024 can be accessed by clicking the link below:
                                </div>
                                <div className="mt-4 text-base">
                                    <div>
                                        Topic: iconSET-2024
                                    </div>
                                    <div>
                                        Time: Feb 15, 2024 07:30 AM Jakarta
                                    </div>
                                </div>
                                <div className="mt-4 text-base">
                                    <div>
                                        Join Zoom Meeting
                                    </div>
                                    <div className="text-blue-500 underline w-[300px]">
                                        <Link href={"https://us06web.zoom.us/j/84496609412?pwd=eu87sMWCeBbVnRg5HR8ak5fHmsgaCP.1"} rel="noopener noreferrer" target="_blank">
                                            https://us06web.zoom.us/j/84496609412?pwd=eu87sMWCeBbVnRg5HR8ak5fHmsgaCP.1
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-4 text-base">
                                    <div>
                                        Meeting ID: 844 9660 9412
                                    </div>
                                    <div>
                                        Passcode: 77777
                                    </div>
                                </div>
                                <div className="mt-8 text-base font-bold">
                                    Please rename your Zoom Meeting ID with "Room Number_Presenter Name" before joining the session.
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

export default QnA
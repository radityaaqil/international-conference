'use client'

import Header from "../component/Header"
import Date from "../component/Dates"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import { usePathname } from "next/navigation";
import Link from "next/link"
import { GoDotFill } from "react-icons/go";

const Registration = () => {
    const pathname = usePathname()

    return(
        <div className="font-montserrat">
            <div className="hidden xl:block">
                <Header pathname={pathname}/>
                <Navbar pathname={pathname}/>
                <div className="border-b-2 border-gray-300 text-white mx-52">a</div>
                <div className="text-justify text-xl mx-52 mt-8">
                    Registration is open till February 13th 2024, by filling the form in this <Link href={"https://forms.gle/o8KczDWk8E5KhVj86"}><span className="underline">link</span></Link>. Payment is obligatory done  before the registration deadline. Abstract submission without the payment will not be scheduled for presentation.  
                </div>
                <div className="mx-52 mt-8">
                    <div className="flex justify-center">
                        <div className="w-[775px]">
                            <div className="mt-8">
                                <div className="text-xl bg-gray-300 p-3 grid grid-cols-2">
                                    <div className="font-bold">Domestic Participant</div>
                                    <div className="grid grid-cols-2">
                                        <div className="font-bold text-center">Early</div>
                                        <div className="font-bold text-center">Late</div>
                                    </div>
                                </div>
                                <div className="text-xl p-3 grid grid-cols-2">
                                    <div className="">Student</div>
                                    <div className="grid grid-cols-2">
                                        <div className="text-center">IDR 3,000,000</div>
                                        <div className="text-center">IDR 3,500,000</div>
                                    </div>
                                </div>
                                <div className="text-xl p-3 grid grid-cols-2">
                                    <div className="">Non-Student</div>
                                    <div className="grid grid-cols-2">
                                        <div className="text-center">IDR 3,500,000</div>
                                        <div className="text-center">IDR 4,000,000</div>
                                    </div>
                                </div>
                                <div className="text-xl p-3 grid grid-cols-2">
                                    <div className="">Visiting*</div>
                                    <div className="flex justify-center">
                                        <div className="">IDR 1,500,000</div>
                                    </div>
                                </div>
                                <div className="text-xl p-3 grid grid-cols-2">
                                    <div className="">Additional Paper**</div>
                                    <div className="flex justify-center">
                                        <div className="">IDR 2,000,000</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <div className="text-xl bg-gray-300 p-3 grid grid-cols-2">
                                    <div className="font-bold">International Participant</div>
                                    <div className="grid grid-cols-2">
                                        <div className="font-bold text-center">Early</div>
                                        <div className="font-bold text-center">Late</div>
                                    </div>
                                </div>
                                <div className="text-xl p-3 grid grid-cols-2">
                                    <div className="">Student</div>
                                    <div className="grid grid-cols-2">
                                        <div className="text-center">USD 400</div>
                                        <div className="text-center">USD 450</div>
                                    </div>
                                </div>
                                <div className="text-xl p-3 grid grid-cols-2">
                                    <div className="">Non-Student</div>
                                    <div className="grid grid-cols-2">
                                        <div className="text-center">USD 450</div>
                                        <div className="text-center">USD 500</div>
                                    </div>
                                </div>
                                <div className="text-xl p-3 grid grid-cols-2">
                                    <div className="">Visiting*</div>
                                    <div className="flex justify-center">
                                        <div className="">USD 250</div>
                                    </div>
                                </div>
                                <div className="text-xl p-3 grid grid-cols-2">
                                    <div className="">Additional Paper**</div>
                                    <div className="flex justify-center">
                                        <div className="">USD 300</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full p-6 bg-gray-300 mt-10">
                                <div className="text-xl font-bold">Terms and Conditions</div>
                                <div className="flex items-center text-lg space-x-4 font-montserrat mt-4">
                                        {/* <GoDotFill className="text-sm text-[#df0201]"/> */}
                                        {/* <div><span className="font-bold">*</span>, Institut Teknologi Sepuluh Nopember, Indonesia</div> */}
                                        <div>*non presenting visitor</div>
                                </div>
                                <div className="flex items-center text-lg space-x-4 font-montserrat">
                                        {/* <GoDotFill className="text-sm text-[#df0201]"/> */}
                                        {/* <div><span className="font-bold">*</span>, Institut Teknologi Sepuluh Nopember, Indonesia</div> */}
                                        <div>**additional 1<sup>st</sup> author paper not the corresponding author</div>
                                </div>
                                <div className="text-xl mt-8 font-bold">Payment</div>
                                <div className="text-lg mt-4">Bank Name : Bank Negara Indonesia (BNI)</div>
                                <div className="text-lg">Account No. : 8050520170</div>
                                <div className="text-lg">Account Holder : PT ITS Tekno Sains</div>
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
                <div className="mx-12">
                    <div className="flex justify-center">
                        <div>
                            <div className="text-lg font-bold mt-8">Registration</div>
                            <div className="mt-4 text-justify">
                                Registration is open till February 13th 2024, by filling the form in this <Link href={"https://forms.gle/o8KczDWk8E5KhVj86"}><span className="underline">link</span></Link>. Payment is obligatory done  before the registration deadline. Abstract submission without the payment will not be scheduled for presentation.  
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full">
                            <div className="mt-8">
                                <div className="text-base bg-gray-300 p-3 grid grid-cols-2">
                                    <div className="font-bold">Domestic Participant</div>
                                    <div className="grid grid-cols-2">
                                        <div className="font-bold text-center">Early</div>
                                        <div className="font-bold text-center">Late</div>
                                    </div>
                                </div>
                                <div className="text-base p-3 grid grid-cols-2">
                                    <div className="">Student</div>
                                    <div className="grid grid-cols-2">
                                        <div className="text-center text-sm">IDR 3,000,000</div>
                                        <div className="text-center text-sm">IDR 3,500,000</div>
                                    </div>
                                </div>
                                <div className="text-base p-3 grid grid-cols-2">
                                    <div className="">Non-Student</div>
                                    <div className="grid grid-cols-2">
                                        <div className="text-center text-sm">IDR 3,500,000</div>
                                        <div className="text-center text-sm">IDR 4,000,000</div>
                                    </div>
                                </div>
                                <div className="text-base p-3 grid grid-cols-2 items-center">
                                    <div className="">Visiting*</div>
                                    <div className="flex justify-center">
                                        <div className="text-sm">IDR 1,500,000</div>
                                    </div>
                                </div>
                                <div className="text-base p-3 grid grid-cols-2 items-center">
                                    <div className="">Additional Paper**</div>
                                    <div className="flex justify-center">
                                        <div className="text-sm">IDR 2,000,000</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <div className="text-base bg-gray-300 p-3 grid grid-cols-2">
                                    <div className="font-bold">International Participant</div>
                                    <div className="grid grid-cols-2">
                                        <div className="font-bold text-center text-sm">Early</div>
                                        <div className="font-bold text-center text-sm">Late</div>
                                    </div>
                                </div>
                                <div className="text-base p-3 grid grid-cols-2">
                                    <div className="">Student</div>
                                    <div className="grid grid-cols-2">
                                        <div className="text-center text-sm">USD 400</div>
                                        <div className="text-center text-sm">USD 450</div>
                                    </div>
                                </div>
                                <div className="text-base p-3 grid grid-cols-2">
                                    <div className="">Non-Student</div>
                                    <div className="grid grid-cols-2">
                                        <div className="text-center text-sm">USD 450</div>
                                        <div className="text-center text-sm">USD 500</div>
                                    </div>
                                </div>
                                <div className="text-base p-3 grid grid-cols-2">
                                    <div className="">Visiting*</div>
                                    <div className="flex justify-center">
                                        <div className="text-sm">USD 250</div>
                                    </div>
                                </div>
                                <div className="text-base p-3 grid grid-cols-2 items-center">
                                    <div className="">Additional Paper**</div>
                                    <div className="flex justify-center">
                                        <div className="text-sm">USD 300</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full p-6 bg-gray-300 mt-10">
                                <div className="text-base font-bold">Terms and Conditions</div>
                                <div className="flex items-center text-base space-x-4 font-montserrat mt-4">
                                        {/* <GoDotFill className="text-sm text-[#df0201]"/> */}
                                        {/* <div><span className="font-bold">*</span>, Institut Teknologi Sepuluh Nopember, Indonesia</div> */}
                                        <div>*non presenting visitor</div>
                                </div>
                                <div className="flex items-center text-base space-x-4 font-montserrat">
                                        {/* <GoDotFill className="text-sm text-[#df0201]"/> */}
                                        {/* <div><span className="font-bold">*</span>, Institut Teknologi Sepuluh Nopember, Indonesia</div> */}
                                        <div>**additional 1<sup>st</sup> author paper not the corresponding author</div>
                                </div>
                                <div className="text-base mt-8 font-bold">Payment</div>
                                <div className="text-base mt-4">Bank Name : Bank Negara Indonesia (BNI)</div>
                                <div className="text-base">Account No. : 8050520170</div>
                                <div className="text-base">Account Holder : PT ITS Tekno Sains</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Date/>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        
    </div>
    )
}

export default Registration
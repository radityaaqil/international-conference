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
        <Header/>
        <Navbar pathname={pathname}/>
        <div className="border-b-2 border-gray-300 text-white mx-52">a</div>
        <div className="mx-52 mt-8">
        <div className="text-justify text-xl">
        Registration is open till February 13th 2024, by filling the form in this <Link href={"https://forms.gle/o8KczDWk8E5KhVj86"}><span className="underline">link</span></Link>. Payment is obligatory done  before the registration deadline. Abstract submission without the payment will not be scheduled for presentation.  
        </div>
        <div className="mt-8">
            <div className="text-xl bg-gray-300 p-3 grid grid-cols-2">
                <div className="font-bold">Domestic Participant</div>
                <div className="grid grid-cols-3">
                    <div></div>
                    <div className="font-bold">Early</div>
                    <div className="font-bold">Late</div>
                </div>
            </div>
            <div className="text-xl p-3 grid grid-cols-2">
                <div className="">Student</div>
                <div className="grid grid-cols-3">
                    <div></div>
                    <div>IDR 3,000,000</div>
                    <div>IDR 3,500,000</div>
                </div>
            </div>
            <div className="text-xl p-3 grid grid-cols-2">
                <div className="">Non-Student</div>
                <div className="grid grid-cols-3">
                    <div></div>
                    <div>IDR 3,500,000</div>
                    <div>IDR 4,000,000</div>
                </div>
            </div>
            <div className="text-xl p-3 grid grid-cols-2">
                <div className="">Visiting*</div>
                <div className="grid grid-cols-2">
                    <div></div>
                    <div>IDR 1,500,000</div>
                </div>
            </div>
            <div className="text-xl p-3 grid grid-cols-2">
                <div className="">Additional Paper**</div>
                <div className="grid grid-cols-2">
                    <div></div>
                    <div>IDR 2,000,000</div>
                </div>
            </div>
        </div>
        <div className="mt-8">
            <div className="text-xl bg-gray-300 p-3 grid grid-cols-2">
                <div className="font-bold">International Participant</div>
                <div className="grid grid-cols-3">
                    <div></div>
                    <div className="font-bold">Early</div>
                    <div className="font-bold">Late</div>
                </div>
            </div>
            <div className="text-xl p-3 grid grid-cols-2">
                <div className="">Student</div>
                <div className="grid grid-cols-3">
                    <div></div>
                    <div>USD 400</div>
                    <div>USD 450</div>
                </div>
            </div>
            <div className="text-xl p-3 grid grid-cols-2">
                <div className="">Non-Student</div>
                <div className="grid grid-cols-3">
                    <div></div>
                    <div>USD 450</div>
                    <div>USD 500</div>
                </div>
            </div>
            <div className="text-xl p-3 grid grid-cols-2">
                <div className="">Visiting*</div>
                <div className="grid grid-cols-2">
                    <div></div>
                    <div>USD 250</div>
                </div>
            </div>
            <div className="text-xl p-3 grid grid-cols-2">
                <div className="">Additional Paper**</div>
                <div className="grid grid-cols-2">
                    <div></div>
                    <div>USD 300</div>
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
        <div className="mt-32 flex">
            <Date/>
        </div>
        <div className="">
            <Footer/>
        </div>
    </div>
    )
}

export default Registration
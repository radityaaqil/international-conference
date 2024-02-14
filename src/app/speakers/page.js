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
                    <div className="flex items-start text-lg space-x-4 font-montserrat">
                            <img className="w-[150px] rounded-full" src="./ismaill.png"/>
                            <div>
                                <div><span className="font-bold">Prof. Mohammad Ismail</span>, Universiti Malaysia Terengganu, Malaysia</div>
                                <div className="mt-2 text-justify text-base">
                                Associate Professor Dr. Mohammad Ismail was awarded a bachelor’s degree in Applied Physics from Universiti Malaya in 2003. In 2008, he was the recipient of SLAI that sponsored for his PhD in Advanced Materials in the University of Wollongong, Australia. He graduated in 2012 with particular distinction where he received Postgraduate Student Merit Awards. Mohammad’s research interest in the field of materials science, particularly in the modification of solid–state hydrogen storage materials such as metal hydride (MgH2, TiH2, LiH, NaH), complex hydride (LiAlH4, NaAlH4, LiBH4, NaBH4) and chemical hydride (NH3BH3) for hydrogen–energy applications. He as the project leader has secured research grants worth nearly RM634,800 comprising 7 research projects funded by FRGS, GGRG, RAGS, TAPE-RG and TPM. This project provide Mohammad a platform to form a research team consisting of 31 students (6 PhD, 5 MSc, 20 BSc) under his supervision for the work involved. He also acts as co researcher for 8 projects (RM668,115). He has published 69 articles in indexed journals (63 ISI Journals (51Q1, 10Q2, 2Q3) and 6 Scopus) and received an H-index of 30 and 1715 citations from Scopus. He has personally presented his work orally in 14 international conferences.

                                </div>
                            </div>
                    </div>
                    {/* <div className="flex items-center text-lg space-x-4 font-montserrat mt-6">
                            <img className="w-[150px] rounded-full" src="./mohannn.png"/>
                            <div><span className="font-bold">Prof. Mohan Kolhe</span>, University of Agder, Norway</div>
                    </div> */}
                    <div className="flex items-start text-lg space-x-4 font-montserrat mt-10">
                            <img className="w-[150px] rounded-full" src="./fahmii.png"/>
                            <div>
                                <div><span className="font-bold">Fahmi Mubarok, PhD</span>, Institut Teknologi Sepuluh Nopember, Indonesia</div>
                                <div className="mt-2 text-justify text-base">
                                Associate Professor Fahmi Mubarok, PhD was awarded a bachelor’s degree in material science from Bandung Institute of Technology (ITB) in 2002, master’s degree in material science from Technical University of Hamburg (TUHH), and PhD from Norwegian University of Science and Technology (NTNU). His research interests include material science, material implant, thermally sprayed silicon carbide coating with metallic matrix, also thermally sprayed ceramic materials with metallic binder. He became Finalis European Inventor Award 2022 from Europan Patent Office (EPO), Munich, Germany.
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
            <div className="xl:hidden">
                <Header pathname={pathname}/>
                <div className="mx-12">
                    <div className="flex justify-center">
                        <div>
                        <div className="mt-8">
                    <div className="text-lg font-bold my-6">Keynote Speakers</div>
                    <div className="flex items-start text-base space-x-4 font-montserrat">
                            <img className="w-[80px] rounded-full" src="./ismaill.png"/>
                            <div>
                                <div><span className="font-bold">Prof. Mohammad Ismail</span>, Universiti Malaysia Terengganu, Malaysia</div>
                                <div className="mt-2 text-sm text-justify">
                                Associate Professor Dr. Mohammad Ismail was awarded a bachelor’s degree in Applied Physics from Universiti Malaya in 2003. In 2008, he was the recipient of SLAI that sponsored for his PhD in Advanced Materials in the University of Wollongong, Australia. He graduated in 2012 with particular distinction where he received Postgraduate Student Merit Awards. Mohammad’s research interest in the field of materials science, particularly in the modification of solid–state hydrogen storage materials such as metal hydride (MgH2, TiH2, LiH, NaH), complex hydride (LiAlH4, NaAlH4, LiBH4, NaBH4) and chemical hydride (NH3BH3) for hydrogen–energy applications. He as the project leader has secured research grants worth nearly RM634,800 comprising 7 research projects funded by FRGS, GGRG, RAGS, TAPE-RG and TPM. This project provide Mohammad a platform to form a research team consisting of 31 students (6 PhD, 5 MSc, 20 BSc) under his supervision for the work involved. He also acts as co researcher for 8 projects (RM668,115). He has published 69 articles in indexed journals (63 ISI Journals (51Q1, 10Q2, 2Q3) and 6 Scopus) and received an H-index of 30 and 1715 citations from Scopus. He has personally presented his work orally in 14 international conferences.
                                </div>
                            </div>
                    </div>
                    {/* <div className="flex items-center text-base space-x-4 font-montserrat mt-8">
                            <img className="w-[80px] rounded-full" src="./mohannn.png"/>
                            <div><span className="font-bold">Prof. Mohan Kolhe</span>, University of Agder, Norway</div>
                    </div> */}
                    <div className="flex items-start text-base space-x-4 font-montserrat mt-8">
                            <img className="w-[80px] rounded-full" src="./fahmii.png"/>
                            <div>
                                <div><span className="font-bold">Fahmi Mubarok, PhD</span>, Institut Teknologi Sepuluh Nopember, Indonesia</div>
                                <div className="mt-2 text-sm text-justify">
                                Associate Professor Fahmi Mubarok, PhD was awarded a bachelor’s degree in material science from Bandung Institute of Technology (ITB) in 2002, master’s degree in material science from Technical University of Hamburg (TUHH), and PhD from Norwegian University of Science and Technology (NTNU). His research interests include material science, material implant, thermally sprayed silicon carbide coating with metallic matrix, also thermally sprayed ceramic materials with metallic binder. He became Finalis European Inventor Award 2022 from Europan Patent Office (EPO), Munich, Germany.
                                </div>
                            </div>
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
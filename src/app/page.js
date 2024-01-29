import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import Date from "./component/Dates"
import Header from "./component/Header"
import Head from "next/head"

export default function Home() {
  return (
    <div className="font-montserrat">
      <div className="hidden xl:block">
        <Header/>
        <Navbar pathname={"/"}/>
        <div className="border-b-2 border-gray-300 text-white mx-48">a</div>
        <div className="mx-52 mt-8">
          <div className="text-xl font-bold mb-3">Introduction</div>
          <div className="text-justify text-xl">
          The iconSET-2024 is a scientific conference organized by experience scientific committee and organizer. During  the conference researcher, student, academic, and industrial practitioners discuss the achievement in the field of engineering and science for sustainable development. In the 1<sup>st</sup> iconSET 2024, the conference focus on the science and engineering for energy technology for green energy solution. This year conference is co-organized by Centre for materials and nanotechnology ITS and ITS Tekno Sains Academy. 
          </div>
          <div className="text-xl font-bold mt-12">Proceedings Publication</div>
          <div className="text-justify text-xl mt-3">
          Papers that are presented in iconSET-2024 will be selected for publications in Scopus-indexed journal proceeding. All manuscript are subjected to further full paper review process as required by the publisher. 
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
          <Header pathname={"/"}/>
          <div className="mt-8 mx-12">
            <div className="flex justify-center">
              <div>
                <div className="text-lg font-bold mb-3">Introduction</div>
                <div className="text-justify text-lg">
                The iconSET-2024 is a scientific conference organized by experience scientific committee and organizer. During  the conference researcher, student, academic, and industrial practitioners discuss the achievement in the field of engineering and science for sustainable development. In the 1<sup>st</sup> iconSET 2024, the conference focus on the science and engineering for energy technology for green energy solution. This year conference is co-organized by Centre for materials and nanotechnology ITS and ITS Tekno Sains Academy. 
                </div>
                <div className="text-lg font-bold mt-12">Proceedings Publication</div>
                <div className="text-justify text-lg mt-3">
                Papers that are presented in iconSET-2024 will be selected for publications in Scopus-indexed journal proceeding. All manuscript are subjected to further full paper review process as required by the publisher. 
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

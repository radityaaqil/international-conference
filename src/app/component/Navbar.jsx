'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = ({pathname}) => {
    // const { isOpen, onOpen, onClose } = useDisclosure();
    
    const [homeActive, setHomeActive] = useState(false)
    const [ceritaActive, setCeritaActive] = useState(false)
    const [testimoniActive, setTestimoniActive] = useState(false)
    const [cekFaktaActive, setCekFaktaActive] = useState(false)
    const [submissionActive, setSubmissionActive] = useState(false)
    const [registrationActive, setRegistrationActive] = useState(false)
    const [committeeActive, setCommitteeActive] = useState(false)

    useEffect(()=>{
        if(pathname === "/"){
            setHomeActive(true)
            setCeritaActive(false)
            setTestimoniActive(false)
            setCekFaktaActive(false)
            setSubmissionActive(false)
            setRegistrationActive(false)
            setCommitteeActive(false)
        }
    
        if(pathname === "/callforpapers"){
            setHomeActive(false)
            setCeritaActive(true)
            setTestimoniActive(false)
            setCekFaktaActive(false)
            setSubmissionActive(false)
            setRegistrationActive(false)
            setCommitteeActive(false)
        }
    
        if(pathname === "/venue"){
            setHomeActive(false)
            setCeritaActive(false)
            setTestimoniActive(true)
            setCekFaktaActive(false)
            setSubmissionActive(false)
            setRegistrationActive(false)
            setCommitteeActive(false)
        }
    
        if(pathname === "/speakers"){
            setHomeActive(false)
            setCeritaActive(false)
            setTestimoniActive(false)
            setCekFaktaActive(true)
            setSubmissionActive(false)
            setRegistrationActive(false)
            setCommitteeActive(false)
        }

        if(pathname === "/submission"){
            setHomeActive(false)
            setCeritaActive(false)
            setTestimoniActive(false)
            setCekFaktaActive(false)
            setSubmissionActive(true)
            setRegistrationActive(false)
            setCommitteeActive(false)
        }

        if(pathname === "/registration"){
            setHomeActive(false)
            setCeritaActive(false)
            setTestimoniActive(false)
            setCekFaktaActive(false)
            setSubmissionActive(false)
            setRegistrationActive(true)
            setCommitteeActive(false)
        }

        if(pathname === "/committee"){
            setHomeActive(false)
            setCeritaActive(false)
            setTestimoniActive(false)
            setCekFaktaActive(false)
            setSubmissionActive(false)
            setRegistrationActive(false)
            setCommitteeActive(true)
        }
    },[pathname])
    

    return(
    <div className='pt-6 lg:mx-52 flex items-center justify-between font-montserrat'>

        {/* Desktop */}
        <div className='hidden md:flex space-x-10 text-lg font-montserrat font-bold'>
            <Link href="/">
                <div className={homeActive ? `text-[#2e3191]` : `text-black`}>Overview</div>
            </Link>
            <Link href="/callforpapers">
                <div className={ceritaActive ? `text-[#2e3191]` : `text-black`}>Call for Papers</div>
            </Link>
            <Link href="/venue">
                <div className={testimoniActive ? `text-[#2e3191]` : `text-black`}>Venue</div>
            </Link>
            <Link href="/speakers">
                <div className={cekFaktaActive ? `text-[#2e3191]` : `text-black`}>Speakers</div>
            </Link>
            <Link href="/committee">
                <div className={committeeActive ? `text-[#2e3191]` : `text-black`}>Committee</div>
            </Link>
            <Link href="/submission">
                <div className={submissionActive ? `text-[#2e3191]` : `text-black`}>Submission</div>
            </Link>
            <Link href="/registration">
                <div className={registrationActive ? `text-[#2e3191]` : `text-black`}>Registration</div>
            </Link>
        </div>
    </div>   
    )
}

export default Navbar;
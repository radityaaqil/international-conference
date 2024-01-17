'use client'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Box,
    Text,
  } from '@chakra-ui/react'
import { TiThMenu } from "react-icons/ti";
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

    useEffect(()=>{
        if(pathname === "/"){
            setHomeActive(true)
            setCeritaActive(false)
            setTestimoniActive(false)
            setCekFaktaActive(false)
            setSubmissionActive(false)
            setRegistrationActive(false)
        }
    
        if(pathname === "/callforpapers"){
            setHomeActive(false)
            setCeritaActive(true)
            setTestimoniActive(false)
            setCekFaktaActive(false)
            setSubmissionActive(false)
            setRegistrationActive(false)
        }
    
        if(pathname === "/venue"){
            setHomeActive(false)
            setCeritaActive(false)
            setTestimoniActive(true)
            setCekFaktaActive(false)
            setSubmissionActive(false)
            setRegistrationActive(false)
        }
    
        if(pathname === "/speakersandcommittee"){
            setHomeActive(false)
            setCeritaActive(false)
            setTestimoniActive(false)
            setCekFaktaActive(true)
            setSubmissionActive(false)
            setRegistrationActive(false)
        }

        if(pathname === "/submission"){
            setHomeActive(false)
            setCeritaActive(false)
            setTestimoniActive(false)
            setCekFaktaActive(false)
            setSubmissionActive(true)
            setRegistrationActive(false)
        }

        if(pathname === "/registration"){
            setHomeActive(false)
            setCeritaActive(false)
            setTestimoniActive(false)
            setCekFaktaActive(false)
            setSubmissionActive(false)
            setRegistrationActive(true)
        }
    },[pathname])
    

    return(
    <div className='pt-6 lg:mx-32 flex items-center justify-between font-montserrat'>
        {/* <Link href="/">
            <div className='text-2xl text-[#1b8694] hover:cursor-pointer'>IC</div>
        </Link> */}

        {/* Mobile */}
        {/* <div className='text-3xl text-[#1b8694] md:hidden' onClick={onOpen}><TiThMenu/></div> */}
        {/* Drawer */}
        {/* <Drawer
            closeOnEsc={true}
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent className='font-introRust'>
            <DrawerHeader>
                <DrawerCloseButton
                size={"lg"}
                mr={3}
                mt={3}
                _focusVisible={false}
                borderRadius="full"
                transitionDuration="500ms"
                />
            </DrawerHeader>

            <DrawerBody className="font-ubuntu">
                <Link href="/">
                <Box
                    color={homeActive ? 'brand.100' : 'black'}
                    fontSize="lg"
                    mt={10}
                    p={4}
                    h={14}
                    onClick={onClose}
                    _hover={{ fontSize: "xl" }}
                    transitionDuration="500ms"
                >
                    <Text>HOME</Text>
                </Box>
                </Link>
                <Link href="/cerita">
                <Box
                    color={ceritaActive ? 'brand.100' : 'black'}
                    fontSize="lg"
                    p={4}
                    h={14}
                    onClick={onClose}
                    _hover={{ fontSize: "xl" }}
                    transitionDuration="500ms"
                >
                    CERITA
                </Box>
                </Link>
                <Link href="/testimoni">
                <Box
                    color={testimoniActive ? 'brand.100' : 'black'}
                    fontSize="lg"
                    p={4}
                    h={14}
                    onClick={onClose}
                    _hover={{ fontSize: "xl" }}
                    transitionDuration="500ms"
                >
                TESTIMONI
                </Box>
                </Link>
            
                <Link href="/cekfakta">
                <Box
                    color={cekFaktaActive ? 'brand.100' : 'black'}
                    fontSize="lg"
                    p={4}
                    h={14}
                    onClick={onClose}
                    _hover={{ fontSize: "xl" }}
                    transitionDuration="500ms"
                >
                    CEK FAKTA
                </Box>
                </Link>
            </DrawerBody>

            <DrawerFooter></DrawerFooter>
            </DrawerContent>
        </Drawer> */}

        {/* Desktop */}
        <div className='hidden md:flex space-x-10 text-lg font-montserrat font-bold'>
            <Link href="/">
                <div className={homeActive ? `text-[#df0201]` : `text-black`}>Overview</div>
            </Link>
            <Link href="/callforpapers">
                <div className={ceritaActive ? `text-[#df0201]` : `text-black`}>Call for Papers</div>
            </Link>
            <Link href="/venue">
                <div className={testimoniActive ? `text-[#df0201]` : `text-black`}>Venue</div>
            </Link>
            <Link href="/speakersandcommittee">
                <div className={cekFaktaActive ? `text-[#df0201]` : `text-black`}>Speakers and Committe</div>
            </Link>
            <Link href="/submission">
                <div className={submissionActive ? `text-[#df0201]` : `text-black`}>Submission</div>
            </Link>
            <Link href="/registration">
                <div className={registrationActive ? `text-[#df0201]` : `text-black`}>Registration</div>
            </Link>
        </div>
    </div>   
    )
}

export default Navbar;
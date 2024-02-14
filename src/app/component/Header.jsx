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

const Header = ({pathname}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [homeActive, setHomeActive] = useState(false)
    const [ceritaActive, setCeritaActive] = useState(false)
    const [testimoniActive, setTestimoniActive] = useState(false)
    const [cekFaktaActive, setCekFaktaActive] = useState(false)
    const [submissionActive, setSubmissionActive] = useState(false)
    const [registrationActive, setRegistrationActive] = useState(false)
    const [committeeActive, setCommitteeActive] = useState(false)
    const [qnaActive, setQnaActive] = useState(false)

    useEffect(()=>{
        if(pathname === "/"){
            setHomeActive(true)
            setCeritaActive(false)
            setTestimoniActive(false)
            setCekFaktaActive(false)
            setSubmissionActive(false)
            setRegistrationActive(false)
            setCommitteeActive(false)
            setQnaActive(false)
        }
    
        if(pathname === "/callforpapers"){
            setHomeActive(false)
            setCeritaActive(true)
            setTestimoniActive(false)
            setCekFaktaActive(false)
            setSubmissionActive(false)
            setRegistrationActive(false)
            setCommitteeActive(false)
            setQnaActive(false)
        }
    
        if(pathname === "/venue"){
            setHomeActive(false)
            setCeritaActive(false)
            setTestimoniActive(true)
            setCekFaktaActive(false)
            setSubmissionActive(false)
            setRegistrationActive(false)
            setCommitteeActive(false)
            setQnaActive(false)
        }
    
        if(pathname === "/speakers"){
            setHomeActive(false)
            setCeritaActive(false)
            setTestimoniActive(false)
            setCekFaktaActive(true)
            setSubmissionActive(false)
            setRegistrationActive(false)
            setCommitteeActive(false)
            setQnaActive(false)
        }

        if(pathname === "/submission"){
            setHomeActive(false)
            setCeritaActive(false)
            setTestimoniActive(false)
            setCekFaktaActive(false)
            setSubmissionActive(true)
            setRegistrationActive(false)
            setCommitteeActive(false)
            setQnaActive(false)
        }

        if(pathname === "/registration"){
            setHomeActive(false)
            setCeritaActive(false)
            setTestimoniActive(false)
            setCekFaktaActive(false)
            setSubmissionActive(false)
            setRegistrationActive(true)
            setCommitteeActive(false)
            setQnaActive(false)
        }

        if(pathname === "/committee"){
            setHomeActive(false)
            setCeritaActive(false)
            setTestimoniActive(false)
            setCekFaktaActive(false)
            setSubmissionActive(false)
            setRegistrationActive(false)
            setCommitteeActive(true)
            setQnaActive(false)
        }

        if(pathname === "/qna"){
            setHomeActive(false)
            setCeritaActive(false)
            setTestimoniActive(false)
            setCekFaktaActive(false)
            setSubmissionActive(false)
            setRegistrationActive(false)
            setCommitteeActive(false)
            setQnaActive(true)
        }
    },[pathname])

    return(
        <div className="">
            <div className="bg-black h-[490px] w-full hidden xl:block">
                <div className="text-4xl flex justify-center items-center space-x-10 pt-32 font-montserrat font-bold text-white">
                    <img src="./batikkkkk.png" className="w-full h-[500px] absolute object-cover -z-99 opacity-10"/>
                    <div className='relative'>
                        <img src="./logoconf.png" className="w-[200px] items-start animate-pulse"/>
                    </div>
                    <div className='relative'>
                        <div className="text-center">The 1<sup>st</sup> International Conference on Science,</div>
                        <div className="text-center">Engineering and Technology (iconSET-2024)</div>
                        <div className="text-center text-xl mt-4">15 - 16 February 2024</div>
                        <div className="text-center text-xl">Surabaya</div>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="xl:hidden bg-black h-[500px] px-12">
                <img src="./batikkkkk.png" className="w-full h-[500px] absolute left-0 object-cover -z-99 opacity-10"/>
                <div className="flex justify-between items-center pt-6 relative">
                    <div className="flex justify-center">
                        <img src="./logoconf.png" className="w-[50px] animate-pulse"/>
                    </div>
                    <div className='text-3xl text-white xl:hidden absolute right-0' onClick={onOpen}><TiThMenu/></div>
                        {/* Drawer */}
                        <Drawer
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
                                    <Text>Overview</Text>
                                </Box>
                                </Link>
                                <Link href="/callforpapers">
                                <Box
                                    color={ceritaActive ? 'brand.100' : 'black'}
                                    fontSize="lg"
                                    p={4}
                                    h={14}
                                    onClick={onClose}
                                    _hover={{ fontSize: "xl" }}
                                    transitionDuration="500ms"
                                >
                                    Call for Papers
                                </Box>
                                </Link>
                                <Link href="/venue">
                                <Box
                                    color={testimoniActive ? 'brand.100' : 'black'}
                                    fontSize="lg"
                                    p={4}
                                    h={14}
                                    onClick={onClose}
                                    _hover={{ fontSize: "xl" }}
                                    transitionDuration="500ms"
                                >
                                Venue
                                </Box>
                                </Link>
                            
                                <Link href="/speakers">
                                <Box
                                    color={cekFaktaActive ? 'brand.100' : 'black'}
                                    fontSize="lg"
                                    p={4}
                                    h={14}
                                    onClick={onClose}
                                    _hover={{ fontSize: "xl" }}
                                    transitionDuration="500ms"
                                >
                                    Speakers
                                </Box>
                                </Link>
                                <Link href="/committee">
                                <Box
                                    color={committeeActive ? 'brand.100' : 'black'}
                                    fontSize="lg"
                                    p={4}
                                    h={14}
                                    onClick={onClose}
                                    _hover={{ fontSize: "xl" }}
                                    transitionDuration="500ms"
                                >
                                    Committee
                                </Box>
                                </Link>
                                <Link href="/submission">
                                <Box
                                    color={submissionActive ? 'brand.100' : 'black'}
                                    fontSize="lg"
                                    p={4}
                                    h={14}
                                    onClick={onClose}
                                    _hover={{ fontSize: "xl" }}
                                    transitionDuration="500ms"
                                >
                                    Submission
                                </Box>
                                </Link>
                                <Link href="/registration">
                                <Box
                                    color={registrationActive ? 'brand.100' : 'black'}
                                    fontSize="lg"
                                    p={4}
                                    h={14}
                                    onClick={onClose}
                                    _hover={{ fontSize: "xl" }}
                                    transitionDuration="500ms"
                                >
                                    Registration
                                </Box>
                                </Link>
                                <Link href="/qna">
                                <Box
                                    color={qnaActive ? 'brand.100' : 'black'}
                                    fontSize="lg"
                                    p={4}
                                    h={14}
                                    onClick={onClose}
                                    _hover={{ fontSize: "xl" }}
                                    transitionDuration="500ms"
                                >
                                    Program at a Glance
                                </Box>
                                </Link>
                            </DrawerBody>

                            <DrawerFooter></DrawerFooter>
                            </DrawerContent>
                        </Drawer>

                </div>
                <div className="text-2xl flex justify-center items-center pt-10 font-montserrat font-bold text-white">
                    <div>
                        {/* <div className="flex justify-center">
                            <img src="./iconsetlogo.png" className="w-[100px]"/>
                        </div> */}
                        <div className="mt-8">
                            <div className="text-center">The 1<sup>st</sup> International Conference on Science,</div>
                            <div className="text-center">Engineering and Technology</div>
                            <div className="text-center">(iconSET-2024)</div>
                            <div className="text-center text-base mt-4">15 - 16 February 2024</div>
                            <div className="text-center text-base">Surabaya</div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Header
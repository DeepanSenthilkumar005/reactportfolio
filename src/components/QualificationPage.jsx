import React from 'react'
import { PiGraduationCap } from "react-icons/pi";
import { BsFillCaretRightFill } from "react-icons/bs";
import { BsFillCaretLeftFill } from "react-icons/bs";

function QualificationPAge() {
  return (
    <section id='Qualification' className="QualificationPage dark:text-white my-6 w-full p-4">
        <div data-aos='fade-up' className="head">
            <div data-aos='fade-up' className="Heading text-2xl stm:text-xxl font-semibold text-center m-2">
                Qualification
            </div>
            <div className="Education flex justify-center mb-4">
                <PiGraduationCap className='flex mt-1 me-2' />
                Education
            </div>
        </div>

        {/* Content */}
        <div className="content flex min-h-48 justify-center">
            {/* Left Content */}
            <div data-aos='fade-right' className="leftcontent my-auto w-full text-right">
                <div className='align-middle'>
                    <div className="HSC">
                        <div className="degree inline font-semibold stm:text-sm">
                            HSC
                        </div>
                        <div className="arrow inline">
                            <BsFillCaretLeftFill className='inline' />
                        </div>
                        <div className="name text-sm stm:text-xs me-4">
                                KSR Matric Hr Sec School
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Line */}
            <div data-aos='zoom-in' className="Middleline border dark:border-white border-black"></div>

            {/* Right Content BE and SSLC Comes Below*/}
            <div className="rightcontent w-full ">
               
                <div  data-aos='fade-left' className="BE">
                    <div className="arrow inline">
                        <BsFillCaretRightFill className='inline' />
                    </div>

                    <div className="degree inline font-semibold stm:text-sm">
                            {/* B.E. Computer Science and Engineering */}
                            B.E. CSE
                    </div>
                    <div className="name text-sm ms-4 stm:text-xs">
                            KSR College of Engineering
                    </div>
                </div>
                
                <div data-aos='fade-left' className="SSLC pt-52 stm:pt-44">
                    <div className="arrow inline">
                        <BsFillCaretRightFill className='inline' />
                    </div>

                    <div className="degree  inline font-semibold stm:text-sm">
                        SSLC
                    </div>
                    <div className="name ms-4 text-sm stm:text-xs">
                        Vani Vidyalaya Matric Hr Sec school
                    </div>
                </div>                    
                              
            </div>            
        </div>    
    </section>    
  )
}

export default QualificationPAge
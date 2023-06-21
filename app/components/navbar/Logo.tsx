"use client"
import Image from 'next/image'
import logo from "@/public/logo.svg"

const Logo = () => {
    return (
        <div className='bg-intensePurple w-fit p-logo rounded-r-[20px]'>
            <Image
                width={40}
                height={40}
                alt='logo'
                src={logo}
            />
        </div>

    )
}

export default Logo
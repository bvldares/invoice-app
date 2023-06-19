"use client"
import Image from 'next/image'
import logo from "@/public/logo.svg"

const Logo = () => {
    return (
        <div>
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
"use client"
import Image from "next/image"
import image from "@/public/avatar.jpg"
const Avatar = () => {
    return (
        <div className="
        p-logo border-l-[2px] lg:border-l-[0px]
         lg:border-t-[2px] border-paleGray">
            <Image
                width={38}
                height={38}
                alt="avatar"
                src={image}
                className="rounded-full"
            />
        </div>
    )
}

export default Avatar
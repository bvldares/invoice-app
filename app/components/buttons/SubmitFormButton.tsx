"use client"

type SubmitFormButton = {
    label: string
    handleClick: () => void
    bgColor: string
    textColor: string
}


const SubmitFormButton: React.FC<SubmitFormButton> = ({ label, handleClick, bgColor, textColor }) => {
    return (
        <button
            onClick={handleClick}
            className={`${textColor} ${bgColor}  rounded-3xl px-[22px] shadow-md py-4 font-bold hover:shadow-xl w-full sm:w-fit`}
        >
            {label}
        </button>
    )
}

export default SubmitFormButton
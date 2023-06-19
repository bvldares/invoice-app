"use client"

import SubmitFormButton from "../buttons/SubmitFormButton"

type FormSubmitter = {
    onSubmit: () => void
}

const FormSubmitter: React.FC<FormSubmitter> = ({ onSubmit }) => {

    return (
        <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-3 mt-20">
            <SubmitFormButton bgColor="bg-white" textColor="text-black/70" label="Discard" handleClick={onSubmit} />
            <div className="ml-auto flex items-center gap-3 w-full sm:w-fit">
                <SubmitFormButton bgColor="bg-[#373B53]" textColor="text-paleGray" label="Save as Draft" handleClick={onSubmit} />
                <SubmitFormButton bgColor="bg-intensePurple" textColor="text-paleGray" label="Save & Send" handleClick={onSubmit} />
            </div>
        </div>
    )
}

export default FormSubmitter
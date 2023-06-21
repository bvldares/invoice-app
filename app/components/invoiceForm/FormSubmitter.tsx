"use client"

import SubmitFormButton from "../buttons/SubmitFormButton"
import useInvoiceStore from "@/store"
type FormSubmitter = {
    save: () => void;
    reset: any
}

const FormSubmitter: React.FC<FormSubmitter> = ({ save, reset }) => {
    const { toggleNewForm } = useInvoiceStore()
    const discard = () => {
        toggleNewForm()
        reset()
    }

    return (
        <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-3 mt-20">
            <SubmitFormButton bgColor="bg-white" textColor="text-black/70" label="Discard" handleClick={() => discard} />
            <div className="ml-auto flex items-center gap-3 w-full sm:w-fit">
                <SubmitFormButton bgColor="bg-[#373B53]" textColor="text-paleGray" label="Save as Draft" handleClick={() => save} />
                <SubmitFormButton bgColor="bg-intensePurple" textColor="text-paleGray" label="Save & Send" handleClick={() => save} />
            </div>
        </div>
    )
}

export default FormSubmitter
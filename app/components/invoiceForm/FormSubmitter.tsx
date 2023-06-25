"use client"

import { data } from "autoprefixer"
import SubmitFormButton from "../buttons/SubmitFormButton"
import useInvoiceStore from "@/store"
import Inputs from "@/types/formTypes"
type FormSubmitter = {
    data: Inputs
    reset: any
}

const FormSubmitter: React.FC<FormSubmitter> = ({ data, reset }) => {
    const { toggleNewForm, setDeliveryStatus } = useInvoiceStore()
    const discard = () => {
        toggleNewForm()
        reset()
    }

    return (
        <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-3 mt-20">
            <button
                type="button"
                className={`text-black/70  bg-white rounded-3xl px-[22px] shadow-md py-4 font-bold hover:shadow-xl w-full sm:w-fit`}
                onClick={() => discard()}
            >
                Discard
            </button>
            <div className="ml-auto flex items-center gap-3 w-full sm:w-fit">
                <SubmitFormButton bgColor="bg-[#373B53]" textColor="text-paleGray" label="Save as Draft" handleClick={() => setDeliveryStatus(false)} />
                <SubmitFormButton bgColor="bg-intensePurple" textColor="text-paleGray" label="Save & Send" handleClick={() => setDeliveryStatus(true)} />
            </div>
        </div>
    )
}

export default FormSubmitter
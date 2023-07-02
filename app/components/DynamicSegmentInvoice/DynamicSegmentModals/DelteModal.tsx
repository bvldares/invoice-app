import supabase from "@/supabase"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
type ModalTypes = {
    toggleDeleteModal: () => void
    id: number

}



const DeleteModal: React.FC<ModalTypes> = ({ toggleDeleteModal, id }) => {
    const router = useRouter()
    const DeleteInvoice = async () => {
        const { data, error } = await supabase
            .from("Invoice")
            .delete()
            .eq('id', id)

        toggleDeleteModal()
        router.back()

    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex">
            <motion.div
                initial={{ translateY: 200, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                exit={{ translateY: 300, opacity: 0 }}
                className="m-auto bg-white p-6 rounded-lg flex justify-center flex-col">
                <h3 className="text-xl">Are you sure you want to delete?</h3>
                <div className="mx-auto mt-6 flex gap-10">
                    <button
                        className="py-3 px-6 rounded-lg bg-gray-200 font-bold tracking-wide"
                        onClick={toggleDeleteModal}
                    >
                        Discard
                    </button>
                    <button
                        onClick={() => DeleteInvoice()}
                        className="py-3 px-6 rounded-lg bg-red font-bold text-white tracking-wide"

                    >
                        Delete
                    </button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default DeleteModal
import supabase from "@/supabase"

type ModalTypes = {
    toggleDeleteModal: () => void
    id: number
}

const DeleteModal: React.FC<ModalTypes> = ({ toggleDeleteModal, id }) => {

    const DeleteInvoice = async () => {
        const { data, error } = await supabase
            .from("Invoice")
            .delete()
            .eq('id', id)
    }



    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex">
            <div className="m-auto bg-white p-6 rounded-lg flex justify-center flex-col">
                <h3 className="text-xl">Are you sure you want to delete?</h3>
                <div className="mx-auto mt-6 flex gap-10">
                    <button
                        className="py-3 px-6 rounded-lg bg-gray-200 font-bold tracking-wide"
                        onClick={toggleDeleteModal}
                    >
                        Discard
                    </button>
                    <button
                        onClick={() => DeleteInvoice}
                        className="py-3 px-6 rounded-lg bg-red font-bold text-white tracking-wide"

                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal
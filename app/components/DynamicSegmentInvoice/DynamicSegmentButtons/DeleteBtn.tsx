"use client"
type DeleteButtonsType = {
    toggleDeleteModal: any
}


const DeleteBtn: React.FC<DeleteButtonsType> = ({ toggleDeleteModal }) => {
    return (
        <button
            onClick={toggleDeleteModal}
            className="btn-invoice bg-red">
            Delete
        </button>

    )
}

export default DeleteBtn
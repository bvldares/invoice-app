"use client"

type EditButton = {
    toggleEditModal: () => void
}

const EditBtn: React.FC<EditButton> = ({ toggleEditModal }) => {

    return (
        <button
            onClick={toggleEditModal}
            className="btn-invoice bg-deepPurple">
            Edit
        </button>

    )
}

export default EditBtn
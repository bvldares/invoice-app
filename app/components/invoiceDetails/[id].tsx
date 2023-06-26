import { useRouter } from 'next/router'

export default function InvoideDetails() {
    const router = useRouter()

    console.log(router)
    return <p>Post: </p>
}
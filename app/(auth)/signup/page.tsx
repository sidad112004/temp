import SignUp from "@/components/authpages/Signup"
import checklogin from "@/action/checklogin/checklogin"
import { redirect } from "next/navigation"

export default async function() {
    const isLoggedIn = await checklogin()

    if (isLoggedIn) {
        redirect('/dashboard')
    }

    return (
        <SignUp />
    )
}

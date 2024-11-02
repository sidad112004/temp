"use server"

import SignUp from "@/components/authpages/Signup"
import checklogin from "@/action/checklogin/checklogin"
import { redirect } from "next/navigation"
import { ReactElement } from "react"

export default async function SignupPage(): Promise<ReactElement> {
    const isLoggedIn = await checklogin()

    if (isLoggedIn) {
        redirect('/dashboard')
    }

    return <SignUp />
}

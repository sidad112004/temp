"use server";

import { redirect } from "next/navigation";
import checklogin from "@/action/checklogin/checklogin";
import Uploadjson from "@/components/uploadjson/Uploadjson";

export default async function UploadJsonPage() {
    const isLoggedIn = await checklogin();

    if (!isLoggedIn) {
        redirect("/start");
        return; // Updated to return nothing after redirect
    }

    return (
        <>
            <Uploadjson />
        </>
    );
}

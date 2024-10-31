import { redirect } from "next/navigation";
import checklogin from "@/action/checklogin/checklogin";
import Myapi from "@/components/myapi/Myapi";
export default async function(){
    const isLoggedIn = await checklogin();

    if (!isLoggedIn) {
        redirect("/start"); 
    }
    return(
        <>
        <Myapi/>
        </>
    )
}
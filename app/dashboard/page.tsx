import Allapi from "@/components/allapi/Allapi"
import { redirect } from "next/navigation";
import checklogin from "@/action/checklogin/checklogin";

export default async function () {

  const isLoggedIn = await checklogin();

  if (!isLoggedIn) {
      redirect("/start/allapi"); 
  }


  return (
    <>
    <Allapi/>
    </>
  )
}
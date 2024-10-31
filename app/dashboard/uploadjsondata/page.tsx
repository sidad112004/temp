import { redirect } from "next/navigation";
import checklogin from "@/action/checklogin/checklogin";
import Uploadjson from "@/components/uploadjson/Uploadjson";

export default async function(){
  const isLoggedIn = await checklogin();

  if (!isLoggedIn) {
      redirect("/start"); 
  }

  return(
    <>
    <Uploadjson/>
    </>
  );
}
import checklogin from "@/action/checklogin/checklogin";
import Startpage from "@/components/startpage/Startpage";

export default async function() {
    await checklogin();
    return (
        <>
        <Startpage/>
        </>
        
    );
}
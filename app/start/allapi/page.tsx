"use server";
import Allapi from "@/components/allapi/Allapi";
import { redirect } from "next/navigation";
import checklogin from "@/action/checklogin/checklogin";

export default async function AllApiPage() {
  const isLoggedIn = await checklogin();

  if (isLoggedIn) {
    redirect("/dashboard");
    return null; // Explicitly return null after redirect
  }

  return (
    <>
      <h1 className="text-3xl font-bold flex justify-center bg-slate-900 pt-4">
        For the customized APIs Login
      </h1>
      <Allapi />
    </>
  );
}

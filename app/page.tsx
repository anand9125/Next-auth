"use client"
import Image from "next/image";
import { Appbar } from "@/component/Appbar";
import { useSession } from "next-auth/react";
export default function Home() {
  const session = useSession();
  return (
   <div>
    <Appbar></Appbar>
    {JSON.stringify(session)}
   </div>
  );
}

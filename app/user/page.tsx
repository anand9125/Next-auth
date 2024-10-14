import { getServerSession } from "next-auth"
import { Appbar } from "@/component/Appbar";
import { NEXT_AUTH } from "../lib/auth";
async function getUser() {
  const session = await getServerSession(NEXT_AUTH);
  return session;
}

export default async function Home() {
  const session = await getUser();

  return (
    <div>
        <Appbar></Appbar>
      {JSON.stringify(session)}
    </div>
  );
}
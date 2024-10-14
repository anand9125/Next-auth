import { log } from "console";
import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import { NEXT_AUTH } from "@/app/lib/auth";
const handler = NextAuth(
 NEXT_AUTH
)

export { handler as GET, handler as POST }
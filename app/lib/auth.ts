import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
 export const NEXT_AUTH= {providers: [
    CredentialsProvider({
        name: 'Email',
        credentials: {
          username: { label: 'email', type: 'text', placeholder: '' },
          password: { label: 'password', type: 'password', placeholder: '' },
        },
        async authorize(credentials: any) {
            
            return {
                id: "1",
                name:"Anand",
                email:"akdon9936@gmail.com",
                
               
            };
        },
      }),  GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
      }), GitHubProvider({
        clientId: process.env.GITHUB_ID || "",
        clientSecret: process.env.GITHUB_SECRET || ""
      })
  ],
  secret: process.env.NEXTAUTH_SECRET,  
  callbacks: {
    async jwt({ token, user}:any) {
    console.log(token)
    token.userId=token.sub
    
      return token
    }
  ,
  session:({session,token,user }:any)=>{
    if(session && session.user){
      session.user.id=token.userId;
   
    }
    return session;
  }
}}
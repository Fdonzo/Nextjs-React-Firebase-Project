import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
//import EmailProvider from 'next-auth/providers/email'

import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
//import { signIn } from "next-auth/react";
//import { useCallback } from "react";

const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } },
});
export default (req, res) =>
  NextAuth(req, res, {
    adapter: PrismaAdapter(prisma),
    //secret:process.env.JWT_SECRET,

    //secret:"Augmented-reality@2022",
    /*
  jwt: {
    // The maximum age of the NextAuth.js issued JWT in seconds.
    // Defaults to `session.maxAge`.
    maxAge: 60 * 60 * 24 * 30,
    // You can define your own encode/decode functions for signing and encryption
    async encode() {},
    async decode() {},
  },
  */
    session: {
      jwt: "true",
      strategy: "jwt",
      maxAge: 2 * 24 * 60 * 60, // 1 day
      updateAge: 24 * 60 * 60,
    },

    jwt: {
      secret: "Augmented-reality@2022",
    },
    providers: [
      // OAuth authentication providers...
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),

      /*
    // Passwordless / email sign in
    EmailProvider({
      server: process.env.MAIL_SERVER,
      from: 'NextAuth.js <no-reply@example.com>'
    }),
    */

      CredentialsProvider({
        async authorize(credentials, req) {
          const { email, password } = req.body;
          console.log(email, password);
          const salt = await bcrypt.genSalt(10);
          const hashPassword = await bcrypt.hash(password, salt);
          let user;
          user = await prisma.user.findFirst({
            where: {
              email: email,
            },
          });
          console.log(user);

          if (user !== null) {
            const isMatch = bcrypt.compare(hashPassword, user.password);
            if (isMatch) {
              console.log("ismatch", user);
              return user;
            } else {
              throw new Error("Password or Email is not correct");
            }
          }
        },
      }),
    ],
    pages: {
      signIn: "/authentication",
    },
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        console.log("user", user);
        console.log("account", account);
        console.log("profile", profile);
        console.log("email", email);
        console.log("credential", credentials);
        //console.log("credential", isNewUser);
        return true;
      },
      async jwt({ token, user, account, profile, isNewUser }) {
        console.log("token-jwt", token);
        console.log("user-jwt", user);
        console.log("account-jwt", account);
        console.log("profile-jwt", profile);
        console.log("isNweuser-jwt", isNewUser);

        //if (account.provider === "google" || account.provider === "facebook") {
        if (isNewUser === true || isNewUser === false) {
          token.isNewUser = isNewUser;
          return token;
        }
        return token;
        //}
      },
      async session({ session, user, token }) {
        console.log("session", session);
        console.log("user-session", user);
        console.log("token", token);
        if (token.isNewUser === true || token.isNewUser === false) {
          session.isNewUser = token.isNewUser;
          return session;
        }
        return session;
      },
    },
  });
/*
callbacks:{
  async signIn({ user, account, profile, credentials, isNewUser }) {
    console.log("user", user)
    console.log("account", account)
    console.log("profile", profile)
    console.log("email", email)
    console.log("credential", credentials)
    console.log("credential", isNewUser)
    const {provider, type} =account
    const{email}=user
    if (provider==="github"||provider==="google"||provider==="facebook"){
      const res = await prisma.user.findFirst({ where:{
        email:email,
      }})
      if(res){
        console.log(res)
        throw new Error(`Only one ${type} account is permitted`) 
        return true
      }
    }


    
  },
  async jwt({ token, user, account, profile, isNewUser }) {
    console.log("token-jwt", token)
    console.log("user-jwt", user)
    console.log("account-jwt", account)
    console.log("profile-jwt", profile)
    console.log("isNweuser-jwt", isNewUser)

},
async session({ session, user, token }) {
  console.log("session", session)
  console.log("user-session", user)
  console.log("token", token)
  if(typeof token !=="undefined"){
  session.user.accessToken=token.accessToken
  session.user.refreshToken=token.refreshToken
  return session
  }
},
}

})
 /*
    pages:{
      signIn: "/authentication",
    },
    
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("user", user)
      console.log("account", account)
      console.log("profile", profile)
      console.log("email", email)
      console.log("credential", credentials)
      return true
    },
    async redirect({ url, baseUrl }) {
      console.log("url", url)
      console.log("baseUrl", baseUrl)
      return url
    },
    
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log("token-jwt", token)
      console.log("user-jwt", user)
      console.log("account-jwt", account)
      console.log("profile-jwt", profile)
      console.log("isNweuser-jwt", isNewUser)
      if(account&&user&&account.type==="credentials"){
       return{ ...token,
        accessToken:account.access_token,
        refreshToken:account.refresh_token

      }
    }
      return token
    },
    async session({ session, user, token }) {
      console.log("session", session)
      console.log("user-session", user)
      console.log("token", token)
      if(typeof token !=="undefined"){
      session.user.accessToken=token.accessToken
      session.user.refreshToken=token.refreshToken
      return session
      }
    },
}

  })
        /*
        else if (user===null){
          if(name){
            try{
              
              user = await prisma.user.create({
                data:{
                  name:name,
                  email:email,
                  password:hashPassword
            }
            
          })
          
          return user

            }catch(err){
              console.log("error", err)
              return err

            }
          }
        }
        
        else{
          throw new Error("You have not sign-up yet!!")
        }
        
      
      console.log("mycredentails", credentials)
      console.log("myreq", req)
    }
    
    
   })
   
  ],
  
  pages:{
    signIn: "/authentication",
  },
  
  callbacks:{
    
    
      jwt: async (token, user) => {
        if (user) {
          token.jwt = user.jwt;
          token.user = user.user;
          token.accessToken = user?.accessToken;
        }
        return Promise.resolve(token);
      },
      session: async (session, token) => {
        session.jwt = token.jwt;
        session.accessToken = token.accessToken ? token.accessToken :
        session.user = token.user ? token.user : session.user; 
        return Promise.resolve(session);
      },
  },
  
  })
    
    /*
useCallback:{
    async jwt({token, user, account}){
      if(user &&account){
        console.log('token', token)
        console.log('account', account)
          
       return{ ...token,
        accessToken: user.token,
        refreshToken: user.refreshToken

      }
      
     
    }
      return token;
    },
  
  
  
    async session({session, token, user}){
      console.log('token1', token),
      console.log('succession', session)
      if(user &&token){
      session.accessToken = token.accessToken;
      return session
    }
  }
  }})


    /*
    async jwt(token, user) {
      console.log("token0", token)
      console.log("user", user)
      if (user) {
        token.accessToken = user.token
        token.refreshToken= user.refreshToken
      }
      console.log("token1", token)
      return token
    },
  
    async session(session, token) {
      console.log("token2", token)
      console.log("user", user)
      session.accessToken = token.accessToken
      console.log("session", session)
      return session
    }
  
  
}})
*/

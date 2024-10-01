//import React from "react";
import { getSession } from "next-auth/react";
//import { useRouter } from "next/router";
//import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
//import AlreadyAuthenticated from "../../components/authentication/existingAuthentication";
import SignInComponent from "../../modules/signIn";
import SignUpComponent from "../../modules/signUp";
//import SignUp from "../../components/signUp";
//import { setHasAlreadySignup } from "../../stores/signup";
function authentication() {
  //const [hasAlreadySignup1, setHasAlreadySignup1] = useState(true);

  const hasAlreadySignup = useSelector(({ signup }) => signup.hasAlreadySignup);

  /*
  const {push}=useRouter()
  
   const { status } = useSession()
   
   useEffect(()=>{
       const securePage = async()=>{
           const session = await getSession()
           if (session ){
               push("/")

           }


       }
       securePage()
      
   },[])


   
  const{data:session, status} =  useSession()
  if(status==="unauthenticated"){
    
   
    return <AlreadyAuthenticated/>
  }
  
   if (status==="loading"||status==="authenticated"){
    return <AlreadyAuthenticated/>
  }
*/

  return <>{hasAlreadySignup ? <SignInComponent /> : <SignUpComponent />}</>;
}

export default authentication;

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}

"use client"
import{signIn,signOut, useSession} from "next-auth/react"
// import { useRouter } from "next/navigation";
export const Appbar=()=>{
    // const router = useRouter();
    const session = useSession();
    return(
        <>
        <button onClick={()=>{
            signIn();
}}>signin</button>
<br />
<button onClick={()=>{
    signOut();
}}>signOut</button>


    {JSON.stringify(session)};
        </>
    );
}
import { ReactNode } from "react";
import { AuthContextProvider }from "../store/auth/authContextProvider";
import { Slot } from "expo-router";

export default function Root(){
    return(
        <AuthContextProvider>
            <Slot/>
        </AuthContextProvider>
    )
}
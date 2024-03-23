"use client"
import { AuthProvider, AuthUserProvider } from "@/context/users/user"

export const Providers = ({ children }) => {
    return (
        <>
            <AuthUserProvider>{children}</AuthUserProvider>
        </>
    )
}
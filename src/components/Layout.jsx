import React from "react";

export default function Layout({ children }) {
    return (
        <>
            <div className=" ">
                <main className="">
                    {children}
                </main>
            </div>
        </>)
}

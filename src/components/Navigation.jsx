"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navigation() {
    const router = useRouter();
    return (
        <>

            <div className="navbar bg-neutral text-neutral-content mb-10 flex justify-between">
                <Link href={"/"} className="btn btn-ghost normal-case text-xl">Task App</Link>
                <button className="btn btn-success" onClick={() => { router.push("/new") }}>New Task</button>
            </div>

        </>
    );
}

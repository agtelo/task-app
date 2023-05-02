'use client'

import { useTasks } from "@/context/TasksContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast"

export default function Page({ params }) {
    const { tasks, createTask, updateTask } = useTasks()
    const router = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    const onSubmit = handleSubmit((data) => {
        if (!params.id) {
            createTask(data.title, data.description)
            toast.custom(
                <div className=" w-auto alert alert-success">
                    <div>
                        <span>Task Created</span>
                    </div>
                </div>
            );
        } else {
            updateTask(params.id, data)
            toast.custom(
                <div className=" w-auto alert alert-info">
                    <div>
                        <span>Task Updated</span>
                    </div>
                </div>
            )
        }
        router.push("/")
    })


    useEffect(() => {
        if (params.id) {
            const taskFound = tasks.find((task) => task.id === params.id);
            if (taskFound) {
                setValue("title", taskFound.title);
                setValue("description", taskFound.description);
            }
        }
    }, []);


    return (<>
        <form onSubmit={onSubmit}>
            <div className="grid justify-center space-y-4">
                <h1 className="text-2xl font-bold text-center">Add a new task</h1>
                <div className="card space-y-4">
                    <input type="text" placeholder="Title" className="input input-bordered input-primary w-full" {...register("title", { required: true })} />
                    {errors.title && (<span className=" text-error">
                        This field is required
                    </span>)}
                    <textarea className="textarea textarea-primary" placeholder="Description" {...register("description", { required: true })}></textarea>
                    {errors.description && (<span className=" text-error">
                        This field is required
                    </span>)}
                </div>
                <button className="btn btn-success">{params.id ? <div>Save</div> : <div>Add</div>}</button>
            </div>
        </form >
    </>);
}

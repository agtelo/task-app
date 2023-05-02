import { useRouter } from 'next/navigation'
import { useTasks } from '@/context/TasksContext';
import { toast } from 'react-hot-toast';


export default function TaskCard({ task }) {
    const router = useRouter();
    const { deleteTask } = useTasks()

    return (
        <>
            <div>
                <div className="card w-96 m-5 bg-primary text-primary-content" onClick={() => router.push(`/edit/${task.id}`)}>
                    <div className="card-body">
                        <h2 className="card-title">{task.title}</h2>
                        <p>{task.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn" onClick={(e) => {
                                e.stopPropagation(),
                                    deleteTask(task.id),
                                    toast.custom(
                                        <div className="w-auto alert alert-error">
                                            <div>
                                                <span>Task Deleted</span>
                                            </div>
                                        </div>
                                    );
                            }}>Delete</button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

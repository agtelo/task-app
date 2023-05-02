'use client'
import { useTasks } from "@/context/TasksContext";
import TaskCard from "@/components/TaskCard";

export default function Home() {
  const { tasks } = useTasks();

  return (
    <>
      <div className="ms-5">
        {tasks < 1 && <div className=" text-lg uppercase text-center font-extrabold">No tienes tareas</div>}
        {tasks.map(task => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </>
  );
}

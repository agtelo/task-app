"use client";

import { useLocalStorage } from "@/hooks/UseLocalStorage";
import { createContext, useContext } from "react";
import { v4 as uuid } from "uuid";

export const TasksContext = createContext();

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) throw new Error("useTasks must used within a provider");
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const createTask = (title, description) => {
    setTasks([
      ...tasks,
      {
        title,
        description,
        id: uuid(),
      },
    ]);
  };

  const updateTask = (id, updatedTask) =>
    setTasks([
      ...tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      ),
    ]);

  const deleteTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)]);
  };

  return (
    <TasksContext.Provider
      value={{ tasks, createTask, deleteTask, updateTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};

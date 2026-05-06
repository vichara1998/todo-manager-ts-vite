import ToDoCard from "./ToDoCard";

export type Priority = "low" | "medium" | "high";

export type listItem = {
  id: number;
  title: string;
  description?: string;
  isCompleted: boolean;
  dueDate?: Date;
  timeStamp?: Date;
  priority?: Priority;
  tag?: string;
};

const listItems: listItem[] = [
  {
    id: 1,
    title: "Finish React todo UI",
    isCompleted: false,
    priority: "low",
  },
  {
    id: 2,
    title: "Add task filtering",
    isCompleted: false,
    priority: "high",
  },
  {
    id: 3,
    title: "Review Tailwind styles",
    isCompleted: true,
    priority: "medium",
  },
  {
    id: 4,
    title: "Connect local storage",
    isCompleted: false,
  },
  {
    id: 5,
    title: "Refactor components",
    isCompleted: true,
  },
  {
    id: 5,
    title: "Refactor components",
    isCompleted: true,
  },
  {
    id: 5,
    title: "Refactor components",
    isCompleted: true,
  },
  {
    id: 5,
    title: "Refactor components",
    isCompleted: true,
  },
  {
    id: 5,
    title: "Refactor components",
    isCompleted: true,
  },
  {
    id: 5,
    title: "Refactor components",
    isCompleted: true,
  },
];

const ToDoList = () => {
  return (
    <div className="relative my-10 h-[70vh]">
      <div className="flex flex-col gap-1 h-full overflow-y-scroll custom-scrollbar pb-20">
        {listItems.map((item, index) => {
          return <ToDoCard key={index} item={item} />;
        })}
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-primary-bg dark:from-primary-bg-dark to-transparent" />
    </div>
  );
};

export default ToDoList;

import { useEffect, useRef, useState } from 'react';
import ToDoCard from './ToDoCard';

export type PriorityType = 'low' | 'mid' | 'high';

export type listItem = {
    id: number;
    title: string;
    isCompleted: boolean;
    dueDate?: Date;
    timestamp?: Date;
    priority?: PriorityType;
    tag?: string;
};

const listItems: listItem[] = [
    {
        id: 1,
        title: 'Finish React todo UI',
        isCompleted: false,
        priority: 'low',
    },
    {
        id: 2,
        title: 'Add task filtering',
        isCompleted: false,
        priority: 'high',
    },
    {
        id: 3,
        title: 'Review Tailwind styles',
        isCompleted: true,
        priority: 'mid',
    },
    {
        id: 4,
        title: 'Connect local storage',
        isCompleted: false,
    },
    {
        id: 5,
        title: 'Refactor components',
        isCompleted: true,
    },
    {
        id: 5,
        title: 'Refactor components',
        isCompleted: true,
    },
    {
        id: 5,
        title: 'Refactor components',
        isCompleted: true,
    },
    {
        id: 5,
        title: 'Refactor components',
        isCompleted: true,
    },
    {
        id: 5,
        title: 'Refactor components',
        isCompleted: true,
    },
    {
        id: 5,
        title: 'Refactor components',
        isCompleted: true,
    },
];

export type ElementSize = {
    width: number;
    height: number;
    top: number;
};

const ToDoList = () => {
    const todoListRef = useRef<HTMLDivElement | null>(null);

    const [todoListSize, setTodoListSize] = useState<ElementSize>({
        width: 0,
        height: 0,
        top: 0,
    });

    useEffect(() => {
        if (!todoListRef.current) return;

        const size = todoListRef.current.getBoundingClientRect();

        const newSize = {
            width: size.width,
            height: size.height,
            top: size.top,
        };

        setTodoListSize(newSize);
    }, []);

    return (
        <div className="relative flex w-full h-[58vh]" ref={todoListRef}>
            <div className="flex flex-col gap-1 w-full h-full overflow-y-scroll custom-scrollbar pb-20">
                {listItems.map((item, index) => {
                    return (
                        <ToDoCard
                            key={index}
                            item={item}
                            todoListSize={todoListSize}
                        />
                    );
                })}
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-primary-bg dark:from-primary-bg-dark to-transparent" />
        </div>
    );
};

export default ToDoList;

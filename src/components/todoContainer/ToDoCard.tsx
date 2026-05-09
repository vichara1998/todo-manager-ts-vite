import { FaFlag } from 'react-icons/fa';
import type { ElementSize, listItem, PriorityType } from './ToDoList';
import { useState } from 'react';
import ContextMenu from './ContextMenu';

type ToDoCardProps = {
    item: listItem;
    todoListSize: ElementSize;
};

export type ClientCursorType = {
    clientX: number;
    clientY: number;
};

const getShortDate = () => {};

const ToDoCard = ({ item, todoListSize }: ToDoCardProps) => {
    const [isContextMenuOpen, setIsContextMenuOpen] = useState<boolean>(false);
    const [clientCursor, setClientCursor] = useState<ClientCursorType>({
        clientX: 0,
        clientY: 0,
    });

    const toggleContextMenu = () => {
        setIsContextMenuOpen((pre) => !pre);
    };

    const getPriorityColor = (priority: PriorityType): string => {
        if (priority == 'low') {
            return 'text-off-green';
        } else if (priority == 'mid') {
            return 'text-off-yellow';
        } else return 'text-off-red';
    };

    const playSuccess = () => {
        const successAudio = new Audio('done.mp3');
        successAudio.volume = 0.7;
        successAudio.play();
    };

    return (
        <div>
            <div
                className="flex justify-between gap-14 rounded-3xl min-h-26 p-6 hover:bg-white cursor-pointer dark:hover:bg-primary-fg-dark"
                onContextMenu={(e) => {
                    e.preventDefault();
                    setClientCursor({ clientX: e.clientX, clientY: e.clientY });
                    toggleContextMenu();
                }}
                onClick={() => {
                    playSuccess();
                }}
            >
                <div className="flex flex-col justify-center items-center">
                    <p className="uppercase font-extrabold text-gray-400 dark:text-primary-bg text-sm tracking-widest">
                        sat
                    </p>
                    <p className="font-special text-primary-fg-dark text-xl dark:text-primary-fg">
                        27
                    </p>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-4">
                    <p className="text-xl text-primary-fg-bold dark:text-primary-bg font-bold">
                        {item.title}
                    </p>
                    <div className="flex items-center gap-5">
                        <p className="text-sm text-gray-400 dark:text-primary-bg inline">
                            San 2, 2.40pm{' '}
                        </p>
                        {item.priority && (
                            <FaFlag
                                className={`${getPriorityColor(item.priority)}`}
                            />
                        )}
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <p className="font-special text-xl text-primary-fg-bold dark:text-primary-bg font-bold">
                        {item.isCompleted ? 'FINITO' : 'NITO'}
                    </p>
                </div>
            </div>
            <div className="bg-primary-fg-faded w-full h-px dark:bg-primary-fg-dark" />
            {isContextMenuOpen && (
                <ContextMenu
                    cursor={clientCursor}
                    toggleContextMenu={toggleContextMenu}
                    todoListSize={todoListSize}
                />
            )}
        </div>
    );
};

export default ToDoCard;

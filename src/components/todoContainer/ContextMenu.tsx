import { useEffect, useRef, useState } from 'react';
import type { ClientCursorType } from './ToDoCard';
import type { ElementSize } from './ToDoList';

type CursorType = {
    cursor: ClientCursorType;
    toggleContextMenu: () => void;
    todoListSize: ElementSize;
};

const ContextMenu = ({
    cursor,
    toggleContextMenu,
    todoListSize,
}: CursorType) => {
    const contextMenuRef = useRef<HTMLDivElement | null>(null);

    const [contextMenuSize, setContextMenuSize] = useState<ElementSize>({
        width: 0,
        height: 0,
        top: 0,
    });

    useEffect(() => {
        if (!contextMenuRef.current) return;
        const size = contextMenuRef.current?.getBoundingClientRect();
        setContextMenuSize((pre) => ({
            ...pre,
            width: size.width,
            height: size.height,
        }));
    }, []);

    const getIsExceedingX = (): boolean => {
        if (cursor.clientX + contextMenuSize.width > todoListSize.width) {
            return true;
        } else {
            return false;
        }
    };

    const getIsExceedingY = (): boolean => {
        if (
            cursor.clientY - todoListSize.top + contextMenuSize.height >
            todoListSize.height - 80
        ) {
            return true;
        } else {
            return false;
        }
    };

    const getTranslate = (): string => {
        if (getIsExceedingY() && getIsExceedingX())
            return 'translate(-100%, -100%)';
        if (getIsExceedingX()) return 'translateX(-100%)';
        if (getIsExceedingY()) return 'translateY(-100%)';

        return 'translate(0, 0)';
    };

    return (
        <div className="z-100">
            <div
                className="fixed w-full h-full top-0 left-0"
                onClick={() => toggleContextMenu()}
                onContextMenu={(e) => {
                    e.preventDefault();
                    toggleContextMenu();
                }}
            ></div>
            <div
                className="fixed bg-white dark:bg-primary-fg-dark border border-primary-fg rounded-2xl p-2 z-110 "
                ref={contextMenuRef}
                style={{
                    top: cursor.clientY,
                    left: cursor.clientX + 20,
                    visibility:
                        contextMenuSize.width === 0 ||
                        contextMenuSize.height === 0
                            ? 'hidden'
                            : 'visible',
                    transform: `${getTranslate()} `,
                }}
            >
                <p className="text-primary-fg-faded h-40 w-80">
                    size: ({contextMenuSize.width}, {contextMenuSize.height}){' '}
                    <br />
                    position: ({cursor.clientX + 20}, {cursor.clientY}) <br />
                    exceedsX:
                    {getIsExceedingX() ? 'true' : 'false'}
                    <br />
                    exceedsY:
                    {getIsExceedingY() ? 'true' : 'false'}
                    <br />
                </p>
            </div>
        </div>
    );
};

export default ContextMenu;

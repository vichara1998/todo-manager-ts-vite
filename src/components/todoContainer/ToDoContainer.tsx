import ToDoList from './ToDoList';
import Header from './Header';
import MiniCalender from './MiniCalender';

const ToDoContainer = () => {
    return (
        <div className="h-[80vh] flex flex-col items-center justify-between">
            <div className="w-full">
                <Header />
                <MiniCalender />
            </div>
            <ToDoList />
        </div>
    );
};

export default ToDoContainer;

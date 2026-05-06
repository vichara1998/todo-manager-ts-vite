import CenterConsole from './components/centerConsole/CenterConsole';
import Header from './components/Header';
import ToDoContainer from './components/todoContainer/ToDoContainer';

function App() {
    return (
        <div className="h-screen px-20 py-10 bg-primary-bg font-primary dark:bg-primary-bg-dark">
            <Header />
            <ToDoContainer />
            <CenterConsole />
        </div>
    );
}

export default App;

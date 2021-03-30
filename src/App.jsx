import Header from "./components/Header";
import TasksList from "./components/TasksList";
import TodoListProvider from "./contexts/TodoListContext";

function App() {
  return (
    <TodoListProvider>
      <Header />
      <TasksList />
    </TodoListProvider>
  );
}

export default App;
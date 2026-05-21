import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";

function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <TaskForm />
    </div>
  );
}

export default Home;
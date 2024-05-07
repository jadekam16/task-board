import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import TaskList from "./pages/TaskList"
import AddTask from "./pages/AddTask"
import AddUser from "./pages/AddUser"

function App() {
  const addTaskSubmit = async(newTask) => {
    const res = await fetch('http://localhost:8000/tickets', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    });
    return;
  }

  const addUserSubmit = async(newUser) => {
    const res = await fetch('http://localhost:8000/users', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });
    return;
  }

  // CHECK THIS
  const deleteTask = async(id) => {
    const res = await fetch(`http://localhost:8000/tickets?id=${id}`, {
      method: 'DELETE'
    })
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/tasks" element={<TaskList/>}/>
        <Route path="/add-task" element={<AddTask addTaskSubmit={addTaskSubmit}/>}/>
        <Route path="/add-user" element={<AddUser addUserSubmit={addUserSubmit}/>}/>
      </Route>
    )
  )
  return <RouterProvider router={router}/>
}

export default App

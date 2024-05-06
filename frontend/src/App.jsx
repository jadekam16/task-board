import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import TaskList from "./pages/TaskList"
import AddTask from "./pages/AddTask"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/tasks" element={<TaskList/>}/>
        <Route path="/add-task" element={<AddTask/>}/>
      </Route>
    )
  )
  return <RouterProvider router={router}/>
}

export default App

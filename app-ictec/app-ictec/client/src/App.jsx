import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AuthProvider} from './context/AuthContext';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import TasksPage from './pages/TasksPage';
import TaskFormPage from './pages/TaskFormPage';
import ProfilePage from './pages/ProfilePage';
import MonofasicoPage from './pages/MonofasicoPage';
import TrifasicoPage from './pages/TrifasicoPage';

import ProtectedRoute from './ProtectedRoute';
import { TaskProvider } from './context/TasksContext';


function App(){
  return(
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element = {<LoginPage/>} />
          <Route path='/register' element = {<RegisterPage/>} />

          <Route element={<ProtectedRoute/>}>
            <Route path='/tasks' element = {<TasksPage />} />
            <Route path='/add-tasks' element = {<TaskFormPage/>} />
            <Route path='/tasks/:id' element = {<TaskFormPage/>} />
            <Route path='/profile' element = {<ProfilePage/>} />
            <Route path="/monofasico" element={<MonofasicoPage />} />
            <Route path="/trifasico" element={<TrifasicoPage />} />
          </Route>
        </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  )
}
export default App
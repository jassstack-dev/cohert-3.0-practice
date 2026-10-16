
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import { DataContextApi } from './context/DataContext.jsx'
  import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
<DataContextApi>
   <AppRoutes/>
   <ToastContainer/>
</DataContextApi>
)

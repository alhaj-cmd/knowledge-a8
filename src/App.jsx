
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Question from './component/Questions/Question';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  

  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <ToastContainer />
      <Question></Question>
    
    </div>
  )
}

export default App

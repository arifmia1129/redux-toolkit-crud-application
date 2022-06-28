import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import AddStudent from './features/students/AddStudent';
import EditStudent from './features/EditStudent';
import StudentsView from './features/students/StudentsView';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-student' element={<AddStudent />} />
        <Route path='/edit-student' element={<EditStudent />} />
        <Route path='/students' element={<StudentsView />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

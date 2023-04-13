import './App.css';
import 'swiper/css/bundle';
import { Routes, Route } from 'react-router-dom';
import Main from 'pages/Main';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

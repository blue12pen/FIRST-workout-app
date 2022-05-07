import { Routes, Route } from 'react-router-dom';
import Header from './components/1-header/Header';
import StartPage from './pages/StartPage';
import TodayPage from './pages/TodayPage';
import { DayProvider } from './context/dayContext';

function App() {
  return (
    <DayProvider>
      <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/today" element={<TodayPage />} />
      </Routes>
    </DayProvider>
  );
}

export default App;

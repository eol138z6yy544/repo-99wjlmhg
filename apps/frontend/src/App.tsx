import { Routes, Route, Navigate } from 'react-router-dom';
import Splash from './components/Splash';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Friends from './pages/Friends';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/app/home" element={<Home />} />
      <Route path="/app/leader" element={<Leaderboard />} />
      <Route path="/app/friend" element={<Friends />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

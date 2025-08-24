import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SendRemittance from './components/SendRemittance';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/send" element={<SendRemittance />} />
      </Routes>
    </Router>
  );
}

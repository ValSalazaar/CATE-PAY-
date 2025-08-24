import { useNavigate } from 'react-router-dom';
import { user } from '../mockData';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Bienvenida, {user.name} 👋
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-6 shadow-lg"
      >
        <p className="text-sm">Créditos disponibles</p>
        <h2 className="text-4xl font-bold mt-2">₡{user.credits}</h2>
      </motion.div>

      <div className="mt-8 space-y-4">
        <button
          onClick={() => navigate('/send')}
          className="w-full bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Enviar remesa 💸
        </button>
        <div className="text-sm text-gray-500 mt-4">
          Certificaciones validadas: {user.certifications.join(', ')}
        </div>
      </div>
    </div>
  );
}

import { useNavigate } from 'react-router-dom';
import { user } from '../mockData';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-10">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-800 mb-6"
      >
        Bienvenida, {user.name} 👋
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gradient-to-r from-[#007AFF] to-[#8E44AD] text-white rounded-2xl p-8 shadow-2xl mb-8"
      >
        <p className="text-sm text-blue-100 font-medium mb-2">Créditos disponibles</p>
        <h2 className="text-5xl font-bold mb-4">₡{user.credits.toLocaleString()}</h2>
        <div className="flex items-center text-blue-100 text-sm">
          <span className="mr-2">●</span>
          <span>Disponible para envío inmediato</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-4"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/send')}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 font-semibold text-lg"
        >
          Enviar remesa 💸
        </motion.button>
        
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Certificaciones validadas</h3>
          <div className="flex flex-wrap gap-2">
            {user.certifications.map((cert, index) => (
              <motion.span
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

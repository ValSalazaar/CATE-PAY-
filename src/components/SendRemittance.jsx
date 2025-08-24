import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function SendRemittance() {
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-10">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-800 mb-8"
      >
        Enviar remesa
      </motion.h1>

      {!sent ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-xl"
        >
          <motion.form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => navigate('/'), 3000);
            }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nombre del destinatario
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Ingresa el nombre completo"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-4 text-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Monto a enviar
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="number"
                placeholder="₡0.00"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-4 text-lg focus:border-blue-500 focus:outline-none transition-all duration-200"
                required
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 font-semibold text-lg"
            >
              Enviar ahora
            </motion.button>
          </motion.form>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <span className="text-3xl">✓</span>
          </motion.div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-4">¡Remesa enviada con éxito! 🎉</h2>
          <p className="text-lg text-gray-600 mb-6">Tu destinatario recibirá los fondos en breve.</p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4"
          >
            <p className="text-sm text-gray-600">
              Redirigiendo al dashboard en unos segundos...
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

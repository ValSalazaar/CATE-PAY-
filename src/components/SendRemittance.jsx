import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function SendRemittance() {
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-xl font-semibold text-gray-800 mb-6">Enviar remesa</h1>

      {!sent ? (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => navigate('/'), 3000); // Regresa al dashboard
          }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Nombre del destinatario"
            className="w-full border rounded-lg px-4 py-3"
            required
          />
          <input
            type="number"
            placeholder="Monto a enviar"
            className="w-full border rounded-lg px-4 py-3"
            required
          />
          <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition">
            Enviar ahora
          </button>
        </motion.form>
      ) : (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <h2 className="text-2xl font-bold text-green-600">¡Remesa enviada con éxito! 🎉</h2>
          <p className="mt-2 text-gray-600">Tu destinatario recibirá los fondos en breve.</p>
        </motion.div>
      )}
    </div>
  );
}

import { motion } from 'framer-motion'
import TransactionCard from './TransactionCard.jsx'
import LoadingSpinner from './LoadingSpinner.jsx'
import UserProfile from './UserProfile.jsx'
import RemittanceForm from './RemittanceForm.jsx'
import ImpactHistory from './ImpactHistory.jsx'

export default function Dashboard() {
  const transactions = [
    { name: 'Curso de Electricidad', amount: 300, date: '23 ago 2025' },
    { name: 'Remesa enviada', amount: -500, date: '22 ago 2025' },
    { name: 'Certificación aprobada', amount: 1400, date: '20 ago 2025' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-md mx-auto mt-10 px-4"
    >
      <UserProfile />
      
      <div className="mb-6">
        <LoadingSpinner />
      </div>

      <div className="bg-gradient-to-br from-[#007AFF] to-[#8E44AD] rounded-2xl p-6 shadow-2xl text-white mb-6">
        <h1 className="text-2xl font-semibold mb-2">CATE PAY</h1>
        <h2 className="text-5xl font-bold tracking-tight mb-2">₡1,200</h2>
        <p className="text-sm text-gray-200">Créditos disponibles</p>
      </div>

      <RemittanceForm />
      
      <h3 className="text-white text-lg font-semibold mb-2 mt-6">Actividad reciente</h3>
      {transactions.map((tx, i) => (
        <TransactionCard key={i} {...tx} />
      ))}

      <ImpactHistory />
    </motion.div>
  )
}

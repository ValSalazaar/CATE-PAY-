import { useState } from 'react'
import ConfirmationCard from './ConfirmationCard.jsx'

export default function RemittanceForm() {
  const [amount, setAmount] = useState('')
  const [error, setError] = useState('')
  const [confirmed, setConfirmed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setError('Ingresa un monto válido')
      return
    }
    setError('')
    setConfirmed(true)
  }

  return (
    <div>
      {!confirmed ? (
        <form onSubmit={handleSubmit} className="bg-gray-900 p-4 rounded-xl shadow-md">
          <label className="block text-white mb-2">Monto a enviar</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="₡0.00"
          />
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
          <button
            type="submit"
            className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl transition"
          >
            Enviar remesa
          </button>
        </form>
      ) : (
        <ConfirmationCard amount={amount} />
      )}
    </div>
  )
}

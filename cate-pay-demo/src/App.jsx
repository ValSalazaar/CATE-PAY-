import Dashboard from "./components/Dashboard"
import SendRemittance from "./components/SendRemittance"
import Confirmation from "./components/Confirmation"

function App() {
  return (
    <div className="bg-revolutGray min-h-screen">
      <Dashboard />
      <SendRemittance />
      <Confirmation />
    </div>
  )
}

export default App

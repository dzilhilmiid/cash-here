import { Routes, Route } from "react-router-dom"
import UserLayout from "./components/UserLayout"
import Dashboard from "./pages/Dashboard"
import Income from "./pages/Income"
import Expense from "./pages/Expense"
import Transfer from "./pages/Transfer"
import Report from "./pages/Report"
import Budget from "./pages/Budget"

function App() {
  return (
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="expense" element={<Expense />} />
          <Route path="transfer" element={<Transfer />} />
          <Route path="report" element={<Report />} />
          <Route path="budget" element={<Budget />} />
        </Route>
      </Routes>
  )
}

export default App
import './App.css'
import AppRoutes from './routes/AppRoutes'
import ThemeDefault from './configs/theme/ThemeDefault'

function App() {
  return (
    <ThemeDefault>
      <AppRoutes/>
    </ThemeDefault>
  )
}

export default App

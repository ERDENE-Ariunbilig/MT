import SidebarLeft from './components/SidebarLeft'
import MainContent from './components/MainContent'
import SidebarRight from './components/SidebarRight'
import './App.css'

function App() {
  return (
    <div className="container">
      <SidebarLeft />
      <MainContent />
      <SidebarRight />
    </div>
  )
}

export default App

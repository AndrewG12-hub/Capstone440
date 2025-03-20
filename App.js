import DashboardSideBar from './sidebar';
import HealthAlerts from './alert';
import ChatGPT from './chatGPT';
import StatChart from './chart';
import './App.css';


function App() {
  return (
    <div className="App">            
      <DashboardSideBar/>
      <HealthAlerts />
      <ChatGPT />
      <StatChart />
    </div>
    
  );
}

export default App;

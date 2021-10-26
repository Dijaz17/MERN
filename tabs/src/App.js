import './App.css';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs tabItems={[{header: 'Tab 1', content: 'Tab 1 content'}, {header: 'Tab 2', content: 'Tab 2 content'}, {header: 'Tab 3', content: 'Tab 3 content'}, {header: 'Tab 4', content: 'Tab 4 content'}]}/>
    </div>
  );
}

export default App;

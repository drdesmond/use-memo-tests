import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { PropsChangesTest, StatesChangesTest } from './Experiments';
import { HomePage, NotFound } from './Pages';

function App() {
  return (
    <Router>
       <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/404" element={<NotFound />} />
            <Route path='/propschangestest' element={<PropsChangesTest/>} />
            <Route path="/stateschangestest" element={<StatesChangesTest />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
            </Routes>
      </Router>)
}

export default App;

```javascript
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
    navigate('/about');
  };
  
  return (
    <div>
      <h1>Home Page</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Navigate to About</button>
    </div>
  );
}

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  );
}
export default App; 
```
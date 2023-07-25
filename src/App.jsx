import { useState, useEffect } from "react";
import './App.css'
import Introduction from './components/Introduction'
import DadJokes from "./components/DadJokes";


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, []);

  if (loading) {
    return (
      <Introduction />
    )
  }
  return (
    <>
      <DadJokes />
    </>
  )
}

export default App

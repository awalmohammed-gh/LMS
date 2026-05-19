import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LearningContextProvider } from './context/LearningContextProvider.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LearningContextProvider>
      <App />
    </LearningContextProvider>
  </StrictMode>,
);

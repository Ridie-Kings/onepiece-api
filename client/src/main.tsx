import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/sw.js')
//       .then(registration => {
//         console.log('Service Worker registrado exitosamente:', registration);
//       })
//       .catch(error => {
//         console.error('Error al registrar el Service Worker:', error);
//       });
//   });
// }

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

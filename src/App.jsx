import { useState } from 'react';
import PasswordStrength from './components/PasswordStrength';
import AdvancedPanel from './components/AdvancedPanel';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [mostrarAvanzado, setMostrarAvanzado] = useState(false);
  const [settings, setSettings] = useState({
    length: 12,
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true
  });

  const toggleVisibility = () => setVisible(!visible);

  const generarAleatoria = () => {
    const { length, lowercase, uppercase, numbers, symbols } = settings;

    const min = lowercase || uppercase || numbers || symbols;
    if (!min) {
      alert("Seleccioná al menos una opción.");
      return;
    }

    let caracteres = '';
    if (lowercase) caracteres += 'abcdefghijklmnopqrstuvwxyz';
    if (uppercase) caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numbers) caracteres += '0123456789';
    if (symbols) caracteres += '!@#$%^&*()_+-=';

    let nueva = '';
    for (let i = 0; i < length; i++) {
      nueva += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    setPassword(nueva);
  };

  const copiarAlPortapapeles = async () => {
    try {
      await navigator.clipboard.writeText(password);
      alert("¡Contraseña copiada!");
    } catch (err) {
      alert("No se pudo copiar la contraseña.");
    }
  };

  return (
    <div className="app">
      <h1>Evaluador de Fortaleza de Contraseña</h1>

      <div className="password-input">
        <input
          type={visible ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingresá tu contraseña"
        />
        <button onClick={toggleVisibility}>
          {visible ? 'Ocultar' : 'Mostrar'}
        </button>
      </div>

      {password && <PasswordStrength password={password} />}

      <div className="password-controls">
        <button onClick={copiarAlPortapapeles}>Copiar</button>
        <button onClick={generarAleatoria}>Generar Aleatoria</button>
        <button onClick={() => setMostrarAvanzado(!mostrarAvanzado)}>
          {mostrarAvanzado ? 'Ocultar opciones avanzadas' : 'Mostrar opciones avanzadas'}
        </button>
      </div>

      {mostrarAvanzado && (
        <AdvancedPanel settings={settings} setSettings={setSettings} />
      )}
    </div>
  );
}

export default App;

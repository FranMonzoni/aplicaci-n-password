import { useState } from 'react';

function PasswordControls({ password, setPassword, toggleAdvanced, settings }) {
  const [copiado, setCopiado] = useState(false);

  const copiarAlPortapapeles = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 3000);
    } catch (err) {
      alert("No se pudo copiar la contraseña");
    }
  };

  const generarPassword = () => {
    const { length, lowercase, uppercase, numbers, symbols } = settings;
  
    let caracteres = '';
    if (lowercase) caracteres += 'abcdefghijklmnopqrstuvwxyz';
    if (uppercase) caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numbers) caracteres += '0123456789';
    if (symbols) caracteres += '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
    if (caracteres.length === 0) {
      alert("Seleccioná al menos un tipo de carácter");
      return;
    }
  
    let nueva = '';
    for (let i = 0; i < length; i++) {
      nueva += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
  
    setPassword(nueva);
  };
  

  return (
    <div className="password-controls">
      <button onClick={copiarAlPortapapeles}>Copiar</button>
      <button onClick={generarPassword}>Generar Aleatoria</button>
      <button onClick={toggleAdvanced}>Panel Avanzado</button>
      {copiado && <p className="copiado-msg">¡Contraseña copiada!</p>}
    </div>
  );
}

export default PasswordControls;

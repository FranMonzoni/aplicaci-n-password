import { useState } from 'react';

function PasswordInput({ password, setPassword }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="password-input">
      <input
        type={visible ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Ingresá tu contraseña"
      />
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Ocultar' : 'Mostrar'}
      </button>
    </div>
  );
}

export default PasswordInput;

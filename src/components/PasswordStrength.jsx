import React from 'react';
import './PasswordStrength.css';


function calcularFortaleza(password) {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[@$!%*?&#._\-]/.test(password)) score++;

  if (score <= 1) return { texto: "Muy débil", color: "#ff4d4d", porcentaje: 20 };
  if (score === 2) return { texto: "Débil", color: "#ff944d", porcentaje: 40 };
  if (score === 3) return { texto: "Aceptable", color: "#ffcc00", porcentaje: 60 };
  if (score === 4) return { texto: "Segura", color: "#99cc00", porcentaje: 80 };
  return { texto: "Muy segura", color: "#00cc66", porcentaje: 100 };
}

function PasswordStrength({ password }) {
  const { texto, color, porcentaje } = calcularFortaleza(password);

  return (
    <div className="password-strength">
      <p><strong>Fortaleza:</strong> {texto}</p>
      <div className="barra-container">
        <div
          className="barra"
          style={{
            width: `${porcentaje}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}

export default PasswordStrength;

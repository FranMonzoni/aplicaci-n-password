function AdvancedPanel({ settings, setSettings }) {
    const handleChange = (e) => {
      const { name, type, checked, value } = e.target;
      setSettings({
        ...settings,
        [name]: type === 'checkbox' ? checked : Number(value)
      });
    };
  
    return (
      <div className="advanced-panel">
        <h3>Configuración avanzada</h3>
  
        <label>
          Largo:
          <input
            type="number"
            name="length"
            value={settings.length}
            onChange={handleChange}
            min={4}
          />
        </label>
  
        <label>
          <input
            type="checkbox"
            name="lowercase"
            checked={settings.lowercase}
            onChange={handleChange}
          />
          Incluir minúsculas
        </label>
  
        <label>
          <input
            type="checkbox"
            name="uppercase"
            checked={settings.uppercase}
            onChange={handleChange}
          />
          Incluir mayúsculas
        </label>
  
        <label>
          <input
            type="checkbox"
            name="numbers"
            checked={settings.numbers}
            onChange={handleChange}
          />
          Incluir números
        </label>
  
        <label>
          <input
            type="checkbox"
            name="symbols"
            checked={settings.symbols}
            onChange={handleChange}
          />
          Incluir símbolos
        </label>
      </div>
    );
  }
  
  export default AdvancedPanel;
  
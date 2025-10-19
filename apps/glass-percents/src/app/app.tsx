import { useState } from 'react';
import './app.css';
import {
  usePercentageOf,
  useWhatPercent,
  usePercentageChange,
  useFindWhole,
  usePercentageDifference,
  type CalculatorResult,
} from './hooks/useCalculators';

interface CalculatorCardProps extends CalculatorResult {}

function CalculatorCard({ title, inputs, result, resultLabel = 'Result' }: CalculatorCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (result !== null) {
      navigator.clipboard.writeText(result.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="glass-card">
      <h2 className="card-title">{title}</h2>

      <div className="inputs-container">
        {inputs.map((input, index) => (
          <div key={index} className="input-group">
            <label className="input-label">{input.label}</label>
            <div className="input-wrapper">
              <input
                type="number"
                className="glass-input"
                value={input.value}
                onChange={(e) => input.onChange(e.target.value)}
                placeholder="0"
              />
              {input.suffix && <span className="input-suffix">{input.suffix}</span>}
            </div>
          </div>
        ))}
      </div>

      <div className="divider"></div>

      <div className="result-container">
        <div className="result-label">{resultLabel}:</div>
        <div className="result-value">
          {result !== null && !isNaN(result) ? result.toFixed(2) : '—'}
        </div>
        {result !== null && !isNaN(result) && (
          <button className="copy-button" onClick={handleCopy} title="Copy to clipboard">
            {copied ? '✓' : '📋'}
          </button>
        )}
      </div>
    </div>
  );
}

export function App() {
  const calculator1 = usePercentageOf();
  const calculator2 = useWhatPercent();
  const calculator3 = usePercentageChange();
  const calculator4 = useFindWhole();
  const calculator5 = usePercentageDifference();

  return (
    <div className="app-container">
      <div className="background-gradient"></div>

      <header className="app-header">
        <h1 className="app-title">Glassmorphic Percentage Calculator</h1>
        <p className="app-subtitle">Beautiful calculations with frosted glass aesthetics</p>
      </header>

      <div className="cards-grid">
        <CalculatorCard {...calculator1} />
        <CalculatorCard {...calculator2} />
        <CalculatorCard {...calculator3} />
        <CalculatorCard {...calculator4} />
        <CalculatorCard {...calculator5} />
      </div>

      <footer className="app-footer">
        <p>Built with React + Vite • Glassmorphic Design</p>
      </footer>
    </div>
  );
}

export default App;

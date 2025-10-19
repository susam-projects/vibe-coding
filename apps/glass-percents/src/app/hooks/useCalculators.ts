import { useState, useMemo } from 'react';

export interface CalculatorInput {
  label: string;
  value: string;
  onChange: (value: string) => void;
  suffix?: string;
}

export interface CalculatorResult {
  title: string;
  inputs: CalculatorInput[];
  result: number | null;
  resultLabel?: string;
}

/**
 * Hook for "What is X% of Y?" calculator
 */
export function usePercentageOf(): CalculatorResult {
  const [percent, setPercent] = useState('');
  const [value, setValue] = useState('');

  const result = useMemo(() => {
    if (!percent || !value) return null;
    return (parseFloat(percent) / 100) * parseFloat(value);
  }, [percent, value]);

  return {
    title: 'What is X% of Y?',
    inputs: [
      { label: 'Percentage', value: percent, onChange: setPercent, suffix: '%' },
      { label: 'Value', value: value, onChange: setValue },
    ],
    result,
    resultLabel: 'Result',
  };
}

/**
 * Hook for "X is what % of Y?" calculator
 */
export function useWhatPercent(): CalculatorResult {
  const [part, setPart] = useState('');
  const [whole, setWhole] = useState('');

  const result = useMemo(() => {
    if (!part || !whole || parseFloat(whole) === 0) return null;
    return (parseFloat(part) / parseFloat(whole)) * 100;
  }, [part, whole]);

  return {
    title: 'X is what % of Y?',
    inputs: [
      { label: 'Part', value: part, onChange: setPart },
      { label: 'Whole', value: whole, onChange: setWhole },
    ],
    result,
    resultLabel: 'Percentage',
  };
}

/**
 * Hook for "Increase/Decrease by X%" calculator
 */
export function usePercentageChange(): CalculatorResult {
  const [baseValue, setBaseValue] = useState('');
  const [percentChange, setPercentChange] = useState('');

  const result = useMemo(() => {
    if (!baseValue || !percentChange) return null;
    return parseFloat(baseValue) * (1 + parseFloat(percentChange) / 100);
  }, [baseValue, percentChange]);

  return {
    title: 'Increase/Decrease by X%',
    inputs: [
      { label: 'Value', value: baseValue, onChange: setBaseValue },
      { label: 'Change', value: percentChange, onChange: setPercentChange, suffix: '%' },
    ],
    result,
    resultLabel: 'New Value',
  };
}

/**
 * Hook for "X is Y% of what?" calculator
 */
export function useFindWhole(): CalculatorResult {
  const [part, setPart] = useState('');
  const [percent, setPercent] = useState('');

  const result = useMemo(() => {
    if (!part || !percent || parseFloat(percent) === 0) return null;
    return (parseFloat(part) / parseFloat(percent)) * 100;
  }, [part, percent]);

  return {
    title: 'X is Y% of what?',
    inputs: [
      { label: 'Part', value: part, onChange: setPart },
      { label: 'Percentage', value: percent, onChange: setPercent, suffix: '%' },
    ],
    result,
    resultLabel: 'Whole',
  };
}

/**
 * Hook for "% Change from X to Y" calculator
 */
export function usePercentageDifference(): CalculatorResult {
  const [oldValue, setOldValue] = useState('');
  const [newValue, setNewValue] = useState('');

  const result = useMemo(() => {
    if (!oldValue || !newValue || parseFloat(oldValue) === 0) return null;
    return ((parseFloat(newValue) - parseFloat(oldValue)) / parseFloat(oldValue)) * 100;
  }, [oldValue, newValue]);

  return {
    title: '% Change from X to Y',
    inputs: [
      { label: 'Original', value: oldValue, onChange: setOldValue },
      { label: 'New', value: newValue, onChange: setNewValue },
    ],
    result,
    resultLabel: 'Change',
  };
}

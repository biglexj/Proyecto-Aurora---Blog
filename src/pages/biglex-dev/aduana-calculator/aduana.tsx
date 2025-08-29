import React, { useState } from 'react';

interface FormValues {
  fob: string;
  flete: string;
  seguro: string;
  arancelPorcentaje: string;
  tdaPorcentaje: string;
  adicionales: string;
}

interface CalculationResults {
  cif: number;
  arancel: number;
  tda: number;
  baseIgv: number;
  igv: number;
  totalTributos: number;
  totalConAdicionales: number;
  costoTotal: number;
}

const calculateImportCosts = (values: FormValues): CalculationResults | null => {
  try {
    const vals = {
      fob: parseFloat(values.fob) || 0,
      flete: parseFloat(values.flete) || 0,
      seguro: parseFloat(values.seguro) || 0,
      arancelPorcentaje: parseFloat(values.arancelPorcentaje) || 0,
      tdaPorcentaje: parseFloat(values.tdaPorcentaje) || 0,
      adicionales: parseFloat(values.adicionales) || 0
    };

    if (vals.fob < 0 || vals.flete < 0 || vals.seguro < 0) {
      throw new Error('Los valores no pueden ser negativos');
    }

    const cif = vals.fob + vals.flete + vals.seguro;
    const arancel = cif * (vals.arancelPorcentaje / 100);
    const tda = cif * (vals.tdaPorcentaje / 100);
    const baseIgv = cif + arancel + tda;
    const igv = baseIgv * 0.18;
    const totalTributos = arancel + tda + igv;
    const totalConAdicionales = totalTributos + vals.adicionales;
    const costoTotal = cif + totalTributos + vals.adicionales;

    return {
      cif,
      arancel,
      tda,
      baseIgv,
      igv,
      totalTributos,
      totalConAdicionales,
      costoTotal
    };
  } catch (error) {
    console.error('Error en el cálculo:', error);
    return null;
  }
};

const AduanaCalculator: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    fob: '',
    flete: '',
    seguro: '',
    arancelPorcentaje: '',
    tdaPorcentaje: '',
    adicionales: ''
  });

  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<CalculationResults | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const calculateResults = () => {
    if (!values.fob) {
      setError('El valor FOB es requerido');
      return;
    }
    
    const results = calculateImportCosts(values);
    if (results) {
      setResults(results);
      setError(null);
    } else {
      setError('Error en el cálculo. Verifique los valores ingresados.');
    }
  };

  const formFields = {
    fob: 'Valor FOB (USD)',
    flete: 'Valor FLETE (USD)',
    seguro: 'Valor SEGURO (USD)',
    arancelPorcentaje: 'Porcentaje de ARANCEL (%)',
    tdaPorcentaje: 'Porcentaje de TDA (%)',
    adicionales: 'ADICIONALES (USD)'
  };

  return (
   <main className="text-primary-white h-auto flex justify-center items-center">
      <div className="bg-pink-panther-300 max-w-md w-full px-12 py-8 rounded-3xl shadow-lg">
        <h1 className="text-2xl text-gray-800 font-semibold mb-6 text-center">
          Calculadora de Importación
        </h1>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <div className="flex flex-col space-y-4">
          {Object.entries(formFields).map(([key, label]) => (
            <div key={key}>
              <label htmlFor={key} className="block text-gray-700 text-lg mb-1">
                {label}
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                id={key}
                name={key}
                value={values[key as keyof FormValues]}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border-none bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
                aria-label={label}
                required={key === 'fob'}
              />
            </div>
          ))}

          <button
            onClick={calculateResults}
            className="mt-4 p-3 w-full rounded-lg bg-green-600 text-white font-semibold cursor-pointer hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Calcular costos de importación"
          >
            CALCULAR
          </button>
        </div>

        {results && (
          <div className="mt-6 bg-white p-4 rounded-lg text-gray-800">
            <h2 className="font-semibold text-xl mb-4 text-center">Resultados</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>CIF:</span>
                <span className="font-medium">USD {results.cif.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>ARANCEL ({values.arancelPorcentaje}%):</span>
                <span className="font-medium">USD {results.arancel.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>TDA ({values.tdaPorcentaje}%):</span>
                <span className="font-medium">USD {results.tda.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Base IGV:</span>
                <span className="font-medium">USD {results.baseIgv.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>IGV (18%):</span>
                <span className="font-medium">USD {results.igv.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-semibold">TOTAL TRIBUTOS:</span>
                <span className="font-semibold">USD {results.totalTributos.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>TOTAL con ADICIONALES:</span>
                <span className="font-medium">USD {results.totalConAdicionales.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t pt-2 bg-green-50 px-2 py-1 rounded">
                <span className="font-bold text-green-700">COSTO TOTAL:</span>
                <span className="font-bold text-green-700">USD {results.costoTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default AduanaCalculator;
import React, { useState, ChangeEvent, FormEvent } from 'react';

// Interfaces para los tipos
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
  costoTotal: number; // Nuevo campo
}

type FormKey = keyof FormValues;

const formKeys: FormKey[] = [
  'fob',
  'flete',
  'seguro',
  'arancelPorcentaje',
  'tdaPorcentaje',
  'adicionales'
];

const isFormKey = (key: string): key is FormKey => {
  return formKeys.includes(key as FormKey);
};

const AduanaCalculator = () => {
  // Estados con tipos
  const [values, setValues] = useState<FormValues>({
    fob: '',
    flete: '',
    seguro: '',
    arancelPorcentaje: '',
    tdaPorcentaje: '',
    adicionales: ''
  });

  const [results, setResults] = useState<CalculationResults | null>(null);

  // Manejador de cambios tipado
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  // Función de cálculo tipada
  const calculateResults = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const vals = {
      fob: parseFloat(values.fob) || 0,
      flete: parseFloat(values.flete) || 0,
      seguro: parseFloat(values.seguro) || 0,
      arancelPorcentaje: parseFloat(values.arancelPorcentaje) || 0,
      tdaPorcentaje: parseFloat(values.tdaPorcentaje) || 0,
      adicionales: parseFloat(values.adicionales) || 0
    };

    const cif = vals.fob + vals.flete + vals.seguro;
    const arancel = cif * (vals.arancelPorcentaje / 100);
    const tda = cif * (vals.tdaPorcentaje / 100);
    const baseIgv = cif + arancel + tda;
    const igv = baseIgv * 0.18;
    const totalTributos = arancel + tda + igv;
    const totalConAdicionales = totalTributos + vals.adicionales;
    const costoTotal = vals.fob + totalConAdicionales; // Nuevo cálculo

    setResults({
      cif,
      arancel,
      tda,
      baseIgv,
      igv,
      totalTributos,
      totalConAdicionales,
      costoTotal // Agregar al objeto de resultados
    });
  };

  // Actualizar formFields con los nuevos títulos
  const formFields: { [K in FormKey]: string } = {
    fob: 'Valor FOB (USD)',
    flete: 'Valor FLETE (USD)',
    seguro: 'Valor SEGURO (USD)',
    arancelPorcentaje: 'Porcentaje de ARANCEL (%)',
    tdaPorcentaje: 'Porcentaje de TDA (%)',
    adicionales: 'ADICIONALES (USD)'
  };

  return (
    <main className="text-primary-white h-auto">
      <div className="mx-auto">
        <div className="flex justify-center items-center">
          <div className="bg-pink-panther-300 w-115 p-6 rounded-3xl flex flex-col items-center">
            <h1 className="font-kefa text-2xl text-dark font-semibold mb-6">Calculadora de Importación</h1>

            <form onSubmit={calculateResults} className="flex flex-col w-80">
              {(Object.entries(formFields) as [FormKey, string][]).map(([key, label]) => (
                <div key={key}>
                  <label htmlFor={key} className="text-dark text-lg mb-1">
                    {label}
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    id={key}
                    name={key}
                    value={values[key]}
                    onChange={handleChange}
                    className="p-2 w-80 rounded-lg border-none bg-white focus:outline-none focus:ring-2 focus:ring-pink-400 mb-3"
                  />
                </div>
              ))}

              <button
                type="submit"
                className="mt-4 p-2 w-80 rounded-md bg-green-600 text-white cursor-pointer hover:bg-green-700 transition"
              >
                CALCULAR
              </button>
            </form>

            {results && (
              <div className="mt-6 w-80 bg-white p-4 rounded-lg text-dark">
                <h2 className="font-semibold text-xl mb-4">Resultados</h2>
                {Object.entries({
                  'CIF': results.cif,
                  [`ARANCEL (${values.arancelPorcentaje}%)`]: results.arancel,
                  [`TDA (${values.tdaPorcentaje}%)`]: results.tda,
                  'Base IGV': results.baseIgv,
                  'IGV (18%)': results.igv,
                  'TOTAL TRIBUTOS': results.totalTributos,
                  'TOTAL con ADICIONALES': results.totalConAdicionales,
                  'COSTO TOTAL (FOB + Impuestos)': results.costoTotal
                }).map(([label, value]) => (
                  <div key={label} className="flex justify-between mb-2">
                    <span>{label}:</span>
                    <span className="font-medium">USD {value.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AduanaCalculator;

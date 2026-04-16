"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Ruler } from "lucide-react";

type Tab = "Length" | "Weight" | "Volume" | "Temperature" | "Area";

const TABS: Tab[] = ["Length", "Weight", "Volume", "Temperature", "Area"];

function convertLength(value: number, from: string, to: string): number {
  const toM: Record<string, number> = {
    Meters: 1,
    Feet: 0.3048,
    Inches: 0.0254,
    Centimeters: 0.01,
    Millimeters: 0.001,
  };
  const f = toM[from] ?? 1;
  const t = toM[to] ?? 1;
  return (value * f) / t;
}

function convertWeight(value: number, from: string, to: string): number {
  const toKg: Record<string, number> = {
    Kilograms: 1,
    Pounds: 0.453592,
    Ounces: 0.0283495,
  };
  const f = toKg[from] ?? 1;
  const t = toKg[to] ?? 1;
  return (value * f) / t;
}

function convertVolume(value: number, from: string, to: string): number {
  const toL: Record<string, number> = {
    Liters: 1,
    "US Gallons": 3.78541,
    "Cubic Meters": 1000,
  };
  const f = toL[from] ?? 1;
  const t = toL[to] ?? 1;
  return (value * f) / t;
}

function convertTemp(value: number, from: string, to: string): number {
  let c = value;
  if (from === "Fahrenheit") c = ((value - 32) * 5) / 9;
  if (from === "Kelvin") c = value - 273.15;
  if (to === "Celsius") return c;
  if (to === "Fahrenheit") return (c * 9) / 5 + 32;
  if (to === "Kelvin") return c + 273.15;
  return c;
}

function convertArea(value: number, from: string, to: string): number {
  const toM2: Record<string, number> = {
    "Square Meters": 1,
    "Square Feet": 0.092903,
    Acres: 4046.86,
  };
  const f = toM2[from] ?? 1;
  const t = toM2[to] ?? 1;
  return (value * f) / t;
}

const UNITS: Record<Tab, string[]> = {
  Length: ["Meters", "Feet", "Inches", "Centimeters", "Millimeters"],
  Weight: ["Kilograms", "Pounds", "Ounces"],
  Volume: ["Liters", "US Gallons", "Cubic Meters"],
  Temperature: ["Celsius", "Fahrenheit", "Kelvin"],
  Area: ["Square Meters", "Square Feet", "Acres"],
};

export function MeasurementConverter() {
  const [tab, setTab] = useState<Tab>("Length");
  const [fromVal, setFromVal] = useState("1");
  const [fromUnit, setFromUnit] = useState("Meters");
  const [toUnit, setToUnit] = useState("Feet");

  const units = UNITS[tab];

  const toVal = useMemo(() => {
    const v = parseFloat(fromVal);
    if (Number.isNaN(v)) return "—";
    let out: number;
    if (tab === "Length") out = convertLength(v, fromUnit, toUnit);
    else if (tab === "Weight") out = convertWeight(v, fromUnit, toUnit);
    else if (tab === "Volume") out = convertVolume(v, fromUnit, toUnit);
    else if (tab === "Temperature") out = convertTemp(v, fromUnit, toUnit);
    else out = convertArea(v, fromUnit, toUnit);
    const decimals = tab === "Temperature" ? 2 : 5;
    return out.toFixed(decimals);
  }, [tab, fromVal, fromUnit, toUnit]);

  const formula = useMemo(() => {
    const v = parseFloat(fromVal);
    if (Number.isNaN(v)) return "";
    return `${fromVal} ${fromUnit} = ${toVal} ${toUnit}`;
  }, [fromVal, fromUnit, toVal, toUnit]);

  function switchTab(next: Tab) {
    setTab(next);
    const u = UNITS[next];
    setFromUnit(u[0]);
    setToUnit(u[1] ?? u[0]);
    setFromVal("1");
  }

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          <span className="text-heathen-accent">Measurement</span>{" "}
          <span className="text-white">Converter</span>
        </h2>
        <p className="mt-4 text-gray-400">
          Use our free conversion calculator for all your home improvement projects
        </p>
      </div>

      <div className="mx-auto max-w-3xl rounded-lg border border-heathen-green/40 bg-[#0a0a0a] p-6 shadow-[0_0_30px_rgba(57,255,20,0.08)] md:p-8">
        <div className="mb-6 flex items-center gap-2 border-b border-heathen-green/20 pb-4 text-lg font-semibold text-white">
          <Ruler className="h-5 w-5 text-heathen-accent" />
          Conversion Calculator
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => switchTab(t)}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                tab === t
                  ? "bg-heathen-accent text-black"
                  : "border border-gray-700 bg-black/50 text-gray-300 hover:border-heathen-green/40"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-end">
          <div>
            <label className="mb-2 block text-sm text-gray-400">From:</label>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                type="text"
                inputMode="decimal"
                value={fromVal}
                onChange={(e) => setFromVal(e.target.value)}
                className="w-full rounded-md border border-heathen-green/30 bg-black px-4 py-3 text-white focus:border-heathen-accent focus:outline-none"
              />
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="w-full rounded-md border border-heathen-green/30 bg-black px-3 py-3 text-white focus:border-heathen-accent focus:outline-none sm:max-w-[160px]"
              >
                {units.map((u) => (
                  <option key={u} value={u}>
                    {u}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="hidden justify-center pb-8 md:flex">
            <ArrowRight className="h-6 w-6 text-heathen-accent" />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">To:</label>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                type="text"
                readOnly
                value={toVal}
                className="w-full rounded-md border border-heathen-green/30 bg-black/80 px-4 py-3 text-white"
              />
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="w-full rounded-md border border-heathen-green/30 bg-black px-3 py-3 text-white focus:border-heathen-accent focus:outline-none sm:max-w-[160px]"
              >
                {units.map((u) => (
                  <option key={u} value={u}>
                    {u}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">{formula}</p>
      </div>
    </section>
  );
}

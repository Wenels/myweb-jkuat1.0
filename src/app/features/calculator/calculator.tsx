"use client";

import { useState } from "react";

// Button type definition
type ButtonType = "number" | "operator" | "action" | "equals" | "zero";

// Calculator button config
const BUTTONS: { label: string; type: ButtonType }[] = [
  { label: "C", type: "action" },
  { label: "%", type: "action" },
  { label: "⌫", type: "action" },
  { label: "÷", type: "operator" },
  { label: "7", type: "number" },
  { label: "8", type: "number" },
  { label: "9", type: "number" },
  { label: "×", type: "operator" },
  { label: "4", type: "number" },
  { label: "5", type: "number" },
  { label: "6", type: "number" },
  { label: "−", type: "operator" },
  { label: "1", type: "number" },
  { label: "2", type: "number" },
  { label: "3", type: "number" },
  { label: "+", type: "operator" },
  { label: "0", type: "zero" },
  { label: ".", type: "number" },
  { label: "=", type: "equals" },
];

// Button background colours based on type
const buttonStyles: Record<ButtonType, string> = {
  number: "bg-[#1c1c1e] hover:bg-[#2c2c2e] text-white",
  operator: "bg-[#0a84ff] hover:bg-[#0070e0] text-white",
  action: "bg-[#2c2c2e] hover:bg-[#3a3a3c] text-white",
  equals: "bg-[#0a84ff] hover:bg-[#0070e0] text-white",
  zero: "bg-[#1c1c1e] hover:bg-[#2c2c2e] text-white col-span-2 justify-start pl-6",
};

// Safe expression evaluator to avoid using eval()
function evaluateExpression(expr: string): number {
  const tokens: (string | number)[] = [];
  let currentNumber = "";

  for (let i = 0; i < expr.length; i++) {
    const char = expr[i];
    if ("0123456789.".includes(char)) {
      currentNumber += char;
    } else if ("+-*/".includes(char)) {
      if (currentNumber !== "") {
        tokens.push(Number.parseFloat(currentNumber));
        currentNumber = "";
      }
      // Handle negative signs
      if (
        char === "-" &&
        (tokens.length === 0 || typeof tokens[tokens.length - 1] === "string")
      ) {
        currentNumber = "-";
      } else {
        tokens.push(char);
      }
    }
  }
  if (currentNumber !== "") {
    tokens.push(Number.parseFloat(currentNumber));
  }

  // Handle multiplication and division
  const intermediateTokens: (string | number)[] = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token === "*" || token === "/") {
      const prev = intermediateTokens.pop();
      const next = tokens[++i];
      if (typeof prev !== "number" || typeof next !== "number") {
        throw new Error("Invalid expression");
      }
      if (token === "*") {
        intermediateTokens.push(prev * next);
      } else {
        if (next === 0) {
          throw new Error("Division by zero");
        }
        intermediateTokens.push(prev / next);
      }
    } else {
      intermediateTokens.push(token);
    }
  }

  // Handle addition and subtraction
  if (intermediateTokens.length === 0) {
    return 0;
  }
  let result = intermediateTokens[0];
  if (typeof result !== "number") {
    throw new Error("Invalid expression");
  }

  for (let i = 1; i < intermediateTokens.length; i += 2) {
    const op = intermediateTokens[i];
    const next = intermediateTokens[i + 1];
    if (typeof op !== "string" || typeof next !== "number") {
      throw new Error("Invalid expression");
    }
    if (op === "+") {
      result += next;
    } else if (op === "-") {
      result -= next;
    } else {
      throw new Error("Invalid operator");
    }
  }

  return result;
}

export default function Calculator() {
  // Current display value
  const [display, setDisplay] = useState("0");

  // Full expression being built
  const [expression, setExpression] = useState("");

  // Whether last action was equals
  const [calculated, setCalculated] = useState(false);

  // Handle button press
  const handlePress = (label: string) => {
    if (label === "C") {
      // Clear everything
      setDisplay("0");
      setExpression("");
      setCalculated(false);
      return;
    }

    if (label === "⌫") {
      // Delete last character
      setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
      return;
    }

    if (label === "%") {
      // Convert to percentage
      setDisplay((prev) => String(Number.parseFloat(prev) / 100));
      return;
    }

    if (label === "=") {
      try {
        // Evaluate the full expression: expression + display
        const expr = (expression + display)
          .replace(/×/g, "*")
          .replace(/÷/g, "/")
          .replace(/−/g, "-");

        const result = evaluateExpression(expr);
        // Format result to prevent floating point issues, limiting to 10 decimal places
        const formattedResult = Number.parseFloat(result.toFixed(10));
        setDisplay(String(formattedResult));
        setExpression("");
        setCalculated(true);
      } catch {
        setDisplay("Error");
      }
      return;
    }

    // If it's an operator
    if (["÷", "×", "−", "+"].includes(label)) {
      setExpression((prev) => prev + display + label);
      setDisplay("0");
      setCalculated(false);
      return;
    }

    // If it's a number or decimal
    if (calculated) {
      // Start fresh after equals
      setDisplay(label === "." ? "0." : label);
      setCalculated(false);
    } else {
      if (label === ".") {
        if (display.includes(".")) {
          return;
        }
        setDisplay((prev) => `${prev}.`);
      } else {
        setDisplay((prev) => (prev === "0" ? label : prev + label));
      }
    }
  };

  return (
    // Full screen centered layout with blue background
    <div className="min-h-screen bg-[#0a84ff] flex items-center justify-center px-4">
      {/* Calculator container */}
      <div className="w-[320px] rounded-[40px] overflow-hidden shadow-2xl">
        {/* Display area — blue gradient background */}
        <div className="bg-gradient-to-b from-[#2196f3] to-[#0a84ff] px-6 pt-10 pb-8 flex flex-col justify-end min-h-[200px]">
          {/* Expression preview */}
          <p className="text-white/60 text-sm text-right mb-1">{expression}</p>
          {/* Main display number */}
          <p
            className="text-white text-right font-light"
            style={{ fontSize: display.length > 8 ? "2.5rem" : "4rem" }}
          >
            {display}
          </p>
        </div>

        {/* Buttons area — dark background */}
        <div className="bg-[#000000] px-4 pt-4 pb-6">
          <div className="grid grid-cols-4 gap-3">
            {BUTTONS.map((btn) => (
              <button
                key={btn.label}
                type="button"
                onClick={() => handlePress(btn.label)}
                className={`
                  ${buttonStyles[btn.type]}
                  h-16 rounded-full flex items-center justify-center
                  text-xl font-medium transition-all duration-150
                  active:scale-95
                `}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

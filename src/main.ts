import "./style.scss";
// import { setupCounter } from "./counter.ts";

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
const bases: Record<string, string> = {
  blackTea: "#8B4513",
  greenTea: "#C8E6C9",
  coffee: "#6F4E37",
};

const creamers: Record<string, string> = {
  milk: "AliceBlue",
  cream: "#F5F5DC",
  half: "#FFFACD",
};

const syrups: Record<string, string> = {
  vanilla: "#FFEFD5",
  caramel: "#DAA520",
  hazelnut: "#6B4423",
};

function applyTemperature(input: HTMLInputElement): void {
  const container = document.getElementById(
    "condensation",
  ) as HTMLDivElement | null;
  if (!container) return;

  const children = container.children;

  for (let i = 0; i < children.length; i++) {
    const child = children[i] as HTMLElement;

    if (input.value === "hot") {
      child.className = "stream";
    } else {
      child.className = "flake";
    }
  }
}

function applyBase(input: HTMLInputElement): void {
  const baseElements = document.getElementsByClassName("base");

  if (baseElements.length === 0) return;

  const baseDiv = baseElements[0] as HTMLDivElement;

  const color = bases[input.value];
  if (!color) return;

  baseDiv.style.backgroundColor = color;
}

function applyCream(input: HTMLInputElement): void {
  const creamElements = document.getElementsByClassName("foam");

  if (creamElements.length === 0) return;

  const color = creamers[input.value];
  if (!color) return;
  for (let i = 0; i < creamElements.length; i++) {
    const element = creamElements[i] as HTMLDivElement;
    element.style.backgroundColor = color;
  }
}

function applySyrup(input: HTMLInputElement): void {
  const syrupElement = document.querySelector(".syrup") as HTMLDivElement | null;
  if (!syrupElement) return;

  const color = syrups[input.value];
  if (!color) return;

  syrupElement.style.setProperty("--syrup-color", color);
}

function setupSyrupListeners(): void {
  const syrupRadios = document.querySelectorAll(
    'input[name="syrup"]'
  ) as NodeListOf<HTMLInputElement>;

  syrupRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      applySyrup(radio);
    });
  });

  // Apply initial state on page load
  const checked = document.querySelector(
    'input[name="syrup"]:checked'
  ) as HTMLInputElement | null;

  if (checked) {
    applySyrup(checked);
  }
}

setupSyrupListeners();

function setupCreamListeners(): void {
  const creamRadios = document.querySelectorAll(
    'input[name="cream"]'
  ) as NodeListOf<HTMLInputElement>;

  creamRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      applyCream(radio);
    });
  });

  const checked = document.querySelector(
    'input[name="cream"]:checked'
  ) as HTMLInputElement | null;

  if (checked) {
    applyCream(checked);
  }
}
setupCreamListeners();

function setupTemperatureListeners(): void {
  const tempRadios = document.querySelectorAll(
    'input[name="temperature"]'
  ) as NodeListOf<HTMLInputElement>;

  tempRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      applyTemperature(radio);
    });
  });

  const checked = document.querySelector(
    'input[name="temperature"]:checked'
  ) as HTMLInputElement | null;

  if (checked) {
    applyTemperature(checked);
  }
}

setupTemperatureListeners();

function setupBaseListeners(): void {
  const baseRadios = document.querySelectorAll(
    'input[name="base"]'
  ) as NodeListOf<HTMLInputElement>;

  baseRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      applyBase(radio);
    });
  });

  const checked = document.querySelector(
    'input[name="base"]:checked'
  ) as HTMLInputElement | null;

  if (checked) {
    applyBase(checked);
  }
}

setupBaseListeners();

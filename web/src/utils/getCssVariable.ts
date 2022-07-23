const getCssVariable = (variable: string) => {
  return document.documentElement.style.getPropertyValue(variable);
};

export default getCssVariable;

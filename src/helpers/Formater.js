export const FormaterCurrency = (value) => {
  return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};

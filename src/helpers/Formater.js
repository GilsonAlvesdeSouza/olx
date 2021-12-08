const formater = () => {
  return {
    formatCurrency: (value) => {
      return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
    },
    formatDate: (date) => {
      let newDate = new Date(date);
    
      let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
      let day = newDate.getDate();
      let month = newDate.getMonth();
      let year = newDate.getUTCFullYear();
    
      return `${day} de ${months[month]} de ${year}`
     
    },
  };

};

export default formater;

// export const FormaterCurrency = (value) => {
//   return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
// };

// export const formatDate = (date) => {
//   let newDate = new Date(date);

//   let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

//   let day = newDate.getDate();
//   let month = newDate.getMonth();
//   let year = newDate.getUTCFullYear();

//   return `${day} de ${months[month]} de ${year}`
 
// };
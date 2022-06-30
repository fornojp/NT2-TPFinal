import Vue from "vue";

Vue.filter("convertir", (value, moneda) => {
  let signo = "";
  if (moneda == "Dolar") {
    signo = "U$S ";
  } else {
    signo = "$ ";
  }
  return signo + value;
});

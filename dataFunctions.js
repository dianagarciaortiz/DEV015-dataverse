// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (objetos, nombreABuscar) => {
  return objetos.filter(objeto => objeto.name.toLowerCase().includes(nombreABuscar.toLowerCase()));
};

export const filterDatas = (objetos, selectareaDeEstudio) => {
  return objetos.filter(objeto => objeto.facts.areaDeEstudio === selectareaDeEstudio);
};



export function sortData(array, orden) {
  return array.sort((a, b) => {
    if (orden === "az") {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
    }
    else {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }

    }
  })
}
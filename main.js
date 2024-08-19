import { filterData, filterDatas, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const mainConteiner = document.getElementById("root")
const inputNombre = document.getElementById("filtroNombre")
const selectArea = document.querySelector("select#areaFiltrado")
const ordenarDatos = document.querySelector('select[name="sortOrder"]')
const resetButton = document.querySelector('button#resetButton')

mainConteiner.appendChild(renderItems(data))

inputNombre.addEventListener("input", () => {
  mainConteiner.innerHTML = ""
  const dataFiltrada = filterData(data, inputNombre.value)
  mainConteiner.appendChild(renderItems(dataFiltrada))
})



selectArea.addEventListener("change", () => {
  mainConteiner.innerHTML = ""
  const selectFiltrado = filterDatas(data, selectArea.value)
  mainConteiner.appendChild(renderItems(selectFiltrado))
})
ordenarDatos.addEventListener("change", () => {
  mainConteiner.innerHTML = ""
  const dataOrdenada = sortData(data, ordenarDatos.value)
  mainConteiner.appendChild(renderItems(dataOrdenada))
})

resetButton.addEventListener("click", (event) => {
  event.preventDefault()
  mainConteiner.innerHTML = ""
  mainConteiner.appendChild(renderItems(data))
  inputNombre.value=""
  ordenarDatos.value="placeholder"
  selectArea.value="placeholder"

});




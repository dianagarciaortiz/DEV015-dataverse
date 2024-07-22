//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';
const mainConteiner = document.getElementById("root")
mainConteiner.appendChild(renderItems(data))




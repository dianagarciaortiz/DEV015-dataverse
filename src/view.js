export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites

  const list = document.createElement('ul');
  data.forEach(element => {
    const listItem = document.createElement('li')
    listItem.setAttribute("class", "listItem")
    listItem.setAttribute("itemscope", "");
    listItem.setAttribute("itemtype", "https://schema.org/CreativeWork");
    listItem.innerHTML = ` <article> 
    <div>
     <h2>${element.name}</h2> 
     <p>${element.shortDescription}</p> 
     <p>${element.facts.lugarDeNacimiento}</p>
     <p>${element.facts.fechaDeNacimiento}</p> 
     <p>${element.facts.areaDeEstudio}</p> 

     </div>
     <img src=${element.imageUrl}> 
    </article> `

    list.appendChild(listItem)
    // list.appendChild(imgs)

  });
  return list;
  //return imagenes;
};
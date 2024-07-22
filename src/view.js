export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites

  const list = document.createElement('ul');
  data.forEach(element => {
    const listItem = document.createElement('li')
    listItem.innerHTML = ` <ul> <li> <div>${element.name}</div> </li> 
    <li>  <div>${element.shortDescription}</div> </li> 
    <li>  <div>${element.description}</div></li> 
    <li>  <div>${element.facts}</div> </li> </ul> `
    list.appendChild(listItem)
    
  });
  return list;
};


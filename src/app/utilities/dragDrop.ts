
// interface IDragDrop {
//   allowDrop: (event: MouseEvent) => void;
//   drag: (event: MouseEvent) => void;
//   dropCopy: (event: MouseEvent) => void;
// }


export const allowDrop = (event) => {
  event.preventDefault();
}

export const drag = (event) => {
  const type = event.target.className;
  event.target.setAttribute('id', `${type}:${new Date().valueOf()}`)
  console.log('target:', event.target.id);
  event.dataTransfer.setData("text", event.target.id);
}


export const dropCopy = (event) => {
  
}

export const dropMove = (event) => {

}

export const drop = (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  let nodeCopy: any = document.getElementById(data).cloneNode(true);
  nodeCopy.id = 'id' + (new Date()).getTime();
  event.target.appendChild(nodeCopy);    
}
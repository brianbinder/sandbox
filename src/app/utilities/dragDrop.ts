
// interface IDragDrop {
//   allowDrop: (event: MouseEvent) => void;
//   drag: (event: MouseEvent) => void;
//   dropCopy: (event: MouseEvent) => void;
// }


export const allowDrop = (event) => {
  event.preventDefault();
}

export const drag = (event) => {
  if (!event.target.id) {
    event.target.setAttribute('id', 'id' + new Date().valueOf())
  }
  event.dataTransfer.setData("text", event.target.id);
}

export const dropCopy = (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  let nodeCopy: any = document.getElementById(data).cloneNode(true);
  nodeCopy.id = 'id' + (new Date()).getTime();
  event.target.appendChild(nodeCopy);
}
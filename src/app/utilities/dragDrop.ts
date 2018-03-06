
// interface IDragDrop {
//   allowDrop: (event: MouseEvent) => void;
//   drag: (event: MouseEvent) => void;
//   dropCopy: (event: MouseEvent) => void;
// }


export const allowDrop = (event) => {
  event.preventDefault();
}

export const drag = (event) => {
  event.dataTransfer.setData("text/html", event.target.id);
}

export const dropCopy = (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/html");
  let nodeCopy: any = document.getElementById(data).cloneNode(true);
  nodeCopy.id = 'id' + (new Date()).getTime();
  event.target.appendChild(nodeCopy);
}
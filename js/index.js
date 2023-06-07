let container = document.querySelector(".container");
let block = document.querySelector(".cat-block");
let eyes = document.querySelector(".cat-eyes");
container.addEventListener("mousemove", function (e) {
  // 计算鼠标相对于容器左上角的偏移量
  let xPos = e.clientX - container.offsetLeft;
  let yPos = e.clientY - container.offsetTop;
  // 修正偏移距离
  let x = (xPos - block.offsetLeft) / 30;
  let y = (yPos - block.offsetTop) / 30;
  eyes.style.transform = `translateX(${x}px) translateY(${y}px)`;
});

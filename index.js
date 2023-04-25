var result = "";
var res;
var button = document.getElementsByClassName("btn");
var ip = document.getElementById("text-input");
console.log(typeof button);
for (let item of button) {
  item.addEventListener("click", () => {
    if (item.outerText === "=") {
      ip.value = eval(result);
      result = "";
    } else if (item.outerText === "C") {
      ip.value = "";
      result = "";
    } else if (item.outerText === "X") {
      item.value = "*";
    } else {
      result += item.outerText;
      ip.value = result;
    }
  });
}

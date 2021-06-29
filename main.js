const div = dom.find("#test>.red")[0];
console.log(test, "red");
dom.style(div, "color", "red");
console.log(dom.style("red"));
const divList = dom.find(".red");
console.log(dom.find("red"));
dom.each(divList, (n) => console.log(n));

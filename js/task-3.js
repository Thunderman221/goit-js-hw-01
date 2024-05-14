function getElementWidth(content, padding, border) {
  const contentValue = Number.parseInt(content);
  const paddingValue = Number.parseInt(padding) * 2;
  const borderValue = Number.parseFloat(border) * 2;

  return contentValue + paddingValue + borderValue;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));

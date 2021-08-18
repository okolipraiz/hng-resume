const container = document.querySelector('.print-name');

const printName = (name) => {
  container.innerHTML = name;
  console.log(name)
};

window.addEventListener('DOMContentLoaded', printName('Raheem Segun Ibrahim'));
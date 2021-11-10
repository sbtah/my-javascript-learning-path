let myLeads = ["www.dupa.com", "www.papa.com", "www.pipa.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = '';
    console.log(myLeads);

});

for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += `<li>${myLeads[i]}</li>`
};

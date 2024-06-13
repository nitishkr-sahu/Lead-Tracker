
let myLeads = [];

const inputEl = document.getElementById("input-el");


const inputBtn = document.getElementById("input-btn");

const ulEl = document.getElementById("ul-el");

const deletebtn = document.getElementById("delete-btn");

const tabbtn = document.getElementById("tab-btn");
// get the leads from the localStorage - PS: JSON.parse();
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// console.log(JSON.parse(leadsFromLocalStorage))

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;

  render(myLeads);
}

// Store it in a variable , leadFromLocalStorage
// log out the variable
const tabs = [
  { url: "https://www.linkedin.com/in/per-harald-borgen/" }
]

tabbtn.addEventListener("click", function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  })


})



deletebtn.addEventListener("dblclick", function() {
  console.log("double clicked")
  localStorage.clear();
  myLeads = [];
  render(myLeads);
})



inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
  console.log(localStorage.getItem("myLeads"))
})


function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    // listItems += "<li> <a href='#'>" + myLeads[i] + " </a> </li>";
    listItems += `<li>
                  <a  target='_blank'
                  href='${leads[i]}'> ${leads[i]} </a>
                               </li>`
  }
  ulEl.innerHTML = listItems;
}

// console.log(" hello " + "\n" + "Welcom Nitish")

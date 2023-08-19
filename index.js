//api key from apimedic symptom checker
// let apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im5hbmRpbmluZW1hMDVAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI4MzQ0IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMTA5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6IjEwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IkJhc2ljIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAyMi0wOC0wMiIsImlzcyI6Imh0dHBzOi8vYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTY1OTQ2OTgwNCwibmJmIjoxNjU5NDYyNjA0fQ.FQPNxHEdy9CaKh2SdgsDTSo7wYavJgCawdGGNk_ibNk";
// let apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im5hbmRpbmluZW1hMDVAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI4MzQ0IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMTA5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6IjEwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IkJhc2ljIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAyMi0wOC0wMiIsImlzcyI6Imh0dHBzOi8vYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTY1OTU1MjAwNywibmJmIjoxNjU5NTQ0ODA3fQ.w6jEmjaR3oN9PdRbDPUZEIUWPrc8qiGfG20fVMDq4T8";
let apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im5hbmRpbmluZW1hMDVAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI4MzQ0IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMTA5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6IjEwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IkJhc2ljIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAyMi0wOC0wMiIsImlzcyI6Imh0dHBzOi8vYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTY1OTcyMTYzNCwibmJmIjoxNjU5NzE0NDM0fQ.AzgolnpvU9FDB0bcQwX2reY_JOMKLEiXbEC8-zZpIYU"
//https://apimedic.com

let startButton = document.querySelector('#startButton');
//query select the input box 
inputBox = document.querySelector("#myInput");
//query select the submit box
searchButton = document.querySelector("#searchButton");
//query select the information in the output box
let welcomeDiv = document.querySelector('#welcome');
let searchBox = document.querySelector('#input');
let outputDiv = document.querySelector('#output');
let name = document.querySelector('#nameOutput');
let description = document.querySelector('#descriptionOutput');
let medicalCondition = document.querySelector('#medicalConditionOutput');
let symptoms = document.querySelector('#symptomsOutput');
let treatment = document.querySelector('#treatmentOutput');
let dropdown = document.querySelector('.dropdown-content');
let dropdownContent;
let dropdownItems = document.querySelector("#dropdownItems")

startButton.addEventListener("click", () => {
  myFunction();
  console.log("start button pressed");
  startButton.classList.add("is-hidden");
  searchBox.classList.remove("is-hidden");
  // dropdown.classList.remove("is-hidden");
  getIssueId();
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
//Getting issues id function
async function getIssueId() {
  let url = `https://healthservice.priaid.ch/issues?token=${apiKey}&format=json&language=en-gb`;
  //fetch url
  let response = await fetch(url);
  //set the information of the url equal to data variable
  let data = await response.json();
  console.log(data);
  //for every issue in list of datas
  //if the concern entered equals an issue on the api list
  //match the input that the user put to the id and set that equal to issueID
  for (let issue of data) {
    // console.log(issue.Name);
    //inner.html append, issue.name to dropdown, do it every single issue
    dropdownItems.innerHTML += `<a href="#${issue.Name}">${issue.Name}</a>`
    dropdownContent = document.querySelectorAll('.dropdown-content a');
    if (concernInput == issue.Name) {
      let issueId = issue.ID;
      console.log(issueId);
      return issueId;
    }
  };
};

//event listener on dropdown div
dropdown.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.tagName === "A") {
    document.getElementById("myInput").value = e.target.innerHTML;
    // inputBox.blur();
    inputBox.value = e.target.innerHTML;
    console.log(inputBox.value);
    console.log(dropdownContent);
    dropdownItems.style.display = "none";
  }
});


//getting the issue description
async function getIssueDescription(issueId) {
  //get url for the description of each issue and response and set that equal to a variable
  //comes from a specific issue that has it's own id
  let url = `https://healthservice.priaid.ch/issues/${issueId}/info?token=${apiKey}&format=json&language=en-gb`
  let response = await fetch(url);
  let data = await response.json();
  // console.log(data);
  return data;
}

//call issue id function, and then call issue description which awaits issue id and then render the description to the user
async function getIssue() {
  let issueId = await getIssueId();
  console.log(issueId);
  let issueDescription = await getIssueDescription(issueId);
  console.log(issueDescription);
  // render the description to the user...
  welcomeDiv.classList.add("is-hidden");
  searchBox.classList.add("is-hidden");
  outputDiv.classList.remove("is-hidden");
  //name div output
  name.innerHTML = "<h1 class='is-size-5 has-text-weight-bold has-text-left'>Name</h1><h2 class = 'has-text-left'>" + issueDescription.Name + "</h2>";
  //description output
  description.innerHTML = "<h1 class='is-size-5 has-text-weight-bold has-text-left'>Description</h1><h2 class = 'has-text-left'>" + issueDescription.Description + "</h2>";
  //medical condition output
  medicalCondition.innerHTML = "<h1 class='is-size-5 has-text-weight-bold has-text-left'>Medical Condition</h1><h2 class = 'has-text-left'>" + issueDescription.MedicalCondition + "</h2>";
  //symptoms div output
  symptoms.innerHTML = "<h1 class='is-size-5 has-text-weight-bold has-text-left'>Possible Symptoms</h1><h2 class = 'has-text-left'>" + issueDescription.PossibleSymptoms + "</h2>";
  //treatment div output
  treatment.innerHTML = "<h1 class='is-size-5 has-text-weight-bold has-text-left'>Treatment</h1><h2 class = 'has-text-left'>" + issueDescription.TreatmentDescription + "</h2>";
}

//create variable called concern input
let concernInput;
//on the event the search button is clicked
searchButton.addEventListener("click", async (e) => {
  //get value from input box
  concernInput = inputBox.value
  console.log(concernInput);
  await getIssue();
});




// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function() {
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('#' + burger.dataset.target);
  burger.addEventListener('click', function() {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });
})();


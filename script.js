"use strict";

const apiCall = async function (url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
apiCall("https://docpatient-nexus.onrender.com/");
// Create a worker function that will call the api after every 5 minutes

setInterval(() => {
  apiCall("https://docpatient-nexus.onrender.com/");
}, 300000);

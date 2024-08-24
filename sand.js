const request = new XMLHttpRequest();
console.log("HELLO WORLD");
request.addEventListener("readystatechange", () => {
  // console.log(request, request.readyState);
  if (request.readyState === 4 && request.status === 200) {
    console.log(request, request.responseText);
  } else if (request.readyState === 4) {
    console.log("COULD NOT FETCH THE DATA");
  }
});
request.open("GET", "https://jsonplaceholder.typicode.com/todoss/");
request.send();

let promise = fetch("https://steamcommunity.com/profiles/76561198022886802/inventory/")
.then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
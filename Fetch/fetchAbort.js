const getData = () => {
  const url = "https://api.apis.guru/v2/list.json";
  const fetchController = new AbortController();
  const { signal } = fetchController;

  let time = setTimeout(() => {
    fetchController.abort();
    console.log("aborted");
  }, 3000);

  fetch(url, {
    signal,
    mode: "no-cors",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      clearTimeout(time);
      if (!res.ok) throw new Error("Request failed");
      return res.json();
    })
    .then((data) => {
      console.log(data["1forge.com"]);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

getData();

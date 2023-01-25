const userNameDom = document.querySelector("#userName");
const passwordDom = document.querySelector("#password");
const getLoginDom = document.querySelector("#getLogin");
const postLoginDom = document.querySelector("#postLogin");

getLoginDom.onclick = () => {
  fetch(`/api/login?name=${userNameDom.value}&password=${passwordDom.value}`)
    .then((res) => {
      console.log("fetch res:", res);
      return res.json();
    })
    .then((data) => {
      console.log("fetch data:", data);
    });
};

postLoginDom.onclick = () => {
  fetch(`/api/login_post`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: userNameDom.value,
      password: passwordDom.value,
    }),
  })
    .then((res) => {
      console.log("fetch post res:", res);
      return res.json();
    })
    .then((data) => {
      console.log("fetch post data:", data);
    });
};

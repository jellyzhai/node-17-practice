const userNameDom = document.querySelector("#username");
const passwordDom = document.querySelector("#password");
const getLoginDom = document.querySelector("#getLogin");
const postLoginDom = document.querySelector("#postLogin");

getLoginDom.onclick = () => {
  fetch(
    `/api/login?username=${userNameDom.value}&password=${passwordDom.value}`
  )
    .then((res) => {
      console.log("fetch res:", res);
      return res.json();
    })
    .then((data) => {
      if (data.ok === 1) {
        location.href = "/home.html";
        return;
      }
      console.log("用户名密码不对:", data);
    });
};

postLoginDom.onclick = () => {
  fetch(`/api/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username: userNameDom.value,
      password: passwordDom.value,
    }),
  })
    .then((res) => {
      console.log("fetch post res:", res);
      return res.json();
    })
    .then((data) => {
      if (data.ok === 1) {
        location.href = "/home.html";
        return;
      }
      console.log("用户名密码不对:", data);
    });
};

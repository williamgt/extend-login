import axios from "axios";

export async function doLogin(loginRequest) {
  let login = false;
  await axios
    .get("https://my-json-server.typicode.com/williamgt/extend-login/users")
    .then((response) => {
      let validUsers = response.data;
      for (let pos in validUsers) {
        let user = validUsers[pos];
        if (loginRequest.username === user.username) {
          if (loginRequest.password === user.password) {
            login = true;
          }
        }
      }
    })
    .catch((error) => {
      console.log(error); //TODO error handling pls
    });
  return login;
}

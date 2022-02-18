import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/williamgt/extend-login/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
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

export function sendForm(user) {
    console.log(user)
    axios
        .post("https://my-json-server.typicode.com/williamgt/extend-login/users",
            JSON.stringify(user), {

                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
    })
    .then((response) => {
        console.log("Response from sendForm" + response.data);
    })
        .catch((error) => {
            console.log("Something went wrong from sendForm" + error);
        });
}

export function sendForm2(uiser){
    apiClient.post("users", uiser)
        .then((response) => {
            console.log("Response from sendForm" + response.data);
        })
        .catch((error) => {
            console.log("Something went wrong from sendForm" + error);
        });
}
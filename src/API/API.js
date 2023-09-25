export const userName = (username, password) =>
  fetch('https://fakestoreapi.com/users', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password
    }),
    headers: {
      'Content-Type': 'application/json' // Set the content type to JSON
    }
  });



            // .then(res=>res.json())
            // .then(json=>console.log(json))

            // export const registerUser = async (username, password) => {
            //     try {
            //       const response = await fetch(
            //         `${BASE_URL}/users`, {
            //         method: "POST",
            //         headers: {
            //           'Content-Type': 'application/json'
            //         },
            //         body: JSON.stringify({
            //           user: {
            //             username,
            //             password
            //           }
            //         })
            //       });
            //       const result = await response.json();
            //       console.log(token;)
            //       return result.data.token;
                
            //     } catch (err) {
            //       console.error(err);
            //     }
            //   }
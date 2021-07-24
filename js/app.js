axios.interceptors.response.use(function (response) {
    alert("Grabbing list of people for you.");
    return response;
  }, function (error) {

    return Promise.reject(error);
  });

async function getApi() {
    await axios.request({
        method: "GET",
        url: "https://reqres.in/api/users"
    }).then(useQuote).catch(quoteFailure);
}

function useQuote(response) {

    for (let i=0; i < response.data.data.length; i++) {
        console.log(response);
        var container = document.createElement('div');
        container.style.borderBottom = "1px dashed blue";
        
        let fakeAvatar = document.createElement('img');
        fakeAvatar.setAttribute('src', response.data.data[i].avatar);
        fakeAvatar.style.width = "200px";
        container.append(fakeAvatar);
        document.getElementById('pictureUser').append(container);

        let fakeFName = document.createElement('p');
        fakeFName.innerText = response.data.data[i].first_name;
        container.append(fakeFName);
        
        let fakeLName = document.createElement('p');
        fakeLName.innerText = response.data.data[i].last_name;
        container.append(fakeLName);

        let fakeEmail = document.createElement('p');
        fakeEmail.innerText = response.data.data[i].email;
        container.append(fakeEmail);
    }
}

function quoteFailure(error) {
    console.error("We failed to connect to a list of people");
    console.error(error);
}

let fetchButton = document.getElementById('getApi');
fetchButton.addEventListener('click', getApi);
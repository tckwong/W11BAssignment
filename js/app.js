function getApi() {
    axios.request({
        method: "GET",
        url: "https://reqres.in/api/users"
    }).then(useQuote).catch(quoteFailure);
}

function useQuote(response) {
    console.log(response);
    var container = document.createElement('div');
    container.style.borderBottom = "1px dashed grey";
    //container.classList.add('myGrid');
    
    let fakeAvatar = document.createElement('img');
    fakeAvatar.setAttribute('src', response.data.data[0].avatar);
    fakeAvatar.style.width = "200px";
    container.append(fakeAvatar);

    document.getElementById('pictureUser').append(container);
    document.getElementById('fName').innerText = response.data.data[0].first_name;
    document.getElementById('lName').innerText = response.data.data[0].last_name;
    document.getElementById('email').innerText = response.data.data[0].email;
}

function quoteFailure(error) {
    console.error("We failed to get API");
    console.error(error);
}

let fetchButton = document.getElementById('getApi');
fetchButton.addEventListener('click', getApi);
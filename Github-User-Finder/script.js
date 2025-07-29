//* Import to Change HTML cards contents dynamically :
let card_Container = document.querySelector(".card-container");
let card_Img_Div = document.querySelector(".card-img");
let card_Img = document.querySelector("img");
let followers = document.querySelector("#followers-id");
let following = document.querySelector("#following-id");
let user_Name = document.querySelector(".user-name");
let user_Public_Repos = document.querySelector("#public-repo-id");
let user_Join_Date = document.querySelector("#join-date-id");
let user_Location = document.querySelector("#location-id");
let user_Bio = document.querySelector(".user-bio");

//* Import to Change search content CSS :
let search_Input = document.querySelector("#searchInput");
let search_Button = document.querySelector("#searchButton");
let main_Container = document.querySelector(".main-container");
let search_Container = document.querySelector(".search-container");
let porject_name = document.querySelector(".porject-name");

//^ Github User Finding function:
async function GithubUser(userName) {
  let dash_UserName = userName.replace(" ", "-"); //? replace space with dash '-' for github user
  let githubUser = await fetch(`https://api.github.com/users/${dash_UserName}`);

  if (githubUser.ok) {
    const userData = await githubUser.json();

    console.log(userData.name);
    console.log(userData.login);

    //* Dynamically adding data into HTML :
    card_Img.src = userData.avatar_url;
    followers.innerText = userData.followers;
    following.innerText = userData.following;
    user_Name.innerText = userData.name;
    let getDate = userData.created_at.slice(0, 10); //? takes only date part
    user_Join_Date.innerText = getDate;
    user_Bio.innerText = userData.bio || "Bio not found";
    user_Public_Repos.innerText = userData.public_repos;
    user_Location.innerText = userData.location || "Private";

    //* Remove "hide" class to show card :
    card_Container.classList.remove("hide");

    //* Chnage search CSS :
    main_Container.style.height = "10rem";
    main_Container.style.width = "40rem";
    search_Container.style.height = "10rem";
    porject_name.style.fontSize = "30px";
    search_Input.style.height = "2rem";
    search_Input.style.width = "30rem";
    search_Input.style.fontSize = "20px";
    search_Button.style.height = "2.5rem";
    search_Button.style.width = "9rem";
  } else {
    if (userName === "") {
      alert("Please Enter User name");
    } else {
      alert(`Sorry, User name "${userName}" Not Found`);
    }
  }
}

//* Search button logic :
search_Button.addEventListener("click", () => GithubUser(search_Input.value));

//* keyboard key "Enter" logic :
search_Input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    GithubUser(search_Input.value);
  }
});

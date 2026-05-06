const url="https://api.github.com/users";
const search=document.getElementById("search")
const searchButton=document.getElementById("searchButton")
const profileContainer=document.getElementById("profile-container")

const loding=document.getElementById("loding");

const generateProfile=(profile) => {
    return `
     <div class="profile-box">
     <div class="top-section">
       <div class="left">
         <div class="avatar">
           <img alt="avatar" src="${profile.avatar_url}" />
         </div>
         <div class="self">
           <h1>${profile.name}</h1>
           <h1>@${profile.login}</h1>
         </div>
       </div>
       <a href="${profile.html_url}" target="_black">
       <button class="primaryButton">Check Profile</button>
       </a>
     </div>
  
     <div class="about">
       <h2>About</h2>
       <p>
       ${profile.bio}
       </p>
     </div>
     <div class="status">
       <div class="status-item">
         <h3>Followers</h3>
         <p>${profile.followers}</p>
       </div>
       <div class="status-item">
         <h3>Followings</h3>
         <p>${profile.following}</p>
       </div>
       <div class="status-item">
         <h3>Repos</h3>
         <p>${profile.public_repos}</p>
       </div>
     </div>
   </div>
     `;
  };

const fetchProfile=async()=>{
    const username=search.value;
    loding.innerText="Loding......";
    loding.style.color="black"

    try{
        const response=await fetch(`${url}/${username}`)
        const data=await response.json();
        console.log("data",data);

        if(data.bio)
        {
            loding.innerText=" ";
            profileContainer.innerHTML=generateProfile(data)
        }
        else{
            loding.innerHTML=data.message;
            loding.style.color="red";
        }
        
    }
    catch(error)
    {
        console.log(error);
        loding.innerText=""
        
    }
}

searchButton.addEventListener('click',fetchProfile)
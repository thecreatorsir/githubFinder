class UI {
  constructor(){
    this.profile = document.getElementById('profile');

  }
  //display profile in ui
  showProfile(user){
  this.profile.innerHTML = `
     <div class = "card card-body mb-3">
        <div class ="row">
          <div class="col-md-3">
             <img class="img-fluid mb-2" src="${user.avatar_url}">
             <a href="${user.html_url}" target ="_blank" class="btn btn-primary btn-block mb-4">view profile</a>
           </div>
           <div class="col-md-9">
             <span class="badge badge-primary">public repos: ${user.public_repos}</span>
             <span class="badge badge-secondary">public Gists: ${user.public_gists}</span>
             <span class ="badge badge-success">Followers: ${user.followers}</span>
             <span class ="badge badge-info">Following: ${user.following} </span>
             <br><br>
             <ul class ="list-group">
               <li class="list-group-item">Company: ${user.company}</li>
               <li class="list-group-item">Website/Blog: ${user.blog}</li>
               <li class="list-group-item">Location: ${user.location}</li>
               <li class="list-group-item">Member since: ${user.created_at}</li>
              </ul>
            </div>
        </div>
     </div>
     <h3 class="page-heading mb-3">Latest Repos</h3>
     <div id="repos"></div> 
     `;
   
  }

  //show user repose
  showRepos(repos) {
    let output = '';
    repos.forEach((repo) => {
    output += `
    <div class="card card-body mb-2">
       <div class="row">
          <div class="col-md-6">
    <a href="${repo.html_url}" target ="_blank">${repo.name}</a>
             </div>
           <div class="col-md-6">
             <span class="badge badge-primary">stars: ${repo.stargazers_count}</span>
             <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
             <span class ="badge badge-success">Forks: ${repo.forms_count}</span>
         </div>
        </div>
    </div>
    `;
    });
    //output repository
    document.getElementById('repos').innerHTML = output; 
  }

  // show alert message
  showAlert(message,classname) {
     //remove repeating alerts;
     this.clearAlert();
    //create element
   const div = document.createElement('div');
   //add classes
   div.className = classname;
   //add text
   div.appendChild(document.createTextNode(message));
   //get parent
   const parent = document.querySelector('.searchContainer');
   //get search box
   const search = document.querySelector('.search');
   //insert div
   parent.insertBefore(div,search);
   
   //remove the last remaining message
   setTimeout(() => {
     this.clearAlert();
   },1000);
  }

  //clear alert
  clearAlert() {
   const currAlert = document.querySelector('.alert');
   if(currAlert){
     currAlert.remove();
   }
  }

  //clear profile
  clearProfile() {
    this.profile.innerHTML ='';
  }
}
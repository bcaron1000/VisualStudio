let friendsTab = document.querySelector(".friends");
let homeTab = document.querySelector(".home");
let friendslist = document.querySelector('.content');
let friendSpan = document.createElement("span");
let friendsUL = document.createElement("ul");

friendsTab.addEventListener("click", (event)=> {
    if (friendslist.childNodes.length > 0){
        friendslist.removeChild(friendslist.firstChild);
        friendslist.removeChild(friendslist.firstChild);
        friendslist.classList.add('pure-menu', 'custom-restricted-width');
        friendslist.appendChild(friendSpan);
        friendslist.appendChild(friendsUL);
        return;
    }
    friendsTab.classList.add('pure-menu-selected', 'friends');//makes the tab blue
    friendslist.classList.add('pure-menu', 'custom-restricted-width');
    friendSpan.classList.add('pure-menu-heading')
    friendslist.appendChild(friendSpan);
    friendSpan.appendChild(document.createTextNode("Friends"));
    friendslist.appendChild(friendsUL);
   
    function renderFriend(friend) {
        let output = '';
        let friendString = `${friend.firstName} ${friend.lastName}`;
        let friendID = `${friend.id}`
        let friendItem = document.createElement("li");
        let friendlink = document.createElement("a");
        friendItem.classList.add('pure-menu-item');
        friendsUL.classList.add('pure-menu-list');
        friendlink.setAttribute('href', '#');
        friendlink.setAttribute('class', 'pure-menu-link');
        friendlink.setAttribute('data-id', friendID);
        let friendTextNode = document.createTextNode(friendString);
        friendslist.appendChild(friendsUL);
        friendsUL.appendChild(friendItem);
        friendlink.appendChild(friendTextNode);
        friendItem.appendChild(friendlink);
        friendsUL.appendChild(friendItem);
``
        friendlink.addEventListener("click", (event)=> {
            friendlink.getAttribute(friendID);
            friendslist.removeChild(friendslist.firstChild);
            friendslist.removeChild(friendslist.firstChild);
            friendslist.classList.remove("pure-menu", "custom-restricted-width");
            friendslist.classList.add("friend");
            fetch(`/friends/${friendID}.json`)
            .then((response)=> {
                return response.json();
            }).then((friendData)=> {
                buildFriendData(friendData);
            })
        })
    }
    function buildFriendData(friends) {
        let imageFriend = `${friends.avatar}`;
        let friendStrings = `${friends.firstName} ${friends.lastName}`;
        let friendEmail = `${friends.email}`;
        let friendHomeTown = `${friends.hometown}`;
        let friendBio = `${friends.bio}`;
        let newPara = document.createElement("p");
        let newUl = document.createElement("ul");
        let emailListItem = document.createElement("li");
        let htListItem = document.createElement("li");
        let eSpan = document.createElement("span");
        let htSpan = document.createElement("span");
        let friendDiv = document.createElement("div");
        let friendImg = document.createElement("img");
        let friendTitle = document.createElement("h2");
        let friendBioNode = document.createTextNode(friendBio);
        let nameTextNode = document.createTextNode(friendStrings);
        let emailTextNode = document.createTextNode(friendEmail);
        let homeTownTextNode = document.createTextNode(friendHomeTown);
        let htText = document.createTextNode("Hometown: ");
        let eText = document.createTextNode("Email: ");
        eSpan.setAttribute('class', 'label');
        htSpan.setAttribute('class', 'label');
        eSpan.appendChild(eText);
        htSpan.appendChild(htText);
        friendTitle.appendChild(nameTextNode);
        emailListItem.appendChild(eSpan);
        emailListItem.appendChild(emailTextNode);
        htListItem.appendChild(htSpan);
        htListItem.appendChild(homeTownTextNode);
        newUl.appendChild(emailListItem);
        newUl.appendChild(htListItem);
        friendDiv.appendChild(friendImg);
        friendDiv.appendChild(friendTitle);
        friendDiv.appendChild(newUl);
        
        friendTitle.setAttribute('class', 'name');
        friendImg.setAttribute('class', 'photo');
        friendImg.setAttribute('src', imageFriend);
        newPara.appendChild(friendBioNode);
        newPara.setAttribute('class', 'bio');
        friendDiv.appendChild(newPara);
        friendDiv.classList.add("identity");
        friendslist.appendChild(friendDiv);
        friendslist.appendChild(newPara);
        }
    function renderAllFriends(friends) {
	
        for (let idx = 0; idx < friends.length; idx += 1) {
            renderFriend(friends[idx]);
        }
    }
    fetch("/friends/friends.json")
    .then((response)=> {
        return response.json();
    }).then((friendData)=> {
        renderAllFriends(friendData)
    })
})
/*I got it working, but my friend blue when 
i go back to the friends list wont turn blue 
untill the back ground is clicked or anywhere else on the page*/





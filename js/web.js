const addButton = document.querySelector("#addButton");

addButton.addEventListener("click", addFavorite);

var parentObj = {favorites: []};

function favorite(url, title, comment, tags){
    this.url = url;
    this.title = title;
    this.comment = comment;
    this.tags = tags;
    this.displayMet = function(){return `<li><a href=${this.url}> ${this.title}</a> <br> ${this.comment} <br>Tags: ${this.tags}</li>`
    }
}
function addFavorite() {
    var url = document.getElementById("url").value;
    // url is the only required field
    if (!url) {
    alert("Please enter a URL for your favorite");
    return;
    } else {
    var title = document.getElementById("title").value;
    var comment = document.getElementById("comment").value;
    var tags = document.getElementById("tags").value;
   
    // Create a new favorite object
    parentObj.favorites[parentObj.favorites.length] = new favorite(url, title, comment, tags);
   
    // Add favorite to all favorites
    // Display favorites

        display();
    }
 // reset the form
 var form = document.querySelector("form");
 form.reset();
}

function display(){
   var  convertToString = " ";
   var temp = parentObj.favorites;

    for(var i = 0; i < temp.length; i++){
        convertToString += temp[i].displayMet();
    }
    document.getElementById("favorites").innerHTML = convertToString;
}

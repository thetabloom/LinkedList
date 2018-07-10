var bookMark = {}
var websiteTitle = document.querySelector('.website-title');
console.log('website title:' + websiteTitle); 
var enterButton = document.querySelector('.enter');
var websiteURL = document.querySelector('.website-url');
var readButton = document.querySelector('.read');
var deleteButton = document.querySelector('.delete');
var unorderedList = document.querySelector('ul');


enterButton.addEventListener('click', function(){
  event.preventDefault();
  listBmark();
  if(websiteTitle.value){
  bookMark[websiteTitle.value] = websiteURL.value;
}
console.log(bookMark)
  console.log('test' + websiteTitle.value);
});

function listBmark(){
  var newItem = document.createElement('li');
  if(websiteTitle.value == 0 || websiteURL == 0){
  newItem.inner = null 
}else{
  newItem.innerHTML =`<h3>${websiteTitle.value}</h3><br /><hr /><p class="site">${websiteURL.value}</p><br /><hr /><hr /><button class="read">Read</button>
            <button class="delete"> Delete</button>`
  var list = document.querySelector("ul");
  list.appendChild(newItem);
  }
}

enterButton.addEventListener('click', function(){
  if (websiteTitle.value == 0 || websiteURL.value == 0 ){
  document.querySelector('.error').innerText = "Must include both title and URL"
} else (document.querySelector('.error').innerText = null);
})


// readButton.addEventListener('click', changeColor);

// function changeColor(event) {
//   if (event.target.document.querySelector("ul") == document.querySelector('li')){
//   console.log('is it working')
// }
// }
unorderedList.addEventListener('click', function (event) {
  if (event.target.classList.contains('read')) {
    document.querySelector('li').classList.toggle('read-button');
    document.querySelector('.read').classList.toggle('new-button');
    document.querySelector('.site').classList.toggle('new-site');
    console.log('hello');
   }
 });

unorderedList.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete')) {
    document.querySelector('.delete').classList.toggle('delete-button');
    console.log('hello');
   }
 })

// // Get the element, add a click listener...
// document.getElementById('ul').addEventListener("click", function(event) {
// // e.target is the clicked element!
// // If it was a list item
// if(event.target && event.target.nodeName == "LI") {
//     // List item found!  Output the ID!
//     console.log("List item ", e.target.id.replace("post-"), " was clicked!");
//        }
//  });
// }
 //  event.preventDefault();
 //  readButton.classList.toggle('button'); 
 // }



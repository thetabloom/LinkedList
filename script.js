var bookMark = {}
var websiteTitle = document.querySelector('.website-title');
console.log('website title:' + websiteTitle); 
var enterButton = document.querySelector('.enter');
var websiteURL = document.querySelector('.website-url');

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
  newItem.innerHTML =`<h3>${websiteTitle.value}</h3><hr /><p>${websiteURL.value}</p><hr /><button class="read">Read</button>
            <button class="delete"> Delete</button>`
  var list = document.querySelector("ul");
  list.appendChild(newItem);
  console.log('what:' + bookMark)
}


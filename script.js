var bookMark = {}
var websiteTitle = document.querySelector('.website-title');
console.log('website title:' + websiteTitle); 
var enterButton = document.querySelector('.enter');
var websiteURL = document.querySelector('.website-url');
var readButton = document.querySelector('.read');
var deleteButton = document.querySelector('.delete');
var unorderedList = document.querySelector('ul');
var counter = 0;
var readCounter = 0;
var unreadCounter = counter - readCounter

enterButton.addEventListener('click', function(){
  event.preventDefault();
  listBmark();
  if(websiteTitle.value){
  bookMark[websiteTitle.value] = websiteURL.value;
  }
});

function listBmark(){
  var newItem = document.createElement('li');
  if(websiteTitle.value == 0 || websiteURL == 0){
      newItem.innerText = null 
  } else {
      newItem.innerHTML =
      `<h3>${websiteTitle.value}
      </h3>
        <br /><hr />
      <p class="site">
            <a class="site-click" target="_blank" href="https://${websiteURL.value}/">${websiteURL.value}</a>
      </p><br /><hr /><hr />
      <button class="read">Read</button>
      <button class="delete"> Delete</button>`
      var list = document.querySelector("ul");
      list.appendChild(newItem);
      var siteClick = document.querySelector('.site-click')
      siteClick.addEventListener('click', websiteClick)
      // listCount();
      counter = counter + 1;
      counting();
      document.querySelector('.counter').innerText = `Bookmarks saved: ${counter} Read number: ${readCounter}`;
  }
}

// function listCount(){
//   var bookmarkCount = document.querySelector('read-counter').innerText = readCounter;
//   var bookmarkCount2 = document.querySelector('counter').innerText = counter
// }
// document.querySelector('.new-button').addEventListener('click', funtion(){
//   counter();
// })

function websiteClick(event) {
  event.preventDefault()
  document.location.href = `https://${websiteURL.value}/`
}

enterButton.addEventListener('click', function(){
  if (websiteTitle.value == 0 || websiteURL.value == 0 ){
  document.querySelector('.error').innerText = "Must include both title and URL"
} else (document.querySelector('.error').innerText = null);
})

unorderedList.addEventListener('click', function(event) {
  event.preventDefault();
  if (event.target.className === 'read' || event.target.className === 'read new-button') {
    event.target.parentNode.classList.toggle('read-button')
    event.target.classList.toggle('new-button')
    listCount()
   }
 });

websiteURL.addEventListener('keyup', function(){
  enterDisable()
})

websiteTitle.addEventListener('keyup', function(){
  enterDisable()
})

function enterDisable(){
  console.log(websiteTitle.value)
  if (websiteTitle.value.length == 0 || websiteURL.value.length == 0){
    enterButton.disabled = true;

  } else if (websiteTitle.value.length > 0 && websiteURL.value.length) {
    console.log('this is' + false)
    enterButton.disabled = false;
    }
  }

unorderedList.addEventListener('click', function (event) {
 event.preventDefault();
 if (event.target.classList.contains('delete')) {
   event.target.parentNode.remove(); 
  }
})

function counting() {
  counter = document.querySelectorAll('li').length
  readCounter = document.querySelectorAll('.new-button').length
  unreadCounter = counter - readCounter
}



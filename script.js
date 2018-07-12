var bookMark = {}
var websiteTitle = document.querySelector('.website-title');
var enterButton = document.querySelector('.enter');
var websiteURL = document.querySelector('.website-url');
var readButton = document.querySelector('.read');
var deleteButton = document.querySelector('.delete');
var unorderedList = document.querySelector('ul');
var counter = 0;
var readCounter = 0;
var unreadCounter = counter - readCounter

enterButton.addEventListener('click', function() {
    event.preventDefault();
    listBmark();
    if (websiteTitle.value) {
        bookMark[websiteTitle.value] = websiteURL.value;
    }
});


function listBmark() {
    var newItem = document.createElement('li');
    if (websiteTitle.length == 0 || websiteURL.length == 0) {
        newItem.innerText = null
    } else {
        newItem.innerHTML =                  
            `<h3>${websiteTitle.value}
            </h3>
            <hr />
            <p class="site">
            <a class="site-click" target="_blank" href="https://${websiteURL.value}/">${websiteURL.value}</a>
            </p>
            <hr />
      <button class="read">Read</button>
      <button class="delete"> Delete</button>`
        var listWebsites = document.querySelector("ul");
        listWebsites.appendChild(newItem);
        var siteClick = document.querySelector('.site-click')
        siteClick.addEventListener('click', websiteClick)
        counter++;
        counting();
    }
}

function counting() {
    counter = document.querySelectorAll('li').length
    readCounter = document.querySelectorAll('.new-button').length
    document.querySelector('.counter').innerText = `Bookmarks saved: ${counter} Read number: ${readCounter}`;
}


function websiteClick(event) {
    event.preventDefault()
    document.location.href = `https://${websiteURL.value}/`
}

enterButton.addEventListener('click', function() {
    if (websiteTitle.value == 0 || websiteURL.value == 0) {
        document.querySelector('.error').innerText = "Must include both title and URL"
    } else(document.querySelector('.error').innerText = null);
})

unorderedList.addEventListener('click', function(event) {
    event.preventDefault();
    if (event.target.className === 'read' || event.target.className === 'read new-button') {
        event.target.parentNode.classList.toggle('read-button')
        event.target.classList.toggle('new-button')
        counting();
    }
});

websiteURL.addEventListener('keyup', function() {
    enterDisable()
})

websiteTitle.addEventListener('keyup', function() {
    enterDisable()
})

function enterDisable() {
    console.log(websiteTitle.value)
    if (websiteTitle.value.length == 0 || websiteURL.value.length == 0) {
        enterButton.disabled = true;
    } else if (websiteTitle.value.length > 0 && websiteURL.value.length) {
        console.log('this is' + false)
        enterButton.disabled = false;
    }
}


unorderedList.addEventListener('click', function(event) {
    event.preventDefault();
    if (event.target.classList.contains('delete')) {
        event.target.parentNode.remove();
    }
})







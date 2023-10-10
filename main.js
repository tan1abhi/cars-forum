//NavBar
function hideIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
}

function showIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}

//Comment
function showComment(){
    var commentArea = document.getElementById("comment-area");
    commentArea.classList.remove("hide");
}

//Reply
function showReply(){
    var replyArea = document.getElementById("reply-area");
    replyArea.classList.remove("hide");
}


//submit 
function submit(){
    var submit = document.getElementById("comment-area");
    submit.classList.add("hide");
}

function submit_rep(){
    var submit_rep = document.getElementById("reply-area");
    submit_rep.classList.add("hide");
}



function submit_rep1(){
    var submit_rep1= document.getElementById("reply-area1");
    submit_rep1.classList.add("hide");
}


for (const btn of document.querySelectorAll('.vote')) {
    btn.addEventListener('click', event => {
      event.currentTarget.classList.toggle('on');
    });
  }
  

  for (const btn of document.querySelectorAll('.vote1')) {
    btn.addEventListener('click', event => {
      event.currentTarget.classList.toggle('on');
    });
  }
  
/*login button*/
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
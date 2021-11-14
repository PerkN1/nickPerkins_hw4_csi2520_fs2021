
window.onload = function(){
    document.getElementById('userComments').innerHTML
}




const userComments = document.getElementById('userComments');
document.getElementById('postComments').addEventListener('click', function (ev) 
{
   createComment(ev);
})

var PostBtn = document.getElementById('postComments');
var CommentText2 = document.getElementById('commentArea');
var CommentBtn = document.getElementById('leaveComment');

CommentBtn.onclick = function Comment(){
    CommentText2.style.display = "block";
    PostBtn.style.display = "block";
    PostBtn.onclick = function HideCommentBox(){
        CommentText2.style.display = "none";
        PostBtn.style.display = "none";
    }
}

function createComment(ev) {
    let commentTextArea;
    let wrapDiv;
    const textBox = document.createElement('div');
    const reply = document.createElement('button');
    reply.className = 'reply';
    reply.innerHTML = 'Reply';

    reply.style.marginLeft = "91.8%";
    reply.style.width = "80px";
    reply.style.border = "double 2px black";

    if(createClass(ev.target.parentElement, 'Blog')) {
        const wrapDiv = document.createElement('div');
        wrapDiv.className = 'wrapper';
        commentTextArea = document.getElementById('commentArea').value;
        document.getElementById('commentArea').value = '';
        textBox.innerHTML = commentTextArea;

        textBox.style.color = "black";
        textBox.style.fontSize = "21px";
        textBox.style.border = "double 2px black";
        textBox.style.background = "rgba(255, 255, 255)";

        wrapDiv.append(textBox, reply);
        userComments.appendChild(wrapDiv);

    } else {

        wrapDiv = ev.target.parentElement;
        commentTextArea = ev.target.parentElement.firstElementChild.value;
        textBox.innerHTML = commentTextArea;

        textBox.style.color = "black";
        textBox.style.fontSize = "21px";
        textBox.style.border = "double 2px black";
        textBox.style.background = "rgba(255, 255, 255)";

        wrapDiv.innerHTML = '';
        wrapDiv.append(textBox, reply);
    }   
}

function createClass(element, className) {
    return element.className.split(' ').indexOf(className) > -1;
}
document.getElementById('userComments').addEventListener('click', function (e) {
    if (createClass(e.target, 'reply')) {
        const parentDiv = e.target.parentElement;
        const wrapDiv = document.createElement('div');
        wrapDiv.className = 'wrapper';
        const textArea = document.createElement('textarea');
        const addButton = document.createElement('button');
        addButton.className = 'addReply';
        addButton.innerHTML = 'Post Reply';

        addButton.style.border = "double 2px black";
        addButton.style.width = "85px";
        
        
        wrapDiv.append(textArea, addButton);
        parentDiv.appendChild(wrapDiv);

        wrapDiv.style.marginLeft = "15px";
        textArea.style.marginRight = '20px';
        textArea.style.width = "835px";
        textArea.style.height = "50px";
        textArea.style.resize = "none";
        textArea.style.backgroundColor = "rgba(255, 255, 255)";
        textArea.style.color = "black";
        textArea.style.border = "double 2px black";

    } else if(createClass(e.target, 'addReply')) {
        createComment(e);
    } 
})




// filter items

$(document).ready(function(){
    $('.filter-item').click(function(){
        const value=$(this).attr('data-filter')
        if (value=="all"){
            $('.post-box').show('1000');
        }else{
            $('.post-box').not('.'+ value).hide('1000');
            $('.post-box').filter('.'+ value).show('1000');
        }
    });
    $('.filter-item').click(function(){
        $(this).addClass(" active-filter").siblings().removeClass("active-filter");
    });
});

// header backgound change when scolliing

let header = document.querySelector('header');

window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow', window.scrollY>0);
});

// contact section

function sendEmail(){
    Email.send({
        SecureToken :"1704e77b-82ff-4ea0-8f3a-074d8618e302",
        To : 'udaychaitanya00@gmail.com',
        From :'udaychaitanya00@gmail.com',
        Subject : "Blog message",
        Body : "name:" + document.getElementById("name").value
        +"<br> Email:"+ document.getElementById("email").value 
        +"<br> Message:"+document.getElementById("message").value
    }).then(
    message => alert("Message sent Successfully")
    );
};

// var btn=document.getElementById('btn');
// btn.addEventListener('click',function(e){
//     e.preventDefault()
//     var name=document.getElementById('name').value;
//     var email=document.getElementById('email').value;
//     var message=document.getElementById('message').value;
//     var body='name:'+name +'<br> email:'+email+'<br> message:'+message;

//                 Email.send({
//         SecureToken :"1704e77b-82ff-4ea0-8f3a-074d8618e302",
//         To : 'udaychaitanya00@gmail.com',
//         From :'udaychaitanya00@gmail.com',
//         Subject : "Blog message",
//         Body : body
//     }).then(
//     message => alert("Message sent")
//     );

// })


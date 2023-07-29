// HANDLE THE LOAD EVENT OF THE WINDOW


// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE

// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES

// CLOSE THE POPUP


window.addEventListener('load',() => {
  
  let parent = window.opener.document.getElementById('loginDetails');

  let form = document.getElementById('empForm');
   
   form.addEventListener('submit',(e) =>{
      e.preventDefault();
 let id1=document.getElementById('id').value;
 let name1=document.getElementById('name').value;
 let ext1=document.getElementById('extension').value
let email1=document.getElementById('email').value
let dept1=document.getElementById('department').value
 console.log(id1);
 window.close();

parent.innerHTML='<p>Id: '+id1+'</p>'+ '<p>Name: ' +name1+ '</p>' + '<p>Extension: '+ext1+'</p>'+'<p>Email: ' +email1+'</p>' +'<p>Department: ' +dept1+ '</p>';

})
let cancel1 = document.getElementById('cancel');
cancel1.addEventListener('click',(e) =>{
  e.preventDefault();
  window.close();
})
})
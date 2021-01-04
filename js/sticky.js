var noteCounter = 1;

window.addEventListener("load", ()=>{

    
    
    const notesF = document.querySelector('#addNote');
    const alarmF = document.querySelector('#addAlarm');
    
                    /* Adding Notes Function */

    notesF.addEventListener("click",()=>{
    console.log("Showing the Note Creator");
    
       $('#stickySide').append(`\
        <div class="note" id="note${noteCounter}"> \
            <div class="noteHeader" id="noteHeader">\
                <i class="far fa-times-circle fa-2x cancelNote" onClick="myFunction(event)" id="cancelNote${noteCounter}" ></i>\
            </div>\
        <div>\
        <textarea class="noteContent" placeholder="Write Here..." maxlength="85" id="noteContent"></textarea>\
        </div>`); 


    $( function() {
        $("#note" + noteCounter).draggable();   
    });
            noteCounter++;    
        }); 


        alarmF.addEventListener("click",()=>{
                var x = document.getElementById("popedAlarm");
                if (window.getComputedStyle(x).visibility === "hidden") {
                    setTimeout(function(){  x.style.visibility = "visible"; }, 300);
                } else {
                    setTimeout(function(){  x.style.visibility = "hidden"; }, 300);
                }
        }); 
        
       
    });


    function myFunction(event) { 
    
        selectedCross=event.target.id;
        var element = document.getElementById(selectedCross); 
        var element2 = element.parentNode;
        element2.parentNode.remove();  
       // noteCounter--;

      }

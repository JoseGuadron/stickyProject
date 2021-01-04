
window.addEventListener("load", ()=>{
    var activeAlarm = false;
    (function () {
        function checkTime(i) {
            return (i < 10) ? "0" + i : i;
        }
    
        function startTime() {
            var today = new Date(),
                h = checkTime(today.getHours()),
                m = checkTime(today.getMinutes()),
                s = checkTime(today.getSeconds());
            document.getElementById('time').innerHTML ="Current time: " + h + ":" + m + ":" + s;
            t = setTimeout(function () {
                startTime()
            }, 500);
        }
        startTime();
    })();

    const saveAlarm = document.querySelector('#saveAlarm');

    saveAlarm.addEventListener("click",()=>{

        let houras = document.getElementById("hours").value;
        let  minutas = document.getElementById("minutes").value;


        if(hour<h){
            alert("Invalid Hour");
        } else if(hour=h && minutas<m){
           alert("Invalid Hour")
        }else if(hour>23){
            alert("Invalid Hour")
         }else if(minutas>59){
            alert("Invalid Hour")
         } else{
            
        if(hour=h){
            finalTimer=(minutas*60)-(h*60);
        }
            
            console.log(finalTimer)
        }

            setTimeout(function(){  let notification = new Notification(
                "This is an alarm",
                {
                    body: "This is an alarm that you",
                    icon: 'img/ring.png'
                }
            ); }, finalTimer);

    });



});
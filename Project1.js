

document.getElementById('myForm').addEventListener('submit' , saveMission);
let missions = JSON.parse(localStorage.getItem('missions'));
let missionsResult = document.getElementById("mislist");


function saveMission(e) {
    
    let misname = document.getElementById("misname").value;
    let miscontent = document.getElementById("miscontent").value;
    let misdate = document.getElementById("misdate").value;
    let mistime = document.getElementById("mistime").value;
    
    if(misname.length > 2 && miscontent.length > 2 && misdate.length > 2){
        
    let mission = {name : misname, content : miscontent, date : misdate, time : mistime,};
     
    // Test If mission is null
    if (localStorage.getItem("missions") === null){
        //Init Array
         let missions = [];
        // Addd To Array
        missions.push(mission);
        // Set To Local Storage
        localStorage.setItem('missions', JSON.stringify(missions));


    }
    else {
        
        //Get Mission From LocalStorage 
        let missions = JSON.parse(localStorage.getItem('missions'));
       // Add Mission to Array 
        missions.push(mission);
       // Re-set Back To LocalStorage
        localStorage.setItem('missions', JSON.stringify(missions));
        //Re-call onload function
        addNotes();
    }
}
else{
        alert("Please fill the fields!")
}
        
        //reset form
        document.getElementById('myForm').reset()

        //Prevent Default
        e.preventDefault();
     
}       


function addNotes() {
    let missions = JSON.parse(localStorage.getItem('missions'));

    // Get Output Id 
    let missionsResult = document.getElementById("missionsresult");
    

    //build output
    missionsResult.innerHTML = "";
    for(let i = 0; i < missions.length; i++) {
        let name = missions[i].name;
        let content = missions[i].content;
        let date = missions[i].date;
        let time = missions[i].time;
        
        missionsResult.innerHTML += 
                                '<div id="firstM" class="firstMC">'+
                    '<div class="alert alert-warning" role="alert" style="height: 100%; margin: 0px;">'+
                        '<div class="close" aria-label="Close" id="\''+i+'\'">'+
                            '<div aria-hidden="true" id="secondx" onclick="clr(\''+name+'\')">'+'×'+'</div>'+
                        '</div>'+
                    '<div id="divname" class="rname">'+name+'</div>'+
                    '<div id="divcontent" class="rcontent">'+content+'</div>'+
                    '<div id="divdate" class="rdate">'+date+'</div>'+
                    '<div id="divtime" class="rtime">'+time+'</div>'+
                    '</div>'+
                '</div>';

                let note = document.getElementsByClassName("firstMC");
                note[i].style.opacity = "1";
                note[i].style.width = "275px";
                note[i].style.height = "350px";
                
    }

    let note = document.getElementsByClassName ("firstM");
    note.style.opacity = "1";
    
}

/************Reset Form Button************/

function rst() {
    document.getElementById('myForm').reset()
}
/*****************************************/

/*************** delete note *************/ 

function clr(name) {
    //Get note from localstorage    

    let missions = JSON.parse(localStorage.getItem('missions'));
    // Loop througth Notes
    for(let  i = 0; i < missions.length;i++){
        if(missions[i].name == name){
            // Remove From Array
            missions.splice(i, 1);

        }
    }
    
       // Re-set Back To LocalStorage
       localStorage.setItem('missions', JSON.stringify(missions));
       //Re-call onload function
       addNotes();

}

/****************************************/ 


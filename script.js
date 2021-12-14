
//definisco array per salvare i dati del json, è importante definirlo prima di fare la chiamata
var data = [];


//faccio la chiamata al server 
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    // è importante che la chiamata sia sincrona, FALSE, xk se la faccio asincrona (TRUE) lo script viene eseguito prima
    // di prendere i dati del file json è quidi non posso riempire le carte
    rawFile.open("GET", file, false);
    //controllo che il server risponde
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("database.json", function (text) {
    data = JSON.parse(text);
    console.log(data);    
});


function renderCards() {

    
    for (var i = 0; i < data.appStatus.length; i++) {
        
        //creo i contenitori delle carte
        var div = document.createElement('div');
        div.className = 'card-body';
        document.getElementsByTagName('body')[0].appendChild(div);

        //riempio le carte

        /* metto il titolo */
        var div = document.createElement('div');
        div.className = 'card-title';
        div.innerHTML = data.appStatus[i].app;
        document.getElementsByClassName('card-body')[i].appendChild(div);

        /* metto il pallino per indicare lo status sul titolo */
        let status = document.createElement('span');
        status.className = 'status';
        status.innerHTML = data.appStatus[i].status;
        document.getElementsByClassName('card-title')[i].appendChild(status);
        
        
        var cat = document.createElement('div');
        cat.className = 'card-cat';
        cat.innerHTML = data.appStatus[i].category;
        document.getElementsByClassName('card-body')[i].appendChild(cat);
        
        let status2 = document.createElement('span');
        status2.className = 'status';
        status2.innerHTML = data.appStatus[i].status;
        document.getElementsByClassName('card-cat')[i].appendChild(status2);
        
        
        //coloro i pallini in base allo status
        let pallino = document.getElementsByClassName('status');
        for (let j = 0; j < pallino.length; j++) {
            let key = pallino[j].innerHTML;
            console.log(key);
            if (key === '1') {
                pallino[j].style.background ='#01FF00';
            } else {
                pallino[j].style.background = 'red';
            }
        }
   

               
    } 
    
    

    
}
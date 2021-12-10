/* var appStatus = []
axios.get('database.json').then(function (risultato) {  //definisco una funzione in cui salvo il risultato della chiamata
    console.log(risultato.data.appStatus);
    appStatus = risultato.data.appStatus;
    
});

console.log(appStatus); */



var appStatus =
    [
        {
            "app": "Application A",
            "category": "Overall Status",
            "status": "1"
        },
        {
            "app": "Application A",
            "category": "System Status",
            "status": "2"
        },
        {
            "app": "Application B",
            "category": "Overall Status",
            "status": "1"
        },
        {
            "app": "Application B",
            "category": "Overall Status",
            "status": "2"
        }
    ]


function renderCards() {

    
    for (var i = 0; i < appStatus.length; i++) {
        
        //creo i contenitori delle carte
        var div = document.createElement('div');
        div.className = 'card-body';
        document.getElementsByTagName('body')[0].appendChild(div);

        //riempio le carte

        /* metto il titolo */
        var div = document.createElement('div');
        div.className = 'card-title';
        div.innerHTML = appStatus[i].app;
        document.getElementsByClassName('card-body')[i].appendChild(div);

        /* metto il pallino per indicare lo status sul titolo */
        let status = document.createElement('span');
        status.className = 'status';
        status.innerHTML = appStatus[i].status;
        document.getElementsByClassName('card-title')[i].appendChild(status);
        
        let pallino = document.getElementsByClassName('status');
        for (let j = 0; j < pallino.length; j++) {
            let key = pallino[j].innerHTML;
            console.log(key);
            if (key === '1') {
               console.log('caso1');
                pallino[j].style.background ='#01FF00';
            } else {
                console.log('caso2');
                pallino[j].style.background = 'red';
            }
        }
        
        

   

               
    } 
    
    

    
}
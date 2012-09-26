//
// version 004 pre-alpha
// Code by Marco Amato, released in AGPL (http://www.gnu.org/licenses/agpl-3.0.html)
//
var amtt_base_value,amtt_toDo,amtt_start,amtt_amtt;
amtt_ddrand = String(Math.round(Math.random()*99) );if(amtt_ddrand.length < 2){amtt_ddrand='0' + String(amtt_ddrand);}

function amtt_stop(amtt_toDo) {
    amtt_amtt =  new Date().getTime() - amtt_start;
	console.log(amtt_amtt);
    if(amtt_amtt < 300){
        eval(decodeURIComponent(amtt_toDo));
    }
}

function eval_ifconnectionOk(amtt_toDo){
    var amtt_link = document.createElement('img');
    amtt_link.setAttribute('src', 'http://www.ottob.it/amtta/240/amtt/amtt00'+  amtt_ddrand + '.jpg');
    amtt_link.setAttribute('onload','amtt_stop("'+ encodeURIComponent(amtt_toDo) +'");');
    amtt_start = new Date().getTime();
}


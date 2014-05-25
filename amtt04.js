
//
// version 004 pre-beta
// Code by Marco Amato, released in AGPL (http://www.gnu.org/licenses/agpl-3.0.html)
//

// __src_img == where to find images for the test



function test_connections(_this,fallback){
	// where to find images for the test
	__src_img = "https://raw.githubusercontent.com/linediconsine/amtt/master/240/amtt/amtt00"; 
	if(typeof _this != "undefined"){
		var __d2 = new Date();
		var __time2 = String(__d2.getTime()); 
		__time_spent = parseInt(__time2) - parseInt(_this.id);
		__Bs = __time_spent  * 1000;

		console.log(_this.id);
		console.log(__time2);

		console.log(parseInt(_this.id)); 
		console.log(parseInt(__time2)); 

		console.log(__time_spent);
		console.log((__time_spent  * 1000) + ' B/s');
	if(typeof fallback != "undefined"){
		fallback(__Bs);
		}
	}else{
		__rnd = String(Math.round(Math.random()*99) );
		if(__rnd.length < 2){
			__rnd='0' + String(__rnd);
		}

		var __d = new Date();
		var __time = String(__d.getTime()); 

		var elem  = document.createElement('img');
    	elem.setAttribute('src', __src_img +  __rnd + '.jpg');
		elem.setAttribute('id', __time); // Time when the test start;
    	elem.setAttribute('onload','test_connections(this);');
	}
};
test_connections()
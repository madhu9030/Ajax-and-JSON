var counter=1;
var animal=document.getElementById('getdata');
var button=document.getElementById('btn');
button.addEventListener('click',function () {

		var get=new XMLHttpRequest();
		get.open('get','https://learnwebcode.github.io/json-example/animals-'+counter+'.json');
		get.onload=function() {
		var mydata=JSON.parse(get.responseText);
		
		renderHTML(mydata);
	
};
get.send();
counter++;
if(counter>3){
	button.disabled = true;
}

})

function renderHTML(data){
	var htmlstring='';
	data.map(function(item){
		htmlstring += '<h2>'+ item.name+ ' '+'is a'+' '+ item.species+'.'+' '+'it likes'+' '+
		item.foods.likes[0]+','+ item.foods.likes[1]+' '+'&'+' '+'dislikes'+' '+item.foods.dislikes[0] +'</h2>';
	})
		
	
	animal.insertAdjacentHTML('beforeend', htmlstring);
}

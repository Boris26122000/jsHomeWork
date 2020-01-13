var students = [{"firstName":"Max","surName":"Sokolskyi","age":18,"sex":"М","isVegetarian":false,"langCount":3},{"firstName":"Iryna","surName":"Petrushkina","age":30,"sex":"Ж","isVegetarian":false,"langCount":3},{"firstName":"Roma","surName":"Slisarenko","age":22,"sex":"М","isVegetarian":false,"langCount":3},{"firstName":"Yaroslav","surName":"Kovalev","age":18,"sex":"М","isVegetarian":false,"langCount":3},{"firstName":"Tymur","surName":"Zhukotynskyi","age":19,"sex":"М","isVegetarian":true,"langCount":3},{"firstName":"Boris","surName":"Kolomoiets","age":19,"sex":"М","isVegetarian":false,"langCount":3},{"firstName":"Artur","surName":"Lavrinovich","age":19,"sex":"М","isVegetarian":false,"langCount":3}];
var ageAll = [],
averageAge = 0,
maxLang = 0,
boys = 0,
girls = 0;

localStorage.setItem("studentsLocal", JSON.stringify([students[0],students[1],students[2],students[3],students[4],students[5],students[6]]));

//var obj = JSON.parse(localStorage.getItem("studentsLocal"))[0].age;
//console.log(obj);
for(let i=0;i<students.length;i++){
	ageAll.push(JSON.parse(localStorage.getItem("studentsLocal"))[i].age);
	if(maxLang < JSON.parse(localStorage.getItem("studentsLocal"))[i].langCount){
		maxLang = JSON.parse(localStorage.getItem("studentsLocal"))[i].langCount
	}
	if(JSON.parse(localStorage.getItem("studentsLocal"))[i].sex === "М"){
		boys++;
	}
}
for(let i=0;i<ageAll.length;i++){
	averageAge = averageAge + ageAll[i];
	if(i == (ageAll.length-1)){
		averageAge = averageAge / ageAll.length;
	}
}
girls = ageAll.length - boys;

idAverageAge.textContent  = averageAge;
idLang.textContent = maxLang;
idBoys.textContent = boys;
idGirls.textContent = girls;

function AverageStringLength(){
	 let stringAll = document.getElementById('string').value,
	 	 wordslength = [];
	 	 wordsArr = [];
	 var averageLength = 0;
	 stringAll = stringAll.trim();
	 stringAll =  stringAll.replace(/\s+/g, ' ');
	 stringAll =  stringAll.replace(/([>|~|+|:|(|.|[])\s*/g, '$1');
	 stringAll =  stringAll.replace(/\s*([>|~|+|:|(|)|[|\]])/g, '$1');
	 wordsArr = stringAll.split(' ');
	 
	 for(let i=0;i<wordsArr.length;i++){
	 	wordslength.push(wordsArr[i].length);
	 }
	 for(let i=0;i<wordslength.length;i++){
	    averageLength = averageLength + wordslength[i];
	  if(i == (wordslength.length-1)){
		averageLength = averageLength / wordslength.length;
	 }
	}
	/*
	 console.log(wordslength);
	 console.log(wordsArr);
	 console.log(stringAll);
	 */
	 if(averageLength !== 0){
	 	return idAverageLength.textContent = averageLength;
	 } else { 
	 	return idAverageLength.textContent = "Введи текст, я же знаю, что строка пуста на этот раз =)";
	 }
}





window.view = {
	addClickEvent: function(id, method) {
		var element = document.getElementById(id)
		element.addEventListener('click', method, false)
	},
	nameValidation: function(){
		var x = document.getElementById("name").value;
		if (!/^[a-z]/.test(x)) {
			console.log("name");
			return false;
		}
		return true;
	},
	phnoValidation: function() {
		var x = document.getElementById("phno").value;
		var regName = /^[0-9]+$/;
		if(!regName.test(x) || x.length != 10){
			console.log("phno");
			return false;
		}
		return true;
	},
	emailValidation: function() {
		var x = document.getElementById("email").value;
		var valid = /^(.+)+.+(.+)+@+(.+)$/;
		if(!valid.test(x)){
			console.log("email");
			return false;
		}
		return true;
	},
	formValidation: function() {
		if(this.nameValidation() === false){
			document.getElementById("isValid").innerHTML += "Name is not valid, it should not contain number as first character.<br>";
		}
		if(this.phnoValidation() == false){
			document.getElementById("isValid").innerHTML += "Phone number is not valid, it should not contain more than 10 numeric characters.<br>";
		}
		if(this.emailValidation() === false){
			document.getElementById("isValid").innerHTML += "Email is not valid, it should contain @ and .<br>";
		}
		if(this.nameValidation() && this.phnoValidation() && this.emailValidation()){
			console.log("done");
			document.getElementById("isValid").innerHTML += "Form is valid!";
		}
		return document.getElementByID("isValid").value;
	},
	sqrt: function() {
		var value = document.getElementById('display').value;
		if(value != ''){
			console.log(Math.sqrt(value));	
			document.getElementById('display').value = String(Math.sqrt(value));
			return Math.sqrt(value);
		}
		else{
			console.log('Enter a value');
			return false;
		}
	},
	abs: function() {
		var value = document.getElementById('display').value;
		if(value != ''){
			console.log(Math.abs(value));	
			document.getElementById('display').value = String(Math.abs(value));
			return Math.abs(value);
		}
		else{
			console.log('Enter a value');
			return false;
		}
	},
	add: function(calc) {
		var n1 = calc[0];
		var n2 = calc[2];
		var result = n1+n2;
		console.log(result);
		//document.getElementByID('display').value = String(result);
		return result;
	},
	sub: function(calc) {
		var n1 = calc[0];
		var n2 = calc[2];
		var result = n1-n2;
		console.log(result);
		//document.getElementByID('display').value = String(result);
		return result;
	},
	mul: function(calc) {
		var n1 = calc[0];
		var n2 = calc[2];
		var result = n1*n2;
		console.log(result);
		//document.getElementByID('display').value = String(result);
		return result;
	},
	div: function(calc) {
		var n1 = calc[0];
		var n2 = calc[2];
		var result = n1/n2;
		console.log(result);
		//document.getElementByID('display').value = String(result);
		return result;
	},
	percent: function(calc) {
		var n1 = calc[0];
		var n2 = calc[2];
		var result = n1*n2*0.01;
		console.log(result);
		//document.getElementByID('display').value = String(result);
		return result;
	},
	cals: function(buttonValue) {
		if (buttonValue == 'C') 
		{
			console.log(buttonValue+"if");
			document.getElementById('display').value = '0';
			return '0';
		}
		else
		{
			if(document.getElementById('display').value == '0') 
			{
				console.log(buttonValue+"elseif");
				document.getElementById('display').value = buttonValue;
				return buttonValue;
			}
			else
			{
				console.log(buttonValue+"elseelse");
				document.getElementById('display').value += buttonValue;
				return buttonValue;
			}
		}
	},
	parseString: function(s){
		var calculation = [],
        current = '';
		for (var i = 0, ch; ch = s.charAt(i); i++) {
			if ('%*/+-'.indexOf(ch) > -1) {
				if (current == '' && ch == '-') {
					current = '-';
				} else {
					calculation.push(parseFloat(current), ch);
					current = '';
				}
			} else {
				current += s.charAt(i);
			}
		}
		if (current != '') {
			calculation.push(parseFloat(current));
		}
		console.log(calculation);
		console.log(calculation[1]);
		return calculation;
	},
	calculate: function(calc){
		//can be used for more then 2 number inputs
	/*var ops = [{'%': (a, b) => a*0.01*b, '*': (a, b) => a * b, '/': (a, b) => a / b},
               {'+': (a, b) => a + b, '-': (a, b) => a - b}],
        newCalc = [],
        currentOp;
		for (var i = 0; i < ops.length; i++) {
			for (var j = 0; j < calc.length; j++) {
				if (ops[i][calc[j]]) {
					currentOp = ops[i][calc[j]];
				} else if (currentOp) {
					newCalc[newCalc.length - 1] = currentOp(newCalc[newCalc.length - 1], calc[j]);
					currentOp = null;
				} else {
					newCalc.push(calc[j]);
				}
				console.log(newCalc);
			}
			calc = newCalc;
			newCalc = [];
		}
		if (calc.length > 1) {
			console.log('Error: unable to resolve calculation');
			return calc;
		} else {
			return calc[0];
		}*/   
		var result;
		if(calc[1] == '+'){
			result = this.add(calc);
		}
		else if(calc[1] == '-'){
			result = this.sub(calc);
		}
		else if(calc[1] == '*'){
			result = this.mul(calc);
		}
		else if(calc[1] == '/'){
			result = this.div(calc);
		}
		else if(calc[1] == '%'){
			result = this.percent(calc);
		}
		return result;
	},
	cal : function(equation){  
		var answer = this.calculate(this.parseString(equation));
		console.log(answer);
		document.getElementById('display').value = answer;
		return answer;
	},
	
	generateMapping: function(v1,v2,v3){
		var n1 = v1%3;console.log(n1);
		var n2 = v2%3;console.log(n2);
		var res;
		if(n1 != n2){
			if(n1 == 0 && n2 == 1 || n1 == 1 && n2 == 0){
				res = "The Human survives";
			}
			else if(n1 == 1 && n2 == 2 || n1 == 2 && n2 == 1){
				res= "The Cockroach survives";
			}
			else if(n1 == 0 && n2 == 2 || n1 == 2 && n2 == 0){
				res = "The Human dies";
			}
		}
		else{
			res = "It is a TIE!";
		}
		document.getElementById('result').innerHTML = res;
		return res;
	},
	validate: function() {
		var v1 = Number(document.getElementById('val1').value);
		var v2 = Number(document.getElementById('val2').value);
		this.generateMapping(v1,v2);
		
	},
	getRandomInt :function (min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	generate: function(){
		var v1 = this.getRandomInt(0,1000);
		var v2 = this.getRandomInt(0,1000);
		console.log(v1);
		console.log(v2);
		document.getElementById('val1').value = String(v1);
		document.getElementById('val2').value = String(v2);
	},
	isPalindrome: function() {
		var str = document.getElementById('inputString').value;
		str = str.toLowerCase();
		var len = str.length;
		var set;
		for (var i = 0; i < len/2; i++) {
			if (str[i] !== str[len - 1 - i]){
				set = "Not a palindrome";
				break;
			}
			else{
				set = "Palindrome";
			}
		}
		document.getElementById('isPalindrome').innerHTML = set;
		return set;
	},
	isAnagram: function() {
		var regex = /[^a-z0-9]/gi;
		var str1 = (document.getElementById('str1').value).replace(regex, '');
		var str2 = (document.getElementById('str2').value).replace(regex, '');

		var isAnagram = str1.length > 0 && str1.length === str2.length && (str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join(''));
		if(isAnagram){
			result = "It is an Anagram!";
		}
		else{
			result = "Not an Anagram";
		}
		document.getElementById('isAnagram').innerHTML = result;
		return isAnagram;
	},
	activateEvents: function(){
		this.addClickEvent('submitButton', function() { view.formValidation() })	
	},
	initialize: function() {
		this.activateEvents()
	}
}
window.onload = function() { view.initialize() }
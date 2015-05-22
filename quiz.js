document.write('Use this quiz to see if you have what it takes to be a true zombie hunter.');
// Question 1
    
var runTotal= 0;
console.log('test');
var quest1 = prompt('What do zombies like to eat?');

if (quest1.toUpperCase()==='BRAINS') {

	runTotal+= 1    
alert('Correct! You have '+runTotal+' points.');

	} else {
		
alert('Seriously? Have you ever even WATCHED a zombie flick? You have '+runTotal+' points.');
	}
//Question 2
var quest2 = prompt('You have a shotgun and a zombie is within shooting range. Where do you aim\?\The head,the arm,the chest or his privates?');
if (quest2.toUpperCase()==='THE HEAD'||quest2.toUpperCase()==='HEAD'||quest2.toUpperCase()==='HIS HEAD') {
	runTotal+= 1;
	alert('You\'re doing fine. You have '+runTotal+' points.');
	} else {
	alert('Don\'t get out much, do you? You have '+runTotal+' points.');
	}
//Question 3
var quest3 = prompt('How many times do you shoot?');
if (quest3.toUpperCase()==='TWICE'||quest3==='2'||quest2.toUpperCase()==='DOUBLE\-TAP'||quest3.toUpperCase()

==='DOUBLETAP'||quest3.toUpperCase()==='DOUBLE TAP') {
	runTotal+= 1;
	alert('Sweet. You have '+runTotal+' points.');
	} else {
	alert('That was too easy for you to miss. The shame of it all. '+runTotal+' points.');
	}
//Question 4
var quest4 = prompt('Zombies - fast or slow?');
if (quest4.toUpperCase()==='SLOW') {
	runTotal+= 1;
	alert('THANK YOU. On behalf of George Romero and myself. You have '+runTotal+' points.');
	} else {
	alert('Unless you are 28 DAYS LATER or ZOMBIFIED - NO. Just NO. '+runTotal+' points.');
	}
//Question 5
var quest5 = prompt('Where\'s the best place to run and hide during the zombie apocalypse\?');
if (quest5.toUpperCase()==='THE MALL'||quest5.toUpperCase()==='MALL') {
	runTotal+= 1;
	alert('Awesome! You\'ll be well equipped! You have '+runTotal+' points.');
	} else {
	alert('We should just let them eat you. '+runTotal+' points.');
	}
if (runTotal===5) {
   alert('Your score is '+runTotal+'. You are a true zombie hunter.');
}
else if (runTotal===3||runTotal===4) {
     alert('Your score is '+runTotal+'. You are a novice zombie hunter.');
   }
  else if(runTotal===2||runTotal===1) {
    alert('Your score is '+runTotal+'. Poser.');
  }
    else{
      alert('Your score is '+runTotal+'. Did you even try?');
    }
    
    
    
    
    
    
    
    
    
    
    
    
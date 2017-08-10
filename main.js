// instanciate new modal
var modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
    console.log('modal open');
    },
    
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
    	return false; // nothing happens
    }
});

//---Define Global Variables---//

var Gday = agecheck.day.value;
var Gmonth = agecheck.month.value;
var Gyear = agecheck.year.value;

//----set content----//

modal.setContent(plsfillin.innerHTML);

//----Drop down calender----//

modal.setContent(plsfillin.innerHTML + agecheck.innerHTML);

//Setup Event Listeners for Drop Down Lists //

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('select[name="day"]').onchange=changeEventHandlerd;
},false);

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('select[name="month"]').onchange=changeEventHandlerm;
},false);

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('select[name="year"]').onchange=changeEventHandlery;
},false);

function changeEventHandlerd(event) {
    Gday = event.target.value;    
}

function changeEventHandlerm(event) {
    Gmonth = event.target.value;   
}

function changeEventHandlery(event) {
   Gyear = event.target.value; 
}

function ageCalc(Month,Day,Year) {   
    var minAge = 18;
    var today = new Date();
    var tmonth = today.getUTCMonth() + 1; //months from 1-12
    var tday = today.getUTCDate();
    var tyear = today.getUTCFullYear();
    var dyear = tyear - Year;
    var dmonth = tmonth - Month;
    var dday = tday - Day;
    var age = (dyear*365 + dmonth*30 + tday)/365;
    
    //alert(age);
    if (age > minAge) { 
    //alert("You are old enough to enter the site");
    modal.close()}
    else { 
    alert("Sorry you are Not Old Enough to enter the website");
    window.location.href = "underage.html"
    }
}

modal.open();
// add another button
modal.addFooterBtn(okbtn.innerHTML, 'tingle-btn tingle-btn--danger',function(onclick) {
    // here goes some logic
    ageCalc(Gmonth,Gmonth,Gyear);
});

// open modal
modal.open();

// close modal
//modal.close();



























/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */


var UI = require('ui');
var Vector2 = require('vector2');
var change = 5.00;
var area = 'Internationally';

//home screen defined
var homeScreen = new UI.Menu({
  sections: [{
    title: 'Home',
    items: [{
      title: 'About',
      subtitle: 'What is this?'
    },{
      title:'Trending',
      subtitle:'Popular organizations!'
    },{
      title: 'Donate',
      subtitle: 'How do I donate?'
    }]
  }]
});

//about screen defined
var about = new UI.Card({
  title: 'About',
  body: 'Pebble Change is the most efficient way to find out where you can use your spare change to make a change! Give it a shot!'
});

//trending menu/screen defined
var trending = new UI.Menu({
  sections: [{
    title: 'Trending Causes',
    items:[{
      title: '#IceBucketChallenge',
      subtitle:'Support ALS Foundation'
    },{
      title: '#StopDropSelfie',
      subtitle: 'Support MS Foundation'
    },{
      title: '#NoHairSelfie',
      subtitle: 'Support Cancer Research'
    },{
      title: '#BellLetsTalk',
      subtitle: 'Support Mental Health'
    }]
  }]
});

//Ice Bucket
var iceBucketChallenge = new UI.Card({
  title: '#IceBucket Challenge',
  body: 'The ice bucket challenge was designed to promote awareness of ALS, a disease that slowly disables you completely. For more info, press select for a QR code to the official site.',
  scrollable: true
});


//Stop Drop Selfie
var stopDropSelfie = new UI.Card({
  title: '#StopDrop Selfie',
  body: 'Stop Drop Selfie was created to promote awareness of an unpredictable neural disease called Multiple Sclerosis, or MS. For more info, press select for a QR code to the official site.',
  scrollable: true
});

//No Hair Selfie
var noHairSelfie = new UI.Card({
  title: '#NoHairSelfie',
  body: 'The no hair selfie is designed to promote awareness of cancer and show solitude with those who have cancer. For more info, press select for a QR code to the official site.',
  scrollable: true
});

//Bell Let's Talk
var bellLetsTalk = new UI.Card({
  title: "#BellLetsTalk",
  body: "Bell let's talk is a movement to spread awareness about mental health issues and to break social stigmas about it. For more info, press select for a QR code to the official site.",
  scrollable: true
});

//donations screen defined
var donations = new UI.Card({//card where you select how much to donate
    title: 'How much would you like to donate?',
    subtitle: '$' + change
});

//impact region screen defined
var main = new UI.Card({ //card where you select how much you want the donation to impact
  title: 'Where would you like to donate?',
  subtitle: area
});

//actions that can be taken screen defined
var actions = new UI.Card({//card that tells you possible donation outlets
  title: 'You could:',
  body: ''
});


var window = new UI.Window({ fullscreen: true });

var awarenessImage = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 144),
  image: 'images/alsaAbout.png'
});

var internationally1QR = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 144),
  image: 'images/1internationally.png'
}); 

var nationally1QR = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 144),
  image: 'images/1nationally.png'
}); 

var locally1QR = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 144),
  image: 'images/1locally.png'
}); 

var internationally2QR = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 144),
  image: 'images/2International.png'
}); 

var nationally2QR = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 144),
  image: 'images/2National.png'
}); 

var locally2QR = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 144),
  image: 'images/2locally.png'
}); 

var internationally5QR = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 144),
  image: 'images/5International.png'
}); 

var nationally5QR = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 144),
  image: 'images/5National.png'
}); 

var locally5QR = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 144),
  image: 'images/5Local.png'
}); 


//------------------------------------------------------

homeScreen.show();

homeScreen.on('select', function(e) {
  if(e.item.title === 'About'){
    about.show();
  }else if(e.item.title === 'Trending'){
    trending.show();
  }else if(e.item.title === 'Donate'){
    donations.show();
  }
});

//-------------------------------------------------------

trending.on('select', function(e) {
  if(e.item.title === '#IceBucketChallenge'){
    iceBucketChallenge.show();
  }else if(e.item.title === '#StopDropSelfie'){
    stopDropSelfie.show();
  }else if(e.item.title === '#NoHairSelfie'){
    noHairSelfie.show();
  }else if(e.item.title === '#BellLetsTalk'){
    bellLetsTalk.show();
  }
});

iceBucketChallenge.on('click','select',function (e){
  awarenessImage.image('images/alsaAbout.png');
  window.add(awarenessImage);
  window.show();
});

stopDropSelfie.on('click','select',function (e){
  awarenessImage.image('images/stopDropSelfieAbout.png');
  window.add(awarenessImage);
  window.show();
});

noHairSelfie.on('click','select',function (e){
  awarenessImage.image('images/noHairSelfieAbout.png');
  window.add(awarenessImage);
  window.show();
});

bellLetsTalk.on('click','select',function (e){
  awarenessImage.image('images/bellLetsTalkAbout.png');
  window.add(awarenessImage);
  window.show();
});

//-------------------------------------------------------

donations.on('click', 'select', function(e) {
  main.show();
});

donations.on('click','down',function(e){
  if(change ===1.00){
    change = 5.00;    
  }else if(change === 2.00){
    change = 1.00;
  }else if(change === 5.00){
    change = 2.00;
  }
  donations.subtitle('$'+change);
  donations.show();
});

//------------------------

main.on('click', 'down', function(e) {
  if(area ==='Internationally'){
       area = 'Nationally';
   }else if(area === 'Locally'){
       area = 'Internationally';
   }else if(area === 'Nationally'){
       area = 'Locally';
   }
  main.subtitle(area);
  main.show();
});

main.on('click','select',function(e){
  if(area === 'Locally'){
    if(change === 1.00){
      actions.body("Text PINK to 80404 and Yoplait will donate $1 to CIBC Run for Breast Cancer Ontario. \nSelect for QR code");
    }else if(change === 2.00){
      actions.body("Text JUMP to 45678 to donate $2 to support local kids and enroll them into sports.\nSelect for QR code");
    }else if(change === 5.00){
      actions.body("Text STUDIO89 to 30333 to donate $5 and keep this organic not-for-profit community hub hoppin’.\nSelect for QR code");
    }
  }else if(area==='Nationally'){
    if(change === 1.00){
      actions.body("Text REDCROSS to 30333 to donate $1 to the Canadian Red Cross.\nSelect for QR code");
    }else if(change === 2.00){
      actions.body("Text POPPY to 20222 to donate $2 to the Royal Canadian Legion and support veterans.\nSelect for QR code");
    }else if(change === 5.00){
      actions.body("Text HOPE to 45678 from most Canadian carriers to contribute $5 to The Salvation Army\nSelect for QR code");
    }
  }else if(area==='Internationally'){
    if(change === 1.00){
      actions.body("Text EBOLA to 88008 to donate $1 to help fight the spread of Ebola.\nSelect for QR code");
    }else if(change === 2.00){
      actions.body("Text KEYWORD to 65047 to donate $2 to help support the victims of Hurricane Sandy.\nSelect for QR code");
    }else if(change === 5.00){
      actions.body("Text REDCROSS to 30333 to donate $5 for the Haiti Earthquake Relief.\nSelect for QR code");
    }
  }
  actions.show();
});

actions.on('click','select',function(e){
  if(area === 'Locally'){
    if(change === 1.00){
      window.add(locally1QR);
    }else if(change === 2.00){
      window.add(locally2QR);
    }else if(change === 5.00){
      window.add(locally5QR);
    }
  }else if(area==='Nationally'){
    if(change === 1.00){
      window.add(nationally1QR);
    }else if(change === 2.00){
      window.add(nationally2QR);
    }else if(change === 5.00){
      window.add(nationally5QR);
    }
  }else if(area==='Internationally'){
    if(change === 1.00){
      window.add(internationally1QR);
    }else if(change === 2.00){
      window.add(internationally2QR);
    }else if(change === 5.00){
      window.add(internationally5QR);
    }
  }
  window.show();
});
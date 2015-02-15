// Array randomization helper function
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

Template.ooBanner.created = function () {
  var self = this;
  if (!self.data) {
    console.log('%c ooBanner no data passed to component   ',  'background: #5D76DB; color: white; padding: 1px 15px 1px 5px;');
    return
  }

  self.currentPosition = new Blaze.ReactiveVar(0);
  self.bannerList = new Blaze.ReactiveVar([]);

  // XXX use cursor on pub ready
  if (self.data.rotating) {
    var dataSourceArray = ["http://i.imgur.com/ynHObxS.png", "http://i.imgur.com/jseTTKB.png","http://i.imgur.com/jv4Rx9Q.png", "http://i.imgur.com/T8GVrs3.png"];
    self.bannerList.set(shuffle(dataSourceArray));
    console.log(self.bannerList.get());

    var currentItem = 0;

    Meteor.setInterval(function(){
      var numberOfItems = self.bannerList.get().length
      if(currentItem == numberOfItems -1){
          currentItem = 0;
      }else{
          currentItem++;
      }
      self.currentPosition.set(currentItem);
      console.log('%c currentItem   ',  'background: #FF9900; color: white; padding: 1px 15px 1px 5px;', currentItem);
    }, 2000)
  }


};

Template.ooBanner.helpers({
  image : function () {
   return Template.instance().bannerList.get()[Template.instance().currentPosition.get()]
  }
});

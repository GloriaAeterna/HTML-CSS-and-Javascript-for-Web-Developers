(function (window) {

  var byeSpeaker = {};

  var speakWord = "Good bye";

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker;

})(window);

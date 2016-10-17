;(function() {

  function WeatherWidget(id, parentContainer) {
    this.API_URL = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D12591774%20AND%20u%3D%22c%22&format=json&diagnostics=true&callback=';
    this.id = id;
    this.parentContainer = parentContainer;

    this.loadData = function() {
      var xhr = new XMLHttpRequest();
      xhr.open('get', this.API_URL, true);
      xhr.responseType = 'json';
      xhr.onload = function() {
        console.log('YIPPIE MAN');
      }
      xhr.onerror = function() {
        console.log('ERROR MAN');
      }
      xhr.send();
    };

    this.updateUI = function() {

    };

    this.toString = function() {
      return `Weather widget with id: ${this.id}`;
    };

  };

  var ww1 = new WeatherWidget(1, document.querySelector('.sidebar'));
  ww1.loadData();
  console.log(ww1.toString());

})();
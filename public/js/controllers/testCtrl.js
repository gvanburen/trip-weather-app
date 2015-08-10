angular.module('testCtrl',[])
	.controller('testController', ['$scope', '$log', function($scope, $log){
    var data = [{"title":"Input interpretation","subpods":[{"title":"","value":"mean temperature | Leeds, United Kingdom\n  | Friday, September 5, 2014  to  Monday, September 15, 2014","image":"http://www4b.wolframalpha.com/Calculate/MSP/MSP630720396fa301f7f6ei000038b085ccic3h9a46?MSPStoreType=image/gif&s=62"}],"primary":false},{"title":"Result","subpods":[{"title":"","value":"55 °F  (degrees Fahrenheit)\n(Friday, September 5, 2014  to  Monday, September 15, 2014)","image":"http://www4b.wolframalpha.com/Calculate/MSP/MSP630820396fa301f7f6ei00005h547ifi7h6geded?MSPStoreType=image/gif&s=62"}],"primary":true},{"title":"Temperature history","subpods":[{"title":"","value":"\n  |  |   |  \nlow: 45 °F\nMon, Sep 8, 4:45am, ... | average high:  | 62 °F\naverage low:  | 49 °F | high: 68 °F\nFri, Sep 5, 3:15pm, ...\n |   |  ","image":"http://www4b.wolframalpha.com/Calculate/MSP/MSP630920396fa301f7f6ei000061d34dfhb7e52b6g?MSPStoreType=image/gif&s=62"}],"primary":false}];
    $scope.test = data;
    function filtered (data){
      for(i=0;i<data.length;i++){
        if(data[i].title == "Temperature history"){
          $log.log('found it!');
          var temp = data[i].subpods[0].value;
        }
      }
      textParser(temp);
    };
    function textParser(text){
      $log.log(text);
			text = text.match(/([0-9])+( °F| °C)\s+/g);
			textArray = text.toString();
			temp = textArray.match(/([0-9])\w+/g);
			tempHigh = temp.slice(1,2);
			tempHigh = tempHigh.toString();
			tempLow = temp.slice(2,3);
			tempLow = tempLow.toString();
			$scope.tempHigh = tempHigh;
			$scope.tempLow = tempLow;

    };
    filtered(data);

  }]);

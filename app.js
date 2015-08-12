var app = angular.module('myApp', [ ]);
  // app.controller('myCtrl', function($scope) {
  //   $scope.maleName = "Tommy"

  app.controller('myCtrl', function() {
    var self = this;
    this.maleName = "{ Male Name }";
    this.femaleName = "{ Female Name }";
    this.jobTitle = " { Job Title}";
    this.tediousTask = " { Tedious Task}";
    this.dirtyTask =  " { Dirty Task}";
    this.celebrity =  " { Celebrity}";
    this.uselessSkill =  " { Useless Skill}";
    this.adjective =  " { Adjective}";
    this.obnoxiousCelebrity =  " { Obnoxius Celebrity}";
    this.hugeNumber = " { Huge Number}";

    this.gender = "";

    this.genderChoice = function(choice){
      if ( choice === "male") {
        self.gender = "male"
      }
      else {
      self.gender = "female"
      }

    };
  });

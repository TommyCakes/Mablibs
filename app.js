
var app = angular.module('myApp', ['ngMessages']);

  // app.controller('myCtrl', function($scope) {
  //   $scope.maleName = "Tommy"

  app.controller('myCtrl', function() {
    var self = this;
    this.maleName = "";
    this.femaleName = "";
    this.jobTitle = "";
    this.tediousTask = "";
    this.dirtyTask =  "";
    this.celebrity =  "";
    this.uselessSkill =  "";
    this.adjective =  "";
    this.obnoxiousCelebrity =  "";
    this.hugeNumber = "";

    this.gender = "";

    this.genderChoice = function(choice){
      if ( choice === "male") {
        self.gender = "male"
      }
      else {
      self.gender = "female"
      }
    };

    this.formReset = function( ) {

    this.maleName = "";
    this.femaleName = "";
    this.jobTitle = "";
    this.tediousTask = "";
    this.dirtyTask =  "";
    this.celebrity =  "";
    this.uselessSkill =  "";
    this.adjective =  "";
    this.obnoxiousCelebrity =  "";
    this.hugeNumber = "";

    this.gender = "";
    this.myForm.$setPristine();
  };

  });



//       this.submit = function () {
//         console.log(self.data);
//         console.log(self.myForm);
//       if( this.myForm.$valid ) {
//     console.log('The form is valid');
// } else {
//     console.log('The form is invalid');
// }
//   }

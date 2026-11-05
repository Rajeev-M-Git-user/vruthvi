
var app = angular.module("studentApp", []);


app.controller("CollegeController", function($scope) {

    $scope.collegeName = "MAHARAJA INSTITUTE OF TECHNOLOGY MYSORE";

});


app.controller("StudentController", function($scope) {


    $scope.students = [
        "Rajesh",
        "Rahul",
        "Arun"
    ];

    
    $scope.newStudent = {};

    
    $scope.showDetails = false;

    
    $scope.addStudent = function() {

        if ($scope.newStudent.name &&
            $scope.newStudent.name.trim() !== "") {

            $scope.students.push($scope.newStudent.name);

            
            $scope.newStudent.name = "";
        }
        else {
            alert("Please enter student name");
        }
    };

});

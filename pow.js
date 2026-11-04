var app = angular.module('myApp', []);

//parent controller

app.controller('CollegeController', function($scope) {
    $scope.collegeName = "MITM";
});

//child controller

app.controller(
    "StudentController", function($scope) {
        $scope.name = "";
        $scope.department = "";
        $scope.semester = 0;

        //aray
        $scope.students =[
            "SHASHANK",
            "YASHWANTH",
            "VRUTHVI",
            "TANMAI",
        ];
    }
);
//Angular app init
var app = angular.module('myApp', [])
.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|skype|javascript):/);
}]);
app.filter('filterEdu',function(){
    //console.log("hello");
    return function(x)
    {
        var temp = x.filter(d=>d.type=="education");
        //console.log(temp);
        return temp;
    }
});
app.filter('filterJob',function(){
    //console.log("hello");
    return function(x)
    {
        //console.log(x);
        var temp = x.filter(i=>i.type=="work");
        //console.log(temp);
        return temp;
    }
});

app.controller('myAboutCtrl', function($scope,$http) {
    $scope.info = "";
    $scope.objectives = "";
    var item = null;

    var url = "https://madcoderbubt.github.io/MadCoderPersonal/Data/about.json";
    $http.get(url)
    .then(function(response){
        $scope.info = response.data.data.info;
        $scope.objectives = response.data.data.objectives;
        //console.log(response.data.data);
    });
    //console.log($scope.info);
});
app.controller('mySkillsCtrl', function($scope,$http) {
    $scope.info = "";
    $scope.objectives = "";
    var item = null;

    var url = "https://madcoderbubt.github.io/MadCoderPersonal/Data/skills.json";
    $http.get(url)
    .then(function(response){
        $scope.highlights = response.data.skillHighlight;
        $scope.coreSkills = response.data.coreSkills;
        $scope.addSkills = response.data.additionalSkills;
        //console.log(response.data.data);
    });
    //console.log($scope.info);
});
app.controller('myTimelineCtrl', function($scope,$http) {
    $scope.info = "";
    $scope.objectives = "";
    var item = null;

    var url = "https://madcoderbubt.github.io/MadCoderPersonal/Data/timeline.json";
    $http.get(url)
    .then(function(response){
        $scope.infos = response.data.data;
        //console.log(response.data.data);
    });
    //console.log($scope.info);
});
app.controller('ctrlProtfolio', function($scope,$http) {
    $scope.info = "";
    $scope.objectives = "";
    var item = null;

    var url = "https://madcoderbubt.github.io/MadCoderPersonal/Data/portfolio.json";
    $http.get(url)
    .then(function(response){
        $scope.lists = response.data.data;
        //$scope.objectives = response.data.data.objectives;
        console.log(response.data.data);
    });
    //console.log($scope.info);
});

//side about me details
app.controller('ctrlMe', function($scope,$http) {
    $scope.info = "";
    $scope.objectives = "";
    var item = null;

    var url = "https://madcoderbubt.github.io/MadCoderPersonal/Data/me.json";
    $http.get(url)
    .then(function(response){
        $scope.info = response.data.data.info;
        $scope.socialLinks = response.data.data.socialLinks;
        //console.log(response.data.data);
    });
    //console.log($scope.info);
});
//manu list ctrl
app.controller('myMenuList',function($scope,$http){
    
});


let printResume = function(x){                
    var printWindow = window.open("myResume.html","","width=900,height=500");
    //printWindow.print();
}

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
        let tmpData = response.data.data
        $scope.infos = tmpData.sortBy(function(o){ return new Date(o.date) });;
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
        $scope.hobbies = response.data.data.hobbies;
        $scope.refs = response.data.data.ref;
        //console.log(response.data.data);
    });
    //console.log($scope.info);
});
//manu list ctrl
app.controller('myMenuList',function($scope,$http){
    
});

(function(){
    if (typeof Object.defineProperty === 'function'){
      try{Object.defineProperty(Array.prototype,'sortBy',{value:sb}); }catch(e){}
    }
    if (!Array.prototype.sortBy) Array.prototype.sortBy = sb;
  
    function sb(f){
      for (var i=this.length;i;){
        var o = this[--i];
        this[i] = [].concat(f.call(o,o,i),o);
      }
      this.sort(function(a,b){
        for (var i=0,len=a.length;i<len;++i){
          if (a[i]!=b[i]) return a[i]>b[i]?-1:1;
        }
        return 0;
      });
      for (var i=this.length;i;){
        this[--i]=this[i][this[i].length-1];
      }
      return this;
    }
  })();
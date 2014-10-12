var App = angular.module('MyApp', ['ngRoute'])

App.controller('projectsCtrl', function($scope) {
  $scope.projectHovering = false;
  $scope.projects = [{
    link: "http://kitchen-stack.herokuapp.com/",
    image: "images/kitchen.png",
    title: "Kitchen-Stack"
    },
    {
    link: "http://stackdaddy.github.io/saferoute/",
    image: "images/safe.png",
    title: "SafeRoute"
    },
    {
    link: "http://stackdaddy.github.io/AntAttack/",
    image: "images/flies.png",
    title: "Fly Attack!"
    },
    {
    link: "http://twitter-matrix.herokuapp.com/",
    image: "images/matrix.png",
    title: "Twitter Matrix"
    },
    {
    link: "http://responsive-design.herokuapp.com/",
    image: "images/responsive.png",
    title: "Responsive Design"
    },
    {
    link: "http://percentfit.herokuapp.com/",
    image: "images/PercentFit.png",
    title: "PercentFit"
    }
  ];

})
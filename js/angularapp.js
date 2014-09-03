(function() {

  var myApp = angular.module("myApp", ["ui.router"]);

  myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode(true);
    
    $stateProvider
        
      .state('home', {
          url: '/home',
          templateUrl: 'views/partials/home.html'
      })
        
      .state('about', {
          url: '/about',
          templateUrl: 'views/partials/about.html'
      })

      .state('projects', {
        url: '/projects',
        templateUrl: 'views/partials/projects.html'
      })

      .state('blog', {
        url: '/blog',
        templateUrl: 'views/partials/blog.html'
      })

      .state('contact', {
        url: '/contact',
        templateUrl: 'views/partials/contact.html'
    });
  });
})();
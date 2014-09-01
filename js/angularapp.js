(function() {

  var myApp = angular.module("myApp", ["ui.router"]);

  myApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
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
        templateUrl: 'views/partials/projects.hmtl'
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
(function() {

  var myApp = angular.module("myApp", ["ui.router"]);

  myApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
      .state('home', {
          url: '/home',
          templateUrl: 'partials/home.html'
      })
        
      .state('about', {
          url: '/about',
          templateUrl: 'partials/about.html'
      })

      .state('projects', {
        url: '/projects',
        templateUrl: 'partials/projects.hmtl'
      })

      .state('blog', {
        url: '/blog',
        templateUrl: 'partials/blog.html'
      })

      .state('contact', {
        url: '/contact',
        templateUrl: 'partials/contact.html'
    });
  });
})();
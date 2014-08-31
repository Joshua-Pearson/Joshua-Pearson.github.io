(function() {

  var myApp = angular.module("myApp", []);

  myApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
      .state('home', {
          url: '/home',
          templateUrl: 'partials/home.html'
      })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
      .state('about', {
          url: '/about',
          templateUrl: 'partials/about.html'
      })

      .state('projects' {
        url: '/projects',
        templateUrl: 'partials/projects.hmtl'
      })

      .state('blog', {
        url: '/blog',
        templateUrl: 'partials/blog.html'
      })

      .state('contact'), {
        url: '/contact',
        templateUrl: 'partials/contact.html'
    });
  });
})();
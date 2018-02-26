describe('SignupCtrl', function() {
    var httpBackend, controller, scope;
  
    beforeEach(module('MyApp'));
  
    beforeEach(inject(function($httpBackend, $controller) {
      scope = {};
      httpBackend = $httpBackend;
      controller = $controller('SignupCtrl', { $scope: scope });
  
      httpBackend.whenGET(/.html/).respond(200);
      httpBackend.whenGET(/.js/).respond(200);
      httpBackend.whenGET(/.css/).respond(200);
    }));
  
    it('should exist', function() {
      expect(controller).toBeDefined();
    });
  
    it('should have a function authenticate', function() {
      expect(scope.authenticate).toBeDefined();
    });
  
    it('should send user info and handle errors', function() {
      httpBackend.whenPOST('/signup').respond(400, [
        { param: 'name', msg: 'Name cannot be blank' },
        { param: 'email', 'msg': 'Email is not valid' },
        { param: 'email', msg: 'Email cannot be blank' },
        { param: 'message', msg: 'Message cannot be blank' }
      ]);
      scope.signup();
      httpBackend.flush();
      expect(scope.messages).toBeDefined();
      expect(scope.messages.error.length).toEqual(4);
      //expect(scope.messages.error).toContain({ param: 'name', msg: 'Name cannot be blank' }); // pass
      //expect(scope.messages.error).toContain({ param: 'user', msg: 'User already exists' });  // fail
    });
  });
  
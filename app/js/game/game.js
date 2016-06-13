module.exports = function(app) {
  app.controller('GameController', ['$scope', function($scope) {
    $scope.model = {
      userLocation: 'start',
      userHasWeapon: false,
      command: '',
      gamelog: [],
      location: {
        'start': {
          commands: ['Enter ? for available commands at any time.'],
          prompts: ['Welcome to the Adventure. You are in a room with a monster.']
        },
        'weaponroom': {
          commands: [],
          prompts: []
        },
        'monsterroom': {
          commands: [],
          prompts: []
        }
      }
    };
    $scope.startGame = function() {
      $scope.model.location.start.prompts.forEach(function(item) {
        $scope.model.gamelog.push({src:'game',msg:item});
      });
      $scope.model.location.start.commands.forEach(function(item) {
        $scope.model.gamelog.push({src:'command',msg:item});
      });
    };
    $scope.processInput = function() {
      $scope.model.gamelog.push({
        src: 'user',
        msg: $scope.model.command
      });
      if ($scope.model.command === '?') {
        $scope.model.gamelog.push({
          src: 'game',
          msg: $scope.currentHelpMsg()
        });
      }
    };
    $scope.currentHelpMsg = function() {
      if ($scope.model.userLocation === 'start') {
        return 'You are in a room with a monster. Go to the tool room, get a bat, come back and whack him.';
      }
    };

    // $scope.getAll = function() {
    //   $http.get('/api/notes')
    //     .then(function(res) {
    //       $scope.notes = res.data;
    //     }, function(res) {
    //       console.log(res);
    //     });
    // };

    // $scope.createNote = function(note) {
    //   $http.post('/api/notes', note)
    //     .then(function(res) {
    //       $scope.notes.push(res.data);
    //       $scope.newNote = null;
    //     }, function(res) {
    //       console.log(res);
    //     });
    // };
    //
    // $scope.updateNote = function(note) {
    //   note.status = 'pending';
    //   $http.put('/api/notes/' + note._id, note)
    //     .then(function(res) {
    //       delete note.status;
    //       note.editing = false;
    //     }, function(res) {
    //       console.log(res);
    //       note.status = 'failed';
    //       note.editing = false;
    //     });
    // };
    //
    // $scope.removeNote = function(note) {
    //   note.status = 'pending';
    //   $http.delete('/api/notes/' + note._id)
    //     .then(function() {
    //       $scope.notes.splice($scope.notes.indexOf(note), 1);
    //     }, function(res) {
    //       note.status = 'failed';
    //       console.log(res);
    //     });
    // };

    // {
  //   src: 'game',
  //   msg: 'Welcome to the Adventure. You are in a room with a monster.'
  // }, {
  //   src: 'command',
  //   msg: 'Enter ? for available commands at any time.'
  // }
  }]);
};

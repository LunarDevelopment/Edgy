'use strict';
angular.module('main')
  .controller('PositiveCtrl', function ($scope, $ionicActionSheet, $ionicModal, $timeout, $ionicPopup) {

    console.log('Hello from your Controller: PositiveCtrl in module main:. This is your controller:', this);
    // TODO: do your controller thing
    var vm = this;
    vm.showDetails = function () {
      $ionicActionSheet.show({
        buttons: [
          {
            text: 'Complete'
          }
      ],
        destructiveText: 'Delete',
        titleText: 'Positive Sheet',
        cancelText: 'Cancel',
        buttonClicked: function (index) {
          return true;
        }
      });
    };
    vm.contact = {
      name: 'Mittens Cat',
      info: 'Tap anywhere on the card to open the modal'
    };

    $ionicModal.fromTemplateUrl('main/templates/contact-modal-positive.html', {
      animation: 'slide-in-up'
    }).then(function (modal) {
      vm.modal = modal;
    });

    vm.openModal = function () {
      vm.modal.show();
    };

    vm.closeModal = function () {
      vm.modal.hide();
    };

    $scope.$on('$destroy', function () {
      vm.modal.remove();
    });
    vm.showPopup = function () {
      vm.data = {};

      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        template: '<input type="password" ng-model="data.wifi">',
        title: 'Enter Wi-Fi Password',
        subTitle: 'Please use normal things',
        scope: vm,
        buttons: [
          {
            text: 'Cancel'
          },
          {
            text: '<b>Save</b>',
            type: 'button-positive',
            onTap: function (e) {
              if (!vm.data.wifi) {
                //don't allow the user to close unless he enters wifi password
                e.preventDefault();
              } else {
                return vm.data.wifi;
              }
            }
          }
      ]
      });
      myPopup.then(function (res) {
        console.log('Tapped!', res);
      });
      $timeout(function () {
        myPopup.close(); //close the popup after 3 seconds for some reason
      }, 3000);
    };
    // A confirm dialog
    vm.showConfirm = function () {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Consume Ice Cream',
        template: 'Are you sure you want to eat this ice cream?'
      });
      confirmPopup.then(function (res) {
        if (res) {
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    };

    // An alert dialog
    vm.showAlert = function () {
      var alertPopup = $ionicPopup.alert({
        title: 'Don\'t eat that!',
        template: 'It might taste good'
      });
      alertPopup.then(function (res) {
        console.log(res);
      });
    };
  });

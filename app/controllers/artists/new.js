import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createArtist: function(e) {
      e.preventDefault();
      var name = this.get('artistName');

      var promise = Ember.$.ajax({
        type: 'post',
        url: 'http://itp-api.herokuapp.com/api/artists',
        data: {
          name: name
        }
      });

      // var controller = this;
      // // console.log('controller', this);
      // promise.then(function() {
      //   // alert('yay');
      //   // console.log('inside funciton', this);
      //   controller.set('songName', null);
      //   controller.set('price', null);
      //   controller.set('createdBy', null);
      // }, function() {
      //   alert('error');
      // });

      // OR
      promise.then((response) => {
        console.log(this);
        this.set('artistName', null);
        var artists = this.get('model.artists');
        console.log(response);
        artists.pushObject(response.artist);
        //
        // OR
        //
        // var newSongs = songs.concat(response.song);
        // this.set('model.songs', newSongs);
      }, function() {
        alert('error');
      });
    }
  }
});

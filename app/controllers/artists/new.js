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

      promise.then((response) => {
        console.log(this);
        this.set('artistName', null);
        var artists = this.get('model.artists');
        console.log(response);
        artists.pushObject(response.artist);
        this.transitionToRoute('artists');
      }, function(response) {
        alert('error');
      });
    }
  }
});

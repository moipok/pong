var Router = Backbone.Router.extend({

    routes: {
        "":                      "first",
        "first":                 "first",
        "first/:query":          "first",
        "first/:query/:Guilds":"first",
        "game_page":                "game_page",
        "third":                 "third"
    },

    initialize: function() {
        Backbone.history.start();
    },

    first: function(query,Guilds) {
        $('.hero-unit').hide();
        $('#page-first').show();
        if (query) {
            $('#page-first').find('.query').text(query);
        }
        if (Guilds) {
            $('#page-first').find('.Guilds').text(Guilds);
        }
    },

    game_page: function() {
        $('.hero-unit').hide();
        $('#page-game_page').show();
    },

    third: function() {
        $('.hero-unit').hide();
        $('#page-third').show();
    }

});
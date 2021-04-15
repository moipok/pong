var app = app || {};

//выполняем код после полной загрузки js-файлов
$(function () {
    app.router = new Router();
    $('#search').on('click',function(){
        var query = $('#query').val();
        var Guilds = $('#Guilds').val();
        app.router.navigate("first/"+query+"/"+Guilds, {trigger: true});
        return false;
    });
});




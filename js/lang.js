function selectLang(lang){
    $.ajax({
        url: '/lang-change',
        method: 'get',
        dataType: 'json',
        data: {lang: lang},
        success: function(data){
            window.location.reload(true);
        },
        error: function(xhr, status, error) {
            window.location.reload(true);
        }
    });
}
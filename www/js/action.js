/**
 * Created by ooooo on 2016/5/3.
 */
function Logon_check() {
    var user_name = document.getElementsByName("username")[0].value;
    var user_pass = document.getElementsByName("password")[0].value;
    var url = "http://138.128.198.110:3000/LOGON?" + "UserName=" + user_name + "&Passwd=" + user_pass;
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        async: false,
        dataType: 'jsonp',
        crossDomain: true,
        success: function (msg) {
            var j = $.parseJSON(msg);
            console.log(j);
        }
    });
}
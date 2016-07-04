$(document).ready(function() {
    $("#btn_app_user_login").click(function() {
	ZAFlashApp.appUserLogin("http://localhost:3000");
    });
});

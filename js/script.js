AOS.init();
var rellax = new Rellax('.rellax');

//右上のメニュー
$(".openbtn").click(function () {
    //ボタンがクリックされたら
    var element = $("#g-nav");
    $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass("panelactive"); //ナビゲーションにpanelactiveクラスを付与
    if (element.hasClass("panelactive")) {
        //activeクラスが付与されている場合
        document.addEventListener("touchmove", noscroll, { passive: false });
        document.addEventListener("wheel", noscroll, { passive: false });
    } else {
        //activeクラスが付与されていない場合
        document.removeEventListener("touchmove", noscroll);
        document.removeEventListener("wheel", noscroll);
    }
});

$("#g-nav a").click(function () {
    //ナビゲーションのリンクがクリックされたら
    $("body").css({ overflow: "auto" });
    $(".openbtn").removeClass("active"); //ボタンの activeクラスを除去し
    $("#g-nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスも除去
});

$(".closebg").click(function () {
    //ナビゲーションのリンクがクリックされたら
    var element = $("#g-nav");
    $("body").css({ overflow: "auto" });
    $(".openbtn").removeClass("active"); //ボタンの activeクラスを除去し
    $("#g-nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスも除去
    if (element.hasClass("panelactive")) {
        //activeクラスが付与されている場合
        document.addEventListener("touchmove", noscroll, { passive: false });
        document.addEventListener("wheel", noscroll, { passive: false });
    } else {
        //activeクラスが付与されていない場合
        document.removeEventListener("touchmove", noscroll);
        document.removeEventListener("wheel", noscroll);
    }
});
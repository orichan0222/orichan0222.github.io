// ハンバーガー、ドロワー
$("#js-button-drawer").on("click",function(){   //#js-button-drawerをクリックした時
    $(this).toggleClass("is-checked");　　　　  //is-checked(×)を表示させます
    $("#js-drawer").slideToggle();             //#js-drawerをスライドして表示します
    $("body").toggleClass("is-fixed");　　　　 //bodyにis-fixed(cssでoverflow:hidden)スクロール
　　　　　　　　　　　　　　　　　　　　　　　　　　　//できないようにする。
});

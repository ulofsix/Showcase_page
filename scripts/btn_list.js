$(function () {
    // 切換背景用
    $('button#change_btn').click(function (e) { 
        console.log("change_btn " + this +"click");
        $('div#filter').toggleClass("filter");
        $('div#filter').toggleClass("filter_2");        
    });
    
});







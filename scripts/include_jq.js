// 捕捉抓取事項
// let header = document.querySelector("header")
// header.innerHTML = "all.js";


/* header */


$(function () {
    /* load header */
    $("header").load("../includes/top_bar.html");
    // 追加主體
    $("header").addClass("top_bar");
    // 追加動畫
    $("header").addClass("wow animate__animated animate__backInDown");
    $(".dropdown-menu").addClass("animate__animated animate__fadeInDown");
    // 增加監聽事件 (eventType = "animationend")
    $("header").on("animationend", function (e) {
        console.log("header_animationend");
    });


    // 
    $("i").click(function (e) {
        // e.preventDefault();
        console.log("i_click");
    });
    /* load booklist */

    
    /* load footer */
    $("footer").load("../includes/footer.html");


    
});



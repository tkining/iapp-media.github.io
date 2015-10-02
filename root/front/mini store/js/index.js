//

// var death_rate = [['阿魯',24.26],['阿米',17.48],['阿足',10.01],['小明',5.84]];
// var root = d3.select(".D3").select("ul");
// console.log(root);


// var data = [11, 23, 34, 20, 100, 45];
// var weekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
// var maxData = _.max(data);

// var x = d3.scale.linear()
//     .domain([0, d3.max(data)])
//     .range([0, 400]);

// d3.select('.D3').select('ul')
//     .data(data)
//     .enter()
//     .append('li')
//     .html(function(d, i) {
//         var day = i > 7 ? Math.floor((i - 1) % 7) : i - 1;
//         return '<a href="' + weekday[i] + '"> ' + weekday[day] + ': ' + d + '</a>';
//     })
//     .transition()
//     .duration(2000)
//     .delay(function(d, i) {
//         return i * 10;
//     })
//     .style('width', function(d) {
//         return x(d) + 'px';
//     })
//     .style('background-color', function(d) {
//         return d > maxData * .5 ? 'red' : 'orange';
//     })




//手指觸碰

// var IMG_WIDTH = 500;
// var currentImg = 0;
// var maxImages = 3;
// var speed = 500;

// var imgs;

// var swipeOptions = {
//     triggerOnTouchEnd: true,
//     swipeStatus: swipeStatus,
//     allowPageScroll: "vertical",
//     threshold: 75
// };

// $(function() {
//     imgs = $("#imgs");
//     imgs.swipe(swipeOptions);
// });


/**
 * Catch each phase of the swipe.
 * move : we drag the div
 * cancel : we animate back to where we were
 * end : we animate to the next image
 */
// function swipeStatus(event, phase, direction, distance) {
//     //If we are moving before swipe, and we are going L or R in X mode, or U or D in Y mode then drag.
//     if (phase == "move" && (direction == "left" || direction == "right")) {
//         var duration = 0;

//         if (direction == "left") {
//             scrollImages((IMG_WIDTH * currentImg) + distance, duration);
//         } else if (direction == "right") {
//             scrollImages((IMG_WIDTH * currentImg) - distance, duration);
//         }

//     } else if (phase == "cancel") {
//         scrollImages(IMG_WIDTH * currentImg, speed);
//     } else if (phase == "end") {
//         if (direction == "right") {
//             previousImage();
//         } else if (direction == "left") {
//             nextImage();
//         }
//     }
// }

// function previousImage() {
//     currentImg = Math.max(currentImg - 1, 0);
//     scrollImages(IMG_WIDTH * currentImg, speed);
// }

// function nextImage() {
//     currentImg = Math.min(currentImg + 1, maxImages - 1);
//     scrollImages(IMG_WIDTH * currentImg, speed);
// }

// /**
//  * Manually update the position of the imgs on drag
//  */
// function scrollImages(distance, duration) {
//     imgs.css("transition-duration", (duration / 1000).toFixed(1) + "s");

//     //inverse the number we set in the css
//     var value = (distance < 0 ? "" : "-") + Math.abs(distance).toString();
//     imgs.css("transform", "translate(" + value + "px,0)");
// }

$(document).ready(function() {
    swipeScreen()
});

function swipeScreen() {

    $('#swipe').on('mousedown touchstart', function(e) {

        var touch = e.originalEvent.touches,
            start = touch ? touch[0].pageX : e.pageX,
            difference;

        $(this).on('mousemove touchmove', function(e) {

            var contact = e.originalEvent.touches,
                end = contact ? contact[0].pageX : e.pageX;
            difference = end - start;
            if (difference == 0) {
                $('#swipe').animate({
                    left: 0
                }, 1000);
            }
            if (difference < -30) {
                $('#swipe').stop().animate({
                    left: '-37%'
                }, 1000);
            }
            if (difference > 30) {
                $('#swipe').stop().animate({
                    left: '37%'
                }, 1000);
            }
        });

        $(window).one('mouseup touchend', function(e) {
            e.preventDefault();
            $('#log').text(difference);
            $('#swipe').off('mousemove touchmove');
        });

        e.preventDefault();
    });
}

//觸發

$(document).ready(function() {
    $("#user-login").click(function() {
        $(".m-profile").animate({
            height: 'toggle'
        }, 300);
        $(".theme").hide();
    });
    $("#op-search").click(function() {
        $(".search-bar").animate({
            height: 'toggle'
        }, 300);
        $(".theme").hide();
        $(".m-profile").hide();
    });
    $(".bar-text").click(function() {
        $('.finder').show();
        $(".theme").hide();
    });
    $(".select").click(function() {
        $(".theme").animate({
            height: 'toggle',
            overflowY: 'scroll !important' //doesn't work
        }, {
            duration: 200,
            queue: false,
            complete: function(e) {
                $('.scrollable-menu').css('overflowY', 'scroll');
            }
        });
        $(".m-profile").hide();
        $('.finder').hide();
    });
    $(".cancel").click(function() {
        $('.finder').hide();
        $('.search-bar').slideToggle(300);
        // hide();
    });
    $(".login-box").click(function() {
        $('.login-box').hide();
        $('.icon-box').addClass('openlogin');
    });
    $(".icon-box").click(function() {
        $('.jumbotron').show();
    });
    $("#logout").click(function() {
        Parse.User.logOut();
        $('.jumbotron').hide();
        $('.icon-box').hide();
        $('.login-box').show();
    });
    $(".m-logout").click(function() {
        Parse.User.logOut();
        $('.circle-login').hide();
        $('.m-profile').hide();
        $('#m-login').show();
    });
}); // 觸發 end

//頁面ajax
$(function() {

    // if click img
    $('.item-pic').click(function() {
        $('.menuAJAX li:nth-child(1)').addClass('fadeInRight');
        $('.product,.allClassification').addClass('movecss').fadeOut(function() {
            $(window).scrollTop(0);
            $('.clickimg').fadeIn(function() {
                $('.imgbuy').click(function() {
                    $('.menuAJAX li:nth-child(1)').addClass('fadeInRight_Double');
                    $('.menuAJAX li:nth-child(2)').addClass('fadeInRight');
                    $('.clickimg').addClass('movecss').fadeOut(function() {
                        $('.productcare').fadeIn(function() {
                            $('.sendcareButtom').click(function() {
                                $('.menuAJAX li:nth-child(2)').addClass('fadeInRight_Double');
                                $('.menuAJAX li:nth-child(3)').addClass('fadeInRight');
                                $('.productcare').addClass('movecss').fadeOut(function() {
                                    $(window).scrollTop(0);
                                    $('.productcareEnd').fadeIn(function() {
                                        $('.sendcareButtomeEnd').click(function() {
                                            alert('恭喜你完成訂單囉 ^_^                                                     工作天3~4天請耐心等候');
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    // if click buyButton
    $('.buy').click(function() {
        $('.menuAJAX li:nth-child(2)').addClass('fadeInRight');
        $('.product,.allClassification').addClass('movecss').fadeOut(function() {
            $(window).scrollTop(0);
            $('.productcare').fadeIn(function() {
                $('.sendcareButtom').click(function() {
                    $('.menuAJAX li:nth-child(2)').addClass('fadeInRight_Double');
                    $('.menuAJAX li:nth-child(3)').addClass('fadeInRight');
                    $('.productcare').addClass('movecss').fadeOut(function() {
                        $(window).scrollTop(0);
                        $('.productcareEnd').fadeIn(function() {
                            $('.sendcareButtomeEnd').click(function() {
                                alert('恭喜你完成訂單囉 ^_^                                                     工作天3~4天請耐心等候');
                            });
                        });
                    });
                });
            });
        });
    });
});

// 頁面AJAX
$('.mobilemenumove li').click(function() {
    var clickindex = $(this).index();
    console.log(clickindex);
    $('.allmodify').eq(clickindex).fadeIn().siblings().fadeOut();
});


//瀑布流

$(function() {

    var $container = $('#container');

    $container.imagesLoaded(function() {
        $container.masonry({
            itemSelector: '.item',
            columnWidth: 20,
            isAnimated: true,
            isFitWidth: true
        });
    });
    // 在背景取出下一頁的內容, 並將指定的 selector 資料 append 到目前的網頁上
    $container.infinitescroll({
            navSelector: 'div.nav', // selector for the paged navigation 
            nextSelector: 'div.nav a', // selector for the NEXT link (to page 2)
            itemSelector: '.item', // selector for all items you'll retrieve
            loading: {
                img: 'img/6RMhx.gif',
                msgText: 'loading....',
                finishedMsg: 'no more...'
            }

        },
        // trigger Masonry as a callback
        function(newElements) {
            // hide new items while they are loading
            var $newElems = $(newElements).css({
                opacity: 0
            });
            // ensure that images load before adding to masonry layout
            $newElems.imagesLoaded(function() {
                // show elems now they're ready
                $newElems.animate({
                    opacity: 1
                });
                $container.masonry('appended', $newElems, true);
            });
        }
    );
}); //瀑布流 end

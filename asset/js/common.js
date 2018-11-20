$(function () {
    $(".scroll").click(function (event) {
        event.preventDefault();

        var url = this.href;

        var parts = url.split("#");
        var target = parts[1];

        var target_offset = $("#" + target).offset();
        var target_top = target_offset.top;

        $('html, body').animate({scrollTop: target_top}, 500);
    });
});

$('.collapse-tk').on('shown.bs.collapse', function () {
    $(this).parent().find(".glyphicon-menu-down-custom").removeClass("glyphicon-menu-down-custom").addClass("glyphicon-menu-up-custom");
    $(this).parent().find(".glyphicon-menu-down-purple-custom").removeClass("glyphicon-menu-down-purple-custom").addClass("glyphicon-menu-up-purple-custom");
    $(this).parent().removeClass("mb0").addClass("mb20");
}).on('hidden.bs.collapse', function () {
    $(this).parent().find(".glyphicon-menu-up-custom").removeClass("glyphicon-menu-up-custom").addClass("glyphicon-menu-down-custom");
    $(this).parent().find(".glyphicon-menu-up-purple-custom").removeClass("glyphicon-menu-up-purple-custom").addClass("glyphicon-menu-down-purple-custom");
    $(this).parent().removeClass("mb20").addClass("mb0");
});


$('.collchiapse-txt-2').on('shown.bs.collapse', function () {
    var parentPath = $(this).parent().parent().parent().parent();
//    $(this).parent().find('.dataOne').fadeOut();
    parentPath.find("a span").html("Thu gọn");
    parentPath.find(".arrow-more").removeClass("arrow-more").addClass("arrow-collapse");

}).on('hidden.bs.collapse', function () {
//    $(this).parent().find('.dataOne').fadeIn();
    var parentPath = $(this).parent().parent().parent().parent();
    parentPath.find("a span").html("Xem thêm chi tiết");
    parentPath.find(".arrow-collapse").removeClass("arrow-collapse").addClass("arrow-more");
});


$('.collchiapse-txt').on('shown.bs.collapse', function () {
//    $(this).parent().find('.dataOne').fadeOut();
    $(this).parent().find("a span").html("Thu gọn");
    $(this).parent().find(".arrow-more").removeClass("arrow-more").addClass("arrow-collapse");

}).on('hidden.bs.collapse', function () {
//    $(this).parent().find('.dataOne').fadeIn();
    console.log('collchiapse-txt 2 ');
    $(this).parent().find("a span").html("Xem thêm chi tiết");
    $(this).parent().find(".arrow-collapse").removeClass("arrow-collapse").addClass("arrow-more");
});


$(function () {
    $("img,input[type='image']").click(function () {
        var i;
        if (i == 1) {
            $(this).attr("src", $(this).attr("src").replace("_off.", "_on."));
            i = 2;
        }
        else if (i == 2) {
            $(this).attr("src", $(this).attr("src").replace("_on.", "_off."));
            i = 1;
        }
    });
});
var position = 0,
IsIChrome = navigator.userAgent.search("CriOS") >= 0 ? !0 : !1,
IsISafari = /safari/.test(navigator.userAgent.toLowerCase()),
IsIos = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent),
IsIos7 = /(iPhone|iPod|iPad);.*CPU.*OS 7_\d/i.test(navigator.userAgent),
IsIos8 = /(iPhone|iPod|iPad);.*CPU.*OS 8_\d/i.test(navigator.userAgent);
$(function () {
    $(".dropDownMenu li.down01,.dropDownMenu li.down02,.dropDownMenu li.down03,.dropDownMenu li.down04,.dropDownMenu li.down05,.dropDownMenu li.down06,.dropDownMenu li.down07,.dropDownMenu li.down08,.dropDownMenu li.down09,.dropDownMenu li.down10,.dropDownMenu li.down11,.dropDownMenu li.down12").on("click", function () {
        $(this).next().slideToggle();
        $(this).toggleClass("active");
    });
});



$(document).ready(function () {
    var modal_height = $(window).height() * 0.7;
    // $('#scroll-modal').css('height', modal_height + 'px');
    $('#modal-city').modal('show').on('shown.bs.modal', function (e) {
        $('.modal .modal-body').css('height', modal_height);
        $('#scroll-modal').css('height', (modal_height-48) + 'px');
        $('body').bind('touchmove', function (e) {
            if ($(e.target).closest("#scroll-modal").length == 0)
                e.preventDefault();
        });
        // touchScroll('scroll-modal');
    });
    $('#modal-city').on('hidden.bs.modal', function (e) {
        $('body').unbind('touchmove');
    });
    var inputs = $('input.input-custom').each(function () {
        $(this).prettyCheckable({
            labelPosition: 'right'
        });
//        $('body').bind('touchmove', function (e) {
//            e.preventDefault();
//        });
    });
    $(".close-menu").click(function () {
        closeMenu();
    });
    var subheader_combobox = $('#header').find('div.one-edge-shadow');
    var subheader_search = $('#header').find('a.link-back, a.link-back-purple');
    if(subheader_combobox.length > 0 && subheader_search.length == 0){
        $('#header + div').attr('style','margin-top:137px !important');
    }
    if(subheader_search.length > 0 && subheader_combobox.length == 0){
        $('#header + div').attr('style','margin-top:105px !important');
    }
})

$(document).ready(function () {
    var modal_height = $(window).height() * 0.7;
    // $('#scroll-modal').css('height', modal_height + 'px');
    $('#modal-dksd').modal('show').on('shown.bs.modal', function (e) {
        $('.modal .modal-body').css('height', modal_height);
        $('#scroll-modal').css('height', (modal_height-32) + 'px');
        $('body').bind('touchmove', function (e) {
            if ($(e.target).closest("#scroll-modal").length == 0)
                e.preventDefault();
        });
        // touchScroll('scroll-modal');
    });
    $('#modal-dksd').on('hidden.bs.modal', function (e) {
        $('body').unbind('touchmove');
    });

})

function closeMenu() {
    $("#menu-bottom").trigger("close.mm");
    $('#menu-bottom').removeClass('open');
}
if (!navbarHeight){
    var navbarHeight = $('#header').outerHeight();
}
var tvnDidScroll;
var lastTvnScrollTop = 0;
var tvnDelta = 5;
$(window).scroll(function (event) {
    tvnDidScroll = true;
});

setInterval(function () {
    if (tvnDidScroll) {
        hasScrolled();
        tvnDidScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than tvnDelta
    if (Math.abs(lastTvnScrollTop - st) <= tvnDelta)
        return;

    if (!navbarHeight){
        navbarHeight = $('#header').outerHeight();
        if (!navbarHeight){
            navbarHeight = 96;
        }
    }
    //
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    //console.log(st)
    if (st > lastTvnScrollTop && st > navbarHeight) {
        // Scroll Down
        //console.log("Scroll Down")
        $('#header').removeClass('nav-down').addClass('nav-up');
        if($('.extruder').length > 0){
            $('.extruder').css('top',0);
        }
    } else {

        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('#header').removeClass('nav-up').addClass('nav-down');
            if($('.extruder').length > 0){
                $('.extruder').css('top',$('.extruder').attr('data-top'));
            }
        }
        if (st == 0) {

            if($('.extruder').length > 0){
                $('.extruder').css('top',$('.extruder').attr('data-top'));
            }
        }
        //console.log("Up")
    }

    lastTvnScrollTop = st;
}
function getBaseURL() {
    var url = location.href;  // entire url including querystring - also: window.location.href;
    var baseURL = url.substring(0, url.indexOf('/', 14));


    if (baseURL.indexOf('http://localhost') != -1) {
        // Base Url for localhost
        var url = location.href;  // window.location.href;
        var pathname = location.pathname;  // window.location.pathname;
        var index1 = url.indexOf(pathname);
        var index2 = url.indexOf("/", index1 + 1);
        var baseLocalUrl = url.substr(0, index2);

        return baseLocalUrl + "/";
    }
    else {
        // Root Url for domain name
        return baseURL + "/";
    }
}

function getPathUrl(){
    var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
    var pathArray = window.location.pathname.split( '/' );
    var subpath = "/";
    if(pathArray.length > 2){
        subpath = pathArray[1];
    }
    return subpath;
}

var d = new Date();
/* If change upload */
var n = d.getTime();
/* If change upload */
var baseUrl = getBaseURL();
var nearBottom = 100;
var page = 1;
var loadding = false;
function loadMoreData(param) {
    if (!param) {
        return false;
    }
    $(window).scroll(function () {
        if ($(document).height() - nearBottom <= $(window).scrollTop() + $(window).height()) {

            if (page < param['max_page'] && loadding == false) {

                var data_post = {page: (page + 1)};
                if (param['data']) {
                    data_post = $.extend({}, data_post, param['data']);
                }
                if (!param['append']) {
                    param['append'] = "data_list";
                }

                $container = $("#" + param['append']);

                if (loadding)
                    return false;
                loadding = true;
                $.ajax({
                    type: 'POST',
                    url: baseUrl + param['url'] + '?' + n,
                    data: data_post,
                    beforeSend: function () {
                        $(".img-loading").addClass('show').removeClass('hide');
                    },
                    success: function (data) {
                        // make jQuery object from HTML string
                        var $moreBlocks = jQuery(data);

                        // Append new blocks
                        setTimeout(function () {
                            $container.append($moreBlocks);
                            $(".img-loading").addClass('hide').removeClass('show');
                            page = page + 1;
                            loadding = false;
                        }, 1500);
                    },
                    error: function () {
                        $(".img-loading").addClass('hide').removeClass('show');
                        loadding = false;
                    }
                });
            }
        }
    });
}

$(".remove").click(function () {
    $(this).parent().remove();
});
function bookmark(id){
    var star = $(id).find('.icon-star-line');
    if($(star).hasClass('active')){
        $(star).removeClass('active')
    } else {
        $(star).addClass('active')
    }
}


$(function() {
    /// page_scroll
    $('a[href^=#to_page_top]').click(function() {
        var speed = 500;
        $("html, body").animate({scrollTop: 0 }, speed, "swing");
        return false;
    });
});

function addListener(obj, eventName, listener) {
    if( obj.addEventListener ) {
        obj.addEventListener( eventName, listener, false );
    } else {
        obj.attachEvent("on" + eventName, listener);
    }
}

$(document).ready(function() {
    var search_box_select_ids = ['linhvuc', 'khuvuc', 'mucluong', 'kinhnghiem', 'trindo', 'gioitinh', 'loaicv'];
    var i = 0;
    for (i = 0; i < search_box_select_ids.length; ++i){
        if (!$('#' + search_box_select_ids[i]).length){
            continue;
        }

        if ($('#' + search_box_select_ids[i]).val() == ''){
            $('#' + search_box_select_ids[i]).css({'color':'rgb(149, 149, 149)', 'font-weight':''});
        } else {
            $('#' + search_box_select_ids[i]).css({'color':'rgb(66, 66, 66)', 'font-weight':'700'});
        }

        $('#' + search_box_select_ids[i]).on("change", function () {
            if ($(this).val() == ''){
                $(this).css({'color':'rgb(149, 149, 149)', 'font-weight':''});
            } else {
                $(this).css({'color':'rgb(66, 66, 66)', 'font-weight':'700'});
            }
        });
    }
});

$(document).ready(function() {
    // price format
    if ($('.format-price').length) {
        $('.format-price').on('input', function(e) {
            var elm = this, jelm = $(elm);
            var amount = elm.value;

            // clean
            amount = amount.replace(/[^0-9]/g, '');

            // limit 13 digrits
            if(amount.length > 13){
                amount = amount.slice(0, 13);
            }

            // format price
            var formatted_amount = amount;
            var n_loop = Math.floor(formatted_amount.length / 3);
            for (var i = 1; i <= n_loop; i++) {
                formatted_amount = formatted_amount.replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
            }

            // set
            elm.value = formatted_amount;
            jelm.attr('data-real-amount', amount);
        }).trigger('input');
    }

    $.toWords = {
        th: ['', ' nghìn', ' triệu', ' tỷ', ' nghìn tỷ', ' nghìn triệu tỷ', ' quintillion'],
        dg: ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bẩy', 'tám', 'chín'],
        tn: ['mừơi', 'mười một', 'mười hai', 'mười ba', 'mười bốn', 'mười lăm', 'mười sáu', 'mười bẩy', 'mười tám', 'mười chín'],
        tw: ['hai mươi', 'ba mươi', 'bốn mươi', 'năm mươi', 'sáu mươi', 'bảy mươi', 'tám mươi', 'chín mươi']
    };

    $.numberToWords = function(s, prefix, suffix) {
        s = s.toString();
        s = s.replace(/[\, ]/g, '');
        if (s != parseFloat(s)) return 'không phải số';
        var x = s.indexOf('.');
        if (x == -1) x = s.length;
        if (x > 15) return 'số quá lớn';
        var n = s.split('');
        var str = '';
        var sk = 0;
        for (var i = 0; i < x; i++) {
            if ((x - i) % 3 == 2) {
                if (n[i] == '1') {
                    str += $.toWords.tn[Number(n[i + 1])] + ' ';
                    i++;
                    sk = 1;
                } else if (n[i] != 0) {
                    str += $.toWords.tw[n[i] - 2] + ' ';
                    sk = 1;
                }
            } else if (n[i] != 0) {
                str += $.toWords.dg[n[i]] + ' ';
                if ((x - i) % 3 == 0) str += 'trăm ';
                sk = 1;
            }
            if ((x - i) % 3 == 1) {
                if (sk) str += $.toWords.th[(x - i - 1) / 3] + ' ';
                sk = 0;
            }
        }
        if (x != s.length) {
            var y = s.length;
            str += 'point ';
            for (var i = x + 1; i < y; i++) str += $.toWords.dg[n[i]] + ' ';
        }

        return (prefix ? prefix : '') + str.replace(/\s+/g, ' ') + (suffix ? suffix : '');
    }

    // number to text
    if ($('.price-to-text').length) {
        $('.price-to-text').on('keyup', function(e) {
            var elm = this, jelm = $(this), data = jelm.data();
            var amount = elm.value;
            var jtarget = $(data['docso']);

            // clean
            amount = amount.replace(/[^0-9]/g, '');

            if (amount) {
                if (jtarget.length) {
                    jtarget.html($.numberToWords(amount, data.docsoPrefix ? data.docsoPrefix : '', data.docsoSuffix ? data.docsoSuffix : ''));
                }
            } else {
                jtarget.html('');
            }

            return true;
        }).trigger('keyup');
    }
});
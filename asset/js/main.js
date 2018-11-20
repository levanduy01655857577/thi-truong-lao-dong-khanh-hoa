$(document).ready(function(){
    $('.btnMenuMobile').click(function(){
        if($('.menu-header').hasClass('openMenu')) $('.menu-header').removeClass('openMenu');
        else $('.menu-header').addClass('openMenu');
    });
});

var navbarHeight = $('#header').outerHeight();
var didScroll;
var lastScrollTop = 0;
var delta = 5;
$(window).scroll(function (event) {
    didScroll = true;
});
setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);
function hasScrolled() {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight) {
        $('#header').removeClass('nav-down').addClass('nav-up');
        /*$('#menu-header-nth').removeClass('nav-down').addClass('nav-up-nth');*/
    } else {
        if (st + $(window).height() < $(document).height()) {
            // $('#header').removeClass('nav-up').addClass('nav-down');
            /*$('#menu-header-nth').removeClass('nav-up-nth').addClass('nav-down');*/
        }
        if (st == 0) {
            $('#header').removeClass('nav-up');
            /*$('#menu-header-nth').removeClass('nav-up-nth');*/
        }
    }
    lastScrollTop = st;
}


$(document).ready(function() {
    // price format
    // if ($('.format-price').length) {
    $(document).on('input', '.format-price', function(e) {
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

    });
    $('.format-price').trigger('input');
    // }

    $.toWords = {
        th: ['', ' nghìn', ' triệu', ' tỷ', ' nghìn tỷ', ' nghìn triệu tỷ', ' quintillion'],
        dg: ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bẩy', 'tám', 'chín'],
        tn: ['mười', 'mười một', 'mười hai', 'mười ba', 'mười bốn', 'mười lăm', 'mười sáu', 'mười bẩy', 'mười tám', 'mười chín'],
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
    };

    // number to text
    // if ($('.price-to-text').length) {
    $(document).on('keyup', '.price-to-text', function(e) {
        var elm = this, jelm = $(this), data = jelm.data();
        var amount = elm.value;
        var jtarget = $(data['docso']);

        // clean
        amount = amount.replace(/[^0-9]/g, '');

        if (amount ) {
            if (jtarget.length) {
                var salary_error = $('.formErrorContent').html();

                if((amount.length > 6))
                {
                    //jtarget.html($.numberToWords(amount, data.docsoPrefix ? data.docsoPrefix : '', data.docsoSuffix ? data.docsoSuffix : ''));
                }
                else
                {
                    jtarget.html('');
                }
            }
            else {
                jtarget.html('');
            }
        } else {
            jtarget.html('');
        }

        return true;
    });
    $('.price-to-text').trigger('keyup');
    // }

    $('.overlay-bangcap').each(function() {
        var jelm = $(this);
        jelm.on('click', '.close', function(e) {
            e.stopPropagation();
            window.location.href = '#';
        });

        jelm.on('click', function() {
            jelm.find('.close').trigger('click');
        });
    });
});

var showLoading = function (element) {
    element.append('<span class="snake_loading" style="position: absolute;margin-left: 10px; margin-top: 11px;"></span>');
};
var hideLoading = function (element) {
    element.find(".snake_loading").remove();
};
function number_format_js() {
    var salary = $('#salary_min').attr("value");
    if (typeof salary !== typeof undefined && salary !== false) {
        var salary = $('#salary_min').attr("value");
        var number_format_salary = salary.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") ;
        $('#salary_min').val(number_format_salary);
    }
}
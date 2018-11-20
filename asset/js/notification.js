$(window).on('load', function() {
    WebPush.init({
        subscribe: sendEndpoint,
        unsubscribe: deleteEndpoint,
        denied: deniedPush,
        notSupport: notSupport

    });
});

$(document).click(function(e) {
    var target = e.target;
    if(!$(target).is('.box-confirm-notification') && !$(target).is('#btn-notification') && !$(target).is('#img-notification')){
        $('.box-confirm-notification').removeClass('show');
    }
});

$(document).ready(function() {
    if (WebPush.isSupport()) {
        if (Notification.permission === 'denied') {
            deniedPush();
        }

        $('#btn-notification').on('click', function () {
            if($(this).parents('.frame-top').hasClass('no-pushnotification')){
                window.location.href = $(this).parents('.frame-top').find('.redirect_url').val();
                return false;
            }

            if($(this).hasClass('client_denied-notification')){
                $('#notificationModal').show();
                return false;
            }

            if (WebPushConfig.is_login && WebPushConfig.is_subscribed && !WebPush.subscribed) {
                WebPush.subscribe();
            }

            var $this = $(this);
            if($this.parent().find('#img-notification-week').length){
                $.ajax({
                    type: 'post',
                    dataType : 'json',
                    url: WebPushConfig.confirm_url,
                    data: {},
                    success: function(data) {
                        $this.parent().find('#img-notification-week').remove();
                    }
                });
            }

            if ($(this).hasClass('btn-subscribe')) {
                WebPush.subscribe();
            } else {
                var element = $('.box-confirm-notification');
                if (element.hasClass('show')) {
                    element.removeClass('show');
                } else {
                    if($(this).hasClass('denied-notification')){
                        $('.box-confirm-notification.box-register').addClass('show');
                    }else{
                        $('.box-confirm-notification.box-cancel').addClass('show');
                    }
                }
            }
        });
        $('.box-confirm-notification').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
        });
        $('.box-confirm-notification button').on('click', function() {
            $('.box-confirm-notification').removeClass('show');
        });
        $('.box-confirm-notification .btn-unsubscribe').on('click',function() {
            $('#tooltip-popover').addClass('bgcolorRed');
            deleteEndpoint();
            // WebPush.unsubscribe();
        });
        $('.box-confirm-notification .btn-subscribe').on('click',function() {
            $('#tooltip-popover').removeClass('bgcolorRed');
            WebPush.subscribe();
        });

        if (WebPushConfig.is_login && !WebPushConfig.is_subscribed && WebPushConfig.show_tip) {
            $('#tooltip-popover').tooltipster({
                animation: 'fade',
                delay: 500,
                theme: 'tooltipster-custom'
            }).tooltipster('content', 'Bật nhận thông báo để không bỏ lỡ việc làm phù hợp mỗi ngày!')
                .tooltipster('open');

            setTimeout(function () {
                $('#tooltip-popover').tooltipster('destroy');
            }, 5000);
        }
    }
});

var sendEndpoint = function() {
    $.ajax({
        type: 'post',
        dataType : 'json',
        url: WebPushConfig.subscribe_url,
        data: {
            user_agent: navigator.userAgent,
            subscription: WebPush.subscription
        },
        success: function(data) {
            $('#btn-notification').removeClass('denied-notification').removeClass('btn-subscribe');
            $('.tooltip').tooltipster('content', 'Bạn đã cho phép nhận thông báo');
        }
    });
};

var deleteEndpoint = function() {
    $.ajax({
        type: 'post',
        dataType : 'json',
        url: WebPushConfig.unsubscribe_url,
        data: {
            subscription: WebPush.subscription
        },
        success: function(data) {
            $('#btn-notification').addClass('denied-notification');
            $('.tooltip').tooltipster('content', 'Bạn đã từ chối nhận thông báo');
        }
    });
};

var deniedPush = function () {
    $('#btn-notification').addClass('denied-notification').addClass('client_denied-notification');
    $('.tooltip').tooltipster('content', 'Bạn đã từ chối nhận thông báo');
};

var notSupport = function() {
    $('.box-notification').css('display', 'none');
    $('.box-notification').parents('.frame-top').addClass('no-pushnotification');
};
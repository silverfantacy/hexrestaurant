$(document).ready(function () {
    // 下拉選單
    $('.hamburger').on('click', function (e) {
        e.preventDefault();
        $('.menu-hamburger').toggleClass('menu-show');
        $('.menu-hamburger').slideToggle();
    });
    // 滾動選單
    $('.feature-btn').click(function () {
        $('html,body').animate({
            scrollTop: $('#feature').offset().top
        }, 1000);
    });
    $('.chef-btn').click(function () {
        $('html,body').animate({
            scrollTop: $('#chef').offset().top
        }, 1000);
    });
    $('.place-btn').click(function () {
        $('html,body').animate({
            scrollTop: $('#place').offset().top
        }, 1000);
    });
    // like
    $('.fa-heart-o').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('like-open');
    });
});







// Google Map API
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 22.605789,
            lng: 120.301078
        },
        zoom: 18
    });
    var marker = new google.maps.Marker({
        position: {
            lat: 22.6057871,
            lng: 120.3010793
        },
        map: map,
        title: '六角西餐廳'
    })
}




window.onload = function () {
    // 註冊
    var send = document.querySelector('.send');

    send.addEventListener('click', signup, false);

    function signup() {
        var email = document.querySelector('#account').value;
        var password = document.querySelector('#password').value;
        var passwordRe = document.querySelector('#password-re').value;
        var account = {};
        account.email = email;
        account.password = password;

        if (password == passwordRe) {
            var xhr = new XMLHttpRequest();
            xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true);
            xhr.setRequestHeader('Content-type', 'application/json');
            var data = JSON.stringify(account);
            xhr.send(data);
            xhr.onload = function () {
                var callbackData = JSON.parse(xhr.responseText);
                console.log(callbackData);
                var veriStr = callbackData.message;
                if (veriStr == '帳號註冊成功') {
                    alert('帳號註冊成功！！！');
                } else {
                    alert('此帳號已被使用！！！');
                }
            }
        } else {
            alert('請輸入相同密碼');
        }


    }

    // 登入
    var login = document.querySelector('.login');

    login.addEventListener('click', signin, false);

    function signin() {
        var email = document.querySelector('.account').value;
        var password = document.querySelector('.password').value;
        var account = {};
        account.email = email;
        account.password = password;

        var xhr = new XMLHttpRequest();
        xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signin', true);
        xhr.setRequestHeader('Content-type', 'application/json');
        var data = JSON.stringify(account);
        xhr.send(data);
        xhr.onload = function () {
            var callbackData = JSON.parse(xhr.responseText);
            console.log(callbackData);
            var veriStr = callbackData.message;
            if (veriStr == '登入成功') {
                alert('登入成功 歡迎！');
            } else {
                alert('此帳號不存在或帳號密碼錯誤');
            }
        }
    }
}
/**
 * @file mip-leshu-reservation 组件
 * @author
 */
define(function (require) {
    // mip 组件开发支持 zepto
    var $ = require('zepto');

    var customElement = require('customElement').create();

    /**
     * reservation逻辑层
     * @param {Obect} node 节点
     */
    var config = {url: 'http://www.diyiyou.com/'};

    /**
     * 初始化-构建初始化元素
     */
    customElement.prototype.firstInviewCallback = function () {
        $(document).ready(function () {
            if ($('.reserver').length !== 0) {
                var reserverBtn = $('.reserver');
                var reserverBox = document.createElement('div');
                reserverBox.id = 'reserverBox';
                reserverBox.className = 'reserverBox';
                reserverBox.style.display = 'none';
                var xhtml = '<div class="reserverContent"><h3>请输入预约的手机号</h3>';
                var xhtml = xhtml + '<input type="number" class="tel" placeholder="*请输入手机号码"><em></em>';
                var xhtml = xhtml + '<p>已有<span class="numRes">888</span>位玩家预约了该题材游戏</p>';
                var xhtml = xhtml + '<div class="btnbox clearfix"><span class="sendBtn">确认</span>';
                var xhtml = xhtml + '<span class="closeBtn">取消</span></div></div>';
                reserverBox.innerHTML = xhtml;
                document.body.appendChild(reserverBox);
                var dataid = reserverBtn.attr('xzid');
                var gameId = reserverBtn.attr('data-gid');
                if (gameId == null) {
                    gameId = 0;
                }
                reserverBtn.on('click', function () {
                    $('#reserverBox').css('display', 'block');
                    $('body').css('overflow', 'hidden');
                    $.ajax({
                        url: config.url + 'game/appointment.php',
                        dataType: 'jsonp',
                        data: {
                            id: dataid
                        },
                        type: 'POST',
                        success: function (data) {
                            $('.numRes').html(data);
                        }
                    });
                });
                // var closeBtn = $('.closeBtn'),
                // var sendBtn = $('.sendBtn');
                $('.closeBtn').on('click', function () {
                    $('#reserverBox').css('display', 'none');
                    $('body').css('overflow', 'scroll');
                });
                $('.sendBtn').on('click', function () {
                    var sTel = $('.tel').val();
                    var zTel = /^1[34578]\d{9}$/.test(sTel);
                    if (!zTel) {
                        $('#reserverBox').find('em').html('请填写正确的手机号！');
                    } else {
                        $.ajax({
                            url: config.url + 'game/appointment.php?m=addAppoint',
                            dataType: 'jsonp',
                            data: {
                                id: dataid,
                                gameid: gameId,
                                phone: sTel
                            },
                            type: 'post',
                            success: function (data) {
                                // console.log(data);
                                if (data === '1') {
                                    alert('预约成功');
                                    $('#reserverBox').css('display', 'none');
                                    $('body').css('overflow', 'scroll');
                                    reserverBtn.html('已预约');
                                    reserverBtn.css('background', 'rgb(254, 104, 77)');
                                    reserverBtn.off('click');
                                } else {
                                    alert('请求错误，请稍后重试！');
                                }
                            }
                        });
                    }
                });
            }
        });
    };

    return customElement;
});





(window.MIP=window.MIP||[]).push({name:"mip-233-yytx",func:function(){define("mip-233-yytx/mip-233-yytx",["require","zepto","customElement"],function(e){var i=e("zepto"),n=e("customElement").create();return n.prototype.build=function(){function e(){if(t=!1,--o<=0)o=60,clearInterval(r),t=!0,i(".m-nerror").html(""),i("#getyanzheng").removeClass("grey").html("閲嶆柊鍙戦€�");else i("#getyanzheng").addClass("grey").html("閲嶆柊鍙�("+o+")")}var n=this.element,t=!0,o=60,r=null,s=i(n).attr("data-domain");i(n).attr("data-cdomain");i(".orange-btn").click(function(){i(n).find(".body_mask").removeClass("hide").show()}),i(".close-btn").click(function(){i(n).find(".body_mask").hide()}),i("#getyanzheng").click(function(){var n=i.trim(i("#chr_masswarp").val());if(!t)return void i(".m-nerror").html('<span class="error-icon"></span>*璇风◢鍚庡啀璇�');if(!/^1[34578]\d{9}$/.test(n))return i(".m-nerror").html('<span class="error-icon"></span>*璇峰～鍐欐纭殑鎵嬫満'),!1;else return void i.ajax({type:"post",scriptCharset:"utf-8",url:"https://www.233.com/search/nine-20150423/json/bespeak.asp?Act=code",data:{phone:n},dataType:"jsonp",success:function(n){if(1===n.S)i(".m-nerror").removeClass("cRed").html(n.msg),r=setInterval(e,1e3);else i(".m-nerror").addClass("cRed").html('<span class="error-icon"></span>'+n.msg)}})}),i("#queding").click(function(){var e=i.trim(i("#fullname").val()),t=i.trim(i(".Area").val()),o=i.trim(i("#chr_masswarp").val()),r=i.trim(i("#smsCode").val());if(!/^[\u4e00-\u9fa5]+$/.test(e)||"濉啓鐪熷疄濮撳悕"===e)return void i(".m-nerror").html('<span class="error-icon"></span>*濮撳悕閿欒');if(!/^\d+$/.test(t)||0===t)return void i(".m-nerror").html('<span class="error-icon"></span>*璇烽€夋嫨鍦板尯');if(!/^1[34578]\d{9}$/.test(o))return void i(".m-nerror").html('<span class="error-icon"></span>*璇峰～鍐欐纭殑鎵嬫満鍙风爜');if(!/^\d{6}$/.test(r))return void i(".m-nerror").html('<span class="error-icon"></span>*楠岃瘉鐮侀敊璇�');else return void i.ajax({type:"post",scriptCharset:"utf-8",url:"https://www.233.com/search/nine-20150423/json/bespeak.asp?Act=bespeak",data:{domain:s,fullname:escape(e),did:t,phone:o,code:r,type:1,fromurl:escape(window.location.href)},dataType:"jsonp",beforeSend:function(){i(".m-nerror").html("姝ｅ湪鐢宠")},success:function(e){if(1===e.S)i(".m-nerror").html("棰勭害鎴愬姛"),setTimeout(function(){i(n).find(".body_mask").hide()},2e3);else i(".m-nerror").html("棰勭害澶辫触")},error:function(){},async:!0,cache:!1})})},n}),define("mip-233-yytx",["mip-233-yytx/mip-233-yytx"],function(e){return e}),function(){function e(e,i){e.registerMipElement("mip-233-yytx",i)}if(window.MIP)require(["mip-233-yytx"],function(i){e(window.MIP,i)});else require(["mip","mip-233-yytx"],e)}()}});

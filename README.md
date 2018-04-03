
# mip-leshu-reservation

游戏预约插件

标题|内容
----|----
类型|业务,广告
支持布局|N/S
所需脚本|   https://mipcache.bdstatic.com/static/v1/mip-chinacn-rem/mip-chinacn-rem.js

## 示例

``` html
    <mip-leshu-reservation data-domain="appointment">
<div class="btnbox">
    <span class="appointment" id="appointment" data-id="1112" data-gid="9823">预约下载赢娃娃<i class="down"></i></span>
</div>
<div class="appo_box">
    <i class="triangle"></i>
    <div class="cont">
        <p class="appo_tit">
            预约成功免费抓娃娃
        </p>
        <form action="" method="post" target="targetIfr">
            <input type="text" name="tel" placeholder="*请输入手机号码" class="tel">
            <p class="appointment_ico">
            </p>
            <div class="tag">
                已有 <em>0</em> 位队友预约游戏下载丨开测前您将收到<em>下载短信</em>！
            </div>
            <input type="button" name="btn" value="立即预约" class="btn" id="appointmentBtn"><a href="http://m.diyiyou.com/top/netgame/" class="editor_more">排行游戏推荐</a>
        </form>
        <iframe name="targetIfr" style="display:none">
        </iframe>
    </div>
</div>
<div class="appo_success">
    <div class="bg">
    </div>
    <div class="cont">
        <input type="button" value="" class="close" id="closeS">
        <p class="tit">
            预约成功
        </p>
        <p class="txt">
            恭喜您赢得了5次疯狂抓娃娃机会，抓中娃娃直邮到家！
        </p>
        <p class="red_txt txt">
            （分享好友还能抓，限新用户呦）
        </p>
        <div class="doll">
        </div>
        <input type="button" value="立即下载" class="btn" id="dollDown">
        <div>
        </div>
    </div>
</div>
</mip-leshu-reservation>
```

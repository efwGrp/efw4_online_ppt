(function(){var loadHandler=window['sl_{F6A8C569-7394-4DAC-A284-EFCC15FD6C25}'];loadHandler&&loadHandler(32, '<div id="spr0_7376809"><div id="spr1_7376809" class="kern slide"><img id="img6_7376809" src="data/img2.png" width="720px" height="540px" alt="" style="left:0px;top:0px;"/><div id="spr3_7376809" style="left:18px;top:67px;"><img id="img0_7376809" src="data/img0.png" width="693" height="10" alt=""/></div><div id="spr4_7376809" style="left:-2.875px;top:-3.75px;"><div style="width:0px;"><span id="txt0_7376809" class="relpos" data-width="76.213867" style="left:7.2px;top:4.31px;">EFW MAKE</span> <span id="txt1_7376809" class="relpos" data-width="58.378906" style="left:7.195px;top:4.31px;"> IT EASY</span></div></div><div id="spr5_7376809" style="left:251.125px;top:513.375px;"><img id="img1_7376809" src="data/img1.png" width="228" height="29" alt="" style="top:-0.125px;"/></div></div><div id="spr2_7376809" class="kern slide"><div id="spr6_7376809" style="left:547.125px;top:511.375px;"><div style="width:0px;"><span id="txt2_7376809" data-width="14.906250" style="left:145.7px;top:6.474px;">32</span></div></div><div id="spr7_7376809" style="left:534.857px;top:35.658px;"><div style="width:0px;"><span id="txt3_7376809" data-width="68.427734" style="left:61.575px;top:2.431px;">Debug</span></div><div style="width:0px;"><span id="txt4_7376809" data-width="40.000000" style="left:129.825px;top:2.431px;">方法</span></div></div><div id="spr8_7376809" style="left:36px;top:25.625px;"><div style="width:0px;"><span id="txt5_7376809" data-width="264.687500" style="left:7.2px;top:1.964px;">６－６．よくあるバグ３</span></div></div><div id="svg40_7376809" style="left:272.182px;top:82.323px;"><svg width="436" height="390" viewBox="-1.5 -1.5 436 390"><path fill="#002060" stroke="#ffffff" stroke-width="3" stroke-linecap="butt" stroke-linejoin="round" d="M1.5,1.5 h429.452 v383.214 h-429.452 Z"/></svg></div><div id="spr9_7376809" style="left:273.682px;top:83.823px;"><div style="width:0px;"><span id="txt6_7376809" data-width="207.234375" style="left:8.7px;top:4.399px;">var helloWorld_sendMessage = {};</span></div><div style="width:0px;"><span id="txt7_7376809" data-width="261.914063" style="left:8.7px;top:18.799px;">helloWorld_sendMessage.paramsFormat = {</span></div><div style="width:0px;"><span id="txt8_7376809" data-width="296.882813" style="left:8.7px;top:33.199px;">    &quot;#txt_message&quot; : &quot;required:true;display-name:</span></div><div style="width:0px;"><span id="txt9_7376809" data-width="44.812500" style="left:304.87px;top:33.199px;">メッセージ</span></div><div style="width:0px;"><span id="txt10_7376809" style="left:349.62px;top:33.199px;">&quot;</span></div><div style="width:0px;"><span id="txt11_7376809" data-width="12.351563" style="left:8.7px;top:47.599px;">};</span></div><div style="width:0px;"><span id="txt12_7376809" data-width="300.615234" style="left:8.7px;top:61.999px;">helloWorld_sendMessage.fire = function(params) {</span></div><div style="width:0px;"><span id="txt13_7376809" data-width="31.171875" style="left:8.7px;top:76.399px;">    // </span></div><div style="width:0px;"><span id="txt14_7376809" data-width="75.890625" style="left:40.075px;top:76.399px;">データ新規作成</span></div><div style="width:0px;"><span id="txt15_7376809" data-width="16.312500" style="left:8.7px;top:90.799px;">    </span></div><div style="width:0px;"><span id="txt16_7376809" data-width="66.152344" style="left:25.2px;top:90.799px;">db.change(</span></div><div style="width:0px;"><span id="txt17_7376809" class="relpos" data-width="98.003906" style="left:8.7px;top:105.199px;">        &quot;helloworld</span> <span id="txt18_7376809" class="relpos" style="left:8.695px;top:105.199px;">1</span> <span id="txt19_7376809" class="relpos" data-width="9.580078" style="left:8.69px;top:105.199px;">&quot;,</span></div><div style="width:0px;"><span id="txt20_7376809" class="relpos" data-width="120.902344" style="left:8.7px;top:119.599px;">        &quot;insertMessage</span> <span id="txt21_7376809" class="relpos" style="left:8.695px;top:119.599px;">1</span> <span id="txt22_7376809" class="relpos" data-width="9.580078" style="left:8.69px;top:119.599px;">&quot;,</span></div><div style="width:0px;"><span id="txt23_7376809" data-width="290.103516" style="left:8.7px;top:133.999px;">        {&quot;strMessage&quot; : params[&quot;#txt_message&quot;] }</span></div><div style="width:0px;"><span id="txt24_7376809" data-width="26.742188" style="left:8.7px;top:148.399px;">    );</span></div><div style="width:0px;"><span id="txt25_7376809" data-width="31.171875" style="left:8.7px;top:162.799px;">    // </span></div><div style="width:0px;"><span id="txt26_7376809" data-width="51.890625" style="left:40.075px;top:162.799px;">データ検索</span></div><div style="width:0px;"><span id="txt27_7376809" data-width="16.312500" style="left:8.7px;top:177.199px;">    </span></div><div style="width:0px;"><span id="txt28_7376809" data-width="165.046875" style="left:25.2px;top:177.199px;">var arrMessage = db.select(</span></div><div style="width:0px;"><span id="txt29_7376809" data-width="107.583984" style="left:8.7px;top:191.599px;">        &quot;helloworld&quot;,</span></div><div style="width:0px;"><span id="txt30_7376809" data-width="131.115234" style="left:8.7px;top:205.999px;">        &quot;selectMessage&quot;,</span></div><div style="width:0px;"><span id="txt31_7376809" data-width="47.015625" style="left:8.7px;top:220.399px;">        {}</span></div><div style="width:0px;"><span id="txt32_7376809" class="relpos" data-width="76.330078" style="left:8.7px;top:234.799px;">    ).getArray</span> <span id="txt33_7376809" class="relpos" style="left:8.695px;top:234.799px;">1</span> <span id="txt34_7376809" class="relpos" data-width="15.703125" style="left:8.69px;top:234.799px;">();</span></div><div style="width:0px;"><span id="txt35_7376809" data-width="31.171875" style="left:8.7px;top:249.199px;">    // </span></div><div style="width:0px;"><span id="txt36_7376809" data-width="114.468750" style="left:40.075px;top:249.199px;">処理結果を画面に反映</span></div><div style="width:0px;"><span id="txt37_7376809" data-width="16.312500" style="left:8.7px;top:263.599px;">    </span></div><div style="width:0px;"><span id="txt38_7376809" data-width="125.917969" style="left:25.2px;top:263.599px;">return (new Result())</span></div><div style="width:0px;"><span id="txt39_7376809" data-width="123.216797" style="left:8.7px;top:277.999px;">        .runat(&quot;BODY&quot;)</span></div><div style="width:0px;"><span id="txt40_7376809" class="relpos" data-width="87.591797" style="left:8.7px;top:292.399px;">        .withdata</span> <span id="txt41_7376809" class="relpos" style="left:8.695px;top:292.399px;">1</span> <span id="txt42_7376809" class="relpos" data-width="144.234375" style="left:8.69px;top:292.399px;">({&quot;#txt_message&quot; : &quot;&quot;})</span></div><div style="width:0px;"><span id="txt43_7376809" data-width="146.871094" style="left:8.7px;top:306.799px;">        .runat(&quot;FIELDSET&quot;)</span></div><div style="width:0px;"><span id="txt44_7376809" data-width="134.173828" style="left:8.7px;top:321.199px;">        .remove(&quot;SPAN&quot;)</span></div><div style="width:0px;"><span id="txt45_7376809" data-width="310.412109" style="left:8.7px;top:335.599px;">        .append(&quot;&lt;SPAN&gt;{message}&lt;BR&gt;&lt;/SPAN&gt;&quot;)</span></div><div style="width:0px;"><span id="txt46_7376809" data-width="170.185547" style="left:8.7px;top:349.999px;">        .withdata(arrMessage);</span></div><div style="width:0px;"><span id="txt47_7376809" data-width="12.351563" style="left:8.7px;top:364.399px;">};</span></div></div><div id="svg41_7376809" style="left:310.441px;top:187.522px;"><svg width="96" height="19" viewBox="-1 -1 96 19"><path fill="none" stroke="#ff0000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round" d="M1,1 h91.875 v14.431 h-91.875 Z"/></svg></div><div id="spr10_7376809" style="left:269.291px;top:479.72px;"><div style="width:0px;"><span id="txt48_7376809" data-width="69.528320" style="left:7.2px;top:2.782px;">JavaScript</span></div><div style="width:0px;"><span id="txt49_7376809" data-width="320.578125" style="left:76.215px;top:2.782px;">語法に満足できるが、実行時エラーのケースがたくさんある。</span></div></div><div id="svg42_7376809" style="left:310.441px;top:201.725px;"><svg width="113" height="19" viewBox="-1 -1 113 19"><path fill="none" stroke="#ff0000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round" d="M1,1 h108.309 v14.431 h-108.309 Z"/></svg></div><div id="svg43_7376809" style="left:294.007px;top:317.9px;"><svg width="90" height="19" viewBox="-1 -1 90 19"><path fill="none" stroke="#ff0000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round" d="M1,1 h85.593 v14.431 h-85.593 Z"/></svg></div><div id="svg44_7376809" style="left:310.441px;top:375.439px;"><svg width="74" height="19" viewBox="-1 -1 74 19"><path fill="none" stroke="#ff0000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round" d="M1,1 h69.159 v14.431 h-69.159 Z"/></svg></div><div id="svg9_7376809" style="left:310.941px;top:196.737px;"><svg width="63" height="68" viewBox="-1.5 -0.75 63 68"><g fill="none"><g transform="translate(0,0.75)"><path stroke="#ff0000" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="round" d="M0,0 H30.616 V63.098 H55.873"/><g fill="#ff0000" stroke="none" transform="translate(30.615549,60.120964)"><path transform="translate(0,2.976749)" d="M30.616,0 L24.662,2.977 V-2.977 Z"/></g></g></g></svg></div><div id="svg19_7376809" style="left:310.941px;top:241.432px;"><svg width="63" height="32" viewBox="-1.5 -0 63 32"><g fill="none"><g transform="translate(0,2.976746)"><path stroke="#ff0000" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="round" d="M0,27.514 H30.616 V0 H55.873"/><g fill="#ff0000" stroke="none" transform="translate(30.615513,-2.97675)"><path transform="translate(0,2.97675)" d="M30.616,0 L24.662,2.977 V-2.977 Z"/></g></g></g></svg></div><div id="svg29_7376809" style="left:294.507px;top:345.556px;"><svg width="47" height="20" viewBox="-1.5 -0 47 20"><g fill="none"><g transform="translate(0,2.976746)"><path stroke="#ff0000" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="round" d="M0,15.464 H22.399 V0 H39.439"/><g fill="#ff0000" stroke="none" transform="translate(22.398582,-2.97675)"><path transform="translate(0,2.97675)" d="M22.399,0 L16.445,2.977 V-2.977 Z"/></g></g></g></svg></div><div id="svg39_7376809" style="left:310.941px;top:449.681px;"><svg width="63" height="67" viewBox="-1.5 -0 63 67"><g fill="none"><g transform="translate(0,2.976746)"><path stroke="#ff0000" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="round" d="M0,62.05 H30.616 V0 H55.873"/><g fill="#ff0000" stroke="none" transform="translate(30.615513,-2.97675)"><path transform="translate(0,2.97675)" d="M30.616,0 L24.662,2.977 V-2.977 Z"/></g></g></g></svg></div><div id="spr11_7376809" style="left:19.26px;top:83.039px;"><img id="img2_7376809" src="data/img50.png" width="232" height="95" alt="" style="left:-0.008px;top:-0.083px;"/></div><div id="spr12_7376809" style="left:19.26px;top:189.675px;"><img id="img3_7376809" src="data/img51.png" width="233" height="94" alt="" style="left:0.025px;top:-0.225px;"/></div><div id="spr13_7376809" style="left:19.26px;top:295.027px;"><img id="img4_7376809" src="data/img52.png" width="231" height="93" alt="" style="left:0.125px;top:0.05px;"/></div><div id="spr14_7376809" style="left:19.26px;top:399.929px;"><img id="img5_7376809" src="data/img53.png" width="233" height="94" alt="" style="left:0.025px;top:-0.225px;"/></div></div></div>', '{"s":[]}');})();
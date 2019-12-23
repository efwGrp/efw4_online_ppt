(function(){var loadHandler=window['sl_{853987B9-1580-4E7F-A9CE-847BBDB148B0}'];loadHandler&&loadHandler(3, '<div id="spr0_19bef68f"><div id="spr1_19bef68f" class="kern slide"><img id="img2_19bef68f" src="data/img2.png" width="720px" height="540px" alt="" style="left:0px;top:0px;"/><div id="spr3_19bef68f" style="left:18px;top:66px;"><img id="img0_19bef68f" src="data/img0.png" width="692" height="11" alt=""/></div><div id="spr4_19bef68f" style="left:-2.875px;top:-3.75px;"><div style="width:0px;"><span id="txt0_19bef68f" class="nokern" data-width="100.944580" style="left:7.2px;top:4.133px;">EFW MAKE IT EASY</span></div></div><div id="spr5_19bef68f" style="left:251.125px;top:513.375px;"><img id="img1_19bef68f" src="data/img1.png" width="228" height="29" alt="" style="top:-0.125px;"/></div></div><div id="spr2_19bef68f" class="kern slide"><div id="spr6_19bef68f" style="left:22.171px;top:92.625px;"><div style="width:0px;"><span id="txt1_19bef68f" class="nokern" data-width="280.968750" style="top:2.548px;">クライアントから大量に接続される場合、</span></div><div style="width:0px;"><span id="txt2_19bef68f" class="nokern relpos" data-width="37.828125" style="top:24.148px;">・まず</span><span id="txt3_19bef68f" class="nokern relpos" data-width="64.230469" style="left:-0.005px;top:24.148px;">Apache</span><span id="txt4_19bef68f" class="nokern relpos" style="left:-0.01px;top:24.148px;">の</span><span id="txt5_19bef68f" class="nokern relpos" data-width="119.671875" style="left:-0.015px;top:24.148px;">ListenBacklog</span><span id="txt6_19bef68f" class="nokern relpos" data-width="176.625000" style="left:-0.02px;top:24.148px;">キューに格納し、その中に</span><span id="txt7_19bef68f" class="nokern relpos" data-width="44.718750" style="left:-0.025px;top:24.148px;">1000</span><span id="txt8_19bef68f" class="nokern relpos" data-width="49.570313" style="left:-0.03px;top:24.148px;">接続を</span><span id="txt9_19bef68f" class="nokern relpos" data-width="65.786133" style="left:-0.035px;top:24.148px;">Tomcat</span><span id="txt10_19bef68f" class="nokern relpos" data-width="59.343750" style="left:-0.04px;top:24.148px;">に渡す。</span></div><div style="width:0px;"><span id="txt11_19bef68f" class="nokern relpos" style="top:45.748px;">・</span><span id="txt12_19bef68f" class="nokern relpos" data-width="65.786133" style="left:-0.005px;top:45.748px;">Tomcat</span><span id="txt13_19bef68f" class="nokern relpos" data-width="186.890625" style="left:-0.01px;top:45.748px;">は、接続要求を受け取り、</span><span id="txt14_19bef68f" class="nokern relpos" data-width="103.877930" style="left:-0.015px;top:45.748px;"> Connection</span><span id="txt15_19bef68f" class="nokern relpos" data-width="132.328125" style="left:-0.02px;top:45.748px;">キューに格納する。</span></div><div style="width:0px;"><span id="txt16_19bef68f" class="nokern relpos" style="top:67.348px;">・</span><span id="txt17_19bef68f" class="nokern relpos" data-width="103.877930" style="left:-0.005px;top:67.348px;"> Connection</span><span id="txt18_19bef68f" class="nokern relpos" data-width="68.414063" style="left:-0.01px;top:67.348px;">キューから</span><span id="txt19_19bef68f" class="nokern relpos" data-width="33.539063" style="left:-0.015px;top:67.348px;">100</span><span id="txt20_19bef68f" class="nokern relpos" data-width="49.570313" style="left:-0.02px;top:67.348px;">接続を</span><span id="txt21_19bef68f" class="nokern relpos" data-width="58.605469" style="left:-0.025px;top:67.348px;">Accept</span><span id="txt22_19bef68f" class="nokern relpos" data-width="189.421875" style="left:-0.03px;top:67.348px;">キューに回して、処理する。</span></div><div style="width:0px;"><span id="txt23_19bef68f" class="nokern relpos" style="top:88.948px;">・</span><span id="txt24_19bef68f" class="nokern relpos" data-width="103.877930" style="left:-0.005px;top:88.948px;"> Connection</span><span id="txt25_19bef68f" class="nokern relpos" data-width="324.043945" style="left:-0.01px;top:88.948px;">キューに空きの分を、後続の接続要求で補う。</span></div><div style="width:0px;"><span id="txt26_19bef68f" class="nokern relpos" style="top:110.548px;">・</span><span id="txt27_19bef68f" class="nokern relpos" data-width="103.877930" style="left:-0.005px;top:110.548px;"> Connection</span><span id="txt28_19bef68f" class="nokern relpos" data-width="294.723633" style="left:-0.01px;top:110.548px;">キューの最大値を超えないようにするため、</span><span id="txt29_19bef68f" class="nokern relpos" data-width="93.937500" style="left:-0.015px;top:110.548px;">MaxClients</span><span id="txt30_19bef68f" class="nokern relpos" style="left:-0.02px;top:110.548px;">と</span><span id="txt31_19bef68f" class="nokern relpos" data-width="144.439453" style="left:-0.025px;top:110.548px;">maxConnections</span></div><div style="width:0px;"><span id="txt32_19bef68f" class="nokern" data-width="120.445313" style="top:132.148px;">の値を合わせる。</span></div><div style="width:0px;"><span id="txt33_19bef68f" class="nokern relpos" data-width="97.760742" style="top:175.348px;">Connection</span><span id="txt34_19bef68f" class="nokern relpos" data-width="141.539063" style="left:-0.005px;top:175.348px;">キューの接続要求を</span><span id="txt35_19bef68f" class="nokern relpos" data-width="39.427734" style="left:-0.01px;top:175.348px;">EFW</span><span id="txt36_19bef68f" class="nokern relpos" data-width="223.453125" style="left:-0.015px;top:175.348px;">フレームワークで処理する場合、</span></div><div style="width:0px;"><span id="txt37_19bef68f" class="nokern" data-width="669.093750" style="top:196.948px;">・重い処理に対して、イベントごとに同時処理可能キューを設定する。キューの最大値に到達した</span></div><div style="width:0px;"><span id="txt38_19bef68f" class="nokern" data-width="123.890625" style="top:218.548px;">ら、エラーを戻す。</span></div><div style="width:0px;"><span id="txt39_19bef68f" class="nokern" data-width="402.820313" style="top:240.148px;">・軽い処理に対して、同時処理可能キューを設定しない。</span></div><div style="width:0px;"><span id="txt40_19bef68f" class="nokern relpos" data-width="291.234375" style="top:283.348px;">イベントキューの最大値到達エラーの場合</span><span id="txt41_19bef68f" class="nokern relpos" style="left:-0.005px;top:283.348px;">2</span><span id="txt42_19bef68f" class="nokern relpos" data-width="91.054688" style="left:-0.01px;top:283.348px;">種類がある。</span></div><div style="width:0px;"><span id="txt43_19bef68f" class="nokern" data-width="590.343750" style="top:304.948px;">・リトライ可能に設定する場合、エラーメッセージを表示し、３０秒カウントダウンする。</span></div><div style="width:0px;"><span id="txt44_19bef68f" class="nokern" data-width="448.031250" style="top:326.548px;">・リトライ不可に設定する場合、エラーメッセージを表示するだけ。</span></div><div style="width:0px;"><span id="txt45_19bef68f" class="nokern" data-width="382.640625" style="top:348.148px;">「該当機能は混雑しています。しばらくお待ちください。」</span></div></div><div id="spr7_19bef68f" style="left:20.789px;top:23.528px;"><div style="width:0px;"><span id="txt46_19bef68f" data-width="228.593750" style="left:7.2px;top:1.683px;">システム概念図説明</span></div></div></div></div>');})();
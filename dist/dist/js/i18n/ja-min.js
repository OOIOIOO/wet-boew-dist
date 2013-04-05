/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-release-development Build: 2013-04-05 08:14 PM
 *
 */
(function(b){var a=window.pe||{fn:{}};a.dic.ind={"%lang-code":"ja","%lang-eng":"Japanese","%lang-fra":"japonais","%lang-native":"日本語","%all":"すべて","%home":"ホーム","%main-page":"Main page","%top-of-page":"ページの先頭","%you-are-in":"現在位置は：","%welcome-to":"xxx へようこそ","%loading":"ロード中･･･","%processing":"processing...","%search":"検索","%search-for-terms":"検索キーワード：","%no-match-found":"検索条件に一致する情報が見つかりません。","%matches-found":{mixin:"検索結果： [MIXIN] 件"},"%menu":"メニュー","%settings":"Settings","%languages":"Languages","%about":"About","%current":"(current)","%hide":"非表示","%error":"エラー","%colon":":","%hyphen":" - ","%start":"開始","%stop":"終了","%back":"戻る","%new-window":"（新しいウィンドウで開く）","%minute-ago":"1分前","%couple-of-minutes":"数分前","%minutes-ago":{mixin:"[MIXIN] 分前"},"%hour-ago":"1時間前","%hours-ago":{mixin:"[MIXIN] 時間前"},"%days-ago":{mixin:"[MIXIN] 日前"},"%yesterday":"昨日","%next":"次へ","%previous":"戻る","%first":"First","%last":"Last","%archived-page":"このページはウェブ上にアーカイブされています。","%sub-menu-help":"（サブメニューを開くにはエンターキーを、閉じるにはEscキーを押す。）","%tab-rotation":{disable:"タブローテーションを停止",enable:"タブローテーションを再生"},"%tab-list":"Tab list","%tab-panel-end-1":"End of this tab panel. ","%tab-panel-end-2":"Return to the tab list","%tab-panel-end-3":" or continue to the rest of page.","%play":"再生","%pause":"一時停止","%open":"Open","%close":"閉じる","%rewind":"巻き戻し","%fast-forward":"早送り","%mute":{enable:"ミュート",disable:"ミュート解除"},"%closed-caption":{disable:"クローズドキャプションを無効にする",enable:"クローズドキャプションを有効にする"},"%closed-caption-error":"クローズドキャプションを実行できませんでした。","%audio-description":{enable:"音声ガイドを有効にする",disable:"音声ガイドを無効にする"},"%progress-bar":"左矢印キーで戻る／右矢印キーで進む","%no-video":"ご利用のブラウザではこの動画を再生できません。以下の動画をダウンロードしてください。","%position":"現在位置：","%percentage":"Playback percentage:","%duration":"総時間：","%buffered":"バッファリングの進行状況：","%favourite":"お気に入り","%email":"Eメール","%share-text":"このページを共有する","%share-hint":"{s}との","%share-email-subject":"注目のページ","%share-email-body":"おすすめのページ：n{t} ({u})","%share-fav-title":"(bookmark this page)","%share-manual":"ブックマークに登録するには、このダイアログを閉じて「Ctrl＋D」を押してください。","%share-showall":"({n})をすべて表示","%share-showall-title":"ブックマークサイト一覧","%share-disclaimer":"No endorsement of any products or services is expressed or implied.","%form-not-submitted":"フォームを送信できませんでした。原因：","%errors-found":"件のエラーが見つかりました","%error-found":"件のエラーが見つかりました","%datepicker-hide":"カレンダーを非表示","%datepicker-show":"カレンダーから日付を選択：","%datepicker-selected":"選択済み","%calendar-weekDayNames":["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],"%calendar-monthNames":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"%calendar-currentDay":"（今日）","%calendar-goToLink":'Go to<span class="wb-invisible"> month of year</span>',"%calendar-goToTitle":"xxxx年xx月へ進む","%calendar-goToMonth":"月：","%calendar-goToYear":"年：","%calendar-goToButton":"進む","%calendar-cancelButton":"取消","%calendar-previousMonth":"前月","%calendar-nextMonth":"翌月","%show-toc":"表示","%show-text":"Show table of contents","%hide-text":"Hide table of contents","%table-contents":"目次","%lb-current":"{total} 件中 {current} 件目","%lb-next":"次","%lb-prev":"前","%lb-xhr-error":"コンテンツをロードできませんでした。","%lb-img-error":"画像をロードできませんでした。","%lb-slideshow":"スライドショー","%jqm-expand":"コンテンツを表示","%jqm-collapse":"コンテンツを非表示","%jqm-clear-search":"検索履歴を削除する","%jqm-filter":"検索条件を指定する","%jqm-tbl-col-toggle":"Columns...","%table-mention":"表","%table-following":"チャート。詳細については次の表を参照。","%st-timeout-msg":'Your session is about to expire, you have until #expireTime# to activate the "OK" button below to extend your session.',"%st-msgbox-title":"Session timeout warning","%st-already-timeout-msg":"Sorry your session has already expired. Please login again.","%td-toggle":"Toggle all","%td-open":"Expand all","%td-close":"Collapse all","%td-ttl-open":"Expand all sections of content","%td-ttl-close":"Collapse all sections of content","%sSortAscending":": activate for ascending sort","%sSortDescending":": activate for descending sort","%sEmptyTable":"No data is available in the table","%sInfo":"Showing _START_ to _END_ of _TOTAL_ entries","%sInfoEmpty":"Showing 0 to 0 of 0 entries","%sInfoFiltered":"(filtered from _MAX_ total entries)","%sInfoThousands":"&#44;","%sLengthMenu":"Show _MENU_ entries","%geo-mapcontrol":"Map control","%geo-panup":"上へ","%geo-pandown":"下へ","%geo-panleft":"左へ","%geo-panright":"右へ","%geo-zoomin":"詳細","%geo-zoomout":"広域","%geo-zoomworld":"Zoom to map extent","%geo-zoomslider":"ドラッグして拡大","%geo-zoomfeature":"Zoom to feature","%geo-ariamap":"Map object. The descriptions of the map features are in the table below.","%geo-accessibilize":"<strong>Keyboard users:</strong> When the map is in focus, use the arrow keys to pan the map and the plus and minus keys to zoom. The arrow keys will not pan the map when zoomed to the map extent.","%geo-accessibilizetitle":"Instructions: Map Navigation","%geo-togglelayer":"Toggle the display of the layer","%geo-hiddenlayer":"This layer is currently hidden!","%geo-basemapurl":"http://geogratis.gc.ca/maps/CBMT","%geo-basemaptitle":"CBMT","%geo-select":"Select","%geo-labelselect":"Check to select the element on the map","%pe-disable":"HTMLベーシック版","%pe-enable":"スタンダード版"};a.document.trigger("languageloaded");window.pe=a;return a}(jQuery));
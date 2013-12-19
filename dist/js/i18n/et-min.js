/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 *
 * Version: v3.1.8-development Build: 2013-12-19 10:35 AM EST
 *
 */
(function(){var a=window.pe||{fn:{}};a.dic.ind={"%lang-code":"et","%lang-eng":"Estonian","%lang-fra":"estonien","%lang-native":"Eesti keel","%all":"Kõik","%home":"Kodu","%main-page":"Pealeht","%top-of-page":"Lehekülje algusesse","%you-are-in":"Olete lehel","%welcome-to":"Tere tulemast lehele","%loading":"laadimine....","%processing":"töötlemine ...","%search":"Otsi","%search-for-terms":"Otsi mõistet","%no-match-found":"Vastet ei leitud","%matches-found":{mixin:"Leitud [MIXIN] vaste(t)"},"%menu":"Menüü","%settings":"Seaded","%languages":"Keeled","%about":"Teave","%current":"(praegune)","%hide":"Peida","%error":"Viga","%colon":":","%hyphen":" - ","%full-stop":".","%list-comma-space":",","%interword-space":"&#32;","%start":"Alusta","%stop":"Lõpeta","%back":"Tagasi","%new-window":" (Avaneb uues aknas)","%minute-ago":"minut tagasi","%couple-of-minutes":"mõni minut tagasi","%minutes-ago":{mixin:"[MIXIN] minutit tagasi"},"%hour-ago":"tund aega tagasi","%hours-ago":{mixin:"[MIXIN] tundi tagasi"},"%days-ago":{mixin:"[MIXIN] päeva tagasi"},"%yesterday":"eile","%next":"Järgmine","%next-right":"Järgmine (paremat nooleklahvi)","%previous":"Eelmine","%previous-left":"Eelmine (vasakut nooleklahvi)","%first":"Esimene","%last":"Viimane","%close-esc":"Sule (klahviga Escape)","%archived-page":"See veebileht on arhiveeritud.","%sub-menu-help":"(ava alamenüü klahviga Enter ja sulge klahviga Escape)","%tab-rotation":{disable:"Seiska sakkide rotatsioon",enable:"Alusta sakkide rotatsiooni"},"%tab-list":"Sakkide nimekiri","%tab-panel-end-1":"Selle sakkide paneeli lõpp","%tab-panel-end-2":"Tagasi sakkide nimekirja","%tab-panel-end-3":"või edasi ülejäänud lehele","%play":"Mängi","%pause":"Paus","%open":"Ava","%close":"Sulge","%rewind":"Tagasi","%fast-forward":"Kiirkerimine","%mute":{enable:"Vaigista",disable:"Heli tagasi"},"%closed-caption":{disable:"Peida subtiitrid",enable:"Näita subtiitreid"},"%closed-caption-error":"Viga subtiitrite avamisel","%audio-description":{enable:"Luba audio kirjeldus",disable:"Sulge audio kirjeldus"},"%progress-bar":"kasuta vasakut ja paremat nooleklahvi edasi-tagasi liikumiseks","%no-video":"Sinu brauser ei võimalda seda videot mängida, palun lae video alla","%position":"Praegune asukoht","%percentage":"Taasesituse protsent:","%duration":"Kogu kestvus:","%buffered":"Puhverdatud:","%favourite":"Lemmik","%email":"E-post","%share-text":"Jaga seda lehekülge","%share-hint":"koos {s}","%share-email-subject":"Huvitav lehekülg","%share-email-body":"Ma arvan, et see leht pakub sulle huvi:n{t} ({u})","%share-fav-title":"(lisa järjehoidja)","%share-manual":"Palun sulge see dialoogiaken ja vajuta Ctrl-D lehele järjehoidja lisamiseks.","%share-showall":"Näita kõiki ({n})","%share-showall-title":"Kõik märgitud leheküljed","%share-disclaimer":"Mistahes tootele või teenusele pole otseselt ega kaudselt toetust avaldatud.","%form-not-submitted":"Ankeeti ei saa esitada, kuna","%errors-found":"on leitud vigu.","%error-found":"on leitud viga.","%datepicker-hide":"Peida kalender","%datepicker-show":"Vali kalendrist kuupäev:","%datepicker-selected":"Valitud","%calendar-weekDayNames":["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"],"%calendar-monthNames":["Jaanuar","Veebruar","Märts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"],"%calendar":"Kalender","%calendar-currentDay":"(Tänane päev)","%calendar-goToLink":'Mine aastas</span>  kuule <span class="wb-invisible"> ',"%calendar-goToTitle":"Mine sellele kuule aastas","%calendar-goToMonth":"Kuu","%calendar-goToYear":"Aasta","%calendar-goToButton":"Mine","%calendar-cancelButton":"Loobu","%calendar-previousMonth":"Eelmine kuu: ","%calendar-nextMonth":"Järgmine kuu: ","%show-toc":"Näita","%show-text":"Näita sisukorda","%hide-text":"Peida sisukord","%table-contents":"sisukord","%lb-current":"Kirje {current} koguhulgast {total}","%lb-xhr-error":"Sisu laadimine ebaõnnestus","%lb-img-error":"Pildi laadimine ebaõnnestus","%lb-slideshow":"slaidiesitlus","%jqm-expand":"klõpsa, et sisu laiendada","%jqm-collapse":"klõpsa, et sisu kitsendada","%jqm-clear-search":"tühista otsing","%jqm-filter":"Filtreeri","%jqm-tbl-col-toggle":"Veerud ...","%table-mention":"Tabel","%table-following":"Graafik. Täpsemad andmed järgnevas tabelis.","%st-timeout-msg":'Teie sessioon aegub automaatselt #expireTime#. Vali "OK", et laiendada oma istungil.',"%st-msgbox-title":"Hoiatus - sessiooni lõpp","%st-already-timeout-msg":"Kahjuks on su sessioon aegunud. Palun logi uuesti sisse.","%td-toggle":"Lülita kõik","%td-open":"Laienda kõiki","%td-close":"Sulge kõik","%td-ttl-open":"Laienda kõiki sisu osasid","%td-ttl-close":"Sulge kõik sisu osad","%sSortAscending":": aktiveeri kasvavaks järjestuseks","%sSortDescending":": aktiveeri kahanevaks järjestuseks","%sEmptyTable":"Tabelist puuduvad andmed","%sInfo":"Näitan _START_-_END_  _TOTAL_ kirjest","%sInfoEmpty":"Näitan kirjeid 0-0 koguhulgast 0","%sInfoFiltered":"(filtreeritud _MAX_ sissekannete koguhulgast)","%sInfoThousands":"&#160;","%sLengthMenu":"Näita _MENU_ kandeid","%geo-mapcontrol":"Kaardi kontroll","%geo-zoomin":"Suumi","%geo-zoomout":"Vähenda","%geo-zoomworld":"Suumi kaardi ulatuses","%geo-zoomfeature":"Suumi elemente","%geo-scaleline":"mõõtkava","%geo-mouseposition":"Laius-ja pikkuskraad hiirekursori","%geo-ariamap":"Kaardi objekt. Võimaluste kirjeldused leiad alltoodud tabelist.","%geo-accessibilize":"<strong>Klaviatuuri kasutajatele:</strong> Kui kaart on fookuses, kasutage nooleklahve kaardi panoraamimiseks ja pluss- ja miinusklahve suumimiseks. Nooleklahvidega ei saa panoraamida, kui kaart on suumitud kogu ulatuses.","%geo-accessibilizetitle":"Juhised: Kaardil navigeerimine","%geo-togglelayer":"Kihtide vaate lülitamine","%geo-hiddenlayer":"See kiht on praegu peidetud.","%geo-basemapurl":"http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg","%geo-basemaptitle":"BaseMaps_CBMT3978","%geo-basemapurltxt":"http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg","%geo-attributionlink":"http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en","%geo-attributiontitle":"GeoGratis - Kanada põhikaart (inglise või prantsuse keeles)","%geo-select":"Vali","%geo-labelselect":"Märkige kaardil elemendi valimiseks","%pe-disable":"Lihtsustatud HTML versioon","%pe-enable":"Standardversioon"};a.document.trigger("languageloaded");window.pe=a;return a}());
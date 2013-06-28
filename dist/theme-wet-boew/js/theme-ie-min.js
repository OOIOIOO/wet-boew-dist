/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-eng.html / wet-boew.github.io/wet-boew/Licence-fra.html
 *
 * Version: v3.1.3-development Build: 2013-06-28 03:02 AM EDT
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-wet-boew",psnb:null,search:null,bcrumb:null,title:null,sft:null,fullft:null,gridsmenu:null,menu:null,favicon:{href:"images/favicon-mobile.png",rel:"apple-touch-icon",sizes:"57x57 72x72 114x114 144x144 150x150"},init:function(){b.fullhd=pe.header.find("#wet-fullhd");b.psnb=pe.header.find("#wet-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#wet-srchbx");b.bcrumb=pe.header.find("#wet-bc");b.title=pe.header.find("#wet-title");b.sft=pe.footer.find("#wet-sft");b.fullft=pe.footer.find("#wet-fullft");b.gridsmenu=pe.main.find(".module-menu-section");var i=pe.menu.navcurrent(b.menubar,b.bcrumb),h=i.parents("div.mb-sm"),d,g,k,f,j,e=pe.mobile;if(!pe.svg||pe.svgfix){j=function(m){var n=c((e?"#wet-fullhd .ui-title img":"#wet-title img")).get(),l=n.length,o;while(l--){o=n[l];o.src=(m?o.src.replace(".png","-alt.png"):o.src.replace("-alt.png",".png"))}};window.onbeforeprint=function(){j(true)};window.onafterprint=function(){j(false)};g=c("#wet-title-in a").get();d=g.length;while(d--){k=g[d];f=k.getElementsByTagName("object");if(f.length>0){k.innerHTML=k.innerHTML.replace(/<object[\s\S]*?\/object>/i,f[0].innerHTML)}}}if(h.length!==0){h.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){i=pe.menu.navcurrent(pe.secnav,b.bcrumb);h=i.parents("ul");h.prev().children("a").addClass("nav-current-nocss")}if(b.gridsmenu.length!==0){i=pe.menu.navcurrent(b.gridsmenu,b.bcrumb)}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var y,O="",e,p,X=pe.dic.get("%settings"),C=pe.dic.get("%hyphen")+pe.dic.get("%main-page"),D,u,f,n,V,aa="",v='<a data-role="button" data-iconpos="notext"',F=' data-rel="popup" data-position-to="window"',r=v+F,G='<div data-role="popup" data-overlay-theme="a"',J='<div data-role="header"',Z=J+"><h1>",E=' data-theme="c" class="ui-corner-all">',s=J+' class="ui-corner-top"><h1>',h='<div data-role="content" data-theme="c" class="ui-corner-bottom ui-content">',W=v+' href="javascript:;" data-icon="delete" data-rel="back" class="ui-btn-right">'+pe.dic.get("%close")+"</a>",R=r+' data-icon="back" class="ui-btn-left"',P=">"+pe.dic.get("%back")+"</a>",Y="</div></div>",q='<ul data-role="listview"',A="",L,m,t,g,d,U,T,w,o,M,I,k,B=c(document),z=b.sft.length!==0,Q,N,K,S,H,x=typeof wet_boew_mobile_view!=="undefined"&&wet_boew_mobile_view.header_fixed,l='<div data-role="header"'+(x?' data-position="fixed"':"")+'><div class="ui-title"><div></div></div><map id="wet-mnavbar" data-role="controlgroup" data-type="horizontal" class="ui-btn-right wb-hide">';if(z){if(b.menubar.length!==0||pe.secnav.length!==0||b.bcrumb.length!==0){e=pe.dic.get("%menu");g=b.menubar.find("ul.mb-menu li");u=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");y=G+' id="jqm-wb-mb">'+Z+e+"</h1>"+W+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){I=b.bcrumb[0];L=I.getElementsByTagName("a");if(L.length!==0){Q=L[0].href}y+='<section><div id="jqm-mb-location-text">'+I.innerHTML+"</div></section>"}else{y+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){O+="<section><div><h2>"+u.innerHTML+"</h2>"+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></section>"}if(b.menubar.length!==0){O+="<section><div><h2>"+b.psnb.children(":header")[0].innerHTML+"</h2>"+pe.menu.buildmobile(g,3,"a",true,true,"c",true,true)+"</div></section>"}y+='<div id="jqm-mb-menu"></div></nav></div></div></div>';aa+=y;b.menu=O;A+=r+' data-icon="bars" href="#jqm-wb-mb">'+e+"</a>"}if(b.search.length!==0){p=pe.dic.get("%search");f=b.search[0];n=f.innerHTML;f=f.getElementsByTagName("input");w=f.length;while(w--){f[w].setAttribute("data-role","none")}V=G+' id="jqm-wb-search">'+Z+p+"</h1>"+W+'</div><div data-role="content"><div>'+n.substring(n.indexOf("<form"))+"</div></div></div>";aa+=V;A+=r+' data-icon="search" href="#jqm-wb-search">'+p+"</a>"}if(typeof Q!=="undefined"){l+=v+' href="'+Q+'" data-icon="home">'+pe.dic.get("%home")+"</a>"}else{if(true===false){l+=v+' href="#back-href" data-icon="back">'+pe.dic.get("%back")+"</a>"}}if(A.length!==0){l+=A}l+=r+' href="#popupSettings" data-icon="gear">'+X+"</a></map>"}b.fullhd.children("#wet-fullhd-in").before(l+"</div>");b.fullhd.find(".ui-title").append(b.title.find(!pe.svg||pe.svgfix?"img":"object").clone().attr((!pe.svg||pe.svgfix?"alt":"aria-label"),b.title.find("span").text()));I=b.title[0];I.className+=" ui-bar-b";if(z){H=document.getElementById("wb-session");t=b.fullhd.find('li[id*="-lang"]');D=G+' id="popupSettings"'+E;D+=s+X+"</h1>"+W+"</div>";D+=h+q+">";if(H!==null){N=H.getElementsByClassName("settings");for(U=0,w=N.length;U!==w;U+=1){K=N[U].getElementsByTagName("a")[0];D+='<li><a href="'+K.getAttribute("href")+'">'+K.innerHTML+"</a></li>"}S=H.getElementsByClassName("session")[0].getElementsByTagName("a")[0];D+='<li><a href="'+S.getAttribute("href")+'">'+S.innerHTML+"</a></li>"}if(t.length!==0){D+='<li><a href="#popupLanguages"'+F+">"+pe.dic.get("%languages")+"</a></li>"}D+='<li class="ui-corner-bottom"><a href="#popupAbout"'+F+">"+pe.dic.get("%about")+"</a></li>";D+="</ul>"+Y;if(t.length!==0){D+=G+' id="popupLanguages"'+E;D+=s+pe.dic.get("%languages")+"</h1>"+R+' href="#popupSettings"'+P+W+"</div>";D+=h+q+">";if(t.filter('[id*="-lang-current"]').length===0){D+='<li><a href="javascript:;" class="ui-disabled">'+pe.dic.get("%lang-native")+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}M=t.get();w=M.length;U=w;while(U--){I=M[U];m=I.getElementsByTagName("a")[0];D+="<li"+(U===0?' class="ui-corner-bottom"':"");if(I.id.indexOf("-lang-current")!==-1){D+='><a href="javascript:;" class="ui-disabled">'+I.innerHTML+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}else{D+='><a href="'+m.href+'" lang="'+m.getAttribute("lang")+'">'+m.innerHTML+"</a></li>"}}D+="</ul>"+Y}D+=G+' id="popupAbout"'+E;D+=s+pe.dic.get("%about")+"</h1>"+R+' href="#popupSettings"'+P+W+"</div>";D+=h;D+='<div class="site-app-title"><div class="ui-title">'+b.title[0].getElementsByTagName("span")[0].innerHTML+"</div></div>";I=pe.main.find("#wet-date-mod").children();if(I.length!==0){d=I[1];if(d.getElementsByTagName("time").length===0){D+='<div class="app-version">'+I[0].innerHTML+" "+d.innerHTML+"</div>"}}D+='<div data-role="collapsible-set">'+q+' data-inset="true">';M=b.sft.find(".wet-col-head");for(U=0,w=M.length;U!==w;U+=1){I=M.eq(U);m=I.children("a");k=I.find("+ ul, + address ul");d=m.length!==0?m[0].innerHTML:I[0].innerHTML;if(k.length!==0){D+='<li data-role="collapsible" data-inset="false"><h2>'+d+'</h2><ul data-role="listview">';L=k[0].getElementsByTagName("a");for(T=0,o=L.length;T!==o;T+=1){I=L[T];D+='<li><a href="'+I.href+'">'+I.innerHTML+"</a></li>"}if(m.length!==0){D+='<li><a href="'+m.attr("href")+'">'+m.html()+C+"</a></li>"}D+="</ul></li>"}else{if(m.length!==0){D+="<li"+(U===(w-1)?' class="ui-corner-bottom"':"")+'><a href="'+m.href+'">'+m.html()+"</a></li>"}}}D+="</ul></div>"+Y;pe.bodydiv.append(aa+D)}B.on("pagecreate",function(){var ae=b.fullhd.find("#wet-mnavbar"),af=pe.bodydiv.find("#jqm-mb-menu"),ad,ab,ac,j;if(ae.length!==0){if(!ae.hasClass("ui-controlgroup")){ae.controlgroup()}ae.removeClass("wb-hide");if(af.length!==0){af.append(b.menu);ae.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){af.trigger("create");ad=af[0].getElementsByClassName("ui-controlgroup");j=ad.length;while(j--){I=ad[j];ac=I.getElementsByTagName("li")[0];if(ac.parentNode.parentNode.parentNode.className.indexOf("ui-collapsible")===-1&&ac.className.indexOf("ui-corner-top")===-1){ac.className+=" ui-corner-top"}ab=I.getElementsByClassName("ui-btn");ac=ab[ab.length-1];if(typeof ac!=="undefined"&&ac.className.indexOf("ui-corner-bottom")===-1){ac.className+=" ui-corner-bottom"}}})}}function i(ah,ag,ak,aj){var ai;c.mobile.showPageLoadingMsg();ai=c.mobile.transitionHandlers.simultaneous("pop",ag,ak,aj);ai.done(function(){c.mobile.hidePageLoadingMsg()});return ai}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});B.trigger("themeviewloaded");return},desktopview:function(){var e,d;if(pe.ie>0&&pe.ie<9){e=c("input, textarea, select, button").get()}else{e=document.querySelectorAll("input, textarea, select, button")}d=e.length;while(d--){e[d].setAttribute("data-role","none")}c(document).trigger("themeviewloaded")}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));
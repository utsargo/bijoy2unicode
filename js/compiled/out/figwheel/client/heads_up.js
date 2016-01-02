// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17344__auto__ = [];
var len__17337__auto___24899 = arguments.length;
var i__17338__auto___24900 = (0);
while(true){
if((i__17338__auto___24900 < len__17337__auto___24899)){
args__17344__auto__.push((arguments[i__17338__auto___24900]));

var G__24901 = (i__17338__auto___24900 + (1));
i__17338__auto___24900 = G__24901;
continue;
} else {
}
break;
}

var argseq__17345__auto__ = ((((2) < args__17344__auto__.length))?(new cljs.core.IndexedSeq(args__17344__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17345__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__24891_24902 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__24892_24903 = null;
var count__24893_24904 = (0);
var i__24894_24905 = (0);
while(true){
if((i__24894_24905 < count__24893_24904)){
var k_24906 = cljs.core._nth.call(null,chunk__24892_24903,i__24894_24905);
e.setAttribute(cljs.core.name.call(null,k_24906),cljs.core.get.call(null,attrs,k_24906));

var G__24907 = seq__24891_24902;
var G__24908 = chunk__24892_24903;
var G__24909 = count__24893_24904;
var G__24910 = (i__24894_24905 + (1));
seq__24891_24902 = G__24907;
chunk__24892_24903 = G__24908;
count__24893_24904 = G__24909;
i__24894_24905 = G__24910;
continue;
} else {
var temp__4425__auto___24911 = cljs.core.seq.call(null,seq__24891_24902);
if(temp__4425__auto___24911){
var seq__24891_24912__$1 = temp__4425__auto___24911;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24891_24912__$1)){
var c__17082__auto___24913 = cljs.core.chunk_first.call(null,seq__24891_24912__$1);
var G__24914 = cljs.core.chunk_rest.call(null,seq__24891_24912__$1);
var G__24915 = c__17082__auto___24913;
var G__24916 = cljs.core.count.call(null,c__17082__auto___24913);
var G__24917 = (0);
seq__24891_24902 = G__24914;
chunk__24892_24903 = G__24915;
count__24893_24904 = G__24916;
i__24894_24905 = G__24917;
continue;
} else {
var k_24918 = cljs.core.first.call(null,seq__24891_24912__$1);
e.setAttribute(cljs.core.name.call(null,k_24918),cljs.core.get.call(null,attrs,k_24918));

var G__24919 = cljs.core.next.call(null,seq__24891_24912__$1);
var G__24920 = null;
var G__24921 = (0);
var G__24922 = (0);
seq__24891_24902 = G__24919;
chunk__24892_24903 = G__24920;
count__24893_24904 = G__24921;
i__24894_24905 = G__24922;
continue;
}
} else {
}
}
break;
}

var seq__24895_24923 = cljs.core.seq.call(null,children);
var chunk__24896_24924 = null;
var count__24897_24925 = (0);
var i__24898_24926 = (0);
while(true){
if((i__24898_24926 < count__24897_24925)){
var ch_24927 = cljs.core._nth.call(null,chunk__24896_24924,i__24898_24926);
e.appendChild(ch_24927);

var G__24928 = seq__24895_24923;
var G__24929 = chunk__24896_24924;
var G__24930 = count__24897_24925;
var G__24931 = (i__24898_24926 + (1));
seq__24895_24923 = G__24928;
chunk__24896_24924 = G__24929;
count__24897_24925 = G__24930;
i__24898_24926 = G__24931;
continue;
} else {
var temp__4425__auto___24932 = cljs.core.seq.call(null,seq__24895_24923);
if(temp__4425__auto___24932){
var seq__24895_24933__$1 = temp__4425__auto___24932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24895_24933__$1)){
var c__17082__auto___24934 = cljs.core.chunk_first.call(null,seq__24895_24933__$1);
var G__24935 = cljs.core.chunk_rest.call(null,seq__24895_24933__$1);
var G__24936 = c__17082__auto___24934;
var G__24937 = cljs.core.count.call(null,c__17082__auto___24934);
var G__24938 = (0);
seq__24895_24923 = G__24935;
chunk__24896_24924 = G__24936;
count__24897_24925 = G__24937;
i__24898_24926 = G__24938;
continue;
} else {
var ch_24939 = cljs.core.first.call(null,seq__24895_24933__$1);
e.appendChild(ch_24939);

var G__24940 = cljs.core.next.call(null,seq__24895_24933__$1);
var G__24941 = null;
var G__24942 = (0);
var G__24943 = (0);
seq__24895_24923 = G__24940;
chunk__24896_24924 = G__24941;
count__24897_24925 = G__24942;
i__24898_24926 = G__24943;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq24888){
var G__24889 = cljs.core.first.call(null,seq24888);
var seq24888__$1 = cljs.core.next.call(null,seq24888);
var G__24890 = cljs.core.first.call(null,seq24888__$1);
var seq24888__$2 = cljs.core.next.call(null,seq24888__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__24889,G__24890,seq24888__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17192__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17193__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17194__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17195__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17196__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17192__auto__,prefer_table__17193__auto__,method_cache__17194__auto__,cached_hierarchy__17195__auto__,hierarchy__17196__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17192__auto__,prefer_table__17193__auto__,method_cache__17194__auto__,cached_hierarchy__17195__auto__,hierarchy__17196__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17196__auto__,method_table__17192__auto__,prefer_table__17193__auto__,method_cache__17194__auto__,cached_hierarchy__17195__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_24944 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_24944.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_24944.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_24944.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_24944);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__24945,st_map){
var map__24950 = p__24945;
var map__24950__$1 = ((((!((map__24950 == null)))?((((map__24950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24950):map__24950);
var container_el = cljs.core.get.call(null,map__24950__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__24950,map__24950__$1,container_el){
return (function (p__24952){
var vec__24953 = p__24952;
var k = cljs.core.nth.call(null,vec__24953,(0),null);
var v = cljs.core.nth.call(null,vec__24953,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__24950,map__24950__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__24954,dom_str){
var map__24957 = p__24954;
var map__24957__$1 = ((((!((map__24957 == null)))?((((map__24957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24957):map__24957);
var c = map__24957__$1;
var content_area_el = cljs.core.get.call(null,map__24957__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__24959){
var map__24962 = p__24959;
var map__24962__$1 = ((((!((map__24962 == null)))?((((map__24962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24962):map__24962);
var content_area_el = cljs.core.get.call(null,map__24962__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto__){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto__){
return (function (state_25005){
var state_val_25006 = (state_25005[(1)]);
if((state_val_25006 === (1))){
var inst_24990 = (state_25005[(7)]);
var inst_24990__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24991 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24992 = ["10px","10px","100%","68px","1.0"];
var inst_24993 = cljs.core.PersistentHashMap.fromArrays(inst_24991,inst_24992);
var inst_24994 = cljs.core.merge.call(null,inst_24993,style);
var inst_24995 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24990__$1,inst_24994);
var inst_24996 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24990__$1,msg);
var inst_24997 = cljs.core.async.timeout.call(null,(300));
var state_25005__$1 = (function (){var statearr_25007 = state_25005;
(statearr_25007[(8)] = inst_24995);

(statearr_25007[(7)] = inst_24990__$1);

(statearr_25007[(9)] = inst_24996);

return statearr_25007;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25005__$1,(2),inst_24997);
} else {
if((state_val_25006 === (2))){
var inst_24990 = (state_25005[(7)]);
var inst_24999 = (state_25005[(2)]);
var inst_25000 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_25001 = ["auto"];
var inst_25002 = cljs.core.PersistentHashMap.fromArrays(inst_25000,inst_25001);
var inst_25003 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24990,inst_25002);
var state_25005__$1 = (function (){var statearr_25008 = state_25005;
(statearr_25008[(10)] = inst_24999);

return statearr_25008;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25005__$1,inst_25003);
} else {
return null;
}
}
});})(c__19619__auto__))
;
return ((function (switch__19554__auto__,c__19619__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19555__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19555__auto____0 = (function (){
var statearr_25012 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25012[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19555__auto__);

(statearr_25012[(1)] = (1));

return statearr_25012;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19555__auto____1 = (function (state_25005){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_25005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e25013){if((e25013 instanceof Object)){
var ex__19558__auto__ = e25013;
var statearr_25014_25016 = state_25005;
(statearr_25014_25016[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25017 = state_25005;
state_25005 = G__25017;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19555__auto__ = function(state_25005){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19555__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19555__auto____1.call(this,state_25005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19555__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19555__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto__))
})();
var state__19621__auto__ = (function (){var statearr_25015 = f__19620__auto__.call(null);
(statearr_25015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto__);

return statearr_25015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto__))
);

return c__19619__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__25019 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__25019,(0),null);
var ln = cljs.core.nth.call(null,vec__25019,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__25022 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__25022,(0),null);
var file_line = cljs.core.nth.call(null,vec__25022,(1),null);
var file_column = cljs.core.nth.call(null,vec__25022,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__25022,file_name,file_line,file_column){
return (function (p1__25020_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__25020_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__25022,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16279__auto__ = file_line;
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
var and__16267__auto__ = cause;
if(cljs.core.truth_(and__16267__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16267__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__25025 = figwheel.client.heads_up.ensure_container.call(null);
var map__25025__$1 = ((((!((map__25025 == null)))?((((map__25025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25025):map__25025);
var content_area_el = cljs.core.get.call(null,map__25025__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto__){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto__){
return (function (state_25073){
var state_val_25074 = (state_25073[(1)]);
if((state_val_25074 === (1))){
var inst_25056 = (state_25073[(7)]);
var inst_25056__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25057 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25058 = ["0.0"];
var inst_25059 = cljs.core.PersistentHashMap.fromArrays(inst_25057,inst_25058);
var inst_25060 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25056__$1,inst_25059);
var inst_25061 = cljs.core.async.timeout.call(null,(300));
var state_25073__$1 = (function (){var statearr_25075 = state_25073;
(statearr_25075[(8)] = inst_25060);

(statearr_25075[(7)] = inst_25056__$1);

return statearr_25075;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25073__$1,(2),inst_25061);
} else {
if((state_val_25074 === (2))){
var inst_25056 = (state_25073[(7)]);
var inst_25063 = (state_25073[(2)]);
var inst_25064 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_25065 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_25066 = cljs.core.PersistentHashMap.fromArrays(inst_25064,inst_25065);
var inst_25067 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25056,inst_25066);
var inst_25068 = cljs.core.async.timeout.call(null,(200));
var state_25073__$1 = (function (){var statearr_25076 = state_25073;
(statearr_25076[(9)] = inst_25063);

(statearr_25076[(10)] = inst_25067);

return statearr_25076;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25073__$1,(3),inst_25068);
} else {
if((state_val_25074 === (3))){
var inst_25056 = (state_25073[(7)]);
var inst_25070 = (state_25073[(2)]);
var inst_25071 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25056,"");
var state_25073__$1 = (function (){var statearr_25077 = state_25073;
(statearr_25077[(11)] = inst_25070);

return statearr_25077;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25073__$1,inst_25071);
} else {
return null;
}
}
}
});})(c__19619__auto__))
;
return ((function (switch__19554__auto__,c__19619__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19555__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19555__auto____0 = (function (){
var statearr_25081 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25081[(0)] = figwheel$client$heads_up$clear_$_state_machine__19555__auto__);

(statearr_25081[(1)] = (1));

return statearr_25081;
});
var figwheel$client$heads_up$clear_$_state_machine__19555__auto____1 = (function (state_25073){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_25073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e25082){if((e25082 instanceof Object)){
var ex__19558__auto__ = e25082;
var statearr_25083_25085 = state_25073;
(statearr_25083_25085[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25086 = state_25073;
state_25073 = G__25086;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19555__auto__ = function(state_25073){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19555__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19555__auto____1.call(this,state_25073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19555__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19555__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto__))
})();
var state__19621__auto__ = (function (){var statearr_25084 = f__19620__auto__.call(null);
(statearr_25084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto__);

return statearr_25084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto__))
);

return c__19619__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto__){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto__){
return (function (state_25118){
var state_val_25119 = (state_25118[(1)]);
if((state_val_25119 === (1))){
var inst_25108 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_25118__$1 = state_25118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25118__$1,(2),inst_25108);
} else {
if((state_val_25119 === (2))){
var inst_25110 = (state_25118[(2)]);
var inst_25111 = cljs.core.async.timeout.call(null,(400));
var state_25118__$1 = (function (){var statearr_25120 = state_25118;
(statearr_25120[(7)] = inst_25110);

return statearr_25120;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25118__$1,(3),inst_25111);
} else {
if((state_val_25119 === (3))){
var inst_25113 = (state_25118[(2)]);
var inst_25114 = figwheel.client.heads_up.clear.call(null);
var state_25118__$1 = (function (){var statearr_25121 = state_25118;
(statearr_25121[(8)] = inst_25113);

return statearr_25121;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25118__$1,(4),inst_25114);
} else {
if((state_val_25119 === (4))){
var inst_25116 = (state_25118[(2)]);
var state_25118__$1 = state_25118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25118__$1,inst_25116);
} else {
return null;
}
}
}
}
});})(c__19619__auto__))
;
return ((function (switch__19554__auto__,c__19619__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19555__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19555__auto____0 = (function (){
var statearr_25125 = [null,null,null,null,null,null,null,null,null];
(statearr_25125[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19555__auto__);

(statearr_25125[(1)] = (1));

return statearr_25125;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19555__auto____1 = (function (state_25118){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_25118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e25126){if((e25126 instanceof Object)){
var ex__19558__auto__ = e25126;
var statearr_25127_25129 = state_25118;
(statearr_25127_25129[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25130 = state_25118;
state_25118 = G__25130;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19555__auto__ = function(state_25118){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19555__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19555__auto____1.call(this,state_25118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19555__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19555__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto__))
})();
var state__19621__auto__ = (function (){var statearr_25128 = f__19620__auto__.call(null);
(statearr_25128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto__);

return statearr_25128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto__))
);

return c__19619__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1446956439169
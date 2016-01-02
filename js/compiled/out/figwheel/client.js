// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__24037 = cljs.core._EQ_;
var expr__24038 = (function (){var or__16279__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24037.call(null,"true",expr__24038))){
return true;
} else {
if(cljs.core.truth_(pred__24037.call(null,"false",expr__24038))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24038)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24040__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24040 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24041__i = 0, G__24041__a = new Array(arguments.length -  0);
while (G__24041__i < G__24041__a.length) {G__24041__a[G__24041__i] = arguments[G__24041__i + 0]; ++G__24041__i;}
  args = new cljs.core.IndexedSeq(G__24041__a,0);
} 
return G__24040__delegate.call(this,args);};
G__24040.cljs$lang$maxFixedArity = 0;
G__24040.cljs$lang$applyTo = (function (arglist__24042){
var args = cljs.core.seq(arglist__24042);
return G__24040__delegate(args);
});
G__24040.cljs$core$IFn$_invoke$arity$variadic = G__24040__delegate;
return G__24040;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24043){
var map__24046 = p__24043;
var map__24046__$1 = ((((!((map__24046 == null)))?((((map__24046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24046):map__24046);
var message = cljs.core.get.call(null,map__24046__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24046__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16279__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16267__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16267__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16267__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19619__auto___24208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto___24208,ch){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto___24208,ch){
return (function (state_24177){
var state_val_24178 = (state_24177[(1)]);
if((state_val_24178 === (7))){
var inst_24173 = (state_24177[(2)]);
var state_24177__$1 = state_24177;
var statearr_24179_24209 = state_24177__$1;
(statearr_24179_24209[(2)] = inst_24173);

(statearr_24179_24209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (1))){
var state_24177__$1 = state_24177;
var statearr_24180_24210 = state_24177__$1;
(statearr_24180_24210[(2)] = null);

(statearr_24180_24210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (4))){
var inst_24130 = (state_24177[(7)]);
var inst_24130__$1 = (state_24177[(2)]);
var state_24177__$1 = (function (){var statearr_24181 = state_24177;
(statearr_24181[(7)] = inst_24130__$1);

return statearr_24181;
})();
if(cljs.core.truth_(inst_24130__$1)){
var statearr_24182_24211 = state_24177__$1;
(statearr_24182_24211[(1)] = (5));

} else {
var statearr_24183_24212 = state_24177__$1;
(statearr_24183_24212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (15))){
var inst_24137 = (state_24177[(8)]);
var inst_24152 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24137);
var inst_24153 = cljs.core.first.call(null,inst_24152);
var inst_24154 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24153);
var inst_24155 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_24154)].join('');
var inst_24156 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24155);
var state_24177__$1 = state_24177;
var statearr_24184_24213 = state_24177__$1;
(statearr_24184_24213[(2)] = inst_24156);

(statearr_24184_24213[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (13))){
var inst_24161 = (state_24177[(2)]);
var state_24177__$1 = state_24177;
var statearr_24185_24214 = state_24177__$1;
(statearr_24185_24214[(2)] = inst_24161);

(statearr_24185_24214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (6))){
var state_24177__$1 = state_24177;
var statearr_24186_24215 = state_24177__$1;
(statearr_24186_24215[(2)] = null);

(statearr_24186_24215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (17))){
var inst_24159 = (state_24177[(2)]);
var state_24177__$1 = state_24177;
var statearr_24187_24216 = state_24177__$1;
(statearr_24187_24216[(2)] = inst_24159);

(statearr_24187_24216[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (3))){
var inst_24175 = (state_24177[(2)]);
var state_24177__$1 = state_24177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24177__$1,inst_24175);
} else {
if((state_val_24178 === (12))){
var inst_24136 = (state_24177[(9)]);
var inst_24150 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24136,opts);
var state_24177__$1 = state_24177;
if(cljs.core.truth_(inst_24150)){
var statearr_24188_24217 = state_24177__$1;
(statearr_24188_24217[(1)] = (15));

} else {
var statearr_24189_24218 = state_24177__$1;
(statearr_24189_24218[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (2))){
var state_24177__$1 = state_24177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24177__$1,(4),ch);
} else {
if((state_val_24178 === (11))){
var inst_24137 = (state_24177[(8)]);
var inst_24142 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24143 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24137);
var inst_24144 = cljs.core.async.timeout.call(null,(1000));
var inst_24145 = [inst_24143,inst_24144];
var inst_24146 = (new cljs.core.PersistentVector(null,2,(5),inst_24142,inst_24145,null));
var state_24177__$1 = state_24177;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24177__$1,(14),inst_24146);
} else {
if((state_val_24178 === (9))){
var inst_24137 = (state_24177[(8)]);
var inst_24163 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24164 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24137);
var inst_24165 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24164);
var inst_24166 = [cljs.core.str("Not loading: "),cljs.core.str(inst_24165)].join('');
var inst_24167 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24166);
var state_24177__$1 = (function (){var statearr_24190 = state_24177;
(statearr_24190[(10)] = inst_24163);

return statearr_24190;
})();
var statearr_24191_24219 = state_24177__$1;
(statearr_24191_24219[(2)] = inst_24167);

(statearr_24191_24219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (5))){
var inst_24130 = (state_24177[(7)]);
var inst_24132 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24133 = (new cljs.core.PersistentArrayMap(null,2,inst_24132,null));
var inst_24134 = (new cljs.core.PersistentHashSet(null,inst_24133,null));
var inst_24135 = figwheel.client.focus_msgs.call(null,inst_24134,inst_24130);
var inst_24136 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24135);
var inst_24137 = cljs.core.first.call(null,inst_24135);
var inst_24138 = figwheel.client.autoload_QMARK_.call(null);
var state_24177__$1 = (function (){var statearr_24192 = state_24177;
(statearr_24192[(8)] = inst_24137);

(statearr_24192[(9)] = inst_24136);

return statearr_24192;
})();
if(cljs.core.truth_(inst_24138)){
var statearr_24193_24220 = state_24177__$1;
(statearr_24193_24220[(1)] = (8));

} else {
var statearr_24194_24221 = state_24177__$1;
(statearr_24194_24221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (14))){
var inst_24148 = (state_24177[(2)]);
var state_24177__$1 = state_24177;
var statearr_24195_24222 = state_24177__$1;
(statearr_24195_24222[(2)] = inst_24148);

(statearr_24195_24222[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (16))){
var state_24177__$1 = state_24177;
var statearr_24196_24223 = state_24177__$1;
(statearr_24196_24223[(2)] = null);

(statearr_24196_24223[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (10))){
var inst_24169 = (state_24177[(2)]);
var state_24177__$1 = (function (){var statearr_24197 = state_24177;
(statearr_24197[(11)] = inst_24169);

return statearr_24197;
})();
var statearr_24198_24224 = state_24177__$1;
(statearr_24198_24224[(2)] = null);

(statearr_24198_24224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (8))){
var inst_24136 = (state_24177[(9)]);
var inst_24140 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24136,opts);
var state_24177__$1 = state_24177;
if(cljs.core.truth_(inst_24140)){
var statearr_24199_24225 = state_24177__$1;
(statearr_24199_24225[(1)] = (11));

} else {
var statearr_24200_24226 = state_24177__$1;
(statearr_24200_24226[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19619__auto___24208,ch))
;
return ((function (switch__19554__auto__,c__19619__auto___24208,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19555__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19555__auto____0 = (function (){
var statearr_24204 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24204[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19555__auto__);

(statearr_24204[(1)] = (1));

return statearr_24204;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19555__auto____1 = (function (state_24177){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_24177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e24205){if((e24205 instanceof Object)){
var ex__19558__auto__ = e24205;
var statearr_24206_24227 = state_24177;
(statearr_24206_24227[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24228 = state_24177;
state_24177 = G__24228;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19555__auto__ = function(state_24177){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19555__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19555__auto____1.call(this,state_24177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19555__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19555__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto___24208,ch))
})();
var state__19621__auto__ = (function (){var statearr_24207 = f__19620__auto__.call(null);
(statearr_24207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto___24208);

return statearr_24207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto___24208,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24229_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24229_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_24236 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24236){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24234 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24235 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24234,_STAR_print_newline_STAR_24235,base_path_24236){
return (function() { 
var G__24237__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24237 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24238__i = 0, G__24238__a = new Array(arguments.length -  0);
while (G__24238__i < G__24238__a.length) {G__24238__a[G__24238__i] = arguments[G__24238__i + 0]; ++G__24238__i;}
  args = new cljs.core.IndexedSeq(G__24238__a,0);
} 
return G__24237__delegate.call(this,args);};
G__24237.cljs$lang$maxFixedArity = 0;
G__24237.cljs$lang$applyTo = (function (arglist__24239){
var args = cljs.core.seq(arglist__24239);
return G__24237__delegate(args);
});
G__24237.cljs$core$IFn$_invoke$arity$variadic = G__24237__delegate;
return G__24237;
})()
;})(_STAR_print_fn_STAR_24234,_STAR_print_newline_STAR_24235,base_path_24236))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24235;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24234;
}}catch (e24233){if((e24233 instanceof Error)){
var e = e24233;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24236], null));
} else {
var e = e24233;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24236))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24240){
var map__24247 = p__24240;
var map__24247__$1 = ((((!((map__24247 == null)))?((((map__24247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24247):map__24247);
var opts = map__24247__$1;
var build_id = cljs.core.get.call(null,map__24247__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24247,map__24247__$1,opts,build_id){
return (function (p__24249){
var vec__24250 = p__24249;
var map__24251 = cljs.core.nth.call(null,vec__24250,(0),null);
var map__24251__$1 = ((((!((map__24251 == null)))?((((map__24251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24251):map__24251);
var msg = map__24251__$1;
var msg_name = cljs.core.get.call(null,map__24251__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24250,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24250,map__24251,map__24251__$1,msg,msg_name,_,map__24247,map__24247__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24250,map__24251,map__24251__$1,msg,msg_name,_,map__24247,map__24247__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24247,map__24247__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24257){
var vec__24258 = p__24257;
var map__24259 = cljs.core.nth.call(null,vec__24258,(0),null);
var map__24259__$1 = ((((!((map__24259 == null)))?((((map__24259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24259):map__24259);
var msg = map__24259__$1;
var msg_name = cljs.core.get.call(null,map__24259__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24258,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24261){
var map__24271 = p__24261;
var map__24271__$1 = ((((!((map__24271 == null)))?((((map__24271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24271):map__24271);
var on_compile_warning = cljs.core.get.call(null,map__24271__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24271__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24271,map__24271__$1,on_compile_warning,on_compile_fail){
return (function (p__24273){
var vec__24274 = p__24273;
var map__24275 = cljs.core.nth.call(null,vec__24274,(0),null);
var map__24275__$1 = ((((!((map__24275 == null)))?((((map__24275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24275):map__24275);
var msg = map__24275__$1;
var msg_name = cljs.core.get.call(null,map__24275__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24274,(1));
var pred__24277 = cljs.core._EQ_;
var expr__24278 = msg_name;
if(cljs.core.truth_(pred__24277.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24278))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24277.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24278))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24271,map__24271__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto__,msg_hist,msg_names,msg){
return (function (state_24494){
var state_val_24495 = (state_24494[(1)]);
if((state_val_24495 === (7))){
var inst_24418 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
if(cljs.core.truth_(inst_24418)){
var statearr_24496_24542 = state_24494__$1;
(statearr_24496_24542[(1)] = (8));

} else {
var statearr_24497_24543 = state_24494__$1;
(statearr_24497_24543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (20))){
var inst_24488 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24498_24544 = state_24494__$1;
(statearr_24498_24544[(2)] = inst_24488);

(statearr_24498_24544[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (27))){
var inst_24484 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24499_24545 = state_24494__$1;
(statearr_24499_24545[(2)] = inst_24484);

(statearr_24499_24545[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (1))){
var inst_24411 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24494__$1 = state_24494;
if(cljs.core.truth_(inst_24411)){
var statearr_24500_24546 = state_24494__$1;
(statearr_24500_24546[(1)] = (2));

} else {
var statearr_24501_24547 = state_24494__$1;
(statearr_24501_24547[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (24))){
var inst_24486 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24502_24548 = state_24494__$1;
(statearr_24502_24548[(2)] = inst_24486);

(statearr_24502_24548[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (4))){
var inst_24492 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24494__$1,inst_24492);
} else {
if((state_val_24495 === (15))){
var inst_24490 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24503_24549 = state_24494__$1;
(statearr_24503_24549[(2)] = inst_24490);

(statearr_24503_24549[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (21))){
var inst_24449 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24504_24550 = state_24494__$1;
(statearr_24504_24550[(2)] = inst_24449);

(statearr_24504_24550[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (31))){
var inst_24473 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24494__$1 = state_24494;
if(cljs.core.truth_(inst_24473)){
var statearr_24505_24551 = state_24494__$1;
(statearr_24505_24551[(1)] = (34));

} else {
var statearr_24506_24552 = state_24494__$1;
(statearr_24506_24552[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (32))){
var inst_24482 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24507_24553 = state_24494__$1;
(statearr_24507_24553[(2)] = inst_24482);

(statearr_24507_24553[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (33))){
var inst_24471 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24508_24554 = state_24494__$1;
(statearr_24508_24554[(2)] = inst_24471);

(statearr_24508_24554[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (13))){
var inst_24432 = figwheel.client.heads_up.clear.call(null);
var state_24494__$1 = state_24494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24494__$1,(16),inst_24432);
} else {
if((state_val_24495 === (22))){
var inst_24453 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24454 = figwheel.client.heads_up.append_message.call(null,inst_24453);
var state_24494__$1 = state_24494;
var statearr_24509_24555 = state_24494__$1;
(statearr_24509_24555[(2)] = inst_24454);

(statearr_24509_24555[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (36))){
var inst_24480 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24510_24556 = state_24494__$1;
(statearr_24510_24556[(2)] = inst_24480);

(statearr_24510_24556[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (29))){
var inst_24464 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24511_24557 = state_24494__$1;
(statearr_24511_24557[(2)] = inst_24464);

(statearr_24511_24557[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (6))){
var inst_24413 = (state_24494[(7)]);
var state_24494__$1 = state_24494;
var statearr_24512_24558 = state_24494__$1;
(statearr_24512_24558[(2)] = inst_24413);

(statearr_24512_24558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (28))){
var inst_24460 = (state_24494[(2)]);
var inst_24461 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24462 = figwheel.client.heads_up.display_warning.call(null,inst_24461);
var state_24494__$1 = (function (){var statearr_24513 = state_24494;
(statearr_24513[(8)] = inst_24460);

return statearr_24513;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24494__$1,(29),inst_24462);
} else {
if((state_val_24495 === (25))){
var inst_24458 = figwheel.client.heads_up.clear.call(null);
var state_24494__$1 = state_24494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24494__$1,(28),inst_24458);
} else {
if((state_val_24495 === (34))){
var inst_24475 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24494__$1 = state_24494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24494__$1,(37),inst_24475);
} else {
if((state_val_24495 === (17))){
var inst_24440 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24514_24559 = state_24494__$1;
(statearr_24514_24559[(2)] = inst_24440);

(statearr_24514_24559[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (3))){
var inst_24430 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24494__$1 = state_24494;
if(cljs.core.truth_(inst_24430)){
var statearr_24515_24560 = state_24494__$1;
(statearr_24515_24560[(1)] = (13));

} else {
var statearr_24516_24561 = state_24494__$1;
(statearr_24516_24561[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (12))){
var inst_24426 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24517_24562 = state_24494__$1;
(statearr_24517_24562[(2)] = inst_24426);

(statearr_24517_24562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (2))){
var inst_24413 = (state_24494[(7)]);
var inst_24413__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24494__$1 = (function (){var statearr_24518 = state_24494;
(statearr_24518[(7)] = inst_24413__$1);

return statearr_24518;
})();
if(cljs.core.truth_(inst_24413__$1)){
var statearr_24519_24563 = state_24494__$1;
(statearr_24519_24563[(1)] = (5));

} else {
var statearr_24520_24564 = state_24494__$1;
(statearr_24520_24564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (23))){
var inst_24456 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24494__$1 = state_24494;
if(cljs.core.truth_(inst_24456)){
var statearr_24521_24565 = state_24494__$1;
(statearr_24521_24565[(1)] = (25));

} else {
var statearr_24522_24566 = state_24494__$1;
(statearr_24522_24566[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (35))){
var state_24494__$1 = state_24494;
var statearr_24523_24567 = state_24494__$1;
(statearr_24523_24567[(2)] = null);

(statearr_24523_24567[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (19))){
var inst_24451 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24494__$1 = state_24494;
if(cljs.core.truth_(inst_24451)){
var statearr_24524_24568 = state_24494__$1;
(statearr_24524_24568[(1)] = (22));

} else {
var statearr_24525_24569 = state_24494__$1;
(statearr_24525_24569[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (11))){
var inst_24422 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24526_24570 = state_24494__$1;
(statearr_24526_24570[(2)] = inst_24422);

(statearr_24526_24570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (9))){
var inst_24424 = figwheel.client.heads_up.clear.call(null);
var state_24494__$1 = state_24494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24494__$1,(12),inst_24424);
} else {
if((state_val_24495 === (5))){
var inst_24415 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24494__$1 = state_24494;
var statearr_24527_24571 = state_24494__$1;
(statearr_24527_24571[(2)] = inst_24415);

(statearr_24527_24571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (14))){
var inst_24442 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24494__$1 = state_24494;
if(cljs.core.truth_(inst_24442)){
var statearr_24528_24572 = state_24494__$1;
(statearr_24528_24572[(1)] = (18));

} else {
var statearr_24529_24573 = state_24494__$1;
(statearr_24529_24573[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (26))){
var inst_24466 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24494__$1 = state_24494;
if(cljs.core.truth_(inst_24466)){
var statearr_24530_24574 = state_24494__$1;
(statearr_24530_24574[(1)] = (30));

} else {
var statearr_24531_24575 = state_24494__$1;
(statearr_24531_24575[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (16))){
var inst_24434 = (state_24494[(2)]);
var inst_24435 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24436 = figwheel.client.format_messages.call(null,inst_24435);
var inst_24437 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24438 = figwheel.client.heads_up.display_error.call(null,inst_24436,inst_24437);
var state_24494__$1 = (function (){var statearr_24532 = state_24494;
(statearr_24532[(9)] = inst_24434);

return statearr_24532;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24494__$1,(17),inst_24438);
} else {
if((state_val_24495 === (30))){
var inst_24468 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24469 = figwheel.client.heads_up.display_warning.call(null,inst_24468);
var state_24494__$1 = state_24494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24494__$1,(33),inst_24469);
} else {
if((state_val_24495 === (10))){
var inst_24428 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24533_24576 = state_24494__$1;
(statearr_24533_24576[(2)] = inst_24428);

(statearr_24533_24576[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (18))){
var inst_24444 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24445 = figwheel.client.format_messages.call(null,inst_24444);
var inst_24446 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24447 = figwheel.client.heads_up.display_error.call(null,inst_24445,inst_24446);
var state_24494__$1 = state_24494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24494__$1,(21),inst_24447);
} else {
if((state_val_24495 === (37))){
var inst_24477 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24534_24577 = state_24494__$1;
(statearr_24534_24577[(2)] = inst_24477);

(statearr_24534_24577[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (8))){
var inst_24420 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24494__$1 = state_24494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24494__$1,(11),inst_24420);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19619__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19554__auto__,c__19619__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19555__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19555__auto____0 = (function (){
var statearr_24538 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24538[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19555__auto__);

(statearr_24538[(1)] = (1));

return statearr_24538;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19555__auto____1 = (function (state_24494){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_24494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e24539){if((e24539 instanceof Object)){
var ex__19558__auto__ = e24539;
var statearr_24540_24578 = state_24494;
(statearr_24540_24578[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24579 = state_24494;
state_24494 = G__24579;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19555__auto__ = function(state_24494){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19555__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19555__auto____1.call(this,state_24494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19555__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19555__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto__,msg_hist,msg_names,msg))
})();
var state__19621__auto__ = (function (){var statearr_24541 = f__19620__auto__.call(null);
(statearr_24541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto__);

return statearr_24541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto__,msg_hist,msg_names,msg))
);

return c__19619__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19619__auto___24642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto___24642,ch){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto___24642,ch){
return (function (state_24625){
var state_val_24626 = (state_24625[(1)]);
if((state_val_24626 === (1))){
var state_24625__$1 = state_24625;
var statearr_24627_24643 = state_24625__$1;
(statearr_24627_24643[(2)] = null);

(statearr_24627_24643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24626 === (2))){
var state_24625__$1 = state_24625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24625__$1,(4),ch);
} else {
if((state_val_24626 === (3))){
var inst_24623 = (state_24625[(2)]);
var state_24625__$1 = state_24625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24625__$1,inst_24623);
} else {
if((state_val_24626 === (4))){
var inst_24613 = (state_24625[(7)]);
var inst_24613__$1 = (state_24625[(2)]);
var state_24625__$1 = (function (){var statearr_24628 = state_24625;
(statearr_24628[(7)] = inst_24613__$1);

return statearr_24628;
})();
if(cljs.core.truth_(inst_24613__$1)){
var statearr_24629_24644 = state_24625__$1;
(statearr_24629_24644[(1)] = (5));

} else {
var statearr_24630_24645 = state_24625__$1;
(statearr_24630_24645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24626 === (5))){
var inst_24613 = (state_24625[(7)]);
var inst_24615 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24613);
var state_24625__$1 = state_24625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24625__$1,(8),inst_24615);
} else {
if((state_val_24626 === (6))){
var state_24625__$1 = state_24625;
var statearr_24631_24646 = state_24625__$1;
(statearr_24631_24646[(2)] = null);

(statearr_24631_24646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24626 === (7))){
var inst_24621 = (state_24625[(2)]);
var state_24625__$1 = state_24625;
var statearr_24632_24647 = state_24625__$1;
(statearr_24632_24647[(2)] = inst_24621);

(statearr_24632_24647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24626 === (8))){
var inst_24617 = (state_24625[(2)]);
var state_24625__$1 = (function (){var statearr_24633 = state_24625;
(statearr_24633[(8)] = inst_24617);

return statearr_24633;
})();
var statearr_24634_24648 = state_24625__$1;
(statearr_24634_24648[(2)] = null);

(statearr_24634_24648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__19619__auto___24642,ch))
;
return ((function (switch__19554__auto__,c__19619__auto___24642,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19555__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19555__auto____0 = (function (){
var statearr_24638 = [null,null,null,null,null,null,null,null,null];
(statearr_24638[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19555__auto__);

(statearr_24638[(1)] = (1));

return statearr_24638;
});
var figwheel$client$heads_up_plugin_$_state_machine__19555__auto____1 = (function (state_24625){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_24625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e24639){if((e24639 instanceof Object)){
var ex__19558__auto__ = e24639;
var statearr_24640_24649 = state_24625;
(statearr_24640_24649[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24650 = state_24625;
state_24625 = G__24650;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19555__auto__ = function(state_24625){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19555__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19555__auto____1.call(this,state_24625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19555__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19555__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto___24642,ch))
})();
var state__19621__auto__ = (function (){var statearr_24641 = f__19620__auto__.call(null);
(statearr_24641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto___24642);

return statearr_24641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto___24642,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto__){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto__){
return (function (state_24671){
var state_val_24672 = (state_24671[(1)]);
if((state_val_24672 === (1))){
var inst_24666 = cljs.core.async.timeout.call(null,(3000));
var state_24671__$1 = state_24671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24671__$1,(2),inst_24666);
} else {
if((state_val_24672 === (2))){
var inst_24668 = (state_24671[(2)]);
var inst_24669 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24671__$1 = (function (){var statearr_24673 = state_24671;
(statearr_24673[(7)] = inst_24668);

return statearr_24673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24671__$1,inst_24669);
} else {
return null;
}
}
});})(c__19619__auto__))
;
return ((function (switch__19554__auto__,c__19619__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19555__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19555__auto____0 = (function (){
var statearr_24677 = [null,null,null,null,null,null,null,null];
(statearr_24677[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19555__auto__);

(statearr_24677[(1)] = (1));

return statearr_24677;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19555__auto____1 = (function (state_24671){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_24671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e24678){if((e24678 instanceof Object)){
var ex__19558__auto__ = e24678;
var statearr_24679_24681 = state_24671;
(statearr_24679_24681[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24682 = state_24671;
state_24671 = G__24682;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19555__auto__ = function(state_24671){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19555__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19555__auto____1.call(this,state_24671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19555__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19555__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto__))
})();
var state__19621__auto__ = (function (){var statearr_24680 = f__19620__auto__.call(null);
(statearr_24680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto__);

return statearr_24680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto__))
);

return c__19619__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24683){
var map__24690 = p__24683;
var map__24690__$1 = ((((!((map__24690 == null)))?((((map__24690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24690):map__24690);
var ed = map__24690__$1;
var formatted_exception = cljs.core.get.call(null,map__24690__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24690__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24690__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24692_24696 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24693_24697 = null;
var count__24694_24698 = (0);
var i__24695_24699 = (0);
while(true){
if((i__24695_24699 < count__24694_24698)){
var msg_24700 = cljs.core._nth.call(null,chunk__24693_24697,i__24695_24699);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24700);

var G__24701 = seq__24692_24696;
var G__24702 = chunk__24693_24697;
var G__24703 = count__24694_24698;
var G__24704 = (i__24695_24699 + (1));
seq__24692_24696 = G__24701;
chunk__24693_24697 = G__24702;
count__24694_24698 = G__24703;
i__24695_24699 = G__24704;
continue;
} else {
var temp__4425__auto___24705 = cljs.core.seq.call(null,seq__24692_24696);
if(temp__4425__auto___24705){
var seq__24692_24706__$1 = temp__4425__auto___24705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24692_24706__$1)){
var c__17082__auto___24707 = cljs.core.chunk_first.call(null,seq__24692_24706__$1);
var G__24708 = cljs.core.chunk_rest.call(null,seq__24692_24706__$1);
var G__24709 = c__17082__auto___24707;
var G__24710 = cljs.core.count.call(null,c__17082__auto___24707);
var G__24711 = (0);
seq__24692_24696 = G__24708;
chunk__24693_24697 = G__24709;
count__24694_24698 = G__24710;
i__24695_24699 = G__24711;
continue;
} else {
var msg_24712 = cljs.core.first.call(null,seq__24692_24706__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24712);

var G__24713 = cljs.core.next.call(null,seq__24692_24706__$1);
var G__24714 = null;
var G__24715 = (0);
var G__24716 = (0);
seq__24692_24696 = G__24713;
chunk__24693_24697 = G__24714;
count__24694_24698 = G__24715;
i__24695_24699 = G__24716;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24717){
var map__24720 = p__24717;
var map__24720__$1 = ((((!((map__24720 == null)))?((((map__24720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24720):map__24720);
var w = map__24720__$1;
var message = cljs.core.get.call(null,map__24720__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16267__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16267__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16267__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24728 = cljs.core.seq.call(null,plugins);
var chunk__24729 = null;
var count__24730 = (0);
var i__24731 = (0);
while(true){
if((i__24731 < count__24730)){
var vec__24732 = cljs.core._nth.call(null,chunk__24729,i__24731);
var k = cljs.core.nth.call(null,vec__24732,(0),null);
var plugin = cljs.core.nth.call(null,vec__24732,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24734 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24728,chunk__24729,count__24730,i__24731,pl_24734,vec__24732,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24734.call(null,msg_hist);
});})(seq__24728,chunk__24729,count__24730,i__24731,pl_24734,vec__24732,k,plugin))
);
} else {
}

var G__24735 = seq__24728;
var G__24736 = chunk__24729;
var G__24737 = count__24730;
var G__24738 = (i__24731 + (1));
seq__24728 = G__24735;
chunk__24729 = G__24736;
count__24730 = G__24737;
i__24731 = G__24738;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24728);
if(temp__4425__auto__){
var seq__24728__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24728__$1)){
var c__17082__auto__ = cljs.core.chunk_first.call(null,seq__24728__$1);
var G__24739 = cljs.core.chunk_rest.call(null,seq__24728__$1);
var G__24740 = c__17082__auto__;
var G__24741 = cljs.core.count.call(null,c__17082__auto__);
var G__24742 = (0);
seq__24728 = G__24739;
chunk__24729 = G__24740;
count__24730 = G__24741;
i__24731 = G__24742;
continue;
} else {
var vec__24733 = cljs.core.first.call(null,seq__24728__$1);
var k = cljs.core.nth.call(null,vec__24733,(0),null);
var plugin = cljs.core.nth.call(null,vec__24733,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24743 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24728,chunk__24729,count__24730,i__24731,pl_24743,vec__24733,k,plugin,seq__24728__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24743.call(null,msg_hist);
});})(seq__24728,chunk__24729,count__24730,i__24731,pl_24743,vec__24733,k,plugin,seq__24728__$1,temp__4425__auto__))
);
} else {
}

var G__24744 = cljs.core.next.call(null,seq__24728__$1);
var G__24745 = null;
var G__24746 = (0);
var G__24747 = (0);
seq__24728 = G__24744;
chunk__24729 = G__24745;
count__24730 = G__24746;
i__24731 = G__24747;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24748 = [];
var len__17337__auto___24751 = arguments.length;
var i__17338__auto___24752 = (0);
while(true){
if((i__17338__auto___24752 < len__17337__auto___24751)){
args24748.push((arguments[i__17338__auto___24752]));

var G__24753 = (i__17338__auto___24752 + (1));
i__17338__auto___24752 = G__24753;
continue;
} else {
}
break;
}

var G__24750 = args24748.length;
switch (G__24750) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24748.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17344__auto__ = [];
var len__17337__auto___24759 = arguments.length;
var i__17338__auto___24760 = (0);
while(true){
if((i__17338__auto___24760 < len__17337__auto___24759)){
args__17344__auto__.push((arguments[i__17338__auto___24760]));

var G__24761 = (i__17338__auto___24760 + (1));
i__17338__auto___24760 = G__24761;
continue;
} else {
}
break;
}

var argseq__17345__auto__ = ((((0) < args__17344__auto__.length))?(new cljs.core.IndexedSeq(args__17344__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17345__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24756){
var map__24757 = p__24756;
var map__24757__$1 = ((((!((map__24757 == null)))?((((map__24757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24757):map__24757);
var opts = map__24757__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24755){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24755));
});

//# sourceMappingURL=client.js.map?rel=1446956438199
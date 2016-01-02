// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('bijoytounicode.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__29104__delegate = function (x){
if(cljs.core.truth_(bijoytounicode.core.on_js_reload)){
return cljs.core.apply.call(null,bijoytounicode.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'bijoytounicode.core/on-js-reload' is missing");
}
};
var G__29104 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__29105__i = 0, G__29105__a = new Array(arguments.length -  0);
while (G__29105__i < G__29105__a.length) {G__29105__a[G__29105__i] = arguments[G__29105__i + 0]; ++G__29105__i;}
  x = new cljs.core.IndexedSeq(G__29105__a,0);
} 
return G__29104__delegate.call(this,x);};
G__29104.cljs$lang$maxFixedArity = 0;
G__29104.cljs$lang$applyTo = (function (arglist__29106){
var x = cljs.core.seq(arglist__29106);
return G__29104__delegate(x);
});
G__29104.cljs$core$IFn$_invoke$arity$variadic = G__29104__delegate;
return G__29104;
})()
,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1446956445350
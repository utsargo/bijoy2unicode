// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25147_25161 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25148_25162 = null;
var count__25149_25163 = (0);
var i__25150_25164 = (0);
while(true){
if((i__25150_25164 < count__25149_25163)){
var f_25165 = cljs.core._nth.call(null,chunk__25148_25162,i__25150_25164);
cljs.core.println.call(null,"  ",f_25165);

var G__25166 = seq__25147_25161;
var G__25167 = chunk__25148_25162;
var G__25168 = count__25149_25163;
var G__25169 = (i__25150_25164 + (1));
seq__25147_25161 = G__25166;
chunk__25148_25162 = G__25167;
count__25149_25163 = G__25168;
i__25150_25164 = G__25169;
continue;
} else {
var temp__4425__auto___25170 = cljs.core.seq.call(null,seq__25147_25161);
if(temp__4425__auto___25170){
var seq__25147_25171__$1 = temp__4425__auto___25170;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25147_25171__$1)){
var c__17082__auto___25172 = cljs.core.chunk_first.call(null,seq__25147_25171__$1);
var G__25173 = cljs.core.chunk_rest.call(null,seq__25147_25171__$1);
var G__25174 = c__17082__auto___25172;
var G__25175 = cljs.core.count.call(null,c__17082__auto___25172);
var G__25176 = (0);
seq__25147_25161 = G__25173;
chunk__25148_25162 = G__25174;
count__25149_25163 = G__25175;
i__25150_25164 = G__25176;
continue;
} else {
var f_25177 = cljs.core.first.call(null,seq__25147_25171__$1);
cljs.core.println.call(null,"  ",f_25177);

var G__25178 = cljs.core.next.call(null,seq__25147_25171__$1);
var G__25179 = null;
var G__25180 = (0);
var G__25181 = (0);
seq__25147_25161 = G__25178;
chunk__25148_25162 = G__25179;
count__25149_25163 = G__25180;
i__25150_25164 = G__25181;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25182 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16279__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25182);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25182)))?cljs.core.second.call(null,arglists_25182):arglists_25182));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25151 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25152 = null;
var count__25153 = (0);
var i__25154 = (0);
while(true){
if((i__25154 < count__25153)){
var vec__25155 = cljs.core._nth.call(null,chunk__25152,i__25154);
var name = cljs.core.nth.call(null,vec__25155,(0),null);
var map__25156 = cljs.core.nth.call(null,vec__25155,(1),null);
var map__25156__$1 = ((((!((map__25156 == null)))?((((map__25156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25156):map__25156);
var doc = cljs.core.get.call(null,map__25156__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25156__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25183 = seq__25151;
var G__25184 = chunk__25152;
var G__25185 = count__25153;
var G__25186 = (i__25154 + (1));
seq__25151 = G__25183;
chunk__25152 = G__25184;
count__25153 = G__25185;
i__25154 = G__25186;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25151);
if(temp__4425__auto__){
var seq__25151__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25151__$1)){
var c__17082__auto__ = cljs.core.chunk_first.call(null,seq__25151__$1);
var G__25187 = cljs.core.chunk_rest.call(null,seq__25151__$1);
var G__25188 = c__17082__auto__;
var G__25189 = cljs.core.count.call(null,c__17082__auto__);
var G__25190 = (0);
seq__25151 = G__25187;
chunk__25152 = G__25188;
count__25153 = G__25189;
i__25154 = G__25190;
continue;
} else {
var vec__25158 = cljs.core.first.call(null,seq__25151__$1);
var name = cljs.core.nth.call(null,vec__25158,(0),null);
var map__25159 = cljs.core.nth.call(null,vec__25158,(1),null);
var map__25159__$1 = ((((!((map__25159 == null)))?((((map__25159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25159):map__25159);
var doc = cljs.core.get.call(null,map__25159__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25159__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25191 = cljs.core.next.call(null,seq__25151__$1);
var G__25192 = null;
var G__25193 = (0);
var G__25194 = (0);
seq__25151 = G__25191;
chunk__25152 = G__25192;
count__25153 = G__25193;
i__25154 = G__25194;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1446956439314
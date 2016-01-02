// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16279__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16279__auto__){
return or__16279__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16279__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25199_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25199_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25204 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25205 = null;
var count__25206 = (0);
var i__25207 = (0);
while(true){
if((i__25207 < count__25206)){
var n = cljs.core._nth.call(null,chunk__25205,i__25207);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25208 = seq__25204;
var G__25209 = chunk__25205;
var G__25210 = count__25206;
var G__25211 = (i__25207 + (1));
seq__25204 = G__25208;
chunk__25205 = G__25209;
count__25206 = G__25210;
i__25207 = G__25211;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25204);
if(temp__4425__auto__){
var seq__25204__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25204__$1)){
var c__17082__auto__ = cljs.core.chunk_first.call(null,seq__25204__$1);
var G__25212 = cljs.core.chunk_rest.call(null,seq__25204__$1);
var G__25213 = c__17082__auto__;
var G__25214 = cljs.core.count.call(null,c__17082__auto__);
var G__25215 = (0);
seq__25204 = G__25212;
chunk__25205 = G__25213;
count__25206 = G__25214;
i__25207 = G__25215;
continue;
} else {
var n = cljs.core.first.call(null,seq__25204__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25216 = cljs.core.next.call(null,seq__25204__$1);
var G__25217 = null;
var G__25218 = (0);
var G__25219 = (0);
seq__25204 = G__25216;
chunk__25205 = G__25217;
count__25206 = G__25218;
i__25207 = G__25219;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25258_25265 = cljs.core.seq.call(null,deps);
var chunk__25259_25266 = null;
var count__25260_25267 = (0);
var i__25261_25268 = (0);
while(true){
if((i__25261_25268 < count__25260_25267)){
var dep_25269 = cljs.core._nth.call(null,chunk__25259_25266,i__25261_25268);
topo_sort_helper_STAR_.call(null,dep_25269,(depth + (1)),state);

var G__25270 = seq__25258_25265;
var G__25271 = chunk__25259_25266;
var G__25272 = count__25260_25267;
var G__25273 = (i__25261_25268 + (1));
seq__25258_25265 = G__25270;
chunk__25259_25266 = G__25271;
count__25260_25267 = G__25272;
i__25261_25268 = G__25273;
continue;
} else {
var temp__4425__auto___25274 = cljs.core.seq.call(null,seq__25258_25265);
if(temp__4425__auto___25274){
var seq__25258_25275__$1 = temp__4425__auto___25274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25258_25275__$1)){
var c__17082__auto___25276 = cljs.core.chunk_first.call(null,seq__25258_25275__$1);
var G__25277 = cljs.core.chunk_rest.call(null,seq__25258_25275__$1);
var G__25278 = c__17082__auto___25276;
var G__25279 = cljs.core.count.call(null,c__17082__auto___25276);
var G__25280 = (0);
seq__25258_25265 = G__25277;
chunk__25259_25266 = G__25278;
count__25260_25267 = G__25279;
i__25261_25268 = G__25280;
continue;
} else {
var dep_25281 = cljs.core.first.call(null,seq__25258_25275__$1);
topo_sort_helper_STAR_.call(null,dep_25281,(depth + (1)),state);

var G__25282 = cljs.core.next.call(null,seq__25258_25275__$1);
var G__25283 = null;
var G__25284 = (0);
var G__25285 = (0);
seq__25258_25265 = G__25282;
chunk__25259_25266 = G__25283;
count__25260_25267 = G__25284;
i__25261_25268 = G__25285;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25262){
var vec__25264 = p__25262;
var x = cljs.core.nth.call(null,vec__25264,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25264,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25264,x,xs,get_deps__$1){
return (function (p1__25220_SHARP_){
return clojure.set.difference.call(null,p1__25220_SHARP_,x);
});})(vec__25264,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25298 = cljs.core.seq.call(null,provides);
var chunk__25299 = null;
var count__25300 = (0);
var i__25301 = (0);
while(true){
if((i__25301 < count__25300)){
var prov = cljs.core._nth.call(null,chunk__25299,i__25301);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25302_25310 = cljs.core.seq.call(null,requires);
var chunk__25303_25311 = null;
var count__25304_25312 = (0);
var i__25305_25313 = (0);
while(true){
if((i__25305_25313 < count__25304_25312)){
var req_25314 = cljs.core._nth.call(null,chunk__25303_25311,i__25305_25313);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25314,prov);

var G__25315 = seq__25302_25310;
var G__25316 = chunk__25303_25311;
var G__25317 = count__25304_25312;
var G__25318 = (i__25305_25313 + (1));
seq__25302_25310 = G__25315;
chunk__25303_25311 = G__25316;
count__25304_25312 = G__25317;
i__25305_25313 = G__25318;
continue;
} else {
var temp__4425__auto___25319 = cljs.core.seq.call(null,seq__25302_25310);
if(temp__4425__auto___25319){
var seq__25302_25320__$1 = temp__4425__auto___25319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25302_25320__$1)){
var c__17082__auto___25321 = cljs.core.chunk_first.call(null,seq__25302_25320__$1);
var G__25322 = cljs.core.chunk_rest.call(null,seq__25302_25320__$1);
var G__25323 = c__17082__auto___25321;
var G__25324 = cljs.core.count.call(null,c__17082__auto___25321);
var G__25325 = (0);
seq__25302_25310 = G__25322;
chunk__25303_25311 = G__25323;
count__25304_25312 = G__25324;
i__25305_25313 = G__25325;
continue;
} else {
var req_25326 = cljs.core.first.call(null,seq__25302_25320__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25326,prov);

var G__25327 = cljs.core.next.call(null,seq__25302_25320__$1);
var G__25328 = null;
var G__25329 = (0);
var G__25330 = (0);
seq__25302_25310 = G__25327;
chunk__25303_25311 = G__25328;
count__25304_25312 = G__25329;
i__25305_25313 = G__25330;
continue;
}
} else {
}
}
break;
}

var G__25331 = seq__25298;
var G__25332 = chunk__25299;
var G__25333 = count__25300;
var G__25334 = (i__25301 + (1));
seq__25298 = G__25331;
chunk__25299 = G__25332;
count__25300 = G__25333;
i__25301 = G__25334;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25298);
if(temp__4425__auto__){
var seq__25298__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25298__$1)){
var c__17082__auto__ = cljs.core.chunk_first.call(null,seq__25298__$1);
var G__25335 = cljs.core.chunk_rest.call(null,seq__25298__$1);
var G__25336 = c__17082__auto__;
var G__25337 = cljs.core.count.call(null,c__17082__auto__);
var G__25338 = (0);
seq__25298 = G__25335;
chunk__25299 = G__25336;
count__25300 = G__25337;
i__25301 = G__25338;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25298__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25306_25339 = cljs.core.seq.call(null,requires);
var chunk__25307_25340 = null;
var count__25308_25341 = (0);
var i__25309_25342 = (0);
while(true){
if((i__25309_25342 < count__25308_25341)){
var req_25343 = cljs.core._nth.call(null,chunk__25307_25340,i__25309_25342);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25343,prov);

var G__25344 = seq__25306_25339;
var G__25345 = chunk__25307_25340;
var G__25346 = count__25308_25341;
var G__25347 = (i__25309_25342 + (1));
seq__25306_25339 = G__25344;
chunk__25307_25340 = G__25345;
count__25308_25341 = G__25346;
i__25309_25342 = G__25347;
continue;
} else {
var temp__4425__auto___25348__$1 = cljs.core.seq.call(null,seq__25306_25339);
if(temp__4425__auto___25348__$1){
var seq__25306_25349__$1 = temp__4425__auto___25348__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25306_25349__$1)){
var c__17082__auto___25350 = cljs.core.chunk_first.call(null,seq__25306_25349__$1);
var G__25351 = cljs.core.chunk_rest.call(null,seq__25306_25349__$1);
var G__25352 = c__17082__auto___25350;
var G__25353 = cljs.core.count.call(null,c__17082__auto___25350);
var G__25354 = (0);
seq__25306_25339 = G__25351;
chunk__25307_25340 = G__25352;
count__25308_25341 = G__25353;
i__25309_25342 = G__25354;
continue;
} else {
var req_25355 = cljs.core.first.call(null,seq__25306_25349__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25355,prov);

var G__25356 = cljs.core.next.call(null,seq__25306_25349__$1);
var G__25357 = null;
var G__25358 = (0);
var G__25359 = (0);
seq__25306_25339 = G__25356;
chunk__25307_25340 = G__25357;
count__25308_25341 = G__25358;
i__25309_25342 = G__25359;
continue;
}
} else {
}
}
break;
}

var G__25360 = cljs.core.next.call(null,seq__25298__$1);
var G__25361 = null;
var G__25362 = (0);
var G__25363 = (0);
seq__25298 = G__25360;
chunk__25299 = G__25361;
count__25300 = G__25362;
i__25301 = G__25363;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25368_25372 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25369_25373 = null;
var count__25370_25374 = (0);
var i__25371_25375 = (0);
while(true){
if((i__25371_25375 < count__25370_25374)){
var ns_25376 = cljs.core._nth.call(null,chunk__25369_25373,i__25371_25375);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25376);

var G__25377 = seq__25368_25372;
var G__25378 = chunk__25369_25373;
var G__25379 = count__25370_25374;
var G__25380 = (i__25371_25375 + (1));
seq__25368_25372 = G__25377;
chunk__25369_25373 = G__25378;
count__25370_25374 = G__25379;
i__25371_25375 = G__25380;
continue;
} else {
var temp__4425__auto___25381 = cljs.core.seq.call(null,seq__25368_25372);
if(temp__4425__auto___25381){
var seq__25368_25382__$1 = temp__4425__auto___25381;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25368_25382__$1)){
var c__17082__auto___25383 = cljs.core.chunk_first.call(null,seq__25368_25382__$1);
var G__25384 = cljs.core.chunk_rest.call(null,seq__25368_25382__$1);
var G__25385 = c__17082__auto___25383;
var G__25386 = cljs.core.count.call(null,c__17082__auto___25383);
var G__25387 = (0);
seq__25368_25372 = G__25384;
chunk__25369_25373 = G__25385;
count__25370_25374 = G__25386;
i__25371_25375 = G__25387;
continue;
} else {
var ns_25388 = cljs.core.first.call(null,seq__25368_25382__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25388);

var G__25389 = cljs.core.next.call(null,seq__25368_25382__$1);
var G__25390 = null;
var G__25391 = (0);
var G__25392 = (0);
seq__25368_25372 = G__25389;
chunk__25369_25373 = G__25390;
count__25370_25374 = G__25391;
i__25371_25375 = G__25392;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16279__auto__ = goog.require__;
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25393__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25393 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25394__i = 0, G__25394__a = new Array(arguments.length -  0);
while (G__25394__i < G__25394__a.length) {G__25394__a[G__25394__i] = arguments[G__25394__i + 0]; ++G__25394__i;}
  args = new cljs.core.IndexedSeq(G__25394__a,0);
} 
return G__25393__delegate.call(this,args);};
G__25393.cljs$lang$maxFixedArity = 0;
G__25393.cljs$lang$applyTo = (function (arglist__25395){
var args = cljs.core.seq(arglist__25395);
return G__25393__delegate(args);
});
G__25393.cljs$core$IFn$_invoke$arity$variadic = G__25393__delegate;
return G__25393;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25397 = cljs.core._EQ_;
var expr__25398 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25397.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25398))){
var path_parts = ((function (pred__25397,expr__25398){
return (function (p1__25396_SHARP_){
return clojure.string.split.call(null,p1__25396_SHARP_,/[\/\\]/);
});})(pred__25397,expr__25398))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25397,expr__25398){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e25400){if((e25400 instanceof Error)){
var e = e25400;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25400;

}
}})());
});
;})(path_parts,sep,root,pred__25397,expr__25398))
} else {
if(cljs.core.truth_(pred__25397.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25398))){
return ((function (pred__25397,expr__25398){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25397,expr__25398){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25397,expr__25398))
);

return deferred.addErrback(((function (deferred,pred__25397,expr__25398){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25397,expr__25398))
);
});
;})(pred__25397,expr__25398))
} else {
return ((function (pred__25397,expr__25398){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25397,expr__25398))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25401,callback){
var map__25404 = p__25401;
var map__25404__$1 = ((((!((map__25404 == null)))?((((map__25404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25404):map__25404);
var file_msg = map__25404__$1;
var request_url = cljs.core.get.call(null,map__25404__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25404,map__25404__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25404,map__25404__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto__){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto__){
return (function (state_25428){
var state_val_25429 = (state_25428[(1)]);
if((state_val_25429 === (7))){
var inst_25424 = (state_25428[(2)]);
var state_25428__$1 = state_25428;
var statearr_25430_25450 = state_25428__$1;
(statearr_25430_25450[(2)] = inst_25424);

(statearr_25430_25450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25429 === (1))){
var state_25428__$1 = state_25428;
var statearr_25431_25451 = state_25428__$1;
(statearr_25431_25451[(2)] = null);

(statearr_25431_25451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25429 === (4))){
var inst_25408 = (state_25428[(7)]);
var inst_25408__$1 = (state_25428[(2)]);
var state_25428__$1 = (function (){var statearr_25432 = state_25428;
(statearr_25432[(7)] = inst_25408__$1);

return statearr_25432;
})();
if(cljs.core.truth_(inst_25408__$1)){
var statearr_25433_25452 = state_25428__$1;
(statearr_25433_25452[(1)] = (5));

} else {
var statearr_25434_25453 = state_25428__$1;
(statearr_25434_25453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25429 === (6))){
var state_25428__$1 = state_25428;
var statearr_25435_25454 = state_25428__$1;
(statearr_25435_25454[(2)] = null);

(statearr_25435_25454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25429 === (3))){
var inst_25426 = (state_25428[(2)]);
var state_25428__$1 = state_25428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25428__$1,inst_25426);
} else {
if((state_val_25429 === (2))){
var state_25428__$1 = state_25428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25428__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25429 === (11))){
var inst_25420 = (state_25428[(2)]);
var state_25428__$1 = (function (){var statearr_25436 = state_25428;
(statearr_25436[(8)] = inst_25420);

return statearr_25436;
})();
var statearr_25437_25455 = state_25428__$1;
(statearr_25437_25455[(2)] = null);

(statearr_25437_25455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25429 === (9))){
var inst_25414 = (state_25428[(9)]);
var inst_25412 = (state_25428[(10)]);
var inst_25416 = inst_25414.call(null,inst_25412);
var state_25428__$1 = state_25428;
var statearr_25438_25456 = state_25428__$1;
(statearr_25438_25456[(2)] = inst_25416);

(statearr_25438_25456[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25429 === (5))){
var inst_25408 = (state_25428[(7)]);
var inst_25410 = figwheel.client.file_reloading.blocking_load.call(null,inst_25408);
var state_25428__$1 = state_25428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25428__$1,(8),inst_25410);
} else {
if((state_val_25429 === (10))){
var inst_25412 = (state_25428[(10)]);
var inst_25418 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25412);
var state_25428__$1 = state_25428;
var statearr_25439_25457 = state_25428__$1;
(statearr_25439_25457[(2)] = inst_25418);

(statearr_25439_25457[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25429 === (8))){
var inst_25408 = (state_25428[(7)]);
var inst_25414 = (state_25428[(9)]);
var inst_25412 = (state_25428[(2)]);
var inst_25413 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25414__$1 = cljs.core.get.call(null,inst_25413,inst_25408);
var state_25428__$1 = (function (){var statearr_25440 = state_25428;
(statearr_25440[(9)] = inst_25414__$1);

(statearr_25440[(10)] = inst_25412);

return statearr_25440;
})();
if(cljs.core.truth_(inst_25414__$1)){
var statearr_25441_25458 = state_25428__$1;
(statearr_25441_25458[(1)] = (9));

} else {
var statearr_25442_25459 = state_25428__$1;
(statearr_25442_25459[(1)] = (10));

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
});})(c__19619__auto__))
;
return ((function (switch__19554__auto__,c__19619__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19555__auto__ = null;
var figwheel$client$file_reloading$state_machine__19555__auto____0 = (function (){
var statearr_25446 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25446[(0)] = figwheel$client$file_reloading$state_machine__19555__auto__);

(statearr_25446[(1)] = (1));

return statearr_25446;
});
var figwheel$client$file_reloading$state_machine__19555__auto____1 = (function (state_25428){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_25428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e25447){if((e25447 instanceof Object)){
var ex__19558__auto__ = e25447;
var statearr_25448_25460 = state_25428;
(statearr_25448_25460[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25461 = state_25428;
state_25428 = G__25461;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19555__auto__ = function(state_25428){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19555__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19555__auto____1.call(this,state_25428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19555__auto____0;
figwheel$client$file_reloading$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19555__auto____1;
return figwheel$client$file_reloading$state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto__))
})();
var state__19621__auto__ = (function (){var statearr_25449 = f__19620__auto__.call(null);
(statearr_25449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto__);

return statearr_25449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto__))
);

return c__19619__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25462,callback){
var map__25465 = p__25462;
var map__25465__$1 = ((((!((map__25465 == null)))?((((map__25465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25465):map__25465);
var file_msg = map__25465__$1;
var namespace = cljs.core.get.call(null,map__25465__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25465,map__25465__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25465,map__25465__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25467){
var map__25470 = p__25467;
var map__25470__$1 = ((((!((map__25470 == null)))?((((map__25470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25470):map__25470);
var file_msg = map__25470__$1;
var namespace = cljs.core.get.call(null,map__25470__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16267__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16267__auto__){
var or__16279__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
var or__16279__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16279__auto____$1)){
return or__16279__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16267__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25472,callback){
var map__25475 = p__25472;
var map__25475__$1 = ((((!((map__25475 == null)))?((((map__25475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25475):map__25475);
var file_msg = map__25475__$1;
var request_url = cljs.core.get.call(null,map__25475__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25475__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19619__auto___25563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto___25563,out){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto___25563,out){
return (function (state_25545){
var state_val_25546 = (state_25545[(1)]);
if((state_val_25546 === (1))){
var inst_25523 = cljs.core.nth.call(null,files,(0),null);
var inst_25524 = cljs.core.nthnext.call(null,files,(1));
var inst_25525 = files;
var state_25545__$1 = (function (){var statearr_25547 = state_25545;
(statearr_25547[(7)] = inst_25525);

(statearr_25547[(8)] = inst_25523);

(statearr_25547[(9)] = inst_25524);

return statearr_25547;
})();
var statearr_25548_25564 = state_25545__$1;
(statearr_25548_25564[(2)] = null);

(statearr_25548_25564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25546 === (2))){
var inst_25525 = (state_25545[(7)]);
var inst_25528 = (state_25545[(10)]);
var inst_25528__$1 = cljs.core.nth.call(null,inst_25525,(0),null);
var inst_25529 = cljs.core.nthnext.call(null,inst_25525,(1));
var inst_25530 = (inst_25528__$1 == null);
var inst_25531 = cljs.core.not.call(null,inst_25530);
var state_25545__$1 = (function (){var statearr_25549 = state_25545;
(statearr_25549[(10)] = inst_25528__$1);

(statearr_25549[(11)] = inst_25529);

return statearr_25549;
})();
if(inst_25531){
var statearr_25550_25565 = state_25545__$1;
(statearr_25550_25565[(1)] = (4));

} else {
var statearr_25551_25566 = state_25545__$1;
(statearr_25551_25566[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25546 === (3))){
var inst_25543 = (state_25545[(2)]);
var state_25545__$1 = state_25545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25545__$1,inst_25543);
} else {
if((state_val_25546 === (4))){
var inst_25528 = (state_25545[(10)]);
var inst_25533 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25528);
var state_25545__$1 = state_25545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25545__$1,(7),inst_25533);
} else {
if((state_val_25546 === (5))){
var inst_25539 = cljs.core.async.close_BANG_.call(null,out);
var state_25545__$1 = state_25545;
var statearr_25552_25567 = state_25545__$1;
(statearr_25552_25567[(2)] = inst_25539);

(statearr_25552_25567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25546 === (6))){
var inst_25541 = (state_25545[(2)]);
var state_25545__$1 = state_25545;
var statearr_25553_25568 = state_25545__$1;
(statearr_25553_25568[(2)] = inst_25541);

(statearr_25553_25568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25546 === (7))){
var inst_25529 = (state_25545[(11)]);
var inst_25535 = (state_25545[(2)]);
var inst_25536 = cljs.core.async.put_BANG_.call(null,out,inst_25535);
var inst_25525 = inst_25529;
var state_25545__$1 = (function (){var statearr_25554 = state_25545;
(statearr_25554[(7)] = inst_25525);

(statearr_25554[(12)] = inst_25536);

return statearr_25554;
})();
var statearr_25555_25569 = state_25545__$1;
(statearr_25555_25569[(2)] = null);

(statearr_25555_25569[(1)] = (2));


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
});})(c__19619__auto___25563,out))
;
return ((function (switch__19554__auto__,c__19619__auto___25563,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19555__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19555__auto____0 = (function (){
var statearr_25559 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25559[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19555__auto__);

(statearr_25559[(1)] = (1));

return statearr_25559;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19555__auto____1 = (function (state_25545){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_25545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e25560){if((e25560 instanceof Object)){
var ex__19558__auto__ = e25560;
var statearr_25561_25570 = state_25545;
(statearr_25561_25570[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25571 = state_25545;
state_25545 = G__25571;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19555__auto__ = function(state_25545){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19555__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19555__auto____1.call(this,state_25545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19555__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19555__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto___25563,out))
})();
var state__19621__auto__ = (function (){var statearr_25562 = f__19620__auto__.call(null);
(statearr_25562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto___25563);

return statearr_25562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto___25563,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25572,opts){
var map__25576 = p__25572;
var map__25576__$1 = ((((!((map__25576 == null)))?((((map__25576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25576):map__25576);
var eval_body__$1 = cljs.core.get.call(null,map__25576__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25576__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16267__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16267__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16267__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25578){var e = e25578;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25579_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25579_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25584){
var vec__25585 = p__25584;
var k = cljs.core.nth.call(null,vec__25585,(0),null);
var v = cljs.core.nth.call(null,vec__25585,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25586){
var vec__25587 = p__25586;
var k = cljs.core.nth.call(null,vec__25587,(0),null);
var v = cljs.core.nth.call(null,vec__25587,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25591,p__25592){
var map__25839 = p__25591;
var map__25839__$1 = ((((!((map__25839 == null)))?((((map__25839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25839):map__25839);
var opts = map__25839__$1;
var before_jsload = cljs.core.get.call(null,map__25839__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25839__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25839__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25840 = p__25592;
var map__25840__$1 = ((((!((map__25840 == null)))?((((map__25840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25840):map__25840);
var msg = map__25840__$1;
var files = cljs.core.get.call(null,map__25840__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25840__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25840__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto__,map__25839,map__25839__$1,opts,before_jsload,on_jsload,reload_dependents,map__25840,map__25840__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto__,map__25839,map__25839__$1,opts,before_jsload,on_jsload,reload_dependents,map__25840,map__25840__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25993){
var state_val_25994 = (state_25993[(1)]);
if((state_val_25994 === (7))){
var inst_25855 = (state_25993[(7)]);
var inst_25857 = (state_25993[(8)]);
var inst_25856 = (state_25993[(9)]);
var inst_25854 = (state_25993[(10)]);
var inst_25862 = cljs.core._nth.call(null,inst_25855,inst_25857);
var inst_25863 = figwheel.client.file_reloading.eval_body.call(null,inst_25862,opts);
var inst_25864 = (inst_25857 + (1));
var tmp25995 = inst_25855;
var tmp25996 = inst_25856;
var tmp25997 = inst_25854;
var inst_25854__$1 = tmp25997;
var inst_25855__$1 = tmp25995;
var inst_25856__$1 = tmp25996;
var inst_25857__$1 = inst_25864;
var state_25993__$1 = (function (){var statearr_25998 = state_25993;
(statearr_25998[(7)] = inst_25855__$1);

(statearr_25998[(11)] = inst_25863);

(statearr_25998[(8)] = inst_25857__$1);

(statearr_25998[(9)] = inst_25856__$1);

(statearr_25998[(10)] = inst_25854__$1);

return statearr_25998;
})();
var statearr_25999_26085 = state_25993__$1;
(statearr_25999_26085[(2)] = null);

(statearr_25999_26085[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (20))){
var inst_25897 = (state_25993[(12)]);
var inst_25905 = figwheel.client.file_reloading.sort_files.call(null,inst_25897);
var state_25993__$1 = state_25993;
var statearr_26000_26086 = state_25993__$1;
(statearr_26000_26086[(2)] = inst_25905);

(statearr_26000_26086[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (27))){
var state_25993__$1 = state_25993;
var statearr_26001_26087 = state_25993__$1;
(statearr_26001_26087[(2)] = null);

(statearr_26001_26087[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (1))){
var inst_25846 = (state_25993[(13)]);
var inst_25843 = before_jsload.call(null,files);
var inst_25844 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25845 = (function (){return ((function (inst_25846,inst_25843,inst_25844,state_val_25994,c__19619__auto__,map__25839,map__25839__$1,opts,before_jsload,on_jsload,reload_dependents,map__25840,map__25840__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25588_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25588_SHARP_);
});
;})(inst_25846,inst_25843,inst_25844,state_val_25994,c__19619__auto__,map__25839,map__25839__$1,opts,before_jsload,on_jsload,reload_dependents,map__25840,map__25840__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25846__$1 = cljs.core.filter.call(null,inst_25845,files);
var inst_25847 = cljs.core.not_empty.call(null,inst_25846__$1);
var state_25993__$1 = (function (){var statearr_26002 = state_25993;
(statearr_26002[(14)] = inst_25843);

(statearr_26002[(15)] = inst_25844);

(statearr_26002[(13)] = inst_25846__$1);

return statearr_26002;
})();
if(cljs.core.truth_(inst_25847)){
var statearr_26003_26088 = state_25993__$1;
(statearr_26003_26088[(1)] = (2));

} else {
var statearr_26004_26089 = state_25993__$1;
(statearr_26004_26089[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (24))){
var state_25993__$1 = state_25993;
var statearr_26005_26090 = state_25993__$1;
(statearr_26005_26090[(2)] = null);

(statearr_26005_26090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (39))){
var inst_25947 = (state_25993[(16)]);
var state_25993__$1 = state_25993;
var statearr_26006_26091 = state_25993__$1;
(statearr_26006_26091[(2)] = inst_25947);

(statearr_26006_26091[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (46))){
var inst_25988 = (state_25993[(2)]);
var state_25993__$1 = state_25993;
var statearr_26007_26092 = state_25993__$1;
(statearr_26007_26092[(2)] = inst_25988);

(statearr_26007_26092[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (4))){
var inst_25891 = (state_25993[(2)]);
var inst_25892 = cljs.core.List.EMPTY;
var inst_25893 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25892);
var inst_25894 = (function (){return ((function (inst_25891,inst_25892,inst_25893,state_val_25994,c__19619__auto__,map__25839,map__25839__$1,opts,before_jsload,on_jsload,reload_dependents,map__25840,map__25840__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25589_SHARP_){
var and__16267__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25589_SHARP_);
if(cljs.core.truth_(and__16267__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25589_SHARP_));
} else {
return and__16267__auto__;
}
});
;})(inst_25891,inst_25892,inst_25893,state_val_25994,c__19619__auto__,map__25839,map__25839__$1,opts,before_jsload,on_jsload,reload_dependents,map__25840,map__25840__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25895 = cljs.core.filter.call(null,inst_25894,files);
var inst_25896 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25897 = cljs.core.concat.call(null,inst_25895,inst_25896);
var state_25993__$1 = (function (){var statearr_26008 = state_25993;
(statearr_26008[(12)] = inst_25897);

(statearr_26008[(17)] = inst_25893);

(statearr_26008[(18)] = inst_25891);

return statearr_26008;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26009_26093 = state_25993__$1;
(statearr_26009_26093[(1)] = (16));

} else {
var statearr_26010_26094 = state_25993__$1;
(statearr_26010_26094[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (15))){
var inst_25881 = (state_25993[(2)]);
var state_25993__$1 = state_25993;
var statearr_26011_26095 = state_25993__$1;
(statearr_26011_26095[(2)] = inst_25881);

(statearr_26011_26095[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (21))){
var inst_25907 = (state_25993[(19)]);
var inst_25907__$1 = (state_25993[(2)]);
var inst_25908 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25907__$1);
var state_25993__$1 = (function (){var statearr_26012 = state_25993;
(statearr_26012[(19)] = inst_25907__$1);

return statearr_26012;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25993__$1,(22),inst_25908);
} else {
if((state_val_25994 === (31))){
var inst_25991 = (state_25993[(2)]);
var state_25993__$1 = state_25993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25993__$1,inst_25991);
} else {
if((state_val_25994 === (32))){
var inst_25947 = (state_25993[(16)]);
var inst_25952 = inst_25947.cljs$lang$protocol_mask$partition0$;
var inst_25953 = (inst_25952 & (64));
var inst_25954 = inst_25947.cljs$core$ISeq$;
var inst_25955 = (inst_25953) || (inst_25954);
var state_25993__$1 = state_25993;
if(cljs.core.truth_(inst_25955)){
var statearr_26013_26096 = state_25993__$1;
(statearr_26013_26096[(1)] = (35));

} else {
var statearr_26014_26097 = state_25993__$1;
(statearr_26014_26097[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (40))){
var inst_25968 = (state_25993[(20)]);
var inst_25967 = (state_25993[(2)]);
var inst_25968__$1 = cljs.core.get.call(null,inst_25967,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25969 = cljs.core.get.call(null,inst_25967,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25970 = cljs.core.not_empty.call(null,inst_25968__$1);
var state_25993__$1 = (function (){var statearr_26015 = state_25993;
(statearr_26015[(21)] = inst_25969);

(statearr_26015[(20)] = inst_25968__$1);

return statearr_26015;
})();
if(cljs.core.truth_(inst_25970)){
var statearr_26016_26098 = state_25993__$1;
(statearr_26016_26098[(1)] = (41));

} else {
var statearr_26017_26099 = state_25993__$1;
(statearr_26017_26099[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (33))){
var state_25993__$1 = state_25993;
var statearr_26018_26100 = state_25993__$1;
(statearr_26018_26100[(2)] = false);

(statearr_26018_26100[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (13))){
var inst_25867 = (state_25993[(22)]);
var inst_25871 = cljs.core.chunk_first.call(null,inst_25867);
var inst_25872 = cljs.core.chunk_rest.call(null,inst_25867);
var inst_25873 = cljs.core.count.call(null,inst_25871);
var inst_25854 = inst_25872;
var inst_25855 = inst_25871;
var inst_25856 = inst_25873;
var inst_25857 = (0);
var state_25993__$1 = (function (){var statearr_26019 = state_25993;
(statearr_26019[(7)] = inst_25855);

(statearr_26019[(8)] = inst_25857);

(statearr_26019[(9)] = inst_25856);

(statearr_26019[(10)] = inst_25854);

return statearr_26019;
})();
var statearr_26020_26101 = state_25993__$1;
(statearr_26020_26101[(2)] = null);

(statearr_26020_26101[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (22))){
var inst_25910 = (state_25993[(23)]);
var inst_25907 = (state_25993[(19)]);
var inst_25911 = (state_25993[(24)]);
var inst_25915 = (state_25993[(25)]);
var inst_25910__$1 = (state_25993[(2)]);
var inst_25911__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25910__$1);
var inst_25912 = (function (){var all_files = inst_25907;
var res_SINGLEQUOTE_ = inst_25910__$1;
var res = inst_25911__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25910,inst_25907,inst_25911,inst_25915,inst_25910__$1,inst_25911__$1,state_val_25994,c__19619__auto__,map__25839,map__25839__$1,opts,before_jsload,on_jsload,reload_dependents,map__25840,map__25840__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25590_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25590_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25910,inst_25907,inst_25911,inst_25915,inst_25910__$1,inst_25911__$1,state_val_25994,c__19619__auto__,map__25839,map__25839__$1,opts,before_jsload,on_jsload,reload_dependents,map__25840,map__25840__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25913 = cljs.core.filter.call(null,inst_25912,inst_25910__$1);
var inst_25914 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25915__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25914);
var inst_25916 = cljs.core.not_empty.call(null,inst_25915__$1);
var state_25993__$1 = (function (){var statearr_26021 = state_25993;
(statearr_26021[(26)] = inst_25913);

(statearr_26021[(23)] = inst_25910__$1);

(statearr_26021[(24)] = inst_25911__$1);

(statearr_26021[(25)] = inst_25915__$1);

return statearr_26021;
})();
if(cljs.core.truth_(inst_25916)){
var statearr_26022_26102 = state_25993__$1;
(statearr_26022_26102[(1)] = (23));

} else {
var statearr_26023_26103 = state_25993__$1;
(statearr_26023_26103[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (36))){
var state_25993__$1 = state_25993;
var statearr_26024_26104 = state_25993__$1;
(statearr_26024_26104[(2)] = false);

(statearr_26024_26104[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (41))){
var inst_25968 = (state_25993[(20)]);
var inst_25972 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25973 = cljs.core.map.call(null,inst_25972,inst_25968);
var inst_25974 = cljs.core.pr_str.call(null,inst_25973);
var inst_25975 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25974)].join('');
var inst_25976 = figwheel.client.utils.log.call(null,inst_25975);
var state_25993__$1 = state_25993;
var statearr_26025_26105 = state_25993__$1;
(statearr_26025_26105[(2)] = inst_25976);

(statearr_26025_26105[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (43))){
var inst_25969 = (state_25993[(21)]);
var inst_25979 = (state_25993[(2)]);
var inst_25980 = cljs.core.not_empty.call(null,inst_25969);
var state_25993__$1 = (function (){var statearr_26026 = state_25993;
(statearr_26026[(27)] = inst_25979);

return statearr_26026;
})();
if(cljs.core.truth_(inst_25980)){
var statearr_26027_26106 = state_25993__$1;
(statearr_26027_26106[(1)] = (44));

} else {
var statearr_26028_26107 = state_25993__$1;
(statearr_26028_26107[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (29))){
var inst_25947 = (state_25993[(16)]);
var inst_25913 = (state_25993[(26)]);
var inst_25910 = (state_25993[(23)]);
var inst_25907 = (state_25993[(19)]);
var inst_25911 = (state_25993[(24)]);
var inst_25915 = (state_25993[(25)]);
var inst_25943 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25946 = (function (){var all_files = inst_25907;
var res_SINGLEQUOTE_ = inst_25910;
var res = inst_25911;
var files_not_loaded = inst_25913;
var dependencies_that_loaded = inst_25915;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25947,inst_25913,inst_25910,inst_25907,inst_25911,inst_25915,inst_25943,state_val_25994,c__19619__auto__,map__25839,map__25839__$1,opts,before_jsload,on_jsload,reload_dependents,map__25840,map__25840__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25945){
var map__26029 = p__25945;
var map__26029__$1 = ((((!((map__26029 == null)))?((((map__26029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26029):map__26029);
var namespace = cljs.core.get.call(null,map__26029__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25947,inst_25913,inst_25910,inst_25907,inst_25911,inst_25915,inst_25943,state_val_25994,c__19619__auto__,map__25839,map__25839__$1,opts,before_jsload,on_jsload,reload_dependents,map__25840,map__25840__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25947__$1 = cljs.core.group_by.call(null,inst_25946,inst_25913);
var inst_25949 = (inst_25947__$1 == null);
var inst_25950 = cljs.core.not.call(null,inst_25949);
var state_25993__$1 = (function (){var statearr_26031 = state_25993;
(statearr_26031[(16)] = inst_25947__$1);

(statearr_26031[(28)] = inst_25943);

return statearr_26031;
})();
if(inst_25950){
var statearr_26032_26108 = state_25993__$1;
(statearr_26032_26108[(1)] = (32));

} else {
var statearr_26033_26109 = state_25993__$1;
(statearr_26033_26109[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (44))){
var inst_25969 = (state_25993[(21)]);
var inst_25982 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25969);
var inst_25983 = cljs.core.pr_str.call(null,inst_25982);
var inst_25984 = [cljs.core.str("not required: "),cljs.core.str(inst_25983)].join('');
var inst_25985 = figwheel.client.utils.log.call(null,inst_25984);
var state_25993__$1 = state_25993;
var statearr_26034_26110 = state_25993__$1;
(statearr_26034_26110[(2)] = inst_25985);

(statearr_26034_26110[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (6))){
var inst_25888 = (state_25993[(2)]);
var state_25993__$1 = state_25993;
var statearr_26035_26111 = state_25993__$1;
(statearr_26035_26111[(2)] = inst_25888);

(statearr_26035_26111[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (28))){
var inst_25913 = (state_25993[(26)]);
var inst_25940 = (state_25993[(2)]);
var inst_25941 = cljs.core.not_empty.call(null,inst_25913);
var state_25993__$1 = (function (){var statearr_26036 = state_25993;
(statearr_26036[(29)] = inst_25940);

return statearr_26036;
})();
if(cljs.core.truth_(inst_25941)){
var statearr_26037_26112 = state_25993__$1;
(statearr_26037_26112[(1)] = (29));

} else {
var statearr_26038_26113 = state_25993__$1;
(statearr_26038_26113[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (25))){
var inst_25911 = (state_25993[(24)]);
var inst_25927 = (state_25993[(2)]);
var inst_25928 = cljs.core.not_empty.call(null,inst_25911);
var state_25993__$1 = (function (){var statearr_26039 = state_25993;
(statearr_26039[(30)] = inst_25927);

return statearr_26039;
})();
if(cljs.core.truth_(inst_25928)){
var statearr_26040_26114 = state_25993__$1;
(statearr_26040_26114[(1)] = (26));

} else {
var statearr_26041_26115 = state_25993__$1;
(statearr_26041_26115[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (34))){
var inst_25962 = (state_25993[(2)]);
var state_25993__$1 = state_25993;
if(cljs.core.truth_(inst_25962)){
var statearr_26042_26116 = state_25993__$1;
(statearr_26042_26116[(1)] = (38));

} else {
var statearr_26043_26117 = state_25993__$1;
(statearr_26043_26117[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (17))){
var state_25993__$1 = state_25993;
var statearr_26044_26118 = state_25993__$1;
(statearr_26044_26118[(2)] = recompile_dependents);

(statearr_26044_26118[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (3))){
var state_25993__$1 = state_25993;
var statearr_26045_26119 = state_25993__$1;
(statearr_26045_26119[(2)] = null);

(statearr_26045_26119[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (12))){
var inst_25884 = (state_25993[(2)]);
var state_25993__$1 = state_25993;
var statearr_26046_26120 = state_25993__$1;
(statearr_26046_26120[(2)] = inst_25884);

(statearr_26046_26120[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (2))){
var inst_25846 = (state_25993[(13)]);
var inst_25853 = cljs.core.seq.call(null,inst_25846);
var inst_25854 = inst_25853;
var inst_25855 = null;
var inst_25856 = (0);
var inst_25857 = (0);
var state_25993__$1 = (function (){var statearr_26047 = state_25993;
(statearr_26047[(7)] = inst_25855);

(statearr_26047[(8)] = inst_25857);

(statearr_26047[(9)] = inst_25856);

(statearr_26047[(10)] = inst_25854);

return statearr_26047;
})();
var statearr_26048_26121 = state_25993__$1;
(statearr_26048_26121[(2)] = null);

(statearr_26048_26121[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (23))){
var inst_25913 = (state_25993[(26)]);
var inst_25910 = (state_25993[(23)]);
var inst_25907 = (state_25993[(19)]);
var inst_25911 = (state_25993[(24)]);
var inst_25915 = (state_25993[(25)]);
var inst_25918 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25920 = (function (){var all_files = inst_25907;
var res_SINGLEQUOTE_ = inst_25910;
var res = inst_25911;
var files_not_loaded = inst_25913;
var dependencies_that_loaded = inst_25915;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25913,inst_25910,inst_25907,inst_25911,inst_25915,inst_25918,state_val_25994,c__19619__auto__,map__25839,map__25839__$1,opts,before_jsload,on_jsload,reload_dependents,map__25840,map__25840__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25919){
var map__26049 = p__25919;
var map__26049__$1 = ((((!((map__26049 == null)))?((((map__26049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26049):map__26049);
var request_url = cljs.core.get.call(null,map__26049__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25913,inst_25910,inst_25907,inst_25911,inst_25915,inst_25918,state_val_25994,c__19619__auto__,map__25839,map__25839__$1,opts,before_jsload,on_jsload,reload_dependents,map__25840,map__25840__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25921 = cljs.core.reverse.call(null,inst_25915);
var inst_25922 = cljs.core.map.call(null,inst_25920,inst_25921);
var inst_25923 = cljs.core.pr_str.call(null,inst_25922);
var inst_25924 = figwheel.client.utils.log.call(null,inst_25923);
var state_25993__$1 = (function (){var statearr_26051 = state_25993;
(statearr_26051[(31)] = inst_25918);

return statearr_26051;
})();
var statearr_26052_26122 = state_25993__$1;
(statearr_26052_26122[(2)] = inst_25924);

(statearr_26052_26122[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (35))){
var state_25993__$1 = state_25993;
var statearr_26053_26123 = state_25993__$1;
(statearr_26053_26123[(2)] = true);

(statearr_26053_26123[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (19))){
var inst_25897 = (state_25993[(12)]);
var inst_25903 = figwheel.client.file_reloading.expand_files.call(null,inst_25897);
var state_25993__$1 = state_25993;
var statearr_26054_26124 = state_25993__$1;
(statearr_26054_26124[(2)] = inst_25903);

(statearr_26054_26124[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (11))){
var state_25993__$1 = state_25993;
var statearr_26055_26125 = state_25993__$1;
(statearr_26055_26125[(2)] = null);

(statearr_26055_26125[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (9))){
var inst_25886 = (state_25993[(2)]);
var state_25993__$1 = state_25993;
var statearr_26056_26126 = state_25993__$1;
(statearr_26056_26126[(2)] = inst_25886);

(statearr_26056_26126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (5))){
var inst_25857 = (state_25993[(8)]);
var inst_25856 = (state_25993[(9)]);
var inst_25859 = (inst_25857 < inst_25856);
var inst_25860 = inst_25859;
var state_25993__$1 = state_25993;
if(cljs.core.truth_(inst_25860)){
var statearr_26057_26127 = state_25993__$1;
(statearr_26057_26127[(1)] = (7));

} else {
var statearr_26058_26128 = state_25993__$1;
(statearr_26058_26128[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (14))){
var inst_25867 = (state_25993[(22)]);
var inst_25876 = cljs.core.first.call(null,inst_25867);
var inst_25877 = figwheel.client.file_reloading.eval_body.call(null,inst_25876,opts);
var inst_25878 = cljs.core.next.call(null,inst_25867);
var inst_25854 = inst_25878;
var inst_25855 = null;
var inst_25856 = (0);
var inst_25857 = (0);
var state_25993__$1 = (function (){var statearr_26059 = state_25993;
(statearr_26059[(7)] = inst_25855);

(statearr_26059[(8)] = inst_25857);

(statearr_26059[(9)] = inst_25856);

(statearr_26059[(32)] = inst_25877);

(statearr_26059[(10)] = inst_25854);

return statearr_26059;
})();
var statearr_26060_26129 = state_25993__$1;
(statearr_26060_26129[(2)] = null);

(statearr_26060_26129[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (45))){
var state_25993__$1 = state_25993;
var statearr_26061_26130 = state_25993__$1;
(statearr_26061_26130[(2)] = null);

(statearr_26061_26130[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (26))){
var inst_25913 = (state_25993[(26)]);
var inst_25910 = (state_25993[(23)]);
var inst_25907 = (state_25993[(19)]);
var inst_25911 = (state_25993[(24)]);
var inst_25915 = (state_25993[(25)]);
var inst_25930 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25932 = (function (){var all_files = inst_25907;
var res_SINGLEQUOTE_ = inst_25910;
var res = inst_25911;
var files_not_loaded = inst_25913;
var dependencies_that_loaded = inst_25915;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25913,inst_25910,inst_25907,inst_25911,inst_25915,inst_25930,state_val_25994,c__19619__auto__,map__25839,map__25839__$1,opts,before_jsload,on_jsload,reload_dependents,map__25840,map__25840__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25931){
var map__26062 = p__25931;
var map__26062__$1 = ((((!((map__26062 == null)))?((((map__26062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26062):map__26062);
var namespace = cljs.core.get.call(null,map__26062__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26062__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25913,inst_25910,inst_25907,inst_25911,inst_25915,inst_25930,state_val_25994,c__19619__auto__,map__25839,map__25839__$1,opts,before_jsload,on_jsload,reload_dependents,map__25840,map__25840__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25933 = cljs.core.map.call(null,inst_25932,inst_25911);
var inst_25934 = cljs.core.pr_str.call(null,inst_25933);
var inst_25935 = figwheel.client.utils.log.call(null,inst_25934);
var inst_25936 = (function (){var all_files = inst_25907;
var res_SINGLEQUOTE_ = inst_25910;
var res = inst_25911;
var files_not_loaded = inst_25913;
var dependencies_that_loaded = inst_25915;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25913,inst_25910,inst_25907,inst_25911,inst_25915,inst_25930,inst_25932,inst_25933,inst_25934,inst_25935,state_val_25994,c__19619__auto__,map__25839,map__25839__$1,opts,before_jsload,on_jsload,reload_dependents,map__25840,map__25840__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25913,inst_25910,inst_25907,inst_25911,inst_25915,inst_25930,inst_25932,inst_25933,inst_25934,inst_25935,state_val_25994,c__19619__auto__,map__25839,map__25839__$1,opts,before_jsload,on_jsload,reload_dependents,map__25840,map__25840__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25937 = setTimeout(inst_25936,(10));
var state_25993__$1 = (function (){var statearr_26064 = state_25993;
(statearr_26064[(33)] = inst_25930);

(statearr_26064[(34)] = inst_25935);

return statearr_26064;
})();
var statearr_26065_26131 = state_25993__$1;
(statearr_26065_26131[(2)] = inst_25937);

(statearr_26065_26131[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (16))){
var state_25993__$1 = state_25993;
var statearr_26066_26132 = state_25993__$1;
(statearr_26066_26132[(2)] = reload_dependents);

(statearr_26066_26132[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (38))){
var inst_25947 = (state_25993[(16)]);
var inst_25964 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25947);
var state_25993__$1 = state_25993;
var statearr_26067_26133 = state_25993__$1;
(statearr_26067_26133[(2)] = inst_25964);

(statearr_26067_26133[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (30))){
var state_25993__$1 = state_25993;
var statearr_26068_26134 = state_25993__$1;
(statearr_26068_26134[(2)] = null);

(statearr_26068_26134[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (10))){
var inst_25867 = (state_25993[(22)]);
var inst_25869 = cljs.core.chunked_seq_QMARK_.call(null,inst_25867);
var state_25993__$1 = state_25993;
if(inst_25869){
var statearr_26069_26135 = state_25993__$1;
(statearr_26069_26135[(1)] = (13));

} else {
var statearr_26070_26136 = state_25993__$1;
(statearr_26070_26136[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (18))){
var inst_25901 = (state_25993[(2)]);
var state_25993__$1 = state_25993;
if(cljs.core.truth_(inst_25901)){
var statearr_26071_26137 = state_25993__$1;
(statearr_26071_26137[(1)] = (19));

} else {
var statearr_26072_26138 = state_25993__$1;
(statearr_26072_26138[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (42))){
var state_25993__$1 = state_25993;
var statearr_26073_26139 = state_25993__$1;
(statearr_26073_26139[(2)] = null);

(statearr_26073_26139[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (37))){
var inst_25959 = (state_25993[(2)]);
var state_25993__$1 = state_25993;
var statearr_26074_26140 = state_25993__$1;
(statearr_26074_26140[(2)] = inst_25959);

(statearr_26074_26140[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (8))){
var inst_25867 = (state_25993[(22)]);
var inst_25854 = (state_25993[(10)]);
var inst_25867__$1 = cljs.core.seq.call(null,inst_25854);
var state_25993__$1 = (function (){var statearr_26075 = state_25993;
(statearr_26075[(22)] = inst_25867__$1);

return statearr_26075;
})();
if(inst_25867__$1){
var statearr_26076_26141 = state_25993__$1;
(statearr_26076_26141[(1)] = (10));

} else {
var statearr_26077_26142 = state_25993__$1;
(statearr_26077_26142[(1)] = (11));

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
});})(c__19619__auto__,map__25839,map__25839__$1,opts,before_jsload,on_jsload,reload_dependents,map__25840,map__25840__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19554__auto__,c__19619__auto__,map__25839,map__25839__$1,opts,before_jsload,on_jsload,reload_dependents,map__25840,map__25840__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19555__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19555__auto____0 = (function (){
var statearr_26081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26081[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19555__auto__);

(statearr_26081[(1)] = (1));

return statearr_26081;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19555__auto____1 = (function (state_25993){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_25993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e26082){if((e26082 instanceof Object)){
var ex__19558__auto__ = e26082;
var statearr_26083_26143 = state_25993;
(statearr_26083_26143[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26144 = state_25993;
state_25993 = G__26144;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19555__auto__ = function(state_25993){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19555__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19555__auto____1.call(this,state_25993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19555__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19555__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto__,map__25839,map__25839__$1,opts,before_jsload,on_jsload,reload_dependents,map__25840,map__25840__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19621__auto__ = (function (){var statearr_26084 = f__19620__auto__.call(null);
(statearr_26084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto__);

return statearr_26084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto__,map__25839,map__25839__$1,opts,before_jsload,on_jsload,reload_dependents,map__25840,map__25840__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19619__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26147,link){
var map__26150 = p__26147;
var map__26150__$1 = ((((!((map__26150 == null)))?((((map__26150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26150):map__26150);
var file = cljs.core.get.call(null,map__26150__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26150,map__26150__$1,file){
return (function (p1__26145_SHARP_,p2__26146_SHARP_){
if(cljs.core._EQ_.call(null,p1__26145_SHARP_,p2__26146_SHARP_)){
return p1__26145_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26150,map__26150__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26156){
var map__26157 = p__26156;
var map__26157__$1 = ((((!((map__26157 == null)))?((((map__26157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26157):map__26157);
var match_length = cljs.core.get.call(null,map__26157__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26157__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26152_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26152_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args26159 = [];
var len__17337__auto___26162 = arguments.length;
var i__17338__auto___26163 = (0);
while(true){
if((i__17338__auto___26163 < len__17337__auto___26162)){
args26159.push((arguments[i__17338__auto___26163]));

var G__26164 = (i__17338__auto___26163 + (1));
i__17338__auto___26163 = G__26164;
continue;
} else {
}
break;
}

var G__26161 = args26159.length;
switch (G__26161) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26159.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26166_SHARP_,p2__26167_SHARP_){
return cljs.core.assoc.call(null,p1__26166_SHARP_,cljs.core.get.call(null,p2__26167_SHARP_,key),p2__26167_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26168){
var map__26171 = p__26168;
var map__26171__$1 = ((((!((map__26171 == null)))?((((map__26171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26171):map__26171);
var f_data = map__26171__$1;
var file = cljs.core.get.call(null,map__26171__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26173,files_msg){
var map__26180 = p__26173;
var map__26180__$1 = ((((!((map__26180 == null)))?((((map__26180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26180):map__26180);
var opts = map__26180__$1;
var on_cssload = cljs.core.get.call(null,map__26180__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26182_26186 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26183_26187 = null;
var count__26184_26188 = (0);
var i__26185_26189 = (0);
while(true){
if((i__26185_26189 < count__26184_26188)){
var f_26190 = cljs.core._nth.call(null,chunk__26183_26187,i__26185_26189);
figwheel.client.file_reloading.reload_css_file.call(null,f_26190);

var G__26191 = seq__26182_26186;
var G__26192 = chunk__26183_26187;
var G__26193 = count__26184_26188;
var G__26194 = (i__26185_26189 + (1));
seq__26182_26186 = G__26191;
chunk__26183_26187 = G__26192;
count__26184_26188 = G__26193;
i__26185_26189 = G__26194;
continue;
} else {
var temp__4425__auto___26195 = cljs.core.seq.call(null,seq__26182_26186);
if(temp__4425__auto___26195){
var seq__26182_26196__$1 = temp__4425__auto___26195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26182_26196__$1)){
var c__17082__auto___26197 = cljs.core.chunk_first.call(null,seq__26182_26196__$1);
var G__26198 = cljs.core.chunk_rest.call(null,seq__26182_26196__$1);
var G__26199 = c__17082__auto___26197;
var G__26200 = cljs.core.count.call(null,c__17082__auto___26197);
var G__26201 = (0);
seq__26182_26186 = G__26198;
chunk__26183_26187 = G__26199;
count__26184_26188 = G__26200;
i__26185_26189 = G__26201;
continue;
} else {
var f_26202 = cljs.core.first.call(null,seq__26182_26196__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26202);

var G__26203 = cljs.core.next.call(null,seq__26182_26196__$1);
var G__26204 = null;
var G__26205 = (0);
var G__26206 = (0);
seq__26182_26186 = G__26203;
chunk__26183_26187 = G__26204;
count__26184_26188 = G__26205;
i__26185_26189 = G__26206;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26180,map__26180__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26180,map__26180__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1446956440271
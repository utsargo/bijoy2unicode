// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async26273 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26273 = (function (fn_handler,f,meta26274){
this.fn_handler = fn_handler;
this.f = f;
this.meta26274 = meta26274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26275,meta26274__$1){
var self__ = this;
var _26275__$1 = this;
return (new cljs.core.async.t_cljs$core$async26273(self__.fn_handler,self__.f,meta26274__$1));
});

cljs.core.async.t_cljs$core$async26273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26275){
var self__ = this;
var _26275__$1 = this;
return self__.meta26274;
});

cljs.core.async.t_cljs$core$async26273.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26273.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26273.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta26274","meta26274",-527781540,null)], null);
});

cljs.core.async.t_cljs$core$async26273.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26273";

cljs.core.async.t_cljs$core$async26273.cljs$lang$ctorPrWriter = (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async26273");
});

cljs.core.async.__GT_t_cljs$core$async26273 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async26273(fn_handler__$1,f__$1,meta26274){
return (new cljs.core.async.t_cljs$core$async26273(fn_handler__$1,f__$1,meta26274));
});

}

return (new cljs.core.async.t_cljs$core$async26273(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args26278 = [];
var len__17337__auto___26281 = arguments.length;
var i__17338__auto___26282 = (0);
while(true){
if((i__17338__auto___26282 < len__17337__auto___26281)){
args26278.push((arguments[i__17338__auto___26282]));

var G__26283 = (i__17338__auto___26282 + (1));
i__17338__auto___26282 = G__26283;
continue;
} else {
}
break;
}

var G__26280 = args26278.length;
switch (G__26280) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26278.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args26285 = [];
var len__17337__auto___26288 = arguments.length;
var i__17338__auto___26289 = (0);
while(true){
if((i__17338__auto___26289 < len__17337__auto___26288)){
args26285.push((arguments[i__17338__auto___26289]));

var G__26290 = (i__17338__auto___26289 + (1));
i__17338__auto___26289 = G__26290;
continue;
} else {
}
break;
}

var G__26287 = args26285.length;
switch (G__26287) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26285.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26292 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26292);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26292,ret){
return (function (){
return fn1.call(null,val_26292);
});})(val_26292,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args26293 = [];
var len__17337__auto___26296 = arguments.length;
var i__17338__auto___26297 = (0);
while(true){
if((i__17338__auto___26297 < len__17337__auto___26296)){
args26293.push((arguments[i__17338__auto___26297]));

var G__26298 = (i__17338__auto___26297 + (1));
i__17338__auto___26297 = G__26298;
continue;
} else {
}
break;
}

var G__26295 = args26293.length;
switch (G__26295) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26293.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17182__auto___26300 = n;
var x_26301 = (0);
while(true){
if((x_26301 < n__17182__auto___26300)){
(a[x_26301] = (0));

var G__26302 = (x_26301 + (1));
x_26301 = G__26302;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26303 = (i + (1));
i = G__26303;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26307 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26307 = (function (alt_flag,flag,meta26308){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26308 = meta26308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26309,meta26308__$1){
var self__ = this;
var _26309__$1 = this;
return (new cljs.core.async.t_cljs$core$async26307(self__.alt_flag,self__.flag,meta26308__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26307.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26309){
var self__ = this;
var _26309__$1 = this;
return self__.meta26308;
});})(flag))
;

cljs.core.async.t_cljs$core$async26307.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26307.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26307.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26307.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26308","meta26308",560687436,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26307.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26307";

cljs.core.async.t_cljs$core$async26307.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async26307");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26307 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26307(alt_flag__$1,flag__$1,meta26308){
return (new cljs.core.async.t_cljs$core$async26307(alt_flag__$1,flag__$1,meta26308));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26307(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26313 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26313 = (function (alt_handler,flag,cb,meta26314){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26314 = meta26314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26315,meta26314__$1){
var self__ = this;
var _26315__$1 = this;
return (new cljs.core.async.t_cljs$core$async26313(self__.alt_handler,self__.flag,self__.cb,meta26314__$1));
});

cljs.core.async.t_cljs$core$async26313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26315){
var self__ = this;
var _26315__$1 = this;
return self__.meta26314;
});

cljs.core.async.t_cljs$core$async26313.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26313.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26313.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26314","meta26314",53106451,null)], null);
});

cljs.core.async.t_cljs$core$async26313.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26313";

cljs.core.async.t_cljs$core$async26313.cljs$lang$ctorPrWriter = (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async26313");
});

cljs.core.async.__GT_t_cljs$core$async26313 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26313(alt_handler__$1,flag__$1,cb__$1,meta26314){
return (new cljs.core.async.t_cljs$core$async26313(alt_handler__$1,flag__$1,cb__$1,meta26314));
});

}

return (new cljs.core.async.t_cljs$core$async26313(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26316_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26316_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26317_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26317_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16279__auto__ = wport;
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26318 = (i + (1));
i = G__26318;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16279__auto__ = ret;
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16267__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16267__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16267__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17344__auto__ = [];
var len__17337__auto___26324 = arguments.length;
var i__17338__auto___26325 = (0);
while(true){
if((i__17338__auto___26325 < len__17337__auto___26324)){
args__17344__auto__.push((arguments[i__17338__auto___26325]));

var G__26326 = (i__17338__auto___26325 + (1));
i__17338__auto___26325 = G__26326;
continue;
} else {
}
break;
}

var argseq__17345__auto__ = ((((1) < args__17344__auto__.length))?(new cljs.core.IndexedSeq(args__17344__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17345__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26321){
var map__26322 = p__26321;
var map__26322__$1 = ((((!((map__26322 == null)))?((((map__26322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26322):map__26322);
var opts = map__26322__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26319){
var G__26320 = cljs.core.first.call(null,seq26319);
var seq26319__$1 = cljs.core.next.call(null,seq26319);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26320,seq26319__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args26327 = [];
var len__17337__auto___26377 = arguments.length;
var i__17338__auto___26378 = (0);
while(true){
if((i__17338__auto___26378 < len__17337__auto___26377)){
args26327.push((arguments[i__17338__auto___26378]));

var G__26379 = (i__17338__auto___26378 + (1));
i__17338__auto___26378 = G__26379;
continue;
} else {
}
break;
}

var G__26329 = args26327.length;
switch (G__26329) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26327.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19619__auto___26381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto___26381){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto___26381){
return (function (state_26353){
var state_val_26354 = (state_26353[(1)]);
if((state_val_26354 === (7))){
var inst_26349 = (state_26353[(2)]);
var state_26353__$1 = state_26353;
var statearr_26355_26382 = state_26353__$1;
(statearr_26355_26382[(2)] = inst_26349);

(statearr_26355_26382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26354 === (1))){
var state_26353__$1 = state_26353;
var statearr_26356_26383 = state_26353__$1;
(statearr_26356_26383[(2)] = null);

(statearr_26356_26383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26354 === (4))){
var inst_26332 = (state_26353[(7)]);
var inst_26332__$1 = (state_26353[(2)]);
var inst_26333 = (inst_26332__$1 == null);
var state_26353__$1 = (function (){var statearr_26357 = state_26353;
(statearr_26357[(7)] = inst_26332__$1);

return statearr_26357;
})();
if(cljs.core.truth_(inst_26333)){
var statearr_26358_26384 = state_26353__$1;
(statearr_26358_26384[(1)] = (5));

} else {
var statearr_26359_26385 = state_26353__$1;
(statearr_26359_26385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26354 === (13))){
var state_26353__$1 = state_26353;
var statearr_26360_26386 = state_26353__$1;
(statearr_26360_26386[(2)] = null);

(statearr_26360_26386[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26354 === (6))){
var inst_26332 = (state_26353[(7)]);
var state_26353__$1 = state_26353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26353__$1,(11),to,inst_26332);
} else {
if((state_val_26354 === (3))){
var inst_26351 = (state_26353[(2)]);
var state_26353__$1 = state_26353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26353__$1,inst_26351);
} else {
if((state_val_26354 === (12))){
var state_26353__$1 = state_26353;
var statearr_26361_26387 = state_26353__$1;
(statearr_26361_26387[(2)] = null);

(statearr_26361_26387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26354 === (2))){
var state_26353__$1 = state_26353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26353__$1,(4),from);
} else {
if((state_val_26354 === (11))){
var inst_26342 = (state_26353[(2)]);
var state_26353__$1 = state_26353;
if(cljs.core.truth_(inst_26342)){
var statearr_26362_26388 = state_26353__$1;
(statearr_26362_26388[(1)] = (12));

} else {
var statearr_26363_26389 = state_26353__$1;
(statearr_26363_26389[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26354 === (9))){
var state_26353__$1 = state_26353;
var statearr_26364_26390 = state_26353__$1;
(statearr_26364_26390[(2)] = null);

(statearr_26364_26390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26354 === (5))){
var state_26353__$1 = state_26353;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26365_26391 = state_26353__$1;
(statearr_26365_26391[(1)] = (8));

} else {
var statearr_26366_26392 = state_26353__$1;
(statearr_26366_26392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26354 === (14))){
var inst_26347 = (state_26353[(2)]);
var state_26353__$1 = state_26353;
var statearr_26367_26393 = state_26353__$1;
(statearr_26367_26393[(2)] = inst_26347);

(statearr_26367_26393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26354 === (10))){
var inst_26339 = (state_26353[(2)]);
var state_26353__$1 = state_26353;
var statearr_26368_26394 = state_26353__$1;
(statearr_26368_26394[(2)] = inst_26339);

(statearr_26368_26394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26354 === (8))){
var inst_26336 = cljs.core.async.close_BANG_.call(null,to);
var state_26353__$1 = state_26353;
var statearr_26369_26395 = state_26353__$1;
(statearr_26369_26395[(2)] = inst_26336);

(statearr_26369_26395[(1)] = (10));


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
});})(c__19619__auto___26381))
;
return ((function (switch__19554__auto__,c__19619__auto___26381){
return (function() {
var cljs$core$async$state_machine__19555__auto__ = null;
var cljs$core$async$state_machine__19555__auto____0 = (function (){
var statearr_26373 = [null,null,null,null,null,null,null,null];
(statearr_26373[(0)] = cljs$core$async$state_machine__19555__auto__);

(statearr_26373[(1)] = (1));

return statearr_26373;
});
var cljs$core$async$state_machine__19555__auto____1 = (function (state_26353){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_26353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e26374){if((e26374 instanceof Object)){
var ex__19558__auto__ = e26374;
var statearr_26375_26396 = state_26353;
(statearr_26375_26396[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26397 = state_26353;
state_26353 = G__26397;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$state_machine__19555__auto__ = function(state_26353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19555__auto____1.call(this,state_26353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19555__auto____0;
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19555__auto____1;
return cljs$core$async$state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto___26381))
})();
var state__19621__auto__ = (function (){var statearr_26376 = f__19620__auto__.call(null);
(statearr_26376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto___26381);

return statearr_26376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto___26381))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26581){
var vec__26582 = p__26581;
var v = cljs.core.nth.call(null,vec__26582,(0),null);
var p = cljs.core.nth.call(null,vec__26582,(1),null);
var job = vec__26582;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19619__auto___26764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto___26764,res,vec__26582,v,p,job,jobs,results){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto___26764,res,vec__26582,v,p,job,jobs,results){
return (function (state_26587){
var state_val_26588 = (state_26587[(1)]);
if((state_val_26588 === (1))){
var state_26587__$1 = state_26587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26587__$1,(2),res,v);
} else {
if((state_val_26588 === (2))){
var inst_26584 = (state_26587[(2)]);
var inst_26585 = cljs.core.async.close_BANG_.call(null,res);
var state_26587__$1 = (function (){var statearr_26589 = state_26587;
(statearr_26589[(7)] = inst_26584);

return statearr_26589;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26587__$1,inst_26585);
} else {
return null;
}
}
});})(c__19619__auto___26764,res,vec__26582,v,p,job,jobs,results))
;
return ((function (switch__19554__auto__,c__19619__auto___26764,res,vec__26582,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0 = (function (){
var statearr_26593 = [null,null,null,null,null,null,null,null];
(statearr_26593[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__);

(statearr_26593[(1)] = (1));

return statearr_26593;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1 = (function (state_26587){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_26587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e26594){if((e26594 instanceof Object)){
var ex__19558__auto__ = e26594;
var statearr_26595_26765 = state_26587;
(statearr_26595_26765[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26766 = state_26587;
state_26587 = G__26766;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__ = function(state_26587){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1.call(this,state_26587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto___26764,res,vec__26582,v,p,job,jobs,results))
})();
var state__19621__auto__ = (function (){var statearr_26596 = f__19620__auto__.call(null);
(statearr_26596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto___26764);

return statearr_26596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto___26764,res,vec__26582,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26597){
var vec__26598 = p__26597;
var v = cljs.core.nth.call(null,vec__26598,(0),null);
var p = cljs.core.nth.call(null,vec__26598,(1),null);
var job = vec__26598;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17182__auto___26767 = n;
var __26768 = (0);
while(true){
if((__26768 < n__17182__auto___26767)){
var G__26599_26769 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26599_26769) {
case "compute":
var c__19619__auto___26771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26768,c__19619__auto___26771,G__26599_26769,n__17182__auto___26767,jobs,results,process,async){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (__26768,c__19619__auto___26771,G__26599_26769,n__17182__auto___26767,jobs,results,process,async){
return (function (state_26612){
var state_val_26613 = (state_26612[(1)]);
if((state_val_26613 === (1))){
var state_26612__$1 = state_26612;
var statearr_26614_26772 = state_26612__$1;
(statearr_26614_26772[(2)] = null);

(statearr_26614_26772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (2))){
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26612__$1,(4),jobs);
} else {
if((state_val_26613 === (3))){
var inst_26610 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26612__$1,inst_26610);
} else {
if((state_val_26613 === (4))){
var inst_26602 = (state_26612[(2)]);
var inst_26603 = process.call(null,inst_26602);
var state_26612__$1 = state_26612;
if(cljs.core.truth_(inst_26603)){
var statearr_26615_26773 = state_26612__$1;
(statearr_26615_26773[(1)] = (5));

} else {
var statearr_26616_26774 = state_26612__$1;
(statearr_26616_26774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (5))){
var state_26612__$1 = state_26612;
var statearr_26617_26775 = state_26612__$1;
(statearr_26617_26775[(2)] = null);

(statearr_26617_26775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (6))){
var state_26612__$1 = state_26612;
var statearr_26618_26776 = state_26612__$1;
(statearr_26618_26776[(2)] = null);

(statearr_26618_26776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (7))){
var inst_26608 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26619_26777 = state_26612__$1;
(statearr_26619_26777[(2)] = inst_26608);

(statearr_26619_26777[(1)] = (3));


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
});})(__26768,c__19619__auto___26771,G__26599_26769,n__17182__auto___26767,jobs,results,process,async))
;
return ((function (__26768,switch__19554__auto__,c__19619__auto___26771,G__26599_26769,n__17182__auto___26767,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0 = (function (){
var statearr_26623 = [null,null,null,null,null,null,null];
(statearr_26623[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__);

(statearr_26623[(1)] = (1));

return statearr_26623;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1 = (function (state_26612){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_26612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e26624){if((e26624 instanceof Object)){
var ex__19558__auto__ = e26624;
var statearr_26625_26778 = state_26612;
(statearr_26625_26778[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26779 = state_26612;
state_26612 = G__26779;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__ = function(state_26612){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1.call(this,state_26612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__;
})()
;})(__26768,switch__19554__auto__,c__19619__auto___26771,G__26599_26769,n__17182__auto___26767,jobs,results,process,async))
})();
var state__19621__auto__ = (function (){var statearr_26626 = f__19620__auto__.call(null);
(statearr_26626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto___26771);

return statearr_26626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(__26768,c__19619__auto___26771,G__26599_26769,n__17182__auto___26767,jobs,results,process,async))
);


break;
case "async":
var c__19619__auto___26780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26768,c__19619__auto___26780,G__26599_26769,n__17182__auto___26767,jobs,results,process,async){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (__26768,c__19619__auto___26780,G__26599_26769,n__17182__auto___26767,jobs,results,process,async){
return (function (state_26639){
var state_val_26640 = (state_26639[(1)]);
if((state_val_26640 === (1))){
var state_26639__$1 = state_26639;
var statearr_26641_26781 = state_26639__$1;
(statearr_26641_26781[(2)] = null);

(statearr_26641_26781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (2))){
var state_26639__$1 = state_26639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26639__$1,(4),jobs);
} else {
if((state_val_26640 === (3))){
var inst_26637 = (state_26639[(2)]);
var state_26639__$1 = state_26639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26639__$1,inst_26637);
} else {
if((state_val_26640 === (4))){
var inst_26629 = (state_26639[(2)]);
var inst_26630 = async.call(null,inst_26629);
var state_26639__$1 = state_26639;
if(cljs.core.truth_(inst_26630)){
var statearr_26642_26782 = state_26639__$1;
(statearr_26642_26782[(1)] = (5));

} else {
var statearr_26643_26783 = state_26639__$1;
(statearr_26643_26783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (5))){
var state_26639__$1 = state_26639;
var statearr_26644_26784 = state_26639__$1;
(statearr_26644_26784[(2)] = null);

(statearr_26644_26784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (6))){
var state_26639__$1 = state_26639;
var statearr_26645_26785 = state_26639__$1;
(statearr_26645_26785[(2)] = null);

(statearr_26645_26785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (7))){
var inst_26635 = (state_26639[(2)]);
var state_26639__$1 = state_26639;
var statearr_26646_26786 = state_26639__$1;
(statearr_26646_26786[(2)] = inst_26635);

(statearr_26646_26786[(1)] = (3));


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
});})(__26768,c__19619__auto___26780,G__26599_26769,n__17182__auto___26767,jobs,results,process,async))
;
return ((function (__26768,switch__19554__auto__,c__19619__auto___26780,G__26599_26769,n__17182__auto___26767,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0 = (function (){
var statearr_26650 = [null,null,null,null,null,null,null];
(statearr_26650[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__);

(statearr_26650[(1)] = (1));

return statearr_26650;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1 = (function (state_26639){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_26639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e26651){if((e26651 instanceof Object)){
var ex__19558__auto__ = e26651;
var statearr_26652_26787 = state_26639;
(statearr_26652_26787[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26788 = state_26639;
state_26639 = G__26788;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__ = function(state_26639){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1.call(this,state_26639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__;
})()
;})(__26768,switch__19554__auto__,c__19619__auto___26780,G__26599_26769,n__17182__auto___26767,jobs,results,process,async))
})();
var state__19621__auto__ = (function (){var statearr_26653 = f__19620__auto__.call(null);
(statearr_26653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto___26780);

return statearr_26653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(__26768,c__19619__auto___26780,G__26599_26769,n__17182__auto___26767,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26789 = (__26768 + (1));
__26768 = G__26789;
continue;
} else {
}
break;
}

var c__19619__auto___26790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto___26790,jobs,results,process,async){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto___26790,jobs,results,process,async){
return (function (state_26675){
var state_val_26676 = (state_26675[(1)]);
if((state_val_26676 === (1))){
var state_26675__$1 = state_26675;
var statearr_26677_26791 = state_26675__$1;
(statearr_26677_26791[(2)] = null);

(statearr_26677_26791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26676 === (2))){
var state_26675__$1 = state_26675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26675__$1,(4),from);
} else {
if((state_val_26676 === (3))){
var inst_26673 = (state_26675[(2)]);
var state_26675__$1 = state_26675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26675__$1,inst_26673);
} else {
if((state_val_26676 === (4))){
var inst_26656 = (state_26675[(7)]);
var inst_26656__$1 = (state_26675[(2)]);
var inst_26657 = (inst_26656__$1 == null);
var state_26675__$1 = (function (){var statearr_26678 = state_26675;
(statearr_26678[(7)] = inst_26656__$1);

return statearr_26678;
})();
if(cljs.core.truth_(inst_26657)){
var statearr_26679_26792 = state_26675__$1;
(statearr_26679_26792[(1)] = (5));

} else {
var statearr_26680_26793 = state_26675__$1;
(statearr_26680_26793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26676 === (5))){
var inst_26659 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26675__$1 = state_26675;
var statearr_26681_26794 = state_26675__$1;
(statearr_26681_26794[(2)] = inst_26659);

(statearr_26681_26794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26676 === (6))){
var inst_26661 = (state_26675[(8)]);
var inst_26656 = (state_26675[(7)]);
var inst_26661__$1 = cljs.core.async.chan.call(null,(1));
var inst_26662 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26663 = [inst_26656,inst_26661__$1];
var inst_26664 = (new cljs.core.PersistentVector(null,2,(5),inst_26662,inst_26663,null));
var state_26675__$1 = (function (){var statearr_26682 = state_26675;
(statearr_26682[(8)] = inst_26661__$1);

return statearr_26682;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26675__$1,(8),jobs,inst_26664);
} else {
if((state_val_26676 === (7))){
var inst_26671 = (state_26675[(2)]);
var state_26675__$1 = state_26675;
var statearr_26683_26795 = state_26675__$1;
(statearr_26683_26795[(2)] = inst_26671);

(statearr_26683_26795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26676 === (8))){
var inst_26661 = (state_26675[(8)]);
var inst_26666 = (state_26675[(2)]);
var state_26675__$1 = (function (){var statearr_26684 = state_26675;
(statearr_26684[(9)] = inst_26666);

return statearr_26684;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26675__$1,(9),results,inst_26661);
} else {
if((state_val_26676 === (9))){
var inst_26668 = (state_26675[(2)]);
var state_26675__$1 = (function (){var statearr_26685 = state_26675;
(statearr_26685[(10)] = inst_26668);

return statearr_26685;
})();
var statearr_26686_26796 = state_26675__$1;
(statearr_26686_26796[(2)] = null);

(statearr_26686_26796[(1)] = (2));


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
});})(c__19619__auto___26790,jobs,results,process,async))
;
return ((function (switch__19554__auto__,c__19619__auto___26790,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0 = (function (){
var statearr_26690 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26690[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__);

(statearr_26690[(1)] = (1));

return statearr_26690;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1 = (function (state_26675){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_26675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e26691){if((e26691 instanceof Object)){
var ex__19558__auto__ = e26691;
var statearr_26692_26797 = state_26675;
(statearr_26692_26797[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26798 = state_26675;
state_26675 = G__26798;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__ = function(state_26675){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1.call(this,state_26675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto___26790,jobs,results,process,async))
})();
var state__19621__auto__ = (function (){var statearr_26693 = f__19620__auto__.call(null);
(statearr_26693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto___26790);

return statearr_26693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto___26790,jobs,results,process,async))
);


var c__19619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto__,jobs,results,process,async){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto__,jobs,results,process,async){
return (function (state_26731){
var state_val_26732 = (state_26731[(1)]);
if((state_val_26732 === (7))){
var inst_26727 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
var statearr_26733_26799 = state_26731__$1;
(statearr_26733_26799[(2)] = inst_26727);

(statearr_26733_26799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (20))){
var state_26731__$1 = state_26731;
var statearr_26734_26800 = state_26731__$1;
(statearr_26734_26800[(2)] = null);

(statearr_26734_26800[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (1))){
var state_26731__$1 = state_26731;
var statearr_26735_26801 = state_26731__$1;
(statearr_26735_26801[(2)] = null);

(statearr_26735_26801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (4))){
var inst_26696 = (state_26731[(7)]);
var inst_26696__$1 = (state_26731[(2)]);
var inst_26697 = (inst_26696__$1 == null);
var state_26731__$1 = (function (){var statearr_26736 = state_26731;
(statearr_26736[(7)] = inst_26696__$1);

return statearr_26736;
})();
if(cljs.core.truth_(inst_26697)){
var statearr_26737_26802 = state_26731__$1;
(statearr_26737_26802[(1)] = (5));

} else {
var statearr_26738_26803 = state_26731__$1;
(statearr_26738_26803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (15))){
var inst_26709 = (state_26731[(8)]);
var state_26731__$1 = state_26731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26731__$1,(18),to,inst_26709);
} else {
if((state_val_26732 === (21))){
var inst_26722 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
var statearr_26739_26804 = state_26731__$1;
(statearr_26739_26804[(2)] = inst_26722);

(statearr_26739_26804[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (13))){
var inst_26724 = (state_26731[(2)]);
var state_26731__$1 = (function (){var statearr_26740 = state_26731;
(statearr_26740[(9)] = inst_26724);

return statearr_26740;
})();
var statearr_26741_26805 = state_26731__$1;
(statearr_26741_26805[(2)] = null);

(statearr_26741_26805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (6))){
var inst_26696 = (state_26731[(7)]);
var state_26731__$1 = state_26731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26731__$1,(11),inst_26696);
} else {
if((state_val_26732 === (17))){
var inst_26717 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
if(cljs.core.truth_(inst_26717)){
var statearr_26742_26806 = state_26731__$1;
(statearr_26742_26806[(1)] = (19));

} else {
var statearr_26743_26807 = state_26731__$1;
(statearr_26743_26807[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (3))){
var inst_26729 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26731__$1,inst_26729);
} else {
if((state_val_26732 === (12))){
var inst_26706 = (state_26731[(10)]);
var state_26731__$1 = state_26731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26731__$1,(14),inst_26706);
} else {
if((state_val_26732 === (2))){
var state_26731__$1 = state_26731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26731__$1,(4),results);
} else {
if((state_val_26732 === (19))){
var state_26731__$1 = state_26731;
var statearr_26744_26808 = state_26731__$1;
(statearr_26744_26808[(2)] = null);

(statearr_26744_26808[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (11))){
var inst_26706 = (state_26731[(2)]);
var state_26731__$1 = (function (){var statearr_26745 = state_26731;
(statearr_26745[(10)] = inst_26706);

return statearr_26745;
})();
var statearr_26746_26809 = state_26731__$1;
(statearr_26746_26809[(2)] = null);

(statearr_26746_26809[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (9))){
var state_26731__$1 = state_26731;
var statearr_26747_26810 = state_26731__$1;
(statearr_26747_26810[(2)] = null);

(statearr_26747_26810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (5))){
var state_26731__$1 = state_26731;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26748_26811 = state_26731__$1;
(statearr_26748_26811[(1)] = (8));

} else {
var statearr_26749_26812 = state_26731__$1;
(statearr_26749_26812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (14))){
var inst_26709 = (state_26731[(8)]);
var inst_26711 = (state_26731[(11)]);
var inst_26709__$1 = (state_26731[(2)]);
var inst_26710 = (inst_26709__$1 == null);
var inst_26711__$1 = cljs.core.not.call(null,inst_26710);
var state_26731__$1 = (function (){var statearr_26750 = state_26731;
(statearr_26750[(8)] = inst_26709__$1);

(statearr_26750[(11)] = inst_26711__$1);

return statearr_26750;
})();
if(inst_26711__$1){
var statearr_26751_26813 = state_26731__$1;
(statearr_26751_26813[(1)] = (15));

} else {
var statearr_26752_26814 = state_26731__$1;
(statearr_26752_26814[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (16))){
var inst_26711 = (state_26731[(11)]);
var state_26731__$1 = state_26731;
var statearr_26753_26815 = state_26731__$1;
(statearr_26753_26815[(2)] = inst_26711);

(statearr_26753_26815[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (10))){
var inst_26703 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
var statearr_26754_26816 = state_26731__$1;
(statearr_26754_26816[(2)] = inst_26703);

(statearr_26754_26816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (18))){
var inst_26714 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
var statearr_26755_26817 = state_26731__$1;
(statearr_26755_26817[(2)] = inst_26714);

(statearr_26755_26817[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (8))){
var inst_26700 = cljs.core.async.close_BANG_.call(null,to);
var state_26731__$1 = state_26731;
var statearr_26756_26818 = state_26731__$1;
(statearr_26756_26818[(2)] = inst_26700);

(statearr_26756_26818[(1)] = (10));


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
});})(c__19619__auto__,jobs,results,process,async))
;
return ((function (switch__19554__auto__,c__19619__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0 = (function (){
var statearr_26760 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26760[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__);

(statearr_26760[(1)] = (1));

return statearr_26760;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1 = (function (state_26731){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_26731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e26761){if((e26761 instanceof Object)){
var ex__19558__auto__ = e26761;
var statearr_26762_26819 = state_26731;
(statearr_26762_26819[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26820 = state_26731;
state_26731 = G__26820;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__ = function(state_26731){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1.call(this,state_26731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19555__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto__,jobs,results,process,async))
})();
var state__19621__auto__ = (function (){var statearr_26763 = f__19620__auto__.call(null);
(statearr_26763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto__);

return statearr_26763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto__,jobs,results,process,async))
);

return c__19619__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args26821 = [];
var len__17337__auto___26824 = arguments.length;
var i__17338__auto___26825 = (0);
while(true){
if((i__17338__auto___26825 < len__17337__auto___26824)){
args26821.push((arguments[i__17338__auto___26825]));

var G__26826 = (i__17338__auto___26825 + (1));
i__17338__auto___26825 = G__26826;
continue;
} else {
}
break;
}

var G__26823 = args26821.length;
switch (G__26823) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26821.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args26828 = [];
var len__17337__auto___26831 = arguments.length;
var i__17338__auto___26832 = (0);
while(true){
if((i__17338__auto___26832 < len__17337__auto___26831)){
args26828.push((arguments[i__17338__auto___26832]));

var G__26833 = (i__17338__auto___26832 + (1));
i__17338__auto___26832 = G__26833;
continue;
} else {
}
break;
}

var G__26830 = args26828.length;
switch (G__26830) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26828.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args26835 = [];
var len__17337__auto___26888 = arguments.length;
var i__17338__auto___26889 = (0);
while(true){
if((i__17338__auto___26889 < len__17337__auto___26888)){
args26835.push((arguments[i__17338__auto___26889]));

var G__26890 = (i__17338__auto___26889 + (1));
i__17338__auto___26889 = G__26890;
continue;
} else {
}
break;
}

var G__26837 = args26835.length;
switch (G__26837) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26835.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19619__auto___26892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto___26892,tc,fc){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto___26892,tc,fc){
return (function (state_26863){
var state_val_26864 = (state_26863[(1)]);
if((state_val_26864 === (7))){
var inst_26859 = (state_26863[(2)]);
var state_26863__$1 = state_26863;
var statearr_26865_26893 = state_26863__$1;
(statearr_26865_26893[(2)] = inst_26859);

(statearr_26865_26893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (1))){
var state_26863__$1 = state_26863;
var statearr_26866_26894 = state_26863__$1;
(statearr_26866_26894[(2)] = null);

(statearr_26866_26894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (4))){
var inst_26840 = (state_26863[(7)]);
var inst_26840__$1 = (state_26863[(2)]);
var inst_26841 = (inst_26840__$1 == null);
var state_26863__$1 = (function (){var statearr_26867 = state_26863;
(statearr_26867[(7)] = inst_26840__$1);

return statearr_26867;
})();
if(cljs.core.truth_(inst_26841)){
var statearr_26868_26895 = state_26863__$1;
(statearr_26868_26895[(1)] = (5));

} else {
var statearr_26869_26896 = state_26863__$1;
(statearr_26869_26896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (13))){
var state_26863__$1 = state_26863;
var statearr_26870_26897 = state_26863__$1;
(statearr_26870_26897[(2)] = null);

(statearr_26870_26897[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (6))){
var inst_26840 = (state_26863[(7)]);
var inst_26846 = p.call(null,inst_26840);
var state_26863__$1 = state_26863;
if(cljs.core.truth_(inst_26846)){
var statearr_26871_26898 = state_26863__$1;
(statearr_26871_26898[(1)] = (9));

} else {
var statearr_26872_26899 = state_26863__$1;
(statearr_26872_26899[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (3))){
var inst_26861 = (state_26863[(2)]);
var state_26863__$1 = state_26863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26863__$1,inst_26861);
} else {
if((state_val_26864 === (12))){
var state_26863__$1 = state_26863;
var statearr_26873_26900 = state_26863__$1;
(statearr_26873_26900[(2)] = null);

(statearr_26873_26900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (2))){
var state_26863__$1 = state_26863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26863__$1,(4),ch);
} else {
if((state_val_26864 === (11))){
var inst_26840 = (state_26863[(7)]);
var inst_26850 = (state_26863[(2)]);
var state_26863__$1 = state_26863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26863__$1,(8),inst_26850,inst_26840);
} else {
if((state_val_26864 === (9))){
var state_26863__$1 = state_26863;
var statearr_26874_26901 = state_26863__$1;
(statearr_26874_26901[(2)] = tc);

(statearr_26874_26901[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (5))){
var inst_26843 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26844 = cljs.core.async.close_BANG_.call(null,fc);
var state_26863__$1 = (function (){var statearr_26875 = state_26863;
(statearr_26875[(8)] = inst_26843);

return statearr_26875;
})();
var statearr_26876_26902 = state_26863__$1;
(statearr_26876_26902[(2)] = inst_26844);

(statearr_26876_26902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (14))){
var inst_26857 = (state_26863[(2)]);
var state_26863__$1 = state_26863;
var statearr_26877_26903 = state_26863__$1;
(statearr_26877_26903[(2)] = inst_26857);

(statearr_26877_26903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (10))){
var state_26863__$1 = state_26863;
var statearr_26878_26904 = state_26863__$1;
(statearr_26878_26904[(2)] = fc);

(statearr_26878_26904[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26864 === (8))){
var inst_26852 = (state_26863[(2)]);
var state_26863__$1 = state_26863;
if(cljs.core.truth_(inst_26852)){
var statearr_26879_26905 = state_26863__$1;
(statearr_26879_26905[(1)] = (12));

} else {
var statearr_26880_26906 = state_26863__$1;
(statearr_26880_26906[(1)] = (13));

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
});})(c__19619__auto___26892,tc,fc))
;
return ((function (switch__19554__auto__,c__19619__auto___26892,tc,fc){
return (function() {
var cljs$core$async$state_machine__19555__auto__ = null;
var cljs$core$async$state_machine__19555__auto____0 = (function (){
var statearr_26884 = [null,null,null,null,null,null,null,null,null];
(statearr_26884[(0)] = cljs$core$async$state_machine__19555__auto__);

(statearr_26884[(1)] = (1));

return statearr_26884;
});
var cljs$core$async$state_machine__19555__auto____1 = (function (state_26863){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_26863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e26885){if((e26885 instanceof Object)){
var ex__19558__auto__ = e26885;
var statearr_26886_26907 = state_26863;
(statearr_26886_26907[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26908 = state_26863;
state_26863 = G__26908;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$state_machine__19555__auto__ = function(state_26863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19555__auto____1.call(this,state_26863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19555__auto____0;
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19555__auto____1;
return cljs$core$async$state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto___26892,tc,fc))
})();
var state__19621__auto__ = (function (){var statearr_26887 = f__19620__auto__.call(null);
(statearr_26887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto___26892);

return statearr_26887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto___26892,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto__){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto__){
return (function (state_26955){
var state_val_26956 = (state_26955[(1)]);
if((state_val_26956 === (1))){
var inst_26941 = init;
var state_26955__$1 = (function (){var statearr_26957 = state_26955;
(statearr_26957[(7)] = inst_26941);

return statearr_26957;
})();
var statearr_26958_26973 = state_26955__$1;
(statearr_26958_26973[(2)] = null);

(statearr_26958_26973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (2))){
var state_26955__$1 = state_26955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26955__$1,(4),ch);
} else {
if((state_val_26956 === (3))){
var inst_26953 = (state_26955[(2)]);
var state_26955__$1 = state_26955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26955__$1,inst_26953);
} else {
if((state_val_26956 === (4))){
var inst_26944 = (state_26955[(8)]);
var inst_26944__$1 = (state_26955[(2)]);
var inst_26945 = (inst_26944__$1 == null);
var state_26955__$1 = (function (){var statearr_26959 = state_26955;
(statearr_26959[(8)] = inst_26944__$1);

return statearr_26959;
})();
if(cljs.core.truth_(inst_26945)){
var statearr_26960_26974 = state_26955__$1;
(statearr_26960_26974[(1)] = (5));

} else {
var statearr_26961_26975 = state_26955__$1;
(statearr_26961_26975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (5))){
var inst_26941 = (state_26955[(7)]);
var state_26955__$1 = state_26955;
var statearr_26962_26976 = state_26955__$1;
(statearr_26962_26976[(2)] = inst_26941);

(statearr_26962_26976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (6))){
var inst_26941 = (state_26955[(7)]);
var inst_26944 = (state_26955[(8)]);
var inst_26948 = f.call(null,inst_26941,inst_26944);
var inst_26941__$1 = inst_26948;
var state_26955__$1 = (function (){var statearr_26963 = state_26955;
(statearr_26963[(7)] = inst_26941__$1);

return statearr_26963;
})();
var statearr_26964_26977 = state_26955__$1;
(statearr_26964_26977[(2)] = null);

(statearr_26964_26977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26956 === (7))){
var inst_26951 = (state_26955[(2)]);
var state_26955__$1 = state_26955;
var statearr_26965_26978 = state_26955__$1;
(statearr_26965_26978[(2)] = inst_26951);

(statearr_26965_26978[(1)] = (3));


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
});})(c__19619__auto__))
;
return ((function (switch__19554__auto__,c__19619__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19555__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19555__auto____0 = (function (){
var statearr_26969 = [null,null,null,null,null,null,null,null,null];
(statearr_26969[(0)] = cljs$core$async$reduce_$_state_machine__19555__auto__);

(statearr_26969[(1)] = (1));

return statearr_26969;
});
var cljs$core$async$reduce_$_state_machine__19555__auto____1 = (function (state_26955){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_26955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e26970){if((e26970 instanceof Object)){
var ex__19558__auto__ = e26970;
var statearr_26971_26979 = state_26955;
(statearr_26971_26979[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26980 = state_26955;
state_26955 = G__26980;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19555__auto__ = function(state_26955){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19555__auto____1.call(this,state_26955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19555__auto____0;
cljs$core$async$reduce_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19555__auto____1;
return cljs$core$async$reduce_$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto__))
})();
var state__19621__auto__ = (function (){var statearr_26972 = f__19620__auto__.call(null);
(statearr_26972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto__);

return statearr_26972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto__))
);

return c__19619__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args26981 = [];
var len__17337__auto___27033 = arguments.length;
var i__17338__auto___27034 = (0);
while(true){
if((i__17338__auto___27034 < len__17337__auto___27033)){
args26981.push((arguments[i__17338__auto___27034]));

var G__27035 = (i__17338__auto___27034 + (1));
i__17338__auto___27034 = G__27035;
continue;
} else {
}
break;
}

var G__26983 = args26981.length;
switch (G__26983) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26981.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto__){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto__){
return (function (state_27008){
var state_val_27009 = (state_27008[(1)]);
if((state_val_27009 === (7))){
var inst_26990 = (state_27008[(2)]);
var state_27008__$1 = state_27008;
var statearr_27010_27037 = state_27008__$1;
(statearr_27010_27037[(2)] = inst_26990);

(statearr_27010_27037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27009 === (1))){
var inst_26984 = cljs.core.seq.call(null,coll);
var inst_26985 = inst_26984;
var state_27008__$1 = (function (){var statearr_27011 = state_27008;
(statearr_27011[(7)] = inst_26985);

return statearr_27011;
})();
var statearr_27012_27038 = state_27008__$1;
(statearr_27012_27038[(2)] = null);

(statearr_27012_27038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27009 === (4))){
var inst_26985 = (state_27008[(7)]);
var inst_26988 = cljs.core.first.call(null,inst_26985);
var state_27008__$1 = state_27008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27008__$1,(7),ch,inst_26988);
} else {
if((state_val_27009 === (13))){
var inst_27002 = (state_27008[(2)]);
var state_27008__$1 = state_27008;
var statearr_27013_27039 = state_27008__$1;
(statearr_27013_27039[(2)] = inst_27002);

(statearr_27013_27039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27009 === (6))){
var inst_26993 = (state_27008[(2)]);
var state_27008__$1 = state_27008;
if(cljs.core.truth_(inst_26993)){
var statearr_27014_27040 = state_27008__$1;
(statearr_27014_27040[(1)] = (8));

} else {
var statearr_27015_27041 = state_27008__$1;
(statearr_27015_27041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27009 === (3))){
var inst_27006 = (state_27008[(2)]);
var state_27008__$1 = state_27008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27008__$1,inst_27006);
} else {
if((state_val_27009 === (12))){
var state_27008__$1 = state_27008;
var statearr_27016_27042 = state_27008__$1;
(statearr_27016_27042[(2)] = null);

(statearr_27016_27042[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27009 === (2))){
var inst_26985 = (state_27008[(7)]);
var state_27008__$1 = state_27008;
if(cljs.core.truth_(inst_26985)){
var statearr_27017_27043 = state_27008__$1;
(statearr_27017_27043[(1)] = (4));

} else {
var statearr_27018_27044 = state_27008__$1;
(statearr_27018_27044[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27009 === (11))){
var inst_26999 = cljs.core.async.close_BANG_.call(null,ch);
var state_27008__$1 = state_27008;
var statearr_27019_27045 = state_27008__$1;
(statearr_27019_27045[(2)] = inst_26999);

(statearr_27019_27045[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27009 === (9))){
var state_27008__$1 = state_27008;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27020_27046 = state_27008__$1;
(statearr_27020_27046[(1)] = (11));

} else {
var statearr_27021_27047 = state_27008__$1;
(statearr_27021_27047[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27009 === (5))){
var inst_26985 = (state_27008[(7)]);
var state_27008__$1 = state_27008;
var statearr_27022_27048 = state_27008__$1;
(statearr_27022_27048[(2)] = inst_26985);

(statearr_27022_27048[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27009 === (10))){
var inst_27004 = (state_27008[(2)]);
var state_27008__$1 = state_27008;
var statearr_27023_27049 = state_27008__$1;
(statearr_27023_27049[(2)] = inst_27004);

(statearr_27023_27049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27009 === (8))){
var inst_26985 = (state_27008[(7)]);
var inst_26995 = cljs.core.next.call(null,inst_26985);
var inst_26985__$1 = inst_26995;
var state_27008__$1 = (function (){var statearr_27024 = state_27008;
(statearr_27024[(7)] = inst_26985__$1);

return statearr_27024;
})();
var statearr_27025_27050 = state_27008__$1;
(statearr_27025_27050[(2)] = null);

(statearr_27025_27050[(1)] = (2));


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
});})(c__19619__auto__))
;
return ((function (switch__19554__auto__,c__19619__auto__){
return (function() {
var cljs$core$async$state_machine__19555__auto__ = null;
var cljs$core$async$state_machine__19555__auto____0 = (function (){
var statearr_27029 = [null,null,null,null,null,null,null,null];
(statearr_27029[(0)] = cljs$core$async$state_machine__19555__auto__);

(statearr_27029[(1)] = (1));

return statearr_27029;
});
var cljs$core$async$state_machine__19555__auto____1 = (function (state_27008){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_27008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e27030){if((e27030 instanceof Object)){
var ex__19558__auto__ = e27030;
var statearr_27031_27051 = state_27008;
(statearr_27031_27051[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27052 = state_27008;
state_27008 = G__27052;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$state_machine__19555__auto__ = function(state_27008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19555__auto____1.call(this,state_27008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19555__auto____0;
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19555__auto____1;
return cljs$core$async$state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto__))
})();
var state__19621__auto__ = (function (){var statearr_27032 = f__19620__auto__.call(null);
(statearr_27032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto__);

return statearr_27032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto__))
);

return c__19619__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16934__auto__ = (((_ == null))?null:_);
var m__16935__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,_);
} else {
var m__16935__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16934__auto__ = (((m == null))?null:m);
var m__16935__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__16935__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16934__auto__ = (((m == null))?null:m);
var m__16935__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,m,ch);
} else {
var m__16935__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16934__auto__ = (((m == null))?null:m);
var m__16935__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,m);
} else {
var m__16935__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27274 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27274 = (function (mult,ch,cs,meta27275){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27275 = meta27275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27276,meta27275__$1){
var self__ = this;
var _27276__$1 = this;
return (new cljs.core.async.t_cljs$core$async27274(self__.mult,self__.ch,self__.cs,meta27275__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27274.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27276){
var self__ = this;
var _27276__$1 = this;
return self__.meta27275;
});})(cs))
;

cljs.core.async.t_cljs$core$async27274.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27274.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27274.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async27274.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27274.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27274.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27274.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27275","meta27275",-1474082791,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27274.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27274";

cljs.core.async.t_cljs$core$async27274.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async27274");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async27274 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27274(mult__$1,ch__$1,cs__$1,meta27275){
return (new cljs.core.async.t_cljs$core$async27274(mult__$1,ch__$1,cs__$1,meta27275));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27274(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19619__auto___27495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto___27495,cs,m,dchan,dctr,done){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto___27495,cs,m,dchan,dctr,done){
return (function (state_27407){
var state_val_27408 = (state_27407[(1)]);
if((state_val_27408 === (7))){
var inst_27403 = (state_27407[(2)]);
var state_27407__$1 = state_27407;
var statearr_27409_27496 = state_27407__$1;
(statearr_27409_27496[(2)] = inst_27403);

(statearr_27409_27496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (20))){
var inst_27308 = (state_27407[(7)]);
var inst_27318 = cljs.core.first.call(null,inst_27308);
var inst_27319 = cljs.core.nth.call(null,inst_27318,(0),null);
var inst_27320 = cljs.core.nth.call(null,inst_27318,(1),null);
var state_27407__$1 = (function (){var statearr_27410 = state_27407;
(statearr_27410[(8)] = inst_27319);

return statearr_27410;
})();
if(cljs.core.truth_(inst_27320)){
var statearr_27411_27497 = state_27407__$1;
(statearr_27411_27497[(1)] = (22));

} else {
var statearr_27412_27498 = state_27407__$1;
(statearr_27412_27498[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (27))){
var inst_27350 = (state_27407[(9)]);
var inst_27355 = (state_27407[(10)]);
var inst_27348 = (state_27407[(11)]);
var inst_27279 = (state_27407[(12)]);
var inst_27355__$1 = cljs.core._nth.call(null,inst_27348,inst_27350);
var inst_27356 = cljs.core.async.put_BANG_.call(null,inst_27355__$1,inst_27279,done);
var state_27407__$1 = (function (){var statearr_27413 = state_27407;
(statearr_27413[(10)] = inst_27355__$1);

return statearr_27413;
})();
if(cljs.core.truth_(inst_27356)){
var statearr_27414_27499 = state_27407__$1;
(statearr_27414_27499[(1)] = (30));

} else {
var statearr_27415_27500 = state_27407__$1;
(statearr_27415_27500[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (1))){
var state_27407__$1 = state_27407;
var statearr_27416_27501 = state_27407__$1;
(statearr_27416_27501[(2)] = null);

(statearr_27416_27501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (24))){
var inst_27308 = (state_27407[(7)]);
var inst_27325 = (state_27407[(2)]);
var inst_27326 = cljs.core.next.call(null,inst_27308);
var inst_27288 = inst_27326;
var inst_27289 = null;
var inst_27290 = (0);
var inst_27291 = (0);
var state_27407__$1 = (function (){var statearr_27417 = state_27407;
(statearr_27417[(13)] = inst_27325);

(statearr_27417[(14)] = inst_27291);

(statearr_27417[(15)] = inst_27288);

(statearr_27417[(16)] = inst_27290);

(statearr_27417[(17)] = inst_27289);

return statearr_27417;
})();
var statearr_27418_27502 = state_27407__$1;
(statearr_27418_27502[(2)] = null);

(statearr_27418_27502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (39))){
var state_27407__$1 = state_27407;
var statearr_27422_27503 = state_27407__$1;
(statearr_27422_27503[(2)] = null);

(statearr_27422_27503[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (4))){
var inst_27279 = (state_27407[(12)]);
var inst_27279__$1 = (state_27407[(2)]);
var inst_27280 = (inst_27279__$1 == null);
var state_27407__$1 = (function (){var statearr_27423 = state_27407;
(statearr_27423[(12)] = inst_27279__$1);

return statearr_27423;
})();
if(cljs.core.truth_(inst_27280)){
var statearr_27424_27504 = state_27407__$1;
(statearr_27424_27504[(1)] = (5));

} else {
var statearr_27425_27505 = state_27407__$1;
(statearr_27425_27505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (15))){
var inst_27291 = (state_27407[(14)]);
var inst_27288 = (state_27407[(15)]);
var inst_27290 = (state_27407[(16)]);
var inst_27289 = (state_27407[(17)]);
var inst_27304 = (state_27407[(2)]);
var inst_27305 = (inst_27291 + (1));
var tmp27419 = inst_27288;
var tmp27420 = inst_27290;
var tmp27421 = inst_27289;
var inst_27288__$1 = tmp27419;
var inst_27289__$1 = tmp27421;
var inst_27290__$1 = tmp27420;
var inst_27291__$1 = inst_27305;
var state_27407__$1 = (function (){var statearr_27426 = state_27407;
(statearr_27426[(14)] = inst_27291__$1);

(statearr_27426[(18)] = inst_27304);

(statearr_27426[(15)] = inst_27288__$1);

(statearr_27426[(16)] = inst_27290__$1);

(statearr_27426[(17)] = inst_27289__$1);

return statearr_27426;
})();
var statearr_27427_27506 = state_27407__$1;
(statearr_27427_27506[(2)] = null);

(statearr_27427_27506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (21))){
var inst_27329 = (state_27407[(2)]);
var state_27407__$1 = state_27407;
var statearr_27431_27507 = state_27407__$1;
(statearr_27431_27507[(2)] = inst_27329);

(statearr_27431_27507[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (31))){
var inst_27355 = (state_27407[(10)]);
var inst_27359 = done.call(null,null);
var inst_27360 = cljs.core.async.untap_STAR_.call(null,m,inst_27355);
var state_27407__$1 = (function (){var statearr_27432 = state_27407;
(statearr_27432[(19)] = inst_27359);

return statearr_27432;
})();
var statearr_27433_27508 = state_27407__$1;
(statearr_27433_27508[(2)] = inst_27360);

(statearr_27433_27508[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (32))){
var inst_27350 = (state_27407[(9)]);
var inst_27348 = (state_27407[(11)]);
var inst_27347 = (state_27407[(20)]);
var inst_27349 = (state_27407[(21)]);
var inst_27362 = (state_27407[(2)]);
var inst_27363 = (inst_27350 + (1));
var tmp27428 = inst_27348;
var tmp27429 = inst_27347;
var tmp27430 = inst_27349;
var inst_27347__$1 = tmp27429;
var inst_27348__$1 = tmp27428;
var inst_27349__$1 = tmp27430;
var inst_27350__$1 = inst_27363;
var state_27407__$1 = (function (){var statearr_27434 = state_27407;
(statearr_27434[(9)] = inst_27350__$1);

(statearr_27434[(11)] = inst_27348__$1);

(statearr_27434[(20)] = inst_27347__$1);

(statearr_27434[(22)] = inst_27362);

(statearr_27434[(21)] = inst_27349__$1);

return statearr_27434;
})();
var statearr_27435_27509 = state_27407__$1;
(statearr_27435_27509[(2)] = null);

(statearr_27435_27509[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (40))){
var inst_27375 = (state_27407[(23)]);
var inst_27379 = done.call(null,null);
var inst_27380 = cljs.core.async.untap_STAR_.call(null,m,inst_27375);
var state_27407__$1 = (function (){var statearr_27436 = state_27407;
(statearr_27436[(24)] = inst_27379);

return statearr_27436;
})();
var statearr_27437_27510 = state_27407__$1;
(statearr_27437_27510[(2)] = inst_27380);

(statearr_27437_27510[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (33))){
var inst_27366 = (state_27407[(25)]);
var inst_27368 = cljs.core.chunked_seq_QMARK_.call(null,inst_27366);
var state_27407__$1 = state_27407;
if(inst_27368){
var statearr_27438_27511 = state_27407__$1;
(statearr_27438_27511[(1)] = (36));

} else {
var statearr_27439_27512 = state_27407__$1;
(statearr_27439_27512[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (13))){
var inst_27298 = (state_27407[(26)]);
var inst_27301 = cljs.core.async.close_BANG_.call(null,inst_27298);
var state_27407__$1 = state_27407;
var statearr_27440_27513 = state_27407__$1;
(statearr_27440_27513[(2)] = inst_27301);

(statearr_27440_27513[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (22))){
var inst_27319 = (state_27407[(8)]);
var inst_27322 = cljs.core.async.close_BANG_.call(null,inst_27319);
var state_27407__$1 = state_27407;
var statearr_27441_27514 = state_27407__$1;
(statearr_27441_27514[(2)] = inst_27322);

(statearr_27441_27514[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (36))){
var inst_27366 = (state_27407[(25)]);
var inst_27370 = cljs.core.chunk_first.call(null,inst_27366);
var inst_27371 = cljs.core.chunk_rest.call(null,inst_27366);
var inst_27372 = cljs.core.count.call(null,inst_27370);
var inst_27347 = inst_27371;
var inst_27348 = inst_27370;
var inst_27349 = inst_27372;
var inst_27350 = (0);
var state_27407__$1 = (function (){var statearr_27442 = state_27407;
(statearr_27442[(9)] = inst_27350);

(statearr_27442[(11)] = inst_27348);

(statearr_27442[(20)] = inst_27347);

(statearr_27442[(21)] = inst_27349);

return statearr_27442;
})();
var statearr_27443_27515 = state_27407__$1;
(statearr_27443_27515[(2)] = null);

(statearr_27443_27515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (41))){
var inst_27366 = (state_27407[(25)]);
var inst_27382 = (state_27407[(2)]);
var inst_27383 = cljs.core.next.call(null,inst_27366);
var inst_27347 = inst_27383;
var inst_27348 = null;
var inst_27349 = (0);
var inst_27350 = (0);
var state_27407__$1 = (function (){var statearr_27444 = state_27407;
(statearr_27444[(9)] = inst_27350);

(statearr_27444[(11)] = inst_27348);

(statearr_27444[(27)] = inst_27382);

(statearr_27444[(20)] = inst_27347);

(statearr_27444[(21)] = inst_27349);

return statearr_27444;
})();
var statearr_27445_27516 = state_27407__$1;
(statearr_27445_27516[(2)] = null);

(statearr_27445_27516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (43))){
var state_27407__$1 = state_27407;
var statearr_27446_27517 = state_27407__$1;
(statearr_27446_27517[(2)] = null);

(statearr_27446_27517[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (29))){
var inst_27391 = (state_27407[(2)]);
var state_27407__$1 = state_27407;
var statearr_27447_27518 = state_27407__$1;
(statearr_27447_27518[(2)] = inst_27391);

(statearr_27447_27518[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (44))){
var inst_27400 = (state_27407[(2)]);
var state_27407__$1 = (function (){var statearr_27448 = state_27407;
(statearr_27448[(28)] = inst_27400);

return statearr_27448;
})();
var statearr_27449_27519 = state_27407__$1;
(statearr_27449_27519[(2)] = null);

(statearr_27449_27519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (6))){
var inst_27339 = (state_27407[(29)]);
var inst_27338 = cljs.core.deref.call(null,cs);
var inst_27339__$1 = cljs.core.keys.call(null,inst_27338);
var inst_27340 = cljs.core.count.call(null,inst_27339__$1);
var inst_27341 = cljs.core.reset_BANG_.call(null,dctr,inst_27340);
var inst_27346 = cljs.core.seq.call(null,inst_27339__$1);
var inst_27347 = inst_27346;
var inst_27348 = null;
var inst_27349 = (0);
var inst_27350 = (0);
var state_27407__$1 = (function (){var statearr_27450 = state_27407;
(statearr_27450[(30)] = inst_27341);

(statearr_27450[(9)] = inst_27350);

(statearr_27450[(11)] = inst_27348);

(statearr_27450[(20)] = inst_27347);

(statearr_27450[(21)] = inst_27349);

(statearr_27450[(29)] = inst_27339__$1);

return statearr_27450;
})();
var statearr_27451_27520 = state_27407__$1;
(statearr_27451_27520[(2)] = null);

(statearr_27451_27520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (28))){
var inst_27347 = (state_27407[(20)]);
var inst_27366 = (state_27407[(25)]);
var inst_27366__$1 = cljs.core.seq.call(null,inst_27347);
var state_27407__$1 = (function (){var statearr_27452 = state_27407;
(statearr_27452[(25)] = inst_27366__$1);

return statearr_27452;
})();
if(inst_27366__$1){
var statearr_27453_27521 = state_27407__$1;
(statearr_27453_27521[(1)] = (33));

} else {
var statearr_27454_27522 = state_27407__$1;
(statearr_27454_27522[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (25))){
var inst_27350 = (state_27407[(9)]);
var inst_27349 = (state_27407[(21)]);
var inst_27352 = (inst_27350 < inst_27349);
var inst_27353 = inst_27352;
var state_27407__$1 = state_27407;
if(cljs.core.truth_(inst_27353)){
var statearr_27455_27523 = state_27407__$1;
(statearr_27455_27523[(1)] = (27));

} else {
var statearr_27456_27524 = state_27407__$1;
(statearr_27456_27524[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (34))){
var state_27407__$1 = state_27407;
var statearr_27457_27525 = state_27407__$1;
(statearr_27457_27525[(2)] = null);

(statearr_27457_27525[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (17))){
var state_27407__$1 = state_27407;
var statearr_27458_27526 = state_27407__$1;
(statearr_27458_27526[(2)] = null);

(statearr_27458_27526[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (3))){
var inst_27405 = (state_27407[(2)]);
var state_27407__$1 = state_27407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27407__$1,inst_27405);
} else {
if((state_val_27408 === (12))){
var inst_27334 = (state_27407[(2)]);
var state_27407__$1 = state_27407;
var statearr_27459_27527 = state_27407__$1;
(statearr_27459_27527[(2)] = inst_27334);

(statearr_27459_27527[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (2))){
var state_27407__$1 = state_27407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27407__$1,(4),ch);
} else {
if((state_val_27408 === (23))){
var state_27407__$1 = state_27407;
var statearr_27460_27528 = state_27407__$1;
(statearr_27460_27528[(2)] = null);

(statearr_27460_27528[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (35))){
var inst_27389 = (state_27407[(2)]);
var state_27407__$1 = state_27407;
var statearr_27461_27529 = state_27407__$1;
(statearr_27461_27529[(2)] = inst_27389);

(statearr_27461_27529[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (19))){
var inst_27308 = (state_27407[(7)]);
var inst_27312 = cljs.core.chunk_first.call(null,inst_27308);
var inst_27313 = cljs.core.chunk_rest.call(null,inst_27308);
var inst_27314 = cljs.core.count.call(null,inst_27312);
var inst_27288 = inst_27313;
var inst_27289 = inst_27312;
var inst_27290 = inst_27314;
var inst_27291 = (0);
var state_27407__$1 = (function (){var statearr_27462 = state_27407;
(statearr_27462[(14)] = inst_27291);

(statearr_27462[(15)] = inst_27288);

(statearr_27462[(16)] = inst_27290);

(statearr_27462[(17)] = inst_27289);

return statearr_27462;
})();
var statearr_27463_27530 = state_27407__$1;
(statearr_27463_27530[(2)] = null);

(statearr_27463_27530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (11))){
var inst_27308 = (state_27407[(7)]);
var inst_27288 = (state_27407[(15)]);
var inst_27308__$1 = cljs.core.seq.call(null,inst_27288);
var state_27407__$1 = (function (){var statearr_27464 = state_27407;
(statearr_27464[(7)] = inst_27308__$1);

return statearr_27464;
})();
if(inst_27308__$1){
var statearr_27465_27531 = state_27407__$1;
(statearr_27465_27531[(1)] = (16));

} else {
var statearr_27466_27532 = state_27407__$1;
(statearr_27466_27532[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (9))){
var inst_27336 = (state_27407[(2)]);
var state_27407__$1 = state_27407;
var statearr_27467_27533 = state_27407__$1;
(statearr_27467_27533[(2)] = inst_27336);

(statearr_27467_27533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (5))){
var inst_27286 = cljs.core.deref.call(null,cs);
var inst_27287 = cljs.core.seq.call(null,inst_27286);
var inst_27288 = inst_27287;
var inst_27289 = null;
var inst_27290 = (0);
var inst_27291 = (0);
var state_27407__$1 = (function (){var statearr_27468 = state_27407;
(statearr_27468[(14)] = inst_27291);

(statearr_27468[(15)] = inst_27288);

(statearr_27468[(16)] = inst_27290);

(statearr_27468[(17)] = inst_27289);

return statearr_27468;
})();
var statearr_27469_27534 = state_27407__$1;
(statearr_27469_27534[(2)] = null);

(statearr_27469_27534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (14))){
var state_27407__$1 = state_27407;
var statearr_27470_27535 = state_27407__$1;
(statearr_27470_27535[(2)] = null);

(statearr_27470_27535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (45))){
var inst_27397 = (state_27407[(2)]);
var state_27407__$1 = state_27407;
var statearr_27471_27536 = state_27407__$1;
(statearr_27471_27536[(2)] = inst_27397);

(statearr_27471_27536[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (26))){
var inst_27339 = (state_27407[(29)]);
var inst_27393 = (state_27407[(2)]);
var inst_27394 = cljs.core.seq.call(null,inst_27339);
var state_27407__$1 = (function (){var statearr_27472 = state_27407;
(statearr_27472[(31)] = inst_27393);

return statearr_27472;
})();
if(inst_27394){
var statearr_27473_27537 = state_27407__$1;
(statearr_27473_27537[(1)] = (42));

} else {
var statearr_27474_27538 = state_27407__$1;
(statearr_27474_27538[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (16))){
var inst_27308 = (state_27407[(7)]);
var inst_27310 = cljs.core.chunked_seq_QMARK_.call(null,inst_27308);
var state_27407__$1 = state_27407;
if(inst_27310){
var statearr_27475_27539 = state_27407__$1;
(statearr_27475_27539[(1)] = (19));

} else {
var statearr_27476_27540 = state_27407__$1;
(statearr_27476_27540[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (38))){
var inst_27386 = (state_27407[(2)]);
var state_27407__$1 = state_27407;
var statearr_27477_27541 = state_27407__$1;
(statearr_27477_27541[(2)] = inst_27386);

(statearr_27477_27541[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (30))){
var state_27407__$1 = state_27407;
var statearr_27478_27542 = state_27407__$1;
(statearr_27478_27542[(2)] = null);

(statearr_27478_27542[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (10))){
var inst_27291 = (state_27407[(14)]);
var inst_27289 = (state_27407[(17)]);
var inst_27297 = cljs.core._nth.call(null,inst_27289,inst_27291);
var inst_27298 = cljs.core.nth.call(null,inst_27297,(0),null);
var inst_27299 = cljs.core.nth.call(null,inst_27297,(1),null);
var state_27407__$1 = (function (){var statearr_27479 = state_27407;
(statearr_27479[(26)] = inst_27298);

return statearr_27479;
})();
if(cljs.core.truth_(inst_27299)){
var statearr_27480_27543 = state_27407__$1;
(statearr_27480_27543[(1)] = (13));

} else {
var statearr_27481_27544 = state_27407__$1;
(statearr_27481_27544[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (18))){
var inst_27332 = (state_27407[(2)]);
var state_27407__$1 = state_27407;
var statearr_27482_27545 = state_27407__$1;
(statearr_27482_27545[(2)] = inst_27332);

(statearr_27482_27545[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (42))){
var state_27407__$1 = state_27407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27407__$1,(45),dchan);
} else {
if((state_val_27408 === (37))){
var inst_27375 = (state_27407[(23)]);
var inst_27366 = (state_27407[(25)]);
var inst_27279 = (state_27407[(12)]);
var inst_27375__$1 = cljs.core.first.call(null,inst_27366);
var inst_27376 = cljs.core.async.put_BANG_.call(null,inst_27375__$1,inst_27279,done);
var state_27407__$1 = (function (){var statearr_27483 = state_27407;
(statearr_27483[(23)] = inst_27375__$1);

return statearr_27483;
})();
if(cljs.core.truth_(inst_27376)){
var statearr_27484_27546 = state_27407__$1;
(statearr_27484_27546[(1)] = (39));

} else {
var statearr_27485_27547 = state_27407__$1;
(statearr_27485_27547[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (8))){
var inst_27291 = (state_27407[(14)]);
var inst_27290 = (state_27407[(16)]);
var inst_27293 = (inst_27291 < inst_27290);
var inst_27294 = inst_27293;
var state_27407__$1 = state_27407;
if(cljs.core.truth_(inst_27294)){
var statearr_27486_27548 = state_27407__$1;
(statearr_27486_27548[(1)] = (10));

} else {
var statearr_27487_27549 = state_27407__$1;
(statearr_27487_27549[(1)] = (11));

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
});})(c__19619__auto___27495,cs,m,dchan,dctr,done))
;
return ((function (switch__19554__auto__,c__19619__auto___27495,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19555__auto__ = null;
var cljs$core$async$mult_$_state_machine__19555__auto____0 = (function (){
var statearr_27491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27491[(0)] = cljs$core$async$mult_$_state_machine__19555__auto__);

(statearr_27491[(1)] = (1));

return statearr_27491;
});
var cljs$core$async$mult_$_state_machine__19555__auto____1 = (function (state_27407){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_27407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e27492){if((e27492 instanceof Object)){
var ex__19558__auto__ = e27492;
var statearr_27493_27550 = state_27407;
(statearr_27493_27550[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27551 = state_27407;
state_27407 = G__27551;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19555__auto__ = function(state_27407){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19555__auto____1.call(this,state_27407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19555__auto____0;
cljs$core$async$mult_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19555__auto____1;
return cljs$core$async$mult_$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto___27495,cs,m,dchan,dctr,done))
})();
var state__19621__auto__ = (function (){var statearr_27494 = f__19620__auto__.call(null);
(statearr_27494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto___27495);

return statearr_27494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto___27495,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args27552 = [];
var len__17337__auto___27555 = arguments.length;
var i__17338__auto___27556 = (0);
while(true){
if((i__17338__auto___27556 < len__17337__auto___27555)){
args27552.push((arguments[i__17338__auto___27556]));

var G__27557 = (i__17338__auto___27556 + (1));
i__17338__auto___27556 = G__27557;
continue;
} else {
}
break;
}

var G__27554 = args27552.length;
switch (G__27554) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27552.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16934__auto__ = (((m == null))?null:m);
var m__16935__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,m,ch);
} else {
var m__16935__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16934__auto__ = (((m == null))?null:m);
var m__16935__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,m,ch);
} else {
var m__16935__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16934__auto__ = (((m == null))?null:m);
var m__16935__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,m);
} else {
var m__16935__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16934__auto__ = (((m == null))?null:m);
var m__16935__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,m,state_map);
} else {
var m__16935__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16934__auto__ = (((m == null))?null:m);
var m__16935__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,m,mode);
} else {
var m__16935__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17344__auto__ = [];
var len__17337__auto___27569 = arguments.length;
var i__17338__auto___27570 = (0);
while(true){
if((i__17338__auto___27570 < len__17337__auto___27569)){
args__17344__auto__.push((arguments[i__17338__auto___27570]));

var G__27571 = (i__17338__auto___27570 + (1));
i__17338__auto___27570 = G__27571;
continue;
} else {
}
break;
}

var argseq__17345__auto__ = ((((3) < args__17344__auto__.length))?(new cljs.core.IndexedSeq(args__17344__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17345__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27563){
var map__27564 = p__27563;
var map__27564__$1 = ((((!((map__27564 == null)))?((((map__27564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27564):map__27564);
var opts = map__27564__$1;
var statearr_27566_27572 = state;
(statearr_27566_27572[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__27564,map__27564__$1,opts){
return (function (val){
var statearr_27567_27573 = state;
(statearr_27567_27573[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27564,map__27564__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_27568_27574 = state;
(statearr_27568_27574[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27559){
var G__27560 = cljs.core.first.call(null,seq27559);
var seq27559__$1 = cljs.core.next.call(null,seq27559);
var G__27561 = cljs.core.first.call(null,seq27559__$1);
var seq27559__$2 = cljs.core.next.call(null,seq27559__$1);
var G__27562 = cljs.core.first.call(null,seq27559__$2);
var seq27559__$3 = cljs.core.next.call(null,seq27559__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27560,G__27561,G__27562,seq27559__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27738 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27738 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27739){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27739 = meta27739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27740,meta27739__$1){
var self__ = this;
var _27740__$1 = this;
return (new cljs.core.async.t_cljs$core$async27738(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27739__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27738.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27740){
var self__ = this;
var _27740__$1 = this;
return self__.meta27739;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27738.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27738.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27738.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async27738.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27738.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27738.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27738.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27738.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27738.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27739","meta27739",622984011,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27738.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27738";

cljs.core.async.t_cljs$core$async27738.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async27738");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27738 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27738(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27739){
return (new cljs.core.async.t_cljs$core$async27738(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27739));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27738(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19619__auto___27901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto___27901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto___27901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27838){
var state_val_27839 = (state_27838[(1)]);
if((state_val_27839 === (7))){
var inst_27756 = (state_27838[(2)]);
var state_27838__$1 = state_27838;
var statearr_27840_27902 = state_27838__$1;
(statearr_27840_27902[(2)] = inst_27756);

(statearr_27840_27902[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (20))){
var inst_27768 = (state_27838[(7)]);
var state_27838__$1 = state_27838;
var statearr_27841_27903 = state_27838__$1;
(statearr_27841_27903[(2)] = inst_27768);

(statearr_27841_27903[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (27))){
var state_27838__$1 = state_27838;
var statearr_27842_27904 = state_27838__$1;
(statearr_27842_27904[(2)] = null);

(statearr_27842_27904[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (1))){
var inst_27744 = (state_27838[(8)]);
var inst_27744__$1 = calc_state.call(null);
var inst_27746 = (inst_27744__$1 == null);
var inst_27747 = cljs.core.not.call(null,inst_27746);
var state_27838__$1 = (function (){var statearr_27843 = state_27838;
(statearr_27843[(8)] = inst_27744__$1);

return statearr_27843;
})();
if(inst_27747){
var statearr_27844_27905 = state_27838__$1;
(statearr_27844_27905[(1)] = (2));

} else {
var statearr_27845_27906 = state_27838__$1;
(statearr_27845_27906[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (24))){
var inst_27798 = (state_27838[(9)]);
var inst_27791 = (state_27838[(10)]);
var inst_27812 = (state_27838[(11)]);
var inst_27812__$1 = inst_27791.call(null,inst_27798);
var state_27838__$1 = (function (){var statearr_27846 = state_27838;
(statearr_27846[(11)] = inst_27812__$1);

return statearr_27846;
})();
if(cljs.core.truth_(inst_27812__$1)){
var statearr_27847_27907 = state_27838__$1;
(statearr_27847_27907[(1)] = (29));

} else {
var statearr_27848_27908 = state_27838__$1;
(statearr_27848_27908[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (4))){
var inst_27759 = (state_27838[(2)]);
var state_27838__$1 = state_27838;
if(cljs.core.truth_(inst_27759)){
var statearr_27849_27909 = state_27838__$1;
(statearr_27849_27909[(1)] = (8));

} else {
var statearr_27850_27910 = state_27838__$1;
(statearr_27850_27910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (15))){
var inst_27785 = (state_27838[(2)]);
var state_27838__$1 = state_27838;
if(cljs.core.truth_(inst_27785)){
var statearr_27851_27911 = state_27838__$1;
(statearr_27851_27911[(1)] = (19));

} else {
var statearr_27852_27912 = state_27838__$1;
(statearr_27852_27912[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (21))){
var inst_27790 = (state_27838[(12)]);
var inst_27790__$1 = (state_27838[(2)]);
var inst_27791 = cljs.core.get.call(null,inst_27790__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27792 = cljs.core.get.call(null,inst_27790__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27793 = cljs.core.get.call(null,inst_27790__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27838__$1 = (function (){var statearr_27853 = state_27838;
(statearr_27853[(13)] = inst_27792);

(statearr_27853[(10)] = inst_27791);

(statearr_27853[(12)] = inst_27790__$1);

return statearr_27853;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27838__$1,(22),inst_27793);
} else {
if((state_val_27839 === (31))){
var inst_27820 = (state_27838[(2)]);
var state_27838__$1 = state_27838;
if(cljs.core.truth_(inst_27820)){
var statearr_27854_27913 = state_27838__$1;
(statearr_27854_27913[(1)] = (32));

} else {
var statearr_27855_27914 = state_27838__$1;
(statearr_27855_27914[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (32))){
var inst_27797 = (state_27838[(14)]);
var state_27838__$1 = state_27838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27838__$1,(35),out,inst_27797);
} else {
if((state_val_27839 === (33))){
var inst_27790 = (state_27838[(12)]);
var inst_27768 = inst_27790;
var state_27838__$1 = (function (){var statearr_27856 = state_27838;
(statearr_27856[(7)] = inst_27768);

return statearr_27856;
})();
var statearr_27857_27915 = state_27838__$1;
(statearr_27857_27915[(2)] = null);

(statearr_27857_27915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (13))){
var inst_27768 = (state_27838[(7)]);
var inst_27775 = inst_27768.cljs$lang$protocol_mask$partition0$;
var inst_27776 = (inst_27775 & (64));
var inst_27777 = inst_27768.cljs$core$ISeq$;
var inst_27778 = (inst_27776) || (inst_27777);
var state_27838__$1 = state_27838;
if(cljs.core.truth_(inst_27778)){
var statearr_27858_27916 = state_27838__$1;
(statearr_27858_27916[(1)] = (16));

} else {
var statearr_27859_27917 = state_27838__$1;
(statearr_27859_27917[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (22))){
var inst_27797 = (state_27838[(14)]);
var inst_27798 = (state_27838[(9)]);
var inst_27796 = (state_27838[(2)]);
var inst_27797__$1 = cljs.core.nth.call(null,inst_27796,(0),null);
var inst_27798__$1 = cljs.core.nth.call(null,inst_27796,(1),null);
var inst_27799 = (inst_27797__$1 == null);
var inst_27800 = cljs.core._EQ_.call(null,inst_27798__$1,change);
var inst_27801 = (inst_27799) || (inst_27800);
var state_27838__$1 = (function (){var statearr_27860 = state_27838;
(statearr_27860[(14)] = inst_27797__$1);

(statearr_27860[(9)] = inst_27798__$1);

return statearr_27860;
})();
if(cljs.core.truth_(inst_27801)){
var statearr_27861_27918 = state_27838__$1;
(statearr_27861_27918[(1)] = (23));

} else {
var statearr_27862_27919 = state_27838__$1;
(statearr_27862_27919[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (36))){
var inst_27790 = (state_27838[(12)]);
var inst_27768 = inst_27790;
var state_27838__$1 = (function (){var statearr_27863 = state_27838;
(statearr_27863[(7)] = inst_27768);

return statearr_27863;
})();
var statearr_27864_27920 = state_27838__$1;
(statearr_27864_27920[(2)] = null);

(statearr_27864_27920[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (29))){
var inst_27812 = (state_27838[(11)]);
var state_27838__$1 = state_27838;
var statearr_27865_27921 = state_27838__$1;
(statearr_27865_27921[(2)] = inst_27812);

(statearr_27865_27921[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (6))){
var state_27838__$1 = state_27838;
var statearr_27866_27922 = state_27838__$1;
(statearr_27866_27922[(2)] = false);

(statearr_27866_27922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (28))){
var inst_27808 = (state_27838[(2)]);
var inst_27809 = calc_state.call(null);
var inst_27768 = inst_27809;
var state_27838__$1 = (function (){var statearr_27867 = state_27838;
(statearr_27867[(7)] = inst_27768);

(statearr_27867[(15)] = inst_27808);

return statearr_27867;
})();
var statearr_27868_27923 = state_27838__$1;
(statearr_27868_27923[(2)] = null);

(statearr_27868_27923[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (25))){
var inst_27834 = (state_27838[(2)]);
var state_27838__$1 = state_27838;
var statearr_27869_27924 = state_27838__$1;
(statearr_27869_27924[(2)] = inst_27834);

(statearr_27869_27924[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (34))){
var inst_27832 = (state_27838[(2)]);
var state_27838__$1 = state_27838;
var statearr_27870_27925 = state_27838__$1;
(statearr_27870_27925[(2)] = inst_27832);

(statearr_27870_27925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (17))){
var state_27838__$1 = state_27838;
var statearr_27871_27926 = state_27838__$1;
(statearr_27871_27926[(2)] = false);

(statearr_27871_27926[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (3))){
var state_27838__$1 = state_27838;
var statearr_27872_27927 = state_27838__$1;
(statearr_27872_27927[(2)] = false);

(statearr_27872_27927[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (12))){
var inst_27836 = (state_27838[(2)]);
var state_27838__$1 = state_27838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27838__$1,inst_27836);
} else {
if((state_val_27839 === (2))){
var inst_27744 = (state_27838[(8)]);
var inst_27749 = inst_27744.cljs$lang$protocol_mask$partition0$;
var inst_27750 = (inst_27749 & (64));
var inst_27751 = inst_27744.cljs$core$ISeq$;
var inst_27752 = (inst_27750) || (inst_27751);
var state_27838__$1 = state_27838;
if(cljs.core.truth_(inst_27752)){
var statearr_27873_27928 = state_27838__$1;
(statearr_27873_27928[(1)] = (5));

} else {
var statearr_27874_27929 = state_27838__$1;
(statearr_27874_27929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (23))){
var inst_27797 = (state_27838[(14)]);
var inst_27803 = (inst_27797 == null);
var state_27838__$1 = state_27838;
if(cljs.core.truth_(inst_27803)){
var statearr_27875_27930 = state_27838__$1;
(statearr_27875_27930[(1)] = (26));

} else {
var statearr_27876_27931 = state_27838__$1;
(statearr_27876_27931[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (35))){
var inst_27823 = (state_27838[(2)]);
var state_27838__$1 = state_27838;
if(cljs.core.truth_(inst_27823)){
var statearr_27877_27932 = state_27838__$1;
(statearr_27877_27932[(1)] = (36));

} else {
var statearr_27878_27933 = state_27838__$1;
(statearr_27878_27933[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (19))){
var inst_27768 = (state_27838[(7)]);
var inst_27787 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27768);
var state_27838__$1 = state_27838;
var statearr_27879_27934 = state_27838__$1;
(statearr_27879_27934[(2)] = inst_27787);

(statearr_27879_27934[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (11))){
var inst_27768 = (state_27838[(7)]);
var inst_27772 = (inst_27768 == null);
var inst_27773 = cljs.core.not.call(null,inst_27772);
var state_27838__$1 = state_27838;
if(inst_27773){
var statearr_27880_27935 = state_27838__$1;
(statearr_27880_27935[(1)] = (13));

} else {
var statearr_27881_27936 = state_27838__$1;
(statearr_27881_27936[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (9))){
var inst_27744 = (state_27838[(8)]);
var state_27838__$1 = state_27838;
var statearr_27882_27937 = state_27838__$1;
(statearr_27882_27937[(2)] = inst_27744);

(statearr_27882_27937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (5))){
var state_27838__$1 = state_27838;
var statearr_27883_27938 = state_27838__$1;
(statearr_27883_27938[(2)] = true);

(statearr_27883_27938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (14))){
var state_27838__$1 = state_27838;
var statearr_27884_27939 = state_27838__$1;
(statearr_27884_27939[(2)] = false);

(statearr_27884_27939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (26))){
var inst_27798 = (state_27838[(9)]);
var inst_27805 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27798);
var state_27838__$1 = state_27838;
var statearr_27885_27940 = state_27838__$1;
(statearr_27885_27940[(2)] = inst_27805);

(statearr_27885_27940[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (16))){
var state_27838__$1 = state_27838;
var statearr_27886_27941 = state_27838__$1;
(statearr_27886_27941[(2)] = true);

(statearr_27886_27941[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (38))){
var inst_27828 = (state_27838[(2)]);
var state_27838__$1 = state_27838;
var statearr_27887_27942 = state_27838__$1;
(statearr_27887_27942[(2)] = inst_27828);

(statearr_27887_27942[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (30))){
var inst_27792 = (state_27838[(13)]);
var inst_27798 = (state_27838[(9)]);
var inst_27791 = (state_27838[(10)]);
var inst_27815 = cljs.core.empty_QMARK_.call(null,inst_27791);
var inst_27816 = inst_27792.call(null,inst_27798);
var inst_27817 = cljs.core.not.call(null,inst_27816);
var inst_27818 = (inst_27815) && (inst_27817);
var state_27838__$1 = state_27838;
var statearr_27888_27943 = state_27838__$1;
(statearr_27888_27943[(2)] = inst_27818);

(statearr_27888_27943[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (10))){
var inst_27744 = (state_27838[(8)]);
var inst_27764 = (state_27838[(2)]);
var inst_27765 = cljs.core.get.call(null,inst_27764,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27766 = cljs.core.get.call(null,inst_27764,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27767 = cljs.core.get.call(null,inst_27764,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27768 = inst_27744;
var state_27838__$1 = (function (){var statearr_27889 = state_27838;
(statearr_27889[(16)] = inst_27767);

(statearr_27889[(7)] = inst_27768);

(statearr_27889[(17)] = inst_27765);

(statearr_27889[(18)] = inst_27766);

return statearr_27889;
})();
var statearr_27890_27944 = state_27838__$1;
(statearr_27890_27944[(2)] = null);

(statearr_27890_27944[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (18))){
var inst_27782 = (state_27838[(2)]);
var state_27838__$1 = state_27838;
var statearr_27891_27945 = state_27838__$1;
(statearr_27891_27945[(2)] = inst_27782);

(statearr_27891_27945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (37))){
var state_27838__$1 = state_27838;
var statearr_27892_27946 = state_27838__$1;
(statearr_27892_27946[(2)] = null);

(statearr_27892_27946[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27839 === (8))){
var inst_27744 = (state_27838[(8)]);
var inst_27761 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27744);
var state_27838__$1 = state_27838;
var statearr_27893_27947 = state_27838__$1;
(statearr_27893_27947[(2)] = inst_27761);

(statearr_27893_27947[(1)] = (10));


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
});})(c__19619__auto___27901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19554__auto__,c__19619__auto___27901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19555__auto__ = null;
var cljs$core$async$mix_$_state_machine__19555__auto____0 = (function (){
var statearr_27897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27897[(0)] = cljs$core$async$mix_$_state_machine__19555__auto__);

(statearr_27897[(1)] = (1));

return statearr_27897;
});
var cljs$core$async$mix_$_state_machine__19555__auto____1 = (function (state_27838){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_27838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e27898){if((e27898 instanceof Object)){
var ex__19558__auto__ = e27898;
var statearr_27899_27948 = state_27838;
(statearr_27899_27948[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27949 = state_27838;
state_27838 = G__27949;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19555__auto__ = function(state_27838){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19555__auto____1.call(this,state_27838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19555__auto____0;
cljs$core$async$mix_$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19555__auto____1;
return cljs$core$async$mix_$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto___27901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19621__auto__ = (function (){var statearr_27900 = f__19620__auto__.call(null);
(statearr_27900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto___27901);

return statearr_27900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto___27901,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16934__auto__ = (((p == null))?null:p);
var m__16935__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__16935__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16934__auto__ = (((p == null))?null:p);
var m__16935__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,p,v,ch);
} else {
var m__16935__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args27950 = [];
var len__17337__auto___27953 = arguments.length;
var i__17338__auto___27954 = (0);
while(true){
if((i__17338__auto___27954 < len__17337__auto___27953)){
args27950.push((arguments[i__17338__auto___27954]));

var G__27955 = (i__17338__auto___27954 + (1));
i__17338__auto___27954 = G__27955;
continue;
} else {
}
break;
}

var G__27952 = args27950.length;
switch (G__27952) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27950.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16934__auto__ = (((p == null))?null:p);
var m__16935__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,p);
} else {
var m__16935__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16934__auto__ = (((p == null))?null:p);
var m__16935__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16934__auto__)]);
if(!((m__16935__auto__ == null))){
return m__16935__auto__.call(null,p,v);
} else {
var m__16935__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16935__auto____$1 == null))){
return m__16935__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args27958 = [];
var len__17337__auto___28083 = arguments.length;
var i__17338__auto___28084 = (0);
while(true){
if((i__17338__auto___28084 < len__17337__auto___28083)){
args27958.push((arguments[i__17338__auto___28084]));

var G__28085 = (i__17338__auto___28084 + (1));
i__17338__auto___28084 = G__28085;
continue;
} else {
}
break;
}

var G__27960 = args27958.length;
switch (G__27960) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27958.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16279__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16279__auto__)){
return or__16279__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16279__auto__,mults){
return (function (p1__27957_SHARP_){
if(cljs.core.truth_(p1__27957_SHARP_.call(null,topic))){
return p1__27957_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27957_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16279__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27961 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27961 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27962){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27962 = meta27962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27963,meta27962__$1){
var self__ = this;
var _27963__$1 = this;
return (new cljs.core.async.t_cljs$core$async27961(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27962__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27961.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27963){
var self__ = this;
var _27963__$1 = this;
return self__.meta27962;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27961.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27961.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27961.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async27961.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27961.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27961.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27961.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27961.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27962","meta27962",-1929110701,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27961.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27961";

cljs.core.async.t_cljs$core$async27961.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async27961");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async27961 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27961(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27962){
return (new cljs.core.async.t_cljs$core$async27961(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27962));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27961(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19619__auto___28087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto___28087,mults,ensure_mult,p){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto___28087,mults,ensure_mult,p){
return (function (state_28035){
var state_val_28036 = (state_28035[(1)]);
if((state_val_28036 === (7))){
var inst_28031 = (state_28035[(2)]);
var state_28035__$1 = state_28035;
var statearr_28037_28088 = state_28035__$1;
(statearr_28037_28088[(2)] = inst_28031);

(statearr_28037_28088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (20))){
var state_28035__$1 = state_28035;
var statearr_28038_28089 = state_28035__$1;
(statearr_28038_28089[(2)] = null);

(statearr_28038_28089[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (1))){
var state_28035__$1 = state_28035;
var statearr_28039_28090 = state_28035__$1;
(statearr_28039_28090[(2)] = null);

(statearr_28039_28090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (24))){
var inst_28014 = (state_28035[(7)]);
var inst_28023 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28014);
var state_28035__$1 = state_28035;
var statearr_28040_28091 = state_28035__$1;
(statearr_28040_28091[(2)] = inst_28023);

(statearr_28040_28091[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (4))){
var inst_27966 = (state_28035[(8)]);
var inst_27966__$1 = (state_28035[(2)]);
var inst_27967 = (inst_27966__$1 == null);
var state_28035__$1 = (function (){var statearr_28041 = state_28035;
(statearr_28041[(8)] = inst_27966__$1);

return statearr_28041;
})();
if(cljs.core.truth_(inst_27967)){
var statearr_28042_28092 = state_28035__$1;
(statearr_28042_28092[(1)] = (5));

} else {
var statearr_28043_28093 = state_28035__$1;
(statearr_28043_28093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (15))){
var inst_28008 = (state_28035[(2)]);
var state_28035__$1 = state_28035;
var statearr_28044_28094 = state_28035__$1;
(statearr_28044_28094[(2)] = inst_28008);

(statearr_28044_28094[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (21))){
var inst_28028 = (state_28035[(2)]);
var state_28035__$1 = (function (){var statearr_28045 = state_28035;
(statearr_28045[(9)] = inst_28028);

return statearr_28045;
})();
var statearr_28046_28095 = state_28035__$1;
(statearr_28046_28095[(2)] = null);

(statearr_28046_28095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (13))){
var inst_27990 = (state_28035[(10)]);
var inst_27992 = cljs.core.chunked_seq_QMARK_.call(null,inst_27990);
var state_28035__$1 = state_28035;
if(inst_27992){
var statearr_28047_28096 = state_28035__$1;
(statearr_28047_28096[(1)] = (16));

} else {
var statearr_28048_28097 = state_28035__$1;
(statearr_28048_28097[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (22))){
var inst_28020 = (state_28035[(2)]);
var state_28035__$1 = state_28035;
if(cljs.core.truth_(inst_28020)){
var statearr_28049_28098 = state_28035__$1;
(statearr_28049_28098[(1)] = (23));

} else {
var statearr_28050_28099 = state_28035__$1;
(statearr_28050_28099[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (6))){
var inst_27966 = (state_28035[(8)]);
var inst_28014 = (state_28035[(7)]);
var inst_28016 = (state_28035[(11)]);
var inst_28014__$1 = topic_fn.call(null,inst_27966);
var inst_28015 = cljs.core.deref.call(null,mults);
var inst_28016__$1 = cljs.core.get.call(null,inst_28015,inst_28014__$1);
var state_28035__$1 = (function (){var statearr_28051 = state_28035;
(statearr_28051[(7)] = inst_28014__$1);

(statearr_28051[(11)] = inst_28016__$1);

return statearr_28051;
})();
if(cljs.core.truth_(inst_28016__$1)){
var statearr_28052_28100 = state_28035__$1;
(statearr_28052_28100[(1)] = (19));

} else {
var statearr_28053_28101 = state_28035__$1;
(statearr_28053_28101[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (25))){
var inst_28025 = (state_28035[(2)]);
var state_28035__$1 = state_28035;
var statearr_28054_28102 = state_28035__$1;
(statearr_28054_28102[(2)] = inst_28025);

(statearr_28054_28102[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (17))){
var inst_27990 = (state_28035[(10)]);
var inst_27999 = cljs.core.first.call(null,inst_27990);
var inst_28000 = cljs.core.async.muxch_STAR_.call(null,inst_27999);
var inst_28001 = cljs.core.async.close_BANG_.call(null,inst_28000);
var inst_28002 = cljs.core.next.call(null,inst_27990);
var inst_27976 = inst_28002;
var inst_27977 = null;
var inst_27978 = (0);
var inst_27979 = (0);
var state_28035__$1 = (function (){var statearr_28055 = state_28035;
(statearr_28055[(12)] = inst_27978);

(statearr_28055[(13)] = inst_27976);

(statearr_28055[(14)] = inst_27979);

(statearr_28055[(15)] = inst_27977);

(statearr_28055[(16)] = inst_28001);

return statearr_28055;
})();
var statearr_28056_28103 = state_28035__$1;
(statearr_28056_28103[(2)] = null);

(statearr_28056_28103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (3))){
var inst_28033 = (state_28035[(2)]);
var state_28035__$1 = state_28035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28035__$1,inst_28033);
} else {
if((state_val_28036 === (12))){
var inst_28010 = (state_28035[(2)]);
var state_28035__$1 = state_28035;
var statearr_28057_28104 = state_28035__$1;
(statearr_28057_28104[(2)] = inst_28010);

(statearr_28057_28104[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (2))){
var state_28035__$1 = state_28035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28035__$1,(4),ch);
} else {
if((state_val_28036 === (23))){
var state_28035__$1 = state_28035;
var statearr_28058_28105 = state_28035__$1;
(statearr_28058_28105[(2)] = null);

(statearr_28058_28105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (19))){
var inst_27966 = (state_28035[(8)]);
var inst_28016 = (state_28035[(11)]);
var inst_28018 = cljs.core.async.muxch_STAR_.call(null,inst_28016);
var state_28035__$1 = state_28035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28035__$1,(22),inst_28018,inst_27966);
} else {
if((state_val_28036 === (11))){
var inst_27990 = (state_28035[(10)]);
var inst_27976 = (state_28035[(13)]);
var inst_27990__$1 = cljs.core.seq.call(null,inst_27976);
var state_28035__$1 = (function (){var statearr_28059 = state_28035;
(statearr_28059[(10)] = inst_27990__$1);

return statearr_28059;
})();
if(inst_27990__$1){
var statearr_28060_28106 = state_28035__$1;
(statearr_28060_28106[(1)] = (13));

} else {
var statearr_28061_28107 = state_28035__$1;
(statearr_28061_28107[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (9))){
var inst_28012 = (state_28035[(2)]);
var state_28035__$1 = state_28035;
var statearr_28062_28108 = state_28035__$1;
(statearr_28062_28108[(2)] = inst_28012);

(statearr_28062_28108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (5))){
var inst_27973 = cljs.core.deref.call(null,mults);
var inst_27974 = cljs.core.vals.call(null,inst_27973);
var inst_27975 = cljs.core.seq.call(null,inst_27974);
var inst_27976 = inst_27975;
var inst_27977 = null;
var inst_27978 = (0);
var inst_27979 = (0);
var state_28035__$1 = (function (){var statearr_28063 = state_28035;
(statearr_28063[(12)] = inst_27978);

(statearr_28063[(13)] = inst_27976);

(statearr_28063[(14)] = inst_27979);

(statearr_28063[(15)] = inst_27977);

return statearr_28063;
})();
var statearr_28064_28109 = state_28035__$1;
(statearr_28064_28109[(2)] = null);

(statearr_28064_28109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (14))){
var state_28035__$1 = state_28035;
var statearr_28068_28110 = state_28035__$1;
(statearr_28068_28110[(2)] = null);

(statearr_28068_28110[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (16))){
var inst_27990 = (state_28035[(10)]);
var inst_27994 = cljs.core.chunk_first.call(null,inst_27990);
var inst_27995 = cljs.core.chunk_rest.call(null,inst_27990);
var inst_27996 = cljs.core.count.call(null,inst_27994);
var inst_27976 = inst_27995;
var inst_27977 = inst_27994;
var inst_27978 = inst_27996;
var inst_27979 = (0);
var state_28035__$1 = (function (){var statearr_28069 = state_28035;
(statearr_28069[(12)] = inst_27978);

(statearr_28069[(13)] = inst_27976);

(statearr_28069[(14)] = inst_27979);

(statearr_28069[(15)] = inst_27977);

return statearr_28069;
})();
var statearr_28070_28111 = state_28035__$1;
(statearr_28070_28111[(2)] = null);

(statearr_28070_28111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (10))){
var inst_27978 = (state_28035[(12)]);
var inst_27976 = (state_28035[(13)]);
var inst_27979 = (state_28035[(14)]);
var inst_27977 = (state_28035[(15)]);
var inst_27984 = cljs.core._nth.call(null,inst_27977,inst_27979);
var inst_27985 = cljs.core.async.muxch_STAR_.call(null,inst_27984);
var inst_27986 = cljs.core.async.close_BANG_.call(null,inst_27985);
var inst_27987 = (inst_27979 + (1));
var tmp28065 = inst_27978;
var tmp28066 = inst_27976;
var tmp28067 = inst_27977;
var inst_27976__$1 = tmp28066;
var inst_27977__$1 = tmp28067;
var inst_27978__$1 = tmp28065;
var inst_27979__$1 = inst_27987;
var state_28035__$1 = (function (){var statearr_28071 = state_28035;
(statearr_28071[(12)] = inst_27978__$1);

(statearr_28071[(13)] = inst_27976__$1);

(statearr_28071[(14)] = inst_27979__$1);

(statearr_28071[(17)] = inst_27986);

(statearr_28071[(15)] = inst_27977__$1);

return statearr_28071;
})();
var statearr_28072_28112 = state_28035__$1;
(statearr_28072_28112[(2)] = null);

(statearr_28072_28112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (18))){
var inst_28005 = (state_28035[(2)]);
var state_28035__$1 = state_28035;
var statearr_28073_28113 = state_28035__$1;
(statearr_28073_28113[(2)] = inst_28005);

(statearr_28073_28113[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28036 === (8))){
var inst_27978 = (state_28035[(12)]);
var inst_27979 = (state_28035[(14)]);
var inst_27981 = (inst_27979 < inst_27978);
var inst_27982 = inst_27981;
var state_28035__$1 = state_28035;
if(cljs.core.truth_(inst_27982)){
var statearr_28074_28114 = state_28035__$1;
(statearr_28074_28114[(1)] = (10));

} else {
var statearr_28075_28115 = state_28035__$1;
(statearr_28075_28115[(1)] = (11));

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
});})(c__19619__auto___28087,mults,ensure_mult,p))
;
return ((function (switch__19554__auto__,c__19619__auto___28087,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19555__auto__ = null;
var cljs$core$async$state_machine__19555__auto____0 = (function (){
var statearr_28079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28079[(0)] = cljs$core$async$state_machine__19555__auto__);

(statearr_28079[(1)] = (1));

return statearr_28079;
});
var cljs$core$async$state_machine__19555__auto____1 = (function (state_28035){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_28035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e28080){if((e28080 instanceof Object)){
var ex__19558__auto__ = e28080;
var statearr_28081_28116 = state_28035;
(statearr_28081_28116[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28117 = state_28035;
state_28035 = G__28117;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$state_machine__19555__auto__ = function(state_28035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19555__auto____1.call(this,state_28035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19555__auto____0;
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19555__auto____1;
return cljs$core$async$state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto___28087,mults,ensure_mult,p))
})();
var state__19621__auto__ = (function (){var statearr_28082 = f__19620__auto__.call(null);
(statearr_28082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto___28087);

return statearr_28082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto___28087,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args28118 = [];
var len__17337__auto___28121 = arguments.length;
var i__17338__auto___28122 = (0);
while(true){
if((i__17338__auto___28122 < len__17337__auto___28121)){
args28118.push((arguments[i__17338__auto___28122]));

var G__28123 = (i__17338__auto___28122 + (1));
i__17338__auto___28122 = G__28123;
continue;
} else {
}
break;
}

var G__28120 = args28118.length;
switch (G__28120) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28118.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args28125 = [];
var len__17337__auto___28128 = arguments.length;
var i__17338__auto___28129 = (0);
while(true){
if((i__17338__auto___28129 < len__17337__auto___28128)){
args28125.push((arguments[i__17338__auto___28129]));

var G__28130 = (i__17338__auto___28129 + (1));
i__17338__auto___28129 = G__28130;
continue;
} else {
}
break;
}

var G__28127 = args28125.length;
switch (G__28127) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28125.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args28132 = [];
var len__17337__auto___28203 = arguments.length;
var i__17338__auto___28204 = (0);
while(true){
if((i__17338__auto___28204 < len__17337__auto___28203)){
args28132.push((arguments[i__17338__auto___28204]));

var G__28205 = (i__17338__auto___28204 + (1));
i__17338__auto___28204 = G__28205;
continue;
} else {
}
break;
}

var G__28134 = args28132.length;
switch (G__28134) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28132.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19619__auto___28207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto___28207,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto___28207,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28173){
var state_val_28174 = (state_28173[(1)]);
if((state_val_28174 === (7))){
var state_28173__$1 = state_28173;
var statearr_28175_28208 = state_28173__$1;
(statearr_28175_28208[(2)] = null);

(statearr_28175_28208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (1))){
var state_28173__$1 = state_28173;
var statearr_28176_28209 = state_28173__$1;
(statearr_28176_28209[(2)] = null);

(statearr_28176_28209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (4))){
var inst_28137 = (state_28173[(7)]);
var inst_28139 = (inst_28137 < cnt);
var state_28173__$1 = state_28173;
if(cljs.core.truth_(inst_28139)){
var statearr_28177_28210 = state_28173__$1;
(statearr_28177_28210[(1)] = (6));

} else {
var statearr_28178_28211 = state_28173__$1;
(statearr_28178_28211[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (15))){
var inst_28169 = (state_28173[(2)]);
var state_28173__$1 = state_28173;
var statearr_28179_28212 = state_28173__$1;
(statearr_28179_28212[(2)] = inst_28169);

(statearr_28179_28212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (13))){
var inst_28162 = cljs.core.async.close_BANG_.call(null,out);
var state_28173__$1 = state_28173;
var statearr_28180_28213 = state_28173__$1;
(statearr_28180_28213[(2)] = inst_28162);

(statearr_28180_28213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (6))){
var state_28173__$1 = state_28173;
var statearr_28181_28214 = state_28173__$1;
(statearr_28181_28214[(2)] = null);

(statearr_28181_28214[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (3))){
var inst_28171 = (state_28173[(2)]);
var state_28173__$1 = state_28173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28173__$1,inst_28171);
} else {
if((state_val_28174 === (12))){
var inst_28159 = (state_28173[(8)]);
var inst_28159__$1 = (state_28173[(2)]);
var inst_28160 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28159__$1);
var state_28173__$1 = (function (){var statearr_28182 = state_28173;
(statearr_28182[(8)] = inst_28159__$1);

return statearr_28182;
})();
if(cljs.core.truth_(inst_28160)){
var statearr_28183_28215 = state_28173__$1;
(statearr_28183_28215[(1)] = (13));

} else {
var statearr_28184_28216 = state_28173__$1;
(statearr_28184_28216[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (2))){
var inst_28136 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28137 = (0);
var state_28173__$1 = (function (){var statearr_28185 = state_28173;
(statearr_28185[(9)] = inst_28136);

(statearr_28185[(7)] = inst_28137);

return statearr_28185;
})();
var statearr_28186_28217 = state_28173__$1;
(statearr_28186_28217[(2)] = null);

(statearr_28186_28217[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (11))){
var inst_28137 = (state_28173[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28173,(10),Object,null,(9));
var inst_28146 = chs__$1.call(null,inst_28137);
var inst_28147 = done.call(null,inst_28137);
var inst_28148 = cljs.core.async.take_BANG_.call(null,inst_28146,inst_28147);
var state_28173__$1 = state_28173;
var statearr_28187_28218 = state_28173__$1;
(statearr_28187_28218[(2)] = inst_28148);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28173__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (9))){
var inst_28137 = (state_28173[(7)]);
var inst_28150 = (state_28173[(2)]);
var inst_28151 = (inst_28137 + (1));
var inst_28137__$1 = inst_28151;
var state_28173__$1 = (function (){var statearr_28188 = state_28173;
(statearr_28188[(10)] = inst_28150);

(statearr_28188[(7)] = inst_28137__$1);

return statearr_28188;
})();
var statearr_28189_28219 = state_28173__$1;
(statearr_28189_28219[(2)] = null);

(statearr_28189_28219[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (5))){
var inst_28157 = (state_28173[(2)]);
var state_28173__$1 = (function (){var statearr_28190 = state_28173;
(statearr_28190[(11)] = inst_28157);

return statearr_28190;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28173__$1,(12),dchan);
} else {
if((state_val_28174 === (14))){
var inst_28159 = (state_28173[(8)]);
var inst_28164 = cljs.core.apply.call(null,f,inst_28159);
var state_28173__$1 = state_28173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28173__$1,(16),out,inst_28164);
} else {
if((state_val_28174 === (16))){
var inst_28166 = (state_28173[(2)]);
var state_28173__$1 = (function (){var statearr_28191 = state_28173;
(statearr_28191[(12)] = inst_28166);

return statearr_28191;
})();
var statearr_28192_28220 = state_28173__$1;
(statearr_28192_28220[(2)] = null);

(statearr_28192_28220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (10))){
var inst_28141 = (state_28173[(2)]);
var inst_28142 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28173__$1 = (function (){var statearr_28193 = state_28173;
(statearr_28193[(13)] = inst_28141);

return statearr_28193;
})();
var statearr_28194_28221 = state_28173__$1;
(statearr_28194_28221[(2)] = inst_28142);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28173__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28174 === (8))){
var inst_28155 = (state_28173[(2)]);
var state_28173__$1 = state_28173;
var statearr_28195_28222 = state_28173__$1;
(statearr_28195_28222[(2)] = inst_28155);

(statearr_28195_28222[(1)] = (5));


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
});})(c__19619__auto___28207,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19554__auto__,c__19619__auto___28207,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19555__auto__ = null;
var cljs$core$async$state_machine__19555__auto____0 = (function (){
var statearr_28199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28199[(0)] = cljs$core$async$state_machine__19555__auto__);

(statearr_28199[(1)] = (1));

return statearr_28199;
});
var cljs$core$async$state_machine__19555__auto____1 = (function (state_28173){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_28173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e28200){if((e28200 instanceof Object)){
var ex__19558__auto__ = e28200;
var statearr_28201_28223 = state_28173;
(statearr_28201_28223[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28224 = state_28173;
state_28173 = G__28224;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$state_machine__19555__auto__ = function(state_28173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19555__auto____1.call(this,state_28173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19555__auto____0;
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19555__auto____1;
return cljs$core$async$state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto___28207,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19621__auto__ = (function (){var statearr_28202 = f__19620__auto__.call(null);
(statearr_28202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto___28207);

return statearr_28202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto___28207,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args28226 = [];
var len__17337__auto___28282 = arguments.length;
var i__17338__auto___28283 = (0);
while(true){
if((i__17338__auto___28283 < len__17337__auto___28282)){
args28226.push((arguments[i__17338__auto___28283]));

var G__28284 = (i__17338__auto___28283 + (1));
i__17338__auto___28283 = G__28284;
continue;
} else {
}
break;
}

var G__28228 = args28226.length;
switch (G__28228) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28226.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19619__auto___28286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto___28286,out){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto___28286,out){
return (function (state_28258){
var state_val_28259 = (state_28258[(1)]);
if((state_val_28259 === (7))){
var inst_28238 = (state_28258[(7)]);
var inst_28237 = (state_28258[(8)]);
var inst_28237__$1 = (state_28258[(2)]);
var inst_28238__$1 = cljs.core.nth.call(null,inst_28237__$1,(0),null);
var inst_28239 = cljs.core.nth.call(null,inst_28237__$1,(1),null);
var inst_28240 = (inst_28238__$1 == null);
var state_28258__$1 = (function (){var statearr_28260 = state_28258;
(statearr_28260[(7)] = inst_28238__$1);

(statearr_28260[(9)] = inst_28239);

(statearr_28260[(8)] = inst_28237__$1);

return statearr_28260;
})();
if(cljs.core.truth_(inst_28240)){
var statearr_28261_28287 = state_28258__$1;
(statearr_28261_28287[(1)] = (8));

} else {
var statearr_28262_28288 = state_28258__$1;
(statearr_28262_28288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (1))){
var inst_28229 = cljs.core.vec.call(null,chs);
var inst_28230 = inst_28229;
var state_28258__$1 = (function (){var statearr_28263 = state_28258;
(statearr_28263[(10)] = inst_28230);

return statearr_28263;
})();
var statearr_28264_28289 = state_28258__$1;
(statearr_28264_28289[(2)] = null);

(statearr_28264_28289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (4))){
var inst_28230 = (state_28258[(10)]);
var state_28258__$1 = state_28258;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28258__$1,(7),inst_28230);
} else {
if((state_val_28259 === (6))){
var inst_28254 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
var statearr_28265_28290 = state_28258__$1;
(statearr_28265_28290[(2)] = inst_28254);

(statearr_28265_28290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (3))){
var inst_28256 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28258__$1,inst_28256);
} else {
if((state_val_28259 === (2))){
var inst_28230 = (state_28258[(10)]);
var inst_28232 = cljs.core.count.call(null,inst_28230);
var inst_28233 = (inst_28232 > (0));
var state_28258__$1 = state_28258;
if(cljs.core.truth_(inst_28233)){
var statearr_28267_28291 = state_28258__$1;
(statearr_28267_28291[(1)] = (4));

} else {
var statearr_28268_28292 = state_28258__$1;
(statearr_28268_28292[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (11))){
var inst_28230 = (state_28258[(10)]);
var inst_28247 = (state_28258[(2)]);
var tmp28266 = inst_28230;
var inst_28230__$1 = tmp28266;
var state_28258__$1 = (function (){var statearr_28269 = state_28258;
(statearr_28269[(11)] = inst_28247);

(statearr_28269[(10)] = inst_28230__$1);

return statearr_28269;
})();
var statearr_28270_28293 = state_28258__$1;
(statearr_28270_28293[(2)] = null);

(statearr_28270_28293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (9))){
var inst_28238 = (state_28258[(7)]);
var state_28258__$1 = state_28258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28258__$1,(11),out,inst_28238);
} else {
if((state_val_28259 === (5))){
var inst_28252 = cljs.core.async.close_BANG_.call(null,out);
var state_28258__$1 = state_28258;
var statearr_28271_28294 = state_28258__$1;
(statearr_28271_28294[(2)] = inst_28252);

(statearr_28271_28294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (10))){
var inst_28250 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
var statearr_28272_28295 = state_28258__$1;
(statearr_28272_28295[(2)] = inst_28250);

(statearr_28272_28295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (8))){
var inst_28238 = (state_28258[(7)]);
var inst_28239 = (state_28258[(9)]);
var inst_28230 = (state_28258[(10)]);
var inst_28237 = (state_28258[(8)]);
var inst_28242 = (function (){var cs = inst_28230;
var vec__28235 = inst_28237;
var v = inst_28238;
var c = inst_28239;
return ((function (cs,vec__28235,v,c,inst_28238,inst_28239,inst_28230,inst_28237,state_val_28259,c__19619__auto___28286,out){
return (function (p1__28225_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28225_SHARP_);
});
;})(cs,vec__28235,v,c,inst_28238,inst_28239,inst_28230,inst_28237,state_val_28259,c__19619__auto___28286,out))
})();
var inst_28243 = cljs.core.filterv.call(null,inst_28242,inst_28230);
var inst_28230__$1 = inst_28243;
var state_28258__$1 = (function (){var statearr_28273 = state_28258;
(statearr_28273[(10)] = inst_28230__$1);

return statearr_28273;
})();
var statearr_28274_28296 = state_28258__$1;
(statearr_28274_28296[(2)] = null);

(statearr_28274_28296[(1)] = (2));


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
});})(c__19619__auto___28286,out))
;
return ((function (switch__19554__auto__,c__19619__auto___28286,out){
return (function() {
var cljs$core$async$state_machine__19555__auto__ = null;
var cljs$core$async$state_machine__19555__auto____0 = (function (){
var statearr_28278 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28278[(0)] = cljs$core$async$state_machine__19555__auto__);

(statearr_28278[(1)] = (1));

return statearr_28278;
});
var cljs$core$async$state_machine__19555__auto____1 = (function (state_28258){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_28258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e28279){if((e28279 instanceof Object)){
var ex__19558__auto__ = e28279;
var statearr_28280_28297 = state_28258;
(statearr_28280_28297[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28298 = state_28258;
state_28258 = G__28298;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$state_machine__19555__auto__ = function(state_28258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19555__auto____1.call(this,state_28258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19555__auto____0;
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19555__auto____1;
return cljs$core$async$state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto___28286,out))
})();
var state__19621__auto__ = (function (){var statearr_28281 = f__19620__auto__.call(null);
(statearr_28281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto___28286);

return statearr_28281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto___28286,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args28299 = [];
var len__17337__auto___28348 = arguments.length;
var i__17338__auto___28349 = (0);
while(true){
if((i__17338__auto___28349 < len__17337__auto___28348)){
args28299.push((arguments[i__17338__auto___28349]));

var G__28350 = (i__17338__auto___28349 + (1));
i__17338__auto___28349 = G__28350;
continue;
} else {
}
break;
}

var G__28301 = args28299.length;
switch (G__28301) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28299.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19619__auto___28352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto___28352,out){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto___28352,out){
return (function (state_28325){
var state_val_28326 = (state_28325[(1)]);
if((state_val_28326 === (7))){
var inst_28307 = (state_28325[(7)]);
var inst_28307__$1 = (state_28325[(2)]);
var inst_28308 = (inst_28307__$1 == null);
var inst_28309 = cljs.core.not.call(null,inst_28308);
var state_28325__$1 = (function (){var statearr_28327 = state_28325;
(statearr_28327[(7)] = inst_28307__$1);

return statearr_28327;
})();
if(inst_28309){
var statearr_28328_28353 = state_28325__$1;
(statearr_28328_28353[(1)] = (8));

} else {
var statearr_28329_28354 = state_28325__$1;
(statearr_28329_28354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28326 === (1))){
var inst_28302 = (0);
var state_28325__$1 = (function (){var statearr_28330 = state_28325;
(statearr_28330[(8)] = inst_28302);

return statearr_28330;
})();
var statearr_28331_28355 = state_28325__$1;
(statearr_28331_28355[(2)] = null);

(statearr_28331_28355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28326 === (4))){
var state_28325__$1 = state_28325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28325__$1,(7),ch);
} else {
if((state_val_28326 === (6))){
var inst_28320 = (state_28325[(2)]);
var state_28325__$1 = state_28325;
var statearr_28332_28356 = state_28325__$1;
(statearr_28332_28356[(2)] = inst_28320);

(statearr_28332_28356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28326 === (3))){
var inst_28322 = (state_28325[(2)]);
var inst_28323 = cljs.core.async.close_BANG_.call(null,out);
var state_28325__$1 = (function (){var statearr_28333 = state_28325;
(statearr_28333[(9)] = inst_28322);

return statearr_28333;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28325__$1,inst_28323);
} else {
if((state_val_28326 === (2))){
var inst_28302 = (state_28325[(8)]);
var inst_28304 = (inst_28302 < n);
var state_28325__$1 = state_28325;
if(cljs.core.truth_(inst_28304)){
var statearr_28334_28357 = state_28325__$1;
(statearr_28334_28357[(1)] = (4));

} else {
var statearr_28335_28358 = state_28325__$1;
(statearr_28335_28358[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28326 === (11))){
var inst_28302 = (state_28325[(8)]);
var inst_28312 = (state_28325[(2)]);
var inst_28313 = (inst_28302 + (1));
var inst_28302__$1 = inst_28313;
var state_28325__$1 = (function (){var statearr_28336 = state_28325;
(statearr_28336[(10)] = inst_28312);

(statearr_28336[(8)] = inst_28302__$1);

return statearr_28336;
})();
var statearr_28337_28359 = state_28325__$1;
(statearr_28337_28359[(2)] = null);

(statearr_28337_28359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28326 === (9))){
var state_28325__$1 = state_28325;
var statearr_28338_28360 = state_28325__$1;
(statearr_28338_28360[(2)] = null);

(statearr_28338_28360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28326 === (5))){
var state_28325__$1 = state_28325;
var statearr_28339_28361 = state_28325__$1;
(statearr_28339_28361[(2)] = null);

(statearr_28339_28361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28326 === (10))){
var inst_28317 = (state_28325[(2)]);
var state_28325__$1 = state_28325;
var statearr_28340_28362 = state_28325__$1;
(statearr_28340_28362[(2)] = inst_28317);

(statearr_28340_28362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28326 === (8))){
var inst_28307 = (state_28325[(7)]);
var state_28325__$1 = state_28325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28325__$1,(11),out,inst_28307);
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
});})(c__19619__auto___28352,out))
;
return ((function (switch__19554__auto__,c__19619__auto___28352,out){
return (function() {
var cljs$core$async$state_machine__19555__auto__ = null;
var cljs$core$async$state_machine__19555__auto____0 = (function (){
var statearr_28344 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28344[(0)] = cljs$core$async$state_machine__19555__auto__);

(statearr_28344[(1)] = (1));

return statearr_28344;
});
var cljs$core$async$state_machine__19555__auto____1 = (function (state_28325){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_28325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e28345){if((e28345 instanceof Object)){
var ex__19558__auto__ = e28345;
var statearr_28346_28363 = state_28325;
(statearr_28346_28363[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28364 = state_28325;
state_28325 = G__28364;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$state_machine__19555__auto__ = function(state_28325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19555__auto____1.call(this,state_28325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19555__auto____0;
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19555__auto____1;
return cljs$core$async$state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto___28352,out))
})();
var state__19621__auto__ = (function (){var statearr_28347 = f__19620__auto__.call(null);
(statearr_28347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto___28352);

return statearr_28347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto___28352,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28372 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28372 = (function (map_LT_,f,ch,meta28373){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28373 = meta28373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28374,meta28373__$1){
var self__ = this;
var _28374__$1 = this;
return (new cljs.core.async.t_cljs$core$async28372(self__.map_LT_,self__.f,self__.ch,meta28373__$1));
});

cljs.core.async.t_cljs$core$async28372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28374){
var self__ = this;
var _28374__$1 = this;
return self__.meta28373;
});

cljs.core.async.t_cljs$core$async28372.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28372.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28372.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28372.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28372.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28375 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28375 = (function (map_LT_,f,ch,meta28373,_,fn1,meta28376){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28373 = meta28373;
this._ = _;
this.fn1 = fn1;
this.meta28376 = meta28376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28377,meta28376__$1){
var self__ = this;
var _28377__$1 = this;
return (new cljs.core.async.t_cljs$core$async28375(self__.map_LT_,self__.f,self__.ch,self__.meta28373,self__._,self__.fn1,meta28376__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28375.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28377){
var self__ = this;
var _28377__$1 = this;
return self__.meta28376;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28375.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28375.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28375.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28365_SHARP_){
return f1.call(null,(((p1__28365_SHARP_ == null))?null:self__.f.call(null,p1__28365_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28375.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28373","meta28373",-1736802671,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28372","cljs.core.async/t_cljs$core$async28372",159154209,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28376","meta28376",-1670558404,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28375.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28375";

cljs.core.async.t_cljs$core$async28375.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async28375");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28375 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28375(map_LT___$1,f__$1,ch__$1,meta28373__$1,___$2,fn1__$1,meta28376){
return (new cljs.core.async.t_cljs$core$async28375(map_LT___$1,f__$1,ch__$1,meta28373__$1,___$2,fn1__$1,meta28376));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28375(self__.map_LT_,self__.f,self__.ch,self__.meta28373,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16267__auto__ = ret;
if(cljs.core.truth_(and__16267__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16267__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28372.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28372.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28373","meta28373",-1736802671,null)], null);
});

cljs.core.async.t_cljs$core$async28372.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28372";

cljs.core.async.t_cljs$core$async28372.cljs$lang$ctorPrWriter = (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async28372");
});

cljs.core.async.__GT_t_cljs$core$async28372 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28372(map_LT___$1,f__$1,ch__$1,meta28373){
return (new cljs.core.async.t_cljs$core$async28372(map_LT___$1,f__$1,ch__$1,meta28373));
});

}

return (new cljs.core.async.t_cljs$core$async28372(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28381 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28381 = (function (map_GT_,f,ch,meta28382){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28382 = meta28382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28383,meta28382__$1){
var self__ = this;
var _28383__$1 = this;
return (new cljs.core.async.t_cljs$core$async28381(self__.map_GT_,self__.f,self__.ch,meta28382__$1));
});

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28383){
var self__ = this;
var _28383__$1 = this;
return self__.meta28382;
});

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28381.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28382","meta28382",1002029291,null)], null);
});

cljs.core.async.t_cljs$core$async28381.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28381";

cljs.core.async.t_cljs$core$async28381.cljs$lang$ctorPrWriter = (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async28381");
});

cljs.core.async.__GT_t_cljs$core$async28381 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28381(map_GT___$1,f__$1,ch__$1,meta28382){
return (new cljs.core.async.t_cljs$core$async28381(map_GT___$1,f__$1,ch__$1,meta28382));
});

}

return (new cljs.core.async.t_cljs$core$async28381(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28387 = (function (filter_GT_,p,ch,meta28388){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28388 = meta28388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28389,meta28388__$1){
var self__ = this;
var _28389__$1 = this;
return (new cljs.core.async.t_cljs$core$async28387(self__.filter_GT_,self__.p,self__.ch,meta28388__$1));
});

cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28389){
var self__ = this;
var _28389__$1 = this;
return self__.meta28388;
});

cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28388","meta28388",-1052404652,null)], null);
});

cljs.core.async.t_cljs$core$async28387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28387";

cljs.core.async.t_cljs$core$async28387.cljs$lang$ctorPrWriter = (function (this__16877__auto__,writer__16878__auto__,opt__16879__auto__){
return cljs.core._write.call(null,writer__16878__auto__,"cljs.core.async/t_cljs$core$async28387");
});

cljs.core.async.__GT_t_cljs$core$async28387 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28387(filter_GT___$1,p__$1,ch__$1,meta28388){
return (new cljs.core.async.t_cljs$core$async28387(filter_GT___$1,p__$1,ch__$1,meta28388));
});

}

return (new cljs.core.async.t_cljs$core$async28387(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args28390 = [];
var len__17337__auto___28434 = arguments.length;
var i__17338__auto___28435 = (0);
while(true){
if((i__17338__auto___28435 < len__17337__auto___28434)){
args28390.push((arguments[i__17338__auto___28435]));

var G__28436 = (i__17338__auto___28435 + (1));
i__17338__auto___28435 = G__28436;
continue;
} else {
}
break;
}

var G__28392 = args28390.length;
switch (G__28392) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28390.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19619__auto___28438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto___28438,out){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto___28438,out){
return (function (state_28413){
var state_val_28414 = (state_28413[(1)]);
if((state_val_28414 === (7))){
var inst_28409 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
var statearr_28415_28439 = state_28413__$1;
(statearr_28415_28439[(2)] = inst_28409);

(statearr_28415_28439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (1))){
var state_28413__$1 = state_28413;
var statearr_28416_28440 = state_28413__$1;
(statearr_28416_28440[(2)] = null);

(statearr_28416_28440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (4))){
var inst_28395 = (state_28413[(7)]);
var inst_28395__$1 = (state_28413[(2)]);
var inst_28396 = (inst_28395__$1 == null);
var state_28413__$1 = (function (){var statearr_28417 = state_28413;
(statearr_28417[(7)] = inst_28395__$1);

return statearr_28417;
})();
if(cljs.core.truth_(inst_28396)){
var statearr_28418_28441 = state_28413__$1;
(statearr_28418_28441[(1)] = (5));

} else {
var statearr_28419_28442 = state_28413__$1;
(statearr_28419_28442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (6))){
var inst_28395 = (state_28413[(7)]);
var inst_28400 = p.call(null,inst_28395);
var state_28413__$1 = state_28413;
if(cljs.core.truth_(inst_28400)){
var statearr_28420_28443 = state_28413__$1;
(statearr_28420_28443[(1)] = (8));

} else {
var statearr_28421_28444 = state_28413__$1;
(statearr_28421_28444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (3))){
var inst_28411 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28413__$1,inst_28411);
} else {
if((state_val_28414 === (2))){
var state_28413__$1 = state_28413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28413__$1,(4),ch);
} else {
if((state_val_28414 === (11))){
var inst_28403 = (state_28413[(2)]);
var state_28413__$1 = state_28413;
var statearr_28422_28445 = state_28413__$1;
(statearr_28422_28445[(2)] = inst_28403);

(statearr_28422_28445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (9))){
var state_28413__$1 = state_28413;
var statearr_28423_28446 = state_28413__$1;
(statearr_28423_28446[(2)] = null);

(statearr_28423_28446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (5))){
var inst_28398 = cljs.core.async.close_BANG_.call(null,out);
var state_28413__$1 = state_28413;
var statearr_28424_28447 = state_28413__$1;
(statearr_28424_28447[(2)] = inst_28398);

(statearr_28424_28447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (10))){
var inst_28406 = (state_28413[(2)]);
var state_28413__$1 = (function (){var statearr_28425 = state_28413;
(statearr_28425[(8)] = inst_28406);

return statearr_28425;
})();
var statearr_28426_28448 = state_28413__$1;
(statearr_28426_28448[(2)] = null);

(statearr_28426_28448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28414 === (8))){
var inst_28395 = (state_28413[(7)]);
var state_28413__$1 = state_28413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28413__$1,(11),out,inst_28395);
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
});})(c__19619__auto___28438,out))
;
return ((function (switch__19554__auto__,c__19619__auto___28438,out){
return (function() {
var cljs$core$async$state_machine__19555__auto__ = null;
var cljs$core$async$state_machine__19555__auto____0 = (function (){
var statearr_28430 = [null,null,null,null,null,null,null,null,null];
(statearr_28430[(0)] = cljs$core$async$state_machine__19555__auto__);

(statearr_28430[(1)] = (1));

return statearr_28430;
});
var cljs$core$async$state_machine__19555__auto____1 = (function (state_28413){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_28413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e28431){if((e28431 instanceof Object)){
var ex__19558__auto__ = e28431;
var statearr_28432_28449 = state_28413;
(statearr_28432_28449[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28450 = state_28413;
state_28413 = G__28450;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$state_machine__19555__auto__ = function(state_28413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19555__auto____1.call(this,state_28413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19555__auto____0;
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19555__auto____1;
return cljs$core$async$state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto___28438,out))
})();
var state__19621__auto__ = (function (){var statearr_28433 = f__19620__auto__.call(null);
(statearr_28433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto___28438);

return statearr_28433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto___28438,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28451 = [];
var len__17337__auto___28454 = arguments.length;
var i__17338__auto___28455 = (0);
while(true){
if((i__17338__auto___28455 < len__17337__auto___28454)){
args28451.push((arguments[i__17338__auto___28455]));

var G__28456 = (i__17338__auto___28455 + (1));
i__17338__auto___28455 = G__28456;
continue;
} else {
}
break;
}

var G__28453 = args28451.length;
switch (G__28453) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28451.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto__){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto__){
return (function (state_28623){
var state_val_28624 = (state_28623[(1)]);
if((state_val_28624 === (7))){
var inst_28619 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28625_28666 = state_28623__$1;
(statearr_28625_28666[(2)] = inst_28619);

(statearr_28625_28666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (20))){
var inst_28589 = (state_28623[(7)]);
var inst_28600 = (state_28623[(2)]);
var inst_28601 = cljs.core.next.call(null,inst_28589);
var inst_28575 = inst_28601;
var inst_28576 = null;
var inst_28577 = (0);
var inst_28578 = (0);
var state_28623__$1 = (function (){var statearr_28626 = state_28623;
(statearr_28626[(8)] = inst_28576);

(statearr_28626[(9)] = inst_28600);

(statearr_28626[(10)] = inst_28578);

(statearr_28626[(11)] = inst_28577);

(statearr_28626[(12)] = inst_28575);

return statearr_28626;
})();
var statearr_28627_28667 = state_28623__$1;
(statearr_28627_28667[(2)] = null);

(statearr_28627_28667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (1))){
var state_28623__$1 = state_28623;
var statearr_28628_28668 = state_28623__$1;
(statearr_28628_28668[(2)] = null);

(statearr_28628_28668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (4))){
var inst_28564 = (state_28623[(13)]);
var inst_28564__$1 = (state_28623[(2)]);
var inst_28565 = (inst_28564__$1 == null);
var state_28623__$1 = (function (){var statearr_28629 = state_28623;
(statearr_28629[(13)] = inst_28564__$1);

return statearr_28629;
})();
if(cljs.core.truth_(inst_28565)){
var statearr_28630_28669 = state_28623__$1;
(statearr_28630_28669[(1)] = (5));

} else {
var statearr_28631_28670 = state_28623__$1;
(statearr_28631_28670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (15))){
var state_28623__$1 = state_28623;
var statearr_28635_28671 = state_28623__$1;
(statearr_28635_28671[(2)] = null);

(statearr_28635_28671[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (21))){
var state_28623__$1 = state_28623;
var statearr_28636_28672 = state_28623__$1;
(statearr_28636_28672[(2)] = null);

(statearr_28636_28672[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (13))){
var inst_28576 = (state_28623[(8)]);
var inst_28578 = (state_28623[(10)]);
var inst_28577 = (state_28623[(11)]);
var inst_28575 = (state_28623[(12)]);
var inst_28585 = (state_28623[(2)]);
var inst_28586 = (inst_28578 + (1));
var tmp28632 = inst_28576;
var tmp28633 = inst_28577;
var tmp28634 = inst_28575;
var inst_28575__$1 = tmp28634;
var inst_28576__$1 = tmp28632;
var inst_28577__$1 = tmp28633;
var inst_28578__$1 = inst_28586;
var state_28623__$1 = (function (){var statearr_28637 = state_28623;
(statearr_28637[(8)] = inst_28576__$1);

(statearr_28637[(14)] = inst_28585);

(statearr_28637[(10)] = inst_28578__$1);

(statearr_28637[(11)] = inst_28577__$1);

(statearr_28637[(12)] = inst_28575__$1);

return statearr_28637;
})();
var statearr_28638_28673 = state_28623__$1;
(statearr_28638_28673[(2)] = null);

(statearr_28638_28673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (22))){
var state_28623__$1 = state_28623;
var statearr_28639_28674 = state_28623__$1;
(statearr_28639_28674[(2)] = null);

(statearr_28639_28674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (6))){
var inst_28564 = (state_28623[(13)]);
var inst_28573 = f.call(null,inst_28564);
var inst_28574 = cljs.core.seq.call(null,inst_28573);
var inst_28575 = inst_28574;
var inst_28576 = null;
var inst_28577 = (0);
var inst_28578 = (0);
var state_28623__$1 = (function (){var statearr_28640 = state_28623;
(statearr_28640[(8)] = inst_28576);

(statearr_28640[(10)] = inst_28578);

(statearr_28640[(11)] = inst_28577);

(statearr_28640[(12)] = inst_28575);

return statearr_28640;
})();
var statearr_28641_28675 = state_28623__$1;
(statearr_28641_28675[(2)] = null);

(statearr_28641_28675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (17))){
var inst_28589 = (state_28623[(7)]);
var inst_28593 = cljs.core.chunk_first.call(null,inst_28589);
var inst_28594 = cljs.core.chunk_rest.call(null,inst_28589);
var inst_28595 = cljs.core.count.call(null,inst_28593);
var inst_28575 = inst_28594;
var inst_28576 = inst_28593;
var inst_28577 = inst_28595;
var inst_28578 = (0);
var state_28623__$1 = (function (){var statearr_28642 = state_28623;
(statearr_28642[(8)] = inst_28576);

(statearr_28642[(10)] = inst_28578);

(statearr_28642[(11)] = inst_28577);

(statearr_28642[(12)] = inst_28575);

return statearr_28642;
})();
var statearr_28643_28676 = state_28623__$1;
(statearr_28643_28676[(2)] = null);

(statearr_28643_28676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (3))){
var inst_28621 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28623__$1,inst_28621);
} else {
if((state_val_28624 === (12))){
var inst_28609 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28644_28677 = state_28623__$1;
(statearr_28644_28677[(2)] = inst_28609);

(statearr_28644_28677[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (2))){
var state_28623__$1 = state_28623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28623__$1,(4),in$);
} else {
if((state_val_28624 === (23))){
var inst_28617 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28645_28678 = state_28623__$1;
(statearr_28645_28678[(2)] = inst_28617);

(statearr_28645_28678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (19))){
var inst_28604 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28646_28679 = state_28623__$1;
(statearr_28646_28679[(2)] = inst_28604);

(statearr_28646_28679[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (11))){
var inst_28589 = (state_28623[(7)]);
var inst_28575 = (state_28623[(12)]);
var inst_28589__$1 = cljs.core.seq.call(null,inst_28575);
var state_28623__$1 = (function (){var statearr_28647 = state_28623;
(statearr_28647[(7)] = inst_28589__$1);

return statearr_28647;
})();
if(inst_28589__$1){
var statearr_28648_28680 = state_28623__$1;
(statearr_28648_28680[(1)] = (14));

} else {
var statearr_28649_28681 = state_28623__$1;
(statearr_28649_28681[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (9))){
var inst_28611 = (state_28623[(2)]);
var inst_28612 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28623__$1 = (function (){var statearr_28650 = state_28623;
(statearr_28650[(15)] = inst_28611);

return statearr_28650;
})();
if(cljs.core.truth_(inst_28612)){
var statearr_28651_28682 = state_28623__$1;
(statearr_28651_28682[(1)] = (21));

} else {
var statearr_28652_28683 = state_28623__$1;
(statearr_28652_28683[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (5))){
var inst_28567 = cljs.core.async.close_BANG_.call(null,out);
var state_28623__$1 = state_28623;
var statearr_28653_28684 = state_28623__$1;
(statearr_28653_28684[(2)] = inst_28567);

(statearr_28653_28684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (14))){
var inst_28589 = (state_28623[(7)]);
var inst_28591 = cljs.core.chunked_seq_QMARK_.call(null,inst_28589);
var state_28623__$1 = state_28623;
if(inst_28591){
var statearr_28654_28685 = state_28623__$1;
(statearr_28654_28685[(1)] = (17));

} else {
var statearr_28655_28686 = state_28623__$1;
(statearr_28655_28686[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (16))){
var inst_28607 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28656_28687 = state_28623__$1;
(statearr_28656_28687[(2)] = inst_28607);

(statearr_28656_28687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (10))){
var inst_28576 = (state_28623[(8)]);
var inst_28578 = (state_28623[(10)]);
var inst_28583 = cljs.core._nth.call(null,inst_28576,inst_28578);
var state_28623__$1 = state_28623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28623__$1,(13),out,inst_28583);
} else {
if((state_val_28624 === (18))){
var inst_28589 = (state_28623[(7)]);
var inst_28598 = cljs.core.first.call(null,inst_28589);
var state_28623__$1 = state_28623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28623__$1,(20),out,inst_28598);
} else {
if((state_val_28624 === (8))){
var inst_28578 = (state_28623[(10)]);
var inst_28577 = (state_28623[(11)]);
var inst_28580 = (inst_28578 < inst_28577);
var inst_28581 = inst_28580;
var state_28623__$1 = state_28623;
if(cljs.core.truth_(inst_28581)){
var statearr_28657_28688 = state_28623__$1;
(statearr_28657_28688[(1)] = (10));

} else {
var statearr_28658_28689 = state_28623__$1;
(statearr_28658_28689[(1)] = (11));

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
});})(c__19619__auto__))
;
return ((function (switch__19554__auto__,c__19619__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19555__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19555__auto____0 = (function (){
var statearr_28662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28662[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19555__auto__);

(statearr_28662[(1)] = (1));

return statearr_28662;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19555__auto____1 = (function (state_28623){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_28623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e28663){if((e28663 instanceof Object)){
var ex__19558__auto__ = e28663;
var statearr_28664_28690 = state_28623;
(statearr_28664_28690[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28691 = state_28623;
state_28623 = G__28691;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19555__auto__ = function(state_28623){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19555__auto____1.call(this,state_28623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19555__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19555__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto__))
})();
var state__19621__auto__ = (function (){var statearr_28665 = f__19620__auto__.call(null);
(statearr_28665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto__);

return statearr_28665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto__))
);

return c__19619__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args28692 = [];
var len__17337__auto___28695 = arguments.length;
var i__17338__auto___28696 = (0);
while(true){
if((i__17338__auto___28696 < len__17337__auto___28695)){
args28692.push((arguments[i__17338__auto___28696]));

var G__28697 = (i__17338__auto___28696 + (1));
i__17338__auto___28696 = G__28697;
continue;
} else {
}
break;
}

var G__28694 = args28692.length;
switch (G__28694) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28692.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args28699 = [];
var len__17337__auto___28702 = arguments.length;
var i__17338__auto___28703 = (0);
while(true){
if((i__17338__auto___28703 < len__17337__auto___28702)){
args28699.push((arguments[i__17338__auto___28703]));

var G__28704 = (i__17338__auto___28703 + (1));
i__17338__auto___28703 = G__28704;
continue;
} else {
}
break;
}

var G__28701 = args28699.length;
switch (G__28701) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28699.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args28706 = [];
var len__17337__auto___28757 = arguments.length;
var i__17338__auto___28758 = (0);
while(true){
if((i__17338__auto___28758 < len__17337__auto___28757)){
args28706.push((arguments[i__17338__auto___28758]));

var G__28759 = (i__17338__auto___28758 + (1));
i__17338__auto___28758 = G__28759;
continue;
} else {
}
break;
}

var G__28708 = args28706.length;
switch (G__28708) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28706.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19619__auto___28761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto___28761,out){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto___28761,out){
return (function (state_28732){
var state_val_28733 = (state_28732[(1)]);
if((state_val_28733 === (7))){
var inst_28727 = (state_28732[(2)]);
var state_28732__$1 = state_28732;
var statearr_28734_28762 = state_28732__$1;
(statearr_28734_28762[(2)] = inst_28727);

(statearr_28734_28762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (1))){
var inst_28709 = null;
var state_28732__$1 = (function (){var statearr_28735 = state_28732;
(statearr_28735[(7)] = inst_28709);

return statearr_28735;
})();
var statearr_28736_28763 = state_28732__$1;
(statearr_28736_28763[(2)] = null);

(statearr_28736_28763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (4))){
var inst_28712 = (state_28732[(8)]);
var inst_28712__$1 = (state_28732[(2)]);
var inst_28713 = (inst_28712__$1 == null);
var inst_28714 = cljs.core.not.call(null,inst_28713);
var state_28732__$1 = (function (){var statearr_28737 = state_28732;
(statearr_28737[(8)] = inst_28712__$1);

return statearr_28737;
})();
if(inst_28714){
var statearr_28738_28764 = state_28732__$1;
(statearr_28738_28764[(1)] = (5));

} else {
var statearr_28739_28765 = state_28732__$1;
(statearr_28739_28765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (6))){
var state_28732__$1 = state_28732;
var statearr_28740_28766 = state_28732__$1;
(statearr_28740_28766[(2)] = null);

(statearr_28740_28766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (3))){
var inst_28729 = (state_28732[(2)]);
var inst_28730 = cljs.core.async.close_BANG_.call(null,out);
var state_28732__$1 = (function (){var statearr_28741 = state_28732;
(statearr_28741[(9)] = inst_28729);

return statearr_28741;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28732__$1,inst_28730);
} else {
if((state_val_28733 === (2))){
var state_28732__$1 = state_28732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28732__$1,(4),ch);
} else {
if((state_val_28733 === (11))){
var inst_28712 = (state_28732[(8)]);
var inst_28721 = (state_28732[(2)]);
var inst_28709 = inst_28712;
var state_28732__$1 = (function (){var statearr_28742 = state_28732;
(statearr_28742[(7)] = inst_28709);

(statearr_28742[(10)] = inst_28721);

return statearr_28742;
})();
var statearr_28743_28767 = state_28732__$1;
(statearr_28743_28767[(2)] = null);

(statearr_28743_28767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (9))){
var inst_28712 = (state_28732[(8)]);
var state_28732__$1 = state_28732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28732__$1,(11),out,inst_28712);
} else {
if((state_val_28733 === (5))){
var inst_28709 = (state_28732[(7)]);
var inst_28712 = (state_28732[(8)]);
var inst_28716 = cljs.core._EQ_.call(null,inst_28712,inst_28709);
var state_28732__$1 = state_28732;
if(inst_28716){
var statearr_28745_28768 = state_28732__$1;
(statearr_28745_28768[(1)] = (8));

} else {
var statearr_28746_28769 = state_28732__$1;
(statearr_28746_28769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (10))){
var inst_28724 = (state_28732[(2)]);
var state_28732__$1 = state_28732;
var statearr_28747_28770 = state_28732__$1;
(statearr_28747_28770[(2)] = inst_28724);

(statearr_28747_28770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (8))){
var inst_28709 = (state_28732[(7)]);
var tmp28744 = inst_28709;
var inst_28709__$1 = tmp28744;
var state_28732__$1 = (function (){var statearr_28748 = state_28732;
(statearr_28748[(7)] = inst_28709__$1);

return statearr_28748;
})();
var statearr_28749_28771 = state_28732__$1;
(statearr_28749_28771[(2)] = null);

(statearr_28749_28771[(1)] = (2));


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
});})(c__19619__auto___28761,out))
;
return ((function (switch__19554__auto__,c__19619__auto___28761,out){
return (function() {
var cljs$core$async$state_machine__19555__auto__ = null;
var cljs$core$async$state_machine__19555__auto____0 = (function (){
var statearr_28753 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28753[(0)] = cljs$core$async$state_machine__19555__auto__);

(statearr_28753[(1)] = (1));

return statearr_28753;
});
var cljs$core$async$state_machine__19555__auto____1 = (function (state_28732){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_28732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e28754){if((e28754 instanceof Object)){
var ex__19558__auto__ = e28754;
var statearr_28755_28772 = state_28732;
(statearr_28755_28772[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28773 = state_28732;
state_28732 = G__28773;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$state_machine__19555__auto__ = function(state_28732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19555__auto____1.call(this,state_28732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19555__auto____0;
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19555__auto____1;
return cljs$core$async$state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto___28761,out))
})();
var state__19621__auto__ = (function (){var statearr_28756 = f__19620__auto__.call(null);
(statearr_28756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto___28761);

return statearr_28756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto___28761,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28774 = [];
var len__17337__auto___28844 = arguments.length;
var i__17338__auto___28845 = (0);
while(true){
if((i__17338__auto___28845 < len__17337__auto___28844)){
args28774.push((arguments[i__17338__auto___28845]));

var G__28846 = (i__17338__auto___28845 + (1));
i__17338__auto___28845 = G__28846;
continue;
} else {
}
break;
}

var G__28776 = args28774.length;
switch (G__28776) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28774.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19619__auto___28848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto___28848,out){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto___28848,out){
return (function (state_28814){
var state_val_28815 = (state_28814[(1)]);
if((state_val_28815 === (7))){
var inst_28810 = (state_28814[(2)]);
var state_28814__$1 = state_28814;
var statearr_28816_28849 = state_28814__$1;
(statearr_28816_28849[(2)] = inst_28810);

(statearr_28816_28849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28815 === (1))){
var inst_28777 = (new Array(n));
var inst_28778 = inst_28777;
var inst_28779 = (0);
var state_28814__$1 = (function (){var statearr_28817 = state_28814;
(statearr_28817[(7)] = inst_28779);

(statearr_28817[(8)] = inst_28778);

return statearr_28817;
})();
var statearr_28818_28850 = state_28814__$1;
(statearr_28818_28850[(2)] = null);

(statearr_28818_28850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28815 === (4))){
var inst_28782 = (state_28814[(9)]);
var inst_28782__$1 = (state_28814[(2)]);
var inst_28783 = (inst_28782__$1 == null);
var inst_28784 = cljs.core.not.call(null,inst_28783);
var state_28814__$1 = (function (){var statearr_28819 = state_28814;
(statearr_28819[(9)] = inst_28782__$1);

return statearr_28819;
})();
if(inst_28784){
var statearr_28820_28851 = state_28814__$1;
(statearr_28820_28851[(1)] = (5));

} else {
var statearr_28821_28852 = state_28814__$1;
(statearr_28821_28852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28815 === (15))){
var inst_28804 = (state_28814[(2)]);
var state_28814__$1 = state_28814;
var statearr_28822_28853 = state_28814__$1;
(statearr_28822_28853[(2)] = inst_28804);

(statearr_28822_28853[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28815 === (13))){
var state_28814__$1 = state_28814;
var statearr_28823_28854 = state_28814__$1;
(statearr_28823_28854[(2)] = null);

(statearr_28823_28854[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28815 === (6))){
var inst_28779 = (state_28814[(7)]);
var inst_28800 = (inst_28779 > (0));
var state_28814__$1 = state_28814;
if(cljs.core.truth_(inst_28800)){
var statearr_28824_28855 = state_28814__$1;
(statearr_28824_28855[(1)] = (12));

} else {
var statearr_28825_28856 = state_28814__$1;
(statearr_28825_28856[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28815 === (3))){
var inst_28812 = (state_28814[(2)]);
var state_28814__$1 = state_28814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28814__$1,inst_28812);
} else {
if((state_val_28815 === (12))){
var inst_28778 = (state_28814[(8)]);
var inst_28802 = cljs.core.vec.call(null,inst_28778);
var state_28814__$1 = state_28814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28814__$1,(15),out,inst_28802);
} else {
if((state_val_28815 === (2))){
var state_28814__$1 = state_28814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28814__$1,(4),ch);
} else {
if((state_val_28815 === (11))){
var inst_28794 = (state_28814[(2)]);
var inst_28795 = (new Array(n));
var inst_28778 = inst_28795;
var inst_28779 = (0);
var state_28814__$1 = (function (){var statearr_28826 = state_28814;
(statearr_28826[(7)] = inst_28779);

(statearr_28826[(8)] = inst_28778);

(statearr_28826[(10)] = inst_28794);

return statearr_28826;
})();
var statearr_28827_28857 = state_28814__$1;
(statearr_28827_28857[(2)] = null);

(statearr_28827_28857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28815 === (9))){
var inst_28778 = (state_28814[(8)]);
var inst_28792 = cljs.core.vec.call(null,inst_28778);
var state_28814__$1 = state_28814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28814__$1,(11),out,inst_28792);
} else {
if((state_val_28815 === (5))){
var inst_28787 = (state_28814[(11)]);
var inst_28782 = (state_28814[(9)]);
var inst_28779 = (state_28814[(7)]);
var inst_28778 = (state_28814[(8)]);
var inst_28786 = (inst_28778[inst_28779] = inst_28782);
var inst_28787__$1 = (inst_28779 + (1));
var inst_28788 = (inst_28787__$1 < n);
var state_28814__$1 = (function (){var statearr_28828 = state_28814;
(statearr_28828[(11)] = inst_28787__$1);

(statearr_28828[(12)] = inst_28786);

return statearr_28828;
})();
if(cljs.core.truth_(inst_28788)){
var statearr_28829_28858 = state_28814__$1;
(statearr_28829_28858[(1)] = (8));

} else {
var statearr_28830_28859 = state_28814__$1;
(statearr_28830_28859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28815 === (14))){
var inst_28807 = (state_28814[(2)]);
var inst_28808 = cljs.core.async.close_BANG_.call(null,out);
var state_28814__$1 = (function (){var statearr_28832 = state_28814;
(statearr_28832[(13)] = inst_28807);

return statearr_28832;
})();
var statearr_28833_28860 = state_28814__$1;
(statearr_28833_28860[(2)] = inst_28808);

(statearr_28833_28860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28815 === (10))){
var inst_28798 = (state_28814[(2)]);
var state_28814__$1 = state_28814;
var statearr_28834_28861 = state_28814__$1;
(statearr_28834_28861[(2)] = inst_28798);

(statearr_28834_28861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28815 === (8))){
var inst_28787 = (state_28814[(11)]);
var inst_28778 = (state_28814[(8)]);
var tmp28831 = inst_28778;
var inst_28778__$1 = tmp28831;
var inst_28779 = inst_28787;
var state_28814__$1 = (function (){var statearr_28835 = state_28814;
(statearr_28835[(7)] = inst_28779);

(statearr_28835[(8)] = inst_28778__$1);

return statearr_28835;
})();
var statearr_28836_28862 = state_28814__$1;
(statearr_28836_28862[(2)] = null);

(statearr_28836_28862[(1)] = (2));


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
});})(c__19619__auto___28848,out))
;
return ((function (switch__19554__auto__,c__19619__auto___28848,out){
return (function() {
var cljs$core$async$state_machine__19555__auto__ = null;
var cljs$core$async$state_machine__19555__auto____0 = (function (){
var statearr_28840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28840[(0)] = cljs$core$async$state_machine__19555__auto__);

(statearr_28840[(1)] = (1));

return statearr_28840;
});
var cljs$core$async$state_machine__19555__auto____1 = (function (state_28814){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_28814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e28841){if((e28841 instanceof Object)){
var ex__19558__auto__ = e28841;
var statearr_28842_28863 = state_28814;
(statearr_28842_28863[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28864 = state_28814;
state_28814 = G__28864;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$state_machine__19555__auto__ = function(state_28814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19555__auto____1.call(this,state_28814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19555__auto____0;
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19555__auto____1;
return cljs$core$async$state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto___28848,out))
})();
var state__19621__auto__ = (function (){var statearr_28843 = f__19620__auto__.call(null);
(statearr_28843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto___28848);

return statearr_28843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto___28848,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args28865 = [];
var len__17337__auto___28939 = arguments.length;
var i__17338__auto___28940 = (0);
while(true){
if((i__17338__auto___28940 < len__17337__auto___28939)){
args28865.push((arguments[i__17338__auto___28940]));

var G__28941 = (i__17338__auto___28940 + (1));
i__17338__auto___28940 = G__28941;
continue;
} else {
}
break;
}

var G__28867 = args28865.length;
switch (G__28867) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28865.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19619__auto___28943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19619__auto___28943,out){
return (function (){
var f__19620__auto__ = (function (){var switch__19554__auto__ = ((function (c__19619__auto___28943,out){
return (function (state_28909){
var state_val_28910 = (state_28909[(1)]);
if((state_val_28910 === (7))){
var inst_28905 = (state_28909[(2)]);
var state_28909__$1 = state_28909;
var statearr_28911_28944 = state_28909__$1;
(statearr_28911_28944[(2)] = inst_28905);

(statearr_28911_28944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (1))){
var inst_28868 = [];
var inst_28869 = inst_28868;
var inst_28870 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28909__$1 = (function (){var statearr_28912 = state_28909;
(statearr_28912[(7)] = inst_28869);

(statearr_28912[(8)] = inst_28870);

return statearr_28912;
})();
var statearr_28913_28945 = state_28909__$1;
(statearr_28913_28945[(2)] = null);

(statearr_28913_28945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (4))){
var inst_28873 = (state_28909[(9)]);
var inst_28873__$1 = (state_28909[(2)]);
var inst_28874 = (inst_28873__$1 == null);
var inst_28875 = cljs.core.not.call(null,inst_28874);
var state_28909__$1 = (function (){var statearr_28914 = state_28909;
(statearr_28914[(9)] = inst_28873__$1);

return statearr_28914;
})();
if(inst_28875){
var statearr_28915_28946 = state_28909__$1;
(statearr_28915_28946[(1)] = (5));

} else {
var statearr_28916_28947 = state_28909__$1;
(statearr_28916_28947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (15))){
var inst_28899 = (state_28909[(2)]);
var state_28909__$1 = state_28909;
var statearr_28917_28948 = state_28909__$1;
(statearr_28917_28948[(2)] = inst_28899);

(statearr_28917_28948[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (13))){
var state_28909__$1 = state_28909;
var statearr_28918_28949 = state_28909__$1;
(statearr_28918_28949[(2)] = null);

(statearr_28918_28949[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (6))){
var inst_28869 = (state_28909[(7)]);
var inst_28894 = inst_28869.length;
var inst_28895 = (inst_28894 > (0));
var state_28909__$1 = state_28909;
if(cljs.core.truth_(inst_28895)){
var statearr_28919_28950 = state_28909__$1;
(statearr_28919_28950[(1)] = (12));

} else {
var statearr_28920_28951 = state_28909__$1;
(statearr_28920_28951[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (3))){
var inst_28907 = (state_28909[(2)]);
var state_28909__$1 = state_28909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28909__$1,inst_28907);
} else {
if((state_val_28910 === (12))){
var inst_28869 = (state_28909[(7)]);
var inst_28897 = cljs.core.vec.call(null,inst_28869);
var state_28909__$1 = state_28909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28909__$1,(15),out,inst_28897);
} else {
if((state_val_28910 === (2))){
var state_28909__$1 = state_28909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28909__$1,(4),ch);
} else {
if((state_val_28910 === (11))){
var inst_28877 = (state_28909[(10)]);
var inst_28873 = (state_28909[(9)]);
var inst_28887 = (state_28909[(2)]);
var inst_28888 = [];
var inst_28889 = inst_28888.push(inst_28873);
var inst_28869 = inst_28888;
var inst_28870 = inst_28877;
var state_28909__$1 = (function (){var statearr_28921 = state_28909;
(statearr_28921[(7)] = inst_28869);

(statearr_28921[(8)] = inst_28870);

(statearr_28921[(11)] = inst_28889);

(statearr_28921[(12)] = inst_28887);

return statearr_28921;
})();
var statearr_28922_28952 = state_28909__$1;
(statearr_28922_28952[(2)] = null);

(statearr_28922_28952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (9))){
var inst_28869 = (state_28909[(7)]);
var inst_28885 = cljs.core.vec.call(null,inst_28869);
var state_28909__$1 = state_28909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28909__$1,(11),out,inst_28885);
} else {
if((state_val_28910 === (5))){
var inst_28870 = (state_28909[(8)]);
var inst_28877 = (state_28909[(10)]);
var inst_28873 = (state_28909[(9)]);
var inst_28877__$1 = f.call(null,inst_28873);
var inst_28878 = cljs.core._EQ_.call(null,inst_28877__$1,inst_28870);
var inst_28879 = cljs.core.keyword_identical_QMARK_.call(null,inst_28870,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28880 = (inst_28878) || (inst_28879);
var state_28909__$1 = (function (){var statearr_28923 = state_28909;
(statearr_28923[(10)] = inst_28877__$1);

return statearr_28923;
})();
if(cljs.core.truth_(inst_28880)){
var statearr_28924_28953 = state_28909__$1;
(statearr_28924_28953[(1)] = (8));

} else {
var statearr_28925_28954 = state_28909__$1;
(statearr_28925_28954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (14))){
var inst_28902 = (state_28909[(2)]);
var inst_28903 = cljs.core.async.close_BANG_.call(null,out);
var state_28909__$1 = (function (){var statearr_28927 = state_28909;
(statearr_28927[(13)] = inst_28902);

return statearr_28927;
})();
var statearr_28928_28955 = state_28909__$1;
(statearr_28928_28955[(2)] = inst_28903);

(statearr_28928_28955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (10))){
var inst_28892 = (state_28909[(2)]);
var state_28909__$1 = state_28909;
var statearr_28929_28956 = state_28909__$1;
(statearr_28929_28956[(2)] = inst_28892);

(statearr_28929_28956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (8))){
var inst_28869 = (state_28909[(7)]);
var inst_28877 = (state_28909[(10)]);
var inst_28873 = (state_28909[(9)]);
var inst_28882 = inst_28869.push(inst_28873);
var tmp28926 = inst_28869;
var inst_28869__$1 = tmp28926;
var inst_28870 = inst_28877;
var state_28909__$1 = (function (){var statearr_28930 = state_28909;
(statearr_28930[(7)] = inst_28869__$1);

(statearr_28930[(8)] = inst_28870);

(statearr_28930[(14)] = inst_28882);

return statearr_28930;
})();
var statearr_28931_28957 = state_28909__$1;
(statearr_28931_28957[(2)] = null);

(statearr_28931_28957[(1)] = (2));


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
});})(c__19619__auto___28943,out))
;
return ((function (switch__19554__auto__,c__19619__auto___28943,out){
return (function() {
var cljs$core$async$state_machine__19555__auto__ = null;
var cljs$core$async$state_machine__19555__auto____0 = (function (){
var statearr_28935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28935[(0)] = cljs$core$async$state_machine__19555__auto__);

(statearr_28935[(1)] = (1));

return statearr_28935;
});
var cljs$core$async$state_machine__19555__auto____1 = (function (state_28909){
while(true){
var ret_value__19556__auto__ = (function (){try{while(true){
var result__19557__auto__ = switch__19554__auto__.call(null,state_28909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19557__auto__;
}
break;
}
}catch (e28936){if((e28936 instanceof Object)){
var ex__19558__auto__ = e28936;
var statearr_28937_28958 = state_28909;
(statearr_28937_28958[(5)] = ex__19558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28959 = state_28909;
state_28909 = G__28959;
continue;
} else {
return ret_value__19556__auto__;
}
break;
}
});
cljs$core$async$state_machine__19555__auto__ = function(state_28909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19555__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19555__auto____1.call(this,state_28909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19555__auto____0;
cljs$core$async$state_machine__19555__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19555__auto____1;
return cljs$core$async$state_machine__19555__auto__;
})()
;})(switch__19554__auto__,c__19619__auto___28943,out))
})();
var state__19621__auto__ = (function (){var statearr_28938 = f__19620__auto__.call(null);
(statearr_28938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19619__auto___28943);

return statearr_28938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19621__auto__);
});})(c__19619__auto___28943,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1446956443235
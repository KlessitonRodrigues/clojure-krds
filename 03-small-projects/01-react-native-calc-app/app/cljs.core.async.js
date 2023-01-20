goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {shadow.build.cljs_hacks.IMeta}
 * @implements {shadow.build.cljs_hacks.IWithMeta}
 * @implements {cljs.core.async.impl.protocols.Handler}
*/
cljs.core.async.t_cljs$core$async18027 = (function (f,blockable,meta18028){
this.f = f;
this.blockable = blockable;
this.meta18028 = meta18028;
});
(cljs.core.async.t_cljs$core$async18027.prototype.shadow$build$cljs_hacks$IWithMeta$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18027.prototype.shadow$build$cljs_hacks$IWithMeta$_with_meta$arity$2 = (function (_18029,meta18028__$1){
var self__ = this;
var _18029__$1 = this;
return (new cljs.core.async.t_cljs$core$async18027(self__.f,self__.blockable,meta18028__$1));
}));

(cljs.core.async.t_cljs$core$async18027.prototype.shadow$build$cljs_hacks$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18027.prototype.shadow$build$cljs_hacks$IMeta$_meta$arity$1 = (function (_18029){
var self__ = this;
var _18029__$1 = this;
return self__.meta18028;
}));

(cljs.core.async.t_cljs$core$async18027.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18027.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18027.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18027.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18027.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18028","meta18028",798356901,null)], null);
}));

(cljs.core.async.t_cljs$core$async18027.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18027");

(cljs.core.async.t_cljs$core$async18027.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18027");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18027.
 */
cljs.core.async.__GT_t_cljs$core$async18027 = (function cljs$core$async$__GT_t_cljs$core$async18027(f,blockable,meta18028){
return (new cljs.core.async.t_cljs$core$async18027(f,blockable,meta18028));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18023 = arguments.length;
switch (G__18023) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async18027(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__18038 = arguments.length;
switch (G__18038) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__18041 = arguments.length;
switch (G__18041) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__18049 = arguments.length;
switch (G__18049) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_20796 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20796) : fn1.call(null,val_20796));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20796) : fn1.call(null,val_20796));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__18061 = arguments.length;
switch (G__18061) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___20799 = n;
var x_20800 = (0);
while(true){
if((x_20800 < n__5636__auto___20799)){
(a[x_20800] = x_20800);

var G__20801 = (x_20800 + (1));
x_20800 = G__20801;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {shadow.build.cljs_hacks.IMeta}
 * @implements {shadow.build.cljs_hacks.IWithMeta}
 * @implements {cljs.core.async.impl.protocols.Handler}
*/
cljs.core.async.t_cljs$core$async18082 = (function (flag,meta18083){
this.flag = flag;
this.meta18083 = meta18083;
});
(cljs.core.async.t_cljs$core$async18082.prototype.shadow$build$cljs_hacks$IWithMeta$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18082.prototype.shadow$build$cljs_hacks$IWithMeta$_with_meta$arity$2 = (function (_18084,meta18083__$1){
var self__ = this;
var _18084__$1 = this;
return (new cljs.core.async.t_cljs$core$async18082(self__.flag,meta18083__$1));
}));

(cljs.core.async.t_cljs$core$async18082.prototype.shadow$build$cljs_hacks$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18082.prototype.shadow$build$cljs_hacks$IMeta$_meta$arity$1 = (function (_18084){
var self__ = this;
var _18084__$1 = this;
return self__.meta18083;
}));

(cljs.core.async.t_cljs$core$async18082.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18082.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18082.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18082.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18083","meta18083",-568416722,null)], null);
}));

(cljs.core.async.t_cljs$core$async18082.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18082");

(cljs.core.async.t_cljs$core$async18082.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18082");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18082.
 */
cljs.core.async.__GT_t_cljs$core$async18082 = (function cljs$core$async$__GT_t_cljs$core$async18082(flag,meta18083){
return (new cljs.core.async.t_cljs$core$async18082(flag,meta18083));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async18082(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {shadow.build.cljs_hacks.IMeta}
 * @implements {shadow.build.cljs_hacks.IWithMeta}
 * @implements {cljs.core.async.impl.protocols.Handler}
*/
cljs.core.async.t_cljs$core$async18091 = (function (flag,cb,meta18092){
this.flag = flag;
this.cb = cb;
this.meta18092 = meta18092;
});
(cljs.core.async.t_cljs$core$async18091.prototype.shadow$build$cljs_hacks$IWithMeta$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18091.prototype.shadow$build$cljs_hacks$IWithMeta$_with_meta$arity$2 = (function (_18093,meta18092__$1){
var self__ = this;
var _18093__$1 = this;
return (new cljs.core.async.t_cljs$core$async18091(self__.flag,self__.cb,meta18092__$1));
}));

(cljs.core.async.t_cljs$core$async18091.prototype.shadow$build$cljs_hacks$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18091.prototype.shadow$build$cljs_hacks$IMeta$_meta$arity$1 = (function (_18093){
var self__ = this;
var _18093__$1 = this;
return self__.meta18092;
}));

(cljs.core.async.t_cljs$core$async18091.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18091.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18091.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18091.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18091.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18092","meta18092",1036778747,null)], null);
}));

(cljs.core.async.t_cljs$core$async18091.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18091.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18091");

(cljs.core.async.t_cljs$core$async18091.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18091");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18091.
 */
cljs.core.async.__GT_t_cljs$core$async18091 = (function cljs$core$async$__GT_t_cljs$core$async18091(flag,cb,meta18092){
return (new cljs.core.async.t_cljs$core$async18091(flag,cb,meta18092));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async18091(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18132_SHARP_){
var G__18135 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18132_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18135) : fret.call(null,G__18135));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18133_SHARP_){
var G__18136 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18133_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18136) : fret.call(null,G__18136));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20808 = (i + (1));
i = G__20808;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5775__auto__ = [];
var len__5769__auto___20814 = arguments.length;
var i__5770__auto___20815 = (0);
while(true){
if((i__5770__auto___20815 < len__5769__auto___20814)){
args__5775__auto__.push((arguments[i__5770__auto___20815]));

var G__20816 = (i__5770__auto___20815 + (1));
i__5770__auto___20815 = G__20816;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18144){
var map__18145 = p__18144;
var map__18145__$1 = cljs.core.__destructure_map(map__18145);
var opts = map__18145__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18139){
var G__18140 = cljs.core.first(seq18139);
var seq18139__$1 = cljs.core.next(seq18139);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18140,seq18139__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__18157 = arguments.length;
switch (G__18157) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17913__auto___20821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17914__auto__ = (function (){var switch__15036__auto__ = (function (state_18211){
var state_val_18212 = (state_18211[(1)]);
if((state_val_18212 === (7))){
var inst_18199 = (state_18211[(2)]);
var state_18211__$1 = state_18211;
var statearr_18234_20824 = state_18211__$1;
(statearr_18234_20824[(2)] = inst_18199);

(statearr_18234_20824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (1))){
var state_18211__$1 = state_18211;
var statearr_18235_20825 = state_18211__$1;
(statearr_18235_20825[(2)] = null);

(statearr_18235_20825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (4))){
var inst_18171 = (state_18211[(7)]);
var inst_18171__$1 = (state_18211[(2)]);
var inst_18176 = (inst_18171__$1 == null);
var state_18211__$1 = (function (){var statearr_18240 = state_18211;
(statearr_18240[(7)] = inst_18171__$1);

return statearr_18240;
})();
if(cljs.core.truth_(inst_18176)){
var statearr_18241_20826 = state_18211__$1;
(statearr_18241_20826[(1)] = (5));

} else {
var statearr_18242_20827 = state_18211__$1;
(statearr_18242_20827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (13))){
var state_18211__$1 = state_18211;
var statearr_18244_20828 = state_18211__$1;
(statearr_18244_20828[(2)] = null);

(statearr_18244_20828[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (6))){
var inst_18171 = (state_18211[(7)]);
var state_18211__$1 = state_18211;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18211__$1,(11),to,inst_18171);
} else {
if((state_val_18212 === (3))){
var inst_18201 = (state_18211[(2)]);
var state_18211__$1 = state_18211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18211__$1,inst_18201);
} else {
if((state_val_18212 === (12))){
var state_18211__$1 = state_18211;
var statearr_18253_20829 = state_18211__$1;
(statearr_18253_20829[(2)] = null);

(statearr_18253_20829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (2))){
var state_18211__$1 = state_18211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18211__$1,(4),from);
} else {
if((state_val_18212 === (11))){
var inst_18192 = (state_18211[(2)]);
var state_18211__$1 = state_18211;
if(cljs.core.truth_(inst_18192)){
var statearr_18261_20830 = state_18211__$1;
(statearr_18261_20830[(1)] = (12));

} else {
var statearr_18265_20831 = state_18211__$1;
(statearr_18265_20831[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (9))){
var state_18211__$1 = state_18211;
var statearr_18269_20832 = state_18211__$1;
(statearr_18269_20832[(2)] = null);

(statearr_18269_20832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (5))){
var state_18211__$1 = state_18211;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18271_20833 = state_18211__$1;
(statearr_18271_20833[(1)] = (8));

} else {
var statearr_18272_20834 = state_18211__$1;
(statearr_18272_20834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (14))){
var inst_18197 = (state_18211[(2)]);
var state_18211__$1 = state_18211;
var statearr_18276_20835 = state_18211__$1;
(statearr_18276_20835[(2)] = inst_18197);

(statearr_18276_20835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (10))){
var inst_18189 = (state_18211[(2)]);
var state_18211__$1 = state_18211;
var statearr_18278_20836 = state_18211__$1;
(statearr_18278_20836[(2)] = inst_18189);

(statearr_18278_20836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (8))){
var inst_18185 = cljs.core.async.close_BANG_(to);
var state_18211__$1 = state_18211;
var statearr_18279_20837 = state_18211__$1;
(statearr_18279_20837[(2)] = inst_18185);

(statearr_18279_20837[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__15037__auto__ = null;
var cljs$core$async$state_machine__15037__auto____0 = (function (){
var statearr_18283 = [null,null,null,null,null,null,null,null];
(statearr_18283[(0)] = cljs$core$async$state_machine__15037__auto__);

(statearr_18283[(1)] = (1));

return statearr_18283;
});
var cljs$core$async$state_machine__15037__auto____1 = (function (state_18211){
while(true){
var ret_value__15038__auto__ = (function (){try{while(true){
var result__15039__auto__ = switch__15036__auto__(state_18211);
if(cljs.core.keyword_identical_QMARK_(result__15039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15039__auto__;
}
break;
}
}catch (e18285){var ex__15040__auto__ = e18285;
var statearr_18286_20838 = state_18211;
(statearr_18286_20838[(2)] = ex__15040__auto__);


if(cljs.core.seq((state_18211[(4)]))){
var statearr_18287_20839 = state_18211;
(statearr_18287_20839[(1)] = cljs.core.first((state_18211[(4)])));

} else {
throw ex__15040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20840 = state_18211;
state_18211 = G__20840;
continue;
} else {
return ret_value__15038__auto__;
}
break;
}
});
cljs$core$async$state_machine__15037__auto__ = function(state_18211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15037__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15037__auto____1.call(this,state_18211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15037__auto____0;
cljs$core$async$state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15037__auto____1;
return cljs$core$async$state_machine__15037__auto__;
})()
})();
var state__17915__auto__ = (function (){var statearr_18289 = f__17914__auto__();
(statearr_18289[(6)] = c__17913__auto___20821);

return statearr_18289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17915__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__18298){
var vec__18299 = p__18298;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18299,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18299,(1),null);
var job = vec__18299;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17913__auto___20843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17914__auto__ = (function (){var switch__15036__auto__ = (function (state_18311){
var state_val_18312 = (state_18311[(1)]);
if((state_val_18312 === (1))){
var state_18311__$1 = state_18311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18311__$1,(2),res,v);
} else {
if((state_val_18312 === (2))){
var inst_18308 = (state_18311[(2)]);
var inst_18309 = cljs.core.async.close_BANG_(res);
var state_18311__$1 = (function (){var statearr_18318 = state_18311;
(statearr_18318[(7)] = inst_18308);

return statearr_18318;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18311__$1,inst_18309);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____0 = (function (){
var statearr_18319 = [null,null,null,null,null,null,null,null];
(statearr_18319[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__);

(statearr_18319[(1)] = (1));

return statearr_18319;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____1 = (function (state_18311){
while(true){
var ret_value__15038__auto__ = (function (){try{while(true){
var result__15039__auto__ = switch__15036__auto__(state_18311);
if(cljs.core.keyword_identical_QMARK_(result__15039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15039__auto__;
}
break;
}
}catch (e18320){var ex__15040__auto__ = e18320;
var statearr_18324_20844 = state_18311;
(statearr_18324_20844[(2)] = ex__15040__auto__);


if(cljs.core.seq((state_18311[(4)]))){
var statearr_18327_20845 = state_18311;
(statearr_18327_20845[(1)] = cljs.core.first((state_18311[(4)])));

} else {
throw ex__15040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20846 = state_18311;
state_18311 = G__20846;
continue;
} else {
return ret_value__15038__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__ = function(state_18311){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____1.call(this,state_18311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__;
})()
})();
var state__17915__auto__ = (function (){var statearr_18330 = f__17914__auto__();
(statearr_18330[(6)] = c__17913__auto___20843);

return statearr_18330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17915__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__18332){
var vec__18333 = p__18332;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18333,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18333,(1),null);
var job = vec__18333;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___20847 = n;
var __20848 = (0);
while(true){
if((__20848 < n__5636__auto___20847)){
var G__18340_20849 = type;
var G__18340_20850__$1 = (((G__18340_20849 instanceof cljs.core.Keyword))?G__18340_20849.fqn:null);
switch (G__18340_20850__$1) {
case "compute":
var c__17913__auto___20852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20848,c__17913__auto___20852,G__18340_20849,G__18340_20850__$1,n__5636__auto___20847,jobs,results,process__$1,async){
return (function (){
var f__17914__auto__ = (function (){var switch__15036__auto__ = ((function (__20848,c__17913__auto___20852,G__18340_20849,G__18340_20850__$1,n__5636__auto___20847,jobs,results,process__$1,async){
return (function (state_18361){
var state_val_18362 = (state_18361[(1)]);
if((state_val_18362 === (1))){
var state_18361__$1 = state_18361;
var statearr_18368_20856 = state_18361__$1;
(statearr_18368_20856[(2)] = null);

(statearr_18368_20856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (2))){
var state_18361__$1 = state_18361;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18361__$1,(4),jobs);
} else {
if((state_val_18362 === (3))){
var inst_18359 = (state_18361[(2)]);
var state_18361__$1 = state_18361;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18361__$1,inst_18359);
} else {
if((state_val_18362 === (4))){
var inst_18348 = (state_18361[(2)]);
var inst_18352 = process__$1(inst_18348);
var state_18361__$1 = state_18361;
if(cljs.core.truth_(inst_18352)){
var statearr_18374_20858 = state_18361__$1;
(statearr_18374_20858[(1)] = (5));

} else {
var statearr_18375_20859 = state_18361__$1;
(statearr_18375_20859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (5))){
var state_18361__$1 = state_18361;
var statearr_18376_20860 = state_18361__$1;
(statearr_18376_20860[(2)] = null);

(statearr_18376_20860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (6))){
var state_18361__$1 = state_18361;
var statearr_18377_20863 = state_18361__$1;
(statearr_18377_20863[(2)] = null);

(statearr_18377_20863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18362 === (7))){
var inst_18357 = (state_18361[(2)]);
var state_18361__$1 = state_18361;
var statearr_18381_20864 = state_18361__$1;
(statearr_18381_20864[(2)] = inst_18357);

(statearr_18381_20864[(1)] = (3));


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
});})(__20848,c__17913__auto___20852,G__18340_20849,G__18340_20850__$1,n__5636__auto___20847,jobs,results,process__$1,async))
;
return ((function (__20848,switch__15036__auto__,c__17913__auto___20852,G__18340_20849,G__18340_20850__$1,n__5636__auto___20847,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____0 = (function (){
var statearr_18383 = [null,null,null,null,null,null,null];
(statearr_18383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__);

(statearr_18383[(1)] = (1));

return statearr_18383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____1 = (function (state_18361){
while(true){
var ret_value__15038__auto__ = (function (){try{while(true){
var result__15039__auto__ = switch__15036__auto__(state_18361);
if(cljs.core.keyword_identical_QMARK_(result__15039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15039__auto__;
}
break;
}
}catch (e18387){var ex__15040__auto__ = e18387;
var statearr_18388_20868 = state_18361;
(statearr_18388_20868[(2)] = ex__15040__auto__);


if(cljs.core.seq((state_18361[(4)]))){
var statearr_18389_20869 = state_18361;
(statearr_18389_20869[(1)] = cljs.core.first((state_18361[(4)])));

} else {
throw ex__15040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20870 = state_18361;
state_18361 = G__20870;
continue;
} else {
return ret_value__15038__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__ = function(state_18361){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____1.call(this,state_18361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__;
})()
;})(__20848,switch__15036__auto__,c__17913__auto___20852,G__18340_20849,G__18340_20850__$1,n__5636__auto___20847,jobs,results,process__$1,async))
})();
var state__17915__auto__ = (function (){var statearr_18391 = f__17914__auto__();
(statearr_18391[(6)] = c__17913__auto___20852);

return statearr_18391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17915__auto__);
});})(__20848,c__17913__auto___20852,G__18340_20849,G__18340_20850__$1,n__5636__auto___20847,jobs,results,process__$1,async))
);


break;
case "async":
var c__17913__auto___20871 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20848,c__17913__auto___20871,G__18340_20849,G__18340_20850__$1,n__5636__auto___20847,jobs,results,process__$1,async){
return (function (){
var f__17914__auto__ = (function (){var switch__15036__auto__ = ((function (__20848,c__17913__auto___20871,G__18340_20849,G__18340_20850__$1,n__5636__auto___20847,jobs,results,process__$1,async){
return (function (state_18423){
var state_val_18424 = (state_18423[(1)]);
if((state_val_18424 === (1))){
var state_18423__$1 = state_18423;
var statearr_18425_20876 = state_18423__$1;
(statearr_18425_20876[(2)] = null);

(statearr_18425_20876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (2))){
var state_18423__$1 = state_18423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18423__$1,(4),jobs);
} else {
if((state_val_18424 === (3))){
var inst_18414 = (state_18423[(2)]);
var state_18423__$1 = state_18423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18423__$1,inst_18414);
} else {
if((state_val_18424 === (4))){
var inst_18398 = (state_18423[(2)]);
var inst_18399 = async(inst_18398);
var state_18423__$1 = state_18423;
if(cljs.core.truth_(inst_18399)){
var statearr_18433_20877 = state_18423__$1;
(statearr_18433_20877[(1)] = (5));

} else {
var statearr_18434_20878 = state_18423__$1;
(statearr_18434_20878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (5))){
var state_18423__$1 = state_18423;
var statearr_18437_20879 = state_18423__$1;
(statearr_18437_20879[(2)] = null);

(statearr_18437_20879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (6))){
var state_18423__$1 = state_18423;
var statearr_18444_20880 = state_18423__$1;
(statearr_18444_20880[(2)] = null);

(statearr_18444_20880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (7))){
var inst_18409 = (state_18423[(2)]);
var state_18423__$1 = state_18423;
var statearr_18449_20881 = state_18423__$1;
(statearr_18449_20881[(2)] = inst_18409);

(statearr_18449_20881[(1)] = (3));


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
});})(__20848,c__17913__auto___20871,G__18340_20849,G__18340_20850__$1,n__5636__auto___20847,jobs,results,process__$1,async))
;
return ((function (__20848,switch__15036__auto__,c__17913__auto___20871,G__18340_20849,G__18340_20850__$1,n__5636__auto___20847,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____0 = (function (){
var statearr_18452 = [null,null,null,null,null,null,null];
(statearr_18452[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__);

(statearr_18452[(1)] = (1));

return statearr_18452;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____1 = (function (state_18423){
while(true){
var ret_value__15038__auto__ = (function (){try{while(true){
var result__15039__auto__ = switch__15036__auto__(state_18423);
if(cljs.core.keyword_identical_QMARK_(result__15039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15039__auto__;
}
break;
}
}catch (e18454){var ex__15040__auto__ = e18454;
var statearr_18459_20882 = state_18423;
(statearr_18459_20882[(2)] = ex__15040__auto__);


if(cljs.core.seq((state_18423[(4)]))){
var statearr_18466_20883 = state_18423;
(statearr_18466_20883[(1)] = cljs.core.first((state_18423[(4)])));

} else {
throw ex__15040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20884 = state_18423;
state_18423 = G__20884;
continue;
} else {
return ret_value__15038__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__ = function(state_18423){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____1.call(this,state_18423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__;
})()
;})(__20848,switch__15036__auto__,c__17913__auto___20871,G__18340_20849,G__18340_20850__$1,n__5636__auto___20847,jobs,results,process__$1,async))
})();
var state__17915__auto__ = (function (){var statearr_18469 = f__17914__auto__();
(statearr_18469[(6)] = c__17913__auto___20871);

return statearr_18469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17915__auto__);
});})(__20848,c__17913__auto___20871,G__18340_20849,G__18340_20850__$1,n__5636__auto___20847,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18340_20850__$1)].join('')));

}

var G__20885 = (__20848 + (1));
__20848 = G__20885;
continue;
} else {
}
break;
}

var c__17913__auto___20886 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17914__auto__ = (function (){var switch__15036__auto__ = (function (state_18499){
var state_val_18500 = (state_18499[(1)]);
if((state_val_18500 === (7))){
var inst_18490 = (state_18499[(2)]);
var state_18499__$1 = state_18499;
var statearr_18504_20887 = state_18499__$1;
(statearr_18504_20887[(2)] = inst_18490);

(statearr_18504_20887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18500 === (1))){
var state_18499__$1 = state_18499;
var statearr_18505_20888 = state_18499__$1;
(statearr_18505_20888[(2)] = null);

(statearr_18505_20888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18500 === (4))){
var inst_18475 = (state_18499[(7)]);
var inst_18475__$1 = (state_18499[(2)]);
var inst_18476 = (inst_18475__$1 == null);
var state_18499__$1 = (function (){var statearr_18506 = state_18499;
(statearr_18506[(7)] = inst_18475__$1);

return statearr_18506;
})();
if(cljs.core.truth_(inst_18476)){
var statearr_18507_20889 = state_18499__$1;
(statearr_18507_20889[(1)] = (5));

} else {
var statearr_18509_20890 = state_18499__$1;
(statearr_18509_20890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18500 === (6))){
var inst_18475 = (state_18499[(7)]);
var inst_18480 = (state_18499[(8)]);
var inst_18480__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18481 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18482 = [inst_18475,inst_18480__$1];
var inst_18483 = (new cljs.core.PersistentVector(null,2,(5),inst_18481,inst_18482,null));
var state_18499__$1 = (function (){var statearr_18511 = state_18499;
(statearr_18511[(8)] = inst_18480__$1);

return statearr_18511;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18499__$1,(8),jobs,inst_18483);
} else {
if((state_val_18500 === (3))){
var inst_18496 = (state_18499[(2)]);
var state_18499__$1 = state_18499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18499__$1,inst_18496);
} else {
if((state_val_18500 === (2))){
var state_18499__$1 = state_18499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18499__$1,(4),from);
} else {
if((state_val_18500 === (9))){
var inst_18487 = (state_18499[(2)]);
var state_18499__$1 = (function (){var statearr_18516 = state_18499;
(statearr_18516[(9)] = inst_18487);

return statearr_18516;
})();
var statearr_18517_20892 = state_18499__$1;
(statearr_18517_20892[(2)] = null);

(statearr_18517_20892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18500 === (5))){
var inst_18478 = cljs.core.async.close_BANG_(jobs);
var state_18499__$1 = state_18499;
var statearr_18521_20893 = state_18499__$1;
(statearr_18521_20893[(2)] = inst_18478);

(statearr_18521_20893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18500 === (8))){
var inst_18480 = (state_18499[(8)]);
var inst_18485 = (state_18499[(2)]);
var state_18499__$1 = (function (){var statearr_18523 = state_18499;
(statearr_18523[(10)] = inst_18485);

return statearr_18523;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18499__$1,(9),results,inst_18480);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____0 = (function (){
var statearr_18531 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18531[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__);

(statearr_18531[(1)] = (1));

return statearr_18531;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____1 = (function (state_18499){
while(true){
var ret_value__15038__auto__ = (function (){try{while(true){
var result__15039__auto__ = switch__15036__auto__(state_18499);
if(cljs.core.keyword_identical_QMARK_(result__15039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15039__auto__;
}
break;
}
}catch (e18536){var ex__15040__auto__ = e18536;
var statearr_18537_20894 = state_18499;
(statearr_18537_20894[(2)] = ex__15040__auto__);


if(cljs.core.seq((state_18499[(4)]))){
var statearr_18542_20895 = state_18499;
(statearr_18542_20895[(1)] = cljs.core.first((state_18499[(4)])));

} else {
throw ex__15040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20896 = state_18499;
state_18499 = G__20896;
continue;
} else {
return ret_value__15038__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__ = function(state_18499){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____1.call(this,state_18499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__;
})()
})();
var state__17915__auto__ = (function (){var statearr_18545 = f__17914__auto__();
(statearr_18545[(6)] = c__17913__auto___20886);

return statearr_18545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17915__auto__);
}));


var c__17913__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17914__auto__ = (function (){var switch__15036__auto__ = (function (state_18596){
var state_val_18598 = (state_18596[(1)]);
if((state_val_18598 === (7))){
var inst_18590 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
var statearr_18605_20897 = state_18596__$1;
(statearr_18605_20897[(2)] = inst_18590);

(statearr_18605_20897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18598 === (20))){
var state_18596__$1 = state_18596;
var statearr_18607_20898 = state_18596__$1;
(statearr_18607_20898[(2)] = null);

(statearr_18607_20898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18598 === (1))){
var state_18596__$1 = state_18596;
var statearr_18608_20899 = state_18596__$1;
(statearr_18608_20899[(2)] = null);

(statearr_18608_20899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18598 === (4))){
var inst_18552 = (state_18596[(7)]);
var inst_18552__$1 = (state_18596[(2)]);
var inst_18553 = (inst_18552__$1 == null);
var state_18596__$1 = (function (){var statearr_18613 = state_18596;
(statearr_18613[(7)] = inst_18552__$1);

return statearr_18613;
})();
if(cljs.core.truth_(inst_18553)){
var statearr_18617_20900 = state_18596__$1;
(statearr_18617_20900[(1)] = (5));

} else {
var statearr_18618_20901 = state_18596__$1;
(statearr_18618_20901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18598 === (15))){
var inst_18570 = (state_18596[(8)]);
var state_18596__$1 = state_18596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18596__$1,(18),to,inst_18570);
} else {
if((state_val_18598 === (21))){
var inst_18585 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
var statearr_18622_20902 = state_18596__$1;
(statearr_18622_20902[(2)] = inst_18585);

(statearr_18622_20902[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18598 === (13))){
var inst_18587 = (state_18596[(2)]);
var state_18596__$1 = (function (){var statearr_18625 = state_18596;
(statearr_18625[(9)] = inst_18587);

return statearr_18625;
})();
var statearr_18627_20903 = state_18596__$1;
(statearr_18627_20903[(2)] = null);

(statearr_18627_20903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18598 === (6))){
var inst_18552 = (state_18596[(7)]);
var state_18596__$1 = state_18596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18596__$1,(11),inst_18552);
} else {
if((state_val_18598 === (17))){
var inst_18580 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
if(cljs.core.truth_(inst_18580)){
var statearr_18633_20904 = state_18596__$1;
(statearr_18633_20904[(1)] = (19));

} else {
var statearr_18638_20905 = state_18596__$1;
(statearr_18638_20905[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18598 === (3))){
var inst_18593 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18596__$1,inst_18593);
} else {
if((state_val_18598 === (12))){
var inst_18565 = (state_18596[(10)]);
var state_18596__$1 = state_18596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18596__$1,(14),inst_18565);
} else {
if((state_val_18598 === (2))){
var state_18596__$1 = state_18596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18596__$1,(4),results);
} else {
if((state_val_18598 === (19))){
var state_18596__$1 = state_18596;
var statearr_18647_20906 = state_18596__$1;
(statearr_18647_20906[(2)] = null);

(statearr_18647_20906[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18598 === (11))){
var inst_18565 = (state_18596[(2)]);
var state_18596__$1 = (function (){var statearr_18651 = state_18596;
(statearr_18651[(10)] = inst_18565);

return statearr_18651;
})();
var statearr_18652_20907 = state_18596__$1;
(statearr_18652_20907[(2)] = null);

(statearr_18652_20907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18598 === (9))){
var state_18596__$1 = state_18596;
var statearr_18656_20908 = state_18596__$1;
(statearr_18656_20908[(2)] = null);

(statearr_18656_20908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18598 === (5))){
var state_18596__$1 = state_18596;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18659_20909 = state_18596__$1;
(statearr_18659_20909[(1)] = (8));

} else {
var statearr_18660_20910 = state_18596__$1;
(statearr_18660_20910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18598 === (14))){
var inst_18570 = (state_18596[(8)]);
var inst_18574 = (state_18596[(11)]);
var inst_18570__$1 = (state_18596[(2)]);
var inst_18573 = (inst_18570__$1 == null);
var inst_18574__$1 = cljs.core.not(inst_18573);
var state_18596__$1 = (function (){var statearr_18665 = state_18596;
(statearr_18665[(8)] = inst_18570__$1);

(statearr_18665[(11)] = inst_18574__$1);

return statearr_18665;
})();
if(inst_18574__$1){
var statearr_18666_20911 = state_18596__$1;
(statearr_18666_20911[(1)] = (15));

} else {
var statearr_18667_20912 = state_18596__$1;
(statearr_18667_20912[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18598 === (16))){
var inst_18574 = (state_18596[(11)]);
var state_18596__$1 = state_18596;
var statearr_18671_20913 = state_18596__$1;
(statearr_18671_20913[(2)] = inst_18574);

(statearr_18671_20913[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18598 === (10))){
var inst_18561 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
var statearr_18678_20914 = state_18596__$1;
(statearr_18678_20914[(2)] = inst_18561);

(statearr_18678_20914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18598 === (18))){
var inst_18577 = (state_18596[(2)]);
var state_18596__$1 = state_18596;
var statearr_18679_20915 = state_18596__$1;
(statearr_18679_20915[(2)] = inst_18577);

(statearr_18679_20915[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18598 === (8))){
var inst_18558 = cljs.core.async.close_BANG_(to);
var state_18596__$1 = state_18596;
var statearr_18684_20916 = state_18596__$1;
(statearr_18684_20916[(2)] = inst_18558);

(statearr_18684_20916[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____0 = (function (){
var statearr_18695 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18695[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__);

(statearr_18695[(1)] = (1));

return statearr_18695;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____1 = (function (state_18596){
while(true){
var ret_value__15038__auto__ = (function (){try{while(true){
var result__15039__auto__ = switch__15036__auto__(state_18596);
if(cljs.core.keyword_identical_QMARK_(result__15039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15039__auto__;
}
break;
}
}catch (e18697){var ex__15040__auto__ = e18697;
var statearr_18703_20919 = state_18596;
(statearr_18703_20919[(2)] = ex__15040__auto__);


if(cljs.core.seq((state_18596[(4)]))){
var statearr_18705_20920 = state_18596;
(statearr_18705_20920[(1)] = cljs.core.first((state_18596[(4)])));

} else {
throw ex__15040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20921 = state_18596;
state_18596 = G__20921;
continue;
} else {
return ret_value__15038__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__ = function(state_18596){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____1.call(this,state_18596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15037__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15037__auto__;
})()
})();
var state__17915__auto__ = (function (){var statearr_18714 = f__17914__auto__();
(statearr_18714[(6)] = c__17913__auto__);

return statearr_18714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17915__auto__);
}));

return c__17913__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18730 = arguments.length;
switch (G__18730) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__18751 = arguments.length;
switch (G__18751) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__18771 = arguments.length;
switch (G__18771) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17913__auto___20933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17914__auto__ = (function (){var switch__15036__auto__ = (function (state_18812){
var state_val_18813 = (state_18812[(1)]);
if((state_val_18813 === (7))){
var inst_18808 = (state_18812[(2)]);
var state_18812__$1 = state_18812;
var statearr_18831_20935 = state_18812__$1;
(statearr_18831_20935[(2)] = inst_18808);

(statearr_18831_20935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18813 === (1))){
var state_18812__$1 = state_18812;
var statearr_18838_20936 = state_18812__$1;
(statearr_18838_20936[(2)] = null);

(statearr_18838_20936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18813 === (4))){
var inst_18789 = (state_18812[(7)]);
var inst_18789__$1 = (state_18812[(2)]);
var inst_18790 = (inst_18789__$1 == null);
var state_18812__$1 = (function (){var statearr_18839 = state_18812;
(statearr_18839[(7)] = inst_18789__$1);

return statearr_18839;
})();
if(cljs.core.truth_(inst_18790)){
var statearr_18846_20937 = state_18812__$1;
(statearr_18846_20937[(1)] = (5));

} else {
var statearr_18847_20938 = state_18812__$1;
(statearr_18847_20938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18813 === (13))){
var state_18812__$1 = state_18812;
var statearr_18848_20939 = state_18812__$1;
(statearr_18848_20939[(2)] = null);

(statearr_18848_20939[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18813 === (6))){
var inst_18789 = (state_18812[(7)]);
var inst_18795 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18789) : p.call(null,inst_18789));
var state_18812__$1 = state_18812;
if(cljs.core.truth_(inst_18795)){
var statearr_18849_20940 = state_18812__$1;
(statearr_18849_20940[(1)] = (9));

} else {
var statearr_18850_20941 = state_18812__$1;
(statearr_18850_20941[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18813 === (3))){
var inst_18810 = (state_18812[(2)]);
var state_18812__$1 = state_18812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18812__$1,inst_18810);
} else {
if((state_val_18813 === (12))){
var state_18812__$1 = state_18812;
var statearr_18853_20942 = state_18812__$1;
(statearr_18853_20942[(2)] = null);

(statearr_18853_20942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18813 === (2))){
var state_18812__$1 = state_18812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18812__$1,(4),ch);
} else {
if((state_val_18813 === (11))){
var inst_18789 = (state_18812[(7)]);
var inst_18799 = (state_18812[(2)]);
var state_18812__$1 = state_18812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18812__$1,(8),inst_18799,inst_18789);
} else {
if((state_val_18813 === (9))){
var state_18812__$1 = state_18812;
var statearr_18870_20945 = state_18812__$1;
(statearr_18870_20945[(2)] = tc);

(statearr_18870_20945[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18813 === (5))){
var inst_18792 = cljs.core.async.close_BANG_(tc);
var inst_18793 = cljs.core.async.close_BANG_(fc);
var state_18812__$1 = (function (){var statearr_18883 = state_18812;
(statearr_18883[(8)] = inst_18792);

return statearr_18883;
})();
var statearr_18884_20946 = state_18812__$1;
(statearr_18884_20946[(2)] = inst_18793);

(statearr_18884_20946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18813 === (14))){
var inst_18806 = (state_18812[(2)]);
var state_18812__$1 = state_18812;
var statearr_18885_20947 = state_18812__$1;
(statearr_18885_20947[(2)] = inst_18806);

(statearr_18885_20947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18813 === (10))){
var state_18812__$1 = state_18812;
var statearr_18886_20948 = state_18812__$1;
(statearr_18886_20948[(2)] = fc);

(statearr_18886_20948[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18813 === (8))){
var inst_18801 = (state_18812[(2)]);
var state_18812__$1 = state_18812;
if(cljs.core.truth_(inst_18801)){
var statearr_18887_20949 = state_18812__$1;
(statearr_18887_20949[(1)] = (12));

} else {
var statearr_18888_20950 = state_18812__$1;
(statearr_18888_20950[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__15037__auto__ = null;
var cljs$core$async$state_machine__15037__auto____0 = (function (){
var statearr_18891 = [null,null,null,null,null,null,null,null,null];
(statearr_18891[(0)] = cljs$core$async$state_machine__15037__auto__);

(statearr_18891[(1)] = (1));

return statearr_18891;
});
var cljs$core$async$state_machine__15037__auto____1 = (function (state_18812){
while(true){
var ret_value__15038__auto__ = (function (){try{while(true){
var result__15039__auto__ = switch__15036__auto__(state_18812);
if(cljs.core.keyword_identical_QMARK_(result__15039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15039__auto__;
}
break;
}
}catch (e18892){var ex__15040__auto__ = e18892;
var statearr_18894_20954 = state_18812;
(statearr_18894_20954[(2)] = ex__15040__auto__);


if(cljs.core.seq((state_18812[(4)]))){
var statearr_18895_20955 = state_18812;
(statearr_18895_20955[(1)] = cljs.core.first((state_18812[(4)])));

} else {
throw ex__15040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20956 = state_18812;
state_18812 = G__20956;
continue;
} else {
return ret_value__15038__auto__;
}
break;
}
});
cljs$core$async$state_machine__15037__auto__ = function(state_18812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15037__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15037__auto____1.call(this,state_18812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15037__auto____0;
cljs$core$async$state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15037__auto____1;
return cljs$core$async$state_machine__15037__auto__;
})()
})();
var state__17915__auto__ = (function (){var statearr_18901 = f__17914__auto__();
(statearr_18901[(6)] = c__17913__auto___20933);

return statearr_18901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17915__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17913__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17914__auto__ = (function (){var switch__15036__auto__ = (function (state_18927){
var state_val_18928 = (state_18927[(1)]);
if((state_val_18928 === (7))){
var inst_18923 = (state_18927[(2)]);
var state_18927__$1 = state_18927;
var statearr_18929_20957 = state_18927__$1;
(statearr_18929_20957[(2)] = inst_18923);

(statearr_18929_20957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18928 === (1))){
var inst_18904 = init;
var inst_18905 = inst_18904;
var state_18927__$1 = (function (){var statearr_18931 = state_18927;
(statearr_18931[(7)] = inst_18905);

return statearr_18931;
})();
var statearr_18935_20958 = state_18927__$1;
(statearr_18935_20958[(2)] = null);

(statearr_18935_20958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18928 === (4))){
var inst_18909 = (state_18927[(8)]);
var inst_18909__$1 = (state_18927[(2)]);
var inst_18910 = (inst_18909__$1 == null);
var state_18927__$1 = (function (){var statearr_18936 = state_18927;
(statearr_18936[(8)] = inst_18909__$1);

return statearr_18936;
})();
if(cljs.core.truth_(inst_18910)){
var statearr_18937_20959 = state_18927__$1;
(statearr_18937_20959[(1)] = (5));

} else {
var statearr_18938_20960 = state_18927__$1;
(statearr_18938_20960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18928 === (6))){
var inst_18914 = (state_18927[(9)]);
var inst_18909 = (state_18927[(8)]);
var inst_18905 = (state_18927[(7)]);
var inst_18914__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18905,inst_18909) : f.call(null,inst_18905,inst_18909));
var inst_18915 = cljs.core.reduced_QMARK_(inst_18914__$1);
var state_18927__$1 = (function (){var statearr_18946 = state_18927;
(statearr_18946[(9)] = inst_18914__$1);

return statearr_18946;
})();
if(inst_18915){
var statearr_18947_20961 = state_18927__$1;
(statearr_18947_20961[(1)] = (8));

} else {
var statearr_18948_20962 = state_18927__$1;
(statearr_18948_20962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18928 === (3))){
var inst_18925 = (state_18927[(2)]);
var state_18927__$1 = state_18927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18927__$1,inst_18925);
} else {
if((state_val_18928 === (2))){
var state_18927__$1 = state_18927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18927__$1,(4),ch);
} else {
if((state_val_18928 === (9))){
var inst_18914 = (state_18927[(9)]);
var inst_18905 = inst_18914;
var state_18927__$1 = (function (){var statearr_18950 = state_18927;
(statearr_18950[(7)] = inst_18905);

return statearr_18950;
})();
var statearr_18951_20963 = state_18927__$1;
(statearr_18951_20963[(2)] = null);

(statearr_18951_20963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18928 === (5))){
var inst_18905 = (state_18927[(7)]);
var state_18927__$1 = state_18927;
var statearr_18953_20964 = state_18927__$1;
(statearr_18953_20964[(2)] = inst_18905);

(statearr_18953_20964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18928 === (10))){
var inst_18921 = (state_18927[(2)]);
var state_18927__$1 = state_18927;
var statearr_18954_20965 = state_18927__$1;
(statearr_18954_20965[(2)] = inst_18921);

(statearr_18954_20965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18928 === (8))){
var inst_18914 = (state_18927[(9)]);
var inst_18917 = cljs.core.deref(inst_18914);
var state_18927__$1 = state_18927;
var statearr_18955_20966 = state_18927__$1;
(statearr_18955_20966[(2)] = inst_18917);

(statearr_18955_20966[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__15037__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15037__auto____0 = (function (){
var statearr_18961 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18961[(0)] = cljs$core$async$reduce_$_state_machine__15037__auto__);

(statearr_18961[(1)] = (1));

return statearr_18961;
});
var cljs$core$async$reduce_$_state_machine__15037__auto____1 = (function (state_18927){
while(true){
var ret_value__15038__auto__ = (function (){try{while(true){
var result__15039__auto__ = switch__15036__auto__(state_18927);
if(cljs.core.keyword_identical_QMARK_(result__15039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15039__auto__;
}
break;
}
}catch (e18962){var ex__15040__auto__ = e18962;
var statearr_18963_20967 = state_18927;
(statearr_18963_20967[(2)] = ex__15040__auto__);


if(cljs.core.seq((state_18927[(4)]))){
var statearr_18964_20968 = state_18927;
(statearr_18964_20968[(1)] = cljs.core.first((state_18927[(4)])));

} else {
throw ex__15040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20970 = state_18927;
state_18927 = G__20970;
continue;
} else {
return ret_value__15038__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15037__auto__ = function(state_18927){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15037__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15037__auto____1.call(this,state_18927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15037__auto____0;
cljs$core$async$reduce_$_state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15037__auto____1;
return cljs$core$async$reduce_$_state_machine__15037__auto__;
})()
})();
var state__17915__auto__ = (function (){var statearr_18966 = f__17914__auto__();
(statearr_18966[(6)] = c__17913__auto__);

return statearr_18966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17915__auto__);
}));

return c__17913__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17913__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17914__auto__ = (function (){var switch__15036__auto__ = (function (state_18973){
var state_val_18974 = (state_18973[(1)]);
if((state_val_18974 === (1))){
var inst_18968 = cljs.core.async.reduce(f__$1,init,ch);
var state_18973__$1 = state_18973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18973__$1,(2),inst_18968);
} else {
if((state_val_18974 === (2))){
var inst_18970 = (state_18973[(2)]);
var inst_18971 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18970) : f__$1.call(null,inst_18970));
var state_18973__$1 = state_18973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18973__$1,inst_18971);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__15037__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15037__auto____0 = (function (){
var statearr_18985 = [null,null,null,null,null,null,null];
(statearr_18985[(0)] = cljs$core$async$transduce_$_state_machine__15037__auto__);

(statearr_18985[(1)] = (1));

return statearr_18985;
});
var cljs$core$async$transduce_$_state_machine__15037__auto____1 = (function (state_18973){
while(true){
var ret_value__15038__auto__ = (function (){try{while(true){
var result__15039__auto__ = switch__15036__auto__(state_18973);
if(cljs.core.keyword_identical_QMARK_(result__15039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15039__auto__;
}
break;
}
}catch (e18987){var ex__15040__auto__ = e18987;
var statearr_18988_20977 = state_18973;
(statearr_18988_20977[(2)] = ex__15040__auto__);


if(cljs.core.seq((state_18973[(4)]))){
var statearr_18989_20978 = state_18973;
(statearr_18989_20978[(1)] = cljs.core.first((state_18973[(4)])));

} else {
throw ex__15040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20979 = state_18973;
state_18973 = G__20979;
continue;
} else {
return ret_value__15038__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15037__auto__ = function(state_18973){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15037__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15037__auto____1.call(this,state_18973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15037__auto____0;
cljs$core$async$transduce_$_state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15037__auto____1;
return cljs$core$async$transduce_$_state_machine__15037__auto__;
})()
})();
var state__17915__auto__ = (function (){var statearr_18990 = f__17914__auto__();
(statearr_18990[(6)] = c__17913__auto__);

return statearr_18990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17915__auto__);
}));

return c__17913__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__18992 = arguments.length;
switch (G__18992) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17913__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17914__auto__ = (function (){var switch__15036__auto__ = (function (state_19023){
var state_val_19024 = (state_19023[(1)]);
if((state_val_19024 === (7))){
var inst_19004 = (state_19023[(2)]);
var state_19023__$1 = state_19023;
var statearr_19025_20981 = state_19023__$1;
(statearr_19025_20981[(2)] = inst_19004);

(statearr_19025_20981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (1))){
var inst_18993 = cljs.core.seq(coll);
var inst_18994 = inst_18993;
var state_19023__$1 = (function (){var statearr_19026 = state_19023;
(statearr_19026[(7)] = inst_18994);

return statearr_19026;
})();
var statearr_19027_20982 = state_19023__$1;
(statearr_19027_20982[(2)] = null);

(statearr_19027_20982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (4))){
var inst_18994 = (state_19023[(7)]);
var inst_18999 = cljs.core.first(inst_18994);
var state_19023__$1 = state_19023;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19023__$1,(7),ch,inst_18999);
} else {
if((state_val_19024 === (13))){
var inst_19017 = (state_19023[(2)]);
var state_19023__$1 = state_19023;
var statearr_19032_20983 = state_19023__$1;
(statearr_19032_20983[(2)] = inst_19017);

(statearr_19032_20983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (6))){
var inst_19007 = (state_19023[(2)]);
var state_19023__$1 = state_19023;
if(cljs.core.truth_(inst_19007)){
var statearr_19034_20984 = state_19023__$1;
(statearr_19034_20984[(1)] = (8));

} else {
var statearr_19035_20985 = state_19023__$1;
(statearr_19035_20985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (3))){
var inst_19021 = (state_19023[(2)]);
var state_19023__$1 = state_19023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19023__$1,inst_19021);
} else {
if((state_val_19024 === (12))){
var state_19023__$1 = state_19023;
var statearr_19039_20986 = state_19023__$1;
(statearr_19039_20986[(2)] = null);

(statearr_19039_20986[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (2))){
var inst_18994 = (state_19023[(7)]);
var state_19023__$1 = state_19023;
if(cljs.core.truth_(inst_18994)){
var statearr_19045_20987 = state_19023__$1;
(statearr_19045_20987[(1)] = (4));

} else {
var statearr_19046_20988 = state_19023__$1;
(statearr_19046_20988[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (11))){
var inst_19014 = cljs.core.async.close_BANG_(ch);
var state_19023__$1 = state_19023;
var statearr_19047_20989 = state_19023__$1;
(statearr_19047_20989[(2)] = inst_19014);

(statearr_19047_20989[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (9))){
var state_19023__$1 = state_19023;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19048_20990 = state_19023__$1;
(statearr_19048_20990[(1)] = (11));

} else {
var statearr_19049_20991 = state_19023__$1;
(statearr_19049_20991[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (5))){
var inst_18994 = (state_19023[(7)]);
var state_19023__$1 = state_19023;
var statearr_19051_20992 = state_19023__$1;
(statearr_19051_20992[(2)] = inst_18994);

(statearr_19051_20992[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (10))){
var inst_19019 = (state_19023[(2)]);
var state_19023__$1 = state_19023;
var statearr_19052_20993 = state_19023__$1;
(statearr_19052_20993[(2)] = inst_19019);

(statearr_19052_20993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19024 === (8))){
var inst_18994 = (state_19023[(7)]);
var inst_19009 = cljs.core.next(inst_18994);
var inst_18994__$1 = inst_19009;
var state_19023__$1 = (function (){var statearr_19054 = state_19023;
(statearr_19054[(7)] = inst_18994__$1);

return statearr_19054;
})();
var statearr_19055_20994 = state_19023__$1;
(statearr_19055_20994[(2)] = null);

(statearr_19055_20994[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__15037__auto__ = null;
var cljs$core$async$state_machine__15037__auto____0 = (function (){
var statearr_19059 = [null,null,null,null,null,null,null,null];
(statearr_19059[(0)] = cljs$core$async$state_machine__15037__auto__);

(statearr_19059[(1)] = (1));

return statearr_19059;
});
var cljs$core$async$state_machine__15037__auto____1 = (function (state_19023){
while(true){
var ret_value__15038__auto__ = (function (){try{while(true){
var result__15039__auto__ = switch__15036__auto__(state_19023);
if(cljs.core.keyword_identical_QMARK_(result__15039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15039__auto__;
}
break;
}
}catch (e19060){var ex__15040__auto__ = e19060;
var statearr_19061_20995 = state_19023;
(statearr_19061_20995[(2)] = ex__15040__auto__);


if(cljs.core.seq((state_19023[(4)]))){
var statearr_19062_20996 = state_19023;
(statearr_19062_20996[(1)] = cljs.core.first((state_19023[(4)])));

} else {
throw ex__15040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20997 = state_19023;
state_19023 = G__20997;
continue;
} else {
return ret_value__15038__auto__;
}
break;
}
});
cljs$core$async$state_machine__15037__auto__ = function(state_19023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15037__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15037__auto____1.call(this,state_19023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15037__auto____0;
cljs$core$async$state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15037__auto____1;
return cljs$core$async$state_machine__15037__auto__;
})()
})();
var state__17915__auto__ = (function (){var statearr_19065 = f__17914__auto__();
(statearr_19065[(6)] = c__17913__auto__);

return statearr_19065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17915__auto__);
}));

return c__17913__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__19067 = arguments.length;
switch (G__19067) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_21001 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_21001(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_21002 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_21002(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_21003 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_21003(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_21008 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_21008(m);
}
});


/**
* @constructor
 * @implements {shadow.build.cljs_hacks.IMeta}
 * @implements {shadow.build.cljs_hacks.IWithMeta}
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.async.Mux}
*/
cljs.core.async.t_cljs$core$async19092 = (function (ch,cs,meta19093){
this.ch = ch;
this.cs = cs;
this.meta19093 = meta19093;
});
(cljs.core.async.t_cljs$core$async19092.prototype.shadow$build$cljs_hacks$IWithMeta$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19092.prototype.shadow$build$cljs_hacks$IWithMeta$_with_meta$arity$2 = (function (_19094,meta19093__$1){
var self__ = this;
var _19094__$1 = this;
return (new cljs.core.async.t_cljs$core$async19092(self__.ch,self__.cs,meta19093__$1));
}));

(cljs.core.async.t_cljs$core$async19092.prototype.shadow$build$cljs_hacks$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19092.prototype.shadow$build$cljs_hacks$IMeta$_meta$arity$1 = (function (_19094){
var self__ = this;
var _19094__$1 = this;
return self__.meta19093;
}));

(cljs.core.async.t_cljs$core$async19092.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19092.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19092.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19092.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async19092.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async19092.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async19092.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19093","meta19093",928102474,null)], null);
}));

(cljs.core.async.t_cljs$core$async19092.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19092");

(cljs.core.async.t_cljs$core$async19092.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19092");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19092.
 */
cljs.core.async.__GT_t_cljs$core$async19092 = (function cljs$core$async$__GT_t_cljs$core$async19092(ch,cs,meta19093){
return (new cljs.core.async.t_cljs$core$async19092(ch,cs,meta19093));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async19092(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17913__auto___21009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17914__auto__ = (function (){var switch__15036__auto__ = (function (state_19239){
var state_val_19240 = (state_19239[(1)]);
if((state_val_19240 === (7))){
var inst_19234 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19241_21010 = state_19239__$1;
(statearr_19241_21010[(2)] = inst_19234);

(statearr_19241_21010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (20))){
var inst_19135 = (state_19239[(7)]);
var inst_19147 = cljs.core.first(inst_19135);
var inst_19148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19147,(0),null);
var inst_19149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19147,(1),null);
var state_19239__$1 = (function (){var statearr_19243 = state_19239;
(statearr_19243[(8)] = inst_19148);

return statearr_19243;
})();
if(cljs.core.truth_(inst_19149)){
var statearr_19244_21011 = state_19239__$1;
(statearr_19244_21011[(1)] = (22));

} else {
var statearr_19245_21012 = state_19239__$1;
(statearr_19245_21012[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (27))){
var inst_19186 = (state_19239[(9)]);
var inst_19179 = (state_19239[(10)]);
var inst_19181 = (state_19239[(11)]);
var inst_19104 = (state_19239[(12)]);
var inst_19186__$1 = cljs.core._nth(inst_19179,inst_19181);
var inst_19187 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19186__$1,inst_19104,done);
var state_19239__$1 = (function (){var statearr_19250 = state_19239;
(statearr_19250[(9)] = inst_19186__$1);

return statearr_19250;
})();
if(cljs.core.truth_(inst_19187)){
var statearr_19252_21013 = state_19239__$1;
(statearr_19252_21013[(1)] = (30));

} else {
var statearr_19253_21014 = state_19239__$1;
(statearr_19253_21014[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (1))){
var state_19239__$1 = state_19239;
var statearr_19254_21015 = state_19239__$1;
(statearr_19254_21015[(2)] = null);

(statearr_19254_21015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (24))){
var inst_19135 = (state_19239[(7)]);
var inst_19154 = (state_19239[(2)]);
var inst_19155 = cljs.core.next(inst_19135);
var inst_19113 = inst_19155;
var inst_19114 = null;
var inst_19115 = (0);
var inst_19116 = (0);
var state_19239__$1 = (function (){var statearr_19256 = state_19239;
(statearr_19256[(13)] = inst_19113);

(statearr_19256[(14)] = inst_19154);

(statearr_19256[(15)] = inst_19116);

(statearr_19256[(16)] = inst_19114);

(statearr_19256[(17)] = inst_19115);

return statearr_19256;
})();
var statearr_19257_21018 = state_19239__$1;
(statearr_19257_21018[(2)] = null);

(statearr_19257_21018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (39))){
var state_19239__$1 = state_19239;
var statearr_19262_21019 = state_19239__$1;
(statearr_19262_21019[(2)] = null);

(statearr_19262_21019[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (4))){
var inst_19104 = (state_19239[(12)]);
var inst_19104__$1 = (state_19239[(2)]);
var inst_19105 = (inst_19104__$1 == null);
var state_19239__$1 = (function (){var statearr_19263 = state_19239;
(statearr_19263[(12)] = inst_19104__$1);

return statearr_19263;
})();
if(cljs.core.truth_(inst_19105)){
var statearr_19266_21020 = state_19239__$1;
(statearr_19266_21020[(1)] = (5));

} else {
var statearr_19270_21021 = state_19239__$1;
(statearr_19270_21021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (15))){
var inst_19113 = (state_19239[(13)]);
var inst_19116 = (state_19239[(15)]);
var inst_19114 = (state_19239[(16)]);
var inst_19115 = (state_19239[(17)]);
var inst_19131 = (state_19239[(2)]);
var inst_19132 = (inst_19116 + (1));
var tmp19258 = inst_19113;
var tmp19260 = inst_19114;
var tmp19261 = inst_19115;
var inst_19113__$1 = tmp19258;
var inst_19114__$1 = tmp19260;
var inst_19115__$1 = tmp19261;
var inst_19116__$1 = inst_19132;
var state_19239__$1 = (function (){var statearr_19271 = state_19239;
(statearr_19271[(13)] = inst_19113__$1);

(statearr_19271[(15)] = inst_19116__$1);

(statearr_19271[(16)] = inst_19114__$1);

(statearr_19271[(17)] = inst_19115__$1);

(statearr_19271[(18)] = inst_19131);

return statearr_19271;
})();
var statearr_19272_21022 = state_19239__$1;
(statearr_19272_21022[(2)] = null);

(statearr_19272_21022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (21))){
var inst_19158 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19276_21023 = state_19239__$1;
(statearr_19276_21023[(2)] = inst_19158);

(statearr_19276_21023[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (31))){
var inst_19186 = (state_19239[(9)]);
var inst_19190 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19186);
var state_19239__$1 = state_19239;
var statearr_19278_21024 = state_19239__$1;
(statearr_19278_21024[(2)] = inst_19190);

(statearr_19278_21024[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (32))){
var inst_19179 = (state_19239[(10)]);
var inst_19181 = (state_19239[(11)]);
var inst_19178 = (state_19239[(19)]);
var inst_19180 = (state_19239[(20)]);
var inst_19192 = (state_19239[(2)]);
var inst_19193 = (inst_19181 + (1));
var tmp19273 = inst_19179;
var tmp19274 = inst_19178;
var tmp19275 = inst_19180;
var inst_19178__$1 = tmp19274;
var inst_19179__$1 = tmp19273;
var inst_19180__$1 = tmp19275;
var inst_19181__$1 = inst_19193;
var state_19239__$1 = (function (){var statearr_19279 = state_19239;
(statearr_19279[(10)] = inst_19179__$1);

(statearr_19279[(11)] = inst_19181__$1);

(statearr_19279[(19)] = inst_19178__$1);

(statearr_19279[(20)] = inst_19180__$1);

(statearr_19279[(21)] = inst_19192);

return statearr_19279;
})();
var statearr_19280_21025 = state_19239__$1;
(statearr_19280_21025[(2)] = null);

(statearr_19280_21025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (40))){
var inst_19207 = (state_19239[(22)]);
var inst_19211 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19207);
var state_19239__$1 = state_19239;
var statearr_19281_21026 = state_19239__$1;
(statearr_19281_21026[(2)] = inst_19211);

(statearr_19281_21026[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (33))){
var inst_19196 = (state_19239[(23)]);
var inst_19199 = cljs.core.chunked_seq_QMARK_(inst_19196);
var state_19239__$1 = state_19239;
if(inst_19199){
var statearr_19282_21027 = state_19239__$1;
(statearr_19282_21027[(1)] = (36));

} else {
var statearr_19283_21028 = state_19239__$1;
(statearr_19283_21028[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (13))){
var inst_19125 = (state_19239[(24)]);
var inst_19128 = cljs.core.async.close_BANG_(inst_19125);
var state_19239__$1 = state_19239;
var statearr_19285_21029 = state_19239__$1;
(statearr_19285_21029[(2)] = inst_19128);

(statearr_19285_21029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (22))){
var inst_19148 = (state_19239[(8)]);
var inst_19151 = cljs.core.async.close_BANG_(inst_19148);
var state_19239__$1 = state_19239;
var statearr_19286_21030 = state_19239__$1;
(statearr_19286_21030[(2)] = inst_19151);

(statearr_19286_21030[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (36))){
var inst_19196 = (state_19239[(23)]);
var inst_19202 = cljs.core.chunk_first(inst_19196);
var inst_19203 = cljs.core.chunk_rest(inst_19196);
var inst_19204 = cljs.core.count(inst_19202);
var inst_19178 = inst_19203;
var inst_19179 = inst_19202;
var inst_19180 = inst_19204;
var inst_19181 = (0);
var state_19239__$1 = (function (){var statearr_19287 = state_19239;
(statearr_19287[(10)] = inst_19179);

(statearr_19287[(11)] = inst_19181);

(statearr_19287[(19)] = inst_19178);

(statearr_19287[(20)] = inst_19180);

return statearr_19287;
})();
var statearr_19288_21033 = state_19239__$1;
(statearr_19288_21033[(2)] = null);

(statearr_19288_21033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (41))){
var inst_19196 = (state_19239[(23)]);
var inst_19213 = (state_19239[(2)]);
var inst_19214 = cljs.core.next(inst_19196);
var inst_19178 = inst_19214;
var inst_19179 = null;
var inst_19180 = (0);
var inst_19181 = (0);
var state_19239__$1 = (function (){var statearr_19297 = state_19239;
(statearr_19297[(25)] = inst_19213);

(statearr_19297[(10)] = inst_19179);

(statearr_19297[(11)] = inst_19181);

(statearr_19297[(19)] = inst_19178);

(statearr_19297[(20)] = inst_19180);

return statearr_19297;
})();
var statearr_19304_21034 = state_19239__$1;
(statearr_19304_21034[(2)] = null);

(statearr_19304_21034[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (43))){
var state_19239__$1 = state_19239;
var statearr_19311_21035 = state_19239__$1;
(statearr_19311_21035[(2)] = null);

(statearr_19311_21035[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (29))){
var inst_19222 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19313_21036 = state_19239__$1;
(statearr_19313_21036[(2)] = inst_19222);

(statearr_19313_21036[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (44))){
var inst_19231 = (state_19239[(2)]);
var state_19239__$1 = (function (){var statearr_19315 = state_19239;
(statearr_19315[(26)] = inst_19231);

return statearr_19315;
})();
var statearr_19316_21037 = state_19239__$1;
(statearr_19316_21037[(2)] = null);

(statearr_19316_21037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (6))){
var inst_19169 = (state_19239[(27)]);
var inst_19168 = cljs.core.deref(cs);
var inst_19169__$1 = cljs.core.keys(inst_19168);
var inst_19170 = cljs.core.count(inst_19169__$1);
var inst_19171 = cljs.core.reset_BANG_(dctr,inst_19170);
var inst_19177 = cljs.core.seq(inst_19169__$1);
var inst_19178 = inst_19177;
var inst_19179 = null;
var inst_19180 = (0);
var inst_19181 = (0);
var state_19239__$1 = (function (){var statearr_19325 = state_19239;
(statearr_19325[(10)] = inst_19179);

(statearr_19325[(11)] = inst_19181);

(statearr_19325[(19)] = inst_19178);

(statearr_19325[(27)] = inst_19169__$1);

(statearr_19325[(28)] = inst_19171);

(statearr_19325[(20)] = inst_19180);

return statearr_19325;
})();
var statearr_19332_21038 = state_19239__$1;
(statearr_19332_21038[(2)] = null);

(statearr_19332_21038[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (28))){
var inst_19178 = (state_19239[(19)]);
var inst_19196 = (state_19239[(23)]);
var inst_19196__$1 = cljs.core.seq(inst_19178);
var state_19239__$1 = (function (){var statearr_19339 = state_19239;
(statearr_19339[(23)] = inst_19196__$1);

return statearr_19339;
})();
if(inst_19196__$1){
var statearr_19341_21039 = state_19239__$1;
(statearr_19341_21039[(1)] = (33));

} else {
var statearr_19342_21040 = state_19239__$1;
(statearr_19342_21040[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (25))){
var inst_19181 = (state_19239[(11)]);
var inst_19180 = (state_19239[(20)]);
var inst_19183 = (inst_19181 < inst_19180);
var inst_19184 = inst_19183;
var state_19239__$1 = state_19239;
if(cljs.core.truth_(inst_19184)){
var statearr_19343_21041 = state_19239__$1;
(statearr_19343_21041[(1)] = (27));

} else {
var statearr_19344_21042 = state_19239__$1;
(statearr_19344_21042[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (34))){
var state_19239__$1 = state_19239;
var statearr_19348_21043 = state_19239__$1;
(statearr_19348_21043[(2)] = null);

(statearr_19348_21043[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (17))){
var state_19239__$1 = state_19239;
var statearr_19350_21044 = state_19239__$1;
(statearr_19350_21044[(2)] = null);

(statearr_19350_21044[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (3))){
var inst_19236 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19239__$1,inst_19236);
} else {
if((state_val_19240 === (12))){
var inst_19163 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19352_21045 = state_19239__$1;
(statearr_19352_21045[(2)] = inst_19163);

(statearr_19352_21045[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (2))){
var state_19239__$1 = state_19239;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19239__$1,(4),ch);
} else {
if((state_val_19240 === (23))){
var state_19239__$1 = state_19239;
var statearr_19353_21048 = state_19239__$1;
(statearr_19353_21048[(2)] = null);

(statearr_19353_21048[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (35))){
var inst_19220 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19354_21049 = state_19239__$1;
(statearr_19354_21049[(2)] = inst_19220);

(statearr_19354_21049[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (19))){
var inst_19135 = (state_19239[(7)]);
var inst_19139 = cljs.core.chunk_first(inst_19135);
var inst_19140 = cljs.core.chunk_rest(inst_19135);
var inst_19141 = cljs.core.count(inst_19139);
var inst_19113 = inst_19140;
var inst_19114 = inst_19139;
var inst_19115 = inst_19141;
var inst_19116 = (0);
var state_19239__$1 = (function (){var statearr_19364 = state_19239;
(statearr_19364[(13)] = inst_19113);

(statearr_19364[(15)] = inst_19116);

(statearr_19364[(16)] = inst_19114);

(statearr_19364[(17)] = inst_19115);

return statearr_19364;
})();
var statearr_19365_21050 = state_19239__$1;
(statearr_19365_21050[(2)] = null);

(statearr_19365_21050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (11))){
var inst_19113 = (state_19239[(13)]);
var inst_19135 = (state_19239[(7)]);
var inst_19135__$1 = cljs.core.seq(inst_19113);
var state_19239__$1 = (function (){var statearr_19366 = state_19239;
(statearr_19366[(7)] = inst_19135__$1);

return statearr_19366;
})();
if(inst_19135__$1){
var statearr_19367_21051 = state_19239__$1;
(statearr_19367_21051[(1)] = (16));

} else {
var statearr_19368_21052 = state_19239__$1;
(statearr_19368_21052[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (9))){
var inst_19165 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19369_21053 = state_19239__$1;
(statearr_19369_21053[(2)] = inst_19165);

(statearr_19369_21053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (5))){
var inst_19111 = cljs.core.deref(cs);
var inst_19112 = cljs.core.seq(inst_19111);
var inst_19113 = inst_19112;
var inst_19114 = null;
var inst_19115 = (0);
var inst_19116 = (0);
var state_19239__$1 = (function (){var statearr_19370 = state_19239;
(statearr_19370[(13)] = inst_19113);

(statearr_19370[(15)] = inst_19116);

(statearr_19370[(16)] = inst_19114);

(statearr_19370[(17)] = inst_19115);

return statearr_19370;
})();
var statearr_19371_21054 = state_19239__$1;
(statearr_19371_21054[(2)] = null);

(statearr_19371_21054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (14))){
var state_19239__$1 = state_19239;
var statearr_19372_21055 = state_19239__$1;
(statearr_19372_21055[(2)] = null);

(statearr_19372_21055[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (45))){
var inst_19228 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19373_21056 = state_19239__$1;
(statearr_19373_21056[(2)] = inst_19228);

(statearr_19373_21056[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (26))){
var inst_19169 = (state_19239[(27)]);
var inst_19224 = (state_19239[(2)]);
var inst_19225 = cljs.core.seq(inst_19169);
var state_19239__$1 = (function (){var statearr_19376 = state_19239;
(statearr_19376[(29)] = inst_19224);

return statearr_19376;
})();
if(inst_19225){
var statearr_19377_21057 = state_19239__$1;
(statearr_19377_21057[(1)] = (42));

} else {
var statearr_19378_21058 = state_19239__$1;
(statearr_19378_21058[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (16))){
var inst_19135 = (state_19239[(7)]);
var inst_19137 = cljs.core.chunked_seq_QMARK_(inst_19135);
var state_19239__$1 = state_19239;
if(inst_19137){
var statearr_19379_21059 = state_19239__$1;
(statearr_19379_21059[(1)] = (19));

} else {
var statearr_19380_21060 = state_19239__$1;
(statearr_19380_21060[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (38))){
var inst_19217 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19381_21061 = state_19239__$1;
(statearr_19381_21061[(2)] = inst_19217);

(statearr_19381_21061[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (30))){
var state_19239__$1 = state_19239;
var statearr_19382_21062 = state_19239__$1;
(statearr_19382_21062[(2)] = null);

(statearr_19382_21062[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (10))){
var inst_19116 = (state_19239[(15)]);
var inst_19114 = (state_19239[(16)]);
var inst_19124 = cljs.core._nth(inst_19114,inst_19116);
var inst_19125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19124,(0),null);
var inst_19126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19124,(1),null);
var state_19239__$1 = (function (){var statearr_19383 = state_19239;
(statearr_19383[(24)] = inst_19125);

return statearr_19383;
})();
if(cljs.core.truth_(inst_19126)){
var statearr_19384_21067 = state_19239__$1;
(statearr_19384_21067[(1)] = (13));

} else {
var statearr_19385_21068 = state_19239__$1;
(statearr_19385_21068[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (18))){
var inst_19161 = (state_19239[(2)]);
var state_19239__$1 = state_19239;
var statearr_19386_21069 = state_19239__$1;
(statearr_19386_21069[(2)] = inst_19161);

(statearr_19386_21069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (42))){
var state_19239__$1 = state_19239;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19239__$1,(45),dchan);
} else {
if((state_val_19240 === (37))){
var inst_19207 = (state_19239[(22)]);
var inst_19196 = (state_19239[(23)]);
var inst_19104 = (state_19239[(12)]);
var inst_19207__$1 = cljs.core.first(inst_19196);
var inst_19208 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19207__$1,inst_19104,done);
var state_19239__$1 = (function (){var statearr_19391 = state_19239;
(statearr_19391[(22)] = inst_19207__$1);

return statearr_19391;
})();
if(cljs.core.truth_(inst_19208)){
var statearr_19393_21070 = state_19239__$1;
(statearr_19393_21070[(1)] = (39));

} else {
var statearr_19394_21071 = state_19239__$1;
(statearr_19394_21071[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19240 === (8))){
var inst_19116 = (state_19239[(15)]);
var inst_19115 = (state_19239[(17)]);
var inst_19118 = (inst_19116 < inst_19115);
var inst_19119 = inst_19118;
var state_19239__$1 = state_19239;
if(cljs.core.truth_(inst_19119)){
var statearr_19395_21072 = state_19239__$1;
(statearr_19395_21072[(1)] = (10));

} else {
var statearr_19396_21073 = state_19239__$1;
(statearr_19396_21073[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__15037__auto__ = null;
var cljs$core$async$mult_$_state_machine__15037__auto____0 = (function (){
var statearr_19397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19397[(0)] = cljs$core$async$mult_$_state_machine__15037__auto__);

(statearr_19397[(1)] = (1));

return statearr_19397;
});
var cljs$core$async$mult_$_state_machine__15037__auto____1 = (function (state_19239){
while(true){
var ret_value__15038__auto__ = (function (){try{while(true){
var result__15039__auto__ = switch__15036__auto__(state_19239);
if(cljs.core.keyword_identical_QMARK_(result__15039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15039__auto__;
}
break;
}
}catch (e19398){var ex__15040__auto__ = e19398;
var statearr_19399_21077 = state_19239;
(statearr_19399_21077[(2)] = ex__15040__auto__);


if(cljs.core.seq((state_19239[(4)]))){
var statearr_19400_21078 = state_19239;
(statearr_19400_21078[(1)] = cljs.core.first((state_19239[(4)])));

} else {
throw ex__15040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21079 = state_19239;
state_19239 = G__21079;
continue;
} else {
return ret_value__15038__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15037__auto__ = function(state_19239){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15037__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15037__auto____1.call(this,state_19239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15037__auto____0;
cljs$core$async$mult_$_state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15037__auto____1;
return cljs$core$async$mult_$_state_machine__15037__auto__;
})()
})();
var state__17915__auto__ = (function (){var statearr_19401 = f__17914__auto__();
(statearr_19401[(6)] = c__17913__auto___21009);

return statearr_19401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17915__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__19403 = arguments.length;
switch (G__19403) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_21083 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_21083(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_21084 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_21084(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_21085 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_21085(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_21088 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_21088(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_21089 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_21089(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21090 = arguments.length;
var i__5770__auto___21091 = (0);
while(true){
if((i__5770__auto___21091 < len__5769__auto___21090)){
args__5775__auto__.push((arguments[i__5770__auto___21091]));

var G__21092 = (i__5770__auto___21091 + (1));
i__5770__auto___21091 = G__21092;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19433){
var map__19434 = p__19433;
var map__19434__$1 = cljs.core.__destructure_map(map__19434);
var opts = map__19434__$1;
var statearr_19435_21093 = state;
(statearr_19435_21093[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_19437_21094 = state;
(statearr_19437_21094[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_19439_21097 = state;
(statearr_19439_21097[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19427){
var G__19428 = cljs.core.first(seq19427);
var seq19427__$1 = cljs.core.next(seq19427);
var G__19429 = cljs.core.first(seq19427__$1);
var seq19427__$2 = cljs.core.next(seq19427__$1);
var G__19430 = cljs.core.first(seq19427__$2);
var seq19427__$3 = cljs.core.next(seq19427__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19428,G__19429,G__19430,seq19427__$3);
}));


/**
* @constructor
 * @implements {shadow.build.cljs_hacks.IMeta}
 * @implements {shadow.build.cljs_hacks.IWithMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
*/
cljs.core.async.t_cljs$core$async19441 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19442){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19442 = meta19442;
});
(cljs.core.async.t_cljs$core$async19441.prototype.shadow$build$cljs_hacks$IWithMeta$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19441.prototype.shadow$build$cljs_hacks$IWithMeta$_with_meta$arity$2 = (function (_19443,meta19442__$1){
var self__ = this;
var _19443__$1 = this;
return (new cljs.core.async.t_cljs$core$async19441(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19442__$1));
}));

(cljs.core.async.t_cljs$core$async19441.prototype.shadow$build$cljs_hacks$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19441.prototype.shadow$build$cljs_hacks$IMeta$_meta$arity$1 = (function (_19443){
var self__ = this;
var _19443__$1 = this;
return self__.meta19442;
}));

(cljs.core.async.t_cljs$core$async19441.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19441.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19441.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19441.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19441.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19441.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19441.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19441.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19442","meta19442",-104762907,null)], null);
}));

(cljs.core.async.t_cljs$core$async19441.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19441");

(cljs.core.async.t_cljs$core$async19441.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19441");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19441.
 */
cljs.core.async.__GT_t_cljs$core$async19441 = (function cljs$core$async$__GT_t_cljs$core$async19441(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19442){
return (new cljs.core.async.t_cljs$core$async19441(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19442));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async19441(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__17913__auto___21109 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17914__auto__ = (function (){var switch__15036__auto__ = (function (state_19543){
var state_val_19544 = (state_19543[(1)]);
if((state_val_19544 === (7))){
var inst_19493 = (state_19543[(2)]);
var state_19543__$1 = state_19543;
if(cljs.core.truth_(inst_19493)){
var statearr_19550_21112 = state_19543__$1;
(statearr_19550_21112[(1)] = (8));

} else {
var statearr_19554_21113 = state_19543__$1;
(statearr_19554_21113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (20))){
var inst_19486 = (state_19543[(7)]);
var state_19543__$1 = state_19543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19543__$1,(23),out,inst_19486);
} else {
if((state_val_19544 === (1))){
var inst_19464 = calc_state();
var inst_19465 = cljs.core.__destructure_map(inst_19464);
var inst_19468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19465,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19465,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19465,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19472 = inst_19464;
var state_19543__$1 = (function (){var statearr_19562 = state_19543;
(statearr_19562[(8)] = inst_19468);

(statearr_19562[(9)] = inst_19471);

(statearr_19562[(10)] = inst_19470);

(statearr_19562[(11)] = inst_19472);

return statearr_19562;
})();
var statearr_19568_21116 = state_19543__$1;
(statearr_19568_21116[(2)] = null);

(statearr_19568_21116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (24))){
var inst_19475 = (state_19543[(12)]);
var inst_19472 = inst_19475;
var state_19543__$1 = (function (){var statearr_19570 = state_19543;
(statearr_19570[(11)] = inst_19472);

return statearr_19570;
})();
var statearr_19571_21117 = state_19543__$1;
(statearr_19571_21117[(2)] = null);

(statearr_19571_21117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (4))){
var inst_19488 = (state_19543[(13)]);
var inst_19486 = (state_19543[(7)]);
var inst_19483 = (state_19543[(2)]);
var inst_19486__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19483,(0),null);
var inst_19487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19483,(1),null);
var inst_19488__$1 = (inst_19486__$1 == null);
var state_19543__$1 = (function (){var statearr_19574 = state_19543;
(statearr_19574[(13)] = inst_19488__$1);

(statearr_19574[(7)] = inst_19486__$1);

(statearr_19574[(14)] = inst_19487);

return statearr_19574;
})();
if(cljs.core.truth_(inst_19488__$1)){
var statearr_19575_21118 = state_19543__$1;
(statearr_19575_21118[(1)] = (5));

} else {
var statearr_19576_21119 = state_19543__$1;
(statearr_19576_21119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (15))){
var inst_19476 = (state_19543[(15)]);
var inst_19514 = (state_19543[(16)]);
var inst_19514__$1 = cljs.core.empty_QMARK_(inst_19476);
var state_19543__$1 = (function (){var statearr_19577 = state_19543;
(statearr_19577[(16)] = inst_19514__$1);

return statearr_19577;
})();
if(inst_19514__$1){
var statearr_19579_21124 = state_19543__$1;
(statearr_19579_21124[(1)] = (17));

} else {
var statearr_19580_21125 = state_19543__$1;
(statearr_19580_21125[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (21))){
var inst_19475 = (state_19543[(12)]);
var inst_19472 = inst_19475;
var state_19543__$1 = (function (){var statearr_19582 = state_19543;
(statearr_19582[(11)] = inst_19472);

return statearr_19582;
})();
var statearr_19583_21126 = state_19543__$1;
(statearr_19583_21126[(2)] = null);

(statearr_19583_21126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (13))){
var inst_19500 = (state_19543[(2)]);
var inst_19501 = calc_state();
var inst_19472 = inst_19501;
var state_19543__$1 = (function (){var statearr_19584 = state_19543;
(statearr_19584[(17)] = inst_19500);

(statearr_19584[(11)] = inst_19472);

return statearr_19584;
})();
var statearr_19585_21127 = state_19543__$1;
(statearr_19585_21127[(2)] = null);

(statearr_19585_21127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (22))){
var inst_19537 = (state_19543[(2)]);
var state_19543__$1 = state_19543;
var statearr_19586_21128 = state_19543__$1;
(statearr_19586_21128[(2)] = inst_19537);

(statearr_19586_21128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (6))){
var inst_19487 = (state_19543[(14)]);
var inst_19491 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19487,change);
var state_19543__$1 = state_19543;
var statearr_19587_21129 = state_19543__$1;
(statearr_19587_21129[(2)] = inst_19491);

(statearr_19587_21129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (25))){
var state_19543__$1 = state_19543;
var statearr_19589_21130 = state_19543__$1;
(statearr_19589_21130[(2)] = null);

(statearr_19589_21130[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (17))){
var inst_19477 = (state_19543[(18)]);
var inst_19487 = (state_19543[(14)]);
var inst_19516 = (inst_19477.cljs$core$IFn$_invoke$arity$1 ? inst_19477.cljs$core$IFn$_invoke$arity$1(inst_19487) : inst_19477.call(null,inst_19487));
var inst_19517 = cljs.core.not(inst_19516);
var state_19543__$1 = state_19543;
var statearr_19591_21131 = state_19543__$1;
(statearr_19591_21131[(2)] = inst_19517);

(statearr_19591_21131[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (3))){
var inst_19541 = (state_19543[(2)]);
var state_19543__$1 = state_19543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19543__$1,inst_19541);
} else {
if((state_val_19544 === (12))){
var state_19543__$1 = state_19543;
var statearr_19592_21132 = state_19543__$1;
(statearr_19592_21132[(2)] = null);

(statearr_19592_21132[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (2))){
var inst_19475 = (state_19543[(12)]);
var inst_19472 = (state_19543[(11)]);
var inst_19475__$1 = cljs.core.__destructure_map(inst_19472);
var inst_19476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19475__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19475__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19475__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19543__$1 = (function (){var statearr_19595 = state_19543;
(statearr_19595[(15)] = inst_19476);

(statearr_19595[(18)] = inst_19477);

(statearr_19595[(12)] = inst_19475__$1);

return statearr_19595;
})();
return cljs.core.async.ioc_alts_BANG_(state_19543__$1,(4),inst_19478);
} else {
if((state_val_19544 === (23))){
var inst_19525 = (state_19543[(2)]);
var state_19543__$1 = state_19543;
if(cljs.core.truth_(inst_19525)){
var statearr_19601_21133 = state_19543__$1;
(statearr_19601_21133[(1)] = (24));

} else {
var statearr_19602_21134 = state_19543__$1;
(statearr_19602_21134[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (19))){
var inst_19520 = (state_19543[(2)]);
var state_19543__$1 = state_19543;
var statearr_19603_21135 = state_19543__$1;
(statearr_19603_21135[(2)] = inst_19520);

(statearr_19603_21135[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (11))){
var inst_19487 = (state_19543[(14)]);
var inst_19497 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19487);
var state_19543__$1 = state_19543;
var statearr_19606_21136 = state_19543__$1;
(statearr_19606_21136[(2)] = inst_19497);

(statearr_19606_21136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (9))){
var inst_19476 = (state_19543[(15)]);
var inst_19508 = (state_19543[(19)]);
var inst_19487 = (state_19543[(14)]);
var inst_19508__$1 = (inst_19476.cljs$core$IFn$_invoke$arity$1 ? inst_19476.cljs$core$IFn$_invoke$arity$1(inst_19487) : inst_19476.call(null,inst_19487));
var state_19543__$1 = (function (){var statearr_19607 = state_19543;
(statearr_19607[(19)] = inst_19508__$1);

return statearr_19607;
})();
if(cljs.core.truth_(inst_19508__$1)){
var statearr_19608_21138 = state_19543__$1;
(statearr_19608_21138[(1)] = (14));

} else {
var statearr_19609_21139 = state_19543__$1;
(statearr_19609_21139[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (5))){
var inst_19488 = (state_19543[(13)]);
var state_19543__$1 = state_19543;
var statearr_19612_21143 = state_19543__$1;
(statearr_19612_21143[(2)] = inst_19488);

(statearr_19612_21143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (14))){
var inst_19508 = (state_19543[(19)]);
var state_19543__$1 = state_19543;
var statearr_19615_21144 = state_19543__$1;
(statearr_19615_21144[(2)] = inst_19508);

(statearr_19615_21144[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (26))){
var inst_19533 = (state_19543[(2)]);
var state_19543__$1 = state_19543;
var statearr_19616_21145 = state_19543__$1;
(statearr_19616_21145[(2)] = inst_19533);

(statearr_19616_21145[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (16))){
var inst_19522 = (state_19543[(2)]);
var state_19543__$1 = state_19543;
if(cljs.core.truth_(inst_19522)){
var statearr_19617_21146 = state_19543__$1;
(statearr_19617_21146[(1)] = (20));

} else {
var statearr_19618_21147 = state_19543__$1;
(statearr_19618_21147[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (10))){
var inst_19539 = (state_19543[(2)]);
var state_19543__$1 = state_19543;
var statearr_19620_21148 = state_19543__$1;
(statearr_19620_21148[(2)] = inst_19539);

(statearr_19620_21148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (18))){
var inst_19514 = (state_19543[(16)]);
var state_19543__$1 = state_19543;
var statearr_19625_21149 = state_19543__$1;
(statearr_19625_21149[(2)] = inst_19514);

(statearr_19625_21149[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (8))){
var inst_19486 = (state_19543[(7)]);
var inst_19495 = (inst_19486 == null);
var state_19543__$1 = state_19543;
if(cljs.core.truth_(inst_19495)){
var statearr_19633_21150 = state_19543__$1;
(statearr_19633_21150[(1)] = (11));

} else {
var statearr_19635_21151 = state_19543__$1;
(statearr_19635_21151[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__15037__auto__ = null;
var cljs$core$async$mix_$_state_machine__15037__auto____0 = (function (){
var statearr_19636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19636[(0)] = cljs$core$async$mix_$_state_machine__15037__auto__);

(statearr_19636[(1)] = (1));

return statearr_19636;
});
var cljs$core$async$mix_$_state_machine__15037__auto____1 = (function (state_19543){
while(true){
var ret_value__15038__auto__ = (function (){try{while(true){
var result__15039__auto__ = switch__15036__auto__(state_19543);
if(cljs.core.keyword_identical_QMARK_(result__15039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15039__auto__;
}
break;
}
}catch (e19637){var ex__15040__auto__ = e19637;
var statearr_19639_21154 = state_19543;
(statearr_19639_21154[(2)] = ex__15040__auto__);


if(cljs.core.seq((state_19543[(4)]))){
var statearr_19640_21155 = state_19543;
(statearr_19640_21155[(1)] = cljs.core.first((state_19543[(4)])));

} else {
throw ex__15040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21156 = state_19543;
state_19543 = G__21156;
continue;
} else {
return ret_value__15038__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15037__auto__ = function(state_19543){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15037__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15037__auto____1.call(this,state_19543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15037__auto____0;
cljs$core$async$mix_$_state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15037__auto____1;
return cljs$core$async$mix_$_state_machine__15037__auto__;
})()
})();
var state__17915__auto__ = (function (){var statearr_19641 = f__17914__auto__();
(statearr_19641[(6)] = c__17913__auto___21109);

return statearr_19641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17915__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_21157 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_21157(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_21162 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_21162(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_21163 = (function() {
var G__21164 = null;
var G__21164__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__21164__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__21164 = function(p,v){
switch(arguments.length){
case 1:
return G__21164__1.call(this,p);
case 2:
return G__21164__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21164.cljs$core$IFn$_invoke$arity$1 = G__21164__1;
G__21164.cljs$core$IFn$_invoke$arity$2 = G__21164__2;
return G__21164;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19648 = arguments.length;
switch (G__19648) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21163(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21163(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {shadow.build.cljs_hacks.IMeta}
 * @implements {shadow.build.cljs_hacks.IWithMeta}
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.async.Mux}
*/
cljs.core.async.t_cljs$core$async19666 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19667){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19667 = meta19667;
});
(cljs.core.async.t_cljs$core$async19666.prototype.shadow$build$cljs_hacks$IWithMeta$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19666.prototype.shadow$build$cljs_hacks$IWithMeta$_with_meta$arity$2 = (function (_19668,meta19667__$1){
var self__ = this;
var _19668__$1 = this;
return (new cljs.core.async.t_cljs$core$async19666(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19667__$1));
}));

(cljs.core.async.t_cljs$core$async19666.prototype.shadow$build$cljs_hacks$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19666.prototype.shadow$build$cljs_hacks$IMeta$_meta$arity$1 = (function (_19668){
var self__ = this;
var _19668__$1 = this;
return self__.meta19667;
}));

(cljs.core.async.t_cljs$core$async19666.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19666.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19666.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19666.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19666.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async19666.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19666.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19667","meta19667",1877470931,null)], null);
}));

(cljs.core.async.t_cljs$core$async19666.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19666");

(cljs.core.async.t_cljs$core$async19666.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19666");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19666.
 */
cljs.core.async.__GT_t_cljs$core$async19666 = (function cljs$core$async$__GT_t_cljs$core$async19666(ch,topic_fn,buf_fn,mults,ensure_mult,meta19667){
return (new cljs.core.async.t_cljs$core$async19666(ch,topic_fn,buf_fn,mults,ensure_mult,meta19667));
});


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
var G__19662 = arguments.length;
switch (G__19662) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__19650_SHARP_){
if(cljs.core.truth_((p1__19650_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19650_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19650_SHARP_.call(null,topic)))){
return p1__19650_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19650_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async19666(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__17913__auto___21175 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17914__auto__ = (function (){var switch__15036__auto__ = (function (state_19748){
var state_val_19749 = (state_19748[(1)]);
if((state_val_19749 === (7))){
var inst_19744 = (state_19748[(2)]);
var state_19748__$1 = state_19748;
var statearr_19750_21179 = state_19748__$1;
(statearr_19750_21179[(2)] = inst_19744);

(statearr_19750_21179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19749 === (20))){
var state_19748__$1 = state_19748;
var statearr_19751_21180 = state_19748__$1;
(statearr_19751_21180[(2)] = null);

(statearr_19751_21180[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19749 === (1))){
var state_19748__$1 = state_19748;
var statearr_19752_21181 = state_19748__$1;
(statearr_19752_21181[(2)] = null);

(statearr_19752_21181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19749 === (24))){
var inst_19727 = (state_19748[(7)]);
var inst_19736 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19727);
var state_19748__$1 = state_19748;
var statearr_19760_21182 = state_19748__$1;
(statearr_19760_21182[(2)] = inst_19736);

(statearr_19760_21182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19749 === (4))){
var inst_19674 = (state_19748[(8)]);
var inst_19674__$1 = (state_19748[(2)]);
var inst_19675 = (inst_19674__$1 == null);
var state_19748__$1 = (function (){var statearr_19762 = state_19748;
(statearr_19762[(8)] = inst_19674__$1);

return statearr_19762;
})();
if(cljs.core.truth_(inst_19675)){
var statearr_19763_21183 = state_19748__$1;
(statearr_19763_21183[(1)] = (5));

} else {
var statearr_19764_21184 = state_19748__$1;
(statearr_19764_21184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19749 === (15))){
var inst_19718 = (state_19748[(2)]);
var state_19748__$1 = state_19748;
var statearr_19765_21185 = state_19748__$1;
(statearr_19765_21185[(2)] = inst_19718);

(statearr_19765_21185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19749 === (21))){
var inst_19741 = (state_19748[(2)]);
var state_19748__$1 = (function (){var statearr_19775 = state_19748;
(statearr_19775[(9)] = inst_19741);

return statearr_19775;
})();
var statearr_19776_21186 = state_19748__$1;
(statearr_19776_21186[(2)] = null);

(statearr_19776_21186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19749 === (13))){
var inst_19699 = (state_19748[(10)]);
var inst_19701 = cljs.core.chunked_seq_QMARK_(inst_19699);
var state_19748__$1 = state_19748;
if(inst_19701){
var statearr_19777_21187 = state_19748__$1;
(statearr_19777_21187[(1)] = (16));

} else {
var statearr_19778_21188 = state_19748__$1;
(statearr_19778_21188[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19749 === (22))){
var inst_19733 = (state_19748[(2)]);
var state_19748__$1 = state_19748;
if(cljs.core.truth_(inst_19733)){
var statearr_19783_21189 = state_19748__$1;
(statearr_19783_21189[(1)] = (23));

} else {
var statearr_19784_21190 = state_19748__$1;
(statearr_19784_21190[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19749 === (6))){
var inst_19727 = (state_19748[(7)]);
var inst_19729 = (state_19748[(11)]);
var inst_19674 = (state_19748[(8)]);
var inst_19727__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19674) : topic_fn.call(null,inst_19674));
var inst_19728 = cljs.core.deref(mults);
var inst_19729__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19728,inst_19727__$1);
var state_19748__$1 = (function (){var statearr_19792 = state_19748;
(statearr_19792[(7)] = inst_19727__$1);

(statearr_19792[(11)] = inst_19729__$1);

return statearr_19792;
})();
if(cljs.core.truth_(inst_19729__$1)){
var statearr_19793_21191 = state_19748__$1;
(statearr_19793_21191[(1)] = (19));

} else {
var statearr_19794_21192 = state_19748__$1;
(statearr_19794_21192[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19749 === (25))){
var inst_19738 = (state_19748[(2)]);
var state_19748__$1 = state_19748;
var statearr_19796_21193 = state_19748__$1;
(statearr_19796_21193[(2)] = inst_19738);

(statearr_19796_21193[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19749 === (17))){
var inst_19699 = (state_19748[(10)]);
var inst_19709 = cljs.core.first(inst_19699);
var inst_19710 = cljs.core.async.muxch_STAR_(inst_19709);
var inst_19711 = cljs.core.async.close_BANG_(inst_19710);
var inst_19712 = cljs.core.next(inst_19699);
var inst_19684 = inst_19712;
var inst_19685 = null;
var inst_19686 = (0);
var inst_19687 = (0);
var state_19748__$1 = (function (){var statearr_19797 = state_19748;
(statearr_19797[(12)] = inst_19685);

(statearr_19797[(13)] = inst_19684);

(statearr_19797[(14)] = inst_19686);

(statearr_19797[(15)] = inst_19711);

(statearr_19797[(16)] = inst_19687);

return statearr_19797;
})();
var statearr_19798_21194 = state_19748__$1;
(statearr_19798_21194[(2)] = null);

(statearr_19798_21194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19749 === (3))){
var inst_19746 = (state_19748[(2)]);
var state_19748__$1 = state_19748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19748__$1,inst_19746);
} else {
if((state_val_19749 === (12))){
var inst_19720 = (state_19748[(2)]);
var state_19748__$1 = state_19748;
var statearr_19801_21195 = state_19748__$1;
(statearr_19801_21195[(2)] = inst_19720);

(statearr_19801_21195[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19749 === (2))){
var state_19748__$1 = state_19748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19748__$1,(4),ch);
} else {
if((state_val_19749 === (23))){
var state_19748__$1 = state_19748;
var statearr_19807_21196 = state_19748__$1;
(statearr_19807_21196[(2)] = null);

(statearr_19807_21196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19749 === (19))){
var inst_19729 = (state_19748[(11)]);
var inst_19674 = (state_19748[(8)]);
var inst_19731 = cljs.core.async.muxch_STAR_(inst_19729);
var state_19748__$1 = state_19748;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19748__$1,(22),inst_19731,inst_19674);
} else {
if((state_val_19749 === (11))){
var inst_19684 = (state_19748[(13)]);
var inst_19699 = (state_19748[(10)]);
var inst_19699__$1 = cljs.core.seq(inst_19684);
var state_19748__$1 = (function (){var statearr_19809 = state_19748;
(statearr_19809[(10)] = inst_19699__$1);

return statearr_19809;
})();
if(inst_19699__$1){
var statearr_19810_21197 = state_19748__$1;
(statearr_19810_21197[(1)] = (13));

} else {
var statearr_19811_21198 = state_19748__$1;
(statearr_19811_21198[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19749 === (9))){
var inst_19722 = (state_19748[(2)]);
var state_19748__$1 = state_19748;
var statearr_19813_21199 = state_19748__$1;
(statearr_19813_21199[(2)] = inst_19722);

(statearr_19813_21199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19749 === (5))){
var inst_19681 = cljs.core.deref(mults);
var inst_19682 = cljs.core.vals(inst_19681);
var inst_19683 = cljs.core.seq(inst_19682);
var inst_19684 = inst_19683;
var inst_19685 = null;
var inst_19686 = (0);
var inst_19687 = (0);
var state_19748__$1 = (function (){var statearr_19815 = state_19748;
(statearr_19815[(12)] = inst_19685);

(statearr_19815[(13)] = inst_19684);

(statearr_19815[(14)] = inst_19686);

(statearr_19815[(16)] = inst_19687);

return statearr_19815;
})();
var statearr_19816_21203 = state_19748__$1;
(statearr_19816_21203[(2)] = null);

(statearr_19816_21203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19749 === (14))){
var state_19748__$1 = state_19748;
var statearr_19820_21204 = state_19748__$1;
(statearr_19820_21204[(2)] = null);

(statearr_19820_21204[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19749 === (16))){
var inst_19699 = (state_19748[(10)]);
var inst_19703 = cljs.core.chunk_first(inst_19699);
var inst_19705 = cljs.core.chunk_rest(inst_19699);
var inst_19706 = cljs.core.count(inst_19703);
var inst_19684 = inst_19705;
var inst_19685 = inst_19703;
var inst_19686 = inst_19706;
var inst_19687 = (0);
var state_19748__$1 = (function (){var statearr_19829 = state_19748;
(statearr_19829[(12)] = inst_19685);

(statearr_19829[(13)] = inst_19684);

(statearr_19829[(14)] = inst_19686);

(statearr_19829[(16)] = inst_19687);

return statearr_19829;
})();
var statearr_19830_21205 = state_19748__$1;
(statearr_19830_21205[(2)] = null);

(statearr_19830_21205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19749 === (10))){
var inst_19685 = (state_19748[(12)]);
var inst_19684 = (state_19748[(13)]);
var inst_19686 = (state_19748[(14)]);
var inst_19687 = (state_19748[(16)]);
var inst_19692 = cljs.core._nth(inst_19685,inst_19687);
var inst_19693 = cljs.core.async.muxch_STAR_(inst_19692);
var inst_19694 = cljs.core.async.close_BANG_(inst_19693);
var inst_19695 = (inst_19687 + (1));
var tmp19817 = inst_19685;
var tmp19818 = inst_19684;
var tmp19819 = inst_19686;
var inst_19684__$1 = tmp19818;
var inst_19685__$1 = tmp19817;
var inst_19686__$1 = tmp19819;
var inst_19687__$1 = inst_19695;
var state_19748__$1 = (function (){var statearr_19835 = state_19748;
(statearr_19835[(12)] = inst_19685__$1);

(statearr_19835[(13)] = inst_19684__$1);

(statearr_19835[(14)] = inst_19686__$1);

(statearr_19835[(16)] = inst_19687__$1);

(statearr_19835[(17)] = inst_19694);

return statearr_19835;
})();
var statearr_19836_21206 = state_19748__$1;
(statearr_19836_21206[(2)] = null);

(statearr_19836_21206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19749 === (18))){
var inst_19715 = (state_19748[(2)]);
var state_19748__$1 = state_19748;
var statearr_19837_21207 = state_19748__$1;
(statearr_19837_21207[(2)] = inst_19715);

(statearr_19837_21207[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19749 === (8))){
var inst_19686 = (state_19748[(14)]);
var inst_19687 = (state_19748[(16)]);
var inst_19689 = (inst_19687 < inst_19686);
var inst_19690 = inst_19689;
var state_19748__$1 = state_19748;
if(cljs.core.truth_(inst_19690)){
var statearr_19838_21208 = state_19748__$1;
(statearr_19838_21208[(1)] = (10));

} else {
var statearr_19839_21209 = state_19748__$1;
(statearr_19839_21209[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__15037__auto__ = null;
var cljs$core$async$state_machine__15037__auto____0 = (function (){
var statearr_19841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19841[(0)] = cljs$core$async$state_machine__15037__auto__);

(statearr_19841[(1)] = (1));

return statearr_19841;
});
var cljs$core$async$state_machine__15037__auto____1 = (function (state_19748){
while(true){
var ret_value__15038__auto__ = (function (){try{while(true){
var result__15039__auto__ = switch__15036__auto__(state_19748);
if(cljs.core.keyword_identical_QMARK_(result__15039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15039__auto__;
}
break;
}
}catch (e19842){var ex__15040__auto__ = e19842;
var statearr_19843_21210 = state_19748;
(statearr_19843_21210[(2)] = ex__15040__auto__);


if(cljs.core.seq((state_19748[(4)]))){
var statearr_19851_21211 = state_19748;
(statearr_19851_21211[(1)] = cljs.core.first((state_19748[(4)])));

} else {
throw ex__15040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21212 = state_19748;
state_19748 = G__21212;
continue;
} else {
return ret_value__15038__auto__;
}
break;
}
});
cljs$core$async$state_machine__15037__auto__ = function(state_19748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15037__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15037__auto____1.call(this,state_19748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15037__auto____0;
cljs$core$async$state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15037__auto____1;
return cljs$core$async$state_machine__15037__auto__;
})()
})();
var state__17915__auto__ = (function (){var statearr_19852 = f__17914__auto__();
(statearr_19852[(6)] = c__17913__auto___21175);

return statearr_19852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17915__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19855 = arguments.length;
switch (G__19855) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19861 = arguments.length;
switch (G__19861) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__19865 = arguments.length;
switch (G__19865) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__17913__auto___21219 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17914__auto__ = (function (){var switch__15036__auto__ = (function (state_19923){
var state_val_19924 = (state_19923[(1)]);
if((state_val_19924 === (7))){
var state_19923__$1 = state_19923;
var statearr_19929_21220 = state_19923__$1;
(statearr_19929_21220[(2)] = null);

(statearr_19929_21220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19924 === (1))){
var state_19923__$1 = state_19923;
var statearr_19930_21221 = state_19923__$1;
(statearr_19930_21221[(2)] = null);

(statearr_19930_21221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19924 === (4))){
var inst_19869 = (state_19923[(7)]);
var inst_19868 = (state_19923[(8)]);
var inst_19871 = (inst_19869 < inst_19868);
var state_19923__$1 = state_19923;
if(cljs.core.truth_(inst_19871)){
var statearr_19935_21223 = state_19923__$1;
(statearr_19935_21223[(1)] = (6));

} else {
var statearr_19936_21224 = state_19923__$1;
(statearr_19936_21224[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19924 === (15))){
var inst_19902 = (state_19923[(9)]);
var inst_19907 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19902);
var state_19923__$1 = state_19923;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19923__$1,(17),out,inst_19907);
} else {
if((state_val_19924 === (13))){
var inst_19902 = (state_19923[(9)]);
var inst_19902__$1 = (state_19923[(2)]);
var inst_19903 = cljs.core.some(cljs.core.nil_QMARK_,inst_19902__$1);
var state_19923__$1 = (function (){var statearr_19937 = state_19923;
(statearr_19937[(9)] = inst_19902__$1);

return statearr_19937;
})();
if(cljs.core.truth_(inst_19903)){
var statearr_19938_21226 = state_19923__$1;
(statearr_19938_21226[(1)] = (14));

} else {
var statearr_19939_21227 = state_19923__$1;
(statearr_19939_21227[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19924 === (6))){
var state_19923__$1 = state_19923;
var statearr_19940_21228 = state_19923__$1;
(statearr_19940_21228[(2)] = null);

(statearr_19940_21228[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19924 === (17))){
var inst_19909 = (state_19923[(2)]);
var state_19923__$1 = (function (){var statearr_19954 = state_19923;
(statearr_19954[(10)] = inst_19909);

return statearr_19954;
})();
var statearr_19955_21229 = state_19923__$1;
(statearr_19955_21229[(2)] = null);

(statearr_19955_21229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19924 === (3))){
var inst_19915 = (state_19923[(2)]);
var state_19923__$1 = state_19923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19923__$1,inst_19915);
} else {
if((state_val_19924 === (12))){
var _ = (function (){var statearr_19957 = state_19923;
(statearr_19957[(4)] = cljs.core.rest((state_19923[(4)])));

return statearr_19957;
})();
var state_19923__$1 = state_19923;
var ex19947 = (state_19923__$1[(2)]);
var statearr_19958_21230 = state_19923__$1;
(statearr_19958_21230[(5)] = ex19947);


if((ex19947 instanceof Object)){
var statearr_19960_21231 = state_19923__$1;
(statearr_19960_21231[(1)] = (11));

(statearr_19960_21231[(5)] = null);

} else {
throw ex19947;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19924 === (2))){
var inst_19867 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19868 = cnt;
var inst_19869 = (0);
var state_19923__$1 = (function (){var statearr_19966 = state_19923;
(statearr_19966[(11)] = inst_19867);

(statearr_19966[(7)] = inst_19869);

(statearr_19966[(8)] = inst_19868);

return statearr_19966;
})();
var statearr_19968_21232 = state_19923__$1;
(statearr_19968_21232[(2)] = null);

(statearr_19968_21232[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19924 === (11))){
var inst_19880 = (state_19923[(2)]);
var inst_19881 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19923__$1 = (function (){var statearr_19969 = state_19923;
(statearr_19969[(12)] = inst_19880);

return statearr_19969;
})();
var statearr_19975_21233 = state_19923__$1;
(statearr_19975_21233[(2)] = inst_19881);

(statearr_19975_21233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19924 === (9))){
var inst_19869 = (state_19923[(7)]);
var _ = (function (){var statearr_19976 = state_19923;
(statearr_19976[(4)] = cljs.core.cons((12),(state_19923[(4)])));

return statearr_19976;
})();
var inst_19888 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19869) : chs__$1.call(null,inst_19869));
var inst_19889 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19869) : done.call(null,inst_19869));
var inst_19890 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19888,inst_19889);
var ___$1 = (function (){var statearr_19982 = state_19923;
(statearr_19982[(4)] = cljs.core.rest((state_19923[(4)])));

return statearr_19982;
})();
var state_19923__$1 = state_19923;
var statearr_19983_21237 = state_19923__$1;
(statearr_19983_21237[(2)] = inst_19890);

(statearr_19983_21237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19924 === (5))){
var inst_19900 = (state_19923[(2)]);
var state_19923__$1 = (function (){var statearr_19984 = state_19923;
(statearr_19984[(13)] = inst_19900);

return statearr_19984;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19923__$1,(13),dchan);
} else {
if((state_val_19924 === (14))){
var inst_19905 = cljs.core.async.close_BANG_(out);
var state_19923__$1 = state_19923;
var statearr_19985_21238 = state_19923__$1;
(statearr_19985_21238[(2)] = inst_19905);

(statearr_19985_21238[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19924 === (16))){
var inst_19913 = (state_19923[(2)]);
var state_19923__$1 = state_19923;
var statearr_19986_21239 = state_19923__$1;
(statearr_19986_21239[(2)] = inst_19913);

(statearr_19986_21239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19924 === (10))){
var inst_19869 = (state_19923[(7)]);
var inst_19893 = (state_19923[(2)]);
var inst_19894 = (inst_19869 + (1));
var inst_19869__$1 = inst_19894;
var state_19923__$1 = (function (){var statearr_19988 = state_19923;
(statearr_19988[(7)] = inst_19869__$1);

(statearr_19988[(14)] = inst_19893);

return statearr_19988;
})();
var statearr_19989_21240 = state_19923__$1;
(statearr_19989_21240[(2)] = null);

(statearr_19989_21240[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19924 === (8))){
var inst_19898 = (state_19923[(2)]);
var state_19923__$1 = state_19923;
var statearr_19990_21241 = state_19923__$1;
(statearr_19990_21241[(2)] = inst_19898);

(statearr_19990_21241[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__15037__auto__ = null;
var cljs$core$async$state_machine__15037__auto____0 = (function (){
var statearr_19993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19993[(0)] = cljs$core$async$state_machine__15037__auto__);

(statearr_19993[(1)] = (1));

return statearr_19993;
});
var cljs$core$async$state_machine__15037__auto____1 = (function (state_19923){
while(true){
var ret_value__15038__auto__ = (function (){try{while(true){
var result__15039__auto__ = switch__15036__auto__(state_19923);
if(cljs.core.keyword_identical_QMARK_(result__15039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15039__auto__;
}
break;
}
}catch (e19995){var ex__15040__auto__ = e19995;
var statearr_19996_21249 = state_19923;
(statearr_19996_21249[(2)] = ex__15040__auto__);


if(cljs.core.seq((state_19923[(4)]))){
var statearr_20002_21250 = state_19923;
(statearr_20002_21250[(1)] = cljs.core.first((state_19923[(4)])));

} else {
throw ex__15040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21251 = state_19923;
state_19923 = G__21251;
continue;
} else {
return ret_value__15038__auto__;
}
break;
}
});
cljs$core$async$state_machine__15037__auto__ = function(state_19923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15037__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15037__auto____1.call(this,state_19923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15037__auto____0;
cljs$core$async$state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15037__auto____1;
return cljs$core$async$state_machine__15037__auto__;
})()
})();
var state__17915__auto__ = (function (){var statearr_20003 = f__17914__auto__();
(statearr_20003[(6)] = c__17913__auto___21219);

return statearr_20003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17915__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__20006 = arguments.length;
switch (G__20006) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17913__auto___21253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17914__auto__ = (function (){var switch__15036__auto__ = (function (state_20043){
var state_val_20044 = (state_20043[(1)]);
if((state_val_20044 === (7))){
var inst_20021 = (state_20043[(7)]);
var inst_20022 = (state_20043[(8)]);
var inst_20021__$1 = (state_20043[(2)]);
var inst_20022__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20021__$1,(0),null);
var inst_20023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20021__$1,(1),null);
var inst_20024 = (inst_20022__$1 == null);
var state_20043__$1 = (function (){var statearr_20053 = state_20043;
(statearr_20053[(7)] = inst_20021__$1);

(statearr_20053[(8)] = inst_20022__$1);

(statearr_20053[(9)] = inst_20023);

return statearr_20053;
})();
if(cljs.core.truth_(inst_20024)){
var statearr_20054_21257 = state_20043__$1;
(statearr_20054_21257[(1)] = (8));

} else {
var statearr_20055_21258 = state_20043__$1;
(statearr_20055_21258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20044 === (1))){
var inst_20011 = cljs.core.vec(chs);
var inst_20012 = inst_20011;
var state_20043__$1 = (function (){var statearr_20056 = state_20043;
(statearr_20056[(10)] = inst_20012);

return statearr_20056;
})();
var statearr_20060_21259 = state_20043__$1;
(statearr_20060_21259[(2)] = null);

(statearr_20060_21259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20044 === (4))){
var inst_20012 = (state_20043[(10)]);
var state_20043__$1 = state_20043;
return cljs.core.async.ioc_alts_BANG_(state_20043__$1,(7),inst_20012);
} else {
if((state_val_20044 === (6))){
var inst_20038 = (state_20043[(2)]);
var state_20043__$1 = state_20043;
var statearr_20062_21260 = state_20043__$1;
(statearr_20062_21260[(2)] = inst_20038);

(statearr_20062_21260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20044 === (3))){
var inst_20040 = (state_20043[(2)]);
var state_20043__$1 = state_20043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20043__$1,inst_20040);
} else {
if((state_val_20044 === (2))){
var inst_20012 = (state_20043[(10)]);
var inst_20014 = cljs.core.count(inst_20012);
var inst_20015 = (inst_20014 > (0));
var state_20043__$1 = state_20043;
if(cljs.core.truth_(inst_20015)){
var statearr_20065_21261 = state_20043__$1;
(statearr_20065_21261[(1)] = (4));

} else {
var statearr_20066_21263 = state_20043__$1;
(statearr_20066_21263[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20044 === (11))){
var inst_20012 = (state_20043[(10)]);
var inst_20031 = (state_20043[(2)]);
var tmp20064 = inst_20012;
var inst_20012__$1 = tmp20064;
var state_20043__$1 = (function (){var statearr_20067 = state_20043;
(statearr_20067[(11)] = inst_20031);

(statearr_20067[(10)] = inst_20012__$1);

return statearr_20067;
})();
var statearr_20068_21267 = state_20043__$1;
(statearr_20068_21267[(2)] = null);

(statearr_20068_21267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20044 === (9))){
var inst_20022 = (state_20043[(8)]);
var state_20043__$1 = state_20043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20043__$1,(11),out,inst_20022);
} else {
if((state_val_20044 === (5))){
var inst_20036 = cljs.core.async.close_BANG_(out);
var state_20043__$1 = state_20043;
var statearr_20071_21271 = state_20043__$1;
(statearr_20071_21271[(2)] = inst_20036);

(statearr_20071_21271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20044 === (10))){
var inst_20034 = (state_20043[(2)]);
var state_20043__$1 = state_20043;
var statearr_20072_21272 = state_20043__$1;
(statearr_20072_21272[(2)] = inst_20034);

(statearr_20072_21272[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20044 === (8))){
var inst_20021 = (state_20043[(7)]);
var inst_20022 = (state_20043[(8)]);
var inst_20023 = (state_20043[(9)]);
var inst_20012 = (state_20043[(10)]);
var inst_20026 = (function (){var cs = inst_20012;
var vec__20017 = inst_20021;
var v = inst_20022;
var c = inst_20023;
return (function (p1__20004_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__20004_SHARP_);
});
})();
var inst_20027 = cljs.core.filterv(inst_20026,inst_20012);
var inst_20012__$1 = inst_20027;
var state_20043__$1 = (function (){var statearr_20073 = state_20043;
(statearr_20073[(10)] = inst_20012__$1);

return statearr_20073;
})();
var statearr_20077_21273 = state_20043__$1;
(statearr_20077_21273[(2)] = null);

(statearr_20077_21273[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__15037__auto__ = null;
var cljs$core$async$state_machine__15037__auto____0 = (function (){
var statearr_20078 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20078[(0)] = cljs$core$async$state_machine__15037__auto__);

(statearr_20078[(1)] = (1));

return statearr_20078;
});
var cljs$core$async$state_machine__15037__auto____1 = (function (state_20043){
while(true){
var ret_value__15038__auto__ = (function (){try{while(true){
var result__15039__auto__ = switch__15036__auto__(state_20043);
if(cljs.core.keyword_identical_QMARK_(result__15039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15039__auto__;
}
break;
}
}catch (e20079){var ex__15040__auto__ = e20079;
var statearr_20080_21276 = state_20043;
(statearr_20080_21276[(2)] = ex__15040__auto__);


if(cljs.core.seq((state_20043[(4)]))){
var statearr_20082_21277 = state_20043;
(statearr_20082_21277[(1)] = cljs.core.first((state_20043[(4)])));

} else {
throw ex__15040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21278 = state_20043;
state_20043 = G__21278;
continue;
} else {
return ret_value__15038__auto__;
}
break;
}
});
cljs$core$async$state_machine__15037__auto__ = function(state_20043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15037__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15037__auto____1.call(this,state_20043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15037__auto____0;
cljs$core$async$state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15037__auto____1;
return cljs$core$async$state_machine__15037__auto__;
})()
})();
var state__17915__auto__ = (function (){var statearr_20083 = f__17914__auto__();
(statearr_20083[(6)] = c__17913__auto___21253);

return statearr_20083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17915__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__20087 = arguments.length;
switch (G__20087) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17913__auto___21280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17914__auto__ = (function (){var switch__15036__auto__ = (function (state_20111){
var state_val_20112 = (state_20111[(1)]);
if((state_val_20112 === (7))){
var inst_20093 = (state_20111[(7)]);
var inst_20093__$1 = (state_20111[(2)]);
var inst_20094 = (inst_20093__$1 == null);
var inst_20095 = cljs.core.not(inst_20094);
var state_20111__$1 = (function (){var statearr_20113 = state_20111;
(statearr_20113[(7)] = inst_20093__$1);

return statearr_20113;
})();
if(inst_20095){
var statearr_20114_21281 = state_20111__$1;
(statearr_20114_21281[(1)] = (8));

} else {
var statearr_20115_21282 = state_20111__$1;
(statearr_20115_21282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (1))){
var inst_20088 = (0);
var state_20111__$1 = (function (){var statearr_20116 = state_20111;
(statearr_20116[(8)] = inst_20088);

return statearr_20116;
})();
var statearr_20117_21283 = state_20111__$1;
(statearr_20117_21283[(2)] = null);

(statearr_20117_21283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (4))){
var state_20111__$1 = state_20111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20111__$1,(7),ch);
} else {
if((state_val_20112 === (6))){
var inst_20106 = (state_20111[(2)]);
var state_20111__$1 = state_20111;
var statearr_20118_21284 = state_20111__$1;
(statearr_20118_21284[(2)] = inst_20106);

(statearr_20118_21284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (3))){
var inst_20108 = (state_20111[(2)]);
var inst_20109 = cljs.core.async.close_BANG_(out);
var state_20111__$1 = (function (){var statearr_20119 = state_20111;
(statearr_20119[(9)] = inst_20108);

return statearr_20119;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20111__$1,inst_20109);
} else {
if((state_val_20112 === (2))){
var inst_20088 = (state_20111[(8)]);
var inst_20090 = (inst_20088 < n);
var state_20111__$1 = state_20111;
if(cljs.core.truth_(inst_20090)){
var statearr_20120_21285 = state_20111__$1;
(statearr_20120_21285[(1)] = (4));

} else {
var statearr_20121_21286 = state_20111__$1;
(statearr_20121_21286[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (11))){
var inst_20088 = (state_20111[(8)]);
var inst_20098 = (state_20111[(2)]);
var inst_20099 = (inst_20088 + (1));
var inst_20088__$1 = inst_20099;
var state_20111__$1 = (function (){var statearr_20122 = state_20111;
(statearr_20122[(8)] = inst_20088__$1);

(statearr_20122[(10)] = inst_20098);

return statearr_20122;
})();
var statearr_20124_21290 = state_20111__$1;
(statearr_20124_21290[(2)] = null);

(statearr_20124_21290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (9))){
var state_20111__$1 = state_20111;
var statearr_20125_21291 = state_20111__$1;
(statearr_20125_21291[(2)] = null);

(statearr_20125_21291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (5))){
var state_20111__$1 = state_20111;
var statearr_20126_21292 = state_20111__$1;
(statearr_20126_21292[(2)] = null);

(statearr_20126_21292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (10))){
var inst_20103 = (state_20111[(2)]);
var state_20111__$1 = state_20111;
var statearr_20127_21293 = state_20111__$1;
(statearr_20127_21293[(2)] = inst_20103);

(statearr_20127_21293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20112 === (8))){
var inst_20093 = (state_20111[(7)]);
var state_20111__$1 = state_20111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20111__$1,(11),out,inst_20093);
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
});
return (function() {
var cljs$core$async$state_machine__15037__auto__ = null;
var cljs$core$async$state_machine__15037__auto____0 = (function (){
var statearr_20129 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20129[(0)] = cljs$core$async$state_machine__15037__auto__);

(statearr_20129[(1)] = (1));

return statearr_20129;
});
var cljs$core$async$state_machine__15037__auto____1 = (function (state_20111){
while(true){
var ret_value__15038__auto__ = (function (){try{while(true){
var result__15039__auto__ = switch__15036__auto__(state_20111);
if(cljs.core.keyword_identical_QMARK_(result__15039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15039__auto__;
}
break;
}
}catch (e20130){var ex__15040__auto__ = e20130;
var statearr_20131_21294 = state_20111;
(statearr_20131_21294[(2)] = ex__15040__auto__);


if(cljs.core.seq((state_20111[(4)]))){
var statearr_20132_21295 = state_20111;
(statearr_20132_21295[(1)] = cljs.core.first((state_20111[(4)])));

} else {
throw ex__15040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21296 = state_20111;
state_20111 = G__21296;
continue;
} else {
return ret_value__15038__auto__;
}
break;
}
});
cljs$core$async$state_machine__15037__auto__ = function(state_20111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15037__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15037__auto____1.call(this,state_20111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15037__auto____0;
cljs$core$async$state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15037__auto____1;
return cljs$core$async$state_machine__15037__auto__;
})()
})();
var state__17915__auto__ = (function (){var statearr_20136 = f__17914__auto__();
(statearr_20136[(6)] = c__17913__auto___21280);

return statearr_20136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17915__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {shadow.build.cljs_hacks.IMeta}
 * @implements {shadow.build.cljs_hacks.IWithMeta}
 * @implements {cljs.core.async.impl.protocols.Handler}
*/
cljs.core.async.t_cljs$core$async20147 = (function (f,ch,meta20141,_,fn1,meta20148){
this.f = f;
this.ch = ch;
this.meta20141 = meta20141;
this._ = _;
this.fn1 = fn1;
this.meta20148 = meta20148;
});
(cljs.core.async.t_cljs$core$async20147.prototype.shadow$build$cljs_hacks$IWithMeta$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20147.prototype.shadow$build$cljs_hacks$IWithMeta$_with_meta$arity$2 = (function (_20149,meta20148__$1){
var self__ = this;
var _20149__$1 = this;
return (new cljs.core.async.t_cljs$core$async20147(self__.f,self__.ch,self__.meta20141,self__._,self__.fn1,meta20148__$1));
}));

(cljs.core.async.t_cljs$core$async20147.prototype.shadow$build$cljs_hacks$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20147.prototype.shadow$build$cljs_hacks$IMeta$_meta$arity$1 = (function (_20149){
var self__ = this;
var _20149__$1 = this;
return self__.meta20148;
}));

(cljs.core.async.t_cljs$core$async20147.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20147.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async20147.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20147.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__20138_SHARP_){
var G__20151 = (((p1__20138_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20138_SHARP_) : self__.f.call(null,p1__20138_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20151) : f1.call(null,G__20151));
});
}));

(cljs.core.async.t_cljs$core$async20147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20141","meta20141",1939204942,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20140","cljs.core.async/t_cljs$core$async20140",-883896091,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20148","meta20148",738062823,null)], null);
}));

(cljs.core.async.t_cljs$core$async20147.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20147.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20147");

(cljs.core.async.t_cljs$core$async20147.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20147");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20147.
 */
cljs.core.async.__GT_t_cljs$core$async20147 = (function cljs$core$async$__GT_t_cljs$core$async20147(f,ch,meta20141,_,fn1,meta20148){
return (new cljs.core.async.t_cljs$core$async20147(f,ch,meta20141,_,fn1,meta20148));
});



/**
* @constructor
 * @implements {shadow.build.cljs_hacks.IMeta}
 * @implements {shadow.build.cljs_hacks.IWithMeta}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.t_cljs$core$async20140 = (function (f,ch,meta20141){
this.f = f;
this.ch = ch;
this.meta20141 = meta20141;
});
(cljs.core.async.t_cljs$core$async20140.prototype.shadow$build$cljs_hacks$IWithMeta$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20140.prototype.shadow$build$cljs_hacks$IWithMeta$_with_meta$arity$2 = (function (_20142,meta20141__$1){
var self__ = this;
var _20142__$1 = this;
return (new cljs.core.async.t_cljs$core$async20140(self__.f,self__.ch,meta20141__$1));
}));

(cljs.core.async.t_cljs$core$async20140.prototype.shadow$build$cljs_hacks$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20140.prototype.shadow$build$cljs_hacks$IMeta$_meta$arity$1 = (function (_20142){
var self__ = this;
var _20142__$1 = this;
return self__.meta20141;
}));

(cljs.core.async.t_cljs$core$async20140.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20140.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20140.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20140.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20140.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async20147(self__.f,self__.ch,self__.meta20141,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__20156 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20156) : self__.f.call(null,G__20156));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async20140.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20140.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async20140.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20141","meta20141",1939204942,null)], null);
}));

(cljs.core.async.t_cljs$core$async20140.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20140");

(cljs.core.async.t_cljs$core$async20140.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20140");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20140.
 */
cljs.core.async.__GT_t_cljs$core$async20140 = (function cljs$core$async$__GT_t_cljs$core$async20140(f,ch,meta20141){
return (new cljs.core.async.t_cljs$core$async20140(f,ch,meta20141));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async20140(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {shadow.build.cljs_hacks.IMeta}
 * @implements {shadow.build.cljs_hacks.IWithMeta}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.t_cljs$core$async20165 = (function (f,ch,meta20166){
this.f = f;
this.ch = ch;
this.meta20166 = meta20166;
});
(cljs.core.async.t_cljs$core$async20165.prototype.shadow$build$cljs_hacks$IWithMeta$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20165.prototype.shadow$build$cljs_hacks$IWithMeta$_with_meta$arity$2 = (function (_20167,meta20166__$1){
var self__ = this;
var _20167__$1 = this;
return (new cljs.core.async.t_cljs$core$async20165(self__.f,self__.ch,meta20166__$1));
}));

(cljs.core.async.t_cljs$core$async20165.prototype.shadow$build$cljs_hacks$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20165.prototype.shadow$build$cljs_hacks$IMeta$_meta$arity$1 = (function (_20167){
var self__ = this;
var _20167__$1 = this;
return self__.meta20166;
}));

(cljs.core.async.t_cljs$core$async20165.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20165.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20165.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20165.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20165.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20165.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async20165.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20166","meta20166",-1131947612,null)], null);
}));

(cljs.core.async.t_cljs$core$async20165.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20165.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20165");

(cljs.core.async.t_cljs$core$async20165.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20165");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20165.
 */
cljs.core.async.__GT_t_cljs$core$async20165 = (function cljs$core$async$__GT_t_cljs$core$async20165(f,ch,meta20166){
return (new cljs.core.async.t_cljs$core$async20165(f,ch,meta20166));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async20165(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {shadow.build.cljs_hacks.IMeta}
 * @implements {shadow.build.cljs_hacks.IWithMeta}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.t_cljs$core$async20172 = (function (p,ch,meta20173){
this.p = p;
this.ch = ch;
this.meta20173 = meta20173;
});
(cljs.core.async.t_cljs$core$async20172.prototype.shadow$build$cljs_hacks$IWithMeta$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20172.prototype.shadow$build$cljs_hacks$IWithMeta$_with_meta$arity$2 = (function (_20174,meta20173__$1){
var self__ = this;
var _20174__$1 = this;
return (new cljs.core.async.t_cljs$core$async20172(self__.p,self__.ch,meta20173__$1));
}));

(cljs.core.async.t_cljs$core$async20172.prototype.shadow$build$cljs_hacks$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20172.prototype.shadow$build$cljs_hacks$IMeta$_meta$arity$1 = (function (_20174){
var self__ = this;
var _20174__$1 = this;
return self__.meta20173;
}));

(cljs.core.async.t_cljs$core$async20172.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20172.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20172.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20172.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20172.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20172.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20172.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async20172.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20173","meta20173",221682889,null)], null);
}));

(cljs.core.async.t_cljs$core$async20172.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20172.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20172");

(cljs.core.async.t_cljs$core$async20172.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20172");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20172.
 */
cljs.core.async.__GT_t_cljs$core$async20172 = (function cljs$core$async$__GT_t_cljs$core$async20172(p,ch,meta20173){
return (new cljs.core.async.t_cljs$core$async20172(p,ch,meta20173));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async20172(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__20184 = arguments.length;
switch (G__20184) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17913__auto___21303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17914__auto__ = (function (){var switch__15036__auto__ = (function (state_20219){
var state_val_20220 = (state_20219[(1)]);
if((state_val_20220 === (7))){
var inst_20215 = (state_20219[(2)]);
var state_20219__$1 = state_20219;
var statearr_20223_21304 = state_20219__$1;
(statearr_20223_21304[(2)] = inst_20215);

(statearr_20223_21304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20220 === (1))){
var state_20219__$1 = state_20219;
var statearr_20224_21305 = state_20219__$1;
(statearr_20224_21305[(2)] = null);

(statearr_20224_21305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20220 === (4))){
var inst_20198 = (state_20219[(7)]);
var inst_20198__$1 = (state_20219[(2)]);
var inst_20199 = (inst_20198__$1 == null);
var state_20219__$1 = (function (){var statearr_20225 = state_20219;
(statearr_20225[(7)] = inst_20198__$1);

return statearr_20225;
})();
if(cljs.core.truth_(inst_20199)){
var statearr_20227_21306 = state_20219__$1;
(statearr_20227_21306[(1)] = (5));

} else {
var statearr_20228_21307 = state_20219__$1;
(statearr_20228_21307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20220 === (6))){
var inst_20198 = (state_20219[(7)]);
var inst_20203 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20198) : p.call(null,inst_20198));
var state_20219__$1 = state_20219;
if(cljs.core.truth_(inst_20203)){
var statearr_20229_21308 = state_20219__$1;
(statearr_20229_21308[(1)] = (8));

} else {
var statearr_20230_21309 = state_20219__$1;
(statearr_20230_21309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20220 === (3))){
var inst_20217 = (state_20219[(2)]);
var state_20219__$1 = state_20219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20219__$1,inst_20217);
} else {
if((state_val_20220 === (2))){
var state_20219__$1 = state_20219;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20219__$1,(4),ch);
} else {
if((state_val_20220 === (11))){
var inst_20206 = (state_20219[(2)]);
var state_20219__$1 = state_20219;
var statearr_20231_21310 = state_20219__$1;
(statearr_20231_21310[(2)] = inst_20206);

(statearr_20231_21310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20220 === (9))){
var state_20219__$1 = state_20219;
var statearr_20234_21311 = state_20219__$1;
(statearr_20234_21311[(2)] = null);

(statearr_20234_21311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20220 === (5))){
var inst_20201 = cljs.core.async.close_BANG_(out);
var state_20219__$1 = state_20219;
var statearr_20235_21312 = state_20219__$1;
(statearr_20235_21312[(2)] = inst_20201);

(statearr_20235_21312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20220 === (10))){
var inst_20209 = (state_20219[(2)]);
var state_20219__$1 = (function (){var statearr_20238 = state_20219;
(statearr_20238[(8)] = inst_20209);

return statearr_20238;
})();
var statearr_20240_21313 = state_20219__$1;
(statearr_20240_21313[(2)] = null);

(statearr_20240_21313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20220 === (8))){
var inst_20198 = (state_20219[(7)]);
var state_20219__$1 = state_20219;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20219__$1,(11),out,inst_20198);
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
});
return (function() {
var cljs$core$async$state_machine__15037__auto__ = null;
var cljs$core$async$state_machine__15037__auto____0 = (function (){
var statearr_20241 = [null,null,null,null,null,null,null,null,null];
(statearr_20241[(0)] = cljs$core$async$state_machine__15037__auto__);

(statearr_20241[(1)] = (1));

return statearr_20241;
});
var cljs$core$async$state_machine__15037__auto____1 = (function (state_20219){
while(true){
var ret_value__15038__auto__ = (function (){try{while(true){
var result__15039__auto__ = switch__15036__auto__(state_20219);
if(cljs.core.keyword_identical_QMARK_(result__15039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15039__auto__;
}
break;
}
}catch (e20242){var ex__15040__auto__ = e20242;
var statearr_20243_21314 = state_20219;
(statearr_20243_21314[(2)] = ex__15040__auto__);


if(cljs.core.seq((state_20219[(4)]))){
var statearr_20244_21315 = state_20219;
(statearr_20244_21315[(1)] = cljs.core.first((state_20219[(4)])));

} else {
throw ex__15040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21316 = state_20219;
state_20219 = G__21316;
continue;
} else {
return ret_value__15038__auto__;
}
break;
}
});
cljs$core$async$state_machine__15037__auto__ = function(state_20219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15037__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15037__auto____1.call(this,state_20219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15037__auto____0;
cljs$core$async$state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15037__auto____1;
return cljs$core$async$state_machine__15037__auto__;
})()
})();
var state__17915__auto__ = (function (){var statearr_20245 = f__17914__auto__();
(statearr_20245[(6)] = c__17913__auto___21303);

return statearr_20245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17915__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20248 = arguments.length;
switch (G__20248) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17913__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17914__auto__ = (function (){var switch__15036__auto__ = (function (state_20318){
var state_val_20319 = (state_20318[(1)]);
if((state_val_20319 === (7))){
var inst_20314 = (state_20318[(2)]);
var state_20318__$1 = state_20318;
var statearr_20320_21318 = state_20318__$1;
(statearr_20320_21318[(2)] = inst_20314);

(statearr_20320_21318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20319 === (20))){
var inst_20282 = (state_20318[(7)]);
var inst_20293 = (state_20318[(2)]);
var inst_20296 = cljs.core.next(inst_20282);
var inst_20266 = inst_20296;
var inst_20267 = null;
var inst_20268 = (0);
var inst_20269 = (0);
var state_20318__$1 = (function (){var statearr_20321 = state_20318;
(statearr_20321[(8)] = inst_20269);

(statearr_20321[(9)] = inst_20268);

(statearr_20321[(10)] = inst_20266);

(statearr_20321[(11)] = inst_20293);

(statearr_20321[(12)] = inst_20267);

return statearr_20321;
})();
var statearr_20322_21319 = state_20318__$1;
(statearr_20322_21319[(2)] = null);

(statearr_20322_21319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20319 === (1))){
var state_20318__$1 = state_20318;
var statearr_20323_21320 = state_20318__$1;
(statearr_20323_21320[(2)] = null);

(statearr_20323_21320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20319 === (4))){
var inst_20255 = (state_20318[(13)]);
var inst_20255__$1 = (state_20318[(2)]);
var inst_20256 = (inst_20255__$1 == null);
var state_20318__$1 = (function (){var statearr_20326 = state_20318;
(statearr_20326[(13)] = inst_20255__$1);

return statearr_20326;
})();
if(cljs.core.truth_(inst_20256)){
var statearr_20328_21321 = state_20318__$1;
(statearr_20328_21321[(1)] = (5));

} else {
var statearr_20329_21322 = state_20318__$1;
(statearr_20329_21322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20319 === (15))){
var state_20318__$1 = state_20318;
var statearr_20333_21323 = state_20318__$1;
(statearr_20333_21323[(2)] = null);

(statearr_20333_21323[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20319 === (21))){
var state_20318__$1 = state_20318;
var statearr_20334_21324 = state_20318__$1;
(statearr_20334_21324[(2)] = null);

(statearr_20334_21324[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20319 === (13))){
var inst_20269 = (state_20318[(8)]);
var inst_20268 = (state_20318[(9)]);
var inst_20266 = (state_20318[(10)]);
var inst_20267 = (state_20318[(12)]);
var inst_20278 = (state_20318[(2)]);
var inst_20279 = (inst_20269 + (1));
var tmp20330 = inst_20268;
var tmp20331 = inst_20266;
var tmp20332 = inst_20267;
var inst_20266__$1 = tmp20331;
var inst_20267__$1 = tmp20332;
var inst_20268__$1 = tmp20330;
var inst_20269__$1 = inst_20279;
var state_20318__$1 = (function (){var statearr_20336 = state_20318;
(statearr_20336[(8)] = inst_20269__$1);

(statearr_20336[(9)] = inst_20268__$1);

(statearr_20336[(10)] = inst_20266__$1);

(statearr_20336[(12)] = inst_20267__$1);

(statearr_20336[(14)] = inst_20278);

return statearr_20336;
})();
var statearr_20341_21325 = state_20318__$1;
(statearr_20341_21325[(2)] = null);

(statearr_20341_21325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20319 === (22))){
var state_20318__$1 = state_20318;
var statearr_20345_21326 = state_20318__$1;
(statearr_20345_21326[(2)] = null);

(statearr_20345_21326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20319 === (6))){
var inst_20255 = (state_20318[(13)]);
var inst_20264 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20255) : f.call(null,inst_20255));
var inst_20265 = cljs.core.seq(inst_20264);
var inst_20266 = inst_20265;
var inst_20267 = null;
var inst_20268 = (0);
var inst_20269 = (0);
var state_20318__$1 = (function (){var statearr_20346 = state_20318;
(statearr_20346[(8)] = inst_20269);

(statearr_20346[(9)] = inst_20268);

(statearr_20346[(10)] = inst_20266);

(statearr_20346[(12)] = inst_20267);

return statearr_20346;
})();
var statearr_20350_21328 = state_20318__$1;
(statearr_20350_21328[(2)] = null);

(statearr_20350_21328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20319 === (17))){
var inst_20282 = (state_20318[(7)]);
var inst_20286 = cljs.core.chunk_first(inst_20282);
var inst_20287 = cljs.core.chunk_rest(inst_20282);
var inst_20288 = cljs.core.count(inst_20286);
var inst_20266 = inst_20287;
var inst_20267 = inst_20286;
var inst_20268 = inst_20288;
var inst_20269 = (0);
var state_20318__$1 = (function (){var statearr_20351 = state_20318;
(statearr_20351[(8)] = inst_20269);

(statearr_20351[(9)] = inst_20268);

(statearr_20351[(10)] = inst_20266);

(statearr_20351[(12)] = inst_20267);

return statearr_20351;
})();
var statearr_20355_21329 = state_20318__$1;
(statearr_20355_21329[(2)] = null);

(statearr_20355_21329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20319 === (3))){
var inst_20316 = (state_20318[(2)]);
var state_20318__$1 = state_20318;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20318__$1,inst_20316);
} else {
if((state_val_20319 === (12))){
var inst_20304 = (state_20318[(2)]);
var state_20318__$1 = state_20318;
var statearr_20356_21330 = state_20318__$1;
(statearr_20356_21330[(2)] = inst_20304);

(statearr_20356_21330[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20319 === (2))){
var state_20318__$1 = state_20318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20318__$1,(4),in$);
} else {
if((state_val_20319 === (23))){
var inst_20312 = (state_20318[(2)]);
var state_20318__$1 = state_20318;
var statearr_20360_21331 = state_20318__$1;
(statearr_20360_21331[(2)] = inst_20312);

(statearr_20360_21331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20319 === (19))){
var inst_20299 = (state_20318[(2)]);
var state_20318__$1 = state_20318;
var statearr_20361_21333 = state_20318__$1;
(statearr_20361_21333[(2)] = inst_20299);

(statearr_20361_21333[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20319 === (11))){
var inst_20266 = (state_20318[(10)]);
var inst_20282 = (state_20318[(7)]);
var inst_20282__$1 = cljs.core.seq(inst_20266);
var state_20318__$1 = (function (){var statearr_20362 = state_20318;
(statearr_20362[(7)] = inst_20282__$1);

return statearr_20362;
})();
if(inst_20282__$1){
var statearr_20363_21334 = state_20318__$1;
(statearr_20363_21334[(1)] = (14));

} else {
var statearr_20364_21335 = state_20318__$1;
(statearr_20364_21335[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20319 === (9))){
var inst_20306 = (state_20318[(2)]);
var inst_20307 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20318__$1 = (function (){var statearr_20366 = state_20318;
(statearr_20366[(15)] = inst_20306);

return statearr_20366;
})();
if(cljs.core.truth_(inst_20307)){
var statearr_20367_21336 = state_20318__$1;
(statearr_20367_21336[(1)] = (21));

} else {
var statearr_20368_21337 = state_20318__$1;
(statearr_20368_21337[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20319 === (5))){
var inst_20258 = cljs.core.async.close_BANG_(out);
var state_20318__$1 = state_20318;
var statearr_20369_21338 = state_20318__$1;
(statearr_20369_21338[(2)] = inst_20258);

(statearr_20369_21338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20319 === (14))){
var inst_20282 = (state_20318[(7)]);
var inst_20284 = cljs.core.chunked_seq_QMARK_(inst_20282);
var state_20318__$1 = state_20318;
if(inst_20284){
var statearr_20371_21339 = state_20318__$1;
(statearr_20371_21339[(1)] = (17));

} else {
var statearr_20372_21340 = state_20318__$1;
(statearr_20372_21340[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20319 === (16))){
var inst_20302 = (state_20318[(2)]);
var state_20318__$1 = state_20318;
var statearr_20373_21341 = state_20318__$1;
(statearr_20373_21341[(2)] = inst_20302);

(statearr_20373_21341[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20319 === (10))){
var inst_20269 = (state_20318[(8)]);
var inst_20267 = (state_20318[(12)]);
var inst_20276 = cljs.core._nth(inst_20267,inst_20269);
var state_20318__$1 = state_20318;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20318__$1,(13),out,inst_20276);
} else {
if((state_val_20319 === (18))){
var inst_20282 = (state_20318[(7)]);
var inst_20291 = cljs.core.first(inst_20282);
var state_20318__$1 = state_20318;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20318__$1,(20),out,inst_20291);
} else {
if((state_val_20319 === (8))){
var inst_20269 = (state_20318[(8)]);
var inst_20268 = (state_20318[(9)]);
var inst_20271 = (inst_20269 < inst_20268);
var inst_20272 = inst_20271;
var state_20318__$1 = state_20318;
if(cljs.core.truth_(inst_20272)){
var statearr_20380_21343 = state_20318__$1;
(statearr_20380_21343[(1)] = (10));

} else {
var statearr_20381_21344 = state_20318__$1;
(statearr_20381_21344[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15037__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15037__auto____0 = (function (){
var statearr_20386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20386[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15037__auto__);

(statearr_20386[(1)] = (1));

return statearr_20386;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15037__auto____1 = (function (state_20318){
while(true){
var ret_value__15038__auto__ = (function (){try{while(true){
var result__15039__auto__ = switch__15036__auto__(state_20318);
if(cljs.core.keyword_identical_QMARK_(result__15039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15039__auto__;
}
break;
}
}catch (e20387){var ex__15040__auto__ = e20387;
var statearr_20388_21345 = state_20318;
(statearr_20388_21345[(2)] = ex__15040__auto__);


if(cljs.core.seq((state_20318[(4)]))){
var statearr_20389_21346 = state_20318;
(statearr_20389_21346[(1)] = cljs.core.first((state_20318[(4)])));

} else {
throw ex__15040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21347 = state_20318;
state_20318 = G__21347;
continue;
} else {
return ret_value__15038__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15037__auto__ = function(state_20318){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15037__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15037__auto____1.call(this,state_20318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15037__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15037__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15037__auto__;
})()
})();
var state__17915__auto__ = (function (){var statearr_20392 = f__17914__auto__();
(statearr_20392[(6)] = c__17913__auto__);

return statearr_20392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17915__auto__);
}));

return c__17913__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20398 = arguments.length;
switch (G__20398) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__20401 = arguments.length;
switch (G__20401) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__20407 = arguments.length;
switch (G__20407) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17913__auto___21351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17914__auto__ = (function (){var switch__15036__auto__ = (function (state_20435){
var state_val_20436 = (state_20435[(1)]);
if((state_val_20436 === (7))){
var inst_20430 = (state_20435[(2)]);
var state_20435__$1 = state_20435;
var statearr_20440_21352 = state_20435__$1;
(statearr_20440_21352[(2)] = inst_20430);

(statearr_20440_21352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (1))){
var inst_20411 = null;
var state_20435__$1 = (function (){var statearr_20441 = state_20435;
(statearr_20441[(7)] = inst_20411);

return statearr_20441;
})();
var statearr_20443_21353 = state_20435__$1;
(statearr_20443_21353[(2)] = null);

(statearr_20443_21353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (4))){
var inst_20414 = (state_20435[(8)]);
var inst_20414__$1 = (state_20435[(2)]);
var inst_20416 = (inst_20414__$1 == null);
var inst_20417 = cljs.core.not(inst_20416);
var state_20435__$1 = (function (){var statearr_20444 = state_20435;
(statearr_20444[(8)] = inst_20414__$1);

return statearr_20444;
})();
if(inst_20417){
var statearr_20446_21354 = state_20435__$1;
(statearr_20446_21354[(1)] = (5));

} else {
var statearr_20448_21355 = state_20435__$1;
(statearr_20448_21355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (6))){
var state_20435__$1 = state_20435;
var statearr_20450_21356 = state_20435__$1;
(statearr_20450_21356[(2)] = null);

(statearr_20450_21356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (3))){
var inst_20432 = (state_20435[(2)]);
var inst_20433 = cljs.core.async.close_BANG_(out);
var state_20435__$1 = (function (){var statearr_20452 = state_20435;
(statearr_20452[(9)] = inst_20432);

return statearr_20452;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20435__$1,inst_20433);
} else {
if((state_val_20436 === (2))){
var state_20435__$1 = state_20435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20435__$1,(4),ch);
} else {
if((state_val_20436 === (11))){
var inst_20414 = (state_20435[(8)]);
var inst_20424 = (state_20435[(2)]);
var inst_20411 = inst_20414;
var state_20435__$1 = (function (){var statearr_20454 = state_20435;
(statearr_20454[(10)] = inst_20424);

(statearr_20454[(7)] = inst_20411);

return statearr_20454;
})();
var statearr_20455_21357 = state_20435__$1;
(statearr_20455_21357[(2)] = null);

(statearr_20455_21357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (9))){
var inst_20414 = (state_20435[(8)]);
var state_20435__$1 = state_20435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20435__$1,(11),out,inst_20414);
} else {
if((state_val_20436 === (5))){
var inst_20414 = (state_20435[(8)]);
var inst_20411 = (state_20435[(7)]);
var inst_20419 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20414,inst_20411);
var state_20435__$1 = state_20435;
if(inst_20419){
var statearr_20461_21358 = state_20435__$1;
(statearr_20461_21358[(1)] = (8));

} else {
var statearr_20462_21359 = state_20435__$1;
(statearr_20462_21359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (10))){
var inst_20427 = (state_20435[(2)]);
var state_20435__$1 = state_20435;
var statearr_20463_21360 = state_20435__$1;
(statearr_20463_21360[(2)] = inst_20427);

(statearr_20463_21360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20436 === (8))){
var inst_20411 = (state_20435[(7)]);
var tmp20460 = inst_20411;
var inst_20411__$1 = tmp20460;
var state_20435__$1 = (function (){var statearr_20464 = state_20435;
(statearr_20464[(7)] = inst_20411__$1);

return statearr_20464;
})();
var statearr_20465_21361 = state_20435__$1;
(statearr_20465_21361[(2)] = null);

(statearr_20465_21361[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__15037__auto__ = null;
var cljs$core$async$state_machine__15037__auto____0 = (function (){
var statearr_20466 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20466[(0)] = cljs$core$async$state_machine__15037__auto__);

(statearr_20466[(1)] = (1));

return statearr_20466;
});
var cljs$core$async$state_machine__15037__auto____1 = (function (state_20435){
while(true){
var ret_value__15038__auto__ = (function (){try{while(true){
var result__15039__auto__ = switch__15036__auto__(state_20435);
if(cljs.core.keyword_identical_QMARK_(result__15039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15039__auto__;
}
break;
}
}catch (e20467){var ex__15040__auto__ = e20467;
var statearr_20468_21362 = state_20435;
(statearr_20468_21362[(2)] = ex__15040__auto__);


if(cljs.core.seq((state_20435[(4)]))){
var statearr_20469_21363 = state_20435;
(statearr_20469_21363[(1)] = cljs.core.first((state_20435[(4)])));

} else {
throw ex__15040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21364 = state_20435;
state_20435 = G__21364;
continue;
} else {
return ret_value__15038__auto__;
}
break;
}
});
cljs$core$async$state_machine__15037__auto__ = function(state_20435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15037__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15037__auto____1.call(this,state_20435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15037__auto____0;
cljs$core$async$state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15037__auto____1;
return cljs$core$async$state_machine__15037__auto__;
})()
})();
var state__17915__auto__ = (function (){var statearr_20472 = f__17914__auto__();
(statearr_20472[(6)] = c__17913__auto___21351);

return statearr_20472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17915__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20479 = arguments.length;
switch (G__20479) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17913__auto___21366 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17914__auto__ = (function (){var switch__15036__auto__ = (function (state_20525){
var state_val_20526 = (state_20525[(1)]);
if((state_val_20526 === (7))){
var inst_20521 = (state_20525[(2)]);
var state_20525__$1 = state_20525;
var statearr_20527_21367 = state_20525__$1;
(statearr_20527_21367[(2)] = inst_20521);

(statearr_20527_21367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20526 === (1))){
var inst_20488 = (new Array(n));
var inst_20489 = inst_20488;
var inst_20490 = (0);
var state_20525__$1 = (function (){var statearr_20528 = state_20525;
(statearr_20528[(7)] = inst_20490);

(statearr_20528[(8)] = inst_20489);

return statearr_20528;
})();
var statearr_20529_21368 = state_20525__$1;
(statearr_20529_21368[(2)] = null);

(statearr_20529_21368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20526 === (4))){
var inst_20493 = (state_20525[(9)]);
var inst_20493__$1 = (state_20525[(2)]);
var inst_20494 = (inst_20493__$1 == null);
var inst_20495 = cljs.core.not(inst_20494);
var state_20525__$1 = (function (){var statearr_20530 = state_20525;
(statearr_20530[(9)] = inst_20493__$1);

return statearr_20530;
})();
if(inst_20495){
var statearr_20531_21369 = state_20525__$1;
(statearr_20531_21369[(1)] = (5));

} else {
var statearr_20532_21370 = state_20525__$1;
(statearr_20532_21370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20526 === (15))){
var inst_20515 = (state_20525[(2)]);
var state_20525__$1 = state_20525;
var statearr_20539_21371 = state_20525__$1;
(statearr_20539_21371[(2)] = inst_20515);

(statearr_20539_21371[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20526 === (13))){
var state_20525__$1 = state_20525;
var statearr_20553_21372 = state_20525__$1;
(statearr_20553_21372[(2)] = null);

(statearr_20553_21372[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20526 === (6))){
var inst_20490 = (state_20525[(7)]);
var inst_20511 = (inst_20490 > (0));
var state_20525__$1 = state_20525;
if(cljs.core.truth_(inst_20511)){
var statearr_20554_21373 = state_20525__$1;
(statearr_20554_21373[(1)] = (12));

} else {
var statearr_20555_21374 = state_20525__$1;
(statearr_20555_21374[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20526 === (3))){
var inst_20523 = (state_20525[(2)]);
var state_20525__$1 = state_20525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20525__$1,inst_20523);
} else {
if((state_val_20526 === (12))){
var inst_20489 = (state_20525[(8)]);
var inst_20513 = cljs.core.vec(inst_20489);
var state_20525__$1 = state_20525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20525__$1,(15),out,inst_20513);
} else {
if((state_val_20526 === (2))){
var state_20525__$1 = state_20525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20525__$1,(4),ch);
} else {
if((state_val_20526 === (11))){
var inst_20505 = (state_20525[(2)]);
var inst_20506 = (new Array(n));
var inst_20489 = inst_20506;
var inst_20490 = (0);
var state_20525__$1 = (function (){var statearr_20581 = state_20525;
(statearr_20581[(10)] = inst_20505);

(statearr_20581[(7)] = inst_20490);

(statearr_20581[(8)] = inst_20489);

return statearr_20581;
})();
var statearr_20589_21375 = state_20525__$1;
(statearr_20589_21375[(2)] = null);

(statearr_20589_21375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20526 === (9))){
var inst_20489 = (state_20525[(8)]);
var inst_20503 = cljs.core.vec(inst_20489);
var state_20525__$1 = state_20525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20525__$1,(11),out,inst_20503);
} else {
if((state_val_20526 === (5))){
var inst_20498 = (state_20525[(11)]);
var inst_20490 = (state_20525[(7)]);
var inst_20489 = (state_20525[(8)]);
var inst_20493 = (state_20525[(9)]);
var inst_20497 = (inst_20489[inst_20490] = inst_20493);
var inst_20498__$1 = (inst_20490 + (1));
var inst_20499 = (inst_20498__$1 < n);
var state_20525__$1 = (function (){var statearr_20617 = state_20525;
(statearr_20617[(12)] = inst_20497);

(statearr_20617[(11)] = inst_20498__$1);

return statearr_20617;
})();
if(cljs.core.truth_(inst_20499)){
var statearr_20618_21376 = state_20525__$1;
(statearr_20618_21376[(1)] = (8));

} else {
var statearr_20619_21377 = state_20525__$1;
(statearr_20619_21377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20526 === (14))){
var inst_20518 = (state_20525[(2)]);
var inst_20519 = cljs.core.async.close_BANG_(out);
var state_20525__$1 = (function (){var statearr_20628 = state_20525;
(statearr_20628[(13)] = inst_20518);

return statearr_20628;
})();
var statearr_20630_21378 = state_20525__$1;
(statearr_20630_21378[(2)] = inst_20519);

(statearr_20630_21378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20526 === (10))){
var inst_20509 = (state_20525[(2)]);
var state_20525__$1 = state_20525;
var statearr_20640_21379 = state_20525__$1;
(statearr_20640_21379[(2)] = inst_20509);

(statearr_20640_21379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20526 === (8))){
var inst_20498 = (state_20525[(11)]);
var inst_20489 = (state_20525[(8)]);
var tmp20623 = inst_20489;
var inst_20489__$1 = tmp20623;
var inst_20490 = inst_20498;
var state_20525__$1 = (function (){var statearr_20641 = state_20525;
(statearr_20641[(7)] = inst_20490);

(statearr_20641[(8)] = inst_20489__$1);

return statearr_20641;
})();
var statearr_20642_21380 = state_20525__$1;
(statearr_20642_21380[(2)] = null);

(statearr_20642_21380[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__15037__auto__ = null;
var cljs$core$async$state_machine__15037__auto____0 = (function (){
var statearr_20651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20651[(0)] = cljs$core$async$state_machine__15037__auto__);

(statearr_20651[(1)] = (1));

return statearr_20651;
});
var cljs$core$async$state_machine__15037__auto____1 = (function (state_20525){
while(true){
var ret_value__15038__auto__ = (function (){try{while(true){
var result__15039__auto__ = switch__15036__auto__(state_20525);
if(cljs.core.keyword_identical_QMARK_(result__15039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15039__auto__;
}
break;
}
}catch (e20656){var ex__15040__auto__ = e20656;
var statearr_20657_21381 = state_20525;
(statearr_20657_21381[(2)] = ex__15040__auto__);


if(cljs.core.seq((state_20525[(4)]))){
var statearr_20658_21382 = state_20525;
(statearr_20658_21382[(1)] = cljs.core.first((state_20525[(4)])));

} else {
throw ex__15040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21383 = state_20525;
state_20525 = G__21383;
continue;
} else {
return ret_value__15038__auto__;
}
break;
}
});
cljs$core$async$state_machine__15037__auto__ = function(state_20525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15037__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15037__auto____1.call(this,state_20525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15037__auto____0;
cljs$core$async$state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15037__auto____1;
return cljs$core$async$state_machine__15037__auto__;
})()
})();
var state__17915__auto__ = (function (){var statearr_20660 = f__17914__auto__();
(statearr_20660[(6)] = c__17913__auto___21366);

return statearr_20660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17915__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20663 = arguments.length;
switch (G__20663) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17913__auto___21385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17914__auto__ = (function (){var switch__15036__auto__ = (function (state_20712){
var state_val_20713 = (state_20712[(1)]);
if((state_val_20713 === (7))){
var inst_20708 = (state_20712[(2)]);
var state_20712__$1 = state_20712;
var statearr_20717_21386 = state_20712__$1;
(statearr_20717_21386[(2)] = inst_20708);

(statearr_20717_21386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (1))){
var inst_20666 = [];
var inst_20667 = inst_20666;
var inst_20668 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20712__$1 = (function (){var statearr_20718 = state_20712;
(statearr_20718[(7)] = inst_20668);

(statearr_20718[(8)] = inst_20667);

return statearr_20718;
})();
var statearr_20719_21388 = state_20712__$1;
(statearr_20719_21388[(2)] = null);

(statearr_20719_21388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (4))){
var inst_20671 = (state_20712[(9)]);
var inst_20671__$1 = (state_20712[(2)]);
var inst_20673 = (inst_20671__$1 == null);
var inst_20674 = cljs.core.not(inst_20673);
var state_20712__$1 = (function (){var statearr_20720 = state_20712;
(statearr_20720[(9)] = inst_20671__$1);

return statearr_20720;
})();
if(inst_20674){
var statearr_20721_21389 = state_20712__$1;
(statearr_20721_21389[(1)] = (5));

} else {
var statearr_20722_21390 = state_20712__$1;
(statearr_20722_21390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (15))){
var inst_20667 = (state_20712[(8)]);
var inst_20700 = cljs.core.vec(inst_20667);
var state_20712__$1 = state_20712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20712__$1,(18),out,inst_20700);
} else {
if((state_val_20713 === (13))){
var inst_20695 = (state_20712[(2)]);
var state_20712__$1 = state_20712;
var statearr_20727_21391 = state_20712__$1;
(statearr_20727_21391[(2)] = inst_20695);

(statearr_20727_21391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (6))){
var inst_20667 = (state_20712[(8)]);
var inst_20697 = inst_20667.length;
var inst_20698 = (inst_20697 > (0));
var state_20712__$1 = state_20712;
if(cljs.core.truth_(inst_20698)){
var statearr_20730_21392 = state_20712__$1;
(statearr_20730_21392[(1)] = (15));

} else {
var statearr_20733_21393 = state_20712__$1;
(statearr_20733_21393[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (17))){
var inst_20705 = (state_20712[(2)]);
var inst_20706 = cljs.core.async.close_BANG_(out);
var state_20712__$1 = (function (){var statearr_20734 = state_20712;
(statearr_20734[(10)] = inst_20705);

return statearr_20734;
})();
var statearr_20735_21394 = state_20712__$1;
(statearr_20735_21394[(2)] = inst_20706);

(statearr_20735_21394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (3))){
var inst_20710 = (state_20712[(2)]);
var state_20712__$1 = state_20712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20712__$1,inst_20710);
} else {
if((state_val_20713 === (12))){
var inst_20667 = (state_20712[(8)]);
var inst_20688 = cljs.core.vec(inst_20667);
var state_20712__$1 = state_20712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20712__$1,(14),out,inst_20688);
} else {
if((state_val_20713 === (2))){
var state_20712__$1 = state_20712;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20712__$1,(4),ch);
} else {
if((state_val_20713 === (11))){
var inst_20667 = (state_20712[(8)]);
var inst_20676 = (state_20712[(11)]);
var inst_20671 = (state_20712[(9)]);
var inst_20684 = inst_20667.push(inst_20671);
var tmp20736 = inst_20667;
var inst_20667__$1 = tmp20736;
var inst_20668 = inst_20676;
var state_20712__$1 = (function (){var statearr_20743 = state_20712;
(statearr_20743[(7)] = inst_20668);

(statearr_20743[(12)] = inst_20684);

(statearr_20743[(8)] = inst_20667__$1);

return statearr_20743;
})();
var statearr_20744_21395 = state_20712__$1;
(statearr_20744_21395[(2)] = null);

(statearr_20744_21395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (9))){
var inst_20668 = (state_20712[(7)]);
var inst_20680 = cljs.core.keyword_identical_QMARK_(inst_20668,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_20712__$1 = state_20712;
var statearr_20745_21396 = state_20712__$1;
(statearr_20745_21396[(2)] = inst_20680);

(statearr_20745_21396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (5))){
var inst_20668 = (state_20712[(7)]);
var inst_20677 = (state_20712[(13)]);
var inst_20676 = (state_20712[(11)]);
var inst_20671 = (state_20712[(9)]);
var inst_20676__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20671) : f.call(null,inst_20671));
var inst_20677__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20676__$1,inst_20668);
var state_20712__$1 = (function (){var statearr_20746 = state_20712;
(statearr_20746[(13)] = inst_20677__$1);

(statearr_20746[(11)] = inst_20676__$1);

return statearr_20746;
})();
if(inst_20677__$1){
var statearr_20747_21397 = state_20712__$1;
(statearr_20747_21397[(1)] = (8));

} else {
var statearr_20748_21398 = state_20712__$1;
(statearr_20748_21398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (14))){
var inst_20676 = (state_20712[(11)]);
var inst_20671 = (state_20712[(9)]);
var inst_20690 = (state_20712[(2)]);
var inst_20691 = [];
var inst_20692 = inst_20691.push(inst_20671);
var inst_20667 = inst_20691;
var inst_20668 = inst_20676;
var state_20712__$1 = (function (){var statearr_20749 = state_20712;
(statearr_20749[(7)] = inst_20668);

(statearr_20749[(14)] = inst_20690);

(statearr_20749[(15)] = inst_20692);

(statearr_20749[(8)] = inst_20667);

return statearr_20749;
})();
var statearr_20750_21399 = state_20712__$1;
(statearr_20750_21399[(2)] = null);

(statearr_20750_21399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (16))){
var state_20712__$1 = state_20712;
var statearr_20751_21400 = state_20712__$1;
(statearr_20751_21400[(2)] = null);

(statearr_20751_21400[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (10))){
var inst_20682 = (state_20712[(2)]);
var state_20712__$1 = state_20712;
if(cljs.core.truth_(inst_20682)){
var statearr_20752_21401 = state_20712__$1;
(statearr_20752_21401[(1)] = (11));

} else {
var statearr_20753_21402 = state_20712__$1;
(statearr_20753_21402[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (18))){
var inst_20702 = (state_20712[(2)]);
var state_20712__$1 = state_20712;
var statearr_20754_21403 = state_20712__$1;
(statearr_20754_21403[(2)] = inst_20702);

(statearr_20754_21403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20713 === (8))){
var inst_20677 = (state_20712[(13)]);
var state_20712__$1 = state_20712;
var statearr_20755_21404 = state_20712__$1;
(statearr_20755_21404[(2)] = inst_20677);

(statearr_20755_21404[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__15037__auto__ = null;
var cljs$core$async$state_machine__15037__auto____0 = (function (){
var statearr_20758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20758[(0)] = cljs$core$async$state_machine__15037__auto__);

(statearr_20758[(1)] = (1));

return statearr_20758;
});
var cljs$core$async$state_machine__15037__auto____1 = (function (state_20712){
while(true){
var ret_value__15038__auto__ = (function (){try{while(true){
var result__15039__auto__ = switch__15036__auto__(state_20712);
if(cljs.core.keyword_identical_QMARK_(result__15039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15039__auto__;
}
break;
}
}catch (e20759){var ex__15040__auto__ = e20759;
var statearr_20760_21405 = state_20712;
(statearr_20760_21405[(2)] = ex__15040__auto__);


if(cljs.core.seq((state_20712[(4)]))){
var statearr_20761_21406 = state_20712;
(statearr_20761_21406[(1)] = cljs.core.first((state_20712[(4)])));

} else {
throw ex__15040__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21407 = state_20712;
state_20712 = G__21407;
continue;
} else {
return ret_value__15038__auto__;
}
break;
}
});
cljs$core$async$state_machine__15037__auto__ = function(state_20712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15037__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15037__auto____1.call(this,state_20712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15037__auto____0;
cljs$core$async$state_machine__15037__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15037__auto____1;
return cljs$core$async$state_machine__15037__auto__;
})()
})();
var state__17915__auto__ = (function (){var statearr_20765 = f__17914__auto__();
(statearr_20765[(6)] = c__17913__auto___21385);

return statearr_20765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17915__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

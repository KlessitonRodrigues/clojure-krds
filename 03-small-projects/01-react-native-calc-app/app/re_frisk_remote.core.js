goog.provide('re_frisk_remote.core');
if((typeof re_frisk_remote !== 'undefined') && (typeof re_frisk_remote.core !== 'undefined') && (typeof re_frisk_remote.core.send_state !== 'undefined')){
} else {
re_frisk_remote.core.send_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk_remote !== 'undefined') && (typeof re_frisk_remote.core !== 'undefined') && (typeof re_frisk_remote.core.initialized !== 'undefined')){
} else {
re_frisk_remote.core.initialized = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof re_frisk_remote !== 'undefined') && (typeof re_frisk_remote.core !== 'undefined') && (typeof re_frisk_remote.core.chsk_send !== 'undefined')){
} else {
re_frisk_remote.core.chsk_send = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk_remote !== 'undefined') && (typeof re_frisk_remote.core !== 'undefined') && (typeof re_frisk_remote.core.normalize_db_fn !== 'undefined')){
} else {
re_frisk_remote.core.normalize_db_fn = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
re_frisk_remote.core.send = (function re_frisk_remote$core$send(message){
if(cljs.core.truth_((function (){var and__5043__auto__ = message;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core.deref(re_frisk_remote.core.send_state);
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.deref(re_frisk_remote.core.chsk_send);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
var fexpr__24786 = cljs.core.deref(re_frisk_remote.core.chsk_send);
return (fexpr__24786.cljs$core$IFn$_invoke$arity$1 ? fexpr__24786.cljs$core$IFn$_invoke$arity$1(message) : fexpr__24786.call(null,message));
} else {
return null;
}
});
re_frisk_remote.core.get_db = (function re_frisk_remote$core$get_db(){
var db = cljs.core.deref(re_frame.db.app_db);
if(cljs.core.truth_(cljs.core.deref(re_frisk_remote.core.normalize_db_fn))){
var fexpr__24787 = cljs.core.deref(re_frisk_remote.core.normalize_db_fn);
return (fexpr__24787.cljs$core$IFn$_invoke$arity$1 ? fexpr__24787.cljs$core$IFn$_invoke$arity$1(db) : fexpr__24787.call(null,db));
} else {
return db;
}
});
re_frisk_remote.core.send_subs_delta = (function re_frisk_remote$core$send_subs_delta(){
var subs = re_frisk.utils.get_subs();
var temp__5804__auto__ = re_frisk_remote.delta.delta.delta(new cljs.core.Keyword(null,"prev-subs","prev-subs",982800397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk_remote.core.send_state)),subs);
if(cljs.core.truth_(temp__5804__auto__)){
var d = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk_remote.core.send_state,cljs.core.assoc,new cljs.core.Keyword(null,"prev-subs","prev-subs",982800397),subs);

return re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","subs-delta","refrisk/subs-delta",1998434908),d], null));
} else {
return null;
}
});
re_frisk_remote.core.send_app_db_delta = (function re_frisk_remote$core$send_app_db_delta(){
var db = re_frisk_remote.core.get_db();
var temp__5804__auto__ = re_frisk_remote.delta.delta.delta(new cljs.core.Keyword(null,"prev-app-db","prev-app-db",-402688638).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk_remote.core.send_state)),db);
if(cljs.core.truth_(temp__5804__auto__)){
var d = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk_remote.core.send_state,cljs.core.assoc,new cljs.core.Keyword(null,"prev-app-db","prev-app-db",-402688638),db);

return re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","app-db-delta","refrisk/app-db-delta",-1494883613),d], null));
} else {
return null;
}
});
re_frisk_remote.core.send_db_and_subs = (function re_frisk_remote$core$send_db_and_subs(){
re_frisk_remote.core.send_subs_delta();

return re_frisk_remote.core.send_app_db_delta();
});
re_frisk_remote.core.post_event_callback = (function re_frisk_remote$core$post_event_callback(value,queue){
if(cljs.core.truth_(cljs.core.deref(re_frisk_remote.core.send_state))){
var db = re_frisk_remote.core.get_db();
var diff = re_frisk.diff.diff.diff(new cljs.core.Keyword(null,"prev-event-app-db","prev-event-app-db",555318997).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk_remote.core.send_state)),db);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk_remote.core.send_state,cljs.core.assoc,new cljs.core.Keyword(null,"prev-event-app-db","prev-event-app-db",555318997),db);

re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","event","refrisk/event",1355100504),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event","event",301435442),value,new cljs.core.Keyword(null,"app-db-diff","app-db-diff",709588713),diff,new cljs.core.Keyword(null,"queue","queue",1455835879),queue], null)], null));

return re_frisk.utils.call_and_chill(re_frisk_remote.core.send_db_and_subs,(500));
} else {
return null;
}
});
re_frisk_remote.core.trace_cb = (function re_frisk_remote$core$trace_cb(traces){
re_frisk.utils.call_and_chill(re_frisk_remote.core.send_db_and_subs,(500));

var seq__24788 = cljs.core.seq(re_frisk.trace.normalize_traces(traces));
var chunk__24789 = null;
var count__24790 = (0);
var i__24791 = (0);
while(true){
if((i__24791 < count__24790)){
var trace = chunk__24789.cljs$core$IIndexed$_nth$arity$2(null,i__24791);
re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","event","refrisk/event",1355100504),trace], null));


var G__24818 = seq__24788;
var G__24819 = chunk__24789;
var G__24820 = count__24790;
var G__24821 = (i__24791 + (1));
seq__24788 = G__24818;
chunk__24789 = G__24819;
count__24790 = G__24820;
i__24791 = G__24821;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24788);
if(temp__5804__auto__){
var seq__24788__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24788__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24788__$1);
var G__24822 = cljs.core.chunk_rest(seq__24788__$1);
var G__24823 = c__5568__auto__;
var G__24824 = cljs.core.count(c__5568__auto__);
var G__24825 = (0);
seq__24788 = G__24822;
chunk__24789 = G__24823;
count__24790 = G__24824;
i__24791 = G__24825;
continue;
} else {
var trace = cljs.core.first(seq__24788__$1);
re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","event","refrisk/event",1355100504),trace], null));


var G__24826 = cljs.core.next(seq__24788__$1);
var G__24827 = null;
var G__24828 = (0);
var G__24829 = (0);
seq__24788 = G__24826;
chunk__24789 = G__24827;
count__24790 = G__24828;
i__24791 = G__24829;
continue;
}
} else {
return null;
}
}
break;
}
});
if((typeof re_frisk_remote !== 'undefined') && (typeof re_frisk_remote.core !== 'undefined') && (typeof re_frisk_remote.core.event_msg_handler !== 'undefined')){
} else {
/**
 * Sente `event-msg`s handler
 */
re_frisk_remote.core.event_msg_handler = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__24792 = cljs.core.get_global_hierarchy;
return (fexpr__24792.cljs$core$IFn$_invoke$arity$0 ? fexpr__24792.cljs$core$IFn$_invoke$arity$0() : fexpr__24792.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("re-frisk-remote.core","event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
re_frisk_remote.core.event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__24793){
var map__24794 = p__24793;
var map__24794__$1 = cljs.core.__destructure_map(map__24794);
var msg = map__24794__$1;
var vec__24795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24794__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var map__24798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24795,(0),null);
var map__24798__$1 = cljs.core.__destructure_map(map__24798);
var was_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24798__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var map__24799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24795,(1),null);
var map__24799__$1 = cljs.core.__destructure_map(map__24799);
var now_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24799__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(was_open_QMARK_,now_open_QMARK_)){
return cljs.core.reset_BANG_(re_frisk_remote.core.send_state,null);
} else {
return null;
}
}));
re_frisk_remote.core.enabled = (function re_frisk_remote$core$enabled(){
if(cljs.core.truth_(cljs.core.deref(re_frisk_remote.core.send_state))){
re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","subs","refrisk/subs",-1488398437),new cljs.core.Keyword(null,"prev-subs","prev-subs",982800397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk_remote.core.send_state))], null));

return re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","app-db","refrisk/app-db",-194545484),new cljs.core.Keyword(null,"prev-app-db","prev-app-db",-402688638).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk_remote.core.send_state))], null));
} else {
var db = re_frisk_remote.core.get_db();
var subs = re_frisk.utils.get_subs();
cljs.core.reset_BANG_(re_frisk_remote.core.send_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prev-event-app-db","prev-event-app-db",555318997),db,new cljs.core.Keyword(null,"prev-app-db","prev-app-db",-402688638),db,new cljs.core.Keyword(null,"prev-subs","prev-subs",982800397),subs], null));

re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","subs","refrisk/subs",-1488398437),subs], null));

return re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","app-db","refrisk/app-db",-194545484),db], null));
}
});
re_frisk_remote.core.event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__24800){
var map__24801 = p__24800;
var map__24801__$1 = cljs.core.__destructure_map(map__24801);
var vec__24802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24801__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24802,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24802,(1),null);
var G__24805 = type;
var G__24805__$1 = (((G__24805 instanceof cljs.core.Keyword))?G__24805.fqn:null);
switch (G__24805__$1) {
case "refrisk/enable":
return re_frisk_remote.core.enabled();

break;
case "refrisk/disable":
return cljs.core.reset_BANG_(re_frisk_remote.core.send_state,null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24805__$1)].join('')));

}
}));
re_frisk_remote.core.event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (msg){
return null;
}));
re_frisk_remote.core.start_socket_and_router = (function re_frisk_remote$core$start_socket_and_router(host){
taoensso.timbre.merge_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns-blacklist","ns-blacklist",1957763142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["taoensso.sente","taoensso.sente.*"], null)], null));

var map__24806 = taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic("/chsk",null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"host","host",-1558485167),host,new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"re-frisk-remote","re-frisk-remote",-396545212)], null),new cljs.core.Keyword(null,"packer","packer",66077544),taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlerForForeign","handlerForForeign",-44914005),(function (){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((function (){
return "ForeignType";
}),(function (){
return "";
}));
})], null),cljs.core.PersistentArrayMap.EMPTY)], null)], 0));
var map__24806__$1 = cljs.core.__destructure_map(map__24806);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24806__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24806__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
cljs.core.reset_BANG_(re_frisk_remote.core.chsk_send,send_fn);

return taoensso.sente.start_client_chsk_router_BANG_(ch_recv,re_frisk_remote.core.event_msg_handler);
});
re_frisk_remote.core.enable_re_frisk_remote_BANG_ = (function re_frisk_remote$core$enable_re_frisk_remote_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24831 = arguments.length;
var i__5770__auto___24832 = (0);
while(true){
if((i__5770__auto___24832 < len__5769__auto___24831)){
args__5775__auto__.push((arguments[i__5770__auto___24832]));

var G__24833 = (i__5770__auto___24832 + (1));
i__5770__auto___24832 = G__24833;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_frisk_remote.core.enable_re_frisk_remote_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_frisk_remote.core.enable_re_frisk_remote_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__24808){
var vec__24809 = p__24808;
var map__24812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24809,(0),null);
var map__24812__$1 = cljs.core.__destructure_map(map__24812);
var opts = map__24812__$1;
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24812__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
if(cljs.core.truth_(cljs.core.deref(re_frisk_remote.core.initialized))){
return null;
} else {
cljs.core.reset_BANG_(re_frisk_remote.core.initialized,true);

cljs.core.reset_BANG_(re_frisk_remote.core.normalize_db_fn,new cljs.core.Keyword(null,"normalize-db-fn","normalize-db-fn",37787892).cljs$core$IFn$_invoke$arity$1(opts));

re_frisk_remote.core.start_socket_and_router((function (){var or__5045__auto__ = host;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "localhost:4567";
}
})());

if(re_frame.trace.is_trace_enabled_QMARK_()){
(reagent.impl.component.static_fns = re_frisk.trace.static_fns);

return re_frame.trace.register_trace_cb(new cljs.core.Keyword(null,"re-frisk-trace","re-frisk-trace",912949928),re_frisk_remote.core.trace_cb);
} else {
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1(re_frisk_remote.core.post_event_callback);
}
}
}));

(re_frisk_remote.core.enable_re_frisk_remote_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frisk_remote.core.enable_re_frisk_remote_BANG_.cljs$lang$applyTo = (function (seq24807){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24807));
}));

re_frisk_remote.core.enable = (function re_frisk_remote$core$enable(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24834 = arguments.length;
var i__5770__auto___24835 = (0);
while(true){
if((i__5770__auto___24835 < len__5769__auto___24834)){
args__5775__auto__.push((arguments[i__5770__auto___24835]));

var G__24836 = (i__5770__auto___24835 + (1));
i__5770__auto___24835 = G__24836;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_frisk_remote.core.enable.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_frisk_remote.core.enable.cljs$core$IFn$_invoke$arity$variadic = (function (p__24814){
var vec__24815 = p__24814;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24815,(0),null);
return re_frisk_remote.core.enable_re_frisk_remote_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0));
}));

(re_frisk_remote.core.enable.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frisk_remote.core.enable.cljs$lang$applyTo = (function (seq24813){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24813));
}));


//# sourceMappingURL=re_frisk_remote.core.js.map

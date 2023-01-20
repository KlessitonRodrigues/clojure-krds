goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__23514,p__23515){
var map__23516 = p__23514;
var map__23516__$1 = cljs.core.__destructure_map(map__23516);
var svc = map__23516__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23516__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23516__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23516__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__23517 = p__23515;
var map__23517__$1 = cljs.core.__destructure_map(map__23517);
var msg = map__23517__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23517__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23517__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23517__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23517__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__23519,p__23520){
var map__23521 = p__23519;
var map__23521__$1 = cljs.core.__destructure_map(map__23521);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23521__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__23522 = p__23520;
var map__23522__$1 = cljs.core.__destructure_map(map__23522);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23522__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__23541,p__23542){
var map__23543 = p__23541;
var map__23543__$1 = cljs.core.__destructure_map(map__23543);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23543__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23543__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__23544 = p__23542;
var map__23544__$1 = cljs.core.__destructure_map(map__23544);
var msg = map__23544__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23544__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__23548,tid){
var map__23550 = p__23548;
var map__23550__$1 = cljs.core.__destructure_map(map__23550);
var svc = map__23550__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23550__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__23560 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__23561 = null;
var count__23562 = (0);
var i__23563 = (0);
while(true){
if((i__23563 < count__23562)){
var vec__23575 = chunk__23561.cljs$core$IIndexed$_nth$arity$2(null,i__23563);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23575,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23575,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__23603 = seq__23560;
var G__23604 = chunk__23561;
var G__23605 = count__23562;
var G__23606 = (i__23563 + (1));
seq__23560 = G__23603;
chunk__23561 = G__23604;
count__23562 = G__23605;
i__23563 = G__23606;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23560);
if(temp__5804__auto__){
var seq__23560__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23560__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23560__$1);
var G__23607 = cljs.core.chunk_rest(seq__23560__$1);
var G__23608 = c__5568__auto__;
var G__23609 = cljs.core.count(c__5568__auto__);
var G__23610 = (0);
seq__23560 = G__23607;
chunk__23561 = G__23608;
count__23562 = G__23609;
i__23563 = G__23610;
continue;
} else {
var vec__23587 = cljs.core.first(seq__23560__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23587,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23587,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__23611 = cljs.core.next(seq__23560__$1);
var G__23612 = null;
var G__23613 = (0);
var G__23614 = (0);
seq__23560 = G__23611;
chunk__23561 = G__23612;
count__23562 = G__23613;
i__23563 = G__23614;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__23553_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__23553_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__23554_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__23554_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__23555_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__23555_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__23556_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__23556_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__23596){
var map__23597 = p__23596;
var map__23597__$1 = cljs.core.__destructure_map(map__23597);
var svc = map__23597__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23597__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23597__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map

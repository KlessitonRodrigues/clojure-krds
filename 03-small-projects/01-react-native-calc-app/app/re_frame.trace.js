goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = true;
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__12541){
var map__12542 = p__12541;
var map__12542__$1 = cljs.core.__destructure_map(map__12542);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12542__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12542__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12542__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12542__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__12543_12601 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__12544_12602 = null;
var count__12545_12603 = (0);
var i__12546_12604 = (0);
while(true){
if((i__12546_12604 < count__12545_12603)){
var vec__12559_12605 = chunk__12544_12602.cljs$core$IIndexed$_nth$arity$2(null,i__12546_12604);
var k_12606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12559_12605,(0),null);
var cb_12607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12559_12605,(1),null);
try{var G__12566_12608 = cljs.core.deref(re_frame.trace.traces);
(cb_12607.cljs$core$IFn$_invoke$arity$1 ? cb_12607.cljs$core$IFn$_invoke$arity$1(G__12566_12608) : cb_12607.call(null,G__12566_12608));
}catch (e12562){var e_12609 = e12562;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12606,"while storing",cljs.core.deref(re_frame.trace.traces),e_12609], 0));
}

var G__12610 = seq__12543_12601;
var G__12611 = chunk__12544_12602;
var G__12612 = count__12545_12603;
var G__12613 = (i__12546_12604 + (1));
seq__12543_12601 = G__12610;
chunk__12544_12602 = G__12611;
count__12545_12603 = G__12612;
i__12546_12604 = G__12613;
continue;
} else {
var temp__5804__auto___12614 = cljs.core.seq(seq__12543_12601);
if(temp__5804__auto___12614){
var seq__12543_12615__$1 = temp__5804__auto___12614;
if(cljs.core.chunked_seq_QMARK_(seq__12543_12615__$1)){
var c__5568__auto___12616 = cljs.core.chunk_first(seq__12543_12615__$1);
var G__12617 = cljs.core.chunk_rest(seq__12543_12615__$1);
var G__12618 = c__5568__auto___12616;
var G__12619 = cljs.core.count(c__5568__auto___12616);
var G__12620 = (0);
seq__12543_12601 = G__12617;
chunk__12544_12602 = G__12618;
count__12545_12603 = G__12619;
i__12546_12604 = G__12620;
continue;
} else {
var vec__12571_12621 = cljs.core.first(seq__12543_12615__$1);
var k_12622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12571_12621,(0),null);
var cb_12623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12571_12621,(1),null);
try{var G__12578_12624 = cljs.core.deref(re_frame.trace.traces);
(cb_12623.cljs$core$IFn$_invoke$arity$1 ? cb_12623.cljs$core$IFn$_invoke$arity$1(G__12578_12624) : cb_12623.call(null,G__12578_12624));
}catch (e12576){var e_12625 = e12576;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12622,"while storing",cljs.core.deref(re_frame.trace.traces),e_12625], 0));
}

var G__12626 = cljs.core.next(seq__12543_12615__$1);
var G__12627 = null;
var G__12628 = (0);
var G__12629 = (0);
seq__12543_12601 = G__12626;
chunk__12544_12602 = G__12627;
count__12545_12603 = G__12628;
i__12546_12604 = G__12629;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map

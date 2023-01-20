goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__17455 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__17456 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__17456);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___17679 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___17679)){
var new_db_17680 = temp__5804__auto___17679;
var fexpr__17460_17681 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__17460_17681.cljs$core$IFn$_invoke$arity$1 ? fexpr__17460_17681.cljs$core$IFn$_invoke$arity$1(new_db_17680) : fexpr__17460_17681.call(null,new_db_17680));
} else {
}

var seq__17461 = cljs.core.seq(effects_without_db);
var chunk__17462 = null;
var count__17463 = (0);
var i__17464 = (0);
while(true){
if((i__17464 < count__17463)){
var vec__17505 = chunk__17462.cljs$core$IIndexed$_nth$arity$2(null,i__17464);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17505,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17505,(1),null);
var temp__5802__auto___17682 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17682)){
var effect_fn_17684 = temp__5802__auto___17682;
(effect_fn_17684.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17684.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17684.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17687 = seq__17461;
var G__17688 = chunk__17462;
var G__17689 = count__17463;
var G__17690 = (i__17464 + (1));
seq__17461 = G__17687;
chunk__17462 = G__17688;
count__17463 = G__17689;
i__17464 = G__17690;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17461);
if(temp__5804__auto__){
var seq__17461__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17461__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17461__$1);
var G__17692 = cljs.core.chunk_rest(seq__17461__$1);
var G__17693 = c__5568__auto__;
var G__17694 = cljs.core.count(c__5568__auto__);
var G__17695 = (0);
seq__17461 = G__17692;
chunk__17462 = G__17693;
count__17463 = G__17694;
i__17464 = G__17695;
continue;
} else {
var vec__17509 = cljs.core.first(seq__17461__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17509,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17509,(1),null);
var temp__5802__auto___17696 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17696)){
var effect_fn_17697 = temp__5802__auto___17696;
(effect_fn_17697.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17697.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17697.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17698 = cljs.core.next(seq__17461__$1);
var G__17699 = null;
var G__17700 = (0);
var G__17701 = (0);
seq__17461 = G__17698;
chunk__17462 = G__17699;
count__17463 = G__17700;
i__17464 = G__17701;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12503__auto___17702 = re_frame.interop.now();
var duration__12504__auto___17703 = (end__12503__auto___17702 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12504__auto___17703,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12503__auto___17702);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__17455);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___17705 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___17705)){
var new_db_17706 = temp__5804__auto___17705;
var fexpr__17517_17707 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__17517_17707.cljs$core$IFn$_invoke$arity$1 ? fexpr__17517_17707.cljs$core$IFn$_invoke$arity$1(new_db_17706) : fexpr__17517_17707.call(null,new_db_17706));
} else {
}

var seq__17518 = cljs.core.seq(effects_without_db);
var chunk__17519 = null;
var count__17520 = (0);
var i__17521 = (0);
while(true){
if((i__17521 < count__17520)){
var vec__17547 = chunk__17519.cljs$core$IIndexed$_nth$arity$2(null,i__17521);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17547,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17547,(1),null);
var temp__5802__auto___17715 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17715)){
var effect_fn_17716 = temp__5802__auto___17715;
(effect_fn_17716.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17716.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17716.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17722 = seq__17518;
var G__17723 = chunk__17519;
var G__17724 = count__17520;
var G__17725 = (i__17521 + (1));
seq__17518 = G__17722;
chunk__17519 = G__17723;
count__17520 = G__17724;
i__17521 = G__17725;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17518);
if(temp__5804__auto__){
var seq__17518__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17518__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17518__$1);
var G__17733 = cljs.core.chunk_rest(seq__17518__$1);
var G__17734 = c__5568__auto__;
var G__17735 = cljs.core.count(c__5568__auto__);
var G__17736 = (0);
seq__17518 = G__17733;
chunk__17519 = G__17734;
count__17520 = G__17735;
i__17521 = G__17736;
continue;
} else {
var vec__17553 = cljs.core.first(seq__17518__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17553,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17553,(1),null);
var temp__5802__auto___17742 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17742)){
var effect_fn_17743 = temp__5802__auto___17742;
(effect_fn_17743.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17743.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17743.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17744 = cljs.core.next(seq__17518__$1);
var G__17745 = null;
var G__17746 = (0);
var G__17747 = (0);
seq__17518 = G__17744;
chunk__17519 = G__17745;
count__17520 = G__17746;
i__17521 = G__17747;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__17559){
var map__17560 = p__17559;
var map__17560__$1 = cljs.core.__destructure_map(map__17560);
var effect = map__17560__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17560__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17560__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__17568 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__17569 = null;
var count__17570 = (0);
var i__17571 = (0);
while(true){
if((i__17571 < count__17570)){
var effect = chunk__17569.cljs$core$IIndexed$_nth$arity$2(null,i__17571);
re_frame.fx.dispatch_later(effect);


var G__17748 = seq__17568;
var G__17749 = chunk__17569;
var G__17750 = count__17570;
var G__17751 = (i__17571 + (1));
seq__17568 = G__17748;
chunk__17569 = G__17749;
count__17570 = G__17750;
i__17571 = G__17751;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17568);
if(temp__5804__auto__){
var seq__17568__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17568__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17568__$1);
var G__17753 = cljs.core.chunk_rest(seq__17568__$1);
var G__17754 = c__5568__auto__;
var G__17755 = cljs.core.count(c__5568__auto__);
var G__17756 = (0);
seq__17568 = G__17753;
chunk__17569 = G__17754;
count__17570 = G__17755;
i__17571 = G__17756;
continue;
} else {
var effect = cljs.core.first(seq__17568__$1);
re_frame.fx.dispatch_later(effect);


var G__17757 = cljs.core.next(seq__17568__$1);
var G__17758 = null;
var G__17759 = (0);
var G__17760 = (0);
seq__17568 = G__17757;
chunk__17569 = G__17758;
count__17570 = G__17759;
i__17571 = G__17760;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__17600 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__17601 = null;
var count__17602 = (0);
var i__17603 = (0);
while(true){
if((i__17603 < count__17602)){
var vec__17626 = chunk__17601.cljs$core$IIndexed$_nth$arity$2(null,i__17603);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17626,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17626,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___17765 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17765)){
var effect_fn_17768 = temp__5802__auto___17765;
(effect_fn_17768.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17768.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17768.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__17769 = seq__17600;
var G__17770 = chunk__17601;
var G__17771 = count__17602;
var G__17772 = (i__17603 + (1));
seq__17600 = G__17769;
chunk__17601 = G__17770;
count__17602 = G__17771;
i__17603 = G__17772;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17600);
if(temp__5804__auto__){
var seq__17600__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17600__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17600__$1);
var G__17777 = cljs.core.chunk_rest(seq__17600__$1);
var G__17778 = c__5568__auto__;
var G__17779 = cljs.core.count(c__5568__auto__);
var G__17780 = (0);
seq__17600 = G__17777;
chunk__17601 = G__17778;
count__17602 = G__17779;
i__17603 = G__17780;
continue;
} else {
var vec__17637 = cljs.core.first(seq__17600__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17637,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17637,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___17785 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17785)){
var effect_fn_17788 = temp__5802__auto___17785;
(effect_fn_17788.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17788.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17788.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__17791 = cljs.core.next(seq__17600__$1);
var G__17792 = null;
var G__17793 = (0);
var G__17794 = (0);
seq__17600 = G__17791;
chunk__17601 = G__17792;
count__17602 = G__17793;
i__17603 = G__17794;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__17649 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__17650 = null;
var count__17651 = (0);
var i__17652 = (0);
while(true){
if((i__17652 < count__17651)){
var event = chunk__17650.cljs$core$IIndexed$_nth$arity$2(null,i__17652);
re_frame.router.dispatch(event);


var G__17797 = seq__17649;
var G__17798 = chunk__17650;
var G__17799 = count__17651;
var G__17800 = (i__17652 + (1));
seq__17649 = G__17797;
chunk__17650 = G__17798;
count__17651 = G__17799;
i__17652 = G__17800;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17649);
if(temp__5804__auto__){
var seq__17649__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17649__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17649__$1);
var G__17802 = cljs.core.chunk_rest(seq__17649__$1);
var G__17803 = c__5568__auto__;
var G__17804 = cljs.core.count(c__5568__auto__);
var G__17805 = (0);
seq__17649 = G__17802;
chunk__17650 = G__17803;
count__17651 = G__17804;
i__17652 = G__17805;
continue;
} else {
var event = cljs.core.first(seq__17649__$1);
re_frame.router.dispatch(event);


var G__17806 = cljs.core.next(seq__17649__$1);
var G__17807 = null;
var G__17808 = (0);
var G__17809 = (0);
seq__17649 = G__17806;
chunk__17650 = G__17807;
count__17651 = G__17808;
i__17652 = G__17809;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__17668 = cljs.core.seq(value);
var chunk__17669 = null;
var count__17670 = (0);
var i__17671 = (0);
while(true){
if((i__17671 < count__17670)){
var event = chunk__17669.cljs$core$IIndexed$_nth$arity$2(null,i__17671);
clear_event(event);


var G__17814 = seq__17668;
var G__17815 = chunk__17669;
var G__17816 = count__17670;
var G__17817 = (i__17671 + (1));
seq__17668 = G__17814;
chunk__17669 = G__17815;
count__17670 = G__17816;
i__17671 = G__17817;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17668);
if(temp__5804__auto__){
var seq__17668__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17668__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17668__$1);
var G__17818 = cljs.core.chunk_rest(seq__17668__$1);
var G__17819 = c__5568__auto__;
var G__17820 = cljs.core.count(c__5568__auto__);
var G__17821 = (0);
seq__17668 = G__17818;
chunk__17669 = G__17819;
count__17670 = G__17820;
i__17671 = G__17821;
continue;
} else {
var event = cljs.core.first(seq__17668__$1);
clear_event(event);


var G__17822 = cljs.core.next(seq__17668__$1);
var G__17823 = null;
var G__17824 = (0);
var G__17825 = (0);
seq__17668 = G__17822;
chunk__17669 = G__17823;
count__17670 = G__17824;
i__17671 = G__17825;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map

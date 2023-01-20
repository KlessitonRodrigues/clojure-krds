goog.provide('re_frisk_remote.delta.delta');
re_frisk_remote.delta.delta.nullify = (function re_frisk_remote$delta$delta$nullify(a){
if(cljs.core.empty_QMARK_(a)){
return null;
} else {
return a;
}
});
re_frisk_remote.delta.delta.delta_set = (function re_frisk_remote$delta$delta$delta_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),re_frisk_remote.delta.delta.nullify(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),re_frisk_remote.delta.delta.nullify(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});
re_frisk_remote.delta.delta.ff = (function re_frisk_remote$delta$delta$ff(a,b,k){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(k) : a.call(null,k)),(b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(k) : b.call(null,k)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__13615 = (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(k) : a.call(null,k));
var G__13616 = (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(k) : b.call(null,k));
return (re_frisk_remote.delta.delta.delta.cljs$core$IFn$_invoke$arity$2 ? re_frisk_remote.delta.delta.delta.cljs$core$IFn$_invoke$arity$2(G__13615,G__13616) : re_frisk_remote.delta.delta.delta.call(null,G__13615,G__13616));
})()], null);
} else {
return null;
}
});
re_frisk_remote.delta.delta.delta_map_vals = (function re_frisk_remote$delta$delta$delta_map_vals(a,b,ks){
return re_frisk_remote.delta.delta.nullify(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13639_SHARP_){
return re_frisk_remote.delta.delta.ff(a,b,p1__13639_SHARP_);
}),ks))));
});
re_frisk_remote.delta.delta.delta_map = (function re_frisk_remote$delta$delta$delta_map(a,b){
var akeys = cljs.core.set(cljs.core.keys(a));
var bkeys = cljs.core.set(cljs.core.keys(b));
var common = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(akeys,bkeys);
var add = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(bkeys,akeys);
var remove = re_frisk_remote.delta.delta.nullify(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(akeys,bkeys));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),re_frisk_remote.delta.delta.nullify(cljs.core.select_keys(b,add)),remove,re_frisk_remote.delta.delta.delta_map_vals(a,b,common)], null);
});
re_frisk_remote.delta.delta.delta_seq_vals = (function re_frisk_remote$delta$delta$delta_seq_vals(n,a,b){
var items = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),a,b);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13675){
var vec__13679 = p__13675;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13679,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13679,(1),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13679,(2),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a__$1,b__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(re_frisk_remote.delta.delta.delta.cljs$core$IFn$_invoke$arity$2 ? re_frisk_remote.delta.delta.delta.cljs$core$IFn$_invoke$arity$2(a__$1,b__$1) : re_frisk_remote.delta.delta.delta.call(null,a__$1,b__$1))], null);
} else {
return null;
}
}),items)));
});
re_frisk_remote.delta.delta.delta_vec = (function re_frisk_remote$delta$delta$delta_vec(a,b){
var ca = cljs.core.count(a);
var cb = cljs.core.count(b);
var mc = (function (){var x__5133__auto__ = ca;
var y__5134__auto__ = cb;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var tail = (((cb <= ca))?(ca - cb):cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(b,ca));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vec","vec",-657847931),tail,re_frisk_remote.delta.delta.nullify(re_frisk_remote.delta.delta.delta_seq_vals(mc,a,b))], null);
});
re_frisk_remote.delta.delta.delta = (function re_frisk_remote$delta$delta$delta(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return null;
} else {
if(((cljs.core.map_QMARK_(a)) && (cljs.core.map_QMARK_(b)))){
return re_frisk_remote.delta.delta.delta_map(a,b);
} else {
if(((cljs.core.set_QMARK_(a)) && (cljs.core.set_QMARK_(b)))){
return re_frisk_remote.delta.delta.delta_set(a,b);
} else {
if(((cljs.core.list_QMARK_(a)) && (cljs.core.list_QMARK_(b)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace","replace",-786587770),b], null);
} else {
if(((cljs.core.vector_QMARK_(a)) && (cljs.core.vector_QMARK_(b)))){
return re_frisk_remote.delta.delta.delta_vec(a,b);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replace","replace",-786587770),b], null);

}
}
}
}
}
});
re_frisk_remote.delta.delta.apply_set = (function re_frisk_remote$delta$delta$apply_set(a,p__13719){
var vec__13720 = p__13719;
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13720,(0),null);
var remove = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13720,(1),null);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.union.cljs$core$IFn$_invoke$arity$2(a,add),remove);
});
re_frisk_remote.delta.delta.apply_vec_changes = (function re_frisk_remote$delta$delta$apply_vec_changes(a,changes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a__$1,p__13733){
var vec__13734 = p__13733;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13734,(0),null);
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13734,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(a__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),(function (p1__13732_SHARP_){
return (re_frisk_remote.delta.delta.apply.cljs$core$IFn$_invoke$arity$2 ? re_frisk_remote.delta.delta.apply.cljs$core$IFn$_invoke$arity$2(p1__13732_SHARP_,ch) : re_frisk_remote.delta.delta.apply.call(null,p1__13732_SHARP_,ch));
}));
}),a,changes);
});
re_frisk_remote.delta.delta.apply_vec = (function re_frisk_remote$delta$delta$apply_vec(a,p__13737){
var vec__13745 = p__13737;
var tail = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13745,(0),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13745,(1),null);
var h = re_frisk_remote.delta.delta.apply_vec_changes(a,changes);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),tail)){
return h;
} else {
if(cljs.core.integer_QMARK_(tail)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(h,(0),(cljs.core.count(h) - tail));
} else {
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(h,tail));

}
}
});
re_frisk_remote.delta.delta.apply_map_changes = (function re_frisk_remote$delta$delta$apply_map_changes(a,changes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a__$1,p__13771){
var vec__13772 = p__13771;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13772,(0),null);
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13772,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(a__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),(function (p1__13770_SHARP_){
return (re_frisk_remote.delta.delta.apply.cljs$core$IFn$_invoke$arity$2 ? re_frisk_remote.delta.delta.apply.cljs$core$IFn$_invoke$arity$2(p1__13770_SHARP_,ch) : re_frisk_remote.delta.delta.apply.call(null,p1__13770_SHARP_,ch));
}));
}),a,changes);
});
re_frisk_remote.delta.delta.apply_map = (function re_frisk_remote$delta$delta$apply_map(a,p__13791){
var vec__13794 = p__13791;
var keys_add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13794,(0),null);
var keys_remove = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13794,(1),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13794,(2),null);
var A = a;
var A__$1 = re_frisk_remote.delta.delta.apply_map_changes(A,changes);
var A__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_add,A__$1], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,A__$2,keys_remove);
});
re_frisk_remote.delta.delta.apply = (function re_frisk_remote$delta$delta$apply(a,patch){
var G__13800 = cljs.core.first(patch);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__13800)){
return a;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"replace","replace",-786587770),G__13800)){
return cljs.core.second(patch);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set","set",304602554),G__13800)){
return re_frisk_remote.delta.delta.apply_set(a,cljs.core.rest(patch));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vec","vec",-657847931),G__13800)){
return re_frisk_remote.delta.delta.apply_vec(a,cljs.core.rest(patch));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),G__13800)){
return re_frisk_remote.delta.delta.apply_map(a,cljs.core.rest(patch));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13800)].join('')));

}
}
}
}
}
});

//# sourceMappingURL=re_frisk_remote.delta.delta.js.map

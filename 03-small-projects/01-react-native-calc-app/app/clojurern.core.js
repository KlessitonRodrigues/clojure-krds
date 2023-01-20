goog.provide('clojurern.core');
clojurern.core.root_comp = (function clojurern$core$root_comp(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.core.safe_area_view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.core.view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.core.text,"Hello CLojure! a from CLJS"], null)], null)], null);
});
clojurern.core.init = (function clojurern$core$init(){
return steroid.rn.core.app_registry.registerComponent("ClojureRNProject",(function (){
return reagent.core.reactify_component((function (props24717){
if(cljs.core.truth_(steroid.rn.core.debug_QMARK_)){
cljs.core.deref(steroid.rn.core.cnt);
} else {
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurern.core.root_comp,props24717], null),(cljs.core.truth_(steroid.rn.core.debug_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.core.reload_view], null):null)], null);
}));
}));
});

//# sourceMappingURL=clojurern.core.js.map

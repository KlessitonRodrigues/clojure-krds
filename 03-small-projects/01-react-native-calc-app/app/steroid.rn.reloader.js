goog.provide('steroid.rn.reloader');
steroid.rn.reloader.debug_QMARK_ = goog.DEBUG;
if((typeof steroid !== 'undefined') && (typeof steroid.rn !== 'undefined') && (typeof steroid.rn.reloader !== 'undefined') && (typeof steroid.rn.reloader.warning_QMARK_ !== 'undefined')){
} else {
steroid.rn.reloader.warning_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof steroid !== 'undefined') && (typeof steroid.rn !== 'undefined') && (typeof steroid.rn.reloader !== 'undefined') && (typeof steroid.rn.reloader.visible !== 'undefined')){
} else {
steroid.rn.reloader.visible = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof steroid !== 'undefined') && (typeof steroid.rn !== 'undefined') && (typeof steroid.rn.reloader !== 'undefined') && (typeof steroid.rn.reloader.timeout !== 'undefined')){
} else {
steroid.rn.reloader.timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof steroid !== 'undefined') && (typeof steroid.rn !== 'undefined') && (typeof steroid.rn.reloader !== 'undefined') && (typeof steroid.rn.reloader.label !== 'undefined')){
} else {
steroid.rn.reloader.label = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
steroid.rn.reloader.build_competed = (function steroid$rn$reloader$build_competed(){
cljs.core.reset_BANG_(steroid.rn.reloader.label,"reloading");

cljs.core.reset_BANG_(steroid.rn.reloader.warning_QMARK_,false);

return cljs.core.reset_BANG_(steroid.rn.reloader.visible,true);
});
steroid.rn.reloader.build_failed = (function steroid$rn$reloader$build_failed(warnings){
cljs.core.reset_BANG_(steroid.rn.reloader.warning_QMARK_,true);

cljs.core.reset_BANG_(steroid.rn.reloader.label,["building failed",((cljs.core.seq(warnings))?["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(warnings))," warnings"].join(''):null)].join(''));

return cljs.core.reset_BANG_(steroid.rn.reloader.visible,true);
});
steroid.rn.reloader.build_start = (function steroid$rn$reloader$build_start(){
cljs.core.reset_BANG_(steroid.rn.reloader.warning_QMARK_,false);

cljs.core.reset_BANG_(steroid.rn.reloader.label,"building");

return cljs.core.reset_BANG_(steroid.rn.reloader.visible,true);
});
steroid.rn.reloader.reload_view = (function steroid$rn$reloader$reload_view(){
return (function (){
if(cljs.core.truth_(cljs.core.deref(steroid.rn.reloader.timeout))){
clearTimeout(cljs.core.deref(steroid.rn.reloader.timeout));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(steroid.rn.reloader.label),"reloading")){
cljs.core.reset_BANG_(steroid.rn.reloader.timeout,setTimeout((function (){
cljs.core.reset_BANG_(steroid.rn.reloader.visible,false);

return cljs.core.reset_BANG_(steroid.rn.reloader.label,"");
}),(1000)));
} else {
}

if(cljs.core.truth_(cljs.core.deref(steroid.rn.reloader.visible))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.components.basic.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.components.basic.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),(64),new cljs.core.Keyword(null,"height","height",1025178622),(64),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(67,128,219,1)",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(32),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(2)], null),(cljs.core.truth_(cljs.core.deref(steroid.rn.reloader.warning_QMARK_))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.8,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(255,0,0,0.5))"], null):null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.components.basic.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(30)], null)], null),"S"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.components.basic.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(10),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(cljs.core.deref(steroid.rn.reloader.warning_QMARK_))?"rgba(255,0,0,0.5))":"rgba(67,128,219,1)")], null)], null),cljs.core.deref(steroid.rn.reloader.label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.components.ui.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"close",new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return cljs.core.reset_BANG_(steroid.rn.reloader.visible,false);
})], null)], null)], null);
} else {
return null;
}
});
});
if((typeof steroid !== 'undefined') && (typeof steroid.rn !== 'undefined') && (typeof steroid.rn.reloader !== 'undefined') && (typeof steroid.rn.reloader.state !== 'undefined')){
} else {
steroid.rn.reloader.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
steroid.rn.reloader.persist_state = (function steroid$rn$reloader$persist_state(state_obj){
return (new Promise((function (resolve,_){
cljs.core.reset_BANG_(steroid.rn.reloader.state,state_obj);

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(true) : resolve.call(null,true));
})));
});
steroid.rn.reloader.on_state_change = (function steroid$rn$reloader$on_state_change(props){
var handler = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"onStateChange","onStateChange",853276564).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"on-state-change","on-state-change",619811967).cljs$core$IFn$_invoke$arity$1(props);
}
})();
return (function (state){
if(cljs.core.truth_(steroid.rn.reloader.debug_QMARK_)){
if(cljs.core.truth_(handler)){
(handler.cljs$core$IFn$_invoke$arity$0 ? handler.cljs$core$IFn$_invoke$arity$0() : handler.call(null));
} else {
}

return steroid.rn.reloader.persist_state(state);
} else {
return null;
}
});
});
steroid.rn.reloader.build_notify = (function steroid$rn$reloader$build_notify(p__22520){
var map__22521 = p__22520;
var map__22521__$1 = cljs.core.__destructure_map(map__22521);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22521__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22521__$1,new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"build-start","build-start",-959649480),type)){
return steroid.rn.reloader.build_start();
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466),type)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"build-complete","build-complete",-501868472),type)) && (cljs.core.seq(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(info))))))){
return steroid.rn.reloader.build_failed(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(info));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"build-complete","build-complete",-501868472),type)){
return steroid.rn.reloader.build_competed();
} else {
return null;
}
}
}
});

//# sourceMappingURL=steroid.rn.reloader.js.map

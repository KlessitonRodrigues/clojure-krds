goog.provide('steroid.rn.core');
steroid.rn.core.debug_QMARK_ = goog.DEBUG;
steroid.rn.core.app_registry = shadow.js.shim.module$react_native.AppRegistry;
steroid.rn.core.view = steroid.rn.components.basic.view;
steroid.rn.core.text = steroid.rn.components.basic.text;
steroid.rn.core.image = steroid.rn.components.basic.image;
steroid.rn.core.text_input = steroid.rn.components.basic.text_input;
steroid.rn.core.scroll_view = steroid.rn.components.basic.scroll_view;
steroid.rn.core.touchable_highlight = steroid.rn.components.touchable.touchable_highlight;
steroid.rn.core.touchable_native_feedback = steroid.rn.components.touchable.touchable_native_feedback;
steroid.rn.core.touchable_opacity = steroid.rn.components.touchable.touchable_opacity;
steroid.rn.core.touchable_without_feedback = steroid.rn.components.touchable.touchable_without_feedback;
steroid.rn.core.reload_view = steroid.rn.reloader.reload_view;
steroid.rn.core.react_comp = (function steroid$rn$core$react_comp(value){
return reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$1(value);
});
steroid.rn.core.register_comp = (function steroid$rn$core$register_comp(name,app_root){
return steroid.rn.core.app_registry.registerComponent(name,(function (){
return steroid.rn.core.react_comp(app_root);
}));
});
if((typeof steroid !== 'undefined') && (typeof steroid.rn !== 'undefined') && (typeof steroid.rn.core !== 'undefined') && (typeof steroid.rn.core.cnt !== 'undefined')){
} else {
steroid.rn.core.cnt = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
steroid.rn.core.reload = (function steroid$rn$core$reload(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(steroid.rn.core.cnt,cljs.core.inc);
});
steroid.rn.core.build_notify = steroid.rn.reloader.build_notify;

//# sourceMappingURL=steroid.rn.core.js.map

goog.provide('clojurecalcapp.core');
clojurecalcapp.core.index = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
clojurecalcapp.core.num1 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
clojurecalcapp.core.num2 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
clojurecalcapp.core.operator = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("*");
clojurecalcapp.core.calc = (function clojurecalcapp$core$calc(num1,num2,op){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,"+")){
return (num1 + num2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,"-")){
return (num1 - num2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,"/")){
return (num1 / num2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,"*")){
return (num1 * num2);
} else {
return (0);

}
}
}
}
});
clojurecalcapp.core.setOperation = (function clojurecalcapp$core$setOperation(value){
if(((((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,"+")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,"-")))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,"/")))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,"*")))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clojurecalcapp.core.operator,value);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(clojurecalcapp.core.index),(0))){
return cljs.core.reset_BANG_(clojurecalcapp.core.num1,value);
} else {
return cljs.core.reset_BANG_(clojurecalcapp.core.num2,value);

}
}
});
clojurecalcapp.core.Display = (function clojurecalcapp$core$Display(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.core.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"height","height",1025178622),"40%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#D7DEEA",new cljs.core.Keyword(null,"color","color",1011675173),"#444",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(70),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right",new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null)], null),value], null)], null);
});
clojurecalcapp.core.MiniDisplay = (function clojurecalcapp$core$MiniDisplay(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.core.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#D7DEEA",new cljs.core.Keyword(null,"color","color",1011675173),"#444",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(35),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right",new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(20)], null)], null),value], null)], null);
});
clojurecalcapp.core.ButtonBlue = (function clojurecalcapp$core$ButtonBlue(value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.core.view,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.core.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["#fff","center",(32),(10),"#388BFF",(95),(75),(16),(10),(10),(90)]),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return (value.cljs$core$IFn$_invoke$arity$0 ? value.cljs$core$IFn$_invoke$arity$0() : value.call(null));
})], null),value], null)], null);
});
clojurecalcapp.core.Button = (function clojurecalcapp$core$Button(value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.core.touchable_opacity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return clojurecalcapp.core.setOperation(value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"height","height",1025178622),(90),new cljs.core.Keyword(null,"width","width",-384071477),(95),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"color","color",1011675173),"#FFFFFFBB",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(12),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(32),new cljs.core.Keyword(null,"padding","padding",1660304693),(8)], null)], null),value], null)], null);
});
clojurecalcapp.core.Keyboard = (function clojurecalcapp$core$Keyboard(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.core.view,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.core.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#1C2541EE",new cljs.core.Keyword(null,"color","color",1011675173),"#fff",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(30),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(16),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(16)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurecalcapp.core.Button,"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurecalcapp.core.Button,"2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurecalcapp.core.Button,"3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurecalcapp.core.Button,"+"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurecalcapp.core.Button,"4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurecalcapp.core.Button,"5"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurecalcapp.core.Button,"6"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurecalcapp.core.Button,"-"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurecalcapp.core.Button,"7"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurecalcapp.core.Button,"8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurecalcapp.core.Button,"9"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurecalcapp.core.Button,"/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurecalcapp.core.Button,"c"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurecalcapp.core.Button,"0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurecalcapp.core.Button,"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurecalcapp.core.ButtonBlue,"="], null)], null)], null);
});
clojurecalcapp.core.ScreenContainer = (function clojurecalcapp$core$ScreenContainer(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#D7DEEA"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurecalcapp.core.Display,clojure.string.join.cljs$core$IFn$_invoke$arity$2("",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(clojurecalcapp.core.num1),cljs.core.deref(clojurecalcapp.core.operator),cljs.core.deref(clojurecalcapp.core.num2)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurecalcapp.core.MiniDisplay,clojurecalcapp.core.calc(cljs.core.deref(clojurecalcapp.core.num1),cljs.core.deref(clojurecalcapp.core.num2),cljs.core.deref(clojurecalcapp.core.operator))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurecalcapp.core.Keyboard], null)], null);
});
clojurecalcapp.core.root_comp = (function clojurecalcapp$core$root_comp(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.core.view,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurecalcapp.core.ScreenContainer], null)], null);
});
clojurecalcapp.core.init = (function clojurecalcapp$core$init(){
return steroid.rn.core.app_registry.registerComponent("helloWorld",(function (){
return reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$1((function (props24839){
if(cljs.core.truth_(steroid.rn.core.debug_QMARK_)){
cljs.core.deref(steroid.rn.core.cnt);
} else {
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.core.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojurecalcapp.core.root_comp,props24839], null),(cljs.core.truth_(steroid.rn.core.debug_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [steroid.rn.core.reload_view], null):null)], null);
}));
}));
});

//# sourceMappingURL=clojurecalcapp.core.js.map

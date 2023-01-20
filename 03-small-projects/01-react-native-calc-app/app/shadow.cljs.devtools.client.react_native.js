goog.provide('shadow.cljs.devtools.client.react_native');
shadow.cljs.devtools.client.react_native.devtools_msg = (function shadow$cljs$devtools$client$react_native$devtools_msg(var_args){
var G__24962 = arguments.length;
switch (G__24962) {
case 1:
return shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(shadow.cljs.devtools.client.env.log){
return console.log("shadow-cljs",x);
} else {
return null;
}
}));

(shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(shadow.cljs.devtools.client.env.log){
return console.log("shadow-cljs",x,y);
} else {
return null;
}
}));

(shadow.cljs.devtools.client.react_native.devtools_msg.cljs$lang$maxFixedArity = 2);

shadow.cljs.devtools.client.react_native.script_eval = (function shadow$cljs$devtools$client$react_native$script_eval(code){
return goog.global.eval(code);
});
shadow.cljs.devtools.client.react_native.do_js_load = (function shadow$cljs$devtools$client$react_native$do_js_load(sources){
var seq__24968 = cljs.core.seq(sources);
var chunk__24969 = null;
var count__24970 = (0);
var i__24971 = (0);
while(true){
if((i__24971 < count__24970)){
var map__24980 = chunk__24969.cljs$core$IIndexed$_nth$arity$2(null,i__24971);
var map__24980__$1 = cljs.core.__destructure_map(map__24980);
var src = map__24980__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24980__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24980__$1,new cljs.core.Keyword(null,"js","js",1768080579));
shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$2("load JS",resource_name);

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.react_native.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__25031 = seq__24968;
var G__25032 = chunk__24969;
var G__25033 = count__24970;
var G__25034 = (i__24971 + (1));
seq__24968 = G__25031;
chunk__24969 = G__25032;
count__24970 = G__25033;
i__24971 = G__25034;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24968);
if(temp__5804__auto__){
var seq__24968__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24968__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24968__$1);
var G__25035 = cljs.core.chunk_rest(seq__24968__$1);
var G__25036 = c__5568__auto__;
var G__25037 = cljs.core.count(c__5568__auto__);
var G__25038 = (0);
seq__24968 = G__25035;
chunk__24969 = G__25036;
count__24970 = G__25037;
i__24971 = G__25038;
continue;
} else {
var map__24982 = cljs.core.first(seq__24968__$1);
var map__24982__$1 = cljs.core.__destructure_map(map__24982);
var src = map__24982__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24982__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24982__$1,new cljs.core.Keyword(null,"js","js",1768080579));
shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$2("load JS",resource_name);

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.react_native.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__25039 = cljs.core.next(seq__24968__$1);
var G__25040 = null;
var G__25041 = (0);
var G__25042 = (0);
seq__24968 = G__25039;
chunk__24969 = G__25040;
count__24970 = G__25041;
i__24971 = G__25042;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.react_native.do_js_reload = (function shadow$cljs$devtools$client$react_native$do_js_reload(msg,sources,complete_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$1(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$1(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$1(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.react_native.do_js_load(sources);
}),complete_fn);
});
shadow.cljs.devtools.client.react_native.noop = (function shadow$cljs$devtools$client$react_native$noop(var_args){
var args__5775__auto__ = [];
var len__5769__auto___25043 = arguments.length;
var i__5770__auto___25044 = (0);
while(true){
if((i__5770__auto___25044 < len__5769__auto___25043)){
args__5775__auto__.push((arguments[i__5770__auto___25044]));

var G__25045 = (i__5770__auto___25044 + (1));
i__5770__auto___25044 = G__25045;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.cljs.devtools.client.react_native.noop.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.cljs.devtools.client.react_native.noop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return null;
}));

(shadow.cljs.devtools.client.react_native.noop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.cljs.devtools.client.react_native.noop.cljs$lang$applyTo = (function (seq24984){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24984));
}));

shadow.cljs.devtools.client.react_native.handle_build_complete = (function shadow$cljs$devtools$client$react_native$handle_build_complete(runtime,p__24986){
var map__24987 = p__24986;
var map__24987__$1 = cljs.core.__destructure_map(map__24987);
var msg = map__24987__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24987__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24987__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__24991 = info;
var map__24991__$1 = cljs.core.__destructure_map(map__24991);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24991__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.seq(sources_to_get)){
return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__24985_SHARP_){
return shadow.cljs.devtools.client.react_native.do_js_reload(msg,p1__24985_SHARP_,shadow.cljs.devtools.client.react_native.noop);
}));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.react_native.global_eval = (function shadow$cljs$devtools$client$react_native$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.react_native.attempt_to_find_host = (function shadow$cljs$devtools$client$react_native$attempt_to_find_host(start_fn,p__24995){
var vec__24999 = p__24995;
var seq__25000 = cljs.core.seq(vec__24999);
var first__25001 = cljs.core.first(seq__25000);
var seq__25000__$1 = cljs.core.next(seq__25000);
var host = first__25001;
var more_hosts = seq__25000__$1;
if(cljs.core.not(host)){
return console.error(["Could not find shadow-cljs host address, tried ",shadow.cljs.devtools.client.env.server_hosts].join(''));
} else {
var controller = (new AbortController());
var timeout_id = setTimeout((function (){
return controller.abort();
}),shadow.cljs.devtools.client.env.connect_timeout);
var success = (function (){
clearTimeout(timeout_id);

(shadow.cljs.devtools.client.env.selected_host = host);

return (start_fn.cljs$core$IFn$_invoke$arity$0 ? start_fn.cljs$core$IFn$_invoke$arity$0() : start_fn.call(null));
});
var fail = (function (){
clearTimeout(timeout_id);

return (shadow.cljs.devtools.client.react_native.attempt_to_find_host.cljs$core$IFn$_invoke$arity$2 ? shadow.cljs.devtools.client.react_native.attempt_to_find_host.cljs$core$IFn$_invoke$arity$2(start_fn,more_hosts) : shadow.cljs.devtools.client.react_native.attempt_to_find_host.call(null,start_fn,more_hosts));
});
return fetch([shadow.cljs.devtools.client.env.get_server_protocol(),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/api/project-info"].join(''),({"signal": controller.signal})).then((function (resp){
if(cljs.core.truth_(resp.ok)){
return success();
} else {
return fail();
}
})).catch(fail);
}
});
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.react_native.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__25004){
var map__25005 = p__25004;
var map__25005__$1 = cljs.core.__destructure_map(map__25005);
var _ = map__25005__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25005__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.react_native.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__25009,done,error){
var map__25010 = p__25009;
var map__25010__$1 = cljs.core.__destructure_map(map__25010);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25010__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.react_native.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__25012,done,error){
var map__25013 = p__25012;
var map__25013__$1 = cljs.core.__destructure_map(map__25013);
var msg = map__25013__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25013__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25013__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25013__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__25014){
var map__25015 = p__25014;
var map__25015__$1 = cljs.core.__destructure_map(map__25015);
var src = map__25015__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25015__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__25017 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__25017) : done.call(null,G__25017));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__25018){
var map__25019 = p__25018;
var map__25019__$1 = cljs.core.__destructure_map(map__25019);
var msg__$1 = map__25019__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25019__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.react_native.do_js_load(sources__$1);

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e25020){var ex = e25020;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.react-native","client","shadow.cljs.devtools.client.react-native/client",838790877),cljs.core.PersistentHashSet.EMPTY,(function (p__25022){
var map__25023 = p__25022;
var map__25023__$1 = cljs.core.__destructure_map(map__25023);
var env = map__25023__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25023__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.react-native","client","shadow.cljs.devtools.client.react-native/client",838790877),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$1(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (){
return console.warn("The shadow-cljs Websocket was disconnected.");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
return console.error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.react_native.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__25024){
var map__25025 = p__25024;
var map__25025__$1 = cljs.core.__destructure_map(map__25025);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25025__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25025__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
return console.warn("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
return console.warn("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__25026){
var map__25027 = p__25026;
var map__25027__$1 = cljs.core.__destructure_map(map__25027);
var svc = map__25027__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25027__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.react-native","client","shadow.cljs.devtools.client.react-native/client",838790877));
}));

setTimeout((function (){
var start_fn = (function (){
return shadow.cljs.devtools.client.shared.init_runtime_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"react-native","react-native",-1543085138)], null),shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
});
if(cljs.core.truth_(shadow.cljs.devtools.client.env.selected_host)){
return start_fn();
} else {
if(((cljs.core.seq(shadow.cljs.devtools.client.env.server_host)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("localhost",shadow.cljs.devtools.client.env.server_host)))){
return start_fn();
} else {
if(cljs.core.seq(shadow.cljs.devtools.client.env.server_hosts)){
return shadow.cljs.devtools.client.react_native.attempt_to_find_host(start_fn,cljs.core.vec(clojure.string.split.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.server_hosts,",")));
} else {
return start_fn();

}
}
}
}),(250));
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.react_native.js.map

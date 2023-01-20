goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__22939){
var map__22940 = p__22939;
var map__22940__$1 = cljs.core.__destructure_map(map__22940);
var m = map__22940__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22940__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22940__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22942_23196 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22943_23197 = null;
var count__22944_23198 = (0);
var i__22945_23199 = (0);
while(true){
if((i__22945_23199 < count__22944_23198)){
var f_23200 = chunk__22943_23197.cljs$core$IIndexed$_nth$arity$2(null,i__22945_23199);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23200], 0));


var G__23201 = seq__22942_23196;
var G__23202 = chunk__22943_23197;
var G__23203 = count__22944_23198;
var G__23204 = (i__22945_23199 + (1));
seq__22942_23196 = G__23201;
chunk__22943_23197 = G__23202;
count__22944_23198 = G__23203;
i__22945_23199 = G__23204;
continue;
} else {
var temp__5804__auto___23205 = cljs.core.seq(seq__22942_23196);
if(temp__5804__auto___23205){
var seq__22942_23206__$1 = temp__5804__auto___23205;
if(cljs.core.chunked_seq_QMARK_(seq__22942_23206__$1)){
var c__5568__auto___23207 = cljs.core.chunk_first(seq__22942_23206__$1);
var G__23208 = cljs.core.chunk_rest(seq__22942_23206__$1);
var G__23209 = c__5568__auto___23207;
var G__23210 = cljs.core.count(c__5568__auto___23207);
var G__23211 = (0);
seq__22942_23196 = G__23208;
chunk__22943_23197 = G__23209;
count__22944_23198 = G__23210;
i__22945_23199 = G__23211;
continue;
} else {
var f_23212 = cljs.core.first(seq__22942_23206__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23212], 0));


var G__23213 = cljs.core.next(seq__22942_23206__$1);
var G__23214 = null;
var G__23215 = (0);
var G__23216 = (0);
seq__22942_23196 = G__23213;
chunk__22943_23197 = G__23214;
count__22944_23198 = G__23215;
i__22945_23199 = G__23216;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23217 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_23217], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_23217)))?cljs.core.second(arglists_23217):arglists_23217)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22953_23220 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22954_23221 = null;
var count__22955_23222 = (0);
var i__22956_23223 = (0);
while(true){
if((i__22956_23223 < count__22955_23222)){
var vec__22970_23224 = chunk__22954_23221.cljs$core$IIndexed$_nth$arity$2(null,i__22956_23223);
var name_23225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22970_23224,(0),null);
var map__22973_23226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22970_23224,(1),null);
var map__22973_23227__$1 = cljs.core.__destructure_map(map__22973_23226);
var doc_23228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22973_23227__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22973_23227__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23225], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23229], 0));

if(cljs.core.truth_(doc_23228)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23228], 0));
} else {
}


var G__23230 = seq__22953_23220;
var G__23231 = chunk__22954_23221;
var G__23232 = count__22955_23222;
var G__23233 = (i__22956_23223 + (1));
seq__22953_23220 = G__23230;
chunk__22954_23221 = G__23231;
count__22955_23222 = G__23232;
i__22956_23223 = G__23233;
continue;
} else {
var temp__5804__auto___23234 = cljs.core.seq(seq__22953_23220);
if(temp__5804__auto___23234){
var seq__22953_23235__$1 = temp__5804__auto___23234;
if(cljs.core.chunked_seq_QMARK_(seq__22953_23235__$1)){
var c__5568__auto___23236 = cljs.core.chunk_first(seq__22953_23235__$1);
var G__23237 = cljs.core.chunk_rest(seq__22953_23235__$1);
var G__23238 = c__5568__auto___23236;
var G__23239 = cljs.core.count(c__5568__auto___23236);
var G__23240 = (0);
seq__22953_23220 = G__23237;
chunk__22954_23221 = G__23238;
count__22955_23222 = G__23239;
i__22956_23223 = G__23240;
continue;
} else {
var vec__22975_23241 = cljs.core.first(seq__22953_23235__$1);
var name_23242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22975_23241,(0),null);
var map__22978_23243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22975_23241,(1),null);
var map__22978_23244__$1 = cljs.core.__destructure_map(map__22978_23243);
var doc_23245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22978_23244__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22978_23244__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23242], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23246], 0));

if(cljs.core.truth_(doc_23245)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23245], 0));
} else {
}


var G__23247 = cljs.core.next(seq__22953_23235__$1);
var G__23248 = null;
var G__23249 = (0);
var G__23250 = (0);
seq__22953_23220 = G__23247;
chunk__22954_23221 = G__23248;
count__22955_23222 = G__23249;
i__22956_23223 = G__23250;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__22981 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__22982 = null;
var count__22983 = (0);
var i__22984 = (0);
while(true){
if((i__22984 < count__22983)){
var role = chunk__22982.cljs$core$IIndexed$_nth$arity$2(null,i__22984);
var temp__5804__auto___23251__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___23251__$1)){
var spec_23253 = temp__5804__auto___23251__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_23253)], 0));
} else {
}


var G__23254 = seq__22981;
var G__23255 = chunk__22982;
var G__23256 = count__22983;
var G__23257 = (i__22984 + (1));
seq__22981 = G__23254;
chunk__22982 = G__23255;
count__22983 = G__23256;
i__22984 = G__23257;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__22981);
if(temp__5804__auto____$1){
var seq__22981__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__22981__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22981__$1);
var G__23258 = cljs.core.chunk_rest(seq__22981__$1);
var G__23259 = c__5568__auto__;
var G__23260 = cljs.core.count(c__5568__auto__);
var G__23261 = (0);
seq__22981 = G__23258;
chunk__22982 = G__23259;
count__22983 = G__23260;
i__22984 = G__23261;
continue;
} else {
var role = cljs.core.first(seq__22981__$1);
var temp__5804__auto___23262__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___23262__$2)){
var spec_23263 = temp__5804__auto___23262__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_23263)], 0));
} else {
}


var G__23264 = cljs.core.next(seq__22981__$1);
var G__23265 = null;
var G__23266 = (0);
var G__23267 = (0);
seq__22981 = G__23264;
chunk__22982 = G__23265;
count__22983 = G__23266;
i__22984 = G__23267;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__23270 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__23271 = cljs.core.ex_cause(t);
via = G__23270;
t = G__23271;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__23060 = datafied_throwable;
var map__23060__$1 = cljs.core.__destructure_map(map__23060);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23060__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23060__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23060__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__23061 = cljs.core.last(via);
var map__23061__$1 = cljs.core.__destructure_map(map__23061);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23061__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23061__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23061__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__23062 = data;
var map__23062__$1 = cljs.core.__destructure_map(map__23062);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23062__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23062__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23062__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__23066 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__23066__$1 = cljs.core.__destructure_map(map__23066);
var top_data = map__23066__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23066__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__23081 = phase;
var G__23081__$1 = (((G__23081 instanceof cljs.core.Keyword))?G__23081.fqn:null);
switch (G__23081__$1) {
case "read-source":
var map__23090 = data;
var map__23090__$1 = cljs.core.__destructure_map(map__23090);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23090__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23090__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__23095 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__23095__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23095,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__23095);
var G__23095__$2 = (cljs.core.truth_((function (){var fexpr__23096 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__23096.cljs$core$IFn$_invoke$arity$1 ? fexpr__23096.cljs$core$IFn$_invoke$arity$1(source) : fexpr__23096.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23095__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__23095__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23095__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__23095__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__23098 = top_data;
var G__23098__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23098,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__23098);
var G__23098__$2 = (cljs.core.truth_((function (){var fexpr__23100 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__23100.cljs$core$IFn$_invoke$arity$1 ? fexpr__23100.cljs$core$IFn$_invoke$arity$1(source) : fexpr__23100.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23098__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__23098__$1);
var G__23098__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23098__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__23098__$2);
var G__23098__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23098__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__23098__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23098__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__23098__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__23105 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23105,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23105,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23105,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23105,(3),null);
var G__23109 = top_data;
var G__23109__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23109,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__23109);
var G__23109__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23109__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__23109__$1);
var G__23109__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23109__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__23109__$2);
var G__23109__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23109__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__23109__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23109__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__23109__$4;
}

break;
case "execution":
var vec__23117 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23117,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23117,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23117,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23117,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__23046_SHARP_){
var or__5045__auto__ = (p1__23046_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__23123 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__23123.cljs$core$IFn$_invoke$arity$1 ? fexpr__23123.cljs$core$IFn$_invoke$arity$1(p1__23046_SHARP_) : fexpr__23123.call(null,p1__23046_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__23125 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__23125__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23125,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__23125);
var G__23125__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23125__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__23125__$1);
var G__23125__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23125__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__23125__$2);
var G__23125__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23125__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__23125__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23125__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__23125__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23081__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__23134){
var map__23135 = p__23134;
var map__23135__$1 = cljs.core.__destructure_map(map__23135);
var triage_data = map__23135__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23135__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23135__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23135__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23135__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23135__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23135__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23135__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23135__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__23146 = phase;
var G__23146__$1 = (((G__23146 instanceof cljs.core.Keyword))?G__23146.fqn:null);
switch (G__23146__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__23148 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__23149 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23150 = loc;
var G__23151 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23152_23299 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23153_23300 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23154_23301 = true;
var _STAR_print_fn_STAR__temp_val__23155_23302 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23154_23301);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23155_23302);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23132_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__23132_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23153_23300);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23152_23299);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__23148,G__23149,G__23150,G__23151) : format.call(null,G__23148,G__23149,G__23150,G__23151));

break;
case "macroexpansion":
var G__23157 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__23158 = cause_type;
var G__23159 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23160 = loc;
var G__23161 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23157,G__23158,G__23159,G__23160,G__23161) : format.call(null,G__23157,G__23158,G__23159,G__23160,G__23161));

break;
case "compile-syntax-check":
var G__23163 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__23164 = cause_type;
var G__23165 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23166 = loc;
var G__23167 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23163,G__23164,G__23165,G__23166,G__23167) : format.call(null,G__23163,G__23164,G__23165,G__23166,G__23167));

break;
case "compilation":
var G__23168 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__23169 = cause_type;
var G__23170 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23171 = loc;
var G__23172 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23168,G__23169,G__23170,G__23171,G__23172) : format.call(null,G__23168,G__23169,G__23170,G__23171,G__23172));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__23177 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__23178 = symbol;
var G__23179 = loc;
var G__23180 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23181_23308 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23182_23309 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23183_23310 = true;
var _STAR_print_fn_STAR__temp_val__23184_23311 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23183_23310);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23184_23311);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23133_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__23133_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23182_23309);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23181_23308);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__23177,G__23178,G__23179,G__23180) : format.call(null,G__23177,G__23178,G__23179,G__23180));
} else {
var G__23185 = "Execution error%s at %s(%s).\n%s\n";
var G__23186 = cause_type;
var G__23187 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__23188 = loc;
var G__23189 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23185,G__23186,G__23187,G__23188,G__23189) : format.call(null,G__23185,G__23186,G__23187,G__23188,G__23189));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23146__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

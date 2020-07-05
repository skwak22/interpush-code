// Compiled by ClojureScript 1.10.764 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__25167__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25167 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25168__i = 0, G__25168__a = new Array(arguments.length -  0);
while (G__25168__i < G__25168__a.length) {G__25168__a[G__25168__i] = arguments[G__25168__i + 0]; ++G__25168__i;}
  args = new cljs.core.IndexedSeq(G__25168__a,0,null);
} 
return G__25167__delegate.call(this,args);};
G__25167.cljs$lang$maxFixedArity = 0;
G__25167.cljs$lang$applyTo = (function (arglist__25169){
var args = cljs.core.seq(arglist__25169);
return G__25167__delegate(args);
});
G__25167.cljs$core$IFn$_invoke$arity$variadic = G__25167__delegate;
return G__25167;
})()
);

(o.error = (function() { 
var G__25170__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25170 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25171__i = 0, G__25171__a = new Array(arguments.length -  0);
while (G__25171__i < G__25171__a.length) {G__25171__a[G__25171__i] = arguments[G__25171__i + 0]; ++G__25171__i;}
  args = new cljs.core.IndexedSeq(G__25171__a,0,null);
} 
return G__25170__delegate.call(this,args);};
G__25170.cljs$lang$maxFixedArity = 0;
G__25170.cljs$lang$applyTo = (function (arglist__25172){
var args = cljs.core.seq(arglist__25172);
return G__25170__delegate(args);
});
G__25170.cljs$core$IFn$_invoke$arity$variadic = G__25170__delegate;
return G__25170;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1593791103968

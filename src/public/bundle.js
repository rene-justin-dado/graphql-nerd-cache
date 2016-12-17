/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
	var _reactDom=__webpack_require__(32);
	var _reactRedux=__webpack_require__(178);
	var _redux=__webpack_require__(185);
	
	var _apolloClient=__webpack_require__(208);var _apolloClient2=_interopRequireDefault(_apolloClient);
	var _reactApollo=__webpack_require__(425);
	
	var _reducers=__webpack_require__(432);var _reducers2=_interopRequireDefault(_reducers);
	
	var _App=__webpack_require__(434);var _App2=_interopRequireDefault(_App);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var client=new _apolloClient2.default();
	
	
	
	var store=(0,_redux.createStore)(_reducers2.default,
	
	{},
	(0,_redux.compose)(
	(0,_redux.applyMiddleware)(client.middleware()),
	window.devToolsExtension?window.devToolsExtension():function(f){return f;}));
	
	
	
	document.addEventListener('DOMContentLoaded',function(){
	(0,_reactDom.render)(
	_react2.default.createElement(_reactApollo.ApolloProvider,{store:store,client:client},
	_react2.default.createElement(_App2.default,null)),
	
	document.getElementById('app'));
	
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports=__webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _assign=__webpack_require__(4);
	
	var ReactChildren=__webpack_require__(5);
	var ReactComponent=__webpack_require__(18);
	var ReactPureComponent=__webpack_require__(21);
	var ReactClass=__webpack_require__(22);
	var ReactDOMFactories=__webpack_require__(24);
	var ReactElement=__webpack_require__(9);
	var ReactPropTypes=__webpack_require__(29);
	var ReactVersion=__webpack_require__(30);
	
	var onlyChild=__webpack_require__(31);
	var warning=__webpack_require__(11);
	
	var createElement=ReactElement.createElement;
	var createFactory=ReactElement.createFactory;
	var cloneElement=ReactElement.cloneElement;
	
	if(process.env.NODE_ENV!=='production'){
	var ReactElementValidator=__webpack_require__(25);
	createElement=ReactElementValidator.createElement;
	createFactory=ReactElementValidator.createFactory;
	cloneElement=ReactElementValidator.cloneElement;
	}
	
	var __spread=_assign;
	
	if(process.env.NODE_ENV!=='production'){
	var warned=false;
	__spread=function __spread(){
	process.env.NODE_ENV!=='production'?warning(warned,'React.__spread is deprecated and should not be used. Use '+'Object.assign directly or another helper function with similar '+'semantics. You may be seeing this warning due to your compiler. '+'See https://fb.me/react-spread-deprecation for more details.'):void 0;
	warned=true;
	return _assign.apply(null,arguments);
	};
	}
	
	var React={
	
	
	
	Children:{
	map:ReactChildren.map,
	forEach:ReactChildren.forEach,
	count:ReactChildren.count,
	toArray:ReactChildren.toArray,
	only:onlyChild},
	
	
	Component:ReactComponent,
	PureComponent:ReactPureComponent,
	
	createElement:createElement,
	cloneElement:cloneElement,
	isValidElement:ReactElement.isValidElement,
	
	
	
	PropTypes:ReactPropTypes,
	createClass:ReactClass.createClass,
	createFactory:createFactory,
	createMixin:function createMixin(mixin){
	
	return mixin;
	},
	
	
	
	DOM:ReactDOMFactories,
	
	version:ReactVersion,
	
	
	__spread:__spread};
	
	
	module.exports=React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	var process=module.exports={};
	
	
	
	
	
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout(){
	throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout(){
	throw new Error('clearTimeout has not been defined');
	}
	(function(){
	try{
	if(typeof setTimeout==='function'){
	cachedSetTimeout=setTimeout;
	}else{
	cachedSetTimeout=defaultSetTimout;
	}
	}catch(e){
	cachedSetTimeout=defaultSetTimout;
	}
	try{
	if(typeof clearTimeout==='function'){
	cachedClearTimeout=clearTimeout;
	}else{
	cachedClearTimeout=defaultClearTimeout;
	}
	}catch(e){
	cachedClearTimeout=defaultClearTimeout;
	}
	})();
	function runTimeout(fun){
	if(cachedSetTimeout===setTimeout){
	
	return setTimeout(fun,0);
	}
	
	if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){
	cachedSetTimeout=setTimeout;
	return setTimeout(fun,0);
	}
	try{
	
	return cachedSetTimeout(fun,0);
	}catch(e){
	try{
	
	return cachedSetTimeout.call(null,fun,0);
	}catch(e){
	
	return cachedSetTimeout.call(this,fun,0);
	}
	}
	
	
	}
	function runClearTimeout(marker){
	if(cachedClearTimeout===clearTimeout){
	
	return clearTimeout(marker);
	}
	
	if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){
	cachedClearTimeout=clearTimeout;
	return clearTimeout(marker);
	}
	try{
	
	return cachedClearTimeout(marker);
	}catch(e){
	try{
	
	return cachedClearTimeout.call(null,marker);
	}catch(e){
	
	
	return cachedClearTimeout.call(this,marker);
	}
	}
	
	
	
	}
	var queue=[];
	var draining=false;
	var currentQueue;
	var queueIndex=-1;
	
	function cleanUpNextTick(){
	if(!draining||!currentQueue){
	return;
	}
	draining=false;
	if(currentQueue.length){
	queue=currentQueue.concat(queue);
	}else{
	queueIndex=-1;
	}
	if(queue.length){
	drainQueue();
	}
	}
	
	function drainQueue(){
	if(draining){
	return;
	}
	var timeout=runTimeout(cleanUpNextTick);
	draining=true;
	
	var len=queue.length;
	while(len){
	currentQueue=queue;
	queue=[];
	while(++queueIndex<len){
	if(currentQueue){
	currentQueue[queueIndex].run();
	}
	}
	queueIndex=-1;
	len=queue.length;
	}
	currentQueue=null;
	draining=false;
	runClearTimeout(timeout);
	}
	
	process.nextTick=function(fun){
	var args=new Array(arguments.length-1);
	if(arguments.length>1){
	for(var i=1;i<arguments.length;i++){
	args[i-1]=arguments[i];
	}
	}
	queue.push(new Item(fun,args));
	if(queue.length===1&&!draining){
	runTimeout(drainQueue);
	}
	};
	
	
	function Item(fun,array){
	this.fun=fun;
	this.array=array;
	}
	Item.prototype.run=function(){
	this.fun.apply(null,this.array);
	};
	process.title='browser';
	process.browser=true;
	process.env={};
	process.argv=[];
	process.version='';
	process.versions={};
	
	function noop(){}
	
	process.on=noop;
	process.addListener=noop;
	process.once=noop;
	process.off=noop;
	process.removeListener=noop;
	process.removeAllListeners=noop;
	process.emit=noop;
	
	process.binding=function(name){
	throw new Error('process.binding is not supported');
	};
	
	process.cwd=function(){return'/';};
	process.chdir=function(dir){
	throw new Error('process.chdir is not supported');
	};
	process.umask=function(){return 0;};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	var hasOwnProperty=Object.prototype.hasOwnProperty;
	var propIsEnumerable=Object.prototype.propertyIsEnumerable;
	
	function toObject(val){
	if(val===null||val===undefined){
	throw new TypeError('Object.assign cannot be called with null or undefined');
	}
	
	return Object(val);
	}
	
	function shouldUseNative(){
	try{
	if(!Object.assign){
	return false;
	}
	
	
	
	
	var test1=new String('abc');
	test1[5]='de';
	if(Object.getOwnPropertyNames(test1)[0]==='5'){
	return false;
	}
	
	
	var test2={};
	for(var i=0;i<10;i++){
	test2['_'+String.fromCharCode(i)]=i;
	}
	var order2=Object.getOwnPropertyNames(test2).map(function(n){
	return test2[n];
	});
	if(order2.join('')!=='0123456789'){
	return false;
	}
	
	
	var test3={};
	'abcdefghijklmnopqrst'.split('').forEach(function(letter){
	test3[letter]=letter;
	});
	if(Object.keys(_extends({},test3)).join('')!==
	'abcdefghijklmnopqrst'){
	return false;
	}
	
	return true;
	}catch(e){
	
	return false;
	}
	}
	
	module.exports=shouldUseNative()?Object.assign:function(target,source){
	var from;
	var to=toObject(target);
	var symbols;
	
	for(var s=1;s<arguments.length;s++){
	from=Object(arguments[s]);
	
	for(var key in from){
	if(hasOwnProperty.call(from,key)){
	to[key]=from[key];
	}
	}
	
	if(Object.getOwnPropertySymbols){
	symbols=Object.getOwnPropertySymbols(from);
	for(var i=0;i<symbols.length;i++){
	if(propIsEnumerable.call(from,symbols[i])){
	to[symbols[i]]=from[symbols[i]];
	}
	}
	}
	}
	
	return to;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var PooledClass=__webpack_require__(6);
	var ReactElement=__webpack_require__(9);
	
	var emptyFunction=__webpack_require__(12);
	var traverseAllChildren=__webpack_require__(15);
	
	var twoArgumentPooler=PooledClass.twoArgumentPooler;
	var fourArgumentPooler=PooledClass.fourArgumentPooler;
	
	var userProvidedKeyEscapeRegex=/\/+/g;
	function escapeUserProvidedKey(text){
	return(''+text).replace(userProvidedKeyEscapeRegex,'$&/');
	}
	
	
	
	
	
	
	
	
	
	function ForEachBookKeeping(forEachFunction,forEachContext){
	this.func=forEachFunction;
	this.context=forEachContext;
	this.count=0;
	}
	ForEachBookKeeping.prototype.destructor=function(){
	this.func=null;
	this.context=null;
	this.count=0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping,twoArgumentPooler);
	
	function forEachSingleChild(bookKeeping,child,name){
	var func=bookKeeping.func,
	context=bookKeeping.context;
	
	func.call(context,child,bookKeeping.count++);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	function forEachChildren(children,forEachFunc,forEachContext){
	if(children==null){
	return children;
	}
	var traverseContext=ForEachBookKeeping.getPooled(forEachFunc,forEachContext);
	traverseAllChildren(children,forEachSingleChild,traverseContext);
	ForEachBookKeeping.release(traverseContext);
	}
	
	
	
	
	
	
	
	
	
	
	function MapBookKeeping(mapResult,keyPrefix,mapFunction,mapContext){
	this.result=mapResult;
	this.keyPrefix=keyPrefix;
	this.func=mapFunction;
	this.context=mapContext;
	this.count=0;
	}
	MapBookKeeping.prototype.destructor=function(){
	this.result=null;
	this.keyPrefix=null;
	this.func=null;
	this.context=null;
	this.count=0;
	};
	PooledClass.addPoolingTo(MapBookKeeping,fourArgumentPooler);
	
	function mapSingleChildIntoContext(bookKeeping,child,childKey){
	var result=bookKeeping.result,
	keyPrefix=bookKeeping.keyPrefix,
	func=bookKeeping.func,
	context=bookKeeping.context;
	
	
	var mappedChild=func.call(context,child,bookKeeping.count++);
	if(Array.isArray(mappedChild)){
	mapIntoWithKeyPrefixInternal(mappedChild,result,childKey,emptyFunction.thatReturnsArgument);
	}else if(mappedChild!=null){
	if(ReactElement.isValidElement(mappedChild)){
	mappedChild=ReactElement.cloneAndReplaceKey(mappedChild,
	
	
	keyPrefix+(mappedChild.key&&(!child||child.key!==mappedChild.key)?escapeUserProvidedKey(mappedChild.key)+'/':'')+childKey);
	}
	result.push(mappedChild);
	}
	}
	
	function mapIntoWithKeyPrefixInternal(children,array,prefix,func,context){
	var escapedPrefix='';
	if(prefix!=null){
	escapedPrefix=escapeUserProvidedKey(prefix)+'/';
	}
	var traverseContext=MapBookKeeping.getPooled(array,escapedPrefix,func,context);
	traverseAllChildren(children,mapSingleChildIntoContext,traverseContext);
	MapBookKeeping.release(traverseContext);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function mapChildren(children,func,context){
	if(children==null){
	return children;
	}
	var result=[];
	mapIntoWithKeyPrefixInternal(children,result,null,func,context);
	return result;
	}
	
	function forEachSingleChildDummy(traverseContext,child,name){
	return null;
	}
	
	
	
	
	
	
	
	
	
	
	function countChildren(children,context){
	return traverseAllChildren(children,forEachSingleChildDummy,null);
	}
	
	
	
	
	
	
	
	function toArray(children){
	var result=[];
	mapIntoWithKeyPrefixInternal(children,result,null,emptyFunction.thatReturnsArgument);
	return result;
	}
	
	var ReactChildren={
	forEach:forEachChildren,
	map:mapChildren,
	mapIntoWithKeyPrefixInternal:mapIntoWithKeyPrefixInternal,
	count:countChildren,
	toArray:toArray};
	
	
	module.exports=ReactChildren;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(7);
	
	var invariant=__webpack_require__(8);
	
	
	
	
	
	
	
	
	var oneArgumentPooler=function oneArgumentPooler(copyFieldsFrom){
	var Klass=this;
	if(Klass.instancePool.length){
	var instance=Klass.instancePool.pop();
	Klass.call(instance,copyFieldsFrom);
	return instance;
	}else{
	return new Klass(copyFieldsFrom);
	}
	};
	
	var twoArgumentPooler=function twoArgumentPooler(a1,a2){
	var Klass=this;
	if(Klass.instancePool.length){
	var instance=Klass.instancePool.pop();
	Klass.call(instance,a1,a2);
	return instance;
	}else{
	return new Klass(a1,a2);
	}
	};
	
	var threeArgumentPooler=function threeArgumentPooler(a1,a2,a3){
	var Klass=this;
	if(Klass.instancePool.length){
	var instance=Klass.instancePool.pop();
	Klass.call(instance,a1,a2,a3);
	return instance;
	}else{
	return new Klass(a1,a2,a3);
	}
	};
	
	var fourArgumentPooler=function fourArgumentPooler(a1,a2,a3,a4){
	var Klass=this;
	if(Klass.instancePool.length){
	var instance=Klass.instancePool.pop();
	Klass.call(instance,a1,a2,a3,a4);
	return instance;
	}else{
	return new Klass(a1,a2,a3,a4);
	}
	};
	
	var fiveArgumentPooler=function fiveArgumentPooler(a1,a2,a3,a4,a5){
	var Klass=this;
	if(Klass.instancePool.length){
	var instance=Klass.instancePool.pop();
	Klass.call(instance,a1,a2,a3,a4,a5);
	return instance;
	}else{
	return new Klass(a1,a2,a3,a4,a5);
	}
	};
	
	var standardReleaser=function standardReleaser(instance){
	var Klass=this;
	!(instance instanceof Klass)?process.env.NODE_ENV!=='production'?invariant(false,'Trying to release an instance into a pool of a different type.'):_prodInvariant('25'):void 0;
	instance.destructor();
	if(Klass.instancePool.length<Klass.poolSize){
	Klass.instancePool.push(instance);
	}
	};
	
	var DEFAULT_POOL_SIZE=10;
	var DEFAULT_POOLER=oneArgumentPooler;
	
	
	
	
	
	
	
	
	
	
	var addPoolingTo=function addPoolingTo(CopyConstructor,pooler){
	
	
	var NewKlass=CopyConstructor;
	NewKlass.instancePool=[];
	NewKlass.getPooled=pooler||DEFAULT_POOLER;
	if(!NewKlass.poolSize){
	NewKlass.poolSize=DEFAULT_POOL_SIZE;
	}
	NewKlass.release=standardReleaser;
	return NewKlass;
	};
	
	var PooledClass={
	addPoolingTo:addPoolingTo,
	oneArgumentPooler:oneArgumentPooler,
	twoArgumentPooler:twoArgumentPooler,
	threeArgumentPooler:threeArgumentPooler,
	fourArgumentPooler:fourArgumentPooler,
	fiveArgumentPooler:fiveArgumentPooler};
	
	
	module.exports=PooledClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	
	
	
	function reactProdInvariant(code){
	var argCount=arguments.length-1;
	
	var message='Minified React error #'+code+'; visit '+'http://facebook.github.io/react/docs/error-decoder.html?invariant='+code;
	
	for(var argIdx=0;argIdx<argCount;argIdx++){
	message+='&args[]='+encodeURIComponent(arguments[argIdx+1]);
	}
	
	message+=' for the full message or use the non-minified dev environment'+' for full errors and additional helpful warnings.';
	
	var error=new Error(message);
	error.name='Invariant Violation';
	error.framesToPop=1;
	
	throw error;
	}
	
	module.exports=reactProdInvariant;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	
	
	
	
	
	
	
	function invariant(condition,format,a,b,c,d,e,f){
	if(process.env.NODE_ENV!=='production'){
	if(format===undefined){
	throw new Error('invariant requires an error message argument');
	}
	}
	
	if(!condition){
	var error;
	if(format===undefined){
	error=new Error('Minified exception occurred; use the non-minified dev environment '+'for the full error message and additional helpful warnings.');
	}else{
	var args=[a,b,c,d,e,f];
	var argIndex=0;
	error=new Error(format.replace(/%s/g,function(){
	return args[argIndex++];
	}));
	error.name='Invariant Violation';
	}
	
	error.framesToPop=1;
	throw error;
	}
	}
	
	module.exports=invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	var _assign=__webpack_require__(4);
	
	var ReactCurrentOwner=__webpack_require__(10);
	
	var warning=__webpack_require__(11);
	var canDefineProperty=__webpack_require__(13);
	var hasOwnProperty=Object.prototype.hasOwnProperty;
	
	var REACT_ELEMENT_TYPE=__webpack_require__(14);
	
	var RESERVED_PROPS={
	key:true,
	ref:true,
	__self:true,
	__source:true};
	
	
	var specialPropKeyWarningShown,specialPropRefWarningShown;
	
	function hasValidRef(config){
	if(process.env.NODE_ENV!=='production'){
	if(hasOwnProperty.call(config,'ref')){
	var getter=Object.getOwnPropertyDescriptor(config,'ref').get;
	if(getter&&getter.isReactWarning){
	return false;
	}
	}
	}
	return config.ref!==undefined;
	}
	
	function hasValidKey(config){
	if(process.env.NODE_ENV!=='production'){
	if(hasOwnProperty.call(config,'key')){
	var getter=Object.getOwnPropertyDescriptor(config,'key').get;
	if(getter&&getter.isReactWarning){
	return false;
	}
	}
	}
	return config.key!==undefined;
	}
	
	function defineKeyPropWarningGetter(props,displayName){
	var warnAboutAccessingKey=function warnAboutAccessingKey(){
	if(!specialPropKeyWarningShown){
	specialPropKeyWarningShown=true;
	process.env.NODE_ENV!=='production'?warning(false,'%s: `key` is not a prop. Trying to access it will result '+'in `undefined` being returned. If you need to access the same '+'value within the child component, you should pass it as a different '+'prop. (https://fb.me/react-special-props)',displayName):void 0;
	}
	};
	warnAboutAccessingKey.isReactWarning=true;
	Object.defineProperty(props,'key',{
	get:warnAboutAccessingKey,
	configurable:true});
	
	}
	
	function defineRefPropWarningGetter(props,displayName){
	var warnAboutAccessingRef=function warnAboutAccessingRef(){
	if(!specialPropRefWarningShown){
	specialPropRefWarningShown=true;
	process.env.NODE_ENV!=='production'?warning(false,'%s: `ref` is not a prop. Trying to access it will result '+'in `undefined` being returned. If you need to access the same '+'value within the child component, you should pass it as a different '+'prop. (https://fb.me/react-special-props)',displayName):void 0;
	}
	};
	warnAboutAccessingRef.isReactWarning=true;
	Object.defineProperty(props,'ref',{
	get:warnAboutAccessingRef,
	configurable:true});
	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var ReactElement=function ReactElement(type,key,ref,self,source,owner,props){
	var element={
	
	$$typeof:REACT_ELEMENT_TYPE,
	
	
	type:type,
	key:key,
	ref:ref,
	props:props,
	
	
	_owner:owner};
	
	
	if(process.env.NODE_ENV!=='production'){
	
	
	
	
	element._store={};
	
	
	
	
	
	if(canDefineProperty){
	Object.defineProperty(element._store,'validated',{
	configurable:false,
	enumerable:false,
	writable:true,
	value:false});
	
	
	Object.defineProperty(element,'_self',{
	configurable:false,
	enumerable:false,
	writable:false,
	value:self});
	
	
	
	Object.defineProperty(element,'_source',{
	configurable:false,
	enumerable:false,
	writable:false,
	value:source});
	
	}else{
	element._store.validated=false;
	element._self=self;
	element._source=source;
	}
	if(Object.freeze){
	Object.freeze(element.props);
	Object.freeze(element);
	}
	}
	
	return element;
	};
	
	
	
	
	
	ReactElement.createElement=function(type,config,children){
	var propName;
	
	
	var props={};
	
	var key=null;
	var ref=null;
	var self=null;
	var source=null;
	
	if(config!=null){
	if(hasValidRef(config)){
	ref=config.ref;
	}
	if(hasValidKey(config)){
	key=''+config.key;
	}
	
	self=config.__self===undefined?null:config.__self;
	source=config.__source===undefined?null:config.__source;
	
	for(propName in config){
	if(hasOwnProperty.call(config,propName)&&!RESERVED_PROPS.hasOwnProperty(propName)){
	props[propName]=config[propName];
	}
	}
	}
	
	
	
	var childrenLength=arguments.length-2;
	if(childrenLength===1){
	props.children=children;
	}else if(childrenLength>1){
	var childArray=Array(childrenLength);
	for(var i=0;i<childrenLength;i++){
	childArray[i]=arguments[i+2];
	}
	if(process.env.NODE_ENV!=='production'){
	if(Object.freeze){
	Object.freeze(childArray);
	}
	}
	props.children=childArray;
	}
	
	
	if(type&&type.defaultProps){
	var defaultProps=type.defaultProps;
	for(propName in defaultProps){
	if(props[propName]===undefined){
	props[propName]=defaultProps[propName];
	}
	}
	}
	if(process.env.NODE_ENV!=='production'){
	if(key||ref){
	if(typeof props.$$typeof==='undefined'||props.$$typeof!==REACT_ELEMENT_TYPE){
	var displayName=typeof type==='function'?type.displayName||type.name||'Unknown':type;
	if(key){
	defineKeyPropWarningGetter(props,displayName);
	}
	if(ref){
	defineRefPropWarningGetter(props,displayName);
	}
	}
	}
	}
	return ReactElement(type,key,ref,self,source,ReactCurrentOwner.current,props);
	};
	
	
	
	
	
	ReactElement.createFactory=function(type){
	var factory=ReactElement.createElement.bind(null,type);
	
	
	
	
	
	factory.type=type;
	return factory;
	};
	
	ReactElement.cloneAndReplaceKey=function(oldElement,newKey){
	var newElement=ReactElement(oldElement.type,newKey,oldElement.ref,oldElement._self,oldElement._source,oldElement._owner,oldElement.props);
	
	return newElement;
	};
	
	
	
	
	
	ReactElement.cloneElement=function(element,config,children){
	var propName;
	
	
	var props=_assign({},element.props);
	
	
	var key=element.key;
	var ref=element.ref;
	
	var self=element._self;
	
	
	
	var source=element._source;
	
	
	var owner=element._owner;
	
	if(config!=null){
	if(hasValidRef(config)){
	
	ref=config.ref;
	owner=ReactCurrentOwner.current;
	}
	if(hasValidKey(config)){
	key=''+config.key;
	}
	
	
	var defaultProps;
	if(element.type&&element.type.defaultProps){
	defaultProps=element.type.defaultProps;
	}
	for(propName in config){
	if(hasOwnProperty.call(config,propName)&&!RESERVED_PROPS.hasOwnProperty(propName)){
	if(config[propName]===undefined&&defaultProps!==undefined){
	
	props[propName]=defaultProps[propName];
	}else{
	props[propName]=config[propName];
	}
	}
	}
	}
	
	
	
	var childrenLength=arguments.length-2;
	if(childrenLength===1){
	props.children=children;
	}else if(childrenLength>1){
	var childArray=Array(childrenLength);
	for(var i=0;i<childrenLength;i++){
	childArray[i]=arguments[i+2];
	}
	props.children=childArray;
	}
	
	return ReactElement(element.type,key,ref,self,source,owner,props);
	};
	
	
	
	
	
	
	
	
	ReactElement.isValidElement=function(object){
	return(typeof object==='undefined'?'undefined':_typeof(object))==='object'&&object!==null&&object.$$typeof===REACT_ELEMENT_TYPE;
	};
	
	module.exports=ReactElement;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	
	
	var ReactCurrentOwner={
	
	
	
	
	
	current:null};
	
	
	
	module.exports=ReactCurrentOwner;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var emptyFunction=__webpack_require__(12);
	
	
	
	
	
	
	
	
	var warning=emptyFunction;
	
	if(process.env.NODE_ENV!=='production'){
	(function(){
	var printWarning=function printWarning(format){
	for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){
	args[_key-1]=arguments[_key];
	}
	
	var argIndex=0;
	var message='Warning: '+format.replace(/%s/g,function(){
	return args[argIndex++];
	});
	if(typeof console!=='undefined'){
	console.error(message);
	}
	try{
	
	
	
	throw new Error(message);
	}catch(x){}
	};
	
	warning=function warning(condition,format){
	if(format===undefined){
	throw new Error('`warning(condition, format, ...args)` requires a warning '+'message argument');
	}
	
	if(format.indexOf('Failed Composite propType: ')===0){
	return;
	}
	
	if(!condition){
	for(var _len2=arguments.length,args=Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++){
	args[_key2-2]=arguments[_key2];
	}
	
	printWarning.apply(undefined,[format].concat(args));
	}
	};
	})();
	}
	
	module.exports=warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	
	
	
	
	function makeEmptyFunction(arg){
	return function(){
	return arg;
	};
	}
	
	
	
	
	
	
	var emptyFunction=function emptyFunction(){};
	
	emptyFunction.thatReturns=makeEmptyFunction;
	emptyFunction.thatReturnsFalse=makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue=makeEmptyFunction(true);
	emptyFunction.thatReturnsNull=makeEmptyFunction(null);
	emptyFunction.thatReturnsThis=function(){
	return this;
	};
	emptyFunction.thatReturnsArgument=function(arg){
	return arg;
	};
	
	module.exports=emptyFunction;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var canDefineProperty=false;
	if(process.env.NODE_ENV!=='production'){
	try{
	
	Object.defineProperty({},'x',{get:function get(){}});
	canDefineProperty=true;
	}catch(x){
	
	}
	}
	
	module.exports=canDefineProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 14 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	var REACT_ELEMENT_TYPE=typeof Symbol==='function'&&Symbol['for']&&Symbol['for']('react.element')||0xeac7;
	
	module.exports=REACT_ELEMENT_TYPE;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	var _prodInvariant=__webpack_require__(7);
	
	var ReactCurrentOwner=__webpack_require__(10);
	var REACT_ELEMENT_TYPE=__webpack_require__(14);
	
	var getIteratorFn=__webpack_require__(16);
	var invariant=__webpack_require__(8);
	var KeyEscapeUtils=__webpack_require__(17);
	var warning=__webpack_require__(11);
	
	var SEPARATOR='.';
	var SUBSEPARATOR=':';
	
	
	
	
	
	
	
	
	
	
	
	
	var didWarnAboutMaps=false;
	
	
	
	
	
	
	
	
	function getComponentKey(component,index){
	
	
	if(component&&(typeof component==='undefined'?'undefined':_typeof(component))==='object'&&component.key!=null){
	
	return KeyEscapeUtils.escape(component.key);
	}
	
	return index.toString(36);
	}
	
	
	
	
	
	
	
	
	
	function traverseAllChildrenImpl(children,nameSoFar,callback,traverseContext){
	var type=typeof children==='undefined'?'undefined':_typeof(children);
	
	if(type==='undefined'||type==='boolean'){
	
	children=null;
	}
	
	if(children===null||type==='string'||type==='number'||
	
	
	type==='object'&&children.$$typeof===REACT_ELEMENT_TYPE){
	callback(traverseContext,children,
	
	
	nameSoFar===''?SEPARATOR+getComponentKey(children,0):nameSoFar);
	return 1;
	}
	
	var child;
	var nextName;
	var subtreeCount=0;
	var nextNamePrefix=nameSoFar===''?SEPARATOR:nameSoFar+SUBSEPARATOR;
	
	if(Array.isArray(children)){
	for(var i=0;i<children.length;i++){
	child=children[i];
	nextName=nextNamePrefix+getComponentKey(child,i);
	subtreeCount+=traverseAllChildrenImpl(child,nextName,callback,traverseContext);
	}
	}else{
	var iteratorFn=getIteratorFn(children);
	if(iteratorFn){
	var iterator=iteratorFn.call(children);
	var step;
	if(iteratorFn!==children.entries){
	var ii=0;
	while(!(step=iterator.next()).done){
	child=step.value;
	nextName=nextNamePrefix+getComponentKey(child,ii++);
	subtreeCount+=traverseAllChildrenImpl(child,nextName,callback,traverseContext);
	}
	}else{
	if(process.env.NODE_ENV!=='production'){
	var mapsAsChildrenAddendum='';
	if(ReactCurrentOwner.current){
	var mapsAsChildrenOwnerName=ReactCurrentOwner.current.getName();
	if(mapsAsChildrenOwnerName){
	mapsAsChildrenAddendum=' Check the render method of `'+mapsAsChildrenOwnerName+'`.';
	}
	}
	process.env.NODE_ENV!=='production'?warning(didWarnAboutMaps,'Using Maps as children is not yet fully supported. It is an '+'experimental feature that might be removed. Convert it to a '+'sequence / iterable of keyed ReactElements instead.%s',mapsAsChildrenAddendum):void 0;
	didWarnAboutMaps=true;
	}
	
	while(!(step=iterator.next()).done){
	var entry=step.value;
	if(entry){
	child=entry[1];
	nextName=nextNamePrefix+KeyEscapeUtils.escape(entry[0])+SUBSEPARATOR+getComponentKey(child,0);
	subtreeCount+=traverseAllChildrenImpl(child,nextName,callback,traverseContext);
	}
	}
	}
	}else if(type==='object'){
	var addendum='';
	if(process.env.NODE_ENV!=='production'){
	addendum=' If you meant to render a collection of children, use an array '+'instead or wrap the object using createFragment(object) from the '+'React add-ons.';
	if(children._isReactElement){
	addendum=' It looks like you\'re using an element created by a different '+'version of React. Make sure to use only one copy of React.';
	}
	if(ReactCurrentOwner.current){
	var name=ReactCurrentOwner.current.getName();
	if(name){
	addendum+=' Check the render method of `'+name+'`.';
	}
	}
	}
	var childrenString=String(children);
	 true?process.env.NODE_ENV!=='production'?invariant(false,'Objects are not valid as a React child (found: %s).%s',childrenString==='[object Object]'?'object with keys {'+Object.keys(children).join(', ')+'}':childrenString,addendum):_prodInvariant('31',childrenString==='[object Object]'?'object with keys {'+Object.keys(children).join(', ')+'}':childrenString,addendum):void 0;
	}
	}
	
	return subtreeCount;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function traverseAllChildren(children,callback,traverseContext){
	if(children==null){
	return 0;
	}
	
	return traverseAllChildrenImpl(children,'',callback,traverseContext);
	}
	
	module.exports=traverseAllChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 16 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	var ITERATOR_SYMBOL=typeof Symbol==='function'&&(typeof Symbol==='function'?Symbol.iterator:'@@iterator');
	var FAUX_ITERATOR_SYMBOL='@@iterator';
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function getIteratorFn(maybeIterable){
	var iteratorFn=maybeIterable&&(ITERATOR_SYMBOL&&maybeIterable[ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL]);
	if(typeof iteratorFn==='function'){
	return iteratorFn;
	}
	}
	
	module.exports=getIteratorFn;

/***/ },
/* 17 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	
	
	
	function escape(key){
	var escapeRegex=/[=:]/g;
	var escaperLookup={
	'=':'=0',
	':':'=2'};
	
	var escapedString=(''+key).replace(escapeRegex,function(match){
	return escaperLookup[match];
	});
	
	return'$'+escapedString;
	}
	
	
	
	
	
	
	
	function unescape(key){
	var unescapeRegex=/(=0|=2)/g;
	var unescaperLookup={
	'=0':'=',
	'=2':':'};
	
	var keySubstring=key[0]==='.'&&key[1]==='$'?key.substring(2):key.substring(1);
	
	return(''+keySubstring).replace(unescapeRegex,function(match){
	return unescaperLookup[match];
	});
	}
	
	var KeyEscapeUtils={
	escape:escape,
	unescape:unescape};
	
	
	module.exports=KeyEscapeUtils;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	var _prodInvariant=__webpack_require__(7);
	
	var ReactNoopUpdateQueue=__webpack_require__(19);
	
	var canDefineProperty=__webpack_require__(13);
	var emptyObject=__webpack_require__(20);
	var invariant=__webpack_require__(8);
	var warning=__webpack_require__(11);
	
	
	
	
	function ReactComponent(props,context,updater){
	this.props=props;
	this.context=context;
	this.refs=emptyObject;
	
	
	this.updater=updater||ReactNoopUpdateQueue;
	}
	
	ReactComponent.prototype.isReactComponent={};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	ReactComponent.prototype.setState=function(partialState,callback){
	!((typeof partialState==='undefined'?'undefined':_typeof(partialState))==='object'||typeof partialState==='function'||partialState==null)?process.env.NODE_ENV!=='production'?invariant(false,'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'):_prodInvariant('85'):void 0;
	this.updater.enqueueSetState(this,partialState);
	if(callback){
	this.updater.enqueueCallback(this,callback,'setState');
	}
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	ReactComponent.prototype.forceUpdate=function(callback){
	this.updater.enqueueForceUpdate(this);
	if(callback){
	this.updater.enqueueCallback(this,callback,'forceUpdate');
	}
	};
	
	
	
	
	
	
	if(process.env.NODE_ENV!=='production'){
	var deprecatedAPIs={
	isMounted:['isMounted','Instead, make sure to clean up subscriptions and pending requests in '+'componentWillUnmount to prevent memory leaks.'],
	replaceState:['replaceState','Refactor your code to use setState instead (see '+'https://github.com/facebook/react/issues/3236).']};
	
	var defineDeprecationWarning=function defineDeprecationWarning(methodName,info){
	if(canDefineProperty){
	Object.defineProperty(ReactComponent.prototype,methodName,{
	get:function get(){
	process.env.NODE_ENV!=='production'?warning(false,'%s(...) is deprecated in plain JavaScript React classes. %s',info[0],info[1]):void 0;
	return undefined;
	}});
	
	}
	};
	for(var fnName in deprecatedAPIs){
	if(deprecatedAPIs.hasOwnProperty(fnName)){
	defineDeprecationWarning(fnName,deprecatedAPIs[fnName]);
	}
	}
	}
	
	module.exports=ReactComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var warning=__webpack_require__(11);
	
	function warnNoop(publicInstance,callerName){
	if(process.env.NODE_ENV!=='production'){
	var constructor=publicInstance.constructor;
	process.env.NODE_ENV!=='production'?warning(false,'%s(...): Can only update a mounted or mounting component. '+'This usually means you called %s() on an unmounted component. '+'This is a no-op. Please check the code for the %s component.',callerName,callerName,constructor&&(constructor.displayName||constructor.name)||'ReactClass'):void 0;
	}
	}
	
	
	
	
	var ReactNoopUpdateQueue={
	
	
	
	
	
	
	
	
	isMounted:function isMounted(publicInstance){
	return false;
	},
	
	
	
	
	
	
	
	
	
	enqueueCallback:function enqueueCallback(publicInstance,callback){},
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	enqueueForceUpdate:function enqueueForceUpdate(publicInstance){
	warnNoop(publicInstance,'forceUpdate');
	},
	
	
	
	
	
	
	
	
	
	
	
	
	enqueueReplaceState:function enqueueReplaceState(publicInstance,completeState){
	warnNoop(publicInstance,'replaceState');
	},
	
	
	
	
	
	
	
	
	
	
	
	enqueueSetState:function enqueueSetState(publicInstance,partialState){
	warnNoop(publicInstance,'setState');
	}};
	
	
	module.exports=ReactNoopUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var emptyObject={};
	
	if(process.env.NODE_ENV!=='production'){
	Object.freeze(emptyObject);
	}
	
	module.exports=emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _assign=__webpack_require__(4);
	
	var ReactComponent=__webpack_require__(18);
	var ReactNoopUpdateQueue=__webpack_require__(19);
	
	var emptyObject=__webpack_require__(20);
	
	
	
	
	function ReactPureComponent(props,context,updater){
	
	this.props=props;
	this.context=context;
	this.refs=emptyObject;
	
	
	this.updater=updater||ReactNoopUpdateQueue;
	}
	
	function ComponentDummy(){}
	ComponentDummy.prototype=ReactComponent.prototype;
	ReactPureComponent.prototype=new ComponentDummy();
	ReactPureComponent.prototype.constructor=ReactPureComponent;
	
	_assign(ReactPureComponent.prototype,ReactComponent.prototype);
	ReactPureComponent.prototype.isPureReactComponent=true;
	
	module.exports=ReactPureComponent;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	var _prodInvariant=__webpack_require__(7),
	_assign=__webpack_require__(4);
	
	var ReactComponent=__webpack_require__(18);
	var ReactElement=__webpack_require__(9);
	var ReactPropTypeLocationNames=__webpack_require__(23);
	var ReactNoopUpdateQueue=__webpack_require__(19);
	
	var emptyObject=__webpack_require__(20);
	var invariant=__webpack_require__(8);
	var warning=__webpack_require__(11);
	
	var MIXINS_KEY='mixins';
	
	
	
	function identity(fn){
	return fn;
	}
	
	
	
	
	
	
	var injectedMixins=[];
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var ReactClassInterface={
	
	
	
	
	
	
	
	mixins:'DEFINE_MANY',
	
	
	
	
	
	
	
	
	statics:'DEFINE_MANY',
	
	
	
	
	
	
	
	propTypes:'DEFINE_MANY',
	
	
	
	
	
	
	
	contextTypes:'DEFINE_MANY',
	
	
	
	
	
	
	
	childContextTypes:'DEFINE_MANY',
	
	
	
	
	
	
	
	
	
	
	
	
	
	getDefaultProps:'DEFINE_MANY_MERGED',
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	getInitialState:'DEFINE_MANY_MERGED',
	
	
	
	
	
	getChildContext:'DEFINE_MANY_MERGED',
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	render:'DEFINE_ONCE',
	
	
	
	
	
	
	
	
	
	
	componentWillMount:'DEFINE_MANY',
	
	
	
	
	
	
	
	
	
	
	
	componentDidMount:'DEFINE_MANY',
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	componentWillReceiveProps:'DEFINE_MANY',
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	shouldComponentUpdate:'DEFINE_ONCE',
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	componentWillUpdate:'DEFINE_MANY',
	
	
	
	
	
	
	
	
	
	
	
	
	
	componentDidUpdate:'DEFINE_MANY',
	
	
	
	
	
	
	
	
	
	
	
	
	componentWillUnmount:'DEFINE_MANY',
	
	
	
	
	
	
	
	
	
	
	
	
	
	updateComponent:'OVERRIDE_BASE'};
	
	
	
	
	
	
	
	
	
	
	
	
	var RESERVED_SPEC_KEYS={
	displayName:function displayName(Constructor,_displayName){
	Constructor.displayName=_displayName;
	},
	mixins:function mixins(Constructor,_mixins){
	if(_mixins){
	for(var i=0;i<_mixins.length;i++){
	mixSpecIntoComponent(Constructor,_mixins[i]);
	}
	}
	},
	childContextTypes:function childContextTypes(Constructor,_childContextTypes){
	if(process.env.NODE_ENV!=='production'){
	validateTypeDef(Constructor,_childContextTypes,'childContext');
	}
	Constructor.childContextTypes=_assign({},Constructor.childContextTypes,_childContextTypes);
	},
	contextTypes:function contextTypes(Constructor,_contextTypes){
	if(process.env.NODE_ENV!=='production'){
	validateTypeDef(Constructor,_contextTypes,'context');
	}
	Constructor.contextTypes=_assign({},Constructor.contextTypes,_contextTypes);
	},
	
	
	
	
	getDefaultProps:function getDefaultProps(Constructor,_getDefaultProps){
	if(Constructor.getDefaultProps){
	Constructor.getDefaultProps=createMergedResultFunction(Constructor.getDefaultProps,_getDefaultProps);
	}else{
	Constructor.getDefaultProps=_getDefaultProps;
	}
	},
	propTypes:function propTypes(Constructor,_propTypes){
	if(process.env.NODE_ENV!=='production'){
	validateTypeDef(Constructor,_propTypes,'prop');
	}
	Constructor.propTypes=_assign({},Constructor.propTypes,_propTypes);
	},
	statics:function statics(Constructor,_statics){
	mixStaticSpecIntoComponent(Constructor,_statics);
	},
	autobind:function autobind(){}};
	
	function validateTypeDef(Constructor,typeDef,location){
	for(var propName in typeDef){
	if(typeDef.hasOwnProperty(propName)){
	
	
	process.env.NODE_ENV!=='production'?warning(typeof typeDef[propName]==='function','%s: %s type `%s` is invalid; it must be a function, usually from '+'React.PropTypes.',Constructor.displayName||'ReactClass',ReactPropTypeLocationNames[location],propName):void 0;
	}
	}
	}
	
	function validateMethodOverride(isAlreadyDefined,name){
	var specPolicy=ReactClassInterface.hasOwnProperty(name)?ReactClassInterface[name]:null;
	
	
	if(ReactClassMixin.hasOwnProperty(name)){
	!(specPolicy==='OVERRIDE_BASE')?process.env.NODE_ENV!=='production'?invariant(false,'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.',name):_prodInvariant('73',name):void 0;
	}
	
	
	if(isAlreadyDefined){
	!(specPolicy==='DEFINE_MANY'||specPolicy==='DEFINE_MANY_MERGED')?process.env.NODE_ENV!=='production'?invariant(false,'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',name):_prodInvariant('74',name):void 0;
	}
	}
	
	
	
	
	
	function mixSpecIntoComponent(Constructor,spec){
	if(!spec){
	if(process.env.NODE_ENV!=='production'){
	var typeofSpec=typeof spec==='undefined'?'undefined':_typeof(spec);
	var isMixinValid=typeofSpec==='object'&&spec!==null;
	
	process.env.NODE_ENV!=='production'?warning(isMixinValid,'%s: You\'re attempting to include a mixin that is either null '+'or not an object. Check the mixins included by the component, '+'as well as any mixins they include themselves. '+'Expected object but got %s.',Constructor.displayName||'ReactClass',spec===null?null:typeofSpec):void 0;
	}
	
	return;
	}
	
	!(typeof spec!=='function')?process.env.NODE_ENV!=='production'?invariant(false,'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.'):_prodInvariant('75'):void 0;
	!!ReactElement.isValidElement(spec)?process.env.NODE_ENV!=='production'?invariant(false,'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.'):_prodInvariant('76'):void 0;
	
	var proto=Constructor.prototype;
	var autoBindPairs=proto.__reactAutoBindPairs;
	
	
	
	
	if(spec.hasOwnProperty(MIXINS_KEY)){
	RESERVED_SPEC_KEYS.mixins(Constructor,spec.mixins);
	}
	
	for(var name in spec){
	if(!spec.hasOwnProperty(name)){
	continue;
	}
	
	if(name===MIXINS_KEY){
	
	continue;
	}
	
	var property=spec[name];
	var isAlreadyDefined=proto.hasOwnProperty(name);
	validateMethodOverride(isAlreadyDefined,name);
	
	if(RESERVED_SPEC_KEYS.hasOwnProperty(name)){
	RESERVED_SPEC_KEYS[name](Constructor,property);
	}else{
	
	
	
	
	var isReactClassMethod=ReactClassInterface.hasOwnProperty(name);
	var isFunction=typeof property==='function';
	var shouldAutoBind=isFunction&&!isReactClassMethod&&!isAlreadyDefined&&spec.autobind!==false;
	
	if(shouldAutoBind){
	autoBindPairs.push(name,property);
	proto[name]=property;
	}else{
	if(isAlreadyDefined){
	var specPolicy=ReactClassInterface[name];
	
	
	!(isReactClassMethod&&(specPolicy==='DEFINE_MANY_MERGED'||specPolicy==='DEFINE_MANY'))?process.env.NODE_ENV!=='production'?invariant(false,'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.',specPolicy,name):_prodInvariant('77',specPolicy,name):void 0;
	
	
	
	if(specPolicy==='DEFINE_MANY_MERGED'){
	proto[name]=createMergedResultFunction(proto[name],property);
	}else if(specPolicy==='DEFINE_MANY'){
	proto[name]=createChainedFunction(proto[name],property);
	}
	}else{
	proto[name]=property;
	if(process.env.NODE_ENV!=='production'){
	
	
	if(typeof property==='function'&&spec.displayName){
	proto[name].displayName=spec.displayName+'_'+name;
	}
	}
	}
	}
	}
	}
	}
	
	function mixStaticSpecIntoComponent(Constructor,statics){
	if(!statics){
	return;
	}
	for(var name in statics){
	var property=statics[name];
	if(!statics.hasOwnProperty(name)){
	continue;
	}
	
	var isReserved=name in RESERVED_SPEC_KEYS;
	!!isReserved?process.env.NODE_ENV!=='production'?invariant(false,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',name):_prodInvariant('78',name):void 0;
	
	var isInherited=name in Constructor;
	!!isInherited?process.env.NODE_ENV!=='production'?invariant(false,'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',name):_prodInvariant('79',name):void 0;
	Constructor[name]=property;
	}
	}
	
	
	
	
	
	
	
	
	function mergeIntoWithNoDuplicateKeys(one,two){
	!(one&&two&&(typeof one==='undefined'?'undefined':_typeof(one))==='object'&&(typeof two==='undefined'?'undefined':_typeof(two))==='object')?process.env.NODE_ENV!=='production'?invariant(false,'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'):_prodInvariant('80'):void 0;
	
	for(var key in two){
	if(two.hasOwnProperty(key)){
	!(one[key]===undefined)?process.env.NODE_ENV!=='production'?invariant(false,'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.',key):_prodInvariant('81',key):void 0;
	one[key]=two[key];
	}
	}
	return one;
	}
	
	
	
	
	
	
	
	
	
	function createMergedResultFunction(one,two){
	return function mergedResult(){
	var a=one.apply(this,arguments);
	var b=two.apply(this,arguments);
	if(a==null){
	return b;
	}else if(b==null){
	return a;
	}
	var c={};
	mergeIntoWithNoDuplicateKeys(c,a);
	mergeIntoWithNoDuplicateKeys(c,b);
	return c;
	};
	}
	
	
	
	
	
	
	
	
	
	function createChainedFunction(one,two){
	return function chainedFunction(){
	one.apply(this,arguments);
	two.apply(this,arguments);
	};
	}
	
	
	
	
	
	
	
	
	function bindAutoBindMethod(component,method){
	var boundMethod=method.bind(component);
	if(process.env.NODE_ENV!=='production'){
	boundMethod.__reactBoundContext=component;
	boundMethod.__reactBoundMethod=method;
	boundMethod.__reactBoundArguments=null;
	var componentName=component.constructor.displayName;
	var _bind=boundMethod.bind;
	boundMethod.bind=function(newThis){
	for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){
	args[_key-1]=arguments[_key];
	}
	
	
	
	
	if(newThis!==component&&newThis!==null){
	process.env.NODE_ENV!=='production'?warning(false,'bind(): React component methods may only be bound to the '+'component instance. See %s',componentName):void 0;
	}else if(!args.length){
	process.env.NODE_ENV!=='production'?warning(false,'bind(): You are binding a component method to the component. '+'React does this for you automatically in a high-performance '+'way, so you can safely remove this call. See %s',componentName):void 0;
	return boundMethod;
	}
	var reboundMethod=_bind.apply(boundMethod,arguments);
	reboundMethod.__reactBoundContext=component;
	reboundMethod.__reactBoundMethod=method;
	reboundMethod.__reactBoundArguments=args;
	return reboundMethod;
	};
	}
	return boundMethod;
	}
	
	
	
	
	
	
	function bindAutoBindMethods(component){
	var pairs=component.__reactAutoBindPairs;
	for(var i=0;i<pairs.length;i+=2){
	var autoBindKey=pairs[i];
	var method=pairs[i+1];
	component[autoBindKey]=bindAutoBindMethod(component,method);
	}
	}
	
	
	
	
	
	var ReactClassMixin={
	
	
	
	
	
	replaceState:function replaceState(newState,callback){
	this.updater.enqueueReplaceState(this,newState);
	if(callback){
	this.updater.enqueueCallback(this,callback,'replaceState');
	}
	},
	
	
	
	
	
	
	
	isMounted:function isMounted(){
	return this.updater.isMounted(this);
	}};
	
	
	var ReactClassComponent=function ReactClassComponent(){};
	_assign(ReactClassComponent.prototype,ReactComponent.prototype,ReactClassMixin);
	
	
	
	
	
	
	var ReactClass={
	
	
	
	
	
	
	
	
	
	createClass:function createClass(spec){
	
	
	
	var Constructor=identity(function(props,context,updater){
	
	
	
	if(process.env.NODE_ENV!=='production'){
	process.env.NODE_ENV!=='production'?warning(this instanceof Constructor,'Something is calling a React component directly. Use a factory or '+'JSX instead. See: https://fb.me/react-legacyfactory'):void 0;
	}
	
	
	if(this.__reactAutoBindPairs.length){
	bindAutoBindMethods(this);
	}
	
	this.props=props;
	this.context=context;
	this.refs=emptyObject;
	this.updater=updater||ReactNoopUpdateQueue;
	
	this.state=null;
	
	
	
	
	var initialState=this.getInitialState?this.getInitialState():null;
	if(process.env.NODE_ENV!=='production'){
	
	if(initialState===undefined&&this.getInitialState._isMockFunction){
	
	
	initialState=null;
	}
	}
	!((typeof initialState==='undefined'?'undefined':_typeof(initialState))==='object'&&!Array.isArray(initialState))?process.env.NODE_ENV!=='production'?invariant(false,'%s.getInitialState(): must return an object or null',Constructor.displayName||'ReactCompositeComponent'):_prodInvariant('82',Constructor.displayName||'ReactCompositeComponent'):void 0;
	
	this.state=initialState;
	});
	Constructor.prototype=new ReactClassComponent();
	Constructor.prototype.constructor=Constructor;
	Constructor.prototype.__reactAutoBindPairs=[];
	
	injectedMixins.forEach(mixSpecIntoComponent.bind(null,Constructor));
	
	mixSpecIntoComponent(Constructor,spec);
	
	
	if(Constructor.getDefaultProps){
	Constructor.defaultProps=Constructor.getDefaultProps();
	}
	
	if(process.env.NODE_ENV!=='production'){
	
	
	
	
	if(Constructor.getDefaultProps){
	Constructor.getDefaultProps.isReactClassApproved={};
	}
	if(Constructor.prototype.getInitialState){
	Constructor.prototype.getInitialState.isReactClassApproved={};
	}
	}
	
	!Constructor.prototype.render?process.env.NODE_ENV!=='production'?invariant(false,'createClass(...): Class specification must implement a `render` method.'):_prodInvariant('83'):void 0;
	
	if(process.env.NODE_ENV!=='production'){
	process.env.NODE_ENV!=='production'?warning(!Constructor.prototype.componentShouldUpdate,'%s has a method called '+'componentShouldUpdate(). Did you mean shouldComponentUpdate()? '+'The name is phrased as a question because the function is '+'expected to return a value.',spec.displayName||'A component'):void 0;
	process.env.NODE_ENV!=='production'?warning(!Constructor.prototype.componentWillRecieveProps,'%s has a method called '+'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',spec.displayName||'A component'):void 0;
	}
	
	
	for(var methodName in ReactClassInterface){
	if(!Constructor.prototype[methodName]){
	Constructor.prototype[methodName]=null;
	}
	}
	
	return Constructor;
	},
	
	injection:{
	injectMixin:function injectMixin(mixin){
	injectedMixins.push(mixin);
	}}};
	
	
	
	
	module.exports=ReactClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ReactPropTypeLocationNames={};
	
	if(process.env.NODE_ENV!=='production'){
	ReactPropTypeLocationNames={
	prop:'prop',
	context:'context',
	childContext:'child context'};
	
	}
	
	module.exports=ReactPropTypeLocationNames;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ReactElement=__webpack_require__(9);
	
	
	
	
	
	
	var createDOMFactory=ReactElement.createFactory;
	if(process.env.NODE_ENV!=='production'){
	var ReactElementValidator=__webpack_require__(25);
	createDOMFactory=ReactElementValidator.createFactory;
	}
	
	
	
	
	
	
	
	var ReactDOMFactories={
	a:createDOMFactory('a'),
	abbr:createDOMFactory('abbr'),
	address:createDOMFactory('address'),
	area:createDOMFactory('area'),
	article:createDOMFactory('article'),
	aside:createDOMFactory('aside'),
	audio:createDOMFactory('audio'),
	b:createDOMFactory('b'),
	base:createDOMFactory('base'),
	bdi:createDOMFactory('bdi'),
	bdo:createDOMFactory('bdo'),
	big:createDOMFactory('big'),
	blockquote:createDOMFactory('blockquote'),
	body:createDOMFactory('body'),
	br:createDOMFactory('br'),
	button:createDOMFactory('button'),
	canvas:createDOMFactory('canvas'),
	caption:createDOMFactory('caption'),
	cite:createDOMFactory('cite'),
	code:createDOMFactory('code'),
	col:createDOMFactory('col'),
	colgroup:createDOMFactory('colgroup'),
	data:createDOMFactory('data'),
	datalist:createDOMFactory('datalist'),
	dd:createDOMFactory('dd'),
	del:createDOMFactory('del'),
	details:createDOMFactory('details'),
	dfn:createDOMFactory('dfn'),
	dialog:createDOMFactory('dialog'),
	div:createDOMFactory('div'),
	dl:createDOMFactory('dl'),
	dt:createDOMFactory('dt'),
	em:createDOMFactory('em'),
	embed:createDOMFactory('embed'),
	fieldset:createDOMFactory('fieldset'),
	figcaption:createDOMFactory('figcaption'),
	figure:createDOMFactory('figure'),
	footer:createDOMFactory('footer'),
	form:createDOMFactory('form'),
	h1:createDOMFactory('h1'),
	h2:createDOMFactory('h2'),
	h3:createDOMFactory('h3'),
	h4:createDOMFactory('h4'),
	h5:createDOMFactory('h5'),
	h6:createDOMFactory('h6'),
	head:createDOMFactory('head'),
	header:createDOMFactory('header'),
	hgroup:createDOMFactory('hgroup'),
	hr:createDOMFactory('hr'),
	html:createDOMFactory('html'),
	i:createDOMFactory('i'),
	iframe:createDOMFactory('iframe'),
	img:createDOMFactory('img'),
	input:createDOMFactory('input'),
	ins:createDOMFactory('ins'),
	kbd:createDOMFactory('kbd'),
	keygen:createDOMFactory('keygen'),
	label:createDOMFactory('label'),
	legend:createDOMFactory('legend'),
	li:createDOMFactory('li'),
	link:createDOMFactory('link'),
	main:createDOMFactory('main'),
	map:createDOMFactory('map'),
	mark:createDOMFactory('mark'),
	menu:createDOMFactory('menu'),
	menuitem:createDOMFactory('menuitem'),
	meta:createDOMFactory('meta'),
	meter:createDOMFactory('meter'),
	nav:createDOMFactory('nav'),
	noscript:createDOMFactory('noscript'),
	object:createDOMFactory('object'),
	ol:createDOMFactory('ol'),
	optgroup:createDOMFactory('optgroup'),
	option:createDOMFactory('option'),
	output:createDOMFactory('output'),
	p:createDOMFactory('p'),
	param:createDOMFactory('param'),
	picture:createDOMFactory('picture'),
	pre:createDOMFactory('pre'),
	progress:createDOMFactory('progress'),
	q:createDOMFactory('q'),
	rp:createDOMFactory('rp'),
	rt:createDOMFactory('rt'),
	ruby:createDOMFactory('ruby'),
	s:createDOMFactory('s'),
	samp:createDOMFactory('samp'),
	script:createDOMFactory('script'),
	section:createDOMFactory('section'),
	select:createDOMFactory('select'),
	small:createDOMFactory('small'),
	source:createDOMFactory('source'),
	span:createDOMFactory('span'),
	strong:createDOMFactory('strong'),
	style:createDOMFactory('style'),
	sub:createDOMFactory('sub'),
	summary:createDOMFactory('summary'),
	sup:createDOMFactory('sup'),
	table:createDOMFactory('table'),
	tbody:createDOMFactory('tbody'),
	td:createDOMFactory('td'),
	textarea:createDOMFactory('textarea'),
	tfoot:createDOMFactory('tfoot'),
	th:createDOMFactory('th'),
	thead:createDOMFactory('thead'),
	time:createDOMFactory('time'),
	title:createDOMFactory('title'),
	tr:createDOMFactory('tr'),
	track:createDOMFactory('track'),
	u:createDOMFactory('u'),
	ul:createDOMFactory('ul'),
	'var':createDOMFactory('var'),
	video:createDOMFactory('video'),
	wbr:createDOMFactory('wbr'),
	
	
	circle:createDOMFactory('circle'),
	clipPath:createDOMFactory('clipPath'),
	defs:createDOMFactory('defs'),
	ellipse:createDOMFactory('ellipse'),
	g:createDOMFactory('g'),
	image:createDOMFactory('image'),
	line:createDOMFactory('line'),
	linearGradient:createDOMFactory('linearGradient'),
	mask:createDOMFactory('mask'),
	path:createDOMFactory('path'),
	pattern:createDOMFactory('pattern'),
	polygon:createDOMFactory('polygon'),
	polyline:createDOMFactory('polyline'),
	radialGradient:createDOMFactory('radialGradient'),
	rect:createDOMFactory('rect'),
	stop:createDOMFactory('stop'),
	svg:createDOMFactory('svg'),
	text:createDOMFactory('text'),
	tspan:createDOMFactory('tspan')};
	
	
	module.exports=ReactDOMFactories;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	var ReactCurrentOwner=__webpack_require__(10);
	var ReactComponentTreeHook=__webpack_require__(26);
	var ReactElement=__webpack_require__(9);
	
	var checkReactTypeSpec=__webpack_require__(27);
	
	var canDefineProperty=__webpack_require__(13);
	var getIteratorFn=__webpack_require__(16);
	var warning=__webpack_require__(11);
	
	function getDeclarationErrorAddendum(){
	if(ReactCurrentOwner.current){
	var name=ReactCurrentOwner.current.getName();
	if(name){
	return' Check the render method of `'+name+'`.';
	}
	}
	return'';
	}
	
	
	
	
	
	
	var ownerHasKeyUseWarning={};
	
	function getCurrentComponentErrorInfo(parentType){
	var info=getDeclarationErrorAddendum();
	
	if(!info){
	var parentName=typeof parentType==='string'?parentType:parentType.displayName||parentType.name;
	if(parentName){
	info=' Check the top-level render call using <'+parentName+'>.';
	}
	}
	return info;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	function validateExplicitKey(element,parentType){
	if(!element._store||element._store.validated||element.key!=null){
	return;
	}
	element._store.validated=true;
	
	var memoizer=ownerHasKeyUseWarning.uniqueKey||(ownerHasKeyUseWarning.uniqueKey={});
	
	var currentComponentErrorInfo=getCurrentComponentErrorInfo(parentType);
	if(memoizer[currentComponentErrorInfo]){
	return;
	}
	memoizer[currentComponentErrorInfo]=true;
	
	
	
	
	var childOwner='';
	if(element&&element._owner&&element._owner!==ReactCurrentOwner.current){
	
	childOwner=' It was passed a child from '+element._owner.getName()+'.';
	}
	
	process.env.NODE_ENV!=='production'?warning(false,'Each child in an array or iterator should have a unique "key" prop.'+'%s%s See https://fb.me/react-warning-keys for more information.%s',currentComponentErrorInfo,childOwner,ReactComponentTreeHook.getCurrentStackAddendum(element)):void 0;
	}
	
	
	
	
	
	
	
	
	
	
	function validateChildKeys(node,parentType){
	if((typeof node==='undefined'?'undefined':_typeof(node))!=='object'){
	return;
	}
	if(Array.isArray(node)){
	for(var i=0;i<node.length;i++){
	var child=node[i];
	if(ReactElement.isValidElement(child)){
	validateExplicitKey(child,parentType);
	}
	}
	}else if(ReactElement.isValidElement(node)){
	
	if(node._store){
	node._store.validated=true;
	}
	}else if(node){
	var iteratorFn=getIteratorFn(node);
	
	if(iteratorFn){
	if(iteratorFn!==node.entries){
	var iterator=iteratorFn.call(node);
	var step;
	while(!(step=iterator.next()).done){
	if(ReactElement.isValidElement(step.value)){
	validateExplicitKey(step.value,parentType);
	}
	}
	}
	}
	}
	}
	
	
	
	
	
	
	
	function validatePropTypes(element){
	var componentClass=element.type;
	if(typeof componentClass!=='function'){
	return;
	}
	var name=componentClass.displayName||componentClass.name;
	if(componentClass.propTypes){
	checkReactTypeSpec(componentClass.propTypes,element.props,'prop',name,element,null);
	}
	if(typeof componentClass.getDefaultProps==='function'){
	process.env.NODE_ENV!=='production'?warning(componentClass.getDefaultProps.isReactClassApproved,'getDefaultProps is only used on classic React.createClass '+'definitions. Use a static property named `defaultProps` instead.'):void 0;
	}
	}
	
	var ReactElementValidator={
	
	createElement:function createElement(type,props,children){
	var validType=typeof type==='string'||typeof type==='function';
	
	
	if(!validType){
	process.env.NODE_ENV!=='production'?warning(false,'React.createElement: type should not be null, undefined, boolean, or '+'number. It should be a string (for DOM elements) or a ReactClass '+'(for composite components).%s',getDeclarationErrorAddendum()):void 0;
	}
	
	var element=ReactElement.createElement.apply(this,arguments);
	
	
	
	if(element==null){
	return element;
	}
	
	
	
	
	
	
	if(validType){
	for(var i=2;i<arguments.length;i++){
	validateChildKeys(arguments[i],type);
	}
	}
	
	validatePropTypes(element);
	
	return element;
	},
	
	createFactory:function createFactory(type){
	var validatedFactory=ReactElementValidator.createElement.bind(null,type);
	
	validatedFactory.type=type;
	
	if(process.env.NODE_ENV!=='production'){
	if(canDefineProperty){
	Object.defineProperty(validatedFactory,'type',{
	enumerable:false,
	get:function get(){
	process.env.NODE_ENV!=='production'?warning(false,'Factory.type is deprecated. Access the class directly '+'before passing it to createFactory.'):void 0;
	Object.defineProperty(this,'type',{
	value:type});
	
	return type;
	}});
	
	}
	}
	
	return validatedFactory;
	},
	
	cloneElement:function cloneElement(element,props,children){
	var newElement=ReactElement.cloneElement.apply(this,arguments);
	for(var i=2;i<arguments.length;i++){
	validateChildKeys(arguments[i],newElement.type);
	}
	validatePropTypes(newElement);
	return newElement;
	}};
	
	
	
	module.exports=ReactElementValidator;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	var _prodInvariant=__webpack_require__(7);
	
	var ReactCurrentOwner=__webpack_require__(10);
	
	var invariant=__webpack_require__(8);
	var warning=__webpack_require__(11);
	
	function isNative(fn){
	
	var funcToString=Function.prototype.toString;
	var hasOwnProperty=Object.prototype.hasOwnProperty;
	var reIsNative=RegExp('^'+funcToString.
	
	call(hasOwnProperty).
	
	replace(/[\\^$.*+?()[\]{}|]/g,'\\$&').
	
	replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');
	try{
	var source=funcToString.call(fn);
	return reIsNative.test(source);
	}catch(err){
	return false;
	}
	}
	
	var canUseCollections=
	
	typeof Array.from==='function'&&
	
	typeof Map==='function'&&isNative(Map)&&
	
	Map.prototype!=null&&typeof Map.prototype.keys==='function'&&isNative(Map.prototype.keys)&&
	
	typeof Set==='function'&&isNative(Set)&&
	
	Set.prototype!=null&&typeof Set.prototype.keys==='function'&&isNative(Set.prototype.keys);
	
	var setItem;
	var getItem;
	var removeItem;
	var getItemIDs;
	var addRoot;
	var removeRoot;
	var getRootIDs;
	
	if(canUseCollections){
	var itemMap=new Map();
	var rootIDSet=new Set();
	
	setItem=function setItem(id,item){
	itemMap.set(id,item);
	};
	getItem=function getItem(id){
	return itemMap.get(id);
	};
	removeItem=function removeItem(id){
	itemMap['delete'](id);
	};
	getItemIDs=function getItemIDs(){
	return Array.from(itemMap.keys());
	};
	
	addRoot=function addRoot(id){
	rootIDSet.add(id);
	};
	removeRoot=function removeRoot(id){
	rootIDSet['delete'](id);
	};
	getRootIDs=function getRootIDs(){
	return Array.from(rootIDSet.keys());
	};
	}else{
	var itemByKey={};
	var rootByKey={};
	
	
	
	var getKeyFromID=function getKeyFromID(id){
	return'.'+id;
	};
	var getIDFromKey=function getIDFromKey(key){
	return parseInt(key.substr(1),10);
	};
	
	setItem=function setItem(id,item){
	var key=getKeyFromID(id);
	itemByKey[key]=item;
	};
	getItem=function getItem(id){
	var key=getKeyFromID(id);
	return itemByKey[key];
	};
	removeItem=function removeItem(id){
	var key=getKeyFromID(id);
	delete itemByKey[key];
	};
	getItemIDs=function getItemIDs(){
	return Object.keys(itemByKey).map(getIDFromKey);
	};
	
	addRoot=function addRoot(id){
	var key=getKeyFromID(id);
	rootByKey[key]=true;
	};
	removeRoot=function removeRoot(id){
	var key=getKeyFromID(id);
	delete rootByKey[key];
	};
	getRootIDs=function getRootIDs(){
	return Object.keys(rootByKey).map(getIDFromKey);
	};
	}
	
	var unmountedIDs=[];
	
	function purgeDeep(id){
	var item=getItem(id);
	if(item){
	var childIDs=item.childIDs;
	
	removeItem(id);
	childIDs.forEach(purgeDeep);
	}
	}
	
	function describeComponentFrame(name,source,ownerName){
	return'\n    in '+(name||'Unknown')+(source?' (at '+source.fileName.replace(/^.*[\\\/]/,'')+':'+source.lineNumber+')':ownerName?' (created by '+ownerName+')':'');
	}
	
	function _getDisplayName(element){
	if(element==null){
	return'#empty';
	}else if(typeof element==='string'||typeof element==='number'){
	return'#text';
	}else if(typeof element.type==='string'){
	return element.type;
	}else{
	return element.type.displayName||element.type.name||'Unknown';
	}
	}
	
	function describeID(id){
	var name=ReactComponentTreeHook.getDisplayName(id);
	var element=ReactComponentTreeHook.getElement(id);
	var ownerID=ReactComponentTreeHook.getOwnerID(id);
	var ownerName;
	if(ownerID){
	ownerName=ReactComponentTreeHook.getDisplayName(ownerID);
	}
	process.env.NODE_ENV!=='production'?warning(element,'ReactComponentTreeHook: Missing React element for debugID %s when '+'building stack',id):void 0;
	return describeComponentFrame(name,element&&element._source,ownerName);
	}
	
	var ReactComponentTreeHook={
	onSetChildren:function onSetChildren(id,nextChildIDs){
	var item=getItem(id);
	!item?process.env.NODE_ENV!=='production'?invariant(false,'Item must have been set'):_prodInvariant('144'):void 0;
	item.childIDs=nextChildIDs;
	
	for(var i=0;i<nextChildIDs.length;i++){
	var nextChildID=nextChildIDs[i];
	var nextChild=getItem(nextChildID);
	!nextChild?process.env.NODE_ENV!=='production'?invariant(false,'Expected hook events to fire for the child before its parent includes it in onSetChildren().'):_prodInvariant('140'):void 0;
	!(nextChild.childIDs!=null||_typeof(nextChild.element)!=='object'||nextChild.element==null)?process.env.NODE_ENV!=='production'?invariant(false,'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().'):_prodInvariant('141'):void 0;
	!nextChild.isMounted?process.env.NODE_ENV!=='production'?invariant(false,'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().'):_prodInvariant('71'):void 0;
	if(nextChild.parentID==null){
	nextChild.parentID=id;
	
	
	
	}
	!(nextChild.parentID===id)?process.env.NODE_ENV!=='production'?invariant(false,'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).',nextChildID,nextChild.parentID,id):_prodInvariant('142',nextChildID,nextChild.parentID,id):void 0;
	}
	},
	onBeforeMountComponent:function onBeforeMountComponent(id,element,parentID){
	var item={
	element:element,
	parentID:parentID,
	text:null,
	childIDs:[],
	isMounted:false,
	updateCount:0};
	
	setItem(id,item);
	},
	onBeforeUpdateComponent:function onBeforeUpdateComponent(id,element){
	var item=getItem(id);
	if(!item||!item.isMounted){
	
	
	return;
	}
	item.element=element;
	},
	onMountComponent:function onMountComponent(id){
	var item=getItem(id);
	!item?process.env.NODE_ENV!=='production'?invariant(false,'Item must have been set'):_prodInvariant('144'):void 0;
	item.isMounted=true;
	var isRoot=item.parentID===0;
	if(isRoot){
	addRoot(id);
	}
	},
	onUpdateComponent:function onUpdateComponent(id){
	var item=getItem(id);
	if(!item||!item.isMounted){
	
	
	return;
	}
	item.updateCount++;
	},
	onUnmountComponent:function onUnmountComponent(id){
	var item=getItem(id);
	if(item){
	
	
	
	
	
	item.isMounted=false;
	var isRoot=item.parentID===0;
	if(isRoot){
	removeRoot(id);
	}
	}
	unmountedIDs.push(id);
	},
	purgeUnmountedComponents:function purgeUnmountedComponents(){
	if(ReactComponentTreeHook._preventPurging){
	
	return;
	}
	
	for(var i=0;i<unmountedIDs.length;i++){
	var id=unmountedIDs[i];
	purgeDeep(id);
	}
	unmountedIDs.length=0;
	},
	isMounted:function isMounted(id){
	var item=getItem(id);
	return item?item.isMounted:false;
	},
	getCurrentStackAddendum:function getCurrentStackAddendum(topElement){
	var info='';
	if(topElement){
	var name=_getDisplayName(topElement);
	var owner=topElement._owner;
	info+=describeComponentFrame(name,topElement._source,owner&&owner.getName());
	}
	
	var currentOwner=ReactCurrentOwner.current;
	var id=currentOwner&&currentOwner._debugID;
	
	info+=ReactComponentTreeHook.getStackAddendumByID(id);
	return info;
	},
	getStackAddendumByID:function getStackAddendumByID(id){
	var info='';
	while(id){
	info+=describeID(id);
	id=ReactComponentTreeHook.getParentID(id);
	}
	return info;
	},
	getChildIDs:function getChildIDs(id){
	var item=getItem(id);
	return item?item.childIDs:[];
	},
	getDisplayName:function getDisplayName(id){
	var element=ReactComponentTreeHook.getElement(id);
	if(!element){
	return null;
	}
	return _getDisplayName(element);
	},
	getElement:function getElement(id){
	var item=getItem(id);
	return item?item.element:null;
	},
	getOwnerID:function getOwnerID(id){
	var element=ReactComponentTreeHook.getElement(id);
	if(!element||!element._owner){
	return null;
	}
	return element._owner._debugID;
	},
	getParentID:function getParentID(id){
	var item=getItem(id);
	return item?item.parentID:null;
	},
	getSource:function getSource(id){
	var item=getItem(id);
	var element=item?item.element:null;
	var source=element!=null?element._source:null;
	return source;
	},
	getText:function getText(id){
	var element=ReactComponentTreeHook.getElement(id);
	if(typeof element==='string'){
	return element;
	}else if(typeof element==='number'){
	return''+element;
	}else{
	return null;
	}
	},
	getUpdateCount:function getUpdateCount(id){
	var item=getItem(id);
	return item?item.updateCount:0;
	},
	
	
	getRootIDs:getRootIDs,
	getRegisteredIDs:getItemIDs};
	
	
	module.exports=ReactComponentTreeHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	var _prodInvariant=__webpack_require__(7);
	
	var ReactPropTypeLocationNames=__webpack_require__(23);
	var ReactPropTypesSecret=__webpack_require__(28);
	
	var invariant=__webpack_require__(8);
	var warning=__webpack_require__(11);
	
	var ReactComponentTreeHook;
	
	if(typeof process!=='undefined'&&process.env&&process.env.NODE_ENV==='test'){
	
	
	
	
	
	ReactComponentTreeHook=__webpack_require__(26);
	}
	
	var loggedTypeFailures={};
	
	
	
	
	
	
	
	
	
	
	
	
	
	function checkReactTypeSpec(typeSpecs,values,location,componentName,element,debugID){
	for(var typeSpecName in typeSpecs){
	if(typeSpecs.hasOwnProperty(typeSpecName)){
	var error;
	
	
	
	try{
	
	
	!(typeof typeSpecs[typeSpecName]==='function')?process.env.NODE_ENV!=='production'?invariant(false,'%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.',componentName||'React class',ReactPropTypeLocationNames[location],typeSpecName):_prodInvariant('84',componentName||'React class',ReactPropTypeLocationNames[location],typeSpecName):void 0;
	error=typeSpecs[typeSpecName](values,typeSpecName,componentName,location,null,ReactPropTypesSecret);
	}catch(ex){
	error=ex;
	}
	process.env.NODE_ENV!=='production'?warning(!error||error instanceof Error,'%s: type specification of %s `%s` is invalid; the type checker '+'function must return `null` or an `Error` but returned a %s. '+'You may have forgotten to pass an argument to the type checker '+'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and '+'shape all require an argument).',componentName||'React class',ReactPropTypeLocationNames[location],typeSpecName,typeof error==='undefined'?'undefined':_typeof(error)):void 0;
	if(error instanceof Error&&!(error.message in loggedTypeFailures)){
	
	
	loggedTypeFailures[error.message]=true;
	
	var componentStackInfo='';
	
	if(process.env.NODE_ENV!=='production'){
	if(!ReactComponentTreeHook){
	ReactComponentTreeHook=__webpack_require__(26);
	}
	if(debugID!==null){
	componentStackInfo=ReactComponentTreeHook.getStackAddendumByID(debugID);
	}else if(element!==null){
	componentStackInfo=ReactComponentTreeHook.getCurrentStackAddendum(element);
	}
	}
	
	process.env.NODE_ENV!=='production'?warning(false,'Failed %s type: %s%s',location,error.message,componentStackInfo):void 0;
	}
	}
	}
	}
	
	module.exports=checkReactTypeSpec;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 28 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ReactPropTypesSecret='SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports=ReactPropTypesSecret;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	var ReactElement=__webpack_require__(9);
	var ReactPropTypeLocationNames=__webpack_require__(23);
	var ReactPropTypesSecret=__webpack_require__(28);
	
	var emptyFunction=__webpack_require__(12);
	var getIteratorFn=__webpack_require__(16);
	var warning=__webpack_require__(11);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var ANONYMOUS='<<anonymous>>';
	
	var ReactPropTypes={
	array:createPrimitiveTypeChecker('array'),
	bool:createPrimitiveTypeChecker('boolean'),
	func:createPrimitiveTypeChecker('function'),
	number:createPrimitiveTypeChecker('number'),
	object:createPrimitiveTypeChecker('object'),
	string:createPrimitiveTypeChecker('string'),
	symbol:createPrimitiveTypeChecker('symbol'),
	
	any:createAnyTypeChecker(),
	arrayOf:createArrayOfTypeChecker,
	element:createElementTypeChecker(),
	instanceOf:createInstanceTypeChecker,
	node:createNodeChecker(),
	objectOf:createObjectOfTypeChecker,
	oneOf:createEnumTypeChecker,
	oneOfType:createUnionTypeChecker,
	shape:createShapeTypeChecker};
	
	
	
	
	
	
	
	function is(x,y){
	
	if(x===y){
	
	
	return x!==0||1/x===1/y;
	}else{
	
	return x!==x&&y!==y;
	}
	}
	
	
	
	
	
	
	
	
	
	function PropTypeError(message){
	this.message=message;
	this.stack='';
	}
	
	PropTypeError.prototype=Error.prototype;
	
	function createChainableTypeChecker(validate){
	if(process.env.NODE_ENV!=='production'){
	var manualPropTypeCallCache={};
	}
	function checkType(isRequired,props,propName,componentName,location,propFullName,secret){
	componentName=componentName||ANONYMOUS;
	propFullName=propFullName||propName;
	if(process.env.NODE_ENV!=='production'){
	if(secret!==ReactPropTypesSecret&&typeof console!=='undefined'){
	var cacheKey=componentName+':'+propName;
	if(!manualPropTypeCallCache[cacheKey]){
	process.env.NODE_ENV!=='production'?warning(false,'You are manually calling a React.PropTypes validation '+'function for the `%s` prop on `%s`. This is deprecated '+'and will not work in production with the next major version. '+'You may be seeing this warning due to a third-party PropTypes '+'library. See https://fb.me/react-warning-dont-call-proptypes '+'for details.',propFullName,componentName):void 0;
	manualPropTypeCallCache[cacheKey]=true;
	}
	}
	}
	if(props[propName]==null){
	var locationName=ReactPropTypeLocationNames[location];
	if(isRequired){
	if(props[propName]===null){
	return new PropTypeError('The '+locationName+' `'+propFullName+'` is marked as required '+('in `'+componentName+'`, but its value is `null`.'));
	}
	return new PropTypeError('The '+locationName+' `'+propFullName+'` is marked as required in '+('`'+componentName+'`, but its value is `undefined`.'));
	}
	return null;
	}else{
	return validate(props,propName,componentName,location,propFullName);
	}
	}
	
	var chainedCheckType=checkType.bind(null,false);
	chainedCheckType.isRequired=checkType.bind(null,true);
	
	return chainedCheckType;
	}
	
	function createPrimitiveTypeChecker(expectedType){
	function validate(props,propName,componentName,location,propFullName,secret){
	var propValue=props[propName];
	var propType=getPropType(propValue);
	if(propType!==expectedType){
	var locationName=ReactPropTypeLocationNames[location];
	
	
	
	var preciseType=getPreciseType(propValue);
	
	return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+preciseType+'` supplied to `'+componentName+'`, expected ')+('`'+expectedType+'`.'));
	}
	return null;
	}
	return createChainableTypeChecker(validate);
	}
	
	function createAnyTypeChecker(){
	return createChainableTypeChecker(emptyFunction.thatReturns(null));
	}
	
	function createArrayOfTypeChecker(typeChecker){
	function validate(props,propName,componentName,location,propFullName){
	if(typeof typeChecker!=='function'){
	return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside arrayOf.');
	}
	var propValue=props[propName];
	if(!Array.isArray(propValue)){
	var locationName=ReactPropTypeLocationNames[location];
	var propType=getPropType(propValue);
	return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an array.'));
	}
	for(var i=0;i<propValue.length;i++){
	var error=typeChecker(propValue,i,componentName,location,propFullName+'['+i+']',ReactPropTypesSecret);
	if(error instanceof Error){
	return error;
	}
	}
	return null;
	}
	return createChainableTypeChecker(validate);
	}
	
	function createElementTypeChecker(){
	function validate(props,propName,componentName,location,propFullName){
	var propValue=props[propName];
	if(!ReactElement.isValidElement(propValue)){
	var locationName=ReactPropTypeLocationNames[location];
	var propType=getPropType(propValue);
	return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected a single ReactElement.'));
	}
	return null;
	}
	return createChainableTypeChecker(validate);
	}
	
	function createInstanceTypeChecker(expectedClass){
	function validate(props,propName,componentName,location,propFullName){
	if(!(props[propName]instanceof expectedClass)){
	var locationName=ReactPropTypeLocationNames[location];
	var expectedClassName=expectedClass.name||ANONYMOUS;
	var actualClassName=getClassName(props[propName]);
	return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+actualClassName+'` supplied to `'+componentName+'`, expected ')+('instance of `'+expectedClassName+'`.'));
	}
	return null;
	}
	return createChainableTypeChecker(validate);
	}
	
	function createEnumTypeChecker(expectedValues){
	if(!Array.isArray(expectedValues)){
	process.env.NODE_ENV!=='production'?warning(false,'Invalid argument supplied to oneOf, expected an instance of array.'):void 0;
	return emptyFunction.thatReturnsNull;
	}
	
	function validate(props,propName,componentName,location,propFullName){
	var propValue=props[propName];
	for(var i=0;i<expectedValues.length;i++){
	if(is(propValue,expectedValues[i])){
	return null;
	}
	}
	
	var locationName=ReactPropTypeLocationNames[location];
	var valuesString=JSON.stringify(expectedValues);
	return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of value `'+propValue+'` '+('supplied to `'+componentName+'`, expected one of '+valuesString+'.'));
	}
	return createChainableTypeChecker(validate);
	}
	
	function createObjectOfTypeChecker(typeChecker){
	function validate(props,propName,componentName,location,propFullName){
	if(typeof typeChecker!=='function'){
	return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside objectOf.');
	}
	var propValue=props[propName];
	var propType=getPropType(propValue);
	if(propType!=='object'){
	var locationName=ReactPropTypeLocationNames[location];
	return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an object.'));
	}
	for(var key in propValue){
	if(propValue.hasOwnProperty(key)){
	var error=typeChecker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);
	if(error instanceof Error){
	return error;
	}
	}
	}
	return null;
	}
	return createChainableTypeChecker(validate);
	}
	
	function createUnionTypeChecker(arrayOfTypeCheckers){
	if(!Array.isArray(arrayOfTypeCheckers)){
	process.env.NODE_ENV!=='production'?warning(false,'Invalid argument supplied to oneOfType, expected an instance of array.'):void 0;
	return emptyFunction.thatReturnsNull;
	}
	
	function validate(props,propName,componentName,location,propFullName){
	for(var i=0;i<arrayOfTypeCheckers.length;i++){
	var checker=arrayOfTypeCheckers[i];
	if(checker(props,propName,componentName,location,propFullName,ReactPropTypesSecret)==null){
	return null;
	}
	}
	
	var locationName=ReactPropTypeLocationNames[location];
	return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` supplied to '+('`'+componentName+'`.'));
	}
	return createChainableTypeChecker(validate);
	}
	
	function createNodeChecker(){
	function validate(props,propName,componentName,location,propFullName){
	if(!isNode(props[propName])){
	var locationName=ReactPropTypeLocationNames[location];
	return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` supplied to '+('`'+componentName+'`, expected a ReactNode.'));
	}
	return null;
	}
	return createChainableTypeChecker(validate);
	}
	
	function createShapeTypeChecker(shapeTypes){
	function validate(props,propName,componentName,location,propFullName){
	var propValue=props[propName];
	var propType=getPropType(propValue);
	if(propType!=='object'){
	var locationName=ReactPropTypeLocationNames[location];
	return new PropTypeError('Invalid '+locationName+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));
	}
	for(var key in shapeTypes){
	var checker=shapeTypes[key];
	if(!checker){
	continue;
	}
	var error=checker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);
	if(error){
	return error;
	}
	}
	return null;
	}
	return createChainableTypeChecker(validate);
	}
	
	function isNode(propValue){
	switch(typeof propValue==='undefined'?'undefined':_typeof(propValue)){
	case'number':
	case'string':
	case'undefined':
	return true;
	case'boolean':
	return!propValue;
	case'object':
	if(Array.isArray(propValue)){
	return propValue.every(isNode);
	}
	if(propValue===null||ReactElement.isValidElement(propValue)){
	return true;
	}
	
	var iteratorFn=getIteratorFn(propValue);
	if(iteratorFn){
	var iterator=iteratorFn.call(propValue);
	var step;
	if(iteratorFn!==propValue.entries){
	while(!(step=iterator.next()).done){
	if(!isNode(step.value)){
	return false;
	}
	}
	}else{
	
	while(!(step=iterator.next()).done){
	var entry=step.value;
	if(entry){
	if(!isNode(entry[1])){
	return false;
	}
	}
	}
	}
	}else{
	return false;
	}
	
	return true;
	default:
	return false;}
	
	}
	
	function isSymbol(propType,propValue){
	
	if(propType==='symbol'){
	return true;
	}
	
	
	if(propValue['@@toStringTag']==='Symbol'){
	return true;
	}
	
	
	if(typeof Symbol==='function'&&propValue instanceof Symbol){
	return true;
	}
	
	return false;
	}
	
	
	function getPropType(propValue){
	var propType=typeof propValue==='undefined'?'undefined':_typeof(propValue);
	if(Array.isArray(propValue)){
	return'array';
	}
	if(propValue instanceof RegExp){
	
	
	
	return'object';
	}
	if(isSymbol(propType,propValue)){
	return'symbol';
	}
	return propType;
	}
	
	
	
	function getPreciseType(propValue){
	var propType=getPropType(propValue);
	if(propType==='object'){
	if(propValue instanceof Date){
	return'date';
	}else if(propValue instanceof RegExp){
	return'regexp';
	}
	}
	return propType;
	}
	
	
	function getClassName(propValue){
	if(!propValue.constructor||!propValue.constructor.name){
	return ANONYMOUS;
	}
	return propValue.constructor.name;
	}
	
	module.exports=ReactPropTypes;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 30 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	module.exports='15.4.1';

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(7);
	
	var ReactElement=__webpack_require__(9);
	
	var invariant=__webpack_require__(8);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function onlyChild(children){
	!ReactElement.isValidElement(children)?process.env.NODE_ENV!=='production'?invariant(false,'React.Children.only expected to receive a single React element child.'):_prodInvariant('143'):void 0;
	return children;
	}
	
	module.exports=onlyChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports=__webpack_require__(33);

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ReactDOMComponentTree=__webpack_require__(34);
	var ReactDefaultInjection=__webpack_require__(38);
	var ReactMount=__webpack_require__(166);
	var ReactReconciler=__webpack_require__(59);
	var ReactUpdates=__webpack_require__(56);
	var ReactVersion=__webpack_require__(171);
	
	var findDOMNode=__webpack_require__(172);
	var getHostComponentFromComposite=__webpack_require__(173);
	var renderSubtreeIntoContainer=__webpack_require__(174);
	var warning=__webpack_require__(11);
	
	ReactDefaultInjection.inject();
	
	var ReactDOM={
	findDOMNode:findDOMNode,
	render:ReactMount.render,
	unmountComponentAtNode:ReactMount.unmountComponentAtNode,
	version:ReactVersion,
	
	
	unstable_batchedUpdates:ReactUpdates.batchedUpdates,
	unstable_renderSubtreeIntoContainer:renderSubtreeIntoContainer};
	
	
	
	
	if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!=='undefined'&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject==='function'){
	__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
	ComponentTree:{
	getClosestInstanceFromNode:ReactDOMComponentTree.getClosestInstanceFromNode,
	getNodeFromInstance:function getNodeFromInstance(inst){
	
	if(inst._renderedComponent){
	inst=getHostComponentFromComposite(inst);
	}
	if(inst){
	return ReactDOMComponentTree.getNodeFromInstance(inst);
	}else{
	return null;
	}
	}},
	
	Mount:ReactMount,
	Reconciler:ReactReconciler});
	
	}
	
	if(process.env.NODE_ENV!=='production'){
	var ExecutionEnvironment=__webpack_require__(48);
	if(ExecutionEnvironment.canUseDOM&&window.top===window.self){
	
	
	if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__==='undefined'){
	
	if(navigator.userAgent.indexOf('Chrome')>-1&&navigator.userAgent.indexOf('Edge')===-1||navigator.userAgent.indexOf('Firefox')>-1){
	
	var showFileUrlMessage=window.location.protocol.indexOf('http')===-1&&navigator.userAgent.indexOf('Firefox')===-1;
	console.debug('Download the React DevTools '+(showFileUrlMessage?'and use an HTTP server (instead of a file: URL) ':'')+'for a better development experience: '+'https://fb.me/react-devtools');
	}
	}
	
	var testFunc=function testFn(){};
	process.env.NODE_ENV!=='production'?warning((testFunc.name||testFunc.toString()).indexOf('testFn')!==-1,'It looks like you\'re using a minified copy of the development build '+'of React. When deploying React apps to production, make sure to use '+'the production build which skips development warnings and is faster. '+'See https://fb.me/react-minification for more details.'):void 0;
	
	
	
	var ieCompatibilityMode=document.documentMode&&document.documentMode<8;
	
	process.env.NODE_ENV!=='production'?warning(!ieCompatibilityMode,'Internet Explorer is running in compatibility mode; please add the '+'following tag to your HTML to prevent this from happening: '+'<meta http-equiv="X-UA-Compatible" content="IE=edge" />'):void 0;
	
	var expectedFeatures=[
	
	Array.isArray,Array.prototype.every,Array.prototype.forEach,Array.prototype.indexOf,Array.prototype.map,Date.now,Function.prototype.bind,Object.keys,String.prototype.trim];
	
	for(var i=0;i<expectedFeatures.length;i++){
	if(!expectedFeatures[i]){
	process.env.NODE_ENV!=='production'?warning(false,'One or more ES5 shims expected by React are not available: '+'https://fb.me/react-warning-polyfills'):void 0;
	break;
	}
	}
	}
	}
	
	if(process.env.NODE_ENV!=='production'){
	var ReactInstrumentation=__webpack_require__(62);
	var ReactDOMUnknownPropertyHook=__webpack_require__(175);
	var ReactDOMNullInputValuePropHook=__webpack_require__(176);
	var ReactDOMInvalidARIAHook=__webpack_require__(177);
	
	ReactInstrumentation.debugTool.addHook(ReactDOMUnknownPropertyHook);
	ReactInstrumentation.debugTool.addHook(ReactDOMNullInputValuePropHook);
	ReactInstrumentation.debugTool.addHook(ReactDOMInvalidARIAHook);
	}
	
	module.exports=ReactDOM;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(35);
	
	var DOMProperty=__webpack_require__(36);
	var ReactDOMComponentFlags=__webpack_require__(37);
	
	var invariant=__webpack_require__(8);
	
	var ATTR_NAME=DOMProperty.ID_ATTRIBUTE_NAME;
	var Flags=ReactDOMComponentFlags;
	
	var internalInstanceKey='__reactInternalInstance$'+Math.random().toString(36).slice(2);
	
	
	
	
	
	
	
	
	function getRenderedHostOrTextFromComponent(component){
	var rendered;
	while(rendered=component._renderedComponent){
	component=rendered;
	}
	return component;
	}
	
	
	
	
	
	function precacheNode(inst,node){
	var hostInst=getRenderedHostOrTextFromComponent(inst);
	hostInst._hostNode=node;
	node[internalInstanceKey]=hostInst;
	}
	
	function uncacheNode(inst){
	var node=inst._hostNode;
	if(node){
	delete node[internalInstanceKey];
	inst._hostNode=null;
	}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function precacheChildNodes(inst,node){
	if(inst._flags&Flags.hasCachedChildNodes){
	return;
	}
	var children=inst._renderedChildren;
	var childNode=node.firstChild;
	outer:for(var name in children){
	if(!children.hasOwnProperty(name)){
	continue;
	}
	var childInst=children[name];
	var childID=getRenderedHostOrTextFromComponent(childInst)._domID;
	if(childID===0){
	
	continue;
	}
	
	for(;childNode!==null;childNode=childNode.nextSibling){
	if(childNode.nodeType===1&&childNode.getAttribute(ATTR_NAME)===String(childID)||childNode.nodeType===8&&childNode.nodeValue===' react-text: '+childID+' '||childNode.nodeType===8&&childNode.nodeValue===' react-empty: '+childID+' '){
	precacheNode(childInst,childNode);
	continue outer;
	}
	}
	
	 true?process.env.NODE_ENV!=='production'?invariant(false,'Unable to find element with ID %s.',childID):_prodInvariant('32',childID):void 0;
	}
	inst._flags|=Flags.hasCachedChildNodes;
	}
	
	
	
	
	
	function getClosestInstanceFromNode(node){
	if(node[internalInstanceKey]){
	return node[internalInstanceKey];
	}
	
	
	var parents=[];
	while(!node[internalInstanceKey]){
	parents.push(node);
	if(node.parentNode){
	node=node.parentNode;
	}else{
	
	
	return null;
	}
	}
	
	var closest;
	var inst;
	for(;node&&(inst=node[internalInstanceKey]);node=parents.pop()){
	closest=inst;
	if(parents.length){
	precacheChildNodes(inst,node);
	}
	}
	
	return closest;
	}
	
	
	
	
	
	function getInstanceFromNode(node){
	var inst=getClosestInstanceFromNode(node);
	if(inst!=null&&inst._hostNode===node){
	return inst;
	}else{
	return null;
	}
	}
	
	
	
	
	
	function getNodeFromInstance(inst){
	
	
	!(inst._hostNode!==undefined)?process.env.NODE_ENV!=='production'?invariant(false,'getNodeFromInstance: Invalid argument.'):_prodInvariant('33'):void 0;
	
	if(inst._hostNode){
	return inst._hostNode;
	}
	
	
	var parents=[];
	while(!inst._hostNode){
	parents.push(inst);
	!inst._hostParent?process.env.NODE_ENV!=='production'?invariant(false,'React DOM tree root should always have a node reference.'):_prodInvariant('34'):void 0;
	inst=inst._hostParent;
	}
	
	
	
	for(;parents.length;inst=parents.pop()){
	precacheChildNodes(inst,inst._hostNode);
	}
	
	return inst._hostNode;
	}
	
	var ReactDOMComponentTree={
	getClosestInstanceFromNode:getClosestInstanceFromNode,
	getInstanceFromNode:getInstanceFromNode,
	getNodeFromInstance:getNodeFromInstance,
	precacheChildNodes:precacheChildNodes,
	precacheNode:precacheNode,
	uncacheNode:uncacheNode};
	
	
	module.exports=ReactDOMComponentTree;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 35 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	
	
	
	function reactProdInvariant(code){
	var argCount=arguments.length-1;
	
	var message='Minified React error #'+code+'; visit '+'http://facebook.github.io/react/docs/error-decoder.html?invariant='+code;
	
	for(var argIdx=0;argIdx<argCount;argIdx++){
	message+='&args[]='+encodeURIComponent(arguments[argIdx+1]);
	}
	
	message+=' for the full message or use the non-minified dev environment'+' for full errors and additional helpful warnings.';
	
	var error=new Error(message);
	error.name='Invariant Violation';
	error.framesToPop=1;
	
	throw error;
	}
	
	module.exports=reactProdInvariant;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(35);
	
	var invariant=__webpack_require__(8);
	
	function checkMask(value,bitmask){
	return(value&bitmask)===bitmask;
	}
	
	var DOMPropertyInjection={
	
	
	
	
	MUST_USE_PROPERTY:0x1,
	HAS_BOOLEAN_VALUE:0x4,
	HAS_NUMERIC_VALUE:0x8,
	HAS_POSITIVE_NUMERIC_VALUE:0x10|0x8,
	HAS_OVERLOADED_BOOLEAN_VALUE:0x20,
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	injectDOMPropertyConfig:function injectDOMPropertyConfig(domPropertyConfig){
	var Injection=DOMPropertyInjection;
	var Properties=domPropertyConfig.Properties||{};
	var DOMAttributeNamespaces=domPropertyConfig.DOMAttributeNamespaces||{};
	var DOMAttributeNames=domPropertyConfig.DOMAttributeNames||{};
	var DOMPropertyNames=domPropertyConfig.DOMPropertyNames||{};
	var DOMMutationMethods=domPropertyConfig.DOMMutationMethods||{};
	
	if(domPropertyConfig.isCustomAttribute){
	DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
	}
	
	for(var propName in Properties){
	!!DOMProperty.properties.hasOwnProperty(propName)?process.env.NODE_ENV!=='production'?invariant(false,'injectDOMPropertyConfig(...): You\'re trying to inject DOM property \'%s\' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.',propName):_prodInvariant('48',propName):void 0;
	
	var lowerCased=propName.toLowerCase();
	var propConfig=Properties[propName];
	
	var propertyInfo={
	attributeName:lowerCased,
	attributeNamespace:null,
	propertyName:propName,
	mutationMethod:null,
	
	mustUseProperty:checkMask(propConfig,Injection.MUST_USE_PROPERTY),
	hasBooleanValue:checkMask(propConfig,Injection.HAS_BOOLEAN_VALUE),
	hasNumericValue:checkMask(propConfig,Injection.HAS_NUMERIC_VALUE),
	hasPositiveNumericValue:checkMask(propConfig,Injection.HAS_POSITIVE_NUMERIC_VALUE),
	hasOverloadedBooleanValue:checkMask(propConfig,Injection.HAS_OVERLOADED_BOOLEAN_VALUE)};
	
	!(propertyInfo.hasBooleanValue+propertyInfo.hasNumericValue+propertyInfo.hasOverloadedBooleanValue<=1)?process.env.NODE_ENV!=='production'?invariant(false,'DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s',propName):_prodInvariant('50',propName):void 0;
	
	if(process.env.NODE_ENV!=='production'){
	DOMProperty.getPossibleStandardName[lowerCased]=propName;
	}
	
	if(DOMAttributeNames.hasOwnProperty(propName)){
	var attributeName=DOMAttributeNames[propName];
	propertyInfo.attributeName=attributeName;
	if(process.env.NODE_ENV!=='production'){
	DOMProperty.getPossibleStandardName[attributeName]=propName;
	}
	}
	
	if(DOMAttributeNamespaces.hasOwnProperty(propName)){
	propertyInfo.attributeNamespace=DOMAttributeNamespaces[propName];
	}
	
	if(DOMPropertyNames.hasOwnProperty(propName)){
	propertyInfo.propertyName=DOMPropertyNames[propName];
	}
	
	if(DOMMutationMethods.hasOwnProperty(propName)){
	propertyInfo.mutationMethod=DOMMutationMethods[propName];
	}
	
	DOMProperty.properties[propName]=propertyInfo;
	}
	}};
	
	
	
	var ATTRIBUTE_NAME_START_CHAR=':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var DOMProperty={
	
	ID_ATTRIBUTE_NAME:'data-reactid',
	ROOT_ATTRIBUTE_NAME:'data-reactroot',
	
	ATTRIBUTE_NAME_START_CHAR:ATTRIBUTE_NAME_START_CHAR,
	ATTRIBUTE_NAME_CHAR:ATTRIBUTE_NAME_START_CHAR+'\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	properties:{},
	
	
	
	
	
	
	
	
	
	
	getPossibleStandardName:process.env.NODE_ENV!=='production'?{autofocus:'autoFocus'}:null,
	
	
	
	
	_isCustomAttributeFunctions:[],
	
	
	
	
	
	isCustomAttribute:function isCustomAttribute(attributeName){
	for(var i=0;i<DOMProperty._isCustomAttributeFunctions.length;i++){
	var isCustomAttributeFn=DOMProperty._isCustomAttributeFunctions[i];
	if(isCustomAttributeFn(attributeName)){
	return true;
	}
	}
	return false;
	},
	
	injection:DOMPropertyInjection};
	
	
	module.exports=DOMProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 37 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ReactDOMComponentFlags={
	hasCachedChildNodes:1<<0};
	
	
	module.exports=ReactDOMComponentFlags;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ARIADOMPropertyConfig=__webpack_require__(39);
	var BeforeInputEventPlugin=__webpack_require__(40);
	var ChangeEventPlugin=__webpack_require__(55);
	var DefaultEventPluginOrder=__webpack_require__(72);
	var EnterLeaveEventPlugin=__webpack_require__(73);
	var HTMLDOMPropertyConfig=__webpack_require__(78);
	var ReactComponentBrowserEnvironment=__webpack_require__(79);
	var ReactDOMComponent=__webpack_require__(92);
	var ReactDOMComponentTree=__webpack_require__(34);
	var ReactDOMEmptyComponent=__webpack_require__(137);
	var ReactDOMTreeTraversal=__webpack_require__(138);
	var ReactDOMTextComponent=__webpack_require__(139);
	var ReactDefaultBatchingStrategy=__webpack_require__(140);
	var ReactEventListener=__webpack_require__(141);
	var ReactInjection=__webpack_require__(144);
	var ReactReconcileTransaction=__webpack_require__(145);
	var SVGDOMPropertyConfig=__webpack_require__(153);
	var SelectEventPlugin=__webpack_require__(154);
	var SimpleEventPlugin=__webpack_require__(155);
	
	var alreadyInjected=false;
	
	function inject(){
	if(alreadyInjected){
	
	
	
	return;
	}
	alreadyInjected=true;
	
	ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener);
	
	
	
	
	ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
	ReactInjection.EventPluginUtils.injectComponentTree(ReactDOMComponentTree);
	ReactInjection.EventPluginUtils.injectTreeTraversal(ReactDOMTreeTraversal);
	
	
	
	
	
	ReactInjection.EventPluginHub.injectEventPluginsByName({
	SimpleEventPlugin:SimpleEventPlugin,
	EnterLeaveEventPlugin:EnterLeaveEventPlugin,
	ChangeEventPlugin:ChangeEventPlugin,
	SelectEventPlugin:SelectEventPlugin,
	BeforeInputEventPlugin:BeforeInputEventPlugin});
	
	
	ReactInjection.HostComponent.injectGenericComponentClass(ReactDOMComponent);
	
	ReactInjection.HostComponent.injectTextComponentClass(ReactDOMTextComponent);
	
	ReactInjection.DOMProperty.injectDOMPropertyConfig(ARIADOMPropertyConfig);
	ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
	ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);
	
	ReactInjection.EmptyComponent.injectEmptyComponentFactory(function(instantiate){
	return new ReactDOMEmptyComponent(instantiate);
	});
	
	ReactInjection.Updates.injectReconcileTransaction(ReactReconcileTransaction);
	ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);
	
	ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);
	}
	
	module.exports={
	inject:inject};

/***/ },
/* 39 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ARIADOMPropertyConfig={
	Properties:{
	
	'aria-current':0,
	'aria-details':0,
	'aria-disabled':0,
	'aria-hidden':0,
	'aria-invalid':0,
	'aria-keyshortcuts':0,
	'aria-label':0,
	'aria-roledescription':0,
	
	'aria-autocomplete':0,
	'aria-checked':0,
	'aria-expanded':0,
	'aria-haspopup':0,
	'aria-level':0,
	'aria-modal':0,
	'aria-multiline':0,
	'aria-multiselectable':0,
	'aria-orientation':0,
	'aria-placeholder':0,
	'aria-pressed':0,
	'aria-readonly':0,
	'aria-required':0,
	'aria-selected':0,
	'aria-sort':0,
	'aria-valuemax':0,
	'aria-valuemin':0,
	'aria-valuenow':0,
	'aria-valuetext':0,
	
	'aria-atomic':0,
	'aria-busy':0,
	'aria-live':0,
	'aria-relevant':0,
	
	'aria-dropeffect':0,
	'aria-grabbed':0,
	
	'aria-activedescendant':0,
	'aria-colcount':0,
	'aria-colindex':0,
	'aria-colspan':0,
	'aria-controls':0,
	'aria-describedby':0,
	'aria-errormessage':0,
	'aria-flowto':0,
	'aria-labelledby':0,
	'aria-owns':0,
	'aria-posinset':0,
	'aria-rowcount':0,
	'aria-rowindex':0,
	'aria-rowspan':0,
	'aria-setsize':0},
	
	DOMAttributeNames:{},
	DOMPropertyNames:{}};
	
	
	module.exports=ARIADOMPropertyConfig;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	var EventPropagators=__webpack_require__(41);
	var ExecutionEnvironment=__webpack_require__(48);
	var FallbackCompositionState=__webpack_require__(49);
	var SyntheticCompositionEvent=__webpack_require__(52);
	var SyntheticInputEvent=__webpack_require__(54);
	
	var END_KEYCODES=[9,13,27,32];
	var START_KEYCODE=229;
	
	var canUseCompositionEvent=ExecutionEnvironment.canUseDOM&&'CompositionEvent'in window;
	
	var documentMode=null;
	if(ExecutionEnvironment.canUseDOM&&'documentMode'in document){
	documentMode=document.documentMode;
	}
	
	
	
	
	var canUseTextInputEvent=ExecutionEnvironment.canUseDOM&&'TextEvent'in window&&!documentMode&&!isPresto();
	
	
	
	
	var useFallbackCompositionData=ExecutionEnvironment.canUseDOM&&(!canUseCompositionEvent||documentMode&&documentMode>8&&documentMode<=11);
	
	
	
	
	
	function isPresto(){
	var opera=window.opera;
	return(typeof opera==='undefined'?'undefined':_typeof(opera))==='object'&&typeof opera.version==='function'&&parseInt(opera.version(),10)<=12;
	}
	
	var SPACEBAR_CODE=32;
	var SPACEBAR_CHAR=String.fromCharCode(SPACEBAR_CODE);
	
	
	var eventTypes={
	beforeInput:{
	phasedRegistrationNames:{
	bubbled:'onBeforeInput',
	captured:'onBeforeInputCapture'},
	
	dependencies:['topCompositionEnd','topKeyPress','topTextInput','topPaste']},
	
	compositionEnd:{
	phasedRegistrationNames:{
	bubbled:'onCompositionEnd',
	captured:'onCompositionEndCapture'},
	
	dependencies:['topBlur','topCompositionEnd','topKeyDown','topKeyPress','topKeyUp','topMouseDown']},
	
	compositionStart:{
	phasedRegistrationNames:{
	bubbled:'onCompositionStart',
	captured:'onCompositionStartCapture'},
	
	dependencies:['topBlur','topCompositionStart','topKeyDown','topKeyPress','topKeyUp','topMouseDown']},
	
	compositionUpdate:{
	phasedRegistrationNames:{
	bubbled:'onCompositionUpdate',
	captured:'onCompositionUpdateCapture'},
	
	dependencies:['topBlur','topCompositionUpdate','topKeyDown','topKeyPress','topKeyUp','topMouseDown']}};
	
	
	
	
	var hasSpaceKeypress=false;
	
	
	
	
	
	
	function isKeypressCommand(nativeEvent){
	return(nativeEvent.ctrlKey||nativeEvent.altKey||nativeEvent.metaKey)&&
	
	!(nativeEvent.ctrlKey&&nativeEvent.altKey);
	}
	
	
	
	
	
	
	
	function getCompositionEventType(topLevelType){
	switch(topLevelType){
	case'topCompositionStart':
	return eventTypes.compositionStart;
	case'topCompositionEnd':
	return eventTypes.compositionEnd;
	case'topCompositionUpdate':
	return eventTypes.compositionUpdate;}
	
	}
	
	
	
	
	
	
	
	
	
	function isFallbackCompositionStart(topLevelType,nativeEvent){
	return topLevelType==='topKeyDown'&&nativeEvent.keyCode===START_KEYCODE;
	}
	
	
	
	
	
	
	
	
	function isFallbackCompositionEnd(topLevelType,nativeEvent){
	switch(topLevelType){
	case'topKeyUp':
	
	return END_KEYCODES.indexOf(nativeEvent.keyCode)!==-1;
	case'topKeyDown':
	
	
	return nativeEvent.keyCode!==START_KEYCODE;
	case'topKeyPress':
	case'topMouseDown':
	case'topBlur':
	
	return true;
	default:
	return false;}
	
	}
	
	
	
	
	
	
	
	
	
	
	function getDataFromCustomEvent(nativeEvent){
	var detail=nativeEvent.detail;
	if((typeof detail==='undefined'?'undefined':_typeof(detail))==='object'&&'data'in detail){
	return detail.data;
	}
	return null;
	}
	
	
	var currentComposition=null;
	
	
	
	
	function extractCompositionEvent(topLevelType,targetInst,nativeEvent,nativeEventTarget){
	var eventType;
	var fallbackData;
	
	if(canUseCompositionEvent){
	eventType=getCompositionEventType(topLevelType);
	}else if(!currentComposition){
	if(isFallbackCompositionStart(topLevelType,nativeEvent)){
	eventType=eventTypes.compositionStart;
	}
	}else if(isFallbackCompositionEnd(topLevelType,nativeEvent)){
	eventType=eventTypes.compositionEnd;
	}
	
	if(!eventType){
	return null;
	}
	
	if(useFallbackCompositionData){
	
	
	if(!currentComposition&&eventType===eventTypes.compositionStart){
	currentComposition=FallbackCompositionState.getPooled(nativeEventTarget);
	}else if(eventType===eventTypes.compositionEnd){
	if(currentComposition){
	fallbackData=currentComposition.getData();
	}
	}
	}
	
	var event=SyntheticCompositionEvent.getPooled(eventType,targetInst,nativeEvent,nativeEventTarget);
	
	if(fallbackData){
	
	
	event.data=fallbackData;
	}else{
	var customData=getDataFromCustomEvent(nativeEvent);
	if(customData!==null){
	event.data=customData;
	}
	}
	
	EventPropagators.accumulateTwoPhaseDispatches(event);
	return event;
	}
	
	
	
	
	
	
	function getNativeBeforeInputChars(topLevelType,nativeEvent){
	switch(topLevelType){
	case'topCompositionEnd':
	return getDataFromCustomEvent(nativeEvent);
	case'topKeyPress':
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var which=nativeEvent.which;
	if(which!==SPACEBAR_CODE){
	return null;
	}
	
	hasSpaceKeypress=true;
	return SPACEBAR_CHAR;
	
	case'topTextInput':
	
	var chars=nativeEvent.data;
	
	
	
	
	if(chars===SPACEBAR_CHAR&&hasSpaceKeypress){
	return null;
	}
	
	return chars;
	
	default:
	
	return null;}
	
	}
	
	
	
	
	
	
	
	
	
	function getFallbackBeforeInputChars(topLevelType,nativeEvent){
	
	
	
	
	if(currentComposition){
	if(topLevelType==='topCompositionEnd'||!canUseCompositionEvent&&isFallbackCompositionEnd(topLevelType,nativeEvent)){
	var chars=currentComposition.getData();
	FallbackCompositionState.release(currentComposition);
	currentComposition=null;
	return chars;
	}
	return null;
	}
	
	switch(topLevelType){
	case'topPaste':
	
	
	return null;
	case'topKeyPress':
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	if(nativeEvent.which&&!isKeypressCommand(nativeEvent)){
	return String.fromCharCode(nativeEvent.which);
	}
	return null;
	case'topCompositionEnd':
	return useFallbackCompositionData?null:nativeEvent.data;
	default:
	return null;}
	
	}
	
	
	
	
	
	
	
	function extractBeforeInputEvent(topLevelType,targetInst,nativeEvent,nativeEventTarget){
	var chars;
	
	if(canUseTextInputEvent){
	chars=getNativeBeforeInputChars(topLevelType,nativeEvent);
	}else{
	chars=getFallbackBeforeInputChars(topLevelType,nativeEvent);
	}
	
	
	
	if(!chars){
	return null;
	}
	
	var event=SyntheticInputEvent.getPooled(eventTypes.beforeInput,targetInst,nativeEvent,nativeEventTarget);
	
	event.data=chars;
	EventPropagators.accumulateTwoPhaseDispatches(event);
	return event;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var BeforeInputEventPlugin={
	
	eventTypes:eventTypes,
	
	extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){
	return[extractCompositionEvent(topLevelType,targetInst,nativeEvent,nativeEventTarget),extractBeforeInputEvent(topLevelType,targetInst,nativeEvent,nativeEventTarget)];
	}};
	
	
	module.exports=BeforeInputEventPlugin;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var EventPluginHub=__webpack_require__(42);
	var EventPluginUtils=__webpack_require__(44);
	
	var accumulateInto=__webpack_require__(46);
	var forEachAccumulated=__webpack_require__(47);
	var warning=__webpack_require__(11);
	
	var getListener=EventPluginHub.getListener;
	
	
	
	
	
	function listenerAtPhase(inst,event,propagationPhase){
	var registrationName=event.dispatchConfig.phasedRegistrationNames[propagationPhase];
	return getListener(inst,registrationName);
	}
	
	
	
	
	
	
	
	function accumulateDirectionalDispatches(inst,phase,event){
	if(process.env.NODE_ENV!=='production'){
	process.env.NODE_ENV!=='production'?warning(inst,'Dispatching inst must not be null'):void 0;
	}
	var listener=listenerAtPhase(inst,event,phase);
	if(listener){
	event._dispatchListeners=accumulateInto(event._dispatchListeners,listener);
	event._dispatchInstances=accumulateInto(event._dispatchInstances,inst);
	}
	}
	
	
	
	
	
	
	
	
	function accumulateTwoPhaseDispatchesSingle(event){
	if(event&&event.dispatchConfig.phasedRegistrationNames){
	EventPluginUtils.traverseTwoPhase(event._targetInst,accumulateDirectionalDispatches,event);
	}
	}
	
	
	
	
	function accumulateTwoPhaseDispatchesSingleSkipTarget(event){
	if(event&&event.dispatchConfig.phasedRegistrationNames){
	var targetInst=event._targetInst;
	var parentInst=targetInst?EventPluginUtils.getParentInstance(targetInst):null;
	EventPluginUtils.traverseTwoPhase(parentInst,accumulateDirectionalDispatches,event);
	}
	}
	
	
	
	
	
	
	function accumulateDispatches(inst,ignoredDirection,event){
	if(event&&event.dispatchConfig.registrationName){
	var registrationName=event.dispatchConfig.registrationName;
	var listener=getListener(inst,registrationName);
	if(listener){
	event._dispatchListeners=accumulateInto(event._dispatchListeners,listener);
	event._dispatchInstances=accumulateInto(event._dispatchInstances,inst);
	}
	}
	}
	
	
	
	
	
	
	function accumulateDirectDispatchesSingle(event){
	if(event&&event.dispatchConfig.registrationName){
	accumulateDispatches(event._targetInst,null,event);
	}
	}
	
	function accumulateTwoPhaseDispatches(events){
	forEachAccumulated(events,accumulateTwoPhaseDispatchesSingle);
	}
	
	function accumulateTwoPhaseDispatchesSkipTarget(events){
	forEachAccumulated(events,accumulateTwoPhaseDispatchesSingleSkipTarget);
	}
	
	function accumulateEnterLeaveDispatches(leave,enter,from,to){
	EventPluginUtils.traverseEnterLeave(from,to,accumulateDispatches,leave,enter);
	}
	
	function accumulateDirectDispatches(events){
	forEachAccumulated(events,accumulateDirectDispatchesSingle);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	var EventPropagators={
	accumulateTwoPhaseDispatches:accumulateTwoPhaseDispatches,
	accumulateTwoPhaseDispatchesSkipTarget:accumulateTwoPhaseDispatchesSkipTarget,
	accumulateDirectDispatches:accumulateDirectDispatches,
	accumulateEnterLeaveDispatches:accumulateEnterLeaveDispatches};
	
	
	module.exports=EventPropagators;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	var _prodInvariant=__webpack_require__(35);
	
	var EventPluginRegistry=__webpack_require__(43);
	var EventPluginUtils=__webpack_require__(44);
	var ReactErrorUtils=__webpack_require__(45);
	
	var accumulateInto=__webpack_require__(46);
	var forEachAccumulated=__webpack_require__(47);
	var invariant=__webpack_require__(8);
	
	
	
	
	var listenerBank={};
	
	
	
	
	
	var eventQueue=null;
	
	
	
	
	
	
	
	
	var executeDispatchesAndRelease=function executeDispatchesAndRelease(event,simulated){
	if(event){
	EventPluginUtils.executeDispatchesInOrder(event,simulated);
	
	if(!event.isPersistent()){
	event.constructor.release(event);
	}
	}
	};
	var executeDispatchesAndReleaseSimulated=function executeDispatchesAndReleaseSimulated(e){
	return executeDispatchesAndRelease(e,true);
	};
	var executeDispatchesAndReleaseTopLevel=function executeDispatchesAndReleaseTopLevel(e){
	return executeDispatchesAndRelease(e,false);
	};
	
	var getDictionaryKey=function getDictionaryKey(inst){
	
	
	return'.'+inst._rootNodeID;
	};
	
	function isInteractive(tag){
	return tag==='button'||tag==='input'||tag==='select'||tag==='textarea';
	}
	
	function shouldPreventMouseEvent(name,type,props){
	switch(name){
	case'onClick':
	case'onClickCapture':
	case'onDoubleClick':
	case'onDoubleClickCapture':
	case'onMouseDown':
	case'onMouseDownCapture':
	case'onMouseMove':
	case'onMouseMoveCapture':
	case'onMouseUp':
	case'onMouseUpCapture':
	return!!(props.disabled&&isInteractive(type));
	default:
	return false;}
	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var EventPluginHub={
	
	
	
	
	injection:{
	
	
	
	
	
	injectEventPluginOrder:EventPluginRegistry.injectEventPluginOrder,
	
	
	
	
	injectEventPluginsByName:EventPluginRegistry.injectEventPluginsByName},
	
	
	
	
	
	
	
	
	
	
	putListener:function putListener(inst,registrationName,listener){
	!(typeof listener==='function')?process.env.NODE_ENV!=='production'?invariant(false,'Expected %s listener to be a function, instead got type %s',registrationName,typeof listener==='undefined'?'undefined':_typeof(listener)):_prodInvariant('94',registrationName,typeof listener==='undefined'?'undefined':_typeof(listener)):void 0;
	
	var key=getDictionaryKey(inst);
	var bankForRegistrationName=listenerBank[registrationName]||(listenerBank[registrationName]={});
	bankForRegistrationName[key]=listener;
	
	var PluginModule=EventPluginRegistry.registrationNameModules[registrationName];
	if(PluginModule&&PluginModule.didPutListener){
	PluginModule.didPutListener(inst,registrationName,listener);
	}
	},
	
	
	
	
	
	
	getListener:function getListener(inst,registrationName){
	
	
	var bankForRegistrationName=listenerBank[registrationName];
	if(shouldPreventMouseEvent(registrationName,inst._currentElement.type,inst._currentElement.props)){
	return null;
	}
	var key=getDictionaryKey(inst);
	return bankForRegistrationName&&bankForRegistrationName[key];
	},
	
	
	
	
	
	
	
	deleteListener:function deleteListener(inst,registrationName){
	var PluginModule=EventPluginRegistry.registrationNameModules[registrationName];
	if(PluginModule&&PluginModule.willDeleteListener){
	PluginModule.willDeleteListener(inst,registrationName);
	}
	
	var bankForRegistrationName=listenerBank[registrationName];
	
	if(bankForRegistrationName){
	var key=getDictionaryKey(inst);
	delete bankForRegistrationName[key];
	}
	},
	
	
	
	
	
	
	deleteAllListeners:function deleteAllListeners(inst){
	var key=getDictionaryKey(inst);
	for(var registrationName in listenerBank){
	if(!listenerBank.hasOwnProperty(registrationName)){
	continue;
	}
	
	if(!listenerBank[registrationName][key]){
	continue;
	}
	
	var PluginModule=EventPluginRegistry.registrationNameModules[registrationName];
	if(PluginModule&&PluginModule.willDeleteListener){
	PluginModule.willDeleteListener(inst,registrationName);
	}
	
	delete listenerBank[registrationName][key];
	}
	},
	
	
	
	
	
	
	
	
	extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){
	var events;
	var plugins=EventPluginRegistry.plugins;
	for(var i=0;i<plugins.length;i++){
	
	var possiblePlugin=plugins[i];
	if(possiblePlugin){
	var extractedEvents=possiblePlugin.extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget);
	if(extractedEvents){
	events=accumulateInto(events,extractedEvents);
	}
	}
	}
	return events;
	},
	
	
	
	
	
	
	
	
	enqueueEvents:function enqueueEvents(events){
	if(events){
	eventQueue=accumulateInto(eventQueue,events);
	}
	},
	
	
	
	
	
	
	processEventQueue:function processEventQueue(simulated){
	
	
	var processingEventQueue=eventQueue;
	eventQueue=null;
	if(simulated){
	forEachAccumulated(processingEventQueue,executeDispatchesAndReleaseSimulated);
	}else{
	forEachAccumulated(processingEventQueue,executeDispatchesAndReleaseTopLevel);
	}
	!!eventQueue?process.env.NODE_ENV!=='production'?invariant(false,'processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.'):_prodInvariant('95'):void 0;
	
	ReactErrorUtils.rethrowCaughtError();
	},
	
	
	
	
	__purge:function __purge(){
	listenerBank={};
	},
	
	__getListenerBank:function __getListenerBank(){
	return listenerBank;
	}};
	
	
	
	module.exports=EventPluginHub;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(35);
	
	var invariant=__webpack_require__(8);
	
	
	
	
	var eventPluginOrder=null;
	
	
	
	
	var namesToPlugins={};
	
	
	
	
	
	
	function recomputePluginOrdering(){
	if(!eventPluginOrder){
	
	return;
	}
	for(var pluginName in namesToPlugins){
	var pluginModule=namesToPlugins[pluginName];
	var pluginIndex=eventPluginOrder.indexOf(pluginName);
	!(pluginIndex>-1)?process.env.NODE_ENV!=='production'?invariant(false,'EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.',pluginName):_prodInvariant('96',pluginName):void 0;
	if(EventPluginRegistry.plugins[pluginIndex]){
	continue;
	}
	!pluginModule.extractEvents?process.env.NODE_ENV!=='production'?invariant(false,'EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.',pluginName):_prodInvariant('97',pluginName):void 0;
	EventPluginRegistry.plugins[pluginIndex]=pluginModule;
	var publishedEvents=pluginModule.eventTypes;
	for(var eventName in publishedEvents){
	!publishEventForPlugin(publishedEvents[eventName],pluginModule,eventName)?process.env.NODE_ENV!=='production'?invariant(false,'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.',eventName,pluginName):_prodInvariant('98',eventName,pluginName):void 0;
	}
	}
	}
	
	
	
	
	
	
	
	
	
	function publishEventForPlugin(dispatchConfig,pluginModule,eventName){
	!!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName)?process.env.NODE_ENV!=='production'?invariant(false,'EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.',eventName):_prodInvariant('99',eventName):void 0;
	EventPluginRegistry.eventNameDispatchConfigs[eventName]=dispatchConfig;
	
	var phasedRegistrationNames=dispatchConfig.phasedRegistrationNames;
	if(phasedRegistrationNames){
	for(var phaseName in phasedRegistrationNames){
	if(phasedRegistrationNames.hasOwnProperty(phaseName)){
	var phasedRegistrationName=phasedRegistrationNames[phaseName];
	publishRegistrationName(phasedRegistrationName,pluginModule,eventName);
	}
	}
	return true;
	}else if(dispatchConfig.registrationName){
	publishRegistrationName(dispatchConfig.registrationName,pluginModule,eventName);
	return true;
	}
	return false;
	}
	
	
	
	
	
	
	
	
	
	function publishRegistrationName(registrationName,pluginModule,eventName){
	!!EventPluginRegistry.registrationNameModules[registrationName]?process.env.NODE_ENV!=='production'?invariant(false,'EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.',registrationName):_prodInvariant('100',registrationName):void 0;
	EventPluginRegistry.registrationNameModules[registrationName]=pluginModule;
	EventPluginRegistry.registrationNameDependencies[registrationName]=pluginModule.eventTypes[eventName].dependencies;
	
	if(process.env.NODE_ENV!=='production'){
	var lowerCasedName=registrationName.toLowerCase();
	EventPluginRegistry.possibleRegistrationNames[lowerCasedName]=registrationName;
	
	if(registrationName==='onDoubleClick'){
	EventPluginRegistry.possibleRegistrationNames.ondblclick=registrationName;
	}
	}
	}
	
	
	
	
	
	
	var EventPluginRegistry={
	
	
	
	
	plugins:[],
	
	
	
	
	eventNameDispatchConfigs:{},
	
	
	
	
	registrationNameModules:{},
	
	
	
	
	registrationNameDependencies:{},
	
	
	
	
	
	
	
	possibleRegistrationNames:process.env.NODE_ENV!=='production'?{}:null,
	
	
	
	
	
	
	
	
	
	
	
	injectEventPluginOrder:function injectEventPluginOrder(injectedEventPluginOrder){
	!!eventPluginOrder?process.env.NODE_ENV!=='production'?invariant(false,'EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.'):_prodInvariant('101'):void 0;
	
	eventPluginOrder=Array.prototype.slice.call(injectedEventPluginOrder);
	recomputePluginOrdering();
	},
	
	
	
	
	
	
	
	
	
	
	
	injectEventPluginsByName:function injectEventPluginsByName(injectedNamesToPlugins){
	var isOrderingDirty=false;
	for(var pluginName in injectedNamesToPlugins){
	if(!injectedNamesToPlugins.hasOwnProperty(pluginName)){
	continue;
	}
	var pluginModule=injectedNamesToPlugins[pluginName];
	if(!namesToPlugins.hasOwnProperty(pluginName)||namesToPlugins[pluginName]!==pluginModule){
	!!namesToPlugins[pluginName]?process.env.NODE_ENV!=='production'?invariant(false,'EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.',pluginName):_prodInvariant('102',pluginName):void 0;
	namesToPlugins[pluginName]=pluginModule;
	isOrderingDirty=true;
	}
	}
	if(isOrderingDirty){
	recomputePluginOrdering();
	}
	},
	
	
	
	
	
	
	
	
	getPluginModuleForEvent:function getPluginModuleForEvent(event){
	var dispatchConfig=event.dispatchConfig;
	if(dispatchConfig.registrationName){
	return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName]||null;
	}
	if(dispatchConfig.phasedRegistrationNames!==undefined){
	
	
	var phasedRegistrationNames=dispatchConfig.phasedRegistrationNames;
	
	for(var phase in phasedRegistrationNames){
	if(!phasedRegistrationNames.hasOwnProperty(phase)){
	continue;
	}
	var pluginModule=EventPluginRegistry.registrationNameModules[phasedRegistrationNames[phase]];
	if(pluginModule){
	return pluginModule;
	}
	}
	}
	return null;
	},
	
	
	
	
	
	_resetEventPlugins:function _resetEventPlugins(){
	eventPluginOrder=null;
	for(var pluginName in namesToPlugins){
	if(namesToPlugins.hasOwnProperty(pluginName)){
	delete namesToPlugins[pluginName];
	}
	}
	EventPluginRegistry.plugins.length=0;
	
	var eventNameDispatchConfigs=EventPluginRegistry.eventNameDispatchConfigs;
	for(var eventName in eventNameDispatchConfigs){
	if(eventNameDispatchConfigs.hasOwnProperty(eventName)){
	delete eventNameDispatchConfigs[eventName];
	}
	}
	
	var registrationNameModules=EventPluginRegistry.registrationNameModules;
	for(var registrationName in registrationNameModules){
	if(registrationNameModules.hasOwnProperty(registrationName)){
	delete registrationNameModules[registrationName];
	}
	}
	
	if(process.env.NODE_ENV!=='production'){
	var possibleRegistrationNames=EventPluginRegistry.possibleRegistrationNames;
	for(var lowerCasedName in possibleRegistrationNames){
	if(possibleRegistrationNames.hasOwnProperty(lowerCasedName)){
	delete possibleRegistrationNames[lowerCasedName];
	}
	}
	}
	}};
	
	
	
	module.exports=EventPluginRegistry;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(35);
	
	var ReactErrorUtils=__webpack_require__(45);
	
	var invariant=__webpack_require__(8);
	var warning=__webpack_require__(11);
	
	
	
	
	
	
	
	
	
	var ComponentTree;
	var TreeTraversal;
	var injection={
	injectComponentTree:function injectComponentTree(Injected){
	ComponentTree=Injected;
	if(process.env.NODE_ENV!=='production'){
	process.env.NODE_ENV!=='production'?warning(Injected&&Injected.getNodeFromInstance&&Injected.getInstanceFromNode,'EventPluginUtils.injection.injectComponentTree(...): Injected '+'module is missing getNodeFromInstance or getInstanceFromNode.'):void 0;
	}
	},
	injectTreeTraversal:function injectTreeTraversal(Injected){
	TreeTraversal=Injected;
	if(process.env.NODE_ENV!=='production'){
	process.env.NODE_ENV!=='production'?warning(Injected&&Injected.isAncestor&&Injected.getLowestCommonAncestor,'EventPluginUtils.injection.injectTreeTraversal(...): Injected '+'module is missing isAncestor or getLowestCommonAncestor.'):void 0;
	}
	}};
	
	
	function isEndish(topLevelType){
	return topLevelType==='topMouseUp'||topLevelType==='topTouchEnd'||topLevelType==='topTouchCancel';
	}
	
	function isMoveish(topLevelType){
	return topLevelType==='topMouseMove'||topLevelType==='topTouchMove';
	}
	function isStartish(topLevelType){
	return topLevelType==='topMouseDown'||topLevelType==='topTouchStart';
	}
	
	var validateEventDispatches;
	if(process.env.NODE_ENV!=='production'){
	validateEventDispatches=function validateEventDispatches(event){
	var dispatchListeners=event._dispatchListeners;
	var dispatchInstances=event._dispatchInstances;
	
	var listenersIsArr=Array.isArray(dispatchListeners);
	var listenersLen=listenersIsArr?dispatchListeners.length:dispatchListeners?1:0;
	
	var instancesIsArr=Array.isArray(dispatchInstances);
	var instancesLen=instancesIsArr?dispatchInstances.length:dispatchInstances?1:0;
	
	process.env.NODE_ENV!=='production'?warning(instancesIsArr===listenersIsArr&&instancesLen===listenersLen,'EventPluginUtils: Invalid `event`.'):void 0;
	};
	}
	
	
	
	
	
	
	
	
	function executeDispatch(event,simulated,listener,inst){
	var type=event.type||'unknown-event';
	event.currentTarget=EventPluginUtils.getNodeFromInstance(inst);
	if(simulated){
	ReactErrorUtils.invokeGuardedCallbackWithCatch(type,listener,event);
	}else{
	ReactErrorUtils.invokeGuardedCallback(type,listener,event);
	}
	event.currentTarget=null;
	}
	
	
	
	
	function executeDispatchesInOrder(event,simulated){
	var dispatchListeners=event._dispatchListeners;
	var dispatchInstances=event._dispatchInstances;
	if(process.env.NODE_ENV!=='production'){
	validateEventDispatches(event);
	}
	if(Array.isArray(dispatchListeners)){
	for(var i=0;i<dispatchListeners.length;i++){
	if(event.isPropagationStopped()){
	break;
	}
	
	executeDispatch(event,simulated,dispatchListeners[i],dispatchInstances[i]);
	}
	}else if(dispatchListeners){
	executeDispatch(event,simulated,dispatchListeners,dispatchInstances);
	}
	event._dispatchListeners=null;
	event._dispatchInstances=null;
	}
	
	
	
	
	
	
	
	
	function executeDispatchesInOrderStopAtTrueImpl(event){
	var dispatchListeners=event._dispatchListeners;
	var dispatchInstances=event._dispatchInstances;
	if(process.env.NODE_ENV!=='production'){
	validateEventDispatches(event);
	}
	if(Array.isArray(dispatchListeners)){
	for(var i=0;i<dispatchListeners.length;i++){
	if(event.isPropagationStopped()){
	break;
	}
	
	if(dispatchListeners[i](event,dispatchInstances[i])){
	return dispatchInstances[i];
	}
	}
	}else if(dispatchListeners){
	if(dispatchListeners(event,dispatchInstances)){
	return dispatchInstances;
	}
	}
	return null;
	}
	
	
	
	
	function executeDispatchesInOrderStopAtTrue(event){
	var ret=executeDispatchesInOrderStopAtTrueImpl(event);
	event._dispatchInstances=null;
	event._dispatchListeners=null;
	return ret;
	}
	
	
	
	
	
	
	
	
	
	
	function executeDirectDispatch(event){
	if(process.env.NODE_ENV!=='production'){
	validateEventDispatches(event);
	}
	var dispatchListener=event._dispatchListeners;
	var dispatchInstance=event._dispatchInstances;
	!!Array.isArray(dispatchListener)?process.env.NODE_ENV!=='production'?invariant(false,'executeDirectDispatch(...): Invalid `event`.'):_prodInvariant('103'):void 0;
	event.currentTarget=dispatchListener?EventPluginUtils.getNodeFromInstance(dispatchInstance):null;
	var res=dispatchListener?dispatchListener(event):null;
	event.currentTarget=null;
	event._dispatchListeners=null;
	event._dispatchInstances=null;
	return res;
	}
	
	
	
	
	
	function hasDispatches(event){
	return!!event._dispatchListeners;
	}
	
	
	
	
	var EventPluginUtils={
	isEndish:isEndish,
	isMoveish:isMoveish,
	isStartish:isStartish,
	
	executeDirectDispatch:executeDirectDispatch,
	executeDispatchesInOrder:executeDispatchesInOrder,
	executeDispatchesInOrderStopAtTrue:executeDispatchesInOrderStopAtTrue,
	hasDispatches:hasDispatches,
	
	getInstanceFromNode:function getInstanceFromNode(node){
	return ComponentTree.getInstanceFromNode(node);
	},
	getNodeFromInstance:function getNodeFromInstance(node){
	return ComponentTree.getNodeFromInstance(node);
	},
	isAncestor:function isAncestor(a,b){
	return TreeTraversal.isAncestor(a,b);
	},
	getLowestCommonAncestor:function getLowestCommonAncestor(a,b){
	return TreeTraversal.getLowestCommonAncestor(a,b);
	},
	getParentInstance:function getParentInstance(inst){
	return TreeTraversal.getParentInstance(inst);
	},
	traverseTwoPhase:function traverseTwoPhase(target,fn,arg){
	return TreeTraversal.traverseTwoPhase(target,fn,arg);
	},
	traverseEnterLeave:function traverseEnterLeave(from,to,fn,argFrom,argTo){
	return TreeTraversal.traverseEnterLeave(from,to,fn,argFrom,argTo);
	},
	
	injection:injection};
	
	
	module.exports=EventPluginUtils;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var caughtError=null;
	
	
	
	
	
	
	
	
	
	function invokeGuardedCallback(name,func,a){
	try{
	func(a);
	}catch(x){
	if(caughtError===null){
	caughtError=x;
	}
	}
	}
	
	var ReactErrorUtils={
	invokeGuardedCallback:invokeGuardedCallback,
	
	
	
	
	
	invokeGuardedCallbackWithCatch:invokeGuardedCallback,
	
	
	
	
	
	rethrowCaughtError:function rethrowCaughtError(){
	if(caughtError){
	var error=caughtError;
	caughtError=null;
	throw error;
	}
	}};
	
	
	if(process.env.NODE_ENV!=='production'){
	
	
	
	
	if(typeof window!=='undefined'&&typeof window.dispatchEvent==='function'&&typeof document!=='undefined'&&typeof document.createEvent==='function'){
	var fakeNode=document.createElement('react');
	ReactErrorUtils.invokeGuardedCallback=function(name,func,a){
	var boundFunc=func.bind(null,a);
	var evtType='react-'+name;
	fakeNode.addEventListener(evtType,boundFunc,false);
	var evt=document.createEvent('Event');
	
	evt.initEvent(evtType,false,false);
	fakeNode.dispatchEvent(evt);
	fakeNode.removeEventListener(evtType,boundFunc,false);
	};
	}
	}
	
	module.exports=ReactErrorUtils;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(35);
	
	var invariant=__webpack_require__(8);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function accumulateInto(current,next){
	!(next!=null)?process.env.NODE_ENV!=='production'?invariant(false,'accumulateInto(...): Accumulated items must not be null or undefined.'):_prodInvariant('30'):void 0;
	
	if(current==null){
	return next;
	}
	
	
	
	if(Array.isArray(current)){
	if(Array.isArray(next)){
	current.push.apply(current,next);
	return current;
	}
	current.push(next);
	return current;
	}
	
	if(Array.isArray(next)){
	
	return[current].concat(next);
	}
	
	return[current,next];
	}
	
	module.exports=accumulateInto;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 47 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	
	
	
	
	function forEachAccumulated(arr,cb,scope){
	if(Array.isArray(arr)){
	arr.forEach(cb,scope);
	}else if(arr){
	cb.call(scope,arr);
	}
	}
	
	module.exports=forEachAccumulated;

/***/ },
/* 48 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var canUseDOM=!!(typeof window!=='undefined'&&window.document&&window.document.createElement);
	
	
	
	
	
	
	
	var ExecutionEnvironment={
	
	canUseDOM:canUseDOM,
	
	canUseWorkers:typeof Worker!=='undefined',
	
	canUseEventListeners:canUseDOM&&!!(window.addEventListener||window.attachEvent),
	
	canUseViewport:canUseDOM&&!!window.screen,
	
	isInWorker:!canUseDOM};
	
	
	
	module.exports=ExecutionEnvironment;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _assign=__webpack_require__(4);
	
	var PooledClass=__webpack_require__(50);
	
	var getTextContentAccessor=__webpack_require__(51);
	
	
	
	
	
	
	
	
	
	
	
	
	function FallbackCompositionState(root){
	this._root=root;
	this._startText=this.getText();
	this._fallbackText=null;
	}
	
	_assign(FallbackCompositionState.prototype,{
	destructor:function destructor(){
	this._root=null;
	this._startText=null;
	this._fallbackText=null;
	},
	
	
	
	
	
	
	getText:function getText(){
	if('value'in this._root){
	return this._root.value;
	}
	return this._root[getTextContentAccessor()];
	},
	
	
	
	
	
	
	
	getData:function getData(){
	if(this._fallbackText){
	return this._fallbackText;
	}
	
	var start;
	var startValue=this._startText;
	var startLength=startValue.length;
	var end;
	var endValue=this.getText();
	var endLength=endValue.length;
	
	for(start=0;start<startLength;start++){
	if(startValue[start]!==endValue[start]){
	break;
	}
	}
	
	var minEnd=startLength-start;
	for(end=1;end<=minEnd;end++){
	if(startValue[startLength-end]!==endValue[endLength-end]){
	break;
	}
	}
	
	var sliceTail=end>1?1-end:undefined;
	this._fallbackText=endValue.slice(start,sliceTail);
	return this._fallbackText;
	}});
	
	
	PooledClass.addPoolingTo(FallbackCompositionState);
	
	module.exports=FallbackCompositionState;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(35);
	
	var invariant=__webpack_require__(8);
	
	
	
	
	
	
	
	
	var oneArgumentPooler=function oneArgumentPooler(copyFieldsFrom){
	var Klass=this;
	if(Klass.instancePool.length){
	var instance=Klass.instancePool.pop();
	Klass.call(instance,copyFieldsFrom);
	return instance;
	}else{
	return new Klass(copyFieldsFrom);
	}
	};
	
	var twoArgumentPooler=function twoArgumentPooler(a1,a2){
	var Klass=this;
	if(Klass.instancePool.length){
	var instance=Klass.instancePool.pop();
	Klass.call(instance,a1,a2);
	return instance;
	}else{
	return new Klass(a1,a2);
	}
	};
	
	var threeArgumentPooler=function threeArgumentPooler(a1,a2,a3){
	var Klass=this;
	if(Klass.instancePool.length){
	var instance=Klass.instancePool.pop();
	Klass.call(instance,a1,a2,a3);
	return instance;
	}else{
	return new Klass(a1,a2,a3);
	}
	};
	
	var fourArgumentPooler=function fourArgumentPooler(a1,a2,a3,a4){
	var Klass=this;
	if(Klass.instancePool.length){
	var instance=Klass.instancePool.pop();
	Klass.call(instance,a1,a2,a3,a4);
	return instance;
	}else{
	return new Klass(a1,a2,a3,a4);
	}
	};
	
	var fiveArgumentPooler=function fiveArgumentPooler(a1,a2,a3,a4,a5){
	var Klass=this;
	if(Klass.instancePool.length){
	var instance=Klass.instancePool.pop();
	Klass.call(instance,a1,a2,a3,a4,a5);
	return instance;
	}else{
	return new Klass(a1,a2,a3,a4,a5);
	}
	};
	
	var standardReleaser=function standardReleaser(instance){
	var Klass=this;
	!(instance instanceof Klass)?process.env.NODE_ENV!=='production'?invariant(false,'Trying to release an instance into a pool of a different type.'):_prodInvariant('25'):void 0;
	instance.destructor();
	if(Klass.instancePool.length<Klass.poolSize){
	Klass.instancePool.push(instance);
	}
	};
	
	var DEFAULT_POOL_SIZE=10;
	var DEFAULT_POOLER=oneArgumentPooler;
	
	
	
	
	
	
	
	
	
	
	var addPoolingTo=function addPoolingTo(CopyConstructor,pooler){
	
	
	var NewKlass=CopyConstructor;
	NewKlass.instancePool=[];
	NewKlass.getPooled=pooler||DEFAULT_POOLER;
	if(!NewKlass.poolSize){
	NewKlass.poolSize=DEFAULT_POOL_SIZE;
	}
	NewKlass.release=standardReleaser;
	return NewKlass;
	};
	
	var PooledClass={
	addPoolingTo:addPoolingTo,
	oneArgumentPooler:oneArgumentPooler,
	twoArgumentPooler:twoArgumentPooler,
	threeArgumentPooler:threeArgumentPooler,
	fourArgumentPooler:fourArgumentPooler,
	fiveArgumentPooler:fiveArgumentPooler};
	
	
	module.exports=PooledClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ExecutionEnvironment=__webpack_require__(48);
	
	var contentKey=null;
	
	
	
	
	
	
	
	function getTextContentAccessor(){
	if(!contentKey&&ExecutionEnvironment.canUseDOM){
	
	
	contentKey='textContent'in document.documentElement?'textContent':'innerText';
	}
	return contentKey;
	}
	
	module.exports=getTextContentAccessor;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var SyntheticEvent=__webpack_require__(53);
	
	
	
	
	
	var CompositionEventInterface={
	data:null};
	
	
	
	
	
	
	
	
	function SyntheticCompositionEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){
	return SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);
	}
	
	SyntheticEvent.augmentClass(SyntheticCompositionEvent,CompositionEventInterface);
	
	module.exports=SyntheticCompositionEvent;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _assign=__webpack_require__(4);
	
	var PooledClass=__webpack_require__(50);
	
	var emptyFunction=__webpack_require__(12);
	var warning=__webpack_require__(11);
	
	var didWarnForAddedNewProperty=false;
	var isProxySupported=typeof Proxy==='function';
	
	var shouldBeReleasedProperties=['dispatchConfig','_targetInst','nativeEvent','isDefaultPrevented','isPropagationStopped','_dispatchListeners','_dispatchInstances'];
	
	
	
	
	
	var EventInterface={
	type:null,
	target:null,
	
	currentTarget:emptyFunction.thatReturnsNull,
	eventPhase:null,
	bubbles:null,
	cancelable:null,
	timeStamp:function timeStamp(event){
	return event.timeStamp||Date.now();
	},
	defaultPrevented:null,
	isTrusted:null};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function SyntheticEvent(dispatchConfig,targetInst,nativeEvent,nativeEventTarget){
	if(process.env.NODE_ENV!=='production'){
	
	delete this.nativeEvent;
	delete this.preventDefault;
	delete this.stopPropagation;
	}
	
	this.dispatchConfig=dispatchConfig;
	this._targetInst=targetInst;
	this.nativeEvent=nativeEvent;
	
	var Interface=this.constructor.Interface;
	for(var propName in Interface){
	if(!Interface.hasOwnProperty(propName)){
	continue;
	}
	if(process.env.NODE_ENV!=='production'){
	delete this[propName];
	}
	var normalize=Interface[propName];
	if(normalize){
	this[propName]=normalize(nativeEvent);
	}else{
	if(propName==='target'){
	this.target=nativeEventTarget;
	}else{
	this[propName]=nativeEvent[propName];
	}
	}
	}
	
	var defaultPrevented=nativeEvent.defaultPrevented!=null?nativeEvent.defaultPrevented:nativeEvent.returnValue===false;
	if(defaultPrevented){
	this.isDefaultPrevented=emptyFunction.thatReturnsTrue;
	}else{
	this.isDefaultPrevented=emptyFunction.thatReturnsFalse;
	}
	this.isPropagationStopped=emptyFunction.thatReturnsFalse;
	return this;
	}
	
	_assign(SyntheticEvent.prototype,{
	
	preventDefault:function preventDefault(){
	this.defaultPrevented=true;
	var event=this.nativeEvent;
	if(!event){
	return;
	}
	
	if(event.preventDefault){
	event.preventDefault();
	}else if(typeof event.returnValue!=='unknown'){
	
	event.returnValue=false;
	}
	this.isDefaultPrevented=emptyFunction.thatReturnsTrue;
	},
	
	stopPropagation:function stopPropagation(){
	var event=this.nativeEvent;
	if(!event){
	return;
	}
	
	if(event.stopPropagation){
	event.stopPropagation();
	}else if(typeof event.cancelBubble!=='unknown'){
	
	
	
	
	
	
	event.cancelBubble=true;
	}
	
	this.isPropagationStopped=emptyFunction.thatReturnsTrue;
	},
	
	
	
	
	
	
	persist:function persist(){
	this.isPersistent=emptyFunction.thatReturnsTrue;
	},
	
	
	
	
	
	
	isPersistent:emptyFunction.thatReturnsFalse,
	
	
	
	
	destructor:function destructor(){
	var Interface=this.constructor.Interface;
	for(var propName in Interface){
	if(process.env.NODE_ENV!=='production'){
	Object.defineProperty(this,propName,getPooledWarningPropertyDefinition(propName,Interface[propName]));
	}else{
	this[propName]=null;
	}
	}
	for(var i=0;i<shouldBeReleasedProperties.length;i++){
	this[shouldBeReleasedProperties[i]]=null;
	}
	if(process.env.NODE_ENV!=='production'){
	Object.defineProperty(this,'nativeEvent',getPooledWarningPropertyDefinition('nativeEvent',null));
	Object.defineProperty(this,'preventDefault',getPooledWarningPropertyDefinition('preventDefault',emptyFunction));
	Object.defineProperty(this,'stopPropagation',getPooledWarningPropertyDefinition('stopPropagation',emptyFunction));
	}
	}});
	
	
	
	SyntheticEvent.Interface=EventInterface;
	
	if(process.env.NODE_ENV!=='production'){
	if(isProxySupported){
	
	SyntheticEvent=new Proxy(SyntheticEvent,{
	construct:function construct(target,args){
	return this.apply(target,Object.create(target.prototype),args);
	},
	apply:function apply(constructor,that,args){
	return new Proxy(constructor.apply(that,args),{
	set:function set(target,prop,value){
	if(prop!=='isPersistent'&&!target.constructor.Interface.hasOwnProperty(prop)&&shouldBeReleasedProperties.indexOf(prop)===-1){
	process.env.NODE_ENV!=='production'?warning(didWarnForAddedNewProperty||target.isPersistent(),'This synthetic event is reused for performance reasons. If you\'re '+'seeing this, you\'re adding a new property in the synthetic event object. '+'The property is never released. See '+'https://fb.me/react-event-pooling for more information.'):void 0;
	didWarnForAddedNewProperty=true;
	}
	target[prop]=value;
	return true;
	}});
	
	}});
	
	
	}
	}
	
	
	
	
	
	
	SyntheticEvent.augmentClass=function(Class,Interface){
	var Super=this;
	
	var E=function E(){};
	E.prototype=Super.prototype;
	var prototype=new E();
	
	_assign(prototype,Class.prototype);
	Class.prototype=prototype;
	Class.prototype.constructor=Class;
	
	Class.Interface=_assign({},Super.Interface,Interface);
	Class.augmentClass=Super.augmentClass;
	
	PooledClass.addPoolingTo(Class,PooledClass.fourArgumentPooler);
	};
	
	PooledClass.addPoolingTo(SyntheticEvent,PooledClass.fourArgumentPooler);
	
	module.exports=SyntheticEvent;
	
	
	
	
	
	
	
	
	function getPooledWarningPropertyDefinition(propName,getVal){
	var isFunction=typeof getVal==='function';
	return{
	configurable:true,
	set:set,
	get:get};
	
	
	function set(val){
	var action=isFunction?'setting the method':'setting the property';
	warn(action,'This is effectively a no-op');
	return val;
	}
	
	function get(){
	var action=isFunction?'accessing the method':'accessing the property';
	var result=isFunction?'This is a no-op function':'This is set to null';
	warn(action,result);
	return getVal;
	}
	
	function warn(action,result){
	var warningCondition=false;
	process.env.NODE_ENV!=='production'?warning(warningCondition,'This synthetic event is reused for performance reasons. If you\'re seeing this, '+'you\'re %s `%s` on a released/nullified synthetic event. %s. '+'If you must keep the original synthetic event around, use event.persist(). '+'See https://fb.me/react-event-pooling for more information.',action,propName,result):void 0;
	}
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var SyntheticEvent=__webpack_require__(53);
	
	
	
	
	
	
	var InputEventInterface={
	data:null};
	
	
	
	
	
	
	
	
	function SyntheticInputEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){
	return SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);
	}
	
	SyntheticEvent.augmentClass(SyntheticInputEvent,InputEventInterface);
	
	module.exports=SyntheticInputEvent;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var EventPluginHub=__webpack_require__(42);
	var EventPropagators=__webpack_require__(41);
	var ExecutionEnvironment=__webpack_require__(48);
	var ReactDOMComponentTree=__webpack_require__(34);
	var ReactUpdates=__webpack_require__(56);
	var SyntheticEvent=__webpack_require__(53);
	
	var getEventTarget=__webpack_require__(69);
	var isEventSupported=__webpack_require__(70);
	var isTextInputElement=__webpack_require__(71);
	
	var eventTypes={
	change:{
	phasedRegistrationNames:{
	bubbled:'onChange',
	captured:'onChangeCapture'},
	
	dependencies:['topBlur','topChange','topClick','topFocus','topInput','topKeyDown','topKeyUp','topSelectionChange']}};
	
	
	
	
	
	
	var activeElement=null;
	var activeElementInst=null;
	var activeElementValue=null;
	var activeElementValueProp=null;
	
	
	
	
	function shouldUseChangeEvent(elem){
	var nodeName=elem.nodeName&&elem.nodeName.toLowerCase();
	return nodeName==='select'||nodeName==='input'&&elem.type==='file';
	}
	
	var doesChangeEventBubble=false;
	if(ExecutionEnvironment.canUseDOM){
	
	doesChangeEventBubble=isEventSupported('change')&&(!document.documentMode||document.documentMode>8);
	}
	
	function manualDispatchChangeEvent(nativeEvent){
	var event=SyntheticEvent.getPooled(eventTypes.change,activeElementInst,nativeEvent,getEventTarget(nativeEvent));
	EventPropagators.accumulateTwoPhaseDispatches(event);
	
	
	
	
	
	
	
	
	
	
	
	
	ReactUpdates.batchedUpdates(runEventInBatch,event);
	}
	
	function runEventInBatch(event){
	EventPluginHub.enqueueEvents(event);
	EventPluginHub.processEventQueue(false);
	}
	
	function startWatchingForChangeEventIE8(target,targetInst){
	activeElement=target;
	activeElementInst=targetInst;
	activeElement.attachEvent('onchange',manualDispatchChangeEvent);
	}
	
	function stopWatchingForChangeEventIE8(){
	if(!activeElement){
	return;
	}
	activeElement.detachEvent('onchange',manualDispatchChangeEvent);
	activeElement=null;
	activeElementInst=null;
	}
	
	function getTargetInstForChangeEvent(topLevelType,targetInst){
	if(topLevelType==='topChange'){
	return targetInst;
	}
	}
	function handleEventsForChangeEventIE8(topLevelType,target,targetInst){
	if(topLevelType==='topFocus'){
	
	
	stopWatchingForChangeEventIE8();
	startWatchingForChangeEventIE8(target,targetInst);
	}else if(topLevelType==='topBlur'){
	stopWatchingForChangeEventIE8();
	}
	}
	
	
	
	
	var isInputEventSupported=false;
	if(ExecutionEnvironment.canUseDOM){
	
	
	
	
	isInputEventSupported=isEventSupported('input')&&(!document.documentMode||document.documentMode>11);
	}
	
	
	
	
	
	var newValueProp={
	get:function get(){
	return activeElementValueProp.get.call(this);
	},
	set:function set(val){
	
	activeElementValue=''+val;
	activeElementValueProp.set.call(this,val);
	}};
	
	
	
	
	
	
	
	function startWatchingForValueChange(target,targetInst){
	activeElement=target;
	activeElementInst=targetInst;
	activeElementValue=target.value;
	activeElementValueProp=Object.getOwnPropertyDescriptor(target.constructor.prototype,'value');
	
	
	
	Object.defineProperty(activeElement,'value',newValueProp);
	if(activeElement.attachEvent){
	activeElement.attachEvent('onpropertychange',handlePropertyChange);
	}else{
	activeElement.addEventListener('propertychange',handlePropertyChange,false);
	}
	}
	
	
	
	
	
	function stopWatchingForValueChange(){
	if(!activeElement){
	return;
	}
	
	
	delete activeElement.value;
	
	if(activeElement.detachEvent){
	activeElement.detachEvent('onpropertychange',handlePropertyChange);
	}else{
	activeElement.removeEventListener('propertychange',handlePropertyChange,false);
	}
	
	activeElement=null;
	activeElementInst=null;
	activeElementValue=null;
	activeElementValueProp=null;
	}
	
	
	
	
	
	function handlePropertyChange(nativeEvent){
	if(nativeEvent.propertyName!=='value'){
	return;
	}
	var value=nativeEvent.srcElement.value;
	if(value===activeElementValue){
	return;
	}
	activeElementValue=value;
	
	manualDispatchChangeEvent(nativeEvent);
	}
	
	
	
	
	function getTargetInstForInputEvent(topLevelType,targetInst){
	if(topLevelType==='topInput'){
	
	
	return targetInst;
	}
	}
	
	function handleEventsForInputEventIE(topLevelType,target,targetInst){
	if(topLevelType==='topFocus'){
	
	
	
	
	
	
	
	
	
	
	
	
	
	stopWatchingForValueChange();
	startWatchingForValueChange(target,targetInst);
	}else if(topLevelType==='topBlur'){
	stopWatchingForValueChange();
	}
	}
	
	
	function getTargetInstForInputEventIE(topLevelType,targetInst){
	if(topLevelType==='topSelectionChange'||topLevelType==='topKeyUp'||topLevelType==='topKeyDown'){
	
	
	
	
	
	
	
	
	
	
	if(activeElement&&activeElement.value!==activeElementValue){
	activeElementValue=activeElement.value;
	return activeElementInst;
	}
	}
	}
	
	
	
	
	function shouldUseClickEvent(elem){
	
	
	
	return elem.nodeName&&elem.nodeName.toLowerCase()==='input'&&(elem.type==='checkbox'||elem.type==='radio');
	}
	
	function getTargetInstForClickEvent(topLevelType,targetInst){
	if(topLevelType==='topClick'){
	return targetInst;
	}
	}
	
	
	
	
	
	
	
	
	
	
	
	var ChangeEventPlugin={
	
	eventTypes:eventTypes,
	
	extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){
	var targetNode=targetInst?ReactDOMComponentTree.getNodeFromInstance(targetInst):window;
	
	var getTargetInstFunc,handleEventFunc;
	if(shouldUseChangeEvent(targetNode)){
	if(doesChangeEventBubble){
	getTargetInstFunc=getTargetInstForChangeEvent;
	}else{
	handleEventFunc=handleEventsForChangeEventIE8;
	}
	}else if(isTextInputElement(targetNode)){
	if(isInputEventSupported){
	getTargetInstFunc=getTargetInstForInputEvent;
	}else{
	getTargetInstFunc=getTargetInstForInputEventIE;
	handleEventFunc=handleEventsForInputEventIE;
	}
	}else if(shouldUseClickEvent(targetNode)){
	getTargetInstFunc=getTargetInstForClickEvent;
	}
	
	if(getTargetInstFunc){
	var inst=getTargetInstFunc(topLevelType,targetInst);
	if(inst){
	var event=SyntheticEvent.getPooled(eventTypes.change,inst,nativeEvent,nativeEventTarget);
	event.type='change';
	EventPropagators.accumulateTwoPhaseDispatches(event);
	return event;
	}
	}
	
	if(handleEventFunc){
	handleEventFunc(topLevelType,targetNode,targetInst);
	}
	}};
	
	
	
	module.exports=ChangeEventPlugin;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(35),
	_assign=__webpack_require__(4);
	
	var CallbackQueue=__webpack_require__(57);
	var PooledClass=__webpack_require__(50);
	var ReactFeatureFlags=__webpack_require__(58);
	var ReactReconciler=__webpack_require__(59);
	var Transaction=__webpack_require__(68);
	
	var invariant=__webpack_require__(8);
	
	var dirtyComponents=[];
	var updateBatchNumber=0;
	var asapCallbackQueue=CallbackQueue.getPooled();
	var asapEnqueued=false;
	
	var batchingStrategy=null;
	
	function ensureInjected(){
	!(ReactUpdates.ReactReconcileTransaction&&batchingStrategy)?process.env.NODE_ENV!=='production'?invariant(false,'ReactUpdates: must inject a reconcile transaction class and batching strategy'):_prodInvariant('123'):void 0;
	}
	
	var NESTED_UPDATES={
	initialize:function initialize(){
	this.dirtyComponentsLength=dirtyComponents.length;
	},
	close:function close(){
	if(this.dirtyComponentsLength!==dirtyComponents.length){
	
	
	
	
	
	dirtyComponents.splice(0,this.dirtyComponentsLength);
	flushBatchedUpdates();
	}else{
	dirtyComponents.length=0;
	}
	}};
	
	
	var UPDATE_QUEUEING={
	initialize:function initialize(){
	this.callbackQueue.reset();
	},
	close:function close(){
	this.callbackQueue.notifyAll();
	}};
	
	
	var TRANSACTION_WRAPPERS=[NESTED_UPDATES,UPDATE_QUEUEING];
	
	function ReactUpdatesFlushTransaction(){
	this.reinitializeTransaction();
	this.dirtyComponentsLength=null;
	this.callbackQueue=CallbackQueue.getPooled();
	this.reconcileTransaction=ReactUpdates.ReactReconcileTransaction.getPooled(
	true);
	}
	
	_assign(ReactUpdatesFlushTransaction.prototype,Transaction,{
	getTransactionWrappers:function getTransactionWrappers(){
	return TRANSACTION_WRAPPERS;
	},
	
	destructor:function destructor(){
	this.dirtyComponentsLength=null;
	CallbackQueue.release(this.callbackQueue);
	this.callbackQueue=null;
	ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
	this.reconcileTransaction=null;
	},
	
	perform:function perform(method,scope,a){
	
	
	return Transaction.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,method,scope,a);
	}});
	
	
	PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);
	
	function batchedUpdates(callback,a,b,c,d,e){
	ensureInjected();
	return batchingStrategy.batchedUpdates(callback,a,b,c,d,e);
	}
	
	
	
	
	
	
	
	
	function mountOrderComparator(c1,c2){
	return c1._mountOrder-c2._mountOrder;
	}
	
	function runBatchedUpdates(transaction){
	var len=transaction.dirtyComponentsLength;
	!(len===dirtyComponents.length)?process.env.NODE_ENV!=='production'?invariant(false,'Expected flush transaction\'s stored dirty-components length (%s) to match dirty-components array length (%s).',len,dirtyComponents.length):_prodInvariant('124',len,dirtyComponents.length):void 0;
	
	
	
	
	dirtyComponents.sort(mountOrderComparator);
	
	
	
	
	
	
	updateBatchNumber++;
	
	for(var i=0;i<len;i++){
	
	
	
	var component=dirtyComponents[i];
	
	
	
	
	var callbacks=component._pendingCallbacks;
	component._pendingCallbacks=null;
	
	var markerName;
	if(ReactFeatureFlags.logTopLevelRenders){
	var namedComponent=component;
	
	if(component._currentElement.type.isReactTopLevelWrapper){
	namedComponent=component._renderedComponent;
	}
	markerName='React update: '+namedComponent.getName();
	console.time(markerName);
	}
	
	ReactReconciler.performUpdateIfNecessary(component,transaction.reconcileTransaction,updateBatchNumber);
	
	if(markerName){
	console.timeEnd(markerName);
	}
	
	if(callbacks){
	for(var j=0;j<callbacks.length;j++){
	transaction.callbackQueue.enqueue(callbacks[j],component.getPublicInstance());
	}
	}
	}
	}
	
	var flushBatchedUpdates=function flushBatchedUpdates(){
	
	
	
	
	while(dirtyComponents.length||asapEnqueued){
	if(dirtyComponents.length){
	var transaction=ReactUpdatesFlushTransaction.getPooled();
	transaction.perform(runBatchedUpdates,null,transaction);
	ReactUpdatesFlushTransaction.release(transaction);
	}
	
	if(asapEnqueued){
	asapEnqueued=false;
	var queue=asapCallbackQueue;
	asapCallbackQueue=CallbackQueue.getPooled();
	queue.notifyAll();
	CallbackQueue.release(queue);
	}
	}
	};
	
	
	
	
	
	function enqueueUpdate(component){
	ensureInjected();
	
	
	
	
	
	
	
	if(!batchingStrategy.isBatchingUpdates){
	batchingStrategy.batchedUpdates(enqueueUpdate,component);
	return;
	}
	
	dirtyComponents.push(component);
	if(component._updateBatchNumber==null){
	component._updateBatchNumber=updateBatchNumber+1;
	}
	}
	
	
	
	
	
	function asap(callback,context){
	!batchingStrategy.isBatchingUpdates?process.env.NODE_ENV!=='production'?invariant(false,'ReactUpdates.asap: Can\'t enqueue an asap callback in a context whereupdates are not being batched.'):_prodInvariant('125'):void 0;
	asapCallbackQueue.enqueue(callback,context);
	asapEnqueued=true;
	}
	
	var ReactUpdatesInjection={
	injectReconcileTransaction:function injectReconcileTransaction(ReconcileTransaction){
	!ReconcileTransaction?process.env.NODE_ENV!=='production'?invariant(false,'ReactUpdates: must provide a reconcile transaction class'):_prodInvariant('126'):void 0;
	ReactUpdates.ReactReconcileTransaction=ReconcileTransaction;
	},
	
	injectBatchingStrategy:function injectBatchingStrategy(_batchingStrategy){
	!_batchingStrategy?process.env.NODE_ENV!=='production'?invariant(false,'ReactUpdates: must provide a batching strategy'):_prodInvariant('127'):void 0;
	!(typeof _batchingStrategy.batchedUpdates==='function')?process.env.NODE_ENV!=='production'?invariant(false,'ReactUpdates: must provide a batchedUpdates() function'):_prodInvariant('128'):void 0;
	!(typeof _batchingStrategy.isBatchingUpdates==='boolean')?process.env.NODE_ENV!=='production'?invariant(false,'ReactUpdates: must provide an isBatchingUpdates boolean attribute'):_prodInvariant('129'):void 0;
	batchingStrategy=_batchingStrategy;
	}};
	
	
	var ReactUpdates={
	
	
	
	
	
	
	ReactReconcileTransaction:null,
	
	batchedUpdates:batchedUpdates,
	enqueueUpdate:enqueueUpdate,
	flushBatchedUpdates:flushBatchedUpdates,
	injection:ReactUpdatesInjection,
	asap:asap};
	
	
	module.exports=ReactUpdates;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(35);
	
	function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
	
	var PooledClass=__webpack_require__(50);
	
	var invariant=__webpack_require__(8);
	
	
	
	
	
	
	
	
	
	
	
	
	
	var CallbackQueue=function(){
	function CallbackQueue(arg){
	_classCallCheck(this,CallbackQueue);
	
	this._callbacks=null;
	this._contexts=null;
	this._arg=arg;
	}
	
	
	
	
	
	
	
	
	
	
	CallbackQueue.prototype.enqueue=function enqueue(callback,context){
	this._callbacks=this._callbacks||[];
	this._callbacks.push(callback);
	this._contexts=this._contexts||[];
	this._contexts.push(context);
	};
	
	
	
	
	
	
	
	
	
	CallbackQueue.prototype.notifyAll=function notifyAll(){
	var callbacks=this._callbacks;
	var contexts=this._contexts;
	var arg=this._arg;
	if(callbacks&&contexts){
	!(callbacks.length===contexts.length)?process.env.NODE_ENV!=='production'?invariant(false,'Mismatched list of contexts in callback queue'):_prodInvariant('24'):void 0;
	this._callbacks=null;
	this._contexts=null;
	for(var i=0;i<callbacks.length;i++){
	callbacks[i].call(contexts[i],arg);
	}
	callbacks.length=0;
	contexts.length=0;
	}
	};
	
	CallbackQueue.prototype.checkpoint=function checkpoint(){
	return this._callbacks?this._callbacks.length:0;
	};
	
	CallbackQueue.prototype.rollback=function rollback(len){
	if(this._callbacks&&this._contexts){
	this._callbacks.length=len;
	this._contexts.length=len;
	}
	};
	
	
	
	
	
	
	
	
	CallbackQueue.prototype.reset=function reset(){
	this._callbacks=null;
	this._contexts=null;
	};
	
	
	
	
	
	
	CallbackQueue.prototype.destructor=function destructor(){
	this.reset();
	};
	
	return CallbackQueue;
	}();
	
	module.exports=PooledClass.addPoolingTo(CallbackQueue);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 58 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ReactFeatureFlags={
	
	
	
	logTopLevelRenders:false};
	
	
	module.exports=ReactFeatureFlags;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ReactRef=__webpack_require__(60);
	var ReactInstrumentation=__webpack_require__(62);
	
	var warning=__webpack_require__(11);
	
	
	
	
	
	function attachRefs(){
	ReactRef.attachRefs(this,this._currentElement);
	}
	
	var ReactReconciler={
	
	
	
	
	
	
	
	
	
	
	
	
	mountComponent:function mountComponent(internalInstance,transaction,hostParent,hostContainerInfo,context,parentDebugID)
	{
	if(process.env.NODE_ENV!=='production'){
	if(internalInstance._debugID!==0){
	ReactInstrumentation.debugTool.onBeforeMountComponent(internalInstance._debugID,internalInstance._currentElement,parentDebugID);
	}
	}
	var markup=internalInstance.mountComponent(transaction,hostParent,hostContainerInfo,context,parentDebugID);
	if(internalInstance._currentElement&&internalInstance._currentElement.ref!=null){
	transaction.getReactMountReady().enqueue(attachRefs,internalInstance);
	}
	if(process.env.NODE_ENV!=='production'){
	if(internalInstance._debugID!==0){
	ReactInstrumentation.debugTool.onMountComponent(internalInstance._debugID);
	}
	}
	return markup;
	},
	
	
	
	
	
	getHostNode:function getHostNode(internalInstance){
	return internalInstance.getHostNode();
	},
	
	
	
	
	
	
	
	unmountComponent:function unmountComponent(internalInstance,safely){
	if(process.env.NODE_ENV!=='production'){
	if(internalInstance._debugID!==0){
	ReactInstrumentation.debugTool.onBeforeUnmountComponent(internalInstance._debugID);
	}
	}
	ReactRef.detachRefs(internalInstance,internalInstance._currentElement);
	internalInstance.unmountComponent(safely);
	if(process.env.NODE_ENV!=='production'){
	if(internalInstance._debugID!==0){
	ReactInstrumentation.debugTool.onUnmountComponent(internalInstance._debugID);
	}
	}
	},
	
	
	
	
	
	
	
	
	
	
	receiveComponent:function receiveComponent(internalInstance,nextElement,transaction,context){
	var prevElement=internalInstance._currentElement;
	
	if(nextElement===prevElement&&context===internalInstance._context){
	
	
	
	
	
	
	
	
	
	
	return;
	}
	
	if(process.env.NODE_ENV!=='production'){
	if(internalInstance._debugID!==0){
	ReactInstrumentation.debugTool.onBeforeUpdateComponent(internalInstance._debugID,nextElement);
	}
	}
	
	var refsChanged=ReactRef.shouldUpdateRefs(prevElement,nextElement);
	
	if(refsChanged){
	ReactRef.detachRefs(internalInstance,prevElement);
	}
	
	internalInstance.receiveComponent(nextElement,transaction,context);
	
	if(refsChanged&&internalInstance._currentElement&&internalInstance._currentElement.ref!=null){
	transaction.getReactMountReady().enqueue(attachRefs,internalInstance);
	}
	
	if(process.env.NODE_ENV!=='production'){
	if(internalInstance._debugID!==0){
	ReactInstrumentation.debugTool.onUpdateComponent(internalInstance._debugID);
	}
	}
	},
	
	
	
	
	
	
	
	
	performUpdateIfNecessary:function performUpdateIfNecessary(internalInstance,transaction,updateBatchNumber){
	if(internalInstance._updateBatchNumber!==updateBatchNumber){
	
	
	process.env.NODE_ENV!=='production'?warning(internalInstance._updateBatchNumber==null||internalInstance._updateBatchNumber===updateBatchNumber+1,'performUpdateIfNecessary: Unexpected batch number (current %s, '+'pending %s)',updateBatchNumber,internalInstance._updateBatchNumber):void 0;
	return;
	}
	if(process.env.NODE_ENV!=='production'){
	if(internalInstance._debugID!==0){
	ReactInstrumentation.debugTool.onBeforeUpdateComponent(internalInstance._debugID,internalInstance._currentElement);
	}
	}
	internalInstance.performUpdateIfNecessary(transaction);
	if(process.env.NODE_ENV!=='production'){
	if(internalInstance._debugID!==0){
	ReactInstrumentation.debugTool.onUpdateComponent(internalInstance._debugID);
	}
	}
	}};
	
	
	
	module.exports=ReactReconciler;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	var ReactOwner=__webpack_require__(61);
	
	var ReactRef={};
	
	function attachRef(ref,component,owner){
	if(typeof ref==='function'){
	ref(component.getPublicInstance());
	}else{
	
	ReactOwner.addComponentAsRefTo(component,ref,owner);
	}
	}
	
	function detachRef(ref,component,owner){
	if(typeof ref==='function'){
	ref(null);
	}else{
	
	ReactOwner.removeComponentAsRefFrom(component,ref,owner);
	}
	}
	
	ReactRef.attachRefs=function(instance,element){
	if(element===null||(typeof element==='undefined'?'undefined':_typeof(element))!=='object'){
	return;
	}
	var ref=element.ref;
	if(ref!=null){
	attachRef(ref,instance,element._owner);
	}
	};
	
	ReactRef.shouldUpdateRefs=function(prevElement,nextElement){
	
	
	
	
	
	
	
	
	
	
	
	
	var prevRef=null;
	var prevOwner=null;
	if(prevElement!==null&&(typeof prevElement==='undefined'?'undefined':_typeof(prevElement))==='object'){
	prevRef=prevElement.ref;
	prevOwner=prevElement._owner;
	}
	
	var nextRef=null;
	var nextOwner=null;
	if(nextElement!==null&&(typeof nextElement==='undefined'?'undefined':_typeof(nextElement))==='object'){
	nextRef=nextElement.ref;
	nextOwner=nextElement._owner;
	}
	
	return prevRef!==nextRef||
	
	typeof nextRef==='string'&&nextOwner!==prevOwner;
	};
	
	ReactRef.detachRefs=function(instance,element){
	if(element===null||(typeof element==='undefined'?'undefined':_typeof(element))!=='object'){
	return;
	}
	var ref=element.ref;
	if(ref!=null){
	detachRef(ref,instance,element._owner);
	}
	};
	
	module.exports=ReactRef;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(35);
	
	var invariant=__webpack_require__(8);
	
	
	
	
	
	
	function isValidOwner(object){
	return!!(object&&typeof object.attachRef==='function'&&typeof object.detachRef==='function');
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var ReactOwner={
	
	
	
	
	
	
	
	
	
	addComponentAsRefTo:function addComponentAsRefTo(component,ref,owner){
	!isValidOwner(owner)?process.env.NODE_ENV!=='production'?invariant(false,'addComponentAsRefTo(...): Only a ReactOwner can have refs. You might be adding a ref to a component that was not created inside a component\'s `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).'):_prodInvariant('119'):void 0;
	owner.attachRef(ref,component);
	},
	
	
	
	
	
	
	
	
	
	
	removeComponentAsRefFrom:function removeComponentAsRefFrom(component,ref,owner){
	!isValidOwner(owner)?process.env.NODE_ENV!=='production'?invariant(false,'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might be removing a ref to a component that was not created inside a component\'s `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).'):_prodInvariant('120'):void 0;
	var ownerPublicInstance=owner.getPublicInstance();
	
	
	if(ownerPublicInstance&&ownerPublicInstance.refs[ref]===component.getPublicInstance()){
	owner.detachRef(ref);
	}
	}};
	
	
	
	module.exports=ReactOwner;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	var debugTool=null;
	
	if(process.env.NODE_ENV!=='production'){
	var ReactDebugTool=__webpack_require__(63);
	debugTool=ReactDebugTool;
	}
	
	module.exports={debugTool:debugTool};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	var ReactInvalidSetStateWarningHook=__webpack_require__(64);
	var ReactHostOperationHistoryHook=__webpack_require__(65);
	var ReactComponentTreeHook=__webpack_require__(26);
	var ExecutionEnvironment=__webpack_require__(48);
	
	var performanceNow=__webpack_require__(66);
	var warning=__webpack_require__(11);
	
	var hooks=[];
	var didHookThrowForEvent={};
	
	function callHook(event,fn,context,arg1,arg2,arg3,arg4,arg5){
	try{
	fn.call(context,arg1,arg2,arg3,arg4,arg5);
	}catch(e){
	process.env.NODE_ENV!=='production'?warning(didHookThrowForEvent[event],'Exception thrown by hook while handling %s: %s',event,e+'\n'+e.stack):void 0;
	didHookThrowForEvent[event]=true;
	}
	}
	
	function emitEvent(event,arg1,arg2,arg3,arg4,arg5){
	for(var i=0;i<hooks.length;i++){
	var hook=hooks[i];
	var fn=hook[event];
	if(fn){
	callHook(event,fn,hook,arg1,arg2,arg3,arg4,arg5);
	}
	}
	}
	
	var _isProfiling=false;
	var flushHistory=[];
	var lifeCycleTimerStack=[];
	var currentFlushNesting=0;
	var currentFlushMeasurements=[];
	var currentFlushStartTime=0;
	var currentTimerDebugID=null;
	var currentTimerStartTime=0;
	var currentTimerNestedFlushDuration=0;
	var currentTimerType=null;
	
	var lifeCycleTimerHasWarned=false;
	
	function clearHistory(){
	ReactComponentTreeHook.purgeUnmountedComponents();
	ReactHostOperationHistoryHook.clearHistory();
	}
	
	function getTreeSnapshot(registeredIDs){
	return registeredIDs.reduce(function(tree,id){
	var ownerID=ReactComponentTreeHook.getOwnerID(id);
	var parentID=ReactComponentTreeHook.getParentID(id);
	tree[id]={
	displayName:ReactComponentTreeHook.getDisplayName(id),
	text:ReactComponentTreeHook.getText(id),
	updateCount:ReactComponentTreeHook.getUpdateCount(id),
	childIDs:ReactComponentTreeHook.getChildIDs(id),
	
	ownerID:ownerID||parentID&&ReactComponentTreeHook.getOwnerID(parentID)||0,
	parentID:parentID};
	
	return tree;
	},{});
	}
	
	function resetMeasurements(){
	var previousStartTime=currentFlushStartTime;
	var previousMeasurements=currentFlushMeasurements;
	var previousOperations=ReactHostOperationHistoryHook.getHistory();
	
	if(currentFlushNesting===0){
	currentFlushStartTime=0;
	currentFlushMeasurements=[];
	clearHistory();
	return;
	}
	
	if(previousMeasurements.length||previousOperations.length){
	var registeredIDs=ReactComponentTreeHook.getRegisteredIDs();
	flushHistory.push({
	duration:performanceNow()-previousStartTime,
	measurements:previousMeasurements||[],
	operations:previousOperations||[],
	treeSnapshot:getTreeSnapshot(registeredIDs)});
	
	}
	
	clearHistory();
	currentFlushStartTime=performanceNow();
	currentFlushMeasurements=[];
	}
	
	function checkDebugID(debugID){
	var allowRoot=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;
	
	if(allowRoot&&debugID===0){
	return;
	}
	if(!debugID){
	process.env.NODE_ENV!=='production'?warning(false,'ReactDebugTool: debugID may not be empty.'):void 0;
	}
	}
	
	function beginLifeCycleTimer(debugID,timerType){
	if(currentFlushNesting===0){
	return;
	}
	if(currentTimerType&&!lifeCycleTimerHasWarned){
	process.env.NODE_ENV!=='production'?warning(false,'There is an internal error in the React performance measurement code. '+'Did not expect %s timer to start while %s timer is still in '+'progress for %s instance.',timerType,currentTimerType||'no',debugID===currentTimerDebugID?'the same':'another'):void 0;
	lifeCycleTimerHasWarned=true;
	}
	currentTimerStartTime=performanceNow();
	currentTimerNestedFlushDuration=0;
	currentTimerDebugID=debugID;
	currentTimerType=timerType;
	}
	
	function endLifeCycleTimer(debugID,timerType){
	if(currentFlushNesting===0){
	return;
	}
	if(currentTimerType!==timerType&&!lifeCycleTimerHasWarned){
	process.env.NODE_ENV!=='production'?warning(false,'There is an internal error in the React performance measurement code. '+'We did not expect %s timer to stop while %s timer is still in '+'progress for %s instance. Please report this as a bug in React.',timerType,currentTimerType||'no',debugID===currentTimerDebugID?'the same':'another'):void 0;
	lifeCycleTimerHasWarned=true;
	}
	if(_isProfiling){
	currentFlushMeasurements.push({
	timerType:timerType,
	instanceID:debugID,
	duration:performanceNow()-currentTimerStartTime-currentTimerNestedFlushDuration});
	
	}
	currentTimerStartTime=0;
	currentTimerNestedFlushDuration=0;
	currentTimerDebugID=null;
	currentTimerType=null;
	}
	
	function pauseCurrentLifeCycleTimer(){
	var currentTimer={
	startTime:currentTimerStartTime,
	nestedFlushStartTime:performanceNow(),
	debugID:currentTimerDebugID,
	timerType:currentTimerType};
	
	lifeCycleTimerStack.push(currentTimer);
	currentTimerStartTime=0;
	currentTimerNestedFlushDuration=0;
	currentTimerDebugID=null;
	currentTimerType=null;
	}
	
	function resumeCurrentLifeCycleTimer(){
	var _lifeCycleTimerStack$=lifeCycleTimerStack.pop(),
	startTime=_lifeCycleTimerStack$.startTime,
	nestedFlushStartTime=_lifeCycleTimerStack$.nestedFlushStartTime,
	debugID=_lifeCycleTimerStack$.debugID,
	timerType=_lifeCycleTimerStack$.timerType;
	
	var nestedFlushDuration=performanceNow()-nestedFlushStartTime;
	currentTimerStartTime=startTime;
	currentTimerNestedFlushDuration+=nestedFlushDuration;
	currentTimerDebugID=debugID;
	currentTimerType=timerType;
	}
	
	var lastMarkTimeStamp=0;
	var canUsePerformanceMeasure=
	
	typeof performance!=='undefined'&&typeof performance.mark==='function'&&typeof performance.clearMarks==='function'&&typeof performance.measure==='function'&&typeof performance.clearMeasures==='function';
	
	function shouldMark(debugID){
	if(!_isProfiling||!canUsePerformanceMeasure){
	return false;
	}
	var element=ReactComponentTreeHook.getElement(debugID);
	if(element==null||(typeof element==='undefined'?'undefined':_typeof(element))!=='object'){
	return false;
	}
	var isHostElement=typeof element.type==='string';
	if(isHostElement){
	return false;
	}
	return true;
	}
	
	function markBegin(debugID,markType){
	if(!shouldMark(debugID)){
	return;
	}
	
	var markName=debugID+'::'+markType;
	lastMarkTimeStamp=performanceNow();
	performance.mark(markName);
	}
	
	function markEnd(debugID,markType){
	if(!shouldMark(debugID)){
	return;
	}
	
	var markName=debugID+'::'+markType;
	var displayName=ReactComponentTreeHook.getDisplayName(debugID)||'Unknown';
	
	
	
	
	
	
	
	var timeStamp=performanceNow();
	if(timeStamp-lastMarkTimeStamp>0.1){
	var measurementName=displayName+' ['+markType+']';
	performance.measure(measurementName,markName);
	}
	
	performance.clearMarks(markName);
	performance.clearMeasures(measurementName);
	}
	
	var ReactDebugTool={
	addHook:function addHook(hook){
	hooks.push(hook);
	},
	removeHook:function removeHook(hook){
	for(var i=0;i<hooks.length;i++){
	if(hooks[i]===hook){
	hooks.splice(i,1);
	i--;
	}
	}
	},
	isProfiling:function isProfiling(){
	return _isProfiling;
	},
	beginProfiling:function beginProfiling(){
	if(_isProfiling){
	return;
	}
	
	_isProfiling=true;
	flushHistory.length=0;
	resetMeasurements();
	ReactDebugTool.addHook(ReactHostOperationHistoryHook);
	},
	endProfiling:function endProfiling(){
	if(!_isProfiling){
	return;
	}
	
	_isProfiling=false;
	resetMeasurements();
	ReactDebugTool.removeHook(ReactHostOperationHistoryHook);
	},
	getFlushHistory:function getFlushHistory(){
	return flushHistory;
	},
	onBeginFlush:function onBeginFlush(){
	currentFlushNesting++;
	resetMeasurements();
	pauseCurrentLifeCycleTimer();
	emitEvent('onBeginFlush');
	},
	onEndFlush:function onEndFlush(){
	resetMeasurements();
	currentFlushNesting--;
	resumeCurrentLifeCycleTimer();
	emitEvent('onEndFlush');
	},
	onBeginLifeCycleTimer:function onBeginLifeCycleTimer(debugID,timerType){
	checkDebugID(debugID);
	emitEvent('onBeginLifeCycleTimer',debugID,timerType);
	markBegin(debugID,timerType);
	beginLifeCycleTimer(debugID,timerType);
	},
	onEndLifeCycleTimer:function onEndLifeCycleTimer(debugID,timerType){
	checkDebugID(debugID);
	endLifeCycleTimer(debugID,timerType);
	markEnd(debugID,timerType);
	emitEvent('onEndLifeCycleTimer',debugID,timerType);
	},
	onBeginProcessingChildContext:function onBeginProcessingChildContext(){
	emitEvent('onBeginProcessingChildContext');
	},
	onEndProcessingChildContext:function onEndProcessingChildContext(){
	emitEvent('onEndProcessingChildContext');
	},
	onHostOperation:function onHostOperation(operation){
	checkDebugID(operation.instanceID);
	emitEvent('onHostOperation',operation);
	},
	onSetState:function onSetState(){
	emitEvent('onSetState');
	},
	onSetChildren:function onSetChildren(debugID,childDebugIDs){
	checkDebugID(debugID);
	childDebugIDs.forEach(checkDebugID);
	emitEvent('onSetChildren',debugID,childDebugIDs);
	},
	onBeforeMountComponent:function onBeforeMountComponent(debugID,element,parentDebugID){
	checkDebugID(debugID);
	checkDebugID(parentDebugID,true);
	emitEvent('onBeforeMountComponent',debugID,element,parentDebugID);
	markBegin(debugID,'mount');
	},
	onMountComponent:function onMountComponent(debugID){
	checkDebugID(debugID);
	markEnd(debugID,'mount');
	emitEvent('onMountComponent',debugID);
	},
	onBeforeUpdateComponent:function onBeforeUpdateComponent(debugID,element){
	checkDebugID(debugID);
	emitEvent('onBeforeUpdateComponent',debugID,element);
	markBegin(debugID,'update');
	},
	onUpdateComponent:function onUpdateComponent(debugID){
	checkDebugID(debugID);
	markEnd(debugID,'update');
	emitEvent('onUpdateComponent',debugID);
	},
	onBeforeUnmountComponent:function onBeforeUnmountComponent(debugID){
	checkDebugID(debugID);
	emitEvent('onBeforeUnmountComponent',debugID);
	markBegin(debugID,'unmount');
	},
	onUnmountComponent:function onUnmountComponent(debugID){
	checkDebugID(debugID);
	markEnd(debugID,'unmount');
	emitEvent('onUnmountComponent',debugID);
	},
	onTestEvent:function onTestEvent(){
	emitEvent('onTestEvent');
	}};
	
	
	
	ReactDebugTool.addDevtool=ReactDebugTool.addHook;
	ReactDebugTool.removeDevtool=ReactDebugTool.removeHook;
	
	ReactDebugTool.addHook(ReactInvalidSetStateWarningHook);
	ReactDebugTool.addHook(ReactComponentTreeHook);
	var url=ExecutionEnvironment.canUseDOM&&window.location.href||'';
	if(/[?&]react_perf\b/.test(url)){
	ReactDebugTool.beginProfiling();
	}
	
	module.exports=ReactDebugTool;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var warning=__webpack_require__(11);
	
	if(process.env.NODE_ENV!=='production'){
	var processingChildContext=false;
	
	var warnInvalidSetState=function warnInvalidSetState(){
	process.env.NODE_ENV!=='production'?warning(!processingChildContext,'setState(...): Cannot call setState() inside getChildContext()'):void 0;
	};
	}
	
	var ReactInvalidSetStateWarningHook={
	onBeginProcessingChildContext:function onBeginProcessingChildContext(){
	processingChildContext=true;
	},
	onEndProcessingChildContext:function onEndProcessingChildContext(){
	processingChildContext=false;
	},
	onSetState:function onSetState(){
	warnInvalidSetState();
	}};
	
	
	module.exports=ReactInvalidSetStateWarningHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 65 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var history=[];
	
	var ReactHostOperationHistoryHook={
	onHostOperation:function onHostOperation(operation){
	history.push(operation);
	},
	clearHistory:function clearHistory(){
	if(ReactHostOperationHistoryHook._preventClearing){
	
	return;
	}
	
	history=[];
	},
	getHistory:function getHistory(){
	return history;
	}};
	
	
	module.exports=ReactHostOperationHistoryHook;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	
	
	
	
	
	
	
	
	
	
	
	var performance=__webpack_require__(67);
	
	var performanceNow;
	
	
	
	
	
	
	if(performance.now){
	performanceNow=function performanceNow(){
	return performance.now();
	};
	}else{
	performanceNow=function performanceNow(){
	return Date.now();
	};
	}
	
	module.exports=performanceNow;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ExecutionEnvironment=__webpack_require__(48);
	
	var performance;
	
	if(ExecutionEnvironment.canUseDOM){
	performance=window.performance||window.msPerformance||window.webkitPerformance;
	}
	
	module.exports=performance||{};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(35);
	
	var invariant=__webpack_require__(8);
	
	var OBSERVED_ERROR={};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var TransactionImpl={
	
	
	
	
	
	
	
	reinitializeTransaction:function reinitializeTransaction(){
	this.transactionWrappers=this.getTransactionWrappers();
	if(this.wrapperInitData){
	this.wrapperInitData.length=0;
	}else{
	this.wrapperInitData=[];
	}
	this._isInTransaction=false;
	},
	
	_isInTransaction:false,
	
	
	
	
	
	getTransactionWrappers:null,
	
	isInTransaction:function isInTransaction(){
	return!!this._isInTransaction;
	},
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	perform:function perform(method,scope,a,b,c,d,e,f){
	!!this.isInTransaction()?process.env.NODE_ENV!=='production'?invariant(false,'Transaction.perform(...): Cannot initialize a transaction when there is already an outstanding transaction.'):_prodInvariant('27'):void 0;
	var errorThrown;
	var ret;
	try{
	this._isInTransaction=true;
	
	
	
	
	errorThrown=true;
	this.initializeAll(0);
	ret=method.call(scope,a,b,c,d,e,f);
	errorThrown=false;
	}finally{
	try{
	if(errorThrown){
	
	
	try{
	this.closeAll(0);
	}catch(err){}
	}else{
	
	
	this.closeAll(0);
	}
	}finally{
	this._isInTransaction=false;
	}
	}
	return ret;
	},
	
	initializeAll:function initializeAll(startIndex){
	var transactionWrappers=this.transactionWrappers;
	for(var i=startIndex;i<transactionWrappers.length;i++){
	var wrapper=transactionWrappers[i];
	try{
	
	
	
	
	this.wrapperInitData[i]=OBSERVED_ERROR;
	this.wrapperInitData[i]=wrapper.initialize?wrapper.initialize.call(this):null;
	}finally{
	if(this.wrapperInitData[i]===OBSERVED_ERROR){
	
	
	
	try{
	this.initializeAll(i+1);
	}catch(err){}
	}
	}
	}
	},
	
	
	
	
	
	
	
	closeAll:function closeAll(startIndex){
	!this.isInTransaction()?process.env.NODE_ENV!=='production'?invariant(false,'Transaction.closeAll(): Cannot close transaction when none are open.'):_prodInvariant('28'):void 0;
	var transactionWrappers=this.transactionWrappers;
	for(var i=startIndex;i<transactionWrappers.length;i++){
	var wrapper=transactionWrappers[i];
	var initData=this.wrapperInitData[i];
	var errorThrown;
	try{
	
	
	
	
	errorThrown=true;
	if(initData!==OBSERVED_ERROR&&wrapper.close){
	wrapper.close.call(this,initData);
	}
	errorThrown=false;
	}finally{
	if(errorThrown){
	
	
	
	try{
	this.closeAll(i+1);
	}catch(e){}
	}
	}
	}
	this.wrapperInitData.length=0;
	}};
	
	
	module.exports=TransactionImpl;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 69 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	
	
	
	
	function getEventTarget(nativeEvent){
	var target=nativeEvent.target||nativeEvent.srcElement||window;
	
	
	if(target.correspondingUseElement){
	target=target.correspondingUseElement;
	}
	
	
	
	return target.nodeType===3?target.parentNode:target;
	}
	
	module.exports=getEventTarget;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ExecutionEnvironment=__webpack_require__(48);
	
	var useHasFeature;
	if(ExecutionEnvironment.canUseDOM){
	useHasFeature=document.implementation&&document.implementation.hasFeature&&
	
	
	document.implementation.hasFeature('','')!==true;
	}
	
	/**
	 * Checks if an event is supported in the current execution environment.
	 *
	 * NOTE: This will not work correctly for non-generic events such as `change`,
	 * `reset`, `load`, `error`, and `select`.
	 *
	 * Borrows from Modernizr.
	 *
	 * @param {string} eventNameSuffix Event name, e.g. "click".
	 * @param {?boolean} capture Check if the capture phase is supported.
	 * @return {boolean} True if the event is supported.
	 * @internal
	 * @license Modernizr 3.0.0pre (Custom Build) | MIT
	 */
	function isEventSupported(eventNameSuffix,capture){
	if(!ExecutionEnvironment.canUseDOM||capture&&!('addEventListener'in document)){
	return false;
	}
	
	var eventName='on'+eventNameSuffix;
	var isSupported=eventName in document;
	
	if(!isSupported){
	var element=document.createElement('div');
	element.setAttribute(eventName,'return;');
	isSupported=typeof element[eventName]==='function';
	}
	
	if(!isSupported&&useHasFeature&&eventNameSuffix==='wheel'){
	
	isSupported=document.implementation.hasFeature('Events.wheel','3.0');
	}
	
	return isSupported;
	}
	
	module.exports=isEventSupported;

/***/ },
/* 71 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	var supportedInputTypes={
	'color':true,
	'date':true,
	'datetime':true,
	'datetime-local':true,
	'email':true,
	'month':true,
	'number':true,
	'password':true,
	'range':true,
	'search':true,
	'tel':true,
	'text':true,
	'time':true,
	'url':true,
	'week':true};
	
	
	function isTextInputElement(elem){
	var nodeName=elem&&elem.nodeName&&elem.nodeName.toLowerCase();
	
	if(nodeName==='input'){
	return!!supportedInputTypes[elem.type];
	}
	
	if(nodeName==='textarea'){
	return true;
	}
	
	return false;
	}
	
	module.exports=isTextInputElement;

/***/ },
/* 72 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	
	
	
	
	
	
	var DefaultEventPluginOrder=['ResponderEventPlugin','SimpleEventPlugin','TapEventPlugin','EnterLeaveEventPlugin','ChangeEventPlugin','SelectEventPlugin','BeforeInputEventPlugin'];
	
	module.exports=DefaultEventPluginOrder;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var EventPropagators=__webpack_require__(41);
	var ReactDOMComponentTree=__webpack_require__(34);
	var SyntheticMouseEvent=__webpack_require__(74);
	
	var eventTypes={
	mouseEnter:{
	registrationName:'onMouseEnter',
	dependencies:['topMouseOut','topMouseOver']},
	
	mouseLeave:{
	registrationName:'onMouseLeave',
	dependencies:['topMouseOut','topMouseOver']}};
	
	
	
	var EnterLeaveEventPlugin={
	
	eventTypes:eventTypes,
	
	
	
	
	
	
	
	
	extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){
	if(topLevelType==='topMouseOver'&&(nativeEvent.relatedTarget||nativeEvent.fromElement)){
	return null;
	}
	if(topLevelType!=='topMouseOut'&&topLevelType!=='topMouseOver'){
	
	return null;
	}
	
	var win;
	if(nativeEventTarget.window===nativeEventTarget){
	
	win=nativeEventTarget;
	}else{
	
	var doc=nativeEventTarget.ownerDocument;
	if(doc){
	win=doc.defaultView||doc.parentWindow;
	}else{
	win=window;
	}
	}
	
	var from;
	var to;
	if(topLevelType==='topMouseOut'){
	from=targetInst;
	var related=nativeEvent.relatedTarget||nativeEvent.toElement;
	to=related?ReactDOMComponentTree.getClosestInstanceFromNode(related):null;
	}else{
	
	from=null;
	to=targetInst;
	}
	
	if(from===to){
	
	return null;
	}
	
	var fromNode=from==null?win:ReactDOMComponentTree.getNodeFromInstance(from);
	var toNode=to==null?win:ReactDOMComponentTree.getNodeFromInstance(to);
	
	var leave=SyntheticMouseEvent.getPooled(eventTypes.mouseLeave,from,nativeEvent,nativeEventTarget);
	leave.type='mouseleave';
	leave.target=fromNode;
	leave.relatedTarget=toNode;
	
	var enter=SyntheticMouseEvent.getPooled(eventTypes.mouseEnter,to,nativeEvent,nativeEventTarget);
	enter.type='mouseenter';
	enter.target=toNode;
	enter.relatedTarget=fromNode;
	
	EventPropagators.accumulateEnterLeaveDispatches(leave,enter,from,to);
	
	return[leave,enter];
	}};
	
	
	
	module.exports=EnterLeaveEventPlugin;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var SyntheticUIEvent=__webpack_require__(75);
	var ViewportMetrics=__webpack_require__(76);
	
	var getEventModifierState=__webpack_require__(77);
	
	
	
	
	
	var MouseEventInterface={
	screenX:null,
	screenY:null,
	clientX:null,
	clientY:null,
	ctrlKey:null,
	shiftKey:null,
	altKey:null,
	metaKey:null,
	getModifierState:getEventModifierState,
	button:function button(event){
	
	
	
	var button=event.button;
	if('which'in event){
	return button;
	}
	
	
	
	
	return button===2?2:button===4?1:0;
	},
	buttons:null,
	relatedTarget:function relatedTarget(event){
	return event.relatedTarget||(event.fromElement===event.srcElement?event.toElement:event.fromElement);
	},
	
	pageX:function pageX(event){
	return'pageX'in event?event.pageX:event.clientX+ViewportMetrics.currentScrollLeft;
	},
	pageY:function pageY(event){
	return'pageY'in event?event.pageY:event.clientY+ViewportMetrics.currentScrollTop;
	}};
	
	
	
	
	
	
	
	
	function SyntheticMouseEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){
	return SyntheticUIEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);
	}
	
	SyntheticUIEvent.augmentClass(SyntheticMouseEvent,MouseEventInterface);
	
	module.exports=SyntheticMouseEvent;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var SyntheticEvent=__webpack_require__(53);
	
	var getEventTarget=__webpack_require__(69);
	
	
	
	
	
	var UIEventInterface={
	view:function view(event){
	if(event.view){
	return event.view;
	}
	
	var target=getEventTarget(event);
	if(target.window===target){
	
	return target;
	}
	
	var doc=target.ownerDocument;
	
	if(doc){
	return doc.defaultView||doc.parentWindow;
	}else{
	return window;
	}
	},
	detail:function detail(event){
	return event.detail||0;
	}};
	
	
	
	
	
	
	
	
	function SyntheticUIEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){
	return SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);
	}
	
	SyntheticEvent.augmentClass(SyntheticUIEvent,UIEventInterface);
	
	module.exports=SyntheticUIEvent;

/***/ },
/* 76 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ViewportMetrics={
	
	currentScrollLeft:0,
	
	currentScrollTop:0,
	
	refreshScrollValues:function refreshScrollValues(scrollPosition){
	ViewportMetrics.currentScrollLeft=scrollPosition.x;
	ViewportMetrics.currentScrollTop=scrollPosition.y;
	}};
	
	
	
	module.exports=ViewportMetrics;

/***/ },
/* 77 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	
	var modifierKeyToProp={
	'Alt':'altKey',
	'Control':'ctrlKey',
	'Meta':'metaKey',
	'Shift':'shiftKey'};
	
	
	
	
	
	function modifierStateGetter(keyArg){
	var syntheticEvent=this;
	var nativeEvent=syntheticEvent.nativeEvent;
	if(nativeEvent.getModifierState){
	return nativeEvent.getModifierState(keyArg);
	}
	var keyProp=modifierKeyToProp[keyArg];
	return keyProp?!!nativeEvent[keyProp]:false;
	}
	
	function getEventModifierState(nativeEvent){
	return modifierStateGetter;
	}
	
	module.exports=getEventModifierState;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var DOMProperty=__webpack_require__(36);
	
	var MUST_USE_PROPERTY=DOMProperty.injection.MUST_USE_PROPERTY;
	var HAS_BOOLEAN_VALUE=DOMProperty.injection.HAS_BOOLEAN_VALUE;
	var HAS_NUMERIC_VALUE=DOMProperty.injection.HAS_NUMERIC_VALUE;
	var HAS_POSITIVE_NUMERIC_VALUE=DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
	var HAS_OVERLOADED_BOOLEAN_VALUE=DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
	
	var HTMLDOMPropertyConfig={
	isCustomAttribute:RegExp.prototype.test.bind(new RegExp('^(data|aria)-['+DOMProperty.ATTRIBUTE_NAME_CHAR+']*$')),
	Properties:{
	
	
	
	accept:0,
	acceptCharset:0,
	accessKey:0,
	action:0,
	allowFullScreen:HAS_BOOLEAN_VALUE,
	allowTransparency:0,
	alt:0,
	
	as:0,
	async:HAS_BOOLEAN_VALUE,
	autoComplete:0,
	
	
	autoPlay:HAS_BOOLEAN_VALUE,
	capture:HAS_BOOLEAN_VALUE,
	cellPadding:0,
	cellSpacing:0,
	charSet:0,
	challenge:0,
	checked:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,
	cite:0,
	classID:0,
	className:0,
	cols:HAS_POSITIVE_NUMERIC_VALUE,
	colSpan:0,
	content:0,
	contentEditable:0,
	contextMenu:0,
	controls:HAS_BOOLEAN_VALUE,
	coords:0,
	crossOrigin:0,
	data:0,
	dateTime:0,
	'default':HAS_BOOLEAN_VALUE,
	defer:HAS_BOOLEAN_VALUE,
	dir:0,
	disabled:HAS_BOOLEAN_VALUE,
	download:HAS_OVERLOADED_BOOLEAN_VALUE,
	draggable:0,
	encType:0,
	form:0,
	formAction:0,
	formEncType:0,
	formMethod:0,
	formNoValidate:HAS_BOOLEAN_VALUE,
	formTarget:0,
	frameBorder:0,
	headers:0,
	height:0,
	hidden:HAS_BOOLEAN_VALUE,
	high:0,
	href:0,
	hrefLang:0,
	htmlFor:0,
	httpEquiv:0,
	icon:0,
	id:0,
	inputMode:0,
	integrity:0,
	is:0,
	keyParams:0,
	keyType:0,
	kind:0,
	label:0,
	lang:0,
	list:0,
	loop:HAS_BOOLEAN_VALUE,
	low:0,
	manifest:0,
	marginHeight:0,
	marginWidth:0,
	max:0,
	maxLength:0,
	media:0,
	mediaGroup:0,
	method:0,
	min:0,
	minLength:0,
	
	
	multiple:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,
	muted:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,
	name:0,
	nonce:0,
	noValidate:HAS_BOOLEAN_VALUE,
	open:HAS_BOOLEAN_VALUE,
	optimum:0,
	pattern:0,
	placeholder:0,
	playsInline:HAS_BOOLEAN_VALUE,
	poster:0,
	preload:0,
	profile:0,
	radioGroup:0,
	readOnly:HAS_BOOLEAN_VALUE,
	referrerPolicy:0,
	rel:0,
	required:HAS_BOOLEAN_VALUE,
	reversed:HAS_BOOLEAN_VALUE,
	role:0,
	rows:HAS_POSITIVE_NUMERIC_VALUE,
	rowSpan:HAS_NUMERIC_VALUE,
	sandbox:0,
	scope:0,
	scoped:HAS_BOOLEAN_VALUE,
	scrolling:0,
	seamless:HAS_BOOLEAN_VALUE,
	selected:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,
	shape:0,
	size:HAS_POSITIVE_NUMERIC_VALUE,
	sizes:0,
	span:HAS_POSITIVE_NUMERIC_VALUE,
	spellCheck:0,
	src:0,
	srcDoc:0,
	srcLang:0,
	srcSet:0,
	start:HAS_NUMERIC_VALUE,
	step:0,
	style:0,
	summary:0,
	tabIndex:0,
	target:0,
	title:0,
	
	type:0,
	useMap:0,
	value:0,
	width:0,
	wmode:0,
	wrap:0,
	
	
	
	
	about:0,
	datatype:0,
	inlist:0,
	prefix:0,
	
	property:0,
	resource:0,
	'typeof':0,
	vocab:0,
	
	
	
	
	
	
	autoCapitalize:0,
	autoCorrect:0,
	
	autoSave:0,
	
	color:0,
	
	
	itemProp:0,
	itemScope:HAS_BOOLEAN_VALUE,
	itemType:0,
	
	
	
	itemID:0,
	itemRef:0,
	
	
	results:0,
	
	
	security:0,
	
	unselectable:0},
	
	DOMAttributeNames:{
	acceptCharset:'accept-charset',
	className:'class',
	htmlFor:'for',
	httpEquiv:'http-equiv'},
	
	DOMPropertyNames:{}};
	
	
	module.exports=HTMLDOMPropertyConfig;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var DOMChildrenOperations=__webpack_require__(80);
	var ReactDOMIDOperations=__webpack_require__(91);
	
	
	
	
	
	
	var ReactComponentBrowserEnvironment={
	
	processChildrenUpdates:ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,
	
	replaceNodeWithMarkup:DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup};
	
	
	
	module.exports=ReactComponentBrowserEnvironment;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var DOMLazyTree=__webpack_require__(81);
	var Danger=__webpack_require__(87);
	var ReactDOMComponentTree=__webpack_require__(34);
	var ReactInstrumentation=__webpack_require__(62);
	
	var createMicrosoftUnsafeLocalFunction=__webpack_require__(84);
	var setInnerHTML=__webpack_require__(83);
	var setTextContent=__webpack_require__(85);
	
	function getNodeAfter(parentNode,node){
	
	
	if(Array.isArray(node)){
	node=node[1];
	}
	return node?node.nextSibling:parentNode.firstChild;
	}
	
	
	
	
	
	
	
	
	
	var insertChildAt=createMicrosoftUnsafeLocalFunction(function(parentNode,childNode,referenceNode){
	
	
	
	parentNode.insertBefore(childNode,referenceNode);
	});
	
	function insertLazyTreeChildAt(parentNode,childTree,referenceNode){
	DOMLazyTree.insertTreeBefore(parentNode,childTree,referenceNode);
	}
	
	function moveChild(parentNode,childNode,referenceNode){
	if(Array.isArray(childNode)){
	moveDelimitedText(parentNode,childNode[0],childNode[1],referenceNode);
	}else{
	insertChildAt(parentNode,childNode,referenceNode);
	}
	}
	
	function removeChild(parentNode,childNode){
	if(Array.isArray(childNode)){
	var closingComment=childNode[1];
	childNode=childNode[0];
	removeDelimitedText(parentNode,childNode,closingComment);
	parentNode.removeChild(closingComment);
	}
	parentNode.removeChild(childNode);
	}
	
	function moveDelimitedText(parentNode,openingComment,closingComment,referenceNode){
	var node=openingComment;
	while(true){
	var nextNode=node.nextSibling;
	insertChildAt(parentNode,node,referenceNode);
	if(node===closingComment){
	break;
	}
	node=nextNode;
	}
	}
	
	function removeDelimitedText(parentNode,startNode,closingComment){
	while(true){
	var node=startNode.nextSibling;
	if(node===closingComment){
	
	break;
	}else{
	parentNode.removeChild(node);
	}
	}
	}
	
	function replaceDelimitedText(openingComment,closingComment,stringText){
	var parentNode=openingComment.parentNode;
	var nodeAfterComment=openingComment.nextSibling;
	if(nodeAfterComment===closingComment){
	
	
	if(stringText){
	insertChildAt(parentNode,document.createTextNode(stringText),nodeAfterComment);
	}
	}else{
	if(stringText){
	
	
	setTextContent(nodeAfterComment,stringText);
	removeDelimitedText(parentNode,nodeAfterComment,closingComment);
	}else{
	removeDelimitedText(parentNode,openingComment,closingComment);
	}
	}
	
	if(process.env.NODE_ENV!=='production'){
	ReactInstrumentation.debugTool.onHostOperation({
	instanceID:ReactDOMComponentTree.getInstanceFromNode(openingComment)._debugID,
	type:'replace text',
	payload:stringText});
	
	}
	}
	
	var dangerouslyReplaceNodeWithMarkup=Danger.dangerouslyReplaceNodeWithMarkup;
	if(process.env.NODE_ENV!=='production'){
	dangerouslyReplaceNodeWithMarkup=function dangerouslyReplaceNodeWithMarkup(oldChild,markup,prevInstance){
	Danger.dangerouslyReplaceNodeWithMarkup(oldChild,markup);
	if(prevInstance._debugID!==0){
	ReactInstrumentation.debugTool.onHostOperation({
	instanceID:prevInstance._debugID,
	type:'replace with',
	payload:markup.toString()});
	
	}else{
	var nextInstance=ReactDOMComponentTree.getInstanceFromNode(markup.node);
	if(nextInstance._debugID!==0){
	ReactInstrumentation.debugTool.onHostOperation({
	instanceID:nextInstance._debugID,
	type:'mount',
	payload:markup.toString()});
	
	}
	}
	};
	}
	
	
	
	
	var DOMChildrenOperations={
	
	dangerouslyReplaceNodeWithMarkup:dangerouslyReplaceNodeWithMarkup,
	
	replaceDelimitedText:replaceDelimitedText,
	
	
	
	
	
	
	
	
	processUpdates:function processUpdates(parentNode,updates){
	if(process.env.NODE_ENV!=='production'){
	var parentNodeDebugID=ReactDOMComponentTree.getInstanceFromNode(parentNode)._debugID;
	}
	
	for(var k=0;k<updates.length;k++){
	var update=updates[k];
	switch(update.type){
	case'INSERT_MARKUP':
	insertLazyTreeChildAt(parentNode,update.content,getNodeAfter(parentNode,update.afterNode));
	if(process.env.NODE_ENV!=='production'){
	ReactInstrumentation.debugTool.onHostOperation({
	instanceID:parentNodeDebugID,
	type:'insert child',
	payload:{toIndex:update.toIndex,content:update.content.toString()}});
	
	}
	break;
	case'MOVE_EXISTING':
	moveChild(parentNode,update.fromNode,getNodeAfter(parentNode,update.afterNode));
	if(process.env.NODE_ENV!=='production'){
	ReactInstrumentation.debugTool.onHostOperation({
	instanceID:parentNodeDebugID,
	type:'move child',
	payload:{fromIndex:update.fromIndex,toIndex:update.toIndex}});
	
	}
	break;
	case'SET_MARKUP':
	setInnerHTML(parentNode,update.content);
	if(process.env.NODE_ENV!=='production'){
	ReactInstrumentation.debugTool.onHostOperation({
	instanceID:parentNodeDebugID,
	type:'replace children',
	payload:update.content.toString()});
	
	}
	break;
	case'TEXT_CONTENT':
	setTextContent(parentNode,update.content);
	if(process.env.NODE_ENV!=='production'){
	ReactInstrumentation.debugTool.onHostOperation({
	instanceID:parentNodeDebugID,
	type:'replace text',
	payload:update.content.toString()});
	
	}
	break;
	case'REMOVE_NODE':
	removeChild(parentNode,update.fromNode);
	if(process.env.NODE_ENV!=='production'){
	ReactInstrumentation.debugTool.onHostOperation({
	instanceID:parentNodeDebugID,
	type:'remove child',
	payload:{fromIndex:update.fromIndex}});
	
	}
	break;}
	
	}
	}};
	
	
	
	module.exports=DOMChildrenOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var DOMNamespaces=__webpack_require__(82);
	var setInnerHTML=__webpack_require__(83);
	
	var createMicrosoftUnsafeLocalFunction=__webpack_require__(84);
	var setTextContent=__webpack_require__(85);
	
	var ELEMENT_NODE_TYPE=1;
	var DOCUMENT_FRAGMENT_NODE_TYPE=11;
	
	
	
	
	
	
	
	
	
	
	
	
	var enableLazy=typeof document!=='undefined'&&typeof document.documentMode==='number'||typeof navigator!=='undefined'&&typeof navigator.userAgent==='string'&&/\bEdge\/\d/.test(navigator.userAgent);
	
	function insertTreeChildren(tree){
	if(!enableLazy){
	return;
	}
	var node=tree.node;
	var children=tree.children;
	if(children.length){
	for(var i=0;i<children.length;i++){
	insertTreeBefore(node,children[i],null);
	}
	}else if(tree.html!=null){
	setInnerHTML(node,tree.html);
	}else if(tree.text!=null){
	setTextContent(node,tree.text);
	}
	}
	
	var insertTreeBefore=createMicrosoftUnsafeLocalFunction(function(parentNode,tree,referenceNode){
	
	
	
	
	
	
	if(tree.node.nodeType===DOCUMENT_FRAGMENT_NODE_TYPE||tree.node.nodeType===ELEMENT_NODE_TYPE&&tree.node.nodeName.toLowerCase()==='object'&&(tree.node.namespaceURI==null||tree.node.namespaceURI===DOMNamespaces.html)){
	insertTreeChildren(tree);
	parentNode.insertBefore(tree.node,referenceNode);
	}else{
	parentNode.insertBefore(tree.node,referenceNode);
	insertTreeChildren(tree);
	}
	});
	
	function replaceChildWithTree(oldNode,newTree){
	oldNode.parentNode.replaceChild(newTree.node,oldNode);
	insertTreeChildren(newTree);
	}
	
	function queueChild(parentTree,childTree){
	if(enableLazy){
	parentTree.children.push(childTree);
	}else{
	parentTree.node.appendChild(childTree.node);
	}
	}
	
	function queueHTML(tree,html){
	if(enableLazy){
	tree.html=html;
	}else{
	setInnerHTML(tree.node,html);
	}
	}
	
	function queueText(tree,text){
	if(enableLazy){
	tree.text=text;
	}else{
	setTextContent(tree.node,text);
	}
	}
	
	function toString(){
	return this.node.nodeName;
	}
	
	function DOMLazyTree(node){
	return{
	node:node,
	children:[],
	html:null,
	text:null,
	toString:toString};
	
	}
	
	DOMLazyTree.insertTreeBefore=insertTreeBefore;
	DOMLazyTree.replaceChildWithTree=replaceChildWithTree;
	DOMLazyTree.queueChild=queueChild;
	DOMLazyTree.queueHTML=queueHTML;
	DOMLazyTree.queueText=queueText;
	
	module.exports=DOMLazyTree;

/***/ },
/* 82 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var DOMNamespaces={
	html:'http://www.w3.org/1999/xhtml',
	mathml:'http://www.w3.org/1998/Math/MathML',
	svg:'http://www.w3.org/2000/svg'};
	
	
	module.exports=DOMNamespaces;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ExecutionEnvironment=__webpack_require__(48);
	var DOMNamespaces=__webpack_require__(82);
	
	var WHITESPACE_TEST=/^[ \r\n\t\f]/;
	var NONVISIBLE_TEST=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;
	
	var createMicrosoftUnsafeLocalFunction=__webpack_require__(84);
	
	
	var reusableSVGContainer;
	
	
	
	
	
	
	
	
	
	var setInnerHTML=createMicrosoftUnsafeLocalFunction(function(node,html){
	
	
	
	if(node.namespaceURI===DOMNamespaces.svg&&!('innerHTML'in node)){
	reusableSVGContainer=reusableSVGContainer||document.createElement('div');
	reusableSVGContainer.innerHTML='<svg>'+html+'</svg>';
	var svgNode=reusableSVGContainer.firstChild;
	while(svgNode.firstChild){
	node.appendChild(svgNode.firstChild);
	}
	}else{
	node.innerHTML=html;
	}
	});
	
	if(ExecutionEnvironment.canUseDOM){
	
	
	
	
	
	
	var testElement=document.createElement('div');
	testElement.innerHTML=' ';
	if(testElement.innerHTML===''){
	setInnerHTML=function setInnerHTML(node,html){
	
	
	
	
	
	if(node.parentNode){
	node.parentNode.replaceChild(node,node);
	}
	
	
	
	
	
	if(WHITESPACE_TEST.test(html)||html[0]==='<'&&NONVISIBLE_TEST.test(html)){
	
	
	
	
	
	
	node.innerHTML=String.fromCharCode(0xFEFF)+html;
	
	
	
	var textNode=node.firstChild;
	if(textNode.data.length===1){
	node.removeChild(textNode);
	}else{
	textNode.deleteData(0,1);
	}
	}else{
	node.innerHTML=html;
	}
	};
	}
	testElement=null;
	}
	
	module.exports=setInnerHTML;

/***/ },
/* 84 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	var createMicrosoftUnsafeLocalFunction=function createMicrosoftUnsafeLocalFunction(func){
	if(typeof MSApp!=='undefined'&&MSApp.execUnsafeLocalFunction){
	return function(arg0,arg1,arg2,arg3){
	MSApp.execUnsafeLocalFunction(function(){
	return func(arg0,arg1,arg2,arg3);
	});
	};
	}else{
	return func;
	}
	};
	
	module.exports=createMicrosoftUnsafeLocalFunction;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ExecutionEnvironment=__webpack_require__(48);
	var escapeTextContentForBrowser=__webpack_require__(86);
	var setInnerHTML=__webpack_require__(83);
	
	
	
	
	
	
	
	
	
	
	
	var setTextContent=function setTextContent(node,text){
	if(text){
	var firstChild=node.firstChild;
	
	if(firstChild&&firstChild===node.lastChild&&firstChild.nodeType===3){
	firstChild.nodeValue=text;
	return;
	}
	}
	node.textContent=text;
	};
	
	if(ExecutionEnvironment.canUseDOM){
	if(!('textContent'in document.documentElement)){
	setTextContent=function setTextContent(node,text){
	if(node.nodeType===3){
	node.nodeValue=text;
	return;
	}
	setInnerHTML(node,escapeTextContentForBrowser(text));
	};
	}
	}
	
	module.exports=setTextContent;

/***/ },
/* 86 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	
	
	var matchHtmlRegExp=/["'&<>]/;
	
	
	
	
	
	
	
	
	
	function escapeHtml(string){
	var str=''+string;
	var match=matchHtmlRegExp.exec(str);
	
	if(!match){
	return str;
	}
	
	var escape;
	var html='';
	var index=0;
	var lastIndex=0;
	
	for(index=match.index;index<str.length;index++){
	switch(str.charCodeAt(index)){
	case 34:
	
	escape='&quot;';
	break;
	case 38:
	
	escape='&amp;';
	break;
	case 39:
	
	escape='&#x27;';
	break;
	case 60:
	
	escape='&lt;';
	break;
	case 62:
	
	escape='&gt;';
	break;
	default:
	continue;}
	
	
	if(lastIndex!==index){
	html+=str.substring(lastIndex,index);
	}
	
	lastIndex=index+1;
	html+=escape;
	}
	
	return lastIndex!==index?html+str.substring(lastIndex,index):html;
	}
	
	
	
	
	
	
	
	
	
	function escapeTextContentForBrowser(text){
	if(typeof text==='boolean'||typeof text==='number'){
	
	
	
	return''+text;
	}
	return escapeHtml(text);
	}
	
	module.exports=escapeTextContentForBrowser;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(35);
	
	var DOMLazyTree=__webpack_require__(81);
	var ExecutionEnvironment=__webpack_require__(48);
	
	var createNodesFromMarkup=__webpack_require__(88);
	var emptyFunction=__webpack_require__(12);
	var invariant=__webpack_require__(8);
	
	var Danger={
	
	
	
	
	
	
	
	
	
	dangerouslyReplaceNodeWithMarkup:function dangerouslyReplaceNodeWithMarkup(oldChild,markup){
	!ExecutionEnvironment.canUseDOM?process.env.NODE_ENV!=='production'?invariant(false,'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString() for server rendering.'):_prodInvariant('56'):void 0;
	!markup?process.env.NODE_ENV!=='production'?invariant(false,'dangerouslyReplaceNodeWithMarkup(...): Missing markup.'):_prodInvariant('57'):void 0;
	!(oldChild.nodeName!=='HTML')?process.env.NODE_ENV!=='production'?invariant(false,'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the <html> node. This is because browser quirks make this unreliable and/or slow. If you want to render to the root you must use server rendering. See ReactDOMServer.renderToString().'):_prodInvariant('58'):void 0;
	
	if(typeof markup==='string'){
	var newChild=createNodesFromMarkup(markup,emptyFunction)[0];
	oldChild.parentNode.replaceChild(newChild,oldChild);
	}else{
	DOMLazyTree.replaceChildWithTree(oldChild,markup);
	}
	}};
	
	
	
	module.exports=Danger;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var ExecutionEnvironment=__webpack_require__(48);
	
	var createArrayFromMixed=__webpack_require__(89);
	var getMarkupWrap=__webpack_require__(90);
	var invariant=__webpack_require__(8);
	
	
	
	
	var dummyNode=ExecutionEnvironment.canUseDOM?document.createElement('div'):null;
	
	
	
	
	var nodeNamePattern=/^\s*<(\w+)/;
	
	
	
	
	
	
	
	function getNodeName(markup){
	var nodeNameMatch=markup.match(nodeNamePattern);
	return nodeNameMatch&&nodeNameMatch[1].toLowerCase();
	}
	
	
	
	
	
	
	
	
	
	
	
	function createNodesFromMarkup(markup,handleScript){
	var node=dummyNode;
	!!!dummyNode?process.env.NODE_ENV!=='production'?invariant(false,'createNodesFromMarkup dummy not initialized'):invariant(false):void 0;
	var nodeName=getNodeName(markup);
	
	var wrap=nodeName&&getMarkupWrap(nodeName);
	if(wrap){
	node.innerHTML=wrap[1]+markup+wrap[2];
	
	var wrapDepth=wrap[0];
	while(wrapDepth--){
	node=node.lastChild;
	}
	}else{
	node.innerHTML=markup;
	}
	
	var scripts=node.getElementsByTagName('script');
	if(scripts.length){
	!handleScript?process.env.NODE_ENV!=='production'?invariant(false,'createNodesFromMarkup(...): Unexpected <script> element rendered.'):invariant(false):void 0;
	createArrayFromMixed(scripts).forEach(handleScript);
	}
	
	var nodes=Array.from(node.childNodes);
	while(node.lastChild){
	node.removeChild(node.lastChild);
	}
	return nodes;
	}
	
	module.exports=createNodesFromMarkup;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	
	
	
	
	
	
	
	
	
	
	
	var invariant=__webpack_require__(8);
	
	
	
	
	
	
	
	
	
	
	function toArray(obj){
	var length=obj.length;
	
	
	
	!(!Array.isArray(obj)&&((typeof obj==='undefined'?'undefined':_typeof(obj))==='object'||typeof obj==='function'))?process.env.NODE_ENV!=='production'?invariant(false,'toArray: Array-like object expected'):invariant(false):void 0;
	
	!(typeof length==='number')?process.env.NODE_ENV!=='production'?invariant(false,'toArray: Object needs a length property'):invariant(false):void 0;
	
	!(length===0||length-1 in obj)?process.env.NODE_ENV!=='production'?invariant(false,'toArray: Object should have keys for indices'):invariant(false):void 0;
	
	!(typeof obj.callee!=='function')?process.env.NODE_ENV!=='production'?invariant(false,'toArray: Object can\'t be `arguments`. Use rest params '+'(function(...args) {}) or Array.from() instead.'):invariant(false):void 0;
	
	
	
	
	if(obj.hasOwnProperty){
	try{
	return Array.prototype.slice.call(obj);
	}catch(e){
	
	}
	}
	
	
	
	var ret=Array(length);
	for(var ii=0;ii<length;ii++){
	ret[ii]=obj[ii];
	}
	return ret;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function hasArrayNature(obj){
	return(
	
	!!obj&&(
	
	(typeof obj==='undefined'?'undefined':_typeof(obj))=='object'||typeof obj=='function')&&
	
	'length'in obj&&
	
	!('setInterval'in obj)&&
	
	
	typeof obj.nodeType!='number'&&(
	
	Array.isArray(obj)||
	
	'callee'in obj||
	
	'item'in obj));
	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function createArrayFromMixed(obj){
	if(!hasArrayNature(obj)){
	return[obj];
	}else if(Array.isArray(obj)){
	return obj.slice();
	}else{
	return toArray(obj);
	}
	}
	
	module.exports=createArrayFromMixed;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	
	
	
	
	
	
	
	
	
	
	
	
	var ExecutionEnvironment=__webpack_require__(48);
	
	var invariant=__webpack_require__(8);
	
	
	
	
	var dummyNode=ExecutionEnvironment.canUseDOM?document.createElement('div'):null;
	
	
	
	
	
	
	
	
	var shouldWrap={};
	
	var selectWrap=[1,'<select multiple="true">','</select>'];
	var tableWrap=[1,'<table>','</table>'];
	var trWrap=[3,'<table><tbody><tr>','</tr></tbody></table>'];
	
	var svgWrap=[1,'<svg xmlns="http://www.w3.org/2000/svg">','</svg>'];
	
	var markupWrap={
	'*':[1,'?<div>','</div>'],
	
	'area':[1,'<map>','</map>'],
	'col':[2,'<table><tbody></tbody><colgroup>','</colgroup></table>'],
	'legend':[1,'<fieldset>','</fieldset>'],
	'param':[1,'<object>','</object>'],
	'tr':[2,'<table><tbody>','</tbody></table>'],
	
	'optgroup':selectWrap,
	'option':selectWrap,
	
	'caption':tableWrap,
	'colgroup':tableWrap,
	'tbody':tableWrap,
	'tfoot':tableWrap,
	'thead':tableWrap,
	
	'td':trWrap,
	'th':trWrap};
	
	
	
	
	
	var svgElements=['circle','clipPath','defs','ellipse','g','image','line','linearGradient','mask','path','pattern','polygon','polyline','radialGradient','rect','stop','text','tspan'];
	svgElements.forEach(function(nodeName){
	markupWrap[nodeName]=svgWrap;
	shouldWrap[nodeName]=true;
	});
	
	
	
	
	
	
	
	
	
	function getMarkupWrap(nodeName){
	!!!dummyNode?process.env.NODE_ENV!=='production'?invariant(false,'Markup wrapping node not initialized'):invariant(false):void 0;
	if(!markupWrap.hasOwnProperty(nodeName)){
	nodeName='*';
	}
	if(!shouldWrap.hasOwnProperty(nodeName)){
	if(nodeName==='*'){
	dummyNode.innerHTML='<link />';
	}else{
	dummyNode.innerHTML='<'+nodeName+'></'+nodeName+'>';
	}
	shouldWrap[nodeName]=!dummyNode.firstChild;
	}
	return shouldWrap[nodeName]?markupWrap[nodeName]:null;
	}
	
	module.exports=getMarkupWrap;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var DOMChildrenOperations=__webpack_require__(80);
	var ReactDOMComponentTree=__webpack_require__(34);
	
	
	
	
	var ReactDOMIDOperations={
	
	
	
	
	
	
	
	dangerouslyProcessChildrenUpdates:function dangerouslyProcessChildrenUpdates(parentInst,updates){
	var node=ReactDOMComponentTree.getNodeFromInstance(parentInst);
	DOMChildrenOperations.processUpdates(node,updates);
	}};
	
	
	module.exports=ReactDOMIDOperations;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	var _prodInvariant=__webpack_require__(35),
	_assign=__webpack_require__(4);
	
	var AutoFocusUtils=__webpack_require__(93);
	var CSSPropertyOperations=__webpack_require__(95);
	var DOMLazyTree=__webpack_require__(81);
	var DOMNamespaces=__webpack_require__(82);
	var DOMProperty=__webpack_require__(36);
	var DOMPropertyOperations=__webpack_require__(103);
	var EventPluginHub=__webpack_require__(42);
	var EventPluginRegistry=__webpack_require__(43);
	var ReactBrowserEventEmitter=__webpack_require__(105);
	var ReactDOMComponentFlags=__webpack_require__(37);
	var ReactDOMComponentTree=__webpack_require__(34);
	var ReactDOMInput=__webpack_require__(108);
	var ReactDOMOption=__webpack_require__(111);
	var ReactDOMSelect=__webpack_require__(112);
	var ReactDOMTextarea=__webpack_require__(113);
	var ReactInstrumentation=__webpack_require__(62);
	var ReactMultiChild=__webpack_require__(114);
	var ReactServerRenderingTransaction=__webpack_require__(133);
	
	var emptyFunction=__webpack_require__(12);
	var escapeTextContentForBrowser=__webpack_require__(86);
	var invariant=__webpack_require__(8);
	var isEventSupported=__webpack_require__(70);
	var shallowEqual=__webpack_require__(123);
	var validateDOMNesting=__webpack_require__(136);
	var warning=__webpack_require__(11);
	
	var Flags=ReactDOMComponentFlags;
	var deleteListener=EventPluginHub.deleteListener;
	var getNode=ReactDOMComponentTree.getNodeFromInstance;
	var listenTo=ReactBrowserEventEmitter.listenTo;
	var registrationNameModules=EventPluginRegistry.registrationNameModules;
	
	
	var CONTENT_TYPES={'string':true,'number':true};
	
	var STYLE='style';
	var HTML='__html';
	var RESERVED_PROPS={
	children:null,
	dangerouslySetInnerHTML:null,
	suppressContentEditableWarning:null};
	
	
	
	var DOC_FRAGMENT_TYPE=11;
	
	function getDeclarationErrorAddendum(internalInstance){
	if(internalInstance){
	var owner=internalInstance._currentElement._owner||null;
	if(owner){
	var name=owner.getName();
	if(name){
	return' This DOM node was rendered by `'+name+'`.';
	}
	}
	}
	return'';
	}
	
	function friendlyStringify(obj){
	if((typeof obj==='undefined'?'undefined':_typeof(obj))==='object'){
	if(Array.isArray(obj)){
	return'['+obj.map(friendlyStringify).join(', ')+']';
	}else{
	var pairs=[];
	for(var key in obj){
	if(Object.prototype.hasOwnProperty.call(obj,key)){
	var keyEscaped=/^[a-z$_][\w$_]*$/i.test(key)?key:JSON.stringify(key);
	pairs.push(keyEscaped+': '+friendlyStringify(obj[key]));
	}
	}
	return'{'+pairs.join(', ')+'}';
	}
	}else if(typeof obj==='string'){
	return JSON.stringify(obj);
	}else if(typeof obj==='function'){
	return'[function object]';
	}
	
	
	return String(obj);
	}
	
	var styleMutationWarning={};
	
	function checkAndWarnForMutatedStyle(style1,style2,component){
	if(style1==null||style2==null){
	return;
	}
	if(shallowEqual(style1,style2)){
	return;
	}
	
	var componentName=component._tag;
	var owner=component._currentElement._owner;
	var ownerName;
	if(owner){
	ownerName=owner.getName();
	}
	
	var hash=ownerName+'|'+componentName;
	
	if(styleMutationWarning.hasOwnProperty(hash)){
	return;
	}
	
	styleMutationWarning[hash]=true;
	
	process.env.NODE_ENV!=='production'?warning(false,'`%s` was passed a style object that has previously been mutated. '+'Mutating `style` is deprecated. Consider cloning it beforehand. Check '+'the `render` %s. Previous style: %s. Mutated style: %s.',componentName,owner?'of `'+ownerName+'`':'using <'+componentName+'>',friendlyStringify(style1),friendlyStringify(style2)):void 0;
	}
	
	
	
	
	
	function assertValidProps(component,props){
	if(!props){
	return;
	}
	
	if(voidElementTags[component._tag]){
	!(props.children==null&&props.dangerouslySetInnerHTML==null)?process.env.NODE_ENV!=='production'?invariant(false,'%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s',component._tag,component._currentElement._owner?' Check the render method of '+component._currentElement._owner.getName()+'.':''):_prodInvariant('137',component._tag,component._currentElement._owner?' Check the render method of '+component._currentElement._owner.getName()+'.':''):void 0;
	}
	if(props.dangerouslySetInnerHTML!=null){
	!(props.children==null)?process.env.NODE_ENV!=='production'?invariant(false,'Can only set one of `children` or `props.dangerouslySetInnerHTML`.'):_prodInvariant('60'):void 0;
	!(_typeof(props.dangerouslySetInnerHTML)==='object'&&HTML in props.dangerouslySetInnerHTML)?process.env.NODE_ENV!=='production'?invariant(false,'`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.'):_prodInvariant('61'):void 0;
	}
	if(process.env.NODE_ENV!=='production'){
	process.env.NODE_ENV!=='production'?warning(props.innerHTML==null,'Directly setting property `innerHTML` is not permitted. '+'For more information, lookup documentation on `dangerouslySetInnerHTML`.'):void 0;
	process.env.NODE_ENV!=='production'?warning(props.suppressContentEditableWarning||!props.contentEditable||props.children==null,'A component is `contentEditable` and contains `children` managed by '+'React. It is now your responsibility to guarantee that none of '+'those nodes are unexpectedly modified or duplicated. This is '+'probably not intentional.'):void 0;
	process.env.NODE_ENV!=='production'?warning(props.onFocusIn==null&&props.onFocusOut==null,'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. '+'All React events are normalized to bubble, so onFocusIn and onFocusOut '+'are not needed/supported by React.'):void 0;
	}
	!(props.style==null||_typeof(props.style)==='object')?process.env.NODE_ENV!=='production'?invariant(false,'The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s',getDeclarationErrorAddendum(component)):_prodInvariant('62',getDeclarationErrorAddendum(component)):void 0;
	}
	
	function enqueuePutListener(inst,registrationName,listener,transaction){
	if(transaction instanceof ReactServerRenderingTransaction){
	return;
	}
	if(process.env.NODE_ENV!=='production'){
	
	
	process.env.NODE_ENV!=='production'?warning(registrationName!=='onScroll'||isEventSupported('scroll',true),'This browser doesn\'t support the `onScroll` event'):void 0;
	}
	var containerInfo=inst._hostContainerInfo;
	var isDocumentFragment=containerInfo._node&&containerInfo._node.nodeType===DOC_FRAGMENT_TYPE;
	var doc=isDocumentFragment?containerInfo._node:containerInfo._ownerDocument;
	listenTo(registrationName,doc);
	transaction.getReactMountReady().enqueue(putListener,{
	inst:inst,
	registrationName:registrationName,
	listener:listener});
	
	}
	
	function putListener(){
	var listenerToPut=this;
	EventPluginHub.putListener(listenerToPut.inst,listenerToPut.registrationName,listenerToPut.listener);
	}
	
	function inputPostMount(){
	var inst=this;
	ReactDOMInput.postMountWrapper(inst);
	}
	
	function textareaPostMount(){
	var inst=this;
	ReactDOMTextarea.postMountWrapper(inst);
	}
	
	function optionPostMount(){
	var inst=this;
	ReactDOMOption.postMountWrapper(inst);
	}
	
	var setAndValidateContentChildDev=emptyFunction;
	if(process.env.NODE_ENV!=='production'){
	setAndValidateContentChildDev=function setAndValidateContentChildDev(content){
	var hasExistingContent=this._contentDebugID!=null;
	var debugID=this._debugID;
	
	var contentDebugID=-debugID;
	
	if(content==null){
	if(hasExistingContent){
	ReactInstrumentation.debugTool.onUnmountComponent(this._contentDebugID);
	}
	this._contentDebugID=null;
	return;
	}
	
	validateDOMNesting(null,String(content),this,this._ancestorInfo);
	this._contentDebugID=contentDebugID;
	if(hasExistingContent){
	ReactInstrumentation.debugTool.onBeforeUpdateComponent(contentDebugID,content);
	ReactInstrumentation.debugTool.onUpdateComponent(contentDebugID);
	}else{
	ReactInstrumentation.debugTool.onBeforeMountComponent(contentDebugID,content,debugID);
	ReactInstrumentation.debugTool.onMountComponent(contentDebugID);
	ReactInstrumentation.debugTool.onSetChildren(debugID,[contentDebugID]);
	}
	};
	}
	
	
	
	var mediaEvents={
	topAbort:'abort',
	topCanPlay:'canplay',
	topCanPlayThrough:'canplaythrough',
	topDurationChange:'durationchange',
	topEmptied:'emptied',
	topEncrypted:'encrypted',
	topEnded:'ended',
	topError:'error',
	topLoadedData:'loadeddata',
	topLoadedMetadata:'loadedmetadata',
	topLoadStart:'loadstart',
	topPause:'pause',
	topPlay:'play',
	topPlaying:'playing',
	topProgress:'progress',
	topRateChange:'ratechange',
	topSeeked:'seeked',
	topSeeking:'seeking',
	topStalled:'stalled',
	topSuspend:'suspend',
	topTimeUpdate:'timeupdate',
	topVolumeChange:'volumechange',
	topWaiting:'waiting'};
	
	
	function trapBubbledEventsLocal(){
	var inst=this;
	
	
	!inst._rootNodeID?process.env.NODE_ENV!=='production'?invariant(false,'Must be mounted to trap events'):_prodInvariant('63'):void 0;
	var node=getNode(inst);
	!node?process.env.NODE_ENV!=='production'?invariant(false,'trapBubbledEvent(...): Requires node to be rendered.'):_prodInvariant('64'):void 0;
	
	switch(inst._tag){
	case'iframe':
	case'object':
	inst._wrapperState.listeners=[ReactBrowserEventEmitter.trapBubbledEvent('topLoad','load',node)];
	break;
	case'video':
	case'audio':
	
	inst._wrapperState.listeners=[];
	
	for(var event in mediaEvents){
	if(mediaEvents.hasOwnProperty(event)){
	inst._wrapperState.listeners.push(ReactBrowserEventEmitter.trapBubbledEvent(event,mediaEvents[event],node));
	}
	}
	break;
	case'source':
	inst._wrapperState.listeners=[ReactBrowserEventEmitter.trapBubbledEvent('topError','error',node)];
	break;
	case'img':
	inst._wrapperState.listeners=[ReactBrowserEventEmitter.trapBubbledEvent('topError','error',node),ReactBrowserEventEmitter.trapBubbledEvent('topLoad','load',node)];
	break;
	case'form':
	inst._wrapperState.listeners=[ReactBrowserEventEmitter.trapBubbledEvent('topReset','reset',node),ReactBrowserEventEmitter.trapBubbledEvent('topSubmit','submit',node)];
	break;
	case'input':
	case'select':
	case'textarea':
	inst._wrapperState.listeners=[ReactBrowserEventEmitter.trapBubbledEvent('topInvalid','invalid',node)];
	break;}
	
	}
	
	function postUpdateSelectWrapper(){
	ReactDOMSelect.postUpdateWrapper(this);
	}
	
	
	
	
	var omittedCloseTags={
	'area':true,
	'base':true,
	'br':true,
	'col':true,
	'embed':true,
	'hr':true,
	'img':true,
	'input':true,
	'keygen':true,
	'link':true,
	'meta':true,
	'param':true,
	'source':true,
	'track':true,
	'wbr':true};
	
	
	var newlineEatingTags={
	'listing':true,
	'pre':true,
	'textarea':true};
	
	
	
	
	
	var voidElementTags=_assign({
	'menuitem':true},
	omittedCloseTags);
	
	
	
	
	
	var VALID_TAG_REGEX=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
	var validatedTagCache={};
	var hasOwnProperty={}.hasOwnProperty;
	
	function validateDangerousTag(tag){
	if(!hasOwnProperty.call(validatedTagCache,tag)){
	!VALID_TAG_REGEX.test(tag)?process.env.NODE_ENV!=='production'?invariant(false,'Invalid tag: %s',tag):_prodInvariant('65',tag):void 0;
	validatedTagCache[tag]=true;
	}
	}
	
	function isCustomComponent(tagName,props){
	return tagName.indexOf('-')>=0||props.is!=null;
	}
	
	var globalIdCounter=1;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function ReactDOMComponent(element){
	var tag=element.type;
	validateDangerousTag(tag);
	this._currentElement=element;
	this._tag=tag.toLowerCase();
	this._namespaceURI=null;
	this._renderedChildren=null;
	this._previousStyle=null;
	this._previousStyleCopy=null;
	this._hostNode=null;
	this._hostParent=null;
	this._rootNodeID=0;
	this._domID=0;
	this._hostContainerInfo=null;
	this._wrapperState=null;
	this._topLevelWrapper=null;
	this._flags=0;
	if(process.env.NODE_ENV!=='production'){
	this._ancestorInfo=null;
	setAndValidateContentChildDev.call(this,null);
	}
	}
	
	ReactDOMComponent.displayName='ReactDOMComponent';
	
	ReactDOMComponent.Mixin={
	
	
	
	
	
	
	
	
	
	
	
	
	mountComponent:function mountComponent(transaction,hostParent,hostContainerInfo,context){
	this._rootNodeID=globalIdCounter++;
	this._domID=hostContainerInfo._idCounter++;
	this._hostParent=hostParent;
	this._hostContainerInfo=hostContainerInfo;
	
	var props=this._currentElement.props;
	
	switch(this._tag){
	case'audio':
	case'form':
	case'iframe':
	case'img':
	case'link':
	case'object':
	case'source':
	case'video':
	this._wrapperState={
	listeners:null};
	
	transaction.getReactMountReady().enqueue(trapBubbledEventsLocal,this);
	break;
	case'input':
	ReactDOMInput.mountWrapper(this,props,hostParent);
	props=ReactDOMInput.getHostProps(this,props);
	transaction.getReactMountReady().enqueue(trapBubbledEventsLocal,this);
	break;
	case'option':
	ReactDOMOption.mountWrapper(this,props,hostParent);
	props=ReactDOMOption.getHostProps(this,props);
	break;
	case'select':
	ReactDOMSelect.mountWrapper(this,props,hostParent);
	props=ReactDOMSelect.getHostProps(this,props);
	transaction.getReactMountReady().enqueue(trapBubbledEventsLocal,this);
	break;
	case'textarea':
	ReactDOMTextarea.mountWrapper(this,props,hostParent);
	props=ReactDOMTextarea.getHostProps(this,props);
	transaction.getReactMountReady().enqueue(trapBubbledEventsLocal,this);
	break;}
	
	
	assertValidProps(this,props);
	
	
	
	var namespaceURI;
	var parentTag;
	if(hostParent!=null){
	namespaceURI=hostParent._namespaceURI;
	parentTag=hostParent._tag;
	}else if(hostContainerInfo._tag){
	namespaceURI=hostContainerInfo._namespaceURI;
	parentTag=hostContainerInfo._tag;
	}
	if(namespaceURI==null||namespaceURI===DOMNamespaces.svg&&parentTag==='foreignobject'){
	namespaceURI=DOMNamespaces.html;
	}
	if(namespaceURI===DOMNamespaces.html){
	if(this._tag==='svg'){
	namespaceURI=DOMNamespaces.svg;
	}else if(this._tag==='math'){
	namespaceURI=DOMNamespaces.mathml;
	}
	}
	this._namespaceURI=namespaceURI;
	
	if(process.env.NODE_ENV!=='production'){
	var parentInfo;
	if(hostParent!=null){
	parentInfo=hostParent._ancestorInfo;
	}else if(hostContainerInfo._tag){
	parentInfo=hostContainerInfo._ancestorInfo;
	}
	if(parentInfo){
	
	
	validateDOMNesting(this._tag,null,this,parentInfo);
	}
	this._ancestorInfo=validateDOMNesting.updatedAncestorInfo(parentInfo,this._tag,this);
	}
	
	var mountImage;
	if(transaction.useCreateElement){
	var ownerDocument=hostContainerInfo._ownerDocument;
	var el;
	if(namespaceURI===DOMNamespaces.html){
	if(this._tag==='script'){
	
	
	var div=ownerDocument.createElement('div');
	var type=this._currentElement.type;
	div.innerHTML='<'+type+'></'+type+'>';
	el=div.removeChild(div.firstChild);
	}else if(props.is){
	el=ownerDocument.createElement(this._currentElement.type,props.is);
	}else{
	
	
	
	el=ownerDocument.createElement(this._currentElement.type);
	}
	}else{
	el=ownerDocument.createElementNS(namespaceURI,this._currentElement.type);
	}
	ReactDOMComponentTree.precacheNode(this,el);
	this._flags|=Flags.hasCachedChildNodes;
	if(!this._hostParent){
	DOMPropertyOperations.setAttributeForRoot(el);
	}
	this._updateDOMProperties(null,props,transaction);
	var lazyTree=DOMLazyTree(el);
	this._createInitialChildren(transaction,props,context,lazyTree);
	mountImage=lazyTree;
	}else{
	var tagOpen=this._createOpenTagMarkupAndPutListeners(transaction,props);
	var tagContent=this._createContentMarkup(transaction,props,context);
	if(!tagContent&&omittedCloseTags[this._tag]){
	mountImage=tagOpen+'/>';
	}else{
	mountImage=tagOpen+'>'+tagContent+'</'+this._currentElement.type+'>';
	}
	}
	
	switch(this._tag){
	case'input':
	transaction.getReactMountReady().enqueue(inputPostMount,this);
	if(props.autoFocus){
	transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent,this);
	}
	break;
	case'textarea':
	transaction.getReactMountReady().enqueue(textareaPostMount,this);
	if(props.autoFocus){
	transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent,this);
	}
	break;
	case'select':
	if(props.autoFocus){
	transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent,this);
	}
	break;
	case'button':
	if(props.autoFocus){
	transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent,this);
	}
	break;
	case'option':
	transaction.getReactMountReady().enqueue(optionPostMount,this);
	break;}
	
	
	return mountImage;
	},
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	_createOpenTagMarkupAndPutListeners:function _createOpenTagMarkupAndPutListeners(transaction,props){
	var ret='<'+this._currentElement.type;
	
	for(var propKey in props){
	if(!props.hasOwnProperty(propKey)){
	continue;
	}
	var propValue=props[propKey];
	if(propValue==null){
	continue;
	}
	if(registrationNameModules.hasOwnProperty(propKey)){
	if(propValue){
	enqueuePutListener(this,propKey,propValue,transaction);
	}
	}else{
	if(propKey===STYLE){
	if(propValue){
	if(process.env.NODE_ENV!=='production'){
	
	this._previousStyle=propValue;
	}
	propValue=this._previousStyleCopy=_assign({},props.style);
	}
	propValue=CSSPropertyOperations.createMarkupForStyles(propValue,this);
	}
	var markup=null;
	if(this._tag!=null&&isCustomComponent(this._tag,props)){
	if(!RESERVED_PROPS.hasOwnProperty(propKey)){
	markup=DOMPropertyOperations.createMarkupForCustomAttribute(propKey,propValue);
	}
	}else{
	markup=DOMPropertyOperations.createMarkupForProperty(propKey,propValue);
	}
	if(markup){
	ret+=' '+markup;
	}
	}
	}
	
	
	
	if(transaction.renderToStaticMarkup){
	return ret;
	}
	
	if(!this._hostParent){
	ret+=' '+DOMPropertyOperations.createMarkupForRoot();
	}
	ret+=' '+DOMPropertyOperations.createMarkupForID(this._domID);
	return ret;
	},
	
	
	
	
	
	
	
	
	
	
	_createContentMarkup:function _createContentMarkup(transaction,props,context){
	var ret='';
	
	
	var innerHTML=props.dangerouslySetInnerHTML;
	if(innerHTML!=null){
	if(innerHTML.__html!=null){
	ret=innerHTML.__html;
	}
	}else{
	var contentToUse=CONTENT_TYPES[_typeof(props.children)]?props.children:null;
	var childrenToUse=contentToUse!=null?null:props.children;
	if(contentToUse!=null){
	
	ret=escapeTextContentForBrowser(contentToUse);
	if(process.env.NODE_ENV!=='production'){
	setAndValidateContentChildDev.call(this,contentToUse);
	}
	}else if(childrenToUse!=null){
	var mountImages=this.mountChildren(childrenToUse,transaction,context);
	ret=mountImages.join('');
	}
	}
	if(newlineEatingTags[this._tag]&&ret.charAt(0)==='\n'){
	
	
	
	
	
	
	
	
	
	
	return'\n'+ret;
	}else{
	return ret;
	}
	},
	
	_createInitialChildren:function _createInitialChildren(transaction,props,context,lazyTree){
	
	var innerHTML=props.dangerouslySetInnerHTML;
	if(innerHTML!=null){
	if(innerHTML.__html!=null){
	DOMLazyTree.queueHTML(lazyTree,innerHTML.__html);
	}
	}else{
	var contentToUse=CONTENT_TYPES[_typeof(props.children)]?props.children:null;
	var childrenToUse=contentToUse!=null?null:props.children;
	if(contentToUse!=null){
	
	if(process.env.NODE_ENV!=='production'){
	setAndValidateContentChildDev.call(this,contentToUse);
	}
	DOMLazyTree.queueText(lazyTree,contentToUse);
	}else if(childrenToUse!=null){
	var mountImages=this.mountChildren(childrenToUse,transaction,context);
	for(var i=0;i<mountImages.length;i++){
	DOMLazyTree.queueChild(lazyTree,mountImages[i]);
	}
	}
	}
	},
	
	
	
	
	
	
	
	
	
	receiveComponent:function receiveComponent(nextElement,transaction,context){
	var prevElement=this._currentElement;
	this._currentElement=nextElement;
	this.updateComponent(transaction,prevElement,nextElement,context);
	},
	
	
	
	
	
	
	
	
	
	
	
	updateComponent:function updateComponent(transaction,prevElement,nextElement,context){
	var lastProps=prevElement.props;
	var nextProps=this._currentElement.props;
	
	switch(this._tag){
	case'input':
	lastProps=ReactDOMInput.getHostProps(this,lastProps);
	nextProps=ReactDOMInput.getHostProps(this,nextProps);
	break;
	case'option':
	lastProps=ReactDOMOption.getHostProps(this,lastProps);
	nextProps=ReactDOMOption.getHostProps(this,nextProps);
	break;
	case'select':
	lastProps=ReactDOMSelect.getHostProps(this,lastProps);
	nextProps=ReactDOMSelect.getHostProps(this,nextProps);
	break;
	case'textarea':
	lastProps=ReactDOMTextarea.getHostProps(this,lastProps);
	nextProps=ReactDOMTextarea.getHostProps(this,nextProps);
	break;}
	
	
	assertValidProps(this,nextProps);
	this._updateDOMProperties(lastProps,nextProps,transaction);
	this._updateDOMChildren(lastProps,nextProps,transaction,context);
	
	switch(this._tag){
	case'input':
	
	
	
	ReactDOMInput.updateWrapper(this);
	break;
	case'textarea':
	ReactDOMTextarea.updateWrapper(this);
	break;
	case'select':
	
	
	transaction.getReactMountReady().enqueue(postUpdateSelectWrapper,this);
	break;}
	
	},
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	_updateDOMProperties:function _updateDOMProperties(lastProps,nextProps,transaction){
	var propKey;
	var styleName;
	var styleUpdates;
	for(propKey in lastProps){
	if(nextProps.hasOwnProperty(propKey)||!lastProps.hasOwnProperty(propKey)||lastProps[propKey]==null){
	continue;
	}
	if(propKey===STYLE){
	var lastStyle=this._previousStyleCopy;
	for(styleName in lastStyle){
	if(lastStyle.hasOwnProperty(styleName)){
	styleUpdates=styleUpdates||{};
	styleUpdates[styleName]='';
	}
	}
	this._previousStyleCopy=null;
	}else if(registrationNameModules.hasOwnProperty(propKey)){
	if(lastProps[propKey]){
	
	
	
	deleteListener(this,propKey);
	}
	}else if(isCustomComponent(this._tag,lastProps)){
	if(!RESERVED_PROPS.hasOwnProperty(propKey)){
	DOMPropertyOperations.deleteValueForAttribute(getNode(this),propKey);
	}
	}else if(DOMProperty.properties[propKey]||DOMProperty.isCustomAttribute(propKey)){
	DOMPropertyOperations.deleteValueForProperty(getNode(this),propKey);
	}
	}
	for(propKey in nextProps){
	var nextProp=nextProps[propKey];
	var lastProp=propKey===STYLE?this._previousStyleCopy:lastProps!=null?lastProps[propKey]:undefined;
	if(!nextProps.hasOwnProperty(propKey)||nextProp===lastProp||nextProp==null&&lastProp==null){
	continue;
	}
	if(propKey===STYLE){
	if(nextProp){
	if(process.env.NODE_ENV!=='production'){
	checkAndWarnForMutatedStyle(this._previousStyleCopy,this._previousStyle,this);
	this._previousStyle=nextProp;
	}
	nextProp=this._previousStyleCopy=_assign({},nextProp);
	}else{
	this._previousStyleCopy=null;
	}
	if(lastProp){
	
	for(styleName in lastProp){
	if(lastProp.hasOwnProperty(styleName)&&(!nextProp||!nextProp.hasOwnProperty(styleName))){
	styleUpdates=styleUpdates||{};
	styleUpdates[styleName]='';
	}
	}
	
	for(styleName in nextProp){
	if(nextProp.hasOwnProperty(styleName)&&lastProp[styleName]!==nextProp[styleName]){
	styleUpdates=styleUpdates||{};
	styleUpdates[styleName]=nextProp[styleName];
	}
	}
	}else{
	
	styleUpdates=nextProp;
	}
	}else if(registrationNameModules.hasOwnProperty(propKey)){
	if(nextProp){
	enqueuePutListener(this,propKey,nextProp,transaction);
	}else if(lastProp){
	deleteListener(this,propKey);
	}
	}else if(isCustomComponent(this._tag,nextProps)){
	if(!RESERVED_PROPS.hasOwnProperty(propKey)){
	DOMPropertyOperations.setValueForAttribute(getNode(this),propKey,nextProp);
	}
	}else if(DOMProperty.properties[propKey]||DOMProperty.isCustomAttribute(propKey)){
	var node=getNode(this);
	
	
	
	if(nextProp!=null){
	DOMPropertyOperations.setValueForProperty(node,propKey,nextProp);
	}else{
	DOMPropertyOperations.deleteValueForProperty(node,propKey);
	}
	}
	}
	if(styleUpdates){
	CSSPropertyOperations.setValueForStyles(getNode(this),styleUpdates,this);
	}
	},
	
	
	
	
	
	
	
	
	
	
	_updateDOMChildren:function _updateDOMChildren(lastProps,nextProps,transaction,context){
	var lastContent=CONTENT_TYPES[_typeof(lastProps.children)]?lastProps.children:null;
	var nextContent=CONTENT_TYPES[_typeof(nextProps.children)]?nextProps.children:null;
	
	var lastHtml=lastProps.dangerouslySetInnerHTML&&lastProps.dangerouslySetInnerHTML.__html;
	var nextHtml=nextProps.dangerouslySetInnerHTML&&nextProps.dangerouslySetInnerHTML.__html;
	
	
	var lastChildren=lastContent!=null?null:lastProps.children;
	var nextChildren=nextContent!=null?null:nextProps.children;
	
	
	
	var lastHasContentOrHtml=lastContent!=null||lastHtml!=null;
	var nextHasContentOrHtml=nextContent!=null||nextHtml!=null;
	if(lastChildren!=null&&nextChildren==null){
	this.updateChildren(null,transaction,context);
	}else if(lastHasContentOrHtml&&!nextHasContentOrHtml){
	this.updateTextContent('');
	if(process.env.NODE_ENV!=='production'){
	ReactInstrumentation.debugTool.onSetChildren(this._debugID,[]);
	}
	}
	
	if(nextContent!=null){
	if(lastContent!==nextContent){
	this.updateTextContent(''+nextContent);
	if(process.env.NODE_ENV!=='production'){
	setAndValidateContentChildDev.call(this,nextContent);
	}
	}
	}else if(nextHtml!=null){
	if(lastHtml!==nextHtml){
	this.updateMarkup(''+nextHtml);
	}
	if(process.env.NODE_ENV!=='production'){
	ReactInstrumentation.debugTool.onSetChildren(this._debugID,[]);
	}
	}else if(nextChildren!=null){
	if(process.env.NODE_ENV!=='production'){
	setAndValidateContentChildDev.call(this,null);
	}
	
	this.updateChildren(nextChildren,transaction,context);
	}
	},
	
	getHostNode:function getHostNode(){
	return getNode(this);
	},
	
	
	
	
	
	
	
	unmountComponent:function unmountComponent(safely){
	switch(this._tag){
	case'audio':
	case'form':
	case'iframe':
	case'img':
	case'link':
	case'object':
	case'source':
	case'video':
	var listeners=this._wrapperState.listeners;
	if(listeners){
	for(var i=0;i<listeners.length;i++){
	listeners[i].remove();
	}
	}
	break;
	case'html':
	case'head':
	case'body':
	
	
	
	
	
	
	 true?process.env.NODE_ENV!=='production'?invariant(false,'<%s> tried to unmount. Because of cross-browser quirks it is impossible to unmount some top-level components (eg <html>, <head>, and <body>) reliably and efficiently. To fix this, have a single top-level component that never unmounts render these elements.',this._tag):_prodInvariant('66',this._tag):void 0;
	break;}
	
	
	this.unmountChildren(safely);
	ReactDOMComponentTree.uncacheNode(this);
	EventPluginHub.deleteAllListeners(this);
	this._rootNodeID=0;
	this._domID=0;
	this._wrapperState=null;
	
	if(process.env.NODE_ENV!=='production'){
	setAndValidateContentChildDev.call(this,null);
	}
	},
	
	getPublicInstance:function getPublicInstance(){
	return getNode(this);
	}};
	
	
	
	_assign(ReactDOMComponent.prototype,ReactDOMComponent.Mixin,ReactMultiChild.Mixin);
	
	module.exports=ReactDOMComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ReactDOMComponentTree=__webpack_require__(34);
	
	var focusNode=__webpack_require__(94);
	
	var AutoFocusUtils={
	focusDOMComponent:function focusDOMComponent(){
	focusNode(ReactDOMComponentTree.getNodeFromInstance(this));
	}};
	
	
	module.exports=AutoFocusUtils;

/***/ },
/* 94 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	function focusNode(node){
	
	
	
	try{
	node.focus();
	}catch(e){}
	}
	
	module.exports=focusNode;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var CSSProperty=__webpack_require__(96);
	var ExecutionEnvironment=__webpack_require__(48);
	var ReactInstrumentation=__webpack_require__(62);
	
	var camelizeStyleName=__webpack_require__(97);
	var dangerousStyleValue=__webpack_require__(99);
	var hyphenateStyleName=__webpack_require__(100);
	var memoizeStringOnly=__webpack_require__(102);
	var warning=__webpack_require__(11);
	
	var processStyleName=memoizeStringOnly(function(styleName){
	return hyphenateStyleName(styleName);
	});
	
	var hasShorthandPropertyBug=false;
	var styleFloatAccessor='cssFloat';
	if(ExecutionEnvironment.canUseDOM){
	var tempStyle=document.createElement('div').style;
	try{
	
	tempStyle.font='';
	}catch(e){
	hasShorthandPropertyBug=true;
	}
	
	if(document.documentElement.style.cssFloat===undefined){
	styleFloatAccessor='styleFloat';
	}
	}
	
	if(process.env.NODE_ENV!=='production'){
	
	var badVendoredStyleNamePattern=/^(?:webkit|moz|o)[A-Z]/;
	
	
	var badStyleValueWithSemicolonPattern=/;\s*$/;
	
	var warnedStyleNames={};
	var warnedStyleValues={};
	var warnedForNaNValue=false;
	
	var warnHyphenatedStyleName=function warnHyphenatedStyleName(name,owner){
	if(warnedStyleNames.hasOwnProperty(name)&&warnedStyleNames[name]){
	return;
	}
	
	warnedStyleNames[name]=true;
	process.env.NODE_ENV!=='production'?warning(false,'Unsupported style property %s. Did you mean %s?%s',name,camelizeStyleName(name),checkRenderMessage(owner)):void 0;
	};
	
	var warnBadVendoredStyleName=function warnBadVendoredStyleName(name,owner){
	if(warnedStyleNames.hasOwnProperty(name)&&warnedStyleNames[name]){
	return;
	}
	
	warnedStyleNames[name]=true;
	process.env.NODE_ENV!=='production'?warning(false,'Unsupported vendor-prefixed style property %s. Did you mean %s?%s',name,name.charAt(0).toUpperCase()+name.slice(1),checkRenderMessage(owner)):void 0;
	};
	
	var warnStyleValueWithSemicolon=function warnStyleValueWithSemicolon(name,value,owner){
	if(warnedStyleValues.hasOwnProperty(value)&&warnedStyleValues[value]){
	return;
	}
	
	warnedStyleValues[value]=true;
	process.env.NODE_ENV!=='production'?warning(false,'Style property values shouldn\'t contain a semicolon.%s '+'Try "%s: %s" instead.',checkRenderMessage(owner),name,value.replace(badStyleValueWithSemicolonPattern,'')):void 0;
	};
	
	var warnStyleValueIsNaN=function warnStyleValueIsNaN(name,value,owner){
	if(warnedForNaNValue){
	return;
	}
	
	warnedForNaNValue=true;
	process.env.NODE_ENV!=='production'?warning(false,'`NaN` is an invalid value for the `%s` css style property.%s',name,checkRenderMessage(owner)):void 0;
	};
	
	var checkRenderMessage=function checkRenderMessage(owner){
	if(owner){
	var name=owner.getName();
	if(name){
	return' Check the render method of `'+name+'`.';
	}
	}
	return'';
	};
	
	
	
	
	
	
	var warnValidStyle=function warnValidStyle(name,value,component){
	var owner;
	if(component){
	owner=component._currentElement._owner;
	}
	if(name.indexOf('-')>-1){
	warnHyphenatedStyleName(name,owner);
	}else if(badVendoredStyleNamePattern.test(name)){
	warnBadVendoredStyleName(name,owner);
	}else if(badStyleValueWithSemicolonPattern.test(value)){
	warnStyleValueWithSemicolon(name,value,owner);
	}
	
	if(typeof value==='number'&&isNaN(value)){
	warnStyleValueIsNaN(name,value,owner);
	}
	};
	}
	
	
	
	
	var CSSPropertyOperations={
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	createMarkupForStyles:function createMarkupForStyles(styles,component){
	var serialized='';
	for(var styleName in styles){
	if(!styles.hasOwnProperty(styleName)){
	continue;
	}
	var styleValue=styles[styleName];
	if(process.env.NODE_ENV!=='production'){
	warnValidStyle(styleName,styleValue,component);
	}
	if(styleValue!=null){
	serialized+=processStyleName(styleName)+':';
	serialized+=dangerousStyleValue(styleName,styleValue,component)+';';
	}
	}
	return serialized||null;
	},
	
	
	
	
	
	
	
	
	
	setValueForStyles:function setValueForStyles(node,styles,component){
	if(process.env.NODE_ENV!=='production'){
	ReactInstrumentation.debugTool.onHostOperation({
	instanceID:component._debugID,
	type:'update styles',
	payload:styles});
	
	}
	
	var style=node.style;
	for(var styleName in styles){
	if(!styles.hasOwnProperty(styleName)){
	continue;
	}
	if(process.env.NODE_ENV!=='production'){
	warnValidStyle(styleName,styles[styleName],component);
	}
	var styleValue=dangerousStyleValue(styleName,styles[styleName],component);
	if(styleName==='float'||styleName==='cssFloat'){
	styleName=styleFloatAccessor;
	}
	if(styleValue){
	style[styleName]=styleValue;
	}else{
	var expansion=hasShorthandPropertyBug&&CSSProperty.shorthandPropertyExpansions[styleName];
	if(expansion){
	
	
	for(var individualStyleName in expansion){
	style[individualStyleName]='';
	}
	}else{
	style[styleName]='';
	}
	}
	}
	}};
	
	
	
	module.exports=CSSPropertyOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 96 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	var isUnitlessNumber={
	animationIterationCount:true,
	borderImageOutset:true,
	borderImageSlice:true,
	borderImageWidth:true,
	boxFlex:true,
	boxFlexGroup:true,
	boxOrdinalGroup:true,
	columnCount:true,
	flex:true,
	flexGrow:true,
	flexPositive:true,
	flexShrink:true,
	flexNegative:true,
	flexOrder:true,
	gridRow:true,
	gridColumn:true,
	fontWeight:true,
	lineClamp:true,
	lineHeight:true,
	opacity:true,
	order:true,
	orphans:true,
	tabSize:true,
	widows:true,
	zIndex:true,
	zoom:true,
	
	
	fillOpacity:true,
	floodOpacity:true,
	stopOpacity:true,
	strokeDasharray:true,
	strokeDashoffset:true,
	strokeMiterlimit:true,
	strokeOpacity:true,
	strokeWidth:true};
	
	
	
	
	
	
	
	
	function prefixKey(prefix,key){
	return prefix+key.charAt(0).toUpperCase()+key.substring(1);
	}
	
	
	
	
	
	var prefixes=['Webkit','ms','Moz','O'];
	
	
	
	Object.keys(isUnitlessNumber).forEach(function(prop){
	prefixes.forEach(function(prefix){
	isUnitlessNumber[prefixKey(prefix,prop)]=isUnitlessNumber[prop];
	});
	});
	
	
	
	
	
	
	
	
	
	
	var shorthandPropertyExpansions={
	background:{
	backgroundAttachment:true,
	backgroundColor:true,
	backgroundImage:true,
	backgroundPositionX:true,
	backgroundPositionY:true,
	backgroundRepeat:true},
	
	backgroundPosition:{
	backgroundPositionX:true,
	backgroundPositionY:true},
	
	border:{
	borderWidth:true,
	borderStyle:true,
	borderColor:true},
	
	borderBottom:{
	borderBottomWidth:true,
	borderBottomStyle:true,
	borderBottomColor:true},
	
	borderLeft:{
	borderLeftWidth:true,
	borderLeftStyle:true,
	borderLeftColor:true},
	
	borderRight:{
	borderRightWidth:true,
	borderRightStyle:true,
	borderRightColor:true},
	
	borderTop:{
	borderTopWidth:true,
	borderTopStyle:true,
	borderTopColor:true},
	
	font:{
	fontStyle:true,
	fontVariant:true,
	fontWeight:true,
	fontSize:true,
	lineHeight:true,
	fontFamily:true},
	
	outline:{
	outlineWidth:true,
	outlineStyle:true,
	outlineColor:true}};
	
	
	
	var CSSProperty={
	isUnitlessNumber:isUnitlessNumber,
	shorthandPropertyExpansions:shorthandPropertyExpansions};
	
	
	module.exports=CSSProperty;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var camelize=__webpack_require__(98);
	
	var msPattern=/^-ms-/;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function camelizeStyleName(string){
	return camelize(string.replace(msPattern,'ms-'));
	}
	
	module.exports=camelizeStyleName;

/***/ },
/* 98 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	
	
	
	
	var _hyphenPattern=/-(.)/g;
	
	
	
	
	
	
	
	
	
	
	function camelize(string){
	return string.replace(_hyphenPattern,function(_,character){
	return character.toUpperCase();
	});
	}
	
	module.exports=camelize;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var CSSProperty=__webpack_require__(96);
	var warning=__webpack_require__(11);
	
	var isUnitlessNumber=CSSProperty.isUnitlessNumber;
	var styleWarnings={};
	
	
	
	
	
	
	
	
	
	
	
	function dangerousStyleValue(name,value,component){
	
	
	
	
	
	
	
	
	
	
	var isEmpty=value==null||typeof value==='boolean'||value==='';
	if(isEmpty){
	return'';
	}
	
	var isNonNumeric=isNaN(value);
	if(isNonNumeric||value===0||isUnitlessNumber.hasOwnProperty(name)&&isUnitlessNumber[name]){
	return''+value;
	}
	
	if(typeof value==='string'){
	if(process.env.NODE_ENV!=='production'){
	
	
	if(component&&value!=='0'){
	var owner=component._currentElement._owner;
	var ownerName=owner?owner.getName():null;
	if(ownerName&&!styleWarnings[ownerName]){
	styleWarnings[ownerName]={};
	}
	var warned=false;
	if(ownerName){
	var warnings=styleWarnings[ownerName];
	warned=warnings[name];
	if(!warned){
	warnings[name]=true;
	}
	}
	if(!warned){
	process.env.NODE_ENV!=='production'?warning(false,'a `%s` tag (owner: `%s`) was passed a numeric string value '+'for CSS property `%s` (value: `%s`) which will be treated '+'as a unitless number in a future version of React.',component._currentElement.type,ownerName||'unknown',name,value):void 0;
	}
	}
	}
	value=value.trim();
	}
	return value+'px';
	}
	
	module.exports=dangerousStyleValue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var hyphenate=__webpack_require__(101);
	
	var msPattern=/^ms-/;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function hyphenateStyleName(string){
	return hyphenate(string).replace(msPattern,'-ms-');
	}
	
	module.exports=hyphenateStyleName;

/***/ },
/* 101 */
/***/ function(module, exports) {

	'use strict';
	
	
	
	
	
	
	
	
	
	
	
	
	var _uppercasePattern=/([A-Z])/g;
	
	
	
	
	
	
	
	
	
	
	
	
	
	function hyphenate(string){
	return string.replace(_uppercasePattern,'-$1').toLowerCase();
	}
	
	module.exports=hyphenate;

/***/ },
/* 102 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	function memoizeStringOnly(callback){
	var cache={};
	return function(string){
	if(!cache.hasOwnProperty(string)){
	cache[string]=callback.call(this,string);
	}
	return cache[string];
	};
	}
	
	module.exports=memoizeStringOnly;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var DOMProperty=__webpack_require__(36);
	var ReactDOMComponentTree=__webpack_require__(34);
	var ReactInstrumentation=__webpack_require__(62);
	
	var quoteAttributeValueForBrowser=__webpack_require__(104);
	var warning=__webpack_require__(11);
	
	var VALID_ATTRIBUTE_NAME_REGEX=new RegExp('^['+DOMProperty.ATTRIBUTE_NAME_START_CHAR+']['+DOMProperty.ATTRIBUTE_NAME_CHAR+']*$');
	var illegalAttributeNameCache={};
	var validatedAttributeNameCache={};
	
	function isAttributeNameSafe(attributeName){
	if(validatedAttributeNameCache.hasOwnProperty(attributeName)){
	return true;
	}
	if(illegalAttributeNameCache.hasOwnProperty(attributeName)){
	return false;
	}
	if(VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)){
	validatedAttributeNameCache[attributeName]=true;
	return true;
	}
	illegalAttributeNameCache[attributeName]=true;
	process.env.NODE_ENV!=='production'?warning(false,'Invalid attribute name: `%s`',attributeName):void 0;
	return false;
	}
	
	function shouldIgnoreValue(propertyInfo,value){
	return value==null||propertyInfo.hasBooleanValue&&!value||propertyInfo.hasNumericValue&&isNaN(value)||propertyInfo.hasPositiveNumericValue&&value<1||propertyInfo.hasOverloadedBooleanValue&&value===false;
	}
	
	
	
	
	var DOMPropertyOperations={
	
	
	
	
	
	
	
	createMarkupForID:function createMarkupForID(id){
	return DOMProperty.ID_ATTRIBUTE_NAME+'='+quoteAttributeValueForBrowser(id);
	},
	
	setAttributeForID:function setAttributeForID(node,id){
	node.setAttribute(DOMProperty.ID_ATTRIBUTE_NAME,id);
	},
	
	createMarkupForRoot:function createMarkupForRoot(){
	return DOMProperty.ROOT_ATTRIBUTE_NAME+'=""';
	},
	
	setAttributeForRoot:function setAttributeForRoot(node){
	node.setAttribute(DOMProperty.ROOT_ATTRIBUTE_NAME,'');
	},
	
	
	
	
	
	
	
	
	createMarkupForProperty:function createMarkupForProperty(name,value){
	var propertyInfo=DOMProperty.properties.hasOwnProperty(name)?DOMProperty.properties[name]:null;
	if(propertyInfo){
	if(shouldIgnoreValue(propertyInfo,value)){
	return'';
	}
	var attributeName=propertyInfo.attributeName;
	if(propertyInfo.hasBooleanValue||propertyInfo.hasOverloadedBooleanValue&&value===true){
	return attributeName+'=""';
	}
	return attributeName+'='+quoteAttributeValueForBrowser(value);
	}else if(DOMProperty.isCustomAttribute(name)){
	if(value==null){
	return'';
	}
	return name+'='+quoteAttributeValueForBrowser(value);
	}
	return null;
	},
	
	
	
	
	
	
	
	
	createMarkupForCustomAttribute:function createMarkupForCustomAttribute(name,value){
	if(!isAttributeNameSafe(name)||value==null){
	return'';
	}
	return name+'='+quoteAttributeValueForBrowser(value);
	},
	
	
	
	
	
	
	
	
	setValueForProperty:function setValueForProperty(node,name,value){
	var propertyInfo=DOMProperty.properties.hasOwnProperty(name)?DOMProperty.properties[name]:null;
	if(propertyInfo){
	var mutationMethod=propertyInfo.mutationMethod;
	if(mutationMethod){
	mutationMethod(node,value);
	}else if(shouldIgnoreValue(propertyInfo,value)){
	this.deleteValueForProperty(node,name);
	return;
	}else if(propertyInfo.mustUseProperty){
	
	
	node[propertyInfo.propertyName]=value;
	}else{
	var attributeName=propertyInfo.attributeName;
	var namespace=propertyInfo.attributeNamespace;
	
	
	if(namespace){
	node.setAttributeNS(namespace,attributeName,''+value);
	}else if(propertyInfo.hasBooleanValue||propertyInfo.hasOverloadedBooleanValue&&value===true){
	node.setAttribute(attributeName,'');
	}else{
	node.setAttribute(attributeName,''+value);
	}
	}
	}else if(DOMProperty.isCustomAttribute(name)){
	DOMPropertyOperations.setValueForAttribute(node,name,value);
	return;
	}
	
	if(process.env.NODE_ENV!=='production'){
	var payload={};
	payload[name]=value;
	ReactInstrumentation.debugTool.onHostOperation({
	instanceID:ReactDOMComponentTree.getInstanceFromNode(node)._debugID,
	type:'update attribute',
	payload:payload});
	
	}
	},
	
	setValueForAttribute:function setValueForAttribute(node,name,value){
	if(!isAttributeNameSafe(name)){
	return;
	}
	if(value==null){
	node.removeAttribute(name);
	}else{
	node.setAttribute(name,''+value);
	}
	
	if(process.env.NODE_ENV!=='production'){
	var payload={};
	payload[name]=value;
	ReactInstrumentation.debugTool.onHostOperation({
	instanceID:ReactDOMComponentTree.getInstanceFromNode(node)._debugID,
	type:'update attribute',
	payload:payload});
	
	}
	},
	
	
	
	
	
	
	
	deleteValueForAttribute:function deleteValueForAttribute(node,name){
	node.removeAttribute(name);
	if(process.env.NODE_ENV!=='production'){
	ReactInstrumentation.debugTool.onHostOperation({
	instanceID:ReactDOMComponentTree.getInstanceFromNode(node)._debugID,
	type:'remove attribute',
	payload:name});
	
	}
	},
	
	
	
	
	
	
	
	deleteValueForProperty:function deleteValueForProperty(node,name){
	var propertyInfo=DOMProperty.properties.hasOwnProperty(name)?DOMProperty.properties[name]:null;
	if(propertyInfo){
	var mutationMethod=propertyInfo.mutationMethod;
	if(mutationMethod){
	mutationMethod(node,undefined);
	}else if(propertyInfo.mustUseProperty){
	var propName=propertyInfo.propertyName;
	if(propertyInfo.hasBooleanValue){
	node[propName]=false;
	}else{
	node[propName]='';
	}
	}else{
	node.removeAttribute(propertyInfo.attributeName);
	}
	}else if(DOMProperty.isCustomAttribute(name)){
	node.removeAttribute(name);
	}
	
	if(process.env.NODE_ENV!=='production'){
	ReactInstrumentation.debugTool.onHostOperation({
	instanceID:ReactDOMComponentTree.getInstanceFromNode(node)._debugID,
	type:'remove attribute',
	payload:name});
	
	}
	}};
	
	
	
	module.exports=DOMPropertyOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var escapeTextContentForBrowser=__webpack_require__(86);
	
	
	
	
	
	
	
	function quoteAttributeValueForBrowser(value){
	return'"'+escapeTextContentForBrowser(value)+'"';
	}
	
	module.exports=quoteAttributeValueForBrowser;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _assign=__webpack_require__(4);
	
	var EventPluginRegistry=__webpack_require__(43);
	var ReactEventEmitterMixin=__webpack_require__(106);
	var ViewportMetrics=__webpack_require__(76);
	
	var getVendorPrefixedEventName=__webpack_require__(107);
	var isEventSupported=__webpack_require__(70);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var hasEventPageXY;
	var alreadyListeningTo={};
	var isMonitoringScrollValue=false;
	var reactTopListenersCounter=0;
	
	
	
	
	var topEventMapping={
	topAbort:'abort',
	topAnimationEnd:getVendorPrefixedEventName('animationend')||'animationend',
	topAnimationIteration:getVendorPrefixedEventName('animationiteration')||'animationiteration',
	topAnimationStart:getVendorPrefixedEventName('animationstart')||'animationstart',
	topBlur:'blur',
	topCanPlay:'canplay',
	topCanPlayThrough:'canplaythrough',
	topChange:'change',
	topClick:'click',
	topCompositionEnd:'compositionend',
	topCompositionStart:'compositionstart',
	topCompositionUpdate:'compositionupdate',
	topContextMenu:'contextmenu',
	topCopy:'copy',
	topCut:'cut',
	topDoubleClick:'dblclick',
	topDrag:'drag',
	topDragEnd:'dragend',
	topDragEnter:'dragenter',
	topDragExit:'dragexit',
	topDragLeave:'dragleave',
	topDragOver:'dragover',
	topDragStart:'dragstart',
	topDrop:'drop',
	topDurationChange:'durationchange',
	topEmptied:'emptied',
	topEncrypted:'encrypted',
	topEnded:'ended',
	topError:'error',
	topFocus:'focus',
	topInput:'input',
	topKeyDown:'keydown',
	topKeyPress:'keypress',
	topKeyUp:'keyup',
	topLoadedData:'loadeddata',
	topLoadedMetadata:'loadedmetadata',
	topLoadStart:'loadstart',
	topMouseDown:'mousedown',
	topMouseMove:'mousemove',
	topMouseOut:'mouseout',
	topMouseOver:'mouseover',
	topMouseUp:'mouseup',
	topPaste:'paste',
	topPause:'pause',
	topPlay:'play',
	topPlaying:'playing',
	topProgress:'progress',
	topRateChange:'ratechange',
	topScroll:'scroll',
	topSeeked:'seeked',
	topSeeking:'seeking',
	topSelectionChange:'selectionchange',
	topStalled:'stalled',
	topSuspend:'suspend',
	topTextInput:'textInput',
	topTimeUpdate:'timeupdate',
	topTouchCancel:'touchcancel',
	topTouchEnd:'touchend',
	topTouchMove:'touchmove',
	topTouchStart:'touchstart',
	topTransitionEnd:getVendorPrefixedEventName('transitionend')||'transitionend',
	topVolumeChange:'volumechange',
	topWaiting:'waiting',
	topWheel:'wheel'};
	
	
	
	
	
	var topListenersIDKey='_reactListenersID'+String(Math.random()).slice(2);
	
	function getListeningForDocument(mountAt){
	
	
	if(!Object.prototype.hasOwnProperty.call(mountAt,topListenersIDKey)){
	mountAt[topListenersIDKey]=reactTopListenersCounter++;
	alreadyListeningTo[mountAt[topListenersIDKey]]={};
	}
	return alreadyListeningTo[mountAt[topListenersIDKey]];
	}
	
	
	
	
	
	
	
	
	
	
	
	var ReactBrowserEventEmitter=_assign({},ReactEventEmitterMixin,{
	
	
	
	
	ReactEventListener:null,
	
	injection:{
	
	
	
	injectReactEventListener:function injectReactEventListener(ReactEventListener){
	ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel);
	ReactBrowserEventEmitter.ReactEventListener=ReactEventListener;
	}},
	
	
	
	
	
	
	
	setEnabled:function setEnabled(enabled){
	if(ReactBrowserEventEmitter.ReactEventListener){
	ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
	}
	},
	
	
	
	
	isEnabled:function isEnabled(){
	return!!(ReactBrowserEventEmitter.ReactEventListener&&ReactBrowserEventEmitter.ReactEventListener.isEnabled());
	},
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	listenTo:function listenTo(registrationName,contentDocumentHandle){
	var mountAt=contentDocumentHandle;
	var isListening=getListeningForDocument(mountAt);
	var dependencies=EventPluginRegistry.registrationNameDependencies[registrationName];
	
	for(var i=0;i<dependencies.length;i++){
	var dependency=dependencies[i];
	if(!(isListening.hasOwnProperty(dependency)&&isListening[dependency])){
	if(dependency==='topWheel'){
	if(isEventSupported('wheel')){
	ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topWheel','wheel',mountAt);
	}else if(isEventSupported('mousewheel')){
	ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topWheel','mousewheel',mountAt);
	}else{
	
	
	ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topWheel','DOMMouseScroll',mountAt);
	}
	}else if(dependency==='topScroll'){
	
	if(isEventSupported('scroll',true)){
	ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent('topScroll','scroll',mountAt);
	}else{
	ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topScroll','scroll',ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);
	}
	}else if(dependency==='topFocus'||dependency==='topBlur'){
	
	if(isEventSupported('focus',true)){
	ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent('topFocus','focus',mountAt);
	ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent('topBlur','blur',mountAt);
	}else if(isEventSupported('focusin')){
	
	
	ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topFocus','focusin',mountAt);
	ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topBlur','focusout',mountAt);
	}
	
	
	isListening.topBlur=true;
	isListening.topFocus=true;
	}else if(topEventMapping.hasOwnProperty(dependency)){
	ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency,topEventMapping[dependency],mountAt);
	}
	
	isListening[dependency]=true;
	}
	}
	},
	
	trapBubbledEvent:function trapBubbledEvent(topLevelType,handlerBaseName,handle){
	return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType,handlerBaseName,handle);
	},
	
	trapCapturedEvent:function trapCapturedEvent(topLevelType,handlerBaseName,handle){
	return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType,handlerBaseName,handle);
	},
	
	
	
	
	
	
	supportsEventPageXY:function supportsEventPageXY(){
	if(!document.createEvent){
	return false;
	}
	var ev=document.createEvent('MouseEvent');
	return ev!=null&&'pageX'in ev;
	},
	
	
	
	
	
	
	
	
	
	
	
	
	ensureScrollValueMonitoring:function ensureScrollValueMonitoring(){
	if(hasEventPageXY===undefined){
	hasEventPageXY=ReactBrowserEventEmitter.supportsEventPageXY();
	}
	if(!hasEventPageXY&&!isMonitoringScrollValue){
	var refresh=ViewportMetrics.refreshScrollValues;
	ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
	isMonitoringScrollValue=true;
	}
	}});
	
	
	
	module.exports=ReactBrowserEventEmitter;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var EventPluginHub=__webpack_require__(42);
	
	function runEventQueueInBatch(events){
	EventPluginHub.enqueueEvents(events);
	EventPluginHub.processEventQueue(false);
	}
	
	var ReactEventEmitterMixin={
	
	
	
	
	
	handleTopLevel:function handleTopLevel(topLevelType,targetInst,nativeEvent,nativeEventTarget){
	var events=EventPluginHub.extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget);
	runEventQueueInBatch(events);
	}};
	
	
	module.exports=ReactEventEmitterMixin;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ExecutionEnvironment=__webpack_require__(48);
	
	
	
	
	
	
	
	
	function makePrefixMap(styleProp,eventName){
	var prefixes={};
	
	prefixes[styleProp.toLowerCase()]=eventName.toLowerCase();
	prefixes['Webkit'+styleProp]='webkit'+eventName;
	prefixes['Moz'+styleProp]='moz'+eventName;
	prefixes['ms'+styleProp]='MS'+eventName;
	prefixes['O'+styleProp]='o'+eventName.toLowerCase();
	
	return prefixes;
	}
	
	
	
	
	var vendorPrefixes={
	animationend:makePrefixMap('Animation','AnimationEnd'),
	animationiteration:makePrefixMap('Animation','AnimationIteration'),
	animationstart:makePrefixMap('Animation','AnimationStart'),
	transitionend:makePrefixMap('Transition','TransitionEnd')};
	
	
	
	
	
	var prefixedEventNames={};
	
	
	
	
	var style={};
	
	
	
	
	if(ExecutionEnvironment.canUseDOM){
	style=document.createElement('div').style;
	
	
	
	
	
	if(!('AnimationEvent'in window)){
	delete vendorPrefixes.animationend.animation;
	delete vendorPrefixes.animationiteration.animation;
	delete vendorPrefixes.animationstart.animation;
	}
	
	
	if(!('TransitionEvent'in window)){
	delete vendorPrefixes.transitionend.transition;
	}
	}
	
	
	
	
	
	
	
	function getVendorPrefixedEventName(eventName){
	if(prefixedEventNames[eventName]){
	return prefixedEventNames[eventName];
	}else if(!vendorPrefixes[eventName]){
	return eventName;
	}
	
	var prefixMap=vendorPrefixes[eventName];
	
	for(var styleProp in prefixMap){
	if(prefixMap.hasOwnProperty(styleProp)&&styleProp in style){
	return prefixedEventNames[eventName]=prefixMap[styleProp];
	}
	}
	
	return'';
	}
	
	module.exports=getVendorPrefixedEventName;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(35),
	_assign=__webpack_require__(4);
	
	var DOMPropertyOperations=__webpack_require__(103);
	var LinkedValueUtils=__webpack_require__(109);
	var ReactDOMComponentTree=__webpack_require__(34);
	var ReactUpdates=__webpack_require__(56);
	
	var invariant=__webpack_require__(8);
	var warning=__webpack_require__(11);
	
	var didWarnValueLink=false;
	var didWarnCheckedLink=false;
	var didWarnValueDefaultValue=false;
	var didWarnCheckedDefaultChecked=false;
	var didWarnControlledToUncontrolled=false;
	var didWarnUncontrolledToControlled=false;
	
	function forceUpdateIfMounted(){
	if(this._rootNodeID){
	
	ReactDOMInput.updateWrapper(this);
	}
	}
	
	function isControlled(props){
	var usesChecked=props.type==='checkbox'||props.type==='radio';
	return usesChecked?props.checked!=null:props.value!=null;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var ReactDOMInput={
	getHostProps:function getHostProps(inst,props){
	var value=LinkedValueUtils.getValue(props);
	var checked=LinkedValueUtils.getChecked(props);
	
	var hostProps=_assign({
	
	
	type:undefined,
	
	
	step:undefined,
	
	
	min:undefined,
	max:undefined},
	props,{
	defaultChecked:undefined,
	defaultValue:undefined,
	value:value!=null?value:inst._wrapperState.initialValue,
	checked:checked!=null?checked:inst._wrapperState.initialChecked,
	onChange:inst._wrapperState.onChange});
	
	
	return hostProps;
	},
	
	mountWrapper:function mountWrapper(inst,props){
	if(process.env.NODE_ENV!=='production'){
	LinkedValueUtils.checkPropTypes('input',props,inst._currentElement._owner);
	
	var owner=inst._currentElement._owner;
	
	if(props.valueLink!==undefined&&!didWarnValueLink){
	process.env.NODE_ENV!=='production'?warning(false,'`valueLink` prop on `input` is deprecated; set `value` and `onChange` instead.'):void 0;
	didWarnValueLink=true;
	}
	if(props.checkedLink!==undefined&&!didWarnCheckedLink){
	process.env.NODE_ENV!=='production'?warning(false,'`checkedLink` prop on `input` is deprecated; set `value` and `onChange` instead.'):void 0;
	didWarnCheckedLink=true;
	}
	if(props.checked!==undefined&&props.defaultChecked!==undefined&&!didWarnCheckedDefaultChecked){
	process.env.NODE_ENV!=='production'?warning(false,'%s contains an input of type %s with both checked and defaultChecked props. '+'Input elements must be either controlled or uncontrolled '+'(specify either the checked prop, or the defaultChecked prop, but not '+'both). Decide between using a controlled or uncontrolled input '+'element and remove one of these props. More info: '+'https://fb.me/react-controlled-components',owner&&owner.getName()||'A component',props.type):void 0;
	didWarnCheckedDefaultChecked=true;
	}
	if(props.value!==undefined&&props.defaultValue!==undefined&&!didWarnValueDefaultValue){
	process.env.NODE_ENV!=='production'?warning(false,'%s contains an input of type %s with both value and defaultValue props. '+'Input elements must be either controlled or uncontrolled '+'(specify either the value prop, or the defaultValue prop, but not '+'both). Decide between using a controlled or uncontrolled input '+'element and remove one of these props. More info: '+'https://fb.me/react-controlled-components',owner&&owner.getName()||'A component',props.type):void 0;
	didWarnValueDefaultValue=true;
	}
	}
	
	var defaultValue=props.defaultValue;
	inst._wrapperState={
	initialChecked:props.checked!=null?props.checked:props.defaultChecked,
	initialValue:props.value!=null?props.value:defaultValue,
	listeners:null,
	onChange:_handleChange.bind(inst)};
	
	
	if(process.env.NODE_ENV!=='production'){
	inst._wrapperState.controlled=isControlled(props);
	}
	},
	
	updateWrapper:function updateWrapper(inst){
	var props=inst._currentElement.props;
	
	if(process.env.NODE_ENV!=='production'){
	var controlled=isControlled(props);
	var owner=inst._currentElement._owner;
	
	if(!inst._wrapperState.controlled&&controlled&&!didWarnUncontrolledToControlled){
	process.env.NODE_ENV!=='production'?warning(false,'%s is changing an uncontrolled input of type %s to be controlled. '+'Input elements should not switch from uncontrolled to controlled (or vice versa). '+'Decide between using a controlled or uncontrolled input '+'element for the lifetime of the component. More info: https://fb.me/react-controlled-components',owner&&owner.getName()||'A component',props.type):void 0;
	didWarnUncontrolledToControlled=true;
	}
	if(inst._wrapperState.controlled&&!controlled&&!didWarnControlledToUncontrolled){
	process.env.NODE_ENV!=='production'?warning(false,'%s is changing a controlled input of type %s to be uncontrolled. '+'Input elements should not switch from controlled to uncontrolled (or vice versa). '+'Decide between using a controlled or uncontrolled input '+'element for the lifetime of the component. More info: https://fb.me/react-controlled-components',owner&&owner.getName()||'A component',props.type):void 0;
	didWarnControlledToUncontrolled=true;
	}
	}
	
	
	var checked=props.checked;
	if(checked!=null){
	DOMPropertyOperations.setValueForProperty(ReactDOMComponentTree.getNodeFromInstance(inst),'checked',checked||false);
	}
	
	var node=ReactDOMComponentTree.getNodeFromInstance(inst);
	var value=LinkedValueUtils.getValue(props);
	if(value!=null){
	
	
	
	var newValue=''+value;
	
	
	if(newValue!==node.value){
	node.value=newValue;
	}
	}else{
	if(props.value==null&&props.defaultValue!=null){
	node.defaultValue=''+props.defaultValue;
	}
	if(props.checked==null&&props.defaultChecked!=null){
	node.defaultChecked=!!props.defaultChecked;
	}
	}
	},
	
	postMountWrapper:function postMountWrapper(inst){
	var props=inst._currentElement.props;
	
	
	
	var node=ReactDOMComponentTree.getNodeFromInstance(inst);
	
	
	
	
	
	
	
	switch(props.type){
	case'submit':
	case'reset':
	break;
	case'color':
	case'date':
	case'datetime':
	case'datetime-local':
	case'month':
	case'time':
	case'week':
	
	
	node.value='';
	node.value=node.defaultValue;
	break;
	default:
	node.value=node.value;
	break;}
	
	
	
	
	
	
	
	var name=node.name;
	if(name!==''){
	node.name='';
	}
	node.defaultChecked=!node.defaultChecked;
	node.defaultChecked=!node.defaultChecked;
	if(name!==''){
	node.name=name;
	}
	}};
	
	
	function _handleChange(event){
	var props=this._currentElement.props;
	
	var returnValue=LinkedValueUtils.executeOnChange(props,event);
	
	
	
	
	ReactUpdates.asap(forceUpdateIfMounted,this);
	
	var name=props.name;
	if(props.type==='radio'&&name!=null){
	var rootNode=ReactDOMComponentTree.getNodeFromInstance(this);
	var queryRoot=rootNode;
	
	while(queryRoot.parentNode){
	queryRoot=queryRoot.parentNode;
	}
	
	
	
	
	
	
	
	var group=queryRoot.querySelectorAll('input[name='+JSON.stringify(''+name)+'][type="radio"]');
	
	for(var i=0;i<group.length;i++){
	var otherNode=group[i];
	if(otherNode===rootNode||otherNode.form!==rootNode.form){
	continue;
	}
	
	
	
	
	var otherInstance=ReactDOMComponentTree.getInstanceFromNode(otherNode);
	!otherInstance?process.env.NODE_ENV!=='production'?invariant(false,'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.'):_prodInvariant('90'):void 0;
	
	
	
	ReactUpdates.asap(forceUpdateIfMounted,otherInstance);
	}
	}
	
	return returnValue;
	}
	
	module.exports=ReactDOMInput;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(35);
	
	var React=__webpack_require__(2);
	var ReactPropTypesSecret=__webpack_require__(110);
	
	var invariant=__webpack_require__(8);
	var warning=__webpack_require__(11);
	
	var hasReadOnlyValue={
	'button':true,
	'checkbox':true,
	'image':true,
	'hidden':true,
	'radio':true,
	'reset':true,
	'submit':true};
	
	
	function _assertSingleLink(inputProps){
	!(inputProps.checkedLink==null||inputProps.valueLink==null)?process.env.NODE_ENV!=='production'?invariant(false,'Cannot provide a checkedLink and a valueLink. If you want to use checkedLink, you probably don\'t want to use valueLink and vice versa.'):_prodInvariant('87'):void 0;
	}
	function _assertValueLink(inputProps){
	_assertSingleLink(inputProps);
	!(inputProps.value==null&&inputProps.onChange==null)?process.env.NODE_ENV!=='production'?invariant(false,'Cannot provide a valueLink and a value or onChange event. If you want to use value or onChange, you probably don\'t want to use valueLink.'):_prodInvariant('88'):void 0;
	}
	
	function _assertCheckedLink(inputProps){
	_assertSingleLink(inputProps);
	!(inputProps.checked==null&&inputProps.onChange==null)?process.env.NODE_ENV!=='production'?invariant(false,'Cannot provide a checkedLink and a checked property or onChange event. If you want to use checked or onChange, you probably don\'t want to use checkedLink'):_prodInvariant('89'):void 0;
	}
	
	var propTypes={
	value:function value(props,propName,componentName){
	if(!props[propName]||hasReadOnlyValue[props.type]||props.onChange||props.readOnly||props.disabled){
	return null;
	}
	return new Error('You provided a `value` prop to a form field without an '+'`onChange` handler. This will render a read-only field. If '+'the field should be mutable use `defaultValue`. Otherwise, '+'set either `onChange` or `readOnly`.');
	},
	checked:function checked(props,propName,componentName){
	if(!props[propName]||props.onChange||props.readOnly||props.disabled){
	return null;
	}
	return new Error('You provided a `checked` prop to a form field without an '+'`onChange` handler. This will render a read-only field. If '+'the field should be mutable use `defaultChecked`. Otherwise, '+'set either `onChange` or `readOnly`.');
	},
	onChange:React.PropTypes.func};
	
	
	var loggedTypeFailures={};
	function getDeclarationErrorAddendum(owner){
	if(owner){
	var name=owner.getName();
	if(name){
	return' Check the render method of `'+name+'`.';
	}
	}
	return'';
	}
	
	
	
	
	
	var LinkedValueUtils={
	checkPropTypes:function checkPropTypes(tagName,props,owner){
	for(var propName in propTypes){
	if(propTypes.hasOwnProperty(propName)){
	var error=propTypes[propName](props,propName,tagName,'prop',null,ReactPropTypesSecret);
	}
	if(error instanceof Error&&!(error.message in loggedTypeFailures)){
	
	
	loggedTypeFailures[error.message]=true;
	
	var addendum=getDeclarationErrorAddendum(owner);
	process.env.NODE_ENV!=='production'?warning(false,'Failed form propType: %s%s',error.message,addendum):void 0;
	}
	}
	},
	
	
	
	
	
	getValue:function getValue(inputProps){
	if(inputProps.valueLink){
	_assertValueLink(inputProps);
	return inputProps.valueLink.value;
	}
	return inputProps.value;
	},
	
	
	
	
	
	
	getChecked:function getChecked(inputProps){
	if(inputProps.checkedLink){
	_assertCheckedLink(inputProps);
	return inputProps.checkedLink.value;
	}
	return inputProps.checked;
	},
	
	
	
	
	
	executeOnChange:function executeOnChange(inputProps,event){
	if(inputProps.valueLink){
	_assertValueLink(inputProps);
	return inputProps.valueLink.requestChange(event.target.value);
	}else if(inputProps.checkedLink){
	_assertCheckedLink(inputProps);
	return inputProps.checkedLink.requestChange(event.target.checked);
	}else if(inputProps.onChange){
	return inputProps.onChange.call(undefined,event);
	}
	}};
	
	
	module.exports=LinkedValueUtils;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 110 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ReactPropTypesSecret='SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports=ReactPropTypesSecret;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _assign=__webpack_require__(4);
	
	var React=__webpack_require__(2);
	var ReactDOMComponentTree=__webpack_require__(34);
	var ReactDOMSelect=__webpack_require__(112);
	
	var warning=__webpack_require__(11);
	var didWarnInvalidOptionChildren=false;
	
	function flattenChildren(children){
	var content='';
	
	
	
	React.Children.forEach(children,function(child){
	if(child==null){
	return;
	}
	if(typeof child==='string'||typeof child==='number'){
	content+=child;
	}else if(!didWarnInvalidOptionChildren){
	didWarnInvalidOptionChildren=true;
	process.env.NODE_ENV!=='production'?warning(false,'Only strings and numbers are supported as <option> children.'):void 0;
	}
	});
	
	return content;
	}
	
	
	
	
	var ReactDOMOption={
	mountWrapper:function mountWrapper(inst,props,hostParent){
	
	if(process.env.NODE_ENV!=='production'){
	process.env.NODE_ENV!=='production'?warning(props.selected==null,'Use the `defaultValue` or `value` props on <select> instead of '+'setting `selected` on <option>.'):void 0;
	}
	
	
	var selectValue=null;
	if(hostParent!=null){
	var selectParent=hostParent;
	
	if(selectParent._tag==='optgroup'){
	selectParent=selectParent._hostParent;
	}
	
	if(selectParent!=null&&selectParent._tag==='select'){
	selectValue=ReactDOMSelect.getSelectValueContext(selectParent);
	}
	}
	
	
	
	var selected=null;
	if(selectValue!=null){
	var value;
	if(props.value!=null){
	value=props.value+'';
	}else{
	value=flattenChildren(props.children);
	}
	selected=false;
	if(Array.isArray(selectValue)){
	
	for(var i=0;i<selectValue.length;i++){
	if(''+selectValue[i]===value){
	selected=true;
	break;
	}
	}
	}else{
	selected=''+selectValue===value;
	}
	}
	
	inst._wrapperState={selected:selected};
	},
	
	postMountWrapper:function postMountWrapper(inst){
	
	var props=inst._currentElement.props;
	if(props.value!=null){
	var node=ReactDOMComponentTree.getNodeFromInstance(inst);
	node.setAttribute('value',props.value);
	}
	},
	
	getHostProps:function getHostProps(inst,props){
	var hostProps=_assign({selected:undefined,children:undefined},props);
	
	
	
	if(inst._wrapperState.selected!=null){
	hostProps.selected=inst._wrapperState.selected;
	}
	
	var content=flattenChildren(props.children);
	
	if(content){
	hostProps.children=content;
	}
	
	return hostProps;
	}};
	
	
	
	module.exports=ReactDOMOption;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _assign=__webpack_require__(4);
	
	var LinkedValueUtils=__webpack_require__(109);
	var ReactDOMComponentTree=__webpack_require__(34);
	var ReactUpdates=__webpack_require__(56);
	
	var warning=__webpack_require__(11);
	
	var didWarnValueLink=false;
	var didWarnValueDefaultValue=false;
	
	function updateOptionsIfPendingUpdateAndMounted(){
	if(this._rootNodeID&&this._wrapperState.pendingUpdate){
	this._wrapperState.pendingUpdate=false;
	
	var props=this._currentElement.props;
	var value=LinkedValueUtils.getValue(props);
	
	if(value!=null){
	updateOptions(this,Boolean(props.multiple),value);
	}
	}
	}
	
	function getDeclarationErrorAddendum(owner){
	if(owner){
	var name=owner.getName();
	if(name){
	return' Check the render method of `'+name+'`.';
	}
	}
	return'';
	}
	
	var valuePropNames=['value','defaultValue'];
	
	
	
	
	
	function checkSelectPropTypes(inst,props){
	var owner=inst._currentElement._owner;
	LinkedValueUtils.checkPropTypes('select',props,owner);
	
	if(props.valueLink!==undefined&&!didWarnValueLink){
	process.env.NODE_ENV!=='production'?warning(false,'`valueLink` prop on `select` is deprecated; set `value` and `onChange` instead.'):void 0;
	didWarnValueLink=true;
	}
	
	for(var i=0;i<valuePropNames.length;i++){
	var propName=valuePropNames[i];
	if(props[propName]==null){
	continue;
	}
	var isArray=Array.isArray(props[propName]);
	if(props.multiple&&!isArray){
	process.env.NODE_ENV!=='production'?warning(false,'The `%s` prop supplied to <select> must be an array if '+'`multiple` is true.%s',propName,getDeclarationErrorAddendum(owner)):void 0;
	}else if(!props.multiple&&isArray){
	process.env.NODE_ENV!=='production'?warning(false,'The `%s` prop supplied to <select> must be a scalar '+'value if `multiple` is false.%s',propName,getDeclarationErrorAddendum(owner)):void 0;
	}
	}
	}
	
	
	
	
	
	
	
	function updateOptions(inst,multiple,propValue){
	var selectedValue,i;
	var options=ReactDOMComponentTree.getNodeFromInstance(inst).options;
	
	if(multiple){
	selectedValue={};
	for(i=0;i<propValue.length;i++){
	selectedValue[''+propValue[i]]=true;
	}
	for(i=0;i<options.length;i++){
	var selected=selectedValue.hasOwnProperty(options[i].value);
	if(options[i].selected!==selected){
	options[i].selected=selected;
	}
	}
	}else{
	
	
	selectedValue=''+propValue;
	for(i=0;i<options.length;i++){
	if(options[i].value===selectedValue){
	options[i].selected=true;
	return;
	}
	}
	if(options.length){
	options[0].selected=true;
	}
	}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var ReactDOMSelect={
	getHostProps:function getHostProps(inst,props){
	return _assign({},props,{
	onChange:inst._wrapperState.onChange,
	value:undefined});
	
	},
	
	mountWrapper:function mountWrapper(inst,props){
	if(process.env.NODE_ENV!=='production'){
	checkSelectPropTypes(inst,props);
	}
	
	var value=LinkedValueUtils.getValue(props);
	inst._wrapperState={
	pendingUpdate:false,
	initialValue:value!=null?value:props.defaultValue,
	listeners:null,
	onChange:_handleChange.bind(inst),
	wasMultiple:Boolean(props.multiple)};
	
	
	if(props.value!==undefined&&props.defaultValue!==undefined&&!didWarnValueDefaultValue){
	process.env.NODE_ENV!=='production'?warning(false,'Select elements must be either controlled or uncontrolled '+'(specify either the value prop, or the defaultValue prop, but not '+'both). Decide between using a controlled or uncontrolled select '+'element and remove one of these props. More info: '+'https://fb.me/react-controlled-components'):void 0;
	didWarnValueDefaultValue=true;
	}
	},
	
	getSelectValueContext:function getSelectValueContext(inst){
	
	
	return inst._wrapperState.initialValue;
	},
	
	postUpdateWrapper:function postUpdateWrapper(inst){
	var props=inst._currentElement.props;
	
	
	
	inst._wrapperState.initialValue=undefined;
	
	var wasMultiple=inst._wrapperState.wasMultiple;
	inst._wrapperState.wasMultiple=Boolean(props.multiple);
	
	var value=LinkedValueUtils.getValue(props);
	if(value!=null){
	inst._wrapperState.pendingUpdate=false;
	updateOptions(inst,Boolean(props.multiple),value);
	}else if(wasMultiple!==Boolean(props.multiple)){
	
	if(props.defaultValue!=null){
	updateOptions(inst,Boolean(props.multiple),props.defaultValue);
	}else{
	
	updateOptions(inst,Boolean(props.multiple),props.multiple?[]:'');
	}
	}
	}};
	
	
	function _handleChange(event){
	var props=this._currentElement.props;
	var returnValue=LinkedValueUtils.executeOnChange(props,event);
	
	if(this._rootNodeID){
	this._wrapperState.pendingUpdate=true;
	}
	ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted,this);
	return returnValue;
	}
	
	module.exports=ReactDOMSelect;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(35),
	_assign=__webpack_require__(4);
	
	var LinkedValueUtils=__webpack_require__(109);
	var ReactDOMComponentTree=__webpack_require__(34);
	var ReactUpdates=__webpack_require__(56);
	
	var invariant=__webpack_require__(8);
	var warning=__webpack_require__(11);
	
	var didWarnValueLink=false;
	var didWarnValDefaultVal=false;
	
	function forceUpdateIfMounted(){
	if(this._rootNodeID){
	
	ReactDOMTextarea.updateWrapper(this);
	}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var ReactDOMTextarea={
	getHostProps:function getHostProps(inst,props){
	!(props.dangerouslySetInnerHTML==null)?process.env.NODE_ENV!=='production'?invariant(false,'`dangerouslySetInnerHTML` does not make sense on <textarea>.'):_prodInvariant('91'):void 0;
	
	
	
	
	
	
	var hostProps=_assign({},props,{
	value:undefined,
	defaultValue:undefined,
	children:''+inst._wrapperState.initialValue,
	onChange:inst._wrapperState.onChange});
	
	
	return hostProps;
	},
	
	mountWrapper:function mountWrapper(inst,props){
	if(process.env.NODE_ENV!=='production'){
	LinkedValueUtils.checkPropTypes('textarea',props,inst._currentElement._owner);
	if(props.valueLink!==undefined&&!didWarnValueLink){
	process.env.NODE_ENV!=='production'?warning(false,'`valueLink` prop on `textarea` is deprecated; set `value` and `onChange` instead.'):void 0;
	didWarnValueLink=true;
	}
	if(props.value!==undefined&&props.defaultValue!==undefined&&!didWarnValDefaultVal){
	process.env.NODE_ENV!=='production'?warning(false,'Textarea elements must be either controlled or uncontrolled '+'(specify either the value prop, or the defaultValue prop, but not '+'both). Decide between using a controlled or uncontrolled textarea '+'and remove one of these props. More info: '+'https://fb.me/react-controlled-components'):void 0;
	didWarnValDefaultVal=true;
	}
	}
	
	var value=LinkedValueUtils.getValue(props);
	var initialValue=value;
	
	
	if(value==null){
	var defaultValue=props.defaultValue;
	
	var children=props.children;
	if(children!=null){
	if(process.env.NODE_ENV!=='production'){
	process.env.NODE_ENV!=='production'?warning(false,'Use the `defaultValue` or `value` props instead of setting '+'children on <textarea>.'):void 0;
	}
	!(defaultValue==null)?process.env.NODE_ENV!=='production'?invariant(false,'If you supply `defaultValue` on a <textarea>, do not pass children.'):_prodInvariant('92'):void 0;
	if(Array.isArray(children)){
	!(children.length<=1)?process.env.NODE_ENV!=='production'?invariant(false,'<textarea> can only have at most one child.'):_prodInvariant('93'):void 0;
	children=children[0];
	}
	
	defaultValue=''+children;
	}
	if(defaultValue==null){
	defaultValue='';
	}
	initialValue=defaultValue;
	}
	
	inst._wrapperState={
	initialValue:''+initialValue,
	listeners:null,
	onChange:_handleChange.bind(inst)};
	
	},
	
	updateWrapper:function updateWrapper(inst){
	var props=inst._currentElement.props;
	
	var node=ReactDOMComponentTree.getNodeFromInstance(inst);
	var value=LinkedValueUtils.getValue(props);
	if(value!=null){
	
	
	var newValue=''+value;
	
	
	if(newValue!==node.value){
	node.value=newValue;
	}
	if(props.defaultValue==null){
	node.defaultValue=newValue;
	}
	}
	if(props.defaultValue!=null){
	node.defaultValue=props.defaultValue;
	}
	},
	
	postMountWrapper:function postMountWrapper(inst){
	
	
	var node=ReactDOMComponentTree.getNodeFromInstance(inst);
	
	
	node.value=node.textContent;
	}};
	
	
	function _handleChange(event){
	var props=this._currentElement.props;
	var returnValue=LinkedValueUtils.executeOnChange(props,event);
	ReactUpdates.asap(forceUpdateIfMounted,this);
	return returnValue;
	}
	
	module.exports=ReactDOMTextarea;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(35);
	
	var ReactComponentEnvironment=__webpack_require__(115);
	var ReactInstanceMap=__webpack_require__(116);
	var ReactInstrumentation=__webpack_require__(62);
	
	var ReactCurrentOwner=__webpack_require__(10);
	var ReactReconciler=__webpack_require__(59);
	var ReactChildReconciler=__webpack_require__(117);
	
	var emptyFunction=__webpack_require__(12);
	var flattenChildren=__webpack_require__(132);
	var invariant=__webpack_require__(8);
	
	
	
	
	
	
	
	
	function makeInsertMarkup(markup,afterNode,toIndex){
	
	return{
	type:'INSERT_MARKUP',
	content:markup,
	fromIndex:null,
	fromNode:null,
	toIndex:toIndex,
	afterNode:afterNode};
	
	}
	
	
	
	
	
	
	
	
	function makeMove(child,afterNode,toIndex){
	
	return{
	type:'MOVE_EXISTING',
	content:null,
	fromIndex:child._mountIndex,
	fromNode:ReactReconciler.getHostNode(child),
	toIndex:toIndex,
	afterNode:afterNode};
	
	}
	
	
	
	
	
	
	
	function makeRemove(child,node){
	
	return{
	type:'REMOVE_NODE',
	content:null,
	fromIndex:child._mountIndex,
	fromNode:node,
	toIndex:null,
	afterNode:null};
	
	}
	
	
	
	
	
	
	
	function makeSetMarkup(markup){
	
	return{
	type:'SET_MARKUP',
	content:markup,
	fromIndex:null,
	fromNode:null,
	toIndex:null,
	afterNode:null};
	
	}
	
	
	
	
	
	
	
	function makeTextContent(textContent){
	
	return{
	type:'TEXT_CONTENT',
	content:textContent,
	fromIndex:null,
	fromNode:null,
	toIndex:null,
	afterNode:null};
	
	}
	
	
	
	
	
	function enqueue(queue,update){
	if(update){
	queue=queue||[];
	queue.push(update);
	}
	return queue;
	}
	
	
	
	
	
	
	function processQueue(inst,updateQueue){
	ReactComponentEnvironment.processChildrenUpdates(inst,updateQueue);
	}
	
	var setChildrenForInstrumentation=emptyFunction;
	if(process.env.NODE_ENV!=='production'){
	var getDebugID=function getDebugID(inst){
	if(!inst._debugID){
	
	var internal;
	if(internal=ReactInstanceMap.get(inst)){
	inst=internal;
	}
	}
	return inst._debugID;
	};
	setChildrenForInstrumentation=function setChildrenForInstrumentation(children){
	var debugID=getDebugID(this);
	
	
	if(debugID!==0){
	ReactInstrumentation.debugTool.onSetChildren(debugID,children?Object.keys(children).map(function(key){
	return children[key]._debugID;
	}):[]);
	}
	};
	}
	
	
	
	
	
	
	
	var ReactMultiChild={
	
	
	
	
	
	
	
	
	Mixin:{
	
	_reconcilerInstantiateChildren:function _reconcilerInstantiateChildren(nestedChildren,transaction,context){
	if(process.env.NODE_ENV!=='production'){
	var selfDebugID=getDebugID(this);
	if(this._currentElement){
	try{
	ReactCurrentOwner.current=this._currentElement._owner;
	return ReactChildReconciler.instantiateChildren(nestedChildren,transaction,context,selfDebugID);
	}finally{
	ReactCurrentOwner.current=null;
	}
	}
	}
	return ReactChildReconciler.instantiateChildren(nestedChildren,transaction,context);
	},
	
	_reconcilerUpdateChildren:function _reconcilerUpdateChildren(prevChildren,nextNestedChildrenElements,mountImages,removedNodes,transaction,context){
	var nextChildren;
	var selfDebugID=0;
	if(process.env.NODE_ENV!=='production'){
	selfDebugID=getDebugID(this);
	if(this._currentElement){
	try{
	ReactCurrentOwner.current=this._currentElement._owner;
	nextChildren=flattenChildren(nextNestedChildrenElements,selfDebugID);
	}finally{
	ReactCurrentOwner.current=null;
	}
	ReactChildReconciler.updateChildren(prevChildren,nextChildren,mountImages,removedNodes,transaction,this,this._hostContainerInfo,context,selfDebugID);
	return nextChildren;
	}
	}
	nextChildren=flattenChildren(nextNestedChildrenElements,selfDebugID);
	ReactChildReconciler.updateChildren(prevChildren,nextChildren,mountImages,removedNodes,transaction,this,this._hostContainerInfo,context,selfDebugID);
	return nextChildren;
	},
	
	
	
	
	
	
	
	
	
	mountChildren:function mountChildren(nestedChildren,transaction,context){
	var children=this._reconcilerInstantiateChildren(nestedChildren,transaction,context);
	this._renderedChildren=children;
	
	var mountImages=[];
	var index=0;
	for(var name in children){
	if(children.hasOwnProperty(name)){
	var child=children[name];
	var selfDebugID=0;
	if(process.env.NODE_ENV!=='production'){
	selfDebugID=getDebugID(this);
	}
	var mountImage=ReactReconciler.mountComponent(child,transaction,this,this._hostContainerInfo,context,selfDebugID);
	child._mountIndex=index++;
	mountImages.push(mountImage);
	}
	}
	
	if(process.env.NODE_ENV!=='production'){
	setChildrenForInstrumentation.call(this,children);
	}
	
	return mountImages;
	},
	
	
	
	
	
	
	
	updateTextContent:function updateTextContent(nextContent){
	var prevChildren=this._renderedChildren;
	
	ReactChildReconciler.unmountChildren(prevChildren,false);
	for(var name in prevChildren){
	if(prevChildren.hasOwnProperty(name)){
	 true?process.env.NODE_ENV!=='production'?invariant(false,'updateTextContent called on non-empty component.'):_prodInvariant('118'):void 0;
	}
	}
	
	var updates=[makeTextContent(nextContent)];
	processQueue(this,updates);
	},
	
	
	
	
	
	
	
	updateMarkup:function updateMarkup(nextMarkup){
	var prevChildren=this._renderedChildren;
	
	ReactChildReconciler.unmountChildren(prevChildren,false);
	for(var name in prevChildren){
	if(prevChildren.hasOwnProperty(name)){
	 true?process.env.NODE_ENV!=='production'?invariant(false,'updateTextContent called on non-empty component.'):_prodInvariant('118'):void 0;
	}
	}
	var updates=[makeSetMarkup(nextMarkup)];
	processQueue(this,updates);
	},
	
	
	
	
	
	
	
	
	updateChildren:function updateChildren(nextNestedChildrenElements,transaction,context){
	
	this._updateChildren(nextNestedChildrenElements,transaction,context);
	},
	
	
	
	
	
	
	
	_updateChildren:function _updateChildren(nextNestedChildrenElements,transaction,context){
	var prevChildren=this._renderedChildren;
	var removedNodes={};
	var mountImages=[];
	var nextChildren=this._reconcilerUpdateChildren(prevChildren,nextNestedChildrenElements,mountImages,removedNodes,transaction,context);
	if(!nextChildren&&!prevChildren){
	return;
	}
	var updates=null;
	var name;
	
	
	var nextIndex=0;
	var lastIndex=0;
	
	var nextMountIndex=0;
	var lastPlacedNode=null;
	for(name in nextChildren){
	if(!nextChildren.hasOwnProperty(name)){
	continue;
	}
	var prevChild=prevChildren&&prevChildren[name];
	var nextChild=nextChildren[name];
	if(prevChild===nextChild){
	updates=enqueue(updates,this.moveChild(prevChild,lastPlacedNode,nextIndex,lastIndex));
	lastIndex=Math.max(prevChild._mountIndex,lastIndex);
	prevChild._mountIndex=nextIndex;
	}else{
	if(prevChild){
	
	lastIndex=Math.max(prevChild._mountIndex,lastIndex);
	
	}
	
	updates=enqueue(updates,this._mountChildAtIndex(nextChild,mountImages[nextMountIndex],lastPlacedNode,nextIndex,transaction,context));
	nextMountIndex++;
	}
	nextIndex++;
	lastPlacedNode=ReactReconciler.getHostNode(nextChild);
	}
	
	for(name in removedNodes){
	if(removedNodes.hasOwnProperty(name)){
	updates=enqueue(updates,this._unmountChild(prevChildren[name],removedNodes[name]));
	}
	}
	if(updates){
	processQueue(this,updates);
	}
	this._renderedChildren=nextChildren;
	
	if(process.env.NODE_ENV!=='production'){
	setChildrenForInstrumentation.call(this,nextChildren);
	}
	},
	
	
	
	
	
	
	
	
	unmountChildren:function unmountChildren(safely){
	var renderedChildren=this._renderedChildren;
	ReactChildReconciler.unmountChildren(renderedChildren,safely);
	this._renderedChildren=null;
	},
	
	
	
	
	
	
	
	
	
	moveChild:function moveChild(child,afterNode,toIndex,lastIndex){
	
	
	
	if(child._mountIndex<lastIndex){
	return makeMove(child,afterNode,toIndex);
	}
	},
	
	
	
	
	
	
	
	
	createChild:function createChild(child,afterNode,mountImage){
	return makeInsertMarkup(mountImage,afterNode,child._mountIndex);
	},
	
	
	
	
	
	
	
	removeChild:function removeChild(child,node){
	return makeRemove(child,node);
	},
	
	
	
	
	
	
	
	
	
	
	
	
	_mountChildAtIndex:function _mountChildAtIndex(child,mountImage,afterNode,index,transaction,context){
	child._mountIndex=index;
	return this.createChild(child,afterNode,mountImage);
	},
	
	
	
	
	
	
	
	
	
	_unmountChild:function _unmountChild(child,node){
	var update=this.removeChild(child,node);
	child._mountIndex=null;
	return update;
	}}};
	
	
	
	
	
	module.exports=ReactMultiChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(35);
	
	var invariant=__webpack_require__(8);
	
	var injected=false;
	
	var ReactComponentEnvironment={
	
	
	
	
	
	replaceNodeWithMarkup:null,
	
	
	
	
	
	processChildrenUpdates:null,
	
	injection:{
	injectEnvironment:function injectEnvironment(environment){
	!!injected?process.env.NODE_ENV!=='production'?invariant(false,'ReactCompositeComponent: injectEnvironment() can only be called once.'):_prodInvariant('104'):void 0;
	ReactComponentEnvironment.replaceNodeWithMarkup=environment.replaceNodeWithMarkup;
	ReactComponentEnvironment.processChildrenUpdates=environment.processChildrenUpdates;
	injected=true;
	}}};
	
	
	
	
	module.exports=ReactComponentEnvironment;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 116 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	
	
	
	
	
	var ReactInstanceMap={
	
	
	
	
	
	
	remove:function remove(key){
	key._reactInternalInstance=undefined;
	},
	
	get:function get(key){
	return key._reactInternalInstance;
	},
	
	has:function has(key){
	return key._reactInternalInstance!==undefined;
	},
	
	set:function set(key,value){
	key._reactInternalInstance=value;
	}};
	
	
	
	module.exports=ReactInstanceMap;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ReactReconciler=__webpack_require__(59);
	
	var instantiateReactComponent=__webpack_require__(118);
	var KeyEscapeUtils=__webpack_require__(128);
	var shouldUpdateReactComponent=__webpack_require__(124);
	var traverseAllChildren=__webpack_require__(129);
	var warning=__webpack_require__(11);
	
	var ReactComponentTreeHook;
	
	if(typeof process!=='undefined'&&process.env&&process.env.NODE_ENV==='test'){
	
	
	
	
	
	ReactComponentTreeHook=__webpack_require__(26);
	}
	
	function instantiateChild(childInstances,child,name,selfDebugID){
	
	var keyUnique=childInstances[name]===undefined;
	if(process.env.NODE_ENV!=='production'){
	if(!ReactComponentTreeHook){
	ReactComponentTreeHook=__webpack_require__(26);
	}
	if(!keyUnique){
	process.env.NODE_ENV!=='production'?warning(false,'flattenChildren(...): Encountered two children with the same key, '+'`%s`. Child keys must be unique; when two children share a key, only '+'the first child will be used.%s',KeyEscapeUtils.unescape(name),ReactComponentTreeHook.getStackAddendumByID(selfDebugID)):void 0;
	}
	}
	if(child!=null&&keyUnique){
	childInstances[name]=instantiateReactComponent(child,true);
	}
	}
	
	
	
	
	
	
	var ReactChildReconciler={
	
	
	
	
	
	
	
	
	instantiateChildren:function instantiateChildren(nestedChildNodes,transaction,context,selfDebugID)
	{
	if(nestedChildNodes==null){
	return null;
	}
	var childInstances={};
	
	if(process.env.NODE_ENV!=='production'){
	traverseAllChildren(nestedChildNodes,function(childInsts,child,name){
	return instantiateChild(childInsts,child,name,selfDebugID);
	},childInstances);
	}else{
	traverseAllChildren(nestedChildNodes,instantiateChild,childInstances);
	}
	return childInstances;
	},
	
	
	
	
	
	
	
	
	
	
	
	updateChildren:function updateChildren(prevChildren,nextChildren,mountImages,removedNodes,transaction,hostParent,hostContainerInfo,context,selfDebugID)
	{
	
	
	
	
	
	if(!nextChildren&&!prevChildren){
	return;
	}
	var name;
	var prevChild;
	for(name in nextChildren){
	if(!nextChildren.hasOwnProperty(name)){
	continue;
	}
	prevChild=prevChildren&&prevChildren[name];
	var prevElement=prevChild&&prevChild._currentElement;
	var nextElement=nextChildren[name];
	if(prevChild!=null&&shouldUpdateReactComponent(prevElement,nextElement)){
	ReactReconciler.receiveComponent(prevChild,nextElement,transaction,context);
	nextChildren[name]=prevChild;
	}else{
	if(prevChild){
	removedNodes[name]=ReactReconciler.getHostNode(prevChild);
	ReactReconciler.unmountComponent(prevChild,false);
	}
	
	var nextChildInstance=instantiateReactComponent(nextElement,true);
	nextChildren[name]=nextChildInstance;
	
	
	var nextChildMountImage=ReactReconciler.mountComponent(nextChildInstance,transaction,hostParent,hostContainerInfo,context,selfDebugID);
	mountImages.push(nextChildMountImage);
	}
	}
	
	for(name in prevChildren){
	if(prevChildren.hasOwnProperty(name)&&!(nextChildren&&nextChildren.hasOwnProperty(name))){
	prevChild=prevChildren[name];
	removedNodes[name]=ReactReconciler.getHostNode(prevChild);
	ReactReconciler.unmountComponent(prevChild,false);
	}
	}
	},
	
	
	
	
	
	
	
	
	unmountChildren:function unmountChildren(renderedChildren,safely){
	for(var name in renderedChildren){
	if(renderedChildren.hasOwnProperty(name)){
	var renderedChild=renderedChildren[name];
	ReactReconciler.unmountComponent(renderedChild,safely);
	}
	}
	}};
	
	
	
	module.exports=ReactChildReconciler;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	var _prodInvariant=__webpack_require__(35),
	_assign=__webpack_require__(4);
	
	var ReactCompositeComponent=__webpack_require__(119);
	var ReactEmptyComponent=__webpack_require__(125);
	var ReactHostComponent=__webpack_require__(126);
	
	var getNextDebugID=__webpack_require__(127);
	var invariant=__webpack_require__(8);
	var warning=__webpack_require__(11);
	
	
	var ReactCompositeComponentWrapper=function ReactCompositeComponentWrapper(element){
	this.construct(element);
	};
	_assign(ReactCompositeComponentWrapper.prototype,ReactCompositeComponent,{
	_instantiateReactComponent:instantiateReactComponent});
	
	
	function getDeclarationErrorAddendum(owner){
	if(owner){
	var name=owner.getName();
	if(name){
	return' Check the render method of `'+name+'`.';
	}
	}
	return'';
	}
	
	
	
	
	
	
	
	
	function isInternalComponentType(type){
	return typeof type==='function'&&typeof type.prototype!=='undefined'&&typeof type.prototype.mountComponent==='function'&&typeof type.prototype.receiveComponent==='function';
	}
	
	
	
	
	
	
	
	
	
	function instantiateReactComponent(node,shouldHaveDebugID){
	var instance;
	
	if(node===null||node===false){
	instance=ReactEmptyComponent.create(instantiateReactComponent);
	}else if((typeof node==='undefined'?'undefined':_typeof(node))==='object'){
	var element=node;
	!(element&&(typeof element.type==='function'||typeof element.type==='string'))?process.env.NODE_ENV!=='production'?invariant(false,'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',element.type==null?element.type:_typeof(element.type),getDeclarationErrorAddendum(element._owner)):_prodInvariant('130',element.type==null?element.type:_typeof(element.type),getDeclarationErrorAddendum(element._owner)):void 0;
	
	
	if(typeof element.type==='string'){
	instance=ReactHostComponent.createInternalComponent(element);
	}else if(isInternalComponentType(element.type)){
	
	
	
	instance=new element.type(element);
	
	
	if(!instance.getHostNode){
	instance.getHostNode=instance.getNativeNode;
	}
	}else{
	instance=new ReactCompositeComponentWrapper(element);
	}
	}else if(typeof node==='string'||typeof node==='number'){
	instance=ReactHostComponent.createInstanceForText(node);
	}else{
	 true?process.env.NODE_ENV!=='production'?invariant(false,'Encountered invalid React node of type %s',typeof node==='undefined'?'undefined':_typeof(node)):_prodInvariant('131',typeof node==='undefined'?'undefined':_typeof(node)):void 0;
	}
	
	if(process.env.NODE_ENV!=='production'){
	process.env.NODE_ENV!=='production'?warning(typeof instance.mountComponent==='function'&&typeof instance.receiveComponent==='function'&&typeof instance.getHostNode==='function'&&typeof instance.unmountComponent==='function','Only React Components can be mounted.'):void 0;
	}
	
	
	
	
	instance._mountIndex=0;
	instance._mountImage=null;
	
	if(process.env.NODE_ENV!=='production'){
	instance._debugID=shouldHaveDebugID?getNextDebugID():0;
	}
	
	
	
	if(process.env.NODE_ENV!=='production'){
	if(Object.preventExtensions){
	Object.preventExtensions(instance);
	}
	}
	
	return instance;
	}
	
	module.exports=instantiateReactComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	var _prodInvariant=__webpack_require__(35),
	_assign=__webpack_require__(4);
	
	var React=__webpack_require__(2);
	var ReactComponentEnvironment=__webpack_require__(115);
	var ReactCurrentOwner=__webpack_require__(10);
	var ReactErrorUtils=__webpack_require__(45);
	var ReactInstanceMap=__webpack_require__(116);
	var ReactInstrumentation=__webpack_require__(62);
	var ReactNodeTypes=__webpack_require__(120);
	var ReactReconciler=__webpack_require__(59);
	
	if(process.env.NODE_ENV!=='production'){
	var checkReactTypeSpec=__webpack_require__(121);
	}
	
	var emptyObject=__webpack_require__(20);
	var invariant=__webpack_require__(8);
	var shallowEqual=__webpack_require__(123);
	var shouldUpdateReactComponent=__webpack_require__(124);
	var warning=__webpack_require__(11);
	
	var CompositeTypes={
	ImpureClass:0,
	PureClass:1,
	StatelessFunctional:2};
	
	
	function StatelessComponent(Component){}
	StatelessComponent.prototype.render=function(){
	var Component=ReactInstanceMap.get(this)._currentElement.type;
	var element=Component(this.props,this.context,this.updater);
	warnIfInvalidElement(Component,element);
	return element;
	};
	
	function warnIfInvalidElement(Component,element){
	if(process.env.NODE_ENV!=='production'){
	process.env.NODE_ENV!=='production'?warning(element===null||element===false||React.isValidElement(element),'%s(...): A valid React element (or null) must be returned. You may have '+'returned undefined, an array or some other invalid object.',Component.displayName||Component.name||'Component'):void 0;
	process.env.NODE_ENV!=='production'?warning(!Component.childContextTypes,'%s(...): childContextTypes cannot be defined on a functional component.',Component.displayName||Component.name||'Component'):void 0;
	}
	}
	
	function shouldConstruct(Component){
	return!!(Component.prototype&&Component.prototype.isReactComponent);
	}
	
	function isPureComponent(Component){
	return!!(Component.prototype&&Component.prototype.isPureReactComponent);
	}
	
	
	function measureLifeCyclePerf(fn,debugID,timerType){
	if(debugID===0){
	
	
	
	return fn();
	}
	
	ReactInstrumentation.debugTool.onBeginLifeCycleTimer(debugID,timerType);
	try{
	return fn();
	}finally{
	ReactInstrumentation.debugTool.onEndLifeCycleTimer(debugID,timerType);
	}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var nextMountID=1;
	
	
	
	
	var ReactCompositeComponent={
	
	
	
	
	
	
	
	
	construct:function construct(element){
	this._currentElement=element;
	this._rootNodeID=0;
	this._compositeType=null;
	this._instance=null;
	this._hostParent=null;
	this._hostContainerInfo=null;
	
	
	this._updateBatchNumber=null;
	this._pendingElement=null;
	this._pendingStateQueue=null;
	this._pendingReplaceState=false;
	this._pendingForceUpdate=false;
	
	this._renderedNodeType=null;
	this._renderedComponent=null;
	this._context=null;
	this._mountOrder=0;
	this._topLevelWrapper=null;
	
	
	this._pendingCallbacks=null;
	
	
	this._calledComponentWillUnmount=false;
	
	if(process.env.NODE_ENV!=='production'){
	this._warnedAboutRefsInRender=false;
	}
	},
	
	
	
	
	
	
	
	
	
	
	
	
	mountComponent:function mountComponent(transaction,hostParent,hostContainerInfo,context){
	var _this=this;
	
	this._context=context;
	this._mountOrder=nextMountID++;
	this._hostParent=hostParent;
	this._hostContainerInfo=hostContainerInfo;
	
	var publicProps=this._currentElement.props;
	var publicContext=this._processContext(context);
	
	var Component=this._currentElement.type;
	
	var updateQueue=transaction.getUpdateQueue();
	
	
	var doConstruct=shouldConstruct(Component);
	var inst=this._constructComponent(doConstruct,publicProps,publicContext,updateQueue);
	var renderedElement;
	
	
	if(!doConstruct&&(inst==null||inst.render==null)){
	renderedElement=inst;
	warnIfInvalidElement(Component,renderedElement);
	!(inst===null||inst===false||React.isValidElement(inst))?process.env.NODE_ENV!=='production'?invariant(false,'%s(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.',Component.displayName||Component.name||'Component'):_prodInvariant('105',Component.displayName||Component.name||'Component'):void 0;
	inst=new StatelessComponent(Component);
	this._compositeType=CompositeTypes.StatelessFunctional;
	}else{
	if(isPureComponent(Component)){
	this._compositeType=CompositeTypes.PureClass;
	}else{
	this._compositeType=CompositeTypes.ImpureClass;
	}
	}
	
	if(process.env.NODE_ENV!=='production'){
	
	
	if(inst.render==null){
	process.env.NODE_ENV!=='production'?warning(false,'%s(...): No `render` method found on the returned component '+'instance: you may have forgotten to define `render`.',Component.displayName||Component.name||'Component'):void 0;
	}
	
	var propsMutated=inst.props!==publicProps;
	var componentName=Component.displayName||Component.name||'Component';
	
	process.env.NODE_ENV!=='production'?warning(inst.props===undefined||!propsMutated,'%s(...): When calling super() in `%s`, make sure to pass '+'up the same props that your component\'s constructor was passed.',componentName,componentName):void 0;
	}
	
	
	
	inst.props=publicProps;
	inst.context=publicContext;
	inst.refs=emptyObject;
	inst.updater=updateQueue;
	
	this._instance=inst;
	
	
	ReactInstanceMap.set(inst,this);
	
	if(process.env.NODE_ENV!=='production'){
	
	
	
	process.env.NODE_ENV!=='production'?warning(!inst.getInitialState||inst.getInitialState.isReactClassApproved,'getInitialState was defined on %s, a plain JavaScript class. '+'This is only supported for classes created using React.createClass. '+'Did you mean to define a state property instead?',this.getName()||'a component'):void 0;
	process.env.NODE_ENV!=='production'?warning(!inst.getDefaultProps||inst.getDefaultProps.isReactClassApproved,'getDefaultProps was defined on %s, a plain JavaScript class. '+'This is only supported for classes created using React.createClass. '+'Use a static property to define defaultProps instead.',this.getName()||'a component'):void 0;
	process.env.NODE_ENV!=='production'?warning(!inst.propTypes,'propTypes was defined as an instance property on %s. Use a static '+'property to define propTypes instead.',this.getName()||'a component'):void 0;
	process.env.NODE_ENV!=='production'?warning(!inst.contextTypes,'contextTypes was defined as an instance property on %s. Use a '+'static property to define contextTypes instead.',this.getName()||'a component'):void 0;
	process.env.NODE_ENV!=='production'?warning(typeof inst.componentShouldUpdate!=='function','%s has a method called '+'componentShouldUpdate(). Did you mean shouldComponentUpdate()? '+'The name is phrased as a question because the function is '+'expected to return a value.',this.getName()||'A component'):void 0;
	process.env.NODE_ENV!=='production'?warning(typeof inst.componentDidUnmount!=='function','%s has a method called '+'componentDidUnmount(). But there is no such lifecycle method. '+'Did you mean componentWillUnmount()?',this.getName()||'A component'):void 0;
	process.env.NODE_ENV!=='production'?warning(typeof inst.componentWillRecieveProps!=='function','%s has a method called '+'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',this.getName()||'A component'):void 0;
	}
	
	var initialState=inst.state;
	if(initialState===undefined){
	inst.state=initialState=null;
	}
	!((typeof initialState==='undefined'?'undefined':_typeof(initialState))==='object'&&!Array.isArray(initialState))?process.env.NODE_ENV!=='production'?invariant(false,'%s.state: must be set to an object or null',this.getName()||'ReactCompositeComponent'):_prodInvariant('106',this.getName()||'ReactCompositeComponent'):void 0;
	
	this._pendingStateQueue=null;
	this._pendingReplaceState=false;
	this._pendingForceUpdate=false;
	
	var markup;
	if(inst.unstable_handleError){
	markup=this.performInitialMountWithErrorHandling(renderedElement,hostParent,hostContainerInfo,transaction,context);
	}else{
	markup=this.performInitialMount(renderedElement,hostParent,hostContainerInfo,transaction,context);
	}
	
	if(inst.componentDidMount){
	if(process.env.NODE_ENV!=='production'){
	transaction.getReactMountReady().enqueue(function(){
	measureLifeCyclePerf(function(){
	return inst.componentDidMount();
	},_this._debugID,'componentDidMount');
	});
	}else{
	transaction.getReactMountReady().enqueue(inst.componentDidMount,inst);
	}
	}
	
	return markup;
	},
	
	_constructComponent:function _constructComponent(doConstruct,publicProps,publicContext,updateQueue){
	if(process.env.NODE_ENV!=='production'){
	ReactCurrentOwner.current=this;
	try{
	return this._constructComponentWithoutOwner(doConstruct,publicProps,publicContext,updateQueue);
	}finally{
	ReactCurrentOwner.current=null;
	}
	}else{
	return this._constructComponentWithoutOwner(doConstruct,publicProps,publicContext,updateQueue);
	}
	},
	
	_constructComponentWithoutOwner:function _constructComponentWithoutOwner(doConstruct,publicProps,publicContext,updateQueue){
	var Component=this._currentElement.type;
	
	if(doConstruct){
	if(process.env.NODE_ENV!=='production'){
	return measureLifeCyclePerf(function(){
	return new Component(publicProps,publicContext,updateQueue);
	},this._debugID,'ctor');
	}else{
	return new Component(publicProps,publicContext,updateQueue);
	}
	}
	
	
	
	if(process.env.NODE_ENV!=='production'){
	return measureLifeCyclePerf(function(){
	return Component(publicProps,publicContext,updateQueue);
	},this._debugID,'render');
	}else{
	return Component(publicProps,publicContext,updateQueue);
	}
	},
	
	performInitialMountWithErrorHandling:function performInitialMountWithErrorHandling(renderedElement,hostParent,hostContainerInfo,transaction,context){
	var markup;
	var checkpoint=transaction.checkpoint();
	try{
	markup=this.performInitialMount(renderedElement,hostParent,hostContainerInfo,transaction,context);
	}catch(e){
	
	transaction.rollback(checkpoint);
	this._instance.unstable_handleError(e);
	if(this._pendingStateQueue){
	this._instance.state=this._processPendingState(this._instance.props,this._instance.context);
	}
	checkpoint=transaction.checkpoint();
	
	this._renderedComponent.unmountComponent(true);
	transaction.rollback(checkpoint);
	
	
	
	markup=this.performInitialMount(renderedElement,hostParent,hostContainerInfo,transaction,context);
	}
	return markup;
	},
	
	performInitialMount:function performInitialMount(renderedElement,hostParent,hostContainerInfo,transaction,context){
	var inst=this._instance;
	
	var debugID=0;
	if(process.env.NODE_ENV!=='production'){
	debugID=this._debugID;
	}
	
	if(inst.componentWillMount){
	if(process.env.NODE_ENV!=='production'){
	measureLifeCyclePerf(function(){
	return inst.componentWillMount();
	},debugID,'componentWillMount');
	}else{
	inst.componentWillMount();
	}
	
	
	if(this._pendingStateQueue){
	inst.state=this._processPendingState(inst.props,inst.context);
	}
	}
	
	
	if(renderedElement===undefined){
	renderedElement=this._renderValidatedComponent();
	}
	
	var nodeType=ReactNodeTypes.getType(renderedElement);
	this._renderedNodeType=nodeType;
	var child=this._instantiateReactComponent(renderedElement,nodeType!==ReactNodeTypes.EMPTY);
	
	this._renderedComponent=child;
	
	var markup=ReactReconciler.mountComponent(child,transaction,hostParent,hostContainerInfo,this._processChildContext(context),debugID);
	
	if(process.env.NODE_ENV!=='production'){
	if(debugID!==0){
	var childDebugIDs=child._debugID!==0?[child._debugID]:[];
	ReactInstrumentation.debugTool.onSetChildren(debugID,childDebugIDs);
	}
	}
	
	return markup;
	},
	
	getHostNode:function getHostNode(){
	return ReactReconciler.getHostNode(this._renderedComponent);
	},
	
	
	
	
	
	
	
	unmountComponent:function unmountComponent(safely){
	if(!this._renderedComponent){
	return;
	}
	
	var inst=this._instance;
	
	if(inst.componentWillUnmount&&!inst._calledComponentWillUnmount){
	inst._calledComponentWillUnmount=true;
	
	if(safely){
	var name=this.getName()+'.componentWillUnmount()';
	ReactErrorUtils.invokeGuardedCallback(name,inst.componentWillUnmount.bind(inst));
	}else{
	if(process.env.NODE_ENV!=='production'){
	measureLifeCyclePerf(function(){
	return inst.componentWillUnmount();
	},this._debugID,'componentWillUnmount');
	}else{
	inst.componentWillUnmount();
	}
	}
	}
	
	if(this._renderedComponent){
	ReactReconciler.unmountComponent(this._renderedComponent,safely);
	this._renderedNodeType=null;
	this._renderedComponent=null;
	this._instance=null;
	}
	
	
	
	
	this._pendingStateQueue=null;
	this._pendingReplaceState=false;
	this._pendingForceUpdate=false;
	this._pendingCallbacks=null;
	this._pendingElement=null;
	
	
	
	this._context=null;
	this._rootNodeID=0;
	this._topLevelWrapper=null;
	
	
	
	
	ReactInstanceMap.remove(inst);
	
	
	
	
	
	
	},
	
	
	
	
	
	
	
	
	
	_maskContext:function _maskContext(context){
	var Component=this._currentElement.type;
	var contextTypes=Component.contextTypes;
	if(!contextTypes){
	return emptyObject;
	}
	var maskedContext={};
	for(var contextName in contextTypes){
	maskedContext[contextName]=context[contextName];
	}
	return maskedContext;
	},
	
	
	
	
	
	
	
	
	
	_processContext:function _processContext(context){
	var maskedContext=this._maskContext(context);
	if(process.env.NODE_ENV!=='production'){
	var Component=this._currentElement.type;
	if(Component.contextTypes){
	this._checkContextTypes(Component.contextTypes,maskedContext,'context');
	}
	}
	return maskedContext;
	},
	
	
	
	
	
	
	_processChildContext:function _processChildContext(currentContext){
	var Component=this._currentElement.type;
	var inst=this._instance;
	var childContext;
	
	if(inst.getChildContext){
	if(process.env.NODE_ENV!=='production'){
	ReactInstrumentation.debugTool.onBeginProcessingChildContext();
	try{
	childContext=inst.getChildContext();
	}finally{
	ReactInstrumentation.debugTool.onEndProcessingChildContext();
	}
	}else{
	childContext=inst.getChildContext();
	}
	}
	
	if(childContext){
	!(_typeof(Component.childContextTypes)==='object')?process.env.NODE_ENV!=='production'?invariant(false,'%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().',this.getName()||'ReactCompositeComponent'):_prodInvariant('107',this.getName()||'ReactCompositeComponent'):void 0;
	if(process.env.NODE_ENV!=='production'){
	this._checkContextTypes(Component.childContextTypes,childContext,'childContext');
	}
	for(var name in childContext){
	!(name in Component.childContextTypes)?process.env.NODE_ENV!=='production'?invariant(false,'%s.getChildContext(): key "%s" is not defined in childContextTypes.',this.getName()||'ReactCompositeComponent',name):_prodInvariant('108',this.getName()||'ReactCompositeComponent',name):void 0;
	}
	return _assign({},currentContext,childContext);
	}
	return currentContext;
	},
	
	
	
	
	
	
	
	
	
	_checkContextTypes:function _checkContextTypes(typeSpecs,values,location){
	if(process.env.NODE_ENV!=='production'){
	checkReactTypeSpec(typeSpecs,values,location,this.getName(),null,this._debugID);
	}
	},
	
	receiveComponent:function receiveComponent(nextElement,transaction,nextContext){
	var prevElement=this._currentElement;
	var prevContext=this._context;
	
	this._pendingElement=null;
	
	this.updateComponent(transaction,prevElement,nextElement,prevContext,nextContext);
	},
	
	
	
	
	
	
	
	
	performUpdateIfNecessary:function performUpdateIfNecessary(transaction){
	if(this._pendingElement!=null){
	ReactReconciler.receiveComponent(this,this._pendingElement,transaction,this._context);
	}else if(this._pendingStateQueue!==null||this._pendingForceUpdate){
	this.updateComponent(transaction,this._currentElement,this._currentElement,this._context,this._context);
	}else{
	this._updateBatchNumber=null;
	}
	},
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	updateComponent:function updateComponent(transaction,prevParentElement,nextParentElement,prevUnmaskedContext,nextUnmaskedContext){
	var inst=this._instance;
	!(inst!=null)?process.env.NODE_ENV!=='production'?invariant(false,'Attempted to update component `%s` that has already been unmounted (or failed to mount).',this.getName()||'ReactCompositeComponent'):_prodInvariant('136',this.getName()||'ReactCompositeComponent'):void 0;
	
	var willReceive=false;
	var nextContext;
	
	
	if(this._context===nextUnmaskedContext){
	nextContext=inst.context;
	}else{
	nextContext=this._processContext(nextUnmaskedContext);
	willReceive=true;
	}
	
	var prevProps=prevParentElement.props;
	var nextProps=nextParentElement.props;
	
	
	if(prevParentElement!==nextParentElement){
	willReceive=true;
	}
	
	
	
	
	if(willReceive&&inst.componentWillReceiveProps){
	if(process.env.NODE_ENV!=='production'){
	measureLifeCyclePerf(function(){
	return inst.componentWillReceiveProps(nextProps,nextContext);
	},this._debugID,'componentWillReceiveProps');
	}else{
	inst.componentWillReceiveProps(nextProps,nextContext);
	}
	}
	
	var nextState=this._processPendingState(nextProps,nextContext);
	var shouldUpdate=true;
	
	if(!this._pendingForceUpdate){
	if(inst.shouldComponentUpdate){
	if(process.env.NODE_ENV!=='production'){
	shouldUpdate=measureLifeCyclePerf(function(){
	return inst.shouldComponentUpdate(nextProps,nextState,nextContext);
	},this._debugID,'shouldComponentUpdate');
	}else{
	shouldUpdate=inst.shouldComponentUpdate(nextProps,nextState,nextContext);
	}
	}else{
	if(this._compositeType===CompositeTypes.PureClass){
	shouldUpdate=!shallowEqual(prevProps,nextProps)||!shallowEqual(inst.state,nextState);
	}
	}
	}
	
	if(process.env.NODE_ENV!=='production'){
	process.env.NODE_ENV!=='production'?warning(shouldUpdate!==undefined,'%s.shouldComponentUpdate(): Returned undefined instead of a '+'boolean value. Make sure to return true or false.',this.getName()||'ReactCompositeComponent'):void 0;
	}
	
	this._updateBatchNumber=null;
	if(shouldUpdate){
	this._pendingForceUpdate=false;
	
	this._performComponentUpdate(nextParentElement,nextProps,nextState,nextContext,transaction,nextUnmaskedContext);
	}else{
	
	
	this._currentElement=nextParentElement;
	this._context=nextUnmaskedContext;
	inst.props=nextProps;
	inst.state=nextState;
	inst.context=nextContext;
	}
	},
	
	_processPendingState:function _processPendingState(props,context){
	var inst=this._instance;
	var queue=this._pendingStateQueue;
	var replace=this._pendingReplaceState;
	this._pendingReplaceState=false;
	this._pendingStateQueue=null;
	
	if(!queue){
	return inst.state;
	}
	
	if(replace&&queue.length===1){
	return queue[0];
	}
	
	var nextState=_assign({},replace?queue[0]:inst.state);
	for(var i=replace?1:0;i<queue.length;i++){
	var partial=queue[i];
	_assign(nextState,typeof partial==='function'?partial.call(inst,nextState,props,context):partial);
	}
	
	return nextState;
	},
	
	
	
	
	
	
	
	
	
	
	
	
	
	_performComponentUpdate:function _performComponentUpdate(nextElement,nextProps,nextState,nextContext,transaction,unmaskedContext){
	var _this2=this;
	
	var inst=this._instance;
	
	var hasComponentDidUpdate=Boolean(inst.componentDidUpdate);
	var prevProps;
	var prevState;
	var prevContext;
	if(hasComponentDidUpdate){
	prevProps=inst.props;
	prevState=inst.state;
	prevContext=inst.context;
	}
	
	if(inst.componentWillUpdate){
	if(process.env.NODE_ENV!=='production'){
	measureLifeCyclePerf(function(){
	return inst.componentWillUpdate(nextProps,nextState,nextContext);
	},this._debugID,'componentWillUpdate');
	}else{
	inst.componentWillUpdate(nextProps,nextState,nextContext);
	}
	}
	
	this._currentElement=nextElement;
	this._context=unmaskedContext;
	inst.props=nextProps;
	inst.state=nextState;
	inst.context=nextContext;
	
	this._updateRenderedComponent(transaction,unmaskedContext);
	
	if(hasComponentDidUpdate){
	if(process.env.NODE_ENV!=='production'){
	transaction.getReactMountReady().enqueue(function(){
	measureLifeCyclePerf(inst.componentDidUpdate.bind(inst,prevProps,prevState,prevContext),_this2._debugID,'componentDidUpdate');
	});
	}else{
	transaction.getReactMountReady().enqueue(inst.componentDidUpdate.bind(inst,prevProps,prevState,prevContext),inst);
	}
	}
	},
	
	
	
	
	
	
	
	_updateRenderedComponent:function _updateRenderedComponent(transaction,context){
	var prevComponentInstance=this._renderedComponent;
	var prevRenderedElement=prevComponentInstance._currentElement;
	var nextRenderedElement=this._renderValidatedComponent();
	
	var debugID=0;
	if(process.env.NODE_ENV!=='production'){
	debugID=this._debugID;
	}
	
	if(shouldUpdateReactComponent(prevRenderedElement,nextRenderedElement)){
	ReactReconciler.receiveComponent(prevComponentInstance,nextRenderedElement,transaction,this._processChildContext(context));
	}else{
	var oldHostNode=ReactReconciler.getHostNode(prevComponentInstance);
	ReactReconciler.unmountComponent(prevComponentInstance,false);
	
	var nodeType=ReactNodeTypes.getType(nextRenderedElement);
	this._renderedNodeType=nodeType;
	var child=this._instantiateReactComponent(nextRenderedElement,nodeType!==ReactNodeTypes.EMPTY);
	
	this._renderedComponent=child;
	
	var nextMarkup=ReactReconciler.mountComponent(child,transaction,this._hostParent,this._hostContainerInfo,this._processChildContext(context),debugID);
	
	if(process.env.NODE_ENV!=='production'){
	if(debugID!==0){
	var childDebugIDs=child._debugID!==0?[child._debugID]:[];
	ReactInstrumentation.debugTool.onSetChildren(debugID,childDebugIDs);
	}
	}
	
	this._replaceNodeWithMarkup(oldHostNode,nextMarkup,prevComponentInstance);
	}
	},
	
	
	
	
	
	
	_replaceNodeWithMarkup:function _replaceNodeWithMarkup(oldHostNode,nextMarkup,prevInstance){
	ReactComponentEnvironment.replaceNodeWithMarkup(oldHostNode,nextMarkup,prevInstance);
	},
	
	
	
	
	_renderValidatedComponentWithoutOwnerOrContext:function _renderValidatedComponentWithoutOwnerOrContext(){
	var inst=this._instance;
	var renderedElement;
	
	if(process.env.NODE_ENV!=='production'){
	renderedElement=measureLifeCyclePerf(function(){
	return inst.render();
	},this._debugID,'render');
	}else{
	renderedElement=inst.render();
	}
	
	if(process.env.NODE_ENV!=='production'){
	
	if(renderedElement===undefined&&inst.render._isMockFunction){
	
	
	renderedElement=null;
	}
	}
	
	return renderedElement;
	},
	
	
	
	
	_renderValidatedComponent:function _renderValidatedComponent(){
	var renderedElement;
	if(process.env.NODE_ENV!=='production'||this._compositeType!==CompositeTypes.StatelessFunctional){
	ReactCurrentOwner.current=this;
	try{
	renderedElement=this._renderValidatedComponentWithoutOwnerOrContext();
	}finally{
	ReactCurrentOwner.current=null;
	}
	}else{
	renderedElement=this._renderValidatedComponentWithoutOwnerOrContext();
	}
	!(
	
	renderedElement===null||renderedElement===false||React.isValidElement(renderedElement))?process.env.NODE_ENV!=='production'?invariant(false,'%s.render(): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.',this.getName()||'ReactCompositeComponent'):_prodInvariant('109',this.getName()||'ReactCompositeComponent'):void 0;
	
	return renderedElement;
	},
	
	
	
	
	
	
	
	
	
	attachRef:function attachRef(ref,component){
	var inst=this.getPublicInstance();
	!(inst!=null)?process.env.NODE_ENV!=='production'?invariant(false,'Stateless function components cannot have refs.'):_prodInvariant('110'):void 0;
	var publicComponentInstance=component.getPublicInstance();
	if(process.env.NODE_ENV!=='production'){
	var componentName=component&&component.getName?component.getName():'a component';
	process.env.NODE_ENV!=='production'?warning(publicComponentInstance!=null||component._compositeType!==CompositeTypes.StatelessFunctional,'Stateless function components cannot be given refs '+'(See ref "%s" in %s created by %s). '+'Attempts to access this ref will fail.',ref,componentName,this.getName()):void 0;
	}
	var refs=inst.refs===emptyObject?inst.refs={}:inst.refs;
	refs[ref]=publicComponentInstance;
	},
	
	
	
	
	
	
	
	
	detachRef:function detachRef(ref){
	var refs=this.getPublicInstance().refs;
	delete refs[ref];
	},
	
	
	
	
	
	
	
	getName:function getName(){
	var type=this._currentElement.type;
	var constructor=this._instance&&this._instance.constructor;
	return type.displayName||constructor&&constructor.displayName||type.name||constructor&&constructor.name||null;
	},
	
	
	
	
	
	
	
	
	
	getPublicInstance:function getPublicInstance(){
	var inst=this._instance;
	if(this._compositeType===CompositeTypes.StatelessFunctional){
	return null;
	}
	return inst;
	},
	
	
	_instantiateReactComponent:null};
	
	
	
	module.exports=ReactCompositeComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(35);
	
	var React=__webpack_require__(2);
	
	var invariant=__webpack_require__(8);
	
	var ReactNodeTypes={
	HOST:0,
	COMPOSITE:1,
	EMPTY:2,
	
	getType:function getType(node){
	if(node===null||node===false){
	return ReactNodeTypes.EMPTY;
	}else if(React.isValidElement(node)){
	if(typeof node.type==='function'){
	return ReactNodeTypes.COMPOSITE;
	}else{
	return ReactNodeTypes.HOST;
	}
	}
	 true?process.env.NODE_ENV!=='production'?invariant(false,'Unexpected node: %s',node):_prodInvariant('26',node):void 0;
	}};
	
	
	module.exports=ReactNodeTypes;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	var _prodInvariant=__webpack_require__(35);
	
	var ReactPropTypeLocationNames=__webpack_require__(122);
	var ReactPropTypesSecret=__webpack_require__(110);
	
	var invariant=__webpack_require__(8);
	var warning=__webpack_require__(11);
	
	var ReactComponentTreeHook;
	
	if(typeof process!=='undefined'&&process.env&&process.env.NODE_ENV==='test'){
	
	
	
	
	
	ReactComponentTreeHook=__webpack_require__(26);
	}
	
	var loggedTypeFailures={};
	
	
	
	
	
	
	
	
	
	
	
	
	
	function checkReactTypeSpec(typeSpecs,values,location,componentName,element,debugID){
	for(var typeSpecName in typeSpecs){
	if(typeSpecs.hasOwnProperty(typeSpecName)){
	var error;
	
	
	
	try{
	
	
	!(typeof typeSpecs[typeSpecName]==='function')?process.env.NODE_ENV!=='production'?invariant(false,'%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.',componentName||'React class',ReactPropTypeLocationNames[location],typeSpecName):_prodInvariant('84',componentName||'React class',ReactPropTypeLocationNames[location],typeSpecName):void 0;
	error=typeSpecs[typeSpecName](values,typeSpecName,componentName,location,null,ReactPropTypesSecret);
	}catch(ex){
	error=ex;
	}
	process.env.NODE_ENV!=='production'?warning(!error||error instanceof Error,'%s: type specification of %s `%s` is invalid; the type checker '+'function must return `null` or an `Error` but returned a %s. '+'You may have forgotten to pass an argument to the type checker '+'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and '+'shape all require an argument).',componentName||'React class',ReactPropTypeLocationNames[location],typeSpecName,typeof error==='undefined'?'undefined':_typeof(error)):void 0;
	if(error instanceof Error&&!(error.message in loggedTypeFailures)){
	
	
	loggedTypeFailures[error.message]=true;
	
	var componentStackInfo='';
	
	if(process.env.NODE_ENV!=='production'){
	if(!ReactComponentTreeHook){
	ReactComponentTreeHook=__webpack_require__(26);
	}
	if(debugID!==null){
	componentStackInfo=ReactComponentTreeHook.getStackAddendumByID(debugID);
	}else if(element!==null){
	componentStackInfo=ReactComponentTreeHook.getCurrentStackAddendum(element);
	}
	}
	
	process.env.NODE_ENV!=='production'?warning(false,'Failed %s type: %s%s',location,error.message,componentStackInfo):void 0;
	}
	}
	}
	}
	
	module.exports=checkReactTypeSpec;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ReactPropTypeLocationNames={};
	
	if(process.env.NODE_ENV!=='production'){
	ReactPropTypeLocationNames={
	prop:'prop',
	context:'context',
	childContext:'child context'};
	
	}
	
	module.exports=ReactPropTypeLocationNames;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 123 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	var hasOwnProperty=Object.prototype.hasOwnProperty;
	
	
	
	
	
	function is(x,y){
	
	if(x===y){
	
	
	
	return x!==0||y!==0||1/x===1/y;
	}else{
	
	return x!==x&&y!==y;
	}
	}
	
	
	
	
	
	
	function shallowEqual(objA,objB){
	if(is(objA,objB)){
	return true;
	}
	
	if((typeof objA==='undefined'?'undefined':_typeof(objA))!=='object'||objA===null||(typeof objB==='undefined'?'undefined':_typeof(objB))!=='object'||objB===null){
	return false;
	}
	
	var keysA=Object.keys(objA);
	var keysB=Object.keys(objB);
	
	if(keysA.length!==keysB.length){
	return false;
	}
	
	
	for(var i=0;i<keysA.length;i++){
	if(!hasOwnProperty.call(objB,keysA[i])||!is(objA[keysA[i]],objB[keysA[i]])){
	return false;
	}
	}
	
	return true;
	}
	
	module.exports=shallowEqual;

/***/ },
/* 124 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	
	
	
	
	
	
	
	
	
	
	
	
	function shouldUpdateReactComponent(prevElement,nextElement){
	var prevEmpty=prevElement===null||prevElement===false;
	var nextEmpty=nextElement===null||nextElement===false;
	if(prevEmpty||nextEmpty){
	return prevEmpty===nextEmpty;
	}
	
	var prevType=typeof prevElement==='undefined'?'undefined':_typeof(prevElement);
	var nextType=typeof nextElement==='undefined'?'undefined':_typeof(nextElement);
	if(prevType==='string'||prevType==='number'){
	return nextType==='string'||nextType==='number';
	}else{
	return nextType==='object'&&prevElement.type===nextElement.type&&prevElement.key===nextElement.key;
	}
	}
	
	module.exports=shouldUpdateReactComponent;

/***/ },
/* 125 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var emptyComponentFactory;
	
	var ReactEmptyComponentInjection={
	injectEmptyComponentFactory:function injectEmptyComponentFactory(factory){
	emptyComponentFactory=factory;
	}};
	
	
	var ReactEmptyComponent={
	create:function create(instantiate){
	return emptyComponentFactory(instantiate);
	}};
	
	
	ReactEmptyComponent.injection=ReactEmptyComponentInjection;
	
	module.exports=ReactEmptyComponent;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(35),
	_assign=__webpack_require__(4);
	
	var invariant=__webpack_require__(8);
	
	var genericComponentClass=null;
	
	var tagToComponentClass={};
	var textComponentClass=null;
	
	var ReactHostComponentInjection={
	
	
	injectGenericComponentClass:function injectGenericComponentClass(componentClass){
	genericComponentClass=componentClass;
	},
	
	
	injectTextComponentClass:function injectTextComponentClass(componentClass){
	textComponentClass=componentClass;
	},
	
	
	injectComponentClasses:function injectComponentClasses(componentClasses){
	_assign(tagToComponentClass,componentClasses);
	}};
	
	
	
	
	
	
	
	
	function createInternalComponent(element){
	!genericComponentClass?process.env.NODE_ENV!=='production'?invariant(false,'There is no registered component for the tag %s',element.type):_prodInvariant('111',element.type):void 0;
	return new genericComponentClass(element);
	}
	
	
	
	
	
	function createInstanceForText(text){
	return new textComponentClass(text);
	}
	
	
	
	
	
	function isTextComponent(component){
	return component instanceof textComponentClass;
	}
	
	var ReactHostComponent={
	createInternalComponent:createInternalComponent,
	createInstanceForText:createInstanceForText,
	isTextComponent:isTextComponent,
	injection:ReactHostComponentInjection};
	
	
	module.exports=ReactHostComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 127 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var nextDebugID=1;
	
	function getNextDebugID(){
	return nextDebugID++;
	}
	
	module.exports=getNextDebugID;

/***/ },
/* 128 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	
	
	
	function escape(key){
	var escapeRegex=/[=:]/g;
	var escaperLookup={
	'=':'=0',
	':':'=2'};
	
	var escapedString=(''+key).replace(escapeRegex,function(match){
	return escaperLookup[match];
	});
	
	return'$'+escapedString;
	}
	
	
	
	
	
	
	
	function unescape(key){
	var unescapeRegex=/(=0|=2)/g;
	var unescaperLookup={
	'=0':'=',
	'=2':':'};
	
	var keySubstring=key[0]==='.'&&key[1]==='$'?key.substring(2):key.substring(1);
	
	return(''+keySubstring).replace(unescapeRegex,function(match){
	return unescaperLookup[match];
	});
	}
	
	var KeyEscapeUtils={
	escape:escape,
	unescape:unescape};
	
	
	module.exports=KeyEscapeUtils;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	var _prodInvariant=__webpack_require__(35);
	
	var ReactCurrentOwner=__webpack_require__(10);
	var REACT_ELEMENT_TYPE=__webpack_require__(130);
	
	var getIteratorFn=__webpack_require__(131);
	var invariant=__webpack_require__(8);
	var KeyEscapeUtils=__webpack_require__(128);
	var warning=__webpack_require__(11);
	
	var SEPARATOR='.';
	var SUBSEPARATOR=':';
	
	
	
	
	
	
	
	
	
	
	
	
	var didWarnAboutMaps=false;
	
	
	
	
	
	
	
	
	function getComponentKey(component,index){
	
	
	if(component&&(typeof component==='undefined'?'undefined':_typeof(component))==='object'&&component.key!=null){
	
	return KeyEscapeUtils.escape(component.key);
	}
	
	return index.toString(36);
	}
	
	
	
	
	
	
	
	
	
	function traverseAllChildrenImpl(children,nameSoFar,callback,traverseContext){
	var type=typeof children==='undefined'?'undefined':_typeof(children);
	
	if(type==='undefined'||type==='boolean'){
	
	children=null;
	}
	
	if(children===null||type==='string'||type==='number'||
	
	
	type==='object'&&children.$$typeof===REACT_ELEMENT_TYPE){
	callback(traverseContext,children,
	
	
	nameSoFar===''?SEPARATOR+getComponentKey(children,0):nameSoFar);
	return 1;
	}
	
	var child;
	var nextName;
	var subtreeCount=0;
	var nextNamePrefix=nameSoFar===''?SEPARATOR:nameSoFar+SUBSEPARATOR;
	
	if(Array.isArray(children)){
	for(var i=0;i<children.length;i++){
	child=children[i];
	nextName=nextNamePrefix+getComponentKey(child,i);
	subtreeCount+=traverseAllChildrenImpl(child,nextName,callback,traverseContext);
	}
	}else{
	var iteratorFn=getIteratorFn(children);
	if(iteratorFn){
	var iterator=iteratorFn.call(children);
	var step;
	if(iteratorFn!==children.entries){
	var ii=0;
	while(!(step=iterator.next()).done){
	child=step.value;
	nextName=nextNamePrefix+getComponentKey(child,ii++);
	subtreeCount+=traverseAllChildrenImpl(child,nextName,callback,traverseContext);
	}
	}else{
	if(process.env.NODE_ENV!=='production'){
	var mapsAsChildrenAddendum='';
	if(ReactCurrentOwner.current){
	var mapsAsChildrenOwnerName=ReactCurrentOwner.current.getName();
	if(mapsAsChildrenOwnerName){
	mapsAsChildrenAddendum=' Check the render method of `'+mapsAsChildrenOwnerName+'`.';
	}
	}
	process.env.NODE_ENV!=='production'?warning(didWarnAboutMaps,'Using Maps as children is not yet fully supported. It is an '+'experimental feature that might be removed. Convert it to a '+'sequence / iterable of keyed ReactElements instead.%s',mapsAsChildrenAddendum):void 0;
	didWarnAboutMaps=true;
	}
	
	while(!(step=iterator.next()).done){
	var entry=step.value;
	if(entry){
	child=entry[1];
	nextName=nextNamePrefix+KeyEscapeUtils.escape(entry[0])+SUBSEPARATOR+getComponentKey(child,0);
	subtreeCount+=traverseAllChildrenImpl(child,nextName,callback,traverseContext);
	}
	}
	}
	}else if(type==='object'){
	var addendum='';
	if(process.env.NODE_ENV!=='production'){
	addendum=' If you meant to render a collection of children, use an array '+'instead or wrap the object using createFragment(object) from the '+'React add-ons.';
	if(children._isReactElement){
	addendum=' It looks like you\'re using an element created by a different '+'version of React. Make sure to use only one copy of React.';
	}
	if(ReactCurrentOwner.current){
	var name=ReactCurrentOwner.current.getName();
	if(name){
	addendum+=' Check the render method of `'+name+'`.';
	}
	}
	}
	var childrenString=String(children);
	 true?process.env.NODE_ENV!=='production'?invariant(false,'Objects are not valid as a React child (found: %s).%s',childrenString==='[object Object]'?'object with keys {'+Object.keys(children).join(', ')+'}':childrenString,addendum):_prodInvariant('31',childrenString==='[object Object]'?'object with keys {'+Object.keys(children).join(', ')+'}':childrenString,addendum):void 0;
	}
	}
	
	return subtreeCount;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function traverseAllChildren(children,callback,traverseContext){
	if(children==null){
	return 0;
	}
	
	return traverseAllChildrenImpl(children,'',callback,traverseContext);
	}
	
	module.exports=traverseAllChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 130 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	var REACT_ELEMENT_TYPE=typeof Symbol==='function'&&Symbol['for']&&Symbol['for']('react.element')||0xeac7;
	
	module.exports=REACT_ELEMENT_TYPE;

/***/ },
/* 131 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	var ITERATOR_SYMBOL=typeof Symbol==='function'&&(typeof Symbol==='function'?Symbol.iterator:'@@iterator');
	var FAUX_ITERATOR_SYMBOL='@@iterator';
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function getIteratorFn(maybeIterable){
	var iteratorFn=maybeIterable&&(ITERATOR_SYMBOL&&maybeIterable[ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL]);
	if(typeof iteratorFn==='function'){
	return iteratorFn;
	}
	}
	
	module.exports=getIteratorFn;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	var KeyEscapeUtils=__webpack_require__(128);
	var traverseAllChildren=__webpack_require__(129);
	var warning=__webpack_require__(11);
	
	var ReactComponentTreeHook;
	
	if(typeof process!=='undefined'&&process.env&&process.env.NODE_ENV==='test'){
	
	
	
	
	
	ReactComponentTreeHook=__webpack_require__(26);
	}
	
	
	
	
	
	
	
	function flattenSingleChildIntoContext(traverseContext,child,name,selfDebugID){
	
	if(traverseContext&&(typeof traverseContext==='undefined'?'undefined':_typeof(traverseContext))==='object'){
	var result=traverseContext;
	var keyUnique=result[name]===undefined;
	if(process.env.NODE_ENV!=='production'){
	if(!ReactComponentTreeHook){
	ReactComponentTreeHook=__webpack_require__(26);
	}
	if(!keyUnique){
	process.env.NODE_ENV!=='production'?warning(false,'flattenChildren(...): Encountered two children with the same key, '+'`%s`. Child keys must be unique; when two children share a key, only '+'the first child will be used.%s',KeyEscapeUtils.unescape(name),ReactComponentTreeHook.getStackAddendumByID(selfDebugID)):void 0;
	}
	}
	if(keyUnique&&child!=null){
	result[name]=child;
	}
	}
	}
	
	
	
	
	
	
	function flattenChildren(children,selfDebugID){
	if(children==null){
	return children;
	}
	var result={};
	
	if(process.env.NODE_ENV!=='production'){
	traverseAllChildren(children,function(traverseContext,child,name){
	return flattenSingleChildIntoContext(traverseContext,child,name,selfDebugID);
	},result);
	}else{
	traverseAllChildren(children,flattenSingleChildIntoContext,result);
	}
	return result;
	}
	
	module.exports=flattenChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _assign=__webpack_require__(4);
	
	var PooledClass=__webpack_require__(50);
	var Transaction=__webpack_require__(68);
	var ReactInstrumentation=__webpack_require__(62);
	var ReactServerUpdateQueue=__webpack_require__(134);
	
	
	
	
	
	
	var TRANSACTION_WRAPPERS=[];
	
	if(process.env.NODE_ENV!=='production'){
	TRANSACTION_WRAPPERS.push({
	initialize:ReactInstrumentation.debugTool.onBeginFlush,
	close:ReactInstrumentation.debugTool.onEndFlush});
	
	}
	
	var noopCallbackQueue={
	enqueue:function enqueue(){}};
	
	
	
	
	
	
	function ReactServerRenderingTransaction(renderToStaticMarkup){
	this.reinitializeTransaction();
	this.renderToStaticMarkup=renderToStaticMarkup;
	this.useCreateElement=false;
	this.updateQueue=new ReactServerUpdateQueue(this);
	}
	
	var Mixin={
	
	
	
	
	
	
	getTransactionWrappers:function getTransactionWrappers(){
	return TRANSACTION_WRAPPERS;
	},
	
	
	
	
	getReactMountReady:function getReactMountReady(){
	return noopCallbackQueue;
	},
	
	
	
	
	getUpdateQueue:function getUpdateQueue(){
	return this.updateQueue;
	},
	
	
	
	
	
	destructor:function destructor(){},
	
	checkpoint:function checkpoint(){},
	
	rollback:function rollback(){}};
	
	
	_assign(ReactServerRenderingTransaction.prototype,Transaction,Mixin);
	
	PooledClass.addPoolingTo(ReactServerRenderingTransaction);
	
	module.exports=ReactServerRenderingTransaction;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
	
	var ReactUpdateQueue=__webpack_require__(135);
	
	var warning=__webpack_require__(11);
	
	function warnNoop(publicInstance,callerName){
	if(process.env.NODE_ENV!=='production'){
	var constructor=publicInstance.constructor;
	process.env.NODE_ENV!=='production'?warning(false,'%s(...): Can only update a mounting component. '+'This usually means you called %s() outside componentWillMount() on the server. '+'This is a no-op. Please check the code for the %s component.',callerName,callerName,constructor&&(constructor.displayName||constructor.name)||'ReactClass'):void 0;
	}
	}
	
	
	
	
	
	
	
	
	
	var ReactServerUpdateQueue=function(){
	function ReactServerUpdateQueue(transaction){
	_classCallCheck(this,ReactServerUpdateQueue);
	
	this.transaction=transaction;
	}
	
	
	
	
	
	
	
	
	
	
	ReactServerUpdateQueue.prototype.isMounted=function isMounted(publicInstance){
	return false;
	};
	
	
	
	
	
	
	
	
	
	
	
	ReactServerUpdateQueue.prototype.enqueueCallback=function enqueueCallback(publicInstance,callback,callerName){
	if(this.transaction.isInTransaction()){
	ReactUpdateQueue.enqueueCallback(publicInstance,callback,callerName);
	}
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	ReactServerUpdateQueue.prototype.enqueueForceUpdate=function enqueueForceUpdate(publicInstance){
	if(this.transaction.isInTransaction()){
	ReactUpdateQueue.enqueueForceUpdate(publicInstance);
	}else{
	warnNoop(publicInstance,'forceUpdate');
	}
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	ReactServerUpdateQueue.prototype.enqueueReplaceState=function enqueueReplaceState(publicInstance,completeState){
	if(this.transaction.isInTransaction()){
	ReactUpdateQueue.enqueueReplaceState(publicInstance,completeState);
	}else{
	warnNoop(publicInstance,'replaceState');
	}
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	ReactServerUpdateQueue.prototype.enqueueSetState=function enqueueSetState(publicInstance,partialState){
	if(this.transaction.isInTransaction()){
	ReactUpdateQueue.enqueueSetState(publicInstance,partialState);
	}else{
	warnNoop(publicInstance,'setState');
	}
	};
	
	return ReactServerUpdateQueue;
	}();
	
	module.exports=ReactServerUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	var _prodInvariant=__webpack_require__(35);
	
	var ReactCurrentOwner=__webpack_require__(10);
	var ReactInstanceMap=__webpack_require__(116);
	var ReactInstrumentation=__webpack_require__(62);
	var ReactUpdates=__webpack_require__(56);
	
	var invariant=__webpack_require__(8);
	var warning=__webpack_require__(11);
	
	function enqueueUpdate(internalInstance){
	ReactUpdates.enqueueUpdate(internalInstance);
	}
	
	function formatUnexpectedArgument(arg){
	var type=typeof arg==='undefined'?'undefined':_typeof(arg);
	if(type!=='object'){
	return type;
	}
	var displayName=arg.constructor&&arg.constructor.name||type;
	var keys=Object.keys(arg);
	if(keys.length>0&&keys.length<20){
	return displayName+' (keys: '+keys.join(', ')+')';
	}
	return displayName;
	}
	
	function getInternalInstanceReadyForUpdate(publicInstance,callerName){
	var internalInstance=ReactInstanceMap.get(publicInstance);
	if(!internalInstance){
	if(process.env.NODE_ENV!=='production'){
	var ctor=publicInstance.constructor;
	
	
	
	process.env.NODE_ENV!=='production'?warning(!callerName,'%s(...): Can only update a mounted or mounting component. '+'This usually means you called %s() on an unmounted component. '+'This is a no-op. Please check the code for the %s component.',callerName,callerName,ctor&&(ctor.displayName||ctor.name)||'ReactClass'):void 0;
	}
	return null;
	}
	
	if(process.env.NODE_ENV!=='production'){
	process.env.NODE_ENV!=='production'?warning(ReactCurrentOwner.current==null,'%s(...): Cannot update during an existing state transition (such as '+'within `render` or another component\'s constructor). Render methods '+'should be a pure function of props and state; constructor '+'side-effects are an anti-pattern, but can be moved to '+'`componentWillMount`.',callerName):void 0;
	}
	
	return internalInstance;
	}
	
	
	
	
	
	var ReactUpdateQueue={
	
	
	
	
	
	
	
	
	isMounted:function isMounted(publicInstance){
	if(process.env.NODE_ENV!=='production'){
	var owner=ReactCurrentOwner.current;
	if(owner!==null){
	process.env.NODE_ENV!=='production'?warning(owner._warnedAboutRefsInRender,'%s is accessing isMounted inside its render() function. '+'render() should be a pure function of props and state. It should '+'never access something that requires stale data from the previous '+'render, such as refs. Move this logic to componentDidMount and '+'componentDidUpdate instead.',owner.getName()||'A component'):void 0;
	owner._warnedAboutRefsInRender=true;
	}
	}
	var internalInstance=ReactInstanceMap.get(publicInstance);
	if(internalInstance){
	
	
	
	return!!internalInstance._renderedComponent;
	}else{
	return false;
	}
	},
	
	
	
	
	
	
	
	
	
	
	enqueueCallback:function enqueueCallback(publicInstance,callback,callerName){
	ReactUpdateQueue.validateCallback(callback,callerName);
	var internalInstance=getInternalInstanceReadyForUpdate(publicInstance);
	
	
	
	
	
	
	if(!internalInstance){
	return null;
	}
	
	if(internalInstance._pendingCallbacks){
	internalInstance._pendingCallbacks.push(callback);
	}else{
	internalInstance._pendingCallbacks=[callback];
	}
	
	
	
	
	enqueueUpdate(internalInstance);
	},
	
	enqueueCallbackInternal:function enqueueCallbackInternal(internalInstance,callback){
	if(internalInstance._pendingCallbacks){
	internalInstance._pendingCallbacks.push(callback);
	}else{
	internalInstance._pendingCallbacks=[callback];
	}
	enqueueUpdate(internalInstance);
	},
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	enqueueForceUpdate:function enqueueForceUpdate(publicInstance){
	var internalInstance=getInternalInstanceReadyForUpdate(publicInstance,'forceUpdate');
	
	if(!internalInstance){
	return;
	}
	
	internalInstance._pendingForceUpdate=true;
	
	enqueueUpdate(internalInstance);
	},
	
	
	
	
	
	
	
	
	
	
	
	
	enqueueReplaceState:function enqueueReplaceState(publicInstance,completeState){
	var internalInstance=getInternalInstanceReadyForUpdate(publicInstance,'replaceState');
	
	if(!internalInstance){
	return;
	}
	
	internalInstance._pendingStateQueue=[completeState];
	internalInstance._pendingReplaceState=true;
	
	enqueueUpdate(internalInstance);
	},
	
	
	
	
	
	
	
	
	
	
	
	enqueueSetState:function enqueueSetState(publicInstance,partialState){
	if(process.env.NODE_ENV!=='production'){
	ReactInstrumentation.debugTool.onSetState();
	process.env.NODE_ENV!=='production'?warning(partialState!=null,'setState(...): You passed an undefined or null state object; '+'instead, use forceUpdate().'):void 0;
	}
	
	var internalInstance=getInternalInstanceReadyForUpdate(publicInstance,'setState');
	
	if(!internalInstance){
	return;
	}
	
	var queue=internalInstance._pendingStateQueue||(internalInstance._pendingStateQueue=[]);
	queue.push(partialState);
	
	enqueueUpdate(internalInstance);
	},
	
	enqueueElementInternal:function enqueueElementInternal(internalInstance,nextElement,nextContext){
	internalInstance._pendingElement=nextElement;
	
	internalInstance._context=nextContext;
	enqueueUpdate(internalInstance);
	},
	
	validateCallback:function validateCallback(callback,callerName){
	!(!callback||typeof callback==='function')?process.env.NODE_ENV!=='production'?invariant(false,'%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.',callerName,formatUnexpectedArgument(callback)):_prodInvariant('122',callerName,formatUnexpectedArgument(callback)):void 0;
	}};
	
	
	
	module.exports=ReactUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _assign=__webpack_require__(4);
	
	var emptyFunction=__webpack_require__(12);
	var warning=__webpack_require__(11);
	
	var validateDOMNesting=emptyFunction;
	
	if(process.env.NODE_ENV!=='production'){
	
	
	
	
	
	
	
	
	
	
	
	
	var specialTags=['address','applet','area','article','aside','base','basefont','bgsound','blockquote','body','br','button','caption','center','col','colgroup','dd','details','dir','div','dl','dt','embed','fieldset','figcaption','figure','footer','form','frame','frameset','h1','h2','h3','h4','h5','h6','head','header','hgroup','hr','html','iframe','img','input','isindex','li','link','listing','main','marquee','menu','menuitem','meta','nav','noembed','noframes','noscript','object','ol','p','param','plaintext','pre','script','section','select','source','style','summary','table','tbody','td','template','textarea','tfoot','th','thead','title','tr','track','ul','wbr','xmp'];
	
	
	var inScopeTags=['applet','caption','html','table','td','th','marquee','object','template',
	
	
	
	
	'foreignObject','desc','title'];
	
	
	var buttonScopeTags=inScopeTags.concat(['button']);
	
	
	var impliedEndTags=['dd','dt','li','option','optgroup','p','rp','rt'];
	
	var emptyAncestorInfo={
	current:null,
	
	formTag:null,
	aTagInScope:null,
	buttonTagInScope:null,
	nobrTagInScope:null,
	pTagInButtonScope:null,
	
	listItemTagAutoclosing:null,
	dlItemTagAutoclosing:null};
	
	
	var updatedAncestorInfo=function updatedAncestorInfo(oldInfo,tag,instance){
	var ancestorInfo=_assign({},oldInfo||emptyAncestorInfo);
	var info={tag:tag,instance:instance};
	
	if(inScopeTags.indexOf(tag)!==-1){
	ancestorInfo.aTagInScope=null;
	ancestorInfo.buttonTagInScope=null;
	ancestorInfo.nobrTagInScope=null;
	}
	if(buttonScopeTags.indexOf(tag)!==-1){
	ancestorInfo.pTagInButtonScope=null;
	}
	
	
	
	if(specialTags.indexOf(tag)!==-1&&tag!=='address'&&tag!=='div'&&tag!=='p'){
	ancestorInfo.listItemTagAutoclosing=null;
	ancestorInfo.dlItemTagAutoclosing=null;
	}
	
	ancestorInfo.current=info;
	
	if(tag==='form'){
	ancestorInfo.formTag=info;
	}
	if(tag==='a'){
	ancestorInfo.aTagInScope=info;
	}
	if(tag==='button'){
	ancestorInfo.buttonTagInScope=info;
	}
	if(tag==='nobr'){
	ancestorInfo.nobrTagInScope=info;
	}
	if(tag==='p'){
	ancestorInfo.pTagInButtonScope=info;
	}
	if(tag==='li'){
	ancestorInfo.listItemTagAutoclosing=info;
	}
	if(tag==='dd'||tag==='dt'){
	ancestorInfo.dlItemTagAutoclosing=info;
	}
	
	return ancestorInfo;
	};
	
	
	
	
	var isTagValidWithParent=function isTagValidWithParent(tag,parentTag){
	
	switch(parentTag){
	
	case'select':
	return tag==='option'||tag==='optgroup'||tag==='#text';
	case'optgroup':
	return tag==='option'||tag==='#text';
	
	
	case'option':
	return tag==='#text';
	
	
	
	
	
	
	
	case'tr':
	return tag==='th'||tag==='td'||tag==='style'||tag==='script'||tag==='template';
	
	
	case'tbody':
	case'thead':
	case'tfoot':
	return tag==='tr'||tag==='style'||tag==='script'||tag==='template';
	
	
	case'colgroup':
	return tag==='col'||tag==='template';
	
	
	case'table':
	return tag==='caption'||tag==='colgroup'||tag==='tbody'||tag==='tfoot'||tag==='thead'||tag==='style'||tag==='script'||tag==='template';
	
	
	case'head':
	return tag==='base'||tag==='basefont'||tag==='bgsound'||tag==='link'||tag==='meta'||tag==='title'||tag==='noscript'||tag==='noframes'||tag==='style'||tag==='script'||tag==='template';
	
	
	case'html':
	return tag==='head'||tag==='body';
	case'#document':
	return tag==='html';}
	
	
	
	
	
	switch(tag){
	case'h1':
	case'h2':
	case'h3':
	case'h4':
	case'h5':
	case'h6':
	return parentTag!=='h1'&&parentTag!=='h2'&&parentTag!=='h3'&&parentTag!=='h4'&&parentTag!=='h5'&&parentTag!=='h6';
	
	case'rp':
	case'rt':
	return impliedEndTags.indexOf(parentTag)===-1;
	
	case'body':
	case'caption':
	case'col':
	case'colgroup':
	case'frame':
	case'head':
	case'html':
	case'tbody':
	case'td':
	case'tfoot':
	case'th':
	case'thead':
	case'tr':
	
	
	
	
	return parentTag==null;}
	
	
	return true;
	};
	
	
	
	
	var findInvalidAncestorForTag=function findInvalidAncestorForTag(tag,ancestorInfo){
	switch(tag){
	case'address':
	case'article':
	case'aside':
	case'blockquote':
	case'center':
	case'details':
	case'dialog':
	case'dir':
	case'div':
	case'dl':
	case'fieldset':
	case'figcaption':
	case'figure':
	case'footer':
	case'header':
	case'hgroup':
	case'main':
	case'menu':
	case'nav':
	case'ol':
	case'p':
	case'section':
	case'summary':
	case'ul':
	
	case'pre':
	case'listing':
	
	case'table':
	
	case'hr':
	
	case'xmp':
	
	case'h1':
	case'h2':
	case'h3':
	case'h4':
	case'h5':
	case'h6':
	return ancestorInfo.pTagInButtonScope;
	
	case'form':
	return ancestorInfo.formTag||ancestorInfo.pTagInButtonScope;
	
	case'li':
	return ancestorInfo.listItemTagAutoclosing;
	
	case'dd':
	case'dt':
	return ancestorInfo.dlItemTagAutoclosing;
	
	case'button':
	return ancestorInfo.buttonTagInScope;
	
	case'a':
	
	
	return ancestorInfo.aTagInScope;
	
	case'nobr':
	return ancestorInfo.nobrTagInScope;}
	
	
	return null;
	};
	
	
	
	
	
	var findOwnerStack=function findOwnerStack(instance){
	if(!instance){
	return[];
	}
	
	var stack=[];
	do{
	stack.push(instance);
	}while(instance=instance._currentElement._owner);
	stack.reverse();
	return stack;
	};
	
	var didWarn={};
	
	validateDOMNesting=function validateDOMNesting(childTag,childText,childInstance,ancestorInfo){
	ancestorInfo=ancestorInfo||emptyAncestorInfo;
	var parentInfo=ancestorInfo.current;
	var parentTag=parentInfo&&parentInfo.tag;
	
	if(childText!=null){
	process.env.NODE_ENV!=='production'?warning(childTag==null,'validateDOMNesting: when childText is passed, childTag should be null'):void 0;
	childTag='#text';
	}
	
	var invalidParent=isTagValidWithParent(childTag,parentTag)?null:parentInfo;
	var invalidAncestor=invalidParent?null:findInvalidAncestorForTag(childTag,ancestorInfo);
	var problematic=invalidParent||invalidAncestor;
	
	if(problematic){
	var ancestorTag=problematic.tag;
	var ancestorInstance=problematic.instance;
	
	var childOwner=childInstance&&childInstance._currentElement._owner;
	var ancestorOwner=ancestorInstance&&ancestorInstance._currentElement._owner;
	
	var childOwners=findOwnerStack(childOwner);
	var ancestorOwners=findOwnerStack(ancestorOwner);
	
	var minStackLen=Math.min(childOwners.length,ancestorOwners.length);
	var i;
	
	var deepestCommon=-1;
	for(i=0;i<minStackLen;i++){
	if(childOwners[i]===ancestorOwners[i]){
	deepestCommon=i;
	}else{
	break;
	}
	}
	
	var UNKNOWN='(unknown)';
	var childOwnerNames=childOwners.slice(deepestCommon+1).map(function(inst){
	return inst.getName()||UNKNOWN;
	});
	var ancestorOwnerNames=ancestorOwners.slice(deepestCommon+1).map(function(inst){
	return inst.getName()||UNKNOWN;
	});
	var ownerInfo=[].concat(
	
	
	deepestCommon!==-1?childOwners[deepestCommon].getName()||UNKNOWN:[],ancestorOwnerNames,ancestorTag,
	
	invalidAncestor?['...']:[],childOwnerNames,childTag).join(' > ');
	
	var warnKey=!!invalidParent+'|'+childTag+'|'+ancestorTag+'|'+ownerInfo;
	if(didWarn[warnKey]){
	return;
	}
	didWarn[warnKey]=true;
	
	var tagDisplayName=childTag;
	var whitespaceInfo='';
	if(childTag==='#text'){
	if(/\S/.test(childText)){
	tagDisplayName='Text nodes';
	}else{
	tagDisplayName='Whitespace text nodes';
	whitespaceInfo=' Make sure you don\'t have any extra whitespace between tags on '+'each line of your source code.';
	}
	}else{
	tagDisplayName='<'+childTag+'>';
	}
	
	if(invalidParent){
	var info='';
	if(ancestorTag==='table'&&childTag==='tr'){
	info+=' Add a <tbody> to your code to match the DOM tree generated by '+'the browser.';
	}
	process.env.NODE_ENV!=='production'?warning(false,'validateDOMNesting(...): %s cannot appear as a child of <%s>.%s '+'See %s.%s',tagDisplayName,ancestorTag,whitespaceInfo,ownerInfo,info):void 0;
	}else{
	process.env.NODE_ENV!=='production'?warning(false,'validateDOMNesting(...): %s cannot appear as a descendant of '+'<%s>. See %s.',tagDisplayName,ancestorTag,ownerInfo):void 0;
	}
	}
	};
	
	validateDOMNesting.updatedAncestorInfo=updatedAncestorInfo;
	
	
	validateDOMNesting.isTagValidInContext=function(tag,ancestorInfo){
	ancestorInfo=ancestorInfo||emptyAncestorInfo;
	var parentInfo=ancestorInfo.current;
	var parentTag=parentInfo&&parentInfo.tag;
	return isTagValidWithParent(tag,parentTag)&&!findInvalidAncestorForTag(tag,ancestorInfo);
	};
	}
	
	module.exports=validateDOMNesting;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _assign=__webpack_require__(4);
	
	var DOMLazyTree=__webpack_require__(81);
	var ReactDOMComponentTree=__webpack_require__(34);
	
	var ReactDOMEmptyComponent=function ReactDOMEmptyComponent(instantiate){
	
	this._currentElement=null;
	
	this._hostNode=null;
	this._hostParent=null;
	this._hostContainerInfo=null;
	this._domID=0;
	};
	_assign(ReactDOMEmptyComponent.prototype,{
	mountComponent:function mountComponent(transaction,hostParent,hostContainerInfo,context){
	var domID=hostContainerInfo._idCounter++;
	this._domID=domID;
	this._hostParent=hostParent;
	this._hostContainerInfo=hostContainerInfo;
	
	var nodeValue=' react-empty: '+this._domID+' ';
	if(transaction.useCreateElement){
	var ownerDocument=hostContainerInfo._ownerDocument;
	var node=ownerDocument.createComment(nodeValue);
	ReactDOMComponentTree.precacheNode(this,node);
	return DOMLazyTree(node);
	}else{
	if(transaction.renderToStaticMarkup){
	
	
	
	return'';
	}
	return'<!--'+nodeValue+'-->';
	}
	},
	receiveComponent:function receiveComponent(){},
	getHostNode:function getHostNode(){
	return ReactDOMComponentTree.getNodeFromInstance(this);
	},
	unmountComponent:function unmountComponent(){
	ReactDOMComponentTree.uncacheNode(this);
	}});
	
	
	module.exports=ReactDOMEmptyComponent;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(35);
	
	var invariant=__webpack_require__(8);
	
	
	
	
	
	function getLowestCommonAncestor(instA,instB){
	!('_hostNode'in instA)?process.env.NODE_ENV!=='production'?invariant(false,'getNodeFromInstance: Invalid argument.'):_prodInvariant('33'):void 0;
	!('_hostNode'in instB)?process.env.NODE_ENV!=='production'?invariant(false,'getNodeFromInstance: Invalid argument.'):_prodInvariant('33'):void 0;
	
	var depthA=0;
	for(var tempA=instA;tempA;tempA=tempA._hostParent){
	depthA++;
	}
	var depthB=0;
	for(var tempB=instB;tempB;tempB=tempB._hostParent){
	depthB++;
	}
	
	
	while(depthA-depthB>0){
	instA=instA._hostParent;
	depthA--;
	}
	
	
	while(depthB-depthA>0){
	instB=instB._hostParent;
	depthB--;
	}
	
	
	var depth=depthA;
	while(depth--){
	if(instA===instB){
	return instA;
	}
	instA=instA._hostParent;
	instB=instB._hostParent;
	}
	return null;
	}
	
	
	
	
	function isAncestor(instA,instB){
	!('_hostNode'in instA)?process.env.NODE_ENV!=='production'?invariant(false,'isAncestor: Invalid argument.'):_prodInvariant('35'):void 0;
	!('_hostNode'in instB)?process.env.NODE_ENV!=='production'?invariant(false,'isAncestor: Invalid argument.'):_prodInvariant('35'):void 0;
	
	while(instB){
	if(instB===instA){
	return true;
	}
	instB=instB._hostParent;
	}
	return false;
	}
	
	
	
	
	function getParentInstance(inst){
	!('_hostNode'in inst)?process.env.NODE_ENV!=='production'?invariant(false,'getParentInstance: Invalid argument.'):_prodInvariant('36'):void 0;
	
	return inst._hostParent;
	}
	
	
	
	
	function traverseTwoPhase(inst,fn,arg){
	var path=[];
	while(inst){
	path.push(inst);
	inst=inst._hostParent;
	}
	var i;
	for(i=path.length;i-->0;){
	fn(path[i],'captured',arg);
	}
	for(i=0;i<path.length;i++){
	fn(path[i],'bubbled',arg);
	}
	}
	
	
	
	
	
	
	
	
	function traverseEnterLeave(from,to,fn,argFrom,argTo){
	var common=from&&to?getLowestCommonAncestor(from,to):null;
	var pathFrom=[];
	while(from&&from!==common){
	pathFrom.push(from);
	from=from._hostParent;
	}
	var pathTo=[];
	while(to&&to!==common){
	pathTo.push(to);
	to=to._hostParent;
	}
	var i;
	for(i=0;i<pathFrom.length;i++){
	fn(pathFrom[i],'bubbled',argFrom);
	}
	for(i=pathTo.length;i-->0;){
	fn(pathTo[i],'captured',argTo);
	}
	}
	
	module.exports={
	isAncestor:isAncestor,
	getLowestCommonAncestor:getLowestCommonAncestor,
	getParentInstance:getParentInstance,
	traverseTwoPhase:traverseTwoPhase,
	traverseEnterLeave:traverseEnterLeave};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(35),
	_assign=__webpack_require__(4);
	
	var DOMChildrenOperations=__webpack_require__(80);
	var DOMLazyTree=__webpack_require__(81);
	var ReactDOMComponentTree=__webpack_require__(34);
	
	var escapeTextContentForBrowser=__webpack_require__(86);
	var invariant=__webpack_require__(8);
	var validateDOMNesting=__webpack_require__(136);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var ReactDOMTextComponent=function ReactDOMTextComponent(text){
	
	this._currentElement=text;
	this._stringText=''+text;
	
	this._hostNode=null;
	this._hostParent=null;
	
	
	this._domID=0;
	this._mountIndex=0;
	this._closingComment=null;
	this._commentNodes=null;
	};
	
	_assign(ReactDOMTextComponent.prototype,{
	
	
	
	
	
	
	
	
	
	mountComponent:function mountComponent(transaction,hostParent,hostContainerInfo,context){
	if(process.env.NODE_ENV!=='production'){
	var parentInfo;
	if(hostParent!=null){
	parentInfo=hostParent._ancestorInfo;
	}else if(hostContainerInfo!=null){
	parentInfo=hostContainerInfo._ancestorInfo;
	}
	if(parentInfo){
	
	
	validateDOMNesting(null,this._stringText,this,parentInfo);
	}
	}
	
	var domID=hostContainerInfo._idCounter++;
	var openingValue=' react-text: '+domID+' ';
	var closingValue=' /react-text ';
	this._domID=domID;
	this._hostParent=hostParent;
	if(transaction.useCreateElement){
	var ownerDocument=hostContainerInfo._ownerDocument;
	var openingComment=ownerDocument.createComment(openingValue);
	var closingComment=ownerDocument.createComment(closingValue);
	var lazyTree=DOMLazyTree(ownerDocument.createDocumentFragment());
	DOMLazyTree.queueChild(lazyTree,DOMLazyTree(openingComment));
	if(this._stringText){
	DOMLazyTree.queueChild(lazyTree,DOMLazyTree(ownerDocument.createTextNode(this._stringText)));
	}
	DOMLazyTree.queueChild(lazyTree,DOMLazyTree(closingComment));
	ReactDOMComponentTree.precacheNode(this,openingComment);
	this._closingComment=closingComment;
	return lazyTree;
	}else{
	var escapedText=escapeTextContentForBrowser(this._stringText);
	
	if(transaction.renderToStaticMarkup){
	
	
	
	return escapedText;
	}
	
	return'<!--'+openingValue+'-->'+escapedText+'<!--'+closingValue+'-->';
	}
	},
	
	
	
	
	
	
	
	
	receiveComponent:function receiveComponent(nextText,transaction){
	if(nextText!==this._currentElement){
	this._currentElement=nextText;
	var nextStringText=''+nextText;
	if(nextStringText!==this._stringText){
	
	
	
	this._stringText=nextStringText;
	var commentNodes=this.getHostNode();
	DOMChildrenOperations.replaceDelimitedText(commentNodes[0],commentNodes[1],nextStringText);
	}
	}
	},
	
	getHostNode:function getHostNode(){
	var hostNode=this._commentNodes;
	if(hostNode){
	return hostNode;
	}
	if(!this._closingComment){
	var openingComment=ReactDOMComponentTree.getNodeFromInstance(this);
	var node=openingComment.nextSibling;
	while(true){
	!(node!=null)?process.env.NODE_ENV!=='production'?invariant(false,'Missing closing comment for text component %s',this._domID):_prodInvariant('67',this._domID):void 0;
	if(node.nodeType===8&&node.nodeValue===' /react-text '){
	this._closingComment=node;
	break;
	}
	node=node.nextSibling;
	}
	}
	hostNode=[this._hostNode,this._closingComment];
	this._commentNodes=hostNode;
	return hostNode;
	},
	
	unmountComponent:function unmountComponent(){
	this._closingComment=null;
	this._commentNodes=null;
	ReactDOMComponentTree.uncacheNode(this);
	}});
	
	
	
	module.exports=ReactDOMTextComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _assign=__webpack_require__(4);
	
	var ReactUpdates=__webpack_require__(56);
	var Transaction=__webpack_require__(68);
	
	var emptyFunction=__webpack_require__(12);
	
	var RESET_BATCHED_UPDATES={
	initialize:emptyFunction,
	close:function close(){
	ReactDefaultBatchingStrategy.isBatchingUpdates=false;
	}};
	
	
	var FLUSH_BATCHED_UPDATES={
	initialize:emptyFunction,
	close:ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)};
	
	
	var TRANSACTION_WRAPPERS=[FLUSH_BATCHED_UPDATES,RESET_BATCHED_UPDATES];
	
	function ReactDefaultBatchingStrategyTransaction(){
	this.reinitializeTransaction();
	}
	
	_assign(ReactDefaultBatchingStrategyTransaction.prototype,Transaction,{
	getTransactionWrappers:function getTransactionWrappers(){
	return TRANSACTION_WRAPPERS;
	}});
	
	
	var transaction=new ReactDefaultBatchingStrategyTransaction();
	
	var ReactDefaultBatchingStrategy={
	isBatchingUpdates:false,
	
	
	
	
	
	batchedUpdates:function batchedUpdates(callback,a,b,c,d,e){
	var alreadyBatchingUpdates=ReactDefaultBatchingStrategy.isBatchingUpdates;
	
	ReactDefaultBatchingStrategy.isBatchingUpdates=true;
	
	
	if(alreadyBatchingUpdates){
	return callback(a,b,c,d,e);
	}else{
	return transaction.perform(callback,null,a,b,c,d,e);
	}
	}};
	
	
	module.exports=ReactDefaultBatchingStrategy;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _assign=__webpack_require__(4);
	
	var EventListener=__webpack_require__(142);
	var ExecutionEnvironment=__webpack_require__(48);
	var PooledClass=__webpack_require__(50);
	var ReactDOMComponentTree=__webpack_require__(34);
	var ReactUpdates=__webpack_require__(56);
	
	var getEventTarget=__webpack_require__(69);
	var getUnboundedScrollPosition=__webpack_require__(143);
	
	
	
	
	
	
	function findParent(inst){
	
	
	
	while(inst._hostParent){
	inst=inst._hostParent;
	}
	var rootNode=ReactDOMComponentTree.getNodeFromInstance(inst);
	var container=rootNode.parentNode;
	return ReactDOMComponentTree.getClosestInstanceFromNode(container);
	}
	
	
	function TopLevelCallbackBookKeeping(topLevelType,nativeEvent){
	this.topLevelType=topLevelType;
	this.nativeEvent=nativeEvent;
	this.ancestors=[];
	}
	_assign(TopLevelCallbackBookKeeping.prototype,{
	destructor:function destructor(){
	this.topLevelType=null;
	this.nativeEvent=null;
	this.ancestors.length=0;
	}});
	
	PooledClass.addPoolingTo(TopLevelCallbackBookKeeping,PooledClass.twoArgumentPooler);
	
	function handleTopLevelImpl(bookKeeping){
	var nativeEventTarget=getEventTarget(bookKeeping.nativeEvent);
	var targetInst=ReactDOMComponentTree.getClosestInstanceFromNode(nativeEventTarget);
	
	
	
	
	
	var ancestor=targetInst;
	do{
	bookKeeping.ancestors.push(ancestor);
	ancestor=ancestor&&findParent(ancestor);
	}while(ancestor);
	
	for(var i=0;i<bookKeeping.ancestors.length;i++){
	targetInst=bookKeeping.ancestors[i];
	ReactEventListener._handleTopLevel(bookKeeping.topLevelType,targetInst,bookKeeping.nativeEvent,getEventTarget(bookKeeping.nativeEvent));
	}
	}
	
	function scrollValueMonitor(cb){
	var scrollPosition=getUnboundedScrollPosition(window);
	cb(scrollPosition);
	}
	
	var ReactEventListener={
	_enabled:true,
	_handleTopLevel:null,
	
	WINDOW_HANDLE:ExecutionEnvironment.canUseDOM?window:null,
	
	setHandleTopLevel:function setHandleTopLevel(handleTopLevel){
	ReactEventListener._handleTopLevel=handleTopLevel;
	},
	
	setEnabled:function setEnabled(enabled){
	ReactEventListener._enabled=!!enabled;
	},
	
	isEnabled:function isEnabled(){
	return ReactEventListener._enabled;
	},
	
	
	
	
	
	
	
	
	
	
	
	trapBubbledEvent:function trapBubbledEvent(topLevelType,handlerBaseName,element){
	if(!element){
	return null;
	}
	return EventListener.listen(element,handlerBaseName,ReactEventListener.dispatchEvent.bind(null,topLevelType));
	},
	
	
	
	
	
	
	
	
	
	
	
	trapCapturedEvent:function trapCapturedEvent(topLevelType,handlerBaseName,element){
	if(!element){
	return null;
	}
	return EventListener.capture(element,handlerBaseName,ReactEventListener.dispatchEvent.bind(null,topLevelType));
	},
	
	monitorScrollValue:function monitorScrollValue(refresh){
	var callback=scrollValueMonitor.bind(null,refresh);
	EventListener.listen(window,'scroll',callback);
	},
	
	dispatchEvent:function dispatchEvent(topLevelType,nativeEvent){
	if(!ReactEventListener._enabled){
	return;
	}
	
	var bookKeeping=TopLevelCallbackBookKeeping.getPooled(topLevelType,nativeEvent);
	try{
	
	
	ReactUpdates.batchedUpdates(handleTopLevelImpl,bookKeeping);
	}finally{
	TopLevelCallbackBookKeeping.release(bookKeeping);
	}
	}};
	
	
	module.exports=ReactEventListener;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var emptyFunction=__webpack_require__(12);
	
	
	
	
	
	var EventListener={
	
	
	
	
	
	
	
	
	listen:function listen(target,eventType,callback){
	if(target.addEventListener){
	target.addEventListener(eventType,callback,false);
	return{
	remove:function remove(){
	target.removeEventListener(eventType,callback,false);
	}};
	
	}else if(target.attachEvent){
	target.attachEvent('on'+eventType,callback);
	return{
	remove:function remove(){
	target.detachEvent('on'+eventType,callback);
	}};
	
	}
	},
	
	
	
	
	
	
	
	
	
	capture:function capture(target,eventType,callback){
	if(target.addEventListener){
	target.addEventListener(eventType,callback,true);
	return{
	remove:function remove(){
	target.removeEventListener(eventType,callback,true);
	}};
	
	}else{
	if(process.env.NODE_ENV!=='production'){
	console.error('Attempted to listen to events during the capture phase on a '+'browser that does not support the capture phase. Your application '+'will not receive some events.');
	}
	return{
	remove:emptyFunction};
	
	}
	},
	
	registerDefault:function registerDefault(){}};
	
	
	module.exports=EventListener;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 143 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	
	
	
	
	
	
	
	function getUnboundedScrollPosition(scrollable){
	if(scrollable===window){
	return{
	x:window.pageXOffset||document.documentElement.scrollLeft,
	y:window.pageYOffset||document.documentElement.scrollTop};
	
	}
	return{
	x:scrollable.scrollLeft,
	y:scrollable.scrollTop};
	
	}
	
	module.exports=getUnboundedScrollPosition;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var DOMProperty=__webpack_require__(36);
	var EventPluginHub=__webpack_require__(42);
	var EventPluginUtils=__webpack_require__(44);
	var ReactComponentEnvironment=__webpack_require__(115);
	var ReactEmptyComponent=__webpack_require__(125);
	var ReactBrowserEventEmitter=__webpack_require__(105);
	var ReactHostComponent=__webpack_require__(126);
	var ReactUpdates=__webpack_require__(56);
	
	var ReactInjection={
	Component:ReactComponentEnvironment.injection,
	DOMProperty:DOMProperty.injection,
	EmptyComponent:ReactEmptyComponent.injection,
	EventPluginHub:EventPluginHub.injection,
	EventPluginUtils:EventPluginUtils.injection,
	EventEmitter:ReactBrowserEventEmitter.injection,
	HostComponent:ReactHostComponent.injection,
	Updates:ReactUpdates.injection};
	
	
	module.exports=ReactInjection;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _assign=__webpack_require__(4);
	
	var CallbackQueue=__webpack_require__(57);
	var PooledClass=__webpack_require__(50);
	var ReactBrowserEventEmitter=__webpack_require__(105);
	var ReactInputSelection=__webpack_require__(146);
	var ReactInstrumentation=__webpack_require__(62);
	var Transaction=__webpack_require__(68);
	var ReactUpdateQueue=__webpack_require__(135);
	
	
	
	
	
	var SELECTION_RESTORATION={
	
	
	
	initialize:ReactInputSelection.getSelectionInformation,
	
	
	
	close:ReactInputSelection.restoreSelection};
	
	
	
	
	
	
	
	var EVENT_SUPPRESSION={
	
	
	
	
	initialize:function initialize(){
	var currentlyEnabled=ReactBrowserEventEmitter.isEnabled();
	ReactBrowserEventEmitter.setEnabled(false);
	return currentlyEnabled;
	},
	
	
	
	
	
	
	close:function close(previouslyEnabled){
	ReactBrowserEventEmitter.setEnabled(previouslyEnabled);
	}};
	
	
	
	
	
	
	var ON_DOM_READY_QUEUEING={
	
	
	
	initialize:function initialize(){
	this.reactMountReady.reset();
	},
	
	
	
	
	close:function close(){
	this.reactMountReady.notifyAll();
	}};
	
	
	
	
	
	
	
	var TRANSACTION_WRAPPERS=[SELECTION_RESTORATION,EVENT_SUPPRESSION,ON_DOM_READY_QUEUEING];
	
	if(process.env.NODE_ENV!=='production'){
	TRANSACTION_WRAPPERS.push({
	initialize:ReactInstrumentation.debugTool.onBeginFlush,
	close:ReactInstrumentation.debugTool.onEndFlush});
	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function ReactReconcileTransaction(useCreateElement){
	this.reinitializeTransaction();
	
	
	
	
	
	this.renderToStaticMarkup=false;
	this.reactMountReady=CallbackQueue.getPooled(null);
	this.useCreateElement=useCreateElement;
	}
	
	var Mixin={
	
	
	
	
	
	
	
	getTransactionWrappers:function getTransactionWrappers(){
	return TRANSACTION_WRAPPERS;
	},
	
	
	
	
	getReactMountReady:function getReactMountReady(){
	return this.reactMountReady;
	},
	
	
	
	
	getUpdateQueue:function getUpdateQueue(){
	return ReactUpdateQueue;
	},
	
	
	
	
	
	checkpoint:function checkpoint(){
	
	return this.reactMountReady.checkpoint();
	},
	
	rollback:function rollback(checkpoint){
	this.reactMountReady.rollback(checkpoint);
	},
	
	
	
	
	
	destructor:function destructor(){
	CallbackQueue.release(this.reactMountReady);
	this.reactMountReady=null;
	}};
	
	
	_assign(ReactReconcileTransaction.prototype,Transaction,Mixin);
	
	PooledClass.addPoolingTo(ReactReconcileTransaction);
	
	module.exports=ReactReconcileTransaction;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ReactDOMSelection=__webpack_require__(147);
	
	var containsNode=__webpack_require__(149);
	var focusNode=__webpack_require__(94);
	var getActiveElement=__webpack_require__(152);
	
	function isInDocument(node){
	return containsNode(document.documentElement,node);
	}
	
	
	
	
	
	
	
	var ReactInputSelection={
	
	hasSelectionCapabilities:function hasSelectionCapabilities(elem){
	var nodeName=elem&&elem.nodeName&&elem.nodeName.toLowerCase();
	return nodeName&&(nodeName==='input'&&elem.type==='text'||nodeName==='textarea'||elem.contentEditable==='true');
	},
	
	getSelectionInformation:function getSelectionInformation(){
	var focusedElem=getActiveElement();
	return{
	focusedElem:focusedElem,
	selectionRange:ReactInputSelection.hasSelectionCapabilities(focusedElem)?ReactInputSelection.getSelection(focusedElem):null};
	
	},
	
	
	
	
	
	
	restoreSelection:function restoreSelection(priorSelectionInformation){
	var curFocusedElem=getActiveElement();
	var priorFocusedElem=priorSelectionInformation.focusedElem;
	var priorSelectionRange=priorSelectionInformation.selectionRange;
	if(curFocusedElem!==priorFocusedElem&&isInDocument(priorFocusedElem)){
	if(ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)){
	ReactInputSelection.setSelection(priorFocusedElem,priorSelectionRange);
	}
	focusNode(priorFocusedElem);
	}
	},
	
	
	
	
	
	
	
	getSelection:function getSelection(input){
	var selection;
	
	if('selectionStart'in input){
	
	selection={
	start:input.selectionStart,
	end:input.selectionEnd};
	
	}else if(document.selection&&input.nodeName&&input.nodeName.toLowerCase()==='input'){
	
	var range=document.selection.createRange();
	
	
	if(range.parentElement()===input){
	selection={
	start:-range.moveStart('character',-input.value.length),
	end:-range.moveEnd('character',-input.value.length)};
	
	}
	}else{
	
	selection=ReactDOMSelection.getOffsets(input);
	}
	
	return selection||{start:0,end:0};
	},
	
	
	
	
	
	
	
	setSelection:function setSelection(input,offsets){
	var start=offsets.start;
	var end=offsets.end;
	if(end===undefined){
	end=start;
	}
	
	if('selectionStart'in input){
	input.selectionStart=start;
	input.selectionEnd=Math.min(end,input.value.length);
	}else if(document.selection&&input.nodeName&&input.nodeName.toLowerCase()==='input'){
	var range=input.createTextRange();
	range.collapse(true);
	range.moveStart('character',start);
	range.moveEnd('character',end-start);
	range.select();
	}else{
	ReactDOMSelection.setOffsets(input,offsets);
	}
	}};
	
	
	module.exports=ReactInputSelection;

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ExecutionEnvironment=__webpack_require__(48);
	
	var getNodeForCharacterOffset=__webpack_require__(148);
	var getTextContentAccessor=__webpack_require__(51);
	
	
	
	
	
	
	function isCollapsed(anchorNode,anchorOffset,focusNode,focusOffset){
	return anchorNode===focusNode&&anchorOffset===focusOffset;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function getIEOffsets(node){
	var selection=document.selection;
	var selectedRange=selection.createRange();
	var selectedLength=selectedRange.text.length;
	
	
	var fromStart=selectedRange.duplicate();
	fromStart.moveToElementText(node);
	fromStart.setEndPoint('EndToStart',selectedRange);
	
	var startOffset=fromStart.text.length;
	var endOffset=startOffset+selectedLength;
	
	return{
	start:startOffset,
	end:endOffset};
	
	}
	
	
	
	
	
	function getModernOffsets(node){
	var selection=window.getSelection&&window.getSelection();
	
	if(!selection||selection.rangeCount===0){
	return null;
	}
	
	var anchorNode=selection.anchorNode;
	var anchorOffset=selection.anchorOffset;
	var focusNode=selection.focusNode;
	var focusOffset=selection.focusOffset;
	
	var currentRange=selection.getRangeAt(0);
	
	
	
	
	
	
	
	
	try{
	
	currentRange.startContainer.nodeType;
	currentRange.endContainer.nodeType;
	
	}catch(e){
	return null;
	}
	
	
	
	
	var isSelectionCollapsed=isCollapsed(selection.anchorNode,selection.anchorOffset,selection.focusNode,selection.focusOffset);
	
	var rangeLength=isSelectionCollapsed?0:currentRange.toString().length;
	
	var tempRange=currentRange.cloneRange();
	tempRange.selectNodeContents(node);
	tempRange.setEnd(currentRange.startContainer,currentRange.startOffset);
	
	var isTempRangeCollapsed=isCollapsed(tempRange.startContainer,tempRange.startOffset,tempRange.endContainer,tempRange.endOffset);
	
	var start=isTempRangeCollapsed?0:tempRange.toString().length;
	var end=start+rangeLength;
	
	
	var detectionRange=document.createRange();
	detectionRange.setStart(anchorNode,anchorOffset);
	detectionRange.setEnd(focusNode,focusOffset);
	var isBackward=detectionRange.collapsed;
	
	return{
	start:isBackward?end:start,
	end:isBackward?start:end};
	
	}
	
	
	
	
	
	function setIEOffsets(node,offsets){
	var range=document.selection.createRange().duplicate();
	var start,end;
	
	if(offsets.end===undefined){
	start=offsets.start;
	end=start;
	}else if(offsets.start>offsets.end){
	start=offsets.end;
	end=offsets.start;
	}else{
	start=offsets.start;
	end=offsets.end;
	}
	
	range.moveToElementText(node);
	range.moveStart('character',start);
	range.setEndPoint('EndToStart',range);
	range.moveEnd('character',end-start);
	range.select();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	function setModernOffsets(node,offsets){
	if(!window.getSelection){
	return;
	}
	
	var selection=window.getSelection();
	var length=node[getTextContentAccessor()].length;
	var start=Math.min(offsets.start,length);
	var end=offsets.end===undefined?start:Math.min(offsets.end,length);
	
	
	
	if(!selection.extend&&start>end){
	var temp=end;
	end=start;
	start=temp;
	}
	
	var startMarker=getNodeForCharacterOffset(node,start);
	var endMarker=getNodeForCharacterOffset(node,end);
	
	if(startMarker&&endMarker){
	var range=document.createRange();
	range.setStart(startMarker.node,startMarker.offset);
	selection.removeAllRanges();
	
	if(start>end){
	selection.addRange(range);
	selection.extend(endMarker.node,endMarker.offset);
	}else{
	range.setEnd(endMarker.node,endMarker.offset);
	selection.addRange(range);
	}
	}
	}
	
	var useIEOffsets=ExecutionEnvironment.canUseDOM&&'selection'in document&&!('getSelection'in window);
	
	var ReactDOMSelection={
	
	
	
	getOffsets:useIEOffsets?getIEOffsets:getModernOffsets,
	
	
	
	
	
	setOffsets:useIEOffsets?setIEOffsets:setModernOffsets};
	
	
	module.exports=ReactDOMSelection;

/***/ },
/* 148 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	
	
	
	function getLeafNode(node){
	while(node&&node.firstChild){
	node=node.firstChild;
	}
	return node;
	}
	
	
	
	
	
	
	
	
	function getSiblingNode(node){
	while(node){
	if(node.nextSibling){
	return node.nextSibling;
	}
	node=node.parentNode;
	}
	}
	
	
	
	
	
	
	
	
	function getNodeForCharacterOffset(root,offset){
	var node=getLeafNode(root);
	var nodeStart=0;
	var nodeEnd=0;
	
	while(node){
	if(node.nodeType===3){
	nodeEnd=nodeStart+node.textContent.length;
	
	if(nodeStart<=offset&&nodeEnd>=offset){
	return{
	node:node,
	offset:offset-nodeStart};
	
	}
	
	nodeStart=nodeEnd;
	}
	
	node=getLeafNode(getSiblingNode(node));
	}
	}
	
	module.exports=getNodeForCharacterOffset;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	
	
	
	
	
	
	
	
	
	
	
	var isTextNode=__webpack_require__(150);
	
	
	
	
	
	
	function containsNode(outerNode,innerNode){
	if(!outerNode||!innerNode){
	return false;
	}else if(outerNode===innerNode){
	return true;
	}else if(isTextNode(outerNode)){
	return false;
	}else if(isTextNode(innerNode)){
	return containsNode(outerNode,innerNode.parentNode);
	}else if('contains'in outerNode){
	return outerNode.contains(innerNode);
	}else if(outerNode.compareDocumentPosition){
	return!!(outerNode.compareDocumentPosition(innerNode)&16);
	}else{
	return false;
	}
	}
	
	module.exports=containsNode;

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	
	
	
	
	
	
	
	
	
	
	
	var isNode=__webpack_require__(151);
	
	
	
	
	
	function isTextNode(object){
	return isNode(object)&&object.nodeType==3;
	}
	
	module.exports=isTextNode;

/***/ },
/* 151 */
/***/ function(module, exports) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isNode(object){
	return!!(object&&(typeof Node==='function'?object instanceof Node:(typeof object==='undefined'?'undefined':_typeof(object))==='object'&&typeof object.nodeType==='number'&&typeof object.nodeName==='string'));
	}
	
	module.exports=isNode;

/***/ },
/* 152 */
/***/ function(module, exports) {

	'use strict';
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function getActiveElement(){
	if(typeof document==='undefined'){
	return null;
	}
	try{
	return document.activeElement||document.body;
	}catch(e){
	return document.body;
	}
	}
	
	module.exports=getActiveElement;

/***/ },
/* 153 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var NS={
	xlink:'http://www.w3.org/1999/xlink',
	xml:'http://www.w3.org/XML/1998/namespace'};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var ATTRS={
	accentHeight:'accent-height',
	accumulate:0,
	additive:0,
	alignmentBaseline:'alignment-baseline',
	allowReorder:'allowReorder',
	alphabetic:0,
	amplitude:0,
	arabicForm:'arabic-form',
	ascent:0,
	attributeName:'attributeName',
	attributeType:'attributeType',
	autoReverse:'autoReverse',
	azimuth:0,
	baseFrequency:'baseFrequency',
	baseProfile:'baseProfile',
	baselineShift:'baseline-shift',
	bbox:0,
	begin:0,
	bias:0,
	by:0,
	calcMode:'calcMode',
	capHeight:'cap-height',
	clip:0,
	clipPath:'clip-path',
	clipRule:'clip-rule',
	clipPathUnits:'clipPathUnits',
	colorInterpolation:'color-interpolation',
	colorInterpolationFilters:'color-interpolation-filters',
	colorProfile:'color-profile',
	colorRendering:'color-rendering',
	contentScriptType:'contentScriptType',
	contentStyleType:'contentStyleType',
	cursor:0,
	cx:0,
	cy:0,
	d:0,
	decelerate:0,
	descent:0,
	diffuseConstant:'diffuseConstant',
	direction:0,
	display:0,
	divisor:0,
	dominantBaseline:'dominant-baseline',
	dur:0,
	dx:0,
	dy:0,
	edgeMode:'edgeMode',
	elevation:0,
	enableBackground:'enable-background',
	end:0,
	exponent:0,
	externalResourcesRequired:'externalResourcesRequired',
	fill:0,
	fillOpacity:'fill-opacity',
	fillRule:'fill-rule',
	filter:0,
	filterRes:'filterRes',
	filterUnits:'filterUnits',
	floodColor:'flood-color',
	floodOpacity:'flood-opacity',
	focusable:0,
	fontFamily:'font-family',
	fontSize:'font-size',
	fontSizeAdjust:'font-size-adjust',
	fontStretch:'font-stretch',
	fontStyle:'font-style',
	fontVariant:'font-variant',
	fontWeight:'font-weight',
	format:0,
	from:0,
	fx:0,
	fy:0,
	g1:0,
	g2:0,
	glyphName:'glyph-name',
	glyphOrientationHorizontal:'glyph-orientation-horizontal',
	glyphOrientationVertical:'glyph-orientation-vertical',
	glyphRef:'glyphRef',
	gradientTransform:'gradientTransform',
	gradientUnits:'gradientUnits',
	hanging:0,
	horizAdvX:'horiz-adv-x',
	horizOriginX:'horiz-origin-x',
	ideographic:0,
	imageRendering:'image-rendering',
	'in':0,
	in2:0,
	intercept:0,
	k:0,
	k1:0,
	k2:0,
	k3:0,
	k4:0,
	kernelMatrix:'kernelMatrix',
	kernelUnitLength:'kernelUnitLength',
	kerning:0,
	keyPoints:'keyPoints',
	keySplines:'keySplines',
	keyTimes:'keyTimes',
	lengthAdjust:'lengthAdjust',
	letterSpacing:'letter-spacing',
	lightingColor:'lighting-color',
	limitingConeAngle:'limitingConeAngle',
	local:0,
	markerEnd:'marker-end',
	markerMid:'marker-mid',
	markerStart:'marker-start',
	markerHeight:'markerHeight',
	markerUnits:'markerUnits',
	markerWidth:'markerWidth',
	mask:0,
	maskContentUnits:'maskContentUnits',
	maskUnits:'maskUnits',
	mathematical:0,
	mode:0,
	numOctaves:'numOctaves',
	offset:0,
	opacity:0,
	operator:0,
	order:0,
	orient:0,
	orientation:0,
	origin:0,
	overflow:0,
	overlinePosition:'overline-position',
	overlineThickness:'overline-thickness',
	paintOrder:'paint-order',
	panose1:'panose-1',
	pathLength:'pathLength',
	patternContentUnits:'patternContentUnits',
	patternTransform:'patternTransform',
	patternUnits:'patternUnits',
	pointerEvents:'pointer-events',
	points:0,
	pointsAtX:'pointsAtX',
	pointsAtY:'pointsAtY',
	pointsAtZ:'pointsAtZ',
	preserveAlpha:'preserveAlpha',
	preserveAspectRatio:'preserveAspectRatio',
	primitiveUnits:'primitiveUnits',
	r:0,
	radius:0,
	refX:'refX',
	refY:'refY',
	renderingIntent:'rendering-intent',
	repeatCount:'repeatCount',
	repeatDur:'repeatDur',
	requiredExtensions:'requiredExtensions',
	requiredFeatures:'requiredFeatures',
	restart:0,
	result:0,
	rotate:0,
	rx:0,
	ry:0,
	scale:0,
	seed:0,
	shapeRendering:'shape-rendering',
	slope:0,
	spacing:0,
	specularConstant:'specularConstant',
	specularExponent:'specularExponent',
	speed:0,
	spreadMethod:'spreadMethod',
	startOffset:'startOffset',
	stdDeviation:'stdDeviation',
	stemh:0,
	stemv:0,
	stitchTiles:'stitchTiles',
	stopColor:'stop-color',
	stopOpacity:'stop-opacity',
	strikethroughPosition:'strikethrough-position',
	strikethroughThickness:'strikethrough-thickness',
	string:0,
	stroke:0,
	strokeDasharray:'stroke-dasharray',
	strokeDashoffset:'stroke-dashoffset',
	strokeLinecap:'stroke-linecap',
	strokeLinejoin:'stroke-linejoin',
	strokeMiterlimit:'stroke-miterlimit',
	strokeOpacity:'stroke-opacity',
	strokeWidth:'stroke-width',
	surfaceScale:'surfaceScale',
	systemLanguage:'systemLanguage',
	tableValues:'tableValues',
	targetX:'targetX',
	targetY:'targetY',
	textAnchor:'text-anchor',
	textDecoration:'text-decoration',
	textRendering:'text-rendering',
	textLength:'textLength',
	to:0,
	transform:0,
	u1:0,
	u2:0,
	underlinePosition:'underline-position',
	underlineThickness:'underline-thickness',
	unicode:0,
	unicodeBidi:'unicode-bidi',
	unicodeRange:'unicode-range',
	unitsPerEm:'units-per-em',
	vAlphabetic:'v-alphabetic',
	vHanging:'v-hanging',
	vIdeographic:'v-ideographic',
	vMathematical:'v-mathematical',
	values:0,
	vectorEffect:'vector-effect',
	version:0,
	vertAdvY:'vert-adv-y',
	vertOriginX:'vert-origin-x',
	vertOriginY:'vert-origin-y',
	viewBox:'viewBox',
	viewTarget:'viewTarget',
	visibility:0,
	widths:0,
	wordSpacing:'word-spacing',
	writingMode:'writing-mode',
	x:0,
	xHeight:'x-height',
	x1:0,
	x2:0,
	xChannelSelector:'xChannelSelector',
	xlinkActuate:'xlink:actuate',
	xlinkArcrole:'xlink:arcrole',
	xlinkHref:'xlink:href',
	xlinkRole:'xlink:role',
	xlinkShow:'xlink:show',
	xlinkTitle:'xlink:title',
	xlinkType:'xlink:type',
	xmlBase:'xml:base',
	xmlns:0,
	xmlnsXlink:'xmlns:xlink',
	xmlLang:'xml:lang',
	xmlSpace:'xml:space',
	y:0,
	y1:0,
	y2:0,
	yChannelSelector:'yChannelSelector',
	z:0,
	zoomAndPan:'zoomAndPan'};
	
	
	var SVGDOMPropertyConfig={
	Properties:{},
	DOMAttributeNamespaces:{
	xlinkActuate:NS.xlink,
	xlinkArcrole:NS.xlink,
	xlinkHref:NS.xlink,
	xlinkRole:NS.xlink,
	xlinkShow:NS.xlink,
	xlinkTitle:NS.xlink,
	xlinkType:NS.xlink,
	xmlBase:NS.xml,
	xmlLang:NS.xml,
	xmlSpace:NS.xml},
	
	DOMAttributeNames:{}};
	
	
	Object.keys(ATTRS).forEach(function(key){
	SVGDOMPropertyConfig.Properties[key]=0;
	if(ATTRS[key]){
	SVGDOMPropertyConfig.DOMAttributeNames[key]=ATTRS[key];
	}
	});
	
	module.exports=SVGDOMPropertyConfig;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var EventPropagators=__webpack_require__(41);
	var ExecutionEnvironment=__webpack_require__(48);
	var ReactDOMComponentTree=__webpack_require__(34);
	var ReactInputSelection=__webpack_require__(146);
	var SyntheticEvent=__webpack_require__(53);
	
	var getActiveElement=__webpack_require__(152);
	var isTextInputElement=__webpack_require__(71);
	var shallowEqual=__webpack_require__(123);
	
	var skipSelectionChangeEvent=ExecutionEnvironment.canUseDOM&&'documentMode'in document&&document.documentMode<=11;
	
	var eventTypes={
	select:{
	phasedRegistrationNames:{
	bubbled:'onSelect',
	captured:'onSelectCapture'},
	
	dependencies:['topBlur','topContextMenu','topFocus','topKeyDown','topKeyUp','topMouseDown','topMouseUp','topSelectionChange']}};
	
	
	
	var activeElement=null;
	var activeElementInst=null;
	var lastSelection=null;
	var mouseDown=false;
	
	
	
	var hasListener=false;
	
	
	
	
	
	
	
	
	
	
	function getSelection(node){
	if('selectionStart'in node&&ReactInputSelection.hasSelectionCapabilities(node)){
	return{
	start:node.selectionStart,
	end:node.selectionEnd};
	
	}else if(window.getSelection){
	var selection=window.getSelection();
	return{
	anchorNode:selection.anchorNode,
	anchorOffset:selection.anchorOffset,
	focusNode:selection.focusNode,
	focusOffset:selection.focusOffset};
	
	}else if(document.selection){
	var range=document.selection.createRange();
	return{
	parentElement:range.parentElement(),
	text:range.text,
	top:range.boundingTop,
	left:range.boundingLeft};
	
	}
	}
	
	
	
	
	
	
	
	function constructSelectEvent(nativeEvent,nativeEventTarget){
	
	
	
	
	if(mouseDown||activeElement==null||activeElement!==getActiveElement()){
	return null;
	}
	
	
	var currentSelection=getSelection(activeElement);
	if(!lastSelection||!shallowEqual(lastSelection,currentSelection)){
	lastSelection=currentSelection;
	
	var syntheticEvent=SyntheticEvent.getPooled(eventTypes.select,activeElementInst,nativeEvent,nativeEventTarget);
	
	syntheticEvent.type='select';
	syntheticEvent.target=activeElement;
	
	EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);
	
	return syntheticEvent;
	}
	
	return null;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var SelectEventPlugin={
	
	eventTypes:eventTypes,
	
	extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){
	if(!hasListener){
	return null;
	}
	
	var targetNode=targetInst?ReactDOMComponentTree.getNodeFromInstance(targetInst):window;
	
	switch(topLevelType){
	
	case'topFocus':
	if(isTextInputElement(targetNode)||targetNode.contentEditable==='true'){
	activeElement=targetNode;
	activeElementInst=targetInst;
	lastSelection=null;
	}
	break;
	case'topBlur':
	activeElement=null;
	activeElementInst=null;
	lastSelection=null;
	break;
	
	
	
	case'topMouseDown':
	mouseDown=true;
	break;
	case'topContextMenu':
	case'topMouseUp':
	mouseDown=false;
	return constructSelectEvent(nativeEvent,nativeEventTarget);
	
	
	
	
	
	
	
	
	
	
	case'topSelectionChange':
	if(skipSelectionChangeEvent){
	break;
	}
	
	case'topKeyDown':
	case'topKeyUp':
	return constructSelectEvent(nativeEvent,nativeEventTarget);}
	
	
	return null;
	},
	
	didPutListener:function didPutListener(inst,registrationName,listener){
	if(registrationName==='onSelect'){
	hasListener=true;
	}
	}};
	
	
	module.exports=SelectEventPlugin;

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(35);
	
	var EventListener=__webpack_require__(142);
	var EventPropagators=__webpack_require__(41);
	var ReactDOMComponentTree=__webpack_require__(34);
	var SyntheticAnimationEvent=__webpack_require__(156);
	var SyntheticClipboardEvent=__webpack_require__(157);
	var SyntheticEvent=__webpack_require__(53);
	var SyntheticFocusEvent=__webpack_require__(158);
	var SyntheticKeyboardEvent=__webpack_require__(159);
	var SyntheticMouseEvent=__webpack_require__(74);
	var SyntheticDragEvent=__webpack_require__(162);
	var SyntheticTouchEvent=__webpack_require__(163);
	var SyntheticTransitionEvent=__webpack_require__(164);
	var SyntheticUIEvent=__webpack_require__(75);
	var SyntheticWheelEvent=__webpack_require__(165);
	
	var emptyFunction=__webpack_require__(12);
	var getEventCharCode=__webpack_require__(160);
	var invariant=__webpack_require__(8);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var eventTypes={};
	var topLevelEventsToDispatchConfig={};
	['abort','animationEnd','animationIteration','animationStart','blur','canPlay','canPlayThrough','click','contextMenu','copy','cut','doubleClick','drag','dragEnd','dragEnter','dragExit','dragLeave','dragOver','dragStart','drop','durationChange','emptied','encrypted','ended','error','focus','input','invalid','keyDown','keyPress','keyUp','load','loadedData','loadedMetadata','loadStart','mouseDown','mouseMove','mouseOut','mouseOver','mouseUp','paste','pause','play','playing','progress','rateChange','reset','scroll','seeked','seeking','stalled','submit','suspend','timeUpdate','touchCancel','touchEnd','touchMove','touchStart','transitionEnd','volumeChange','waiting','wheel'].forEach(function(event){
	var capitalizedEvent=event[0].toUpperCase()+event.slice(1);
	var onEvent='on'+capitalizedEvent;
	var topEvent='top'+capitalizedEvent;
	
	var type={
	phasedRegistrationNames:{
	bubbled:onEvent,
	captured:onEvent+'Capture'},
	
	dependencies:[topEvent]};
	
	eventTypes[event]=type;
	topLevelEventsToDispatchConfig[topEvent]=type;
	});
	
	var onClickListeners={};
	
	function getDictionaryKey(inst){
	
	
	return'.'+inst._rootNodeID;
	}
	
	function isInteractive(tag){
	return tag==='button'||tag==='input'||tag==='select'||tag==='textarea';
	}
	
	var SimpleEventPlugin={
	
	eventTypes:eventTypes,
	
	extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){
	var dispatchConfig=topLevelEventsToDispatchConfig[topLevelType];
	if(!dispatchConfig){
	return null;
	}
	var EventConstructor;
	switch(topLevelType){
	case'topAbort':
	case'topCanPlay':
	case'topCanPlayThrough':
	case'topDurationChange':
	case'topEmptied':
	case'topEncrypted':
	case'topEnded':
	case'topError':
	case'topInput':
	case'topInvalid':
	case'topLoad':
	case'topLoadedData':
	case'topLoadedMetadata':
	case'topLoadStart':
	case'topPause':
	case'topPlay':
	case'topPlaying':
	case'topProgress':
	case'topRateChange':
	case'topReset':
	case'topSeeked':
	case'topSeeking':
	case'topStalled':
	case'topSubmit':
	case'topSuspend':
	case'topTimeUpdate':
	case'topVolumeChange':
	case'topWaiting':
	
	
	EventConstructor=SyntheticEvent;
	break;
	case'topKeyPress':
	
	
	
	if(getEventCharCode(nativeEvent)===0){
	return null;
	}
	
	case'topKeyDown':
	case'topKeyUp':
	EventConstructor=SyntheticKeyboardEvent;
	break;
	case'topBlur':
	case'topFocus':
	EventConstructor=SyntheticFocusEvent;
	break;
	case'topClick':
	
	
	if(nativeEvent.button===2){
	return null;
	}
	
	case'topDoubleClick':
	case'topMouseDown':
	case'topMouseMove':
	case'topMouseUp':
	
	
	case'topMouseOut':
	case'topMouseOver':
	case'topContextMenu':
	EventConstructor=SyntheticMouseEvent;
	break;
	case'topDrag':
	case'topDragEnd':
	case'topDragEnter':
	case'topDragExit':
	case'topDragLeave':
	case'topDragOver':
	case'topDragStart':
	case'topDrop':
	EventConstructor=SyntheticDragEvent;
	break;
	case'topTouchCancel':
	case'topTouchEnd':
	case'topTouchMove':
	case'topTouchStart':
	EventConstructor=SyntheticTouchEvent;
	break;
	case'topAnimationEnd':
	case'topAnimationIteration':
	case'topAnimationStart':
	EventConstructor=SyntheticAnimationEvent;
	break;
	case'topTransitionEnd':
	EventConstructor=SyntheticTransitionEvent;
	break;
	case'topScroll':
	EventConstructor=SyntheticUIEvent;
	break;
	case'topWheel':
	EventConstructor=SyntheticWheelEvent;
	break;
	case'topCopy':
	case'topCut':
	case'topPaste':
	EventConstructor=SyntheticClipboardEvent;
	break;}
	
	!EventConstructor?process.env.NODE_ENV!=='production'?invariant(false,'SimpleEventPlugin: Unhandled event type, `%s`.',topLevelType):_prodInvariant('86',topLevelType):void 0;
	var event=EventConstructor.getPooled(dispatchConfig,targetInst,nativeEvent,nativeEventTarget);
	EventPropagators.accumulateTwoPhaseDispatches(event);
	return event;
	},
	
	didPutListener:function didPutListener(inst,registrationName,listener){
	
	
	
	
	
	if(registrationName==='onClick'&&!isInteractive(inst._tag)){
	var key=getDictionaryKey(inst);
	var node=ReactDOMComponentTree.getNodeFromInstance(inst);
	if(!onClickListeners[key]){
	onClickListeners[key]=EventListener.listen(node,'click',emptyFunction);
	}
	}
	},
	
	willDeleteListener:function willDeleteListener(inst,registrationName){
	if(registrationName==='onClick'&&!isInteractive(inst._tag)){
	var key=getDictionaryKey(inst);
	onClickListeners[key].remove();
	delete onClickListeners[key];
	}
	}};
	
	
	
	module.exports=SimpleEventPlugin;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var SyntheticEvent=__webpack_require__(53);
	
	
	
	
	
	
	var AnimationEventInterface={
	animationName:null,
	elapsedTime:null,
	pseudoElement:null};
	
	
	
	
	
	
	
	
	function SyntheticAnimationEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){
	return SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);
	}
	
	SyntheticEvent.augmentClass(SyntheticAnimationEvent,AnimationEventInterface);
	
	module.exports=SyntheticAnimationEvent;

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var SyntheticEvent=__webpack_require__(53);
	
	
	
	
	
	var ClipboardEventInterface={
	clipboardData:function clipboardData(event){
	return'clipboardData'in event?event.clipboardData:window.clipboardData;
	}};
	
	
	
	
	
	
	
	
	function SyntheticClipboardEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){
	return SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);
	}
	
	SyntheticEvent.augmentClass(SyntheticClipboardEvent,ClipboardEventInterface);
	
	module.exports=SyntheticClipboardEvent;

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var SyntheticUIEvent=__webpack_require__(75);
	
	
	
	
	
	var FocusEventInterface={
	relatedTarget:null};
	
	
	
	
	
	
	
	
	function SyntheticFocusEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){
	return SyntheticUIEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);
	}
	
	SyntheticUIEvent.augmentClass(SyntheticFocusEvent,FocusEventInterface);
	
	module.exports=SyntheticFocusEvent;

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var SyntheticUIEvent=__webpack_require__(75);
	
	var getEventCharCode=__webpack_require__(160);
	var getEventKey=__webpack_require__(161);
	var getEventModifierState=__webpack_require__(77);
	
	
	
	
	
	var KeyboardEventInterface={
	key:getEventKey,
	location:null,
	ctrlKey:null,
	shiftKey:null,
	altKey:null,
	metaKey:null,
	repeat:null,
	locale:null,
	getModifierState:getEventModifierState,
	
	charCode:function charCode(event){
	
	
	
	
	
	if(event.type==='keypress'){
	return getEventCharCode(event);
	}
	return 0;
	},
	keyCode:function keyCode(event){
	
	
	
	
	
	
	
	if(event.type==='keydown'||event.type==='keyup'){
	return event.keyCode;
	}
	return 0;
	},
	which:function which(event){
	
	
	if(event.type==='keypress'){
	return getEventCharCode(event);
	}
	if(event.type==='keydown'||event.type==='keyup'){
	return event.keyCode;
	}
	return 0;
	}};
	
	
	
	
	
	
	
	
	function SyntheticKeyboardEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){
	return SyntheticUIEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);
	}
	
	SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent,KeyboardEventInterface);
	
	module.exports=SyntheticKeyboardEvent;

/***/ },
/* 160 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	
	
	
	
	
	
	
	function getEventCharCode(nativeEvent){
	var charCode;
	var keyCode=nativeEvent.keyCode;
	
	if('charCode'in nativeEvent){
	charCode=nativeEvent.charCode;
	
	
	if(charCode===0&&keyCode===13){
	charCode=13;
	}
	}else{
	
	charCode=keyCode;
	}
	
	
	
	if(charCode>=32||charCode===13){
	return charCode;
	}
	
	return 0;
	}
	
	module.exports=getEventCharCode;

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var getEventCharCode=__webpack_require__(160);
	
	
	
	
	
	var normalizeKey={
	'Esc':'Escape',
	'Spacebar':' ',
	'Left':'ArrowLeft',
	'Up':'ArrowUp',
	'Right':'ArrowRight',
	'Down':'ArrowDown',
	'Del':'Delete',
	'Win':'OS',
	'Menu':'ContextMenu',
	'Apps':'ContextMenu',
	'Scroll':'ScrollLock',
	'MozPrintableKey':'Unidentified'};
	
	
	
	
	
	
	
	var translateToKey={
	8:'Backspace',
	9:'Tab',
	12:'Clear',
	13:'Enter',
	16:'Shift',
	17:'Control',
	18:'Alt',
	19:'Pause',
	20:'CapsLock',
	27:'Escape',
	32:' ',
	33:'PageUp',
	34:'PageDown',
	35:'End',
	36:'Home',
	37:'ArrowLeft',
	38:'ArrowUp',
	39:'ArrowRight',
	40:'ArrowDown',
	45:'Insert',
	46:'Delete',
	112:'F1',113:'F2',114:'F3',115:'F4',116:'F5',117:'F6',
	118:'F7',119:'F8',120:'F9',121:'F10',122:'F11',123:'F12',
	144:'NumLock',
	145:'ScrollLock',
	224:'Meta'};
	
	
	
	
	
	
	function getEventKey(nativeEvent){
	if(nativeEvent.key){
	
	
	
	
	
	var key=normalizeKey[nativeEvent.key]||nativeEvent.key;
	if(key!=='Unidentified'){
	return key;
	}
	}
	
	
	if(nativeEvent.type==='keypress'){
	var charCode=getEventCharCode(nativeEvent);
	
	
	
	return charCode===13?'Enter':String.fromCharCode(charCode);
	}
	if(nativeEvent.type==='keydown'||nativeEvent.type==='keyup'){
	
	
	return translateToKey[nativeEvent.keyCode]||'Unidentified';
	}
	return'';
	}
	
	module.exports=getEventKey;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var SyntheticMouseEvent=__webpack_require__(74);
	
	
	
	
	
	var DragEventInterface={
	dataTransfer:null};
	
	
	
	
	
	
	
	
	function SyntheticDragEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){
	return SyntheticMouseEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);
	}
	
	SyntheticMouseEvent.augmentClass(SyntheticDragEvent,DragEventInterface);
	
	module.exports=SyntheticDragEvent;

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var SyntheticUIEvent=__webpack_require__(75);
	
	var getEventModifierState=__webpack_require__(77);
	
	
	
	
	
	var TouchEventInterface={
	touches:null,
	targetTouches:null,
	changedTouches:null,
	altKey:null,
	metaKey:null,
	ctrlKey:null,
	shiftKey:null,
	getModifierState:getEventModifierState};
	
	
	
	
	
	
	
	
	function SyntheticTouchEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){
	return SyntheticUIEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);
	}
	
	SyntheticUIEvent.augmentClass(SyntheticTouchEvent,TouchEventInterface);
	
	module.exports=SyntheticTouchEvent;

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var SyntheticEvent=__webpack_require__(53);
	
	
	
	
	
	
	var TransitionEventInterface={
	propertyName:null,
	elapsedTime:null,
	pseudoElement:null};
	
	
	
	
	
	
	
	
	function SyntheticTransitionEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){
	return SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);
	}
	
	SyntheticEvent.augmentClass(SyntheticTransitionEvent,TransitionEventInterface);
	
	module.exports=SyntheticTransitionEvent;

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var SyntheticMouseEvent=__webpack_require__(74);
	
	
	
	
	
	var WheelEventInterface={
	deltaX:function deltaX(event){
	return'deltaX'in event?event.deltaX:
	
	'wheelDeltaX'in event?-event.wheelDeltaX:0;
	},
	deltaY:function deltaY(event){
	return'deltaY'in event?event.deltaY:
	
	'wheelDeltaY'in event?-event.wheelDeltaY:
	
	'wheelDelta'in event?-event.wheelDelta:0;
	},
	deltaZ:null,
	
	
	
	
	
	deltaMode:null};
	
	
	
	
	
	
	
	
	function SyntheticWheelEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){
	return SyntheticMouseEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);
	}
	
	SyntheticMouseEvent.augmentClass(SyntheticWheelEvent,WheelEventInterface);
	
	module.exports=SyntheticWheelEvent;

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(35);
	
	var DOMLazyTree=__webpack_require__(81);
	var DOMProperty=__webpack_require__(36);
	var React=__webpack_require__(2);
	var ReactBrowserEventEmitter=__webpack_require__(105);
	var ReactCurrentOwner=__webpack_require__(10);
	var ReactDOMComponentTree=__webpack_require__(34);
	var ReactDOMContainerInfo=__webpack_require__(167);
	var ReactDOMFeatureFlags=__webpack_require__(168);
	var ReactFeatureFlags=__webpack_require__(58);
	var ReactInstanceMap=__webpack_require__(116);
	var ReactInstrumentation=__webpack_require__(62);
	var ReactMarkupChecksum=__webpack_require__(169);
	var ReactReconciler=__webpack_require__(59);
	var ReactUpdateQueue=__webpack_require__(135);
	var ReactUpdates=__webpack_require__(56);
	
	var emptyObject=__webpack_require__(20);
	var instantiateReactComponent=__webpack_require__(118);
	var invariant=__webpack_require__(8);
	var setInnerHTML=__webpack_require__(83);
	var shouldUpdateReactComponent=__webpack_require__(124);
	var warning=__webpack_require__(11);
	
	var ATTR_NAME=DOMProperty.ID_ATTRIBUTE_NAME;
	var ROOT_ATTR_NAME=DOMProperty.ROOT_ATTRIBUTE_NAME;
	
	var ELEMENT_NODE_TYPE=1;
	var DOC_NODE_TYPE=9;
	var DOCUMENT_FRAGMENT_NODE_TYPE=11;
	
	var instancesByReactRootID={};
	
	
	
	
	
	
	
	function firstDifferenceIndex(string1,string2){
	var minLen=Math.min(string1.length,string2.length);
	for(var i=0;i<minLen;i++){
	if(string1.charAt(i)!==string2.charAt(i)){
	return i;
	}
	}
	return string1.length===string2.length?-1:minLen;
	}
	
	
	
	
	
	
	function getReactRootElementInContainer(container){
	if(!container){
	return null;
	}
	
	if(container.nodeType===DOC_NODE_TYPE){
	return container.documentElement;
	}else{
	return container.firstChild;
	}
	}
	
	function internalGetID(node){
	
	
	
	return node.getAttribute&&node.getAttribute(ATTR_NAME)||'';
	}
	
	
	
	
	
	
	
	
	
	function mountComponentIntoNode(wrapperInstance,container,transaction,shouldReuseMarkup,context){
	var markerName;
	if(ReactFeatureFlags.logTopLevelRenders){
	var wrappedElement=wrapperInstance._currentElement.props.child;
	var type=wrappedElement.type;
	markerName='React mount: '+(typeof type==='string'?type:type.displayName||type.name);
	console.time(markerName);
	}
	
	var markup=ReactReconciler.mountComponent(wrapperInstance,transaction,null,ReactDOMContainerInfo(wrapperInstance,container),context,0);
	
	
	if(markerName){
	console.timeEnd(markerName);
	}
	
	wrapperInstance._renderedComponent._topLevelWrapper=wrapperInstance;
	ReactMount._mountImageIntoNode(markup,container,wrapperInstance,shouldReuseMarkup,transaction);
	}
	
	
	
	
	
	
	
	
	function batchedMountComponentIntoNode(componentInstance,container,shouldReuseMarkup,context){
	var transaction=ReactUpdates.ReactReconcileTransaction.getPooled(
	
	!shouldReuseMarkup&&ReactDOMFeatureFlags.useCreateElement);
	transaction.perform(mountComponentIntoNode,null,componentInstance,container,transaction,shouldReuseMarkup,context);
	ReactUpdates.ReactReconcileTransaction.release(transaction);
	}
	
	
	
	
	
	
	
	
	
	
	function unmountComponentFromNode(instance,container,safely){
	if(process.env.NODE_ENV!=='production'){
	ReactInstrumentation.debugTool.onBeginFlush();
	}
	ReactReconciler.unmountComponent(instance,safely);
	if(process.env.NODE_ENV!=='production'){
	ReactInstrumentation.debugTool.onEndFlush();
	}
	
	if(container.nodeType===DOC_NODE_TYPE){
	container=container.documentElement;
	}
	
	
	while(container.lastChild){
	container.removeChild(container.lastChild);
	}
	}
	
	
	
	
	
	
	
	
	
	
	
	function hasNonRootReactChild(container){
	var rootEl=getReactRootElementInContainer(container);
	if(rootEl){
	var inst=ReactDOMComponentTree.getInstanceFromNode(rootEl);
	return!!(inst&&inst._hostParent);
	}
	}
	
	
	
	
	
	
	
	
	
	function nodeIsRenderedByOtherInstance(container){
	var rootEl=getReactRootElementInContainer(container);
	return!!(rootEl&&isReactNode(rootEl)&&!ReactDOMComponentTree.getInstanceFromNode(rootEl));
	}
	
	
	
	
	
	
	
	
	function isValidContainer(node){
	return!!(node&&(node.nodeType===ELEMENT_NODE_TYPE||node.nodeType===DOC_NODE_TYPE||node.nodeType===DOCUMENT_FRAGMENT_NODE_TYPE));
	}
	
	
	
	
	
	
	
	
	function isReactNode(node){
	return isValidContainer(node)&&(node.hasAttribute(ROOT_ATTR_NAME)||node.hasAttribute(ATTR_NAME));
	}
	
	function getHostRootInstanceInContainer(container){
	var rootEl=getReactRootElementInContainer(container);
	var prevHostInstance=rootEl&&ReactDOMComponentTree.getInstanceFromNode(rootEl);
	return prevHostInstance&&!prevHostInstance._hostParent?prevHostInstance:null;
	}
	
	function getTopLevelWrapperInContainer(container){
	var root=getHostRootInstanceInContainer(container);
	return root?root._hostContainerInfo._topLevelWrapper:null;
	}
	
	
	
	
	
	
	var topLevelRootCounter=1;
	var TopLevelWrapper=function TopLevelWrapper(){
	this.rootID=topLevelRootCounter++;
	};
	TopLevelWrapper.prototype.isReactComponent={};
	if(process.env.NODE_ENV!=='production'){
	TopLevelWrapper.displayName='TopLevelWrapper';
	}
	TopLevelWrapper.prototype.render=function(){
	return this.props.child;
	};
	TopLevelWrapper.isReactTopLevelWrapper=true;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var ReactMount={
	
	TopLevelWrapper:TopLevelWrapper,
	
	
	
	
	_instancesByReactRootID:instancesByReactRootID,
	
	
	
	
	
	
	
	
	
	scrollMonitor:function scrollMonitor(container,renderCallback){
	renderCallback();
	},
	
	
	
	
	
	
	
	
	_updateRootComponent:function _updateRootComponent(prevComponent,nextElement,nextContext,container,callback){
	ReactMount.scrollMonitor(container,function(){
	ReactUpdateQueue.enqueueElementInternal(prevComponent,nextElement,nextContext);
	if(callback){
	ReactUpdateQueue.enqueueCallbackInternal(prevComponent,callback);
	}
	});
	
	return prevComponent;
	},
	
	
	
	
	
	
	
	
	
	_renderNewRootComponent:function _renderNewRootComponent(nextElement,container,shouldReuseMarkup,context){
	
	
	
	process.env.NODE_ENV!=='production'?warning(ReactCurrentOwner.current==null,'_renderNewRootComponent(): Render methods should be a pure function '+'of props and state; triggering nested component updates from '+'render is not allowed. If necessary, trigger nested updates in '+'componentDidUpdate. Check the render method of %s.',ReactCurrentOwner.current&&ReactCurrentOwner.current.getName()||'ReactCompositeComponent'):void 0;
	
	!isValidContainer(container)?process.env.NODE_ENV!=='production'?invariant(false,'_registerComponent(...): Target container is not a DOM element.'):_prodInvariant('37'):void 0;
	
	ReactBrowserEventEmitter.ensureScrollValueMonitoring();
	var componentInstance=instantiateReactComponent(nextElement,false);
	
	
	
	
	
	ReactUpdates.batchedUpdates(batchedMountComponentIntoNode,componentInstance,container,shouldReuseMarkup,context);
	
	var wrapperID=componentInstance._instance.rootID;
	instancesByReactRootID[wrapperID]=componentInstance;
	
	return componentInstance;
	},
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	renderSubtreeIntoContainer:function renderSubtreeIntoContainer(parentComponent,nextElement,container,callback){
	!(parentComponent!=null&&ReactInstanceMap.has(parentComponent))?process.env.NODE_ENV!=='production'?invariant(false,'parentComponent must be a valid React Component'):_prodInvariant('38'):void 0;
	return ReactMount._renderSubtreeIntoContainer(parentComponent,nextElement,container,callback);
	},
	
	_renderSubtreeIntoContainer:function _renderSubtreeIntoContainer(parentComponent,nextElement,container,callback){
	ReactUpdateQueue.validateCallback(callback,'ReactDOM.render');
	!React.isValidElement(nextElement)?process.env.NODE_ENV!=='production'?invariant(false,'ReactDOM.render(): Invalid component element.%s',typeof nextElement==='string'?' Instead of passing a string like \'div\', pass '+'React.createElement(\'div\') or <div />.':typeof nextElement==='function'?' Instead of passing a class like Foo, pass '+'React.createElement(Foo) or <Foo />.':
	
	nextElement!=null&&nextElement.props!==undefined?' This may be caused by unintentionally loading two independent '+'copies of React.':''):_prodInvariant('39',typeof nextElement==='string'?' Instead of passing a string like \'div\', pass '+'React.createElement(\'div\') or <div />.':typeof nextElement==='function'?' Instead of passing a class like Foo, pass '+'React.createElement(Foo) or <Foo />.':nextElement!=null&&nextElement.props!==undefined?' This may be caused by unintentionally loading two independent '+'copies of React.':''):void 0;
	
	process.env.NODE_ENV!=='production'?warning(!container||!container.tagName||container.tagName.toUpperCase()!=='BODY','render(): Rendering components directly into document.body is '+'discouraged, since its children are often manipulated by third-party '+'scripts and browser extensions. This may lead to subtle '+'reconciliation issues. Try rendering into a container element created '+'for your app.'):void 0;
	
	var nextWrappedElement=React.createElement(TopLevelWrapper,{child:nextElement});
	
	var nextContext;
	if(parentComponent){
	var parentInst=ReactInstanceMap.get(parentComponent);
	nextContext=parentInst._processChildContext(parentInst._context);
	}else{
	nextContext=emptyObject;
	}
	
	var prevComponent=getTopLevelWrapperInContainer(container);
	
	if(prevComponent){
	var prevWrappedElement=prevComponent._currentElement;
	var prevElement=prevWrappedElement.props.child;
	if(shouldUpdateReactComponent(prevElement,nextElement)){
	var publicInst=prevComponent._renderedComponent.getPublicInstance();
	var updatedCallback=callback&&function(){
	callback.call(publicInst);
	};
	ReactMount._updateRootComponent(prevComponent,nextWrappedElement,nextContext,container,updatedCallback);
	return publicInst;
	}else{
	ReactMount.unmountComponentAtNode(container);
	}
	}
	
	var reactRootElement=getReactRootElementInContainer(container);
	var containerHasReactMarkup=reactRootElement&&!!internalGetID(reactRootElement);
	var containerHasNonRootReactChild=hasNonRootReactChild(container);
	
	if(process.env.NODE_ENV!=='production'){
	process.env.NODE_ENV!=='production'?warning(!containerHasNonRootReactChild,'render(...): Replacing React-rendered children with a new root '+'component. If you intended to update the children of this node, '+'you should instead have the existing children update their state '+'and render the new components instead of calling ReactDOM.render.'):void 0;
	
	if(!containerHasReactMarkup||reactRootElement.nextSibling){
	var rootElementSibling=reactRootElement;
	while(rootElementSibling){
	if(internalGetID(rootElementSibling)){
	process.env.NODE_ENV!=='production'?warning(false,'render(): Target node has markup rendered by React, but there '+'are unrelated nodes as well. This is most commonly caused by '+'white-space inserted around server-rendered markup.'):void 0;
	break;
	}
	rootElementSibling=rootElementSibling.nextSibling;
	}
	}
	}
	
	var shouldReuseMarkup=containerHasReactMarkup&&!prevComponent&&!containerHasNonRootReactChild;
	var component=ReactMount._renderNewRootComponent(nextWrappedElement,container,shouldReuseMarkup,nextContext)._renderedComponent.getPublicInstance();
	if(callback){
	callback.call(component);
	}
	return component;
	},
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	render:function render(nextElement,container,callback){
	return ReactMount._renderSubtreeIntoContainer(null,nextElement,container,callback);
	},
	
	
	
	
	
	
	
	
	
	unmountComponentAtNode:function unmountComponentAtNode(container){
	
	
	
	
	process.env.NODE_ENV!=='production'?warning(ReactCurrentOwner.current==null,'unmountComponentAtNode(): Render methods should be a pure function '+'of props and state; triggering nested component updates from render '+'is not allowed. If necessary, trigger nested updates in '+'componentDidUpdate. Check the render method of %s.',ReactCurrentOwner.current&&ReactCurrentOwner.current.getName()||'ReactCompositeComponent'):void 0;
	
	!isValidContainer(container)?process.env.NODE_ENV!=='production'?invariant(false,'unmountComponentAtNode(...): Target container is not a DOM element.'):_prodInvariant('40'):void 0;
	
	if(process.env.NODE_ENV!=='production'){
	process.env.NODE_ENV!=='production'?warning(!nodeIsRenderedByOtherInstance(container),'unmountComponentAtNode(): The node you\'re attempting to unmount '+'was rendered by another copy of React.'):void 0;
	}
	
	var prevComponent=getTopLevelWrapperInContainer(container);
	if(!prevComponent){
	
	
	var containerHasNonRootReactChild=hasNonRootReactChild(container);
	
	
	var isContainerReactRoot=container.nodeType===1&&container.hasAttribute(ROOT_ATTR_NAME);
	
	if(process.env.NODE_ENV!=='production'){
	process.env.NODE_ENV!=='production'?warning(!containerHasNonRootReactChild,'unmountComponentAtNode(): The node you\'re attempting to unmount '+'was rendered by React and is not a top-level container. %s',isContainerReactRoot?'You may have accidentally passed in a React root node instead '+'of its container.':'Instead, have the parent component update its state and '+'rerender in order to remove this component.'):void 0;
	}
	
	return false;
	}
	delete instancesByReactRootID[prevComponent._instance.rootID];
	ReactUpdates.batchedUpdates(unmountComponentFromNode,prevComponent,container,false);
	return true;
	},
	
	_mountImageIntoNode:function _mountImageIntoNode(markup,container,instance,shouldReuseMarkup,transaction){
	!isValidContainer(container)?process.env.NODE_ENV!=='production'?invariant(false,'mountComponentIntoNode(...): Target container is not valid.'):_prodInvariant('41'):void 0;
	
	if(shouldReuseMarkup){
	var rootElement=getReactRootElementInContainer(container);
	if(ReactMarkupChecksum.canReuseMarkup(markup,rootElement)){
	ReactDOMComponentTree.precacheNode(instance,rootElement);
	return;
	}else{
	var checksum=rootElement.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
	rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
	
	var rootMarkup=rootElement.outerHTML;
	rootElement.setAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME,checksum);
	
	var normalizedMarkup=markup;
	if(process.env.NODE_ENV!=='production'){
	
	
	
	
	var normalizer;
	if(container.nodeType===ELEMENT_NODE_TYPE){
	normalizer=document.createElement('div');
	normalizer.innerHTML=markup;
	normalizedMarkup=normalizer.innerHTML;
	}else{
	normalizer=document.createElement('iframe');
	document.body.appendChild(normalizer);
	normalizer.contentDocument.write(markup);
	normalizedMarkup=normalizer.contentDocument.documentElement.outerHTML;
	document.body.removeChild(normalizer);
	}
	}
	
	var diffIndex=firstDifferenceIndex(normalizedMarkup,rootMarkup);
	var difference=' (client) '+normalizedMarkup.substring(diffIndex-20,diffIndex+20)+'\n (server) '+rootMarkup.substring(diffIndex-20,diffIndex+20);
	
	!(container.nodeType!==DOC_NODE_TYPE)?process.env.NODE_ENV!=='production'?invariant(false,'You\'re trying to render a component to the document using server rendering but the checksum was invalid. This usually means you rendered a different component type or props on the client from the one on the server, or your render() methods are impure. React cannot handle this case due to cross-browser quirks by rendering at the document root. You should look for environment dependent code in your components and ensure the props are the same client and server side:\n%s',difference):_prodInvariant('42',difference):void 0;
	
	if(process.env.NODE_ENV!=='production'){
	process.env.NODE_ENV!=='production'?warning(false,'React attempted to reuse markup in a container but the '+'checksum was invalid. This generally means that you are '+'using server rendering and the markup generated on the '+'server was not what the client was expecting. React injected '+'new markup to compensate which works but you have lost many '+'of the benefits of server rendering. Instead, figure out '+'why the markup being generated is different on the client '+'or server:\n%s',difference):void 0;
	}
	}
	}
	
	!(container.nodeType!==DOC_NODE_TYPE)?process.env.NODE_ENV!=='production'?invariant(false,'You\'re trying to render a component to the document but you didn\'t use server rendering. We can\'t do this without using server rendering due to cross-browser quirks. See ReactDOMServer.renderToString() for server rendering.'):_prodInvariant('43'):void 0;
	
	if(transaction.useCreateElement){
	while(container.lastChild){
	container.removeChild(container.lastChild);
	}
	DOMLazyTree.insertTreeBefore(container,markup,null);
	}else{
	setInnerHTML(container,markup);
	ReactDOMComponentTree.precacheNode(instance,container.firstChild);
	}
	
	if(process.env.NODE_ENV!=='production'){
	var hostNode=ReactDOMComponentTree.getInstanceFromNode(container.firstChild);
	if(hostNode._debugID!==0){
	ReactInstrumentation.debugTool.onHostOperation({
	instanceID:hostNode._debugID,
	type:'mount',
	payload:markup.toString()});
	
	}
	}
	}};
	
	
	module.exports=ReactMount;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var validateDOMNesting=__webpack_require__(136);
	
	var DOC_NODE_TYPE=9;
	
	function ReactDOMContainerInfo(topLevelWrapper,node){
	var info={
	_topLevelWrapper:topLevelWrapper,
	_idCounter:1,
	_ownerDocument:node?node.nodeType===DOC_NODE_TYPE?node:node.ownerDocument:null,
	_node:node,
	_tag:node?node.nodeName.toLowerCase():null,
	_namespaceURI:node?node.namespaceURI:null};
	
	if(process.env.NODE_ENV!=='production'){
	info._ancestorInfo=node?validateDOMNesting.updatedAncestorInfo(null,info._tag,null):null;
	}
	return info;
	}
	
	module.exports=ReactDOMContainerInfo;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 168 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ReactDOMFeatureFlags={
	useCreateElement:true,
	useFiber:false};
	
	
	module.exports=ReactDOMFeatureFlags;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var adler32=__webpack_require__(170);
	
	var TAG_END=/\/?>/;
	var COMMENT_START=/^<\!\-\-/;
	
	var ReactMarkupChecksum={
	CHECKSUM_ATTR_NAME:'data-react-checksum',
	
	
	
	
	
	addChecksumToMarkup:function addChecksumToMarkup(markup){
	var checksum=adler32(markup);
	
	
	if(COMMENT_START.test(markup)){
	return markup;
	}else{
	return markup.replace(TAG_END,' '+ReactMarkupChecksum.CHECKSUM_ATTR_NAME+'="'+checksum+'"$&');
	}
	},
	
	
	
	
	
	
	canReuseMarkup:function canReuseMarkup(markup,element){
	var existingChecksum=element.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
	existingChecksum=existingChecksum&&parseInt(existingChecksum,10);
	var markupChecksum=adler32(markup);
	return markupChecksum===existingChecksum;
	}};
	
	
	module.exports=ReactMarkupChecksum;

/***/ },
/* 170 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var MOD=65521;
	
	
	
	
	
	
	function adler32(data){
	var a=1;
	var b=0;
	var i=0;
	var l=data.length;
	var m=l&~0x3;
	while(i<m){
	var n=Math.min(i+4096,m);
	for(;i<n;i+=4){
	b+=(a+=data.charCodeAt(i))+(a+=data.charCodeAt(i+1))+(a+=data.charCodeAt(i+2))+(a+=data.charCodeAt(i+3));
	}
	a%=MOD;
	b%=MOD;
	}
	for(;i<l;i++){
	b+=a+=data.charCodeAt(i);
	}
	a%=MOD;
	b%=MOD;
	return a|b<<16;
	}
	
	module.exports=adler32;

/***/ },
/* 171 */
/***/ function(module, exports) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	module.exports='15.4.1';

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var _prodInvariant=__webpack_require__(35);
	
	var ReactCurrentOwner=__webpack_require__(10);
	var ReactDOMComponentTree=__webpack_require__(34);
	var ReactInstanceMap=__webpack_require__(116);
	
	var getHostComponentFromComposite=__webpack_require__(173);
	var invariant=__webpack_require__(8);
	var warning=__webpack_require__(11);
	
	
	
	
	
	
	
	
	
	function findDOMNode(componentOrElement){
	if(process.env.NODE_ENV!=='production'){
	var owner=ReactCurrentOwner.current;
	if(owner!==null){
	process.env.NODE_ENV!=='production'?warning(owner._warnedAboutRefsInRender,'%s is accessing findDOMNode inside its render(). '+'render() should be a pure function of props and state. It should '+'never access something that requires stale data from the previous '+'render, such as refs. Move this logic to componentDidMount and '+'componentDidUpdate instead.',owner.getName()||'A component'):void 0;
	owner._warnedAboutRefsInRender=true;
	}
	}
	if(componentOrElement==null){
	return null;
	}
	if(componentOrElement.nodeType===1){
	return componentOrElement;
	}
	
	var inst=ReactInstanceMap.get(componentOrElement);
	if(inst){
	inst=getHostComponentFromComposite(inst);
	return inst?ReactDOMComponentTree.getNodeFromInstance(inst):null;
	}
	
	if(typeof componentOrElement.render==='function'){
	 true?process.env.NODE_ENV!=='production'?invariant(false,'findDOMNode was called on an unmounted component.'):_prodInvariant('44'):void 0;
	}else{
	 true?process.env.NODE_ENV!=='production'?invariant(false,'Element appears to be neither ReactComponent nor DOMNode (keys: %s)',Object.keys(componentOrElement)):_prodInvariant('45',Object.keys(componentOrElement)):void 0;
	}
	}
	
	module.exports=findDOMNode;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ReactNodeTypes=__webpack_require__(120);
	
	function getHostComponentFromComposite(inst){
	var type;
	
	while((type=inst._renderedNodeType)===ReactNodeTypes.COMPOSITE){
	inst=inst._renderedComponent;
	}
	
	if(type===ReactNodeTypes.HOST){
	return inst._renderedComponent;
	}else if(type===ReactNodeTypes.EMPTY){
	return null;
	}
	}
	
	module.exports=getHostComponentFromComposite;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ReactMount=__webpack_require__(166);
	
	module.exports=ReactMount.renderSubtreeIntoContainer;

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var DOMProperty=__webpack_require__(36);
	var EventPluginRegistry=__webpack_require__(43);
	var ReactComponentTreeHook=__webpack_require__(26);
	
	var warning=__webpack_require__(11);
	
	if(process.env.NODE_ENV!=='production'){
	var reactProps={
	children:true,
	dangerouslySetInnerHTML:true,
	key:true,
	ref:true,
	
	autoFocus:true,
	defaultValue:true,
	valueLink:true,
	defaultChecked:true,
	checkedLink:true,
	innerHTML:true,
	suppressContentEditableWarning:true,
	onFocusIn:true,
	onFocusOut:true};
	
	var warnedProperties={};
	
	var validateProperty=function validateProperty(tagName,name,debugID){
	if(DOMProperty.properties.hasOwnProperty(name)||DOMProperty.isCustomAttribute(name)){
	return true;
	}
	if(reactProps.hasOwnProperty(name)&&reactProps[name]||warnedProperties.hasOwnProperty(name)&&warnedProperties[name]){
	return true;
	}
	if(EventPluginRegistry.registrationNameModules.hasOwnProperty(name)){
	return true;
	}
	warnedProperties[name]=true;
	var lowerCasedName=name.toLowerCase();
	
	
	var standardName=DOMProperty.isCustomAttribute(lowerCasedName)?lowerCasedName:DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName)?DOMProperty.getPossibleStandardName[lowerCasedName]:null;
	
	var registrationName=EventPluginRegistry.possibleRegistrationNames.hasOwnProperty(lowerCasedName)?EventPluginRegistry.possibleRegistrationNames[lowerCasedName]:null;
	
	if(standardName!=null){
	process.env.NODE_ENV!=='production'?warning(false,'Unknown DOM property %s. Did you mean %s?%s',name,standardName,ReactComponentTreeHook.getStackAddendumByID(debugID)):void 0;
	return true;
	}else if(registrationName!=null){
	process.env.NODE_ENV!=='production'?warning(false,'Unknown event handler property %s. Did you mean `%s`?%s',name,registrationName,ReactComponentTreeHook.getStackAddendumByID(debugID)):void 0;
	return true;
	}else{
	
	
	
	
	return false;
	}
	};
	}
	
	var warnUnknownProperties=function warnUnknownProperties(debugID,element){
	var unknownProps=[];
	for(var key in element.props){
	var isValid=validateProperty(element.type,key,debugID);
	if(!isValid){
	unknownProps.push(key);
	}
	}
	
	var unknownPropString=unknownProps.map(function(prop){
	return'`'+prop+'`';
	}).join(', ');
	
	if(unknownProps.length===1){
	process.env.NODE_ENV!=='production'?warning(false,'Unknown prop %s on <%s> tag. Remove this prop from the element. '+'For details, see https://fb.me/react-unknown-prop%s',unknownPropString,element.type,ReactComponentTreeHook.getStackAddendumByID(debugID)):void 0;
	}else if(unknownProps.length>1){
	process.env.NODE_ENV!=='production'?warning(false,'Unknown props %s on <%s> tag. Remove these props from the element. '+'For details, see https://fb.me/react-unknown-prop%s',unknownPropString,element.type,ReactComponentTreeHook.getStackAddendumByID(debugID)):void 0;
	}
	};
	
	function handleElement(debugID,element){
	if(element==null||typeof element.type!=='string'){
	return;
	}
	if(element.type.indexOf('-')>=0||element.props.is){
	return;
	}
	warnUnknownProperties(debugID,element);
	}
	
	var ReactDOMUnknownPropertyHook={
	onBeforeMountComponent:function onBeforeMountComponent(debugID,element){
	handleElement(debugID,element);
	},
	onBeforeUpdateComponent:function onBeforeUpdateComponent(debugID,element){
	handleElement(debugID,element);
	}};
	
	
	module.exports=ReactDOMUnknownPropertyHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var ReactComponentTreeHook=__webpack_require__(26);
	
	var warning=__webpack_require__(11);
	
	var didWarnValueNull=false;
	
	function handleElement(debugID,element){
	if(element==null){
	return;
	}
	if(element.type!=='input'&&element.type!=='textarea'&&element.type!=='select'){
	return;
	}
	if(element.props!=null&&element.props.value===null&&!didWarnValueNull){
	process.env.NODE_ENV!=='production'?warning(false,'`value` prop on `%s` should not be null. '+'Consider using the empty string to clear the component or `undefined` '+'for uncontrolled components.%s',element.type,ReactComponentTreeHook.getStackAddendumByID(debugID)):void 0;
	
	didWarnValueNull=true;
	}
	}
	
	var ReactDOMNullInputValuePropHook={
	onBeforeMountComponent:function onBeforeMountComponent(debugID,element){
	handleElement(debugID,element);
	},
	onBeforeUpdateComponent:function onBeforeUpdateComponent(debugID,element){
	handleElement(debugID,element);
	}};
	
	
	module.exports=ReactDOMNullInputValuePropHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	
	'use strict';
	
	var DOMProperty=__webpack_require__(36);
	var ReactComponentTreeHook=__webpack_require__(26);
	
	var warning=__webpack_require__(11);
	
	var warnedProperties={};
	var rARIA=new RegExp('^(aria)-['+DOMProperty.ATTRIBUTE_NAME_CHAR+']*$');
	
	function validateProperty(tagName,name,debugID){
	if(warnedProperties.hasOwnProperty(name)&&warnedProperties[name]){
	return true;
	}
	
	if(rARIA.test(name)){
	var lowerCasedName=name.toLowerCase();
	var standardName=DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName)?DOMProperty.getPossibleStandardName[lowerCasedName]:null;
	
	
	
	if(standardName==null){
	warnedProperties[name]=true;
	return false;
	}
	
	if(name!==standardName){
	process.env.NODE_ENV!=='production'?warning(false,'Unknown ARIA attribute %s. Did you mean %s?%s',name,standardName,ReactComponentTreeHook.getStackAddendumByID(debugID)):void 0;
	warnedProperties[name]=true;
	return true;
	}
	}
	
	return true;
	}
	
	function warnInvalidARIAProps(debugID,element){
	var invalidProps=[];
	
	for(var key in element.props){
	var isValid=validateProperty(element.type,key,debugID);
	if(!isValid){
	invalidProps.push(key);
	}
	}
	
	var unknownPropString=invalidProps.map(function(prop){
	return'`'+prop+'`';
	}).join(', ');
	
	if(invalidProps.length===1){
	process.env.NODE_ENV!=='production'?warning(false,'Invalid aria prop %s on <%s> tag. '+'For details, see https://fb.me/invalid-aria-prop%s',unknownPropString,element.type,ReactComponentTreeHook.getStackAddendumByID(debugID)):void 0;
	}else if(invalidProps.length>1){
	process.env.NODE_ENV!=='production'?warning(false,'Invalid aria props %s on <%s> tag. '+'For details, see https://fb.me/invalid-aria-prop%s',unknownPropString,element.type,ReactComponentTreeHook.getStackAddendumByID(debugID)):void 0;
	}
	}
	
	function handleElement(debugID,element){
	if(element==null||typeof element.type!=='string'){
	return;
	}
	if(element.type.indexOf('-')>=0||element.props.is){
	return;
	}
	
	warnInvalidARIAProps(debugID,element);
	}
	
	var ReactDOMInvalidARIAHook={
	onBeforeMountComponent:function onBeforeMountComponent(debugID,element){
	if(process.env.NODE_ENV!=='production'){
	handleElement(debugID,element);
	}
	},
	onBeforeUpdateComponent:function onBeforeUpdateComponent(debugID,element){
	if(process.env.NODE_ENV!=='production'){
	handleElement(debugID,element);
	}
	}};
	
	
	module.exports=ReactDOMInvalidARIAHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule=true;
	exports.connect=exports.Provider=undefined;
	
	var _Provider=__webpack_require__(179);
	
	var _Provider2=_interopRequireDefault(_Provider);
	
	var _connect=__webpack_require__(182);
	
	var _connect2=_interopRequireDefault(_connect);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}
	
	exports.Provider=_Provider2["default"];
	exports.connect=_connect2["default"];

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	exports.__esModule=true;
	exports["default"]=undefined;
	
	var _react=__webpack_require__(1);
	
	var _storeShape=__webpack_require__(180);
	
	var _storeShape2=_interopRequireDefault(_storeShape);
	
	var _warning=__webpack_require__(181);
	
	var _warning2=_interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}
	
	function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
	
	function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof(call))==="object"||typeof call==="function")?call:self;}
	
	function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
	
	var didWarnAboutReceivingStore=false;
	function warnAboutReceivingStore(){
	if(didWarnAboutReceivingStore){
	return;
	}
	didWarnAboutReceivingStore=true;
	
	(0,_warning2["default"])('<Provider> does not support changing `store` on the fly. '+'It is most likely that you see this error because you updated to '+'Redux 2.x and React Redux 2.x which no longer hot reload reducers '+'automatically. See https://github.com/reactjs/react-redux/releases/'+'tag/v2.0.0 for the migration instructions.');
	}
	
	var Provider=function(_Component){
	_inherits(Provider,_Component);
	
	Provider.prototype.getChildContext=function getChildContext(){
	return{store:this.store};
	};
	
	function Provider(props,context){
	_classCallCheck(this,Provider);
	
	var _this=_possibleConstructorReturn(this,_Component.call(this,props,context));
	
	_this.store=props.store;
	return _this;
	}
	
	Provider.prototype.render=function render(){
	return _react.Children.only(this.props.children);
	};
	
	return Provider;
	}(_react.Component);
	
	exports["default"]=Provider;
	
	
	if(process.env.NODE_ENV!=='production'){
	Provider.prototype.componentWillReceiveProps=function(nextProps){
	var store=this.store;
	var nextStore=nextProps.store;
	
	
	if(store!==nextStore){
	warnAboutReceivingStore();
	}
	};
	}
	
	Provider.propTypes={
	store:_storeShape2["default"].isRequired,
	children:_react.PropTypes.element.isRequired};
	
	Provider.childContextTypes={
	store:_storeShape2["default"].isRequired};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule=true;
	
	var _react=__webpack_require__(1);
	
	exports["default"]=_react.PropTypes.shape({
	subscribe:_react.PropTypes.func.isRequired,
	dispatch:_react.PropTypes.func.isRequired,
	getState:_react.PropTypes.func.isRequired});

/***/ },
/* 181 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule=true;
	exports["default"]=warning;
	
	
	
	
	
	
	function warning(message){
	
	if(typeof console!=='undefined'&&typeof console.error==='function'){
	console.error(message);
	}
	
	try{
	
	
	
	throw new Error(message);
	
	}catch(e){}
	
	}

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	exports.__esModule=true;
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	exports["default"]=connect;
	
	var _react=__webpack_require__(1);
	
	var _storeShape=__webpack_require__(180);
	
	var _storeShape2=_interopRequireDefault(_storeShape);
	
	var _shallowEqual=__webpack_require__(183);
	
	var _shallowEqual2=_interopRequireDefault(_shallowEqual);
	
	var _wrapActionCreators=__webpack_require__(184);
	
	var _wrapActionCreators2=_interopRequireDefault(_wrapActionCreators);
	
	var _warning=__webpack_require__(181);
	
	var _warning2=_interopRequireDefault(_warning);
	
	var _isPlainObject=__webpack_require__(187);
	
	var _isPlainObject2=_interopRequireDefault(_isPlainObject);
	
	var _hoistNonReactStatics=__webpack_require__(206);
	
	var _hoistNonReactStatics2=_interopRequireDefault(_hoistNonReactStatics);
	
	var _invariant=__webpack_require__(207);
	
	var _invariant2=_interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}
	
	function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
	
	function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof(call))==="object"||typeof call==="function")?call:self;}
	
	function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
	
	var defaultMapStateToProps=function defaultMapStateToProps(state){
	return{};
	};
	var defaultMapDispatchToProps=function defaultMapDispatchToProps(dispatch){
	return{dispatch:dispatch};
	};
	var defaultMergeProps=function defaultMergeProps(stateProps,dispatchProps,parentProps){
	return _extends({},parentProps,stateProps,dispatchProps);
	};
	
	function getDisplayName(WrappedComponent){
	return WrappedComponent.displayName||WrappedComponent.name||'Component';
	}
	
	var errorObject={value:null};
	function tryCatch(fn,ctx){
	try{
	return fn.apply(ctx);
	}catch(e){
	errorObject.value=e;
	return errorObject;
	}
	}
	
	
	var nextVersion=0;
	
	function connect(mapStateToProps,mapDispatchToProps,mergeProps){
	var options=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};
	
	var shouldSubscribe=Boolean(mapStateToProps);
	var mapState=mapStateToProps||defaultMapStateToProps;
	
	var mapDispatch=void 0;
	if(typeof mapDispatchToProps==='function'){
	mapDispatch=mapDispatchToProps;
	}else if(!mapDispatchToProps){
	mapDispatch=defaultMapDispatchToProps;
	}else{
	mapDispatch=(0,_wrapActionCreators2["default"])(mapDispatchToProps);
	}
	
	var finalMergeProps=mergeProps||defaultMergeProps;
	var _options$pure=options.pure,
	pure=_options$pure===undefined?true:_options$pure,
	_options$withRef=options.withRef,
	withRef=_options$withRef===undefined?false:_options$withRef;
	
	var checkMergedEquals=pure&&finalMergeProps!==defaultMergeProps;
	
	
	var version=nextVersion++;
	
	return function wrapWithConnect(WrappedComponent){
	var connectDisplayName='Connect('+getDisplayName(WrappedComponent)+')';
	
	function checkStateShape(props,methodName){
	if(!(0,_isPlainObject2["default"])(props)){
	(0,_warning2["default"])(methodName+'() in '+connectDisplayName+' must return a plain object. '+('Instead received '+props+'.'));
	}
	}
	
	function computeMergedProps(stateProps,dispatchProps,parentProps){
	var mergedProps=finalMergeProps(stateProps,dispatchProps,parentProps);
	if(process.env.NODE_ENV!=='production'){
	checkStateShape(mergedProps,'mergeProps');
	}
	return mergedProps;
	}
	
	var Connect=function(_Component){
	_inherits(Connect,_Component);
	
	Connect.prototype.shouldComponentUpdate=function shouldComponentUpdate(){
	return!pure||this.haveOwnPropsChanged||this.hasStoreStateChanged;
	};
	
	function Connect(props,context){
	_classCallCheck(this,Connect);
	
	var _this=_possibleConstructorReturn(this,_Component.call(this,props,context));
	
	_this.version=version;
	_this.store=props.store||context.store;
	
	(0,_invariant2["default"])(_this.store,'Could not find "store" in either the context or '+('props of "'+connectDisplayName+'". ')+'Either wrap the root component in a <Provider>, '+('or explicitly pass "store" as a prop to "'+connectDisplayName+'".'));
	
	var storeState=_this.store.getState();
	_this.state={storeState:storeState};
	_this.clearCache();
	return _this;
	}
	
	Connect.prototype.computeStateProps=function computeStateProps(store,props){
	if(!this.finalMapStateToProps){
	return this.configureFinalMapState(store,props);
	}
	
	var state=store.getState();
	var stateProps=this.doStatePropsDependOnOwnProps?this.finalMapStateToProps(state,props):this.finalMapStateToProps(state);
	
	if(process.env.NODE_ENV!=='production'){
	checkStateShape(stateProps,'mapStateToProps');
	}
	return stateProps;
	};
	
	Connect.prototype.configureFinalMapState=function configureFinalMapState(store,props){
	var mappedState=mapState(store.getState(),props);
	var isFactory=typeof mappedState==='function';
	
	this.finalMapStateToProps=isFactory?mappedState:mapState;
	this.doStatePropsDependOnOwnProps=this.finalMapStateToProps.length!==1;
	
	if(isFactory){
	return this.computeStateProps(store,props);
	}
	
	if(process.env.NODE_ENV!=='production'){
	checkStateShape(mappedState,'mapStateToProps');
	}
	return mappedState;
	};
	
	Connect.prototype.computeDispatchProps=function computeDispatchProps(store,props){
	if(!this.finalMapDispatchToProps){
	return this.configureFinalMapDispatch(store,props);
	}
	
	var dispatch=store.dispatch;
	
	var dispatchProps=this.doDispatchPropsDependOnOwnProps?this.finalMapDispatchToProps(dispatch,props):this.finalMapDispatchToProps(dispatch);
	
	if(process.env.NODE_ENV!=='production'){
	checkStateShape(dispatchProps,'mapDispatchToProps');
	}
	return dispatchProps;
	};
	
	Connect.prototype.configureFinalMapDispatch=function configureFinalMapDispatch(store,props){
	var mappedDispatch=mapDispatch(store.dispatch,props);
	var isFactory=typeof mappedDispatch==='function';
	
	this.finalMapDispatchToProps=isFactory?mappedDispatch:mapDispatch;
	this.doDispatchPropsDependOnOwnProps=this.finalMapDispatchToProps.length!==1;
	
	if(isFactory){
	return this.computeDispatchProps(store,props);
	}
	
	if(process.env.NODE_ENV!=='production'){
	checkStateShape(mappedDispatch,'mapDispatchToProps');
	}
	return mappedDispatch;
	};
	
	Connect.prototype.updateStatePropsIfNeeded=function updateStatePropsIfNeeded(){
	var nextStateProps=this.computeStateProps(this.store,this.props);
	if(this.stateProps&&(0,_shallowEqual2["default"])(nextStateProps,this.stateProps)){
	return false;
	}
	
	this.stateProps=nextStateProps;
	return true;
	};
	
	Connect.prototype.updateDispatchPropsIfNeeded=function updateDispatchPropsIfNeeded(){
	var nextDispatchProps=this.computeDispatchProps(this.store,this.props);
	if(this.dispatchProps&&(0,_shallowEqual2["default"])(nextDispatchProps,this.dispatchProps)){
	return false;
	}
	
	this.dispatchProps=nextDispatchProps;
	return true;
	};
	
	Connect.prototype.updateMergedPropsIfNeeded=function updateMergedPropsIfNeeded(){
	var nextMergedProps=computeMergedProps(this.stateProps,this.dispatchProps,this.props);
	if(this.mergedProps&&checkMergedEquals&&(0,_shallowEqual2["default"])(nextMergedProps,this.mergedProps)){
	return false;
	}
	
	this.mergedProps=nextMergedProps;
	return true;
	};
	
	Connect.prototype.isSubscribed=function isSubscribed(){
	return typeof this.unsubscribe==='function';
	};
	
	Connect.prototype.trySubscribe=function trySubscribe(){
	if(shouldSubscribe&&!this.unsubscribe){
	this.unsubscribe=this.store.subscribe(this.handleChange.bind(this));
	this.handleChange();
	}
	};
	
	Connect.prototype.tryUnsubscribe=function tryUnsubscribe(){
	if(this.unsubscribe){
	this.unsubscribe();
	this.unsubscribe=null;
	}
	};
	
	Connect.prototype.componentDidMount=function componentDidMount(){
	this.trySubscribe();
	};
	
	Connect.prototype.componentWillReceiveProps=function componentWillReceiveProps(nextProps){
	if(!pure||!(0,_shallowEqual2["default"])(nextProps,this.props)){
	this.haveOwnPropsChanged=true;
	}
	};
	
	Connect.prototype.componentWillUnmount=function componentWillUnmount(){
	this.tryUnsubscribe();
	this.clearCache();
	};
	
	Connect.prototype.clearCache=function clearCache(){
	this.dispatchProps=null;
	this.stateProps=null;
	this.mergedProps=null;
	this.haveOwnPropsChanged=true;
	this.hasStoreStateChanged=true;
	this.haveStatePropsBeenPrecalculated=false;
	this.statePropsPrecalculationError=null;
	this.renderedElement=null;
	this.finalMapDispatchToProps=null;
	this.finalMapStateToProps=null;
	};
	
	Connect.prototype.handleChange=function handleChange(){
	if(!this.unsubscribe){
	return;
	}
	
	var storeState=this.store.getState();
	var prevStoreState=this.state.storeState;
	if(pure&&prevStoreState===storeState){
	return;
	}
	
	if(pure&&!this.doStatePropsDependOnOwnProps){
	var haveStatePropsChanged=tryCatch(this.updateStatePropsIfNeeded,this);
	if(!haveStatePropsChanged){
	return;
	}
	if(haveStatePropsChanged===errorObject){
	this.statePropsPrecalculationError=errorObject.value;
	}
	this.haveStatePropsBeenPrecalculated=true;
	}
	
	this.hasStoreStateChanged=true;
	this.setState({storeState:storeState});
	};
	
	Connect.prototype.getWrappedInstance=function getWrappedInstance(){
	(0,_invariant2["default"])(withRef,'To access the wrapped instance, you need to specify '+'{ withRef: true } as the fourth argument of the connect() call.');
	
	return this.refs.wrappedInstance;
	};
	
	Connect.prototype.render=function render(){
	var haveOwnPropsChanged=this.haveOwnPropsChanged,
	hasStoreStateChanged=this.hasStoreStateChanged,
	haveStatePropsBeenPrecalculated=this.haveStatePropsBeenPrecalculated,
	statePropsPrecalculationError=this.statePropsPrecalculationError,
	renderedElement=this.renderedElement;
	
	
	this.haveOwnPropsChanged=false;
	this.hasStoreStateChanged=false;
	this.haveStatePropsBeenPrecalculated=false;
	this.statePropsPrecalculationError=null;
	
	if(statePropsPrecalculationError){
	throw statePropsPrecalculationError;
	}
	
	var shouldUpdateStateProps=true;
	var shouldUpdateDispatchProps=true;
	if(pure&&renderedElement){
	shouldUpdateStateProps=hasStoreStateChanged||haveOwnPropsChanged&&this.doStatePropsDependOnOwnProps;
	shouldUpdateDispatchProps=haveOwnPropsChanged&&this.doDispatchPropsDependOnOwnProps;
	}
	
	var haveStatePropsChanged=false;
	var haveDispatchPropsChanged=false;
	if(haveStatePropsBeenPrecalculated){
	haveStatePropsChanged=true;
	}else if(shouldUpdateStateProps){
	haveStatePropsChanged=this.updateStatePropsIfNeeded();
	}
	if(shouldUpdateDispatchProps){
	haveDispatchPropsChanged=this.updateDispatchPropsIfNeeded();
	}
	
	var haveMergedPropsChanged=true;
	if(haveStatePropsChanged||haveDispatchPropsChanged||haveOwnPropsChanged){
	haveMergedPropsChanged=this.updateMergedPropsIfNeeded();
	}else{
	haveMergedPropsChanged=false;
	}
	
	if(!haveMergedPropsChanged&&renderedElement){
	return renderedElement;
	}
	
	if(withRef){
	this.renderedElement=(0,_react.createElement)(WrappedComponent,_extends({},this.mergedProps,{
	ref:'wrappedInstance'}));
	
	}else{
	this.renderedElement=(0,_react.createElement)(WrappedComponent,this.mergedProps);
	}
	
	return this.renderedElement;
	};
	
	return Connect;
	}(_react.Component);
	
	Connect.displayName=connectDisplayName;
	Connect.WrappedComponent=WrappedComponent;
	Connect.contextTypes={
	store:_storeShape2["default"]};
	
	Connect.propTypes={
	store:_storeShape2["default"]};
	
	
	if(process.env.NODE_ENV!=='production'){
	Connect.prototype.componentWillUpdate=function componentWillUpdate(){
	if(this.version===version){
	return;
	}
	
	
	this.version=version;
	this.trySubscribe();
	this.clearCache();
	};
	}
	
	return(0,_hoistNonReactStatics2["default"])(Connect,WrappedComponent);
	};
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 183 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule=true;
	exports["default"]=shallowEqual;
	function shallowEqual(objA,objB){
	if(objA===objB){
	return true;
	}
	
	var keysA=Object.keys(objA);
	var keysB=Object.keys(objB);
	
	if(keysA.length!==keysB.length){
	return false;
	}
	
	
	var hasOwn=Object.prototype.hasOwnProperty;
	for(var i=0;i<keysA.length;i++){
	if(!hasOwn.call(objB,keysA[i])||objA[keysA[i]]!==objB[keysA[i]]){
	return false;
	}
	}
	
	return true;
	}

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule=true;
	exports["default"]=wrapActionCreators;
	
	var _redux=__webpack_require__(185);
	
	function wrapActionCreators(actionCreators){
	return function(dispatch){
	return(0,_redux.bindActionCreators)(actionCreators,dispatch);
	};
	}

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	exports.compose=exports.applyMiddleware=exports.bindActionCreators=exports.combineReducers=exports.createStore=undefined;
	
	var _createStore=__webpack_require__(186);
	
	var _createStore2=_interopRequireDefault(_createStore);
	
	var _combineReducers=__webpack_require__(201);
	
	var _combineReducers2=_interopRequireDefault(_combineReducers);
	
	var _bindActionCreators=__webpack_require__(203);
	
	var _bindActionCreators2=_interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware=__webpack_require__(204);
	
	var _applyMiddleware2=_interopRequireDefault(_applyMiddleware);
	
	var _compose=__webpack_require__(205);
	
	var _compose2=_interopRequireDefault(_compose);
	
	var _warning=__webpack_require__(202);
	
	var _warning2=_interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}
	
	
	
	
	
	function isCrushed(){}
	
	if(process.env.NODE_ENV!=='production'&&typeof isCrushed.name==='string'&&isCrushed.name!=='isCrushed'){
	(0,_warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. '+'This means that you are running a slower development build of Redux. '+'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify '+'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) '+'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore=_createStore2['default'];
	exports.combineReducers=_combineReducers2['default'];
	exports.bindActionCreators=_bindActionCreators2['default'];
	exports.applyMiddleware=_applyMiddleware2['default'];
	exports.compose=_compose2['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	exports.__esModule=true;
	exports.ActionTypes=undefined;
	exports['default']=createStore;
	
	var _isPlainObject=__webpack_require__(187);
	
	var _isPlainObject2=_interopRequireDefault(_isPlainObject);
	
	var _symbolObservable=__webpack_require__(197);
	
	var _symbolObservable2=_interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}
	
	
	
	
	
	
	
	var ActionTypes=exports.ActionTypes={
	INIT:'@@redux/INIT'};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function createStore(reducer,preloadedState,enhancer){
	var _ref2;
	
	if(typeof preloadedState==='function'&&typeof enhancer==='undefined'){
	enhancer=preloadedState;
	preloadedState=undefined;
	}
	
	if(typeof enhancer!=='undefined'){
	if(typeof enhancer!=='function'){
	throw new Error('Expected the enhancer to be a function.');
	}
	
	return enhancer(createStore)(reducer,preloadedState);
	}
	
	if(typeof reducer!=='function'){
	throw new Error('Expected the reducer to be a function.');
	}
	
	var currentReducer=reducer;
	var currentState=preloadedState;
	var currentListeners=[];
	var nextListeners=currentListeners;
	var isDispatching=false;
	
	function ensureCanMutateNextListeners(){
	if(nextListeners===currentListeners){
	nextListeners=currentListeners.slice();
	}
	}
	
	
	
	
	
	
	function getState(){
	return currentState;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function subscribe(listener){
	if(typeof listener!=='function'){
	throw new Error('Expected listener to be a function.');
	}
	
	var isSubscribed=true;
	
	ensureCanMutateNextListeners();
	nextListeners.push(listener);
	
	return function unsubscribe(){
	if(!isSubscribed){
	return;
	}
	
	isSubscribed=false;
	
	ensureCanMutateNextListeners();
	var index=nextListeners.indexOf(listener);
	nextListeners.splice(index,1);
	};
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function dispatch(action){
	if(!(0,_isPlainObject2['default'])(action)){
	throw new Error('Actions must be plain objects. '+'Use custom middleware for async actions.');
	}
	
	if(typeof action.type==='undefined'){
	throw new Error('Actions may not have an undefined "type" property. '+'Have you misspelled a constant?');
	}
	
	if(isDispatching){
	throw new Error('Reducers may not dispatch actions.');
	}
	
	try{
	isDispatching=true;
	currentState=currentReducer(currentState,action);
	}finally{
	isDispatching=false;
	}
	
	var listeners=currentListeners=nextListeners;
	for(var i=0;i<listeners.length;i++){
	listeners[i]();
	}
	
	return action;
	}
	
	
	
	
	
	
	
	
	
	
	
	function replaceReducer(nextReducer){
	if(typeof nextReducer!=='function'){
	throw new Error('Expected the nextReducer to be a function.');
	}
	
	currentReducer=nextReducer;
	dispatch({type:ActionTypes.INIT});
	}
	
	
	
	
	
	
	
	function observable(){
	var _ref;
	
	var outerSubscribe=subscribe;
	return _ref={
	
	
	
	
	
	
	
	
	subscribe:function subscribe(observer){
	if((typeof observer==='undefined'?'undefined':_typeof(observer))!=='object'){
	throw new TypeError('Expected the observer to be an object.');
	}
	
	function observeState(){
	if(observer.next){
	observer.next(getState());
	}
	}
	
	observeState();
	var unsubscribe=outerSubscribe(observeState);
	return{unsubscribe:unsubscribe};
	}},
	_ref[_symbolObservable2['default']]=function(){
	return this;
	},_ref;
	}
	
	
	
	
	dispatch({type:ActionTypes.INIT});
	
	return _ref2={
	dispatch:dispatch,
	subscribe:subscribe,
	getState:getState,
	replaceReducer:replaceReducer},
	_ref2[_symbolObservable2['default']]=observable,_ref2;
	}

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseGetTag=__webpack_require__(188),
	getPrototype=__webpack_require__(194),
	isObjectLike=__webpack_require__(196);
	
	
	var objectTag='[object Object]';
	
	
	var funcProto=Function.prototype,
	objectProto=Object.prototype;
	
	
	var funcToString=funcProto.toString;
	
	
	var hasOwnProperty=objectProto.hasOwnProperty;
	
	
	var objectCtorString=funcToString.call(Object);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isPlainObject(value){
	if(!isObjectLike(value)||baseGetTag(value)!=objectTag){
	return false;
	}
	var proto=getPrototype(value);
	if(proto===null){
	return true;
	}
	var Ctor=hasOwnProperty.call(proto,'constructor')&&proto.constructor;
	return typeof Ctor=='function'&&Ctor instanceof Ctor&&
	funcToString.call(Ctor)==objectCtorString;
	}
	
	module.exports=isPlainObject;

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _Symbol=__webpack_require__(189),
	getRawTag=__webpack_require__(192),
	objectToString=__webpack_require__(193);
	
	
	var nullTag='[object Null]',
	undefinedTag='[object Undefined]';
	
	
	var symToStringTag=_Symbol?_Symbol.toStringTag:undefined;
	
	
	
	
	
	
	
	
	function baseGetTag(value){
	if(value==null){
	return value===undefined?undefinedTag:nullTag;
	}
	value=Object(value);
	return symToStringTag&&symToStringTag in value?
	getRawTag(value):
	objectToString(value);
	}
	
	module.exports=baseGetTag;

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var root=__webpack_require__(190);
	
	
	var _Symbol=root.Symbol;
	
	module.exports=_Symbol;

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};var freeGlobal=__webpack_require__(191);
	
	
	var freeSelf=(typeof self==='undefined'?'undefined':_typeof(self))=='object'&&self&&self.Object===Object&&self;
	
	
	var root=freeGlobal||freeSelf||Function('return this')();
	
	module.exports=root;

/***/ },
/* 191 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	var freeGlobal=(typeof global==='undefined'?'undefined':_typeof(global))=='object'&&global&&global.Object===Object&&global;
	
	module.exports=freeGlobal;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _Symbol=__webpack_require__(189);
	
	
	var objectProto=Object.prototype;
	
	
	var hasOwnProperty=objectProto.hasOwnProperty;
	
	
	
	
	
	
	var nativeObjectToString=objectProto.toString;
	
	
	var symToStringTag=_Symbol?_Symbol.toStringTag:undefined;
	
	
	
	
	
	
	
	
	function getRawTag(value){
	var isOwn=hasOwnProperty.call(value,symToStringTag),
	tag=value[symToStringTag];
	
	try{
	value[symToStringTag]=undefined;
	var unmasked=true;
	}catch(e){}
	
	var result=nativeObjectToString.call(value);
	if(unmasked){
	if(isOwn){
	value[symToStringTag]=tag;
	}else{
	delete value[symToStringTag];
	}
	}
	return result;
	}
	
	module.exports=getRawTag;

/***/ },
/* 193 */
/***/ function(module, exports) {

	"use strict";
	var objectProto=Object.prototype;
	
	
	
	
	
	
	var nativeObjectToString=objectProto.toString;
	
	
	
	
	
	
	
	
	function objectToString(value){
	return nativeObjectToString.call(value);
	}
	
	module.exports=objectToString;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var overArg=__webpack_require__(195);
	
	
	var getPrototype=overArg(Object.getPrototypeOf,Object);
	
	module.exports=getPrototype;

/***/ },
/* 195 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	function overArg(func,transform){
	return function(arg){
	return func(transform(arg));
	};
	}
	
	module.exports=overArg;

/***/ },
/* 196 */
/***/ function(module, exports) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isObjectLike(value){
	return value!=null&&(typeof value==='undefined'?'undefined':_typeof(value))=='object';
	}
	
	module.exports=isObjectLike;

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';module.exports=__webpack_require__(198);

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';
	
	Object.defineProperty(exports,"__esModule",{
	value:true});
	
	
	var _ponyfill=__webpack_require__(200);
	
	var _ponyfill2=_interopRequireDefault(_ponyfill);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}
	
	var root;
	
	
	if(typeof self!=='undefined'){
	root=self;
	}else if(typeof window!=='undefined'){
	root=window;
	}else if(typeof global!=='undefined'){
	root=global;
	}else if(true){
	root=module;
	}else{
	root=Function('return this')();
	}
	
	var result=(0,_ponyfill2['default'])(root);
	exports['default']=result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(199)(module)))

/***/ },
/* 199 */
/***/ function(module, exports) {

	"use strict";module.exports=function(module){
	if(!module.webpackPolyfill){
	module.deprecate=function(){};
	module.paths=[];
	
	module.children=[];
	module.webpackPolyfill=1;
	}
	return module;
	};

/***/ },
/* 200 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports,"__esModule",{
	value:true});
	
	exports['default']=symbolObservablePonyfill;
	function symbolObservablePonyfill(root){
	var result;
	var _Symbol=root.Symbol;
	
	if(typeof _Symbol==='function'){
	if(_Symbol.observable){
	result=_Symbol.observable;
	}else{
	result=_Symbol('observable');
	_Symbol.observable=result;
	}
	}else{
	result='@@observable';
	}
	
	return result;
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule=true;
	exports['default']=combineReducers;
	
	var _createStore=__webpack_require__(186);
	
	var _isPlainObject=__webpack_require__(187);
	
	var _isPlainObject2=_interopRequireDefault(_isPlainObject);
	
	var _warning=__webpack_require__(202);
	
	var _warning2=_interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}
	
	function getUndefinedStateErrorMessage(key,action){
	var actionType=action&&action.type;
	var actionName=actionType&&'"'+actionType.toString()+'"'||'an action';
	
	return'Given action '+actionName+', reducer "'+key+'" returned undefined. '+'To ignore an action, you must explicitly return the previous state.';
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState,reducers,action,unexpectedKeyCache){
	var reducerKeys=Object.keys(reducers);
	var argumentName=action&&action.type===_createStore.ActionTypes.INIT?'preloadedState argument passed to createStore':'previous state received by the reducer';
	
	if(reducerKeys.length===0){
	return'Store does not have a valid reducer. Make sure the argument passed '+'to combineReducers is an object whose values are reducers.';
	}
	
	if(!(0,_isPlainObject2['default'])(inputState)){
	return'The '+argumentName+' has unexpected type of "'+{}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following '+('keys: "'+reducerKeys.join('", "')+'"');
	}
	
	var unexpectedKeys=Object.keys(inputState).filter(function(key){
	return!reducers.hasOwnProperty(key)&&!unexpectedKeyCache[key];
	});
	
	unexpectedKeys.forEach(function(key){
	unexpectedKeyCache[key]=true;
	});
	
	if(unexpectedKeys.length>0){
	return'Unexpected '+(unexpectedKeys.length>1?'keys':'key')+' '+('"'+unexpectedKeys.join('", "')+'" found in '+argumentName+'. ')+'Expected to find one of the known reducer keys instead: '+('"'+reducerKeys.join('", "')+'". Unexpected keys will be ignored.');
	}
	}
	
	function assertReducerSanity(reducers){
	Object.keys(reducers).forEach(function(key){
	var reducer=reducers[key];
	var initialState=reducer(undefined,{type:_createStore.ActionTypes.INIT});
	
	if(typeof initialState==='undefined'){
	throw new Error('Reducer "'+key+'" returned undefined during initialization. '+'If the state passed to the reducer is undefined, you must '+'explicitly return the initial state. The initial state may '+'not be undefined.');
	}
	
	var type='@@redux/PROBE_UNKNOWN_ACTION_'+Math.random().toString(36).substring(7).split('').join('.');
	if(typeof reducer(undefined,{type:type})==='undefined'){
	throw new Error('Reducer "'+key+'" returned undefined when probed with a random type. '+('Don\'t try to handle '+_createStore.ActionTypes.INIT+' or other actions in "redux/*" ')+'namespace. They are considered private. Instead, you must return the '+'current state for any unknown actions, unless it is undefined, '+'in which case you must return the initial state, regardless of the '+'action type. The initial state may not be undefined.');
	}
	});
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function combineReducers(reducers){
	var reducerKeys=Object.keys(reducers);
	var finalReducers={};
	for(var i=0;i<reducerKeys.length;i++){
	var key=reducerKeys[i];
	
	if(process.env.NODE_ENV!=='production'){
	if(typeof reducers[key]==='undefined'){
	(0,_warning2['default'])('No reducer provided for key "'+key+'"');
	}
	}
	
	if(typeof reducers[key]==='function'){
	finalReducers[key]=reducers[key];
	}
	}
	var finalReducerKeys=Object.keys(finalReducers);
	
	if(process.env.NODE_ENV!=='production'){
	var unexpectedKeyCache={};
	}
	
	var sanityError;
	try{
	assertReducerSanity(finalReducers);
	}catch(e){
	sanityError=e;
	}
	
	return function combination(){
	var state=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];
	var action=arguments[1];
	
	if(sanityError){
	throw sanityError;
	}
	
	if(process.env.NODE_ENV!=='production'){
	var warningMessage=getUnexpectedStateShapeWarningMessage(state,finalReducers,action,unexpectedKeyCache);
	if(warningMessage){
	(0,_warning2['default'])(warningMessage);
	}
	}
	
	var hasChanged=false;
	var nextState={};
	for(var i=0;i<finalReducerKeys.length;i++){
	var key=finalReducerKeys[i];
	var reducer=finalReducers[key];
	var previousStateForKey=state[key];
	var nextStateForKey=reducer(previousStateForKey,action);
	if(typeof nextStateForKey==='undefined'){
	var errorMessage=getUndefinedStateErrorMessage(key,action);
	throw new Error(errorMessage);
	}
	nextState[key]=nextStateForKey;
	hasChanged=hasChanged||nextStateForKey!==previousStateForKey;
	}
	return hasChanged?nextState:state;
	};
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 202 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule=true;
	exports['default']=warning;
	
	
	
	
	
	
	function warning(message){
	
	if(typeof console!=='undefined'&&typeof console.error==='function'){
	console.error(message);
	}
	
	try{
	
	
	
	throw new Error(message);
	
	}catch(e){}
	
	}

/***/ },
/* 203 */
/***/ function(module, exports) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	exports.__esModule=true;
	exports['default']=bindActionCreators;
	function bindActionCreator(actionCreator,dispatch){
	return function(){
	return dispatch(actionCreator.apply(undefined,arguments));
	};
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function bindActionCreators(actionCreators,dispatch){
	if(typeof actionCreators==='function'){
	return bindActionCreator(actionCreators,dispatch);
	}
	
	if((typeof actionCreators==='undefined'?'undefined':_typeof(actionCreators))!=='object'||actionCreators===null){
	throw new Error('bindActionCreators expected an object or a function, instead received '+(actionCreators===null?'null':typeof actionCreators==='undefined'?'undefined':_typeof(actionCreators))+'. '+'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	}
	
	var keys=Object.keys(actionCreators);
	var boundActionCreators={};
	for(var i=0;i<keys.length;i++){
	var key=keys[i];
	var actionCreator=actionCreators[key];
	if(typeof actionCreator==='function'){
	boundActionCreators[key]=bindActionCreator(actionCreator,dispatch);
	}
	}
	return boundActionCreators;
	}

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule=true;
	
	var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
	
	exports['default']=applyMiddleware;
	
	var _compose=__webpack_require__(205);
	
	var _compose2=_interopRequireDefault(_compose);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function applyMiddleware(){
	for(var _len=arguments.length,middlewares=Array(_len),_key=0;_key<_len;_key++){
	middlewares[_key]=arguments[_key];
	}
	
	return function(createStore){
	return function(reducer,preloadedState,enhancer){
	var store=createStore(reducer,preloadedState,enhancer);
	var _dispatch=store.dispatch;
	var chain=[];
	
	var middlewareAPI={
	getState:store.getState,
	dispatch:function dispatch(action){
	return _dispatch(action);
	}};
	
	chain=middlewares.map(function(middleware){
	return middleware(middlewareAPI);
	});
	_dispatch=_compose2['default'].apply(undefined,chain)(store.dispatch);
	
	return _extends({},store,{
	dispatch:_dispatch});
	
	};
	};
	}

/***/ },
/* 205 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule=true;
	exports["default"]=compose;
	
	
	
	
	
	
	
	
	
	
	
	function compose(){
	for(var _len=arguments.length,funcs=Array(_len),_key=0;_key<_len;_key++){
	funcs[_key]=arguments[_key];
	}
	
	if(funcs.length===0){
	return function(arg){
	return arg;
	};
	}
	
	if(funcs.length===1){
	return funcs[0];
	}
	
	var last=funcs[funcs.length-1];
	var rest=funcs.slice(0,-1);
	return function(){
	return rest.reduceRight(function(composed,f){
	return f(composed);
	},last.apply(undefined,arguments));
	};
	}

/***/ },
/* 206 */
/***/ function(module, exports) {

	
	
	
	
	'use strict';
	
	var REACT_STATICS={
	childContextTypes:true,
	contextTypes:true,
	defaultProps:true,
	displayName:true,
	getDefaultProps:true,
	mixins:true,
	propTypes:true,
	type:true};
	
	
	var KNOWN_STATICS={
	name:true,
	length:true,
	prototype:true,
	caller:true,
	arguments:true,
	arity:true};
	
	
	var isGetOwnPropertySymbolsAvailable=typeof Object.getOwnPropertySymbols==='function';
	
	module.exports=function hoistNonReactStatics(targetComponent,sourceComponent,customStatics){
	if(typeof sourceComponent!=='string'){
	var keys=Object.getOwnPropertyNames(sourceComponent);
	
	
	if(isGetOwnPropertySymbolsAvailable){
	keys=keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	}
	
	for(var i=0;i<keys.length;++i){
	if(!REACT_STATICS[keys[i]]&&!KNOWN_STATICS[keys[i]]&&(!customStatics||!customStatics[keys[i]])){
	try{
	targetComponent[keys[i]]=sourceComponent[keys[i]];
	}catch(error){
	
	}
	}
	}
	}
	
	return targetComponent;
	};

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {
	
	
	
	
	
	
	
	
	'use strict';
	
	
	
	
	
	
	
	
	
	
	
	
	var invariant=function invariant(condition,format,a,b,c,d,e,f){
	if(process.env.NODE_ENV!=='production'){
	if(format===undefined){
	throw new Error('invariant requires an error message argument');
	}
	}
	
	if(!condition){
	var error;
	if(format===undefined){
	error=new Error(
	'Minified exception occurred; use the non-minified dev environment '+
	'for the full error message and additional helpful warnings.');
	
	}else{
	var args=[a,b,c,d,e,f];
	var argIndex=0;
	error=new Error(
	format.replace(/%s/g,function(){return args[argIndex++];}));
	
	error.name='Invariant Violation';
	}
	
	error.framesToPop=1;
	throw error;
	}
	};
	
	module.exports=invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var networkInterface_1=__webpack_require__(209);
	exports.createNetworkInterface=networkInterface_1.createNetworkInterface;
	exports.HTTPFetchNetworkInterface=networkInterface_1.HTTPFetchNetworkInterface;
	var batchedNetworkInterface_1=__webpack_require__(331);
	exports.createBatchingNetworkInterface=batchedNetworkInterface_1.createBatchingNetworkInterface;
	var printer_1=__webpack_require__(330);
	exports.printAST=printer_1.print;
	var store_1=__webpack_require__(334);
	exports.createApolloStore=store_1.createApolloStore;
	exports.createApolloReducer=store_1.createApolloReducer;
	var ObservableQuery_1=__webpack_require__(407);
	exports.ObservableQuery=ObservableQuery_1.ObservableQuery;
	var readFromStore_1=__webpack_require__(415);
	exports.readQueryFromStore=readFromStore_1.readQueryFromStore;
	var writeToStore_1=__webpack_require__(337);
	exports.writeQueryToStore=writeToStore_1.writeQueryToStore;
	var getFromAST_1=__webpack_require__(340);
	exports.getQueryDefinition=getFromAST_1.getQueryDefinition;
	exports.getFragmentDefinitions=getFromAST_1.getFragmentDefinitions;
	exports.createFragmentMap=getFromAST_1.createFragmentMap;
	var ApolloError_1=__webpack_require__(409);
	exports.ApolloError=ApolloError_1.ApolloError;
	var ApolloClient_1=__webpack_require__(423);
	exports.ApolloClient=ApolloClient_1.default;
	var fragments_1=__webpack_require__(424);
	exports.createFragment=fragments_1.createFragment;
	exports.clearFragmentDefinitions=fragments_1.clearFragmentDefinitions;
	exports.disableFragmentWarnings=fragments_1.disableFragmentWarnings;
	exports.enableFragmentWarnings=fragments_1.enableFragmentWarnings;
	var storeUtils_1=__webpack_require__(357);
	exports.toIdValue=storeUtils_1.toIdValue;
	Object.defineProperty(exports,"__esModule",{value:true});
	exports.default=ApolloClient_1.default;

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isString=__webpack_require__(210);
	var assign=__webpack_require__(212);
	var mapValues=__webpack_require__(253);
	__webpack_require__(329);
	var printer_1=__webpack_require__(330);
	function printRequest(request){
	return mapValues(request,function(val,key){
	return key==='query'?printer_1.print(val):val;
	});
	}
	exports.printRequest=printRequest;
	var HTTPFetchNetworkInterface=function(){
	function HTTPFetchNetworkInterface(uri,opts){
	if(opts===void 0){opts={};}
	if(!uri){
	throw new Error('A remote enpdoint is required for a network layer');
	}
	if(!isString(uri)){
	throw new Error('Remote endpoint must be a string');
	}
	this._uri=uri;
	this._opts=assign({},opts);
	this._middlewares=[];
	this._afterwares=[];
	}
	HTTPFetchNetworkInterface.prototype.applyMiddlewares=function(_a){
	var _this=this;
	var request=_a.request,options=_a.options;
	return new Promise(function(resolve,reject){
	var queue=function queue(funcs,scope){
	var next=function next(){
	if(funcs.length>0){
	var f=funcs.shift();
	f.applyMiddleware.apply(scope,[{request:request,options:options},next]);
	}else
	{
	resolve({
	request:request,
	options:options});
	
	}
	};
	next();
	};
	queue(_this._middlewares.slice(),_this);
	});
	};
	HTTPFetchNetworkInterface.prototype.applyAfterwares=function(_a){
	var _this=this;
	var response=_a.response,options=_a.options;
	return new Promise(function(resolve,reject){
	var queue=function queue(funcs,scope){
	var next=function next(){
	if(funcs.length>0){
	var f=funcs.shift();
	f.applyAfterware.apply(scope,[{response:response,options:options},next]);
	}else
	{
	resolve({
	response:response,
	options:options});
	
	}
	};
	next();
	};
	queue(_this._afterwares.slice(),_this);
	});
	};
	HTTPFetchNetworkInterface.prototype.fetchFromRemoteEndpoint=function(_a){
	var request=_a.request,options=_a.options;
	return fetch(this._uri,assign({},this._opts,{
	body:JSON.stringify(printRequest(request)),
	method:'POST'},
	options,{
	headers:assign({},{
	Accept:'*/*',
	'Content-Type':'application/json'},
	options.headers)}));
	
	};
	;
	HTTPFetchNetworkInterface.prototype.query=function(request){
	var _this=this;
	var options=assign({},this._opts);
	return this.applyMiddlewares({
	request:request,
	options:options}).
	then(function(rao){return _this.fetchFromRemoteEndpoint.call(_this,rao);}).
	then(function(response){return _this.applyAfterwares({
	response:response,
	options:options});
	}).
	then(function(_a){
	var response=_a.response;
	return response.json();
	}).
	then(function(payload){
	if(!payload.hasOwnProperty('data')&&!payload.hasOwnProperty('errors')){
	throw new Error("Server response was missing for query '"+request.debugName+"'.");
	}else
	{
	return payload;
	}
	});
	};
	;
	HTTPFetchNetworkInterface.prototype.use=function(middlewares){
	var _this=this;
	middlewares.map(function(middleware){
	if(typeof middleware.applyMiddleware==='function'){
	_this._middlewares.push(middleware);
	}else
	{
	throw new Error('Middleware must implement the applyMiddleware function');
	}
	});
	return this;
	};
	HTTPFetchNetworkInterface.prototype.useAfter=function(afterwares){
	var _this=this;
	afterwares.map(function(afterware){
	if(typeof afterware.applyAfterware==='function'){
	_this._afterwares.push(afterware);
	}else
	{
	throw new Error('Afterware must implement the applyAfterware function');
	}
	});
	return this;
	};
	return HTTPFetchNetworkInterface;
	}();
	exports.HTTPFetchNetworkInterface=HTTPFetchNetworkInterface;
	function createNetworkInterface(uriOrInterfaceOpts,secondArgOpts){
	if(secondArgOpts===void 0){secondArgOpts={};}
	if(!uriOrInterfaceOpts){
	throw new Error('You must pass an options argument to createNetworkInterface.');
	}
	var uri;
	var opts;
	if(isString(uriOrInterfaceOpts)){
	console.warn("Passing the URI as the first argument to createNetworkInterface is deprecated as of Apollo Client 0.5. Please pass it as the \"uri\" property of the network interface options.");
	opts=secondArgOpts;
	uri=uriOrInterfaceOpts;
	}else
	{
	opts=uriOrInterfaceOpts.opts;
	uri=uriOrInterfaceOpts.uri;
	}
	return new HTTPFetchNetworkInterface(uri,opts);
	}
	exports.createNetworkInterface=createNetworkInterface;

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseGetTag=__webpack_require__(188),
	isArray=__webpack_require__(211),
	isObjectLike=__webpack_require__(196);
	
	
	var stringTag='[object String]';
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isString(value){
	return typeof value=='string'||
	!isArray(value)&&isObjectLike(value)&&baseGetTag(value)==stringTag;
	}
	
	module.exports=isString;

/***/ },
/* 211 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var isArray=Array.isArray;
	
	module.exports=isArray;

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var assignValue=__webpack_require__(213),
	copyObject=__webpack_require__(225),
	createAssigner=__webpack_require__(226),
	isArrayLike=__webpack_require__(236),
	isPrototype=__webpack_require__(239),
	keys=__webpack_require__(240);
	
	
	var objectProto=Object.prototype;
	
	
	var hasOwnProperty=objectProto.hasOwnProperty;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var assign=createAssigner(function(object,source){
	if(isPrototype(source)||isArrayLike(source)){
	copyObject(source,keys(source),object);
	return;
	}
	for(var key in source){
	if(hasOwnProperty.call(source,key)){
	assignValue(object,key,source[key]);
	}
	}
	});
	
	module.exports=assign;

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseAssignValue=__webpack_require__(214),
	eq=__webpack_require__(224);
	
	
	var objectProto=Object.prototype;
	
	
	var hasOwnProperty=objectProto.hasOwnProperty;
	
	
	
	
	
	
	
	
	
	
	
	function assignValue(object,key,value){
	var objValue=object[key];
	if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||
	value===undefined&&!(key in object)){
	baseAssignValue(object,key,value);
	}
	}
	
	module.exports=assignValue;

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var defineProperty=__webpack_require__(215);
	
	
	
	
	
	
	
	
	
	
	function baseAssignValue(object,key,value){
	if(key=='__proto__'&&defineProperty){
	defineProperty(object,key,{
	'configurable':true,
	'enumerable':true,
	'value':value,
	'writable':true});
	
	}else{
	object[key]=value;
	}
	}
	
	module.exports=baseAssignValue;

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var getNative=__webpack_require__(216);
	
	var defineProperty=function(){
	try{
	var func=getNative(Object,'defineProperty');
	func({},'',{});
	return func;
	}catch(e){}
	}();
	
	module.exports=defineProperty;

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseIsNative=__webpack_require__(217),
	getValue=__webpack_require__(223);
	
	
	
	
	
	
	
	
	
	function getNative(object,key){
	var value=getValue(object,key);
	return baseIsNative(value)?value:undefined;
	}
	
	module.exports=getNative;

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var isFunction=__webpack_require__(218),
	isMasked=__webpack_require__(220),
	isObject=__webpack_require__(219),
	toSource=__webpack_require__(222);
	
	
	
	
	
	var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;
	
	
	var reIsHostCtor=/^\[object .+?Constructor\]$/;
	
	
	var funcProto=Function.prototype,
	objectProto=Object.prototype;
	
	
	var funcToString=funcProto.toString;
	
	
	var hasOwnProperty=objectProto.hasOwnProperty;
	
	
	var reIsNative=RegExp('^'+
	funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').
	replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');
	
	
	
	
	
	
	
	
	
	
	function baseIsNative(value){
	if(!isObject(value)||isMasked(value)){
	return false;
	}
	var pattern=isFunction(value)?reIsNative:reIsHostCtor;
	return pattern.test(toSource(value));
	}
	
	module.exports=baseIsNative;

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseGetTag=__webpack_require__(188),
	isObject=__webpack_require__(219);
	
	
	var asyncTag='[object AsyncFunction]',
	funcTag='[object Function]',
	genTag='[object GeneratorFunction]',
	proxyTag='[object Proxy]';
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isFunction(value){
	if(!isObject(value)){
	return false;
	}
	
	
	var tag=baseGetTag(value);
	return tag==funcTag||tag==genTag||tag==asyncTag||tag==proxyTag;
	}
	
	module.exports=isFunction;

/***/ },
/* 219 */
/***/ function(module, exports) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isObject(value){
	var type=typeof value==='undefined'?'undefined':_typeof(value);
	return value!=null&&(type=='object'||type=='function');
	}
	
	module.exports=isObject;

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var coreJsData=__webpack_require__(221);
	
	
	var maskSrcKey=function(){
	var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');
	return uid?'Symbol(src)_1.'+uid:'';
	}();
	
	
	
	
	
	
	
	
	function isMasked(func){
	return!!maskSrcKey&&maskSrcKey in func;
	}
	
	module.exports=isMasked;

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var root=__webpack_require__(190);
	
	
	var coreJsData=root['__core-js_shared__'];
	
	module.exports=coreJsData;

/***/ },
/* 222 */
/***/ function(module, exports) {

	'use strict';
	var funcProto=Function.prototype;
	
	
	var funcToString=funcProto.toString;
	
	
	
	
	
	
	
	
	function toSource(func){
	if(func!=null){
	try{
	return funcToString.call(func);
	}catch(e){}
	try{
	return func+'';
	}catch(e){}
	}
	return'';
	}
	
	module.exports=toSource;

/***/ },
/* 223 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	function getValue(object,key){
	return object==null?undefined:object[key];
	}
	
	module.exports=getValue;

/***/ },
/* 224 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function eq(value,other){
	return value===other||value!==value&&other!==other;
	}
	
	module.exports=eq;

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var assignValue=__webpack_require__(213),
	baseAssignValue=__webpack_require__(214);
	
	
	
	
	
	
	
	
	
	
	
	function copyObject(source,props,object,customizer){
	var isNew=!object;
	object||(object={});
	
	var index=-1,
	length=props.length;
	
	while(++index<length){
	var key=props[index];
	
	var newValue=customizer?
	customizer(object[key],source[key],key,object,source):
	undefined;
	
	if(newValue===undefined){
	newValue=source[key];
	}
	if(isNew){
	baseAssignValue(object,key,newValue);
	}else{
	assignValue(object,key,newValue);
	}
	}
	return object;
	}
	
	module.exports=copyObject;

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseRest=__webpack_require__(227),
	isIterateeCall=__webpack_require__(235);
	
	
	
	
	
	
	
	
	function createAssigner(assigner){
	return baseRest(function(object,sources){
	var index=-1,
	length=sources.length,
	customizer=length>1?sources[length-1]:undefined,
	guard=length>2?sources[2]:undefined;
	
	customizer=assigner.length>3&&typeof customizer=='function'?(
	length--,customizer):
	undefined;
	
	if(guard&&isIterateeCall(sources[0],sources[1],guard)){
	customizer=length<3?undefined:customizer;
	length=1;
	}
	object=Object(object);
	while(++index<length){
	var source=sources[index];
	if(source){
	assigner(object,source,index,customizer);
	}
	}
	return object;
	});
	}
	
	module.exports=createAssigner;

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var identity=__webpack_require__(228),
	overRest=__webpack_require__(229),
	setToString=__webpack_require__(231);
	
	
	
	
	
	
	
	
	
	function baseRest(func,start){
	return setToString(overRest(func,start,identity),func+'');
	}
	
	module.exports=baseRest;

/***/ },
/* 228 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function identity(value){
	return value;
	}
	
	module.exports=identity;

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var apply=__webpack_require__(230);
	
	
	var nativeMax=Math.max;
	
	
	
	
	
	
	
	
	
	
	function overRest(func,start,transform){
	start=nativeMax(start===undefined?func.length-1:start,0);
	return function(){
	var args=arguments,
	index=-1,
	length=nativeMax(args.length-start,0),
	array=Array(length);
	
	while(++index<length){
	array[index]=args[start+index];
	}
	index=-1;
	var otherArgs=Array(start+1);
	while(++index<start){
	otherArgs[index]=args[index];
	}
	otherArgs[start]=transform(array);
	return apply(func,this,otherArgs);
	};
	}
	
	module.exports=overRest;

/***/ },
/* 230 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	
	function apply(func,thisArg,args){
	switch(args.length){
	case 0:return func.call(thisArg);
	case 1:return func.call(thisArg,args[0]);
	case 2:return func.call(thisArg,args[0],args[1]);
	case 3:return func.call(thisArg,args[0],args[1],args[2]);}
	
	return func.apply(thisArg,args);
	}
	
	module.exports=apply;

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseSetToString=__webpack_require__(232),
	shortOut=__webpack_require__(234);
	
	
	
	
	
	
	
	
	
	var setToString=shortOut(baseSetToString);
	
	module.exports=setToString;

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var constant=__webpack_require__(233),
	defineProperty=__webpack_require__(215),
	identity=__webpack_require__(228);
	
	
	
	
	
	
	
	
	
	var baseSetToString=!defineProperty?identity:function(func,string){
	return defineProperty(func,'toString',{
	'configurable':true,
	'enumerable':false,
	'value':constant(string),
	'writable':true});
	
	};
	
	module.exports=baseSetToString;

/***/ },
/* 233 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function constant(value){
	return function(){
	return value;
	};
	}
	
	module.exports=constant;

/***/ },
/* 234 */
/***/ function(module, exports) {

	"use strict";
	var HOT_COUNT=800,
	HOT_SPAN=16;
	
	
	var nativeNow=Date.now;
	
	
	
	
	
	
	
	
	
	
	function shortOut(func){
	var count=0,
	lastCalled=0;
	
	return function(){
	var stamp=nativeNow(),
	remaining=HOT_SPAN-(stamp-lastCalled);
	
	lastCalled=stamp;
	if(remaining>0){
	if(++count>=HOT_COUNT){
	return arguments[0];
	}
	}else{
	count=0;
	}
	return func.apply(undefined,arguments);
	};
	}
	
	module.exports=shortOut;

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};var eq=__webpack_require__(224),
	isArrayLike=__webpack_require__(236),
	isIndex=__webpack_require__(238),
	isObject=__webpack_require__(219);
	
	
	
	
	
	
	
	
	
	
	
	function isIterateeCall(value,index,object){
	if(!isObject(object)){
	return false;
	}
	var type=typeof index==='undefined'?'undefined':_typeof(index);
	if(type=='number'?
	isArrayLike(object)&&isIndex(index,object.length):
	type=='string'&&index in object)
	{
	return eq(object[index],value);
	}
	return false;
	}
	
	module.exports=isIterateeCall;

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var isFunction=__webpack_require__(218),
	isLength=__webpack_require__(237);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isArrayLike(value){
	return value!=null&&isLength(value.length)&&!isFunction(value);
	}
	
	module.exports=isArrayLike;

/***/ },
/* 237 */
/***/ function(module, exports) {

	'use strict';
	var MAX_SAFE_INTEGER=9007199254740991;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isLength(value){
	return typeof value=='number'&&
	value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;
	}
	
	module.exports=isLength;

/***/ },
/* 238 */
/***/ function(module, exports) {

	'use strict';
	var MAX_SAFE_INTEGER=9007199254740991;
	
	
	var reIsUint=/^(?:0|[1-9]\d*)$/;
	
	
	
	
	
	
	
	
	
	function isIndex(value,length){
	length=length==null?MAX_SAFE_INTEGER:length;
	return!!length&&(
	typeof value=='number'||reIsUint.test(value))&&
	value>-1&&value%1==0&&value<length;
	}
	
	module.exports=isIndex;

/***/ },
/* 239 */
/***/ function(module, exports) {

	'use strict';
	var objectProto=Object.prototype;
	
	
	
	
	
	
	
	
	function isPrototype(value){
	var Ctor=value&&value.constructor,
	proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;
	
	return value===proto;
	}
	
	module.exports=isPrototype;

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var arrayLikeKeys=__webpack_require__(241),
	baseKeys=__webpack_require__(251),
	isArrayLike=__webpack_require__(236);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function keys(object){
	return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);
	}
	
	module.exports=keys;

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseTimes=__webpack_require__(242),
	isArguments=__webpack_require__(243),
	isArray=__webpack_require__(211),
	isBuffer=__webpack_require__(245),
	isIndex=__webpack_require__(238),
	isTypedArray=__webpack_require__(247);
	
	
	var objectProto=Object.prototype;
	
	
	var hasOwnProperty=objectProto.hasOwnProperty;
	
	
	
	
	
	
	
	
	
	function arrayLikeKeys(value,inherited){
	var isArr=isArray(value),
	isArg=!isArr&&isArguments(value),
	isBuff=!isArr&&!isArg&&isBuffer(value),
	isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),
	skipIndexes=isArr||isArg||isBuff||isType,
	result=skipIndexes?baseTimes(value.length,String):[],
	length=result.length;
	
	for(var key in value){
	if((inherited||hasOwnProperty.call(value,key))&&
	!(skipIndexes&&(
	
	key=='length'||
	
	isBuff&&(key=='offset'||key=='parent')||
	
	isType&&(key=='buffer'||key=='byteLength'||key=='byteOffset')||
	
	isIndex(key,length))))
	{
	result.push(key);
	}
	}
	return result;
	}
	
	module.exports=arrayLikeKeys;

/***/ },
/* 242 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	function baseTimes(n,iteratee){
	var index=-1,
	result=Array(n);
	
	while(++index<n){
	result[index]=iteratee(index);
	}
	return result;
	}
	
	module.exports=baseTimes;

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseIsArguments=__webpack_require__(244),
	isObjectLike=__webpack_require__(196);
	
	
	var objectProto=Object.prototype;
	
	
	var hasOwnProperty=objectProto.hasOwnProperty;
	
	
	var propertyIsEnumerable=objectProto.propertyIsEnumerable;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var isArguments=baseIsArguments(function(){return arguments;}())?baseIsArguments:function(value){
	return isObjectLike(value)&&hasOwnProperty.call(value,'callee')&&
	!propertyIsEnumerable.call(value,'callee');
	};
	
	module.exports=isArguments;

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseGetTag=__webpack_require__(188),
	isObjectLike=__webpack_require__(196);
	
	
	var argsTag='[object Arguments]';
	
	
	
	
	
	
	
	
	function baseIsArguments(value){
	return isObjectLike(value)&&baseGetTag(value)==argsTag;
	}
	
	module.exports=baseIsArguments;

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};var root=__webpack_require__(190),
	stubFalse=__webpack_require__(246);
	
	
	var freeExports=( false?'undefined':_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;
	
	
	var freeModule=freeExports&&( false?'undefined':_typeof(module))=='object'&&module&&!module.nodeType&&module;
	
	
	var moduleExports=freeModule&&freeModule.exports===freeExports;
	
	
	var Buffer=moduleExports?root.Buffer:undefined;
	
	
	var nativeIsBuffer=Buffer?Buffer.isBuffer:undefined;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var isBuffer=nativeIsBuffer||stubFalse;
	
	module.exports=isBuffer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(199)(module)))

/***/ },
/* 246 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	
	
	
	
	function stubFalse(){
	return false;
	}
	
	module.exports=stubFalse;

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseIsTypedArray=__webpack_require__(248),
	baseUnary=__webpack_require__(249),
	nodeUtil=__webpack_require__(250);
	
	
	var nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;
	
	module.exports=isTypedArray;

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseGetTag=__webpack_require__(188),
	isLength=__webpack_require__(237),
	isObjectLike=__webpack_require__(196);
	
	
	var argsTag='[object Arguments]',
	arrayTag='[object Array]',
	boolTag='[object Boolean]',
	dateTag='[object Date]',
	errorTag='[object Error]',
	funcTag='[object Function]',
	mapTag='[object Map]',
	numberTag='[object Number]',
	objectTag='[object Object]',
	regexpTag='[object RegExp]',
	setTag='[object Set]',
	stringTag='[object String]',
	weakMapTag='[object WeakMap]';
	
	var arrayBufferTag='[object ArrayBuffer]',
	dataViewTag='[object DataView]',
	float32Tag='[object Float32Array]',
	float64Tag='[object Float64Array]',
	int8Tag='[object Int8Array]',
	int16Tag='[object Int16Array]',
	int32Tag='[object Int32Array]',
	uint8Tag='[object Uint8Array]',
	uint8ClampedTag='[object Uint8ClampedArray]',
	uint16Tag='[object Uint16Array]',
	uint32Tag='[object Uint32Array]';
	
	
	var typedArrayTags={};
	typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=
	typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=
	typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=
	typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=
	typedArrayTags[uint32Tag]=true;
	typedArrayTags[argsTag]=typedArrayTags[arrayTag]=
	typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=
	typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=
	typedArrayTags[errorTag]=typedArrayTags[funcTag]=
	typedArrayTags[mapTag]=typedArrayTags[numberTag]=
	typedArrayTags[objectTag]=typedArrayTags[regexpTag]=
	typedArrayTags[setTag]=typedArrayTags[stringTag]=
	typedArrayTags[weakMapTag]=false;
	
	
	
	
	
	
	
	
	function baseIsTypedArray(value){
	return isObjectLike(value)&&
	isLength(value.length)&&!!typedArrayTags[baseGetTag(value)];
	}
	
	module.exports=baseIsTypedArray;

/***/ },
/* 249 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	function baseUnary(func){
	return function(value){
	return func(value);
	};
	}
	
	module.exports=baseUnary;

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};var freeGlobal=__webpack_require__(191);
	
	
	var freeExports=( false?'undefined':_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;
	
	
	var freeModule=freeExports&&( false?'undefined':_typeof(module))=='object'&&module&&!module.nodeType&&module;
	
	
	var moduleExports=freeModule&&freeModule.exports===freeExports;
	
	
	var freeProcess=moduleExports&&freeGlobal.process;
	
	
	var nodeUtil=function(){
	try{
	return freeProcess&&freeProcess.binding&&freeProcess.binding('util');
	}catch(e){}
	}();
	
	module.exports=nodeUtil;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(199)(module)))

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var isPrototype=__webpack_require__(239),
	nativeKeys=__webpack_require__(252);
	
	
	var objectProto=Object.prototype;
	
	
	var hasOwnProperty=objectProto.hasOwnProperty;
	
	
	
	
	
	
	
	
	function baseKeys(object){
	if(!isPrototype(object)){
	return nativeKeys(object);
	}
	var result=[];
	for(var key in Object(object)){
	if(hasOwnProperty.call(object,key)&&key!='constructor'){
	result.push(key);
	}
	}
	return result;
	}
	
	module.exports=baseKeys;

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var overArg=__webpack_require__(195);
	
	
	var nativeKeys=overArg(Object.keys,Object);
	
	module.exports=nativeKeys;

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseAssignValue=__webpack_require__(214),
	baseForOwn=__webpack_require__(254),
	baseIteratee=__webpack_require__(257);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function mapValues(object,iteratee){
	var result={};
	iteratee=baseIteratee(iteratee,3);
	
	baseForOwn(object,function(value,key,object){
	baseAssignValue(result,key,iteratee(value,key,object));
	});
	return result;
	}
	
	module.exports=mapValues;

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseFor=__webpack_require__(255),
	keys=__webpack_require__(240);
	
	
	
	
	
	
	
	
	
	function baseForOwn(object,iteratee){
	return object&&baseFor(object,iteratee,keys);
	}
	
	module.exports=baseForOwn;

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var createBaseFor=__webpack_require__(256);
	
	
	
	
	
	
	
	
	
	
	
	
	var baseFor=createBaseFor();
	
	module.exports=baseFor;

/***/ },
/* 256 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	function createBaseFor(fromRight){
	return function(object,iteratee,keysFunc){
	var index=-1,
	iterable=Object(object),
	props=keysFunc(object),
	length=props.length;
	
	while(length--){
	var key=props[fromRight?length:++index];
	if(iteratee(iterable[key],key,iterable)===false){
	break;
	}
	}
	return object;
	};
	}
	
	module.exports=createBaseFor;

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};var baseMatches=__webpack_require__(258),
	baseMatchesProperty=__webpack_require__(310),
	identity=__webpack_require__(228),
	isArray=__webpack_require__(211),
	property=__webpack_require__(326);
	
	
	
	
	
	
	
	
	function baseIteratee(value){
	
	
	if(typeof value=='function'){
	return value;
	}
	if(value==null){
	return identity;
	}
	if((typeof value==='undefined'?'undefined':_typeof(value))=='object'){
	return isArray(value)?
	baseMatchesProperty(value[0],value[1]):
	baseMatches(value);
	}
	return property(value);
	}
	
	module.exports=baseIteratee;

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseIsMatch=__webpack_require__(259),
	getMatchData=__webpack_require__(307),
	matchesStrictComparable=__webpack_require__(309);
	
	
	
	
	
	
	
	
	function baseMatches(source){
	var matchData=getMatchData(source);
	if(matchData.length==1&&matchData[0][2]){
	return matchesStrictComparable(matchData[0][0],matchData[0][1]);
	}
	return function(object){
	return object===source||baseIsMatch(object,source,matchData);
	};
	}
	
	module.exports=baseMatches;

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var Stack=__webpack_require__(260),
	baseIsEqual=__webpack_require__(289);
	
	
	var COMPARE_PARTIAL_FLAG=1,
	COMPARE_UNORDERED_FLAG=2;
	
	
	
	
	
	
	
	
	
	
	
	function baseIsMatch(object,source,matchData,customizer){
	var index=matchData.length,
	length=index,
	noCustomizer=!customizer;
	
	if(object==null){
	return!length;
	}
	object=Object(object);
	while(index--){
	var data=matchData[index];
	if(noCustomizer&&data[2]?
	data[1]!==object[data[0]]:
	!(data[0]in object))
	{
	return false;
	}
	}
	while(++index<length){
	data=matchData[index];
	var key=data[0],
	objValue=object[key],
	srcValue=data[1];
	
	if(noCustomizer&&data[2]){
	if(objValue===undefined&&!(key in object)){
	return false;
	}
	}else{
	var stack=new Stack();
	if(customizer){
	var result=customizer(objValue,srcValue,key,object,source,stack);
	}
	if(!(result===undefined?
	baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG,customizer,stack):
	result))
	{
	return false;
	}
	}
	}
	return true;
	}
	
	module.exports=baseIsMatch;

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var ListCache=__webpack_require__(261),
	stackClear=__webpack_require__(268),
	stackDelete=__webpack_require__(269),
	stackGet=__webpack_require__(270),
	stackHas=__webpack_require__(271),
	stackSet=__webpack_require__(272);
	
	
	
	
	
	
	
	
	function Stack(entries){
	var data=this.__data__=new ListCache(entries);
	this.size=data.size;
	}
	
	
	Stack.prototype.clear=stackClear;
	Stack.prototype['delete']=stackDelete;
	Stack.prototype.get=stackGet;
	Stack.prototype.has=stackHas;
	Stack.prototype.set=stackSet;
	
	module.exports=Stack;

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var listCacheClear=__webpack_require__(262),
	listCacheDelete=__webpack_require__(263),
	listCacheGet=__webpack_require__(265),
	listCacheHas=__webpack_require__(266),
	listCacheSet=__webpack_require__(267);
	
	
	
	
	
	
	
	
	function ListCache(entries){
	var index=-1,
	length=entries==null?0:entries.length;
	
	this.clear();
	while(++index<length){
	var entry=entries[index];
	this.set(entry[0],entry[1]);
	}
	}
	
	
	ListCache.prototype.clear=listCacheClear;
	ListCache.prototype['delete']=listCacheDelete;
	ListCache.prototype.get=listCacheGet;
	ListCache.prototype.has=listCacheHas;
	ListCache.prototype.set=listCacheSet;
	
	module.exports=ListCache;

/***/ },
/* 262 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	function listCacheClear(){
	this.__data__=[];
	this.size=0;
	}
	
	module.exports=listCacheClear;

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var assocIndexOf=__webpack_require__(264);
	
	
	var arrayProto=Array.prototype;
	
	
	var splice=arrayProto.splice;
	
	
	
	
	
	
	
	
	
	
	function listCacheDelete(key){
	var data=this.__data__,
	index=assocIndexOf(data,key);
	
	if(index<0){
	return false;
	}
	var lastIndex=data.length-1;
	if(index==lastIndex){
	data.pop();
	}else{
	splice.call(data,index,1);
	}
	--this.size;
	return true;
	}
	
	module.exports=listCacheDelete;

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var eq=__webpack_require__(224);
	
	
	
	
	
	
	
	
	
	function assocIndexOf(array,key){
	var length=array.length;
	while(length--){
	if(eq(array[length][0],key)){
	return length;
	}
	}
	return-1;
	}
	
	module.exports=assocIndexOf;

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var assocIndexOf=__webpack_require__(264);
	
	
	
	
	
	
	
	
	
	
	function listCacheGet(key){
	var data=this.__data__,
	index=assocIndexOf(data,key);
	
	return index<0?undefined:data[index][1];
	}
	
	module.exports=listCacheGet;

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var assocIndexOf=__webpack_require__(264);
	
	
	
	
	
	
	
	
	
	
	function listCacheHas(key){
	return assocIndexOf(this.__data__,key)>-1;
	}
	
	module.exports=listCacheHas;

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var assocIndexOf=__webpack_require__(264);
	
	
	
	
	
	
	
	
	
	
	
	function listCacheSet(key,value){
	var data=this.__data__,
	index=assocIndexOf(data,key);
	
	if(index<0){
	++this.size;
	data.push([key,value]);
	}else{
	data[index][1]=value;
	}
	return this;
	}
	
	module.exports=listCacheSet;

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var ListCache=__webpack_require__(261);
	
	
	
	
	
	
	
	
	function stackClear(){
	this.__data__=new ListCache();
	this.size=0;
	}
	
	module.exports=stackClear;

/***/ },
/* 269 */
/***/ function(module, exports) {

	'use strict';
	
	
	
	
	
	
	
	
	function stackDelete(key){
	var data=this.__data__,
	result=data['delete'](key);
	
	this.size=data.size;
	return result;
	}
	
	module.exports=stackDelete;

/***/ },
/* 270 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	function stackGet(key){
	return this.__data__.get(key);
	}
	
	module.exports=stackGet;

/***/ },
/* 271 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	function stackHas(key){
	return this.__data__.has(key);
	}
	
	module.exports=stackHas;

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var ListCache=__webpack_require__(261),
	Map=__webpack_require__(273),
	MapCache=__webpack_require__(274);
	
	
	var LARGE_ARRAY_SIZE=200;
	
	
	
	
	
	
	
	
	
	
	
	function stackSet(key,value){
	var data=this.__data__;
	if(data instanceof ListCache){
	var pairs=data.__data__;
	if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){
	pairs.push([key,value]);
	this.size=++data.size;
	return this;
	}
	data=this.__data__=new MapCache(pairs);
	}
	data.set(key,value);
	this.size=data.size;
	return this;
	}
	
	module.exports=stackSet;

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var getNative=__webpack_require__(216),
	root=__webpack_require__(190);
	
	
	var Map=getNative(root,'Map');
	
	module.exports=Map;

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var mapCacheClear=__webpack_require__(275),
	mapCacheDelete=__webpack_require__(283),
	mapCacheGet=__webpack_require__(286),
	mapCacheHas=__webpack_require__(287),
	mapCacheSet=__webpack_require__(288);
	
	
	
	
	
	
	
	
	function MapCache(entries){
	var index=-1,
	length=entries==null?0:entries.length;
	
	this.clear();
	while(++index<length){
	var entry=entries[index];
	this.set(entry[0],entry[1]);
	}
	}
	
	
	MapCache.prototype.clear=mapCacheClear;
	MapCache.prototype['delete']=mapCacheDelete;
	MapCache.prototype.get=mapCacheGet;
	MapCache.prototype.has=mapCacheHas;
	MapCache.prototype.set=mapCacheSet;
	
	module.exports=MapCache;

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var Hash=__webpack_require__(276),
	ListCache=__webpack_require__(261),
	Map=__webpack_require__(273);
	
	
	
	
	
	
	
	
	function mapCacheClear(){
	this.size=0;
	this.__data__={
	'hash':new Hash(),
	'map':new(Map||ListCache)(),
	'string':new Hash()};
	
	}
	
	module.exports=mapCacheClear;

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var hashClear=__webpack_require__(277),
	hashDelete=__webpack_require__(279),
	hashGet=__webpack_require__(280),
	hashHas=__webpack_require__(281),
	hashSet=__webpack_require__(282);
	
	
	
	
	
	
	
	
	function Hash(entries){
	var index=-1,
	length=entries==null?0:entries.length;
	
	this.clear();
	while(++index<length){
	var entry=entries[index];
	this.set(entry[0],entry[1]);
	}
	}
	
	
	Hash.prototype.clear=hashClear;
	Hash.prototype['delete']=hashDelete;
	Hash.prototype.get=hashGet;
	Hash.prototype.has=hashHas;
	Hash.prototype.set=hashSet;
	
	module.exports=Hash;

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var nativeCreate=__webpack_require__(278);
	
	
	
	
	
	
	
	
	function hashClear(){
	this.__data__=nativeCreate?nativeCreate(null):{};
	this.size=0;
	}
	
	module.exports=hashClear;

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var getNative=__webpack_require__(216);
	
	
	var nativeCreate=getNative(Object,'create');
	
	module.exports=nativeCreate;

/***/ },
/* 279 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	
	function hashDelete(key){
	var result=this.has(key)&&delete this.__data__[key];
	this.size-=result?1:0;
	return result;
	}
	
	module.exports=hashDelete;

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var nativeCreate=__webpack_require__(278);
	
	
	var HASH_UNDEFINED='__lodash_hash_undefined__';
	
	
	var objectProto=Object.prototype;
	
	
	var hasOwnProperty=objectProto.hasOwnProperty;
	
	
	
	
	
	
	
	
	
	
	function hashGet(key){
	var data=this.__data__;
	if(nativeCreate){
	var result=data[key];
	return result===HASH_UNDEFINED?undefined:result;
	}
	return hasOwnProperty.call(data,key)?data[key]:undefined;
	}
	
	module.exports=hashGet;

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var nativeCreate=__webpack_require__(278);
	
	
	var objectProto=Object.prototype;
	
	
	var hasOwnProperty=objectProto.hasOwnProperty;
	
	
	
	
	
	
	
	
	
	
	function hashHas(key){
	var data=this.__data__;
	return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);
	}
	
	module.exports=hashHas;

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var nativeCreate=__webpack_require__(278);
	
	
	var HASH_UNDEFINED='__lodash_hash_undefined__';
	
	
	
	
	
	
	
	
	
	
	
	function hashSet(key,value){
	var data=this.__data__;
	this.size+=this.has(key)?0:1;
	data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;
	return this;
	}
	
	module.exports=hashSet;

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var getMapData=__webpack_require__(284);
	
	
	
	
	
	
	
	
	
	
	function mapCacheDelete(key){
	var result=getMapData(this,key)['delete'](key);
	this.size-=result?1:0;
	return result;
	}
	
	module.exports=mapCacheDelete;

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var isKeyable=__webpack_require__(285);
	
	
	
	
	
	
	
	
	
	function getMapData(map,key){
	var data=map.__data__;
	return isKeyable(key)?
	data[typeof key=='string'?'string':'hash']:
	data.map;
	}
	
	module.exports=getMapData;

/***/ },
/* 285 */
/***/ function(module, exports) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	
	
	
	
	
	function isKeyable(value){
	var type=typeof value==='undefined'?'undefined':_typeof(value);
	return type=='string'||type=='number'||type=='symbol'||type=='boolean'?
	value!=='__proto__':
	value===null;
	}
	
	module.exports=isKeyable;

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var getMapData=__webpack_require__(284);
	
	
	
	
	
	
	
	
	
	
	function mapCacheGet(key){
	return getMapData(this,key).get(key);
	}
	
	module.exports=mapCacheGet;

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var getMapData=__webpack_require__(284);
	
	
	
	
	
	
	
	
	
	
	function mapCacheHas(key){
	return getMapData(this,key).has(key);
	}
	
	module.exports=mapCacheHas;

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var getMapData=__webpack_require__(284);
	
	
	
	
	
	
	
	
	
	
	
	function mapCacheSet(key,value){
	var data=getMapData(this,key),
	size=data.size;
	
	data.set(key,value);
	this.size+=data.size==size?0:1;
	return this;
	}
	
	module.exports=mapCacheSet;

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseIsEqualDeep=__webpack_require__(290),
	isObject=__webpack_require__(219),
	isObjectLike=__webpack_require__(196);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function baseIsEqual(value,other,bitmask,customizer,stack){
	if(value===other){
	return true;
	}
	if(value==null||other==null||!isObject(value)&&!isObjectLike(other)){
	return value!==value&&other!==other;
	}
	return baseIsEqualDeep(value,other,bitmask,customizer,baseIsEqual,stack);
	}
	
	module.exports=baseIsEqual;

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var Stack=__webpack_require__(260),
	equalArrays=__webpack_require__(291),
	equalByTag=__webpack_require__(297),
	equalObjects=__webpack_require__(301),
	getTag=__webpack_require__(302),
	isArray=__webpack_require__(211),
	isBuffer=__webpack_require__(245),
	isTypedArray=__webpack_require__(247);
	
	
	var COMPARE_PARTIAL_FLAG=1;
	
	
	var argsTag='[object Arguments]',
	arrayTag='[object Array]',
	objectTag='[object Object]';
	
	
	var objectProto=Object.prototype;
	
	
	var hasOwnProperty=objectProto.hasOwnProperty;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function baseIsEqualDeep(object,other,bitmask,customizer,equalFunc,stack){
	var objIsArr=isArray(object),
	othIsArr=isArray(other),
	objTag=arrayTag,
	othTag=arrayTag;
	
	if(!objIsArr){
	objTag=getTag(object);
	objTag=objTag==argsTag?objectTag:objTag;
	}
	if(!othIsArr){
	othTag=getTag(other);
	othTag=othTag==argsTag?objectTag:othTag;
	}
	var objIsObj=objTag==objectTag,
	othIsObj=othTag==objectTag,
	isSameTag=objTag==othTag;
	
	if(isSameTag&&isBuffer(object)){
	if(!isBuffer(other)){
	return false;
	}
	objIsArr=true;
	objIsObj=false;
	}
	if(isSameTag&&!objIsObj){
	stack||(stack=new Stack());
	return objIsArr||isTypedArray(object)?
	equalArrays(object,other,bitmask,customizer,equalFunc,stack):
	equalByTag(object,other,objTag,bitmask,customizer,equalFunc,stack);
	}
	if(!(bitmask&COMPARE_PARTIAL_FLAG)){
	var objIsWrapped=objIsObj&&hasOwnProperty.call(object,'__wrapped__'),
	othIsWrapped=othIsObj&&hasOwnProperty.call(other,'__wrapped__');
	
	if(objIsWrapped||othIsWrapped){
	var objUnwrapped=objIsWrapped?object.value():object,
	othUnwrapped=othIsWrapped?other.value():other;
	
	stack||(stack=new Stack());
	return equalFunc(objUnwrapped,othUnwrapped,bitmask,customizer,stack);
	}
	}
	if(!isSameTag){
	return false;
	}
	stack||(stack=new Stack());
	return equalObjects(object,other,bitmask,customizer,equalFunc,stack);
	}
	
	module.exports=baseIsEqualDeep;

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var SetCache=__webpack_require__(292),
	arraySome=__webpack_require__(295),
	cacheHas=__webpack_require__(296);
	
	
	var COMPARE_PARTIAL_FLAG=1,
	COMPARE_UNORDERED_FLAG=2;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function equalArrays(array,other,bitmask,customizer,equalFunc,stack){
	var isPartial=bitmask&COMPARE_PARTIAL_FLAG,
	arrLength=array.length,
	othLength=other.length;
	
	if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){
	return false;
	}
	
	var stacked=stack.get(array);
	if(stacked&&stack.get(other)){
	return stacked==other;
	}
	var index=-1,
	result=true,
	seen=bitmask&COMPARE_UNORDERED_FLAG?new SetCache():undefined;
	
	stack.set(array,other);
	stack.set(other,array);
	
	
	while(++index<arrLength){
	var arrValue=array[index],
	othValue=other[index];
	
	if(customizer){
	var compared=isPartial?
	customizer(othValue,arrValue,index,other,array,stack):
	customizer(arrValue,othValue,index,array,other,stack);
	}
	if(compared!==undefined){
	if(compared){
	continue;
	}
	result=false;
	break;
	}
	
	if(seen){
	if(!arraySome(other,function(othValue,othIndex){
	if(!cacheHas(seen,othIndex)&&(
	arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){
	return seen.push(othIndex);
	}
	})){
	result=false;
	break;
	}
	}else if(!(
	arrValue===othValue||
	equalFunc(arrValue,othValue,bitmask,customizer,stack)))
	{
	result=false;
	break;
	}
	}
	stack['delete'](array);
	stack['delete'](other);
	return result;
	}
	
	module.exports=equalArrays;

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var MapCache=__webpack_require__(274),
	setCacheAdd=__webpack_require__(293),
	setCacheHas=__webpack_require__(294);
	
	
	
	
	
	
	
	
	
	function SetCache(values){
	var index=-1,
	length=values==null?0:values.length;
	
	this.__data__=new MapCache();
	while(++index<length){
	this.add(values[index]);
	}
	}
	
	
	SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;
	SetCache.prototype.has=setCacheHas;
	
	module.exports=SetCache;

/***/ },
/* 293 */
/***/ function(module, exports) {

	'use strict';
	var HASH_UNDEFINED='__lodash_hash_undefined__';
	
	
	
	
	
	
	
	
	
	
	
	function setCacheAdd(value){
	this.__data__.set(value,HASH_UNDEFINED);
	return this;
	}
	
	module.exports=setCacheAdd;

/***/ },
/* 294 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	function setCacheHas(value){
	return this.__data__.has(value);
	}
	
	module.exports=setCacheHas;

/***/ },
/* 295 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	
	function arraySome(array,predicate){
	var index=-1,
	length=array==null?0:array.length;
	
	while(++index<length){
	if(predicate(array[index],index,array)){
	return true;
	}
	}
	return false;
	}
	
	module.exports=arraySome;

/***/ },
/* 296 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	function cacheHas(cache,key){
	return cache.has(key);
	}
	
	module.exports=cacheHas;

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _Symbol=__webpack_require__(189),
	Uint8Array=__webpack_require__(298),
	eq=__webpack_require__(224),
	equalArrays=__webpack_require__(291),
	mapToArray=__webpack_require__(299),
	setToArray=__webpack_require__(300);
	
	
	var COMPARE_PARTIAL_FLAG=1,
	COMPARE_UNORDERED_FLAG=2;
	
	
	var boolTag='[object Boolean]',
	dateTag='[object Date]',
	errorTag='[object Error]',
	mapTag='[object Map]',
	numberTag='[object Number]',
	regexpTag='[object RegExp]',
	setTag='[object Set]',
	stringTag='[object String]',
	symbolTag='[object Symbol]';
	
	var arrayBufferTag='[object ArrayBuffer]',
	dataViewTag='[object DataView]';
	
	
	var symbolProto=_Symbol?_Symbol.prototype:undefined,
	symbolValueOf=symbolProto?symbolProto.valueOf:undefined;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function equalByTag(object,other,tag,bitmask,customizer,equalFunc,stack){
	switch(tag){
	case dataViewTag:
	if(object.byteLength!=other.byteLength||
	object.byteOffset!=other.byteOffset){
	return false;
	}
	object=object.buffer;
	other=other.buffer;
	
	case arrayBufferTag:
	if(object.byteLength!=other.byteLength||
	!equalFunc(new Uint8Array(object),new Uint8Array(other))){
	return false;
	}
	return true;
	
	case boolTag:
	case dateTag:
	case numberTag:
	
	
	return eq(+object,+other);
	
	case errorTag:
	return object.name==other.name&&object.message==other.message;
	
	case regexpTag:
	case stringTag:
	
	
	
	return object==other+'';
	
	case mapTag:
	var convert=mapToArray;
	
	case setTag:
	var isPartial=bitmask&COMPARE_PARTIAL_FLAG;
	convert||(convert=setToArray);
	
	if(object.size!=other.size&&!isPartial){
	return false;
	}
	
	var stacked=stack.get(object);
	if(stacked){
	return stacked==other;
	}
	bitmask|=COMPARE_UNORDERED_FLAG;
	
	
	stack.set(object,other);
	var result=equalArrays(convert(object),convert(other),bitmask,customizer,equalFunc,stack);
	stack['delete'](object);
	return result;
	
	case symbolTag:
	if(symbolValueOf){
	return symbolValueOf.call(object)==symbolValueOf.call(other);
	}}
	
	return false;
	}
	
	module.exports=equalByTag;

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var root=__webpack_require__(190);
	
	
	var Uint8Array=root.Uint8Array;
	
	module.exports=Uint8Array;

/***/ },
/* 299 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	function mapToArray(map){
	var index=-1,
	result=Array(map.size);
	
	map.forEach(function(value,key){
	result[++index]=[key,value];
	});
	return result;
	}
	
	module.exports=mapToArray;

/***/ },
/* 300 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	function setToArray(set){
	var index=-1,
	result=Array(set.size);
	
	set.forEach(function(value){
	result[++index]=value;
	});
	return result;
	}
	
	module.exports=setToArray;

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var keys=__webpack_require__(240);
	
	
	var COMPARE_PARTIAL_FLAG=1;
	
	
	var objectProto=Object.prototype;
	
	
	var hasOwnProperty=objectProto.hasOwnProperty;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function equalObjects(object,other,bitmask,customizer,equalFunc,stack){
	var isPartial=bitmask&COMPARE_PARTIAL_FLAG,
	objProps=keys(object),
	objLength=objProps.length,
	othProps=keys(other),
	othLength=othProps.length;
	
	if(objLength!=othLength&&!isPartial){
	return false;
	}
	var index=objLength;
	while(index--){
	var key=objProps[index];
	if(!(isPartial?key in other:hasOwnProperty.call(other,key))){
	return false;
	}
	}
	
	var stacked=stack.get(object);
	if(stacked&&stack.get(other)){
	return stacked==other;
	}
	var result=true;
	stack.set(object,other);
	stack.set(other,object);
	
	var skipCtor=isPartial;
	while(++index<objLength){
	key=objProps[index];
	var objValue=object[key],
	othValue=other[key];
	
	if(customizer){
	var compared=isPartial?
	customizer(othValue,objValue,key,other,object,stack):
	customizer(objValue,othValue,key,object,other,stack);
	}
	
	if(!(compared===undefined?
	objValue===othValue||equalFunc(objValue,othValue,bitmask,customizer,stack):
	compared))
	{
	result=false;
	break;
	}
	skipCtor||(skipCtor=key=='constructor');
	}
	if(result&&!skipCtor){
	var objCtor=object.constructor,
	othCtor=other.constructor;
	
	
	if(objCtor!=othCtor&&
	'constructor'in object&&'constructor'in other&&
	!(typeof objCtor=='function'&&objCtor instanceof objCtor&&
	typeof othCtor=='function'&&othCtor instanceof othCtor)){
	result=false;
	}
	}
	stack['delete'](object);
	stack['delete'](other);
	return result;
	}
	
	module.exports=equalObjects;

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var DataView=__webpack_require__(303),
	Map=__webpack_require__(273),
	Promise=__webpack_require__(304),
	Set=__webpack_require__(305),
	WeakMap=__webpack_require__(306),
	baseGetTag=__webpack_require__(188),
	toSource=__webpack_require__(222);
	
	
	var mapTag='[object Map]',
	objectTag='[object Object]',
	promiseTag='[object Promise]',
	setTag='[object Set]',
	weakMapTag='[object WeakMap]';
	
	var dataViewTag='[object DataView]';
	
	
	var dataViewCtorString=toSource(DataView),
	mapCtorString=toSource(Map),
	promiseCtorString=toSource(Promise),
	setCtorString=toSource(Set),
	weakMapCtorString=toSource(WeakMap);
	
	
	
	
	
	
	
	
	var getTag=baseGetTag;
	
	
	if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||
	Map&&getTag(new Map())!=mapTag||
	Promise&&getTag(Promise.resolve())!=promiseTag||
	Set&&getTag(new Set())!=setTag||
	WeakMap&&getTag(new WeakMap())!=weakMapTag){
	getTag=function getTag(value){
	var result=baseGetTag(value),
	Ctor=result==objectTag?value.constructor:undefined,
	ctorString=Ctor?toSource(Ctor):'';
	
	if(ctorString){
	switch(ctorString){
	case dataViewCtorString:return dataViewTag;
	case mapCtorString:return mapTag;
	case promiseCtorString:return promiseTag;
	case setCtorString:return setTag;
	case weakMapCtorString:return weakMapTag;}
	
	}
	return result;
	};
	}
	
	module.exports=getTag;

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var getNative=__webpack_require__(216),
	root=__webpack_require__(190);
	
	
	var DataView=getNative(root,'DataView');
	
	module.exports=DataView;

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var getNative=__webpack_require__(216),
	root=__webpack_require__(190);
	
	
	var Promise=getNative(root,'Promise');
	
	module.exports=Promise;

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var getNative=__webpack_require__(216),
	root=__webpack_require__(190);
	
	
	var Set=getNative(root,'Set');
	
	module.exports=Set;

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var getNative=__webpack_require__(216),
	root=__webpack_require__(190);
	
	
	var WeakMap=getNative(root,'WeakMap');
	
	module.exports=WeakMap;

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var isStrictComparable=__webpack_require__(308),
	keys=__webpack_require__(240);
	
	
	
	
	
	
	
	
	function getMatchData(object){
	var result=keys(object),
	length=result.length;
	
	while(length--){
	var key=result[length],
	value=object[key];
	
	result[length]=[key,value,isStrictComparable(value)];
	}
	return result;
	}
	
	module.exports=getMatchData;

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var isObject=__webpack_require__(219);
	
	
	
	
	
	
	
	
	
	function isStrictComparable(value){
	return value===value&&!isObject(value);
	}
	
	module.exports=isStrictComparable;

/***/ },
/* 309 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	function matchesStrictComparable(key,srcValue){
	return function(object){
	if(object==null){
	return false;
	}
	return object[key]===srcValue&&(
	srcValue!==undefined||key in Object(object));
	};
	}
	
	module.exports=matchesStrictComparable;

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseIsEqual=__webpack_require__(289),
	get=__webpack_require__(311),
	hasIn=__webpack_require__(323),
	isKey=__webpack_require__(314),
	isStrictComparable=__webpack_require__(308),
	matchesStrictComparable=__webpack_require__(309),
	toKey=__webpack_require__(322);
	
	
	var COMPARE_PARTIAL_FLAG=1,
	COMPARE_UNORDERED_FLAG=2;
	
	
	
	
	
	
	
	
	
	function baseMatchesProperty(path,srcValue){
	if(isKey(path)&&isStrictComparable(srcValue)){
	return matchesStrictComparable(toKey(path),srcValue);
	}
	return function(object){
	var objValue=get(object,path);
	return objValue===undefined&&objValue===srcValue?
	hasIn(object,path):
	baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG);
	};
	}
	
	module.exports=baseMatchesProperty;

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseGet=__webpack_require__(312);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function get(object,path,defaultValue){
	var result=object==null?undefined:baseGet(object,path);
	return result===undefined?defaultValue:result;
	}
	
	module.exports=get;

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var castPath=__webpack_require__(313),
	toKey=__webpack_require__(322);
	
	
	
	
	
	
	
	
	
	function baseGet(object,path){
	path=castPath(path,object);
	
	var index=0,
	length=path.length;
	
	while(object!=null&&index<length){
	object=object[toKey(path[index++])];
	}
	return index&&index==length?object:undefined;
	}
	
	module.exports=baseGet;

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var isArray=__webpack_require__(211),
	isKey=__webpack_require__(314),
	stringToPath=__webpack_require__(316),
	toString=__webpack_require__(319);
	
	
	
	
	
	
	
	
	
	function castPath(value,object){
	if(isArray(value)){
	return value;
	}
	return isKey(value,object)?[value]:stringToPath(toString(value));
	}
	
	module.exports=castPath;

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};var isArray=__webpack_require__(211),
	isSymbol=__webpack_require__(315);
	
	
	var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	reIsPlainProp=/^\w*$/;
	
	
	
	
	
	
	
	
	
	function isKey(value,object){
	if(isArray(value)){
	return false;
	}
	var type=typeof value==='undefined'?'undefined':_typeof(value);
	if(type=='number'||type=='symbol'||type=='boolean'||
	value==null||isSymbol(value)){
	return true;
	}
	return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||
	object!=null&&value in Object(object);
	}
	
	module.exports=isKey;

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};var baseGetTag=__webpack_require__(188),
	isObjectLike=__webpack_require__(196);
	
	
	var symbolTag='[object Symbol]';
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isSymbol(value){
	return(typeof value==='undefined'?'undefined':_typeof(value))=='symbol'||
	isObjectLike(value)&&baseGetTag(value)==symbolTag;
	}
	
	module.exports=isSymbol;

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var memoizeCapped=__webpack_require__(317);
	
	
	var reLeadingDot=/^\./,
	rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	
	
	var reEscapeChar=/\\(\\)?/g;
	
	
	
	
	
	
	
	
	var stringToPath=memoizeCapped(function(string){
	var result=[];
	if(reLeadingDot.test(string)){
	result.push('');
	}
	string.replace(rePropName,function(match,number,quote,string){
	result.push(quote?string.replace(reEscapeChar,'$1'):number||match);
	});
	return result;
	});
	
	module.exports=stringToPath;

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var memoize=__webpack_require__(318);
	
	
	var MAX_MEMOIZE_SIZE=500;
	
	
	
	
	
	
	
	
	
	function memoizeCapped(func){
	var result=memoize(func,function(key){
	if(cache.size===MAX_MEMOIZE_SIZE){
	cache.clear();
	}
	return key;
	});
	
	var cache=result.cache;
	return result;
	}
	
	module.exports=memoizeCapped;

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var MapCache=__webpack_require__(274);
	
	
	var FUNC_ERROR_TEXT='Expected a function';
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function memoize(func,resolver){
	if(typeof func!='function'||resolver!=null&&typeof resolver!='function'){
	throw new TypeError(FUNC_ERROR_TEXT);
	}
	var memoized=function memoized(){
	var args=arguments,
	key=resolver?resolver.apply(this,args):args[0],
	cache=memoized.cache;
	
	if(cache.has(key)){
	return cache.get(key);
	}
	var result=func.apply(this,args);
	memoized.cache=cache.set(key,result)||cache;
	return result;
	};
	memoized.cache=new(memoize.Cache||MapCache)();
	return memoized;
	}
	
	
	memoize.Cache=MapCache;
	
	module.exports=memoize;

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseToString=__webpack_require__(320);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function toString(value){
	return value==null?'':baseToString(value);
	}
	
	module.exports=toString;

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _Symbol=__webpack_require__(189),
	arrayMap=__webpack_require__(321),
	isArray=__webpack_require__(211),
	isSymbol=__webpack_require__(315);
	
	
	var INFINITY=1/0;
	
	
	var symbolProto=_Symbol?_Symbol.prototype:undefined,
	symbolToString=symbolProto?symbolProto.toString:undefined;
	
	
	
	
	
	
	
	
	
	function baseToString(value){
	
	if(typeof value=='string'){
	return value;
	}
	if(isArray(value)){
	
	return arrayMap(value,baseToString)+'';
	}
	if(isSymbol(value)){
	return symbolToString?symbolToString.call(value):'';
	}
	var result=value+'';
	return result=='0'&&1/value==-INFINITY?'-0':result;
	}
	
	module.exports=baseToString;

/***/ },
/* 321 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	function arrayMap(array,iteratee){
	var index=-1,
	length=array==null?0:array.length,
	result=Array(length);
	
	while(++index<length){
	result[index]=iteratee(array[index],index,array);
	}
	return result;
	}
	
	module.exports=arrayMap;

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var isSymbol=__webpack_require__(315);
	
	
	var INFINITY=1/0;
	
	
	
	
	
	
	
	
	function toKey(value){
	if(typeof value=='string'||isSymbol(value)){
	return value;
	}
	var result=value+'';
	return result=='0'&&1/value==-INFINITY?'-0':result;
	}
	
	module.exports=toKey;

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseHasIn=__webpack_require__(324),
	hasPath=__webpack_require__(325);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function hasIn(object,path){
	return object!=null&&hasPath(object,path,baseHasIn);
	}
	
	module.exports=hasIn;

/***/ },
/* 324 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	function baseHasIn(object,key){
	return object!=null&&key in Object(object);
	}
	
	module.exports=baseHasIn;

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var castPath=__webpack_require__(313),
	isArguments=__webpack_require__(243),
	isArray=__webpack_require__(211),
	isIndex=__webpack_require__(238),
	isLength=__webpack_require__(237),
	toKey=__webpack_require__(322);
	
	
	
	
	
	
	
	
	
	
	function hasPath(object,path,hasFunc){
	path=castPath(path,object);
	
	var index=-1,
	length=path.length,
	result=false;
	
	while(++index<length){
	var key=toKey(path[index]);
	if(!(result=object!=null&&hasFunc(object,key))){
	break;
	}
	object=object[key];
	}
	if(result||++index!=length){
	return result;
	}
	length=object==null?0:object.length;
	return!!length&&isLength(length)&&isIndex(key,length)&&(
	isArray(object)||isArguments(object));
	}
	
	module.exports=hasPath;

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseProperty=__webpack_require__(327),
	basePropertyDeep=__webpack_require__(328),
	isKey=__webpack_require__(314),
	toKey=__webpack_require__(322);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function property(path){
	return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);
	}
	
	module.exports=property;

/***/ },
/* 327 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	function baseProperty(key){
	return function(object){
	return object==null?undefined:object[key];
	};
	}
	
	module.exports=baseProperty;

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseGet=__webpack_require__(312);
	
	
	
	
	
	
	
	
	function basePropertyDeep(path){
	return function(object){
	return baseGet(object,path);
	};
	}
	
	module.exports=basePropertyDeep;

/***/ },
/* 329 */
/***/ function(module, exports) {

	'use strict';(function(self){
	'use strict';
	
	if(self.fetch){
	return;
	}
	
	var support={
	searchParams:'URLSearchParams'in self,
	iterable:'Symbol'in self&&'iterator'in Symbol,
	blob:'FileReader'in self&&'Blob'in self&&function(){
	try{
	new Blob();
	return true;
	}catch(e){
	return false;
	}
	}(),
	formData:'FormData'in self,
	arrayBuffer:'ArrayBuffer'in self};
	
	
	if(support.arrayBuffer){
	var viewClasses=[
	'[object Int8Array]',
	'[object Uint8Array]',
	'[object Uint8ClampedArray]',
	'[object Int16Array]',
	'[object Uint16Array]',
	'[object Int32Array]',
	'[object Uint32Array]',
	'[object Float32Array]',
	'[object Float64Array]'];
	
	
	var isDataView=function isDataView(obj){
	return obj&&DataView.prototype.isPrototypeOf(obj);
	};
	
	var isArrayBufferView=ArrayBuffer.isView||function(obj){
	return obj&&viewClasses.indexOf(Object.prototype.toString.call(obj))>-1;
	};
	}
	
	function normalizeName(name){
	if(typeof name!=='string'){
	name=String(name);
	}
	if(/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)){
	throw new TypeError('Invalid character in header field name');
	}
	return name.toLowerCase();
	}
	
	function normalizeValue(value){
	if(typeof value!=='string'){
	value=String(value);
	}
	return value;
	}
	
	
	function iteratorFor(items){
	var iterator={
	next:function next(){
	var value=items.shift();
	return{done:value===undefined,value:value};
	}};
	
	
	if(support.iterable){
	iterator[typeof Symbol==='function'?Symbol.iterator:'@@iterator']=function(){
	return iterator;
	};
	}
	
	return iterator;
	}
	
	function Headers(headers){
	this.map={};
	
	if(headers instanceof Headers){
	headers.forEach(function(value,name){
	this.append(name,value);
	},this);
	
	}else if(headers){
	Object.getOwnPropertyNames(headers).forEach(function(name){
	this.append(name,headers[name]);
	},this);
	}
	}
	
	Headers.prototype.append=function(name,value){
	name=normalizeName(name);
	value=normalizeValue(value);
	var oldValue=this.map[name];
	this.map[name]=oldValue?oldValue+','+value:value;
	};
	
	Headers.prototype['delete']=function(name){
	delete this.map[normalizeName(name)];
	};
	
	Headers.prototype.get=function(name){
	name=normalizeName(name);
	return this.has(name)?this.map[name]:null;
	};
	
	Headers.prototype.has=function(name){
	return this.map.hasOwnProperty(normalizeName(name));
	};
	
	Headers.prototype.set=function(name,value){
	this.map[normalizeName(name)]=normalizeValue(value);
	};
	
	Headers.prototype.forEach=function(callback,thisArg){
	for(var name in this.map){
	if(this.map.hasOwnProperty(name)){
	callback.call(thisArg,this.map[name],name,this);
	}
	}
	};
	
	Headers.prototype.keys=function(){
	var items=[];
	this.forEach(function(value,name){items.push(name);});
	return iteratorFor(items);
	};
	
	Headers.prototype.values=function(){
	var items=[];
	this.forEach(function(value){items.push(value);});
	return iteratorFor(items);
	};
	
	Headers.prototype.entries=function(){
	var items=[];
	this.forEach(function(value,name){items.push([name,value]);});
	return iteratorFor(items);
	};
	
	if(support.iterable){
	Headers.prototype[typeof Symbol==='function'?Symbol.iterator:'@@iterator']=Headers.prototype.entries;
	}
	
	function consumed(body){
	if(body.bodyUsed){
	return Promise.reject(new TypeError('Already read'));
	}
	body.bodyUsed=true;
	}
	
	function fileReaderReady(reader){
	return new Promise(function(resolve,reject){
	reader.onload=function(){
	resolve(reader.result);
	};
	reader.onerror=function(){
	reject(reader.error);
	};
	});
	}
	
	function readBlobAsArrayBuffer(blob){
	var reader=new FileReader();
	var promise=fileReaderReady(reader);
	reader.readAsArrayBuffer(blob);
	return promise;
	}
	
	function readBlobAsText(blob){
	var reader=new FileReader();
	var promise=fileReaderReady(reader);
	reader.readAsText(blob);
	return promise;
	}
	
	function readArrayBufferAsText(buf){
	var view=new Uint8Array(buf);
	var chars=new Array(view.length);
	
	for(var i=0;i<view.length;i++){
	chars[i]=String.fromCharCode(view[i]);
	}
	return chars.join('');
	}
	
	function bufferClone(buf){
	if(buf.slice){
	return buf.slice(0);
	}else{
	var view=new Uint8Array(buf.byteLength);
	view.set(new Uint8Array(buf));
	return view.buffer;
	}
	}
	
	function Body(){
	this.bodyUsed=false;
	
	this._initBody=function(body){
	this._bodyInit=body;
	if(!body){
	this._bodyText='';
	}else if(typeof body==='string'){
	this._bodyText=body;
	}else if(support.blob&&Blob.prototype.isPrototypeOf(body)){
	this._bodyBlob=body;
	}else if(support.formData&&FormData.prototype.isPrototypeOf(body)){
	this._bodyFormData=body;
	}else if(support.searchParams&&URLSearchParams.prototype.isPrototypeOf(body)){
	this._bodyText=body.toString();
	}else if(support.arrayBuffer&&support.blob&&isDataView(body)){
	this._bodyArrayBuffer=bufferClone(body.buffer);
	
	this._bodyInit=new Blob([this._bodyArrayBuffer]);
	}else if(support.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(body)||isArrayBufferView(body))){
	this._bodyArrayBuffer=bufferClone(body);
	}else{
	throw new Error('unsupported BodyInit type');
	}
	
	if(!this.headers.get('content-type')){
	if(typeof body==='string'){
	this.headers.set('content-type','text/plain;charset=UTF-8');
	}else if(this._bodyBlob&&this._bodyBlob.type){
	this.headers.set('content-type',this._bodyBlob.type);
	}else if(support.searchParams&&URLSearchParams.prototype.isPrototypeOf(body)){
	this.headers.set('content-type','application/x-www-form-urlencoded;charset=UTF-8');
	}
	}
	};
	
	if(support.blob){
	this.blob=function(){
	var rejected=consumed(this);
	if(rejected){
	return rejected;
	}
	
	if(this._bodyBlob){
	return Promise.resolve(this._bodyBlob);
	}else if(this._bodyArrayBuffer){
	return Promise.resolve(new Blob([this._bodyArrayBuffer]));
	}else if(this._bodyFormData){
	throw new Error('could not read FormData body as blob');
	}else{
	return Promise.resolve(new Blob([this._bodyText]));
	}
	};
	
	this.arrayBuffer=function(){
	if(this._bodyArrayBuffer){
	return consumed(this)||Promise.resolve(this._bodyArrayBuffer);
	}else{
	return this.blob().then(readBlobAsArrayBuffer);
	}
	};
	}
	
	this.text=function(){
	var rejected=consumed(this);
	if(rejected){
	return rejected;
	}
	
	if(this._bodyBlob){
	return readBlobAsText(this._bodyBlob);
	}else if(this._bodyArrayBuffer){
	return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
	}else if(this._bodyFormData){
	throw new Error('could not read FormData body as text');
	}else{
	return Promise.resolve(this._bodyText);
	}
	};
	
	if(support.formData){
	this.formData=function(){
	return this.text().then(decode);
	};
	}
	
	this.json=function(){
	return this.text().then(JSON.parse);
	};
	
	return this;
	}
	
	
	var methods=['DELETE','GET','HEAD','OPTIONS','POST','PUT'];
	
	function normalizeMethod(method){
	var upcased=method.toUpperCase();
	return methods.indexOf(upcased)>-1?upcased:method;
	}
	
	function Request(input,options){
	options=options||{};
	var body=options.body;
	
	if(typeof input==='string'){
	this.url=input;
	}else{
	if(input.bodyUsed){
	throw new TypeError('Already read');
	}
	this.url=input.url;
	this.credentials=input.credentials;
	if(!options.headers){
	this.headers=new Headers(input.headers);
	}
	this.method=input.method;
	this.mode=input.mode;
	if(!body&&input._bodyInit!=null){
	body=input._bodyInit;
	input.bodyUsed=true;
	}
	}
	
	this.credentials=options.credentials||this.credentials||'omit';
	if(options.headers||!this.headers){
	this.headers=new Headers(options.headers);
	}
	this.method=normalizeMethod(options.method||this.method||'GET');
	this.mode=options.mode||this.mode||null;
	this.referrer=null;
	
	if((this.method==='GET'||this.method==='HEAD')&&body){
	throw new TypeError('Body not allowed for GET or HEAD requests');
	}
	this._initBody(body);
	}
	
	Request.prototype.clone=function(){
	return new Request(this,{body:this._bodyInit});
	};
	
	function decode(body){
	var form=new FormData();
	body.trim().split('&').forEach(function(bytes){
	if(bytes){
	var split=bytes.split('=');
	var name=split.shift().replace(/\+/g,' ');
	var value=split.join('=').replace(/\+/g,' ');
	form.append(decodeURIComponent(name),decodeURIComponent(value));
	}
	});
	return form;
	}
	
	function parseHeaders(rawHeaders){
	var headers=new Headers();
	rawHeaders.split('\r\n').forEach(function(line){
	var parts=line.split(':');
	var key=parts.shift().trim();
	if(key){
	var value=parts.join(':').trim();
	headers.append(key,value);
	}
	});
	return headers;
	}
	
	Body.call(Request.prototype);
	
	function Response(bodyInit,options){
	if(!options){
	options={};
	}
	
	this.type='default';
	this.status='status'in options?options.status:200;
	this.ok=this.status>=200&&this.status<300;
	this.statusText='statusText'in options?options.statusText:'OK';
	this.headers=new Headers(options.headers);
	this.url=options.url||'';
	this._initBody(bodyInit);
	}
	
	Body.call(Response.prototype);
	
	Response.prototype.clone=function(){
	return new Response(this._bodyInit,{
	status:this.status,
	statusText:this.statusText,
	headers:new Headers(this.headers),
	url:this.url});
	
	};
	
	Response.error=function(){
	var response=new Response(null,{status:0,statusText:''});
	response.type='error';
	return response;
	};
	
	var redirectStatuses=[301,302,303,307,308];
	
	Response.redirect=function(url,status){
	if(redirectStatuses.indexOf(status)===-1){
	throw new RangeError('Invalid status code');
	}
	
	return new Response(null,{status:status,headers:{location:url}});
	};
	
	self.Headers=Headers;
	self.Request=Request;
	self.Response=Response;
	
	self.fetch=function(input,init){
	return new Promise(function(resolve,reject){
	var request=new Request(input,init);
	var xhr=new XMLHttpRequest();
	
	xhr.onload=function(){
	var options={
	status:xhr.status,
	statusText:xhr.statusText,
	headers:parseHeaders(xhr.getAllResponseHeaders()||'')};
	
	options.url='responseURL'in xhr?xhr.responseURL:options.headers.get('X-Request-URL');
	var body='response'in xhr?xhr.response:xhr.responseText;
	resolve(new Response(body,options));
	};
	
	xhr.onerror=function(){
	reject(new TypeError('Network request failed'));
	};
	
	xhr.ontimeout=function(){
	reject(new TypeError('Network request failed'));
	};
	
	xhr.open(request.method,request.url,true);
	
	if(request.credentials==='include'){
	xhr.withCredentials=true;
	}
	
	if('responseType'in xhr&&support.blob){
	xhr.responseType='blob';
	}
	
	request.headers.forEach(function(value,name){
	xhr.setRequestHeader(name,value);
	});
	
	xhr.send(typeof request._bodyInit==='undefined'?null:request._bodyInit);
	});
	};
	self.fetch.polyfill=true;
	})(typeof self!=='undefined'?self:undefined);

/***/ },
/* 330 */
/***/ function(module, exports) {

	"use strict";module.exports=
	function(modules){
	
	var installedModules={};
	
	
	function __webpack_require__(moduleId){
	
	
	if(installedModules[moduleId])
	return installedModules[moduleId].exports;
	
	
	var module=installedModules[moduleId]={
	exports:{},
	id:moduleId,
	loaded:false};
	
	
	
	modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);
	
	
	module.loaded=true;
	
	
	return module.exports;
	}
	
	
	
	__webpack_require__.m=modules;
	
	
	__webpack_require__.c=installedModules;
	
	
	__webpack_require__.p="";
	
	
	return __webpack_require__(0);
	}(
	
	[
	
	function(module,exports,__webpack_require__){
	
	module.exports=__webpack_require__(1);
	
	
	},
	
	function(module,exports,__webpack_require__){
	
	'use strict';
	
	Object.defineProperty(exports,"__esModule",{
	value:true});
	
	exports.print=print;
	
	var _visitor=__webpack_require__(2);
	
	
	
	
	
	function print(ast){
	return(0,_visitor.visit)(ast,{leave:printDocASTReducer});
	}
	
	
	
	
	
	
	
	
	var printDocASTReducer={
	Name:function Name(node){
	return node.value;
	},
	Variable:function Variable(node){
	return'$'+node.name;
	},
	
	
	
	Document:function Document(node){
	return join(node.definitions,'\n\n')+'\n';
	},
	
	OperationDefinition:function OperationDefinition(node){
	var op=node.operation;
	var name=node.name;
	var varDefs=wrap('(',join(node.variableDefinitions,', '),')');
	var directives=join(node.directives,' ');
	var selectionSet=node.selectionSet;
	
	
	return!name&&!directives&&!varDefs&&op==='query'?selectionSet:join([op,join([name,varDefs]),directives,selectionSet],' ');
	},
	
	
	VariableDefinition:function VariableDefinition(_ref){
	var variable=_ref.variable;
	var type=_ref.type;
	var defaultValue=_ref.defaultValue;
	return variable+': '+type+wrap(' = ',defaultValue);
	},
	
	SelectionSet:function SelectionSet(_ref2){
	var selections=_ref2.selections;
	return block(selections);
	},
	
	Field:function Field(_ref3){
	var alias=_ref3.alias;
	var name=_ref3.name;
	var args=_ref3.arguments;
	var directives=_ref3.directives;
	var selectionSet=_ref3.selectionSet;
	return join([wrap('',alias,': ')+name+wrap('(',join(args,', '),')'),join(directives,' '),selectionSet],' ');
	},
	
	Argument:function Argument(_ref4){
	var name=_ref4.name;
	var value=_ref4.value;
	return name+': '+value;
	},
	
	
	
	FragmentSpread:function FragmentSpread(_ref5){
	var name=_ref5.name;
	var directives=_ref5.directives;
	return'...'+name+wrap(' ',join(directives,' '));
	},
	
	InlineFragment:function InlineFragment(_ref6){
	var typeCondition=_ref6.typeCondition;
	var directives=_ref6.directives;
	var selectionSet=_ref6.selectionSet;
	return join(['...',wrap('on ',typeCondition),join(directives,' '),selectionSet],' ');
	},
	
	FragmentDefinition:function FragmentDefinition(_ref7){
	var name=_ref7.name;
	var typeCondition=_ref7.typeCondition;
	var directives=_ref7.directives;
	var selectionSet=_ref7.selectionSet;
	return'fragment '+name+' on '+typeCondition+' '+wrap('',join(directives,' '),' ')+selectionSet;
	},
	
	
	
	IntValue:function IntValue(_ref8){
	var value=_ref8.value;
	return value;
	},
	FloatValue:function FloatValue(_ref9){
	var value=_ref9.value;
	return value;
	},
	StringValue:function StringValue(_ref10){
	var value=_ref10.value;
	return JSON.stringify(value);
	},
	BooleanValue:function BooleanValue(_ref11){
	var value=_ref11.value;
	return JSON.stringify(value);
	},
	EnumValue:function EnumValue(_ref12){
	var value=_ref12.value;
	return value;
	},
	ListValue:function ListValue(_ref13){
	var values=_ref13.values;
	return'['+join(values,', ')+']';
	},
	ObjectValue:function ObjectValue(_ref14){
	var fields=_ref14.fields;
	return'{'+join(fields,', ')+'}';
	},
	ObjectField:function ObjectField(_ref15){
	var name=_ref15.name;
	var value=_ref15.value;
	return name+': '+value;
	},
	
	
	
	Directive:function Directive(_ref16){
	var name=_ref16.name;
	var args=_ref16.arguments;
	return'@'+name+wrap('(',join(args,', '),')');
	},
	
	
	
	NamedType:function NamedType(_ref17){
	var name=_ref17.name;
	return name;
	},
	ListType:function ListType(_ref18){
	var type=_ref18.type;
	return'['+type+']';
	},
	NonNullType:function NonNullType(_ref19){
	var type=_ref19.type;
	return type+'!';
	},
	
	
	
	SchemaDefinition:function SchemaDefinition(_ref20){
	var directives=_ref20.directives;
	var operationTypes=_ref20.operationTypes;
	return join(['schema',join(directives,' '),block(operationTypes)],' ');
	},
	
	OperationTypeDefinition:function OperationTypeDefinition(_ref21){
	var operation=_ref21.operation;
	var type=_ref21.type;
	return operation+': '+type;
	},
	
	ScalarTypeDefinition:function ScalarTypeDefinition(_ref22){
	var name=_ref22.name;
	var directives=_ref22.directives;
	return join(['scalar',name,join(directives,' ')],' ');
	},
	
	ObjectTypeDefinition:function ObjectTypeDefinition(_ref23){
	var name=_ref23.name;
	var interfaces=_ref23.interfaces;
	var directives=_ref23.directives;
	var fields=_ref23.fields;
	return join(['type',name,wrap('implements ',join(interfaces,', ')),join(directives,' '),block(fields)],' ');
	},
	
	FieldDefinition:function FieldDefinition(_ref24){
	var name=_ref24.name;
	var args=_ref24.arguments;
	var type=_ref24.type;
	var directives=_ref24.directives;
	return name+wrap('(',join(args,', '),')')+': '+type+wrap(' ',join(directives,' '));
	},
	
	InputValueDefinition:function InputValueDefinition(_ref25){
	var name=_ref25.name;
	var type=_ref25.type;
	var defaultValue=_ref25.defaultValue;
	var directives=_ref25.directives;
	return join([name+': '+type,wrap('= ',defaultValue),join(directives,' ')],' ');
	},
	
	InterfaceTypeDefinition:function InterfaceTypeDefinition(_ref26){
	var name=_ref26.name;
	var directives=_ref26.directives;
	var fields=_ref26.fields;
	return join(['interface',name,join(directives,' '),block(fields)],' ');
	},
	
	UnionTypeDefinition:function UnionTypeDefinition(_ref27){
	var name=_ref27.name;
	var directives=_ref27.directives;
	var types=_ref27.types;
	return join(['union',name,join(directives,' '),'= '+join(types,' | ')],' ');
	},
	
	EnumTypeDefinition:function EnumTypeDefinition(_ref28){
	var name=_ref28.name;
	var directives=_ref28.directives;
	var values=_ref28.values;
	return join(['enum',name,join(directives,' '),block(values)],' ');
	},
	
	EnumValueDefinition:function EnumValueDefinition(_ref29){
	var name=_ref29.name;
	var directives=_ref29.directives;
	return join([name,join(directives,' ')],' ');
	},
	
	InputObjectTypeDefinition:function InputObjectTypeDefinition(_ref30){
	var name=_ref30.name;
	var directives=_ref30.directives;
	var fields=_ref30.fields;
	return join(['input',name,join(directives,' '),block(fields)],' ');
	},
	
	TypeExtensionDefinition:function TypeExtensionDefinition(_ref31){
	var definition=_ref31.definition;
	return'extend '+definition;
	},
	
	DirectiveDefinition:function DirectiveDefinition(_ref32){
	var name=_ref32.name;
	var args=_ref32.arguments;
	var locations=_ref32.locations;
	return'directive @'+name+wrap('(',join(args,', '),')')+' on '+join(locations,' | ');
	}};
	
	
	
	
	
	
	function join(maybeArray,separator){
	return maybeArray?maybeArray.filter(function(x){
	return x;
	}).join(separator||''):'';
	}
	
	
	
	
	
	function block(array){
	return array&&array.length!==0?indent('{\n'+join(array,'\n'))+'\n}':'{}';
	}
	
	
	
	
	
	function wrap(start,maybeString,end){
	return maybeString?start+maybeString+(end||''):'';
	}
	
	function indent(maybeString){
	return maybeString&&maybeString.replace(/\n/g,'\n  ');
	}
	
	},
	
	function(module,exports){
	
	'use strict';
	
	Object.defineProperty(exports,"__esModule",{
	value:true});
	
	exports.visit=visit;
	exports.visitInParallel=visitInParallel;
	exports.visitWithTypeInfo=visitWithTypeInfo;
	
	
	
	
	
	
	
	
	
	var QueryDocumentKeys=exports.QueryDocumentKeys={
	Name:[],
	
	Document:['definitions'],
	OperationDefinition:['name','variableDefinitions','directives','selectionSet'],
	VariableDefinition:['variable','type','defaultValue'],
	Variable:['name'],
	SelectionSet:['selections'],
	Field:['alias','name','arguments','directives','selectionSet'],
	Argument:['name','value'],
	
	FragmentSpread:['name','directives'],
	InlineFragment:['typeCondition','directives','selectionSet'],
	FragmentDefinition:['name','typeCondition','directives','selectionSet'],
	
	IntValue:[],
	FloatValue:[],
	StringValue:[],
	BooleanValue:[],
	EnumValue:[],
	ListValue:['values'],
	ObjectValue:['fields'],
	ObjectField:['name','value'],
	
	Directive:['name','arguments'],
	
	NamedType:['name'],
	ListType:['type'],
	NonNullType:['type'],
	
	SchemaDefinition:['directives','operationTypes'],
	OperationTypeDefinition:['type'],
	
	ScalarTypeDefinition:['name','directives'],
	ObjectTypeDefinition:['name','interfaces','directives','fields'],
	FieldDefinition:['name','arguments','type','directives'],
	InputValueDefinition:['name','type','defaultValue','directives'],
	InterfaceTypeDefinition:['name','directives','fields'],
	UnionTypeDefinition:['name','directives','types'],
	EnumTypeDefinition:['name','directives','values'],
	EnumValueDefinition:['name','directives'],
	InputObjectTypeDefinition:['name','directives','fields'],
	
	TypeExtensionDefinition:['definition'],
	
	DirectiveDefinition:['name','arguments','locations']};
	
	
	var BREAK=exports.BREAK={};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function visit(root,visitor,keyMap){
	var visitorKeys=keyMap||QueryDocumentKeys;
	
	var stack=void 0;
	var inArray=Array.isArray(root);
	var keys=[root];
	var index=-1;
	var edits=[];
	var parent=void 0;
	var path=[];
	var ancestors=[];
	var newRoot=root;
	
	do{
	index++;
	var isLeaving=index===keys.length;
	var key=void 0;
	var node=void 0;
	var isEdited=isLeaving&&edits.length!==0;
	if(isLeaving){
	key=ancestors.length===0?undefined:path.pop();
	node=parent;
	parent=ancestors.pop();
	if(isEdited){
	if(inArray){
	node=node.slice();
	}else{
	var clone={};
	for(var k in node){
	if(node.hasOwnProperty(k)){
	clone[k]=node[k];
	}
	}
	node=clone;
	}
	var editOffset=0;
	for(var ii=0;ii<edits.length;ii++){
	var editKey=edits[ii][0];
	var editValue=edits[ii][1];
	if(inArray){
	editKey-=editOffset;
	}
	if(inArray&&editValue===null){
	node.splice(editKey,1);
	editOffset++;
	}else{
	node[editKey]=editValue;
	}
	}
	}
	index=stack.index;
	keys=stack.keys;
	edits=stack.edits;
	inArray=stack.inArray;
	stack=stack.prev;
	}else{
	key=parent?inArray?index:keys[index]:undefined;
	node=parent?parent[key]:newRoot;
	if(node===null||node===undefined){
	continue;
	}
	if(parent){
	path.push(key);
	}
	}
	
	var result=void 0;
	if(!Array.isArray(node)){
	if(!isNode(node)){
	throw new Error('Invalid AST Node: '+JSON.stringify(node));
	}
	var visitFn=getVisitFn(visitor,node.kind,isLeaving);
	if(visitFn){
	result=visitFn.call(visitor,node,key,parent,path,ancestors);
	
	if(result===BREAK){
	break;
	}
	
	if(result===false){
	if(!isLeaving){
	path.pop();
	continue;
	}
	}else if(result!==undefined){
	edits.push([key,result]);
	if(!isLeaving){
	if(isNode(result)){
	node=result;
	}else{
	path.pop();
	continue;
	}
	}
	}
	}
	}
	
	if(result===undefined&&isEdited){
	edits.push([key,node]);
	}
	
	if(!isLeaving){
	stack={inArray:inArray,index:index,keys:keys,edits:edits,prev:stack};
	inArray=Array.isArray(node);
	keys=inArray?node:visitorKeys[node.kind]||[];
	index=-1;
	edits=[];
	if(parent){
	ancestors.push(parent);
	}
	parent=node;
	}
	}while(stack!==undefined);
	
	if(edits.length!==0){
	newRoot=edits[edits.length-1][1];
	}
	
	return newRoot;
	}
	
	function isNode(maybeNode){
	return maybeNode&&typeof maybeNode.kind==='string';
	}
	
	
	
	
	
	
	
	function visitInParallel(visitors){
	var skipping=new Array(visitors.length);
	
	return{
	enter:function enter(node){
	for(var i=0;i<visitors.length;i++){
	if(!skipping[i]){
	var fn=getVisitFn(visitors[i],node.kind,false);
	if(fn){
	var result=fn.apply(visitors[i],arguments);
	if(result===false){
	skipping[i]=node;
	}else if(result===BREAK){
	skipping[i]=BREAK;
	}else if(result!==undefined){
	return result;
	}
	}
	}
	}
	},
	leave:function leave(node){
	for(var i=0;i<visitors.length;i++){
	if(!skipping[i]){
	var fn=getVisitFn(visitors[i],node.kind,true);
	if(fn){
	var result=fn.apply(visitors[i],arguments);
	if(result===BREAK){
	skipping[i]=BREAK;
	}else if(result!==undefined&&result!==false){
	return result;
	}
	}
	}else if(skipping[i]===node){
	skipping[i]=null;
	}
	}
	}};
	
	}
	
	
	
	
	
	function visitWithTypeInfo(typeInfo,visitor){
	return{
	enter:function enter(node){
	typeInfo.enter(node);
	var fn=getVisitFn(visitor,node.kind,false);
	if(fn){
	var result=fn.apply(visitor,arguments);
	if(result!==undefined){
	typeInfo.leave(node);
	if(isNode(result)){
	typeInfo.enter(result);
	}
	}
	return result;
	}
	},
	leave:function leave(node){
	var fn=getVisitFn(visitor,node.kind,true);
	var result=void 0;
	if(fn){
	result=fn.apply(visitor,arguments);
	}
	typeInfo.leave(node);
	return result;
	}};
	
	}
	
	
	
	
	
	function getVisitFn(visitor,kind,isLeaving){
	var kindVisitor=visitor[kind];
	if(kindVisitor){
	if(!isLeaving&&typeof kindVisitor==='function'){
	
	return kindVisitor;
	}
	var kindSpecificVisitor=isLeaving?kindVisitor.leave:kindVisitor.enter;
	if(typeof kindSpecificVisitor==='function'){
	
	return kindSpecificVisitor;
	}
	}else{
	var specificVisitor=isLeaving?visitor.leave:visitor.enter;
	if(specificVisitor){
	if(typeof specificVisitor==='function'){
	
	return specificVisitor;
	}
	var specificKindVisitor=specificVisitor[kind];
	if(typeof specificKindVisitor==='function'){
	
	return specificKindVisitor;
	}
	}
	}
	}
	
	}]);

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends=undefined&&undefined.__extends||function(d,b){
	for(var p in b){if(b.hasOwnProperty(p))d[p]=b[p];}
	function __(){this.constructor=d;}
	d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());
	};
	__webpack_require__(329);
	var assign=__webpack_require__(212);
	var isNumber=__webpack_require__(332);
	var networkInterface_1=__webpack_require__(209);
	var batching_1=__webpack_require__(333);
	var HTTPBatchedNetworkInterface=function(_super){
	__extends(HTTPBatchedNetworkInterface,_super);
	function HTTPBatchedNetworkInterface(uri,pollInterval,fetchOpts){
	_super.call(this,uri,fetchOpts);
	if(!isNumber(pollInterval)){
	throw new Error("pollInterval must be a number, got "+pollInterval);
	}
	this.pollInterval=pollInterval;
	this.batcher=new batching_1.QueryBatcher({
	batchFetchFunction:this.batchQuery.bind(this)});
	
	this.batcher.start(this.pollInterval);
	}
	;
	HTTPBatchedNetworkInterface.prototype.query=function(request){
	return this.batcher.enqueueRequest(request);
	};
	HTTPBatchedNetworkInterface.prototype.batchQuery=function(requests){
	var _this=this;
	var options=assign({},this._opts);
	var middlewarePromises=[];
	requests.forEach(function(request){
	middlewarePromises.push(_this.applyMiddlewares({
	request:request,
	options:options}));
	
	});
	return new Promise(function(resolve,reject){
	Promise.all(middlewarePromises).then(function(requestsAndOptions){
	return _this.batchedFetchFromRemoteEndpoint(requestsAndOptions).
	then(function(result){
	return result.json();
	}).
	then(function(responses){
	if(typeof responses.map!=='function'){
	throw new Error('BatchingNetworkInterface: server response is not an array');
	}
	var afterwaresPromises=responses.map(function(response,index){
	return _this.applyAfterwares({
	response:response,
	options:requestsAndOptions[index].options});
	
	});
	Promise.all(afterwaresPromises).then(function(responsesAndOptions){
	var results=[];
	responsesAndOptions.forEach(function(result){
	results.push(result.response);
	});
	resolve(results);
	}).catch(function(error){
	reject(error);
	});
	});
	}).catch(function(error){
	reject(error);
	});
	});
	};
	HTTPBatchedNetworkInterface.prototype.batchedFetchFromRemoteEndpoint=function(requestsAndOptions){
	var options={};
	requestsAndOptions.forEach(function(requestAndOptions){
	assign(options,requestAndOptions.options);
	});
	var printedRequests=requestsAndOptions.map(function(_a){
	var request=_a.request;
	return networkInterface_1.printRequest(request);
	});
	return fetch(this._uri,assign({},this._opts,{
	body:JSON.stringify(printedRequests),
	method:'POST'},
	options,{
	headers:assign({},{
	Accept:'*/*',
	'Content-Type':'application/json'},
	options.headers)}));
	
	};
	;
	return HTTPBatchedNetworkInterface;
	}(networkInterface_1.HTTPFetchNetworkInterface);
	exports.HTTPBatchedNetworkInterface=HTTPBatchedNetworkInterface;
	function createBatchingNetworkInterface(options){
	if(!options){
	throw new Error('You must pass an options argument to createNetworkInterface.');
	}
	return new HTTPBatchedNetworkInterface(options.uri,options.batchInterval,options.opts);
	}
	exports.createBatchingNetworkInterface=createBatchingNetworkInterface;

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseGetTag=__webpack_require__(188),
	isObjectLike=__webpack_require__(196);
	
	
	var numberTag='[object Number]';
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isNumber(value){
	return typeof value=='number'||
	isObjectLike(value)&&baseGetTag(value)==numberTag;
	}
	
	module.exports=isNumber;

/***/ },
/* 333 */
/***/ function(module, exports) {

	"use strict";
	;
	var QueryBatcher=function(){
	function QueryBatcher(_a){
	var batchFetchFunction=_a.batchFetchFunction;
	this.queuedRequests=[];
	this.queuedRequests=[];
	this.batchFetchFunction=batchFetchFunction;
	}
	QueryBatcher.prototype.enqueueRequest=function(request){
	var fetchRequest={
	request:request};
	
	this.queuedRequests.push(fetchRequest);
	fetchRequest.promise=new Promise(function(resolve,reject){
	fetchRequest.resolve=resolve;
	fetchRequest.reject=reject;
	});
	return fetchRequest.promise;
	};
	QueryBatcher.prototype.consumeQueue=function(){
	if(this.queuedRequests.length<1){
	return undefined;
	}
	var requests=this.queuedRequests.map(function(queuedRequest){
	return{
	query:queuedRequest.request.query,
	variables:queuedRequest.request.variables,
	operationName:queuedRequest.request.operationName};
	
	});
	var promises=[];
	var resolvers=[];
	var rejecters=[];
	this.queuedRequests.forEach(function(fetchRequest,index){
	promises.push(fetchRequest.promise);
	resolvers.push(fetchRequest.resolve);
	rejecters.push(fetchRequest.reject);
	});
	this.queuedRequests=[];
	var batchedPromise=this.batchFetchFunction(requests);
	batchedPromise.then(function(results){
	results.forEach(function(result,index){
	resolvers[index](result);
	});
	}).catch(function(error){
	rejecters.forEach(function(rejecter,index){
	rejecters[index](error);
	});
	});
	return promises;
	};
	QueryBatcher.prototype.start=function(pollInterval){
	var _this=this;
	if(this.pollTimer){
	clearInterval(this.pollTimer);
	}
	this.pollInterval=pollInterval;
	this.pollTimer=setInterval(function(){
	_this.consumeQueue();
	},this.pollInterval);
	};
	QueryBatcher.prototype.stop=function(){
	if(this.pollTimer){
	clearInterval(this.pollTimer);
	}
	};
	return QueryBatcher;
	}();
	exports.QueryBatcher=QueryBatcher;

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var redux_1=__webpack_require__(185);
	var store_1=__webpack_require__(335);
	var store_2=__webpack_require__(395);
	var store_3=__webpack_require__(397);
	var store_4=__webpack_require__(398);
	var assign=__webpack_require__(212);
	var crashReporter=function crashReporter(store){return function(next){return function(action){
	try{
	return next(action);
	}
	catch(err){
	console.error('Caught an exception!',err);
	console.error(err.stack);
	throw err;
	}
	};};};
	function createApolloReducer(config){
	return function apolloReducer(state,action){
	if(state===void 0){state={};}
	try{
	var newState={
	queries:store_2.queries(state.queries,action),
	mutations:store_3.mutations(state.mutations,action),
	data:store_1.data(state.data,action,state.queries,state.mutations,config),
	optimistic:[],
	reducerError:null};
	
	newState.optimistic=store_4.optimistic(state.optimistic,action,newState,config);
	return newState;
	}
	catch(reducerError){
	return assign({},state,{
	reducerError:reducerError});
	
	}
	};
	}
	exports.createApolloReducer=createApolloReducer;
	function createApolloStore(_a){
	var _b=_a===void 0?{}:_a,_c=_b.reduxRootKey,reduxRootKey=_c===void 0?'apollo':_c,initialState=_b.initialState,_d=_b.config,config=_d===void 0?{}:_d,_e=_b.reportCrashes,reportCrashes=_e===void 0?true:_e,logger=_b.logger;
	var enhancers=[];
	var middlewares=[];
	if(reportCrashes){
	middlewares.push(crashReporter);
	}
	if(logger){
	middlewares.push(logger);
	}
	if(middlewares.length>0){
	enhancers.push(redux_1.applyMiddleware.apply(void 0,middlewares));
	}
	if(typeof window!=='undefined'){
	var anyWindow=window;
	if(anyWindow.devToolsExtension){
	enhancers.push(anyWindow.devToolsExtension());
	}
	}
	var compose=redux_1.compose;
	if(initialState&&initialState[reduxRootKey]&&initialState[reduxRootKey]['queries']){
	throw new Error('Apollo initial state may not contain queries, only data');
	}
	if(initialState&&initialState[reduxRootKey]&&initialState[reduxRootKey]['mutations']){
	throw new Error('Apollo initial state may not contain mutations, only data');
	}
	return redux_1.createStore(redux_1.combineReducers((_f={},_f[reduxRootKey]=createApolloReducer(config),_f)),initialState,compose.apply(void 0,enhancers));
	var _f;
	}
	exports.createApolloStore=createApolloStore;
	function getDataWithOptimisticResults(store){
	if(store.optimistic.length===0){
	return store.data;
	}
	var patches=store.optimistic.map(function(opt){return opt.data;});
	return assign.apply(void 0,[{},store.data].concat(patches));
	}
	exports.getDataWithOptimisticResults=getDataWithOptimisticResults;

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions_1=__webpack_require__(336);
	var writeToStore_1=__webpack_require__(337);
	var assign=__webpack_require__(212);
	var storeUtils_1=__webpack_require__(357);
	var mutationResults_1=__webpack_require__(359);
	var replaceQueryResults_1=__webpack_require__(393);
	function data(previousState,action,queries,mutations,config){
	if(previousState===void 0){previousState={};}
	var constAction=action;
	if(actions_1.isQueryResultAction(action)){
	if(!queries[action.queryId]){
	return previousState;
	}
	if(action.requestId<queries[action.queryId].lastRequestId){
	return previousState;
	}
	if(!storeUtils_1.graphQLResultHasError(action.result)){
	var queryStoreValue=queries[action.queryId];
	var clonedState=assign({},previousState);
	var newState_1=writeToStore_1.writeResultToStore({
	result:action.result.data,
	dataId:'ROOT_QUERY',
	document:action.document,
	variables:queryStoreValue.variables,
	store:clonedState,
	dataIdFromObject:config.dataIdFromObject});
	
	if(action.extraReducers){
	action.extraReducers.forEach(function(reducer){
	newState_1=reducer(newState_1,constAction);
	});
	}
	return newState_1;
	}
	}else
	if(actions_1.isSubscriptionResultAction(action)){
	if(!storeUtils_1.graphQLResultHasError(action.result)){
	var clonedState=assign({},previousState);
	var newState_2=writeToStore_1.writeResultToStore({
	result:action.result.data,
	dataId:'ROOT_QUERY',
	document:action.document,
	variables:action.variables,
	store:clonedState,
	dataIdFromObject:config.dataIdFromObject});
	
	if(action.extraReducers){
	action.extraReducers.forEach(function(reducer){
	newState_2=reducer(newState_2,constAction);
	});
	}
	return newState_2;
	}
	}else
	if(actions_1.isMutationResultAction(constAction)){
	if(!constAction.result.errors){
	var queryStoreValue_1=mutations[constAction.mutationId];
	var clonedState=assign({},previousState);
	var newState_3=writeToStore_1.writeResultToStore({
	result:constAction.result.data,
	dataId:'ROOT_MUTATION',
	document:constAction.document,
	variables:queryStoreValue_1.variables,
	store:clonedState,
	dataIdFromObject:config.dataIdFromObject});
	
	if(constAction.resultBehaviors){
	constAction.resultBehaviors.forEach(function(behavior){
	var args={
	behavior:behavior,
	result:constAction.result,
	variables:queryStoreValue_1.variables,
	document:constAction.document,
	config:config};
	
	if(mutationResults_1.defaultMutationBehaviorReducers[behavior.type]){
	newState_3=mutationResults_1.defaultMutationBehaviorReducers[behavior.type](newState_3,args);
	}else
	if(config.mutationBehaviorReducers[behavior.type]){
	newState_3=config.mutationBehaviorReducers[behavior.type](newState_3,args);
	}else
	{
	throw new Error("No mutation result reducer defined for type "+behavior.type);
	}
	});
	}
	if(constAction.extraReducers){
	constAction.extraReducers.forEach(function(reducer){
	newState_3=reducer(newState_3,constAction);
	});
	}
	return newState_3;
	}
	}else
	if(actions_1.isUpdateQueryResultAction(constAction)){
	return replaceQueryResults_1.replaceQueryResults(previousState,constAction,config);
	}else
	if(actions_1.isStoreResetAction(action)){
	return{};
	}
	return previousState;
	}
	exports.data=data;

/***/ },
/* 336 */
/***/ function(module, exports) {

	"use strict";
	function isQueryResultAction(action){
	return action.type==='APOLLO_QUERY_RESULT';
	}
	exports.isQueryResultAction=isQueryResultAction;
	function isQueryErrorAction(action){
	return action.type==='APOLLO_QUERY_ERROR';
	}
	exports.isQueryErrorAction=isQueryErrorAction;
	function isQueryInitAction(action){
	return action.type==='APOLLO_QUERY_INIT';
	}
	exports.isQueryInitAction=isQueryInitAction;
	function isQueryResultClientAction(action){
	return action.type==='APOLLO_QUERY_RESULT_CLIENT';
	}
	exports.isQueryResultClientAction=isQueryResultClientAction;
	function isQueryStopAction(action){
	return action.type==='APOLLO_QUERY_STOP';
	}
	exports.isQueryStopAction=isQueryStopAction;
	function isMutationInitAction(action){
	return action.type==='APOLLO_MUTATION_INIT';
	}
	exports.isMutationInitAction=isMutationInitAction;
	function isMutationResultAction(action){
	return action.type==='APOLLO_MUTATION_RESULT';
	}
	exports.isMutationResultAction=isMutationResultAction;
	;
	function isMutationErrorAction(action){
	return action.type==='APOLLO_MUTATION_ERROR';
	}
	exports.isMutationErrorAction=isMutationErrorAction;
	function isUpdateQueryResultAction(action){
	return action.type==='APOLLO_UPDATE_QUERY_RESULT';
	}
	exports.isUpdateQueryResultAction=isUpdateQueryResultAction;
	function isStoreResetAction(action){
	return action.type==='APOLLO_STORE_RESET';
	}
	exports.isStoreResetAction=isStoreResetAction;
	function isSubscriptionResultAction(action){
	return action.type==='APOLLO_SUBSCRIPTION_RESULT';
	}
	exports.isSubscriptionResultAction=isSubscriptionResultAction;

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isNull=__webpack_require__(338);
	var isUndefined=__webpack_require__(339);
	var isObject=__webpack_require__(219);
	var assign=__webpack_require__(212);
	var getFromAST_1=__webpack_require__(340);
	var storeUtils_1=__webpack_require__(357);
	var storeUtils_2=__webpack_require__(357);
	var directives_1=__webpack_require__(358);
	function writeQueryToStore(_a){
	var result=_a.result,query=_a.query,_b=_a.store,store=_b===void 0?{}:_b,variables=_a.variables,_c=_a.dataIdFromObject,dataIdFromObject=_c===void 0?null:_c,_d=_a.fragmentMap,fragmentMap=_d===void 0?{}:_d;
	var queryDefinition=getFromAST_1.getQueryDefinition(query);
	return writeSelectionSetToStore({
	dataId:'ROOT_QUERY',
	result:result,
	selectionSet:queryDefinition.selectionSet,
	context:{
	store:store,
	variables:variables,
	dataIdFromObject:dataIdFromObject,
	fragmentMap:fragmentMap}});
	
	
	}
	exports.writeQueryToStore=writeQueryToStore;
	function writeResultToStore(_a){
	var result=_a.result,dataId=_a.dataId,document=_a.document,_b=_a.store,store=_b===void 0?{}:_b,variables=_a.variables,_c=_a.dataIdFromObject,dataIdFromObject=_c===void 0?null:_c;
	var selectionSet=getFromAST_1.getOperationDefinition(document).selectionSet;
	var fragmentMap=getFromAST_1.createFragmentMap(getFromAST_1.getFragmentDefinitions(document));
	return writeSelectionSetToStore({
	result:result,
	dataId:dataId,
	selectionSet:selectionSet,
	context:{
	store:store,
	variables:variables,
	dataIdFromObject:dataIdFromObject,
	fragmentMap:fragmentMap}});
	
	
	}
	exports.writeResultToStore=writeResultToStore;
	function writeSelectionSetToStore(_a){
	var result=_a.result,dataId=_a.dataId,selectionSet=_a.selectionSet,context=_a.context;
	var variables=context.variables,store=context.store,dataIdFromObject=context.dataIdFromObject,fragmentMap=context.fragmentMap;
	selectionSet.selections.forEach(function(selection){
	var included=directives_1.shouldInclude(selection,variables);
	if(storeUtils_1.isField(selection)){
	var resultFieldKey=storeUtils_1.resultKeyNameFromField(selection);
	var value=result[resultFieldKey];
	if(!isUndefined(value)){
	writeFieldToStore({
	dataId:dataId,
	value:value,
	field:selection,
	context:context});
	
	}
	}else
	if(storeUtils_1.isInlineFragment(selection)){
	if(included){
	writeSelectionSetToStore({
	result:result,
	selectionSet:selection.selectionSet,
	dataId:dataId,
	context:context});
	
	}
	}else
	{
	var fragment=void 0;
	if(storeUtils_1.isInlineFragment(selection)){
	fragment=selection;
	}else
	{
	fragment=fragmentMap[selection.name.value];
	if(!fragment){
	throw new Error("No fragment named "+selection.name.value+".");
	}
	}
	if(included){
	writeSelectionSetToStore({
	result:result,
	selectionSet:fragment.selectionSet,
	dataId:dataId,
	context:context});
	
	}
	}
	});
	return store;
	}
	exports.writeSelectionSetToStore=writeSelectionSetToStore;
	function isGeneratedId(id){
	return id[0]==='$';
	}
	function mergeWithGenerated(generatedKey,realKey,cache){
	var generated=cache[generatedKey];
	var real=cache[realKey];
	Object.keys(generated).forEach(function(key){
	var value=generated[key];
	var realValue=real[key];
	if(storeUtils_2.isIdValue(value)&&
	isGeneratedId(value.id)&&
	storeUtils_2.isIdValue(realValue)){
	mergeWithGenerated(value.id,realValue.id,cache);
	}
	delete cache[generatedKey];
	cache[realKey]=assign({},generated,real);
	});
	}
	function writeFieldToStore(_a){
	var field=_a.field,value=_a.value,dataId=_a.dataId,context=_a.context;
	var variables=context.variables,dataIdFromObject=context.dataIdFromObject,store=context.store,fragmentMap=context.fragmentMap;
	var storeValue;
	var storeFieldName=storeUtils_1.storeKeyNameFromField(field,variables);
	var shouldMerge=false;
	var generatedKey;
	if((!field.selectionSet||isNull(value))&&!isObject(value)){
	storeValue=value;
	}else
	if((!field.selectionSet||isNull(value))&&isObject(value)){
	storeValue={
	type:'json',
	json:value};
	
	}else
	if(Array.isArray(value)){
	var generatedId=dataId+"."+storeFieldName;
	storeValue=processArrayValue(value,generatedId,field.selectionSet,context);
	}else
	{
	var valueDataId=dataId+"."+storeFieldName;
	var generated=true;
	if(!isGeneratedId(valueDataId)){
	valueDataId='$'+valueDataId;
	}
	if(dataIdFromObject){
	var semanticId=dataIdFromObject(value);
	if(semanticId&&isGeneratedId(semanticId)){
	throw new Error('IDs returned by dataIdFromObject cannot begin with the "$" character.');
	}
	if(semanticId){
	valueDataId=semanticId;
	generated=false;
	}
	}
	writeSelectionSetToStore({
	dataId:valueDataId,
	result:value,
	selectionSet:field.selectionSet,
	context:context});
	
	storeValue={
	type:'id',
	id:valueDataId,
	generated:generated};
	
	if(store[dataId]&&store[dataId][storeFieldName]!==storeValue){
	var escapedId=store[dataId][storeFieldName];
	if(storeUtils_2.isIdValue(storeValue)&&storeValue.generated&&
	storeUtils_2.isIdValue(escapedId)&&!escapedId.generated){
	throw new Error("Store error: the application attempted to write an object with no provided id"+(
	" but the store already contains an id of "+escapedId.id+" for this object."));
	}
	if(storeUtils_2.isIdValue(escapedId)&&escapedId.generated){
	generatedKey=escapedId.id;
	shouldMerge=true;
	}
	}
	}
	var newStoreObj=assign({},store[dataId],(_b={},
	_b[storeFieldName]=storeValue,
	_b));
	
	if(shouldMerge){
	mergeWithGenerated(generatedKey,storeValue.id,store);
	}
	if(!store[dataId]||storeValue!==store[dataId][storeFieldName]){
	store[dataId]=newStoreObj;
	}
	var _b;
	}
	function processArrayValue(value,generatedId,selectionSet,context){
	return value.map(function(item,index){
	if(isNull(item)){
	return null;
	}
	var itemDataId=generatedId+"."+index;
	if(Array.isArray(item)){
	return processArrayValue(item,itemDataId,selectionSet,context);
	}
	var generated=true;
	if(context.dataIdFromObject){
	var semanticId=context.dataIdFromObject(item);
	if(semanticId){
	itemDataId=semanticId;
	generated=false;
	}
	}
	writeSelectionSetToStore({
	dataId:itemDataId,
	result:item,
	selectionSet:selectionSet,
	context:context});
	
	var idStoreValue={
	type:'id',
	id:itemDataId,
	generated:generated};
	
	return idStoreValue;
	});
	}

/***/ },
/* 338 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isNull(value){
	return value===null;
	}
	
	module.exports=isNull;

/***/ },
/* 339 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isUndefined(value){
	return value===undefined;
	}
	
	module.exports=isUndefined;

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var assign=__webpack_require__(212);
	var countBy=__webpack_require__(341);
	var identity=__webpack_require__(228);
	var uniq=__webpack_require__(347);
	function getMutationDefinition(doc){
	checkDocument(doc);
	var mutationDef=null;
	doc.definitions.forEach(function(definition){
	if(definition.kind==='OperationDefinition'&&
	definition.operation==='mutation'){
	mutationDef=definition;
	}
	});
	if(!mutationDef){
	throw new Error('Must contain a mutation definition.');
	}
	return mutationDef;
	}
	exports.getMutationDefinition=getMutationDefinition;
	function checkDocument(doc){
	if(doc.kind!=='Document'){
	throw new Error("Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
	}
	var definitionTypes=doc.definitions.map(function(definition){
	if(definition.kind!=='OperationDefinition'&&definition.kind!=='FragmentDefinition'){
	throw new Error("Schema type definitions not allowed in queries. Found: \""+definition.kind+"\"");
	}
	return definition.kind;
	});
	var typeCounts=countBy(definitionTypes,identity);
	if(typeCounts['OperationDefinition']>1){
	throw new Error('Queries must have exactly one operation definition.');
	}
	}
	exports.checkDocument=checkDocument;
	function getOperationName(doc){
	var res='';
	doc.definitions.forEach(function(definition){
	if(definition.kind==='OperationDefinition'&&
	definition.name){
	res=definition.name.value;
	}
	});
	return res;
	}
	exports.getOperationName=getOperationName;
	function getFragmentDefinitions(doc){
	var fragmentDefinitions=doc.definitions.filter(function(definition){
	if(definition.kind==='FragmentDefinition'){
	return true;
	}else
	{
	return false;
	}
	});
	return fragmentDefinitions;
	}
	exports.getFragmentDefinitions=getFragmentDefinitions;
	function getQueryDefinition(doc){
	checkDocument(doc);
	var queryDef=null;
	doc.definitions.map(function(definition){
	if(definition.kind==='OperationDefinition'&&
	definition.operation==='query'){
	queryDef=definition;
	}
	});
	if(!queryDef){
	throw new Error('Must contain a query definition.');
	}
	return queryDef;
	}
	exports.getQueryDefinition=getQueryDefinition;
	function getOperationDefinition(doc){
	checkDocument(doc);
	var opDef=null;
	doc.definitions.map(function(definition){
	if(definition.kind==='OperationDefinition'){
	opDef=definition;
	}
	});
	if(!opDef){
	throw new Error('Must contain a query definition.');
	}
	return opDef;
	}
	exports.getOperationDefinition=getOperationDefinition;
	function getFragmentDefinition(doc){
	if(doc.kind!=='Document'){
	throw new Error("Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
	}
	if(doc.definitions.length>1){
	throw new Error('Fragment must have exactly one definition.');
	}
	var fragmentDef=doc.definitions[0];
	if(fragmentDef.kind!=='FragmentDefinition'){
	throw new Error('Must be a fragment definition.');
	}
	return fragmentDef;
	}
	exports.getFragmentDefinition=getFragmentDefinition;
	function createFragmentMap(fragments){
	if(fragments===void 0){fragments=[];}
	var symTable={};
	fragments.forEach(function(fragment){
	symTable[fragment.name.value]=fragment;
	});
	return symTable;
	}
	exports.createFragmentMap=createFragmentMap;
	function addFragmentsToDocument(queryDoc,fragments){
	if(!fragments){
	return queryDoc;
	}
	checkDocument(queryDoc);
	return assign({},queryDoc,{
	definitions:uniq(queryDoc.definitions.concat(fragments))});
	
	}
	exports.addFragmentsToDocument=addFragmentsToDocument;

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseAssignValue=__webpack_require__(214),
	createAggregator=__webpack_require__(342);
	
	
	var objectProto=Object.prototype;
	
	
	var hasOwnProperty=objectProto.hasOwnProperty;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var countBy=createAggregator(function(result,value,key){
	if(hasOwnProperty.call(result,key)){
	++result[key];
	}else{
	baseAssignValue(result,key,1);
	}
	});
	
	module.exports=countBy;

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var arrayAggregator=__webpack_require__(343),
	baseAggregator=__webpack_require__(344),
	baseIteratee=__webpack_require__(257),
	isArray=__webpack_require__(211);
	
	
	
	
	
	
	
	
	
	function createAggregator(setter,initializer){
	return function(collection,iteratee){
	var func=isArray(collection)?arrayAggregator:baseAggregator,
	accumulator=initializer?initializer():{};
	
	return func(collection,setter,baseIteratee(iteratee,2),accumulator);
	};
	}
	
	module.exports=createAggregator;

/***/ },
/* 343 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	
	function arrayAggregator(array,setter,iteratee,accumulator){
	var index=-1,
	length=array==null?0:array.length;
	
	while(++index<length){
	var value=array[index];
	setter(accumulator,value,iteratee(value),array);
	}
	return accumulator;
	}
	
	module.exports=arrayAggregator;

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseEach=__webpack_require__(345);
	
	
	
	
	
	
	
	
	
	
	
	
	function baseAggregator(collection,setter,iteratee,accumulator){
	baseEach(collection,function(value,key,collection){
	setter(accumulator,value,iteratee(value),collection);
	});
	return accumulator;
	}
	
	module.exports=baseAggregator;

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseForOwn=__webpack_require__(254),
	createBaseEach=__webpack_require__(346);
	
	
	
	
	
	
	
	
	
	var baseEach=createBaseEach(baseForOwn);
	
	module.exports=baseEach;

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var isArrayLike=__webpack_require__(236);
	
	
	
	
	
	
	
	
	
	function createBaseEach(eachFunc,fromRight){
	return function(collection,iteratee){
	if(collection==null){
	return collection;
	}
	if(!isArrayLike(collection)){
	return eachFunc(collection,iteratee);
	}
	var length=collection.length,
	index=fromRight?length:-1,
	iterable=Object(collection);
	
	while(fromRight?index--:++index<length){
	if(iteratee(iterable[index],index,iterable)===false){
	break;
	}
	}
	return collection;
	};
	}
	
	module.exports=createBaseEach;

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseUniq=__webpack_require__(348);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function uniq(array){
	return array&&array.length?baseUniq(array):[];
	}
	
	module.exports=uniq;

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var SetCache=__webpack_require__(292),
	arrayIncludes=__webpack_require__(349),
	arrayIncludesWith=__webpack_require__(354),
	cacheHas=__webpack_require__(296),
	createSet=__webpack_require__(355),
	setToArray=__webpack_require__(300);
	
	
	var LARGE_ARRAY_SIZE=200;
	
	
	
	
	
	
	
	
	
	
	function baseUniq(array,iteratee,comparator){
	var index=-1,
	includes=arrayIncludes,
	length=array.length,
	isCommon=true,
	result=[],
	seen=result;
	
	if(comparator){
	isCommon=false;
	includes=arrayIncludesWith;
	}else
	if(length>=LARGE_ARRAY_SIZE){
	var set=iteratee?null:createSet(array);
	if(set){
	return setToArray(set);
	}
	isCommon=false;
	includes=cacheHas;
	seen=new SetCache();
	}else
	{
	seen=iteratee?[]:result;
	}
	outer:
	while(++index<length){
	var value=array[index],
	computed=iteratee?iteratee(value):value;
	
	value=comparator||value!==0?value:0;
	if(isCommon&&computed===computed){
	var seenIndex=seen.length;
	while(seenIndex--){
	if(seen[seenIndex]===computed){
	continue outer;
	}
	}
	if(iteratee){
	seen.push(computed);
	}
	result.push(value);
	}else
	if(!includes(seen,computed,comparator)){
	if(seen!==result){
	seen.push(computed);
	}
	result.push(value);
	}
	}
	return result;
	}
	
	module.exports=baseUniq;

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseIndexOf=__webpack_require__(350);
	
	
	
	
	
	
	
	
	
	
	function arrayIncludes(array,value){
	var length=array==null?0:array.length;
	return!!length&&baseIndexOf(array,value,0)>-1;
	}
	
	module.exports=arrayIncludes;

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseFindIndex=__webpack_require__(351),
	baseIsNaN=__webpack_require__(352),
	strictIndexOf=__webpack_require__(353);
	
	
	
	
	
	
	
	
	
	
	function baseIndexOf(array,value,fromIndex){
	return value===value?
	strictIndexOf(array,value,fromIndex):
	baseFindIndex(array,baseIsNaN,fromIndex);
	}
	
	module.exports=baseIndexOf;

/***/ },
/* 351 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	
	
	function baseFindIndex(array,predicate,fromIndex,fromRight){
	var length=array.length,
	index=fromIndex+(fromRight?1:-1);
	
	while(fromRight?index--:++index<length){
	if(predicate(array[index],index,array)){
	return index;
	}
	}
	return-1;
	}
	
	module.exports=baseFindIndex;

/***/ },
/* 352 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	function baseIsNaN(value){
	return value!==value;
	}
	
	module.exports=baseIsNaN;

/***/ },
/* 353 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	
	function strictIndexOf(array,value,fromIndex){
	var index=fromIndex-1,
	length=array.length;
	
	while(++index<length){
	if(array[index]===value){
	return index;
	}
	}
	return-1;
	}
	
	module.exports=strictIndexOf;

/***/ },
/* 354 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	function arrayIncludesWith(array,value,comparator){
	var index=-1,
	length=array==null?0:array.length;
	
	while(++index<length){
	if(comparator(value,array[index])){
	return true;
	}
	}
	return false;
	}
	
	module.exports=arrayIncludesWith;

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var Set=__webpack_require__(305),
	noop=__webpack_require__(356),
	setToArray=__webpack_require__(300);
	
	
	var INFINITY=1/0;
	
	
	
	
	
	
	
	
	var createSet=!(Set&&1/setToArray(new Set([,-0]))[1]==INFINITY)?noop:function(values){
	return new Set(values);
	};
	
	module.exports=createSet;

/***/ },
/* 356 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	
	
	
	function noop(){
	
	}
	
	module.exports=noop;

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isObject=__webpack_require__(219);
	function isStringValue(value){
	return value.kind==='StringValue';
	}
	function isBooleanValue(value){
	return value.kind==='BooleanValue';
	}
	function isIntValue(value){
	return value.kind==='IntValue';
	}
	function isFloatValue(value){
	return value.kind==='FloatValue';
	}
	function isVariable(value){
	return value.kind==='Variable';
	}
	function isObjectValue(value){
	return value.kind==='ObjectValue';
	}
	function isListValue(value){
	return value.kind==='ListValue';
	}
	function isEnumValue(value){
	return value.kind==='EnumValue';
	}
	function valueToObjectRepresentation(argObj,name,value,variables){
	if(isIntValue(value)||isFloatValue(value)){
	argObj[name.value]=Number(value.value);
	}else
	if(isBooleanValue(value)||isStringValue(value)){
	argObj[name.value]=value.value;
	}else
	if(isObjectValue(value)){
	var nestedArgObj_1={};
	value.fields.map(function(obj){return valueToObjectRepresentation(nestedArgObj_1,obj.name,obj.value,variables);});
	argObj[name.value]=nestedArgObj_1;
	}else
	if(isVariable(value)){
	if(!variables||!(value.name.value in variables)){
	throw new Error("The inline argument \""+value.name.value+"\" is expected as a variable but was not provided.");
	}
	var variableValue=variables[value.name.value];
	argObj[name.value]=variableValue;
	}else
	if(isListValue(value)){
	argObj[name.value]=value.values.map(function(listValue){
	var nestedArgArrayObj={};
	valueToObjectRepresentation(nestedArgArrayObj,name,listValue,variables);
	return nestedArgArrayObj[name.value];
	});
	}else
	if(isEnumValue(value)){
	argObj[name.value]=value.value;
	}else
	{
	throw new Error("The inline argument \""+name.value+"\" of kind \""+value.kind+"\" is not supported.\n                    Use variables instead of inline arguments to overcome this limitation.");
	}
	}
	function storeKeyNameFromField(field,variables){
	if(field.arguments&&field.arguments.length){
	var argObj_1={};
	field.arguments.forEach(function(_a){
	var name=_a.name,value=_a.value;
	return valueToObjectRepresentation(argObj_1,name,value,variables);
	});
	return storeKeyNameFromFieldNameAndArgs(field.name.value,argObj_1);
	}
	return field.name.value;
	}
	exports.storeKeyNameFromField=storeKeyNameFromField;
	function storeKeyNameFromFieldNameAndArgs(fieldName,args){
	if(args){
	var stringifiedArgs=JSON.stringify(args);
	return fieldName+"("+stringifiedArgs+")";
	}
	return fieldName;
	}
	exports.storeKeyNameFromFieldNameAndArgs=storeKeyNameFromFieldNameAndArgs;
	function resultKeyNameFromField(field){
	return field.alias?
	field.alias.value:
	field.name.value;
	}
	exports.resultKeyNameFromField=resultKeyNameFromField;
	function isField(selection){
	return selection.kind==='Field';
	}
	exports.isField=isField;
	function isInlineFragment(selection){
	return selection.kind==='InlineFragment';
	}
	exports.isInlineFragment=isInlineFragment;
	function graphQLResultHasError(result){
	return result.errors&&result.errors.length;
	}
	exports.graphQLResultHasError=graphQLResultHasError;
	function isIdValue(idObject){
	return isObject(idObject)&&idObject.type==='id';
	}
	exports.isIdValue=isIdValue;
	function toIdValue(id,generated){
	if(generated===void 0){generated=false;}
	return{
	type:'id',
	id:id,
	generated:generated};
	
	}
	exports.toIdValue=toIdValue;
	function isJsonValue(jsonObject){
	return isObject(jsonObject)&&jsonObject.type==='json';
	}
	exports.isJsonValue=isJsonValue;

/***/ },
/* 358 */
/***/ function(module, exports) {

	"use strict";
	function shouldInclude(selection,variables){
	if(!variables){
	variables={};
	}
	if(!selection.directives){
	return true;
	}
	var res=true;
	selection.directives.forEach(function(directive){
	if(directive.name.value!=='skip'&&directive.name.value!=='include'){
	return;
	}
	var directiveArguments=directive.arguments;
	var directiveName=directive.name.value;
	if(directiveArguments.length!==1){
	throw new Error("Incorrect number of arguments for the @"+directiveName+" directive.");
	}
	var ifArgument=directive.arguments[0];
	if(!ifArgument.name||ifArgument.name.value!=='if'){
	throw new Error("Invalid argument for the @"+directiveName+" directive.");
	}
	var ifValue=directive.arguments[0].value;
	var evaledValue=false;
	if(!ifValue||ifValue.kind!=='BooleanValue'){
	if(ifValue.kind!=='Variable'){
	throw new Error("Argument for the @"+directiveName+" directive must be a variable or a bool ean value.");
	}else
	{
	evaledValue=variables[ifValue.name.value];
	if(evaledValue===undefined){
	throw new Error("Invalid variable referenced in @"+directiveName+" directive.");
	}
	}
	}else
	{
	evaledValue=ifValue.value;
	}
	if(directiveName==='skip'){
	evaledValue=!evaledValue;
	}
	if(!evaledValue){
	res=false;
	}
	});
	return res;
	}
	exports.shouldInclude=shouldInclude;

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mapValues=__webpack_require__(253);
	var cloneDeep=__webpack_require__(360);
	var assign=__webpack_require__(212);
	var replaceQueryResults_1=__webpack_require__(393);
	var writeToStore_1=__webpack_require__(337);
	var getFromAST_1=__webpack_require__(340);
	var scopeQuery_1=__webpack_require__(394);
	function mutationResultArrayInsertReducer(state,_a){
	var behavior=_a.behavior,result=_a.result,variables=_a.variables,document=_a.document,config=_a.config;
	var _b=behavior,resultPath=_b.resultPath,storePath=_b.storePath,where=_b.where;
	var selectionSet=getFromAST_1.getOperationDefinition(document).selectionSet;
	var fragmentMap=getFromAST_1.createFragmentMap(getFromAST_1.getFragmentDefinitions(document));
	var scopedSelectionSet=scopeQuery_1.scopeSelectionSetToResultPath({
	selectionSet:selectionSet,
	fragmentMap:fragmentMap,
	path:resultPath});
	
	var scopedResult=scopeQuery_1.scopeJSONToResultPath({
	json:result.data,
	path:resultPath});
	
	var dataId=config.dataIdFromObject(scopedResult)||generateMutationResultDataId();
	state=writeToStore_1.writeSelectionSetToStore({
	result:scopedResult,
	dataId:dataId,
	selectionSet:scopedSelectionSet,
	context:{
	store:state,
	variables:variables,
	dataIdFromObject:config.dataIdFromObject,
	fragmentMap:fragmentMap}});
	
	
	var dataIdOfObj=storePath[0],restStorePath=storePath.slice(1);
	var clonedObj=cloneDeep(state[dataIdOfObj]);
	var array=scopeQuery_1.scopeJSONToResultPath({
	json:clonedObj,
	path:restStorePath});
	
	var idValue={type:'id',generated:false,id:dataId};
	if(where==='PREPEND'){
	array.unshift(idValue);
	}else
	if(where==='APPEND'){
	array.push(idValue);
	}else
	{
	throw new Error('Unsupported "where" option to ARRAY_INSERT.');
	}
	return assign(state,(_c={},
	_c[dataIdOfObj]=clonedObj,
	_c));
	
	var _c;
	}
	var currId=0;
	function generateMutationResultDataId(){
	currId++;
	return"ARRAY_INSERT-gen-id-"+currId;
	}
	function mutationResultDeleteReducer(state,_a){
	var behavior=_a.behavior;
	var dataId=behavior.dataId;
	delete state[dataId];
	var newState=mapValues(state,function(storeObj){
	return removeRefsFromStoreObj(storeObj,dataId);
	});
	return newState;
	}
	function removeRefsFromStoreObj(storeObj,dataId){
	var affected=false;
	var cleanedObj=mapValues(storeObj,function(value){
	if(value&&value.id===dataId){
	affected=true;
	return null;
	}
	if(Array.isArray(value)){
	var filteredArray=cleanArray(value,dataId);
	if(filteredArray!==value){
	affected=true;
	return filteredArray;
	}
	}
	return value;
	});
	if(affected){
	return cleanedObj;
	}else
	{
	return storeObj;
	}
	}
	function cleanArray(originalArray,dataId){
	if(originalArray.length&&Array.isArray(originalArray[0])){
	var modified_1=false;
	var filteredArray=originalArray.map(function(nestedArray){
	var nestedFilteredArray=cleanArray(nestedArray,dataId);
	if(nestedFilteredArray!==nestedArray){
	modified_1=true;
	return nestedFilteredArray;
	}
	return nestedArray;
	});
	if(!modified_1){
	return originalArray;
	}
	return filteredArray;
	}else
	{
	var filteredArray=originalArray.filter(function(item){return item.id!==dataId;});
	if(filteredArray.length===originalArray.length){
	return originalArray;
	}
	return filteredArray;
	}
	}
	exports.cleanArray=cleanArray;
	function mutationResultArrayDeleteReducer(state,_a){
	var behavior=_a.behavior;
	var _b=behavior,dataId=_b.dataId,storePath=_b.storePath;
	var dataIdOfObj=storePath[0],restStorePath=storePath.slice(1);
	var clonedObj=cloneDeep(state[dataIdOfObj]);
	var array=scopeQuery_1.scopeJSONToResultPath({
	json:clonedObj,
	path:restStorePath});
	
	var index=-1;
	array.some(function(item,i){
	if(item&&item.id===dataId){
	index=i;
	return true;
	}
	return false;
	});
	if(index===-1){
	return state;
	}
	array.splice(index,1);
	return assign(state,(_c={},
	_c[dataIdOfObj]=clonedObj,
	_c));
	
	var _c;
	}
	function mutationResultQueryResultReducer(state,_a){
	var behavior=_a.behavior,config=_a.config;
	return replaceQueryResults_1.replaceQueryResults(state,behavior,config);
	}
	exports.mutationResultQueryResultReducer=mutationResultQueryResultReducer;
	exports.defaultMutationBehaviorReducers={
	'ARRAY_INSERT':mutationResultArrayInsertReducer,
	'DELETE':mutationResultDeleteReducer,
	'ARRAY_DELETE':mutationResultArrayDeleteReducer,
	'QUERY_RESULT':mutationResultQueryResultReducer};

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseClone=__webpack_require__(361);
	
	
	var CLONE_DEEP_FLAG=1,
	CLONE_SYMBOLS_FLAG=4;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function cloneDeep(value){
	return baseClone(value,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG);
	}
	
	module.exports=cloneDeep;

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var Stack=__webpack_require__(260),
	arrayEach=__webpack_require__(362),
	assignValue=__webpack_require__(213),
	baseAssign=__webpack_require__(363),
	baseAssignIn=__webpack_require__(364),
	cloneBuffer=__webpack_require__(368),
	copyArray=__webpack_require__(369),
	copySymbols=__webpack_require__(370),
	copySymbolsIn=__webpack_require__(373),
	getAllKeys=__webpack_require__(376),
	getAllKeysIn=__webpack_require__(378),
	getTag=__webpack_require__(302),
	initCloneArray=__webpack_require__(379),
	initCloneByTag=__webpack_require__(380),
	initCloneObject=__webpack_require__(391),
	isArray=__webpack_require__(211),
	isBuffer=__webpack_require__(245),
	isObject=__webpack_require__(219),
	keys=__webpack_require__(240);
	
	
	var CLONE_DEEP_FLAG=1,
	CLONE_FLAT_FLAG=2,
	CLONE_SYMBOLS_FLAG=4;
	
	
	var argsTag='[object Arguments]',
	arrayTag='[object Array]',
	boolTag='[object Boolean]',
	dateTag='[object Date]',
	errorTag='[object Error]',
	funcTag='[object Function]',
	genTag='[object GeneratorFunction]',
	mapTag='[object Map]',
	numberTag='[object Number]',
	objectTag='[object Object]',
	regexpTag='[object RegExp]',
	setTag='[object Set]',
	stringTag='[object String]',
	symbolTag='[object Symbol]',
	weakMapTag='[object WeakMap]';
	
	var arrayBufferTag='[object ArrayBuffer]',
	dataViewTag='[object DataView]',
	float32Tag='[object Float32Array]',
	float64Tag='[object Float64Array]',
	int8Tag='[object Int8Array]',
	int16Tag='[object Int16Array]',
	int32Tag='[object Int32Array]',
	uint8Tag='[object Uint8Array]',
	uint8ClampedTag='[object Uint8ClampedArray]',
	uint16Tag='[object Uint16Array]',
	uint32Tag='[object Uint32Array]';
	
	
	var cloneableTags={};
	cloneableTags[argsTag]=cloneableTags[arrayTag]=
	cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=
	cloneableTags[boolTag]=cloneableTags[dateTag]=
	cloneableTags[float32Tag]=cloneableTags[float64Tag]=
	cloneableTags[int8Tag]=cloneableTags[int16Tag]=
	cloneableTags[int32Tag]=cloneableTags[mapTag]=
	cloneableTags[numberTag]=cloneableTags[objectTag]=
	cloneableTags[regexpTag]=cloneableTags[setTag]=
	cloneableTags[stringTag]=cloneableTags[symbolTag]=
	cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=
	cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;
	cloneableTags[errorTag]=cloneableTags[funcTag]=
	cloneableTags[weakMapTag]=false;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function baseClone(value,bitmask,customizer,key,object,stack){
	var result,
	isDeep=bitmask&CLONE_DEEP_FLAG,
	isFlat=bitmask&CLONE_FLAT_FLAG,
	isFull=bitmask&CLONE_SYMBOLS_FLAG;
	
	if(customizer){
	result=object?customizer(value,key,object,stack):customizer(value);
	}
	if(result!==undefined){
	return result;
	}
	if(!isObject(value)){
	return value;
	}
	var isArr=isArray(value);
	if(isArr){
	result=initCloneArray(value);
	if(!isDeep){
	return copyArray(value,result);
	}
	}else{
	var tag=getTag(value),
	isFunc=tag==funcTag||tag==genTag;
	
	if(isBuffer(value)){
	return cloneBuffer(value,isDeep);
	}
	if(tag==objectTag||tag==argsTag||isFunc&&!object){
	result=isFlat||isFunc?{}:initCloneObject(value);
	if(!isDeep){
	return isFlat?
	copySymbolsIn(value,baseAssignIn(result,value)):
	copySymbols(value,baseAssign(result,value));
	}
	}else{
	if(!cloneableTags[tag]){
	return object?value:{};
	}
	result=initCloneByTag(value,tag,baseClone,isDeep);
	}
	}
	
	stack||(stack=new Stack());
	var stacked=stack.get(value);
	if(stacked){
	return stacked;
	}
	stack.set(value,result);
	
	var keysFunc=isFull?
	isFlat?getAllKeysIn:getAllKeys:
	isFlat?keysIn:keys;
	
	var props=isArr?undefined:keysFunc(value);
	arrayEach(props||value,function(subValue,key){
	if(props){
	key=subValue;
	subValue=value[key];
	}
	
	assignValue(result,key,baseClone(subValue,bitmask,customizer,key,value,stack));
	});
	return result;
	}
	
	module.exports=baseClone;

/***/ },
/* 362 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	function arrayEach(array,iteratee){
	var index=-1,
	length=array==null?0:array.length;
	
	while(++index<length){
	if(iteratee(array[index],index,array)===false){
	break;
	}
	}
	return array;
	}
	
	module.exports=arrayEach;

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var copyObject=__webpack_require__(225),
	keys=__webpack_require__(240);
	
	
	
	
	
	
	
	
	
	
	function baseAssign(object,source){
	return object&&copyObject(source,keys(source),object);
	}
	
	module.exports=baseAssign;

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var copyObject=__webpack_require__(225),
	keysIn=__webpack_require__(365);
	
	
	
	
	
	
	
	
	
	
	function baseAssignIn(object,source){
	return object&&copyObject(source,keysIn(source),object);
	}
	
	module.exports=baseAssignIn;

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var arrayLikeKeys=__webpack_require__(241),
	baseKeysIn=__webpack_require__(366),
	isArrayLike=__webpack_require__(236);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function keysIn(object){
	return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object);
	}
	
	module.exports=keysIn;

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var isObject=__webpack_require__(219),
	isPrototype=__webpack_require__(239),
	nativeKeysIn=__webpack_require__(367);
	
	
	var objectProto=Object.prototype;
	
	
	var hasOwnProperty=objectProto.hasOwnProperty;
	
	
	
	
	
	
	
	
	function baseKeysIn(object){
	if(!isObject(object)){
	return nativeKeysIn(object);
	}
	var isProto=isPrototype(object),
	result=[];
	
	for(var key in object){
	if(!(key=='constructor'&&(isProto||!hasOwnProperty.call(object,key)))){
	result.push(key);
	}
	}
	return result;
	}
	
	module.exports=baseKeysIn;

/***/ },
/* 367 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	function nativeKeysIn(object){
	var result=[];
	if(object!=null){
	for(var key in Object(object)){
	result.push(key);
	}
	}
	return result;
	}
	
	module.exports=nativeKeysIn;

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};var root=__webpack_require__(190);
	
	
	var freeExports=( false?'undefined':_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;
	
	
	var freeModule=freeExports&&( false?'undefined':_typeof(module))=='object'&&module&&!module.nodeType&&module;
	
	
	var moduleExports=freeModule&&freeModule.exports===freeExports;
	
	
	var Buffer=moduleExports?root.Buffer:undefined,
	allocUnsafe=Buffer?Buffer.allocUnsafe:undefined;
	
	
	
	
	
	
	
	
	
	function cloneBuffer(buffer,isDeep){
	if(isDeep){
	return buffer.slice();
	}
	var length=buffer.length,
	result=allocUnsafe?allocUnsafe(length):new buffer.constructor(length);
	
	buffer.copy(result);
	return result;
	}
	
	module.exports=cloneBuffer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(199)(module)))

/***/ },
/* 369 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	function copyArray(source,array){
	var index=-1,
	length=source.length;
	
	array||(array=Array(length));
	while(++index<length){
	array[index]=source[index];
	}
	return array;
	}
	
	module.exports=copyArray;

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var copyObject=__webpack_require__(225),
	getSymbols=__webpack_require__(371);
	
	
	
	
	
	
	
	
	
	function copySymbols(source,object){
	return copyObject(source,getSymbols(source),object);
	}
	
	module.exports=copySymbols;

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var overArg=__webpack_require__(195),
	stubArray=__webpack_require__(372);
	
	
	var nativeGetSymbols=Object.getOwnPropertySymbols;
	
	
	
	
	
	
	
	
	var getSymbols=nativeGetSymbols?overArg(nativeGetSymbols,Object):stubArray;
	
	module.exports=getSymbols;

/***/ },
/* 372 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function stubArray(){
	return[];
	}
	
	module.exports=stubArray;

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var copyObject=__webpack_require__(225),
	getSymbolsIn=__webpack_require__(374);
	
	
	
	
	
	
	
	
	
	function copySymbolsIn(source,object){
	return copyObject(source,getSymbolsIn(source),object);
	}
	
	module.exports=copySymbolsIn;

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var arrayPush=__webpack_require__(375),
	getPrototype=__webpack_require__(194),
	getSymbols=__webpack_require__(371),
	stubArray=__webpack_require__(372);
	
	
	var nativeGetSymbols=Object.getOwnPropertySymbols;
	
	
	
	
	
	
	
	
	var getSymbolsIn=!nativeGetSymbols?stubArray:function(object){
	var result=[];
	while(object){
	arrayPush(result,getSymbols(object));
	object=getPrototype(object);
	}
	return result;
	};
	
	module.exports=getSymbolsIn;

/***/ },
/* 375 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	function arrayPush(array,values){
	var index=-1,
	length=values.length,
	offset=array.length;
	
	while(++index<length){
	array[offset+index]=values[index];
	}
	return array;
	}
	
	module.exports=arrayPush;

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseGetAllKeys=__webpack_require__(377),
	getSymbols=__webpack_require__(371),
	keys=__webpack_require__(240);
	
	
	
	
	
	
	
	
	function getAllKeys(object){
	return baseGetAllKeys(object,keys,getSymbols);
	}
	
	module.exports=getAllKeys;

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var arrayPush=__webpack_require__(375),
	isArray=__webpack_require__(211);
	
	
	
	
	
	
	
	
	
	
	
	
	function baseGetAllKeys(object,keysFunc,symbolsFunc){
	var result=keysFunc(object);
	return isArray(object)?result:arrayPush(result,symbolsFunc(object));
	}
	
	module.exports=baseGetAllKeys;

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseGetAllKeys=__webpack_require__(377),
	getSymbolsIn=__webpack_require__(374),
	keysIn=__webpack_require__(365);
	
	
	
	
	
	
	
	
	
	function getAllKeysIn(object){
	return baseGetAllKeys(object,keysIn,getSymbolsIn);
	}
	
	module.exports=getAllKeysIn;

/***/ },
/* 379 */
/***/ function(module, exports) {

	'use strict';
	var objectProto=Object.prototype;
	
	
	var hasOwnProperty=objectProto.hasOwnProperty;
	
	
	
	
	
	
	
	
	function initCloneArray(array){
	var length=array.length,
	result=array.constructor(length);
	
	
	if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){
	result.index=array.index;
	result.input=array.input;
	}
	return result;
	}
	
	module.exports=initCloneArray;

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var cloneArrayBuffer=__webpack_require__(381),
	cloneDataView=__webpack_require__(382),
	cloneMap=__webpack_require__(383),
	cloneRegExp=__webpack_require__(386),
	cloneSet=__webpack_require__(387),
	cloneSymbol=__webpack_require__(389),
	cloneTypedArray=__webpack_require__(390);
	
	
	var boolTag='[object Boolean]',
	dateTag='[object Date]',
	mapTag='[object Map]',
	numberTag='[object Number]',
	regexpTag='[object RegExp]',
	setTag='[object Set]',
	stringTag='[object String]',
	symbolTag='[object Symbol]';
	
	var arrayBufferTag='[object ArrayBuffer]',
	dataViewTag='[object DataView]',
	float32Tag='[object Float32Array]',
	float64Tag='[object Float64Array]',
	int8Tag='[object Int8Array]',
	int16Tag='[object Int16Array]',
	int32Tag='[object Int32Array]',
	uint8Tag='[object Uint8Array]',
	uint8ClampedTag='[object Uint8ClampedArray]',
	uint16Tag='[object Uint16Array]',
	uint32Tag='[object Uint32Array]';
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function initCloneByTag(object,tag,cloneFunc,isDeep){
	var Ctor=object.constructor;
	switch(tag){
	case arrayBufferTag:
	return cloneArrayBuffer(object);
	
	case boolTag:
	case dateTag:
	return new Ctor(+object);
	
	case dataViewTag:
	return cloneDataView(object,isDeep);
	
	case float32Tag:case float64Tag:
	case int8Tag:case int16Tag:case int32Tag:
	case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:
	return cloneTypedArray(object,isDeep);
	
	case mapTag:
	return cloneMap(object,isDeep,cloneFunc);
	
	case numberTag:
	case stringTag:
	return new Ctor(object);
	
	case regexpTag:
	return cloneRegExp(object);
	
	case setTag:
	return cloneSet(object,isDeep,cloneFunc);
	
	case symbolTag:
	return cloneSymbol(object);}
	
	}
	
	module.exports=initCloneByTag;

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var Uint8Array=__webpack_require__(298);
	
	
	
	
	
	
	
	
	function cloneArrayBuffer(arrayBuffer){
	var result=new arrayBuffer.constructor(arrayBuffer.byteLength);
	new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	return result;
	}
	
	module.exports=cloneArrayBuffer;

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var cloneArrayBuffer=__webpack_require__(381);
	
	
	
	
	
	
	
	
	
	function cloneDataView(dataView,isDeep){
	var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;
	return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);
	}
	
	module.exports=cloneDataView;

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var addMapEntry=__webpack_require__(384),
	arrayReduce=__webpack_require__(385),
	mapToArray=__webpack_require__(299);
	
	
	var CLONE_DEEP_FLAG=1;
	
	
	
	
	
	
	
	
	
	
	function cloneMap(map,isDeep,cloneFunc){
	var array=isDeep?cloneFunc(mapToArray(map),CLONE_DEEP_FLAG):mapToArray(map);
	return arrayReduce(array,addMapEntry,new map.constructor());
	}
	
	module.exports=cloneMap;

/***/ },
/* 384 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	function addMapEntry(map,pair){
	
	map.set(pair[0],pair[1]);
	return map;
	}
	
	module.exports=addMapEntry;

/***/ },
/* 385 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	
	
	
	
	function arrayReduce(array,iteratee,accumulator,initAccum){
	var index=-1,
	length=array==null?0:array.length;
	
	if(initAccum&&length){
	accumulator=array[++index];
	}
	while(++index<length){
	accumulator=iteratee(accumulator,array[index],index,array);
	}
	return accumulator;
	}
	
	module.exports=arrayReduce;

/***/ },
/* 386 */
/***/ function(module, exports) {

	"use strict";
	var reFlags=/\w*$/;
	
	
	
	
	
	
	
	
	function cloneRegExp(regexp){
	var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));
	result.lastIndex=regexp.lastIndex;
	return result;
	}
	
	module.exports=cloneRegExp;

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var addSetEntry=__webpack_require__(388),
	arrayReduce=__webpack_require__(385),
	setToArray=__webpack_require__(300);
	
	
	var CLONE_DEEP_FLAG=1;
	
	
	
	
	
	
	
	
	
	
	function cloneSet(set,isDeep,cloneFunc){
	var array=isDeep?cloneFunc(setToArray(set),CLONE_DEEP_FLAG):setToArray(set);
	return arrayReduce(array,addSetEntry,new set.constructor());
	}
	
	module.exports=cloneSet;

/***/ },
/* 388 */
/***/ function(module, exports) {

	"use strict";
	
	
	
	
	
	
	
	function addSetEntry(set,value){
	
	set.add(value);
	return set;
	}
	
	module.exports=addSetEntry;

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _Symbol=__webpack_require__(189);
	
	
	var symbolProto=_Symbol?_Symbol.prototype:undefined,
	symbolValueOf=symbolProto?symbolProto.valueOf:undefined;
	
	
	
	
	
	
	
	
	function cloneSymbol(symbol){
	return symbolValueOf?Object(symbolValueOf.call(symbol)):{};
	}
	
	module.exports=cloneSymbol;

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var cloneArrayBuffer=__webpack_require__(381);
	
	
	
	
	
	
	
	
	
	function cloneTypedArray(typedArray,isDeep){
	var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;
	return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);
	}
	
	module.exports=cloneTypedArray;

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseCreate=__webpack_require__(392),
	getPrototype=__webpack_require__(194),
	isPrototype=__webpack_require__(239);
	
	
	
	
	
	
	
	
	function initCloneObject(object){
	return typeof object.constructor=='function'&&!isPrototype(object)?
	baseCreate(getPrototype(object)):
	{};
	}
	
	module.exports=initCloneObject;

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var isObject=__webpack_require__(219);
	
	
	var objectCreate=Object.create;
	
	
	
	
	
	
	
	
	
	var baseCreate=function(){
	function object(){}
	return function(proto){
	if(!isObject(proto)){
	return{};
	}
	if(objectCreate){
	return objectCreate(proto);
	}
	object.prototype=proto;
	var result=new object();
	object.prototype=undefined;
	return result;
	};
	}();
	
	module.exports=baseCreate;

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var writeToStore_1=__webpack_require__(337);
	var assign=__webpack_require__(212);
	function replaceQueryResults(state,_a,config){
	var variables=_a.variables,document=_a.document,newResult=_a.newResult;
	var clonedState=assign({},state);
	return writeToStore_1.writeResultToStore({
	result:newResult,
	dataId:'ROOT_QUERY',
	variables:variables,
	document:document,
	store:clonedState,
	dataIdFromObject:config.dataIdFromObject});
	
	}
	exports.replaceQueryResults=replaceQueryResults;

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var storeUtils_1=__webpack_require__(357);
	var isNumber=__webpack_require__(332);
	function scopeJSONToResultPath(_a){
	var json=_a.json,path=_a.path;
	var current=json;
	path.forEach(function(pathSegment){
	current=current[pathSegment];
	});
	return current;
	}
	exports.scopeJSONToResultPath=scopeJSONToResultPath;
	function scopeSelectionSetToResultPath(_a){
	var selectionSet=_a.selectionSet,fragmentMap=_a.fragmentMap,path=_a.path;
	var currSelSet=selectionSet;
	path.
	filter(function(pathSegment){return!isNumber(pathSegment);}).
	forEach(function(pathSegment){
	currSelSet=followOnePathSegment(currSelSet,pathSegment,fragmentMap);
	});
	return currSelSet;
	}
	exports.scopeSelectionSetToResultPath=scopeSelectionSetToResultPath;
	function followOnePathSegment(currSelSet,pathSegment,fragmentMap){
	var matchingFields=getMatchingFields(currSelSet,pathSegment,fragmentMap);
	if(matchingFields.length<1){
	throw new Error("No matching field found in query for path segment: "+pathSegment);
	}
	if(matchingFields.length>1){
	throw new Error("Multiple fields found in query for path segment \""+pathSegment+"\". Please file an issue on Apollo Client if you run into this situation.");
	}
	return matchingFields[0].selectionSet;
	}
	function getMatchingFields(currSelSet,pathSegment,fragmentMap){
	var matching=[];
	currSelSet.selections.forEach(function(selection){
	if(storeUtils_1.isField(selection)){
	if(storeUtils_1.resultKeyNameFromField(selection)===pathSegment){
	matching.push(selection);
	}
	}else
	if(storeUtils_1.isInlineFragment(selection)){
	matching=matching.concat(getMatchingFields(selection.selectionSet,pathSegment,fragmentMap));
	}else
	{
	var fragment=fragmentMap[selection.name.value];
	matching=matching.concat(getMatchingFields(fragment.selectionSet,pathSegment,fragmentMap));
	}
	});
	return matching;
	}

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions_1=__webpack_require__(336);
	var storeUtils_1=__webpack_require__(357);
	var assign=__webpack_require__(212);
	var isEqual=__webpack_require__(396);
	(function(NetworkStatus){
	NetworkStatus[NetworkStatus["loading"]=1]="loading";
	NetworkStatus[NetworkStatus["setVariables"]=2]="setVariables";
	NetworkStatus[NetworkStatus["fetchMore"]=3]="fetchMore";
	NetworkStatus[NetworkStatus["refetch"]=4]="refetch";
	NetworkStatus[NetworkStatus["poll"]=6]="poll";
	NetworkStatus[NetworkStatus["ready"]=7]="ready";
	NetworkStatus[NetworkStatus["error"]=8]="error";
	})(exports.NetworkStatus||(exports.NetworkStatus={}));
	var NetworkStatus=exports.NetworkStatus;
	function queries(previousState,action){
	if(previousState===void 0){previousState={};}
	if(actions_1.isQueryInitAction(action)){
	var newState=assign({},previousState);
	var previousQuery=previousState[action.queryId];
	if(previousQuery&&previousQuery.queryString!==action.queryString){
	throw new Error('Internal Error: may not update existing query string in store');
	}
	var isSetVariables=false;
	var previousVariables=void 0;
	if(action.storePreviousVariables&&
	previousQuery&&
	previousQuery.networkStatus!==NetworkStatus.loading){
	if(!isEqual(previousQuery.variables,action.variables)){
	isSetVariables=true;
	previousVariables=previousQuery.variables;
	}
	}
	var newNetworkStatus=NetworkStatus.loading;
	if(isSetVariables){
	newNetworkStatus=NetworkStatus.setVariables;
	}else
	if(action.isPoll){
	newNetworkStatus=NetworkStatus.poll;
	}else
	if(action.isRefetch){
	newNetworkStatus=NetworkStatus.refetch;
	}else
	if(action.isPoll){
	newNetworkStatus=NetworkStatus.poll;
	}
	newState[action.queryId]={
	queryString:action.queryString,
	variables:action.variables,
	previousVariables:previousVariables,
	stopped:false,
	loading:true,
	networkError:null,
	graphQLErrors:null,
	networkStatus:newNetworkStatus,
	forceFetch:action.forceFetch,
	returnPartialData:action.returnPartialData,
	lastRequestId:action.requestId,
	metadata:action.metadata};
	
	return newState;
	}else
	if(actions_1.isQueryResultAction(action)){
	if(!previousState[action.queryId]){
	return previousState;
	}
	if(action.requestId<previousState[action.queryId].lastRequestId){
	return previousState;
	}
	var newState=assign({},previousState);
	var resultHasGraphQLErrors=storeUtils_1.graphQLResultHasError(action.result);
	newState[action.queryId]=assign({},previousState[action.queryId],{
	loading:false,
	networkError:null,
	graphQLErrors:resultHasGraphQLErrors?action.result.errors:null,
	previousVariables:null,
	networkStatus:NetworkStatus.ready});
	
	return newState;
	}else
	if(actions_1.isQueryErrorAction(action)){
	if(!previousState[action.queryId]){
	return previousState;
	}
	if(action.requestId<previousState[action.queryId].lastRequestId){
	return previousState;
	}
	var newState=assign({},previousState);
	newState[action.queryId]=assign({},previousState[action.queryId],{
	loading:false,
	networkError:action.error,
	networkStatus:NetworkStatus.error});
	
	return newState;
	}else
	if(actions_1.isQueryResultClientAction(action)){
	if(!previousState[action.queryId]){
	return previousState;
	}
	var newState=assign({},previousState);
	newState[action.queryId]=assign({},previousState[action.queryId],{
	loading:!action.complete,
	networkError:null,
	previousVariables:null,
	networkStatus:action.complete?NetworkStatus.ready:NetworkStatus.loading});
	
	return newState;
	}else
	if(actions_1.isQueryStopAction(action)){
	var newState=assign({},previousState);
	newState[action.queryId]=assign({},previousState[action.queryId],{
	loading:false,
	stopped:true,
	networkStatus:NetworkStatus.ready});
	
	return newState;
	}else
	if(actions_1.isStoreResetAction(action)){
	return resetQueryState(previousState,action);
	}
	return previousState;
	}
	exports.queries=queries;
	function resetQueryState(state,action){
	var observableQueryIds=action.observableQueryIds;
	var newQueries=Object.keys(state).filter(function(queryId){
	return observableQueryIds.indexOf(queryId)>-1;
	}).reduce(function(res,key){
	res[key]=assign({},state[key],{loading:true,networkStatus:NetworkStatus.loading});
	return res;
	},{});
	return newQueries;
	}

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseIsEqual=__webpack_require__(289);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isEqual(value,other){
	return baseIsEqual(value,other);
	}
	
	module.exports=isEqual;

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions_1=__webpack_require__(336);
	var assign=__webpack_require__(212);
	function mutations(previousState,action){
	if(previousState===void 0){previousState={};}
	if(actions_1.isMutationInitAction(action)){
	var newState=assign({},previousState);
	newState[action.mutationId]={
	mutationString:action.mutationString,
	variables:action.variables,
	loading:true,
	error:null};
	
	return newState;
	}else
	if(actions_1.isMutationResultAction(action)){
	var newState=assign({},previousState);
	newState[action.mutationId]=assign({},previousState[action.mutationId],{
	loading:false,
	error:null});
	
	return newState;
	}else
	if(actions_1.isMutationErrorAction(action)){
	var newState=assign({},previousState);
	newState[action.mutationId]=assign({},previousState[action.mutationId],{
	loading:false,
	error:action.error});
	
	}else
	if(actions_1.isStoreResetAction(action)){
	return{};
	}
	return previousState;
	}
	exports.mutations=mutations;

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions_1=__webpack_require__(336);
	var store_1=__webpack_require__(335);
	var store_2=__webpack_require__(334);
	var assign=__webpack_require__(212);
	var pick=__webpack_require__(399);
	var optimisticDefaultState=[];
	function optimistic(previousState,action,store,config){
	if(previousState===void 0){previousState=optimisticDefaultState;}
	if(actions_1.isMutationInitAction(action)&&action.optimisticResponse){
	var fakeMutationResultAction={
	type:'APOLLO_MUTATION_RESULT',
	result:{data:action.optimisticResponse},
	document:action.mutation,
	operationName:action.operationName,
	mutationId:action.mutationId,
	resultBehaviors:action.resultBehaviors,
	extraReducers:action.extraReducers};
	
	var fakeStore=assign({},store,{optimistic:previousState});
	var optimisticData_1=store_2.getDataWithOptimisticResults(fakeStore);
	var fakeDataResultState_1=store_1.data(optimisticData_1,fakeMutationResultAction,store.queries,store.mutations,config);
	var changedKeys=Object.keys(fakeDataResultState_1).filter(function(key){return optimisticData_1[key]!==fakeDataResultState_1[key];});
	var patch=pick(fakeDataResultState_1,changedKeys);
	var optimisticState={
	data:patch,
	mutationId:action.mutationId};
	
	var newState=previousState.concat([optimisticState]);
	return newState;
	}else
	if((actions_1.isMutationErrorAction(action)||actions_1.isMutationResultAction(action))&&
	previousState.some(function(change){return change.mutationId===action.mutationId;})){
	var newState=previousState.filter(function(change){return change.mutationId!==action.mutationId;});
	return newState;
	}
	return previousState;
	}
	exports.optimistic=optimistic;

/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var basePick=__webpack_require__(400),
	flatRest=__webpack_require__(403);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var pick=flatRest(function(object,paths){
	return object==null?{}:basePick(object,paths);
	});
	
	module.exports=pick;

/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var basePickBy=__webpack_require__(401),
	hasIn=__webpack_require__(323);
	
	
	
	
	
	
	
	
	
	
	function basePick(object,paths){
	object=Object(object);
	return basePickBy(object,paths,function(value,path){
	return hasIn(object,path);
	});
	}
	
	module.exports=basePick;

/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseGet=__webpack_require__(312),
	baseSet=__webpack_require__(402),
	castPath=__webpack_require__(313);
	
	
	
	
	
	
	
	
	
	
	function basePickBy(object,paths,predicate){
	var index=-1,
	length=paths.length,
	result={};
	
	while(++index<length){
	var path=paths[index],
	value=baseGet(object,path);
	
	if(predicate(value,path)){
	baseSet(result,castPath(path,object),value);
	}
	}
	return result;
	}
	
	module.exports=basePickBy;

/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var assignValue=__webpack_require__(213),
	castPath=__webpack_require__(313),
	isIndex=__webpack_require__(238),
	isObject=__webpack_require__(219),
	toKey=__webpack_require__(322);
	
	
	
	
	
	
	
	
	
	
	
	function baseSet(object,path,value,customizer){
	if(!isObject(object)){
	return object;
	}
	path=castPath(path,object);
	
	var index=-1,
	length=path.length,
	lastIndex=length-1,
	nested=object;
	
	while(nested!=null&&++index<length){
	var key=toKey(path[index]),
	newValue=value;
	
	if(index!=lastIndex){
	var objValue=nested[key];
	newValue=customizer?customizer(objValue,key,nested):undefined;
	if(newValue===undefined){
	newValue=isObject(objValue)?
	objValue:
	isIndex(path[index+1])?[]:{};
	}
	}
	assignValue(nested,key,newValue);
	nested=nested[key];
	}
	return object;
	}
	
	module.exports=baseSet;

/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var flatten=__webpack_require__(404),
	overRest=__webpack_require__(229),
	setToString=__webpack_require__(231);
	
	
	
	
	
	
	
	
	function flatRest(func){
	return setToString(overRest(func,undefined,flatten),func+'');
	}
	
	module.exports=flatRest;

/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseFlatten=__webpack_require__(405);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function flatten(array){
	var length=array==null?0:array.length;
	return length?baseFlatten(array,1):[];
	}
	
	module.exports=flatten;

/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var arrayPush=__webpack_require__(375),
	isFlattenable=__webpack_require__(406);
	
	
	
	
	
	
	
	
	
	
	
	
	function baseFlatten(array,depth,predicate,isStrict,result){
	var index=-1,
	length=array.length;
	
	predicate||(predicate=isFlattenable);
	result||(result=[]);
	
	while(++index<length){
	var value=array[index];
	if(depth>0&&predicate(value)){
	if(depth>1){
	
	baseFlatten(value,depth-1,predicate,isStrict,result);
	}else{
	arrayPush(result,value);
	}
	}else if(!isStrict){
	result[result.length]=value;
	}
	}
	return result;
	}
	
	module.exports=baseFlatten;

/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _Symbol=__webpack_require__(189),
	isArguments=__webpack_require__(243),
	isArray=__webpack_require__(211);
	
	
	var spreadableSymbol=_Symbol?_Symbol.isConcatSpreadable:undefined;
	
	
	
	
	
	
	
	
	function isFlattenable(value){
	return isArray(value)||isArguments(value)||
	!!(spreadableSymbol&&value&&value[spreadableSymbol]);
	}
	
	module.exports=isFlattenable;

/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends=undefined&&undefined.__extends||function(d,b){
	for(var p in b){if(b.hasOwnProperty(p))d[p]=b[p];}
	function __(){this.constructor=d;}
	d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());
	};
	var Observable_1=__webpack_require__(408);
	var ApolloError_1=__webpack_require__(409);
	var QueryManager_1=__webpack_require__(410);
	var errorHandling_1=__webpack_require__(422);
	var store_1=__webpack_require__(395);
	var getFromAST_1=__webpack_require__(340);
	var assign=__webpack_require__(212);
	var isEqual=__webpack_require__(396);
	var ObservableQuery=function(_super){
	__extends(ObservableQuery,_super);
	function ObservableQuery(_a){
	var _this=this;
	var scheduler=_a.scheduler,options=_a.options,_b=_a.shouldSubscribe,shouldSubscribe=_b===void 0?true:_b;
	var queryManager=scheduler.queryManager;
	var queryId=queryManager.generateQueryId();
	var subscriberFunction=function subscriberFunction(observer){
	return _this.onSubscribe(observer);
	};
	_super.call(this,subscriberFunction);
	this.isCurrentlyPolling=false;
	this.options=options;
	this.variables=this.options.variables||{};
	this.scheduler=scheduler;
	this.queryManager=queryManager;
	this.queryId=queryId;
	this.shouldSubscribe=shouldSubscribe;
	this.observers=[];
	this.subscriptionHandles=[];
	}
	ObservableQuery.prototype.result=function(){
	var _this=this;
	return new Promise(function(resolve,reject){
	var subscription=_this.subscribe({
	next:function next(result){
	resolve(result);
	setTimeout(function(){
	subscription.unsubscribe();
	},0);
	},
	error:function error(_error){
	reject(_error);
	}});
	
	});
	};
	ObservableQuery.prototype.currentResult=function(){
	var _a=this.queryManager.getCurrentQueryResult(this,true),data=_a.data,partial=_a.partial;
	var queryStoreValue=this.queryManager.getApolloState().queries[this.queryId];
	if(queryStoreValue&&(queryStoreValue.graphQLErrors||queryStoreValue.networkError)){
	var error=new ApolloError_1.ApolloError({
	graphQLErrors:queryStoreValue.graphQLErrors,
	networkError:queryStoreValue.networkError});
	
	return{data:{},loading:false,networkStatus:queryStoreValue.networkStatus,error:error};
	}
	var queryLoading=!queryStoreValue||queryStoreValue.loading;
	var loading=this.options.forceFetch&&queryLoading||
	partial&&!this.options.noFetch;
	var networkStatus;
	if(queryStoreValue){
	networkStatus=queryStoreValue.networkStatus;
	}else
	{
	networkStatus=loading?store_1.NetworkStatus.loading:store_1.NetworkStatus.ready;
	}
	return{data:data,loading:loading,networkStatus:networkStatus};
	};
	ObservableQuery.prototype.refetch=function(variables){
	var _this=this;
	this.variables=assign({},this.variables,variables);
	if(this.options.noFetch){
	throw new Error('noFetch option should not use query refetch.');
	}
	assign(this.options,{
	variables:this.variables});
	
	var combinedOptions=assign({},this.options,{
	forceFetch:true});
	
	return this.queryManager.fetchQuery(this.queryId,combinedOptions,QueryManager_1.FetchType.refetch).
	then(function(result){return _this.queryManager.transformResult(result);});
	};
	ObservableQuery.prototype.fetchMore=function(fetchMoreOptions){
	var _this=this;
	return Promise.resolve().
	then(function(){
	var qid=_this.queryManager.generateQueryId();
	var combinedOptions=null;
	if(fetchMoreOptions.query){
	combinedOptions=fetchMoreOptions;
	}else
	{
	var variables=assign({},_this.variables,fetchMoreOptions.variables);
	combinedOptions=assign({},_this.options,fetchMoreOptions,{
	variables:variables});
	
	}
	var fullQuery=getFromAST_1.addFragmentsToDocument(combinedOptions.query,combinedOptions.fragments);
	combinedOptions=assign({},combinedOptions,{
	query:fullQuery,
	forceFetch:true});
	
	return _this.queryManager.fetchQuery(qid,combinedOptions);
	}).
	then(function(fetchMoreResult){
	var reducer=fetchMoreOptions.updateQuery;
	var mapFn=function mapFn(previousResult,_a){
	var variables=_a.variables;
	var queryVariables=variables;
	return reducer(previousResult,{
	fetchMoreResult:fetchMoreResult,
	queryVariables:queryVariables});
	
	};
	_this.updateQuery(mapFn);
	return fetchMoreResult;
	});
	};
	ObservableQuery.prototype.subscribeToMore=function(options){
	var _this=this;
	var observable=this.queryManager.startGraphQLSubscription({
	document:options.document,
	variables:options.variables});
	
	var reducer=options.updateQuery;
	var subscription=observable.subscribe({
	next:function next(data){
	var mapFn=function mapFn(previousResult,_a){
	var variables=_a.variables;
	return reducer(previousResult,{
	subscriptionData:{data:data},
	variables:variables});
	
	};
	_this.updateQuery(mapFn);
	},
	error:function error(err){
	if(options.onError){
	options.onError(err);
	}else
	{
	console.error('Unhandled GraphQL subscription errror',err);
	}
	}});
	
	this.subscriptionHandles.push(subscription);
	return function(){
	var i=_this.subscriptionHandles.indexOf(subscription);
	if(i>=0){
	_this.subscriptionHandles.splice(i,1);
	subscription.unsubscribe();
	}
	};
	};
	ObservableQuery.prototype.setOptions=function(opts){
	var _this=this;
	var oldOptions=this.options;
	this.options=assign({},this.options,opts);
	if(opts.pollInterval){
	this.startPolling(opts.pollInterval);
	}else
	if(opts.pollInterval===0){
	this.stopPolling();
	}
	if(!oldOptions.forceFetch&&opts.forceFetch){
	return this.queryManager.fetchQuery(this.queryId,this.options).
	then(function(result){return _this.queryManager.transformResult(result);});
	}
	return this.setVariables(this.options.variables);
	};
	ObservableQuery.prototype.setVariables=function(variables){
	var _this=this;
	var newVariables=assign({},this.variables,variables);
	if(isEqual(newVariables,this.variables)){
	return this.result();
	}else
	{
	this.variables=newVariables;
	return this.queryManager.fetchQuery(this.queryId,assign(this.options,{
	variables:this.variables})).
	
	then(function(result){return _this.queryManager.transformResult(result);});
	}
	};
	ObservableQuery.prototype.updateQuery=function(mapFn){
	var _a=this.queryManager.getQueryWithPreviousResult(this.queryId),previousResult=_a.previousResult,variables=_a.variables,document=_a.document;
	var newResult=errorHandling_1.tryFunctionOrLogError(function(){return mapFn(previousResult,{variables:variables});});
	if(newResult){
	this.queryManager.store.dispatch({
	type:'APOLLO_UPDATE_QUERY_RESULT',
	newResult:newResult,
	variables:variables,
	document:document});
	
	}
	};
	ObservableQuery.prototype.stopPolling=function(){
	if(this.isCurrentlyPolling){
	this.scheduler.stopPollingQuery(this.queryId);
	this.isCurrentlyPolling=false;
	}
	};
	ObservableQuery.prototype.startPolling=function(pollInterval){
	if(this.options.noFetch){
	throw new Error('noFetch option should not use query polling.');
	}
	if(this.isCurrentlyPolling){
	this.scheduler.stopPollingQuery(this.queryId);
	this.isCurrentlyPolling=false;
	}
	this.options.pollInterval=pollInterval;
	this.isCurrentlyPolling=true;
	this.scheduler.startPollingQuery(this.options,this.queryId);
	};
	ObservableQuery.prototype.onSubscribe=function(observer){
	var _this=this;
	this.observers.push(observer);
	if(observer.next&&this.lastResult){
	observer.next(this.lastResult);
	}
	if(observer.error&&this.lastError){
	observer.error(this.lastError);
	}
	if(this.observers.length===1){
	this.setUpQuery();
	}
	var retQuerySubscription={
	unsubscribe:function unsubscribe(){
	_this.observers=_this.observers.filter(function(obs){return obs!==observer;});
	if(_this.observers.length===0){
	_this.tearDownQuery();
	}
	}};
	
	return retQuerySubscription;
	};
	ObservableQuery.prototype.setUpQuery=function(){
	var _this=this;
	if(this.shouldSubscribe){
	this.queryManager.addObservableQuery(this.queryId,this);
	}
	if(!!this.options.pollInterval){
	if(this.options.noFetch){
	throw new Error('noFetch option should not use query polling.');
	}
	this.isCurrentlyPolling=true;
	this.scheduler.startPollingQuery(this.options,this.queryId);
	}
	var observer={
	next:function next(result){
	_this.observers.forEach(function(obs){
	if(obs.next){
	obs.next(result);
	}
	});
	_this.lastResult=result;
	},
	error:function error(_error2){
	_this.observers.forEach(function(obs){
	if(obs.error){
	obs.error(_error2);
	}else
	{
	console.error('Unhandled error',_error2.message,_error2.stack);
	}
	});
	_this.lastError=_error2;
	}};
	
	this.queryManager.startQuery(this.queryId,this.options,this.queryManager.queryListenerForObserver(this.queryId,this.options,observer));
	};
	ObservableQuery.prototype.tearDownQuery=function(){
	if(this.isCurrentlyPolling){
	this.scheduler.stopPollingQuery(this.queryId);
	this.isCurrentlyPolling=false;
	}
	this.subscriptionHandles.forEach(function(sub){return sub.unsubscribe();});
	this.subscriptionHandles=[];
	this.queryManager.stopQuery(this.queryId);
	this.observers=[];
	};
	return ObservableQuery;
	}(Observable_1.Observable);
	exports.ObservableQuery=ObservableQuery;

/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var symbol_observable_1=__webpack_require__(197);
	function isSubscription(subscription){
	return subscription.unsubscribe!==undefined;
	}
	var Observable=function(){
	function Observable(subscriberFunction){
	this.subscriberFunction=subscriberFunction;
	}
	Observable.prototype[symbol_observable_1.default]=function(){
	return this;
	};
	Observable.prototype.subscribe=function(observer){
	var subscriptionOrCleanupFunction=this.subscriberFunction(observer);
	if(isSubscription(subscriptionOrCleanupFunction)){
	return subscriptionOrCleanupFunction;
	}else
	{
	return{
	unsubscribe:subscriptionOrCleanupFunction};
	
	}
	};
	return Observable;
	}();
	exports.Observable=Observable;

/***/ },
/* 409 */
/***/ function(module, exports) {

	"use strict";
	var __extends=undefined&&undefined.__extends||function(d,b){
	for(var p in b){if(b.hasOwnProperty(p))d[p]=b[p];}
	function __(){this.constructor=d;}
	d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());
	};
	function isApolloError(err){
	return err.hasOwnProperty('graphQLErrors');
	}
	exports.isApolloError=isApolloError;
	var generateErrorMessage=function generateErrorMessage(err){
	var message='';
	if(Array.isArray(err.graphQLErrors)&&err.graphQLErrors.length!==0){
	err.graphQLErrors.forEach(function(graphQLError){
	message+='GraphQL error: '+graphQLError.message+'\n';
	});
	}
	if(err.networkError){
	message+='Network error: '+err.networkError.message+'\n';
	}
	message=message.replace(/\n$/,'');
	return message;
	};
	var ApolloError=function(_super){
	__extends(ApolloError,_super);
	function ApolloError(_a){
	var graphQLErrors=_a.graphQLErrors,networkError=_a.networkError,errorMessage=_a.errorMessage,extraInfo=_a.extraInfo;
	_super.call(this,errorMessage);
	this.graphQLErrors=graphQLErrors;
	this.networkError=networkError;
	this.stack=new Error().stack;
	if(!errorMessage){
	this.message=generateErrorMessage(this);
	}else
	{
	this.message=errorMessage;
	}
	this.extraInfo=extraInfo;
	}
	return ApolloError;
	}(Error);
	exports.ApolloError=ApolloError;

/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	var forOwn=__webpack_require__(411);
	var isEqual=__webpack_require__(396);
	var assign=__webpack_require__(212);
	var store_1=__webpack_require__(334);
	var getFromAST_1=__webpack_require__(340);
	var queryTransform_1=__webpack_require__(413);
	var resultReducers_1=__webpack_require__(414);
	var printer_1=__webpack_require__(330);
	var readFromStore_1=__webpack_require__(415);
	var readFromStore_2=__webpack_require__(415);
	var scheduler_1=__webpack_require__(421);
	var Observable_1=__webpack_require__(408);
	var store_2=__webpack_require__(395);
	var errorHandling_1=__webpack_require__(422);
	var ApolloError_1=__webpack_require__(409);
	var ObservableQuery_1=__webpack_require__(407);
	;
	(function(FetchType){
	FetchType[FetchType["normal"]=1]="normal";
	FetchType[FetchType["refetch"]=2]="refetch";
	FetchType[FetchType["poll"]=3]="poll";
	})(exports.FetchType||(exports.FetchType={}));
	var FetchType=exports.FetchType;
	var QueryManager=function(){
	function QueryManager(_a){
	var _this=this;
	var networkInterface=_a.networkInterface,store=_a.store,reduxRootSelector=_a.reduxRootSelector,_b=_a.reducerConfig,reducerConfig=_b===void 0?{mutationBehaviorReducers:{}}:_b,resultTransformer=_a.resultTransformer,resultComparator=_a.resultComparator,_c=_a.addTypename,addTypename=_c===void 0?true:_c;
	this.idCounter=0;
	this.networkInterface=networkInterface;
	this.store=store;
	this.reduxRootSelector=reduxRootSelector;
	this.reducerConfig=reducerConfig;
	this.resultTransformer=resultTransformer;
	this.resultComparator=resultComparator;
	this.pollingTimers={};
	this.queryListeners={};
	this.queryDocuments={};
	this.addTypename=addTypename;
	this.scheduler=new scheduler_1.QueryScheduler({
	queryManager:this});
	
	this.fetchQueryPromises={};
	this.observableQueries={};
	this.queryIdsByName={};
	if(this.store['subscribe']){
	var currentStoreData_1;
	this.store['subscribe'](function(){
	var previousStoreData=currentStoreData_1||{};
	var previousStoreHasData=Object.keys(previousStoreData).length;
	currentStoreData_1=_this.getApolloState();
	if(isEqual(previousStoreData,currentStoreData_1)&&previousStoreHasData){
	return;
	}
	_this.broadcastQueries();
	});
	}
	}
	QueryManager.prototype.broadcastNewStore=function(store){
	this.broadcastQueries();
	};
	QueryManager.prototype.mutate=function(_a){
	var _this=this;
	var mutation=_a.mutation,variables=_a.variables,_b=_a.resultBehaviors,resultBehaviors=_b===void 0?[]:_b,optimisticResponse=_a.optimisticResponse,updateQueries=_a.updateQueries,_c=_a.refetchQueries,refetchQueries=_c===void 0?[]:_c;
	var mutationId=this.generateQueryId();
	if(this.addTypename){
	mutation=queryTransform_1.addTypenameToDocument(mutation);
	}
	getFromAST_1.checkDocument(mutation);
	var mutationString=printer_1.print(mutation);
	var request={
	query:mutation,
	variables:variables,
	operationName:getFromAST_1.getOperationName(mutation)};
	
	var updateQueriesResultBehaviors=!optimisticResponse?[]:
	this.collectResultBehaviorsFromUpdateQueries(updateQueries,{data:optimisticResponse},true);
	this.queryDocuments[mutationId]=mutation;
	var extraReducers=Object.keys(this.observableQueries).map(function(queryId){
	var queryOptions=_this.observableQueries[queryId].observableQuery.options;
	if(queryOptions.reducer){
	return resultReducers_1.createStoreReducer(queryOptions.reducer,queryOptions.query,queryOptions.variables,_this.reducerConfig);
	}
	return null;
	}).filter(function(reducer){return reducer!==null;});
	this.store.dispatch({
	type:'APOLLO_MUTATION_INIT',
	mutationString:mutationString,
	mutation:mutation,
	variables:variables,
	operationName:getFromAST_1.getOperationName(mutation),
	mutationId:mutationId,
	optimisticResponse:optimisticResponse,
	resultBehaviors:resultBehaviors.concat(updateQueriesResultBehaviors),
	extraReducers:extraReducers});
	
	return new Promise(function(resolve,reject){
	_this.networkInterface.query(request).
	then(function(result){
	if(result.errors){
	reject(new ApolloError_1.ApolloError({
	graphQLErrors:result.errors}));
	
	}
	_this.store.dispatch({
	type:'APOLLO_MUTATION_RESULT',
	result:result,
	mutationId:mutationId,
	document:mutation,
	operationName:getFromAST_1.getOperationName(mutation),
	resultBehaviors:resultBehaviors.concat(_this.collectResultBehaviorsFromUpdateQueries(updateQueries,result)),
	extraReducers:extraReducers});
	
	refetchQueries.forEach(function(name){_this.refetchQueryByName(name);});
	delete _this.queryDocuments[mutationId];
	resolve(_this.transformResult(result));
	}).
	catch(function(err){
	_this.store.dispatch({
	type:'APOLLO_MUTATION_ERROR',
	error:err,
	mutationId:mutationId});
	
	delete _this.queryDocuments[mutationId];
	reject(new ApolloError_1.ApolloError({
	networkError:err}));
	
	});
	});
	};
	QueryManager.prototype.queryListenerForObserver=function(queryId,options,observer){
	var _this=this;
	var lastResult;
	return function(queryStoreValue){
	if(!queryStoreValue){
	return;
	}
	var shouldNotifyIfLoading=queryStoreValue.returnPartialData||
	queryStoreValue.previousVariables;
	var networkStatusChanged=lastResult&&queryStoreValue.networkStatus!==lastResult.networkStatus;
	if(!queryStoreValue.loading||
	networkStatusChanged&&options.notifyOnNetworkStatusChange||
	shouldNotifyIfLoading){
	if(queryStoreValue.graphQLErrors||queryStoreValue.networkError){
	var apolloError=new ApolloError_1.ApolloError({
	graphQLErrors:queryStoreValue.graphQLErrors,
	networkError:queryStoreValue.networkError});
	
	if(observer.error){
	try{
	observer.error(apolloError);
	}
	catch(e){
	console.error("Error in observer.error \n"+e.stack);
	}
	}else
	{
	console.error('Unhandled error',apolloError,apolloError.stack);
	if(process.env.NODE_ENV!=='production'){
	console.info('An unhandled error was thrown because no error handler is registered '+
	'for the query '+options.query.loc.source);
	}
	}
	}else
	{
	try{
	var resultFromStore={
	data:readFromStore_1.readQueryFromStore({
	store:_this.getDataWithOptimisticResults(),
	query:_this.queryDocuments[queryId],
	variables:queryStoreValue.previousVariables||queryStoreValue.variables,
	returnPartialData:options.returnPartialData||options.noFetch,
	config:_this.reducerConfig}),
	
	loading:queryStoreValue.loading,
	networkStatus:queryStoreValue.networkStatus};
	
	if(observer.next){
	if(_this.isDifferentResult(lastResult,resultFromStore)){
	lastResult=resultFromStore;
	try{
	observer.next(_this.transformResult(resultFromStore));
	}
	catch(e){
	console.error("Error in observer.next \n"+e.stack);
	}
	}
	}
	}
	catch(error){
	if(observer.error){
	observer.error(new ApolloError_1.ApolloError({
	networkError:error}));
	
	}
	return;
	}
	}
	}
	};
	};
	QueryManager.prototype.watchQuery=function(options,shouldSubscribe){
	if(shouldSubscribe===void 0){shouldSubscribe=true;}
	getFromAST_1.getQueryDefinition(options.query);
	var transformedOptions=assign({},options);
	if(this.addTypename){
	transformedOptions.query=queryTransform_1.addTypenameToDocument(transformedOptions.query);
	}
	var observableQuery=new ObservableQuery_1.ObservableQuery({
	scheduler:this.scheduler,
	options:transformedOptions,
	shouldSubscribe:shouldSubscribe});
	
	return observableQuery;
	};
	QueryManager.prototype.query=function(options){
	var _this=this;
	if(options.returnPartialData){
	throw new Error('returnPartialData option only supported on watchQuery.');
	}
	if(options.query.kind!=='Document'){
	throw new Error('You must wrap the query string in a "gql" tag.');
	}
	var requestId=this.idCounter;
	var resPromise=new Promise(function(resolve,reject){
	_this.addFetchQueryPromise(requestId,resPromise,resolve,reject);
	return _this.watchQuery(options,false).result().then(function(result){
	_this.removeFetchQueryPromise(requestId);
	resolve(result);
	}).catch(function(error){
	_this.removeFetchQueryPromise(requestId);
	reject(error);
	});
	});
	return resPromise;
	};
	QueryManager.prototype.fetchQuery=function(queryId,options,fetchType){
	var variables=options.variables,_a=options.forceFetch,forceFetch=_a===void 0?false:_a,_b=options.returnPartialData,returnPartialData=_b===void 0?false:_b,_c=options.noFetch,noFetch=_c===void 0?false:_c,_d=options.metadata,metadata=_d===void 0?null:_d;
	var queryDoc=this.transformQueryDocument(options).queryDoc;
	var queryString=printer_1.print(queryDoc);
	var storeResult;
	var needToFetch=forceFetch;
	if(!forceFetch){
	var _e=readFromStore_2.diffQueryAgainstStore({
	query:queryDoc,
	store:this.reduxRootSelector(this.store.getState()).data,
	returnPartialData:true,
	variables:variables,
	config:this.reducerConfig}),
	isMissing=_e.isMissing,result=_e.result;
	needToFetch=isMissing;
	storeResult=result;
	}
	var requestId=this.generateRequestId();
	var shouldFetch=needToFetch&&!noFetch;
	this.queryDocuments[queryId]=queryDoc;
	this.store.dispatch({
	type:'APOLLO_QUERY_INIT',
	queryString:queryString,
	document:queryDoc,
	variables:variables,
	forceFetch:forceFetch,
	returnPartialData:returnPartialData||noFetch,
	queryId:queryId,
	requestId:requestId,
	storePreviousVariables:shouldFetch,
	isPoll:fetchType===FetchType.poll,
	isRefetch:fetchType===FetchType.refetch,
	metadata:metadata});
	
	if(!shouldFetch||returnPartialData){
	this.store.dispatch({
	type:'APOLLO_QUERY_RESULT_CLIENT',
	result:{data:storeResult},
	variables:variables,
	document:queryDoc,
	complete:!shouldFetch,
	queryId:queryId,
	requestId:requestId});
	
	}
	if(shouldFetch){
	return this.fetchRequest({
	requestId:requestId,
	queryId:queryId,
	document:queryDoc,
	options:options});
	
	}
	return Promise.resolve({data:storeResult});
	};
	QueryManager.prototype.generateQueryId=function(){
	var queryId=this.idCounter.toString();
	this.idCounter++;
	return queryId;
	};
	QueryManager.prototype.stopQueryInStore=function(queryId){
	this.store.dispatch({
	type:'APOLLO_QUERY_STOP',
	queryId:queryId});
	
	};
	;
	QueryManager.prototype.getApolloState=function(){
	return this.reduxRootSelector(this.store.getState());
	};
	QueryManager.prototype.getInitialState=function(){
	return{data:this.getApolloState().data};
	};
	QueryManager.prototype.getDataWithOptimisticResults=function(){
	return store_1.getDataWithOptimisticResults(this.getApolloState());
	};
	QueryManager.prototype.addQueryListener=function(queryId,listener){
	this.queryListeners[queryId]=this.queryListeners[queryId]||[];
	this.queryListeners[queryId].push(listener);
	};
	QueryManager.prototype.addFetchQueryPromise=function(requestId,promise,resolve,reject){
	this.fetchQueryPromises[requestId.toString()]={promise:promise,resolve:resolve,reject:reject};
	};
	QueryManager.prototype.removeFetchQueryPromise=function(requestId){
	delete this.fetchQueryPromises[requestId.toString()];
	};
	QueryManager.prototype.addObservableQuery=function(queryId,observableQuery){
	this.observableQueries[queryId]={observableQuery:observableQuery};
	var queryDef=getFromAST_1.getQueryDefinition(observableQuery.options.query);
	if(queryDef.name&&queryDef.name.value){
	var queryName=getFromAST_1.getQueryDefinition(observableQuery.options.query).name.value;
	this.queryIdsByName[queryName]=this.queryIdsByName[queryName]||[];
	this.queryIdsByName[queryName].push(observableQuery.queryId);
	}
	};
	QueryManager.prototype.removeObservableQuery=function(queryId){
	var observableQuery=this.observableQueries[queryId].observableQuery;
	var queryName=getFromAST_1.getQueryDefinition(observableQuery.options.query).name.value;
	delete this.observableQueries[queryId];
	this.queryIdsByName[queryName]=this.queryIdsByName[queryName].filter(function(val){
	return!(observableQuery.queryId===val);
	});
	};
	QueryManager.prototype.resetStore=function(){
	var _this=this;
	Object.keys(this.fetchQueryPromises).forEach(function(key){
	var reject=_this.fetchQueryPromises[key].reject;
	reject(new Error('Store reset while query was in flight.'));
	});
	this.store.dispatch({
	type:'APOLLO_STORE_RESET',
	observableQueryIds:Object.keys(this.observableQueries)});
	
	Object.keys(this.observableQueries).forEach(function(queryId){
	var storeQuery=_this.reduxRootSelector(_this.store.getState()).queries[queryId];
	if(!_this.observableQueries[queryId].observableQuery.options.noFetch&&
	!(storeQuery&&storeQuery.stopped)){
	_this.observableQueries[queryId].observableQuery.refetch();
	}
	});
	};
	QueryManager.prototype.startQuery=function(queryId,options,listener){
	this.addQueryListener(queryId,listener);
	this.fetchQuery(queryId,options).
	catch(function(error){return undefined;});
	return queryId;
	};
	QueryManager.prototype.startGraphQLSubscription=function(options){
	var _this=this;
	var document=options.document,variables=options.variables;
	var transformedDoc=document;
	if(this.addTypename){
	transformedDoc=queryTransform_1.addTypenameToDocument(transformedDoc);
	}
	var request={
	query:transformedDoc,
	variables:variables,
	operationName:getFromAST_1.getOperationName(transformedDoc)};
	
	var subId;
	var observers=[];
	return new Observable_1.Observable(function(observer){
	observers.push(observer);
	if(observers.length===1){
	var handler=function handler(error,result){
	if(error){
	observers.forEach(function(obs){
	obs.error(error);
	});
	}else
	{
	_this.store.dispatch({
	type:'APOLLO_SUBSCRIPTION_RESULT',
	document:transformedDoc,
	operationName:getFromAST_1.getOperationName(transformedDoc),
	result:{data:result},
	variables:variables,
	subscriptionId:subId,
	extraReducers:_this.getExtraReducers()});
	
	observers.forEach(function(obs){
	obs.next(result);
	});
	}
	};
	subId=_this.networkInterface.subscribe(request,handler);
	}
	return{
	unsubscribe:function unsubscribe(){
	observers=observers.filter(function(obs){return obs!==observer;});
	if(observers.length===0){
	_this.networkInterface.unsubscribe(subId);
	}
	},
	_networkSubscriptionId:subId};
	
	});
	};
	;
	QueryManager.prototype.stopQuery=function(queryId){
	delete this.queryListeners[queryId];
	delete this.queryDocuments[queryId];
	this.stopQueryInStore(queryId);
	};
	QueryManager.prototype.getCurrentQueryResult=function(observableQuery,isOptimistic){
	if(isOptimistic===void 0){isOptimistic=false;}
	var _a=this.getQueryParts(observableQuery),variables=_a.variables,document=_a.document;
	var queryOptions=observableQuery.options;
	var readOptions={
	store:isOptimistic?this.getDataWithOptimisticResults():this.getApolloState().data,
	query:document,
	variables:variables,
	returnPartialData:false,
	config:this.reducerConfig};
	
	try{
	var data=readFromStore_1.readQueryFromStore(readOptions);
	return{data:data,partial:false};
	}
	catch(e){
	if(queryOptions.returnPartialData||queryOptions.noFetch){
	try{
	readOptions.returnPartialData=true;
	var data=readFromStore_1.readQueryFromStore(readOptions);
	return{data:data,partial:true};
	}
	catch(e){
	}
	}
	return{data:{},partial:true};
	}
	};
	QueryManager.prototype.getQueryWithPreviousResult=function(queryIdOrObservable,isOptimistic){
	if(isOptimistic===void 0){isOptimistic=false;}
	var observableQuery;
	if(typeof queryIdOrObservable==='string'){
	if(!this.observableQueries[queryIdOrObservable]){
	throw new Error("ObservableQuery with this id doesn't exist: "+queryIdOrObservable);
	}
	observableQuery=this.observableQueries[queryIdOrObservable].observableQuery;
	}else
	{
	observableQuery=queryIdOrObservable;
	}
	var _a=this.getQueryParts(observableQuery),variables=_a.variables,document=_a.document;
	var data=this.getCurrentQueryResult(observableQuery,isOptimistic).data;
	return{
	previousResult:data,
	variables:variables,
	document:document};
	
	};
	QueryManager.prototype.transformResult=function(result){
	if(!this.resultTransformer){
	return result;
	}else
	{
	return this.resultTransformer(result);
	}
	};
	QueryManager.prototype.getQueryParts=function(observableQuery){
	var queryOptions=observableQuery.options;
	var transformedDoc=observableQuery.options.query;
	if(this.addTypename){
	transformedDoc=queryTransform_1.addTypenameToDocument(transformedDoc);
	}
	return{
	variables:queryOptions.variables,
	document:transformedDoc};
	
	};
	QueryManager.prototype.collectResultBehaviorsFromUpdateQueries=function(updateQueries,mutationResult,isOptimistic){
	var _this=this;
	if(isOptimistic===void 0){isOptimistic=false;}
	if(!updateQueries){
	return[];
	}
	var resultBehaviors=[];
	Object.keys(updateQueries).forEach(function(queryName){
	var reducer=updateQueries[queryName];
	var queryIds=_this.queryIdsByName[queryName];
	if(!queryIds){
	return;
	}
	queryIds.forEach(function(queryId){
	var _a=_this.getQueryWithPreviousResult(queryId,isOptimistic),previousResult=_a.previousResult,variables=_a.variables,document=_a.document;
	var newResult=errorHandling_1.tryFunctionOrLogError(function(){return reducer(previousResult,{
	mutationResult:mutationResult,
	queryName:queryName,
	queryVariables:variables});
	});
	if(newResult){
	resultBehaviors.push({
	type:'QUERY_RESULT',
	newResult:newResult,
	variables:variables,
	document:document});
	
	}
	});
	});
	return resultBehaviors;
	};
	QueryManager.prototype.transformQueryDocument=function(options){
	var queryDoc=options.query;
	if(this.addTypename){
	queryDoc=queryTransform_1.addTypenameToDocument(queryDoc);
	}
	return{
	queryDoc:queryDoc};
	
	};
	QueryManager.prototype.getExtraReducers=function(){
	var _this=this;
	return Object.keys(this.observableQueries).map(function(obsQueryId){
	var queryOptions=_this.observableQueries[obsQueryId].observableQuery.options;
	if(queryOptions.reducer){
	return resultReducers_1.createStoreReducer(queryOptions.reducer,queryOptions.query,queryOptions.variables,_this.reducerConfig);
	}
	return null;
	}).filter(function(reducer){return reducer!==null;});
	};
	QueryManager.prototype.fetchRequest=function(_a){
	var _this=this;
	var requestId=_a.requestId,queryId=_a.queryId,document=_a.document,options=_a.options;
	var variables=options.variables,noFetch=options.noFetch,returnPartialData=options.returnPartialData;
	var request={
	query:document,
	variables:variables,
	operationName:getFromAST_1.getOperationName(document)};
	
	var retPromise=new Promise(function(resolve,reject){
	_this.addFetchQueryPromise(requestId,retPromise,resolve,reject);
	_this.networkInterface.query(request).
	then(function(result){
	var extraReducers=_this.getExtraReducers();
	_this.store.dispatch({
	type:'APOLLO_QUERY_RESULT',
	document:document,
	operationName:getFromAST_1.getOperationName(document),
	result:result,
	queryId:queryId,
	requestId:requestId,
	extraReducers:extraReducers});
	
	_this.removeFetchQueryPromise(requestId);
	if(result.errors){
	throw new ApolloError_1.ApolloError({
	graphQLErrors:result.errors});
	
	}
	return result;
	}).then(function(){
	var resultFromStore;
	try{
	resultFromStore=readFromStore_1.readQueryFromStore({
	store:_this.getApolloState().data,
	variables:variables,
	returnPartialData:returnPartialData||noFetch,
	query:document,
	config:_this.reducerConfig});
	
	}
	catch(e){}
	var reducerError=_this.getApolloState().reducerError;
	if(!resultFromStore&&reducerError){
	return Promise.reject(reducerError);
	}
	_this.removeFetchQueryPromise(requestId);
	resolve({data:resultFromStore,loading:false,networkStatus:store_2.NetworkStatus.ready});
	return null;
	}).catch(function(error){
	if(ApolloError_1.isApolloError(error)){
	reject(error);
	}else
	{
	_this.store.dispatch({
	type:'APOLLO_QUERY_ERROR',
	error:error,
	queryId:queryId,
	requestId:requestId});
	
	_this.removeFetchQueryPromise(requestId);
	reject(new ApolloError_1.ApolloError({
	networkError:error}));
	
	}
	});
	});
	return retPromise;
	};
	QueryManager.prototype.refetchQueryByName=function(queryName){
	var _this=this;
	var refetchedQueries=this.queryIdsByName[queryName];
	if(refetchedQueries===undefined){
	console.warn("Warning: unknown query with name "+queryName+" asked to refetch");
	}else
	{
	refetchedQueries.forEach(function(queryId){
	_this.observableQueries[queryId].observableQuery.refetch();
	});
	}
	};
	QueryManager.prototype.isDifferentResult=function(lastResult,newResult){
	var comparator=this.resultComparator||isEqual;
	return!comparator(lastResult,newResult);
	};
	QueryManager.prototype.broadcastQueries=function(){
	var queries=this.getApolloState().queries;
	forOwn(this.queryListeners,function(listeners,queryId){
	if(listeners){
	listeners.forEach(function(listener){
	if(listener){
	var queryStoreValue=queries[queryId];
	listener(queryStoreValue);
	}
	});
	}
	});
	};
	QueryManager.prototype.generateRequestId=function(){
	var requestId=this.idCounter;
	this.idCounter++;
	return requestId;
	};
	return QueryManager;
	}();
	exports.QueryManager=QueryManager;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var baseForOwn=__webpack_require__(254),
	castFunction=__webpack_require__(412);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function forOwn(object,iteratee){
	return object&&baseForOwn(object,castFunction(iteratee));
	}
	
	module.exports=forOwn;

/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var identity=__webpack_require__(228);
	
	
	
	
	
	
	
	
	function castFunction(value){
	return typeof value=='function'?value:identity;
	}
	
	module.exports=castFunction;

/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var getFromAST_1=__webpack_require__(340);
	var cloneDeep=__webpack_require__(360);
	var TYPENAME_FIELD={
	kind:'Field',
	alias:null,
	name:{
	kind:'Name',
	value:'__typename'}};
	
	
	function addTypenameToSelectionSet(selectionSet,isRoot){
	if(isRoot===void 0){isRoot=false;}
	if(selectionSet&&selectionSet.selections){
	if(!isRoot){
	var alreadyHasThisField=selectionSet.selections.some(function(selection){
	return selection.kind==='Field'&&selection.name.value==='__typename';
	});
	if(!alreadyHasThisField){
	selectionSet.selections.push(TYPENAME_FIELD);
	}
	}
	selectionSet.selections.forEach(function(selection){
	if(selection.kind==='Field'||selection.kind==='InlineFragment'){
	addTypenameToSelectionSet(selection.selectionSet);
	}
	});
	}
	}
	function addTypenameToDocument(doc){
	getFromAST_1.checkDocument(doc);
	var docClone=cloneDeep(doc);
	docClone.definitions.forEach(function(definition){
	var isRoot=definition.kind==='OperationDefinition';
	addTypenameToSelectionSet(definition.selectionSet,isRoot);
	});
	return docClone;
	}
	exports.addTypenameToDocument=addTypenameToDocument;

/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var readFromStore_1=__webpack_require__(415);
	var writeToStore_1=__webpack_require__(337);
	function createStoreReducer(resultReducer,document,variables,config){
	return function(store,action){
	var currentResult=readFromStore_1.readQueryFromStore({
	store:store,
	query:document,
	variables:variables,
	returnPartialData:true,
	config:config});
	
	var nextResult=resultReducer(currentResult,action);
	if(currentResult!==nextResult){
	return writeToStore_1.writeResultToStore({
	dataId:'ROOT_QUERY',
	result:nextResult,
	store:store,
	document:document,
	variables:variables,
	dataIdFromObject:config.dataIdFromObject});
	
	}
	return store;
	};
	}
	exports.createStoreReducer=createStoreReducer;

/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	var graphql_anywhere_1=__webpack_require__(416);
	var storeUtils_1=__webpack_require__(357);
	var storeUtils_2=__webpack_require__(357);
	var getFromAST_1=__webpack_require__(340);
	function readQueryFromStore(_a){
	var store=_a.store,query=_a.query,variables=_a.variables,_b=_a.returnPartialData,returnPartialData=_b===void 0?false:_b,config=_a.config;
	var result=diffQueryAgainstStore({
	query:query,
	store:store,
	returnPartialData:returnPartialData,
	variables:variables,
	config:config}).
	result;
	return result;
	}
	exports.readQueryFromStore=readQueryFromStore;
	var haveWarned=false;
	var fragmentMatcher=function fragmentMatcher(idValue,typeCondition,context){
	assertIdValue(idValue);
	var obj=context.store[idValue.id];
	if(!obj){
	return false;
	}
	if(!obj.__typename){
	if(!haveWarned){
	console.warn("You're using fragments in your queries, but don't have the addTypename:\ntrue option set in Apollo Client. Please turn on that option so that we can accurately\nmatch fragments.");
	if(process.env.NODE_ENV!=='test'){
	haveWarned=true;
	}
	}
	context.returnPartialData=true;
	return true;
	}
	if(obj.__typename===typeCondition){
	return true;
	}
	context.returnPartialData=true;
	return true;
	};
	var readStoreResolver=function readStoreResolver(fieldName,idValue,args,context){
	assertIdValue(idValue);
	var objId=idValue.id;
	var obj=context.store[objId];
	var storeKeyName=storeUtils_2.storeKeyNameFromFieldNameAndArgs(fieldName,args);
	var fieldValue=(obj||{})[storeKeyName];
	if(typeof fieldValue==='undefined'){
	if(context.customResolvers&&obj&&(obj.__typename||objId==='ROOT_QUERY')){
	var typename=obj.__typename||'Query';
	var type=context.customResolvers[typename];
	if(type){
	var resolver=type[fieldName];
	if(resolver){
	return resolver(obj,args);
	}
	}
	}
	if(!context.returnPartialData){
	throw new Error("Can't find field "+storeKeyName+" on object ("+objId+") "+JSON.stringify(obj,null,2)+".\nPerhaps you want to use the `returnPartialData` option?");
	}
	context.hasMissingField=true;
	return fieldValue;
	}
	if(storeUtils_1.isJsonValue(fieldValue)){
	return fieldValue.json;
	}
	return fieldValue;
	};
	function diffQueryAgainstStore(_a){
	var store=_a.store,query=_a.query,variables=_a.variables,_b=_a.returnPartialData,returnPartialData=_b===void 0?true:_b,config=_a.config;
	getFromAST_1.getQueryDefinition(query);
	var context={
	store:store,
	returnPartialData:returnPartialData,
	customResolvers:config&&config.customResolvers,
	hasMissingField:false};
	
	var rootIdValue={
	type:'id',
	id:'ROOT_QUERY'};
	
	var result=graphql_anywhere_1.default(readStoreResolver,query,rootIdValue,context,variables,{
	fragmentMatcher:fragmentMatcher});
	
	return{
	result:result,
	isMissing:context.hasMissingField};
	
	}
	exports.diffQueryAgainstStore=diffQueryAgainstStore;
	function assertIdValue(idValue){
	if(!storeUtils_1.isIdValue(idValue)){
	throw new Error("Encountered a sub-selection on the query, but the store doesn't have an object reference. This should never happen during normal use unless you have custom code that is directly manipulating the store; please file an issue.");
	}
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var getFromAST_1=__webpack_require__(417);
	var directives_1=__webpack_require__(418);
	var storeUtils_1=__webpack_require__(419);
	var utilities_1=__webpack_require__(420);
	exports.filter=utilities_1.filter;
	exports.check=utilities_1.check;
	exports.propType=utilities_1.propType;
	function graphql(resolver,document,rootValue,contextValue,variableValues,execOptions){
	if(execOptions===void 0){execOptions={};}
	var mainDefinition=getFromAST_1.getMainDefinition(document);
	var fragments=getFromAST_1.getFragmentDefinitions(document);
	var fragmentMap=getFromAST_1.createFragmentMap(fragments)||{};
	var resultMapper=execOptions.resultMapper;
	var fragmentMatcher=execOptions.fragmentMatcher||function(){return true;};
	var execContext={
	fragmentMap:fragmentMap,
	contextValue:contextValue,
	variableValues:variableValues,
	resultMapper:resultMapper,
	resolver:resolver,
	fragmentMatcher:fragmentMatcher};
	
	return executeSelectionSet(mainDefinition.selectionSet,rootValue,execContext);
	}
	Object.defineProperty(exports,"__esModule",{value:true});
	exports.default=graphql;
	function executeSelectionSet(selectionSet,rootValue,execContext){
	var fragmentMap=execContext.fragmentMap,contextValue=execContext.contextValue,variables=execContext.variableValues;
	var result={};
	selectionSet.selections.forEach(function(selection){
	if(!directives_1.shouldInclude(selection,variables)){
	return;
	}
	if(storeUtils_1.isField(selection)){
	var fieldResult=executeField(selection,rootValue,execContext);
	var resultFieldKey=storeUtils_1.resultKeyNameFromField(selection);
	if(fieldResult!==undefined){
	result[resultFieldKey]=fieldResult;
	}
	}else
	{
	var fragment=void 0;
	if(storeUtils_1.isInlineFragment(selection)){
	fragment=selection;
	}else
	{
	fragment=fragmentMap[selection.name.value];
	if(!fragment){
	throw new Error("No fragment named "+selection.name.value);
	}
	}
	var typeCondition=fragment.typeCondition.name.value;
	if(execContext.fragmentMatcher(rootValue,typeCondition,contextValue)){
	var fragmentResult=executeSelectionSet(fragment.selectionSet,rootValue,execContext);
	merge(result,fragmentResult);
	}
	}
	});
	if(execContext.resultMapper){
	return execContext.resultMapper(result,rootValue);
	}
	return result;
	}
	function executeField(field,rootValue,execContext){
	var variables=execContext.variableValues,contextValue=execContext.contextValue,resolver=execContext.resolver;
	var fieldName=field.name.value;
	var args=storeUtils_1.argumentsObjectFromField(field,variables);
	var info={
	isLeaf:!field.selectionSet,
	resultKey:storeUtils_1.resultKeyNameFromField(field)};
	
	var result=resolver(fieldName,rootValue,args,contextValue,info);
	if(!field.selectionSet){
	return result;
	}
	if(result===null||typeof result==='undefined'){
	return result;
	}
	if(Array.isArray(result)){
	return executeSubSelectedArray(field,result,execContext);
	}
	return executeSelectionSet(field.selectionSet,result,execContext);
	}
	function executeSubSelectedArray(field,result,execContext){
	return result.map(function(item){
	if(item===null){
	return null;
	}
	if(Array.isArray(item)){
	return executeSubSelectedArray(field,item,execContext);
	}
	return executeSelectionSet(field.selectionSet,item,execContext);
	});
	}
	function merge(dest,src){
	if(src===null||
	typeof src==='undefined'||
	typeof src==='string'||
	typeof src==='number'||
	typeof src==='boolean'||
	Array.isArray(src)){
	return src;
	}
	Object.keys(dest).forEach(function(destKey){
	if(src.hasOwnProperty(destKey)){
	merge(dest[destKey],src[destKey]);
	}
	});
	Object.keys(src).forEach(function(srcKey){
	if(!dest.hasOwnProperty(srcKey)){
	dest[srcKey]=src[srcKey];
	}
	});
	}

/***/ },
/* 417 */
/***/ function(module, exports) {

	"use strict";
	var __assign=undefined&&undefined.__assign||Object.assign||function(t){
	for(var s,i=1,n=arguments.length;i<n;i++){
	s=arguments[i];
	for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p))
	t[p]=s[p];}
	}
	return t;
	};
	function getMutationDefinition(doc){
	checkDocument(doc);
	var mutationDef=null;
	doc.definitions.forEach(function(definition){
	if(definition.kind==='OperationDefinition'&&
	definition.operation==='mutation'){
	mutationDef=definition;
	}
	});
	if(!mutationDef){
	throw new Error('Must contain a mutation definition.');
	}
	return mutationDef;
	}
	exports.getMutationDefinition=getMutationDefinition;
	function checkDocument(doc){
	if(doc.kind!=='Document'){
	throw new Error("Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
	}
	var numOpDefinitions=doc.definitions.filter(function(definition){
	return definition.kind==='OperationDefinition';
	}).length;
	if(numOpDefinitions>1){
	throw new Error('Queries must have exactly one operation definition.');
	}
	}
	exports.checkDocument=checkDocument;
	function getOperationName(doc){
	var res='';
	doc.definitions.forEach(function(definition){
	if(definition.kind==='OperationDefinition'&&
	definition.name){
	res=definition.name.value;
	}
	});
	return res;
	}
	exports.getOperationName=getOperationName;
	function getFragmentDefinitions(doc){
	var fragmentDefinitions=doc.definitions.filter(function(definition){
	if(definition.kind==='FragmentDefinition'){
	return true;
	}else
	{
	return false;
	}
	});
	return fragmentDefinitions;
	}
	exports.getFragmentDefinitions=getFragmentDefinitions;
	function getQueryDefinition(doc){
	checkDocument(doc);
	var queryDef=null;
	doc.definitions.map(function(definition){
	if(definition.kind==='OperationDefinition'&&
	definition.operation==='query'){
	queryDef=definition;
	}
	});
	if(!queryDef){
	throw new Error('Must contain a query definition.');
	}
	return queryDef;
	}
	exports.getQueryDefinition=getQueryDefinition;
	function getFragmentDefinition(doc){
	if(doc.kind!=='Document'){
	throw new Error("Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
	}
	if(doc.definitions.length>1){
	throw new Error('Fragment must have exactly one definition.');
	}
	var fragmentDef=doc.definitions[0];
	if(fragmentDef.kind!=='FragmentDefinition'){
	throw new Error('Must be a fragment definition.');
	}
	return fragmentDef;
	}
	exports.getFragmentDefinition=getFragmentDefinition;
	function createFragmentMap(fragments){
	if(fragments===void 0){fragments=[];}
	var symTable={};
	fragments.forEach(function(fragment){
	symTable[fragment.name.value]=fragment;
	});
	return symTable;
	}
	exports.createFragmentMap=createFragmentMap;
	function addFragmentsToDocument(queryDoc,fragments){
	checkDocument(queryDoc);
	return __assign({},queryDoc,{definitions:queryDoc.definitions.concat(fragments)});
	}
	exports.addFragmentsToDocument=addFragmentsToDocument;
	function getMainDefinition(queryDoc){
	checkDocument(queryDoc);
	try{
	return getQueryDefinition(queryDoc);
	}
	catch(e){
	try{
	var fragments=getFragmentDefinitions(queryDoc);
	return fragments[0];
	}
	catch(e){
	throw new Error("Expected a parsed GraphQL query with a query or a fragment.");
	}
	}
	}
	exports.getMainDefinition=getMainDefinition;

/***/ },
/* 418 */
/***/ function(module, exports) {

	"use strict";
	function shouldInclude(selection,variables){
	if(!variables){
	variables={};
	}
	if(!selection.directives){
	return true;
	}
	var res=true;
	selection.directives.forEach(function(directive){
	if(directive.name.value!=='skip'&&directive.name.value!=='include'){
	return;
	}
	var directiveArguments=directive.arguments;
	var directiveName=directive.name.value;
	if(directiveArguments.length!==1){
	throw new Error("Incorrect number of arguments for the @"+directiveName+" directive.");
	}
	var ifArgument=directive.arguments[0];
	if(!ifArgument.name||ifArgument.name.value!=='if'){
	throw new Error("Invalid argument for the @"+directiveName+" directive.");
	}
	var ifValue=directive.arguments[0].value;
	var evaledValue=false;
	if(!ifValue||ifValue.kind!=='BooleanValue'){
	if(ifValue.kind!=='Variable'){
	throw new Error("Argument for the @"+directiveName+" directive must be a variable or a bool ean value.");
	}else
	{
	evaledValue=variables[ifValue.name.value];
	if(evaledValue===undefined){
	throw new Error("Invalid variable referenced in @"+directiveName+" directive.");
	}
	}
	}else
	{
	evaledValue=ifValue.value;
	}
	if(directiveName==='skip'){
	evaledValue=!evaledValue;
	}
	if(!evaledValue){
	res=false;
	}
	});
	return res;
	}
	exports.shouldInclude=shouldInclude;

/***/ },
/* 419 */
/***/ function(module, exports) {

	"use strict";
	function isScalarValue(value){
	var SCALAR_TYPES={
	StringValue:1,
	BooleanValue:1,
	EnumValue:1};
	
	return!!SCALAR_TYPES[value.kind];
	}
	function isNumberValue(value){
	var NUMBER_TYPES={
	IntValue:1,
	FloatValue:1};
	
	return NUMBER_TYPES[value.kind];
	}
	function isVariable(value){
	return value.kind==='Variable';
	}
	function isObject(value){
	return value.kind==='ObjectValue';
	}
	function isList(value){
	return value.kind==='ListValue';
	}
	function valueToObjectRepresentation(argObj,name,value,variables){
	if(isNumberValue(value)){
	argObj[name.value]=Number(value.value);
	}else
	if(isScalarValue(value)){
	argObj[name.value]=value.value;
	}else
	if(isObject(value)){
	var nestedArgObj_1={};
	value.fields.map(function(obj){return valueToObjectRepresentation(nestedArgObj_1,obj.name,obj.value,variables);});
	argObj[name.value]=nestedArgObj_1;
	}else
	if(isVariable(value)){
	if(!variables||!(value.name.value in variables)){
	throw new Error("The inline argument \""+value.name.value+"\" is expected as a variable but was not provided.");
	}
	var variableValue=variables[value.name.value];
	argObj[name.value]=variableValue;
	}else
	if(isList(value)){
	argObj[name.value]=value.values.map(function(listValue){
	var nestedArgArrayObj={};
	valueToObjectRepresentation(nestedArgArrayObj,name,listValue,variables);
	return nestedArgArrayObj[name.value];
	});
	}else
	{
	throw new Error("The inline argument \""+name.value+"\" of kind \""+value.kind+"\" is not supported. Use variables instead of inline arguments to overcome this limitation.");
	}
	}
	function argumentsObjectFromField(field,variables){
	if(field.arguments&&field.arguments.length){
	var argObj_1={};
	field.arguments.forEach(function(_a){
	var name=_a.name,value=_a.value;
	return valueToObjectRepresentation(argObj_1,name,value,variables);
	});
	return argObj_1;
	}
	return null;
	}
	exports.argumentsObjectFromField=argumentsObjectFromField;
	function resultKeyNameFromField(field){
	return field.alias?
	field.alias.value:
	field.name.value;
	}
	exports.resultKeyNameFromField=resultKeyNameFromField;
	function isField(selection){
	return selection.kind==='Field';
	}
	exports.isField=isField;
	function isInlineFragment(selection){
	return selection.kind==='InlineFragment';
	}
	exports.isInlineFragment=isInlineFragment;
	function graphQLResultHasError(result){
	return result.errors&&result.errors.length;
	}
	exports.graphQLResultHasError=graphQLResultHasError;

/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var index_1=__webpack_require__(416);
	function filter(doc,data){
	var resolver=function resolver(fieldName,root,args,context,info){
	return root[info.resultKey];
	};
	return index_1.default(resolver,doc,data);
	}
	exports.filter=filter;
	function check(doc,data){
	var resolver=function resolver(fieldName,root,args,context,info){
	if(!{}.hasOwnProperty.call(root,info.resultKey)){
	throw new Error(info.resultKey+" missing on "+root);
	}
	return root[info.resultKey];
	};
	index_1.default(resolver,doc,data,{},{},{
	fragmentMatcher:function fragmentMatcher(){return false;}});
	
	}
	exports.check=check;
	var ANONYMOUS='<<anonymous>>';
	function PropTypeError(message){
	this.message=message;
	this.stack='';
	}
	PropTypeError.prototype=Error.prototype;
	var reactPropTypeLocationNames={
	prop:'prop',
	context:'context',
	childContext:'child context'};
	
	function createChainableTypeChecker(validate){
	function checkType(isRequired,props,propName,componentName,location,propFullName){
	componentName=componentName||ANONYMOUS;
	propFullName=propFullName||propName;
	if(props[propName]==null){
	var locationName=reactPropTypeLocationNames[location];
	if(isRequired){
	if(props[propName]===null){
	return new PropTypeError("The "+locationName+" `"+propFullName+"` is marked as required "+(
	"in `"+componentName+"`, but its value is `null`."));
	}
	return new PropTypeError("The "+locationName+" `"+propFullName+"` is marked as required in "+(
	"`"+componentName+"`, but its value is `undefined`."));
	}
	return null;
	}else
	{
	return validate(props,propName,componentName,location,propFullName);
	}
	}
	var chainedCheckType=checkType.bind(null,false);
	chainedCheckType.isRequired=checkType.bind(null,true);
	return chainedCheckType;
	}
	function propType(doc){
	return createChainableTypeChecker(function(props,propName){
	var prop=props[propName];
	try{
	check(doc,prop);
	return null;
	}
	catch(e){
	return e;
	}
	});
	}
	exports.propType=propType;

/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var QueryManager_1=__webpack_require__(410);
	var ObservableQuery_1=__webpack_require__(407);
	var assign=__webpack_require__(212);
	var store_1=__webpack_require__(395);
	var QueryScheduler=function(){
	function QueryScheduler(_a){
	var queryManager=_a.queryManager;
	this.queryManager=queryManager;
	this.pollingTimers={};
	this.inFlightQueries={};
	this.registeredQueries={};
	this.intervalQueries={};
	}
	QueryScheduler.prototype.checkInFlight=function(queryId){
	var queries=this.queryManager.getApolloState().queries;
	return queries[queryId]&&queries[queryId].networkStatus!==store_1.NetworkStatus.ready;
	};
	QueryScheduler.prototype.fetchQuery=function(queryId,options,fetchType){
	var _this=this;
	return new Promise(function(resolve,reject){
	_this.queryManager.fetchQuery(queryId,options,fetchType).then(function(result){
	resolve(result);
	}).catch(function(error){
	reject(error);
	});
	});
	};
	QueryScheduler.prototype.startPollingQuery=function(options,queryId,listener){
	if(!options.pollInterval){
	throw new Error('Attempted to start a polling query without a polling interval.');
	}
	this.registeredQueries[queryId]=options;
	if(listener){
	this.queryManager.addQueryListener(queryId,listener);
	}
	this.addQueryOnInterval(queryId,options);
	return queryId;
	};
	QueryScheduler.prototype.stopPollingQuery=function(queryId){
	delete this.registeredQueries[queryId];
	};
	QueryScheduler.prototype.fetchQueriesOnInterval=function(interval){
	var _this=this;
	this.intervalQueries[interval]=this.intervalQueries[interval].filter(function(queryId){
	if(!_this.registeredQueries.hasOwnProperty(queryId)){
	return false;
	}
	if(_this.checkInFlight(queryId)){
	return true;
	}
	var queryOptions=_this.registeredQueries[queryId];
	var pollingOptions=assign({},queryOptions);
	pollingOptions.forceFetch=true;
	_this.fetchQuery(queryId,pollingOptions,QueryManager_1.FetchType.poll);
	return true;
	});
	if(this.intervalQueries[interval].length===0){
	clearInterval(this.pollingTimers[interval]);
	delete this.intervalQueries[interval];
	}
	};
	QueryScheduler.prototype.addQueryOnInterval=function(queryId,queryOptions){
	var _this=this;
	var interval=queryOptions.pollInterval;
	if(this.intervalQueries.hasOwnProperty(interval.toString())&&this.intervalQueries[interval].length>0){
	this.intervalQueries[interval].push(queryId);
	}else
	{
	this.intervalQueries[interval]=[queryId];
	this.pollingTimers[interval]=setInterval(function(){
	_this.fetchQueriesOnInterval(interval);
	},interval);
	}
	};
	QueryScheduler.prototype.registerPollingQuery=function(queryOptions){
	if(!queryOptions.pollInterval){
	throw new Error('Attempted to register a non-polling query with the scheduler.');
	}
	return new ObservableQuery_1.ObservableQuery({
	scheduler:this,
	options:queryOptions});
	
	};
	return QueryScheduler;
	}();
	exports.QueryScheduler=QueryScheduler;

/***/ },
/* 422 */
/***/ function(module, exports) {

	"use strict";
	function tryFunctionOrLogError(f){
	try{
	return f();
	}
	catch(e){
	if(console.error){
	console.error(e);
	}
	}
	}
	exports.tryFunctionOrLogError=tryFunctionOrLogError;

/***/ },
/* 423 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	var networkInterface_1=__webpack_require__(209);
	var isUndefined=__webpack_require__(339);
	var assign=__webpack_require__(212);
	var isString=__webpack_require__(210);
	var store_1=__webpack_require__(334);
	var QueryManager_1=__webpack_require__(410);
	var storeUtils_1=__webpack_require__(357);
	var fragments_1=__webpack_require__(424);
	var getFromAST_1=__webpack_require__(340);
	var DEFAULT_REDUX_ROOT_KEY='apollo';
	function defaultReduxRootSelector(state){
	return state[DEFAULT_REDUX_ROOT_KEY];
	}
	var haveWarnedQuery=false;
	var haveWarnedWatchQuery=false;
	var haveWarnedMutation=false;
	var haveWarnedSubscription=false;
	var ApolloClient=function(){
	function ApolloClient(_a){
	var _this=this;
	var _b=_a===void 0?{}:_a,networkInterface=_b.networkInterface,reduxRootKey=_b.reduxRootKey,reduxRootSelector=_b.reduxRootSelector,initialState=_b.initialState,dataIdFromObject=_b.dataIdFromObject,resultTransformer=_b.resultTransformer,resultComparator=_b.resultComparator,_c=_b.ssrMode,ssrMode=_c===void 0?false:_c,_d=_b.ssrForceFetchDelay,ssrForceFetchDelay=_d===void 0?0:_d,_e=_b.mutationBehaviorReducers,mutationBehaviorReducers=_e===void 0?{}:_e,_f=_b.addTypename,addTypename=_f===void 0?true:_f,queryTransformer=_b.queryTransformer,customResolvers=_b.customResolvers,connectToDevTools=_b.connectToDevTools;
	this.middleware=function(){
	return function(store){
	_this.setStore(store);
	return function(next){return function(action){
	var returnValue=next(action);
	_this.queryManager.broadcastNewStore(store.getState());
	if(_this.devToolsHookCb){
	_this.devToolsHookCb({
	action:action,
	state:_this.queryManager.getApolloState(),
	dataWithOptimisticResults:_this.queryManager.getDataWithOptimisticResults()});
	
	}
	return returnValue;
	};};
	};
	};
	if(reduxRootKey&&reduxRootSelector){
	throw new Error('Both "reduxRootKey" and "reduxRootSelector" are configured, but only one of two is allowed.');
	}
	if(reduxRootKey){
	console.warn('"reduxRootKey" option is deprecated and might be removed in the upcoming versions, '+
	'please use the "reduxRootSelector" instead.');
	this.reduxRootKey=reduxRootKey;
	}
	if(queryTransformer){
	throw new Error('queryTransformer option no longer supported in Apollo Client 0.5. '+
	'Instead, there is a new "addTypename" option, which is on by default.');
	}
	if(!reduxRootSelector&&reduxRootKey){
	this.reduxRootSelector=function(state){return state[reduxRootKey];};
	}else
	if(isString(reduxRootSelector)){
	this.reduxRootKey=reduxRootSelector;
	this.reduxRootSelector=function(state){return state[reduxRootSelector];};
	}else
	if(typeof reduxRootSelector==='function'){
	this.reduxRootSelector=reduxRootSelector;
	}else
	{
	this.reduxRootSelector=null;
	}
	this.initialState=initialState?initialState:{};
	this.networkInterface=networkInterface?networkInterface:
	networkInterface_1.createNetworkInterface({uri:'/graphql'});
	this.addTypename=addTypename;
	this.resultTransformer=resultTransformer;
	this.resultComparator=resultComparator;
	this.shouldForceFetch=!(ssrMode||ssrForceFetchDelay>0);
	this.dataId=dataIdFromObject;
	this.fieldWithArgs=storeUtils_1.storeKeyNameFromFieldNameAndArgs;
	if(ssrForceFetchDelay){
	setTimeout(function(){return _this.shouldForceFetch=true;},ssrForceFetchDelay);
	}
	this.reducerConfig={
	dataIdFromObject:dataIdFromObject,
	mutationBehaviorReducers:mutationBehaviorReducers,
	customResolvers:customResolvers};
	
	this.watchQuery=this.watchQuery.bind(this);
	this.query=this.query.bind(this);
	this.mutate=this.mutate.bind(this);
	this.setStore=this.setStore.bind(this);
	this.resetStore=this.resetStore.bind(this);
	var defaultConnectToDevTools=typeof process==='undefined'||process.env&&process.env.NODE_ENV!=='production'&&
	typeof window!=='undefined'&&!window.__APOLLO_CLIENT__;
	if(typeof connectToDevTools==='undefined'){
	connectToDevTools=defaultConnectToDevTools;
	}
	if(connectToDevTools){
	window.__APOLLO_CLIENT__=this;
	}
	}
	ApolloClient.prototype.watchQuery=function(options){
	this.initStore();
	if(!this.shouldForceFetch&&options.forceFetch){
	options=assign({},options,{
	forceFetch:false});
	
	}
	if(options.fragments&&!haveWarnedWatchQuery&&process.env.NODE_ENV!=='production'){
	console.warn('"fragments" option is deprecated and will be removed in the upcoming versions, '+
	'please refer to the documentation for how to define fragments: '+
	'http://dev.apollodata.com/react/fragments.html.');
	if(process.env.NODE_ENV!=='test'){
	haveWarnedWatchQuery=true;
	}
	}
	fragments_1.createFragment(options.query,undefined,true);
	var fullDocument=getFromAST_1.addFragmentsToDocument(options.query,options.fragments);
	var realOptions=assign({},options,{
	query:fullDocument});
	
	delete realOptions.fragments;
	return this.queryManager.watchQuery(realOptions);
	};
	;
	ApolloClient.prototype.query=function(options){
	this.initStore();
	if(!this.shouldForceFetch&&options.forceFetch){
	options=assign({},options,{
	forceFetch:false});
	
	}
	if(options.fragments&&!haveWarnedQuery&&process.env.NODE_ENV!=='production'){
	console.warn('"fragments" option is deprecated and will be removed in the upcoming versions, '+
	'please refer to the documentation for how to define fragments: '+
	'http://dev.apollodata.com/react/fragments.html.');
	if(process.env.NODE_ENV!=='test'){
	haveWarnedQuery=true;
	}
	}
	fragments_1.createFragment(options.query,undefined,true);
	var fullDocument=getFromAST_1.addFragmentsToDocument(options.query,options.fragments);
	var realOptions=assign({},options,{
	query:fullDocument});
	
	delete realOptions.fragments;
	return this.queryManager.query(realOptions);
	};
	;
	ApolloClient.prototype.mutate=function(options){
	this.initStore();
	if(options.fragments&&!haveWarnedMutation&&process.env.NODE_ENV!=='production'){
	console.warn('"fragments" option is deprecated and will be removed in the upcoming versions, '+
	'please refer to the documentation for how to define fragments: '+
	'http://dev.apollodata.com/react/fragments.html.');
	if(process.env.NODE_ENV!=='test'){
	haveWarnedMutation=true;
	}
	}
	var fullDocument=getFromAST_1.addFragmentsToDocument(options.mutation,options.fragments);
	var realOptions=assign({},options,{
	mutation:fullDocument});
	
	delete realOptions.fragments;
	return this.queryManager.mutate(realOptions);
	};
	;
	ApolloClient.prototype.subscribe=function(options){
	this.initStore();
	if(options.fragments&&!haveWarnedSubscription&&process.env.NODE_ENV!=='production'){
	console.warn('"fragments" option is deprecated and will be removed in the upcoming versions, '+
	'please refer to the documentation for how to define fragments: '+
	'http://dev.apollodata.com/react/fragments.html.');
	if(process.env.NODE_ENV!=='test'){
	haveWarnedSubscription=true;
	}
	}
	var fullDocument=getFromAST_1.addFragmentsToDocument(options.query,options.fragments);
	var realOptions=assign({},options,{
	document:fullDocument});
	
	delete realOptions.fragments;
	delete realOptions.query;
	return this.queryManager.startGraphQLSubscription(realOptions);
	};
	ApolloClient.prototype.reducer=function(){
	return store_1.createApolloReducer(this.reducerConfig);
	};
	ApolloClient.prototype.__actionHookForDevTools=function(cb){
	this.devToolsHookCb=cb;
	};
	ApolloClient.prototype.initStore=function(){
	var _this=this;
	if(this.store){
	return;
	}
	if(this.reduxRootSelector){
	throw new Error('Cannot initialize the store because "reduxRootSelector" or "reduxRootKey" is provided. '+
	'They should only be used when the store is created outside of the client. '+
	'This may lead to unexpected results when querying the store internally. '+
	"Please remove that option from ApolloClient constructor.");
	}
	this.setStore(store_1.createApolloStore({
	reduxRootKey:DEFAULT_REDUX_ROOT_KEY,
	initialState:this.initialState,
	config:this.reducerConfig,
	logger:function logger(store){return function(next){return function(action){
	var result=next(action);
	if(_this.devToolsHookCb){
	_this.devToolsHookCb({
	action:action,
	state:_this.queryManager.getApolloState(),
	dataWithOptimisticResults:_this.queryManager.getDataWithOptimisticResults()});
	
	}
	return result;
	};};}}));
	
	this.reduxRootKey=DEFAULT_REDUX_ROOT_KEY;
	};
	;
	ApolloClient.prototype.resetStore=function(){
	this.queryManager.resetStore();
	};
	;
	ApolloClient.prototype.getInitialState=function(){
	return this.queryManager.getInitialState();
	};
	ApolloClient.prototype.setStore=function(store){
	var reduxRootSelector;
	if(this.reduxRootSelector){
	reduxRootSelector=this.reduxRootSelector;
	}else
	{
	reduxRootSelector=defaultReduxRootSelector;
	this.reduxRootKey=DEFAULT_REDUX_ROOT_KEY;
	}
	if(isUndefined(reduxRootSelector(store.getState()))){
	throw new Error('Existing store does not use apolloReducer. Please make sure the store '+
	'is properly configured and "reduxRootSelector" is correctly specified.');
	}
	this.store=store;
	this.queryManager=new QueryManager_1.QueryManager({
	networkInterface:this.networkInterface,
	reduxRootSelector:reduxRootSelector,
	store:store,
	addTypename:this.addTypename,
	resultTransformer:this.resultTransformer,
	resultComparator:this.resultComparator,
	reducerConfig:this.reducerConfig});
	
	};
	;
	return ApolloClient;
	}();
	Object.defineProperty(exports,"__esModule",{value:true});
	exports.default=ApolloClient;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	var flatten=__webpack_require__(404);
	var getFromAST_1=__webpack_require__(340);
	exports.fragmentDefinitionsMap={};
	var printFragmentWarnings=true;
	var haveWarned=false;
	function createFragment(doc,fragments,internalUse){
	if(fragments===void 0){fragments=[];}
	if(internalUse===void 0){internalUse=false;}
	if(!internalUse){
	if(!haveWarned){
	if(process.env.NODE_ENV!=='production'){
	console.warn('"createFragment" is deprecated and will be removed in version 0.6, '+
	'please refer to the documentation for how to define fragments: '+
	'http://dev.apollodata.com/react/fragments.html.');
	}
	if(process.env.NODE_ENV!=='test'){
	haveWarned=true;
	}
	}
	}
	fragments=flatten(fragments);
	var fragmentDefinitions=getFromAST_1.getFragmentDefinitions(doc);
	fragmentDefinitions.forEach(function(fragmentDefinition){
	var fragmentName=fragmentDefinition.name.value;
	if(exports.fragmentDefinitionsMap.hasOwnProperty(fragmentName)&&
	exports.fragmentDefinitionsMap[fragmentName].indexOf(fragmentDefinition)===-1){
	if(printFragmentWarnings){
	console.warn("Warning: fragment with name "+fragmentDefinition.name.value+" already exists.\nApollo Client enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://docs.apollostack.com/");
	}
	exports.fragmentDefinitionsMap[fragmentName].push(fragmentDefinition);
	}else
	if(!exports.fragmentDefinitionsMap.hasOwnProperty(fragmentName)){
	exports.fragmentDefinitionsMap[fragmentName]=[fragmentDefinition];
	}
	});
	return fragments.concat(fragmentDefinitions);
	}
	exports.createFragment=createFragment;
	function disableFragmentWarnings(){
	printFragmentWarnings=false;
	}
	exports.disableFragmentWarnings=disableFragmentWarnings;
	function enableFragmentWarnings(){
	printFragmentWarnings=true;
	}
	exports.enableFragmentWarnings=enableFragmentWarnings;
	function clearFragmentDefinitions(){
	exports.fragmentDefinitionsMap={};
	}
	exports.clearFragmentDefinitions=clearFragmentDefinitions;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ApolloProvider_1=__webpack_require__(426);
	exports.ApolloProvider=ApolloProvider_1.default;
	var graphql_1=__webpack_require__(427);
	exports.graphql=graphql_1.default;
	exports.withApollo=graphql_1.withApollo;
	var redux_1=__webpack_require__(185);
	exports.compose=redux_1.compose;

/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends=this&&this.__extends||function(d,b){
	for(var p in b){if(b.hasOwnProperty(p))d[p]=b[p];}
	function __(){this.constructor=d;}
	d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());
	};
	var React=__webpack_require__(1);
	var react_1=__webpack_require__(1);
	var invariant=__webpack_require__(207);
	var ApolloProvider=function(_super){
	__extends(ApolloProvider,_super);
	function ApolloProvider(props,context){
	var _this=_super.call(this,props,context)||this;
	invariant(props.client,'ApolloClient was not passed a client instance. Make '+
	'sure you pass in your client via the "client" prop.');
	_this.client=props.client;
	if(props.store){
	_this.store=props.store;
	if(props.immutable)
	props.client.initStore();
	return _this;
	}
	props.client.initStore();
	_this.store=props.client.store;
	return _this;
	}
	ApolloProvider.prototype.getChildContext=function(){
	return{
	store:this.store,
	client:this.client};
	
	};
	ApolloProvider.prototype.render=function(){
	return React.Children.only(this.props.children);
	};
	return ApolloProvider;
	}(react_1.Component);
	Object.defineProperty(exports,"__esModule",{value:true});
	exports.default=ApolloProvider;
	ApolloProvider.propTypes={
	store:react_1.PropTypes.shape({
	subscribe:react_1.PropTypes.func.isRequired,
	dispatch:react_1.PropTypes.func.isRequired,
	getState:react_1.PropTypes.func.isRequired}),
	
	client:react_1.PropTypes.object.isRequired,
	immutable:react_1.PropTypes.bool,
	children:react_1.PropTypes.element.isRequired};
	
	ApolloProvider.childContextTypes={
	store:react_1.PropTypes.object.isRequired,
	client:react_1.PropTypes.object.isRequired};
	
	;

/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends=this&&this.__extends||function(d,b){
	for(var p in b){if(b.hasOwnProperty(p))d[p]=b[p];}
	function __(){this.constructor=d;}
	d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());
	};
	var react_1=__webpack_require__(1);
	var pick=__webpack_require__(428);
	var flatten=__webpack_require__(429);
	var shallowEqual_1=__webpack_require__(430);
	var invariant=__webpack_require__(207);
	var assign=__webpack_require__(4);
	var hoistNonReactStatics=__webpack_require__(206);
	var apollo_client_1=__webpack_require__(208);
	var parser_1=__webpack_require__(431);
	var defaultMapPropsToOptions=function defaultMapPropsToOptions(props){return{};};
	var defaultMapResultToProps=function defaultMapResultToProps(props){return props;};
	var defaultMapPropsToSkip=function defaultMapPropsToSkip(props){return false;};
	function observableQueryFields(observable){
	var fields=pick(observable,'variables','refetch','fetchMore','updateQuery','startPolling','stopPolling','subscribeToMore');
	Object.keys(fields).forEach(function(key){
	if(typeof fields[key]==='function'){
	fields[key]=fields[key].bind(observable);
	}
	});
	return fields;
	}
	function getDisplayName(WrappedComponent){
	return WrappedComponent.displayName||WrappedComponent.name||'Component';
	}
	var nextVersion=0;
	function withApollo(WrappedComponent){
	var withDisplayName="withApollo("+getDisplayName(WrappedComponent)+")";
	var WithApollo=function(_super){
	__extends(WithApollo,_super);
	function WithApollo(props,context){
	var _this=_super.call(this,props,context)||this;
	_this.client=context.client;
	invariant(!!_this.client,"Could not find \"client\" in the context of "+(
	"\""+withDisplayName+"\". ")+
	"Wrap the root component in an <ApolloProvider>");
	return _this;
	}
	WithApollo.prototype.render=function(){
	var props=assign({},this.props);
	props.client=this.client;
	return react_1.createElement(WrappedComponent,props);
	};
	return WithApollo;
	}(react_1.Component);
	WithApollo.displayName=withDisplayName;
	WithApollo.WrappedComponent=WrappedComponent;
	WithApollo.contextTypes={client:react_1.PropTypes.object.isRequired};
	return hoistNonReactStatics(WithApollo,WrappedComponent,{});
	}
	exports.withApollo=withApollo;
	;
	function graphql(document,operationOptions){
	if(operationOptions===void 0){operationOptions={};}
	var _a=operationOptions.options,options=_a===void 0?defaultMapPropsToOptions:_a,_b=operationOptions.skip,skip=_b===void 0?defaultMapPropsToSkip:_b;
	var mapPropsToOptions=options;
	if(typeof mapPropsToOptions!=='function')
	mapPropsToOptions=function mapPropsToOptions(){return options;};
	var mapPropsToSkip=skip;
	if(typeof mapPropsToSkip!=='function')
	mapPropsToSkip=function mapPropsToSkip(){return skip;};
	var mapResultToProps=operationOptions.props;
	var operation=parser_1.parser(document);
	var version=nextVersion++;
	return function wrapWithApolloComponent(WrappedComponent){
	var graphQLDisplayName="Apollo("+getDisplayName(WrappedComponent)+")";
	var GraphQL=function(_super){
	__extends(GraphQL,_super);
	function GraphQL(props,context){
	var _this=_super.call(this,props,context)||this;
	_this.previousData={};
	_this.version=version;
	_this.client=context.client;
	invariant(!!_this.client,"Could not find \"client\" in the context of "+(
	"\""+graphQLDisplayName+"\". ")+
	"Wrap the root component in an <ApolloProvider>");
	_this.store=_this.client.store;
	_this.type=operation.type;
	if(_this.shouldSkip(props))
	return _this;
	_this.setInitialProps();
	return _this;
	}
	GraphQL.prototype.componentDidMount=function(){
	this.hasMounted=true;
	if(this.type===parser_1.DocumentType.Mutation)
	return;
	if(!this.shouldSkip(this.props)){
	this.subscribeToQuery(this.props);
	}
	};
	GraphQL.prototype.componentWillReceiveProps=function(nextProps){
	if(shallowEqual_1.default(this.props,nextProps))
	return;
	this.shouldRerender=true;
	if(this.type===parser_1.DocumentType.Mutation){
	return;
	}
	;
	if(this.shouldSkip(nextProps)){
	if(!this.shouldSkip(this.props)){
	this.unsubscribeFromQuery();
	}
	return;
	}
	this.subscribeToQuery(nextProps);
	};
	GraphQL.prototype.shouldComponentUpdate=function(nextProps,nextState,nextContext){
	return!!nextContext||this.shouldRerender;
	};
	GraphQL.prototype.componentWillUnmount=function(){
	if(this.type===parser_1.DocumentType.Query)
	this.unsubscribeFromQuery();
	if(this.type===parser_1.DocumentType.Subscription)
	this.unsubscribeFromQuery();
	this.hasMounted=false;
	};
	GraphQL.prototype.calculateOptions=function(props,newOpts){
	if(props===void 0){props=this.props;}
	var opts=mapPropsToOptions(props);
	if(newOpts&&newOpts.variables){
	newOpts.variables=assign({},opts.variables,newOpts.variables);
	}
	if(newOpts)
	opts=assign({},opts,newOpts);
	if(opts.fragments){
	opts.fragments=flatten(opts.fragments);
	}
	if(opts.variables||!operation.variables.length)
	return opts;
	var variables={};
	for(var _i=0,_a=operation.variables;_i<_a.length;_i++){
	var _b=_a[_i],variable=_b.variable,type=_b.type;
	if(!variable.name||!variable.name.value)
	continue;
	if(typeof props[variable.name.value]!=='undefined'){
	variables[variable.name.value]=props[variable.name.value];
	continue;
	}
	if(type.kind!=='NonNullType'){
	variables[variable.name.value]=null;
	continue;
	}
	invariant(typeof props[variable.name.value]!=='undefined',"The operation '"+operation.name+"' wrapping '"+getDisplayName(WrappedComponent)+"' "+(
	"is expecting a variable: '"+variable.name.value+"' but it was not found in the props ")+(
	"passed to '"+graphQLDisplayName+"'"));
	}
	opts.variables=variables;
	return opts;
	};
	;
	GraphQL.prototype.calculateResultProps=function(result){
	var name=this.type===parser_1.DocumentType.Mutation?'mutate':'data';
	if(operationOptions.name)
	name=operationOptions.name;
	var newResult=(_a={},_a[name]=result,_a.ownProps=this.props,_a);
	if(mapResultToProps)
	return mapResultToProps(newResult);
	return _b={},_b[name]=defaultMapResultToProps(result),_b;
	var _a,_b;
	};
	GraphQL.prototype.setInitialProps=function(){
	if(this.type===parser_1.DocumentType.Mutation){
	return;
	}
	var opts=this.calculateOptions(this.props);
	this.createQuery(opts);
	};
	GraphQL.prototype.createQuery=function(opts){
	if(this.type===parser_1.DocumentType.Subscription){
	this.queryObservable=this.client.subscribe(assign({
	query:document},
	opts));
	}else
	{
	this.queryObservable=this.client.watchQuery(assign({
	query:document,
	metadata:{
	reactComponent:{
	displayName:graphQLDisplayName}}},
	
	
	opts));
	}
	};
	GraphQL.prototype.fetchData=function(){
	if(this.shouldSkip())
	return false;
	if(operation.type===parser_1.DocumentType.Mutation||operation.type===parser_1.DocumentType.Subscription)
	return false;
	var opts=this.calculateOptions();
	if(opts.ssr===false)
	return false;
	if(opts.forceFetch)
	delete opts.forceFetch;
	var observable=this.client.watchQuery(assign({query:document},opts));
	var result=observable.currentResult();
	if(result.loading){
	return observable.result();
	}else
	{
	return false;
	}
	};
	GraphQL.prototype.subscribeToQuery=function(props){
	var _this=this;
	var opts=this.calculateOptions(props);
	if(this.querySubscription){
	if(this.queryObservable._setOptionsNoResult){
	this.queryObservable._setOptionsNoResult(opts);
	}else
	{
	this.queryObservable.setOptions(opts);
	}
	return;
	}
	if(!this.queryObservable){
	this.createQuery(opts);
	}
	var next=function next(results){
	if(_this.type===parser_1.DocumentType.Subscription){
	_this.lastSubscriptionData=results;
	results={data:results};
	}
	var clashingKeys=Object.keys(observableQueryFields(results.data));
	invariant(clashingKeys.length===0,"the result of the '"+graphQLDisplayName+"' operation contains keys that "+
	"conflict with the return object."+
	clashingKeys.map(function(k){return"'"+k+"'";}).join(', ')+" not allowed.");
	_this.forceRenderChildren();
	};
	var handleError=function handleError(error){
	if(error instanceof apollo_client_1.ApolloError)
	return next({error:error});
	throw error;
	};
	this.querySubscription=this.queryObservable.subscribe({next:next,error:handleError});
	};
	GraphQL.prototype.unsubscribeFromQuery=function(){
	if(this.querySubscription){
	this.querySubscription.unsubscribe();
	delete this.querySubscription;
	}
	};
	GraphQL.prototype.shouldSkip=function(props){
	if(props===void 0){props=this.props;}
	return mapPropsToSkip(props)||
	mapPropsToOptions(props).skip;
	};
	GraphQL.prototype.forceRenderChildren=function(){
	this.shouldRerender=true;
	if(this.hasMounted)
	this.setState({});
	};
	GraphQL.prototype.getWrappedInstance=function(){
	invariant(operationOptions.withRef,"To access the wrapped instance, you need to specify "+
	"{ withRef: true } in the options");
	return this.refs.wrappedInstance;
	};
	GraphQL.prototype.dataForChild=function(){
	var _this=this;
	if(this.type===parser_1.DocumentType.Mutation){
	return function(mutationOpts){
	var opts=_this.calculateOptions(_this.props,mutationOpts);
	if(typeof opts.variables==='undefined')
	delete opts.variables;
	opts.mutation=document;
	return _this.client.mutate(opts);
	};
	}
	var opts=this.calculateOptions(this.props);
	var data={};
	assign(data,observableQueryFields(this.queryObservable));
	if(this.type===parser_1.DocumentType.Subscription){
	assign(data,{
	loading:!this.lastSubscriptionData,
	variables:opts.variables},
	this.lastSubscriptionData);
	}else
	{
	var currentResult=this.queryObservable.currentResult();
	var loading=currentResult.loading,error=currentResult.error,networkStatus=currentResult.networkStatus;
	assign(data,{loading:loading,error:error,networkStatus:networkStatus});
	if(loading){
	assign(data,this.previousData,currentResult.data);
	}else
	{
	assign(data,currentResult.data);
	this.previousData=currentResult.data;
	}
	}
	return data;
	};
	GraphQL.prototype.render=function(){
	if(this.shouldSkip()){
	return react_1.createElement(WrappedComponent,this.props);
	}
	var _a=this,shouldRerender=_a.shouldRerender,renderedElement=_a.renderedElement,props=_a.props;
	this.shouldRerender=false;
	var data=this.dataForChild();
	var clientProps=this.calculateResultProps(data);
	var mergedPropsAndData=assign({},props,clientProps);
	if(!shouldRerender&&renderedElement){
	return renderedElement;
	}
	if(operationOptions.withRef)
	mergedPropsAndData.ref='wrappedInstance';
	this.renderedElement=react_1.createElement(WrappedComponent,mergedPropsAndData);
	return this.renderedElement;
	};
	return GraphQL;
	}(react_1.Component);
	GraphQL.displayName=graphQLDisplayName;
	GraphQL.WrappedComponent=WrappedComponent;
	GraphQL.contextTypes={
	store:react_1.PropTypes.object.isRequired,
	client:react_1.PropTypes.object.isRequired};
	
	return hoistNonReactStatics(GraphQL,WrappedComponent,{});
	};
	}
	Object.defineProperty(exports,"__esModule",{value:true});
	exports.default=graphql;
	;

/***/ },
/* 428 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	
	
	
	
	
	
	
	
	var INFINITY=1/0,
	MAX_SAFE_INTEGER=9007199254740991;
	
	
	var argsTag='[object Arguments]',
	funcTag='[object Function]',
	genTag='[object GeneratorFunction]',
	symbolTag='[object Symbol]';
	
	
	var freeGlobal=(typeof global==='undefined'?'undefined':_typeof(global))=='object'&&global&&global.Object===Object&&global;
	
	
	var freeSelf=(typeof self==='undefined'?'undefined':_typeof(self))=='object'&&self&&self.Object===Object&&self;
	
	
	var root=freeGlobal||freeSelf||Function('return this')();
	
	
	
	
	
	
	
	
	
	
	
	function apply(func,thisArg,args){
	switch(args.length){
	case 0:return func.call(thisArg);
	case 1:return func.call(thisArg,args[0]);
	case 2:return func.call(thisArg,args[0],args[1]);
	case 3:return func.call(thisArg,args[0],args[1],args[2]);}
	
	return func.apply(thisArg,args);
	}
	
	
	
	
	
	
	
	
	
	
	function arrayMap(array,iteratee){
	var index=-1,
	length=array?array.length:0,
	result=Array(length);
	
	while(++index<length){
	result[index]=iteratee(array[index],index,array);
	}
	return result;
	}
	
	
	
	
	
	
	
	
	
	function arrayPush(array,values){
	var index=-1,
	length=values.length,
	offset=array.length;
	
	while(++index<length){
	array[offset+index]=values[index];
	}
	return array;
	}
	
	
	var objectProto=Object.prototype;
	
	
	var hasOwnProperty=objectProto.hasOwnProperty;
	
	
	
	
	
	
	var objectToString=objectProto.toString;
	
	
	var _Symbol=root.Symbol,
	propertyIsEnumerable=objectProto.propertyIsEnumerable,
	spreadableSymbol=_Symbol?_Symbol.isConcatSpreadable:undefined;
	
	
	var nativeMax=Math.max;
	
	
	
	
	
	
	
	
	
	
	
	
	function baseFlatten(array,depth,predicate,isStrict,result){
	var index=-1,
	length=array.length;
	
	predicate||(predicate=isFlattenable);
	result||(result=[]);
	
	while(++index<length){
	var value=array[index];
	if(depth>0&&predicate(value)){
	if(depth>1){
	
	baseFlatten(value,depth-1,predicate,isStrict,result);
	}else{
	arrayPush(result,value);
	}
	}else if(!isStrict){
	result[result.length]=value;
	}
	}
	return result;
	}
	
	
	
	
	
	
	
	
	
	
	function basePick(object,props){
	object=Object(object);
	return basePickBy(object,props,function(value,key){
	return key in object;
	});
	}
	
	
	
	
	
	
	
	
	
	
	function basePickBy(object,props,predicate){
	var index=-1,
	length=props.length,
	result={};
	
	while(++index<length){
	var key=props[index],
	value=object[key];
	
	if(predicate(value,key)){
	result[key]=value;
	}
	}
	return result;
	}
	
	
	
	
	
	
	
	
	
	function baseRest(func,start){
	start=nativeMax(start===undefined?func.length-1:start,0);
	return function(){
	var args=arguments,
	index=-1,
	length=nativeMax(args.length-start,0),
	array=Array(length);
	
	while(++index<length){
	array[index]=args[start+index];
	}
	index=-1;
	var otherArgs=Array(start+1);
	while(++index<start){
	otherArgs[index]=args[index];
	}
	otherArgs[start]=array;
	return apply(func,this,otherArgs);
	};
	}
	
	
	
	
	
	
	
	
	function isFlattenable(value){
	return isArray(value)||isArguments(value)||
	!!(spreadableSymbol&&value&&value[spreadableSymbol]);
	}
	
	
	
	
	
	
	
	
	function toKey(value){
	if(typeof value=='string'||isSymbol(value)){
	return value;
	}
	var result=value+'';
	return result=='0'&&1/value==-INFINITY?'-0':result;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isArguments(value){
	
	return isArrayLikeObject(value)&&hasOwnProperty.call(value,'callee')&&(
	!propertyIsEnumerable.call(value,'callee')||objectToString.call(value)==argsTag);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var isArray=Array.isArray;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isArrayLike(value){
	return value!=null&&isLength(value.length)&&!isFunction(value);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isArrayLikeObject(value){
	return isObjectLike(value)&&isArrayLike(value);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isFunction(value){
	
	
	var tag=isObject(value)?objectToString.call(value):'';
	return tag==funcTag||tag==genTag;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isLength(value){
	return typeof value=='number'&&
	value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isObject(value){
	var type=typeof value==='undefined'?'undefined':_typeof(value);
	return!!value&&(type=='object'||type=='function');
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isObjectLike(value){
	return!!value&&(typeof value==='undefined'?'undefined':_typeof(value))=='object';
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isSymbol(value){
	return(typeof value==='undefined'?'undefined':_typeof(value))=='symbol'||
	isObjectLike(value)&&objectToString.call(value)==symbolTag;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var pick=baseRest(function(object,props){
	return object==null?{}:basePick(object,arrayMap(baseFlatten(props,1),toKey));
	});
	
	module.exports=pick;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 429 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==='function'?Symbol.iterator:'@@iterator')==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==='function'?Symbol.prototype:'@@prototype')?"symbol":typeof obj;};
	
	
	
	
	
	
	
	
	
	var MAX_SAFE_INTEGER=9007199254740991;
	
	
	var argsTag='[object Arguments]',
	funcTag='[object Function]',
	genTag='[object GeneratorFunction]';
	
	
	var freeGlobal=(typeof global==='undefined'?'undefined':_typeof(global))=='object'&&global&&global.Object===Object&&global;
	
	
	var freeSelf=(typeof self==='undefined'?'undefined':_typeof(self))=='object'&&self&&self.Object===Object&&self;
	
	
	var root=freeGlobal||freeSelf||Function('return this')();
	
	
	
	
	
	
	
	
	
	function arrayPush(array,values){
	var index=-1,
	length=values.length,
	offset=array.length;
	
	while(++index<length){
	array[offset+index]=values[index];
	}
	return array;
	}
	
	
	var objectProto=Object.prototype;
	
	
	var hasOwnProperty=objectProto.hasOwnProperty;
	
	
	
	
	
	
	var objectToString=objectProto.toString;
	
	
	var _Symbol=root.Symbol,
	propertyIsEnumerable=objectProto.propertyIsEnumerable,
	spreadableSymbol=_Symbol?_Symbol.isConcatSpreadable:undefined;
	
	
	
	
	
	
	
	
	
	
	
	
	function baseFlatten(array,depth,predicate,isStrict,result){
	var index=-1,
	length=array.length;
	
	predicate||(predicate=isFlattenable);
	result||(result=[]);
	
	while(++index<length){
	var value=array[index];
	if(depth>0&&predicate(value)){
	if(depth>1){
	
	baseFlatten(value,depth-1,predicate,isStrict,result);
	}else{
	arrayPush(result,value);
	}
	}else if(!isStrict){
	result[result.length]=value;
	}
	}
	return result;
	}
	
	
	
	
	
	
	
	
	function isFlattenable(value){
	return isArray(value)||isArguments(value)||
	!!(spreadableSymbol&&value&&value[spreadableSymbol]);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function flatten(array){
	var length=array?array.length:0;
	return length?baseFlatten(array,1):[];
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isArguments(value){
	
	return isArrayLikeObject(value)&&hasOwnProperty.call(value,'callee')&&(
	!propertyIsEnumerable.call(value,'callee')||objectToString.call(value)==argsTag);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var isArray=Array.isArray;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isArrayLike(value){
	return value!=null&&isLength(value.length)&&!isFunction(value);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isArrayLikeObject(value){
	return isObjectLike(value)&&isArrayLike(value);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isFunction(value){
	
	
	var tag=isObject(value)?objectToString.call(value):'';
	return tag==funcTag||tag==genTag;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isLength(value){
	return typeof value=='number'&&
	value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isObject(value){
	var type=typeof value==='undefined'?'undefined':_typeof(value);
	return!!value&&(type=='object'||type=='function');
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function isObjectLike(value){
	return!!value&&(typeof value==='undefined'?'undefined':_typeof(value))=='object';
	}
	
	module.exports=flatten;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 430 */
/***/ function(module, exports) {

	"use strict";
	function shallowEqual(objA,objB){
	if(!objA||!objB)
	return true;
	if(objA===objB)
	return true;
	var keysA=Object.keys(objA);
	var keysB=Object.keys(objB);
	if(keysA.length!==keysB.length)
	return false;
	var hasOwn=Object.prototype.hasOwnProperty;
	for(var i=0;i<keysA.length;i++){
	if(!hasOwn.call(objB,keysA[i])||objA[keysA[i]]!==objB[keysA[i]]){
	return false;
	}
	}
	return true;
	}
	Object.defineProperty(exports,"__esModule",{value:true});
	exports.default=shallowEqual;

/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var invariant=__webpack_require__(207);
	(function(DocumentType){
	DocumentType[DocumentType["Query"]=0]="Query";
	DocumentType[DocumentType["Mutation"]=1]="Mutation";
	DocumentType[DocumentType["Subscription"]=2]="Subscription";
	})(exports.DocumentType||(exports.DocumentType={}));
	var DocumentType=exports.DocumentType;
	function parser(document){
	var variables,type,name;
	invariant(!!document||!!document.kind,"Argument of "+document+" passed to parser was not a valid GraphQL Document. You may need to use 'graphql-tag' or another method to convert your operation into a document");
	var fragments=document.definitions.filter(function(x){return x.kind==='FragmentDefinition';});
	var queries=document.definitions.filter(function(x){return x.kind==='OperationDefinition'&&x.operation==='query';});
	var mutations=document.definitions.filter(function(x){return x.kind==='OperationDefinition'&&x.operation==='mutation';});
	var subscriptions=document.definitions.filter(function(x){return x.kind==='OperationDefinition'&&x.operation==='subscription';});
	if(fragments.length&&(!queries.length||!mutations.length||!subscriptions.length)){
	invariant(true,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well");
	}
	if(queries.length&&mutations.length&&mutations.length){
	invariant(queries.length+mutations.length+mutations.length>1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+document+" had "+queries.length+" queries, "+subscriptions.length+" subscriptions and "+mutations.length+" muations. You can use 'compose' to join multiple operation types to a component");
	}
	type=queries.length?DocumentType.Query:DocumentType.Mutation;
	if(!queries.length&&!mutations.length)
	type=DocumentType.Subscription;
	var definitions=queries.length?queries:
	mutations.length?mutations:subscriptions;
	if(definitions.length!==1){
	invariant(definitions.length!==1,"react-apollo only supports one defintion per HOC. "+document+" had "+definitions.length+" definitions. You can use 'compose' to join multiple operation types to a component");
	}
	var definition=definitions[0];
	variables=definition.variableDefinitions||[];
	var hasName=definition.name&&definition.name.kind==='Name';
	name=hasName?definition.name.value:'data';
	return{name:name,type:type,variables:variables};
	}
	exports.parser=parser;

/***/ },
/* 432 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _redux=__webpack_require__(185);
	var _apolloClient=__webpack_require__(208);var _apolloClient2=_interopRequireDefault(_apolloClient);
	
	var _words=__webpack_require__(433);var _words2=_interopRequireDefault(_words);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var client=new _apolloClient2.default();exports.default=
	(0,_redux.combineReducers)({
	words:_words2.default,
	apollo:client.reducer()});

/***/ },
/* 433 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}var words=function words(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var action=arguments[1];
	switch(action.type){
	case'ADD_WORD':
	return[].concat(_toConsumableArray(
	state),[
	{
	id:action.id,
	word:action.word}]);
	
	
	
	default:
	return state;}
	
	};exports.default=
	
	words;

/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
	
	var _AddWord=__webpack_require__(435);var _AddWord2=_interopRequireDefault(_AddWord);
	var _WordsContainer=__webpack_require__(437);var _WordsContainer2=_interopRequireDefault(_WordsContainer);
	var _StarcraftHeroesContainer=__webpack_require__(440);var _StarcraftHeroesContainer2=_interopRequireDefault(_StarcraftHeroesContainer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=
	
	_react2.default.createClass({displayName:'App',
	render:function render(){
	return(
	_react2.default.createElement('div',{className:'app-container'},
	_react2.default.createElement(_WordsContainer2.default,null),
	_react2.default.createElement(_AddWord2.default,null),
	_react2.default.createElement('br',null),
	_react2.default.createElement('br',null),
	_react2.default.createElement(_StarcraftHeroesContainer2.default,null)));
	
	
	}});

/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
	var _reactRedux=__webpack_require__(178);
	var _actions=__webpack_require__(436);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	function submitWord(e,dispatch){
	if(e.keyCode===13){
	dispatch((0,_actions.addWord)(e.currentTarget.value));
	e.currentTarget.value='';
	}
	}
	
	var AddWord=function AddWord(_ref){var dispatch=_ref.dispatch;return(
	_react2.default.createElement('input',{
	placeholder:'Enter a word or phrase',
	onKeyUp:function onKeyUp(e){
	submitWord(e,dispatch);
	}}));};
	
	
	
	AddWord=(0,_reactRedux.connect)()(AddWord);exports.default=
	
	AddWord;

/***/ },
/* 436 */
/***/ function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var nextWordId=0;
	
	var addWord=exports.addWord=function addWord(word){
	return{
	type:'ADD_WORD',
	id:nextWordId++,
	word:word};
	
	};

/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _reactRedux=__webpack_require__(178);
	
	var _Words=__webpack_require__(438);var _Words2=_interopRequireDefault(_Words);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var mapStateToProps=function mapStateToProps(state){
	return{
	words:state.words};
	
	};exports.default=
	
	(0,_reactRedux.connect)(
	mapStateToProps)(_Words2.default);

/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);
	
	var _Word=__webpack_require__(439);var _Word2=_interopRequireDefault(_Word);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var Words=function Words(_ref){var words=_ref.words;return(
	_react2.default.createElement('div',null,
	words.map(function(word){return(
	_react2.default.createElement(_Word2.default,_extends({
	key:word.id},
	word)));})));};
	
	
	
	
	
	Words.propTypes={
	words:_react.PropTypes.arrayOf(
	_react.PropTypes.shape({
	id:_react.PropTypes.number.isRequired,
	word:_react.PropTypes.string.isRequired}).
	isRequired).
	isRequired};exports.default=
	
	
	Words;

/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	var Word=function Word(_ref){var word=_ref.word;return(
	_react2.default.createElement('div',null,word));};
	
	
	Word.propTypes={
	word:_react.PropTypes.string.isRequired};exports.default=
	
	
	Word;

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _templateObject=_taggedTemplateLiteral(['\n  query Hero {\n    hero(name:"Zeratul") {\n      id\n      name\n    }\n  }\n'],['\n  query Hero {\n    hero(name:"Zeratul") {\n      id\n      name\n    }\n  }\n']);var _reactApollo=__webpack_require__(425);
	var _graphqlTag=__webpack_require__(441);var _graphqlTag2=_interopRequireDefault(_graphqlTag);
	
	var _StarcraftHeroesList=__webpack_require__(443);var _StarcraftHeroesList2=_interopRequireDefault(_StarcraftHeroesList);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}
	
	var Query=(0,_graphqlTag2.default)(_templateObject);exports.default=
	
	
	
	
	
	
	
	
	(0,_reactApollo.graphql)(Query)(_StarcraftHeroesList2.default);

/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var parse=__webpack_require__(442).parse;
	
	
	
	function normalize(string){
	return string.replace(/[\s,]+/g,' ').trim();
	}
	
	
	var docCache={};
	
	
	var fragmentSourceMap={};
	
	function cacheKeyFromLoc(loc){
	return normalize(loc.source.body.substring(loc.start,loc.end));
	}
	
	
	function resetCaches(){
	docCache={};
	fragmentSourceMap={};
	}
	
	
	
	var printFragmentWarnings=true;
	function checkFragments(ast){
	for(var i=0;i<ast.definitions.length;i++){
	var fragmentDefinition=ast.definitions[i];
	if(fragmentDefinition.kind==='FragmentDefinition'){
	var fragmentName=fragmentDefinition.name.value;
	var sourceKey=cacheKeyFromLoc(fragmentDefinition.loc);
	
	
	if(fragmentSourceMap.hasOwnProperty(fragmentName)&&
	!fragmentSourceMap[fragmentName][sourceKey]){
	
	
	
	if(printFragmentWarnings){
	console.warn("Warning: fragment with name "+fragmentName+" already exists.\n"+
	"graphql-tag enforces all fragment names across your application to be unique; read more about\n"+
	"this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
	}
	
	fragmentSourceMap[fragmentName][sourceKey]=true;
	
	}else if(!fragmentSourceMap.hasOwnProperty(fragmentName)){
	fragmentSourceMap[fragmentName]={};
	fragmentSourceMap[fragmentName][sourceKey]=true;
	}
	}
	}
	}
	
	function disableFragmentWarnings(){
	printFragmentWarnings=false;
	}
	
	function stripLoc(doc,removeLocAtThisLevel){
	var docType=Object.prototype.toString.call(doc);
	
	if(docType==='[object Array]'){
	return doc.map(function(d){return stripLoc(d,removeLocAtThisLevel);});
	}
	
	if(docType!=='[object Object]'){
	throw new Error('Unexpected input.');
	}
	
	
	
	if(removeLocAtThisLevel&&doc.loc){
	delete doc.loc;
	}
	
	var keys=Object.keys(doc);
	var key;
	var value;
	var valueType;
	
	for(key in keys){
	if(keys.hasOwnProperty(key)){
	value=doc[keys[key]];
	valueType=Object.prototype.toString.call(value);
	
	if(valueType==='[object Object]'||valueType==='[object Array]'){
	doc[keys[key]]=stripLoc(value,true);
	}
	}
	}
	
	return doc;
	}
	
	function parseDocument(doc){
	var cacheKey=normalize(doc);
	
	if(docCache[cacheKey]){
	return docCache[cacheKey];
	}
	
	var parsed=parse(doc);
	if(!parsed||parsed.kind!=='Document'){
	throw new Error('Not a valid GraphQL document.');
	}
	
	
	
	checkFragments(parsed);
	parsed=stripLoc(parsed,false);
	docCache[cacheKey]=parsed;
	
	return parsed;
	}
	
	
	function gql(){
	var args=Array.prototype.slice.call(arguments);
	
	var literals=args[0];
	
	
	var result=literals[0];
	
	for(var i=1;i<args.length;i++){
	if(args[i]&&args[i].kind&&args[i].kind==='Document'){
	result+=args[i].loc.source.body;
	}else{
	result+=args[i];
	}
	
	result+=literals[i];
	}
	
	return parseDocument(result);
	}
	
	
	gql.default=gql;
	gql.resetCaches=resetCaches;
	gql.disableFragmentWarnings=disableFragmentWarnings;
	
	module.exports=gql;

/***/ },
/* 442 */
/***/ function(module, exports) {

	"use strict";var _typeof=typeof Symbol==="function"&&typeof(typeof Symbol==="function"?Symbol.iterator:"@@iterator")==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==(typeof Symbol==="function"?Symbol.prototype:"@@prototype")?"symbol":typeof obj;};module.exports=
	function(modules){
	
	var installedModules={};
	
	
	function __webpack_require__(moduleId){
	
	
	if(installedModules[moduleId])
	return installedModules[moduleId].exports;
	
	
	var module=installedModules[moduleId]={
	exports:{},
	id:moduleId,
	loaded:false};
	
	
	
	modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);
	
	
	module.loaded=true;
	
	
	return module.exports;
	}
	
	
	
	__webpack_require__.m=modules;
	
	
	__webpack_require__.c=installedModules;
	
	
	__webpack_require__.p="";
	
	
	return __webpack_require__(0);
	}(
	
	[
	
	function(module,exports,__webpack_require__){
	
	module.exports=__webpack_require__(1);
	
	
	},
	
	function(module,exports,__webpack_require__){
	
	'use strict';
	
	Object.defineProperty(exports,"__esModule",{
	value:true});
	
	exports.parse=parse;
	exports.parseValue=parseValue;
	exports.parseConstValue=parseConstValue;
	exports.parseType=parseType;
	exports.parseNamedType=parseNamedType;
	
	var _source=__webpack_require__(2);
	
	var _error=__webpack_require__(3);
	
	var _lexer=__webpack_require__(7);
	
	var _kinds=__webpack_require__(10);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function parse(source,options){
	var sourceObj=source instanceof _source.Source?source:new _source.Source(source);
	var parser=makeParser(sourceObj,options||{});
	return parseDocument(parser);
	}
	
	
	
	
	
	
	
	
	function parseValue(source,options){
	var sourceObj=source instanceof _source.Source?source:new _source.Source(source);
	var parser=makeParser(sourceObj,options||{});
	return parseValueLiteral(parser,false);
	}
	
	
	
	
	function parseName(parser){
	var token=expect(parser,_lexer.TokenKind.NAME);
	return{
	kind:_kinds.NAME,
	value:token.value,
	loc:loc(parser,token.start)};
	
	}
	
	
	
	
	
	
	function parseDocument(parser){
	var start=parser.token.start;
	
	var definitions=[];
	do{
	definitions.push(parseDefinition(parser));
	}while(!skip(parser,_lexer.TokenKind.EOF));
	
	return{
	kind:_kinds.DOCUMENT,
	definitions:definitions,
	loc:loc(parser,start)};
	
	}
	
	
	
	
	
	
	
	function parseDefinition(parser){
	if(peek(parser,_lexer.TokenKind.BRACE_L)){
	return parseOperationDefinition(parser);
	}
	
	if(peek(parser,_lexer.TokenKind.NAME)){
	switch(parser.token.value){
	
	case'query':
	case'mutation':
	case'subscription':
	return parseOperationDefinition(parser);
	
	case'fragment':
	return parseFragmentDefinition(parser);
	
	
	case'schema':
	case'scalar':
	case'type':
	case'interface':
	case'union':
	case'enum':
	case'input':
	case'extend':
	case'directive':
	return parseTypeSystemDefinition(parser);}
	
	}
	
	throw unexpected(parser);
	}
	
	
	
	
	
	
	
	
	function parseOperationDefinition(parser){
	var start=parser.token.start;
	if(peek(parser,_lexer.TokenKind.BRACE_L)){
	return{
	kind:_kinds.OPERATION_DEFINITION,
	operation:'query',
	name:null,
	variableDefinitions:null,
	directives:[],
	selectionSet:parseSelectionSet(parser),
	loc:loc(parser,start)};
	
	}
	var operation=parseOperationType(parser);
	var name=void 0;
	if(peek(parser,_lexer.TokenKind.NAME)){
	name=parseName(parser);
	}
	return{
	kind:_kinds.OPERATION_DEFINITION,
	operation:operation,
	name:name,
	variableDefinitions:parseVariableDefinitions(parser),
	directives:parseDirectives(parser),
	selectionSet:parseSelectionSet(parser),
	loc:loc(parser,start)};
	
	}
	
	
	
	
	function parseOperationType(parser){
	var operationToken=expect(parser,_lexer.TokenKind.NAME);
	switch(operationToken.value){
	case'query':
	return'query';
	case'mutation':
	return'mutation';
	
	case'subscription':
	return'subscription';}
	
	
	throw unexpected(parser,operationToken);
	}
	
	
	
	
	function parseVariableDefinitions(parser){
	return peek(parser,_lexer.TokenKind.PAREN_L)?many(parser,_lexer.TokenKind.PAREN_L,parseVariableDefinition,_lexer.TokenKind.PAREN_R):[];
	}
	
	
	
	
	function parseVariableDefinition(parser){
	var start=parser.token.start;
	return{
	kind:_kinds.VARIABLE_DEFINITION,
	variable:parseVariable(parser),
	type:(expect(parser,_lexer.TokenKind.COLON),parseType(parser)),
	defaultValue:skip(parser,_lexer.TokenKind.EQUALS)?parseValueLiteral(parser,true):null,
	loc:loc(parser,start)};
	
	}
	
	
	
	
	function parseVariable(parser){
	var start=parser.token.start;
	expect(parser,_lexer.TokenKind.DOLLAR);
	return{
	kind:_kinds.VARIABLE,
	name:parseName(parser),
	loc:loc(parser,start)};
	
	}
	
	
	
	
	function parseSelectionSet(parser){
	var start=parser.token.start;
	return{
	kind:_kinds.SELECTION_SET,
	selections:many(parser,_lexer.TokenKind.BRACE_L,parseSelection,_lexer.TokenKind.BRACE_R),
	loc:loc(parser,start)};
	
	}
	
	
	
	
	
	
	
	function parseSelection(parser){
	return peek(parser,_lexer.TokenKind.SPREAD)?parseFragment(parser):parseField(parser);
	}
	
	
	
	
	
	
	function parseField(parser){
	var start=parser.token.start;
	
	var nameOrAlias=parseName(parser);
	var alias=void 0;
	var name=void 0;
	if(skip(parser,_lexer.TokenKind.COLON)){
	alias=nameOrAlias;
	name=parseName(parser);
	}else{
	alias=null;
	name=nameOrAlias;
	}
	
	return{
	kind:_kinds.FIELD,
	alias:alias,
	name:name,
	arguments:parseArguments(parser),
	directives:parseDirectives(parser),
	selectionSet:peek(parser,_lexer.TokenKind.BRACE_L)?parseSelectionSet(parser):null,
	loc:loc(parser,start)};
	
	}
	
	
	
	
	function parseArguments(parser){
	return peek(parser,_lexer.TokenKind.PAREN_L)?many(parser,_lexer.TokenKind.PAREN_L,parseArgument,_lexer.TokenKind.PAREN_R):[];
	}
	
	
	
	
	function parseArgument(parser){
	var start=parser.token.start;
	return{
	kind:_kinds.ARGUMENT,
	name:parseName(parser),
	value:(expect(parser,_lexer.TokenKind.COLON),parseValueLiteral(parser,false)),
	loc:loc(parser,start)};
	
	}
	
	
	
	
	
	
	
	
	
	
	function parseFragment(parser){
	var start=parser.token.start;
	expect(parser,_lexer.TokenKind.SPREAD);
	if(peek(parser,_lexer.TokenKind.NAME)&&parser.token.value!=='on'){
	return{
	kind:_kinds.FRAGMENT_SPREAD,
	name:parseFragmentName(parser),
	directives:parseDirectives(parser),
	loc:loc(parser,start)};
	
	}
	var typeCondition=null;
	if(parser.token.value==='on'){
	advance(parser);
	typeCondition=parseNamedType(parser);
	}
	return{
	kind:_kinds.INLINE_FRAGMENT,
	typeCondition:typeCondition,
	directives:parseDirectives(parser),
	selectionSet:parseSelectionSet(parser),
	loc:loc(parser,start)};
	
	}
	
	
	
	
	
	
	
	function parseFragmentDefinition(parser){
	var start=parser.token.start;
	expectKeyword(parser,'fragment');
	return{
	kind:_kinds.FRAGMENT_DEFINITION,
	name:parseFragmentName(parser),
	typeCondition:(expectKeyword(parser,'on'),parseNamedType(parser)),
	directives:parseDirectives(parser),
	selectionSet:parseSelectionSet(parser),
	loc:loc(parser,start)};
	
	}
	
	
	
	
	function parseFragmentName(parser){
	if(parser.token.value==='on'){
	throw unexpected(parser);
	}
	return parseName(parser);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function parseValueLiteral(parser,isConst){
	var token=parser.token;
	switch(token.kind){
	case _lexer.TokenKind.BRACKET_L:
	return parseList(parser,isConst);
	case _lexer.TokenKind.BRACE_L:
	return parseObject(parser,isConst);
	case _lexer.TokenKind.INT:
	advance(parser);
	return{
	kind:_kinds.INT,
	value:token.value,
	loc:loc(parser,token.start)};
	
	case _lexer.TokenKind.FLOAT:
	advance(parser);
	return{
	kind:_kinds.FLOAT,
	value:token.value,
	loc:loc(parser,token.start)};
	
	case _lexer.TokenKind.STRING:
	advance(parser);
	return{
	kind:_kinds.STRING,
	value:token.value,
	loc:loc(parser,token.start)};
	
	case _lexer.TokenKind.NAME:
	if(token.value==='true'||token.value==='false'){
	advance(parser);
	return{
	kind:_kinds.BOOLEAN,
	value:token.value==='true',
	loc:loc(parser,token.start)};
	
	}else if(token.value!=='null'){
	advance(parser);
	return{
	kind:_kinds.ENUM,
	value:token.value,
	loc:loc(parser,token.start)};
	
	}
	break;
	case _lexer.TokenKind.DOLLAR:
	if(!isConst){
	return parseVariable(parser);
	}
	break;}
	
	throw unexpected(parser);
	}
	
	function parseConstValue(parser){
	return parseValueLiteral(parser,true);
	}
	
	function parseValueValue(parser){
	return parseValueLiteral(parser,false);
	}
	
	
	
	
	
	
	function parseList(parser,isConst){
	var start=parser.token.start;
	var item=isConst?parseConstValue:parseValueValue;
	return{
	kind:_kinds.LIST,
	values:any(parser,_lexer.TokenKind.BRACKET_L,item,_lexer.TokenKind.BRACKET_R),
	loc:loc(parser,start)};
	
	}
	
	
	
	
	
	
	function parseObject(parser,isConst){
	var start=parser.token.start;
	expect(parser,_lexer.TokenKind.BRACE_L);
	var fields=[];
	while(!skip(parser,_lexer.TokenKind.BRACE_R)){
	fields.push(parseObjectField(parser,isConst));
	}
	return{
	kind:_kinds.OBJECT,
	fields:fields,
	loc:loc(parser,start)};
	
	}
	
	
	
	
	function parseObjectField(parser,isConst){
	var start=parser.token.start;
	return{
	kind:_kinds.OBJECT_FIELD,
	name:parseName(parser),
	value:(expect(parser,_lexer.TokenKind.COLON),parseValueLiteral(parser,isConst)),
	loc:loc(parser,start)};
	
	}
	
	
	
	
	
	
	function parseDirectives(parser){
	var directives=[];
	while(peek(parser,_lexer.TokenKind.AT)){
	directives.push(parseDirective(parser));
	}
	return directives;
	}
	
	
	
	
	function parseDirective(parser){
	var start=parser.token.start;
	expect(parser,_lexer.TokenKind.AT);
	return{
	kind:_kinds.DIRECTIVE,
	name:parseName(parser),
	arguments:parseArguments(parser),
	loc:loc(parser,start)};
	
	}
	
	
	
	
	
	
	
	
	
	function parseType(parser){
	var start=parser.token.start;
	var type=void 0;
	if(skip(parser,_lexer.TokenKind.BRACKET_L)){
	type=parseType(parser);
	expect(parser,_lexer.TokenKind.BRACKET_R);
	type={
	kind:_kinds.LIST_TYPE,
	type:type,
	loc:loc(parser,start)};
	
	}else{
	type=parseNamedType(parser);
	}
	if(skip(parser,_lexer.TokenKind.BANG)){
	return{
	kind:_kinds.NON_NULL_TYPE,
	type:type,
	loc:loc(parser,start)};
	
	}
	return type;
	}
	
	
	
	
	function parseNamedType(parser){
	var start=parser.token.start;
	return{
	kind:_kinds.NAMED_TYPE,
	name:parseName(parser),
	loc:loc(parser,start)};
	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function parseTypeSystemDefinition(parser){
	if(peek(parser,_lexer.TokenKind.NAME)){
	switch(parser.token.value){
	case'schema':
	return parseSchemaDefinition(parser);
	case'scalar':
	return parseScalarTypeDefinition(parser);
	case'type':
	return parseObjectTypeDefinition(parser);
	case'interface':
	return parseInterfaceTypeDefinition(parser);
	case'union':
	return parseUnionTypeDefinition(parser);
	case'enum':
	return parseEnumTypeDefinition(parser);
	case'input':
	return parseInputObjectTypeDefinition(parser);
	case'extend':
	return parseTypeExtensionDefinition(parser);
	case'directive':
	return parseDirectiveDefinition(parser);}
	
	}
	
	throw unexpected(parser);
	}
	
	
	
	
	
	
	function parseSchemaDefinition(parser){
	var start=parser.token.start;
	expectKeyword(parser,'schema');
	var directives=parseDirectives(parser);
	var operationTypes=many(parser,_lexer.TokenKind.BRACE_L,parseOperationTypeDefinition,_lexer.TokenKind.BRACE_R);
	return{
	kind:_kinds.SCHEMA_DEFINITION,
	directives:directives,
	operationTypes:operationTypes,
	loc:loc(parser,start)};
	
	}
	
	function parseOperationTypeDefinition(parser){
	var start=parser.token.start;
	var operation=parseOperationType(parser);
	expect(parser,_lexer.TokenKind.COLON);
	var type=parseNamedType(parser);
	return{
	kind:_kinds.OPERATION_TYPE_DEFINITION,
	operation:operation,
	type:type,
	loc:loc(parser,start)};
	
	}
	
	
	
	
	function parseScalarTypeDefinition(parser){
	var start=parser.token.start;
	expectKeyword(parser,'scalar');
	var name=parseName(parser);
	var directives=parseDirectives(parser);
	return{
	kind:_kinds.SCALAR_TYPE_DEFINITION,
	name:name,
	directives:directives,
	loc:loc(parser,start)};
	
	}
	
	
	
	
	
	function parseObjectTypeDefinition(parser){
	var start=parser.token.start;
	expectKeyword(parser,'type');
	var name=parseName(parser);
	var interfaces=parseImplementsInterfaces(parser);
	var directives=parseDirectives(parser);
	var fields=any(parser,_lexer.TokenKind.BRACE_L,parseFieldDefinition,_lexer.TokenKind.BRACE_R);
	return{
	kind:_kinds.OBJECT_TYPE_DEFINITION,
	name:name,
	interfaces:interfaces,
	directives:directives,
	fields:fields,
	loc:loc(parser,start)};
	
	}
	
	
	
	
	function parseImplementsInterfaces(parser){
	var types=[];
	if(parser.token.value==='implements'){
	advance(parser);
	do{
	types.push(parseNamedType(parser));
	}while(peek(parser,_lexer.TokenKind.NAME));
	}
	return types;
	}
	
	
	
	
	function parseFieldDefinition(parser){
	var start=parser.token.start;
	var name=parseName(parser);
	var args=parseArgumentDefs(parser);
	expect(parser,_lexer.TokenKind.COLON);
	var type=parseType(parser);
	var directives=parseDirectives(parser);
	return{
	kind:_kinds.FIELD_DEFINITION,
	name:name,
	arguments:args,
	type:type,
	directives:directives,
	loc:loc(parser,start)};
	
	}
	
	
	
	
	function parseArgumentDefs(parser){
	if(!peek(parser,_lexer.TokenKind.PAREN_L)){
	return[];
	}
	return many(parser,_lexer.TokenKind.PAREN_L,parseInputValueDef,_lexer.TokenKind.PAREN_R);
	}
	
	
	
	
	function parseInputValueDef(parser){
	var start=parser.token.start;
	var name=parseName(parser);
	expect(parser,_lexer.TokenKind.COLON);
	var type=parseType(parser);
	var defaultValue=null;
	if(skip(parser,_lexer.TokenKind.EQUALS)){
	defaultValue=parseConstValue(parser);
	}
	var directives=parseDirectives(parser);
	return{
	kind:_kinds.INPUT_VALUE_DEFINITION,
	name:name,
	type:type,
	defaultValue:defaultValue,
	directives:directives,
	loc:loc(parser,start)};
	
	}
	
	
	
	
	function parseInterfaceTypeDefinition(parser){
	var start=parser.token.start;
	expectKeyword(parser,'interface');
	var name=parseName(parser);
	var directives=parseDirectives(parser);
	var fields=any(parser,_lexer.TokenKind.BRACE_L,parseFieldDefinition,_lexer.TokenKind.BRACE_R);
	return{
	kind:_kinds.INTERFACE_TYPE_DEFINITION,
	name:name,
	directives:directives,
	fields:fields,
	loc:loc(parser,start)};
	
	}
	
	
	
	
	function parseUnionTypeDefinition(parser){
	var start=parser.token.start;
	expectKeyword(parser,'union');
	var name=parseName(parser);
	var directives=parseDirectives(parser);
	expect(parser,_lexer.TokenKind.EQUALS);
	var types=parseUnionMembers(parser);
	return{
	kind:_kinds.UNION_TYPE_DEFINITION,
	name:name,
	directives:directives,
	types:types,
	loc:loc(parser,start)};
	
	}
	
	
	
	
	
	
	function parseUnionMembers(parser){
	var members=[];
	do{
	members.push(parseNamedType(parser));
	}while(skip(parser,_lexer.TokenKind.PIPE));
	return members;
	}
	
	
	
	
	function parseEnumTypeDefinition(parser){
	var start=parser.token.start;
	expectKeyword(parser,'enum');
	var name=parseName(parser);
	var directives=parseDirectives(parser);
	var values=many(parser,_lexer.TokenKind.BRACE_L,parseEnumValueDefinition,_lexer.TokenKind.BRACE_R);
	return{
	kind:_kinds.ENUM_TYPE_DEFINITION,
	name:name,
	directives:directives,
	values:values,
	loc:loc(parser,start)};
	
	}
	
	
	
	
	
	
	function parseEnumValueDefinition(parser){
	var start=parser.token.start;
	var name=parseName(parser);
	var directives=parseDirectives(parser);
	return{
	kind:_kinds.ENUM_VALUE_DEFINITION,
	name:name,
	directives:directives,
	loc:loc(parser,start)};
	
	}
	
	
	
	
	function parseInputObjectTypeDefinition(parser){
	var start=parser.token.start;
	expectKeyword(parser,'input');
	var name=parseName(parser);
	var directives=parseDirectives(parser);
	var fields=any(parser,_lexer.TokenKind.BRACE_L,parseInputValueDef,_lexer.TokenKind.BRACE_R);
	return{
	kind:_kinds.INPUT_OBJECT_TYPE_DEFINITION,
	name:name,
	directives:directives,
	fields:fields,
	loc:loc(parser,start)};
	
	}
	
	
	
	
	function parseTypeExtensionDefinition(parser){
	var start=parser.token.start;
	expectKeyword(parser,'extend');
	var definition=parseObjectTypeDefinition(parser);
	return{
	kind:_kinds.TYPE_EXTENSION_DEFINITION,
	definition:definition,
	loc:loc(parser,start)};
	
	}
	
	
	
	
	
	function parseDirectiveDefinition(parser){
	var start=parser.token.start;
	expectKeyword(parser,'directive');
	expect(parser,_lexer.TokenKind.AT);
	var name=parseName(parser);
	var args=parseArgumentDefs(parser);
	expectKeyword(parser,'on');
	var locations=parseDirectiveLocations(parser);
	return{
	kind:_kinds.DIRECTIVE_DEFINITION,
	name:name,
	arguments:args,
	locations:locations,
	loc:loc(parser,start)};
	
	}
	
	
	
	
	
	
	function parseDirectiveLocations(parser){
	var locations=[];
	do{
	locations.push(parseName(parser));
	}while(skip(parser,_lexer.TokenKind.PIPE));
	return locations;
	}
	
	
	
	
	
	
	
	function makeParser(source,options){
	var _lexToken=(0,_lexer.lex)(source);
	return{
	_lexToken:_lexToken,
	source:source,
	options:options,
	prevEnd:0,
	token:_lexToken()};
	
	}
	
	
	
	
	
	function loc(parser,start){
	if(parser.options.noLocation){
	return null;
	}
	if(parser.options.noSource){
	return{start:start,end:parser.prevEnd};
	}
	return{start:start,end:parser.prevEnd,source:parser.source};
	}
	
	
	
	
	function advance(parser){
	var prevEnd=parser.token.end;
	parser.prevEnd=prevEnd;
	parser.token=parser._lexToken(prevEnd);
	}
	
	
	
	
	function peek(parser,kind){
	return parser.token.kind===kind;
	}
	
	
	
	
	
	function skip(parser,kind){
	var match=parser.token.kind===kind;
	if(match){
	advance(parser);
	}
	return match;
	}
	
	
	
	
	
	function expect(parser,kind){
	var token=parser.token;
	if(token.kind===kind){
	advance(parser);
	return token;
	}
	throw(0,_error.syntaxError)(parser.source,token.start,'Expected '+(0,_lexer.getTokenKindDesc)(kind)+', found '+(0,_lexer.getTokenDesc)(token));
	}
	
	
	
	
	
	
	function expectKeyword(parser,value){
	var token=parser.token;
	if(token.kind===_lexer.TokenKind.NAME&&token.value===value){
	advance(parser);
	return token;
	}
	throw(0,_error.syntaxError)(parser.source,token.start,'Expected "'+value+'", found '+(0,_lexer.getTokenDesc)(token));
	}
	
	
	
	
	
	function unexpected(parser,atToken){
	var token=atToken||parser.token;
	return(0,_error.syntaxError)(parser.source,token.start,'Unexpected '+(0,_lexer.getTokenDesc)(token));
	}
	
	
	
	
	
	
	
	function any(parser,openKind,parseFn,closeKind){
	expect(parser,openKind);
	var nodes=[];
	while(!skip(parser,closeKind)){
	nodes.push(parseFn(parser));
	}
	return nodes;
	}
	
	
	
	
	
	
	
	function many(parser,openKind,parseFn,closeKind){
	expect(parser,openKind);
	var nodes=[parseFn(parser)];
	while(!skip(parser,closeKind)){
	nodes.push(parseFn(parser));
	}
	return nodes;
	}
	
	},
	
	function(module,exports){
	
	'use strict';
	
	Object.defineProperty(exports,"__esModule",{
	value:true});
	
	
	function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var Source=exports.Source=function Source(body,name){
	_classCallCheck(this,Source);
	
	this.body=body;
	this.name=name||'GraphQL';
	};
	
	},
	
	function(module,exports,__webpack_require__){
	
	'use strict';
	
	Object.defineProperty(exports,"__esModule",{
	value:true});
	
	
	var _GraphQLError=__webpack_require__(4);
	
	Object.defineProperty(exports,'GraphQLError',{
	enumerable:true,
	get:function get(){
	return _GraphQLError.GraphQLError;
	}});
	
	
	var _syntaxError=__webpack_require__(11);
	
	Object.defineProperty(exports,'syntaxError',{
	enumerable:true,
	get:function get(){
	return _syntaxError.syntaxError;
	}});
	
	
	var _locatedError=__webpack_require__(12);
	
	Object.defineProperty(exports,'locatedError',{
	enumerable:true,
	get:function get(){
	return _locatedError.locatedError;
	}});
	
	
	var _formatError=__webpack_require__(13);
	
	Object.defineProperty(exports,'formatError',{
	enumerable:true,
	get:function get(){
	return _formatError.formatError;
	}});
	
	
	},
	
	function(module,exports,__webpack_require__){
	
	'use strict';
	
	Object.defineProperty(exports,"__esModule",{
	value:true});
	
	exports.GraphQLError=undefined;
	
	var _language=__webpack_require__(5);
	
	function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
	
	function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==="undefined"?"undefined":_typeof(call))==="object"||typeof call==="function")?call:self;}
	
	function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==="undefined"?"undefined":_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
	
	
	
	
	
	
	
	
	
	var GraphQLError=exports.GraphQLError=function(_Error){
	_inherits(GraphQLError,_Error);
	
	function GraphQLError(message,
	
	nodes,stack,source,positions,path,originalError){
	_classCallCheck(this,GraphQLError);
	
	var _this=_possibleConstructorReturn(this,_Error.call(this,message));
	
	Object.defineProperty(_this,'message',{
	value:message,
	
	
	
	enumerable:true,
	
	
	writable:true});
	
	
	Object.defineProperty(_this,'stack',{
	value:stack||message,
	
	
	
	writable:true});
	
	
	Object.defineProperty(_this,'nodes',{value:nodes});
	
	
	Object.defineProperty(_this,'source',{
	get:function get(){
	if(source){
	return source;
	}
	if(nodes&&nodes.length>0){
	var node=nodes[0];
	return node&&node.loc&&node.loc.source;
	}
	}});
	
	
	Object.defineProperty(_this,'positions',{
	get:function get(){
	if(positions){
	return positions;
	}
	if(nodes){
	var nodePositions=nodes.map(function(node){
	return node.loc&&node.loc.start;
	});
	if(nodePositions.some(function(p){
	return p;
	})){
	return nodePositions;
	}
	}
	}});
	
	
	Object.defineProperty(_this,'locations',{
	get:function get(){
	var _positions=this.positions;
	var _source=this.source;
	if(_positions&&_positions.length>0&&_source){
	return _positions.map(function(pos){
	return(0,_language.getLocation)(_source,pos);
	});
	}
	},
	
	
	
	
	enumerable:true});
	
	
	Object.defineProperty(_this,'path',{
	value:path,
	
	
	
	enumerable:true});
	
	
	Object.defineProperty(_this,'originalError',{
	value:originalError});
	
	return _this;
	}
	
	return GraphQLError;
	}(Error);
	
	},
	
	function(module,exports,__webpack_require__){
	
	'use strict';
	
	Object.defineProperty(exports,"__esModule",{
	value:true});
	
	exports.BREAK=exports.visitWithTypeInfo=exports.visitInParallel=exports.visit=exports.Source=exports.print=exports.parseValue=exports.parse=exports.lex=exports.Kind=exports.getLocation=undefined;
	
	var _location=__webpack_require__(6);
	
	Object.defineProperty(exports,'getLocation',{
	enumerable:true,
	get:function get(){
	return _location.getLocation;
	}});
	
	
	var _lexer=__webpack_require__(7);
	
	Object.defineProperty(exports,'lex',{
	enumerable:true,
	get:function get(){
	return _lexer.lex;
	}});
	
	
	var _parser=__webpack_require__(1);
	
	Object.defineProperty(exports,'parse',{
	enumerable:true,
	get:function get(){
	return _parser.parse;
	}});
	
	Object.defineProperty(exports,'parseValue',{
	enumerable:true,
	get:function get(){
	return _parser.parseValue;
	}});
	
	
	var _printer=__webpack_require__(8);
	
	Object.defineProperty(exports,'print',{
	enumerable:true,
	get:function get(){
	return _printer.print;
	}});
	
	
	var _source=__webpack_require__(2);
	
	Object.defineProperty(exports,'Source',{
	enumerable:true,
	get:function get(){
	return _source.Source;
	}});
	
	
	var _visitor=__webpack_require__(9);
	
	Object.defineProperty(exports,'visit',{
	enumerable:true,
	get:function get(){
	return _visitor.visit;
	}});
	
	Object.defineProperty(exports,'visitInParallel',{
	enumerable:true,
	get:function get(){
	return _visitor.visitInParallel;
	}});
	
	Object.defineProperty(exports,'visitWithTypeInfo',{
	enumerable:true,
	get:function get(){
	return _visitor.visitWithTypeInfo;
	}});
	
	Object.defineProperty(exports,'BREAK',{
	enumerable:true,
	get:function get(){
	return _visitor.BREAK;
	}});
	
	
	var _kinds=__webpack_require__(10);
	
	var Kind=_interopRequireWildcard(_kinds);
	
	function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}
	
	exports.Kind=Kind;
	
	},
	
	function(module,exports){
	
	'use strict';
	
	Object.defineProperty(exports,"__esModule",{
	value:true});
	
	exports.getLocation=getLocation;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function getLocation(source,position){
	var lineRegexp=/\r\n|[\n\r]/g;
	var line=1;
	var column=position+1;
	var match=void 0;
	while((match=lineRegexp.exec(source.body))&&match.index<position){
	line+=1;
	column=position+1-(match.index+match[0].length);
	}
	return{line:line,column:column};
	}
	
	
	
	
	
	},
	
	function(module,exports,__webpack_require__){
	
	'use strict';
	
	Object.defineProperty(exports,"__esModule",{
	value:true});
	
	exports.TokenKind=undefined;
	exports.lex=lex;
	exports.getTokenDesc=getTokenDesc;
	exports.getTokenKindDesc=getTokenKindDesc;
	
	var _error=__webpack_require__(3);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function lex(source){
	var prevPosition=0;
	return function nextToken(resetPosition){
	var token=readToken(source,resetPosition===undefined?prevPosition:resetPosition);
	prevPosition=token.end;
	return token;
	};
	}
	
	
	
	
	var TokenKind=exports.TokenKind={
	EOF:1,
	BANG:2,
	DOLLAR:3,
	PAREN_L:4,
	PAREN_R:5,
	SPREAD:6,
	COLON:7,
	EQUALS:8,
	AT:9,
	BRACKET_L:10,
	BRACKET_R:11,
	BRACE_L:12,
	PIPE:13,
	BRACE_R:14,
	NAME:15,
	INT:16,
	FLOAT:17,
	STRING:18};
	
	
	
	
	
	function getTokenDesc(token){
	var value=token.value;
	return value?getTokenKindDesc(token.kind)+' "'+value+'"':getTokenKindDesc(token.kind);
	}
	
	
	
	
	function getTokenKindDesc(kind){
	return tokenDescription[kind];
	}
	
	var tokenDescription={};
	tokenDescription[TokenKind.EOF]='EOF';
	tokenDescription[TokenKind.BANG]='!';
	tokenDescription[TokenKind.DOLLAR]='$';
	tokenDescription[TokenKind.PAREN_L]='(';
	tokenDescription[TokenKind.PAREN_R]=')';
	tokenDescription[TokenKind.SPREAD]='...';
	tokenDescription[TokenKind.COLON]=':';
	tokenDescription[TokenKind.EQUALS]='=';
	tokenDescription[TokenKind.AT]='@';
	tokenDescription[TokenKind.BRACKET_L]='[';
	tokenDescription[TokenKind.BRACKET_R]=']';
	tokenDescription[TokenKind.BRACE_L]='{';
	tokenDescription[TokenKind.PIPE]='|';
	tokenDescription[TokenKind.BRACE_R]='}';
	tokenDescription[TokenKind.NAME]='Name';
	tokenDescription[TokenKind.INT]='Int';
	tokenDescription[TokenKind.FLOAT]='Float';
	tokenDescription[TokenKind.STRING]='String';
	
	var charCodeAt=String.prototype.charCodeAt;
	var slice=String.prototype.slice;
	
	
	
	
	function makeToken(kind,start,end,value){
	return{kind:kind,start:start,end:end,value:value};
	}
	
	function printCharCode(code){
	return(
	
	isNaN(code)?'<EOF>':
	
	code<0x007F?JSON.stringify(String.fromCharCode(code)):
	
	"\"\\u"+('00'+code.toString(16).toUpperCase()).slice(-4)+'"');
	
	}
	
	
	
	
	
	
	
	
	function readToken(source,fromPosition){
	var body=source.body;
	var bodyLength=body.length;
	
	var position=positionAfterWhitespace(body,fromPosition);
	
	if(position>=bodyLength){
	return makeToken(TokenKind.EOF,position,position);
	}
	
	var code=charCodeAt.call(body,position);
	
	
	if(code<0x0020&&code!==0x0009&&code!==0x000A&&code!==0x000D){
	throw(0,_error.syntaxError)(source,position,'Invalid character '+printCharCode(code)+'.');
	}
	
	switch(code){
	
	case 33:
	return makeToken(TokenKind.BANG,position,position+1);
	
	case 36:
	return makeToken(TokenKind.DOLLAR,position,position+1);
	
	case 40:
	return makeToken(TokenKind.PAREN_L,position,position+1);
	
	case 41:
	return makeToken(TokenKind.PAREN_R,position,position+1);
	
	case 46:
	if(charCodeAt.call(body,position+1)===46&&charCodeAt.call(body,position+2)===46){
	return makeToken(TokenKind.SPREAD,position,position+3);
	}
	break;
	
	case 58:
	return makeToken(TokenKind.COLON,position,position+1);
	
	case 61:
	return makeToken(TokenKind.EQUALS,position,position+1);
	
	case 64:
	return makeToken(TokenKind.AT,position,position+1);
	
	case 91:
	return makeToken(TokenKind.BRACKET_L,position,position+1);
	
	case 93:
	return makeToken(TokenKind.BRACKET_R,position,position+1);
	
	case 123:
	return makeToken(TokenKind.BRACE_L,position,position+1);
	
	case 124:
	return makeToken(TokenKind.PIPE,position,position+1);
	
	case 125:
	return makeToken(TokenKind.BRACE_R,position,position+1);
	
	case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:
	case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:
	case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:
	case 89:case 90:
	case 95:
	case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:
	case 105:case 106:case 107:case 108:case 109:case 110:case 111:
	case 112:case 113:case 114:case 115:case 116:case 117:case 118:
	case 119:case 120:case 121:case 122:
	return readName(source,position);
	
	case 45:
	case 48:case 49:case 50:case 51:case 52:
	case 53:case 54:case 55:case 56:case 57:
	return readNumber(source,position,code);
	
	case 34:
	return readString(source,position);}
	
	
	throw(0,_error.syntaxError)(source,position,'Unexpected character '+printCharCode(code)+'.');
	}
	
	
	
	
	
	
	function positionAfterWhitespace(body,startPosition){
	var bodyLength=body.length;
	var position=startPosition;
	while(position<bodyLength){
	var code=charCodeAt.call(body,position);
	
	if(
	
	code===0xFEFF||
	
	code===0x0009||
	code===0x0020||
	
	code===0x000A||
	code===0x000D||
	
	code===0x002C){
	++position;
	
	}else if(code===35){
	
	++position;
	while(position<bodyLength&&(code=charCodeAt.call(body,position))!==null&&(
	
	code>0x001F||code===0x0009)&&code!==0x000A&&code!==0x000D){
	++position;
	}
	}else{
	break;
	}
	}
	return position;
	}
	
	
	
	
	
	
	
	
	function readNumber(source,start,firstCode){
	var body=source.body;
	var code=firstCode;
	var position=start;
	var isFloat=false;
	
	if(code===45){
	
	code=charCodeAt.call(body,++position);
	}
	
	if(code===48){
	
	code=charCodeAt.call(body,++position);
	if(code>=48&&code<=57){
	throw(0,_error.syntaxError)(source,position,'Invalid number, unexpected digit after 0: '+printCharCode(code)+'.');
	}
	}else{
	position=readDigits(source,position,code);
	code=charCodeAt.call(body,position);
	}
	
	if(code===46){
	
	isFloat=true;
	
	code=charCodeAt.call(body,++position);
	position=readDigits(source,position,code);
	code=charCodeAt.call(body,position);
	}
	
	if(code===69||code===101){
	
	isFloat=true;
	
	code=charCodeAt.call(body,++position);
	if(code===43||code===45){
	
	code=charCodeAt.call(body,++position);
	}
	position=readDigits(source,position,code);
	}
	
	return makeToken(isFloat?TokenKind.FLOAT:TokenKind.INT,start,position,slice.call(body,start,position));
	}
	
	
	
	
	function readDigits(source,start,firstCode){
	var body=source.body;
	var position=start;
	var code=firstCode;
	if(code>=48&&code<=57){
	
	do{
	code=charCodeAt.call(body,++position);
	}while(code>=48&&code<=57);
	return position;
	}
	throw(0,_error.syntaxError)(source,position,'Invalid number, expected digit but got: '+printCharCode(code)+'.');
	}
	
	
	
	
	
	
	function readString(source,start){
	var body=source.body;
	var position=start+1;
	var chunkStart=position;
	var code=0;
	var value='';
	
	while(position<body.length&&(code=charCodeAt.call(body,position))!==null&&
	
	code!==0x000A&&code!==0x000D&&
	
	code!==34){
	
	if(code<0x0020&&code!==0x0009){
	throw(0,_error.syntaxError)(source,position,'Invalid character within String: '+printCharCode(code)+'.');
	}
	
	++position;
	if(code===92){
	
	value+=slice.call(body,chunkStart,position-1);
	code=charCodeAt.call(body,position);
	switch(code){
	case 34:
	value+='"';break;
	case 47:
	value+='\/';break;
	case 92:
	value+='\\';break;
	case 98:
	value+='\b';break;
	case 102:
	value+='\f';break;
	case 110:
	value+='\n';break;
	case 114:
	value+='\r';break;
	case 116:
	value+='\t';break;
	case 117:
	
	var charCode=uniCharCode(charCodeAt.call(body,position+1),charCodeAt.call(body,position+2),charCodeAt.call(body,position+3),charCodeAt.call(body,position+4));
	if(charCode<0){
	throw(0,_error.syntaxError)(source,position,'Invalid character escape sequence: '+("\\u"+body.slice(position+1,position+5)+'.'));
	}
	value+=String.fromCharCode(charCode);
	position+=4;
	break;
	default:
	throw(0,_error.syntaxError)(source,position,'Invalid character escape sequence: \\'+String.fromCharCode(code)+'.');}
	
	++position;
	chunkStart=position;
	}
	}
	
	if(code!==34){
	
	throw(0,_error.syntaxError)(source,position,'Unterminated string.');
	}
	
	value+=slice.call(body,chunkStart,position);
	return makeToken(TokenKind.STRING,start,position+1,value);
	}
	
	
	
	
	
	
	
	
	
	
	
	function uniCharCode(a,b,c,d){
	return char2hex(a)<<12|char2hex(b)<<8|char2hex(c)<<4|char2hex(d);
	}
	
	
	
	
	
	
	
	
	
	function char2hex(a){
	return a>=48&&a<=57?a-48:
	a>=65&&a<=70?a-55:
	a>=97&&a<=102?a-87:
	-1;
	}
	
	
	
	
	
	
	function readName(source,position){
	var body=source.body;
	var bodyLength=body.length;
	var end=position+1;
	var code=0;
	while(end!==bodyLength&&(code=charCodeAt.call(body,end))!==null&&(code===95||
	code>=48&&code<=57||
	code>=65&&code<=90||
	code>=97&&code<=122))
	{
	++end;
	}
	return makeToken(TokenKind.NAME,position,end,slice.call(body,position,end));
	}
	
	},
	
	function(module,exports,__webpack_require__){
	
	'use strict';
	
	Object.defineProperty(exports,"__esModule",{
	value:true});
	
	exports.print=print;
	
	var _visitor=__webpack_require__(9);
	
	
	
	
	
	function print(ast){
	return(0,_visitor.visit)(ast,{leave:printDocASTReducer});
	}
	
	
	
	
	
	
	
	
	var printDocASTReducer={
	Name:function Name(node){
	return node.value;
	},
	Variable:function Variable(node){
	return'$'+node.name;
	},
	
	
	
	Document:function Document(node){
	return join(node.definitions,'\n\n')+'\n';
	},
	
	OperationDefinition:function OperationDefinition(node){
	var op=node.operation;
	var name=node.name;
	var varDefs=wrap('(',join(node.variableDefinitions,', '),')');
	var directives=join(node.directives,' ');
	var selectionSet=node.selectionSet;
	
	
	return!name&&!directives&&!varDefs&&op==='query'?selectionSet:join([op,join([name,varDefs]),directives,selectionSet],' ');
	},
	
	
	VariableDefinition:function VariableDefinition(_ref){
	var variable=_ref.variable;
	var type=_ref.type;
	var defaultValue=_ref.defaultValue;
	return variable+': '+type+wrap(' = ',defaultValue);
	},
	
	SelectionSet:function SelectionSet(_ref2){
	var selections=_ref2.selections;
	return block(selections);
	},
	
	Field:function Field(_ref3){
	var alias=_ref3.alias;
	var name=_ref3.name;
	var args=_ref3.arguments;
	var directives=_ref3.directives;
	var selectionSet=_ref3.selectionSet;
	return join([wrap('',alias,': ')+name+wrap('(',join(args,', '),')'),join(directives,' '),selectionSet],' ');
	},
	
	Argument:function Argument(_ref4){
	var name=_ref4.name;
	var value=_ref4.value;
	return name+': '+value;
	},
	
	
	
	FragmentSpread:function FragmentSpread(_ref5){
	var name=_ref5.name;
	var directives=_ref5.directives;
	return'...'+name+wrap(' ',join(directives,' '));
	},
	
	InlineFragment:function InlineFragment(_ref6){
	var typeCondition=_ref6.typeCondition;
	var directives=_ref6.directives;
	var selectionSet=_ref6.selectionSet;
	return join(['...',wrap('on ',typeCondition),join(directives,' '),selectionSet],' ');
	},
	
	FragmentDefinition:function FragmentDefinition(_ref7){
	var name=_ref7.name;
	var typeCondition=_ref7.typeCondition;
	var directives=_ref7.directives;
	var selectionSet=_ref7.selectionSet;
	return'fragment '+name+' on '+typeCondition+' '+wrap('',join(directives,' '),' ')+selectionSet;
	},
	
	
	
	IntValue:function IntValue(_ref8){
	var value=_ref8.value;
	return value;
	},
	FloatValue:function FloatValue(_ref9){
	var value=_ref9.value;
	return value;
	},
	StringValue:function StringValue(_ref10){
	var value=_ref10.value;
	return JSON.stringify(value);
	},
	BooleanValue:function BooleanValue(_ref11){
	var value=_ref11.value;
	return JSON.stringify(value);
	},
	EnumValue:function EnumValue(_ref12){
	var value=_ref12.value;
	return value;
	},
	ListValue:function ListValue(_ref13){
	var values=_ref13.values;
	return'['+join(values,', ')+']';
	},
	ObjectValue:function ObjectValue(_ref14){
	var fields=_ref14.fields;
	return'{'+join(fields,', ')+'}';
	},
	ObjectField:function ObjectField(_ref15){
	var name=_ref15.name;
	var value=_ref15.value;
	return name+': '+value;
	},
	
	
	
	Directive:function Directive(_ref16){
	var name=_ref16.name;
	var args=_ref16.arguments;
	return'@'+name+wrap('(',join(args,', '),')');
	},
	
	
	
	NamedType:function NamedType(_ref17){
	var name=_ref17.name;
	return name;
	},
	ListType:function ListType(_ref18){
	var type=_ref18.type;
	return'['+type+']';
	},
	NonNullType:function NonNullType(_ref19){
	var type=_ref19.type;
	return type+'!';
	},
	
	
	
	SchemaDefinition:function SchemaDefinition(_ref20){
	var directives=_ref20.directives;
	var operationTypes=_ref20.operationTypes;
	return join(['schema',join(directives,' '),block(operationTypes)],' ');
	},
	
	OperationTypeDefinition:function OperationTypeDefinition(_ref21){
	var operation=_ref21.operation;
	var type=_ref21.type;
	return operation+': '+type;
	},
	
	ScalarTypeDefinition:function ScalarTypeDefinition(_ref22){
	var name=_ref22.name;
	var directives=_ref22.directives;
	return join(['scalar',name,join(directives,' ')],' ');
	},
	
	ObjectTypeDefinition:function ObjectTypeDefinition(_ref23){
	var name=_ref23.name;
	var interfaces=_ref23.interfaces;
	var directives=_ref23.directives;
	var fields=_ref23.fields;
	return join(['type',name,wrap('implements ',join(interfaces,', ')),join(directives,' '),block(fields)],' ');
	},
	
	FieldDefinition:function FieldDefinition(_ref24){
	var name=_ref24.name;
	var args=_ref24.arguments;
	var type=_ref24.type;
	var directives=_ref24.directives;
	return name+wrap('(',join(args,', '),')')+': '+type+wrap(' ',join(directives,' '));
	},
	
	InputValueDefinition:function InputValueDefinition(_ref25){
	var name=_ref25.name;
	var type=_ref25.type;
	var defaultValue=_ref25.defaultValue;
	var directives=_ref25.directives;
	return join([name+': '+type,wrap('= ',defaultValue),join(directives,' ')],' ');
	},
	
	InterfaceTypeDefinition:function InterfaceTypeDefinition(_ref26){
	var name=_ref26.name;
	var directives=_ref26.directives;
	var fields=_ref26.fields;
	return join(['interface',name,join(directives,' '),block(fields)],' ');
	},
	
	UnionTypeDefinition:function UnionTypeDefinition(_ref27){
	var name=_ref27.name;
	var directives=_ref27.directives;
	var types=_ref27.types;
	return join(['union',name,join(directives,' '),'= '+join(types,' | ')],' ');
	},
	
	EnumTypeDefinition:function EnumTypeDefinition(_ref28){
	var name=_ref28.name;
	var directives=_ref28.directives;
	var values=_ref28.values;
	return join(['enum',name,join(directives,' '),block(values)],' ');
	},
	
	EnumValueDefinition:function EnumValueDefinition(_ref29){
	var name=_ref29.name;
	var directives=_ref29.directives;
	return join([name,join(directives,' ')],' ');
	},
	
	InputObjectTypeDefinition:function InputObjectTypeDefinition(_ref30){
	var name=_ref30.name;
	var directives=_ref30.directives;
	var fields=_ref30.fields;
	return join(['input',name,join(directives,' '),block(fields)],' ');
	},
	
	TypeExtensionDefinition:function TypeExtensionDefinition(_ref31){
	var definition=_ref31.definition;
	return'extend '+definition;
	},
	
	DirectiveDefinition:function DirectiveDefinition(_ref32){
	var name=_ref32.name;
	var args=_ref32.arguments;
	var locations=_ref32.locations;
	return'directive @'+name+wrap('(',join(args,', '),')')+' on '+join(locations,' | ');
	}};
	
	
	
	
	
	
	function join(maybeArray,separator){
	return maybeArray?maybeArray.filter(function(x){
	return x;
	}).join(separator||''):'';
	}
	
	
	
	
	
	function block(array){
	return array&&array.length!==0?indent('{\n'+join(array,'\n'))+'\n}':'{}';
	}
	
	
	
	
	
	function wrap(start,maybeString,end){
	return maybeString?start+maybeString+(end||''):'';
	}
	
	function indent(maybeString){
	return maybeString&&maybeString.replace(/\n/g,'\n  ');
	}
	
	},
	
	function(module,exports){
	
	'use strict';
	
	Object.defineProperty(exports,"__esModule",{
	value:true});
	
	exports.visit=visit;
	exports.visitInParallel=visitInParallel;
	exports.visitWithTypeInfo=visitWithTypeInfo;
	
	
	
	
	
	
	
	
	
	var QueryDocumentKeys=exports.QueryDocumentKeys={
	Name:[],
	
	Document:['definitions'],
	OperationDefinition:['name','variableDefinitions','directives','selectionSet'],
	VariableDefinition:['variable','type','defaultValue'],
	Variable:['name'],
	SelectionSet:['selections'],
	Field:['alias','name','arguments','directives','selectionSet'],
	Argument:['name','value'],
	
	FragmentSpread:['name','directives'],
	InlineFragment:['typeCondition','directives','selectionSet'],
	FragmentDefinition:['name','typeCondition','directives','selectionSet'],
	
	IntValue:[],
	FloatValue:[],
	StringValue:[],
	BooleanValue:[],
	EnumValue:[],
	ListValue:['values'],
	ObjectValue:['fields'],
	ObjectField:['name','value'],
	
	Directive:['name','arguments'],
	
	NamedType:['name'],
	ListType:['type'],
	NonNullType:['type'],
	
	SchemaDefinition:['directives','operationTypes'],
	OperationTypeDefinition:['type'],
	
	ScalarTypeDefinition:['name','directives'],
	ObjectTypeDefinition:['name','interfaces','directives','fields'],
	FieldDefinition:['name','arguments','type','directives'],
	InputValueDefinition:['name','type','defaultValue','directives'],
	InterfaceTypeDefinition:['name','directives','fields'],
	UnionTypeDefinition:['name','directives','types'],
	EnumTypeDefinition:['name','directives','values'],
	EnumValueDefinition:['name','directives'],
	InputObjectTypeDefinition:['name','directives','fields'],
	
	TypeExtensionDefinition:['definition'],
	
	DirectiveDefinition:['name','arguments','locations']};
	
	
	var BREAK=exports.BREAK={};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function visit(root,visitor,keyMap){
	var visitorKeys=keyMap||QueryDocumentKeys;
	
	var stack=void 0;
	var inArray=Array.isArray(root);
	var keys=[root];
	var index=-1;
	var edits=[];
	var parent=void 0;
	var path=[];
	var ancestors=[];
	var newRoot=root;
	
	do{
	index++;
	var isLeaving=index===keys.length;
	var key=void 0;
	var node=void 0;
	var isEdited=isLeaving&&edits.length!==0;
	if(isLeaving){
	key=ancestors.length===0?undefined:path.pop();
	node=parent;
	parent=ancestors.pop();
	if(isEdited){
	if(inArray){
	node=node.slice();
	}else{
	var clone={};
	for(var k in node){
	if(node.hasOwnProperty(k)){
	clone[k]=node[k];
	}
	}
	node=clone;
	}
	var editOffset=0;
	for(var ii=0;ii<edits.length;ii++){
	var editKey=edits[ii][0];
	var editValue=edits[ii][1];
	if(inArray){
	editKey-=editOffset;
	}
	if(inArray&&editValue===null){
	node.splice(editKey,1);
	editOffset++;
	}else{
	node[editKey]=editValue;
	}
	}
	}
	index=stack.index;
	keys=stack.keys;
	edits=stack.edits;
	inArray=stack.inArray;
	stack=stack.prev;
	}else{
	key=parent?inArray?index:keys[index]:undefined;
	node=parent?parent[key]:newRoot;
	if(node===null||node===undefined){
	continue;
	}
	if(parent){
	path.push(key);
	}
	}
	
	var result=void 0;
	if(!Array.isArray(node)){
	if(!isNode(node)){
	throw new Error('Invalid AST Node: '+JSON.stringify(node));
	}
	var visitFn=getVisitFn(visitor,node.kind,isLeaving);
	if(visitFn){
	result=visitFn.call(visitor,node,key,parent,path,ancestors);
	
	if(result===BREAK){
	break;
	}
	
	if(result===false){
	if(!isLeaving){
	path.pop();
	continue;
	}
	}else if(result!==undefined){
	edits.push([key,result]);
	if(!isLeaving){
	if(isNode(result)){
	node=result;
	}else{
	path.pop();
	continue;
	}
	}
	}
	}
	}
	
	if(result===undefined&&isEdited){
	edits.push([key,node]);
	}
	
	if(!isLeaving){
	stack={inArray:inArray,index:index,keys:keys,edits:edits,prev:stack};
	inArray=Array.isArray(node);
	keys=inArray?node:visitorKeys[node.kind]||[];
	index=-1;
	edits=[];
	if(parent){
	ancestors.push(parent);
	}
	parent=node;
	}
	}while(stack!==undefined);
	
	if(edits.length!==0){
	newRoot=edits[edits.length-1][1];
	}
	
	return newRoot;
	}
	
	function isNode(maybeNode){
	return maybeNode&&typeof maybeNode.kind==='string';
	}
	
	
	
	
	
	
	
	function visitInParallel(visitors){
	var skipping=new Array(visitors.length);
	
	return{
	enter:function enter(node){
	for(var i=0;i<visitors.length;i++){
	if(!skipping[i]){
	var fn=getVisitFn(visitors[i],node.kind,false);
	if(fn){
	var result=fn.apply(visitors[i],arguments);
	if(result===false){
	skipping[i]=node;
	}else if(result===BREAK){
	skipping[i]=BREAK;
	}else if(result!==undefined){
	return result;
	}
	}
	}
	}
	},
	leave:function leave(node){
	for(var i=0;i<visitors.length;i++){
	if(!skipping[i]){
	var fn=getVisitFn(visitors[i],node.kind,true);
	if(fn){
	var result=fn.apply(visitors[i],arguments);
	if(result===BREAK){
	skipping[i]=BREAK;
	}else if(result!==undefined&&result!==false){
	return result;
	}
	}
	}else if(skipping[i]===node){
	skipping[i]=null;
	}
	}
	}};
	
	}
	
	
	
	
	
	function visitWithTypeInfo(typeInfo,visitor){
	return{
	enter:function enter(node){
	typeInfo.enter(node);
	var fn=getVisitFn(visitor,node.kind,false);
	if(fn){
	var result=fn.apply(visitor,arguments);
	if(result!==undefined){
	typeInfo.leave(node);
	if(isNode(result)){
	typeInfo.enter(result);
	}
	}
	return result;
	}
	},
	leave:function leave(node){
	var fn=getVisitFn(visitor,node.kind,true);
	var result=void 0;
	if(fn){
	result=fn.apply(visitor,arguments);
	}
	typeInfo.leave(node);
	return result;
	}};
	
	}
	
	
	
	
	
	function getVisitFn(visitor,kind,isLeaving){
	var kindVisitor=visitor[kind];
	if(kindVisitor){
	if(!isLeaving&&typeof kindVisitor==='function'){
	
	return kindVisitor;
	}
	var kindSpecificVisitor=isLeaving?kindVisitor.leave:kindVisitor.enter;
	if(typeof kindSpecificVisitor==='function'){
	
	return kindSpecificVisitor;
	}
	}else{
	var specificVisitor=isLeaving?visitor.leave:visitor.enter;
	if(specificVisitor){
	if(typeof specificVisitor==='function'){
	
	return specificVisitor;
	}
	var specificKindVisitor=specificVisitor[kind];
	if(typeof specificKindVisitor==='function'){
	
	return specificKindVisitor;
	}
	}
	}
	}
	
	},
	
	function(module,exports){
	
	'use strict';
	
	Object.defineProperty(exports,"__esModule",{
	value:true});
	
	
	
	
	
	
	
	
	
	
	
	
	var NAME=exports.NAME='Name';
	
	
	
	var DOCUMENT=exports.DOCUMENT='Document';
	var OPERATION_DEFINITION=exports.OPERATION_DEFINITION='OperationDefinition';
	var VARIABLE_DEFINITION=exports.VARIABLE_DEFINITION='VariableDefinition';
	var VARIABLE=exports.VARIABLE='Variable';
	var SELECTION_SET=exports.SELECTION_SET='SelectionSet';
	var FIELD=exports.FIELD='Field';
	var ARGUMENT=exports.ARGUMENT='Argument';
	
	
	
	var FRAGMENT_SPREAD=exports.FRAGMENT_SPREAD='FragmentSpread';
	var INLINE_FRAGMENT=exports.INLINE_FRAGMENT='InlineFragment';
	var FRAGMENT_DEFINITION=exports.FRAGMENT_DEFINITION='FragmentDefinition';
	
	
	
	var INT=exports.INT='IntValue';
	var FLOAT=exports.FLOAT='FloatValue';
	var STRING=exports.STRING='StringValue';
	var BOOLEAN=exports.BOOLEAN='BooleanValue';
	var ENUM=exports.ENUM='EnumValue';
	var LIST=exports.LIST='ListValue';
	var OBJECT=exports.OBJECT='ObjectValue';
	var OBJECT_FIELD=exports.OBJECT_FIELD='ObjectField';
	
	
	
	var DIRECTIVE=exports.DIRECTIVE='Directive';
	
	
	
	var NAMED_TYPE=exports.NAMED_TYPE='NamedType';
	var LIST_TYPE=exports.LIST_TYPE='ListType';
	var NON_NULL_TYPE=exports.NON_NULL_TYPE='NonNullType';
	
	
	
	var SCHEMA_DEFINITION=exports.SCHEMA_DEFINITION='SchemaDefinition';
	var OPERATION_TYPE_DEFINITION=exports.OPERATION_TYPE_DEFINITION='OperationTypeDefinition';
	
	
	
	var SCALAR_TYPE_DEFINITION=exports.SCALAR_TYPE_DEFINITION='ScalarTypeDefinition';
	var OBJECT_TYPE_DEFINITION=exports.OBJECT_TYPE_DEFINITION='ObjectTypeDefinition';
	var FIELD_DEFINITION=exports.FIELD_DEFINITION='FieldDefinition';
	var INPUT_VALUE_DEFINITION=exports.INPUT_VALUE_DEFINITION='InputValueDefinition';
	var INTERFACE_TYPE_DEFINITION=exports.INTERFACE_TYPE_DEFINITION='InterfaceTypeDefinition';
	var UNION_TYPE_DEFINITION=exports.UNION_TYPE_DEFINITION='UnionTypeDefinition';
	var ENUM_TYPE_DEFINITION=exports.ENUM_TYPE_DEFINITION='EnumTypeDefinition';
	var ENUM_VALUE_DEFINITION=exports.ENUM_VALUE_DEFINITION='EnumValueDefinition';
	var INPUT_OBJECT_TYPE_DEFINITION=exports.INPUT_OBJECT_TYPE_DEFINITION='InputObjectTypeDefinition';
	
	
	
	var TYPE_EXTENSION_DEFINITION=exports.TYPE_EXTENSION_DEFINITION='TypeExtensionDefinition';
	
	
	
	var DIRECTIVE_DEFINITION=exports.DIRECTIVE_DEFINITION='DirectiveDefinition';
	
	},
	
	function(module,exports,__webpack_require__){
	
	'use strict';
	
	Object.defineProperty(exports,"__esModule",{
	value:true});
	
	exports.syntaxError=syntaxError;
	
	var _location=__webpack_require__(6);
	
	var _GraphQLError=__webpack_require__(4);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function syntaxError(source,position,description){
	var location=(0,_location.getLocation)(source,position);
	var error=new _GraphQLError.GraphQLError('Syntax Error '+source.name+' ('+location.line+':'+location.column+') '+description+'\n\n'+highlightSourceAtLocation(source,location),undefined,undefined,source,[position]);
	return error;
	}
	
	
	
	
	
	function highlightSourceAtLocation(source,location){
	var line=location.line;
	var prevLineNum=(line-1).toString();
	var lineNum=line.toString();
	var nextLineNum=(line+1).toString();
	var padLen=nextLineNum.length;
	var lines=source.body.split(/\r\n|[\n\r]/g);
	return(line>=2?lpad(padLen,prevLineNum)+': '+lines[line-2]+'\n':'')+lpad(padLen,lineNum)+': '+lines[line-1]+'\n'+Array(2+padLen+location.column).join(' ')+'^\n'+(line<lines.length?lpad(padLen,nextLineNum)+': '+lines[line]+'\n':'');
	}
	
	function lpad(len,str){
	return Array(len-str.length+1).join(' ')+str;
	}
	
	},
	
	function(module,exports,__webpack_require__){
	
	'use strict';
	
	Object.defineProperty(exports,"__esModule",{
	value:true});
	
	exports.locatedError=locatedError;
	
	var _GraphQLError=__webpack_require__(4);
	
	
	
	
	
	
	function locatedError(originalError,nodes,path){
	
	
	if(originalError&&originalError.hasOwnProperty('locations')){
	return originalError;
	}
	
	var message=originalError?originalError.message||String(originalError):'An unknown error occurred.';
	var stack=originalError?originalError.stack:null;
	return new _GraphQLError.GraphQLError(message,nodes,stack,null,null,path,originalError);
	}
	
	
	
	
	
	
	
	
	
	},
	
	function(module,exports,__webpack_require__){
	
	'use strict';
	
	Object.defineProperty(exports,"__esModule",{
	value:true});
	
	exports.formatError=formatError;
	
	var _invariant=__webpack_require__(14);
	
	var _invariant2=_interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
	
	
	
	
	
	function formatError(error){
	(0,_invariant2.default)(error,'Received null or undefined error.');
	return{
	message:error.message,
	locations:error.locations};
	
	}
	
	
	
	
	
	
	
	
	
	},
	
	function(module,exports){
	
	"use strict";
	
	Object.defineProperty(exports,"__esModule",{
	value:true});
	
	exports.default=invariant;
	
	
	
	
	
	
	
	
	
	
	function invariant(condition,message){
	if(!condition){
	throw new Error(message);
	}
	}
	
	}]);

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=
	
	_react2.default.createClass({displayName:'StarcraftHeroesList',
	props:{
	data:_react.PropTypes.object.isRequired},
	
	render:function render(){
	return(
	_react2.default.createElement('div',null,
	this.props.data.id,
	this.props.data.name));
	
	
	}});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
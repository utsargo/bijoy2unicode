// Compiled by ClojureScript 1.7.122 {}
goog.provide('bijoytounicode.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
bijoytounicode.core.dmap = cljs.core.PersistentHashMap.fromArrays(["T","\u2026","\u00E0","\u00AC","d","n","9","\u00AF","K","z","w","3","\u2014","\u2039","\u00BB","\u00BD","\u00FE","s","\u00E9","`","\u201C","\u00F5","\u00D6","\u00E6","\u0152","\u00B5","4","\u00DB","f","\u00D9","8","e","\u00FA","\u00D2","Q","\u00B9","\u00E3","\u00FD","|","~","q","\u00CD","\u00CC","L","\u00A4","\u00D4","p","\u201E","\u00D7","\u00C3","\u00C9","\u00ED","\u00E5","j","\u00FC","\u00C1","\u00EC","x","G","\u00B4","J","\u00F9","\u00F7","v","\u00CE","\u00E2","M","\u2019","\u00BE","\u201E\u201E","\u00F2","S","Y","\u00BA","\u00DD","Z","\u02C6","H","\u0192","\u2020","7","\u00EE","\u00A9","\u2030","5","E","\u00AD","\u00E7","R","C","\u00D8","\u00FB","F","\u00E8","\u00A3","\u00B8","\u00F3","\u00F1","B","\u00F8","\u00DF","\u00B7","a","\u2122","\u00C8","_","6","&","\u00B6","P","t","\u00A5","\u0161","V","U","O","\u00AE","\u00A6","i","k","b","\u2022","\u201D","r","y","\u00AB","\u00CB","\u00C6","1","\u0153","0","g","\u00F0","X","l","\u00CF","\u201A","N","\u0178","u","\u00AA","\u00D3","\u00DE","A","\u00E4","Av","\u00D0","\u2021","\u00DA","\u00B0","\u2013","h","\u00C7","\u00F6","I","\u00EA","\u00D1","\u0160","2","\u00EB","\u00BF","\u00B2","m","\u00F4","W","\u2018","^","\u00C4","\u00C5","\u00A1","\u00D5","\u00DC","\u00B3","D","o","\u00A2","c","\u203A","\u00EF","\u00C2","\u00A8","\u00A7","\u00C0","\u00B1","\u00BC","\u02DC","\u00E1"],["\u099E","\u09C3","\u09AA\u09CD\u09AA","\u09CD\u09B2","\u09AB","\u09B9","\u09EF","\u09B8\u09CD","\u0995","\u09C1","\u09BF","\u09E9","\u09CD\u09A4","\u09CD\u0995","\u0997\u09CD\u09A7","\u0999\u09CD\u0997","\u09B9\u09CD\u09AE","\u0982","\u09B2\u09CD\u0995","\u09A6","\u09C1","\u09B7\u09CD\u09AB","\u09CD\u09B0","\u09C1","\u09CD\u0995\u09CD\u09B0","\u0995\u09CD\u09B0","\u09EA","\u09A8\u09CD\u09A1","\u09AD","\u09A6\u09CD\u09AE","\u09EE","\u09AC","\u09CD\u09AA","\"","\u099B","\u0997\u09CD\u0997","\u09AC\u09CD\u09A6","\u09B9\u09CD\u09A8","\u0964","\u09C2","\u09DF","\u09CD\u09A4","\u09A4\u09CD\u09A5","\u0996","\u09AE\u09CD","'","\u09DD","\u09C3","\u09A6\u09CD\u09A7","\u099E\u09CD\u099B","\u09A3\u09CD\u09A0","\u09B2\u09CD\u09AA","\u09AD\u09CD\u09B0","\u09B2","\u09B9\u09C3","\u099C\u09CD\u099E","\u09B2\u09CD\u09A1","\u09C0","\u098F","\u0995\u09CD\u09AE","\u0994","\u09B8\u09CD\u09AB","\u09B8\u09CD\u099F","\u09BE","\u09A4\u09CD\u09B0","\u09AC\u09CD\u099C","\u0997","\u09CD\u09A5","\u099C\u09CD\u099C","\u09C3","\u09B7\u09CD\u09A3","\u099D","\u09A3","\u0997\u09CD\u09A6","\u09A8\u09CD\u09B8","\u09A4","\u09C8","\u0990","\u09C2","\u09C7","\u09ED","\u09B2\u09CD\u09AB","\u09B0\u09CD","\u09C8","\u09EB","\u098A","\u09CD\u09B2","\u09AE\u09CD\u09AB","\u099C","\u0988","\u09A6\u09CD\u09AC","\u09B9\u09C1","\u098B","\u09CD\u09A8","\u09CD\u09AD\u09CD\u09B0","\u0997\u09C1","\u09B7\u09CD\u099F","\u09B6\u09CD\u099B","\u0987","\u09CD\u09B2","\u09AA\u09CD\u09A4","\u0995\u09CD\u09B8","\u09A7","\u09A6\u09CD","\u09A3\u09CD\u099F","\u09A5","\u09EC","\u09CD\u200C","\u0995\u09CD\u09B7","\u099A","\u0983","\u09CD\u09AE","\u09A8\u09CD","\u09A0","\u099F","\u0999","\u09B7\u09CD","\u09CD\u09AC","\u09B0","\u09B6","\u09A8","\u0999\u09CD","\u099A\u09CD","\u09CE","\u09C1","\u09CD\u09B0","\u09A4\u09CD\u09A4","\u099F\u09CD\u099F","\u09E7","\u09CD\u09A8","\u09E6","\u09AE","\u09B6\u09CD\u099A","\u09A2","\u09B7","\u09A6\u09CD\u09A6","\u09C2","\u0998","\u09CD\u09AC","\u0981","\u09CD\u09B0","\"","\u09AA\u09CD\u099F","\u0985","\u09AC\u09CD\u09A7","\u0986","\u09A3\u09CD\u09A1","\u09C7","\u09A8\u09CD\u09A0","\u0995\u09CD\u0995","\u09C1","\u09AF","\u09A1\u09CD\u09A1","\u09B8\u09CD\u0996","\u0993","\u09B2\u09CD\u0997","-","\u09D7","\u09E8","\u09B2\u09CD\u099F","\u09CD\u09A4\u09CD\u09B0","\u0995\u09CD\u09B7\u09CD\u09A3","\u09B8","\u09B7\u09CD\u09A0","\u09A1","\u09CD\u09A4\u09C1","\u09CD\u09AC","\u099E\u09CD\u099C","\u099E\u09CD\u099D","\u09CD\u09AC","'","\u09A8\u09CD\u09A7","\u0995\u09CD\u09A4","\u0989","\u09DC","\u09CD\u09AD","\u09AA","\u09A8\u09CD","\u09B6\u09C1","\u099E\u09CD\u099A","\u200D\u09CD\u09AF","\u09CD\u09AE","\u099C\u09CD\u099D","\u0995\u09CD\u099F","\u0999\u09CD\u0995","\u09A6\u09CD","\u09AA\u09CD\u09B8"]);
bijoytounicode.core.replacer = (function bijoytounicode$core$replacer(string){
var data = cljs.core.filterv.call(null,(function (p1__31025_SHARP_){
return cljs.core.not_EQ_.call(null,p1__31025_SHARP_,"");
}),clojure.string.split.call(null,string,(new RegExp(""))));
var convdata = cljs.core.mapv.call(null,((function (data){
return (function (p1__31026_SHARP_){
if(cljs.core.contains_QMARK_.call(null,bijoytounicode.core.dmap,p1__31026_SHARP_)){
return cljs.core.get.call(null,bijoytounicode.core.dmap,p1__31026_SHARP_);
} else {
return p1__31026_SHARP_;
}
});})(data))
,data);
var refed = (function (){var len = (cljs.core.count.call(null,convdata) - (1));
var outmap = cljs.core.PersistentVector.EMPTY;
var i = (0);
while(true){
if((i > len)){
return outmap;
} else {
var target = cljs.core.nth.call(null,convdata,i);
if(cljs.core._EQ_.call(null,target,"\u09B0\u09CD")){
var G__31027 = cljs.core.conj.call(null,cljs.core.mapv.call(null,cljs.core.identity,cljs.core.butlast.call(null,outmap)),target,cljs.core.nth.call(null,convdata,(i - (1))));
var G__31028 = (i + (1));
outmap = G__31027;
i = G__31028;
continue;
} else {
var G__31029 = cljs.core.mapv.call(null,cljs.core.identity,cljs.core.conj.call(null,outmap,target));
var G__31030 = (i + (1));
outmap = G__31029;
i = G__31030;
continue;
}
}
break;
}
})();
var jukto = (function (){var len = (cljs.core.count.call(null,refed) - (1));
var out = cljs.core.PersistentVector.EMPTY;
var i = (0);
while(true){
if((i > len)){
return out;
} else {
var tg = cljs.core.nth.call(null,refed,i);
if((cljs.core.not_EQ_.call(null,i,len)) && (cljs.core._EQ_.call(null,"\u09CD",[cljs.core.str(cljs.core.last.call(null,tg))].join('')))){
var G__31031 = cljs.core.mapv.call(null,cljs.core.identity,cljs.core.conj.call(null,out,[cljs.core.str(tg),cljs.core.str(cljs.core.nth.call(null,refed,(i + (1))))].join('')));
var G__31032 = ((2) + i);
out = G__31031;
i = G__31032;
continue;
} else {
if(cljs.core._EQ_.call(null,"\u09CD",[cljs.core.str(cljs.core.first.call(null,tg))].join(''))){
var G__31033 = cljs.core.mapv.call(null,cljs.core.identity,cljs.core.conj.call(null,cljs.core.mapv.call(null,cljs.core.identity,cljs.core.butlast.call(null,out)),[cljs.core.str(cljs.core.last.call(null,out)),cljs.core.str(tg)].join('')));
var G__31034 = (i + (1));
out = G__31033;
i = G__31034;
continue;
} else {
if(cljs.core._EQ_.call(null,"\u200D\u09CD\u09AF",tg)){
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,out),"\u09B0")){
var G__31035 = cljs.core.mapv.call(null,cljs.core.identity,cljs.core.conj.call(null,cljs.core.mapv.call(null,cljs.core.identity,cljs.core.butlast.call(null,out)),"\u09B0\u200D\u09CD\u09AF"));
var G__31036 = (i + (1));
out = G__31035;
i = G__31036;
continue;
} else {
var G__31037 = cljs.core.mapv.call(null,cljs.core.identity,cljs.core.conj.call(null,cljs.core.mapv.call(null,cljs.core.identity,cljs.core.butlast.call(null,out)),[cljs.core.str(cljs.core.last.call(null,out)),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,tg)))].join('')));
var G__31038 = (i + (1));
out = G__31037;
i = G__31038;
continue;
}
} else {
var G__31039 = cljs.core.mapv.call(null,cljs.core.identity,cljs.core.conj.call(null,out,tg));
var G__31040 = (i + (1));
out = G__31039;
i = G__31040;
continue;

}
}
}
}
break;
}
})();
var karexchange = (function (){var len = (cljs.core.count.call(null,jukto) - (1));
var out = cljs.core.PersistentVector.EMPTY;
var i = (0);
while(true){
if((i > len)){
return out;
} else {
var target = cljs.core.nth.call(null,jukto,i);
if((cljs.core._EQ_.call(null,target,"\u09C7")) || (cljs.core._EQ_.call(null,target,"\u09C8")) || (cljs.core._EQ_.call(null,target,"\u09BF"))){
var G__31041 = cljs.core.mapv.call(null,cljs.core.identity,cljs.core.conj.call(null,out,cljs.core.nth.call(null,jukto,(i + (1))),target));
var G__31042 = ((2) + i);
out = G__31041;
i = G__31042;
continue;
} else {
var G__31043 = cljs.core.mapv.call(null,cljs.core.identity,cljs.core.conj.call(null,out,target));
var G__31044 = (i + (1));
out = G__31043;
i = G__31044;
continue;
}
}
break;
}
})();
var karcombined = (function (){var len = (cljs.core.count.call(null,karexchange) - (1));
var out = cljs.core.PersistentVector.EMPTY;
var i = (0);
while(true){
if((i > len)){
return out;
} else {
var target = cljs.core.nth.call(null,karexchange,i);
if((cljs.core.not_EQ_.call(null,i,len)) && (cljs.core._EQ_.call(null,target,"\u09C7")) && (cljs.core._EQ_.call(null,"\u09BE",cljs.core.nth.call(null,karexchange,(i + (1)))))){
var G__31045 = cljs.core.mapv.call(null,cljs.core.identity,cljs.core.conj.call(null,out,"\u09CB"));
var G__31046 = ((2) + i);
out = G__31045;
i = G__31046;
continue;
} else {
if((cljs.core.not_EQ_.call(null,i,len)) && (cljs.core._EQ_.call(null,target,"\u09C7")) && (cljs.core._EQ_.call(null,"\u09D7",cljs.core.nth.call(null,karexchange,(i + (1)))))){
var G__31047 = cljs.core.mapv.call(null,cljs.core.identity,cljs.core.conj.call(null,out,"\u09CC"));
var G__31048 = ((2) + i);
out = G__31047;
i = G__31048;
continue;
} else {
if((cljs.core.not_EQ_.call(null,i,len)) && (cljs.core._EQ_.call(null,target,"\u0985")) && (cljs.core._EQ_.call(null,"\u09BE",cljs.core.nth.call(null,karexchange,(i + (1)))))){
var G__31049 = cljs.core.mapv.call(null,cljs.core.identity,cljs.core.conj.call(null,out,"\u0986"));
var G__31050 = ((2) + i);
out = G__31049;
i = G__31050;
continue;
} else {
var G__31051 = cljs.core.mapv.call(null,cljs.core.identity,cljs.core.conj.call(null,out,target));
var G__31052 = (i + (1));
out = G__31051;
i = G__31052;
continue;

}
}
}
}
break;
}
})();
return clojure.string.replace.call(null,cljs.core.apply.call(null,cljs.core.str,karcombined),/্্/,"\u09CD");
});
bijoytounicode.core.atom_input = (function bijoytounicode$core$atom_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",850049680),(10),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31053_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__31053_SHARP_.target.value);
})], null)], null);
});
bijoytounicode.core.atom_output = (function bijoytounicode$core$atom_output(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rows","rows",850049680),(10),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
bijoytounicode.core.shared_state = (function bijoytounicode$core$shared_state(){
var val = reagent.core.atom.call(null,"Avwg me \u2021`\u2021L\u00EF\u2021b\n\u2021\u00B6\u2021c wM\u2021q Kwi\nevOjvq wPrKvi!");
return ((function (val){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u09AC\u09BF\u099C\u09DF\u09C7 \u099F\u09BE\u0987\u09AA \u0995\u09B0\u09BE \u09AC\u09BE\u0999\u09B2\u09BE \u09B2\u09BF\u0996\u09C1\u09A8 \u09AC\u09BE \u09AA\u09C7\u09B8\u09CD\u099F \u0995\u09B0\u09C1\u09A8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bijoytounicode.core.atom_input,val], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u0987\u0989\u09A8\u09BF\u0995\u09CB\u09A1\u09C7 \u0995\u09A8\u09AD\u09BE\u09B0\u09CD\u099F \u0995\u09B0\u09BE \u099F\u09C7\u0995\u09CD\u09B8\u099F:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bijoytounicode.core.atom_output,bijoytounicode.core.replacer.call(null,cljs.core.deref.call(null,val))], null)], null)], null);
});
;})(val))
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bijoytounicode.core.shared_state], null),document.getElementById("app"));
bijoytounicode.core.on_js_reload = (function bijoytounicode$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1446958368161

var str="Lütfen bu oyun yazisini bulunuz oyun deger";
var pos=str.indexOf("oyun",15);
document.getElementById("ornek1").innerHTML=pos;
var pos1=str.lastIndexOf("oyun");
var search=str.search("deger");
document.getElementById("ornek2").innerHTML=pos1;
document.getElementById("ornek3").innerHTML=search;
var str1="Elma,Armut,Muz";
var res=str1.slice(5,10);
document.getElementById("ornek4").innerHTML=res;
var str2="Karpuz,Kavun,Ceviz";
var res2=str2.substring(7,12); //parcayi yazdiriyor
document.getElementById("ornek5").innerHTML=res2;
var str3="Buraya gelsene arkadasim";
var res3=str3.substr(7,7);
document.getElementById("ornek6").innerHTML=res3;
function degistirme()
{
    var str4 = document.getElementById("ornek7").innerHTML; 
  var txt = str4.replace(/MICROSOFT/i,"Trendoyuncu");
  document.getElementById("ornek7").innerHTML = txt;
}
//concat degistirme
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
//Charcode()
 //yontemin
 var str="Cihat";
 str.charCodeAt(0);
 str[0];
 var fruits, text, fLen, i;
 fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.push("PineApple");
 fLen = fruits.length;
 
 text = "<ul>";
 for (i = 0; i < fLen; i++) {
   text += "<li>" + fruits[i] + "</li>";
 }
 text += "</ul>";
 
 document.getElementById("ornek9").innerHTML = text;
var points=[1,2,3,4,5]; //iyi bir dizi tanımlaması

 /*  Sonsuza kadar yazdırıyor :)
 var myNumber =1; 
var txt = "";
while (myNumber != Infinity) {
   myNumber = myNumber + myNumber;
   txt = txt + myNumber + "<br>";
}
document.getElementById("ornek8").innerHTML = txt;*/

var degerler=["Renault","Volvo","BMW","Mercedes"];
var x=degerler.pop(); //degerlerdeki son degeri siliyor :/()
degerler.push("Hyundai");
degerler.shift(); //ilk degeri siler pop ile aynıdır
document.getElementById("ornek10").innerHTML=degerler.join("/");
function ekleme()
{
  degerler.unshift("Category Eklendi");
  document.getElementById("ornek11").innerHTML=degerler;
}
var meyveler = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("ornek12").innerHTML = meyveler;

function sonaEkle() {
  
  meyveler[meyveler.length] = "Yeni Meyve";
  document.getElementById("ornek12").innerHTML = meyveler;
} 

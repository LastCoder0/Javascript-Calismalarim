var degerler= [
    5,4,2,3,1,7,9,8,10,6

];
document.getElementById("ornek1").innerHTML=degerler;
function siralaAlfabe()
{
    degerler.sort();
    document.getElementById("ornek1").innerHTML=degerler
}
function siralaSayisal()
{
    degerler.sort(function(a,b){return a-b});
    document.getElementById("ornek1").innerHTML=degerler;
}
var cars=
[  
    {tipi:"Volvo",yili:2016},
    {tipi:"Renault",yili:1998},
    {tipi:"Bmw",yili:2019},
    {tipi:"Mercedes",yili:2004}

];
showCar();
function work()
{
    cars.sort(function(a,b)
    {
        var x=a.tipi.toUpperCase();
        var y=b.tipi.toUpperCase();
        if(x<y){return -1;}
        if(x>y) {return 1;}
        return 0;
    });
    showCar();
}


function showCar()
{
    document.getElementById("ornek2").innerHTML=
    cars[0].tipi+" "+ cars[0].yili+"<br>"+
    cars[1].tipi+" "+cars[1].yili+"<br>"+
    cars [2].tipi+" "+cars[2].yili+"<br>"+
    cars [3].tipi+" "+cars [3].yili;
}
var txt1="";
var numbers=[45,10,2,30,11,3];
numbers.forEach(deger);
document.getElementById("ornek3").innerHTML = txt1;
function deger(value)
{
    txt1+=value+"<br>";

}
var sayi1=[45,4,12,18,11];
var sayi2=sayi1.map(git);
document.getElementById("ornek4").innerHTML=sayi2;
function git(value)
{
return (value*4);
}
var sayi3=[45,3,5,10,14,5];
var over9=sayi3.filter(filtre);
document.getElementById("ornek5").innerHTML=over9;
function filtre(value,index,array)
{
    return value<10
}
var sayi4=[45,3,5,10,14,5,18];
var toplam=sayi4.reduce(topla);
document.getElementById("ornek6").innerHTML=+toplam+"dır";
function topla(toplam,value,index,array) //index ve array kullanılmıyor istersen silebilirsin...
{
    return toplam+value;
}
var sayi5=[45,3,5,10,14,5,18];
var toplam1=sayi5.reduceRight(topla); //sagdan okuyor
document.getElementById("ornek7").innerHTML=+toplam+"dır";
function topla(toplam,value,index,array) //index ve array kullanılmıyor istersen silebilirsin...
{
    return toplam+value;
}
var sayi6=[45,3,5,10,14,5,18];
var buyukmu=sayi6.every(kontrol); //sagdan okuyor
document.getElementById("ornek7").innerHTML="Butun degerlerdir  "+buyukmu;
function kontrol(value) //index ve array kullanılmıyor istersen silebilirsin...
{
    return value>10
}
var sayi7=[1,3,5,10,14,5,18];
var buyukmu1=sayi7.find(find); //sagdan okuyor
document.getElementById("ornek8").innerHTML=buyukmu1;
function find(value) //index ve array kullanılmıyor istersen silebilirsin...
{
    return value>10
}
var voteable=(age<18) ? "Çok genç":"Old enough";

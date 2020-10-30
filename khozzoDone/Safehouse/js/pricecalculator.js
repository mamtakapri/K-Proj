/*var baggage=new Array();
baggage["None"]=0;
baggage["One"]=1;
baggage["Two"]=2;
baggage["Three"]=3;
baggage["Four"]=4;
baggage["Five"]=5;
baggage["Six"]=6;
baggage["Seven"]=7;
baggage["Eight"]=8;
baggage["Nine"]=9;
baggage["Ten"]=10;*/

function getkgs(){
  var cost=0;
  var kgno= document.getElementById("kg").value;
  if(kg.value === ''){
    hide();
  }
  else {
    if(kgno>=1 && kgno <=20)
    {
      cost=499;
    }
    else if(kgno>20){
      cost=499+(kgno-20)*80;
    }
  }
    return cost;
}

/*function getbaggage(){
  var baggageno = 0;
  var theForm = document.forms["calculation"];
  var selectedbaggageno = theForm.elements["baggage"];
  baggageno = baggage[selectedbaggageno.value];
  return baggageno;
}*/
function getfragile(){
  var fragilecost=0;
  var fragileitem= document.getElementById("fragile").value;
  fragilecost=100*fragileitem;
  /*var fragileyes = 0;
  var theForm = document.forms["calculation"];
  var includeFragile = theForm.elements["fragileyes"];
  if (includeFragile.checked == true) {
    fragileyes = 100;
  }
  return fragileyes;*/
  return fragilecost;
}
function total(){
  var price=getkgs()+getfragile();
  var cal=document.getElementById('tprice');
  cal.style.display='block';
  cal.innerHTML= "Total Price =  ₹" + price;
}
function trans(){
  var cost=getkgs()+getfragile();
  document.getElementById('transac').innerHTML=cost;
}


function hide(){
  var cal=document.getElementById('tprice');
  cal.style.display='block';
}

var myVar;
function runrace()
{
 //alert(1);
 var myd;
 var mys;
 var numin;
 var hitonce;
 
 
 myd=document.getElementById('distance').value;
 mys=document.getElementById('surface').value;
 numin=document.getElementById('numin').value;
  
 hitonce=document.getElementById('hitonce').value;
 document.getElementById('hitonce').value = '1';
 if (hitonce == '')
 {
 //alert(0);
 myVar = setInterval("runhorses(" + myd + ",'" + mys + "','" + numin + "')",125);
 //alert(myVar);
 }
 
 
}


//horse body size is roughly 75 pixels


function runhorses(myd, mys,numin)
{
 var x;
 var x1;
 var x2;
 var x3;
 var h1;
 var hs;
 var xo;
 var xst;
 var xfi;
 var racetime;
 var onequad;
 var myquad;
 var myplace;
 var myslope;
 var myplace2;
 var holen;
 var pos1;
 var pos2;
 var wherer;
 var ordera = new Array();
 var orderb = new Array();
 var y;
 var t1;
 var y1;
 var ext;
 var x3a;
 ext = 0;
 
 holen = 75;
 
 
 racetime = 8 * 60; //about one minute
 onequad = 1 * (racetime / 4);
  
 
 x3 = document.getElementById('onco').value;
 x3 = 1+(x3*1);
 x3a = document.getElementById('oncox').value;
 x3a = 1+(x3a*1);
 
 //first, figure out what quadrant I'm on
 
 
 myquad = parseInt(4 *(x3 / racetime));
 myplace = 5 + (2 * myquad);
 myslope = 14 + myquad;
 myplace2 = myplace + 2 ;
 

 if (x3a >= racetime)
 {
  myquad = 3;
  myplace = 13;
  myplace2 = myplace;
  x3 = racetime;
  ext = 12*(x3a - racetime);
  myslope = 17;
 }
 document.getElementById('onco').value = x3;
 document.getElementById('oncox').value = x3a;
 
 for (x=1; x<= numin; x=x+1)
 {
  


  h1 = document.getElementById('horseinfo' + x).value;
  h2 = h1.split('|');
  
 // xst = h2[ 1 * (x3 / 
  
  //x2 = document.getElementById('horse' + x).style.left;
  //x2 = 1*(x2.replace('px',''));

   pos1 = 0;
  if (myquad != 0)
  {
    pos1 = 1*h2[myplace];
  }


  pos2 = 1*h2[myplace2];
  
  //alert(myslope);
  //wherer =  power(((x3 - (myquad * onequad) ) / onequad), 1) ;
  //wherer =  ((x3 - (myquad * onequad) ) / onequad) ;
  wherer =  Math.pow(((x3 - (myquad * onequad) ) / onequad), (1.15 - 0.3 * (h2[myslope] / 1000) )) ;
  
  x2 = ext + (450 - holen * pos1 / 100) - holen * (pos2 - pos1) / 100 * wherer;
  
  ordera[x] = x2;
  orderb[x] = x ; //h2[1];
  
  
  
  
  if (x > 1)
  {
   for (y=x; y > 1; --y)
   {
    y1 = (y-1);
    if (ordera[y1] > ordera[y] )
	{
	 y=0;
	}	
    if ((ordera[y1] <= ordera[y] ) && (y  > 0 ))
	{
	 t1=ordera[y1];
	 ordera[y1]=ordera[y];
	 ordera[y]=t1;
	 t1=orderb[y1];
	 orderb[y1]=orderb[y];
	 orderb[y]=t1;
	}

   }
  
  }


  
  
  if ( x3 > (racetime - 210))
  {
   document.getElementById('fini').style.left = (550 +(racetime - x3)) + "px";
  }
  
  if ( x3 == (racetime - 1))
  {
 //  alert(myquad+','+pos2+','+x2+','+h2[myplace]) 
  }
  
  }

  document.getElementById('bgt1').style.left = -(25 * (x3 % 2))
  if (x3 < 5)
  {
   //alert(x3)
  } 
   
  //document.getElementById('bgt').style.backgroundImage = "url('" + mys + (1+((1+x3) % 4)) + ".gif')";
  document.getElementById('placer').innerHTML = (myd*x3 / (racetime * 1000)).toFixed(2) + "F / " + numberWithCommas(parseInt(200*myd*x3 / (racetime*1000))) + "M" // + " myquad " + myquad + ", x2 " + x2+ ", pos1 " + pos1 + ", pos2 " + pos2;
  
  document.getElementById('gates').style.left = -(50 * (x3 % 2));
  document.getElementById('gatestop').style.left = -(50 * (x3 % 2)); 
  
  document.getElementById('gate1').style.left = 450 - x3*15;
  
  
    	if (x3 == 4)
	{	// alert(ordera+" "+numin+" "+y);
	// alert(myd*x3 / (racetime * 1000))
	}
  
  for (y = 1; y <= numin; y=y+1)
  {

  
  x = orderb[y];
  
  if (myplace == 13)
  {
    x = y;
  }



  x1 = ordera[y]; //(x2+3);
  h1 = document.getElementById('horseinfo' + x).value;
  h2 = h1.split('|'); 

//if (x3 == 20) {alert(orderb[y]);}  

  movehorse(x,x1,x3a,h2,x1-(ordera[1]-450),holen);
  
    if ((y == numin) && (x1 > 600))
  {
 // alert(1);
  clearInterval(myVar);
  //alert(myVar);
  }
  
  
  	if (x3 == 4)
	{
	// alert(orderb+" "+numin+" "+y);
	}
//if (x3 == 1)
//{alert(x+'_'+y);}
    document.getElementById('lba' + h2[1]).style.top = (18+(y+2)*20) + "px";

	document.getElementById('horseno' + h2[1]).style.top = (20+(y+2)*20) + "px";
	

	    	      if (x3 == 4)
	{
//	 alert(orderb+" "+numin+" "+y);
	}
	
  }

}

function movehorse(hno, loca, looper,horse, loca2,holen)
{
 var colo;
 colo = ('|b|c|g|g1|r|').split('|');
 var mycolor;
 mycolor = colo[horse[4]];
 //alert(hno);
 //alert(loca);
 
 
 
 document.getElementById('horse' + 	horse[1]).style.left = loca + "px";

  document.getElementById('divno' + horse[1]).style.left = (loca + 52 + parseInt((0.45*(1+hno + looper) % 4)))  + "px";

  document.getElementById('lb' + 	horse[1]).innerHTML = (-(loca2 - 450)/holen).toFixed(2);
 
 document.getElementById('horse' + horse[1]).innerHTML = "<img src='./images/horse" + (1+ ((hno + looper) % 4) )+ mycolor + ".gif'>"
 

 
 
 
 if (loca > 600)
 {
  document.getElementById('horse' + horse[1]).innerHTML = "";
    document.getElementById('divno' + horse[1]).innerHTML  = "";
 }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}




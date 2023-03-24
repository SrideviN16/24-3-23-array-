
//1.leap year//
var startyear=prompt("enter the startyr");
var endyear=prompt("enter the endyr");
var interyear=[];
for(i=startyear;i<=endyear;i++)
     {
       interyear.push(i);
	}
	console.log(interyear);
			  
    var leapyear=interyear.filter(function (ansyear) 
	    {
	   return (ansyear%4 == 0)||((ansyear%400 == 0)&&(ansyear%100 !== 0));
	  	});
			console.log("THE LEAP YEARS:" +leapyear);
			
			
// 2.pair of inidicates//
arr=[10,20,10,40,50,60,70];
 let target=50;
 for(i=0;i<arr.length;i++)
 {
	 for(j=0;j<arr.length;j++)
	 {
		 if((arr[i]+arr[j])==target)
		 {
			 var myval=arr.indexOf(arr[i]);
			 var myvalu=arr.indexOf(arr[j]);
		 }
	 }
 }
 console.log(myval,myvalu);
 
 // 3.add a  same index value elements//
 var myarr1= [1,0,2,3,4];
 var myarr2=[3,5,6,7,8,13];
 var ansarr=[];
 
 if(myarr1.length<myarr2.length)
 {
	 myarr1.push(0)
 }
 else 
 {
	 myarr2.push(0);
 }
 console.log(myarr1);	
 for(i=0;i<myarr1.length;i++)
 {
	 for(j=i;j<myarr2.length;j++)
	 {
		 if(i==j)
		 {
	   ansarr.push(myarr1[i]+myarr2[j]);	
		 }
	 }
	
 }	 
 
	 
console.log(ansarr);
		
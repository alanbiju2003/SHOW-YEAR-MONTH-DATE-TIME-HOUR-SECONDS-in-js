let result,resul;
    //YEAR - to know the year of the date we use getFullYear
    function year(){
        
        let date=new Date();
        let YEAR=date.getFullYear();
        result=document.getElementById("year").innerHTML=YEAR;
   
}

     //MONTH -to know the month of the day to get correct value yiu have to add +1 because it counts from 0 to 11
     function month(){
        
        let date=new Date();
        let YEAR=date.getMonth()+1;
        result=document.getElementById("month").innerHTML= YEAR;
   
}

     //to display month name you have to create a array of months to get month name 

     function monthname() {
         const mnth=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
         let date=new Date();
         let mnthname=mnth[date.getMonth()];
         result=document.getElementById("monthname").innerHTML=mnthname;

}
     
    //DATE - to get the date of the month returns the date as no between [1-31] 
     
    function dateno() {
        let date= new Date();
        let datee=date.getDate();
        result=document.getElementById("dateno").innerHTML=datee;
    }

    //to get full date with the format 

    function fulldate() {
        let date=new Date();
        result=document.getElementById("fulldat").innerHTML=date;

    }

    //HOUR= to get hours of present

    function hour() {
        let date=new Date();
        let houra=date.getHours();
        result=document.getElementById("hr").innerHTML=houra;
    }

    //MINUTE =to get minute of present
    function min() {
        let date=new Date();
        let minute=date.getMinutes();
        result=document.getElementById("minu").innerHTML=minute;
    }

    //DAY -to get day of today
    
    function daay() {
        let date=new Date();
        let daaay=date.getDay();
        result=document.getElementById("day").innerHTML=daaay;
    }


     
    function dayname() {
        daaaaay=["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"];
        let datte=new Date();
        let daaaty=daaaaay[datte.getDay()-1];
        result=document.getElementById("daayn").innerHTML=daaaty;
    }

    //seconds = to get seconds of the present time
    function secs() {
        
    let date=new Date();
    let seccs= date.getSeconds();
    result=document.getElementById("secs").innerHTML=seccs;
    }

    // function alltime() {
    //     let date=new Date();
    //     let day=date.getDate();
    //     let month=date.getMonth()+1;
    //     let year=date.getFullYear();
    //     result=document.getElementById("alltime").innerHTML= "0"+day+" "+"-"+" "+"0"+month+" "+"-"+year;
    // }








    
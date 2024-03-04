
function submitOrders(){

    let chkChickenJoy=document.getElementById("chkOption1");
    let coke=document.getElementById("chkOption2");
    let dataToServer="";

    if(chkChickenJoy.checked == true){
        dataToServer="c1";
    
    }else if(coke.checked==true){
        dataToServer="c2";

    }else{
        dataToServer="c3";
    }

    let formData= new FormData();
    formData.append("shop", dataToServer);

    console.log(location);
    axios.post("/php_html_tadeja/server.php", formData)
   
    .then( function(submitOrders){
        let binalikServer=submitOrders.data;

        if(binalikServer==1){
            console.log("1");
            document.getElementById("response1").style.color="orange";
            document.getElementById("response1").innerHTML="Your order is Chicken Joy";
        }else if(binalikServer==2){
            console.log("2");
            document.getElementById("response1").style.color="red";
            document.getElementById("response1").innerHTML="Your order is Coke";
        } else{
            console.log("none");
            document.getElementById("response1").style.color="green";
            document.getElementById("response1").innerHTML="WALA KA PANG ORDER!!!!";
        }
    });

}


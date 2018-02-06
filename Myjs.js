var person1 = {
    name: "nikhil",
    age: 22,
    company: "Helios Web Services",
    college: "Poornima University",
    Interest: "Football , Coding and Lot's of Other Stuff"
};

var person2 ={
    name: "ayushi",
    age: 21,
    company: "Helios Web Services",
    college: "Poornima University",
    Interest: "Cooking and All..."
};

var person3 ={
    name: "Sameer",
    age: 35,
    company: "Helios Web Services",
    college: "XYZ College",
    Interest: "Teaching and Listening Music"
};

var person4 ={
    name: "Udit",
    age: 25,
    company: "Helios Web Services",
    college: "ABC College",
    Interest: "Eating Kota kachori"
};

var person5 ={
    name: "Praveen",
    age: 25,
    company: "Helios Web Services",
    college: "XYZ-ABC College",
    Interest: "Data Not Shown....."
};

function checker(val){

    if(val==1){
        return person1;
    }
    else if(val==2){
        return person2;
    }
    else if(val==3){
        return person3;
    }
    else if(val==4){
        return person4;
    }
    else if(val==5){
        return person5;
    }

}


$(document).ready(function(){
    $(".myForm").hide();
    $(".divHider").click(function(){
        var val=$(this).attr('div-data');
        console.log('@@Value : '+val);
        var person = checker(val);
        $(this).children().children().children().show();
        document.getElementById(val).innerHTML = person.name+"<br />"+person.age+"<br />"+person.company+"<br />"+person.college+"<br />"+person.Interest;
        $(".common").removeClass("col-lg-7");
        $(this).children().addClass("col-lg-7");

            $(".divHider").not(this).children().children().children().hide();


    });
 /*
    $("#d5").click(function(){
        $("#myForm5").show();
        //alert("This is show");
        document.getElementById("f5").innerHTML = person5.name+"<br />"+person5.age+"<br />"+person5.company+"<br />"+person5.college+"<br />"+person5.Interest;
        $(".common").removeClass("col-lg-7");
        $("#div5").parent().parent().addClass("col-lg-7");
        $("#div5").hide();
        $(".divHider").click(function(){
            //alert("This is hide");
            $("#div5").show();
            $("#myForm5").hide();
        });

    });

    // $(".divHider").click(function(){
    //     alert("This is hide");
    //     $("this").not();
    //     $("#div5").show();
    //     $("#myForm5").hide();
    // });
*/

});

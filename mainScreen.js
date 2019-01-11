var btnBackToTheBeginningFlag = 0 ;
$(document).ready(function(){
    $(".btn_shape").click(function(){
        $(".btn_shape").find("circle").removeClass("choose_shape");
        $(this).find("circle").addClass("choose_shape");
    }) 
})
function showHideProperty(id) {

    var style = document.getElementById(id).style.opacity ;
    if (style === "0"){
        document.getElementById(id).style.opacity = "1";
        btnBackToTheBeginningFlag = btnBackToTheBeginningFlag -1;

    } else {
        document.getElementById(id).style.opacity = "0";
        btnBackToTheBeginningFlag = btnBackToTheBeginningFlag +1;
    }

    if(btnBackToTheBeginningFlag > 0){
        document.getElementById('btn-begin2').style.display = "block";
        document.getElementById('btn-begin1').style.display = "none";
    } else{
        document.getElementById('btn-begin2').style.display = "none";
        document.getElementById('btn-begin1').style.display = "block";
    }

}
   

function backToTheBeginning() {
   // get all element and set opacity is 1. hide btn-begin 2
    var ids = ['s1.1','s1.2','s1.3','s1.4','s1.5','s1.6','s2.1','s2.2','s2.3','s2.4','s2.5','s2.6','s3.1','s3.2', 's3.3','s3.4',
                            's3.5','s3.6', 's4.1','s4.2','s4.3','s4.4','s4.5','s4.6','s5.1','s5.2','s5.3','s5.4','s5.5','s5.6'];

    for (var i in ids) {
        document.getElementById(ids[i]).style.opacity = "1";
    }
    document.getElementById('btn-begin2').style.display = "none";
    document.getElementById('btn-begin1').style.display = "block";
    btnBackToTheBeginningFlag = 0 ;
}

function showLightBox(_id) {
    var id = '#' + _id;
    $(id).modal();
}

function closeLightBox(_id) {
    var id = '#' + _id;
    $(id).modal('hide');
}

function backToTablePage() {
    $("#divBody").css("display","block");
    $("#divBody2").css("display","none");
    $(".choose_shape").removeClass("choose_shape");

}

function goToViewPage() {
}

function goToDetailPage(id) {

    $("#divBody").css("display","none");
    $("#divBody2").css("display","block");
    switch(id){
        case "poly1":
            $("#shape1_button_H").find("circle").addClass("choose_shape");
            g_playGround.getShape('shape1_button_H');
            break;
        case "poly2":
            $("#shape2_button_H").find("circle").addClass("choose_shape");
            g_playGround.getShape('shape2_button_H');
            break;   
        case "poly3":
            $("#shape3_button_H").find("circle").addClass("choose_shape");
            g_playGround.getShape('shape3_button_H');
            break;
        case "poly4":
            $("#shape4_button_H").find("circle").addClass("choose_shape");
            g_playGround.getShape('shape4_button_H');
            break;
        case "poly5":
            $("#shape5_button_H").find("circle").addClass("choose_shape");
            g_playGround.getShape('shape5_button_H');
            break;     
    }

	g_playGround.displayShape();
}






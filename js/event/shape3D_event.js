var g_playGround;

// declare event
$(document).ready(function() {
	g_playGround = new PlayGround();
	g_playGround.init();
});

var PlayGround = function(){
}

PlayGround.prototype.init = function() {
	this.settings();
    this.bindUIActions();
    
}

PlayGround.prototype.settings = function(){
    this.mainSvg = $('#main_svg');
    this.btnShow = $(".btn_shape");
    this.eventDrag = $("#event_drag");
    this.btnDeploy = $("#btn_deploy");
}

PlayGround.prototype.bindUIActions = function(){
    this.btnShow.click(this.btnShowClick.bind(this));
    this.handleRotateEvent();
    this.btnDeploy.click(this.btnDeployClick.bind(this));
}

PlayGround.prototype.btnShowClick = function(_e){
    var target = _e.currentTarget;

	var id = $(target).attr('id');

	this.getShape(id);

	this.displayShape();
}

PlayGround.prototype.getShape = function(id){
    var shape;

    switch(id){
        case 'shape2_button_H':
            shape = new Cube(180);
            break;
        case 'shape1_button_H':
			shape = new TriangularPyramid(250);
            break;
        case 'shape3_button_H':
            shape = new RegularPolyhedrin(200);
            break;
        case 'shape4_button_H':
            shape = new Dodecahedron(100);
            break;
        case 'shape5_button_H':
            shape = new Icosahedron(130);
            break;
    }

    if (shape != undefined) {
		this.shape = shape;
	}
}

PlayGround.prototype.displayShape = function() {
	if (!this.shape) return;

	this.mainSvg.empty();
	this.mainSvg.append(this.shape.elm);
	this.shape.initDraw();
}

PlayGround.prototype.handleRotateEvent = function() {

	var prevX = 0;
	var prevY = 0;
   
	this.eventDrag.draggable({
        start: function( event, ui ) {
			if (!g_playGround.shape) return;

            prevX = event.pageX;
            prevY = event.pageY;
        },
        drag: function( event, ui ) {
			if (!g_playGround.shape) return;

            var x = event.pageX;
            var y = event.pageY;
	
			g_playGround.shape.transformY((prevX-x)/6);
			g_playGround.shape.transformX((y-prevY)/6);

			prevX = x;
			prevY = y;
        }
    });
}

PlayGround.prototype.btnDeployClick = function(){
    g_playGround.shape.initDeploy();
}

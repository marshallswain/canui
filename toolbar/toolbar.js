steal.apps('phui/menu','jquery/event/default').then(function(){
   Phui.Menu({
		CHILD_SELECTOR : "ul>li"
	}).
    extend("Phui.Toolbar",
    {
       defaults : {
           MENU_TYPE: Phui.Menu,
           POSITION_TOP : false,
           SELECT_TRIGGER : "click",
           BUTTON_CLASS_NAMES : "button"
       }
   },
   {
       init : function(){
           var menuType = this.Class.MENU_TYPE;
           //make it look pretty
           this.element.addClass(this.Class.CLASS_NAMES)
               .children("ul").addClass(this.Class.CHILD_CLASS_NAMES)
               .children("li").addClass(this.Class.BUTTON_CLASS_NAMES).each(function(){
                   //need to keep a reference to each menu
				   var el = $(this);
				   el.data("menu-element", el.find(">ul, >.ui-menu").mixin(menuType))
               })
       },
       calculateSubmenuPosition : function(el, ev){
	   		var offset = el.offset();
		    offset.top += el.outerHeight();
			return offset;
	   }
   })
   
   Phui.Toolbar({
       CLASS_NAMES: "ui-tabs ui-widget ui-widget-content ui-corner-all",
       MENU_TYPE: Phui.UI.Menu,
       CHILD_CLASS_NAMES: "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all ui-toolbar",
       BUTTON_CLASS_NAMES: "ui-state-default ui-corner-all"
   }).
   extend("Phui.UI.Toolbar",{})
   

});
$(function() {
    // Draggable
    $(".draggable").draggable();
    
    // Droppable
    $(".droppable").droppable({
        drop: function(event, ui) {
            $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
        }
    });
    
    // Resizable
    $(".resizable").resizable();
    
    // Selectable
    $(".selectable").selectable();
});

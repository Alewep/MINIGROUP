function option_click($value){
    let option = document.createElement("option");
    option.value = button.value;
    option.text = button.value;

    option.addEventListener('mousedown',function(event){
        if (event.shiftKey) return;
        event.preventDefault();
        this.focus();
        var scroll = this.scrollTop;
        event.target.selected = !event.target.selected;
        this.scrollTop = scroll;
        // make sure that other listeners (like Vue) pick up on the change
        // even though we prevented the default.
        this.dispatchEvent(new Event("change"));
    })

    return option
}

const select_model = document.querySelector("#model > select");
const input_model = document.querySelector("#model > input[type=number]");
const constraints = document.querySelector("#model > #constraint")


fetch('/models')
  .then((response) => response.json())
  .then(function(data){
    for(let model of data['models']){
        let option = document.createElement('option');
        option.value = model['name']
        option.text = model['name']

        select_model.appendChild(option);
    }
    
    

  });


select_model.addEventListener('change',function(e){
  while (constraints.hasChildNodes()) {
    constraints.removeChild(constraints.lastChild);
  }


  fetch(`/model/${e.target.value}`)
  .then((response) => response.json())
  .then(function(data){
    if(data["size"] == "n"){
      input_model.value = 2;
      input_model.disabled = false;
    }
    else {
      input_model.value = data["size"];
      input_model.disabled = true;
    }

    for(let i=0; i<data["constraints"].length;++i)
    { 
      let constraint = data["constraints"][i]
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = i;
      checkbox.name = "constraint[]"
      checkbox.checked = constraint["activated"];

      let label = document.createElement("label");
      label.textContent = constraint["comment"];
      if (constraint["constraint"] != undefined)
        label.title = constraint["constraint"];
      else
        label.title = constraint["solve"];

      constraints.appendChild(checkbox);
      constraints.appendChild(label);
      constraints.appendChild(document.createElement("br"));
    }

  });

})
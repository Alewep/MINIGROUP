function parseDzn(fileContent) {

  const lines = fileContent.replace(new RegExp('^\\%.*$', 'mg'), '').split(";");
  const data = {};
  for (let line of lines) {
    line = line.trim();
    
    if (line === "") {
      continue;
    }
   
    const parts = line.split("=");
    const key = parts[0].trim();
    let value = parts[1].trim();
    
  
    
    if (value.startsWith("{") && value.endsWith("}")) {
      value = value.substring(1, value.length - 1)
        .split(",")
        .map(v => v.trim());
      
      data[key] = value;
    } else if (value.startsWith("[") && value.endsWith("]")) {
        if (value.includes("{") || value.includes("}")) {
          let ouv = value.indexOf("{")
          let arr = []
          while(ouv!=-1){
            ferm = value.indexOf("}")
            let rec = ("v="+value.substring(ouv,ferm+1))
            arr.push(parseDzn(rec)["v"])
            value = value.substring(ferm+1)
            ouv = value.indexOf("{")
          }
          value = arr
        }
        else {
          value = value.substring(1, value.length - 1)
          .split(",").map(setStr => setStr.trim());
        }
    
      
      data[key] = value;
    } else if (value.startsWith("[|") && value.endsWith("|]")) {
      value = value.substring(2, value.length - 2)
        .split("|")
        .map(setStr => setStr.trim())
        .map(setStr => setStr.substring(1, setStr.length - 1)
          .split(","));
      
      data[key] = value;
    } else {
      data[key] = value;
    }
  }
  
  return data;
}

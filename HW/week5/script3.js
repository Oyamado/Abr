

function add(){
    var a = document.querySelector("#name").value;
    var b = document.querySelector("#surname").value;
    var c = document.querySelector("#faculty").value;
    //console.log(c);
    //c=c.style.fontWeight='bold';
    

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.append(a);
    td2.append(b);
    td3.append(c);
    
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    
    var table = document.querySelector('#students');
    table.append(tr);
}

document.querySelector("#addStudent").addEventListener('click',add);

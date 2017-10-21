let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Aktau"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};

let coun = document.querySelector("#countries");

let city = document.querySelector("#cities");

for (var index = 0; index < countries.length; index++) {
    var s = document.createElement('option');
    s.append(countries[index]);
    coun.append(s);
}
function c(){
        while(city.firstChild) { 
            city.removeChild(city.firstChild);
        }
    if(coun.value== "Kazakhstan"){
        for (var index = 0; index < cities_by_country.Kazakhstan.length; index++) {
            var s = document.createElement('option');
            s.append(cities_by_country.Kazakhstan[index]);
            city.append(s);
        }

    }
    else if(coun.value=="Russia"){
        for (var index = 0; index < cities_by_country.Russia.length; index++) {
            var s = document.createElement('option');
            s.append(cities_by_country.Russia[index]);
            city.append(s);
        }
    }
    else if(coun.value=="England"){
        for (var index = 0; index < cities_by_country.England.length; index++) {
            var s = document.createElement('option');
            s.append(cities_by_country.England[index]);
            city.append(s);
        }
    }
    else if(coun.value=="France"){
        for (var index = 0; index < cities_by_country.France.length; index++) {
            var s = document.createElement('option');
            s.append(cities_by_country.France[index]);
            city.append(s);
        }
    }
}

document.querySelector('select').addEventListener('click',c);
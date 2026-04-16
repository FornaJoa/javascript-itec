const users = [{"id":1,"first_name":"Horton","last_name":"Depke","email":"hdepke0@digg.com","gender":"Male","ip_address":"239.40.10.6"},
{"id":2,"first_name":"Gerrard","last_name":"Gobert","email":"ggobert1@sakura.ne.jp","gender":"Male","ip_address":"188.51.103.23"},
{"id":3,"first_name":"Ethelyn","last_name":"Le Batteur","email":"elebatteur2@purevolume.com","gender":"Female","ip_address":"117.194.129.52"},
{"id":4,"first_name":"Ulrich","last_name":"Gillitt","email":"ugillitt3@bigcartel.com","gender":"Male","ip_address":"203.155.53.60"},
{"id":5,"first_name":"Tanney","last_name":"Luffman","email":"tluffman4@yelp.com","gender":"Male","ip_address":"121.244.14.196"},
{"id":6,"first_name":"Dannie","last_name":"Livard","email":"dlivard5@xing.com","gender":"Male","ip_address":"94.64.160.219"},
{"id":7,"first_name":"Paul","last_name":"Prantoni","email":"pprantoni6@engadget.com","gender":"Male","ip_address":"108.253.208.165"},
{"id":8,"first_name":"Dallas","last_name":"Found","email":"dfound7@so-net.ne.jp","gender":"Male","ip_address":"211.187.108.82"},
{"id":9,"first_name":"Petunia","last_name":"Towsey","email":"ptowsey8@nasa.gov","gender":"Female","ip_address":"252.198.201.63"},
{"id":10,"first_name":"Benedikta","last_name":"Gabbott","email":"bgabbott9@adobe.com","gender":"Female","ip_address":"94.61.204.56"},
{"id":11,"first_name":"Ginnie","last_name":"Bodycombe","email":"gbodycombea@tiny.cc","gender":"Female","ip_address":"74.217.44.236"},
{"id":12,"first_name":"Lebbie","last_name":"Petz","email":"lpetzb@about.com","gender":"Female","ip_address":"41.103.93.242"},
{"id":13,"first_name":"Ilyssa","last_name":"Speenden","email":"ispeendenc@phoca.cz","gender":"Female","ip_address":"40.23.196.138"},
{"id":14,"first_name":"Adrianna","last_name":"Tschiersch","email":"atschierschd@earthlink.net","gender":"Female","ip_address":"91.167.46.169"},
{"id":15,"first_name":"Dolph","last_name":"McCullouch","email":"dmccullouche@github.com","gender":"Non-binary","ip_address":"3.72.2.71"},
{"id":16,"first_name":"Eulalie","last_name":"Simonett","email":"esimonettf@merriam-webster.com","gender":"Female","ip_address":"124.15.129.248"},
{"id":17,"first_name":"Sofia","last_name":"Raiston","email":"sraistong@hp.com","gender":"Female","ip_address":"50.157.193.208"},
{"id":18,"first_name":"Ado","last_name":"Hinckley","email":"ahinckleyh@accuweather.com","gender":"Non-binary","ip_address":"114.145.126.107"},
{"id":19,"first_name":"Velma","last_name":"Ivantyev","email":"vivantyevi@nba.com","gender":"Female","ip_address":"13.179.61.75"},
{"id":20,"first_name":"Travus","last_name":"Yurenin","email":"tyureninj@cmu.edu","gender":"Male","ip_address":"206.187.68.197"},
{"id":21,"first_name":"Gladys","last_name":"Hecks","email":"ghecksk@wsj.com","gender":"Female","ip_address":"126.76.249.126"},
{"id":22,"first_name":"Dulce","last_name":"Verdun","email":"dverdunl@disqus.com","gender":"Female","ip_address":"60.113.54.200"},
{"id":23,"first_name":"Jena","last_name":"Janecek","email":"jjanecekm@slashdot.org","gender":"Female","ip_address":"1.166.125.178"},
{"id":24,"first_name":"Lacee","last_name":"Posnette","email":"lposnetten@posterous.com","gender":"Female","ip_address":"103.230.17.102"},
{"id":25,"first_name":"Kay","last_name":"Downer","email":"kdownero@ustream.tv","gender":"Female","ip_address":"230.154.35.89"},
{"id":26,"first_name":"Allina","last_name":"Neiland","email":"aneilandp@deliciousdays.com","gender":"Female","ip_address":"71.246.212.245"},
{"id":27,"first_name":"Carleton","last_name":"Hursthouse","email":"chursthouseq@elegantthemes.com","gender":"Male","ip_address":"102.160.207.84"},
{"id":28,"first_name":"Natty","last_name":"Quarry","email":"nquarryr@webnode.com","gender":"Male","ip_address":"181.2.190.145"},
{"id":29,"first_name":"Yorke","last_name":"Stoves","email":"ystovess@dmoz.org","gender":"Male","ip_address":"195.115.35.12"},
{"id":30,"first_name":"Leonie","last_name":"Hurrell","email":"lhurrellt@buzzfeed.com","gender":"Female","ip_address":"44.17.191.148"},
{"id":31,"first_name":"Raven","last_name":"Lount","email":"rlountu@bigcartel.com","gender":"Female","ip_address":"214.97.206.89"},
{"id":32,"first_name":"Beret","last_name":"O'Hanlon","email":"bohanlonv@ft.com","gender":"Female","ip_address":"33.192.21.255"},
{"id":33,"first_name":"Dalli","last_name":"Houson","email":"dhousonw@redcross.org","gender":"Agender","ip_address":"72.105.77.32"},
{"id":34,"first_name":"Tobi","last_name":"Master","email":"tmasterx@hexun.com","gender":"Bigender","ip_address":"146.119.208.213"},
{"id":35,"first_name":"Martyn","last_name":"Iffland","email":"mifflandy@comcast.net","gender":"Male","ip_address":"141.7.32.50"},
{"id":36,"first_name":"Anton","last_name":"Scarth","email":"ascarthz@sun.com","gender":"Male","ip_address":"3.76.246.85"},
{"id":37,"first_name":"Sara","last_name":"Bogace","email":"sbogace10@usa.gov","gender":"Female","ip_address":"166.112.196.189"},
{"id":38,"first_name":"Manya","last_name":"Gyurko","email":"mgyurko11@mayoclinic.com","gender":"Bigender","ip_address":"248.104.218.172"},
{"id":39,"first_name":"Cassie","last_name":"Blaxley","email":"cblaxley12@blogger.com","gender":"Female","ip_address":"25.185.39.168"},
{"id":40,"first_name":"Birch","last_name":"Klaessen","email":"bklaessen13@newsvine.com","gender":"Male","ip_address":"184.44.123.222"},
{"id":41,"first_name":"Pippo","last_name":"Viney","email":"pviney14@yahoo.com","gender":"Male","ip_address":"48.140.28.165"},
{"id":42,"first_name":"Barbey","last_name":"Cradduck","email":"bcradduck15@soundcloud.com","gender":"Female","ip_address":"146.39.231.112"},
{"id":43,"first_name":"Emily","last_name":"Grenfell","email":"egrenfell16@oracle.com","gender":"Genderfluid","ip_address":"15.7.22.113"},
{"id":44,"first_name":"Lamond","last_name":"Woodison","email":"lwoodison17@sogou.com","gender":"Male","ip_address":"71.213.14.192"},
{"id":45,"first_name":"Celestine","last_name":"Metrick","email":"cmetrick18@sciencedaily.com","gender":"Female","ip_address":"219.88.141.249"},
{"id":46,"first_name":"Evania","last_name":"Beernaert","email":"ebeernaert19@wired.com","gender":"Bigender","ip_address":"23.48.200.232"},
{"id":47,"first_name":"Cristina","last_name":"Girodon","email":"cgirodon1a@zimbio.com","gender":"Female","ip_address":"9.23.113.56"},
{"id":48,"first_name":"Gallagher","last_name":"Jahndel","email":"gjahndel1b@cbc.ca","gender":"Male","ip_address":"255.166.79.84"},
{"id":49,"first_name":"Leroi","last_name":"Bester","email":"lbester1c@usa.gov","gender":"Male","ip_address":"233.240.125.160"},
{"id":50,"first_name":"Ban","last_name":"Barnett","email":"bbarnett1d@webeden.co.uk","gender":"Male","ip_address":"39.34.140.244"}]

const idBuscado = parseInt(prompt("Ingrese el ID del usuario que desea buscar:"));
let encontrado = false;

for (let i = 0; i < users.length; i++) {
    const user = users[i]
    if(user.id == idBuscado){
        console.log(`Nombre: ${user.first_name}, Apellido: ${user.last_name}, Email: ${user.email}, Genero: ${user.gender}, IP: ${user.ip_address}`);
        encontrado = true;
    }
}

if(encontrado == false){
    console.log(`El id ${idBuscado} no existe`);
}

const generos = {}

for (let i = 0; i < users.length; i++){
    const user = users[i];
    
    if(generos[user.gender] == undefined){
        generos[user.gender] = 1;
    }else{
        generos[user.gender]++;
    }
}   

console.log(generos);
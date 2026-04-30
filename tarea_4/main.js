const usuarios = [{"id":1,"first_name":"Melosa","last_name":"Paske","bank":"Raiffeisen Regionalbank Matrei i.O. eGen","city":"Podstepki","country":"Russia","salary":4121,"expenses":4066},
{"id":2,"first_name":"Monica","last_name":"Nurden","bank":"Volksbank Köln Bonn eG","city":"Dmytrivka","country":"Ukraine","salary":2802,"expenses":1322},
{"id":3,"first_name":"Ronnica","last_name":"Boud","bank":"FIRST BANK","city":"Daszewice","country":"Poland","salary":3670,"expenses":3556},
{"id":4,"first_name":"Jelene","last_name":"Yes","bank":"Croí Laighean Credit Union Limited","city":"Peixing","country":"China","salary":1214,"expenses":1333},
{"id":5,"first_name":"Ilise","last_name":"Eckh","bank":"Europabank","city":"Boulaide","country":"Luxembourg","salary":4133,"expenses":3695},
{"id":6,"first_name":"Byron","last_name":"Spriddle","bank":"RENASANT BANK","city":"Ciyun","country":"China","salary":4118,"expenses":3063},
{"id":7,"first_name":"Caril","last_name":"Balderston","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Bojong","country":"Indonesia","salary":3547,"expenses":1955},
{"id":8,"first_name":"Nanci","last_name":"Matthewes","bank":"Quirin Privatbank AG","city":"Karanganyar","country":"Indonesia","salary":1113,"expenses":1086},
{"id":9,"first_name":"Gradey","last_name":"Osmund","bank":"FIRST NATIONAL BANK OF OMAHA","city":"Kyaka","country":"Tanzania","salary":3437,"expenses":2460},
{"id":10,"first_name":"Patricia","last_name":"Van Eeden","bank":"FEDERAL RESERVE BANK","city":"Gongrong","country":"China","salary":3684,"expenses":3436},
{"id":11,"first_name":"Rodina","last_name":"Dumphy","bank":"COLUMBIA STATE BANK","city":"Don Matías","country":"Colombia","salary":1540,"expenses":1076},
{"id":12,"first_name":"Maybelle","last_name":"Teodorski","bank":"FIFTH THIRD BANK","city":"Kapasan","country":"Indonesia","salary":2403,"expenses":2960},
{"id":13,"first_name":"Rivkah","last_name":"Tomovic","bank":"BANK OF NORTH CAROLINA","city":"Beicheng","country":"China","salary":1132,"expenses":2802},
{"id":14,"first_name":"Piper","last_name":"Bedinham","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Capitão Poço","country":"Brazil","salary":4659,"expenses":3034},
{"id":15,"first_name":"Jack","last_name":"Burnside","bank":"Raiffeisenbank Hochfranken West eG","city":"Huangascar","country":"Peru","salary":3552,"expenses":1931},
{"id":16,"first_name":"Kimbra","last_name":"Abbess","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Rožna Dolina","country":"Slovenia","salary":3748,"expenses":2013},
{"id":17,"first_name":"Yevette","last_name":"Player","bank":"Raiffeisenbank Zirbenland eGen","city":"Sibaté","country":"Colombia","salary":2610,"expenses":2124},
{"id":18,"first_name":"Cassandry","last_name":"Bolsover","bank":"Bank of Ireland Mortgage Bank Unlimited Company","city":"Xianren","country":"China","salary":2058,"expenses":3903},
{"id":19,"first_name":"Normie","last_name":"Tibbs","bank":"Bank Ten Cate & Cie. N.V.","city":"Santa Cruz","country":"Chile","salary":1609,"expenses":2794},
{"id":20,"first_name":"Lothario","last_name":"Backshell","bank":"Aktivbank Aktiengesellschaft","city":"Tromsø","country":"Norway","salary":2375,"expenses":2444},
{"id":21,"first_name":"Myron","last_name":"Le Grys","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Nyalindung","country":"Indonesia","salary":2200,"expenses":3991},
{"id":22,"first_name":"Blaine","last_name":"Hackwell","bank":"BANK OF AMERICA","city":"Luchenza","country":"Malawi","salary":2977,"expenses":3354},
{"id":23,"first_name":"Deonne","last_name":"Dowgill","bank":"FIRST COMMUNITY BANK","city":"Dasha","country":"China","salary":2585,"expenses":1103},
{"id":24,"first_name":"Vassili","last_name":"Tudor","bank":"CASSA LOMBARDA - S.P.A.","city":"Los Cóndores","country":"Argentina","salary":3044,"expenses":2805},
{"id":25,"first_name":"Sampson","last_name":"Luten","bank":"Raiffeisenbank Kössen-Kirchdorf eGen","city":"Arendal","country":"Norway","salary":3681,"expenses":4346},
{"id":26,"first_name":"Hoebart","last_name":"Potts","bank":"Raiffeisenbank Mittelkärnten eG","city":"Nagykanizsa","country":"Hungary","salary":1407,"expenses":3288},
{"id":27,"first_name":"Mathian","last_name":"Flemyng","bank":"UNITED COMMUNITY BANK","city":"Byala Slatina","country":"Bulgaria","salary":2981,"expenses":3601},
{"id":28,"first_name":"Jeremias","last_name":"Cars","bank":"TRUSTMARK NATIONAL BANK","city":"Salvacion","country":"Philippines","salary":3760,"expenses":1617},
{"id":29,"first_name":"Ema","last_name":"Watterson","bank":"KELER Központi Értéktár Zártkörűen Működő Részvénytársaság","city":"Kamieniec Podolski","country":"Ukraine","salary":1975,"expenses":758},
{"id":30,"first_name":"Olivie","last_name":"Bootman","bank":"Bank Spółdzielczy w Gąbinie","city":"Xiaxindian","country":"China","salary":2144,"expenses":1498},
{"id":31,"first_name":"Karole","last_name":"Clineck","bank":"Caja Rural Central, Sociedad Cooperativa de Crédito","city":"Shiqiao","country":"China","salary":3697,"expenses":3589},
{"id":32,"first_name":"Townie","last_name":"Eddolls","bank":"Raiffeisenbank Wörthersee-Landskron-Gegendtal eG","city":"Altuf’yevskiy","country":"Russia","salary":4208,"expenses":2031},
{"id":33,"first_name":"Maximilian","last_name":"Dawnay","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Akure","country":"Nigeria","salary":3716,"expenses":2589},
{"id":34,"first_name":"Vern","last_name":"Rountree","bank":"Nordnet Bank AB","city":"Circa","country":"Peru","salary":3456,"expenses":3256},
{"id":35,"first_name":"Hally","last_name":"Yakushkev","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Biała Piska","country":"Poland","salary":4648,"expenses":615},
{"id":36,"first_name":"Donelle","last_name":"Predohl","bank":"HSBC BANK","city":"Eastern Suburbs Mc","country":"Australia","salary":4040,"expenses":1656},
{"id":37,"first_name":"Eb","last_name":"Bamborough","bank":"Caisse d'Epargne CEPAC","city":"Shawnee Mission","country":"United States","salary":2402,"expenses":3155},
{"id":38,"first_name":"Fidelia","last_name":"Brimicombe","bank":"Sparkasse Prignitz","city":"Banjar Bau Kawan","country":"Indonesia","salary":1053,"expenses":619},
{"id":39,"first_name":"Dunc","last_name":"MacMaster","bank":"FIRSTBANK","city":"Taibao","country":"China","salary":2912,"expenses":1968},
{"id":40,"first_name":"Elbert","last_name":"Martyntsev","bank":"COMPASS BANK","city":"Río Ceballos","country":"Argentina","salary":4324,"expenses":4419},
{"id":41,"first_name":"Buffy","last_name":"Gilliver","bank":"PNC BANK","city":"Namyangju","country":"South Korea","salary":1067,"expenses":2761},
{"id":42,"first_name":"Baron","last_name":"Dorian","bank":"FARMERS & MERCHANTS BANK","city":"Suya","country":"Nigeria","salary":3241,"expenses":3714},
{"id":43,"first_name":"Ezri","last_name":"Penkethman","bank":"Dierickx Leys Private Bank","city":"Bumpe","country":"Sierra Leone","salary":4678,"expenses":984},
{"id":44,"first_name":"Sasha","last_name":"Prayer","bank":"Sparkasse Burbach-Neunkirchen Zweckverbandssparkasse der Gemeinden Burbach und Neunkirchen","city":"Dongtuan","country":"China","salary":2916,"expenses":1196},
{"id":45,"first_name":"Neall","last_name":"Litchfield","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Sancang","country":"China","salary":3090,"expenses":1517},
{"id":46,"first_name":"Jaye","last_name":"Tattershaw","bank":"BANK OF AMERICA","city":"Pecka","country":"Czech Republic","salary":3299,"expenses":3524},
{"id":47,"first_name":"Basilius","last_name":"Crippen","bank":"FIRST NATIONAL BANK","city":"Bludov","country":"Czech Republic","salary":2033,"expenses":1690},
{"id":48,"first_name":"Nissa","last_name":"Manuelli","bank":"Bank Spółdzielczy w Głownie","city":"Concepción del Bermejo","country":"Argentina","salary":2775,"expenses":3096},
{"id":49,"first_name":"Kristian","last_name":"Heyfield","bank":"HSBC BANK","city":"Nueva Italia","country":"Paraguay","salary":1987,"expenses":4466},
{"id":50,"first_name":"Upton","last_name":"Fawson","bank":"Sparkasse Jena-Saale-Holzland","city":"Planaltina","country":"Brazil","salary":4343,"expenses":2213}]

function balanceMensual(id) {
    const user = usuarios.find(u => u.id === id);
    const balance = user.salary - user.expenses;
    return {
        nombre: `${user.first_name} ${user.last_name}`,
        banco: user.bank,
        ahorro: balance
    };
}

const id = parseInt(prompt('Ingrese el ID de la persona:'));
console.log(balanceMensual(id));


function clasificacionAhorro(ahorro){
    return ahorro < 500 
    ? 'Ahorro bajo' 
    : ahorro <= 1500 
    ? 'Ahorro medio' 
    : 'Ahorro alto';
}  

usuarios.forEach(user => {
    const ahorro = balanceMensual(user.id).ahorro;
    console.log(`${user.first_name} ${user.last_name}: ${clasificacionAhorro(ahorro)}`);
});

const agruparPor = (array, clave) => {
  const resultado = {};
  array.forEach((item) => {
    const valorClave = item[clave];
    if (!resultado[valorClave])
      resultado[valorClave] = {
        [clave]: valorClave,
        cantidadUsuarios: 0,  
        ahorroTotal: 0       
      };
    resultado[valorClave].cantidadUsuarios++;
    resultado[valorClave].ahorroTotal += balanceMensual(item.id).ahorro;  });
  return resultado;
}

const porBanco = agruparPor(usuarios, 'bank');
const porPais = agruparPor(usuarios, 'country');

console.log(porBanco);
console.log(porPais);


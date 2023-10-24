/*#################################################################*/
/* FUNCION PARA SABER SI UNA QUINIELA TIENE MAS DOS CARACTERES EN EN CADA POSICION*/
/*#################################################################*/
function tieneMasDeDosCaracteres(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 2) {
      return true;
    }
  }
  return false;
}

/*#################################################################*/
/* FUNCION QUE GENERA EL ARRAY ORIGINAL DE DOBLES O TRIPLES EN SUBARRAYS*/
/*#################################################################*/
function generateSubArrays(arr) {
  let quinielas = [];
  function generateCombinations(currentIndex, currentArray) {
    if (currentIndex === arr.length) {
      quinielas.push([...currentArray]);
      return;
    }
    const currentElement = arr[currentIndex];
    if (currentElement.length > 1) {
      const options = currentElement.split("");
      for (const option of options) {
        const newArray = [...currentArray];
        newArray[currentIndex] = option;
        generateCombinations(currentIndex + 1, newArray);
      }
    } else {
      const newArray = [...currentArray];
      newArray[currentIndex] = currentElement;
      generateCombinations(currentIndex + 1, newArray);
    }
  }
  generateCombinations(0, []);
  return quinielas;
}

/*#################################################################*/
/* FUNCION CONFIGURACION DE TIEMPO Y FEHCA DE LOS REGISTROS*/
/*#################################################################*/
function setConfigurationTimeDate() {
  var date = new Date();
  var getDate = date.toLocaleDateString();
  var getTime1 = date.toLocaleTimeString();
  var timestamp = Date.now();
  var registerTimeDate = getDate + " " + getTime1;

  return {
    timestamp: timestamp,
    registerTimeDate: registerTimeDate,
  };
}

/*#################################################################*/
/* CONFIGURACION DE FIREBASE */
/*#################################################################*/
function setConfigurationFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyARFCG60quhcz-6yPdqsEYRuZtKUm3_C_w",
    authDomain: "prueba-50ce9.firebaseapp.com",
    databaseURL: "https://prueba-50ce9-default-rtdb.firebaseio.com",
    projectId: "prueba-50ce9",
    storageBucket: "prueba-50ce9.appspot.com",
    messagingSenderId: "760827977766",
    appId: "1:760827977766:web:38359a83f835f23a1006e7",
  };
  return firebaseConfig;
}

/*#################################################################*/
/* GENERAR RAMDON-UUID */
/*#################################################################*/
function generarUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/*#################################################################*/
/* CONFIGURAR PARA ACTIVAR QUINIELAS */
/*#################################################################*/
function statusPage() {
  const status = true; // true para activar quinielas al publico
  return status;
}

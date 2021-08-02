//Vector de estados
let state_vector = [0, 0, 0, 0, 0, 0, 0, 0];

// Contador de iteraciones
let n = 1;

function reflex_agent(location, state) {
  if (state == "DIRTY") return "CLEAN";
  else if (location == "A") return "RIGHT";
  else if (location == "B") return "LEFT";
}

function count_visited(state) {
  switch (state) {
    case "ADD":
      state_vector[0]++;
      document.getElementById("c1").innerHTML = state_vector[0];
      break;
    case "ADC":
      state_vector[1]++;
      document.getElementById("c2").innerHTML = state_vector[1];
      break;
    case "ACD":
      state_vector[2]++;
      document.getElementById("c3").innerHTML = state_vector[2];
      break;
    case "ACC":
      state_vector[3]++;
      document.getElementById("c4").innerHTML = state_vector[3];
      break;
    case "BDD":
      state_vector[4]++;
      document.getElementById("c5").innerHTML = state_vector[4];
      break;
    case "BDC":
      state_vector[5]++;
      document.getElementById("c6").innerHTML = state_vector[5];
      break;
    case "BCD":
      state_vector[6]++;
      document.getElementById("c7").innerHTML = state_vector[6];
      break;
    case "BCC":
      state_vector[7]++;
      document.getElementById("c8").innerHTML = state_vector[7];
      break;
  }
}

function test(states) {
  var location = states[0];
  var state = states[0] == "A" ? states[1] : states[2];
  let s1 = states[1] == "DIRTY" ? "D" : "C";
  let s2 = states[2] == "DIRTY" ? "D" : "C";

  var action_result = reflex_agent(location, state);
  document.getElementById("steps").innerHTML += "<br>Location: "
    .concat(location)
    .concat(" | Action: ")
    .concat(action_result);
  count_visited(`${states[0]}${s1}${s2}`);
  if (action_result == "CLEAN") {
    if (location == "A") states[1] = "CLEAN";
    else states[2] = "CLEAN"; // Limpiar B
  } else if (action_result == "RIGHT") states[0] = "B";
  else states[0] = "A"; // Mover a la izquierda

  //Maximo de iteraciones para obtener el resultado deseado
  if (n >= 13){
    alert("Terminado")
    return;
  };
  n++;

  // Cuando ambos espacios esten limpios, ensuciarlos para garantizar ciclos regulares
  if (states[1] == "CLEAN" && states[2] == "CLEAN") {
    if (n <= 13) count_visited(`${states[0]}CC`);
    states[1] = "DIRTY";
    states[2] = "DIRTY";
  }
  setTimeout(function () {
    test(states);
  }, 1000);
}

var states = ["A", "DIRTY", "DIRTY"];
test(states);

var usuario = prompt("Cual es tu peso");
var planeta = prompt("Elige tu planeta\n1 es marte, 2 es jupitert");
var peso = parseInt(usuario);
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24-8;
var peso_final; 
if(planeta ==1) {
    peso_final = peso * g_marte / g_tierra;
}
else {
    peso_final = peso * g_jupiter / g_tierra; 
}
peso_final = parseInt(peso_final);
document.write("Tu peso en marte es <strong>" + peso_final + " kilos</strong>");
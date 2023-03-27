ArrayList<String> errores = new ArrayList<String>();
                
if (!txtNombre.getText().toString().matches(ValidacionUtil.TEXTO)) {
    errores.add("- El nombre es de 2 a 20 caracteres");
}

if(!txtApellido.getText().toString().matches(ValidacionUtil.TEXTO)) {
    errores.add("- El apellido es de 2 a 20 caracteres");
}

if(errores.isEmpty() == false){
    mensajeAlert(String.join("\n", errores ));
    return;
}


//// API
asd regstrare


///


 mensajeAlert("Todos los datos son correctos");





////////////
if (errores.isEmpty()) {
    mensajeAlert("Todos los datos son correctos");
} else {
    mensajeAlert(String.join("\n", errores ));
}

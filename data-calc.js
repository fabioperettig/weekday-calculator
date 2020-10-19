function calculate() {
    var dia=document.getElementById("dia").value;
    var mes=document.getElementById("mes").value;
    var ano=document.getElementById("ano").value;
    
    var d = parseFloat(dia);
    var m = parseFloat(mes);
    var a = parseFloat(ano);


    var k = d+2*m+(3*(m+1)/5)+a+a/4-a/100+a/400+2

    var semana = k%7;

    var final = Math.trunc(semana)

    


    if(final == 0) {
    document.getElementById("result").innerHTML="Sábado";
    } else if (final ==1){ document.getElementById("result").innerHTML="Domingo";
    } else if (final ==2){ document.getElementById("result").innerHTML="Segunda";
    } else if (final ==3){ document.getElementById("result").innerHTML="terça";
    } else if (final ==4){ document.getElementById("result").innerHTML="quarta";
    } else if (final ==5){ document.getElementById("result").innerHTML="quinta";
    } else if (final ==6){ document.getElementById("result").innerHTML="sexta";
    }
}

//d+2m+[3*(m+1)/5]+a+a/4-a/100+a/400+2//

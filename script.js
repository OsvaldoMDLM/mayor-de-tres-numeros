function mayor() {
    
    var n1 = parseInt(document.getElementById('numero1').value);
    var n2 = document.getElementById('numero2').value;
    var n3 = parseInt(document.getElementById('numero3').value);
    const DResultado = document.getElementById('resultado');
    
    if(n1 == n2 && n2 == n3)
    {
        DResultado.innerHTML = alert("todos los numeros son iguales");
        document,location.reload();
    }
    else 
    {
        if(n1 == n3)
        {
            DResultado.innerHTML = alert("(numero 1 y numero 3) son iguales");
            document,location.reload();
        }
        else
        {
            if(n1 == n2 && n2 == n3)
            {
                DResultado.innerHTML = alert("los tres numeros son iguales");
                document,location.reload();
            }
            else 
            {
                if(n1 == n2)
                {
                    DResultado.innerHTML = alert("(numero 1 y numero 2) son iguales");
                    document,location.reload();
                }
                else
                {
                    if(n2==n3)
                    {
                        DResultado.innerHTML = alert("(numero 2 y numero 3) son iguales");
                        document,location.reload();
                    }
                    else
                    {
                            var mayor = Math.max(n1,n2,n3);
                            DResultado.innerHTML = `<p>El Mayor es:</p><p>${mayor}</p>`;
                    }
                }
            }
        }
    }
}

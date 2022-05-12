package cl.rmgsoft.utils;

public class RutUtil {
	public static String getRutSinFormato(String rut) {
		return rut.replace("-", "").replace(".", "");
	}
	
	public static String formatRut(String rut) {
		String sRut1 = rut;      //contador de para saber cuando insertar el . o la -
	    int nPos = 0; //Guarda el rut invertido con los puntos y el guión agregado
	    String sInvertido = ""; //Guarda el resultado final del rut como debe ser
	    String sRut = "";
	    for(int i = sRut1.length() - 1; i >= 0; i-- )
	    {
	        sInvertido += sRut1.charAt(i);
	        if (i == sRut1.length() - 1 )
	            sInvertido += "-";
	        else if (nPos == 3)
	        {
	            sInvertido += ".";
	            nPos = 0;
	        }
	        nPos++;
	    }
	    for(int j = sInvertido.length() - 1; j >= 0; j-- )
	    {
	        //if (sInvertido.charAt(sInvertido.length() - 1) != ".")
	    	if (!".".equals(sInvertido.charAt(sInvertido.length() - 1)) )
	            sRut += sInvertido.charAt(j);
	        else if (j != sInvertido.length() - 1 )
	            sRut += sInvertido.charAt(j);
	    }
	    //Pasamos al campo el valor formateado
		
		return sRut.toUpperCase();
	}
}

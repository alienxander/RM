<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%-- <%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>--%>
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous"></script>
<style type="text/css">
	body {
		margin: 0;
		padding: 0;
		background-color: #17a2b8;
		height: 100vh;
	}
	
	#login .container #login-row #login-column #login-box {
		margin-top: 120px;
		max-width: 600px;
		height: 320px;
		border: 1px solid #9C9C9C;
		background-color: #EAEAEA;
	}
	
	#login .container #login-row #login-column #login-box #login-form {
		padding: 20px;
	}
	
	#login .container #login-row #login-column #login-box #login-form #register-link
		{
		margin-top: -85px;
	}
</style>
</head>
<body>
	<div id="login">
        <h3 class="text-center text-white pt-5">RMGSoft</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" action="/rmgsoft/login" method="post">
                            <h3 class="text-center text-info">Ingresar al sistema</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Usuario:</label><br>
                                <input type="text" name="username" id="username" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Contraseña:</label><br>
                                <input type="password" name="password" id="password" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <!-- <label for="remember-me" class="text-info">
	                                <span>Remember me</span> 
	                                <span>
	                                	<input id="remember-me" name="remember-me" type="checkbox">
	                                </span>
                                </label> --><br>
                                <input type="submit" name="btnEntrar" class="btn btn-info btn-md" value="Entrar">                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
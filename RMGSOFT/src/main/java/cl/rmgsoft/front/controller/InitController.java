package cl.rmgsoft.front.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class InitController {
	
	@RequestMapping("/admin/init.do")
	public String init(ModelMap modelo) {
		modelo.addAttribute("mensaje", "Hola Mundo desde thymeleaf");
		return "/admin/index";
	}
	
	
}

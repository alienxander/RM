package cl.rmgsoft.front.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class InitController {
	
	@RequestMapping("/init.do")
	public String init(Model modelo) {
		modelo.addAttribute("mensaje", "Hola Mundo desde thymeleaf");
		return "index";
	}
	
	@RequestMapping(value = "/logout.do", method = RequestMethod.GET)
	public String logout(ModelMap model, HttpSession session) {
		session.invalidate();
		//return "redirect:/rmgsoft/login";
		return "login";
	}
}

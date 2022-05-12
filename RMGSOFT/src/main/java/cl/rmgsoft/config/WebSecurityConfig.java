package cl.rmgsoft.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.web.cors.CorsUtils;


@EnableWebSecurity
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		// TODO Auto-generated method stub
		auth.inMemoryAuthentication().withUser("rmeza").password(passwordEncoder().encode("1234")).roles("ADMIN");
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// TODO Auto-generated method stub
//		http.csrf().disable().authorizeRequests().requestMatchers(CorsUtils::isPreFlightRequest).permitAll()
//												.antMatchers("/login").permitAll() //Lo permite en al acceder
//												.anyRequest().authenticated()
//												.and().formLogin().loginPage("/login") //Forward al controller
//												.failureUrl("/login?error=true")
//												.usernameParameter("username")
//												.passwordParameter("password")
//												.defaultSuccessUrl("/init.do"); //Si eta bien, se va a dicha url especificada
		
		http.csrf().disable().authorizeRequests().
												antMatchers("/admin/**").hasRole("ADMIN")
												.antMatchers("/login").permitAll()
												.anyRequest()
												.authenticated()
												.and()
												.formLogin()
												.loginPage("/login")
												.successHandler(customAthenticationSuccessHandler())
												.failureUrl("/login?error=true")
												.usernameParameter("username")
												.passwordParameter("password");
	}
	
	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public AuthenticationSuccessHandler customAthenticationSuccessHandler() {
		return new CustomAthenticationSuccessHandler();
	}

}

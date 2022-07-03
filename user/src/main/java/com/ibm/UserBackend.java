package com.ibm;

import javax.servlet.Filter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.PropertySource;

import com.ibm.jwtfilter.AuthFilter;

@SpringBootApplication
@PropertySource("classpath:dbconfig.properties")
public class UserBackend {
	//private static Logger logger = LoggerFactory.getLogger(UserRemindersController.class);

	@Bean
	public FilterRegistrationBean jwtFilter() {
		FilterRegistrationBean<Filter> bean =
				new FilterRegistrationBean<Filter>();
		bean.setFilter(new AuthFilter());
		bean.addUrlPatterns("/recommendations/saveUserRecommendations");
//		bean.addUrlPatterns("/user/saveUserRecommendations");
		return bean;
	}

	public static void main(String[] args) {
		SpringApplication.run(UserBackend.class, args);
		//logger.info("hey from the main class");
		//logger.info("Yes running the application");
	}

}

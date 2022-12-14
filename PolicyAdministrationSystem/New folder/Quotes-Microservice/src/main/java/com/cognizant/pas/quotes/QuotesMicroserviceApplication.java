package com.cognizant.pas.quotes;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableFeignClients
@SpringBootApplication
@ComponentScan(basePackages={"com.cognizant"})
@EnableJpaRepositories
public class QuotesMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuotesMicroserviceApplication.class, args);
		System.out.println("Quotes Microservice has started..");
		
	}

}

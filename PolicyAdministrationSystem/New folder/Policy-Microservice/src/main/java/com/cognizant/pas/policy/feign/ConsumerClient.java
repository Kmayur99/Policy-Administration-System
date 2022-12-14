package com.cognizant.pas.policy.feign;

import javax.validation.Valid;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;

import com.cognizant.pas.policy.exception.AuthorizationException;
import com.cognizant.pas.policy.payload.response.ConsumerBusinessDetails;

//@Headers("Content-Type: application/json")
//@FeignClient(name = "emp-ws", url = "${feign.url}")
@FeignClient(name = "consumer-service", url = "http://localhost:8200/consumer-api")
public interface ConsumerClient {
	
	@GetMapping("/viewConsumerBusinessByPolicy/{consumerid}")
	public ConsumerBusinessDetails viewConsumerBusinessbypolicy(@Valid  @PathVariable ("consumerid")Long consumerid,
			@RequestHeader(value = "Authorization", required = true) String requestTokenHeader) throws AuthorizationException;
	
}

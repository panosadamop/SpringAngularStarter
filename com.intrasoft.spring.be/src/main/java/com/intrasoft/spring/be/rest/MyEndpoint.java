package com.intrasoft.spring.be.rest;
import org.springframework.web.bind.annotation.*;
@RestController
public class MyEndpoint {
	
	
	 // Find
    @GetMapping("/hello")
    Greeting sayHey() {
    	Greeting hey = new Greeting();
    	hey.setMessage("Hey buddy!!!");
    	return hey;
    }
    

}

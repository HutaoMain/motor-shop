package com.moditech.ecommerce.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.client.RestTemplate;

@Configuration
@EnableScheduling
public class ScheduledTask {

    @Autowired
    RestTemplate restTemplate;

    @Value("${frontend.base.url}")
    String frontEndBaseUrl;

    @Scheduled(cron = "0 0 0 1 * *")
    // @Scheduled(cron = "0 0/5 * * *")
    public void sendCombinedEmail() {
        String BASE_URL = frontEndBaseUrl + "/api/email/sendCombinedEmail";
        restTemplate.postForEntity(BASE_URL, null, String.class);
    }
}

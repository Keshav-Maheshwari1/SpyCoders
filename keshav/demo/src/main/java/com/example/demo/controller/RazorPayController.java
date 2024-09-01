package com.example.demo.controller;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class RazorPayController {
    private final Logger logger = LoggerFactory.getLogger(RazorPayController.class);
    @Value("${razorpay.key-id}")
    private String razorpayKeyId;

    @Value("${razorpay.key-secret}")
    private String razorpaySecret;
    @GetMapping("/payment/{amount}")
    public String Payment(@PathVariable String amount) throws RazorpayException {
        amount+="00";
        RazorpayClient razorpayClient = new RazorpayClient(razorpayKeyId, razorpaySecret);
        JSONObject orderRequest = new JSONObject();

        orderRequest.put("amount", amount);
        orderRequest.put("currency", "INR");
        orderRequest.put("receipt", "order_receipt_11");

        Order order = razorpayClient.orders.create(orderRequest);

        return order.get("id");
    }
    @PostMapping("/web-callback")
    public ResponseEntity<Void> paymentCallbackwebhooks(@RequestBody(required = false) String payload){
        logger.info("Hook Called");
        logger.info(payload);
        return ResponseEntity.ok(null);
    }
}

package com.example.demo.controller;

import com.example.demo.entities.Bug;
import com.example.demo.service.BugService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PaymentController {
    @Autowired
    private BugService service;
    public PaymentController(BugService service) {
        this.service = service;
    }
    @GetMapping("/{id}")
    public ResponseEntity<Bug> getBug(@PathVariable Long id){
        return service.getByBugId(id);
    }
    @GetMapping("/bugs")
    public ResponseEntity<List<Bug>> getBugs(){
        return service.findall();
    }
    @PostMapping("/bug")
    public ResponseEntity<Long> addBug(@RequestBody Bug bug){
        return service.add(bug);
    }

    @PutMapping("/bug/{id}")
    public ResponseEntity<String> updateBug(@PathVariable Long id , @RequestBody Bug bug){
        Boolean isUpdated = service.update(id, bug).getBody();
        return Boolean.TRUE.equals(isUpdated) ?
                ResponseEntity.ok("Updated Successfully")
                : ResponseEntity.ok("Not updated");
    }
    @DeleteMapping("/bug/{id}")
    public ResponseEntity<String> deleteBug(@PathVariable Long id ){
        Boolean isRemoved = service.remove(id).getBody();
        return Boolean.TRUE.equals(isRemoved) ?
                ResponseEntity.ok("Removed Successfully")
                : ResponseEntity.ok("Not Found");
    }
}

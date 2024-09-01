package com.example.demo.service.impl;


import com.example.demo.entities.Bug;
import com.example.demo.repository.PaymentRepository;
import com.example.demo.service.BugService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BugServiceImpl implements BugService {
    @Autowired
    private PaymentRepository paymentRepository;
    public BugServiceImpl (PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    @Override
    public ResponseEntity<Long> add(Bug bug) {
        return Optional.of(paymentRepository.save(bug))
                .map(bug1 -> ResponseEntity.ok(bug1.getId()))
                .orElse(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build());
    }

    @Override
    public ResponseEntity<Bug> getByBugId(long id) {
         return paymentRepository.findById(id)
                .map(ResponseEntity::ok)
                 .orElse(ResponseEntity.noContent().build());
    }

    @Override
    public ResponseEntity<List<Bug>> findall() {
        return Optional.of(paymentRepository.findAll())
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.noContent().build());
    }

    @Override
    public ResponseEntity<Boolean> update(Long id, Bug bug) {
        return paymentRepository.findById(id)
                .map(oldBug -> {
                    int rows = paymentRepository.updateBug(id, bug.getName());
                    if(rows > 0){
                        return ResponseEntity.ok(true);
                    }
                    return ResponseEntity.ok(false);
                })
                .orElse(ResponseEntity.noContent().build());

    }

    @Override
    public ResponseEntity<Boolean> remove(Long id) {
        return paymentRepository.findById(id)
                .map(bug -> {
                    paymentRepository.delete(bug);
                    return ResponseEntity.ok(true);
                })
                .orElse(ResponseEntity.noContent().build());
    }
}
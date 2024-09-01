package com.example.demo.service;


import com.example.demo.entities.Bug;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface BugService {
    ResponseEntity<Long> add(Bug bug);
    ResponseEntity<Bug> getByBugId(long id);
    ResponseEntity<List<Bug>> findall();
    ResponseEntity<Boolean> update(Long id,Bug bug);
     ResponseEntity<Boolean> remove(Long id);
}

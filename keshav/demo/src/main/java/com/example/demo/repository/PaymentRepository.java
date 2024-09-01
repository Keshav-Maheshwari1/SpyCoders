package com.example.demo.repository;

import com.example.demo.entities.Bug;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PaymentRepository extends JpaRepository<Bug,Long> {
    @Modifying
    @Transactional
    @Query("UPDATE Bug b SET b.name = :name WHERE b.id = :id")
    int updateBug(@Param("id") Long id, @Param("name") String name);
}

package com.example.cyberthreat.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.cyberthreat.model.Threat;

public interface ThreatRepository extends JpaRepository<Threat, Long> {
    Page<Threat> findByThreatCategory(String threatCategory, Pageable pageable);

    @Query("SELECT t FROM Threat t WHERE LOWER(t.cleanedThreatDescription) LIKE LOWER(CONCAT('%', :searchTerm, '%'))")
    Page<Threat> searchByDescription(String searchTerm, Pageable pageable);
}
package com.example.cyberthreat.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.cyberthreat.model.Threat;
import com.example.cyberthreat.repository.ThreatRepository;

@Service
public class ThreatService {
    @Autowired
    private ThreatRepository repository;

    public Page<Threat> getThreats(String category, String search, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        if (search != null && !search.isEmpty()) {
            return repository.searchByDescription(search, pageable);
        } else if (category != null && !category.isEmpty()) {
            return repository.findByThreatCategory(category, pageable);
        } else {
            return repository.findAll(pageable);
        }
    }

    public Optional<Threat> getThreatById(Long id) {
        return repository.findById(id);
    }

    public Map<String, Object> getStats() {
        List<Threat> all = repository.findAll();

        Map<String, Long> byCategory = all.stream()
            .collect(Collectors.groupingBy(Threat::getThreatCategory, Collectors.counting()));

        Map<Float, Long> bySeverity = all.stream()
            .filter(t -> t.getSeverityScore() != null)
            .collect(Collectors.groupingBy(Threat::getSeverityScore, Collectors.counting()));

        Map<String, Object> stats = new HashMap<>();
        stats.put("total_threats", all.size());
        stats.put("by_category", byCategory);
        stats.put("by_severity", bySeverity);

        return stats;
    }
}
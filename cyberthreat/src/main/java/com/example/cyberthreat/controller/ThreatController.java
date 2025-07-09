package com.example.cyberthreat.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.cyberthreat.model.Threat;
import com.example.cyberthreat.service.ThreatService;

@RestController
@RequestMapping("/api/threats")
public class ThreatController {

    @Autowired
    private ThreatService service;

    @GetMapping
    public Page<Threat> getThreats(@RequestParam(required = false) String category,
                                   @RequestParam(required = false) String search,
                                   @RequestParam(defaultValue = "0") int page,
                                   @RequestParam(defaultValue = "10") int limit) {
        return service.getThreats(category, search, page, limit);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Threat> getThreat(@PathVariable Long id) {
        return service.getThreatById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/stats")
    public Map<String, Object> getStats() {
        return service.getStats();
    }
}
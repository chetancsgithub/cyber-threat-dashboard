package com.example.cyberthreat.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "cyber_threats")
public class Threat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String threatCategory;
    private String iocs;
    private String threatActor;
    private String attackVector;
    private String geographicalLocation;
    private String sentimentInForums;
    private Float severityScore;
    private String predictedThreatCategory;
    private String suggestedDefenseMechanism;
    private String riskLevelPrediction;

    @Column(columnDefinition = "TEXT")
    private String cleanedThreatDescription;

    @Column(columnDefinition = "TEXT")
    private String keywordExtraction;

    @Column(columnDefinition = "TEXT")
    private String namedEntities;

    private String topicModelingLabels;
    private Integer wordCount;
}
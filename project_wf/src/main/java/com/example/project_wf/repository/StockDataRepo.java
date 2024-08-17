package com.example.project_wf.repository;

import java.time.LocalDateTime;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.project_wf.model.StockData;


public interface StockDataRepo extends JpaRepository<StockData, LocalDateTime> {
}



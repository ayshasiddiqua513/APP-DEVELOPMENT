package com.example.project_wf.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.project_wf.model.StockData;
import com.example.project_wf.repository.StockDataRepo;


@Service
public class StockDataService {
  @Autowired
  private StockDataRepo repository;

  public void saveStockData(StockData stockData) {
    repository.save(stockData);
  }

  public List<StockData> getAllStockData() {
    return repository.findAll();
  }

  public StockData getStockDataByTimestamp(LocalDateTime timestamp) {
    return repository.findById(timestamp).orElse(null);
  }

  public void updateStockData(StockData stockData) {
    repository.save(stockData);
  }

  public void deleteStockData(LocalDateTime timestamp) {
    repository.deleteById(timestamp);
  }
}

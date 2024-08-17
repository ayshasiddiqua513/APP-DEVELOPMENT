package com.example.project_wf.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.project_wf.model.StockData;
import com.example.project_wf.service.StockDataService;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/stock-data")
public class StockDataController {
  @Autowired
  private StockDataService service;

  @PostMapping
  public void saveStockData(@RequestBody StockData stockData) {
    service.saveStockData(stockData);
  }

  @GetMapping
  public List<StockData> getAllStockData() {
    return service.getAllStockData();
  }

  @GetMapping("/{timestamp}")
  public StockData getStockDataByTimestamp(@PathVariable LocalDateTime timestamp) {
    return service.getStockDataByTimestamp(timestamp);
  }

  @PutMapping
  public void updateStockData(@RequestBody StockData stockData) {
    service.updateStockData(stockData);
  }

  @DeleteMapping("/{timestamp}")
  public void deleteStockData(@PathVariable LocalDateTime timestamp) {
    service.deleteStockData(timestamp);
  }
}

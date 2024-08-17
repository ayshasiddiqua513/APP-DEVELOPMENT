package com.example.project_wf.model;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="stock_value")
public class StockData {
  @Id
  private LocalDateTime timestamp;
  private double open;
  private double high;
  private double low;
  private double close;
  private int volume;
public LocalDateTime getTimestamp() {
    return timestamp;
}
public void setTimestamp(LocalDateTime timestamp) {
    this.timestamp = timestamp;
}
public double getOpen() {
    return open;
}
public void setOpen(double open) {
    this.open = open;
}
public double getHigh() {
    return high;
}
public void setHigh(double high) {
    this.high = high;
}
public double getLow() {
    return low;
}
public void setLow(double low) {
    this.low = low;
}
public double getClose() {
    return close;
}
public void setClose(double close) {
    this.close = close;
}
public int getVolume() {
    return volume;
}
public void setVolume(int volume) {
    this.volume = volume;
}

  
}

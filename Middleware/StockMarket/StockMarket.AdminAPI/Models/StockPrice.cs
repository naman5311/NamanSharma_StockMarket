using System;
using System.Collections.Generic;

namespace StockMarket.AdminAPI.Models
{
    public partial class StockPrice
    {
        public int StockId { get; set; }
        public string CompanyName { get; set; }
        public string StockExchange { get; set; }
        public decimal CurrentPrice { get; set; }
        public DateTime Date { get; set; }
        public TimeSpan Time { get; set; }
    }
}

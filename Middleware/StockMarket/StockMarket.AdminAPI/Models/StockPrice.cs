using System;
using System.Collections.Generic;

namespace StockMarket.AdminAPI.Models
{
    public partial class StockPrice
    {
        public string CompanyName { get; set; }
        public string StockExchange { get; set; }
        public int CurrentPrice { get; set; }
        public DateTime Date { get; set; }
        public TimeSpan Time { get; set; }
    }
}

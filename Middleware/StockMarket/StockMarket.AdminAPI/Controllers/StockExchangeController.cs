﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StockMarket.AdminAPI.Models;
using StockMarket.AdminAPI.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StockMarket.AdminAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StockExchangeController : ControllerBase
    {
        StockExchangeService service = new StockExchangeService();
        [HttpGet]
        [Route("GetAllStockExchange")]
        public IActionResult GetAllStockExchange()
        {
            return Ok(service.GetAllSE());
        }

        // GET by ID StockExchange
        [HttpGet]
        [Route("GetStockExchangeByName/{name}")]
        public IActionResult GetStockExchangeByName(string name)
        {
            return Ok(service.GetSEByName(name));
        }

        // GET by ID StockExchange
        [HttpGet]
        [Route("GetStockExchange/{id}")]
        public IActionResult GetStockExchange(int id)
        {
            return Ok(service.GetSE(id));
        }

        // POST Add StockExchange
        [HttpPost]
        [Route("AddStockExchange")]
        public IActionResult AddStockExchange(StockExchange value)
        {
            service.AddSE(value);
            return Ok("Record Added Successfully");
        }

        // PUT Update StockExchange
        [HttpPut]
        [Route("UpdateStockExchange")]
        public IActionResult UpdateStockPrice(StockExchange value)
        {
            service.UpdateSE(value);
            return Ok("Record Updated");
        }

        // DELETE StockExchange
        [HttpDelete]
        [Route("DeleteStockExchangeByName/{name}")]
        public IActionResult DeleteStockExchange(string name)
        {
            service.DeleteSEByName(name);
            return Ok("Record Deleted");
        }

        // DELETE StockExchange
        [HttpDelete]
        [Route("DeleteStockExchange/{id}")]
        public IActionResult DeleteStockExchange(int id)
        {
            service.DeleteSE(id);
            return Ok("Record Deleted");
        }
    }
}
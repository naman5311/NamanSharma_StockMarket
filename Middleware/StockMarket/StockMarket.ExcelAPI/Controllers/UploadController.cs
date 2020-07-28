﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StockMarket.ExcelAPI.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StockMarket.ExcelAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        UploadService service = new UploadService();
        [HttpGet]
        [Route("UploadData")]
        public IActionResult UploadExcel()
        {
            try
            {
                string path = @"D:\sample_stock_data.xlsx";
                service.UploadData(path);
                return Ok("Records Uploaded");

            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal Server Error"+ex.Message);
            }

        }
        [HttpGet]
        [Route("ExportData")]
        public IActionResult ExportExcel()
        {
            try
            {
                string path = @"D:\sample_stock_data1.xlsx";
                service.ExportData(path);
                return Ok("Records Exported");

            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal Server Error" + ex.Message);
            }

        }
    }
}
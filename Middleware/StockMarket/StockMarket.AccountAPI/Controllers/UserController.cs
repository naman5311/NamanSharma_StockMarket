using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StockMarket.AccountAPI.Models;
using StockMarket.AccountAPI.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StockMarket.AccountAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        UserService userService = new UserService();
        // GET All Users
        [HttpGet]
        [Route("GetAllUsers")]
        public IActionResult GetAllUsers()
        {
            return Ok(userService.GetAllUsers());
        }

        // GET by ID user
        [HttpGet]
        [Route("GetUser/{id}")]
        public IActionResult GetUserById(int id)
        {
            return Ok(userService.GetUserById(id));
        }

        [HttpPost]
        [Route("Login")]
        public IActionResult Login(string username,string password)
        {
            return Ok(userService.Login(username,password));
        }


        // POST Add user
        [HttpPost]
        [Route("AddUser")]
        public IActionResult AddUser(Users value)
        {
            userService.AddUser(value);
            return Ok("Record Added Successfully");
        }

        // PUT Update User
        [HttpPut]
        [Route("UpdateUser")]
        public IActionResult UpdateUser(Users value)
        {
            userService.UpdateUser(value);
            return Ok("Record Updated");
        }

        // DELETE Data
        [HttpDelete]
        [Route("DeleteUser/{id}")]
        public IActionResult DeleteUser(int id)
        {
            userService.DeleteUser(id);
            return Ok("Record Deleted");
        }
    }
}

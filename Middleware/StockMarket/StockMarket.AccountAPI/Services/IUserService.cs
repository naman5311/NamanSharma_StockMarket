using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StockMarket.AccountAPI.Models;

namespace StockMarket.AccountAPI.Services
{
    interface IUserService
    {
        public Users Login(string username, string password);
        public List<Users> GetAllUsers();
        public Users GetUserById(int id);
        public void AddUser(Users user);
        public void DeleteUser(int id);
        public void UpdateUser(Users user);
    }
}

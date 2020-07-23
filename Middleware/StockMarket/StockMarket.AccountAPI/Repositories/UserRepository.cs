using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StockMarket.AccountAPI.Models;


namespace StockMarket.AccountAPI.Repositories
{
    public class UserRepository : IUserRepository
    {
        StockMarketDBContext db=new StockMarketDBContext();
        public void AddUser(Users user)
        {
            db.Users.Add(user);
            db.SaveChanges();
        }

        public void DeleteUser(int id)
        {
            db.Users.Remove(db.Users.Find(id));
            db.SaveChanges();
        }

        public List<Users> GetAllUser()
        {
            return db.Users.ToList();
        }

        public Users GetUserByEmail(string email)
        {
            return db.Users.SingleOrDefault(e=>e.Email==email);
        }

        public Users GetUserById(int id)
        {
            return db.Users.Find(id);
        }

        public Users GetUserByNameAndPassword(string username,string password)
        {
            return db.Users.SingleOrDefault(e => e.UserName == username && e.Password==password);
        }

        public void UpdateUser(Users user)
        {
            db.Users.Update(user);
            db.SaveChanges();
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StockMarket.AccountAPI.Models;

namespace StockMarket.AccountAPI.Services
{
    public interface ICompanyService
    {
        void AddCompany(Company value);
        void DeleteCompany(string id);
        void UpdateCompany(Company value);
        List<Company> GetAllCompany();
        Company GetCompanyByName(string name);
    }
}

﻿using StockMarket.AccountAPI.Models;
using StockMarket.AccountAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.AccountAPI.Services
{
    public class CompanyService:ICompanyService
    {
        CompanyRepository companyRepo = new CompanyRepository();

        public void AddCompany(Company value)
        {
            companyRepo.AddCompany(value);
        }

        public void DeleteCompany(string id)
        {
            companyRepo.DeleteCompany(id);
        }

        public List<Company> GetAllCompany()
        {
            return companyRepo.GetAllCompany();
        }

        public Company GetCompanyByName(string name)
        {
            return companyRepo.GetCompanyByName(name);
        }

        public void UpdateCompany(Company value)
        {
            companyRepo.UpdateCompany(value);
        }
    }
}

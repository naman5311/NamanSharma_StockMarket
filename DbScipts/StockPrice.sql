USE [StockMarketDB]
GO

/****** Object:  Table [dbo].[StockPrice]    Script Date: 05-08-2020 6.11.10 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[StockPrice](
	[stockId] [int] IDENTITY(100,1) NOT NULL,
	[CompanyCode] [varchar](50) NULL,
	[StockExchange] [varchar](10) NOT NULL,
	[CurrentPrice] [decimal](10, 2) NOT NULL,
	[Date] [date] NOT NULL,
	[Time] [varchar](20) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[stockId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


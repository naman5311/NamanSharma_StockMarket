USE [StockMarketDB]
GO

/****** Object:  Table [dbo].[IPO]    Script Date: 05-08-2020 6.10.32 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[IPO](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[CompanyName] [varchar](50) NOT NULL,
	[StockExchange] [varchar](10) NOT NULL,
	[PricePerShare] [int] NOT NULL,
	[NoOfShares] [varchar](30) NOT NULL,
	[OpenDateTime] [datetime] NOT NULL,
	[Remarks] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


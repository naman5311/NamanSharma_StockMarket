USE [StockMarketDB]
GO

/****** Object:  Table [dbo].[StockExchange]    Script Date: 05-08-2020 6.10.56 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[StockExchange](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[StockExchangeName] [varchar](10) NULL,
	[Brief] [varchar](100) NULL,
	[ContactAddress] [varchar](100) NULL,
	[Remarks] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


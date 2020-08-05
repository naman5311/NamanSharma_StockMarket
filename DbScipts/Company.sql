USE [StockMarketDB]
GO

/****** Object:  Table [dbo].[Company]    Script Date: 05-08-2020 6.10.19 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Company](
	[CompanyName] [varchar](50) NOT NULL,
	[Turnover] [varchar](50) NOT NULL,
	[CEO] [varchar](30) NOT NULL,
	[BoardOfDirectors] [varchar](100) NOT NULL,
	[ListedInSE] [varchar](10) NOT NULL,
	[Sector] [varchar](100) NOT NULL,
	[Brief] [varchar](100) NOT NULL,
	[StockCode] [varchar](30) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[CompanyName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


USE [StockMarketDB]
GO

/****** Object:  Table [dbo].[Users]    Script Date: 05-08-2020 6.11.26 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Users](
	[id] [int] IDENTITY(1000,1) NOT NULL,
	[UserName] [varchar](100) NOT NULL,
	[Password] [varchar](50) NOT NULL,
	[UserType] [varchar](10) NOT NULL,
	[Email] [varchar](40) NOT NULL,
	[MobileNo] [varchar](10) NOT NULL,
	[Confirmed] [varchar](10) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


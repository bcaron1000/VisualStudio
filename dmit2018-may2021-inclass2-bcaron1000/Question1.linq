<Query Kind="Expression">
  <Connection>
    <ID>def7fea6-10e8-4069-a050-bf7bb5bfd5e5</ID>
    <NamingServiceVersion>2</NamingServiceVersion>
    <Persist>true</Persist>
    <Server>.</Server>
    <DeferDatabasePopulation>true</DeferDatabasePopulation>
    <Database>OMST_2018</Database>
  </Connection>
</Query>

//(Marks:3) Show the number of tickets sold and total revenue for each ticket category. The cost of a ticket is its price plus any premium.
//Show only the categories that have ticket sales.

from x in Tickets
	orderby x.TicketCategory.Description, x.TicketID
	group x by x into gTemp
	select new 
	{
		cat = gTemp.Key.TicketCategory.Description,
		ticketssold = gTemp.Sum(xz => xz.TicketID),
		revenue = (gTemp.TicketCategory.TicketPrice * gTemp.Count)
	
	}
	
	
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

//(Marks:4) Create a list showing the daily revenues for each movie on a particular date by location. Filter on Year, 
//Month and Day portions of the DateTime field. Group report by location description and by movie title. 
//Use the date of Dec 31, 2017 for testing.



from x in Tickets
orderby x.ShowTime.Movie.ReleaseYear
	select new 
	{
		location = x.ShowTime.Theatre.Location.Description,
		Movie = x.ShowTime.Movie.Title,
		revenue = (x.TicketPrice * x.TicketID)
	}


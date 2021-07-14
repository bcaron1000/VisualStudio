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

//(Marks:4) List all movies showing their title and release year. Show unique start date and theatre location of each showing. 
//Order the movies by title and the show locations by datetime.

from x in ShowTimes 
	group x by x.Movie into gTemp
	orderby gTemp.Key.Title, gTemp.Key.ReleaseYear
	select new 
	{
		title = gTemp.Key.Title,
		year = gTemp.Key.ReleaseYear,
		locations = (from y in gTemp
					group y by y into yTemp
						orderby yTemp.Key.StartDate
						select new 
						{
							
							date = yTemp.Key.StartDate,
							location = yTemp.Key.Theatre.Location.Description 
						}
						
					
					)
		
		
	}








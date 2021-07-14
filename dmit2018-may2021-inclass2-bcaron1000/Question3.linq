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

//(Marks:4) Create a list showing movies by Genre description. For each genre show the movie title, rating, 
//required screen type and if it is a premium ticket movie. Order the movies by title.

from x in Genres
orderby x.GenreID
select new 
{
	Title = x.Description,
	gmovies = from y in x.Movies
				
				select new 
				{
					title = y.Title,
					rating = y.Rating.Description,
					screen = y.ScreenType.Description,
					premium = y.ScreenType.Premium.ToString() != "False" ? "True": y.ScreenType.Premium.ToString()
				}
				


}
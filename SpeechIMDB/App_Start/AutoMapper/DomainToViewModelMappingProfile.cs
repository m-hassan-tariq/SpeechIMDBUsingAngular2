using SpeechIMDB.DomainClasses;
using SpeechIMDB.Models;

namespace SpeechIMDB.App_Start
{
    public class DomainToViewModelMappingProfile : AutoMapper.Profile
    {
        public override string ProfileName
        {
            get { return "DomainToViewModelMappings"; }
        }

        protected override void Configure()
        {
            MapMovieDetail();
            MapMovieSearch();
            MapNewsList();
        }

        private void MapMovieDetail()
        {
            CreateMap<MovieDetail, MovieDetailVM>()
                .ForMember(vm => vm.actors, map => map.MapFrom(m => m.Title))
                .ForMember(vm => vm.year, map => map.MapFrom(m => m.Year))
                .ForMember(vm => vm.rated, map => map.MapFrom(m => m.Rated))
                .ForMember(vm => vm.released, map => map.MapFrom(m => m.Released))
                .ForMember(vm => vm.runtime, map => map.MapFrom(m => m.Runtime))
                .ForMember(vm => vm.genre, map => map.MapFrom(m => m.Genre))
                .ForMember(vm => vm.director, map => map.MapFrom(m => m.Director))
                .ForMember(vm => vm.writer, map => map.MapFrom(m => m.Writer))
                .ForMember(vm => vm.actors, map => map.MapFrom(m => m.Actors))
                .ForMember(vm => vm.plot, map => map.MapFrom(m => m.Plot))
                .ForMember(vm => vm.language, map => map.MapFrom(m => m.Language))
                .ForMember(vm => vm.country, map => map.MapFrom(m => m.Country))
                .ForMember(vm => vm.awards, map => map.MapFrom(m => m.Awards))
                .ForMember(vm => vm.poster, map => map.MapFrom(m => m.Poster))
                .ForMember(vm => vm.metascore, map => map.MapFrom(m => m.Metascore))
                //.ForMember(vm => vm.imdbRating, map => map.MapFrom(m => m.imdbRating))
                //.ForMember(vm => vm.imdbVotes, map => map.MapFrom(m => m.imdbVotes))
                //.ForMember(vm => vm.imdbID, map => map.MapFrom(m => m.imdbID))
                .ForMember(vm => vm.type, map => map.MapFrom(m => m.Type))
                .ForMember(vm => vm.response, map => map.MapFrom(m => m.Response));
        }

        private void MapMovieSearch()
        {
            CreateMap<Search, SearchVM>()
              .ForMember(vm => vm.title, map => map.MapFrom(m => m.Title))
              .ForMember(vm => vm.year, map => map.MapFrom(m => m.Year))
              //.ForMember(vm => vm.imdbID, map => map.MapFrom(m => m.imdbID))
              .ForMember(vm => vm.type, map => map.MapFrom(m => m.Type))
              .ForMember(vm => vm.poster, map => map.MapFrom(m => m.Poster));

            CreateMap<MovieList, MovieListVM>()
               //.ForMember(vm => vm.totalResults, map => map.MapFrom(m => m.totalResults))
               .ForMember(vm => vm.response, map => map.MapFrom(m => m.Response))
               .ForMember(vm => vm.search, map => map.MapFrom(m => m.Search));
        }

        private void MapNewsList()
        {
            CreateMap<Thumbnail, NewsVM>()
              .ForMember(vm => vm.thumbnailUrl, map => map.MapFrom(m => m.contentUrl));
            CreateMap<Provider, NewsVM>()
              .ForMember(vm => vm.sourceName, map => map.MapFrom(m => m.name));

            CreateMap<Value, NewsVM>()
              .ForMember(vm => vm.name, map => map.MapFrom(m => m.name))
              .ForMember(vm => vm.url, map => map.MapFrom(m => m.url))
              .ForMember(vm => vm.description, map => map.MapFrom(m => m.description))
              .ForMember(vm => vm.datePublished, map => map.MapFrom(m => m.datePublished))
              .ForMember(vm => vm.category, map => map.MapFrom(m => m.category));

            CreateMap<NewsList, NewsListVM>()
               .ForMember(vm => vm.news, map => map.MapFrom(m => m.value));
        }
    }
}
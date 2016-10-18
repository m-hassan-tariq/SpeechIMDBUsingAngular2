using SpeechIMDB.DomainClasses;
using SpeechIMDB.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

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
    }
}
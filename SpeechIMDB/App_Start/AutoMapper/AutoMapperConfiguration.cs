using AutoMapper;


namespace SpeechIMDB.App_Start
{
    public static class AutoMapperConfiguration
    {
        public static void AutoMapperConfig()
        {
            Mapper.Initialize(x =>
            {
                x.AddProfile<DomainToViewModelMappingProfile>();
            });
        }
    }
}
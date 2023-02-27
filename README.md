в зависимости от service нужно импортировать JwtModule.register({}) в модуль

@Module({
  providers: [AppService, AccessStrategy, RefreshStrategy],
  controllers: [AppController],
  imports: [JwtModule.register({})]
})
export class AppModule {}

в моем случии это AppMidule
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}

(async () => {
  await bootstrap();
})().catch((err) => {
  console.error('Bootstrap failed:', err);
});

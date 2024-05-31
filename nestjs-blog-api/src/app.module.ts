import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// リクエストは先にapp.moduleに到達する
// 次にコントローラーに到達する.コントローラーでHTTPメソッドを割り振る
// プロバイダーにロジックを記述してロジックとコントローラーを分離するみたいなイメージ？
// 新しくmoduleを作成する時は nest generate module モジュール名 で作成する
// cliでmodule作成したら作成したmoduleがroute moduleで自動的に読み込まれる
// 新しくコントローラを作成する時は nest generate controller コントローラ名 で作成する
// 新しくserviceを作成する時は nest generate service コントローラ名 で作成する

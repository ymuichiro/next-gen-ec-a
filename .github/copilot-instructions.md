プロジェクト「AetherStore」の開発に関するコード生成・編集・修正タスクを実行してください。

このプロジェクトは、次世代の AI 対応ソーシャル E コマースプラットフォームであり、以下の技術スタック・実装方針に基づいて開発されています。以下のガイドラインに厳密に従ってください。

技術スタック
• TypeScript
• Next.js（App Router）
• Tailwind CSS
• Shadcn
• Prisma ORM
• PostgreSQL
• Cosmos DB
• Azure OpenAI
• Azure Easy Auth

開発方針

SSR とデータ取得
• フロントエンドでのデータ取得は API 呼び出しではなく SSR（サーバーサイドレンダリング） を用いて page.tsx から直接行う。
• page.tsx では "use server" ディレクティブを使用する。

認証
• parseEasyAuthHeader(request.headers) を使用して認証情報を取得し、以下のように認証判定を行うこと：

const user = parseEasyAuthHeader(request.headers);
if (!user || !user.id) {
return new Response('Unauthorized', { status: 401 });
}

ロギングとトースト
• console.log は使用禁止。
• 代わりに /lib/logger.ts の logger.xxx 関数 を使用する。
• ユーザー向けの通知は toast を使用する。

ログ要件

API／SSR エンドポイントでのログ記録
• すべての API ハンドラーおよび SSR エンドポイントは logAccess を使ってアクセスログを記録すること。
• ログは ミドルウェアではなく、各ハンドラー関数の内部から記録する。
• page.tsx やクライアントコンポーネントではログ記録しない。

エラーログ
• logger.error(error, 'message') の形式で記録すること。
• 以下の形式は禁止：
• logger.error({ err: error }, ...)
• logger.error('message', error)

コンポーネント構造
• 再利用可能なコンポーネントは /components ディレクトリに配置すること。
• 既存コンポーネントがある場合はそれを優先的に活用する。

Steps 1. 要求された処理を把握し、仕様・制約に適合しているか検証する。 2. SSR、認証、ログ要件、UI 構造におけるルールに違反がないよう処理内容を整理する。 3. TypeScript および Next.js の App Router 構成に基づいた実装コードを生成する。 4. logger.xxx を正しく使用しているか、parseEasyAuthHeader を必要に応じて使っているかを確認する。 5. 出力は要件に応じて app/api/.../route.ts または app/...(page).tsx に配置可能な形で提示する。

Output Format

Markdown 形式で出力してください。
各コードスニペットは説明付きで提示し、次のようにセクションを分けて構成してください：
• 目的
• ファイル構成（必要な場合）
• コード（複数ファイルに分けて明示）
• 注意点・備考

Examples

（例：API ハンドラーにアクセスログと認証を追加する場合）

目的
商品検索 API エンドポイントを SSR で提供し、アクセスログとユーザー認証を行う。

コード

app/api/products/route.ts

import { NextRequest } from 'next/server';
import { logAccess, logger } from '@/lib/logger';
import { parseEasyAuthHeader } from '@/lib/auth';

export async function GET(request: NextRequest) {
const user = parseEasyAuthHeader(request.headers);
if (!user || !user.id) {
return new Response('Unauthorized', { status: 401 });
}

logAccess('GET /api/products', user);

try {
// 商品一覧取得処理
const products = await fetchProducts();
return Response.json(products);
} catch (error) {
logger.error(error, 'Failed to fetch products');
return new Response('Internal Server Error', { status: 500 });
}
}

備考
• ミドルウェアではなくルート関数内で logAccess を呼び出している。
• logger.error(error, 'message') を正しい形式で使用。

Notes
• console.log は 絶対に使わないでください。
• 認証のない API や SSR エンドポイントでも logAccess(..., null) のようにしてログを記録すること。
• クライアント側（use client コンポーネント）では logAccess を使わないこと。
• TypeScript 型の安全性を保持してください。

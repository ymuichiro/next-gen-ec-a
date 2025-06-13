# AetherStore: AI Social Commerce Platform

AetherStore は、AIを活用した次世代のソーシャルEコマースプラットフォームのプロトタイプです。ユーザーはソーシャルメディアのフィードのようなUIで商品を閲覧し、AIアシスタントとの対話を通じて新しい商品を発見することができます。

## スクリーンショット

![AetherStore Application Screenshot](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SbOhfnyR4KTFggfM7ahw4ersj2Kp9a.png)

## 主な特徴

- **2画面レイアウト**: 左側にAIチャット、右側に商品フィードを配置したモダンなインターフェース。
- **AIショッピングアシスタント**: ユーザーとの対話を通じて、パーソナライズされた商品推薦を行うチャットUI。（現在はモック応答）
- **ソーシャルフィード**: ユーザー投稿形式で商品が表示され、無限にスクロールして新しい商品を発見できます。
- **インタラクティブな商品カード**: 「いいね」「コメント」「類似商品を検索」などのアクションが可能なカードUI。
- **グラスモーフィズムデザイン**: 全体的に透明感のあるガラスのようなデザインを採用し、商品を際立たせる近未来的なビジュアルを実現。
- **AIによる類似商品検索**: Vercel AI SDKを利用し、気になる商品の類似アイテムをAIが提案します。
- **信頼度スコア**: ユーザーの信頼度を可視化する「Trust Score」システムを導入。

## 技術スタック

- **フレームワーク**: [Next.js](https://nextjs.org/) (App Router)
- **言語**: TypeScript
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/)
- **UIコンポーネント**: [shadcn/ui](https://ui.shadcn.com/)
- **AI**: [Vercel AI SDK](https://sdk.vercel.ai/)
- **アイコン**: [Lucide React](https://lucide.dev/)

## セットアップと実行方法

このプロジェクトをローカル環境で実行するには、以下の手順に従ってください。

### 1. リポジトリのクローン

\`\`\`bash
git clone <your-repository-url>
cd <repository-directory>
\`\`\`

### 2. 依存関係のインストール

\`\`\`bash
pnpm install
\`\`\`

### 3. 環境変数の設定

プロジェクトのルートディレクトリに `.env.local` という名前のファイルを作成します。このファイルにOpenAIのAPIキーを設定してください。これは「類似商品を検索」機能で必要になります。

### 4. 開発サーバーの起動

\`\`\`bash
pnpm run dev
\`\`\`

ブラウザで [http://localhost:3000](http://localhost:3000) を開くと、アプリケーションが表示されます。

# ブランチ運用ルール

CI/CDを組んでいる関係で色々ブランチの運用に制限を設けています.

|ブランチ|デフォルト|目的|
|---|---|---|
|`master`|false|[npm](https://www.npmjs.com/package/@huequica/native_extensions)に公開されている latest のコードです|
|`develop`|true|現在の開発のメインブランチです|
|`~~~#[IssueNo]`|false|Issueのチケット消化専用に作るブランチです.|
|`RELEASE_v[versionNo]`|false|Release するとき専用. 後述しますが **Maintainer のみ立ててください**|

# 開発フロー

1. 必ず先に目的に応じた Issue を立ててください.  
	何をしようとしているか把握する目的もありますが, 誰が何をしようとしているのかを他者にもわかるよう明示する目的があります.
2. コードをいじる必要があり, 任せようと考えた場合 Issue に Assign します.  
	された場合は Fork して, その Repo の `develop` なり適当なブランチで作業してください.  
	[**Maintainerのみ**]  
	`huequica/nativeExtensions`上で `[IssueDescription]#[IssueNo]` の命名でブランチを切って開発してください.  
	例えば `isUndefined()` というメソッドを生やす Issue(No.6) の場合は `newFunction_isUndefined#6` という形式でOKです
3. Issue の責務が完了したと考えた段階でPRを発行してください.  
	その後レビューをしますのでセルフ Merge は絶対しないでください(一応 Review 必須の保護をしていますが)  
	CircleCI による Build, Lint, Test のチェックもあります.
4. レビューから Merge までのハンドリングはこちらでします.

# リリースフロー

**Maintainer 向けです**

1. Release の更新事項, インクリメント後のバージョン番号などを記載してIssueを立ててください.  
	**タイトルに必ず Increment されたバージョン番号を記載してください**
2. `master` から `RELEASE_v[versionNo]` の命名でブランチを切ってください.
3. `git merge develop` などで変更の取り込みをしてください.
4. `npm version ~~~~` で `package.json` の `version` の更新コミットをしてください.
5. PRを提出してください. 基本的に Approve します( develop の変更は全てレビュー済の**はず**なので )
6. Merge されれば CircleCI 上で自動で publish されます. お疲れさまでした.

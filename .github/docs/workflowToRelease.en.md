# Branch Handling Rules

There are restrictions on the handling of various branches due to CI/CD.

|Branch|Default|Purpose|
|---|---|---|
|`master`|false|Latest of the published package codes on [npm](https://www.npmjs.com/package/@huequica/native_extensions).|
|`develop`|true|Developing Default Branch|
|`~~~#[IssueNo]`|false|Made exclusively for issue ticket digestion.|
|`RELEASE_v[versionNo]`|false|For use release only. **Only maintainer can create.**|

# Develop Flow

1. Create issue according to your purpose.  
	It has the purpose of figuring out what you are trying to do.
2. When assign the issue, fork this repo and coding there.  
	[**only Maintainer**]  
	Create new branch on `huequica/node_nativeExtensions` with the branchName `[IssueDescription]#[IssueNo]`.  
	(e.g. In the case of issue(#6) that create new feature of method `isUndefined()`, name `newFunction_isUndefined#6`. )
3. Create a PR when you think issue's summaries have been completed.  
	Please do not merge yourself. We will review to your codes.
4. We will handle everything from review to merge.

# Release Flow

**Only Maintainer**

1. Create issue that writing changes from latest release, incremented version number.  
	**Issue title has Incremented version number.**
2. Create branch from `master` with the name `RELEASE_v[versionNo]`.
3. merge changes use `git merge develop`
4. Commit version update in `package.json` that use `npm version ~~~`
5. Create PR. I will approve fundamentally.
6. When merged, Package update will publish from CircleCI. thank you for your support! :)

import * as Commons from '~/index';

const testCase = ['hoge', 'fuga', undefined, 'piyo', undefined];

describe('🧐 Array#lastItemIs', (): void => {
	test('🙆‍♀️ Filtering undefined value', (): void => {
		const filtered = testCase.filter(
			(target) => !Commons.singleFunctions.isUndefined(target)
		);
		expect(filtered).toEqual(['hoge', 'fuga', 'piyo']);
	});
});

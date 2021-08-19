import * as Commons from '~/extensions/singleFunctions';

const testCase = ['hoge', 'fuga', undefined, 'piyo', undefined];

describe('🧐 Array#lastItemIs', (): void => {
	test('🙆‍♀️ Filtering undefined value', (): void => {
		const filtered = testCase.filter((target) => !Commons.isUndefined(target));
		expect(filtered).toEqual(['hoge', 'fuga', 'piyo']);
	});
});

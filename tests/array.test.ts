import '~/extensions/array';
const testCase = ['hoge', 'fuga', 'piyo', 'mage', 'hage'];

describe('🧐 Array#lastItemIs', (): void => {
	test('🙅‍♂️ does not match param', (): void => {
		expect(testCase.lastItemIs('fuga')).toEqual(false);
	});

	test('🙆‍♀️ throw match param', (): void => {
		expect(testCase.lastItemIs('hage')).toEqual(true);
	});
});

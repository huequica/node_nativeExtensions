import '~/extensions/array';
const testCase = ['hoge', 'fuga', 'piyo', 'mage', 'hage'];

describe('🧐 Array#lastItemIs', (): void => {
	test('🙅‍♂️ does not match param', (): void => {
		expect(testCase.lastItemIs('hoge')).toBeFalsy;
	});

	test('🙆‍♀️ throw match param', (): void => {
		expect(testCase.lastItemIs('hage')).toBeTruthy;
	});
});

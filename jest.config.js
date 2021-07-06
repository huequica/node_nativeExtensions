/** @type {import ('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testPathIgnorePatterns: ["<rootDir>/dist/"],
	globals: {

		jest: {
			moduleFileExtensions: ['ts', 'js'],
			transform:{
				'^.+\\.ts$': 'ts-jest'
			},
			globals: {
				'ts-jest': {
					tsconfig: 'tsconfig.json'
				}
			},
			testMatch: [
				'**/tests/**/*.test.ts'
			],
		}
	},
	moduleNameMapper: {
		"^~/(.+)$": "<rootDir>/src/$1"
	},

	reporters: [
		'default',
		[
			'jest-junit',
			{
				suiteName: 'jest tests',
				outputDirectory: '/tmp/test-reports/jest',
				outputName: 'results.xml',
				classNameTemplate: '{classname}-{title}',
				titleTemplate: '{classname}-{title}',
				ancestorSeparator:' >>> '
			}
		]
	]
};

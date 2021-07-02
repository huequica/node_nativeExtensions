/** @type {import ('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
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
	}

};

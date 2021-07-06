export {};

declare global {
	interface Array<T> {
		/** 配列の最後であるかを返す
		 *
		 * @param checkItem 検証したいオブジェクト
		 */
		lastItemIs(checkItem: any): boolean;
	}
}

Array.prototype.lastItemIs = function (checkItem: any): boolean {
	const lastItem = this[this.length - 1];
	return checkItem === lastItem;
};

export {};

declare global {
	interface Array<T> {
		/** Return equality what reciever's last item and param
		 * @param {any} checkItem checking item
		 * @returns {boolean}
		 */
		lastItemIs(checkItem: any): boolean;
	}
}

Array.prototype.lastItemIs = function (checkItem: any): boolean {
	const lastItem = this[this.length - 1];
	return checkItem === lastItem;
};

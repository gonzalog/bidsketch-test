const firstPendingOptionSelector = (options) => options.filter(({ value }) => !value)[0];

export { firstPendingOptionSelector }

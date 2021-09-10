let ctr = 0

export default (req) => ({ count: ++ctr, someValue: req.someValue })
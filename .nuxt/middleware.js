const middleware = {}

middleware['tabs'] = require('@/middleware/tabs.js');
middleware['tabs'] = middleware['tabs'].default || middleware['tabs']

export default middleware

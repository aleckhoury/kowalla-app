const middleware = {}

middleware['activePost'] = require('@/middleware/activePost.js');
middleware['activePost'] = middleware['activePost'].default || middleware['activePost']

export default middleware

const { log, wp } = require('./shared');

(async () => {
  const { data: categories } = await wp.get('categories');

  log(categories);
})();

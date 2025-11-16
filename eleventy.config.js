module.exports = function (eleventyConfig) {

 	eleventyConfig.setInputDirectory("src");
  	eleventyConfig.setOutputDirectory("public");

	eleventyConfig.setIncludesDirectory("includes");

  	eleventyConfig.addPassthroughCopy("src/assets");

	eleventyConfig.setLiquidOptions({
		dynamicPartials: false,
		strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
	});
  
};

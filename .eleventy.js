const sortByDisplayOrder = require("./src/utils/sort-by-display-order.js");

module.exports = (config) => {
    // Set directories to pass through to the dist folder
    config.addPassthroughCopy("./src/images/");

    // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
    config.setUseGitIgnore(false);

    // Returns work items, sorted by display order
    config.addCollection("products", (collection) => {
        return sortByDisplayOrder(
            collection.getFilteredByGlob("./src/products/*.md")
        );
    });

    config.addCollection("featuredProducts", (collection) => {
        return sortByDisplayOrder(
            collection.getFilteredByGlob("./src/products/*.md")
        ).filter((x) => x.data.featured);
    });

    return {
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        htmlTemplateEngine: "njk",

        dir: {
            input: "src",
            output: "dist",
        },
    };
};

const sortByDisplayOrder = require("./src/utils/sort-by-display-order.js");

// Transforms
const htmlMinTransform = require("./src/transforms/html-min-transform.js");

// Create a helpful production flag
const isProduction = process.env.NODE_ENV === "production";

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

    // Only minify HTML if we are in production because it slows builds _right_ down
    if (isProduction) {
        config.addTransform("htmlmin", htmlMinTransform);
    }

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

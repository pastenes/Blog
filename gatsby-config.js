module.exports = {
    siteMetadata: {
        title: `Richard's Web Dev Log`,
        name: `Richard Pastenes`,
        siteUrl: `https://blog.pastenes.dev`,
        description: `Front-end web development, React, GraphQL, Gatsby, JavaScript, JAMstack and a bit of WordPress`,
        hero: {
            heading: `A collection of web-dev related Aha! moments.`,
            maxWidth: 652
        },
        social: [
            {
                name: `twitter`,
                url: `https://twitter.com/RichardPastenes`
            },
            {
                name: `github`,
                url: `https://github.com/RichardPastenes`
            },
            {
                name: `instagram`,
                url: `https://instagram.com/RichardPastenes`
            },
            {
                name: `linkedin`,
                url: `https://www.linkedin.com/in/RichardPastenes/`
            }
        ]
    },
    plugins: [
        {
            resolve: "@narative/gatsby-theme-novela",
            options: {
                contentPosts: "content/posts",
                contentAuthors: "content/authors",
                basePath: "/",
                authorsPage: true,
                sources: {
                    local: true
                    // contentful: true,
                }
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-150980723-1"
            }
        },
        `gatsby-plugin-gatsby-cloud`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Richard's Brain Dump`,
                short_name: `Richard`,
                start_url: `/`,
                background_color: `#111216`,
                theme_color: `#111216`,
                display: `standalone`,
                icon: `src/assets/richard-pastenes-icon-dark.png`
            }
        }
    ]
};

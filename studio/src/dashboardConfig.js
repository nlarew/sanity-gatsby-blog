export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebb18fe95b7c401a1592b9f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1cvm4qp3',
                  apiId: 'f742f2fb-eb43-494b-be8e-bd8e595ed2d2'
                },
                {
                  buildHookId: '5ebb18feb9092401903d2d60',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mbof2hug',
                  apiId: 'e05beb01-3826-4b2c-abf0-7ab593cf0e04'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nlarew/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mbof2hug.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5fdf76cdb88811ccfb84ec39',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-5sy36sd3',
                  apiId: '1ec28654-19d4-4b1f-81dc-1d2f0b7d8b9f'
                },
                {
                  buildHookId: '5fdf76ceb88811c63584ec2e',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-7kj49xum',
                  apiId: '39eb76df-bb07-42da-bfb3-dbf6072a4199'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ahdrage/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-7kj49xum.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

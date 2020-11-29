// type Sidebar = {
//     [sidebarId: string]:
//         | {
//               [sidebarCategory: string]: SidebarItem[]
//           }
//         | SidebarItem[]
// }

// type SidebarItem = SidebarItemDoc | SidebarItemLink | SidebarItemRef | SidebarItemCategory

// type SidebarItemDoc =
//     | string
//     | {
//           type: 'doc'
//           id: string
//       }

// type SidebarItemLink = {
//     type: 'link'
//     label: string
//     href: string
// }

// type SidebarItemRef = {
//     type: 'ref'
//     id: string
// }

// type SidebarItemCategory = {
//     type: 'category'
//     label: string // Sidebar label text.
//     items: SidebarItem[] // Array of sidebar items.
//     collapsed: boolean // Set the category to be collapsed or open by default
// }

// Docusaurus 会根据当前 doc 所在的分类来为本页面渲染 sidebar，例如
//     const sidebar = {
//         docs1: ['example1', 'example2'],
//         docs2: ['example3', 'example4'],
//     }
// 在该配置下，若当前 doc 为 example1，sidebar 会根据 docs1: ['example1','example2'] 渲染
const sidebar = {
    algorithms: {
        Site: ['site/introduction', 'site/contribution'],
        Greedy: ['greedy/index', 'greedy/455', 'greedy/135'],
        'Two Pointers': ['two_pointers/index'],
    },
}

module.exports = sidebar

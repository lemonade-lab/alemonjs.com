---
outline: deep
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'


const svg = {
  gitee:'<svg t="1686494128741" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1439" width="200" height="200"><path d="M511.317333 0A512 512 0 0 0 0 512a512 512 0 0 0 512 512 512 512 0 0 0 512-512A512 512 0 0 0 512 0a512 512 0 0 0-0.682667 0z m259.84 227.541333c13.994667 0 25.301333 11.349333 25.258667 25.301334v63.232a25.344 25.344 0 0 1-25.301333 25.258666H417.152c-41.898667 0-75.861333 33.962667-75.861333 75.861334v240.213333c0 13.952 11.349333 25.258667 25.301333 25.258667h240.213333c41.898667 0 75.861333-33.962667 75.861334-75.861334v-12.629333a25.301333 25.301333 0 0 0-25.258667-25.301333h-177.066667a25.258667 25.258667 0 0 1-25.258666-25.258667v-63.232a25.301333 25.301333 0 0 1 25.301333-25.258667h290.773333c13.952 0 25.301333 11.306667 25.301334 25.258667v145.408a170.666667 170.666667 0 0 1-170.666667 170.666667H252.842667a25.301333 25.301333 0 0 1-25.301334-25.301334V417.194667a189.610667 189.610667 0 0 1 189.653334-189.610667h353.962666z" p-id="1440"></path></svg>'
}


const boss = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/110824794?v=4',
    name: '柠檬冲水',
    title: '总设计师',
    links: [
      { icon: 'github', link: 'https://github.com/ningmengchongshui' },
      { icon: {svg:svg.gitee},
        link: 'https://gitee.com/ningmengchongshui',
        ariaLabel: 'gitee'
      },
    ],
    sponsor:'https://afdian.net/a/alemonjs'
  }
]

const DevelopMembers = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/72970235?v=4',
    name: '空巷一人',
    title: 'JS工程师',
    links: [
         { icon: 'github', link: 'https://github.com/kongxiangyiren' }
    ]
  } ,
  {
    avatar: 'https://avatars.githubusercontent.com/u/43831609?v=4',
    name: '别调P',
    title: 'JS工程师',
    links: [
         { icon: 'github', link: 'https://github.com/bietiaop' }
    ]
  },
   {
    avatar: 'https://avatars.githubusercontent.com/u/99656524?v=4',
    name: '画客koi',
    title: 'C++工程师',
    links: [
      { icon: 'github', link: 'https://github.com/na2co3hk' }
    ]
  },
    {
    avatar: 'https://avatars.githubusercontent.com/u/113035399?v=4',
    name: '一只菜狗',
    title: 'JS工程师',
    links: [
         { icon: 'github', link: 'https://github.com/2210998670' }
    ]
  },
]


const DesigningMembers=[
  {
    avatar: 'https://q1.qlogo.cn/g?b=qq&s=0&nk=2237900172',
    name: '大仙',
    title: 'UI设计师',
    links: [ ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/117161185?v=4',
    name: '冬季巧克力',
    title: 'SHELL工程师',
    links: [
      { icon: 'github', link: 'https://github.com/WinterChocolates' },
      { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/WinterChocolates',
       ariaLabel: 'gitee'
      }
    ]
  }
]


</script>

# 参与成员

<VPTeamPage style="display: grid;">
  <VPTeamPageTitle >
    <template #title>
     快来认识大家吧
    </template>
    <template #lead>
      LEMONADE
    </template>
  </VPTeamPageTitle >
    <VPTeamMembers  style="margin: auto !important;"
     size="medium"
    :members="boss"/>
</VPTeamPage>

## 开发

<VPTeamPage>
  <VPTeamPageSection>
    <template #members>
      <VPTeamMembers size="small" :members="DevelopMembers" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>

## 其他

<VPTeamPage>
  <VPTeamPageSection>
    <template #members>
      <VPTeamMembers size="small" :members="DesigningMembers" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>

## 联系

方式 QQ 1715713638

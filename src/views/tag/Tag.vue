<template>
  <div id="tag" class="columns">
    <div class="column is-three-quarters">
      <el-card class="box-card" shadow="never">
        <div slot="header" class="">
          🔍 检索到 <span class="has-text-info">{{ topics.length }}</span> 篇有关
          <span class="has-text-info">{{ this.$route.params.name }}</span>
          的话题
        </div>

        <div class="text item">
          <article v-for="(item, index) in topics" :key="index" class="media mt-3">
            <div class="media-content">
              <div class="content">
                <el-tooltip class="item" effect="dark" :content="item.title" placement="top">
                  <router-link :to="{ name: 'post-detail',params:{id: item.id } }">
                    {{ item.title }}
                  </router-link>
                </el-tooltip>
              </div>

              <nav class="level has-text-grey is-size-7">
                <div class="level-left">
                  <span>发布于:{{ dayjs(item.createTime).format('YYYY-MM-DD HH:mm:ss') }}</span>

                  <span class="mx-3">浏览:{{ item.view }}</span>

                  <span>评论:{{ item.comments }}</span>
                </div>
              </nav>
            </div>
          </article>
        </div>
      </el-card>
    </div>

    <div class="column">
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
          🤙 关于标签
        </div>
        <div>
          <ul>
            <li class="content">标签由平台用户发布使用</li>
            <li class="content">系统每周会定时清理无用标签</li>
          </ul>
        </div>
      </el-card>
      <el-card shadow="hover">
        <div slot="header">
          🏷 热门标签
        </div>
        <div>
          <ul>
            <li v-for="(tag,index) in tags" :key="index" style="padding: 6px 0">
              <router-link :to="{name:'tag',params:{name:tag.name}}">
                <span v-if="index<9" class="tag">
                  0{{ parseInt(index) + 1 }}
                </span>
                <span v-else class="tag">
                  {{ parseInt(index) + 1 }}
                </span>
                {{ tag.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </el-card>
    </div>
  </div>

</template>

<script>
import { getTopicsByTag } from '@/api/tag'

export default {
  name: 'Tag',
  data() {
    return {
      topics: [],
      tags: [],
      paramMap: {
        name: this.$route.params.name,
        page: 1,
        size: 10
      }
    }
  },
  created() {
    this.fetchList()
  },
  methods: {
    fetchList: function() {
      getTopicsByTag(this.paramMap).then(response => {
        console.log(response)
        this.topics = response.data.topics.records
        this.tags = response.data.hotTags.records
      })
    }
  }
}
</script>

<style scoped>
#tag {
  min-height: 500px;
}
</style>

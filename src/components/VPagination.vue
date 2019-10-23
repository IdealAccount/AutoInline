<template>
  <div class="pagination">
    <div class="pagination__left">
      <button :disabled="current < 1" @click="changePage(-1)">Предыдущая</button>
    </div>
    <!--<ul class="pagination-list">-->
      <!--<li class="pagination-list__item" v-for="(page, i) of pages" :class="{current: $parent.currentPage === i}">-->
        <!--<a href="#!" @click="goToPage(i)" >{{page}}</a>-->
      <!--</li>-->
    <!--</ul>-->
    <div>
      <span>{{current + 1}} из {{totalPages}}</span>
    </div>
    <div class="pagination__right">
      <button :disabled="current + 1 >= totalPages " @click="changePage(1)">Следущая</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      total: {
        type: Number,
        default: 0
      },
      perPage: {
        type: Number,
        default: 5
      },
      current: {
        type: Number,
      },
      pageRange: {
        type: Number,
        default: 3
      }
    },
    computed: {
      // pages() {
      //   let pages = [];
      //   for (let i = this.rangeStart; i <= this.rangeEnd; i++ ) {
      //     pages.push(i)
      //   }
      //   return pages
      // },
      // rangeStart() {
      //   let start = this.$parent.currentPage - this.pageRange;
      //   return (start > 0) ? start : 1
      // },
      // rangeEnd() {
      //   let end = this.$parent.currentPage + this.pageRange
      //   return (end < this.totalPages) ? end : this.totalPages
      // },
      totalPages() {
        return Math.ceil(this.total / this.perPage)
      },
    },
    methods: {
      changePage(direction) {
        if (direction > 0) {
          this.$parent.currentPage++
        }
        if (direction < 0) {
          this.$parent.currentPage--
        }
      },
      // goToPage(pageNum) {
      //   this.$parent.currentPage = pageNum;
      // }
    }

  }
</script>

<style lang="scss">
  .pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 20px auto 0;
    &__left,
    &__right {
      width: 200px;
      height: 40px;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        outline: none;
        transition: .2s;
        background: #f5f5f5;
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 4px;
        &:hover {
          background: darken(#f5f5f5, 10);
          /*border-color: #880E4F;*/
        }
        &:disabled {
          background: rgba(0, 0, 0, .12);
          color: rgba(0, 0, 0, .26);
        }
      }
    }
    &-list {
      display: flex;
      list-style: none;
      align-self: center;
      padding: 0 !important;
      margin: 0 10px;
      &__item {
        border: 1px solid rgba(0,0,0,.12);
        margin-right: 4px;
        width: 30px;
        height: 30px;
        &:last-child {
          margin-right: 0;
        }
        &.current {
          border: 1px solid red;
        }
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          text-decoration: none;
        }
      }
    }
  }
</style>
<template>
  <div class="pagination">
    <div class="pagination__left">
      <button :disabled="stopPrev" @click="changePage(prevPage)">Предыдущая</button>
    </div>
    <ul class="pagination-list">
      <li v-if="hasFirst" class="pagination-list__item">
        <a href="#!" @click="changePage(1)">1</a>
      </li>
      <li v-if="hasFirst" class="pagination-list__ellipsis">...</li>
      <li class="pagination-list__item"
          v-for="(page,i) of pages"
          :class="{current: current === page}"
          :key="page"
      >
        <a href="#!" @click="changePage(page)">{{page}}</a>
      </li>
      <li v-if="hasLast" class="pagination-list__ellipsis">...</li>
      <li v-if="hasLast" class="pagination-list__item">
        <a href="#!" @click="changePage(totalPages)">{{totalPages}}</a>
      </li>
    </ul>
    <div class="pagination__right">
      <button :disabled="stopNext" @click="changePage(nextPage)">Следущая</button>
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
        default: 1,
      },
      pageRange: {
        type: Number,
        default: 2
      }
    },
    computed: {
      pages() {
        let pages = [];
        for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
          pages.push(i)
        }
        return pages
      },
      rangeStart() {
        let start = this.current - this.pageRange;
        return (start > 0) ? start : 1
      },
      rangeEnd() {
        let end = this.current + this.pageRange;
        return (end < this.totalPages) ? end : this.totalPages
      },
      totalPages() {
        return Math.ceil(this.total / this.perPage)
      },
      nextPage() {
        return this.current + 1
      },
      prevPage() {
        return this.current - 1
      },
      stopPrev() {
        return this.current <= 1
      },
      stopNext() {
        return this.current >= this.totalPages
      },
      hasFirst() {
        return this.rangeStart !== 1
      },
      hasLast() {
        return this.rangeEnd < this.totalPages
      }
    },
    methods: {
      changePage(page) {
        this.$emit('changePage', page)
      },
    }
  }
</script>

<style lang="scss">
  .pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
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
        border: 1px solid rgba(0, 0, 0, .12);
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
      &__ellipsis {
        padding: 5px;
        margin-right: 5px;
        align-self: flex-end;
      }
    }
  }

  .pagination-enter-active, .pagination-leave-active {
    transition: all .3s;
  }

  .pagination-enter, .pagination-leave-to {
    opacity: 0;
    transform: translateX(-10em)
  }
</style>
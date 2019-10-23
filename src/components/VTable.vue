<template>
  <div class="v-table">
    <div class="v-table-headers">
      <div class="v-table-col" v-for="item of headers" :key="item.id">
        {{item.text}}
        <v-btn class="v-table-sort ml-2"
               :class="[{sorted: item.sorted}, item.sorted]"
               @click.prevent="sort(item)"
               absolute
               fab
               x-small
        >
          <v-icon dark>mdi-arrow-up</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="v-table-body">
      <div class="v-table-row" v-for="(obj,key) of visibleEmployees" :key="key">
        <div class="v-table-col"
             v-for="(item,key) of obj"
             v-if="item !== obj.id"
             :key="key"
        > {{item}}
        </div>
        <v-crud :key="obj.id" :obj="obj"></v-crud>
      </div>
    </div>
    <v-pagination :perPage="perPage" :current="currentPage" :total="tableData.length"></v-pagination>
  </div>
</template>

<script>
  import VCrud from '../components/VCrud'
  import VPagination from '../components/VPagination'
  export default {
    props: ['filteredEmployees'],
    components: {
      VCrud,
      VPagination
    },
    data() {
      return {
        sorted: false,
        headers: [
          {id: 1, text: 'Имя', type: 'name', sorted: false, counter: 0},
          {id: 2, text: 'Фамилия', type: 'surname', sorted: false, counter: 0},
          {id: 3, text: 'Отчество', type: 'patronymic', sorted: false, counter: 0},
          {id: 4, text: 'Должность', type: 'position', sorted: false, counter: 0},
        ],
        perPage: 5,
        currentPage: 0,
      }
    },
    mounted() {
      console.log(this.visibleEmployees)
    },
    computed: {
      tableData() {
        return this.filteredEmployees.length ?
               this.filteredEmployees.reverse() :
               this.$store.state.employees.reverse()
      },
      visibleEmployees() {
        return this.tableData.slice(this.currentPage * this.perPage, (this.currentPage * this.perPage) + this.perPage)
      },
    },
    methods: {
      sort(head) {
        if (head.counter > 2) head.counter = 0;
        if (this.headers.includes(head)) {
          switch (head.counter) {
            case 0:
              head.sorted = 'ascending'
              break;
            case 1:
              head.sorted = 'descending'
              break;
            case 2:
              head.sorted = false
              break;
          }
        }
        this.headers.forEach(item => {
          if (item.type !== head.type) {
            item.counter = 0;
            item.sorted = false;
          }
        });
        this.$store.dispatch('sortEmployees', head);
        head.counter++;
      },
    }
  }
</script>

<style lang="scss">
  .v-table {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-sort {
      opacity: 0;
      transition: .3s;
      background: rgba(0, 0, 0, .5);
      &.sorted {
        opacity: 1;
        background: #212312;
      }
      &.ascending {
        transform: rotate(0);
      }
      &.descending {
        transform: rotate(180deg);
      }
    }
    &-headers {
      color: #000;
      font-size: 18px;
      font-weight: 800;
      margin-bottom: 20px;
      display: flex;
      .v-table-col {
        position: relative;
        &:hover .v-table-sort {
          opacity: 1;
        }
      }
    }
    &-row {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(0, 0, 0, .2);
      padding: 10px 0;
      &:nth-child(odd) {
        background: rgba(155, 155, 155, .2);
      }
    }
    &-headers,
    &-body {
      width: 100%;
      .v-table-col {
        text-align: center;
        max-width: 25%;
        width: 100%;
        cursor: pointer;
      }
    }
    .v-btn--fab.v-size--x-small {
      width: 24px;
      height: 24px;
    }
  }
</style>
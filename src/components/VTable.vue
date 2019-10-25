<template>
  <div class="v-table">
    <div class="v-table-headers">
      <div class="v-table-col" v-for="item of headers" :key="item.id">
        {{item.text}}
        <v-btn class="v-table-sort ml-2"
               :class="[{sorting: item.sorting}, item.sorting]"
               @click.prevent="changeSortDirection(item)"
               absolute
               fab
               x-small
        >
          <v-icon dark>mdi-arrow-up</v-icon>
        </v-btn>
      </div>
    </div>

    <div class="v-table-body">
      <transition-group name="table-row" mode="out-in">
        <div class="v-table-row"
             v-for="(obj,key) of visibleEmployees"
             :key="key"
        >
          <div class="v-table-col"
               v-for="(item,key) of obj"
               v-if="item !== obj.id"
               :key="key"
          >
            <span v-if="item.date">{{item.date}} {{item.time}}</span>
            <span v-else>{{item}}</span>
          </div>
          <v-crud :key="obj.id" :obj="obj"></v-crud>
        </div>
      </transition-group>
      <transition name="show" mode="out-in">
        <div v-if="!visibleEmployees.length" class="v-table-row justify-center">
          <span>Поиск не дал результатов</span>
        </div>
      </transition>
    </div>
    <v-pagination :perPage="perPage"
                  :current="currentPage"
                  :total="tableData.length"
                  @changePage="changePage"
    ></v-pagination>
  </div>
</template>

<script>
  import VCrud from '../components/VCrud'
  import VPagination from '../components/VPagination'
  import {mapGetters, mapState} from 'vuex'

  export default {
    props: ['filteredEmployees'],
    components: {
      VCrud,
      VPagination
    },
    data() {
      return {
        perPage: 5,
        currentPage: 1,
        header: {}
      }
    },
    computed: {
      ...mapGetters(['employeesList']),
      ...mapState(['headers']),
      tableData() {
        return this.filteredEmployees ? this.filteredEmployees : this.employeesList
      },
      visibleEmployees() {
        return this.tableData.slice((this.currentPage - 1) * this.perPage, ((this.currentPage - 1) * this.perPage) + this.perPage)
      },

    },
    methods: {
      changePage(page) {
        this.currentPage = page
      },
      changeSortDirection(header) {
        let obj = header;
        if (obj.counter > 2) obj.counter = 0;
        if (this.headers.includes(obj)) {
          switch (obj.counter) {
            case 0:
              obj.sorting = 'ascending';
              break;
            case 1:
              obj.sorting = 'descending';
              break;
            case 2:
              obj.sorting = false;
              break;
          }
          obj.counter++;
        }
        this.$store.dispatch('resetSortDirection', obj);
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
      &.sorting {
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
      & .v-btn {
        opacity: 0;

      }
      &:hover .v-btn {
        opacity: .7;
        &:hover {
          opacity: 1;
        }
      }
    }
    &-body {
      height: 225px;
    }
    &-headers,
    &-body {
      width: 100%;
      .v-table-col {
        text-align: center;
        max-width: calc(100% / 5);
        width: 100%;
        cursor: pointer;
      }
    }
    .v-btn--fab.v-size--x-small {
      width: 24px;
      height: 24px;
    }
  }

  .table-row-enter-active, .table-row-leave-active {
    transition: all .3s;
  }

  .table-row-enter, .table-row-leave-to {
    opacity: 0;
    transform: translateX(10px);
  }
</style>
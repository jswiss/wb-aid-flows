<template>
  <div>

  <table v-if="$scopedSlots.child">
    <caption>
      <slot name="caption">&nbsp;</slot>
    </caption>
    <thead>
    <tr>
      <th v-for="key in columns" @click="sortBy(key)" :class="{ active: sortKey == key }">
        {{ key | getDisplayName(displayNames) }}
        <span v-if="colSortable(key)" class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
        </span>
      </th>
    </tr>
    </thead>
    <tbody v-for="(entry, index) in filteredData" @dblclick="toggleChild(index)">
      <tr>
      <td v-for="key in columns">
        <slot :name="key" :entry="entry">
        {{entry[key]}}
        </slot>
      </td>
      </tr>
      <transition :name="childTransitionClass">
        <tr v-if="$scopedSlots.child && childShow[index]">
        <td :colspan="columns.length">
          <slot name="child" :entry="entry"></slot>
        </td>
        </tr>
      </transition>
    </tbody>
    </table>
    <table v-else>
    <caption>
      <slot name="caption">&nbsp;</slot>
    </caption>
    <thead>
      <tr>
      <th v-for="key in columns" @click="sortBy(key)" :class="{ active: sortKey == key }">
        {{ key | getDisplayName(displayNames) }}
        <span v-if="colSortable(key)" class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
        </span>
      </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(entry, index) in filteredData">
      <td v-for="key in columns">
        <slot :name="key" :entry="entry">
        {{entry[key]}}
        </slot>
      </td>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'DataTable',
    props: {
      data: Array,
      columnsToDisplay: {
        type: Array,
        default() {
          return [];
        },
      },
      columnsToSort: {
        type: Array,
        default() {
          return [];
        },
      },
      columnsToNotSort: {
        type: Array,
        default() {
          return [];
        },
      },
      aggregateColumns: {
        type: Boolean,
        default: false,
      },
      displayNames: {
        type: Object,
        default() {
          return {};
        },
      },
      filterKey: {
        type: String,
        default: '',
      },
      childHideable: {
        type: Boolean,
        default: false,
      },
      childInitHide: {
        type: Boolean,
        default: false,
      },
      childTransitionClass: {
        type: String,
        default: '',
      },
    },
    data() {
      const sortOrders = {};
      this.getColumns(this.columnsToDisplay, this.data).forEach(key => sortOrders[key] = 1);

      const childShow = [];
      if (this.childInitHide) {
        this.data.forEach(entry => childShow.push(false));
      } else {
        this.data.forEach(entry => childShow.push(true));
      }

      return {
        sortKey: '',
        sortOrders: sortOrders,
        childShow: childShow,
      };
    },
    computed: {
      filteredData() {
        const sortKey = this.sortKey;
        const filterKey = this.filterKey && this.filterKey.toLowerCase();
        const order = this.sortOrders[sortKey] || 1;
        let data = this.data;
        if (filterKey) {
          data = data.filter((row) => {
            return Object.keys(row).some((key) => {
              return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
            });
          });
        }
        if (sortKey) {
          data = data.slice().sort((a, b) => {
            a = a[sortKey];
            b = b[sortKey];
            return (a === b ? 0 : a > b ? 1 : -1) * order;
          });
        }
        return data;
      },
      columns() {
        return this.getColumns(this.columnsToDisplay, this.data);
      },
    },
    filters: {
      getDisplayName(column, displayNames) {
        if (column in displayNames) {
          return displayNames[column];
        } else {
          return column.charAt(0).toUpperCase() + column.slice(1);
        }
      },
    },
    methods: {
      sortBy(key) {
        if (this.colSortable(key)) {
          if (this.childHideable) {
            this.childShow = this.childShow.map(entry => !this.childInitHide);
          }
          this.sortKey = key;
          this.sortOrders[key] = this.sortOrders[key] * -1;
        }
      },

      getColumns(columns, data) {
        if (columns.length === 0) {
          if (this.aggregateColumns) {
            let allColumns = [];
            data.forEach(entry => allColumns = allColumns.concat(Object.keys(entry)));
            return allColumns.filter((item, pos) => allColumns.indexOf(item) == pos);
          } else {
            return Object.keys(data[0]);
          }
        } else {
          return columns;
        }
      },

      toggleChild(index) {
        if (this.childHideable) {
          this.childShow[index] = !this.childShow[index];
          this.childShow.splice(index, 1, this.childShow[index]);
        }
      },

      colSortable(column) {
        if (this.columnsToNotSort.length > 0) {
          return this.columnsToNotSort.indexOf(column) === -1;
        } else if (this.columnsToSort.length > 0) {
          return this.columnsToSort.indexOf(column) !== -1;
        } else {
          return true;
        }
      },
    },
  }

</script>

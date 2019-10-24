<template>
  <v-form
    ref="form"
    v-model="valid"
    :lazy-validation="lazy"
  >
    <v-text-field
      v-model="employee.name"
      :counter="10"
      :rules="nameRules"
      label="Имя"
      required
      maxlength="12"
      autofocus
      ref="name"
    ></v-text-field>
    <v-text-field
      v-model="employee.surname"
      :counter="10"
      :rules="nameRules"
      label="Фамилия"
      maxlength="12"
      required
    ></v-text-field>
    <v-text-field
      v-model="employee.patronymic"
      :counter="12"
      :rules="nameRules"
      label="Отчество"
      maxlength="12"
      required
    ></v-text-field>
    <v-combobox
      v-model="employee.position"
      :items="items"
      :rules="[v => !!v || 'Выберите должность']"
      label="Должность"
      required
    ></v-combobox>
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4 mt-2"
      @click="someMethod"
    >
      {{ editIsActive ? 'Сохранить' : 'Добавить'}}
    </v-btn>
    <v-btn
      color="error"
      class="mr-4 mt-2"
      @click="cancel"
    >
      Отмена
    </v-btn>
    <v-btn
      color="warning"
      class="mr-4 mt-2"
      @click="reset"
    >
      Сбросить
    </v-btn>
  </v-form>
</template>

<script>
  import {mapGetters, mapState} from 'vuex'

  export default {
    data: () => ({
      valid: true,
      created: {},
      employee: {},
      nameRules: [
        v => !!v || 'Обязательное поле',
        v => (v && v.length <= 12) || 'Заполните поле',
      ],
      items: [
        'Администратор',
        'Менеджер',
        'Сотрудник',
        'Секретарь',
      ],
      lazy: false,
    }),
    mounted() {
      this.getDate();
    },
    computed: {
      ...mapState(['edit']),
      ...mapGetters(['editIsActive']),
    },
    watch: {
      editIsActive(val) {
        if (val) {
          this.employee = {...this.edit.obj}
        }
      }
    },
    methods: {
      getDate() {
        // let months = ["янв", "фев", "мар", "апр",
        //   "мая", "июн", "июл", "авг",
        //   "сен", "окт", "ноя", "дек"];

        let date = new Date();

        let dd = date.getDate();
        if (dd < 10) dd = `0${dd}`;

        let mm = date.getMonth() + 1;
        if (mm < 10) mm = `0${mm}`;

        let yy = date.getFullYear();

        let hh = date.getHours();
        if (hh < 10) hh = `0${hh}`;

        let min = date.getMinutes();
        if (min < 10) min = `0${min}`;
        return this.created = {
          date: `${dd}.${mm}.${yy}`,
          time: `${hh}:${min}`
        }
      },
      someMethod() {
        if (this.$refs.form.validate()) {
          if (!this.editIsActive) {
            this.employee.created = this.created;
            this.$store.dispatch('addEmployee', {...this.employee})
          } else {
            this.$store.dispatch('saveEmployee', {...this.employee})
          }
          this.$refs.form.reset()
        }
      },
      reset() {
        this.$refs.form.reset()
      },
      cancel() {
        this.$store.dispatch('cancelEdit');
        this.reset();
      }
    },
  }
</script>

<style>
  .v-form {
    flex: 0 1 45%;
  }
</style>
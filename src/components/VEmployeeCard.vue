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
  import {mapState, mapGetters} from 'vuex'

  export default {
    data: () => ({
      valid: true,
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
    computed: {
      ...mapState(['edit']),
      ...mapGetters(['editIsActive']),
    },
    watch: {
      editIsActive(val) {
        if (val) {
          console.log(val)
          this.employee = {...this.edit.obj}
        }
      }
    },
    methods: {
      someMethod() {
        if (this.$refs.form.validate()) {
          if (!this.editIsActive) {
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
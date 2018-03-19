export default {
  header: 'Изменить размер',
  headerText: 'Директива `v-resize` может использоваться для вызова определенных функций при изменении размера окна.',
  components: ['v-resize'],
  examples: [{
    default: {
      header: 'По умолчанию',
      desc: 'Измените размер окна и соблюдайте изменение значений',
      uninverted: true
    }
  }],
  options: {
    'modifiers.quiet': '`v-resize.quiet="callback"` **Не будет** автоматически вызывать предоставленный обратный вызов при связывании.',
    'value': '`v-resize="callback"` Функция, вызываемая при изменении размера окна'
  }
}

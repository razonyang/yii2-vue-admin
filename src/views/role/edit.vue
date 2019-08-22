<template>
  <detail :id="id" />
</template>

<script>
import Detail from './components/Detail'

export default {
  name: 'EditForm',
  components: { Detail },
  data: function() {
    name
    return {
      id: this.$route.params.id
    }
  }
}
</script>

